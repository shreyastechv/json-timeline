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

data.sort((a, b) => a.start - b.start);

let overlappingArrBak = [];
for (let i=0; i<data.length; i++) {
    const overlappingArr = [];
    let j = i;

    do {
        overlappingArr.unshift(i);
        i++;
    } while (i < data.length && (((data[j].start + data[j].duration) > data[i].start) || (( i>0 && (data[i-1]).start + data[i-1].duration) > data[i].start)));
    i--;

    for (let j=0; j<overlappingArr.length; j++) {
        const divNew = document.createElement("div");
        divNew.style.marginLeft = (100/overlappingArr.length * j) + "%";
        divNew.style.top = data[overlappingArr[j]].start + "px";
        divNew.style.height = data[overlappingArr[j]].duration + "px";
        divNew.textContent = data[overlappingArr[j]].title;
        const bigArr = overlappingArrBak.filter((value) => data[value].start + data[value].duration > data[overlappingArr[j]].start);
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