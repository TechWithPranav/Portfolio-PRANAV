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
    jobit,
    tripguide,

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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      image: carrent,
      source_code_link: "https://github.com/",
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
      image: carrent,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, Tech_stack_UI_UX,Tech_stack_DevOps,Tech_stack_framework,Tech_stack_Lang, experiences, edu, projects };