function reqListener() {
    console.log(this.responseText);
}

const xhr = new XMLHttpRequest();
xhr.addEventListener('load', reqListener);

function createRequest(){
    xhr.responseType = 'JSON';
    
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
        }
    }
    xhr.open('get','https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ccardano%2Cchainlink&vs_currencies=USD', true);
    xhr.send();
    let json = JSON.parse(xhr.response);
    return xhr.responseType;
    

}

//const price = createRequest();
//console.log(price);
