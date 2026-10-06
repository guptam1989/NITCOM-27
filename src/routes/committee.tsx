import { createFileRoute } from "@tanstack/react-router";
import { UserRound } from "lucide-react";
import { useState } from "react";
import { PageLayout, PageHero } from "@/components/site/PageLayout";

type Member = { name: string; role?: string; photo?: string };
type CommitteeGroup = { title: string; members: Member[] };

const committeePhotos: Record<string, string> = {
  "Dr. Ajay K Sharma": "/committee/ajay-k-sharma.jpg",
  "Prof. Binod Kumar Kanaujia": "/committee/binod-kanaujia.jpg",
  "Prof. Anish Kumar Sachdeva": "/committee/anish-sachdeva.jpg",
  "Prof. A. L. Sangal": "/committee/al-sangal.jpg",
  "Prof. Rohit Mehra": "/committee/rohit-mehra.jpg",
  "Mr. D. K. Gupta": "/committee/dk-gupta.jpg",
  "Dr. Vijay Kumar": "/committee/vijay-kumar.jpg",
  "Prof. Harsh Verma": "/committee/harsh-verma.jpg",
  "Dr. Rajneesh Rani": "/committee/rajneesh-rani.jpg",
  "Dr. Amritpal Singh": "/committee/amritpal-singh.jpg",
  "Dr. K. P. Sharma": "/committee/kp-sharma.jpg",
  "Dr. Muktesh Gupta": "/committee/muktesh-gupta.jpg",
  "Dr. Himanshu Verma": "/committee/himanshu-verma.png",
  "Dr. Pranjal Kumar": "/committee/pranjal-kumar.jpg",
  "Dr. Samayveer Singh": "/committee/samayveer-singh.jpg",
  "Dr. Prashant Kumar": "/committee/prashant-kumar.jpg",
  "Dr. Urvashi": "/committee/urvashi.jpg",
  "Dr. Kunwar Pal": "/committee/kunwar-pal.jpg",
  "Dr. Naina Yadav": "/committee/naina-yadav.jpeg",
  "Dr. Prashant Shukla": "/committee/prashant-shukla.jpg",
  "Dr. Swarnima Singh Gautam": "/committee/swarnima-gautam.jpg",
  "Dr. Deepeti Kakar": "/committee/deepti-kakkar.jpg",
  "Dr. Abhishek Narwaria": "/committee/abhishek-narwaria.png",
  "Dr. Aruna Malik": "/committee/aruna-malik.png",
  "Dr. Indu Saini": "/committee/indu-saini.png",
  "Dr. Lalatendu Behera": "/committee/lalatendu-behera.jpg",
  "Dr. Jagdeep Kaur": "/committee/jagdeep-kaur.jpg",
  "Dr. Avani Vyas": "/committee/avani-vyas.jpeg",
  "Dr. Nagendra Pratap Singh": "/committee/nagendra-singh.jpg",
  "Dr. N. P. Singh": "/committee/nagendra-singh.jpg",
  "Dr. Ranjeet Kumar Rout": "/committee/ranjeet-rout.jpeg",
  "Dr. Shefali Arora": "/committee/shefali-arora.jpeg",
  "Dr. Shveta Mahajan": "/committee/shveta-mahajan.jpg",
  "Mr. Rahul Aggarwal": "/committee/rahul-aggarwal.jpeg",
  "Dr. Gopendra": "/committee/gopendra.jpeg",
  "Dr. Madhurima Buragohain": "/committee/madhurima-buragohain.jpg",
  "Dr. Afzal Sikander": "/committee/afzal-sikander.png",
  "Dr. Ravi Verma": "/committee/ravi-verma.jpg",
  "Dr. Kusum Bharti": "/committee/kusum-bharti.jpg",
  "Dr. Avtar Singh": "/committee/avtar-singh.jpg",
  "Dr. Neeraj Kumar": "/committee/neeraj-kumar.jpeg",
  "Dr. Nisha Chaurasia": "/committee/nisha-chaurasia.jpeg",
  "Dr. Puneet Kumar Jain": "/committee/puneet-jain.jpeg",
  "Dr. Armaan Garg": "/committee/armaan-garg.jpg",
  "Dr. Jaspal Kaur Saini": "/committee/jaspal-saini.jpg",
  "Dr. Banalaxmi": "/committee/banalaxmi.jpg",
  "Dr. Naveen Kumar Gupta": "/committee/naveen-gupta.jpeg",
  "Dr. Sumit Kumar": "/committee/sumit-kumar.jpg",
  "Dr. Mohit Kumar": "/committee/mohit-kumar.jpg",
  "Dr. Mahesh Patel": "/committee/mahesh-patel.jpeg",
  "Dr. Rakesh Kumar": "/committee/rakesh-kumar.jpeg",
  "Dr. O. P. Verma": "/committee/op-verma.jpg",
};

