const loadData = () => {
    fetch("https://api.openligadb.de/getbltable/%C3%B6bl1/2023").then((result) => {
        result.json().then((data) => {
            fillTable(data);
        })
    })
}
    
    
    
    