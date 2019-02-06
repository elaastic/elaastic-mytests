import {Answer} from './answer';

export class Question {

  private _title: string;
  private _anwsers: Answer[];

  constructor(title: string, answers: Answer[]) {
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
}
