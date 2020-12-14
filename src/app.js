const express = require('express')
const path = require('path')
const app = express()

const pathDirectory = path.join(__dirname , '../public')

app.use(express.static(pathDirectory))


app.get('' , (req,res) => {
    res.send('hello')
})




app.listen(3000, () => console.log('listening on port 3000'))