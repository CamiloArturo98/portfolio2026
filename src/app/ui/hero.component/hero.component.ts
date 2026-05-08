import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Shape {
  readonly top: string;
  readonly left: string;
  readonly width: string;
  readonly height: string;
  readonly color: string;
  readonly rotate: string;
  readonly delay: string;
  readonly borderRadius: string;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  readonly shapes: ReadonlyArray<Shape> = [
    { top: '15%', left: '8%',  width: '40px', height: '14px', color: '#f59e0b', rotate: '-20deg', delay: '0s',   borderRadius: '3px'  },
    { top: '25%', left: '75%', width: '14px', height: '40px', color: '#fbbf24', rotate: '15deg',  delay: '1s',   borderRadius: '3px'  },
    { top: '55%', left: '5%',  width: '12px', height: '12px', color: '#fde68a', rotate: '45deg',  delay: '0.5s', borderRadius: '2px'  },
    { top: '70%', left: '85%', width: '50px', height: '12px', color: '#d97706', rotate: '25deg',  delay: '1.5s', borderRadius: '3px'  },
    { top: '80%', left: '20%', width: '10px', height: '30px', color: '#f59e0b', rotate: '-35deg', delay: '2s',   borderRadius: '2px'  },
    { top: '40%', left: '90%', width: '30px', height: '10px', color: '#fcd34d', rotate: '10deg',  delay: '0.8s', borderRadius: '3px'  },
    { top: '10%', left: '55%', width: '8px',  height: '8px',  color: '#fbbf24', rotate: '20deg',  delay: '1.2s', borderRadius: '50%'  },
    { top: '88%', left: '60%', width: '36px', height: '10px', color: '#fde68a', rotate: '-15deg', delay: '0.3s', borderRadius: '3px'  },
];
}
