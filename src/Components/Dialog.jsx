import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react"



const Dialog = forwardRef (function Dialog ({handleDeleteProject, selectedID}, ref) {
     const dialogRef = useRef(null);

     useImperativeHandle (ref, () => {
        return {
            Open () {
                if (dialogRef.current) {
                    dialogRef.current.showModal();
                }
            },
        }
     })


    return createPortal(
        <dialog className="border-none pt-[15%] bg-transparent w-full" ref={dialogRef}>
          <div className="bg-white p-8 rounded mx-auto max-w-lg flex flex-col items-center justify-center gap-8">
            <h1 className="text-[25px]">Do you Want to delete this project??</h1>
            <h2 className="text-[20px] font-bold">All data and tasks would be lost!!</h2>
            <div className="flex items-center justify-between gap-8">
                <button type="button" className="bg-black rounded text-white py-2 px-3.5 cursor-pointer" onClick={() => {dialogRef.current && dialogRef.current.close()}}>Cancel</button>
                <form method="dialog" onSubmit={() => handleDeleteProject(selectedID)}>
                   <button type="submit" className="bg-black rounded text-white py-2 px-3.5 cursor-pointer">Proceed to delete</button>
                </form>
            </div>
          </div>
        </dialog>, document.getElementById("Modal")
    )
});

export default Dialog