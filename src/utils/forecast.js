const request = require('request')



const weather = (url, callback)=>{
	
			request({url : url,json : true},(error, response)=>{
				if(error)
				{
					callback("Unable to connect weather service!", undefined)
				}
				else if(response.body.message)
				{
					callback("City not found", undefined)
					
				}
				else
				{
					callback(undefined,{
						temp : response.body.main.temp,
						humidity :  response.body.main.humidity,
						name : response.body.name
					})
				}
			})
		}



module.exports = weather
