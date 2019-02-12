import {Answer} from './answer';
import {Question} from './question';
import {Test} from './test';
import {Student} from './student';

// Que veut dire JPA
export const REPQ1T1: Answer [] = [
  new Answer('Java persistence API', 5, 'Vincent', 5)
];

// Quel est le nombre de couhe du modele OSI ?
export const REPQ2T1: Answer [] = [
  new Answer('7 couche, la couche application, reseau, liason, physique ',
    3.5,
    'Flavien', 6)
];

// Citer 2 application qui sont responsive ?
export const REPQ3T1: Answer [] = [
  new Answer('Google, amazon',
    4.5,
    'Thommas', 3),
  new Answer('Angular.io, slack.com',
    4,
    'Victor', 4),
  new Answer('Un site non responsive, site mairie rodez',
    3,
    'Iris', 2)
];

export const QUESTT1: Question [] = [
  new Question(1, 'Que veut dire JPA ?',
    REPQ1T1),
  new Question(2, 'Quel est le nombre de couche du modele OSI et quel est leur nom ?',
    REPQ2T1),
  new Question(3, 'Citer 2 application qui sont responsive ?',
    REPQ3T1)
];

export const TEST1: Test = new Test(1, 'Programmation', QUESTT1 );


// Comment fonctionne la mairie ?
export const REPQ1T2: Answer [] = [
  new Answer('Je sais pas', 0, 'Inconue', 7)
];

export const QUESTT2: Question [] = [
  new Question(4, 'Comment fonctionne la mairie ?',
    REPQ1T2)
];

export const TEST2: Test = new Test(2, 'Culture G', QUESTT2 );

export const STUD1: Student = new Student(
  0,
  'Gromnur',
  [TEST1, TEST2]
  );
