
const path = require('path')
const express = require('express')
const hbs=require('hbs')
const mongoose=require('mongoose')
const {mongoURL}=require('./keys')
const bodyparser=require('body-parser')


const app = express()
app.use(bodyparser.urlencoded({extended:false}))
require('./models/userm')

const user =require('./router/user')
app.use(bodyparser.json())
app.use(user)


const port =process.env.PORT || 3000

//---------------------serving hbs--------------

const resourcesPath=path.join(__dirname, '../resources')
const viewsPath=path.join(__dirname, '../webpage/views')
const partialPath=path.join(__dirname, '../webpage/partial')

app.set('views', viewsPath)
app.set('view engine', 'hbs')

app.use(express.static(resourcesPath))
hbs.registerPartials(partialPath)


//-----------------------------MONGO CONNECTION----------------------
mongoose.connect(mongoURL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log('successfully connected to Mongo Cloud')
})
mongoose.connection.on('error',(error)=>{
    console.log('Error connecting to Mongo',error)
})

//--------------------------------------------------------------------------

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather',
        name: 'Luher (lophar)'
    })
})

app.get('/register',(req,res)=>{
    res.render('register')
})
app.get('/help',(req,res)=>{
    res.send('Welcome to Help SEction')
})

//const { Mongoose } = require('mongoose')
//const { error } = require('console')




app.listen(port, () => {
    console.log('Server is up on port',port)
})
