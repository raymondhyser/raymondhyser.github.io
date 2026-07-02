export interface DigitalProject {
  name: string;
  role: string;
  description: string;
  link?: string;
}

export const DIGITAL_PROJECTS: DigitalProject[] = [
  {
    name: "AVAnnotate",
    role: "Senior Student Associate, Project Design and Management",
    description:
      "A Mellon Foundation-funded application for annotating audiovisual materials and curating digital exhibits. Raymond leads a team of four graduate students, collaborates closely with software developers to identify bugs and maintain the application, develops comprehensive user documentation, and conducts training workshops for students, faculty, and community members. He works directly with institutional partners to facilitate collaborative projects and build accessibility plans for their collections, and co-created the inaugural AVAnnotate Fellowship Program, which he currently co-supervises alongside seven fellows. Recent project work includes a two-phase student guidelines project for annotating the This Is Democracy podcast and modular lesson plans on Lyndon B. Johnson and the Great Society for high school U.S. history classrooms.",
  },
  {
    name: "Quest for Quinine",
    role: "Team Lead, JapanLab",
    description:
      "An open-access educational video game about Sir Clements Markham's botanical expedition to Peru to collect cinchona. Raymond directs an interdisciplinary team of six undergraduate students in developing the game. Centering a plant at the heart of a digital public history project, it exemplifies the intersection of botanical history, digital storytelling, and public engagement that runs through Raymond's broader research.",
  },
  {
    name: "World History Commons",
    role: "Project Associate, Roy Rosenzweig Center for History and New Media",
    description:
      "Raymond developed open-access annotated primary sources, lesson plans, and syllabi for world history education, contributing to a platform used widely by educators and researchers.",
  },
  {
    name: "Not Even Past",
    role: "Digital Humanities Developer",
    description:
      "The University of Texas at Austin's award-winning digital history platform. Raymond researched and authored multiple public-facing articles, including several for the Institute for Historical Studies' \"Climate in Context\" series. Through this work he developed expertise in digital curation, multimedia editing, public outreach, and website design.",
  },
];
