const path = require('path')
const express = require('express')

const app = express()

const publicdirpath=path.join(__dirname, '../public')
app.set('view engine', 'hbs')
app.use(express.static(publicdirpath))



app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather',
        name: 'Gaurav'
    })
})


app.get('/help',(req,res)=>{
    res.send('Welcome to Help SEction')
})



app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})