import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `I am a Frontend Engineer who is passionate about designing and developing user-friendly web interfaces. Proficiency in React.js, TailwindCSS, CSS, and JavaScript, I have gained experience through personal projects and internship at Rivers State ICT Department. I’m eager to enhance my skills continuously and contribute effectively in a collaborative environment.`;

export const PROJECTS = [
  {
    title: "Registration-Login Portal",
    image: project1,
    description:
      "A simple registration and login portal, where you can register with your data and use your email and password to login to the dashboard",
    technologies: ["HTML", "CSS", "React", "Node.js", "Bootstrap", "MySQL"],
  },
  {
    title: "Company Website",
    image: project2,
    description:
      "An IT company website showcasing about the company and what they do. ",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwild CSS"],
    visitLink: "https://marvelous-egor.vercel.app",
    sourceLink: "https://github.com/marvelchenko/portfolio"
  },
  {
    title: "Expense Tracker",
    image: project4,
    description:
      "The Expense Tracker is a React application that helps users manage their income and expenses",
    technologies: ["Vite", "Context API", "Tailwild CSS"],
    visitLink: "https://marv-expense-tracker.vercel.app/",
    sourceLink: "https://github.com/marvelchenko/expenseTracker"
  },
  {
    title: "Music Player",
    image: project5,
    description:
      "Built a Music Player App with React.js, CSS and Bootstrap to help users play songs, the app is responsive both in mobile and desktop view, you can switch songs from previous to next",
    technologies: ["React", "CSS", "Bootstrap 5"],
    visitLink: "https://music-player-ten-teal.vercel.app/",
    sourceLink: "https://github.com/marvelchenko/music-player"
  },
];


