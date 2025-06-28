import { projectList } from "../models/ProjectList";

export const PortfolioProjects = () => {
  return (
    <section className="flex-col">
      {projectList.map((p) => (
        <div className="m-5 border-b-6 border-b-amber-500">
          <h3 className="font-bold underline text-center">Projects</h3>
          <a href={p.url} target="_blank">
            <img src={p.img} alt={p.title} />
          </a>
          <h4 key={p.title} className="font-bold">
            {p.title}
          </h4>
          <p>{p.description}</p>
        </div>
      ))}
    </section>
  );
};
