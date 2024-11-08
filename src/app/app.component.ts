import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormArrayComponent } from './form-array/form-array.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule,
    TemplateDrivenFormComponent,
    ReactiveFormsComponent,
    FormArrayComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  templateDriven = false;
  reactiveForm = false;
  formArray = false;

  toggleTemplateDriven(): void {
    this.templateDriven = !this.templateDriven;
  }

  toggleReactiveForm(): void {
    this.reactiveForm = !this.reactiveForm;
  }

  toggleFormArray = (): void => {
    this.formArray = !this.formArray;
  };
}
