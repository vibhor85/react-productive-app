import { useDispatch } from "react-redux";
import {
  editSpecificTodo,
  removeTodo,
  toggleCompletedTodo,
} from "../../slices/TodoSlice";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import { Check, Close, Delete, Edit } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";

const TodoItem = ({ todo }) => {
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
    <ListItem
      secondaryAction={
        <>
          <IconButton
            edge='end'
            onClick={() => dispatch(toggleCompletedTodo(todo.id))}>
            {!todo.completed ? <Check /> : <Close />}
          </IconButton>
          <IconButton edge='end' onClick={() => setEditing(true)}>
            <Edit />
          </IconButton>
          <IconButton edge='end' onClick={() => deleteTodo(todo.id)}>
            <Delete />
          </IconButton>
        </>
      }
      sx={{ boxShadow: "1px 1px 1px rgba(0,0,0,0.75)" }}>
      <ListItemText
        primary={todo.task}
        sx={{ display: !editing ? "block" : "none" }}
      />
      <input
        type='text'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={{ display: editing ? "block" : "none" }}
        onKeyDown={handlekeydown}
        ref={ref}
      />
    </ListItem>
  );
};
export default TodoItem;
