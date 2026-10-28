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
    id: "Track 1",
    title: "Next-Generation Technologies and Intelligent Connected Systems",
    chairs: ["Dr. Pilli Emmanuel Shubhakar, Professor, MNIT Jaipur"],
    topics: [
      "Internet of Things (IoT), AIoT, and smart infrastructure",
      "Digital twins and cyber-physical systems",
      "Blockchain and distributed ledger technologies",
      "Smart cities and intelligent industrial systems",
      "Autonomous systems, robotics, and human–autonomy collaboration",
      "Quantum and emerging technologies, edge computing, and sustainable intelligent systems",
    ],
  },
  {
    id: "Track 2",
    title: "Artificial Intelligence, Generative AI and Data Science",
    chairs: ["Dr. Sanjeev Sofat, Professor, PEC Chandigarh"],
    topics: [
      "Generative AI, large language models (LLMs), and foundation models",
      "Agentic AI, multi-agent systems, and advanced machine learning",
      "Multimodal AI, computer vision, natural language processing, and speech intelligence",
      "Data analytics, big data, and intelligent knowledge discovery",
      "Edge AI, TinyML, federated learning, and resource-efficient AI",
      "Responsible, explainable, trustworthy, and privacy-aware AI",
    ],
  },
  {
    id: "Track 3",
    title: "Secure Networking, Intelligent Communications and Privacy Technologies",
    chairs: [
      "Dr. Manoj Mishra, Professor, IIT Roorkee",
      "Dr. Aditya Trivedi, Professor, ABV-IIITM Gwalior",
    ],
    topics: [
      "Cybersecurity, AI security, and adversarial robustness",
      "Privacy-preserving technologies and data protection",
      "Zero-trust architectures and cyber resilience",
      "5G/6G, semantic communication, and AI-enabled wireless networks",
      "Post-quantum cryptography and quantum-safe security",
      "Edge, cloud, IoT, V2X, and UAV-assisted communication security",
    ],
  },
  {
    id: "Track 4",
    title: "Autonomous, Multimodal and Real-Time Intelligent Systems",
    chairs: ["Dr. Mahesh Govil, Professor and Director, NIT Sikkim"],
    topics: [
      "Intelligent robotics, autonomous vehicles, and drone intelligence",
      "Multimodal perception, sensor fusion, and context-aware intelligence",
      "Real-time and resource-constrained intelligent systems",
      "AI-enabled cyber-physical systems and digital twin applications",
      "Intelligent automation, industrial systems, and human–AI interaction",
      "Reliable, resilient, and energy-efficient autonomous systems",
    ],
  },
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

