// console.log("Name: SEBASTIAN BOSEK");
// console.log("Career:  Web Development Student");
// console.log("Description:  I like drums");

// console.log("My Interests:");
// console.log("BAM:  Listening to and playing music");
// console.log("BAM:  Tanks");
// console.log("BAM:  Ballroom dancing");

// console.log("My Previous Experience:");
// console.log("BAM:  iD Tech - Summer Camp for Children");
// console.log("BAM:     ")

// console.log("My Skills:");
// console.log("Polish");
// console.log("BAM:  Drums");
// console.log("BAM:  Java");
// console.log("BAM:  Javascript");

let name = "sebastian bosek";
let companyName = "Nada";
let jobTitle = "Programmer";
let description = "Code Monkey";
let languageSkill = "Polish";
let musicSkill = "Drums";
let codeSkill1 = "Java";
let codeSkill2 = "Javascript";


console.log("Name:  " + name.toUpperCase());
console.log("Career:  Full Stack Developer");
console.log("Description:  Jesus is King");

console.log("");
console.log("My Interests:");
console.log("* Listening to and playing music");
console.log("* Tanks");
console.log("* Ballroom dancing");

console.log("");
console.log("My Previous Experience:");

function displayPosition(companyName, jobTitle, description) {
    console.log("* " + jobTitle + " at " + companyName + " - " + description + ".");
}


function displaySkill(skill, bool) {
    if (bool) {
        console.log("* BAM:  " + skill);
    }

    else {
        console.log("* " + skill);
    }

}

displayPosition(companyName, jobTitle, description);
displayPosition("iD Tech", "Junior Instructor", "Teaching rudimentary robotics and engineering to children 6-8 years old");
displayPosition("Lawn and TImber Team", "Landscape Assistant", "Assisting with laun care and tree removal");

console.log("");
console.log("My Skills:");
displaySkill(languageSkill, true);
displaySkill(musicSkill, true);
displaySkill(codeSkill1, false);
displaySkill(codeSkill2, false);

