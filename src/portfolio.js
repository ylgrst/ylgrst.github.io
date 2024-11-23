/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import loadingAnimation from "./assets/lottie/loadingAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: loadingAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yasmin Legerstee",
  title: "Hello World! I'm Yasmin",
  subTitle: emoji(
    "After obtaining a PhD in mechanical engineering for the aerospace industry 🚀, I have started a career change to become a developer, all while keeping the curiosity, problem-solving skills and meticulousness I have acquired thanks to my previous scientific researcher career.", 
  ),
  subTitle2: "Python has been in my life for a very long time, and I have since been able to take my programming knowledge to another level: more programming languages, object-oriented programming, versioning, clean-coding, test-driven development, continuous integration and so on. Being a very curious and adaptable person, I strive to learn even more and give my all to your development projects!", 
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ylgrst",
  linkedin: "https://www.linkedin.com/in/yasmin-legerstee-71250413a/",
  gmail: "ylgrst@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CURIOUS DEVELOPER WHO WANTS TO EXPLORE THE TECH WORLD",
  skills: [
    emoji(
      "⚡ Develop clean, maintainable, collaborative software"
    ),
    emoji("⚡ Proactively research and learn new coding skills, practices and tech stacks"),
    emoji(
      "⚡ Quick learner, curious, meticulous, problem-solver, team-player"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "c/c++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fas fa-code-branch"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Windows",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "UNIX",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "CI/CD",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "shell",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "OpenClassrooms",
      logo: require("./assets/images/openClassroomsLogo.png"),
      desc: "Various programming courses",
      descBullets: [
        "Java - Data Science - Machine Learning"
      ]
    },
    {
      schoolName: "Université de Bordeaux, France",
      logo: require("./assets/images/universiteBordeaux.png"),
      subHeader: "PhD in Mechanical Engineering",
      duration: "November 2019 - November 2022",
      desc: "Develop a methodology and model to study and optimize the behavior of short fiber ceramic matrix composites",
      descBullets: [
        "Write a Python software to generate a statistically accurate numerical representation of the material",
        "Use shell to automatize and accurately log multiple computations",
        "Python - Git - GitLab - shell"
      ]
    },
    {
      schoolName: "ISAE-ENSMA",
      logo: require("./assets/images/ensma.png"),
      subHeader: "Masters degree in Mechanical Engineering",
      duration: "September 2016 - September 2019",
      desc: "Specialized in aerospace engineering. Also took courses about simulation, programming, software engineering, on-board systems...",
      descBullets: ["Python - C++ - Ada - Fortran - Object-oriented programming"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Test-driven development",
      progressPercentage: "70%"
    },
    {
      Stack: "CI/CD",
      progressPercentage: "60%"
    },
    {
      Stack: "Software engineering",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Post-doctoral researcher - Software developer",
      company: "Institut de Mécanique et d'Ingénierie",
      companylogo: require("./assets/images/i2mLogo.png"),
      date: "February 2023 – Present",
      desc: "In partnership with Safran Additive Manufacturing Campus, develop and maintain softwares to study and optimize the mechanical behavior of 3d-printed metallic architectured materials",
      descBullets: [
        "Open-source collaborative Python and C++ softwares",
        "Clean-coding, test-driven development, CI/CD, legacy-code, maintenance",
        "Teach material researchers how to use the developped softwares"
      ]
    },
    {
      role: "Simulation engineer - PhD student",
      company: "Safran Ceramics",
      companylogo: require("./assets/images/safranLogo.png"),
      date: "November 2019 – November 2022",
      desc: "In partnership with Laboratoire des Composites Thermostructuraux, develop tools to study and optimize the mechanical behavior of short-fiber ceramic matrix composites",
      descBullets: [
        "Python, shell, Git, GitLab"
      ]
    },
    {
      role: "Simulation engineer intern",
      company: "Laboratoire des Composites Thermostructuraux",
      companylogo: require("./assets/images/lcts2Logo.png"),
      date: "April 2019 – October 2019",
      desc: "In partnership with Safran Ceramics, develop tools to analyse the elastic linear properties of short-fiber ceramic matrix composites",
      descBullets: [
        "Python, shell, Git, GitLab"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME COMPANIES AND TEAMS THAT I HELPED CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/3mahLogo.png"),
      projectName: "3MAH Team - Institut de Mécanique et d'Ingénierie",
      projectDesc: "Develop and maintain Python and C++ materials and structures behavior analysis open-source tools",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/3MAH"
        }
      ]
    },
    {
      image: require("./assets/images/safranFullLogo.png"),
      projectName: "Safran",
      projectDesc: "Python tools to analyse the behavior of ceramic matrix composites",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://safran-group.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle:
    "Achievements, and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "PhD Thesis",
      subtitle:
        "My first contribution to the scientific community",
      image: require("./assets/images/gradHatLogo.png"),
      imageAlt: "Graduation Hat Logo",
      footerLink: [
        {
          name: "Manuscript",
          url: "https://theses.hal.science/tel-03902747"
        }
      ]
    },
    {
      title: "Research paper",
      subtitle:
        "Coming soon! Scientific article presenting my tools and results regarding my postdoctoral research in 3d-printed architectured materials",
      image: require("./assets/images/paperLogo.png"),
      imageAlt: "Research Paper Logo",
      footerLink: [
        {
          name: "Read paper",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a job opportunity? My Inbox is open for recruiters.",
  number: "+33-0000000000",
  email_address: "ylgrst@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
