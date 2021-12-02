
var submitName = document.getElementById("submit-name");
var greeting = document.getElementById("greeting");
var askName = document.getElementById("ask-name");
var greeting = document.getElementById("greeting");
var nameGreeting = document.getElementById("name-greeting");
var inputName = document.getElementById("input-name");
var askFocus = document.getElementById("ask-focus");
var quote = document.getElementById("quote");
var mainFocus = document.getElementById("main-focus");
var inputFocus = document.getElementById("input-focus");
var displayFocus = document.getElementById("display-focus");
var displayQuote = document.getElementById("display-quote");
var randomQuoteBtn = document.getElementById("random-quote-btn");
var addQuoteBtn = document.getElementById("add-quote-btn");
var getQuote = document.getElementById("get-quote");
var inputQuote = document.getElementById("input-quote");


var username = "";
var focus = "";
var quotesList = [`We cannot choose our external circumstances, but we can always choose how we respond
to them - Epictetus`, `The cave you fear to enter holds the treasure you seek - Joseph Campbell`,
    `What man actually needs is not a tensionless state but rather the striving and struggling for a worthwhile goal, a freely chosen task. - Viktor Frankl`,
    `Every day is a fresh start. Each day is a new beginning. Every morning we wake up is the first day of our new life.`];

// Hide main page
greeting.style.display = "none";
askFocus.style.display = "none";
quote.style.display = "none";
mainFocus.style.display = "none";

// Go to main page when name is submitted
submitName.addEventListener("click", greet);
inputName.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        greet();
    }
});

// Greeting the user
function greet() {
    username = inputName.value;
    askName.style.display = "none";
    greeting.style.display = "flex";
    askFocus.style.display = "flex";
    renderQuote();
    renderAllQuotes();
}

// Display current time and display greeting
function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var t_str = currentTime.toLocaleTimeString();
    document.getElementById("display-time").innerHTML = t_str;
    if (hours < 12) {
        nameGreeting.textContent = `Good Morning, ${username}.`;
    } else if (hours >= 12 && hours <= 17) {
        nameGreeting.textContent = `Good Afternoon, ${username}.`;
    } else {
        nameGreeting.textContent = `Good Evening, ${username}.`;
    }

}
setInterval(updateTime, 1000);

// Get main focus
inputFocus.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        renderFocus();
    }
});

// Render main focus
function renderFocus() {
    focus = inputFocus.value;
    displayFocus.textContent = focus;
    askFocus.style.display = "none";
    mainFocus.style.display = "flex";
}


// Generate random quote when button clicked
randomQuoteBtn.addEventListener("click", renderQuote);

// Display random quote
function renderQuote() {
    quote.style.display = "flex";
    displayQuote.textContent = quotesList[Math.floor(Math.random() * quotesList.length)];
}


// Add new quote
addQuoteBtn.addEventListener("click", displayInputQuote)

inputQuote.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addQuote();
        renderAllQuotes();
    }
});

function displayInputQuote() {
    inputQuote.value = "";
    displayQuote.style.display = "none";
    getQuote.style.display = "flex";
}

function addQuote() {
    quotesList.push(inputQuote.value);
    displayQuote.textContent = inputQuote.value;
    displayQuote.style.display = "flex";
    getQuote.style.display = "none";
}

// Modal for quotes
var allQuotesBtn = document.getElementById("all-quotes-btn");
var modalQuoteBg = document.querySelector(".modal-quote-bg");
var modalQuoteClose = document.querySelector(".modal-quote-close");

allQuotesBtn.addEventListener("click", function () {
    modalQuoteBg.classList.add("modal-quote-bg-active");
});

modalQuoteClose.addEventListener("click", function () {
    modalQuoteBg.classList.remove("modal-quote-bg-active");
});

// Render all quotes in modal
var quoteUl = document.getElementById("quote-ul")

function renderAllQuotes() {
    var allQuotes = "";
    for (q of quotesList) {
        allQuotes += `<li>${q}</li>`
    }
    quoteUl.innerHTML = allQuotes;
}


// Modal for To Do
var toDoBtn = document.getElementById("to-do-btn");
var modalToDoBg = document.querySelector(".modal-to-do-bg");
var modalToDoClose = document.querySelector(".modal-to-do-close");

toDoBtn.addEventListener("click", function () {
    modalToDoBg.classList.add("modal-to-do-bg-active");
});

modalToDoClose.addEventListener("click", function () {
    modalToDoBg.classList.remove("modal-to-do-bg-active");
});

// Render To Do


var inputToDo = document.getElementById("input-to-do");
var toDoUl = document.getElementById("to-do-ul");
var toDoID = 0;

inputToDo.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addToDo();
    }
});


function addToDo() {
    var toDoItem = inputToDo.value;
    toDoUl.innerHTML += `<li><input type="checkbox" id="to-do-${toDoID}"><label class="strikethrough" for="to-do-${toDoID}">${toDoItem}</label></li>`;
    toDoID++;
    inputToDo.value = "";
}

// Weather API 

let weatherData = "https://api.openweathermap.org/data/2.5/weather?q=San+Pedro,ph&units=metric&APPID=93d1061ed29ffd072f00b3d9e3ceda21";

async function getWeather() {
    const response = await fetch(weatherData);
    const data = await response.json();
    // setInterval()
    // JSON.parse(data);
    // console.log(data.main.temp);
    // return JSON.stringify(data.main.temp);
    return data.main.temp;
}

// weatherNow();
// getWeather();
// setInterval(getWeather(), 3000);

console.log(`Temperature is ${getWeather()}`);







