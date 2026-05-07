import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

interface ContactInfo { readonly icon: string; readonly label: string; readonly value: string; readonly href: string; }
interface Shape {
  readonly top: string; readonly left: string;
  readonly width: string; readonly height: string;
  readonly color: string; readonly rotate: string;
  readonly delay: string; readonly borderRadius: string;
}

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);

  readonly isSubmitting = signal(false);
  readonly isSubmitted  = signal(false);

  readonly contactForm = this.fb.group({
    name:    ['', [Validators.required, Validators.minLength(2)]],
    email:   ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(3)]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  readonly contactInfo: ReadonlyArray<ContactInfo> = [
    { icon: 'email',    label: 'Email',      value: 'arturocamilo72@gmail.com',     href: 'mailto:arturocamilo72@gmail.com' },
    { icon: 'phone',    label: 'Phone',      value: '+57 300 259 7905',             href: 'tel:+57 300 259 7905'            },
    { icon: 'location', label: 'Location',   value: 'San Juan de Pasto Colombia',   href: '#'                               },
  ];

  readonly shapes: ReadonlyArray<Shape> = [
    { top: '10%', left: '4%',  width: '38px', height: '12px', color: '#4ecdc4', rotate: '22deg',  delay: '0s',   borderRadius: '3px' },
    { top: '75%', left: '93%', width: '12px', height: '38px', color: '#ff4d8d', rotate: '-18deg', delay: '1.2s', borderRadius: '3px' },
    { top: '88%', left: '8%',  width: '9px',  height: '9px',  color: '#a29bfe', rotate: '45deg',  delay: '0.8s', borderRadius: '2px' },
    { top: '20%', left: '90%', width: '42px', height: '10px', color: '#ffeaa7', rotate: '-5deg',  delay: '1.6s', borderRadius: '3px' },
    { top: '55%', left: '2%',  width: '10px', height: '32px', color: '#ff9f43', rotate: '30deg',  delay: '2.1s', borderRadius: '3px' },
  ];

  isFieldInvalid(field: string): boolean {
    const ctrl = this.contactForm.get(field);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched));
  }

  onSubmit(): void {
    if (this.contactForm.invalid) { this.contactForm.markAllAsTouched(); return; }
    this.isSubmitting.set(true);
    // Reemplaza este setTimeout con tu llamada real a la API
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
      this.contactForm.reset();
    }, 1500);
  }
}
