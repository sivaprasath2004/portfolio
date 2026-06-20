const frontend = [
  { name: "HTML", exp: "Experienced" },
  { name: "CSS", exp: "Experienced" },
  { name: "Javascript", exp: "Intermediate" },
  { name: "React JS", exp: "Experienced" },
  { name: "React Native", exp: "Basic" },
  { name: "Electron.js", exp: "Basic" },
];

const backend = [
  { name: "Mongodb", exp: "Basic" },
  { name: "Node JS", exp: "Intermediate" },
  { name: "Express JS", exp: "Intermediate" },
  { name: "Git", exp: "Basic" },
];

/* ─── Image sets ─── */
const imgNexTask = [
  { url: require("./asset/NextTask_Add_New_project.png"), alt: "Add New Project" },
  { url: require("./asset/NextTask_Add_New_task.png"),    alt: "Add New Task" },
  { url: require("./asset/NextTask_Share.png"),           alt: "Share the Project" },
  { url: require("./asset/NextTask_board_view.png"),      alt: "Board View" },
  { url: require("./asset/NextTask_Calendar.png"),        alt: "Calendar View" },
  { url: require("./asset/NextTask_Filters.png"),         alt: "Filters View" },
  { url: require("./asset/NextTask_Project_search.png"),  alt: "Search by Project or Task" },
  { url: require("./asset/NextTask_Settings.png"),        alt: "Settings View" },
  { url: require("./asset/NextTask_backup&Restore.png"),  alt: "Backup & Restore" },
];

const imgLanConnect = [
  { url: require("./asset/LocalBeam_cli_view.png"), alt: "CLI Running" },
  { url: require("./asset/lanConnect_browser_view.png"), alt: "Browser View" },
  { url: require("./asset/LanConnect_kill_process.png"), alt: "List & Kill" },
];

const imgBulkDownloader = [
  { url: require("./asset/npm_package.webp"), alt: "npm Package" },
  { url: require("./asset/bulk_download_usage.png"), alt: "Code Usage" },
];

const project1 = [
  { url: require("./asset/Zodia1.png"), alt: "Home page" },
  { url: require("./asset/Zodia2.png"), alt: "Message page" },
  { url: require("./asset/Zodia3.png"), alt: "Follow page" },
  { url: require("./asset/Zodia4.png"), alt: "Chatting page" },
];
const project2 = [
  { url: require("./asset/IMG_20240405_181030.png"), alt: "Getting started" },
  { url: require("./asset/IMG_20240405_181112.png"), alt: "Login" },
  { url: require("./asset/IMG_20240405_181229.png"), alt: "Send Message" },
  { url: require("./asset/IMG_20240405_181308.png"), alt: "Receive Message" },
];
const project3 = [
  { url: require("./asset/IMG_20240405_174914.png"), alt: "Mobile" },
  { url: require("./asset/IMG_20240405_175005.png"), alt: "Home" },
  { url: require("./asset/IMG_20240405_180030.png"), alt: "Mobiles" },
  { url: require("./asset/IMG_20240405_174820.png"), alt: "Cart" },
];
const project4 = [
  { url: require("./asset/Tic_tac_toe1.png"), alt: "Home page" },
  { url: require("./asset/Tic_tac_toe2.png"), alt: "Room Tag" },
  { url: require("./asset/Tic_tac_toe3.png"), alt: "Board" },
  { url: require("./asset/Tic_tac_toe4.png"), alt: "Chat & Play" },
];
const project5 = [
  { url: require("./asset/IMG_20240405_183406.png"), alt: "QR Code generate" },
  { url: require("./asset/IMG_20240405_183443.png"), alt: "Scan" },
  { url: require("./asset/IMG_20240405_183536.png"), alt: "Scanned" },
  { url: require("./asset/IMG_20240405_183505.png"), alt: "About us" },
];
const project6 = [
  { url: require("./asset/News_App_1.png"), alt: "Home page" },
  { url: require("./asset/News_App_2.png"), alt: "Country Tab" },
  { url: require("./asset/News_App_3.png"), alt: "Category Tab" },
  { url: require("./asset/News_App_4.png"), alt: "News selected Tab" },
];

