import { Box, Typography } from "@mui/material";
import TodoInput from "../components/Todo/TodoInput";
import TodoList from "../components/Todo/TodoList";

const Todo = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <Typography variant='h4' p='20px'>
        Todo List
      </Typography>
      <TodoInput />
      <TodoList />
    </Box>
  );
};
export default Todo;
