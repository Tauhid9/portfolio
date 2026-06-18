export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
  details?: string
  type: "degree" | "certification" | "course"
}

export const educationData: Education[] = [
  {
    id: "1",
    institution: "University of Information Technology and Sciences (UITS)",
    degree: "Bachelor of Science",
    field: "Information Technology",
    startDate: "Sep 2020",
    endDate: "Jan 2024",
    details: "CGPA: 3.71/4.00, Baridhara, Dhaka, Bangladesh",
    type: "degree"
  },
  {
    id: "2",
    institution: "Tejgaon College",
    degree: "Higher Secondary Certificate (HSC)",
    field: "General Education",
    startDate: "2019",
    endDate: "2019",
    details: "GPA: 3.50/5.00, Dhaka Board",
    type: "degree"
  },
  {
    id: "3",
    institution: "Kanchanpur Haor High School",
    degree: "Secondary School Certificate (SSC)",
    field: "General Education",
    startDate: "2017",
    endDate: "2017",
    details: "GPA: 4.82/5.00, Dhaka Board - Excellent Academic Achievement",
    type: "degree"
  },
  {
    id: "4",
    institution: "Self-Directed Learning",
    degree: "Full Stack Web Development",
    field: "Web Development",
    startDate: "2020",
    endDate: "Present",
    details: "Continuous learning in Next.js, React, Node.js, FastAPI, and modern development practices",
    type: "course"
  },
  {
    id: "5",
    institution: "Programming Contests",
    degree: "Competitive Programming",
    field: "Algorithm & Problem Solving",
    startDate: "2022",
    endDate: "2022",
    details: "Champion at Intra University Programming Contest 2022; 14th at Solo Intra University Victory Day Programming Contest 2022",
    type: "certification"
  }
]
