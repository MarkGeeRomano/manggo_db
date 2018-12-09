const mongoose = require('mongoose')
const { Schema } = mongoose

const manggoSchema = new Schema({
  imgData: Buffer,
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Manggo', manggoSchema)