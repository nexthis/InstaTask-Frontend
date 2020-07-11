import { lazy } from "react";
const Home = lazy(() => import('pages/Home'));
const Task = lazy(() => import('pages/Task'));
const AddTask = lazy(() => import('pages/AddTask'));
const NotFound = lazy(() => import('pages/404'));
const Unauthorized = lazy(() => import('pages/401'));

export default [
  {
    path: "/",
    exact: true,
    name: "Home",
    auth: false,
    component: Home,
  },
  {
    path: "/task",
    exact: true,
    name: "Task",
    auth: true,
    component: Task,
  },
  {
    path: "/add",
    exact: true,
    name: "AddTask",
    auth: true,
    component: AddTask,
  },
  {
    path: "/unauthorized",
    exact: true,
    name: "401",
    auth: false,
    component: Unauthorized,
  },
  {
    path: "*",
    exact: false,
    name: "404",
    auth: false,
    component: NotFound,
  },
];
