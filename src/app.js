const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('./utils/forecast')
const app = express()

//Define paths for express config
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')


//Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirPath ))

app.get('',(req,res)=>{
	res.render('index',{
		title : 'Weather App',
		name : 'Shanu'
	})
	
})


app.get('/about',(req,res)=>{
	res.render('about',{
		title : 'About Me',
		name : 'Shanu Tyagi'
	})
	
})


app.get('/help',(req,res)=>{
	res.render('help',{
		msg : "This is help Page",
		title : 'Help',
		name : 'Shanu Tyagi'
	})
	
})

app.get('/weather',(req,res)=>{
	if(!req.query.address){
		return res.send({
				error : 'you must provide an address'
		})
	}
	
	
	
	var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + req.query.address + '&APPID=48bf669c78a3cabd879f074d66c55ea7'
	forecast(url,(error,data)=>{
		
		if(error){
			return res.send({error })
		}
		
		res.send(data)
	})
			
})


app.get('/products',(req,res)=>{
	if(!req.query.search){
		return res.send({
				error: 'you must provide a search term'
		})
	}
	
	
	console.log(req.query.search)
	
	res.send({
			products : []
		
	})
	
})



app.get('/help/*',(req,res)=>{
	res.render('404',{
		title : "404 Help",
		name : 'shanu Tyagi  ',
		errorMessage : 'help article not found'})
	})
app.get('*',(req,res)=>{
	res.render('404',{
		title : '404',
		name : "shanu Tyagi",
		errorMessage :"page not found"
		
		})
	
	})

app.listen(3000,() => {
	console.log("Server is on port 3000")
	
})

