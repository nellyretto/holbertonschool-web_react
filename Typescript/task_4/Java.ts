namespace Subjects {

    interface Teacher {
        experienceTeachingJava?: number;
        firstname: string;
    }

    class React {
        teacher: Teacher;

        constructor(teacher: Teacher) {
            this.teacher = teacher;
        }

        getRequirements(): string {
            return "Here is the list of requirements for Java";
        }

        getAvailableTeacher(): string {
            if (this.teacher && this.teacher.experienceTeachingJava > 0) {
                return `Available Teacher: ${this.teacher.firstname}`;
            } else {
                return "No available teacher";
            }
        }
    }
}