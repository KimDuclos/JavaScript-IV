// CODE here for your Lambda Classes

class Person {
    constructor(personAttr) {
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.location = personAttr.location;
        this.gender = personAttr.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject){
        console.log(`${this.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.faveSubjects = studentAttr.faveSubjects;
    }
    listsSubjects(){
        console.log(...this.faveSubjects);
    }
    PRAssignment(PRA_subject){
        console.log(`${this.name} has submitted a PR for ${PRA_subject}.`);
    }
    sprintChallenge(sprint_subject){
        console.log(`${this.name} has begun spring challenge on ${sprint_subject}.`);
    }
}

class ProjectManager extends Instructor {
    constructor(PMAttr){
        super(PMAttr);
        this.gradClassName = PMAttr.gradClassName;
        this.favInstructor = PMAttr.favInstructor;
    }
    standup(channel){
        console.log(`${this.name} announced to ${channel}, @channel standy times!`);
    }
    debugsCode(studentObject, debugSubject){
        console.log(`${this.name} debugs ${studentObject}'s code on ${debugSubject}.`)
    }
}


// Test for Person

const Gob = new Person({
    name: "Gob", 
    age: 25, 
    location: "NYC",
    gender: "M",
  });

  const Frank = new Person({
    name: "Frank", 
    age: 35, 
    location: "LA",
    gender: "F",
  });

  // Test for Instructor 

  const Fred = new Instructor({
    name: "Fred",
    specialty: "Unix",
    favLanguage: "JS",
    catchPhrase: "What you talkin' 'bout Willis",
  });

  const Dan = new Instructor({
    name: "Dan",
    specialty: "Front-End",
    favLanguage: "C++",
    catchPhrase: "Did I catch a niner in there?",
  });

// Test for Student

const Jimbo = new Student({
    name: "Jimbo",
    previousBackground: "Office Monkey",
    className: "Web17",
    faveSubjects: ["Math", "Programming", "Lunch"],
  });

  const Bob = new Student({
    name: "Bob",
    previousBackground: "Cashier",
    className: "Web18",
    faveSubjects: ["Back-End", "Databases", "React"],
  });

  // Test for Project Manager

  const Jen = new ProjectManager({
    name: "Jen",
    gradClassName: "Webby17",
    favInstructor: "Professor Awesome"
  });

  const Lisa = new ProjectManager({
    name: "Lisa",
    gradClassName: "Webby18",
    favInstructor: "Me"
  });


// Person
Gob.speak();
Frank.speak();

// Instructor
Fred.demo("C#");
Fred.grade(Gob, "Pascal");

Dan.demo("Basic");
Dan.grade(Frank, "QBasic");

// Student
Jimbo.listsSubjects();
Jimbo.PRAssignment("Arrays");
Jimbo.sprintChallenge("Less");

Bob.listsSubjects();
Bob.PRAssignment("Media Queries");
Bob.sprintChallenge("Constructors");

// Project Manager
Jen.standup("#general");
Jen.debugsCode(Gob.name, "HTML");

Lisa.standup("#all");
Lisa.debugsCode(Frank.name, "CSS");
