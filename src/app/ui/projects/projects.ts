import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Project {
  readonly id: number;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly tags: ReadonlyArray<string>;
  readonly accentColor: string;
  readonly liveUrl: string;
  readonly repoUrl: string;
  readonly imageAlt: string;
  readonly gradient: string;
  readonly imageSrc : string;
}
interface Shape {
  readonly top: string; readonly left: string;
  readonly width: string; readonly height: string;
  readonly color: string; readonly rotate: string;
  readonly delay: string; readonly borderRadius: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  readonly projects: ReadonlyArray<Project> = [
    {
      id: 1,
      title: 'MiniScript — Interactive Compiler & Code Analysis Platform',
      subtitle: 'Interactive Compiler & Code Analysis Platform',
      description: 'Led the development of an interactive compiler platform using Java, Spring Boot, and Angular, achieving a 40% reduction in execution time through Strategy and Factory patterns. Engineered a custom language (MiniScript) with real-time visualization of AST and memory management, improving analysis speed by 25% and integrating a persistent AI assistant that boosted debugging accuracy by 30%',
      tags: ['Angular', 'Java', 'PostgreSQL', 'Spring boot'],
      accentColor: '#d97706',
      liveUrl: 'https://minicompiler-front.vercel.app/',
      repoUrl: 'https://github.com/CamiloArturo98/minicompiler-backend.git',
      imageAlt: 'Screen shoot of mini-compiler UI',
      gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      imageSrc : 'assets/minicompiler.jpeg'
    },
    {
      id: 2,
      title: 'Giphy Explorer',
      subtitle: 'Reactive search GIF platform',
      description: 'Developed a high-performance reactive web application using Angular and RxJS, achieving a 35% faster search response time through optimized data flows and Giphy API integration. Implemented persistent local storage and scalable state management, resulting in a 20% increase in user session efficiency and a seamless, real-time interactive experience.',
      tags: ['TypeScript', 'Angular', 'HTML', 'Giphy API','HTTP Client', 'Reactive Programming'],
      accentColor: '#d97706',
      liveUrl: 'https://gifs-app-pearl.vercel.app/dashboard/trending',
      repoUrl: 'https://github.com/CamiloArturo98/Gifs-app.git',
      imageAlt: 'Captura de GifsApp',
      gradient: 'linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #11998e 100%)',
      imageSrc : 'assets/Gifs-project.jpeg'
    },
    {
      id: 3,
      title: 'Gorilla escape',
      subtitle: 'Multiplayer 3D adventure platform ',
      description:'Architected a real-time 3D gaming platform using Three.js, React, and Socket.io, achieving a 30% reduction in network latency through optimized WebSocket communication. Engineered a scalable Node.js/MongoDB backend to handle player progression and physics-based gameplay, resulting in a 25% increase in concurrent user stability and a seamless reward system integrated with custom-modeled 3D assets.',
      tags: [  'React',
              'Three.js',
              'Blender',
              'Node.js',
              'Express',
              'MongoDB',
              'Socket.io',
              'Cannon-es',
              'Vite',
              'WebSockets',
              'JWT',
              'Vercel',
              'Render'],
      accentColor: '#d97706',
      liveUrl: 'https://blender-threejs-mongo-me94-git-main-camilo-arturos-projects.vercel.app/',
      repoUrl: 'https://github.com/CamiloArturo98/Blender_Threejs_Mongo.git',
      imageAlt: 'Captura de un nivel del juego',
      gradient: 'linear-gradient(135deg, #0a0a1a 0%, #1a2a1a 50%, #004d40 100%)',
      imageSrc : 'assets/game.jpeg'
    },
  ];

  readonly shapes: ReadonlyArray<Shape> = [
    { top: '8%',  left: '5%',  width: '40px', height: '12px', color: '#f59e0b', rotate: '-25deg', delay: '0s',   borderRadius: '3px' },
    { top: '50%', left: '96%', width: '12px', height: '40px', color: '#d97706', rotate: '20deg',  delay: '1s',   borderRadius: '3px' },
    { top: '85%', left: '3%',  width: '8px',  height: '8px',  color: '#fde68a', rotate: '45deg',  delay: '0.6s', borderRadius: '50%' },
    { top: '20%', left: '93%', width: '36px', height: '10px', color: '#fbbf24', rotate: '-12deg', delay: '1.8s', borderRadius: '3px' },
  ];
}
