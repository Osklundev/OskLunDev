import { projectList } from "../models/ProjectList";

export const PortfolioProjects = () => {
  return (
    <section className="col-start-3 col-end-5 overflow-auto md:max-h-screen">
      <div>
        <h2 className="text-center font-bold underline max-w-30 m-auto">
          Projects
        </h2>
        {projectList.map((p) => (
          <div className="bg-stone-900 m-5 drop-shadow-xl drop-shadow-red-500/75 border-2 border-red-400">
            <a href={p.url} target="_blank">
              <img src={p.img} alt={p.title} className="md:max-w-full" />
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
