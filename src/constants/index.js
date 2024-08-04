import {
    mobile,
    backend,
    creator,
    web,



    java,
    python,
    js,
    C,
    Cpp,
    html,
    css,
    sql,
  
  
    git,
    github,
    ubuntu,
    firebase,
    aws,
    postman,
  
    react, 
    flask,
    nodejs,
    bootstrap,
    tailwind,
  
    figma,
    mui,
  


    Deavnet_solutions,
    ibmskills,
    i2ic,
    


    carrent,
    Mental_health,
    jobit,
    tripguide,
    lost_found,
    college_app,

    viit,
    gpp,
    pmhs,
  


  } from "../assets";
  
  export const navLinks = [
    {
      id:"home",
      title:"Home"
    },
    {
      id: "about",
      title: "About"
    },
    {
      id: "works",
      title: "Projects"
    },
    {
        id:"achievements",
        title:"Achievements"
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
      title: "UI/UX Designer",
      icon: mobile,
    },
    {
      title: "Data Analyst",
      icon: backend,
    },
    {
      title: "Cloud Engineer",
      icon: creator,
    },
  ];
  
  // const technologies = [
  //   {
  //     name: "HTML 5",
  //     icon: html,
  //   },
  //   {
  //     name: "CSS 3",
  //     icon: css,
  //   },
  //   {
  //     name: "JavaScript",
  //     icon: javascript,
  //   },
  //   {
  //     name: "TypeScript",
  //     icon: typescript,
  //   },
  //   {
  //     name: "React JS",
  //     icon: reactjs,
  //   },
  //   {
  //     name: "Redux Toolkit",
  //     icon: redux,
  //   },
  //   {
  //     name: "Tailwind CSS",
  //     icon: tailwind,
  //   },
  //   {
  //     name: "Node JS",
  //     icon: nodejs,
  //   },
  //   {
  //     name: "MongoDB",
  //     icon: mongodb,
  //   },
  //   // {
  //   //   name: "Three JS",
  //   //   icon: threejs,
  //   // },
  //   {
  //     name: "git",
  //     icon: git,
  //   },
  //   {
  //     name: "figma",
  //     icon: figma,
  //   },
  //   {
  //     name: "docker",
  //     icon: docker,
  //   },

  //   {
  //     name: "java",
  //     icon: java,
  //   },
  // ];



 const Tech_stack_Lang = [
{name:"java",icon:java},
{name:"python",icon:python},
{name:"js",icon:js},
{name:"C",icon:C},
{name:"Cpp",icon:Cpp},
{name:"html",icon:html},
{name:"css",icon:css},
{name:"sql",icon:sql},

  ];


  const Tech_stack_framework = [
    {name:"react",icon:react},
    {name:"flask",icon:flask},
    {name:"nodejs",icon:nodejs},
    {name:"bootstrap",icon:bootstrap},
    {name:"tailwind",icon:tailwind},
      ];
  
      const  Tech_stack_DevOps = [
        {name:"git",icon:git},
        {name:"github",icon:github},
        {name:"ubuntu",icon:ubuntu},
        {name:"firebase",icon:firebase},
        {name:"aws",icon:aws},
        {name:"postman",icon:postman},
          ];

          
          const  Tech_stack_UI_UX = [
            {name:"figma",icon:figma},
            {name:"mui",icon:mui},
           
              ];
    



  const experiences = [
    {
      title: "Backend Developer",
      company_name: "Deavnet Solutions",
      icon: Deavnet_solutions,
      iconBg: "#383E56",
      date: "July 2022 - August 2022",
      points: [
        "Developed and implemented various backend modules, enhancing the functionality and performance of existing systems.",
        "Utilized Postman for thorough testing and validation of APIs, ensuring reliability and efficiency in data communication between systems.",
        "Gained exposure to C# and MVC architecture, contributing to the structured development and maintenance of web applications.",
        "Worked with SQL Server, including database connection management and optimization for robust data storage solutions",
        "Collaborated with cross-functional teams to identify and resolve backend issues, improving overall project outcomes and system stability",
      ],
    },
    {
      title: "Data Analytics Micro-Internship",
      company_name: "IBM SkillsBuild",
      icon: ibmskills,
      iconBg: "#E6DEDD",
      date: "Nov 6th 2023 - Nov 20th 2023",
      points: [
        "Learned and applied data cleaning and preprocessing techniques to prepare datasets for analysis.",
        "Explored Power BI and Tableau, using these tools to create interactive and insightful dashboards.",
        "Worked on small projects that involved practical applications of data analytics concepts, showcasing the ability to derive meaningful insights from data.",
      ],
    },
    {
      title: "Tech Member",
      company_name: "I2IC",
      icon: i2ic,
      iconBg: "#383E56",
      date: "Feb 2023 - Present",
      points: [
        "Spearheaded various technical activities and workshops aimed at enhancing student skills and employability.",
        "Successfully coordinated over 10 mock drives and alumni meets, contributing to a 40% increase in student placement success.",
        "Engaged in collaborative projects with alumni and industry experts to provide students with real-world insights and networking opportunities.",
        " Provided mentorship and career guidance to students, helping them navigate their career paths and achieve their professional goals.",
      ],
    },
    
  ];
  




  const edu = [
    {
      info:
        "Vishwakarma Institute of Information Technology",
      name: "B.Tech",
      designation: "CGPA: 8.5 of 10",
      image: viit,},
    {
      info:
        "Government Polytechnic Pune &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp",
      name: "Diploma",
      designation: "Percentage: 92% of 100%",
      image: gpp,
    },
    {
      info:
        "Pius Memorial High School &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp",
      name: "Class X",
      designation: "92% of 100%",
      image: pmhs,
    },
  ];
  
  const projects = [
    {
      name: "MyMental Hero",
      description:
        "MyMental Hero is a mental health platform that uses AI and doctor insights to offer instant DSS. It streamlines operations, boosts user satisfaction through goal tracking and multilingual reports,community support, and reduces workload with optimized appointment management.",
      tags: [
        {
          name: "Flask",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Html",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "BootStrap",
          color: "orange-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "green-text-gradient",
        },
        {
          name: "Git",
          color: "blue-text-gradient",
        },
        {
          name: "Github",
          color: "pink-text-gradient",
        },
        {
          name: "Smtp",
          color: "orange-text-gradient",
        },
      ],
      image: Mental_health,
      source_code_link: "https://github.com/TechWithPranav/MyHealth-Hero-Empowering-Your-Health-Journey-with-Expert-Decision-Support/",
    },
    {
      name: "Lost And Found",
      description:
        "Lost and Found is a platform that ensures secure user authentication and encrypted data, streamlines item reporting and matching to speed up retrieval times, and provides automated email alerts for updates. It also enhances collaboration with authorities to significantly increase the success rate of returned items.",
      tags: [
        {
          name: "Flask",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Html",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "BootStrap",
          color: "orange-text-gradient",
        },
        {
          name: "Git",
          color: "green-text-gradient",
        },
        {
          name: "Github",
          color: "pink-text-gradient",
        },
        {
          name: "Smtp",
          color: "orange-text-gradient",
        },
        {
          name: "MUI",
          color: "green-text-gradient",
        },
      ],
      image: lost_found,
      source_code_link: "https://github.com/TechWithPranav/Lost-Found/", 
    },
    {
      name: "CO:IT",
      description:
        "CO:IT is an app designed to enhance communication among over 800 students and faculty. It features a Notice Board, Notes Section, and Community Chatroom to improve access to announcements and foster collaboration. The app also streamlines communication and promotes cross-year mentorship.",
      tags: [
        {
          name: "Android",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
        {
          name: "MUI",
          color: "blue-text-gradient",
        },
        {
          name: "Git",
          color: "green-text-gradient",
        },
        {
          name: "Github",
          color: "pink-text-gradient",
        },
      ],
      image: college_app,
      source_code_link: "https://github.com/TechWithPranav/Co-IT-Android-App/",
    },
  ];
  
  export { services, Tech_stack_UI_UX,Tech_stack_DevOps,Tech_stack_framework,Tech_stack_Lang, experiences, edu, projects };