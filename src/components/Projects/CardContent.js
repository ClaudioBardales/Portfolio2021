import projectImg1 from "../../img/Project1.jpg"
import projectImg2 from "../../img/Project2.jpg"
import { faGithub } from "react-icons/fa"
import { SiNetlify } from "react-icons/si"

const ProjectCardContent = [
  {
    projectImg: projectImg1,
    projectTitle: "Seladrab Cleaning Services",
    tech1: "HTML",
    tech2: "CSS",
    tech3: "JS",
    description:
      "A cleaning website for a small business. I wanted to use the core technologies so I can get more practice on the fundementals.",
    icon1: faGithub,
    icon2: SiNetlify,
  },
  {
    projectImg: projectImg2,
    projectTitle: "Entirely Pets Mini Clone",
    tech1: "HTML",
    tech2: "CSS",
    tech3: "JS",
    description:
      "An Ecommerce Clone of a Pet Supplies Website. This One was my favorite because it challenged me to get better and show that I can make a good clone of any ecommerce website. ",
    icon1: faGithub,
    icon2: SiNetlify,
  },
]

export default ProjectCardContent
