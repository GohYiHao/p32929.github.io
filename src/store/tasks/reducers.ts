const normalizedTasks = [
  {
    id: '1',
    name: 'Ivan',
    type: 'backlog'
  },
  {
    id: '2',
    name: 'Petr',
    type: 'backlog'
  },
  {
    id: '3',
    name: 'Gleb',
    type: 'todo'
  },
  {
    id: '4',
    name: 'Egor',
    type: 'todo'
  }
]

export function tasksReducer(tasks = normalizedTasks, action) {
  const { type, payload, randomId } = action

  switch (type) {
    case 'DELETE_TASK':
      return tasks.filter(task => task.id !== payload.id)

    case 'ADD_TASK':
      return tasks.concat({
        ...payload.task,
        id: randomId
      })

    case 'DRAG_AND_DROP':
      const id = payload.ev.dataTransfer.getData('text/html')
      const checkIdforChrome =
        id[0] === '<' ? id.replace(/[^\d]/g, '').slice(1) : id
      const filteredTasks = tasks.filter(task => {
        if (task.id === checkIdforChrome) {
          task.type = payload.type
        }
        return task
      })
      return (tasks = filteredTasks)

    default:
      return tasks
  }
}
