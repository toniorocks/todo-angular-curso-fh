export class Todo {
  id: number | undefined;
  title: string | undefined;
  completed: boolean | undefined;
  constructor(title: string) {
    this.id = Math.random();
    this.title = title;
    this.completed = false;
  }
}