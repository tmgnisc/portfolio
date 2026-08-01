import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Cpu } from "lucide-react";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Java } from "@/components/ui/svgs/java";
import { SpringBoot } from "@/components/ui/svgs/springboot";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { Mysql } from "@/components/ui/svgs/mysql";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Cpanel } from "@/components/ui/svgs/cpanel";
import { GithubMark } from "@/components/ui/svgs/githubMark";
import { Docker } from "@/components/ui/svgs/docker";
import { Aws } from "@/components/ui/svgs/aws";
import { ExpressJs } from "@/components/ui/svgs/expressjs";

type HackathonLink = { title: string; icon: React.ReactNode; href: string };

export const DATA = {
  name: "Nischal Tamang",
  initials: "NT",
  url: "https://nischaltamang.com.np",
  location: "Kathmandu, Nepal",
  locationLink: "https://www.google.com/maps/place/kathmandu",
  description:
    "Founder & CTO • Software Engineer • 11× Hackathon Winner • Hackathon Mentor",
  summary:
    "Building modern software and startups. Founder & CTO at Nirvix Technology, 11-time hackathon winner, and Software Engineer passionate about creating products that matter.",
  seo: {
    title: "Nischal Tamang | Founder & CTO at Nirvix Technology | 11× Hackathon Winner",
    description:
      "Nischal Tamang — Founder & CTO at Nirvix Technology, Full-Stack Developer and 11× Hackathon Winner (won all 11). Building modern software and mentoring hackathon teams in Kathmandu, Nepal.",
    keywords: [
      "Nischal Tamang",
      "Nirvix Technology",
      "Founder Nirvix Technology",
      "11x Hackathon Winner",
      "Full-Stack Developer Nepal",
      "Software Engineer Kathmandu",
      "Technical SEO Specialist",
      "Hackathon Mentor Nepal",
    ],
  },
  avatarUrl: "/me.jpg",
  skills: [
    { name: "Java", icon: Java },
    { name: "Spring Boot", icon: SpringBoot },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Typescript", icon: Typescript },
    { name: "MongoDB", icon: MongoDB },
    { name: "MySQL", icon: Mysql },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "cPanel", icon: Cpanel },
    { name: "GitHub", icon: GithubMark },
    { name: "Docker", icon: Docker },
    { name: "AWS", icon: Aws },
    { name: "Express.js", icon: ExpressJs },
    { name: "IoT and Robotics", icon: Cpu },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "tamangnischal2018@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/tmgnisc",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nischal-tamang-08407b261/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/nschal_tmg/",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:tamangnischal2018@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Nirvix Technology",
      href: "https://www.nirvixtech.com",
      badges: [],
      location: "Kathmandu, Nepal",
      title: "Chief Technology Officer (CTO)",
      logoUrl: "/nirvix.png",
      start: "2025",
      end: "Present",
      description:
        "Leading the architecture and full-stack development for various in-house and client platforms. Mentoring a diverse team including backend and frontend engineers, UI/UX designers, SEO specialists, WordPress experts, and interns. Implementing scalable solutions and modern tech stacks, including MERN/PERN, microservices, serverless architectures, CI/CD pipelines, WebSockets, and cloud deployment.",
    },
    {
      company: "TShaped Marketing",
      href: "https://tshapedmarketing.com",
      badges: [],
      location: "Auckland (Remote)",
      title: "Technical SEO / Full Stack Developer",
      logoUrl: "/tshaped.png",
      start: "October 2024",
      end: "Present",
      description:
        "Leading the development of an in-house SEO analytics and automation platform, including reporting modules, dashboards, and workflow tools. Managing a cross-functional development team based in Nepal, overseeing project delivery, code reviews, and sprints. Executing technical SEO improvements such as performance optimization, site audits, schema implementation, and enhancements to crawl/indexation.",
    },
    {
      company: "Nepal Climate Hub",
      href: "https://nepalclimatehub.org",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/climatehub.svg",
      start: "November 2024",
      end: "Present",
      description:
        "Contributing to the development of climate-focused web applications and data visualization tools using Astro, React, and Hono.js. Reviewing and improving the code quality of junior developers to ensure performance standards and maintainability. Collaborating with a cross-functional team to optimize application performance and fix bugs for environmental data insights.",
    },
    {
      company: "Smart Contents",
      href: "https://smartcontents.co.jp",
      badges: [],
      location: "Tokyo, Japan",
      title: "Frontend Engineer",
      logoUrl: "/smartcontents.png",
      start: "October 2024",
      end: "May 2025",
      description:
        "Developed interactive and responsive frontend interfaces using React, TailwindCSS, and modern JavaScript frameworks. Collaborated with backend teams and designers to implement UI/UX improvements and ensure cross-browser compatibility. Maintained existing projects by refactoring code, debugging, and integrating new features.",
    },
    {
      company: "Ncell",
      href: "https://www.ncell.com.np",
      badges: [],
      location: "Kathmandu, Nepal",
      title: "UX Engineer",
      logoUrl: "/ncell.png",
      start: "January 2024",
      end: "September 2024",
      description:
        "Designed and implemented user-centric interfaces for web and mobile applications to improve engagement. Translated business requirements into intuitive UI/UX solutions alongside product managers and developers. Conducted feedback analysis and usability testing to iterate on designs for better accessibility.",
    },
    {
      company: "Kantipur Management",
      href: "https://kantipurjob.com",
      badges: [],
      location: "Lalitpur, Nepal",
      title: "IT Officer",
      logoUrl: "/kantipur.png",
      start: "December 2021",
      end: "December 2023",
      description:
        "Maintained corporate IT infrastructure and managed DHCP configurations. Provided IT HelpDesk support and troubleshot network and system issues organization-wide. Coordinated IT solutions with cross-functional teams to ensure high security and minimal downtime.",
    },
  ],
  education: [
    {
      school: "Asia e University",
      href: "https://aeu.edu.my",
      degree: "BICT (Hons) Software Engineering",
      logoUrl: "/aeu.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [],
  hackathons: [
    {
      title: "Codebrisk Hackathon Winner",
      dates: "2023",
      location: "Kalinchowk, Nepal",
      image: "/codebrisk.png",
      links: [] as HackathonLink[],
    },
    {
      title: "Udhyam Hackathon Winner",
      dates: "",
      location: "Kathmandu, Nepal",
      image: "/udhyam.png",
      links: [] as HackathonLink[],
    },
    {
      title: "Deerhack 2024 Track Winner",
      dates: "2024",
      location: "Kathmandu, Nepal",
      image: "/deerhack.png",
      links: [] as HackathonLink[],
    },
    {
      title: "Asian Hack 2024 Winner",
      dates: "2024",
      location: "Kathmandu, Nepal",
      image: "/asianhack.png",
      links: [] as HackathonLink[],
    },
    {
      title: "100xNepal Hackathon Winner",
      dates: "",
      location: "Kathmandu, Nepal",
      image: "/100xnepal.png",
      links: [] as HackathonLink[],
    },
    {
      title: "SecurityPal Hackathon 2023 Winner",
      dates: "2023",
      location: "Kathmandu, Nepal",
      image: "/securitypal.png",
      links: [] as HackathonLink[],
    },
  ],
} as const;
