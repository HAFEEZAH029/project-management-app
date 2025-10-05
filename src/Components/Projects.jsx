import { useRef} from "react";

export default function Projects({projectList, selectedID, NewTask, deleteTask, ModalRef}) {

    const selectedProject = projectList.find(project => project.id === selectedID);

    const taskInputRef = useRef(null);
    const handleNewTask = (e) => {
        e.preventDefault();
        const newTask = taskInputRef.current.value.trim();
        if (newTask === "") {
            alert("Task name cannot be empty");
        }
        else {
        NewTask(selectedID, newTask);
        taskInputRef.current.value = "";
        }
    };

    const handleDeleteTask = (taskId) => {
        deleteTask(selectedID, taskId);
    }

     const Tasks = selectedProject.Task || [];

    const handleOpenModal = () => {
        if (ModalRef.current) {
            ModalRef.current.Open();
        }
    };

  return (
  <div className="w-[90%] mt-40">
    <div className="w-[100%]">
        <div className="flex items-center justify-between text-black font-bold mb-4">
            <h1 className="text-2xl capitalize">
                {selectedProject.title}
            </h1>
            <button className="cursor-pointer text-[22px]" onClick={handleOpenModal}>
                Delete
            </button>
        </div>
        <p className="text-gray-400 mb-4 text-[17px]">{selectedProject.dueDate}</p>
        <p className="leading-7.5 w-[70%] text-xl">{selectedProject.description}</p>
    </div>
       <hr className="my-8 border-gray-400"/>
    <div>
        <h1 className="font-bold text-2xl">Tasks</h1>
        <form onSubmit={handleNewTask} className="flex gap-5 mt-3 mb-4">
            <input className="bg-gray-300 w-[50%] rounded border-none p-2 focus:border-b focus:border-black focus:border-solid" type="text" ref={taskInputRef} />
            <button className="cursor-pointer font-medium text-xl" type="submit">Add Task</button>
        </form>


        {Tasks.length > 0 ? (
            <ul className="w-[90%] list-none bg-gray-50 py-2 px-1 rounded">
                {Tasks.map(task => {
                    return (
                        <li key={task.id} className="flex items-center justify-between w-[100%] mb-2">
                            <span className="text-[16px]">{task.name}</span>
                            <button onClick={() => handleDeleteTask(task.id)} className="cursor-pointer hover:text-red-700">Clear</button>
                        </li>
                    );
                } )
                  }
            </ul>
        ) : (
            <p className="text-xl">No tasks added</p>
        )}
    </div>
  </div>
  )
};