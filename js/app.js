// let a = 10;
// let b = 3;
// let myName = "Goni";
// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log("hello " + myName)
// myName = "Gianna";
// console.log("Your new name is " + myName);
// 늘 const 사용하고 가끔 let. var는 사용하지 않기

// Boolean: t or f
// const amIFat = null;
// let something;
// console.log(something);

// array
// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
// get item from array
// console.log(daysOfWeek);
// add one more day to the array
// daysOfWeek.push("sun");
// console.log(daysOfWeek);

//object. property
// const player = {
//     name: "goni",
//     points: 10,
//     fat: true,

// };
// console.log(player);
// console.log(player.name);
// console.log(player.fat);
// player.fat = false;
// player.lastName = "Woo";
// console.log(player);

// function- 지정해두고 계속 사용하고싶은 코드 조각 / () 이게 펑션을 실행하는 도구임
// argument - function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법
// function sayHello(nameOfPerson, age) {
//     console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// };

// sayHello("Gianna", 10);
// sayHello("aaaa", 5);
// sayHello("bbbb", 89);

// function plus(a, b) {
//     console.log(a + b);
// }

// function divide(a, b) {
//     console.log(a / b);
// }
// plus(8, 60);
// divide(10, 2);


// const player = {
//     name: "gianna",
//     sayHello: function (otherPersonsName) {
//         console.log("hello " + otherPersonsName + " nice to meet you");
//     },
// };

// player.sayHello("gianna");


// const calculator = {
//     add: function (a, b) {
//         alert(a + b);
//     },
//     minus: function (a, b) {
//         alert(a - b);
//     },
//     multiple: function (a, b) {
//         alert(a * b);
//     },
//     power: function (a, b) {
//         alert(a ** b);
//     },

// };
// calculator.add(3, 5);
// calculator.minus(3, 5);
// calculator.power(4, 5);
// calculator.multiple(4, 3);

//funtion, return
// const calculator = {
//     add: function (a, b) {
//         return a + b;
//     },
//     minus: function (a, b) {
//         return a - b;
//     },
//     multiple: function (a, b) {
//         return a * b;
//     },
//     power: function (a, b) {
//         return a ** b;
//     },

// };
// const addResult = calculator.add(3, 5);
// const minusResult = calculator.minus(addResult, 10);

//나이에 따른 음주 가능여부
// const age = prompt("How old are you?");
// console.log(age, parseInt(age));

// const age = parseInt(prompt("How old are you?"));
// console.log(isNaN(age));
// if (isNaN(age) || age < 0) {
//     console.log("please write a real positive number");
// } else if (age < 18) {
//     console.log("you are too young.");
// } else if (age >= 18 && age <= 50) {
//     console.log("you can drink");
// } else if (age > 50 && age <= 80) {
//     console.log("I'm worried about your health");
// } else if (age === 100) {
//     console.log("wow you are wise");
// }
// else if (age > 80) {
//     console.log("you have no time to live");
// } 

// const title = document.querySelector("h1");
// console.log(title);
// title.innerText = "hello";
// function handleTitleClick() {
//     const currentColor = title.style.color;
//     let newColor;
//     if (currentColor === "blue") {
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     title.style.color = newColor;
// }

// function handleTitleClick() {
//     title.className = "active";
//     console.log(title.className);
// }

// title.addEventListener("click", handleTitleClick);

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

// function onClickButton() {
//     // console.log("Hello " + loginInput.value);
//     const username = loginInput.value;
//     if (username === "") {
//         alert("Please write your name");
//     } else if (username.length > 15) {
//         alert("Your name is too long");
//     }
// }

// loginButton.addEventListener("click", onClickButton);