import { useState, useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import { utilService } from "../services/util.service"


export function AddTask({ group, handleAddTask, TaskTitleLength, labelsLength}) {

    const [newTaskTitle, setNewTaskTitle] = useState("")
    const inputRef = useRef(null)

    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        const checkFocus = () => {
          setIsFocused(document.activeElement === inputRef.current)
        }
    
        document.addEventListener("focusin", checkFocus)
        document.addEventListener("focusout", checkFocus)
    
        return () => {
          document.removeEventListener("focusin", checkFocus)
          document.removeEventListener("focusout", checkFocus)
        }
    }, [])
    

    function onAddTask() {
        if (newTaskTitle !== ''){
            handleAddTask(group, newTaskTitle)
            setNewTaskTitle('')
        } 
    }

    function handleKeyDown(event) {
        if (event.key === "Enter"){
            onAddTask()
        }
            
    }

    const handleClick = () => {
        inputRef.current?.focus()
    }
    //(labelsLength > 1150) ? window.innerWidth - 325 : 1200
    return (
        <section 
        style={{ 
        borderLeft: `5px solid rgba(${utilService.hexToRgb(group?.color)}, ${isHovered ? 1 : 0.6})`, 
        borderBottomLeftRadius: 5,
        width: (labelsLength > window.innerWidth - 350) ? window.innerWidth - 325 : labelsLength,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        className="add-task">
            <div className="checkbox-deco">
                <div className="box"/>
            </div>
            <input
                ref={inputRef}
                className="add-input"
                onBlur={onAddTask}
                onKeyDown={handleKeyDown}
                type="text"
                placeholder="+Add task"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                style={{width: TaskTitleLength - 60,
                    borderColor: `${isFocused ? '#0073EA' : (isHovered ? '#C3C6D4' : 'transparent')}`
                }}
            />

            {(labelsLength < window.innerWidth - 350) && <div className="empty-space"
            style={{width: window.innerWidth - labelsLength - 325,
                right: -(window.innerWidth - labelsLength - 325)
            }}/>}
            
        </section>
    )
}