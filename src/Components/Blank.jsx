import logo from '../assets/react.svg';

export default function Blank() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-40 ">
        <img src={logo} alt="Book of tasks" className="w-28 h-28" />
        <h2 className="text-2xl font-bold text-center">No Project Selected</h2>
        <p className="text-gray-600 text-center">Select a project or get started with a new one.</p>
        <button className="bg-black p-3 rounded text-white cursor-pointer">Create new project</button>
    </div>
  )
}