const group = (title: string, names: (string | [string, string])[]): CommitteeGroup => ({
  title,
  members: names.map((entry) => {
    const member = typeof entry === "string" ? { name: entry } : { name: entry[0], role: entry[1] };
    const photo = committeePhotos[member.name];
    return photo ? { ...member, photo } : member;
  }),
});

const committeeGroups: CommitteeGroup[] = [
  group("Chief Patron", [["Prof. Binod Kumar Kanaujia", "Director, NIT Jalandhar"]]),
  group("Patron", [
    ["Prof. Anish Kumar Sachdeva", "Registrar, NIT Jalandhar"],
    ["Prof. A. L. Sangal", "Head, CSE, NIT Jalandhar"],
    ["Prof. Rohit Mehra", "Dean R & C, NIT Jalandhar"],
  ]),
  group("Co-Patron", [
    ["Dr. Ajay K Sharma", "Professor (HAG), Former Director, NIT Hamirpur and IIIT Una, Vice Chancellor, IKGPTU"],
    ["Mr. D. K. Gupta", "Head, Computer Center"],
    ["Dr. Vijay Kumar", "HoD, IT"],
  ]),
  group("General Chairs", [
    ["Prof. Harsh Verma", "Professor, CSED, NIT Jalandhar"],
    ["Dr. Rajneesh Rani", "Associate Professor, CSED, NIT Jalandhar"],
  ]),
  group("Organizing Chairs", ["Dr. Amritpal Singh", "Dr. K. P. Sharma", "Dr. Nagendra Pratap Singh"]),
  group("Conference Secretary", ["Dr. Muktesh Gupta", "Dr. Himanshu Verma", "Dr. Pranjal Kumar"]),
  group("Conference Convener", ["Dr. Samayveer Singh", "Dr. Prashant Kumar", "Dr. Urvashi"]),
  group("Publication Chairs", [
    "Dr. Kunwar Pal",
    "Dr. Naina Yadav",
    "Dr. Prashant Shukla",
    "Dr. Swarnima Singh Gautam",
    "Dr. Deepeti Kakar",
    "Dr. Abhishek Narwaria",
  ]),
  group("Publicity and Media Chairs", [
    "Dr. Aruna Malik",
    "Dr. Indu Saini",
    "Dr. Lalatendu Behera",
    "Dr. Jagdeep Kaur",
    "Dr. Avani Vyas",
    "Dr. Mohit Kumar",
  ]),
  group("Registration and Hospitality Chairs", [
    "Dr. Ranjeet Kumar Rout",
    "Dr. Shefali Arora",
    "Dr. Shveta Mahajan",
    "Mr. Rahul Aggarwal",
    "Dr. Gopendra",
    "Dr. Madhurima Buragohain",
    "Dr. Simranjit Singh",
    "Dr. Mahesh Patel",
  ]),
  group("Plenary Chairs", [
    "Dr. Afzal Sikander",
    "Dr. Ravi Verma",
    "Dr. Kusum Bharti",
    "Dr. Avtar Singh",
    "Dr. Neeraj Kumar",
    "Dr. Rakesh Kumar",
  ]),
  group("Finance Committee Chairs", [
    "Dr. Amritpal Singh",
    "Dr. Muktesh Gupta",
    "Dr. Nisha Chaurasia",
    "Dr. N. P. Singh",
  ]),
  group("Accommodation and Transportation Committee Chairs", [
    "Dr. Samayveer Singh",
    "Dr. Puneet Kumar Jain",
    "Dr. Armaan Garg",
    "Dr. Jaspal Kaur Saini",
    "Dr. Banalaxmi",
    "Dr. Naveen Kumar Gupta",
    "Dr. Sumit Kumar",
    "Dr. O. P. Verma",
  ]),
  group("Technical Program Chairs", [
    ["Dr. Gautam Srivastava", "Professor, Department of Mathematics & Computer Science, Brandon University, Canada"],
    ["Prof. Brij Bhooshan Gupta", "Distinguished Professor, Department of Computer Science & Information Engineering, Asia University, Taichung, Taiwan"],
    ["Prof. (Dr.) Xiao-Zhi Gao", "Professor, School of Computing, University of Eastern Finland, Finland"],
    ["Dr. Muhammad Jamaluddin Thaheem", "Senior Lecturer, School of Architecture and Built Environment, Deakin University, Australia"],
    ["Prof. Jemal Abawajy", "Professor, School of Information Technology, Faculty of SEBE, Deakin University, Australia"],
    ["Dr. Dongshik Kang", "Professor, Department of Information Engineering, University of the Ryukyus, Japan"],
    ["Ryota Miyata", "Assistant Professor, Energy and Environment Engineering, University of the Ryukyus, Japan"],
    ["Tomohisa Wada", "Professor Emeritus, Department of Information Engineering, University of the Ryukyus, Japan"],
    ["Shiho Oshiro", "Assistant Professor, University of the Ryukyus, Japan"],
    ["Dr. Indranath Chatterjee", "Senior Lecturer (Associate Professor) in Artificial Intelligence, Department of Computing and Mathematics, Manchester Metropolitan University, United Kingdom"],
    ["Dr. Sandeep Singh Sengar", "Senior Lecturer in Computer Science, Cardiff School of Technologies, Cardiff Metropolitan University, United Kingdom"],
    ["Prof. Victor S. Sheng", "Associate Professor, Department of Computer Science, Texas Tech University, United States"],
    ["Padmaja Pulivarthy", "Senior Software Engineer / Architect (IT Infrastructure), Samsung Austin Semiconductor, United States"],
    ["Dr. Anil Pise", "Senior Data Scientist, University of St. Thomas, St. Paul, MN, and Drizzla, Johannesburg, Gauteng, South Africa"],
    ["Dr. Saurabh Singh", "Assistant Professor, Department of AI and Big Data, Woosong University, Daejeon, South Korea"],
    ["Dr. Anand Nayyar", "Professor, Scientist, Vice-Chairman (Research) and Director (IoT and Intelligent Systems Lab), School of Computer Science and Artificial Intelligence, Duy Tan University, Da Nang, Vietnam"],
    ["Dr. Deepika Koundal", "Visiting Researcher, University of Eastern Finland, Finland"],
    ["Dr. Minakshi Singh", "Assistant Professor, King Khalid University, Abha, Saudi Arabia"],
    ["Dr. Parul Sahare", "Assistant Professor, Department of Electronics and Communication Engineering, IIIT Nagpur, India"],
    ["Dr. Mayur Parate", "Assistant Professor, Department of Electronics and Communication Engineering, IIIT Nagpur, India"],
    ["Dr. Tanmay Dubey", "Assistant Professor, IIIT Surat, India"],
    ["Dr. Nella Anvesh Kumar", "Assistant Professor, School of Electrical & Electronics Engineering, VIT Bhopal, India"],
    ["Dr. Lokendra Chouhan", "Electronics & Communication Engineering, IIIT Sri City, India"],
    ["Dr. Ashish Kumar Maurya", "Assistant Professor, Department of Computer Science & Engineering, MNNIT Allahabad, India"],
    ["Dr. Saurav Gupta", "Associate Professor Grade 2, School of Electronics Engineering (SENSE), VIT Chennai, India"],
    ["Dr. Jitendra Singh", "VIT Chennai, India"],
    ["Dr. Amarjit Roy", "Assistant Professor, Electrical Engineering, GKCIET Malda, India"],
    ["Dr. Vijay Gupta", "MAHE, Manipal, India"],
    ["Dr. Nikhil Pachauri", "Associate Professor, School of Mechanical Engineering, MIT Manipal (MAHE), India"],
    ["Dr. Nikhil Mhala", "Assistant Professor, P. R. Pote Patil College of Engineering and Management, Amravati, India"],
    ["Dr. Varun Mishra", "Assistant Professor, Netaji Subhas University of Technology (NSUT), Delhi, India"],
    ["Dr. Amit Kumar Jakhar", "Associate Professor, Department of Computer Science & Engineering, JUIT Waknaghat, India"],
    ["Dr. Aman Sharma", "Assistant Professor (SG), Department of Computer Science & Information Technology, JUIT Waknaghat, India"],
    ["Dr. Mohit Dua", "Assistant Professor, Department of Computer Engineering, NIT Kurukshetra, India"],
    ["Dr. Ashish Kumar", "VIT, India"],
    ["Dr. Shalabh Kumar Mishra", "Madan Mohan Malaviya University of Technology, Gorakhpur, India"],
    ["Dr. Om Goswami", "GLA University, Mathura, India"],
    ["Dr. Jeetendra Kumar", "GLA University, Mathura, India"],
    ["Dr. Prateek Jain", "Assistant Professor, Electronics & Instrumentation Engineering, Nirma University, Ahmedabad, India"],
    ["Dr. Navneet Sharma", "Assistant Professor (specialization: EMFT, Signals and Systems, Quantum Computation), Electronics and Communication Engineering, TIET Patiala, India"],
    ["Dr. Shireesh Kumar Rai", "Assistant Professor (specialization: Analog Signal Processing, VLSI Design), Electronics and Communication Engineering, TIET Patiala, India"],
    ["Dr. Shashikant", "Assistant Professor (specialization: Wireless Optical Communication), Electronics and Communication Engineering, TIET Patiala, India"],
    ["Dr. Abhay Sharma", "Associate Professor & Head, Electronics and Communication Engineering, Graphic Era (Deemed to be University), Dehradun, India"],
    ["Dr. Sanjeev Yadav", "Electronics & Communication Engineering, Govt. Women Engineering College, Ajmer, India"],
    ["Dr. Parashjyoti Borah", "Assistant Professor, Computer Science & Engineering, IIIT Guwahati, India"],
    ["Dr. Sharad Saxena", "Associate Professor, Computer Science & Engineering, TIET Patiala, India"],
    ["Dr. Vikrant Varshney", "Synopsys India, India"],
    ["Dr. Avaneesh Kumar Dubey", "Staff Solution Engineer (Analog/VLSI Design), Synopsys India, India"],
    ["Dr. Pratosh Kumar Pal", "Assistant Professor (Analog & Digital VLSI Design), School of Computing Science & Engineering, VIT Bhopal, India"],
    ["Dr. Sunil Kumar", "K L University (KLEF), Vaddeswaram, India"],
    ["Dr. Prateek Raj Gautam", "Assistant Professor (Senior Scale), School of Computer Science, UPES, Dehradun, India"],
    ["Dr. Anshu Singla", "Associate Professor, Computer Science & Engineering, Chitkara University, Rajpura, India"],
    ["Dr. Souvik Ganguli", "Associate Professor, Electrical & Instrumentation Engineering, TIET Patiala, India"],
    ["Dr. Ankit Vidyarthi", "Associate Professor, Computer Science Engineering & IT, JIIT Noida, India"],
    ["Dr. Anshul Verma", "Assistant Professor, Department of Computer Science, Institute of Science, Banaras Hindu University, Varanasi, India"],
    ["Dr. Mahesh Kumar Munagala", "Arrow Electronics"],
    ["Dr. Tarun Agrawal", "Assistant Professor (Senior Grade), Computer Science Engineering & IT, JIIT Noida, India"],
    ["Dr. Yogendra Kumar", "Assistant Professor, School of Computer Science Engineering and Technology, Bennett University, Noida, India"],
    ["Dr. Amit Chauhan", "Assistant Professor, School of Computer Science Engineering and Technology, Bennett University, Noida, India"],
    ["Dr. Divyansh Thakur", "Assistant Professor, Computer Science & Engineering, MNNIT Allahabad, India"],
    ["Dr. Sadbhawna Thakur", "Assistant Professor, Computer Science & Engineering, MNIT Jaipur, India"],
    ["Dr. Manasi Gyanchandani", "Computer Science & Engineering, MANIT Bhopal, India"],
    ["Dr. Akhtar Rasool", "Associate Professor, Computer Science & Engineering, MANIT Bhopal, India"],
    ["Dr. Mitul Kumar Ahirwal", "Associate Professor, Computer Science & Engineering, MANIT Bhopal, India"],
    ["Dr. Vijay Bhaskar Semwal", "Assistant Professor, Computer Science & Engineering, MANIT Bhopal, India"],
    ["Dr. Rajesh Wadhwani", "Associate Professor, Department of Aritifical Intelligence, MANIT Bhopal, India"],
  ]),
  group("Advisory Committee", [
    ["Prof. Manoj Misra", "Professor, Computer Science & Engineering, IIT Roorkee, India"],
    ["Prof. Lalit Kumar Awasthi", "Vice Chancellor, Sardar Patel University, Mandi (H.P.), India"],
    ["Prof. Sateesh Kumar Peddoju", "Professor, Computer Science & Engineering, IIT Roorkee, India"],
    ["Prof. Durga Toshniwal", "Professor, Computer Science & Engineering, IIT Roorkee, India"],
    ["Prof. P K Singh (Pramod Kumar Singh)", "Professor, Information & Communication Technology, ABV-IIITM Gwalior, India"],
    ["Prof. K V Arya (Karm Veer Arya)", "Professor, Information & Communication Technology, ABV-IIITM Gwalior, India"],
    ["Prof. Ruchir Gupta", "Professor, Computer Science & Engineering, IIT (BHU) Varanasi, India"],
    ["Prof. R S Singh (Ravi Shankar Singh)", "Professor, Computer Science & Engineering, IIT (BHU) Varanasi, India"],
    ["Dr. Sandeep K Sood", "Head of Department, Computer Applications, NIT Kurukshetra, India"],
    ["Dr. Anand Shanker Tewari", "Computer Science & Engineering, NIT Patna, India"],
    ["Dr. Mohit Tyagi", "Associate Professor, Production & Industrial Engineering, PEC Chandigarh (Deemed University), India"],
    ["Dr. Mohit Dua", "Assistant Professor, Computer Engineering, NIT Kurukshetra, India"],
    ["Dr. Kuldeep Kumar", "Assistant Professor, Computer Engineering, NIT Kurukshetra, India"],
    ["Dr. Ravi Pratap Singh", "Assistant Professor, Mechanical Engineering, NIT Kurukshetra, India"],
    ["Dr. Kalka Dubey", "Assistant Professor, Computer Science & Engineering, RGIPT Raebareli, India"],
    ["Dr. Teek Parval Sharma", "Computer Science & Engineering, NIT Hamirpur, India"],
    ["Dr. Naveen Chauhan", "Associate Professor, Computer Science & Engineering, NIT Hamirpur, India"],
    ["Dr. Pardeep Singh", "Associate Professor, Computer Science & Engineering, NIT Hamirpur, India"],
    ["Dr. Rajeev Kumar", "Assistant Professor Grade-I, Computer Science & Engineering, NIT Hamirpur, India"],
    ["Prof. Shalini Batra", "Professor & Dean (Faculty Affairs), Computer Science & Engineering, TIET Patiala, India"],
    ["Prof. Maninder Singh", "Professor & Head (also CTO), Computer Science & Engineering, TIET Patiala, India"],
    ["Dr. Shashidhar G. Koolagudi", "Professor, Computer Science & Engineering, NIT Karnataka, Surathkal, India"],
    ["Prof. H R Gaudar", "India"],
    ["Prof. Emmanuel Shubhakar Pilli", "Professor, Computer Science & Engineering, MNIT Jaipur, India"],
    ["Dr. Nilay Khare", "Professor, Computer Science & Engineering, MANIT Bhopal, India"],
    ["Dr. Deepak Singh Tomar", "Professor, Computer Science & Engineering, MANIT Bhopal, India"],
    ["Prof. R. K. Pateriya", "Professor, Computer Science & Engineering, MANIT Bhopal, India"],
    ["Dr. Sanyam Shukla", "Computer Science & Engineering, MANIT Bhopal, India"],
    ["Dr. Kamlesh Dutta", "Associate Professor, Computer Science & Engineering, NIT Hamirpur, India"],
    ["Dr. Surender Soni", "NIT Hamirpur, India"],
    ["Dr. Santosh Singh Rathore", "Assistant Professor, Computer Science & Engineering, ABV-IIITM Gwalior, India"],
    ["Prof. Brijesh Kumar", "IGDTUW, New Delhi, India"],
    ["Dr. Nonita Sharma", "IGDTUW, New Delhi, India"],
    ["Prof. Satish Kumar", "CSIR-CSIO, Chandigarh, India"],
    ["Prof. Manoj Gupta", "SMVDU, Katra, India"],
  ]),
];

