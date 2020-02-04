const express= require('express')
const app = express()

app.use(express.static('dist')).listen(8088)
