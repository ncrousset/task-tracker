import Task from "./Task"

const Tasks = ({ tasks, onDelete, onTaggle }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task}
                    onDelete={onDelete}
                    onTaggle={onTaggle}
                />
            ))}
        </>
    )
}

export default Tasks
