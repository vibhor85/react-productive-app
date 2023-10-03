import { useDispatch } from "react-redux";
import {
  editSpecificTodo,
  removeTodo,
  toggleCompletedTodo,
} from "../../slices/TodoSlice";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import { Check, Close, Delete, Edit } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { Draggable, Droppable } from "react-beautiful-dnd";

const StyledIconButton = styled(IconButton)({
  padding: "15px",
});

const TodoItem = ({ todo, index }) => {
  const [editing, setEditing] = useState(false);
  const [inputText, setInputText] = useState(todo.task);
  const ref = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    editing && ref.current.focus();
  });

  const deleteTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handlekeydown = (e) => {
    if (e.key === "Enter") {
      dispatch(editSpecificTodo({ id: todo.id, text: inputText }));
      setEditing(false);
    }
  };
  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided) => (
        <ListItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          secondaryAction={
            <>
              <StyledIconButton
                edge="end"
                onClick={() => dispatch(toggleCompletedTodo(todo.id))}
              >
                {!todo.completed ? <Check /> : <Close />}
              </StyledIconButton>
              <StyledIconButton edge="end" onClick={() => setEditing(true)}>
                <Edit />
              </StyledIconButton>
              <StyledIconButton edge="end" onClick={() => deleteTodo(todo.id)}>
                <Delete />
              </StyledIconButton>
            </>
          }
          sx={{
            boxShadow: "1px 1px 1px rgba(0,0,0,0.75)",
            background: "white",
          }}
        >
          <ListItemText
            primary={todo.task}
            sx={{ display: !editing ? "block" : "none" }}
          />
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            style={{ display: editing ? "block" : "none" }}
            onKeyDown={handlekeydown}
            ref={ref}
          />
        </ListItem>
      )}
    </Draggable>
  );
};
export default TodoItem;
