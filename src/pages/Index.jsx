import { useState } from "react";
import { Container, VStack, Input, Button, List, ListItem, Checkbox, Text } from "@chakra-ui/react";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" mb={4}>Todo List</Text>
        <Input
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button onClick={addTask} colorScheme="teal" width="100%">
          Add Task
        </Button>
        <List spacing={3} width="100%">
          {tasks.map((task, index) => (
            <ListItem
              key={index}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              bg={task.completed ? "green.100" : "red.100"}
              p={2}
              borderRadius="md"
            >
              <Checkbox
                isChecked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              >
                {task.text}
              </Checkbox>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;