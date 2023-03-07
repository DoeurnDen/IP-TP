let dataLoad = document.querySelector('.dataLoad')
let pageLoad = document.querySelector('.pageLoad')
let page = 0
let isScroll = true

const addData =() =>{
    fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=20`).
    then(res=>res.json()).
    then(data=>{
        store(page,data)
        render(data.data,page)
        page += 1;
        isScroll = true
    })
}
dataLoad.addEventListener('scroll',(e)=>{
    let target = e.target
    const { clientHeight, scrollHeight, scrollTop } = target
    if ((clientHeight + scrollTop) >= scrollHeight * 0.95){
        if(isScroll){
            addData()
            isScroll = false
        }
    }
})

const render = (data, page)=>{
    if(data){
        pageLoad.innerHTML = page+1
        // console.log(pageLoad)
        let tmp = "";
        data.forEach(element => {
            tmp += `
                <div class="item">
                    <div>✈️:${element.airline[0].name} - ${element.airline[0].country}</div>
                    <div>😊:${element.name} </div>
                </div>
            `
        });
        dataLoad.innerHTML += tmp;
    }
}

const store=(pageNumber,data)=>{
    if(data){
        window.localStorage.setItem(pageNumber,JSON.stringify(data))
    }
}

window.addEventListener('load', (e)=>{
    addData()
})