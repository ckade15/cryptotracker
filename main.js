

function createRequest(){
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'JSON';
    
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const json = JSON.parse(xhr.responseText);
            //console.log(json);
            
            //return json;
            for (let i = 0; i < json.length; i++){
                const coin = json[i];
                const coinName = coin['name'];
                const symbol = coin['symbol'];
                const price = coin['current_price'];
                const priceHigh = coin['high_24h'];
                const priceLow = coin['low_24h'];
                const marketCap = coin['market_cap'];
                const circSupply = coin['circulating_supply'];
                const totalSupply = coin['total_supply'];
                const values = [coin, symbol, price, priceHigh, priceLow, marketCap, circSupply, totalSupply];
                //let html = "<div class='coin-cont'><h4>" + coinName + "</h4><div class='desc-cont'><p class='header'>Symbol:</p><p class='info'>" +  symbol + "</p><p class='header'>Current Price:</p><p class='info'>" + price + "</p><p class='header'>Price High (last 24h):</p><p class='info>" + priceHigh + "</p><p class='header'>Price Low (last 24h):</p><p class='info'>" + priceLow + "</p><p class='header'>Market Cap:</p><p class='info'>" + marketCap + "</p><p class='header'>Circulating Supply:</p><p class='info'>" + circSupply + "</p><p class='header'>Max Supply:</p><p class='info'>" + totalSupply + "</p></div></div>";
                //$('#coins_list').append(html);
                return values;
            }
        }
    }
    // This API request will return all prices along with other various information about cryptocurrencies.
    xhr.open('get','https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false', true);
    xhr.send();
    //console.log(json);
}

const dict = createRequest();
if (dict !== undefined){
    console.log(dict);
}