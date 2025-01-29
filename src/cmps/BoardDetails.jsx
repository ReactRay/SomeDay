import "../styles/_Board-Details.scss";
import { GroupPreview } from "./GroupPreview";
import { useState, useEffect } from "react";
import { logout, loadUsers } from "../store/actions/user.actions";
import {
  loadBoards,
  removeTasks,
  replaceLabels,
  updateTask,
} from "../store/actions/boards.actions";
import { SelectedTasksModal } from "./dynamicCmps/modals/SelectedTasksModal";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { addGroup } from "../store/actions/boards.actions";
import { addItem } from "../store/actions/boards.actions";
import { updateGroup } from "../store/actions/boards.actions";
import { removeGroup, replaceGroups } from "../store/actions/boards.actions";
import { BoardDetailsHeader } from "./BoardDetailsHeader";
import { boardService } from "../services/board.service";
import { utilService } from "../services/util.service";
import { closestCorners, DndContext } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"


const BoardDetails = () => {
  const { boardId } = useParams();
  const navigate = useNavigate();
  const [checkedBoxes, setCheckedBoxes] = useState([]);
  const [checkedGroups, setCheckedGroups] = useState([]);
  const boards = useSelector((state) => state.boardModule.boards);
  const [currentBoard, setCurrentBoard] = useState(
    boards.find((board) => board.id === boardId)
  );

  const loggedinUser = useSelector((state) => state.userModule.user);
  const users = useSelector((state) => state.userModule.users);
  const filterBy = useSelector((state) => state.boardModule.filterBy);



  const groups = currentBoard?.groups || [];

  useEffect(() => {
    // if (!currentBoard || currentBoard.id !== boardId)
    setCurrentBoard(boards.find((board) => board.id === boardId));
  }, [boards, boardId]);

  useEffect(() => {
    async function d() {
      await loadBoards();
      await loadUsers();
    }
    d();
  }, [boards.groups]);

  useEffect(() => {
    if (boards[0]) {
      const board = boards.find((board) => board.id === boardId);
      const regExp = new RegExp(filterBy, "i");
      const filteredGroups = board.groups
        .map((group) => ({
          ...group,
          tasks: group.tasks.filter((task) => regExp.test(task.cells[0].value.title)), // Filter tasks
        }))
        .filter((group) => group.tasks.length > 0); // Keep groups that have tasks

      setCurrentBoard({ ...board, groups: filteredGroups }); // Update currentBoard with filtered groups
    }
  }, [filterBy]);

  //...............................




  function handleAddGroup() {
    addGroup(boardId);
  }

  function chatTempInfoUpdate(cellId, width, scroll, newComment) {
    boardService.saveTempChatInfo(cellId, width, scroll, newComment);
  }

  function openChat(id) {
    boardService.openChat(id);
  }

  // function that set groups with each task update
  const onTaskUpdate = async (newCell) => {
    await updateTask(currentBoard.id, newCell);}

  // const cmpOrder = ["taskTitle", "priority", "status", "members", "date"];

  const uid = () => Math.random().toString(36).slice(2);

  const progress = ["priority", "status", "members", "date"];
  const handleCheckBoxClick = (groupId, taskId) => {

    setCheckedBoxes((prev) => {
      if (prev.some((scdArr) => scdArr[1] == taskId)) {
        setCheckedGroups((prev) => prev.filter((id) => id !== groupId));
        return prev.filter((scdArr) => scdArr[1] !== taskId);
      } else {
        return [...prev, [groupId, taskId]];
      }
    });
  };

  const handleMasterCheckboxClick = (group) => {
    setCheckedGroups((prev) => {
      if (prev.includes(group.id)) {
        setCheckedBoxes((prev) =>
          prev.filter((scdArr) => scdArr[0] !== group.id)
        );
        return prev.filter((id) => id !== group.id);
      } else {
        const newData = group.tasks.map((task) => [group.id, task.id]);
        setCheckedBoxes((prev) => [...prev, ...newData]);
        return [...prev, group.id];
      }
    });
  };
  async function handleDeleteTasks() {
    for (const [groupId, taskId] of checkedBoxes) {
      await removeTasks(currentBoard.id, groupId, taskId).then(() => {
        setCheckedBoxes((prev) =>
          prev.filter((scdArr) => scdArr[1] !== taskId)
        );
      });
    }
  }
  async function handleDeleteTasks() {
    await removeTasks(currentBoard.id, checkedBoxes).then(() => {
      setCheckedBoxes([]);
    });
  }

  function handleAddTask(group = null, taskTitle = "New Task") {
    addItem(boardId, group ? group.id : currentBoard.groups[0].id, taskTitle, !group && true);
  }

  async function handleGroupNameChange(groupTitle, group) {
    const updatedTask = { title: groupTitle };

    try {
      await updateGroup(boardId, group.id, updatedTask);
    } catch (error) {
      console.error("Error updating group", error);
    }
  }

  function handleDelete(groupId, boardId) {
    removeGroup(boardId, groupId);
  }

  if (!currentBoard || (currentBoard.id !== boardId))
    return (
      <div >Loading...</div>
    );



  //................ IMPORTANT !!!
  function getGroupPos(id) {
    return groups.findIndex((group) => group.id === id)
  }


  function getTaskPos(taskId) {
    for (let i = 0; i < groups.length; i++) {
      const group = groups[i];

      const taskPos = group.tasks.findIndex(task => task.id === taskId);

      if (taskPos !== -1) {
        return { groupIndex: i, taskIndex: taskPos };
      }
    }

    return null;
  }

  function getLabelPos(id) {
    return labels.findIndex(label => label.id === id)
  }

  async function handleDragEnd(event) {
    const { active, over } = event;


    if (active === over) return;


    if (active.id[0] === 'l') {
      const originalLabelPos = getLabelPos(active.id);
      const moveToLabel = getLabelPos(over.id);

      const newLabelArray = arrayMove(labels, originalLabelPos, moveToLabel)

      await replaceLabels(boardId, newLabelArray)

    }


    if (active.id.length === 5) {
      const { groupIndex: originalGroupPos, taskIndex: originalTaskPos } = getTaskPos(active.id);
      const { groupIndex: moveToGroupPos, taskIndex: moveToTaskPos } = getTaskPos(over.id);

      if (originalGroupPos !== moveToGroupPos) {
        const movedTask = groups[originalGroupPos].tasks[originalTaskPos];

        groups[originalGroupPos].tasks.splice(originalTaskPos, 1);

        groups[moveToGroupPos].tasks.splice(moveToTaskPos, 0, movedTask);


        return;
      }

      const newTaskOrder = arrayMove(groups[originalGroupPos].tasks, originalTaskPos, moveToTaskPos);
      groups[originalGroupPos].tasks = newTaskOrder;

      console.log(newTaskOrder);
    }

    const originalPos = getGroupPos(active.id);
    const moveToPos = getGroupPos(over.id);
    const newGroupsOrder = arrayMove(groups, originalPos, moveToPos);

    await replaceGroups(boardId, newGroupsOrder);
  }

  return (
    <div className="board-details">
      <BoardDetailsHeader handleAddTask={handleAddTask} boardTitle={currentBoard.title} boardId={currentBoard.id} />
      {currentBoard.groups.length > 0 ? (
        <section className="group-list" >
          <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
            <SortableContext items={groups.map((group) => group.id)} strategy={verticalListSortingStrategy}>
              {groups.map((group) => (
                < GroupPreview
                  id={group.id}
                  group={group}
                  labels={currentBoard.labels}
                  loggedinUser={loggedinUser}
                  progress={progress}
                  key={group.id}
                  onTaskUpdate={onTaskUpdate}
                  checkedBoxes={checkedBoxes}
                  checkedGroups={checkedGroups}
                  handleMasterCheckboxClick={handleMasterCheckboxClick}
                  handleCheckBoxClick={handleCheckBoxClick}
                  handleAddTask={handleAddTask}
                  handleGroupNameChange={handleGroupNameChange}
                  handleDelete={handleDelete}
                  boardId={boardId}
                  users={users}
                  chatTempInfoUpdate={chatTempInfoUpdate}
                  openChat={openChat}
                />
              ))}
            </SortableContext>
          </DndContext>
          <button className="modal-save-btn" onClick={handleAddGroup}>
            +Add a new group
          </button>
          {checkedBoxes.length > 0 && (
            <SelectedTasksModal
              checkedTasks={checkedBoxes}
              handleDeleteTasks={handleDeleteTasks}
            />
          )}
        </section>
      ) : (
        boards.find((board) => board.id === boardId).groups.length === 0 ? (
          <section className="no-groups-result">
            <img
              className="search-empty-board-image"
              src="https://cdn.monday.com/images/search_empty_state.svg"
            ></img>
            <h1>No groups here yet, add your first!</h1>
            <button className="modal-save-btn" onClick={handleAddGroup}>
              +Add a new group
            </button>
          </section>
        ) : (
          <section className="no-groups-result">
            <img
              className="search-empty-board-image"
              src="https://cdn.monday.com/images/search_empty_state.svg"
            ></img>
            <h1>No tasks match this filter</h1>
          </section>
        )
      )}

      {/* </section> */}
    </div>
  );
};

export default BoardDetails;
