const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false';

let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

let images = ['assets/bitcoin.jpg','assets/cardano.jpg','assets/Ethereum-coin.webp'],
    index = 0,
    max = images.length - 1;

let timer = setInterval(function() {
    let currentImg = images[index];
    index = (index == max) ? 0 : ++index;
    $('img').attr('src', currentImg);
}, 2000);

let coins = ['btc','eth','usdt','bnb','ada','xrp','doge','usdc','dot','uni','busd','bch','link','sol','ltc','icp','wbtc','etc',
    'matic','xlm','theta','vet','okb','fil','luna','dai','trx','cusd','aave','xmr','ceth','ftt','eos','cdai','atom','cake','cro',
    'shib','grt','neo','klay','mkr','amp','bsv','xtz','leo','algo','cel','comp','AVAX','miota','btt','egld','steth','axs','ht',
    'ust','ksm','hbar','qnt','rune','sushi','dcr','snx','dash','hbtc','waves','tfuel','xem','chz','zec','stx','safemoon','enj',
    'hot','hnt','tusd','flow','yfi','zil','bcha','near','qtum','nexo','clout','bat','tel','btg','1inch','mana','xdc','bnt',
    'pax','rvn','one','kcs','xsushi','mdx','sc','dgb'];


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
        $('#stat-box').css('display','block');
        $('#pop-coins').css('display', 'none');
    });

    $('#autocomplete').autocomplete({
        source: coins,
    });

});