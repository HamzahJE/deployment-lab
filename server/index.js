const express =require('express')
const path= require("path")

const app = express()

app.use(express.static(path.join(__dirname, "/../public")))


app.get('/home', function(req,res) {
    res.sendFile(path.resolve(__dirname, '../public/home.html'))
})



const port = process.env.PORT || 4007
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})



