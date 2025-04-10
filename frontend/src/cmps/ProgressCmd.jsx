import { P_Date } from "./dynamicCmps/progressCmps/P_Date"
import { P_Priority } from "./dynamicCmps/progressCmps/P_Priority"
import { P_Status } from "./dynamicCmps/progressCmps/P_Status"
import { P_Members } from "./dynamicCmps/progressCmps/P_Members"

export function ProgressCmd({
  label,
  tasks,
}) {

  switch (label.type) {
    case "priority":
      return (
        <P_Priority
          tasks={tasks}
          labelId={label.id}
        />
      )

    case "status":
      return (
        <P_Status
          tasks={tasks}
          labelId={label.id}
        />
      )

    case "date":
      return (
        <P_Date
          tasks={tasks}
          labelId={label.id}
        />
      )

    case "members":
      return (
        <P_Members
          tasks={tasks}
          labelId={label.id}
          labelWidth={label.width}
        />
      )

    default:
      console.error(`Unknown progress component type: ${progressType}`)
      return <div>Unknown component: {progressType}</div>
  }
}


