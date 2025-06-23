import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { CurriculumVitae } from "./pages/CurriculumVitae";
import { CoverLetter } from "./pages/CoverLetter";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cv",
    element: <CurriculumVitae />,
  },
  {
    path: "/cl",
    element: <CoverLetter />,
  },
]);
