import { Box, List, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import styled from "@emotion/styled";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { rearrangeTodo, toggleCompletedTodo } from "../../slices/TodoSlice";

const StyledStack = styled(Stack)({
  width: "100%",
  minHeight: "200px",
});
const StyledTypo = styled(Typography)({
  textAlign: "center",
});

const StyledList = styled(List)({
  padding: "20px",
});

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (source.droppableId !== destination.droppableId) {
      dispatch(toggleCompletedTodo(draggableId));
    }
    if (source.index !== destination.index) {
      dispatch(
        rearrangeTodo({
          source: source.index,
          destination: destination.index,
          id: draggableId,
        })
      );
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box sx={{ width: "100%" }}>
        <Stack direction={{ xs: "column", md: "row" }}>
          <StyledStack direction="column" width="100%">
            <StyledTypo variant="h5">Task to Complete</StyledTypo>
            <Droppable droppableId="dr-1">
              {(provided) => (
                <StyledList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {todos.length > 0 &&
                    todos.map(
                      (todo, index) =>
                        !todo.completed && (
                          <TodoItem key={todo.id} todo={todo} index={index} />
                        )
                    )}
                  {provided.placeholder}
                </StyledList>
              )}
            </Droppable>
            {todos.length === 0 && (
              <Typography variant="h5" textAlign="center">
                No Task Present
              </Typography>
            )}
          </StyledStack>
          <StyledStack direction="column">
            <StyledTypo variant="h5">Completed Task</StyledTypo>
            <Droppable droppableId="dr-2">
              {(provided) => (
                <StyledList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {todos.length > 0 &&
                    todos.map(
                      (todo, index) =>
                        todo.completed && (
                          <TodoItem key={todo.id} todo={todo} index={index} />
                        )
                    )}
                  {provided.placeholder}
                </StyledList>
              )}
            </Droppable>
            {todos.length === 0 && (
              <Typography variant="h5" textAlign="center">
                No Task Present
              </Typography>
            )}
          </StyledStack>
        </Stack>
      </Box>
    </DragDropContext>
  );
};
export default TodoList;
