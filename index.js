const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')
const Manggo = require('./models/Manggo')

const uri = process.env.DB_URI
mongoose.connect(uri, () => console.log('connected to mongo'))

const manggoPathArray = [__dirname, '..', '..', 'bo_mang_co', 'pics']
const manggoPath = path.resolve(...manggoPathArray)

const files = fs.readdirSync(manggoPath)

let imgData
let imgPath
const documentArray = files.map(file => {
  imgPath = path.resolve(...manggoPathArray, file)
  imgData = fs.readFileSync(imgPath)
  return { imgData }
})

Manggo.insertMany(documentArray)
  .then(docs => console.log(docs.length + ' items inserted'))
  .catch(console.log)