#!/usr/bin/env node

/**
 * Installs Claude Code hooks that forward events to the Agent Dashboard.
 * Modifies ~/.claude/settings.json to add hook entries.
 */

const fs = require("fs");
const path = require("path");
const os = require("os");

const SETTINGS_PATH = path.join(os.homedir(), ".claude", "settings.json");
const HOOK_HANDLER = path.resolve(__dirname, "hook-handler.js").replace(/\\/g, "/");

// New Claude Code hook format: each entry has matcher + hooks array
const HOOK_TYPES = ["PreToolUse", "PostToolUse", "Stop", "SubagentStop", "Notification"];

function makeHookEntry(hookType) {
  return {
    matcher: "*",
    hooks: [
      {
        type: "command",
        command: `node "${HOOK_HANDLER}" ${hookType}`,
      },
    ],
  };
}

function isOurEntry(entry) {
  // Matches old format (entry.command) and new format (entry.hooks[].command)
  if (entry.command && entry.command.includes("hook-handler.js")) return true;
  if (Array.isArray(entry.hooks)) {
    return entry.hooks.some((h) => h.command && h.command.includes("hook-handler.js"));
  }
  return false;
}

function installHooks(silent = false) {
  let settings = {};
  if (fs.existsSync(SETTINGS_PATH)) {
    try {
      const raw = fs.readFileSync(SETTINGS_PATH, "utf8");
      settings = JSON.parse(raw);
    } catch (err) {
      if (!silent) console.error(`Failed to parse ${SETTINGS_PATH}:`, err.message);
      return false;
    }
  }

  if (!settings.hooks) settings.hooks = {};

  let installed = 0;
  let updated = 0;

  for (const hookType of HOOK_TYPES) {
    if (!settings.hooks[hookType]) settings.hooks[hookType] = [];

    const existing = settings.hooks[hookType].findIndex(isOurEntry);
    const entry = makeHookEntry(hookType);

    if (existing >= 0) {
      settings.hooks[hookType][existing] = entry;
      updated++;
    } else {
      settings.hooks[hookType].push(entry);
      installed++;
    }
  }

  const dir = path.dirname(SETTINGS_PATH);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(SETTINGS_PATH, JSON.stringify(settings, null, 2) + "\n", "utf8");

  if (!silent) {
    console.log(`Hook handler: ${HOOK_HANDLER}`);
    console.log(`Settings file: ${SETTINGS_PATH}`);
    console.log(`Installed: ${installed} new, updated: ${updated} existing`);
    console.log("Claude Code hooks configured. Start a new Claude Code session to begin tracking.");
  }

  return true;
}

if (require.main === module) {
  installHooks(false);
}

module.exports = { installHooks };
