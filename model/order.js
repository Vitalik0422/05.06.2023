const mongoose = require('mongoose')
const path = require('path')

const {Schema} = mongoose;

const generalSchema = new Schema ({
    type: {type: String, default:''},
    amount: {type: String, default:''},
    photoUrl: {type: String, default:''}
},{timestamps: true});

const modelName = path.basename(__filename, '.js')
const model = mongoose.model(modelName, generalSchema);

const add = async (content) => {
    console.log('content in model', content);
    const res = await model.create( content )
    return res;
}

const getList = async() => {
    const result = await model.find();
    return result;
}

const remove = async (id) => {

}



module.exports = {
    add,
    getList,
    remove
};