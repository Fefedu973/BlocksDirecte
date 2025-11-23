export class InvalidSchoolYearFormat extends Error {
    constructor(message: string) {
        super();
        this.name = 'InvalidSchoolYearFormat';
        this.message = message;
    }
}