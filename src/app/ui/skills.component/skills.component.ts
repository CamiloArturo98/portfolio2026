import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Skill {
  readonly name: string;
  readonly color: string;
  readonly textColor: string;
}
interface Shape {
  readonly top: string; readonly left: string;
  readonly width: string; readonly height: string;
  readonly color: string; readonly rotate: string;
  readonly delay: string; readonly borderRadius: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  readonly skills: ReadonlyArray<Skill> = [
    { name: 'Angular',      color: '#ff4d8d', textColor: '#0a0a0a' },
    { name: 'TypeScript',   color: '#74b9ff', textColor: '#0a0a0a' },
    { name: 'JavaScript',   color: '#ffeaa7', textColor: '#0a0a0a' },
    { name: 'React',        color: '#4ecdc4', textColor: '#0a0a0a' },
    { name: 'HTML5',        color: '#ff9f43', textColor: '#0a0a0a' },
    { name: 'CSS3',  color: '#a29bfe', textColor: '#0a0a0a' },
    { name: 'Tailwind CSS', color: '#55efc4', textColor: '#0a0a0a' },
    // { name: 'Node.js',      color: '#fd79a8', textColor: '#0a0a0a' },
    { name: 'Git / GitHub', color: '#e17055', textColor: '#0a0a0a' },
    { name: 'REST APIs',    color: '#00cec9', textColor: '#0a0a0a' },
    { name: 'RxJS',         color: '#6c5ce7', textColor: '#ffffff' },
    { name: 'Figma',        color: '#fdcb6e', textColor: '#0a0a0a' },
  ];

  readonly shapes: ReadonlyArray<Shape> = [
    { top: '10%', left: '3%',  width: '45px', height: '14px', color: '#ff4d8d', rotate: '20deg',  delay: '0s',   borderRadius: '3px' },
    { top: '60%', left: '94%', width: '14px', height: '45px', color: '#4ecdc4', rotate: '-15deg', delay: '1s',   borderRadius: '3px' },
    { top: '80%', left: '5%',  width: '10px', height: '10px', color: '#ffeaa7', rotate: '45deg',  delay: '0.7s', borderRadius: '2px' },
    { top: '30%', left: '96%', width: '38px', height: '10px', color: '#a29bfe', rotate: '10deg',  delay: '1.5s', borderRadius: '3px' },
  ];
}
