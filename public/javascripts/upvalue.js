let auth = 'lB9H1i--zfOBD4TpfiJRQ2PoZSCKCHe5'

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
}

async function getData(val) {
    const api_url = `http://188.166.206.43/lB9H1i--zfOBD4TpfiJRQ2PoZSCKCHe5/get/V${val}`;
    const response = await fetch(api_url);
    var data = await response.json();
    return(data[0])
}


function buttonclick(n){
    var text = document.getElementById(`text${n}`);
    val = document.getElementById(`inp${n}`).value;
    const api_url = `http://188.166.206.43/lB9H1i--zfOBD4TpfiJRQ2PoZSCKCHe5/update/V${n}?value=${val}`;
    httpGet(api_url)
}

function ResponseMonitoring() {
    setInterval(function() {
        n = 5;
        for(let val=1;val<=n;val++){
            getData(val).then((value)=>{
                var text = document.getElementById(`text${val}`);
                text.innerHTML = `${value}`;
            });
        }
    }, 500);
}

ResponseMonitoring()


//http://188.166.206.43/lB9H1i--zfOBD4TpfiJRQ2PoZSCKCHe5/update/V2?value=85`;