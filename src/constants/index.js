import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    java,
    spring,
    snapdeal,
    tecture,
    smartdata,
    selltm,
    erp,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Full Stack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "spring boot",
      icon: spring,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Tecture Bussiness Solution Pvt. Ltd",
      icon: tecture,
      iconBg: "#383E56",
      date: "July 2017 - April 2019",
      points: [
        "Involved in the development of the company's ERP product ‘Elephanto’ that manages the entire trading process of the pharmaceutical industry, my role was to develop frontend in Angular JS and backend in Laravel.",
        "Developed a Software ‘Exam Pi’ (an Exam Portal) which includes all the stages for conducting exams right from setting the paper, assigning the centre and generating the result. This software will be utilised for Govt. Exam Conducting. I was the Team Lead for this project.",
        "Developed an Event Planning software which includes booking of events , registering vendors ,listing a venue and admin panel.This entire software was built using Angular 6 and NodeJS.",
        "Worked on the confidential and security part of examination data.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Smart Data Enterprises Inc.",
      icon: smartdata,
      iconBg: "#E6DEDD",
      date: "May 2019 - Dec 2019",
      points: [
        "Worked on sport Domain software which was USA based Software.It was built in CakePHP.",
        "Integrated bracket module in the sports.",
        "Integrated the skyscanner and Amadeus Api for flight booking using Laravel and Angular",
        "Worked on progressive web Apps.",
      ],
    },
    {
      title: "Software  Developer",
      company_name: "New Frangled Internet Private Limited (SELLTM)",
      icon: selltm,
      iconBg: "#383E56",
      date: "Dec 2019 - May 2021",
      points: [
        "Implementation of coupon, bonus and auto payment and refund module of seller and reseller and home personalisation.",
        "Developed API integrations, implemented seller and admin panels for efficient product inventory management, order processing, and customer support. Integrated Exotel service for seamless communication. Developed analytics reports, data uploading functionality, and a dashboard with lead management system using Angular 6 and Node.js.",
        "Integrate the cleverTap , shipway and shiprocket Api in the system.",
        "Developed the automatic scripts in NodeJS to enhance the payment calculation and push notification.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Snapdeal",
      icon: snapdeal,
      iconBg: "#E6DEDD",
      date: "Aug 2021 - Present",
      points: [
        "Worked as a full stack developer on a seller platform using React JS and Java.",
        "Develop seller based features using Java as backend and React JS as frontend.(Seller Based feature).",
        "Working on Server Driven UI architecture.",
        "Worked on the order processing , Raise Dispute,Feature control functionality.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Elephanto Erp",
      description:
        "This is web based centralized system which will help to capture important vast information, internally & externally, all at one place, producing accurate analytically reports,With a built-in dashboard, a manager can oversee the process in real-time and take the advantage of the opportunities as he sees them and apply appropriate solutions as problems start to arise ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: erp,
      source_code_link: "null",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };