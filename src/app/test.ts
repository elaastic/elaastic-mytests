import { Question } from './question';

export class Test {

  private _id: number;
  private _title: string;
  private _questions: Question[];

  constructor(id: number, title: string, questions: Question[]) {
    this._id = id;
    this._title = title;
    this._questions = questions;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get questions(): Question[] {
    return this._questions;
  }

  set questions(value: Question[]) {
    this._questions = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}
