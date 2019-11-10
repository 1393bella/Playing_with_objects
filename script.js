var container = document.getElementById('container');
container.style = "color: blue; border: 2px solid black; text-align: center; padding: 5%;"
for(let i = 1; i <=10; i++){
    var p = document.createElement('P');
    p.innerHTML = i;
    container.appendChild(p);
}

var users = [{name: "Micheal", age:37}, {name:"John", age: 30}, {name: "David", age: 27}];

console.log(users[1].name);
console.log(users[0]["name"]);
for(let i = 0; i < users.length; i++){
    console.log(users[i].name + " - " + users[i].age);
}

function printUsers(arr){
    for(let i = 0; i < arr.length; i++){
        var heading = document.createElement('h1');
        heading.innerHTML = `${users[i].name} - ${users[i].age}`;
        container.appendChild(heading);
    }
}
printUsers(users);