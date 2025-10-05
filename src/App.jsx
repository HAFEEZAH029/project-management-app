import { useRef, useState } from 'react'
import Aside from './Components/Aside'
import Blank from './Components/Blank'
import Form from './Components/Form'
import Projects from './Components/Projects'
import Dialog from './Components/Dialog'
import './App.css'

function App() {

const [inputDetails, setInputDetails] = useState({
  projectName: "",
  description: "",
  dueDate: ""
});
const [createForm, setCreateForm] = useState(false);
const [createdProject, setCreatedProject] = useState(false);
const [noProject, setNoProject] = useState(true);
const [projectList, setProjectList] = useState([]);
const [selectedID, setSelectedID] = useState(null);
const ModalRef = useRef(null);


const handleChanges = (e) => {
  const { name, value } = e.target;
  setInputDetails((prevDetails) => ({
    ...prevDetails,
    [name]: value
  }));
}

const handleCreateForm = () => {
  setInputDetails({projectName: "", description: "", dueDate: ""});
  setCreateForm(true);
  setNoProject(false);
  setCreatedProject(false);
  setSelectedID(null);
};

const handleNoProject = () => {
  setNoProject(true);
  setCreateForm(false);
  setCreatedProject(false);
};

const handleCreatedProject = (e) => {
  e.preventDefault();
  if (inputDetails.projectName.trim() === "" || inputDetails.description.trim() === "" || inputDetails.dueDate.trim() === "") {
    alert("Please fill in all fields");
    return;
  }
  else {
  const newProject = {
    id: Date.now().toString(),
    title: inputDetails.projectName.trim(),
    description: inputDetails.description.trim(),
    dueDate: inputDetails.dueDate.trim(),
    Task: []
  };
  // immutable update and store full details
  setProjectList((prevList) => [...prevList, newProject]);

  //set selected project to the new one (so Projects view will read from projectList instead of inputDetails)
  setSelectedID(newProject.id);

   // reset the form fields so next time it's empty
  setInputDetails({ projectName: "", description: "", dueDate: "" });

  // show project view
    setCreatedProject(true);
    setCreateForm(false);
    setNoProject(false);

  }}


  const handleSelectedProject = (projectId) => {
    setSelectedID(projectId);
    setCreatedProject(true);
    setNoProject(false);
    setCreateForm(false);
  };

  const handleDeleteProject = (ProjectID) => {
    setProjectList(prev => prev.filter(project => project.id !== ProjectID))
    handleNoProject();
  }

  const addNewTask = (projectID, newtaskname) => {
       const newTask ={id: Date.now().toString(), name: newtaskname};
        setProjectList(prevList => prevList.map(project => project.id === projectID ? {...project, Task: [...(project.Task || []), newTask]} : project))
  };

 const deleteTaskFromProject = (projectID, taskID) => {
    setProjectList(prevList => prevList.map(project => project.id === projectID ? {...project, Task: project.Task.filter(task => task.id !== taskID)} : project))
  };

  return (
    <div className="flex gap-10">
      <Aside handleCreateForm={handleCreateForm} projectList={projectList} selectedID={selectedID} handleSelectedProject={handleSelectedProject} NoPoject={noProject} />
      <main className="flex-grow">
        <Dialog ref={ModalRef} handleDeleteProject={handleDeleteProject} selectedID={selectedID} />
       { noProject && <Blank handleCreateForm={handleCreateForm} /> }
       { createForm && <Form handleChanges={handleChanges} handleNoProject={handleNoProject} inputDetails={inputDetails} handleCreatedProject={handleCreatedProject} /> }
       { createdProject && <Projects  projectList={projectList} selectedID={selectedID} NewTask={addNewTask} deleteTask={deleteTaskFromProject} ModalRef={ModalRef} /> }
      </main>
    </div>
  )
}

export default App
