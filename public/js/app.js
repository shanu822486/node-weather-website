const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')

const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit',(e) =>{
	e.preventDefault()
	
	const location = search.value
	
	messageOne.textContent = 'Loading...'
	messageTwo.textContent = ''
	
	
	fetch('/weather?address=' + location).then((response) =>{
		response.json().then((result)=>{
			if(result.error)
			messageOne.textContent = result.error
			else{
				messageOne.textContent =  result.temp
				messageTwo.textContent = result.name
			}
			
			
		})
	
})
})
