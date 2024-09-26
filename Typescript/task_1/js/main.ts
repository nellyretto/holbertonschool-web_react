interface Teacher {
    readonly firstName:string;
    readonly lastName:string;
    fullTimeEmployee:boolean;
    yearsOfExperience?:number;
    location:string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
}

  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);

  interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
  }
  
  interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
  }
  class StudentClass {
    firstName: string;
    lastName: string; 

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working"
    }

    displayName(): string {
        return `${this.firstName}`
    }
  }
