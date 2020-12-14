const express = require('express')
const path = require('path')
const app = express()

const port = process.env.PORT || 3000;

const pathDirectory = path.join(__dirname , '../public')

app.use(express.static(pathDirectory))


app.get('' , (req,res) => {
    res.send('hello')
})




app.listen(port, () => console.log('listening on port'+ ' ' + port))