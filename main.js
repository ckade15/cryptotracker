

function createRequest(){
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'JSON';
    
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const json = JSON.parse(xhr.responseText);
            console.log(json);
            return json;

        }
    }
    // This API request will return all prices along with other various information about cryptocurrencies.
    xhr.open('get','https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false', true);
    xhr.send();
    
    //console.log(json);
}

$(document).ready(function() {
    let req = createRequest;
    console.log(req);
});
