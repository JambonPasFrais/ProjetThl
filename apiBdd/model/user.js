const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
  id: Object,
  token: String,
  name: String,
  surname: String,
  birthday: Date, // parse en date
  mail: String,
  psw: String,
  category: Number,
  vaccine: [{date: Date, lab: String}],
  tests_results: [{date: Date, positif: Boolean, variant: String, type_test: String}],
  uuid: String
}, {
  collection: 'login'
})

module.exports = mongoose.model('User', User);
