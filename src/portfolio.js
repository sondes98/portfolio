import React from "react";
// Website related settings
const settings = {
  isSplash: true, // false if you don't want Splash screen.
};

const seo = {
  title: "Sondes's Portfolio",
  description:
    "Aspiring data engineer and AI enthusiast with hands-on experience in machine learning, data analysis, and predictive modeling. Passionate about leveraging data-driven insights to build scalable, impactful solutions in the world of AI and big data.",
  og: {
    title: "Sondes Ahmed Portfolio",
    type: "website",
    url: "http://sondesahmed.com/",
  },
};

//Home Page
const greeting = {
  title: "Sondes Ahmed",
  logo_name: "A.Sondes",
  nickname: "AI and Data Enthusiast",
  subTitle:
    "Aspiring data engineer with a passion for artificial intelligence, machine learning, and predictive analytics. Dedicated to leveraging data-driven insights to create innovative and impactful solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1gJmd9rMwHBn3aoDSg0Bn8UglGrRIO29f/view?usp=drive_link",
  portfolio_repository: "https://github.com/sondes98",
  githubProfile: "https://github.com/sondes98",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/sondes98",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sondes-ahmed-b12830201/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:sondes.ahmed.77@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100009334385101",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link:
      "https://www.instagram.com/sondes_ahmed_/?igshid=ZDdkNTZiNTM%3D&fbclid=IwAR2ix_9sk5G-FSpF7TaM3A6Q3LGXtWTj4Cb_tb5dSQzLvm4G-vbcNpNoFBw",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title:
        "Computer Science Engineering Student Specialized in Big Data & Business Intelligence",
      fileName: "Engineer",
      skills: [
        "⚡ Final year Computer Science engineering student with a specialization in Big Data & Business Intelligence.",
        "⚡ Hands-on experience with machine learning and AI-related academic and personal projects.",
        "⚡ Passionate about data engineering, eager to tackle complex data challenges, and skilled in building scalable data solutions.",
        "⚡ Certified in Microsoft Azure AZ-900 and progressing through the Microsoft Student Ambassador Program, focusing on cloud computing, AI services, and generative AI.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },

        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#150458",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#013243",
          },
        },
        {
          skillName: "PowerBI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C300", // Yellow color for PowerBI
          },
        },
      ],
    },
    {
      title: "Big Data & Business Intelligence",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Proficient in data analysis, predictive modeling, and data mining techniques.",
        "⚡ Developed and deployed machine learning models for business problems such as churn prediction, fraud detection, and anomaly detection.",
        "⚡ Experienced in data extraction, transformation, and loading (ETL) processes using tools like Talend.",
        "⚡ Skilled in working with big data technologies such as Hadoop and Spark for large-scale data processing.",
        "⚡ Proficient in building data pipelines, integrating data sources, and performing data visualizations for business insights.",
      ],
      softwareSkills: [
        {
          skillName: "Talend",
          fontAwesomeClassname: "simple-icons:talend",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Apache Hadoop",
          fontAwesomeClassname: "simple-icons:apachehadoop",
          style: {
            color: "#66CCFF",
          },
        },
        {
          skillName: "Apache Spark",
          fontAwesomeClassname: "simple-icons:apachespark",
          style: {
            color: "#E25A1C",
          },
        },
      ],
    },
    {
      title: "DevOps & Cloud Infrastructure",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Adept at setting up and managing cloud infrastructure on AWS and GCP.",
        "⚡ Experience with Docker and Kubernetes for containerization and orchestration of applications.",
        "⚡ Knowledgeable in deploying deep learning models on cloud platforms to run on mobile devices.",
        "⚡ Skilled in setting up CI/CD pipelines using Jenkins and deploying scalable applications.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#D24939",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Skilled in building responsive front-end applications using React and Redux.",
        "⚡ Proficient in developing backend services using Node.js, Express, and MongoDB.",
        "⚡ Hands-on experience with RESTful API development and integration with front-end services.",
        "⚡ Knowledgeable in version control and code deployment using Git and GitHub.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  // competitiveSites: [
  //   {
  //     siteName: "LeetCode",
  //     iconifyClassname: "simple-icons:leetcode",
  //     style: {
  //       color: "#F79F1B",
  //     },
  //     //   profileLink: "https://leetcode.com/layman_brother/",
  //   },
  // {
  //   siteName: "HackerRank",
  //   iconifyClassname: "simple-icons:hackerrank",
  //   style: {
  //     color: "#2EC866",
  //   },
  //   profileLink: "https://www.hackerrank.com/layman_brother",
  // },
  //],
};

const degrees = {
  degrees: [
    {
      title: "ITEAM University",
      subtitle: "Software Engineer (Final Year)",
      logo_path: "iteam.png",
      alt_name: "Iteam",
      duration: "2022 - 2025",
      descriptions: [
        "⚡ Completed coursework in Object-Oriented Programming (OOP) during the first year.",
        "⚡ Studied Artificial Intelligence, Machine Learning, Cloud Computing, and Business Intelligence.",
        "⚡ Engaged in hands-on projects involving big data technologies and practical business intelligence applications.",
      ],
      website_link: "https://iteam-univ.tn/",
    },
    {
      title: "ISET Kairouan",
      subtitle: "Senior Technician in Electrical Engineering",
      logo_path: "iset.png",
      alt_name: "Iset Kairouan",
      duration: "2018 - 2020",

      descriptions: [
        "⚡ Completed various foundational courses in electrical engineering.",
        "⚡ Engaged in research assistantship with a focus on algorithm development in Graph Machine Learning and Network Science.",
        "⚡ Contributed to multimedia projects, including documentary films and interviews.",
      ],

      website_link: "",
    },
  ],
};

