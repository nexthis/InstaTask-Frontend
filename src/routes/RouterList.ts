import {lazy} from "react";
const  Home = lazy(() => import('pages/Home')); 
const  Task = lazy(() => import('pages/Task')); 
const  AddTask = lazy(() => import('pages/AddTask')); 

export default [
    {
      path: "/",
      exact: true,
      name: "Home",
      component: Home,
    },
    {
      path: "/task",
      exact: false,
      name: "Task",
      component: Task,
    },
    {
      path: "/add",
      exact: false,
      name: "AddTask",
      component: AddTask,
    },
];