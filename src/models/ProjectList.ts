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
      "School project where we were divided into groups, and first had to design a project and then exchange our designs with another group and create the website for whatever design we were handed",
    current: false,
  },
  {
    title: "Quiz",
    img: QuizSite,
    url: "https://medieinstitutet.github.io/fed24d-js-intro-inl-2-quiz-ballerinas/",
    description:
      "School project to create a quiz, we chose a quiz about the ballerina cookie, once again group project",
    current: false,
  },
  {
    title: "Todo",
    img: TodoSite,
    url: "https://medieinstitutet.github.io/fed24d-the-last-todos-Osklundev/",
    description: "School assignment to create a todo list in react",
    current: false,
  },
];
