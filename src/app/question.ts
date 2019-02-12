import {Answer} from './answer';

export class Question {

  private _id: number;
  private _title: string;
  private _anwsers: Answer[];

  constructor(id: number, title: string, answers: Answer[]) {
    this._id = id;
    this._title = title;
    this._anwsers = answers;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get anwsers(): Answer[] {
    return this._anwsers;
  }

  set anwsers(value: Answer[]) {
    this._anwsers = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}
