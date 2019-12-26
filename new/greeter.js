var Student = /** @class */ (function () {
    function Student(firstname, middleInitial, lastName) {
        this.firstname = firstname;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstname + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
firstName = string;
lastName = string;
function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = new Student("Bertram", "gilf", "Goldfoyel");
document.body.textContent = greeter(user);