export const Route = createFileRoute("/committee")({
  head: () => ({
    meta: [
      { title: "Committee | NITCOM-2027" },
      {
        name: "description",
        content: "Meet the conference committee organising NITCOM-2027 at NIT Jalandhar.",
      },
      { property: "og:title", content: "Committee | NITCOM-2027" },
      { property: "og:description", content: "Meet the NITCOM-2027 conference committee." },
    ],
  }),
  component: Committee,
});

function MemberCard({ member }: { member: Member }) {
  return (
    <article className="card-elevated flex min-h-64 w-full max-w-80 flex-col items-center justify-center p-7 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      {member.photo ? (
        <img
          src={`${import.meta.env.BASE_URL}${member.photo.replace(/^\//, "")}`}
          alt={member.name}
          className="h-28 w-28 shrink-0 rounded-full border-4 border-gold/60 object-cover"
          loading="lazy"
        />
      ) : (
        <div
          className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-4 border-dashed border-gold/60 bg-secondary text-gold"
          aria-label={`Image placeholder for ${member.name}`}
        >
          <UserRound className="h-12 w-12" aria-hidden="true" />
        </div>
      )}
      <div className="mt-6">
        <h4 className="font-display text-lg font-semibold text-navy">{member.name}</h4>
        {member.role && <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>}
      </div>
    </article>
  );
}

