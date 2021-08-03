function createRequest(){
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'JSON';
    
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let json = JSON.parse(xhr.responseText);

        }
    }
    xhr.open('get','https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false', true);
    xhr.send();
    let json = new xhr.responseText;
    //console.log(json);
}

//const prices = createRequest();
//console.log(price);
