const button = document.querySelector('#button');
const input = document.querySelector('#input');
const listCountry = document.querySelector('.list-country');

function guess(){
    if( (input.value.match(/^\s*$/) || []).length > 0) return
    listCountry.innerHTML=`<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`
    fetch(` https://api.nationalize.io?name=${input.value}`).then((res)=>res.json()).then(data => {
    const tmp=`
            <div class="list">
                <p>${data.country[0].country_id}</p>
                <p>${(data.country[0].probability*100).toFixed(2)}%</p>
            </div>
            <div class="list">
                <p>${data.country[1].country_id}</p>
                <p>${(data.country[1].probability*100).toFixed(2)}%</p>
            </div>
            <div class="list">
                <p>${data.country[2].country_id}</p>
                <p>${(data.country[2].probability*100).toFixed(2)}%</p>
            </div>
            <div class="list">
                <p>${data.country[3].country_id}</p>
                <p>${(data.country[3].probability*100).toFixed(2)}%</p>
            </div>
            <div class="list">
                <p>${data.country[4].country_id}</p>
                <p>${(data.country[4].probability*100).toFixed(2)}%</p>
            </div>
            `
        
        listCountry.innerHTML = tmp;
        input.value="";
    })
}