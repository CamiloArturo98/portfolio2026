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
    { name: 'Angular',      color: '#f59e0b', textColor: '#ffffff' },
    { name: 'TypeScript',   color: '#d97706', textColor: '#ffffff' },
    { name: 'JavaScript',   color: '#fbbf24', textColor: '#0a0a0a' },
    { name: 'React',        color: '#f59e0b', textColor: '#ffffff' },
    { name: 'HTML5',        color: '#b45309', textColor: '#ffffff' },
    { name: 'CSS3',         color: '#fde68a', textColor: '#0a0a0a' },
    { name: 'Tailwind CSS', color: '#fcd34d', textColor: '#0a0a0a' },
    { name: 'N8N',          color: '#92400e', textColor: '#ffffff' },
    { name: 'Git / GitHub', color: '#78350f', textColor: '#ffffff' },
    { name: 'REST APIs',    color: '#f59e0b', textColor: '#ffffff' },
    { name: 'RxJS',         color: '#451a03', textColor: '#ffffff' },
    { name: 'Figma',        color: '#fde68a', textColor: '#0a0a0a' },
    { name: 'JAVA',         color: '#d97706', textColor: '#ffffff' },
    { name: 'Spring boot',  color: '#b45309', textColor: '#ffffff' },
    { name: 'NestJs',  color: '#b45309', textColor: '#ffffff' },
    { name: 'NodeJs',  color: '#b45309', textColor: '#ffffff' },
  ];

  readonly shapes: ReadonlyArray<Shape> = [
    { top: '10%', left: '3%',  width: '45px', height: '14px', color: '#f59e0b', rotate: '20deg',  delay: '0s',   borderRadius: '3px' },
    { top: '60%', left: '94%', width: '14px', height: '45px', color: '#d97706', rotate: '-15deg', delay: '1s',   borderRadius: '3px' },
    { top: '80%', left: '5%',  width: '10px', height: '10px', color: '#fde68a', rotate: '45deg',  delay: '0.7s', borderRadius: '2px' },
    { top: '30%', left: '96%', width: '38px', height: '10px', color: '#fbbf24', rotate: '10deg',  delay: '1.5s', borderRadius: '3px' },
  ];
}
