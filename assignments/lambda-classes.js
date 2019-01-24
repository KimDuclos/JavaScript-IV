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
        console.log(`${student.name} receives a perfect score on ${subject}`);
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
        console.log(...faveSubjects);
    }
    PRAssignment(){
        console.log(`${student.name} has submitted a PR for ${subject}.`);
    }
    sprintChalleng(){
        console.log(`${student.name} has begun spring challeng on ${subject}.`);
    }
}

class ProjectManager extends Instructor {
    constructor(PMAttr){
        super(PMAttr);
        this.gradClassName = PMAttr.gradClassName;
        this.favInstructor = PMAttr.favInstructor;
    }
    standup(channel){
        console.log(`${name} announced to ${channel}, @channel standy times!`);
    }
    debugsCode(name){
        console.log(`${name} debugs ${student.name}'s code on ${subject}.`)
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
    specialty: "Unix",
    favLanguage: "JS",
    catchPhrase: "What you talkin' 'bout Willis",
  });

  const Dan = new Instructor({
    specialty: "Front-End",
    favLanguage: "C++",
    catchPhrase: "Did I catch a niner in there?",
  });

// Test for Student

const Jimbo = new Student({
    previousBackground: "Office Monkey",
    className: "Web17",
    faveSubjects: ["Math", "Programming", "Lunch"],
  });

  const Bob = new Student({
    previousBackground: "Cashier",
    className: "Web18",
    faveSubjects: ["Back-End", "Databases", "React"],
  });

  // Test for Project Manager

  const Jen = new ProjectManager({
    gradClassName: "Webby17",
    favInstructor: "Professor Awesome"
  });

  const Lisa = new ProjectManager({
    gradClassName: "Webby18",
    favInstructor: "Me"
  });


Gob.speak();
Frank.speak();