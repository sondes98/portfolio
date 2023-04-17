// Website related settings
const settings = {
  isSplash: true, // false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sondes's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
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
  nickname: "Interested in learning & knowing more",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1epFTONAa47aiIW_7tiT6C2M8wpavlb1Y/view?usp=share_link",
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
      title: "Software Engineering Student",
      fileName: "Engineer",
      skills: [
        "⚡ Prospective software engineer, I have a strong passion for the vast and dynamic world of the web.",
        "⚡ Eager to dive into web development, explore its boundless potential, and utilize my skills to create innovative and impactful solutions for the web.",
        "⚡ Seeking new challenges and opportunities to further enhance my programming skills."

      ],
      softwareSkills: [
        // {
        //   skillName: "Tensorflow",
        //   fontAwesomeClassname: "logos-tensorflow",
        //   style: {
        //     backgroundColor: "transparent",
        //   },

      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux.",
        "⚡ Creating application backend in Node, Express & Mongo.",
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
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
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
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡initiated to DevOps with a specific roadmap.",
        // "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        // "⚡ Deploying deep learning models on cloud to use on mobile devices",
        // "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        // {
        //   skillName: "GCP",
        //   fontAwesomeClassname: "simple-icons:googlecloud",
        //   style: {
        //     color: "#4285F4",
        //   },
        // },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6",
        //   },
        // },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
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
      title: "Iteam university",
      subtitle: "Software Engineer",
      logo_path: "iteam.png",
      alt_name: "Iteam",
      duration: "2022 - 2025",
      descriptions: [
        "⚡ I have studied basic software engineering subjects.",
        //   "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        //   "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://iteam-univ.tn/",
    },
    {
      title: "ISET Kairouan",
      subtitle: "Senior Technician in electrical engineering",
      logo_path: "iset.png",
      alt_name: "univ tun",
      duration: "2018 - 2020",
      descriptions: [
        "⚡ I have taken varity of courses related to electrical engineering.",
        // "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        // "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "DevOps",
      subtitle: "- Go My Code",
      logo_path: "gmc.png",
      certificate_link: "",
      alt_name: "GMC",
      color_code: "#8C151599",
    },
    {
      title: "FullStack JavaScript",
      subtitle: "- Go My Code",
      logo_path: "gmc.png",
      certificate_link: "",
      alt_name: "GMC",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "intership",
      experiences: [
        {
          title: "METS",
          company: "Cars company",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
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
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
