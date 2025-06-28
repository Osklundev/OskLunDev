import type { Project } from "./Project";
import JurassicSite from "../assets/JurassicSite.jpg";
import QuizSite from "../assets/QuizSite.jpg";
import TodoSite from "../assets/TodoSite.jpg";

export const projectList: Project[] = [
  {
    title: "Jurassic",
    img: JurassicSite,
    url: "https://medieinstitutet.github.io/fed24d-grafiska-verktyg-kejsartamarinerna/",
    description:
      "Group assignment for school  where we were divided into groups, and first had to design a project and then exchange our designs with another group and create the website for whatever design we were handed",
    current: false,
  },
  {
    title: "Quiz",
    img: QuizSite,
    url: "https://medieinstitutet.github.io/fed24d-js-intro-inl-2-quiz-ballerinas/",
    description:
      "Group assignment for school to create a quiz, we chose a quiz about the ballerina cookie. Entire workflow from design in Figma to finished product. We worked using agile with daily standups and sprints.",
    current: false,
  },
  {
    title: "Todo",
    img: TodoSite,
    url: "https://medieinstitutet.github.io/fed24d-the-last-todos-Osklundev/",
    description:
      "Individual school assignment to create a todo list in react, uses lifting state up and general react mechanics aswell as material UI",
    current: false,
  },
];
