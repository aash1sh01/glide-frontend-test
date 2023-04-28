import React, { useState } from 'react';
import {
  ListGroup,
  ListGroupItem,
  InputGroup,
  Input,
  Button,
} from 'reactstrap';
import '../Styles/TodoList.css';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <div className="to-do-list">
      <InputGroup>
        <Input
          placeholder="Add new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
          <Button color="primary" onClick={handleAddTask}>
            +
          </Button>
      </InputGroup>
      <ListGroup className="mt-3">
        {tasks.map((task, index) => (
          <ListGroupItem key={index} className="bg-info text-white">
            {task}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default ToDoList;
