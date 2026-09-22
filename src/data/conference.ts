export const importantDates = [
  { label: "Submission Opens", date: "November 1, 2026" },
  { label: "Paper Submission Deadline", date: "February 10, 2027" },
  { label: "Acceptance Notification Deadline", date: "March 1, 2027" },
  { label: "Conference Registration Starts", date: "March 15, 2027" },
  { label: "Conference Registration Deadline", date: "April 15, 2027" },
  { label: "Camera-Ready Manuscript Deadline", date: "May 1, 2027" },
  { label: "Conference Dates", date: "May 28-29, 2027" },
];

export const tracks = [
  {
    "id": "Track 1",
    "title": "Next-Generation Technology Trends",
    "chairs": [
      "Dr. Pilli Emmanuel Shubhakar, Professor, MNIT Jaipur",
      "Dr. Sanjeev Sofat, Professor, PEC Chandigarh"
    ],
    "topics": [
      "Internet of Things (IoT) and AIoT",
      "Digital Twins and Cyber-Physical Systems",
      "Blockchain and Distributed Ledger Technologies",
      "Smart Cities and Smart Infrastructure",
      "Autonomous Systems and Robotics",
      "Quantum and Emerging Technologies"
    ]
  },
  {
    "id": "Track 2",
    "title": "Artificial Intelligence and Data Science",
    "chairs": [
      "Dr. Mahesh Govil, Professor and Director, NIT Sikkim"
    ],
    "topics": [
      "Generative AI and Large Language Models (LLMs)",
      "Agentic AI and Multi-Agent Systems",
      "Deep Learning and Foundation Models",
      "Multimodal AI and Computer Vision",
      "Data Analytics and Big Data",
      "Responsible, Explainable and Trustworthy AI"
    ]
  },
  {
    "id": "Track 3",
    "title": "Secure Networking and Privacy Technologies",
    "chairs": [
      "Dr. Manoj Mishra, Professor, IIT Roorkee",
      "Dr. Aditya Trivedi, Professor, ABV-IIITM Gwalior"
    ],
    "topics": [
      "Cybersecurity and AI Security",
      "Privacy-Preserving Technologies and Data Protection",
      "Zero-Trust Architecture and Cyber Resilience",
      "5G/6G and Intelligent Communications",
      "Post-Quantum Cryptography and Quantum-Safe Security",
      "Edge, Cloud and IoT Security"
    ]
  }
];

export const earlyBirdFees = [
  { type: "Academician", indian: "\u20B99,000", foreign: "US$ 300" },
  { type: "Industry Person", indian: "\u20B910,000", foreign: "US$ 400" },
  { type: "Student", indian: "\u20B98,000", foreign: "US$ 250" },
  { type: "Attendee", indian: "\u20B95,000", foreign: "US$ 100" },
];

export const normalFees = [
  { type: "Academician", indian: "\u20B910,000", foreign: "US$ 350" },
  { type: "Industry Person", indian: "\u20B911,000", foreign: "US$ 450" },
  { type: "Student", indian: "\u20B99,000", foreign: "US$ 300" },
  { type: "Attendee", indian: "\u20B96,000", foreign: "US$ 150" },
];

export type CommitteeGroup = { title: string; members: string[] };

export const leadership: CommitteeGroup[] = [
  { title: "Patron", members: ["Prof. Binod Kumar Kanaujia - Director, NIT Jalandhar"] },
  { title: "Co-Patron", members: ["Prof. A. L. Sangal - Head, CSE, NIT Jalandhar"] },
  {
    title: "General Chairs",
    members: [
      "Prof. Harsh Verma - CSED, NIT Jalandhar",
      "Dr. Rajneesh Rani - Associate Professor, CSED, NIT Jalandhar",
    ],
  },
  {
    title: "Organizing Chairs",
    members: ["Dr. Amritpal Singh", "Dr. K. P. Sharma"],
  },
  {
    title: "Conference Secretaries",
    members: ["Dr. Muktesh Gupta", "Dr. Himanshu Verma", "Dr. Pranjal Kumar"],
  },
];

export const internationalAdvisory = [
  "Prof. Mukesh Singhal, Chancellor's Professor, University of California at Merced",
  "Prof. P. R. Kumar, Distinguished Professor, Texas A&M University, USA",
  "Prof. Rajkumar Buyya, Distinguished Professor, University of Melbourne, Australia",
  "Prof. Stan Jarzabek, Professor, Bialystok University of Technology, Poland",
  "Prof. Vijay Kumar, Curators' Distinguished Professor, University of Missouri-Kansas City, USA",
  "Prof. Kevin Curran, Professor, Ulster University, Northern Ireland",
  "Prof. M. Yasin Akhtar Raja, Professor, University of North Carolina at Charlotte, USA",
  "Prof. Bharat K. Bhargava, Professor, Purdue University, Indiana",
  "Prof. Jai P. Agrawal, Professor, Purdue University Northwest, USA",
  "Prof. Nasir Ghani, Professor, University of South Florida, USA",
  "Prof. Harpreet Singh, Professor, Wayne State University, USA",
  "Prof. Ki-Hyun Jung, Professor, Kyungil University, Republic of Korea",
  "Dr. Anand Paul, Associate Professor, Kyungpook National University, South Korea",
  "Dr. Pavel Kromer, Associate Professor, VSB-Technical University of Ostrava, Czech Republic",
  "Dr. Pradeep Kumar, Assistant Professor, University of KwaZulu-Natal, South Africa",
  "Dr. Chaman Verma, Assistant Professor, E\u00F6tv\u00F6s Lor\u00E1nd University, Budapest, Hungary",
];

