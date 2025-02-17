import { For } from './../../../../pipes/node_modules/@babel/types/lib/index-legacy.d';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css',
})
export class ReactiveFormsComponent implements OnInit {
  gender = ['male', 'female'];
  signUpForm!: FormGroup;
  restrictedNames = ['Suk'];

  constructor() {}

  get hobbyList() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  isRestrictedUserName(control: FormControl): { [s: string]: boolean } | null {
    if (this.restrictedNames.includes(control.value)) {
      return { isRestrictedUserName: true };
    }
    return null;
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        this.isRestrictedUserName.bind(this),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl('female'),
      hobbies: new FormArray([]),
    });
  }

  addHobbies() {
    let control: any = new FormControl(null, Validators.required);
    return (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }
}
