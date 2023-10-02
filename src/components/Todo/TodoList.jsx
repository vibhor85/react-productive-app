import { Box, List, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import styled from "@emotion/styled";

const StyledStack = styled(Stack)({
  width: "100%",
});
const StyledTypo = styled(Typography)({
  textAlign: "center",
});

const StyledList = styled(List)({
  padding: "20px",
});

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction='row'>
        <StyledStack direction='column' width='100%'>
          <StyledTypo variant='h5'>Task to Complete</StyledTypo>
          <StyledList>
            {todos.length > 0 &&
              todos.map(
                (todo) =>
                  !todo.completed && <TodoItem key={todo.id} todo={todo} />
              )}
            {todos.length === 0 && (
              <Typography variant='h5' textAlign='center'>
                No Task Present
              </Typography>
            )}
          </StyledList>
        </StyledStack>
        <StyledStack direction='column'>
          <StyledTypo variant='h5'>Completed Task</StyledTypo>
          <StyledList>
            {todos.length > 0 &&
              todos.map(
                (todo) =>
                  todo.completed && <TodoItem key={todo.id} todo={todo} />
              )}
            {todos.length === 0 && (
              <Typography variant='h5' textAlign='center'>
                No Task Present
              </Typography>
            )}
          </StyledList>
        </StyledStack>
      </Stack>
    </Box>
  );
};
export default TodoList;
