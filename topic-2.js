class Person{
    constructor(name, age, occupation){
        this.name = name;
        this.age = age;
        this.occupation = occupation;

    }
    displayInfo(){
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
    }
    displayInfoHTML(){
        const personElement = document.getElementById('personOne');
        personElement.innerHTML =`
        <strong>Name:</strong>${this.name}<br>
        <strong>Age:</strong>${this.age}<br>
        <strong>Occupation:</strong>${this.occupation}
        `;


    }
}
const personOne = new Person ('Velt Jade Sabal', 21, 'Model');
personOne.displayInfo();