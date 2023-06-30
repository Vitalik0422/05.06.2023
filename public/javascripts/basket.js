const orderList = document.querySelector('.orderList')

const render = async() => {
    const result = await getList();
    const html = result.map(element => 
        `<div>
            <div>Розмір фото: ${element.type}</div>
            <div>Кількість: ${element.amount}</div>
            <div></div>
        </div>`
    ).join('')

    orderList.innerHTML = html;
}

const getList = async () => {
    const {data} = await axios.post('/getList')
    return data;
}
render()