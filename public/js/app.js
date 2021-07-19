const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')

const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit',(e) =>{
	e.preventDefault()
	
	const location = search.value
	
	//messageTwo.textContent = 'Loading..'
	messageOne.textContent = 'loading...'
	
	
	
	fetch('/weather?address=' + location).then((response) =>{
		response.json().then((result)=>{
			if(result.error)
			messageOne.textContent = result.error
			else{
				//messageTwo.textContent = result.name
				messageOne.textContent =  "It is " + (result.temp - 273.15).toFixed(2) + '\xB0C. in' + result.name;
				
			}
			
			
		})
	
})
})
