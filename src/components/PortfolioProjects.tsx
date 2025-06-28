import { projectList } from "../models/ProjectList";

export const PortfolioProjects = () => {
  return (
    <section>
      <h3 className="text-center font-bold border-b-2 max-w-30 m-auto">
        Projects
      </h3>
      <div className="md:flex">
        {projectList.map((p) => (
          <div className="m-5 border-b-6 border-b-amber-500">
            <a href={p.url} target="_blank">
              <img src={p.img} alt={p.title} className="md:max-w-96" />
            </a>
            <div>
              <h4 key={p.title} className="font-bold md:text-center">
                {p.title}
              </h4>
              <p className="md:text-center">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
