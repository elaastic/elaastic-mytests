export class Answer {

  public readonly NOTE_MAX = 5;

  private _title: string;
  private _note: number;
  private _name: string;

  constructor(title: string, note: number, name: string) {
    this._title = title;
    this._note = note;
    this._name = name;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get note(): number {
    return this._note;
  }

  set note(value: number) {
    this._note = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}
