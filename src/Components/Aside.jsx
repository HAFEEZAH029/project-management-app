
export default function Aside ({ handleCreateForm, projectList, handleSelectedProject, selectedID}) {
   {/*  projectList.find(project => project.id === selectedID) */}
  let listClass = "px-2 py-0.5 text-center w-[80%]";
 {/*  if(project.id === selectedID) {
     listClass += "bg-blue-200/20"
   };  */}

  return (
    <aside className="flex flex-col items-center  gap-6 w-1/3 h-screen bg-black rounded-tr-2xl mt-8 py-8" aria-label="Sidebar">
        <h1 className="text-white text-3xl font-bold">
            Your Projects
        </h1>

        <button className="bg-gray-500 p-1.5 rounded text-white cursor-pointer" onClick={handleCreateForm}>
            + Add Project
        </button>

        {projectList.length > 0 ? (
        <ul className="mt-5 list-none flex flex-col gap-3 items-center w-[100%]">
          {projectList.map(project => {
             return (
            <li
              key={project.id}
              className={project.id === selectedID ? listClass + " bg-blue-200/20" : listClass}
            >
              {/* call onSelectProject with the project id */}
              <button
                className="text-white cursor-pointer text-[17px]"
                onClick={() => handleSelectedProject(project.id)}
              >
                {project.title}
              </button>
            </li>
                )
            })
          }
        </ul>
             ) : (
        <p className="text-gray-400 mt-5 text-center text-xl w-[80%]">
          No projects created yet.
        </p>
         )
        }
    </aside>
  )
};