import { BsTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";


export const TaskList = () => {
  const tasks = [
    {name: 'Task', actions: 'remove/edit'},
    {name: 'Task', actions: 'remove/edit'},
    {name: 'Task', actions: 'remove/edit'},
    
  ]
  return (
    <>
      <div className="overflow-x-auto font-sans text-primary">
        <table className="table w-full text-lg">
          <thead className="text-lg">
            <tr className="border-none">
              <th>TO DO</th>
              <th className="w-0">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {
              tasks.map((t, i) => {
                return (
                  <tr key={i}>
                    <td>{t.name}</td>
                    <td className="flex ml-7 gap-2">{<FaEdit size="1.5rem" color="#0081bd"/>} {<BsTrashFill size="1.5rem" color="#bd002f"/>}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}