import { PortfolioProjects } from "./PortfolioProjects";

export const PortfolioBody = () => {
  return (
    <div
      id="body"
      className="min-h-screen md:flex md:flex-col md:justify-between"
    >
      <section>
        <h2 className="text-center font-bold border-b-2 max-w-30 m-auto">
          Who am I?
        </h2>
        <div className="p-2 flex md:max-w-1/2 md: m-auto">
          <div className="min-w-1/2 text-center">
            <h3 className="font-bold underline">Technologies</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>SCSS</li>
              <li>TailwindCSS</li>
              <li>Material UI</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>React</li>
              <li>Vue</li>
              <li>Node.JS</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="text-center flex flex-col justify-around">
            <p>
              I am a Frontend Development student at Medieinstitutet, graduating
              spring 2026.
            </p>
            <p>
              I am eager to learn and in general a quick study with alot of
              hours racked up infront of a computer screen throughout life.
            </p>
          </div>
        </div>
      </section>

      <PortfolioProjects />
    </div>
  );
};
