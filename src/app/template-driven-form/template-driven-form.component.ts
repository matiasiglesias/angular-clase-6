import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css',
})
export class TemplateDrivenFormComponent {
  submitted = false;
  onSubmit(formulario: any) {
    console.log('Datos del formulario:', formulario.value);
    this.submitted = true; // Indica que el formulario ha sido enviado
    formulario.reset(); // Resetea el formulario después del envío
  }
}
