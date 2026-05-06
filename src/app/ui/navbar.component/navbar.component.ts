import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface NavLink {
  readonly label: string;
  readonly href: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
})
export class NavbarComponent {
  readonly isMenuOpen = signal(false);

  readonly navLinks: ReadonlyArray<NavLink> = [
    { label: 'About',    href: '#about'    },
    { label: 'Skills',   href: '#skills'   },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact',  href: '#contact'  },
  ];

  toggleMenu(): void { this.isMenuOpen.update(v => !v); }
  closeMenu(): void  { this.isMenuOpen.set(false); }
}
