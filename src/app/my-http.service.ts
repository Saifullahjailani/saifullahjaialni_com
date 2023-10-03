import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  constructor(private httpClient: HttpClient) {

  }
  get() {

    // return this.httpClient.get<User>("./assets/user.json")
    return data
  }
}

const data = {
  "name": "Saifullah Jailani",
  "photo": "https://media.licdn.com/dms/image/D4D03AQH4KmUoyUMU_w/profile-displayphoto-shrink_800_800/0/1676752468065?e=1701302400&v=beta&t=EQJwcZfB7ZmF6csnToBgpfNPFBRvyWZmkZ80uDhi934",
  "address": {
    "city": "Sacramento",
    "state": "CA"
  },
  "contacts": {
    "emails": {
      "Gmail": "https://github.com/Saifullahjailani"
    },
    "GitHub": "https://github.com/Saifullahjailani",
    "LinkedIn": "https://www.linkedin.com/in/saifullah-jailani-8840271b6/",
    "Instagram": "https://www.instagram.com/_sjailani_/"
  },
  "summary": "Entry-level software engineer concentrated on the backend and full-stack software development. Proficient in algorithm development and optimization, UI/UX, web development and computer application, software testing, and cryptography.",
  "experience": [
    {
      "name": "KometX",
      "role": "Software Engineer Intern",
      "start": "December 2020",
      "end": "July 2023",
      "bullet_points": [
        "Devised strategies and formulated new algorithms to predict the trends and shifts in the global financial market for portfolio precision and risk tolerance enhancements for the investors.",
        "Utilized Python programming skills to import financial data from Yahoo Finance and Investing.com APIs.",
        "Retrieved and compiled historical data of the US30 index, ensuring accuracy and completeness of data sets.",
        "Prototyped the frontends in Figma and used UI/UX principles to finalize the designs.",
        "Designed and developed user interfaces to display the data sets in a visually appealing manner using BDD.",
        "Created web solutions by developing the front end using React and JavaScript, integrated with Postgres database, and deployed with Heroku, and AWS.",
        "Optimized algorithms developed in Java and Python to enhance their time and space complexities.",
        "Tested fronted and backend solutions using Junit, Selenium, Cucumber, and Pytest. "
      ],
      "skills": [
        "Algorithm",
        "Optimization",
        "Python",
        "Numpy",
        "UI",
        "UX",
        "BDD",
        "Heroku",
        "AWS",
        "Java",
        "JavaScript",
        "HTML",
        "CSS",
        "SpringBoot",
        "Junit",
        "Selenium",
        "Cucumber",
        "Pytest"
      ],
      "company_web": "https://kometx.com/"
    },
    {
      "name": "Volunteer",
      "role": "Python Instructor",
      "start": "March 2022",
      "end": "April 2023",
      "bullet_points": [
        "Developed an online course, covering Fundamentals of Python in Farsi language, and successfully delivered it to 150 students in Afghanistan.",
        "Moreover, created a comprehensive lesson plan, instructional materials, and supplementary resources to enhance the quality of online teaching and learning experience."
      ],
      "skills": [
        "Python"
      ]
    }
  ],
  "education": [
    {
      "university": "University of California, Berkeley",
      "degree": "Bachelor of Science",
      "major": "Electrical Engineering and Computer Science",
      "logo": "/assets/icons/ucb-logo.png",
      "link": "https://www.berkeley.edu/",
      "start": "",
      "end": "December 2022",
      "bullet_points": ["Theory and Algorithms, Computer Security (malware, vulnerabilities, mitigation, and Cryptography), Algorithm Optimization, AI, Machine Learning, Operating Systems, and Databases."
        , "Built a microcontroller-based voice-controlled car scripted in C and applied classification algorithms.",
        "Built a Git version control system clone from scratch using Java.",
        "Implemented process forking, multithreading, scheduling, stack/heap allocation, f1le directories, and f1le resizing of Linux-based operating using C.",
        "Implemented Storage Organizational Structure, Query Optimization, Queuing, ACID-compliant Query Engine with Optimized Query planner and concurrent querying support for a SQL-based database management system.",
        "Developed an AI agent that solves maze games and trains crawlers to walk using Python, and AI principles and algorithms.",
        "Implemented routing and transport layers, addressing (routing, reliable delivery, congestion control, TCP, UDP, IP, DNS, and HTTP) tested on a router simulator using Python.",
        "Created a secure multi-user online file-sharing system using GO and cryptography principles."
      ]
    }
  ],
  "projects": [
    {
      "name": "Portfolio Website",
      "completed": "COMPLETED",
      "completed_by": {
        "year": "2022",
        "month": "September"
      },
      "description": {
        "language": [
          "Type Script",
          "HTML",
          "CSS", "SCSS"
        ],
        "concepts": [
          "UI",
          "UX"
        ],
        "frameworks": ["Angular", "JSON"],
        "api": ["GitHub Pages"],
        "info": "developed a responsive and elegant website that presents information about education, experience, and skills. The website is powered by JSON documents and APIs, allowing it to dynamically render user data."
      }
    },
    {
      "name": "Smart Management System",
      "completed": "COMPLETED",
      "completed_by": {
        "year": "2022",
        "month": "July"
      },
      "description": {
        "language": [
          "Python"
        ],
        "concepts": [
          "UI",
          "UX",
          "Database Transactions"
        ],
        "frameworks": ["PyQt, PostgresSql"],
        "info": "Created a smart sales management system for tracking sales, products, receipts, and generating dynamic PDF receipts."
      }
    },
    {
      "name": "Routing",
      "completed": "COMPLETED",
      "completed_by": {
        "year": "2022",
        "season": "Fall"
      },
      "description": {
        "language": [
          "Python"
        ],
        "concepts": [
          "Transport Layer",
          "Routing Layer"
        ],
        "info": "Implemented routing and transport layers, addressing (routing, reliable delivery, congestion control, TCP, UDP, IP, DNS, and HTTP) tested on a router simulator using Python."
      }
    },
    {
      "name": "Representative Finder",
      "completed": "COMPLETED",
      "completed_by": {
        "year": "2022",
        "season": "Fall"
      },
      "description": {
        "language": [
          "Ruby",
          "Embedded Ruby"
        ],
        "libraries": [
          "device: Oauth2"
        ],
        "frameworks": [
          "Ruby on Rails",
          "Selenium",
          "Cucumber",
          "Heroku"
        ],
        "api": [
          "Google Civics",
          "News"
        ],
        "info": "Built a user-friendly Ruby on Rails website with Google Civic API and a custom API to dynamically list US representatives by location, enabled news attachment and search for representatives, integrated device gem for smooth Gmail/GitHub login, and deployed on Heroku."
      }
    },
    {
      "name": "SQL Clone",
      "completed": "COMPLETED",
      "completed_by": {
        "year": "2022",
        "season": "Fall"
      },
      "description": {
        "language": [
          "Java",
          "SQL"
        ],
        "libraries": [
          "Junit"
        ],
        "concepts": [
          "B+ Trees",
          "Join Algorithms",
          "Query Optimization",
          "Concurrency",
          "Queuing",
          "Multigranularity",
          "Recovery",
          "Checkpoints",
          "Logs",
          "Undo",
          "Redo"
        ],
        "info": "Implemented Storage Organizational Structure, Query Optimization, Queuing, ACID-compliant Query Engine with Optimized Query planner and concurrent querying support for a SQL-based database management system."
      }
    },
    {
      "name": "Smart Maze",
      "completed": "COMPLETED",
      "completed_by": {
        "year": "2022",
        "season": "Summer"
      },
      "description": {
        "language": [
          "Python"
        ],
        "libraries": [
          "numpy",
          "scipy"
        ],
        "concepts": [
          "Single-agent search",
          "Multi-agent search",
          "Heuristics"
        ],
        "info": "Developed an AI agent that solves maze games using Python, AI principles and algorithms."
      }
    },
    {
      "name": "Smart Crawler",
      "completed": "COMPLETED",
      "completed_by": {
        "year": "2022",
        "season": "Summer"
      },
      "description": {
        "language": [
          "Python"
        ],
        "concepts": [
          "Q-learning"
        ],
        "info": "Developed an AI agent that trains crawlers to walk using Python, and AI principles and algorithms."
      }
    },
    {
      "name": "Dog Monitoring App",
      "completed": "COMPLETED",
      "completed_by": {
        "year": "2022",
        "season": "Summer"
      },
      "description": {
        "language": [
          "JavaScript",
          "HTML",
          "CSS"
        ],
        "libraries": [
          "Figma"
        ],
        "frameworks": [
          "React.js",
          "Node.js"
        ],
        "concepts": [
          "UI implementation",
          "UI evaluation",
          "User-centered design", "task analysis",
          "Usability inspection",
          "analysis of the user study data",
          "input models",
          "visual design principles",
          "interface prototyping",
          "implementation methodology"
        ],
        "info": "A dog monitoring app which allows dog owners to keep track of health, grooming, eating, and exercise activities. Further, it enables them to schedule doctor appointments and track medical records and vaccinations. Furtheron, Based on the data it provides suggestions and necessary exercises."
      }
    },
    {
      "name": "Creativity Canvas",
      "completed": "COMPLETED",
      "completed_by": {
        "year": "2022",
        "season": "Summer"
      },
      "description": {
        "language": [
          "JavaScript",
          "HTML",
          "CSS"
        ],
        "libraries": [
          "Figma"
        ],
        "frameworks": [
          "React.js",
          "Node.js"
        ],
        "concepts": [
          "evaluations",
          "task analysis",
          "usability inspection",
          "input models",
          "interface prototyping"
        ],
        "api": [],
        "info": "A creativity canvas application which allows users to draw, save and load vectorized drawings, and play a drawing game."
      }
    },
    {
      "name": "Operating System",
      "completed": "COMPLETED",
      "completed_by": {
        "year": "2022",
        "season": "Spring"
      },
      "description": {
        "language": [
          "C",
          "X86 Assembly"
        ],
        "libraries": [],
        "frameworks": [
          "Valgrind",
          "GDB"
        ],
        "concepts": [
          "Argument Passing",
          "Process Control Syscalls",
          "File Operation Syscalls",
          "Floating Point Operations",
          "Efficient Alarm Clock",
          "Strict Priority Scheduler",
          "User Threads and Concurrency",
          "Buffer Cache",
          "Extensible Files",
          "Subdirectories"
        ],
        "api": [],
        "info": "Using waterfall design and documentation development, developed an operating system using C and x86 in a group of four."
      }
    },
    {
      "name": "End-to-End Encrypted File Sharing System",
      "completed": "COMPLETED",
      "completed_by": {
        "year": "2022",
        "season": "Spring"
      },
      "description": {
        "language": [
          "Glang"
        ],
        "concepts": [
          "Cryptography",
          "Public Key Encryption",
          "Digital Signature",
          "Hashing",
          "HMAC",
          "Symmetric Encryption",
          "Salting"
        ],
        "info": "A Secured file sharing app the applies cryptographic primitives."
      }
    },
    {
      "name": "Mini Processor",
      "completed": "COMPLETED",
      "completed_by": {
        "year": "2021",
        "season": "Fall"
      },
      "description": {
        "language": [
          "C",
          "RISC-V",
          "Python"
        ],
        "libraries": [],
        "frameworks": [],
        "concepts": [
          "ALU",
          "Processor",
          "Data Paths"
        ],
        "api": [],
        "info": "A mini processor Data Path implemented in Logisim which can execute RISC-V code. Moreover, it is powered with Python to test itself for correctness."
      }
    },
    {
      "name": "GitHub CLI Clone",
      "completed": "COMPLETED",
      "completed_by": {
        "year": "2021",
        "season": "Spring"
      },
      "description": {
        "language": [
          "Java"
        ],
        "libraries": [
          "Junit"
        ],
        "concepts": [
          "Data Structures"
        ],
        "info": "GitHub CLI’s clone which provides similar functionalities as GitHub provides for a local repository. It detects fast forward using graph MST, and graph traversals."
      }
    }
  ],
  "skills": [
    "Python",
    "GO",
    "Java",
    "Swift",
    "C",
    "C++",
    "JavaScript",
    "TypeScript",
    "Ruby",
    "RISC-V",
    "MATLAB",
    "R",
    "HTML",
    "CSS",
    "Proficient",
    "JIRA",
    "Git",
    "SQL",
    "SpringBoot",
    "Postgres",
    "React.js",
    "Angular.js",
    "Node.js",
    "JQuery",
    "Rails",
    "Selenium",
    "Cucumber",
    "rSpec",
    "PyQt",
    "NoSQL",
    "Jupyter",
    "VS-Code",
    "IntelliJ",
    "PyCharm",
    "Figma",
    "AWS",
    "Azure",
    "Agile",
    "Methodology",
    "Software Development Life Cycle",
    "Microsoft Office",
    "Adobe Suite."
  ]
}
