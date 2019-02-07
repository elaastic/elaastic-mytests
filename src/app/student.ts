import {Test} from './test';

export class Student {

  private _id: number;
  private _pseudo: string;
  private _tests: Test[];

  constructor(id: number, pseudo: string, tests: Test[]) {
    this._id = id;
    this._pseudo = pseudo;
    this._tests = tests;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get pseudo(): string {
    return this._pseudo;
  }

  set pseudo(value: string) {
    this._pseudo = value;
  }

  get tests(): Test[] {
    return this._tests;
  }

  set tests(value: Test[]) {
    this._tests = value;
  }
}
