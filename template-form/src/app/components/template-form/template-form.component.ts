import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
})
export class TemplateFormComponent {
  @ViewChild('f') signUpForm!: NgForm;

  user: {
    userData: { username: string; email: string };
    gender: string;
  } = {
    userData: { username: '', email: '' },
    gender: '',
  };

  onSubmitForm() {
    this.user.userData.username = this.signUpForm.value.userData.username;
    this.user.userData.email = this.signUpForm.value.userData.email;
    this.user.gender = this.signUpForm.value.gender;

    this.signUpForm.reset();
  }

  onClickFillButton() {
    this.signUpForm.setValue({
      userData: {
        username: 'Sukanta',
        email: 'sukantabhun@gmain.com',
      },
      gender: 'male',
    });
  }
}
