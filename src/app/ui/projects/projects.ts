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
      title: 'Mini compilador con IA',
      subtitle: 'Aplicación full-stack',
      description: 'Mini compilador moderno desarrollado con Angular y Tailwind en el frontend, y Java con Spring Boot en el backend. Implementa MiniScript, un lenguaje de programación diseñado desde cero, permitiendo analizar y procesar código fuente a través de todas las etapas del compilador. La aplicación expone de forma visual y detallada la generación de tokens, construcción del AST, bytecode y gestión de memoria. Integra un chat interactivo para resolver dudas sobre el código, con persistencia de historial de conversaciones mediante comunicación HTTP. El backend sigue una arquitectura basada en el patrón MVC e incorpora patrones de diseño como Strategy, Template Method y Factory Method para garantizar escalabilidad, mantenibilidad y claridad en la lógica de compilación.',
      tags: ['Angular', 'Java', 'PostgreSQL', 'Spring boot'],
      accentColor: '#ff4d8d',
      liveUrl: 'https://minicompiler-front.vercel.app/',
      repoUrl: 'https://github.com/CamiloArturo98/minicompiler-backend.git',
      imageAlt: 'Captura de pantalla de mini compilador web',
      gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      imageSrc : 'assets/minicompiler.jpeg'
    },
    {
      id: 2,
      title: 'GifsApp',
      subtitle: 'Buscador de Gifs interactivo',
      description: 'Aplicación web hecha con angular moderno que permite buscar GIFs en tiempo real mediante la integración con la API de Giphy. Implementa programación reactiva con RxJS para gestionar flujos de datos de forma eficiente y mejorar la experiencia del usuario. Incluye persistencia de búsquedas recientes en almacenamiento local, permitiendo mantener el historial incluso después de recargar la aplicación. Enfocada en rendimiento, manejo de estados reactivos y consumo optimizado de APIs externas.',
      tags: ['TypeScript', 'Angular', 'HTML', 'Giphy API','HTTP Client', 'Reactive Programming'],
      accentColor: '#a29bfe',
      liveUrl: 'https://gifs-app-pearl.vercel.app/dashboard/trending',
      repoUrl: 'https://github.com/CamiloArturo98/Gifs-app.git',
      imageAlt: 'Captura de GifsApp',
      gradient: 'linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #11998e 100%)',
      imageSrc : 'assets/Gifs-project.jpeg'
    },
    {
      id: 3,
      title: 'Gorilla game',
      subtitle: 'Juego ',
      description: 'Videojuego 3D interactivo en tiempo real desarrollado con Three.js, integrando modelos creados en Blender y un sistema de física dinámico basado en CANNON. El proyecto incluye backend en Node.js con Express y MongoDB para autenticación de usuarios, almacenamiento de puntajes y estadísticas. El frontend en React permite una experiencia modular y escalable con UI moderna, gestión de estado y comunicación directa con la API. Incorpora sistema multijugador en tiempo real mediante Socket.io, niveles progresivos con lógica de recolección de objetos, portal de finalización y sistema de recompensas. Arquitectura optimizada para rendimiento, escalabilidad y despliegue en producción usando servicios cloud como Render, Vercel y MongoDB Atlas.',
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
      accentColor: '#4ecdc4',
      liveUrl: 'https://blender-threejs-mongo-me94-git-main-camilo-arturos-projects.vercel.app/',
      repoUrl: 'https://github.com/CamiloArturo98/Blender_Threejs_Mongo.git',
      imageAlt: 'Captura de un nivel del juego',
      gradient: 'linear-gradient(135deg, #0a0a1a 0%, #1a2a1a 50%, #004d40 100%)',
      imageSrc : 'assets/game.jpeg'
    },
  ];

  readonly shapes: ReadonlyArray<Shape> = [
    { top: '8%',  left: '5%',  width: '40px', height: '12px', color: '#ff9f43', rotate: '-25deg', delay: '0s',   borderRadius: '3px' },
    { top: '50%', left: '96%', width: '12px', height: '40px', color: '#55efc4', rotate: '20deg',  delay: '1s',   borderRadius: '3px' },
    { top: '85%', left: '3%',  width: '8px',  height: '8px',  color: '#fd79a8', rotate: '45deg',  delay: '0.6s', borderRadius: '50%' },
    { top: '20%', left: '93%', width: '36px', height: '10px', color: '#74b9ff', rotate: '-12deg', delay: '1.8s', borderRadius: '3px' },
  ];
}
