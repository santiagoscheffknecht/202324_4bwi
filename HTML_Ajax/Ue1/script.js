const loadData = () => {
    fetch("https://api.openligadb.de/getbltable/%C3%B6bl1/2023").then((result) => {
        result.json().then((data) => {
            console.log(data);
            data.forEach(club => {
                console.log(club.teamIconUrl);
                console.log(club.teamName);
            });
            fillTable(data);
        })
    })
}

loadData();
    
    
    