function Committee() {
  const defaultGroup = committeeGroups[0]!;
  const [activeTitle, setActiveTitle] = useState(defaultGroup.title);
  const activeGroup = committeeGroups.find(({ title }) => title === activeTitle) ?? defaultGroup;
  const isNumberedList = ["Technical Program Chairs", "Advisory Committee"].includes(activeGroup.title);

  return (
    <PageLayout>
      <PageHero
        eyebrow="Committee"
        title="Conference committee"
        description="Explore the people organising NITCOM-2027 at NIT Jalandhar."
      />
      <section className="bg-surface px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-display text-3xl font-semibold text-navy sm:text-4xl">
            Conference Chairs
          </h2>

          <div
            className="mt-10 flex flex-wrap justify-center gap-3"
            role="tablist"
            aria-label="Conference committee categories"
          >
            {committeeGroups.map(({ title }) => {
              const isActive = title === activeGroup.title;
              return (
                <button
                  key={title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTitle(title)}
                  onMouseEnter={() => setActiveTitle(title)}
                  onFocus={() => setActiveTitle(title)}
                  className={`rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-200 sm:text-base ${
                    isActive
                      ? "border-navy bg-navy text-navy-foreground shadow-md"
                      : "border-border bg-background text-navy hover:border-gold hover:bg-secondary"
                  }`}
                >
                  {title}
                </button>
              );
            })}
          </div>

          <div
            className={isNumberedList ? "mx-auto mt-14 max-w-5xl" : "mt-14 flex flex-wrap justify-center gap-7"}
            role="tabpanel"
            aria-label={activeGroup.title}
          >
            {isNumberedList ? (
              <ol className="list-decimal space-y-5 pl-6 text-base leading-relaxed text-muted-foreground sm:pl-8 sm:text-lg marker:font-semibold marker:text-navy">
                {activeGroup.members.map((member) => (
                  <li key={member.name} className="pl-2">
                    <span className="font-semibold text-navy">{member.name}</span>
                    {member.role && <span>, {member.role}</span>}
                  </li>
                ))}
              </ol>
            ) : activeGroup.members.map((member) => (
              <MemberCard key={`${activeGroup.title}-${member.name}`} member={member} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

