import React from 'react';
import ReactDOM from 'react-dom/client';
import AccordionCard from './Accordion';
import Demo from './App';
import MovingDot from './dot';
import List from './toDo';
import ToDoDelete from './toDoDelete';
import ProgressBarApp from './ProgressBar/ProgressBarApp';
import FormDate from './FormData/FormData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Demo />
    <List />
    <AccordionCard />
    <ToDoDelete />
    <ProgressBarApp />
    <FormDate />
    <MovingDot />
  </React.StrictMode>
);
