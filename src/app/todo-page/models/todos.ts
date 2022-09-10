export enum TODO_STATUS {
  IN_PROGRESS = 'inProgress',
  DONE = 'done',
}
export interface TODO {
  id: string;
  title: string;
  description: string;
  status: TODO_STATUS;
}
