interface Teacher {
    experienceTeachingC?: number;
    firstname: string; // Add firstname property
}

class Subject {
    teacher: Teacher;
}

class Cpp extends Subject {
    getRequirements(): string {
        return "Here is the list of requirements for Cpp";
    }

    getAvailableTeacher(): string {
        if (this.teacher && this.teacher.experienceTeachingC > 0) {
            return `Available Teacher: ${this.teacher.firstname}`;
        } else {
            return "No available teacher";
        }
    }
}