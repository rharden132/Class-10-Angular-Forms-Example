import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form-reactive',
  templateUrl: './book-form-reactive.component.html',
  styleUrls: ['./book-form-reactive.component.css'],
})
export class BookFormReactiveComponent implements OnInit {
  reactiveForm: FormGroup;
  formSubmitted = false;
  constructor() {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      genre: new FormControl("mystery", Validators.required)
    });
  }
  onFormSubmit(){
    this.formSubmitted = true;

    setTimeout(() => {
      this.reactiveForm.reset();
      this.formSubmitted = false;
    }, 5000)
  }
}
