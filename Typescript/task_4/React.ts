namespace Subjects {

    interface Teacher {
        experienceTeachingReact?: number;
        firstname: string;
    }

    class React {
        teacher: Teacher;

        constructor(teacher: Teacher) {
            this.teacher = teacher;
        }

        getRequirements(): string {
            return "Here is the list of requirements for React";
        }

        getAvailableTeacher(): string {
            if (this.teacher && this.teacher.experienceTeachingReact > 0) {
                return `Available Teacher: ${this.teacher.firstname}`;
            } else {
                return "No available teacher";
            }
        }
    }
}