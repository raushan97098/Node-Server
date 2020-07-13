const path = require('path')
const express = require('express')

const app = express()

const port =process.env.PORT || 3000

const publicdirpath=path.join(__dirname, '../public')
app.set('view engine', 'hbs')
app.use(express.static(publicdirpath))



app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather',
        name: 'Luher (laphar)'
    })
})


app.get('/help',(req,res)=>{
    res.send('Welcome to Help SEction')
})



app.listen(port, () => {
    console.log('Server is up on port',port)
})
