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

const projects = [
  {
    key: "project1",
    name: "Zodia",
    tagline: "Real-time Social Media Platform",
    desc: "A full-stack social platform with JWT authentication, follow system, post feeds, likes, and comments. Implemented real-time bidirectional chat via WebSocket (Socket.io) with 100% message retention in MongoDB.",
    longDesc: `Zodia is a full-featured social networking application inspired by modern platforms. It supports user registration with JWT-based authentication, a dynamic post feed with likes and comments, a follow/unfollow system, and real-time bidirectional messaging powered by Socket.io.

The frontend is built with React.js and delivers a seamless SPA experience. The Node.js/Express REST API handles all business logic, while MongoDB stores users, posts, messages, and relationships. Socket.io event streams manage concurrent multi-user interactions without performance degradation.`,
    tags: ["React JS", "Node JS", "Express JS", "MongoDB", "Socket.io", "JWT"],
    badge: "Full Stack",
    github: "https://github.com/sivaprasath2004/social-media-application",
    stars: 2,
    forks: 1,
    language: "JavaScript",
    languageColor: "#f1e05a",
    lastUpdated: "2024-03",
    images: project1,
    highlights: [
      "JWT-based authentication with secure session management",
      "Real-time bidirectional chat with 100% message retention",
      "Follow/unfollow system with dynamic post feeds",
      "Concurrent multi-user interactions via Socket.io",
    ],
    structure: [
      { type: "dir",  name: "client",        children: [
          { type: "dir",  name: "src",          children: [
              { type: "dir",  name: "components",  children: [] },
              { type: "dir",  name: "pages",       children: [] },
              { type: "dir",  name: "context",     children: [] },
              { type: "file", name: "App.js" },
              { type: "file", name: "index.js" },
            ]},
          { type: "file", name: "package.json" },
        ]},
      { type: "dir",  name: "server",        children: [
          { type: "dir",  name: "routes",       children: [] },
          { type: "dir",  name: "models",       children: [] },
          { type: "dir",  name: "middleware",   children: [] },
          { type: "dir",  name: "controllers",  children: [] },
          { type: "file", name: "index.js" },
          { type: "file", name: "package.json" },
        ]},
      { type: "file", name: ".env.example" },
      { type: "file", name: ".gitignore" },
      { type: "file", name: "README.md" },
    ],
    readme: `# Zodia — Social Media Application

A full-stack social platform built with the MERN stack and Socket.io.

## Features
- 🔐 JWT Authentication & Authorization
- 📰 Dynamic post feed with likes & comments
- 👥 Follow / Unfollow system
- 💬 Real-time chat via WebSocket (Socket.io)
- 📦 100% message retention in MongoDB

## Tech Stack
| Layer    | Technology                   |
|----------|------------------------------|
| Frontend | React.js, CSS                |
| Backend  | Node.js, Express.js          |
| Database | MongoDB                      |
| Realtime | Socket.io                    |
| Auth     | JWT (JSON Web Tokens)        |

## Getting Started
\`\`\`bash
# Clone the repo
git clone https://github.com/sivaprasath2004/social-media-application

# Install server deps
cd server && npm install

# Install client deps
cd ../client && npm install

# Run both
npm run dev
\`\`\`

## Environment Variables
\`\`\`env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret
PORT=5000
\`\`\`
`,
  },
  {
    key: "project2",
    name: "Announcement Announcer",
    tagline: "College Broadcast Email App",
    desc: "Android application for EASC College enabling faculty to broadcast announcements to all student and staff emails. Achieves 100% delivery within 5–8 seconds via Node Mailer SMTP.",
    longDesc: `Announcement Announcer is a React Native mobile application developed for Erode Arts & Science College. It enables faculty members to instantly broadcast announcements to all registered student and staff email addresses.

The app features a clean login interface for authorized faculty, a compose screen for drafting announcements, and a live delivery report. The Node.js backend handles SMTP dispatch in parallel using Node Mailer, achieving 100% delivery within 5–8 seconds. Credentials are secured via environment variable management.`,
    tags: ["React Native", "Node JS", "Node Mailer", "SMTP"],
    badge: "Mobile",
    github: "https://github.com/sivaprasath2004/announcement-annocer-application-",
    stars: 1,
    forks: 0,
    language: "JavaScript",
    languageColor: "#f1e05a",
    lastUpdated: "2024-04",
    images: project2,
    highlights: [
      "100% email delivery within 5–8 seconds via parallel SMTP",
      "Faculty login with role-based access control",
      "React Native UI with Android APK build",
      "Environment-variable-secured credential management",
    ],
    structure: [
      { type: "dir",  name: "android",       children: [] },
      { type: "dir",  name: "src",           children: [
          { type: "dir",  name: "screens",     children: [] },
          { type: "dir",  name: "components",  children: [] },
          { type: "dir",  name: "navigation",  children: [] },
          { type: "file", name: "App.js" },
        ]},
      { type: "dir",  name: "server",        children: [
          { type: "file", name: "index.js" },
          { type: "file", name: "mailer.js" },
          { type: "file", name: "package.json" },
        ]},
      { type: "file", name: ".env.example" },
      { type: "file", name: ".gitignore" },
      { type: "file", name: "package.json" },
      { type: "file", name: "README.md" },
    ],
    readme: `# Announcement Announcer

Mobile application for college-wide announcement broadcasting.

## Features
- 📢 Broadcast announcements to all students & staff
- ⚡ 100% delivery in 5–8 seconds
- 🔒 Secure faculty-only access
- 📱 React Native Android app

## Tech Stack
| Layer    | Technology         |
|----------|--------------------|
| Mobile   | React Native       |
| Backend  | Node.js            |
| Email    | Node Mailer (SMTP) |

## Getting Started
\`\`\`bash
git clone https://github.com/sivaprasath2004/announcement-annocer-application-
cd announcement-annocer-application-

# Backend
cd server && npm install && node index.js

# Mobile
npm install && npx react-native run-android
\`\`\`

## Environment Variables
\`\`\`env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
PORT=3000
\`\`\`
`,
  },
  {
    key: "project3",
    name: "E-Commerce Platform",
    tagline: "Full-Stack Shopping Application",
    desc: "Full-stack e-commerce app with product listing, cart management, and trial payment gateway. Mobile-first responsive UI with secure transaction workflows and user data handling.",
    longDesc: `A complete e-commerce web application built with the MERN stack. Users can browse products, add items to a persistent cart, and complete purchases through an integrated trial payment gateway.

The React.js frontend delivers a mobile-first responsive experience. Cart state is managed globally across sessions. The Express.js REST API handles order creation, product catalog management, and payment workflow. MongoDB stores the product catalog, user accounts, and order history with a schema designed for scalable growth.`,
    tags: ["React JS", "Node JS", "Express JS", "MongoDB"],
    badge: "Full Stack",
    github: "https://github.com/sivaprasath2004/shopping-application",
    stars: 3,
    forks: 1,
    language: "JavaScript",
    languageColor: "#f1e05a",
    lastUpdated: "2024-03",
    images: project3,
    highlights: [
      "Mobile-first responsive product catalog UI",
      "Persistent cart state with global state management",
      "Trial payment gateway integration",
      "Scalable MongoDB schema — no breaking changes on growth",
    ],
    structure: [
      { type: "dir",  name: "frontend",      children: [
          { type: "dir",  name: "src",          children: [
              { type: "dir",  name: "components",  children: [] },
              { type: "dir",  name: "pages",       children: [] },
              { type: "dir",  name: "context",     children: [] },
              { type: "file", name: "App.js" },
            ]},
          { type: "file", name: "package.json" },
        ]},
      { type: "dir",  name: "backend",       children: [
          { type: "dir",  name: "models",       children: [] },
          { type: "dir",  name: "routes",       children: [] },
          { type: "file", name: "server.js" },
          { type: "file", name: "package.json" },
        ]},
      { type: "file", name: ".gitignore" },
      { type: "file", name: "README.md" },
    ],
    readme: `# E-Commerce Platform

Full-stack shopping application built with MERN stack.

## Features
- 🛍️ Product listing with filters
- 🛒 Cart management with persistence
- 💳 Trial payment gateway
- 📱 Mobile-first responsive design
- 🔐 Secure user authentication

## Tech Stack
| Layer    | Technology          |
|----------|---------------------|
| Frontend | React.js            |
| Backend  | Node.js, Express.js |
| Database | MongoDB             |

## Getting Started
\`\`\`bash
git clone https://github.com/sivaprasath2004/shopping-application

# Backend
cd backend && npm install && node server.js

# Frontend
cd frontend && npm install && npm start
\`\`\`
`,
  },
  {
    key: "project4",
    name: "Tic Tac Toe",
    tagline: "Multiplayer Realtime Game + Chat",
    desc: "Play live matches with friends and engage in real-time chat on this interactive multiplayer web platform powered by Socket.io.",
    longDesc: `A real-time multiplayer Tic Tac Toe game where players can create or join rooms and compete live against each other. Built with Node.js and Pug on the backend, with Socket.io powering all real-time game state synchronization and in-game chat.

Players enter a room code to join a match, see live cursor/move updates instantly, chat during the game, and receive win/draw notifications in real time. The minimal UI keeps focus on gameplay while delivering a smooth, lag-free experience.`,
    tags: ["Pug", "JavaScript", "Node JS", "Socket.io", "CSS"],
    badge: "Realtime",
    github: "https://github.com/sivaprasath2004/Tic-Tac-Toe",
    stars: 2,
    forks: 0,
    language: "JavaScript",
    languageColor: "#f1e05a",
    lastUpdated: "2024-02",
    images: project4,
    highlights: [
      "Live multiplayer with room-based matchmaking",
      "Real-time game state sync via Socket.io",
      "In-game chat alongside the board",
      "Win/draw detection with instant notification",
    ],
    structure: [
      { type: "dir",  name: "public",        children: [
          { type: "dir",  name: "css",          children: [] },
          { type: "dir",  name: "js",           children: [] },
        ]},
      { type: "dir",  name: "views",         children: [
          { type: "file", name: "index.pug" },
          { type: "file", name: "game.pug" },
        ]},
      { type: "file", name: "app.js" },
      { type: "file", name: "package.json" },
      { type: "file", name: ".gitignore" },
      { type: "file", name: "README.md" },
    ],
    readme: `# Tic Tac Toe — Multiplayer Realtime Game

Play Tic Tac Toe with friends in real time, with live chat.

## Features
- 🎮 Real-time multiplayer via Socket.io
- 🔑 Room-based matchmaking
- 💬 In-game chat
- 🏆 Win / draw detection
- ⚡ Zero-lag game state sync

## Tech Stack
| Layer    | Technology   |
|----------|--------------|
| Server   | Node.js      |
| View     | Pug          |
| Realtime | Socket.io    |
| Style    | CSS          |

## Getting Started
\`\`\`bash
git clone https://github.com/sivaprasath2004/Tic-Tac-Toe
cd Tic-Tac-Toe
npm install
node app.js
\`\`\`

Open \`http://localhost:3000\` and share the room code with a friend!
`,
  },
  {
    key: "project5",
    name: "Code Craft",
    tagline: "QR Code Generator & Scanner App",
    desc: "Generate QR codes and explore the art of scanning them in this Android app, adding a touch of modern technology to everyday interactions.",
    longDesc: `Code Craft is a React Native Android application that lets users generate custom QR codes from any text or URL and scan existing QR codes using the device camera.

The app features a clean two-tab interface — one for generation and one for scanning. Generated QR codes can be saved to the gallery. The scanner provides instant decode results with vibration feedback. Designed for everyday utility with a modern, minimal UI.`,
    tags: ["React Native", "JavaScript", "QR Code", "Android"],
    badge: "Mobile",
    github: "https://github.com/sivaprasath2004/Code-Craft",
    stars: 1,
    forks: 0,
    language: "JavaScript",
    languageColor: "#f1e05a",
    lastUpdated: "2024-04",
    images: project5,
    highlights: [
      "QR code generation from any text or URL",
      "Camera-based QR code scanner with instant decode",
      "Save generated QR codes to device gallery",
      "Vibration feedback on successful scan",
    ],
    structure: [
      { type: "dir",  name: "android",       children: [] },
      { type: "dir",  name: "src",           children: [
          { type: "dir",  name: "screens",     children: [] },
          { type: "dir",  name: "components",  children: [] },
          { type: "file", name: "App.js" },
        ]},
      { type: "file", name: "package.json" },
      { type: "file", name: ".gitignore" },
      { type: "file", name: "README.md" },
    ],
    readme: `# Code Craft — QR Code Generator & Scanner

A React Native Android app for generating and scanning QR codes.

## Features
- 📱 Generate QR codes from text or URLs
- 📷 Scan QR codes with device camera
- 💾 Save QR codes to gallery
- ⚡ Instant decode with vibration feedback

## Tech Stack
| Layer    | Technology    |
|----------|---------------|
| Mobile   | React Native  |
| Language | JavaScript    |
| Platform | Android       |

## Getting Started
\`\`\`bash
git clone https://github.com/sivaprasath2004/Code-Craft
cd Code-Craft
npm install
npx react-native run-android
\`\`\`
`,
  },
  {
    key: "project6",
    name: "News Application",
    tagline: "Country & Category News Explorer",
    desc: "Experience the latest headlines at your fingertips. Stay informed with country-specific news and a wide range of category filters.",
    longDesc: `A React.js news aggregator application powered by the News API. Users can browse the latest headlines filtered by country and category — including Business, Technology, Sports, Entertainment, and more.

The app features a clean card-based UI with source attribution, article preview images, and direct links to full articles. Country and category selectors update the feed in real time. Fully responsive and built for speed with optimized API calls.`,
    tags: ["React JS", "CSS", "News API", "REST API"],
    badge: "Web App",
    github: "https://github.com/sivaprasath2004/News-application",
    stars: 1,
    forks: 0,
    language: "JavaScript",
    languageColor: "#f1e05a",
    lastUpdated: "2024-01",
    images: project6,
    highlights: [
      "Country-specific headline filtering",
      "Category filters: Business, Tech, Sports, Entertainment",
      "Card-based UI with source & image attribution",
      "Real-time feed update on filter change",
    ],
    structure: [
      { type: "dir",  name: "src",           children: [
          { type: "dir",  name: "components",  children: [
              { type: "file", name: "NewsCard.js" },
              { type: "file", name: "NavBar.js" },
              { type: "file", name: "Spinner.js" },
            ]},
          { type: "dir",  name: "pages",       children: [] },
          { type: "file", name: "App.js" },
          { type: "file", name: "index.js" },
        ]},
      { type: "file", name: ".env.example" },
      { type: "file", name: "package.json" },
      { type: "file", name: ".gitignore" },
      { type: "file", name: "README.md" },
    ],
    readme: `# News Application

Stay up-to-date with country-specific news and category filters.

## Features
- 🌍 Country-specific headlines
- 📂 Category filters (Business, Tech, Sports, etc.)
- 🃏 Card-based article preview UI
- ⚡ Real-time feed update on filter change

## Tech Stack
| Layer    | Technology   |
|----------|--------------|
| Frontend | React.js     |
| Styling  | CSS          |
| API      | News API     |

## Getting Started
\`\`\`bash
git clone https://github.com/sivaprasath2004/News-application
cd News-application
npm install
npm start
\`\`\`

## Environment Variables
\`\`\`env
REACT_APP_NEWS_API_KEY=your_news_api_key
\`\`\`
`,
  },
];

const data = { frontend, backend, project1, project2, project3, project4, project5, project6, projects };
export default data;
