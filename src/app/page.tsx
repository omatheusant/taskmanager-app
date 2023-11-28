import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/TaskList";
import { ThemeTogglerControl } from "./components/utils/ThemeToggler";

export default function Home() {
  return (
    <main className="w-4/5 mx-auto mt-24 font-sans">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-primary">Logo</h1>
        <AddTask/>
        <ThemeTogglerControl/>
      </div>
      <TaskList />
    </main>
  )
}
