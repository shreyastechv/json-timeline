var data = [{
    start: 0,
    duration: 15,
    title: "Exercise"
}, {
    start: 25,
    duration: 30,
    title: "Travel to work"
}, {
    start: 30,
    duration: 30,
    title: "Plan day"
}, {
    start: 60,
    duration: 15,
    title: "Review yesterday's commits"
}, {
    start: 100,
    duration: 15,
    title: "Code review"
}, {
    start: 180,
    duration: 90,
    title: "Have lunch with John"
}, {
    start: 360,
    duration: 30,
    title: "Skype call"
}, {
    start: 370,
    duration: 45,
    title: "Follow up with designer"
}, {
    start: 400,
    duration: 30,
    title: "Push up branch"
}
];

const parentDiv = document.getElementById("timeline-overlay");

for (let obj of data) {
    const divNew = document.createElement("div");
    divNew.style.position = "absolute";
    divNew.style.backgroundColor = "lightblue";
    divNew.style.top = obj.start + "px";
    divNew.style.height = obj.duration + "px";
    divNew.textContent = obj.title;
    parentDiv.appendChild(divNew);
}