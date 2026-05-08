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
      description: 'Interactive compiler and code analysis platform built with Angular, TailwindCSS, Java and Spring Boot. Implements MiniScript, a custom programming language designed from scratch, allowing users to visualize every stage of the compilation process including tokenization, AST generation, bytecode execution and memory management. Features an integrated conversational assistant with persistent chat history for code-related support and analysis. The backend follows an MVC architecture and applies design patterns such as Strategy, Template Method and Factory Method to ensure scalability, modularity and maintainable compiler workflows.',
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
      description: 'Reactive web application built with modern Angular and RxJS, designed to search and explore GIFs in real time through the Giphy API. Implements reactive data flows, optimized HTTP communication and persistent local storage for recent searches and user history. Focused on performance, scalable state handling and efficient integration with external APIs while delivering a fast and interactive user experience.',
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
      description:'Real-time 3D multiplayer game developed with Three.js and React, featuring interactive environments, physics-based gameplay and custom 3D assets created in Blender. Integrates a Node.js and Express backend with MongoDB for authentication, player progression, score tracking and persistent game data. Includes real-time multiplayer communication through Socket.io, collectible systems, progressive levels and reward mechanics. Designed with a scalable full-stack architecture focused on performance, immersive gameplay and cloud deployment using Vercel, Render and MongoDB Atlas.',
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
