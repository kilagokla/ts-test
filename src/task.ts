 export default class Task {
  private _title: string;
  public get title(): string {
    return this._title;
  }

  constructor(title: string) {
    this._title = title;
  }
}
