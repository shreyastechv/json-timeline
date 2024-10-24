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
    let width = 100;
    const currFirstObj = data[i];

    do {
        overlappingArr.unshift(i);
        i++;
    } while (i < data.length && ((currFirstObj.start + currFirstObj.duration) > data[i].start));
    i--;

    if (overlappingArr.length > 1 && Math.max(...overlappingArrBak) + 1 == Math.min(...overlappingArr)) {
        width = width / 2;
    }

    for (let j=0; j<overlappingArr.length; j++) {
        const divNew = document.createElement("div");
        const currObj = data[overlappingArr[j]];
        divNew.style.top = currObj.start + "px";
        divNew.style.height = currObj.duration + "px";
        divNew.textContent = currObj.title;
        const bigArr = overlappingArrBak.filter((value) => data[value].start + data[value].duration > currObj.start);
        if (bigArr.length !== 0) {

            let prevBigDiv;
            for (let k=overlappingArrBak.length + j; k>0; k--) {
                const prevDiv = document.querySelector(`#timeline-overlay > div:nth-last-child(${k})`);
                if (prevBigDiv === undefined || parseInt(prevDiv.style.top) + parseInt(prevDiv.style.height) > parseInt(prevBigDiv.style.top) + parseInt(prevBigDiv.style.height)) {
                    prevBigDiv = prevDiv;
                }
            }
            divNew.style.marginLeft = (parseInt(prevBigDiv.style.width) + parseInt(prevBigDiv.style.marginLeft)) + "%";
            divNew.style.width = (((overlappingArrBak.indexOf(bigArr.at(-1))+1) / overlappingArrBak.length) * width) + "%";
        } else {
            divNew.style.marginLeft = (100/overlappingArr.length * j) + "%";
            divNew.style.width = 100/overlappingArr.length + "%";
        }
        document.getElementById("timeline-overlay").appendChild(divNew);
    }
    overlappingArrBak = [...overlappingArr];
}