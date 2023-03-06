
const url = 'https://jsonplaceholder.typicode.com/photos';

const getData=()=>{
    fetch(url).then(async (res)=>{
        let data = await (res.json())
        render(data)
    })
}
const render = (data)=>{
    let tmp = "";
    data.forEach(item => {
        tmp += `
            <div class="box">
                <div>
                    <img src="${item.thumbnailUrl}" alt="${item.albumId}-${item.title}">
                </div>
                <div>
                    <p>${item.title}</p>
                    <p>Album Id ${item.albumId}</p>
                    <p>Category: ${item.id}</p>
                    <p>
                        <a href="see.html?id=${item.id}">see</a>
                    </p>
                </div>
            </div>
        `
    })
    document.querySelector('.output-data').innerHTML = tmp
}
window.addEventListener('load',getData());