const trainings = {
  trainings: [
    {
      title: "Microsoft Student Ambassador Training",
      subtitle: "Microsoft",
      logo_path: "Microsoft.png",
      certificate_link: "",
      alt_name: "Microsoft",
      color_code: "#6C41A1", // Updated color code for Microsoft
      descriptions: [
        "⚡ Milestone 1: Microsoft Azure Fundamentals: Cloud Concepts.",
        <br />,

        "⚡ Milestone 2: Microsoft Azure Fundamentals: AI Overview.",
        <br />,

        "⚡ Milestone 3: Microsoft for Startups: Build an Early-Stage Startup.",
        <br />,

        "⚡ Milestone 4: Microsoft Azure Fundamentals: Generative AI.",
        <br />,

        "⚡ Milestone 5: Microsoft for Startups: Transform Your Business with AI.",
      ],
    },
    {
      title: "Big Data Hadoop and Spark Developer Training",
      subtitle: "Go My Code",
      logo_path: "simplilearn.png",
      certificate_link: "",
      alt_name: "Go My Code",
      color_code: "#5C7F8C", // Updated color code for Go My Code
      descriptions: [
        "⚡ Gained in-depth expertise in the Hadoop ecosystem, including HDFS, MapReduce, Hive, and HBase.",
        <br />,

        "⚡ Developed hands-on skills in Apache Spark for efficient data processing, real-time streaming, and machine learning.",
      ],
    },
    {
      title: "DevOps Bootcamp",
      subtitle: "Go My Code",
      logo_path: "gmc.png",
      certificate_link: "",
      alt_name: "Go My Code",
      color_code: "#4B9ABF", // Updated color code for Go My Code
      descriptions: [
        "⚡ Acquired hands-on experience in continuous integration and deployment through GitHub, Docker, and Jenkins.",
        <br />,

        "⚡ Strengthened skills in monitoring with Nagios and advanced container orchestration with Kubernetes.",
      ],
    },
    {
      title: "Full Stack JavaScript Bootcamp",
      subtitle: "Go My Code",
      logo_path: "gmc.png",
      certificate_link: "",
      alt_name: "Go My Code",
      color_code: "#6CC24A", // Updated color code for Go My Code
      descriptions: [
        "⚡ Excelled in the MERN stack (MongoDB, Express.js, React, Node.js) for full-stack web development. Engineered comprehensive applications, emphasizing both front-end and back-end technologies.",
      ],
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "Passionate aspiring full stack developer and data engineer, dedicated to crafting seamless user experiences and powerful data-driven solutions. Explore my journey of growth and innovation in web development, AI, and business analytics.",
  header_image_path: "experience.png",
  sections: [
    {
      title: "Internship",
      experiences: [
        {
          title: "Artificial Intelligence Intern",
          company: "CodSoft",
          company_url: "",
          // logo_path: "",
          duration: "08/2024 - 09/2024",
          location: "Remote",
          description:
            "⚡ Contributed to the development of a Tic-Tac-Toe AI game using Python. Focused on implementing AI algorithms, optimizing game logic, and improving user interaction. Gained valuable experience in applying machine learning techniques to real-world projects.",
          color: "#0879bf",
        },
        {
          title: "Data Science & Business Analytics Intern",
          company: "The Sparks Foundation",
          company_url: "",
          // logo_path: "",
          duration: "07/2024 - 08/2024",
          location: "Remote",
          description: [
            "⚡ Conducted comprehensive retail data analysis using Power BI, enhancing sales and profitability insights, while optimizing discount strategies.",
            <br />,
            "⚡ Applied K-Means clustering on the Iris dataset, determined optimal clusters using the Elbow method, and visualized findings with Seaborn.",
            <br />,
            "⚡ Developed a linear regression model to predict student scores based on study hours, visualized using Matplotlib, achieving an accuracy improvement of 10%.",
          ],
          color: "#0879bf",
        },
        {
          title: "Web Developer Intern",
          company: "Formevo",
          company_url: "",
          // logo_path: "",
          duration: "08/2023 - 09/2023",
          location: "Tunis",
          description:
            "⚡ Developed an e-learning application using the MERN stack, integrating front-end (React) and back-end (Node.js, Express, MongoDB) functionalities. Focused on improving the user interface, ensuring smooth data flow, and enhancing the overall performance.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools.",
  avatar_image_path: "setting.png",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "email.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },

  addressSection: {
    title: "Address",
    subtitle: "Tunis, Ariana 2020",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Ariana/@36.8689216,10.1353403,13z/data=!3m1!4b1!4m6!3m5!1s0x12e2cb4e31471bf3:0x65bc5efbce842198!8m2!3d36.8665367!4d10.1647233!16zL20vMGI0Znh0",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  trainings,
  experience,
  projectsHeader,
  contactPageData,
};
