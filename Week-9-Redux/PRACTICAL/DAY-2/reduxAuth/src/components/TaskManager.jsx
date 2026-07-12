import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addTask, deleteTask } from "../features/task/taskSlice"

export default function TaskManager() {
  const [task, setTask] = useState("")
  const tasks = useSelector((state) => state.userTask.tasks)
  const dispatch = useDispatch()

  const handleAdd = () => {
    if (!task.trim()) return

    dispatch(
      addTask({
        id: Date.now(),
        text: task
      })
    )

    setTask('')
  }

  return (
    <div>
      <h2>Task Manager</h2>

      <input
        type="text"
        value={task}
        placeholder="Enter task"
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleAdd} disabled={!task.trim()}>
        Add Task
      </button>

      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <ul>
          {tasks.map((t) => (
            <li key={t.id}>
              {t.text}
              <button onClick={() => dispatch(deleteTask(t.id))}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}