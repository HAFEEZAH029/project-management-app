
export default function Aside () {
  return (
    <aside className="flex flex-col items-center  gap-6 w-1/3 h-screen bg-black rounded-tr-2xl mt-8 py-8 px-2.5" aria-label="Sidebar">
        <h1 className="text-white text-3xl font-bold">
            Your Projects
        </h1>

        <button className="bg-gray-500 p-1.5 rounded text-white cursor-pointer">
            + Add Project
        </button>

        <ul className="mt-5 list-none">
            <li><button>project title</button></li>
        </ul>
    </aside>
        )
};