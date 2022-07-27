const express =require('express')
const path= require("path")

const app = express()

app.use(express.static("public"))

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/main.js'))
  })

  app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/styleSheet.css'))
  })
  
  


const port = process.env.PORT || 4007
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})



app.use('/js', express.static(path.join(__dirname, '../public/main.js')))


app.use('/css', express.static(path.join(__dirname, '../public/styleSheet.css')))
