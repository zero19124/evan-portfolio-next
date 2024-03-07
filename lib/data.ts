import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/we-chat-overview.png";
import rmtdevImg from "@/public/mci-pc.png";
import wordanalyticsImg from "@/public/mic-mobile.png";
import aiPage1 from "@/public/ai-page-1.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const experiencesData = [
  {
    type: "e",
    title: "Guangxi University",
    location: "Guangxi, CN",
    description: "Major in Design (GPA: 3.73/5.00)",
    icon: React.createElement(LuGraduationCap),
    date: " August 2015 – May 2019",
  },
  {
    title: "Front-End Developer",
    location: "Mci-finTech Shenzhen, CN ",
    description: `
     Developed 5 projects (web apps and mobile apps using Vue,Express and React Native) from zero to deployment.
  • Working with 16 frontend developers, 8 product managers, and 4 ui designers to achieve design goals.
  • Integrated popular libary to improve efficiency such as tailwindCss and auto-import-plugins.
  • Delivered, analyzed, and resolved technical issues, and participated in the continuous enhancement of
  established development processes.
  • Contributed to and facilitated architectural discussions that brought out best-of-breed solutions.
    `,
    icon: React.createElement(CgWorkAlt),
    date: " 2021 –  2024",
  },
  {
    title: "Frontend Developer",
    location: "Yibang logistics Shenzhen, CN",
    description: `
    Developed and maintained a web application using Vue and Java supporting a 30% increase in user traffic.
    • Collaborated with the UI/UX team to develop and maintain web user interfaces using Vue.js and Vuex
    • Created applications mobile-first with responsive designs.
    • Worked with the development team to troubleshoot and debug applications.
    
    `,
    icon: React.createElement(FaReact),
    date: "2020 - 2021",
  },
  {
    title: "Full Stack Developer",
    location: "Shimaijie tech Shenzhen, CN",
    description: `
    Developed back-end logic in Java.
    • Designed and developed RESTful web services using Vue.js, Java, Spring Boot, MyBatisPlus and mysql,
    resulting in a 40% increase in API response time.
    • Implemented Docker,Jenkins and Swagger integration, achieving a 30% reduction in time spent for repeated work.  
    `,
    icon: React.createElement(FaReact),
    date: "2019 - 2020",
  },
  {
    title: "Java Developer Intern",
    location: "Aoke tech Nanning, CN",
    description: `
    Developed back-end logic in Java.
    • Maintained and developed RESTful web services using Java, Spring.
    `,
    icon: React.createElement(FaReact),
    date: "2018 - 2019",
  },
] as const;

export const projectsData = [
  {
    title: "Wechat",
    description: `
    A real time chat application. 
    `,
    link: {
      type: "mobile",
      ios: "3",
      android: "3",
      web: "",
    },
    videoUrl: "https://www.bilibili.com/video/BV1kW421A7Fh",
    feats: `
    - Messaging: Send text, voice messages, images, and videos to friends and groups.
    - Moments: Share updates, photos, and videos with your contacts.
    - Voice and Video Calls: Make free voice and video calls to other WeChat users.
    - Wallet: Transfer Balance to friends or use it to pay.
    - WeChat Pay: Send money, make mobile payments, and manage finances.
    - Emoji: Manage Custom Emoji and send to chats.
    - QR Code Scanner: Scan QR codes for payments, adding contacts, and more.
    - Location Sharing: Share your real-time location with friends.
    - Group Chats: Create groups for communication with multiple contacts.
    - People NearBy: To know who is nearby u.`,
    tags: [
      "ReactNative",
      "WebRtc",
      "Socket",
      "Expo",
      "Express",
      "Tailwind",
      "MongoDB",
    ],
    imageUrl: corpcommentImg,
  },
  {
    title: "AI SaaS Platform",
    description: `
    Conversation Code Video and Music generation.
    `,
    link: {
      type: "web",
      ios: "",
      android: "",
      web: "https://next-ai-platform.onrender.com",
    },
    videoUrl: "https://wechat-server-jhc0.onrender.com/files/1709785290072.mov",
    feats: `
    - Stripe monthly subscription
    - Stripe Top up credits
    - Free tier with API limiting
    - RealTime Customer Support
    - Tailwind design animations and effects
    - Full responsiveness
    - Clerk Authentication (Email, Google, 9+ Social Logins)
    - Image Generation Tool (Yiyan AI)
    - Video Generation Tool (Replicate AI)
    - Conversation Generation Tool (Yiyan AI)
    - Music Generation Tool (Replicate AI)
    - Page loading state`,
    tags: ["NextJs", "Prisma", "Clerk", "Tailwind", "Stripe"],
    imageUrl: aiPage1,
  },
  {
    title: "Investment and Development System",
    videoUrl:
      "https://wechat-server-jhc0.onrender.com/files/invest-web-intro.mp4",

    description: "Investment Control System",
    link: {
      type: "web",
      ios: "",
      android: "",
      web: "",
    },
    feats: `
    - customer management
    - investment flow management
    - tasks management
    - preview management
    - cooperation platform
    - management after investing
    - partnership platform
     `,
    tags: ["Vue3", "TypeScript", "Piania", "Tailwind"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Invest Flow App",
    videoUrl:
      "https://wechat-server-jhc0.onrender.com/files/invest-mobile-intro.mp4",
    link: {
      type: "mobile",
      ios: "",
      android: "",
    },
    description: "a simplified version of the web application",
    feats: `
    - customer management
    - investment flow management
    - tasks management
    - preview management
    - cooperation platform
    - management after investing
    - partnership platform
`,
    tags: ["ReactNative", "Recoil", "Tailwind"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "ReactNative",
  "Expo",
  "TSX",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Socket",
  "WebRtc",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "mongoose",
  "Recoil",
  "Express",
  "Vue3",
  "Vite",
  "Java",
  "Android",
  "Kotlin",
  "Docker",
  "Jenkins",
  "Stripe",
  "Swagger",
] as const;