export const nationalAdvisory = [
  "Padma Shri Prof. Deepak B. Phatak, Professor, IIT Bombay",
  "Prof. K. K. Aggarwal, Chairman, NBA",
  "Prof. Manoj Singh Gaur, Director, IIT Jammu",
  "Prof. Pramod Kumar Jain, Director, IIT (BHU) Varanasi",
  "Prof. R. C. Joshi, Former Professor, IIT Roorkee & Chancellor, Graphic Era University",
  "Prof. Amita Dev, Vice Chancellor, IGDTUW Delhi",
  "Prof. Balaraman Ravindran, Professor, IIT Madras",
  "Prof. Somenath Biswas, Professor, IIT Kanpur",
  "Prof. Rajeev Sangal, Professor, IIIT Hyderabad",
  "Prof. Manoj Mishra, Professor, IIT Roorkee",
  "Prof. Rajendra Kumar Sharma, Vice Chancellor, JUIT Solan",
  "Prof. Saroj Kaushik, Former Professor, IIT Delhi",
  "Prof. Y. N. Singh, Professor, IIT Kanpur",
  "Prof. Rajeev Srivastava, Professor & Head CSE, IIT (BHU) Varanasi",
  "Prof. Sanjeev Sofat, Professor, PEC University of Technology, Chandigarh",
  "Prof. Satish Chand, Professor, JNU New Delhi",
  "Prof. Karm Veer Arya, Professor, IIITM Gwalior",
  "Prof. Ashwani Kumar, Professor, NIT Kurukshetra",
  "Prof. Jitender Kumar Chhabra, Professor, NIT Kurukshetra",
  "Prof. Aditya Trivedi, Professor, ABV-IIITM Gwalior",
  "Prof. N. P. Gopalan, Professor, NIT Tiruchirappalli",
  "Prof. Shekhar Verma, Professor, IIIT Allahabad",
  "Prof. Daya Gupta, Professor, DTU New Delhi",
  "Prof. Arvinder Kaur, Professor, GGSIPU Delhi",
  "Prof. Ram Sabhar Yadav, Professor, MNNIT Allahabad",
  "Prof. Deepak Garg, Professor, Bennett University, Delhi",
  "Prof. Devanand, Professor, Central University of Jammu",
  "Prof. B. S. Kaith, Professor, NIT Jalandhar",
  "Prof. Hardeep Singh, Professor, GNDU Amritsar",
  "Prof. O. P. Verma, Professor, DTU New Delhi",
  "Prof. Mayank Dave, Professor, NIT Kurukshetra",
  "Prof. Seema Bawa, Professor, Thapar University, Patiala",
  "Dr. Shailender Kumar, Professor, DTU New Delhi",
  "Dr. Aneesh Krishna, Associate Professor, Curtin University, Australia",
  "Dr. Vivek Kumar Sehgal, Associate Professor, JUIT Solan",
];

export const organisingGroups: CommitteeGroup[] = [
  {
    title: "Publication Committee",
    members: [
      "Dr. K. P. Sharma (Chair)",
      "Dr. Swarnima Singh (Chair)",
      "Dr. Kunwar Pal (Secretary)",
      "Dr. Deepti Kakkar (Secretary)",
      "Dr. Avni Vyas (Secretary)",
    ],
  },
  {
    title: "Publicity and Media Committee",
    members: [
      "Dr. Lalatendu Behera",
      "Dr. Indu Saini",
      "Dr. Mohit Kumar",
      "Dr. Aruna Malik",
      "Dr. Urvashi",
    ],
  },
  {
    title: "Registration and Hospitality Committee",
    members: [
      "Dr. Jagdeep Kaur",
      "Dr. Shefali Arora",
      "Dr. Shveta Mahajan",
      "Mr. Rahul Aggarwal",
      "Dr. Simranjit Singh",
      "Dr. Karan Veer",
    ],
  },
  {
    title: "Finance Committee",
    members: ["Dr. Prashant Kumar", "Dr. N. P. Singh", "Dr. Nisha Chaurasia"],
  },
  {
    title: "Accommodation and Transportation Committee",
    members: [
      "Mr. D. K. Gupta",
      "Dr. Samayveer Singh",
      "Dr. Banalaxmi",
      "Dr. Naveen Gupta",
      "Dr. Manjeet Singh",
      "Dr. Karan Jain",
    ],
  },
  {
    title: "Planetary Committee",
    members: [
      "Dr. Afzal Sikander",
      "Dr. Ravi Verma",
      "Dr. Vijay Kumar",
      "Dr. Kusum Bharti",
      "Dr. Avtar Singh",
      "Dr. Neeraj Kumar",
    ],
  },
  {
    title: "Student Members",
    members: [
      "Mr. Ghanshyam Gupta",
      "Mr. Hemant Singh Pipchanot",
      "Mr. Somesh Sisodia",
      "Mr. Anurag",
      "Mr. Sunandhit Gupta",
    ],
  },
];

