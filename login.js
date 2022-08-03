const form = document.querySelector('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')



function showError(input, message) {
	const formControl = input.parentElement
	formControl.className = 'form-control error'
	const small = formControl.querySelector('small')
	small.innerText = message
}

function showSuccess(input){
    const formControl = input.parentElement
	formControl.className = 'form-control success'
	const small = formControl.querySelector('small')
	small.innerText = ''

}
function checkEmptyError(listInput){
    let isEmptyError=false
    listInput.forEach(function (input) {
        input.value=input.value.trim()
        if (input.value.trim() === '') {
			showError(input, `Không được để trống trường này`)
			isEmptyError = true
		} else {
			showSuccess(input)
		}

        
    });
    return isEmptyError

}



function checkEmail(input) {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(input.value.trim())) {
		showSuccess(input)
	} else {
		showError(input, 'Email không đúng')
	}
}

function checkLengthError(input,min,max){
    input.value=input.value.trim()
    if(input.value.length < min){
        showError(input,`Phải có ít nhất ${min} kí tự`)
        return true
        
    }

    if(input.value.length > max){
        showError(input,`Không được nhập quá ${max} kí tự`)
        return true
        
    }
    showSuccess(input)
    return false
    
}

function checkPasswordsMatch(input1, input2) {
	if (input1.value !== input2.value) {
		showError(input2, 'Passwords sai')
	}
}

form.addEventListener('submit', function (e) {
	e.preventDefault()
    let isEmptyError=checkEmptyError([username, email, password, password2]);

    
		
		let isEmailError= checkEmail(email)
		checkPasswordsMatch(password, password2)
        checkLengthError(username, 3, 15)
		checkLengthError(password, 6, 25)
    
	
})