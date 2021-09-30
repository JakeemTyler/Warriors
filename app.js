var wrapperEle = document.body.querySelector(".wrapper");

var Warriors = [
    {
        name: "Bob",
        damage: 2,
        health: 10,
        warrior: true
    },
    {
        name: "Jerry",
        damage: 1,
        health: 12,
        warrior: true
    },
    {
        name: "Mavis",
        damage: 2,
        health: 10,
        warrior: true
    },
    {
        name: "Morty",
        damage: 4,
        health: 10,
        warrior: true
    },
    {
        name: "Shorty",
        damage: 10,
        health: 3,
        warrior: false
    },
    {
        name: "Porty",
        damage: 1,
        health: 14,
        warrior: true
    }, {
        name: "Perry",
        damage: 2,
        health: 9,
        warrior: true
    },
    {
        name: "Larry",
        damage: 2,
        health: 17,
        warrior: false
    }
]
//any condition means if statement
for (var i = 0; i < Warriors.length; i++) {

    if (Warriors[i].health >= 10 && Warriors[i].damage >= 2 && Warriors[i].warrior === true) {
        var ele = document.createElement("div");
        var nameEle = document.createElement("h1");
        var damageEle = document.createElement("h2");
        var healthEle = document.createElement("h3");
        var warriorEle = document.createElement("h4");

        nameEle.innerHTML = "Name: " + Warriors[i].name;
        damageEle.innerHTML = "Damage: " + Warriors[i].damage;
        healthEle.innerHTML = "Health: " + Warriors[i].health;
        // warriorEle.innerHTML="Warrior: " +Warriors[i].warrior;


        if (Warriors[i].name.includes("a")) {
            nameEle.style.color = "#ff0000";
            damageEle.style.color = "#ff0000";
            healthEle.style.color = "#ff0000";
            warriorEle.style.color = "#ff0000";

        }
        ele.appendChild(nameEle);
        ele.appendChild(damageEle);
        ele.appendChild(healthEle);
        ele.appendChild(warriorEle);

        wrapperEle.appendChild(ele);


    }

}
//4 characters meet requirements

document.getElementById("myDiv").style.color = "#ff0000";
document.getElementById("myH1").style.color = "#ff0000FF";
document.getElementById("myH2").style.color = "#ff0000FF";
document.getElementById("myH3").style.color = "#ff0000FF"
document.getElementById("myH4").style.color = "#ff0000FF"

// Only 3 characters are used
// Only one will use the color red for text
// Use the for loop
// Then use the if else to sift through
//If they have the letter A in their name, use the red color for text