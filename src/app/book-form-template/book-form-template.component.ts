import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-form-template',
  templateUrl: './book-form-template.component.html',
  styleUrls: ['./book-form-template.component.css']
})
export class BookFormTemplateComponent implements OnInit {
  bookTitle: String;
  formSubmitted = false;
  bookDetails = {
    title: "",
    author: "",
    genre: ""
  }
  constructor() { }

  ngOnInit(): void {
  }
  onFormSubmit(form: NgForm){
    this.formSubmitted = true;

    this.bookDetails.title = form.value.title;
    this.bookDetails.author = form.value.author;
    this.bookDetails.genre = form.value.genre;

    form.reset();
  }

}
