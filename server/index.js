import express from 'express'
let app = express()
app.get("/", (req, res) => {
    res.send("hello node zhangyuhong ")
})
app.listen(6060, () => { console.log('Runing on localhost:6060') })