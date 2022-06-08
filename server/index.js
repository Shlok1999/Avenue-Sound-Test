const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send("Hello")
})

app.listen(2020, ()=>{
    console.log(`http://localhost:2020`)
})