const button = document.querySelector('#button');
const input = document.querySelector('#input');
const subContainer = document.querySelector('.sub-container');

function guess(){
    if( (input.value.match(/^\s*$/) || []).length > 0) return
    subContainer.innerHTML=`<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`
    fetch("https://api.genderize.io?name="+`${input.value}`).then((res)=>res.json()).then(data=>{
        const tmp=`
        <div class="sub-infor">
            <div>${data.name}</div>
            <div>${data.gender}</div>
            <div>${data.probability * 100}%</div>
        </div>`
        
        subContainer.innerHTML = tmp;
        input.value=""
    })
}

