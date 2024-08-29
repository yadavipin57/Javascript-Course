class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return `123`
    }
    // Static: Many a times there is a situation where we dont want to give access of this method to every object which is instantiated (instanceof) from this class
}

const vipin = new User('vipin')
// console.log(vipin.createId())

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher('iphone', 'i@phone.com')

iphone.logMe();
// console.log(iphone.createId());

//-------------- Practice 1 -------------------

class College {
    constructor(students, courses, batches) { // Order of these parameters matters
        this.students = students
        this.courses = courses
        this.batches = batches
    }

    admission() {
        console.log(`Admission of ${this.students} is successful`);
    }
}

class University extends College {
    constructor(students, city) {
        super(students)
        this.city = city
    }
}

const student = new University('Vipin', 'Mumbai')

console.log(student);
student.admission()

//-------------- Practice 2 -------------------

class Team {
    constructor(teamName, captain, viceCaptain, players) {
        this.teamName = teamName
        this.captain = captain
        this.viceCaptain = viceCaptain
        this.players = players
    }

    captainOfTeam() {
        console.log(`${this.captain} is the captain of the ${this.teamName}`);
    }

    viceCaptainOfTeam() {
        console.log(1`${this.viceCaptain} is the captain of the team`);
    }

    teamComposition(){
        console.log(`${this.captain} is the captain of ${this.teamName}, and vice captain of the team is ${this.viceCaptain} and team has ${this.players} players.`);
    }
}

class Coach extends Team {
    constructor(teamName, players) {
        super(teamName, players)
    }
}

const teamCompositionFull = new Team('CSK', 'MSD', 'JADEJA', '11')
const teamComposition = new Coach('CSK', 'MSD')

teamCompositionFull.teamComposition()