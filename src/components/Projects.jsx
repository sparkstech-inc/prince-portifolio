import projects from '../projects.json';

export default function Projects() {
  return (
    <div className="mt-5 p-4 text-center" id="projects">
      <p className="text-2xl text-white underline">My Projects</p>
      <p className="text-xl text-gray-500">See What I can Build</p>
      <div className="p-3 gap-4 w-full lg:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 md:text-left">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center bg-blue-900 p-4 rounded-lg shadow-md mb-5">
            <img src={project.logo} alt={project.name + " " + "Logo"} className="w-32 h-32 rounded-lg mb-4 md:mb-0 md:mr-4" />
            <div>
              <p className="text-xl font-bold">{project.name}</p>
              <p className="mt-2">{project.desc}</p>
              <a href={project.link} className="mt-4 text-green-200 hover:text-blue-500 flex items-center flex-row gap-2 justify-center md:justify-start">
                Visit Project
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}