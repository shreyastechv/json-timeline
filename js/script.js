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

let pos = "right";
for (let i=0; i<data.length; i++) {
    console.log(pos);
    const obj = data[i];
    const divNew = document.createElement("div");
    if ((i-1 >= 0 && (data[i-1].start + data[i-1].duration) > obj.start) || (i+1 < data.length && (obj.start + obj.duration) > data[i+1].start)) {
        if (pos == "right") {
            divNew.style.position = "relative";
        }
        else {
            divNew.style.position = "absolute";
        }
        divNew.style.width = "50%";
        divNew.style.float = pos;
        if (pos == "left") {
            pos = "right";
        }
        else {
            pos = "left";
        }
    }
    else {
        pos = "right";
        divNew.style.position = "absolute";
    }
    divNew.style.backgroundColor = "lightblue";
    divNew.style.borderLeft = "2px solid #2196F3";
    divNew.style.top = obj.start + "px";
    divNew.style.height = obj.duration + "px";
    divNew.textContent = obj.title;
    parentDiv.appendChild(divNew);
}