/* ─── Projects array — 3 new ones first ─── */
const projects = [
  /* ── 1. NexTask ── */
  {
    key: "nextask",
    name: "NexTask",
    tagline: "Free Desktop Task Manager — Electron + React",
    desc: "A modern, fully-featured desktop task management app built with Electron and React. 100% free — no premium tiers, no locked features. Local-first storage with optional MongoDB sync.",
    longDesc: `NexTask is a cross-platform desktop application built with Electron and React (Vite). It provides a complete task management experience with projects, sub-tasks, priority labels, due dates, and reminders — all stored locally on your machine by default.

The app ships with four built-in themes (Dark, Light, Lavender, Slate) and a signature purple accent. Users can optionally add their own MongoDB URI in Settings to sync tasks across devices. A custom storage path can be configured via the Settings → Backups panel (Electron only).

Authentication is handled by a local Express server that runs alongside the Electron app. The frontend and auth server spin up together with a single \`npm run dev\` command using Vite's dev server.`,
    tags: ["Electron.js", "React JS", "Vite", "Node JS", "Express JS", "MongoDB"],
    badge: "Desktop App",
    github: "https://github.com/sivaprasath2004/Nextask",
    stars: 2,
    forks: 0,
    language: "JavaScript",
    languageColor: "#f1e05a",
    lastUpdated: "2025-01",
    images: imgNexTask,
    highlights: [
      "100% free — no premium plans, no locked features",
      "Local-first storage; optional MongoDB sync via your own URI",
      "Four built-in themes: Dark, Light, Lavender, Slate",
      "Projects, sub-tasks, priority, due dates, and reminders",
      "Single-command dev start spins up Vite + auth server + Electron",
    ],
    structure: [
      { type: "dir",  name: "electron",    children: [] },
      { type: "dir",  name: "server",      children: [
          { type: "file", name: "index.js" },
          { type: "file", name: "package.json" },
        ]},
      { type: "dir",  name: "src",         children: [
          { type: "dir",  name: "components", children: [] },
          { type: "dir",  name: "contexts",   children: [] },
          { type: "dir",  name: "pages",      children: [] },
        ]},
      { type: "dir",  name: "public",      children: [] },
      { type: "file", name: "vite.config.js" },
      { type: "file", name: "package.json" },
      { type: "file", name: ".env.example" },
      { type: "file", name: ".gitignore" },
      { type: "file", name: "README.md" },
    ],
    readme: `# NexTask — Free Desktop Task Manager

A modern, free task management desktop application built with Electron and React. No premium plans, no locked features.

## Features
- ✅ 100% Free — no upgrades, no premium tiers
- 🎨 Purple theme — clean purple accent by default
- 💾 Local-first storage — data stored on your machine
- 🔄 Optional MongoDB sync — add your own URI to sync across devices
- 📁 Custom storage path (Electron only)
- 🌗 Theme customization — Light, Dark, Lavender, Slate
- 📋 Task management — Projects, sub-tasks, priority, dates, reminders
- 🔐 Auth — Sign up / sign in via local server

## Setup

### Prerequisites
- Node.js 18+
- MongoDB (optional, for sync)

### Install
\`\`\`bash
npm install
\`\`\`

### Run (Development)
\`\`\`bash
npm run dev
\`\`\`

This starts:
- Vite dev server (frontend) on http://localhost:5173
- Auth server on http://localhost:3001
- Electron app

### Production Build
\`\`\`bash
npm run build
npm run start
\`\`\`

## Tech Stack
| Layer       | Technology            |
|-------------|-----------------------|
| Desktop     | Electron.js           |
| Frontend    | React (Vite)          |
| Backend     | Node.js, Express.js   |
| Database    | MongoDB (optional)    |
| Auth        | Local Express server  |
`,
  },

  /* ── 2. lanConnect ── */
  {
    key: "lanconnect",
    name: "lanConnect",
    tagline: "Final Year Project — LAN File Server CLI Tool",
    desc: "A portable HTTP file server that runs on your local network with optional login support. Compiled into a single .exe using Node.js and pkg — no installation or external dependencies required.",
    longDesc: `lanConnect is my final year college project — a portable command-line LAN file server compiled into a single Windows executable using Node.js and the \`pkg\` bundler.

It allows any user to instantly share a local folder over their LAN with a single command. Optional username/password authentication adds a login screen in the browser. The tool tracks all running server instances, allowing users to list or kill servers by port number.

No Node.js or npm installation is required on the target machine — the \`.exe\` bundles everything. The executable can optionally be compressed with UPX for a smaller file size.`,
    tags: ["Node JS", "Express JS", "pkg", "CLI", "LAN", "HTTP"],
    badge: "Final Year",
    github: "https://github.com/sivaprasath2004/lanconnect",
    stars: 1,
    forks: 0,
    language: "JavaScript",
    languageColor: "#f1e05a",
    lastUpdated: "2025-03",
    images: imgLanConnect,
    highlights: [
      "Single .exe — no Node.js or npm needed on target machine",
      "Serve any local folder over LAN with one command",
      "Optional username/password login via browser",
      "List and kill running servers by port",
      "UPX-compressible for smaller executable size",
    ],
    structure: [
      { type: "dir",  name: "bin",         children: [
          { type: "file", name: "server.js" },
          { type: "file", name: "lanConnect.js" },
        ]},
      { type: "file", name: "package.json" },
      { type: "file", name: ".gitignore" },
      { type: "file", name: "README.md" },
    ],
    readme: `# lanConnect — Portable LAN File Server

A simple, portable HTTP file server for your local network. Compiled to a single \`.exe\`.

## Features
- 📁 Serve local folders over LAN
- 🔒 Optional username/password login
- 🌐 Access from any device on the same network
- 🖥️ Portable \`.exe\` — no Node.js or npm required
- 📊 List and kill running servers by port

## Usage
### Start a server
\`\`\`bash
lanConnect.exe start 8080 admin mypassword
\`\`\`

### List running servers
\`\`\`bash
lanConnect.exe list
\`\`\`

### Kill a server
\`\`\`bash
lanConnect.exe kill 8080
\`\`\`

### Check version
\`\`\`bash
lanConnect.exe --version
\`\`\`

## Build from Source
\`\`\`bash
npm install -g pkg
pkg lanConnect.js --targets node18-win-x64 --output lanConnect.exe
\`\`\`

## Tech Stack
| Layer   | Technology          |
|---------|---------------------|
| Runtime | Node.js             |
| Server  | Express.js          |
| Bundler | pkg                 |
| Minify  | UPX (optional)      |
`,
  },

  /* ── 3. bulk-downloader ── */
  {
    key: "bulk-downloader",
    name: "bulk-downloader",
    tagline: "npm Package — Concurrent File Download Manager",
    desc: "A powerful Node.js utility for managing concurrent file downloads with live progress updates, start/kill/pause/resume support, and optional automatic zipping of the output folder.",
    longDesc: `bulk-downloader is a published npm package that provides a production-ready concurrent file download manager for Node.js applications.

It supports configurable concurrency (1 to 60+ simultaneous downloads), real-time progress events per file and overall, forceful kill of in-progress downloads, pause/resume, and optional automatic zipping of the output folder with post-zip deletion.

The package is cross-platform — it uses PowerShell's \`Invoke-WebRequest\` on Windows and \`curl\` on Linux/macOS. An event-driven API makes it easy to build download pipelines, studio photo batch processors, or any high-volume file download workflow.`,
    tags: ["Node JS", "npm Package", "CLI", "Concurrent", "Streams", "PowerShell", "curl"],
    badge: "npm Package",
    github: "https://github.com/sivaprasath2004/bulk-downloader",
    npm: "https://www.npmjs.com/package/bulk-downloader",
    stars: 3,
    forks: 0,
    language: "JavaScript",
    languageColor: "#f1e05a",
    lastUpdated: "2025-02",
    images: imgBulkDownloader,
    highlights: [
      "Published on npm — install with npm install bulk-downloader",
      "Configurable concurrency from 1 (sequential) to 60+ (aggressive parallel)",
      "Real-time progress events: per-file and overall percentage",
      "Pause, resume, and force-kill in-progress downloads",
      "Optional auto-zip of output folder with post-zip folder deletion",
      "Cross-platform: PowerShell on Windows, curl on Linux/macOS",
    ],
    structure: [
      { type: "dir",  name: "src",          children: [
          { type: "file", name: "DownloadManager.js" },
          { type: "file", name: "downloader.js" },
          { type: "file", name: "zipper.js" },
        ]},
      { type: "file", name: "index.js" },
      { type: "file", name: "package.json" },
      { type: "file", name: ".gitignore" },
      { type: "file", name: "README.md" },
    ],
    readme: `# bulk-downloader

A powerful Node.js utility for managing concurrent file downloads with live progress updates.

## Installation
\`\`\`bash
npm install bulk-downloader
\`\`\`

## Usage
\`\`\`javascript
const { DownloadManager } = require('bulk-downloader');

const manager = new DownloadManager({
  fileList: [
    { downloadURL: 'https://example.com/1.jpg', fileName: '1.jpg' },
    { downloadURL: 'https://example.com/2.jpg', fileName: '2.jpg' }
  ],
  outputFolder: './downloads',
  zipFile: './downloads.zip',
  isDeleteFolder: true,
  concurrency: 5
});

manager.on('progress', (p) => console.log(p));
manager.on('overallProgress', ({ percent }) => console.log(percent));
manager.on('doneDownloads', () => console.log('All done!'));
manager.on('doneZip', (path) => console.log('Zipped to:', path));

manager.start();
\`\`\`

## Features
- ⚡ Concurrent downloads (configurable)
- 📊 Real-time per-file and overall progress events
- ⏸️ Pause / resume / kill support
- 📦 Optional auto-zip after download
- 🪟 Windows (PowerShell) + Linux/macOS (curl)

## Concurrency Guide
| Level | Behavior        | When to Use                    |
|-------|-----------------|--------------------------------|
| 1     | Sequential      | Rate-limited APIs              |
| 2–10  | Moderate        | Regular networks               |
| 15+   | Aggressive      | LAN / high-speed connections   |

## API
| Method              | Description                          |
|---------------------|--------------------------------------|
| \`start()\`           | Begin downloading                    |
| \`pause()\`           | Pause downloads                      |
| \`resume()\`          | Resume paused downloads              |
| \`kill()\`            | Force-stop all active downloads      |
| \`overallProgress()\` | Get combined progress as XX.XX%      |
`,
  },

  /* ── Original 6 projects ── */
  {
    key: "project1",
    name: "Zodia",
    tagline: "Real-time Social Media Platform",
    desc: "A full-stack social platform with JWT authentication, follow system, post feeds, likes, and comments. Real-time bidirectional chat via WebSocket (Socket.io) with 100% message retention in MongoDB.",
    longDesc: `Zodia is a full-featured social networking application. It supports user registration with JWT-based authentication, a dynamic post feed with likes and comments, a follow/unfollow system, and real-time bidirectional messaging powered by Socket.io.

The frontend is built with React.js delivering a seamless SPA experience. The Node.js/Express REST API handles all business logic, while MongoDB stores users, posts, messages, and relationships. Socket.io event streams manage concurrent multi-user interactions without performance degradation.`,
    tags: ["React JS", "Node JS", "Express JS", "MongoDB", "Socket.io", "JWT"],
    badge: "Full Stack",
    github: "https://github.com/sivaprasath2004/social-media-application",
    stars: 2, forks: 1, language: "JavaScript", languageColor: "#f1e05a", lastUpdated: "2024-03",
    images: project1,
    highlights: [
      "JWT-based authentication with secure session management",
      "Real-time bidirectional chat with 100% message retention",
      "Follow/unfollow system with dynamic post feeds",
      "Concurrent multi-user interactions via Socket.io",
    ],
    structure: [
      { type: "dir", name: "client", children: [
          { type: "dir", name: "src", children: [
              { type: "dir", name: "components", children: [] },
              { type: "dir", name: "pages", children: [] },
              { type: "dir", name: "context", children: [] },
              { type: "file", name: "App.js" }, { type: "file", name: "index.js" },
            ]}, { type: "file", name: "package.json" },
        ]},
      { type: "dir", name: "server", children: [
          { type: "dir", name: "routes", children: [] }, { type: "dir", name: "models", children: [] },
          { type: "dir", name: "middleware", children: [] }, { type: "dir", name: "controllers", children: [] },
          { type: "file", name: "index.js" }, { type: "file", name: "package.json" },
        ]},
      { type: "file", name: ".env.example" }, { type: "file", name: ".gitignore" }, { type: "file", name: "README.md" },
    ],
    readme: `# Zodia — Social Media Application\n\nA full-stack social platform built with the MERN stack and Socket.io.\n\n## Features\n- 🔐 JWT Authentication\n- 📰 Post feed with likes & comments\n- 👥 Follow / Unfollow system\n- 💬 Real-time chat via Socket.io\n\n## Tech Stack\n| Layer    | Technology          |\n|----------|---------------------|\n| Frontend | React.js            |\n| Backend  | Node.js, Express.js |\n| Database | MongoDB             |\n| Realtime | Socket.io           |\n| Auth     | JWT                 |\n\n## Getting Started\n\`\`\`bash\ngit clone https://github.com/sivaprasath2004/social-media-application\ncd server && npm install\ncd ../client && npm install && npm start\n\`\`\``,
  },
  {
    key: "project2",
    name: "Announcement Announcer",
    tagline: "College Broadcast Email App",
    desc: "Android application for EASC College enabling faculty to broadcast announcements to all student and staff emails. Achieves 100% delivery within 5–8 seconds via Node Mailer SMTP.",
    longDesc: `Announcement Announcer is a React Native mobile application developed for Erode Arts & Science College. Faculty members can instantly broadcast announcements to all registered student and staff email addresses, achieving 100% delivery within 5–8 seconds via parallel SMTP dispatch.`,
    tags: ["React Native", "Node JS", "Node Mailer", "SMTP"],
    badge: "Mobile",
    github: "https://github.com/sivaprasath2004/announcement-annocer-application-",
    stars: 1, forks: 0, language: "JavaScript", languageColor: "#f1e05a", lastUpdated: "2024-04",
    images: project2,
    highlights: [
      "100% email delivery within 5–8 seconds via parallel SMTP",
      "Faculty login with role-based access control",
      "React Native UI with Android APK build",
      "Environment-variable-secured credential management",
    ],
    structure: [
      { type: "dir", name: "android", children: [] },
      { type: "dir", name: "src", children: [
          { type: "dir", name: "screens", children: [] }, { type: "dir", name: "components", children: [] },
          { type: "dir", name: "navigation", children: [] }, { type: "file", name: "App.js" },
        ]},
      { type: "dir", name: "server", children: [
          { type: "file", name: "index.js" }, { type: "file", name: "mailer.js" }, { type: "file", name: "package.json" },
        ]},
      { type: "file", name: ".env.example" }, { type: "file", name: ".gitignore" },
      { type: "file", name: "package.json" }, { type: "file", name: "README.md" },
    ],
    readme: `# Announcement Announcer\n\nMobile application for college-wide announcement broadcasting.\n\n## Features\n- 📢 Broadcast to all students & staff\n- ⚡ 100% delivery in 5–8 seconds\n- 🔒 Secure faculty-only access\n\n## Tech Stack\n| Layer  | Technology         |\n|--------|--------------------|\n| Mobile | React Native       |\n| Server | Node.js            |\n| Email  | Node Mailer (SMTP) |\n\n## Getting Started\n\`\`\`bash\ngit clone https://github.com/sivaprasath2004/announcement-annocer-application-\ncd server && npm install && node index.js\nnpm install && npx react-native run-android\n\`\`\``,
  },
  {
    key: "project3",
    name: "E-Commerce Platform",
    tagline: "Full-Stack Shopping Application",
    desc: "Full-stack e-commerce app with product listing, cart management, and trial payment gateway. Mobile-first responsive UI with secure transaction workflows.",
    longDesc: `A complete e-commerce web application built with the MERN stack. Users can browse products, add items to a persistent cart, and complete purchases through a trial payment gateway. The React.js frontend delivers a mobile-first experience and the Express.js API handles order creation and payment flow.`,
    tags: ["React JS", "Node JS", "Express JS", "MongoDB"],
    badge: "Full Stack",
    github: "https://github.com/sivaprasath2004/shopping-application",
    stars: 3, forks: 1, language: "JavaScript", languageColor: "#f1e05a", lastUpdated: "2024-03",
    images: project3,
    highlights: [
      "Mobile-first responsive product catalog UI",
      "Persistent cart state with global state management",
      "Trial payment gateway integration",
      "Scalable MongoDB schema for future growth",
    ],
    structure: [
      { type: "dir", name: "frontend", children: [
          { type: "dir", name: "src", children: [
              { type: "dir", name: "components", children: [] }, { type: "dir", name: "pages", children: [] },
              { type: "dir", name: "context", children: [] }, { type: "file", name: "App.js" },
            ]}, { type: "file", name: "package.json" },
        ]},
      { type: "dir", name: "backend", children: [
          { type: "dir", name: "models", children: [] }, { type: "dir", name: "routes", children: [] },
          { type: "file", name: "server.js" }, { type: "file", name: "package.json" },
        ]},
      { type: "file", name: ".gitignore" }, { type: "file", name: "README.md" },
    ],
    readme: `# E-Commerce Platform\n\nFull-stack shopping application with MERN stack.\n\n## Features\n- 🛍️ Product listing with filters\n- 🛒 Cart management\n- 💳 Trial payment gateway\n- 📱 Mobile-first responsive design\n\n## Tech Stack\n| Layer    | Technology          |\n|----------|---------------------|\n| Frontend | React.js            |\n| Backend  | Node.js, Express.js |\n| Database | MongoDB             |\n\n## Getting Started\n\`\`\`bash\ngit clone https://github.com/sivaprasath2004/shopping-application\ncd backend && npm install && node server.js\ncd frontend && npm install && npm start\n\`\`\``,
  },
  {
    key: "project4",
    name: "Tic Tac Toe",
    tagline: "Multiplayer Realtime Game + Chat",
    desc: "Play live matches with friends and engage in real-time chat on this interactive multiplayer web platform powered by Socket.io.",
    longDesc: `A real-time multiplayer Tic Tac Toe game where players create or join rooms and compete live. Built with Node.js and Pug, with Socket.io powering all real-time game state sync and in-game chat.`,
    tags: ["Pug", "JavaScript", "Node JS", "Socket.io", "CSS"],
    badge: "Realtime",
    github: "https://github.com/sivaprasath2004/Tic-Tac-Toe",
    stars: 2, forks: 0, language: "JavaScript", languageColor: "#f1e05a", lastUpdated: "2024-02",
    images: project4,
    highlights: [
      "Live multiplayer with room-based matchmaking",
      "Real-time game state sync via Socket.io",
      "In-game chat alongside the board",
      "Win/draw detection with instant notification",
    ],
    structure: [
      { type: "dir", name: "public", children: [{ type: "dir", name: "css", children: [] }, { type: "dir", name: "js", children: [] }] },
      { type: "dir", name: "views", children: [{ type: "file", name: "index.pug" }, { type: "file", name: "game.pug" }] },
      { type: "file", name: "app.js" }, { type: "file", name: "package.json" }, { type: "file", name: ".gitignore" }, { type: "file", name: "README.md" },
    ],
    readme: `# Tic Tac Toe — Multiplayer Realtime Game\n\n## Features\n- 🎮 Real-time multiplayer via Socket.io\n- 🔑 Room-based matchmaking\n- 💬 In-game chat\n- 🏆 Win / draw detection\n\n## Tech Stack\n| Layer    | Technology |\n|----------|------------|\n| Server   | Node.js    |\n| View     | Pug        |\n| Realtime | Socket.io  |\n\n## Getting Started\n\`\`\`bash\ngit clone https://github.com/sivaprasath2004/Tic-Tac-Toe\nnpm install && node app.js\n\`\`\``,
  },
  {
    key: "project5",
    name: "Code Craft",
    tagline: "QR Code Generator & Scanner App",
    desc: "Generate QR codes from any text or URL and scan existing ones with the device camera in this React Native Android app.",
    longDesc: `Code Craft is a React Native Android application for generating and scanning QR codes. It features a two-tab interface — generate from text/URL and scan via camera — with gallery save and vibration feedback.`,
    tags: ["React Native", "JavaScript", "QR Code", "Android"],
    badge: "Mobile",
    github: "https://github.com/sivaprasath2004/Code-Craft",
    stars: 1, forks: 0, language: "JavaScript", languageColor: "#f1e05a", lastUpdated: "2024-04",
    images: project5,
    highlights: [
      "QR code generation from any text or URL",
      "Camera-based QR code scanner with instant decode",
      "Save generated QR codes to device gallery",
      "Vibration feedback on successful scan",
    ],
    structure: [
      { type: "dir", name: "android", children: [] },
      { type: "dir", name: "src", children: [{ type: "dir", name: "screens", children: [] }, { type: "dir", name: "components", children: [] }, { type: "file", name: "App.js" }] },
      { type: "file", name: "package.json" }, { type: "file", name: ".gitignore" }, { type: "file", name: "README.md" },
    ],
    readme: `# Code Craft — QR Code Generator & Scanner\n\n## Features\n- 📱 Generate QR codes from text or URLs\n- 📷 Scan QR codes with device camera\n- 💾 Save QR codes to gallery\n\n## Getting Started\n\`\`\`bash\ngit clone https://github.com/sivaprasath2004/Code-Craft\nnpm install && npx react-native run-android\n\`\`\``,
  },
  {
    key: "project6",
    name: "News Application",
    tagline: "Country & Category News Explorer",
    desc: "Stay informed with country-specific headlines and category filters using the News API in this clean, card-based React.js web app.",
    longDesc: `A React.js news aggregator powered by the News API. Users browse headlines filtered by country and category (Business, Tech, Sports, Entertainment). Card-based UI with source attribution and direct article links.`,
    tags: ["React JS", "CSS", "News API", "REST API"],
    badge: "Web App",
    github: "https://github.com/sivaprasath2004/News-application",
    stars: 1, forks: 0, language: "JavaScript", languageColor: "#f1e05a", lastUpdated: "2024-01",
    images: project6,
    highlights: [
      "Country-specific headline filtering",
      "Category filters: Business, Tech, Sports, Entertainment",
      "Card-based UI with source & image attribution",
      "Real-time feed update on filter change",
    ],
    structure: [
      { type: "dir", name: "src", children: [
          { type: "dir", name: "components", children: [{ type: "file", name: "NewsCard.js" }, { type: "file", name: "NavBar.js" }, { type: "file", name: "Spinner.js" }] },
          { type: "dir", name: "pages", children: [] },
          { type: "file", name: "App.js" }, { type: "file", name: "index.js" },
        ]},
      { type: "file", name: ".env.example" }, { type: "file", name: "package.json" }, { type: "file", name: ".gitignore" }, { type: "file", name: "README.md" },
    ],
    readme: `# News Application\n\n## Features\n- 🌍 Country-specific headlines\n- 📂 Category filters\n- 🃏 Card-based article preview UI\n\n## Getting Started\n\`\`\`bash\ngit clone https://github.com/sivaprasath2004/News-application\nnpm install && npm start\n\`\`\`\n\n## Environment Variables\n\`\`\`env\nREACT_APP_NEWS_API_KEY=your_key\n\`\`\``,
  },
];

const data = { frontend, backend, project1, project2, project3, project4, project5, project6, projects };
export default data;
