import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Stat  { readonly value: string; readonly label: string; }
interface Shape {
  readonly top: string; readonly left: string;
  readonly width: string; readonly height: string;
  readonly color: string; readonly rotate: string;
  readonly delay: string; readonly borderRadius: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  readonly stats: ReadonlyArray<Stat> = [
    { value: '1+',  label: 'Years of exp' },
    { value: '20+', label: 'Projects delivered' },
  ];

  readonly shapes: ReadonlyArray<Shape> = [
    { top: '20%', left: '2%',  width: '35px', height: '12px', color: '#a29bfe', rotate: '30deg',  delay: '0.5s', borderRadius: '3px' },
    { top: '70%', left: '95%', width: '12px', height: '35px', color: '#55efc4', rotate: '-20deg', delay: '1.2s', borderRadius: '3px' },
    { top: '85%', left: '10%', width: '10px', height: '10px', color: '#ffeaa7', rotate: '45deg',  delay: '0.8s', borderRadius: '2px' },
    { top: '15%', left: '92%', width: '42px', height: '10px', color: '#ff9f43', rotate: '-10deg', delay: '1.8s', borderRadius: '3px' },
  ];
}
