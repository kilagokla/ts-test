import Task from './task';

export default class Subtask extends Task {
  private _parent: Task;
  public get parent(): Task {
    return this._parent;
  }

  constructor(title: string, parent: Task) {
    super(title);
    this._parent = parent;
  }
}