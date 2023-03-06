let dataLoad = document.querySelector('.dataLoad')
let page = 0
let limit = 2

const getData = ()=>{
    fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=${limit}`).
    then(async(res)=>{
        let data = await (res.json())
        render(data)
    })
}
const render = (data)=>{
    let tmp = " "
    data.forEach(item => {
        tmp +=`
            <div class="item">
                <div>✈️:${item.data.airline.name}-${item.data.airline.country}</div>
                <div>😊:${item.data.name}</div>
            </div>
        `
    });
    // console.log(tmp);
    dataLoad.innerHTML = tmp
}

getData(page,limit)