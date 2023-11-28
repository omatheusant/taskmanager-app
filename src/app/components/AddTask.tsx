"use client"

import { AiOutlinePlus, AiFillCloseCircle, AiOutlineArrowRight } from 'react-icons/ai'

interface TaskProps {

}

export const AddTask = () => {
  return (
    <div >
      <button
        className="btn btn-primary w-full uppercase font-bold text-secondary font-sans"
        onClick={() => (document.getElementById('modal') as HTMLDialogElement).showModal()}>
        Add new task <AiOutlinePlus size={20} className="-ml-1" />
      </button>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="modal" className="modal modal-bottom sm:modal-middle p-0">
        <div className="modal-box flex flex-col gap justify-center items-center bg-secondary">
          <h3 className="font-bold text-lg">New Task</h3>
          <div className="py-4 flex flex-col gap-2 w-full ">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">What is your Task name?</span>
              </div>
              <input type="text" placeholder="Type here" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="modal-action absolute -top-4 right-2">
            <form method="dialog">
              <button><AiFillCloseCircle/></button>
            </form>
          </div>
          <button className='btn border-none text-lg'>Next<AiOutlineArrowRight size="1.125rem"/></button>
        </div>
      </dialog>
    </div>
  )
}