import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../slices/TodoSlice";

const TodoInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const AddTodoHandler = (e) => {
    e.preventDefault();
    if (input === "") return;
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <Box
      component="form"
      p="20px"
      sx={{ width: { sx: "100%", md: "45%" }, display: "flex" }}
      onSubmit={AddTodoHandler}
    >
      <TextField
        id="outlined-basic"
        label="Enter Something"
        variant="outlined"
        sx={{ width: "100%" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Add
      </Button>
    </Box>
  );
};
export default TodoInput;
