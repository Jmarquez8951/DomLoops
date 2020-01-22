console.log("Loops");

const colors = ['red', 'blue', 'yellow', 'green', 'goldenrod'];

const colorLoop = () => {
    let domString = '';
    for (let i = 0; i < colors.length; i++) {
        domString += `<h1>${colors[i]}</h1>`;
    }
    console.log(domString);
};

const instructors = [
    {first: 'zoe', last: 'ames'},
    {first: 'mary', last: 'west'},
    {first: 'luke', last: 'lancaster'}
];

const nameLoop = () => {
    let domString = '';
    for (let i = 0; i < instructors.length; i++) {
        domString += `<h2>${instructors[i].first} ${instructors[i].last}</h2>`
    }
    console.log(domString);
};

colorLoop();
nameLoop();