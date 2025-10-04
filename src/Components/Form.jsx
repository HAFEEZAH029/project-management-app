export default function Form({ handleChanges, inputDetails, handleNoProject, handleCreatedProject }) {
const { projectName, description, dueDate } = inputDetails;

   const Today = new Date().toISOString().split("T")[0];

  return (
    <form  onSubmit={handleCreatedProject} className="w-[80%] justify-center flex flex-col gap-4 mt-40" aria-label="Project Form">
        <div className="flex justify-end gap-4">
            <button onClick={handleNoProject} className="cursor-pointer">Cancel</button>
            <button type="submit" className="bg-black rounded text-white py-2 px-3.5 cursor-pointer">Save</button>
        </div>
        <div>
            <label className="text-xl font-bold" htmlFor="pName">TITLE</label>
            <input className="bg-gray-300 w-full rounded border-none focus:border-b-black   mt-2 p-3" type="text" id="pName" name="projectName" value={projectName} onChange={handleChanges} placeholder="Project Name" required/>
        </div>
        <div>
            <label className="text-xl font-bold" htmlFor="desc">Description</label>
            <textarea className="bg-gray-300 w-full rounded border-none focus:border-b focus:border-black focus:border-solid mt-2 p-3" id="desc" name="description" value={description} onChange={handleChanges} required ></textarea>
        </div>
        <div>
            <label className="text-xl font-bold" htmlFor="date">Due Date</label>
            <input className="bg-gray-300 w-full rounded border-none focus:border-b focus:border-black focus:border-solid mt-2 p-3 cursor-pointer" type="date" id="date" name="dueDate" value={dueDate} onChange={handleChanges} min={Today} required/>
        </div>
    </form>
  )
}