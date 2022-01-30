let auth = 'lB9H1i--zfOBD4TpfiJRQ2PoZSCKCHe5'

let val = [7.4, 85, 88, 57, 23]

function checkBoxFun(n) {
    var checkBox = document.getElementById(`checkbox${n}`);
    var text = document.getElementById(`text${n}`);
    var btn = document.getElementById(`pick${n}`)
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        getData(n).then((response)=>{
            text.innerHTML = `${response}`;
            btn.style.backgroundColor = "#00ffa2";
        })      
    } else {
        text.innerHTML = "---";
        btn.style.backgroundColor = '#f74949';
    }
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
}

async function getData(val) {
    const api_url = `http://188.166.206.43/${auth}/get/V${val}`;
    const response = await fetch(api_url);
    var data = await response.json();

    return(data[0])
}


function buttonclick(pin,val){
    const api_url = `http://188.166.206.43/${auth}/update/V${val}?value=${val}`;
    httpGet(api_url)
}

//http://188.166.206.43/lB9H1i--zfOBD4TpfiJRQ2PoZSCKCHe5/update/V2?value=85`;