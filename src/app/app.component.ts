import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from './ui/navbar.component/navbar.component';
import { HeroComponent } from './ui/hero.component/hero.component';
import { AboutComponent } from './ui/about.component/about.component';
import { SkillsComponent } from './ui/skills.component/skills.component';
import { ProjectsComponent } from './ui/projects/projects';
import { ContactComponent } from './ui/contact.component/contact.component';


@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroComponent, AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
