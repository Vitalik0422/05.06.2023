const orderModel = require('../model/order')

const add = async (content) => {
    const res = await orderModel.add(content)
    const { id } = res;
    console.log(id);
    return id;
}

const getList = async () => {
    const result = await orderModel.getList();
    return result;
}

const remove = async (id) => {

}

module.exports = {
    add,
    getList,
    remove
}