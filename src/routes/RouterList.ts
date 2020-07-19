import { lazy } from "react";
const Home = lazy(() => import('pages/Home'));
const Task = lazy(() => import('pages/Task'));
const AddTask = lazy(() => import('pages/AddTask'));
const ViewTask = lazy(() => import('pages/ViewTask'));

const NotFound = lazy(() => import('pages/404'));
const Unauthorized = lazy(() => import('pages/401'));


export enum Name {
  Home = '/',
  Task = '/task',
  AddTask = '/add',
  ViewTask = '/task/:userame/:id',
  Unauthorized = '/Unauthorized',
  NotFound = '*',
}

export default [
  {
    path: Name.Home,
    exact: true,
    auth: false,
    component: Home,
  },
  {
    path: Name.Task,
    exact: true,
    auth: true,
    component: Task,
  },
  {
    path: Name.AddTask,
    exact: true,
    auth: true,
    component: AddTask,
  },
  {
    path: Name.ViewTask,
    exact: true,
    auth: false,
    component: ViewTask,
  },
  {
    path: Name.Unauthorized,
    exact: true,
    auth: false,
    component: Unauthorized,
  },
  {
    path: Name.NotFound,
    exact: false,
    auth: false,
    component: NotFound,
  },
];
