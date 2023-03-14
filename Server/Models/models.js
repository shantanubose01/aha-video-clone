const mongoose = require('mongoose');

const dataschema = new mongoose.Schema({
    'adult': Boolean,
    "genre_ids": Array,
    "id": Number,
    "original_language": String,
    "original_title": String,
    "overview": String,
    "popularity": Number,
    "poster_path": String,
    "release_date": String,
    "title": String,
    "video": Boolean,
    "vote_average": Number,
    "vote_count": Number
})
const userschema = new mongoose.Schema({
    'googleId' : String,
    'username' : String,
    'isSubscribed' : {type : Boolean , default : false}
})

const User = mongoose.model('user', userschema);

const newrelease = mongoose.model('newrelease', dataschema);
const blockbuster = mongoose.model('blockbuster', dataschema);
const hollywood = mongoose.model('hollywood', dataschema);
const popular = mongoose.model('popular', dataschema);
const telugu = mongoose.model('telugu', dataschema);
const tamil = mongoose.model('tamil', dataschema);
const korean = mongoose.model('korean', dataschema);
const tamiltv = mongoose.model('tamiltv', dataschema);
const prabhas = mongoose.model('prabhas', dataschema);

module.exports = { newrelease, blockbuster, hollywood, popular, telugu, tamil, korean, tamiltv, prabhas , User};
