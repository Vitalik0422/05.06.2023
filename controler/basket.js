const orderCtrl = require('./order')

const add = async (content) => {

}

const getList = async () => {
    const result = await orderCtrl.getList()
    return result;
}

const remove = async (id) => {

}

module.exports = {
    add,
    getList,
    remove
}