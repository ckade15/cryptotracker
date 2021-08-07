const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false';

let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

async function getData() {
    const response = await fetch(url).then(response => {
        return response.json();
    }).then(data => {
        let inp = $('input').val();
        
        for (let i = 0; i < data.length; i++){
            const coin = data[i];
            if (inp == coin['symbol']){
                $('#coin-name').text(coin['name']);
                $('p').eq(0).text(coin['symbol']);

                let currentPrice = formatter.format(coin['current_price']);
                let priceHigh = formatter.format(coin['high_24h']);
                let priceLow = formatter.format(coin['low_24h']);
                let marketCap = formatter.format(coin['market_cap']);
                
                $('p').eq(1).text(currentPrice);
                $('p').eq(2).text(priceHigh);
                $('p').eq(3).text(priceLow);
                $('p').eq(4).text(marketCap);
                $('p').eq(5).text(coin['circulating_supply']);
                $('p').eq(6).text(coin['total_supply']);
                console.log(coin);
            }
        }
        return data;
    });
}

$(document).ready(function() {
    const btn = $('#search').click(function(event){
        getData();
    });
});