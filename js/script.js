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
    duration: 180,
    title: "Plan day"
}, {
    start: 35,
    duration: 15,
    title: "Review yesterday's commits"
}, {
    start: 27,
    duration: 15,
    title: "Code review"
}, {
    start: 90,
    duration: 50,
    title: "Cycling",
},{
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

data.sort((a, b) => a.start - b.start);

let overlappingArrBak = [];
for (let i=0; i<data.length; i++) {
    const overlappingArr = [];
    let j = i;

    do {
        overlappingArr.push(i);
        i++;
    } while (i < data.length && (data[j].start + data[j].duration) > data[i].start);
    i--;

    for (let k=0; k<overlappingArr.length; k++) {
        const divNew = document.createElement("div");
        divNew.style.left = (100/overlappingArr.length * k) + "%";
        divNew.style.top = data[overlappingArr[k]].start + "px";
        divNew.style.height = data[overlappingArr[k]].duration + "px";
        divNew.textContent = data[overlappingArr[k]].title;
        const bigArr = overlappingArrBak.filter((value) => data[value].start + data[value].duration > data[overlappingArr[k]].start);
        if (bigArr.length !== 0) {
            divNew.style.width = ((overlappingArrBak.indexOf(bigArr[0]) / overlappingArrBak.length) * 100) + "%";
            divNew.style.zIndex = 0;
        } else {
            divNew.style.width = 100/overlappingArr.length + "%";
            divNew.style.zIndex = 1;
        }
        document.getElementById("timeline-overlay").appendChild(divNew);
    }
    overlappingArrBak = [...overlappingArr];
}