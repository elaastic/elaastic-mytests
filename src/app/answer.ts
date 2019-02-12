export class Answer {
  get nbEval(): number {
    return this._nbEval;
  }

  set nbEval(value: number) {
    this._nbEval = value;
  }

  public readonly NOTE_MAX = 5;

  private _title: string;
  private _note: number;
  private _name: string;
  private _nbEval: number;

  constructor(title: string, note: number, name: string, nbEv: number) {
    this._title = title;
    this._note = note;
    this._name = name;
    this._nbEval = nbEv;
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
