# TypeScript Project

This project is a collection of TypeScript exercises designed to help you learn the basics of the language.

## Curriculum

The curriculum is divided into several tasks, each focusing on a specific TypeScript concept. Here's a breakdown of the tasks:

**C#23 Foundations v2 - Part 3**

This section is not part of the TypeScript curriculum, but foundational knowledge of C# may be helpful.

**Typescript**

* **Amateur** level by Johann Kerbrat, Engineering Manager at Uber Works
* Weight: 1

**Tasks**

* **Task 0: Creating an interface for a student**
    * Create an interface named `Student` with properties for `firstName`, `lastName`, `age`, and `location`.
    * Create two student variables and store them in an array.
    * Render a table with student first names and locations using vanilla JavaScript.
* **Task 1: Let's build a Teacher interface**
    * Create an interface named `Teacher` with properties for `firstName`, `lastName`, `fullTimeEmployee`, `yearsOfExperience` (optional), and `location`.
    * Allow for adding additional properties with a generic type.
* **Task 2: Extending the Teacher class**
    * Create an interface named `Directors` that extends `Teacher` and adds a `numberOfReports` property.
* **Task 3: Printing teachers**
    * Create a function named `printTeacher` that takes `firstName` and `lastName` as arguments and returns a formatted string with the first initial and full last name.
    * Define an interface for the `printTeacher` function. 
* **Task 4: Writing a class**
    * Create a class named `StudentClass` with a constructor that accepts `firstName` and `lastName`.
    * Define methods for `workOnHomework` (returning "Currently working") and `displayName` (returning the student's first name).
    * Define interfaces for the class constructor and the class itself.
* **Task 5: Advanced types Part 1**
    * Create interfaces for `DirectorInterface` and `TeacherInterface` with specific methods for each role (workFromHome, getCoffeeBreak, workTasks).
    * Create classes `Director` and `Teacher` that implement their respective interfaces.
    * Create a function `createEmployee` that returns either a `Director` or a `Teacher` based on a salary parameter.
* **Task 6: Creating functions specific to employees**
    * Define functions `isDirector` to check if an employee is a director and `executeWork` to call the appropriate work method based on the employee type.
* **Task 7: String literal types**
    * Create a string literal type named `Subjects` to limit values to "Math" or "History".
    * Define a function `teachClass` that takes a subject as an argument and returns a string indicating which class is being taught.
* **Task 8: Ambient Namespaces**
    * Create interfaces for `RowID` and `RowElement` to define data types for rows in a database.
    * Create an ambient file to declare types for CRUD operations (insertRow, deleteRow, updateRow) from a third-party library (`crud.js`).
    * Use the ambient file to interact with the CRUD functions in your main TypeScript file.
* **Task 9: Namespace & Declaration merging**
    * Create a namespace named `Subjects` to group related interfaces and classes.
    * Define interfaces for `Teacher` and classes for `Subject`, `Cpp`, `React`, and `Java` within the `Subjects` namespace.
    * Utilize declaration merging to add optional properties and methods to the `Teacher` interface for specific subjects (e.g., experienceTeachingC, experienceTeachingReact, experienceTeachingJava).
    * Implement methods in the subject classes to get requirements and check for available teachers based on their experience.
* **Task 10: Brand convention & Nominal typing**
    * Create interfaces `MajorCredits` and `MinorCredits` with a `credits` property and a unique brand for each.
    * Define functions `sumMajorCredits` and `sumMinorCredits` to take two subjects and return the sum of their credits with the appropriate brand.

## Resources

The following resources may be helpful for completing the exercises:

* TypeScript in 5 minutes
* TypeScript documentation

## Repo

This project can be found in the following GitHub repository:

* holbertonschool-web_react
* Directory: TypeScript

## Help

For help with any of the exercises, you can consult the provided sandbox or reach out to the Holberton School community for assistance.