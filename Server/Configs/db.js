const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
async function Connectdatabase(){
    const result = await mongoose.connect(`mongodb+srv://shantanu:shantanu123@cluster0.lhsqdou.mongodb.net/?retryWrites=true&w=majority`)
    return result ;
}

module.exports = Connectdatabase ;