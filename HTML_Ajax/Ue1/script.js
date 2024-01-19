const loadData = () => {
    fetch("https://api.openligadb.de/getbltable/%C3%B6bl1/2023").then((result) => {
        result.json().then((data) => {
            console.log(data);
            fillTable(data);
        })
    })
}

function fillTable(data){
    let html = ``;
    data.forEach((team, index) => {
        html += `<div class="h-30 w-10" onclick="openNewPage(${team.teamInfoId})"><img src="${team.teamIconUrl}" ></div>`;
    });
    document.getElementById("table").innerHTML = html;
}

function openNewPage(teamInfoId) {
    window.location.href = 'team.html?id=' + teamInfoId;
}

loadData();
