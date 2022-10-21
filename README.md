# Class 10 - Forms Exercise

## How to Start

1. On this page, find the green button that says "Code". Click it and download the ZIP file.
2. Unzip the folder and open in VSCode
3. Open a terminal at this folder and run `npm install` to download the node_modules dependencies.
4. Code!

---

## Steps

1. Download staring code for [class 10 Angular Example](https://github.com/WilderDev/Class-10-Angular-Forms-Example)
2. In the _app.component.html_ file, create a container div with a row inside that renders both of our components side-by-side.
3. Inside the "BookFormTemplateComponent": Create a template-driven form that, when submitted, displays all the relevant data below the form.
   - Title, Author, and Genre should all be required inputs that display an error message with a red border when touched and invalid.
   - Set 'mystery' to be the default value on the genre select box.
   - Use two-way-binding to display the name of the book after the word "Submit" on the submit button.
   - Display the title, author, and genre below the form when a user clicks "Submit". (Also, reset the form.)
4. Inside the "BookFormReactiveComponent": Create a reactive-driven form that, when submitted, displays all the relevant data below the form.
   - Title, Author, and Genre should all be required inputs that display an error message with a red border when touched and invalid.
   - Set 'mystery' to be the default value on the genre select box.
   - Display the title, author, and genre below the form when a user clicks "Submit". (Also, reset the form.)
5. Publish to Github. Inside the README.md file, write your experience of the different approaches.
   - Define the "Template-Driven-Approach" and the "Reactive-Driven-Approach".
   - Explain their differences and what each excel at doing.
   - Write about what you find easy and what is challenging about each.

---

## Viewing the Final Product

1. On this page in github, on the same line as the "code" button but on the left side... you should see a dropdown with the text "Starting-Code".
2. Click the dropdown and select "Final-Project".
3. You should now be able to view the files of the finished project.



Questions for end of exercise:

   Define the "Template-Driven-Approach" and the "Reactive-Driven-Approach"?
      Template driven forms are are designed and edited in the html template where as with the reactive form approach you spend more time in the typescript file.

   Explain their differences and what each excel at doing?
      I noticed with Reactive forms, the form data in the template is linked to variables in th typescript. In a template driven form the majority of the data and logic used for the form is written out in the html template. This makes reactive forms better for writing out detailed logic to be used on the form and template forms better for simple fast writing of forms.

   Write about what you find easy and what is challenging about each?
      I find with template driven forms keeping track of the variables and where they are used is easier but I could see how writing out detailed and lengthy logic would be better suited for reactive forms. In Reactive forms accessing certain variables and properties is not necessarily more difficult than with template forms but it does take longer in reactive forms. In my opinion creating a form with simple logic would be much easier and faster in a template form. 
