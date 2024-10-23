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
    const obj = data[i];
    const objPrev = data[i-1];
    const objNext = data[i+1];
    const divNew = document.createElement("div");
    if ((i-1 >= 0 && (objPrev.start + objPrev.duration) > obj.start) || (i+1 < data.length && (obj.start + obj.duration) > objNext.start)) {
        divNew.style.width = "50%";
        if (pos == "right") {
            divNew.style.left = "50%";
        }
        else {
            divNew.style.right = "50%";
        }

        if (pos == "left") {
            pos = "right";
        }
        else {
            pos = "left";
        }
    }
    else {
        pos = "right";
    }
    divNew.style.top = obj.start + "px";
    divNew.style.height = obj.duration + "px";
    divNew.textContent = obj.title;
    parentDiv.appendChild(divNew);
}