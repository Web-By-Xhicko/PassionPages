document.addEventListener('DOMContentLoaded', function(){
        // Variable refrences to html documents
let navParent = document.querySelector('.Nav_Parent')
let navParent2 = document.querySelector('.Nav_Parent2')
let navChild = document.querySelector('.Nav_Child');
let navChild2 = document.querySelector('.Nav_Child2');
let child2_svg = document.querySelector('.Nav_Parent2 svg')

    // script to reveal First dropdown menu and activate dropdown animation
    navParent.addEventListener('click', function(){
            navChild.classList.toggle('Activate')
            rotateToggle(navParent);
    })

    // script to reveal second dropdown menu and activate dropdown animation
    navParent2.addEventListener('click', function(){
        navChild2.classList.toggle('Activate')
        rotateToggle(navParent2);
    })

    // script  to control dropdown icon
function rotateToggle(parentElement) {
    let child1_svg = parentElement.querySelector('svg')
     child1_svg.classList.toggle('rotate-clockwise');
}


        // Script to reveal and hide navigation Menu 
    let Navlist_Listener = document.querySelector('.Navlist_Listener')
    let Reveal_NavList = document.querySelector('.Reveal_NavList')



    Navlist_Listener.addEventListener('click', function(){
        Reveal_NavList.classList.toggle('Activate')
    })


})


// Script to reveal and hide user authentication 
document.addEventListener('DOMContentLoaded', function(){
        let activator2 = document.querySelector('.User_Activator2')
        let revealer2 =  document.querySelector('.User_Revealer2')

        activator2.addEventListener('click', function(){
            revealer2.classList.toggle('Activate')
                Reveal_NavList.classList.remove('Activate')
            })

})


document.addEventListener('DOMContentLoaded', function () {
    const passwordToggleButtons = document.querySelectorAll('.password-toggle-button');
    passwordToggleButtons.forEach(function (button) {
        const passwordField = button.previousElementSibling;
        // Get the password field associated with the toggle button

        button.addEventListener('click', function () {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            button.innerHTML = '<i class="fa fa-eye-slash"></i>'
        } else {
            passwordField.type = 'password';
            button.innerHTML = '<i class="fa fa-eye"></i>'
        }
        });
    });  
});


// Logic for Making Passwords *Registration Section *
document.addEventListener('DOMContentLoaded', function(){
    //  Passwod Requirements Wrapper References
    let focusListener = document.querySelector('.Focus')
    let focusContent = document.querySelector('.Password_Instruction')

    // Logic to Open Passwod Requirements Wrapper
    focusListener.addEventListener('click', function(event){
        focusContent.style.display = 'flex'
        event.stopPropagation();

        document.addEventListener('click', function() {
            focusContent.style.display = 'none';
        })
    })

    //Password Checking Refrences
    let eightCharacter = document.querySelector('.Eight_Character')
    let uppercaseCharacter = document.querySelector('.Uppercase_Character')
    let lowercaseCharacter = document.querySelector('.Lowercase_Character')
    let specialCharacter = document.querySelector('.Special_Character')
    let numberCharacter = document.querySelector('.Number_Character')
    let entirelyNotNumeric = document.querySelector('.Entirely_Not_Numeric')
    let eightCharacterTwo = document.querySelector('.Eight_Character2')
    let uppercaseCharacterTwo = document.querySelector('.Uppercase_Character2')
    let lowercaseCharacterTwo = document.querySelector('.Lowercase_Character2')
    let specialCharacterTwo = document.querySelector('.Special_Character2')
    let numberCharacterTwo = document.querySelector('.Number_Character2')
    let entirelyNotNumericTwo = document.querySelector('.Entirely_Not_Numeric2')

    // making the Checkpassword chekcers function generally avaialbe using variables

    let checkEightCharacter, checkUppercaseCharacter, checkLowercaseCharacter, checkSpecialCharacter, checkNumberCharacter, checkEntirelyNotNumeric;
    let passwordInput = document.querySelector('.password')

    function checkPassword(passwordValue){
    checkEightCharacter = new RegExp('(?=.{8,})')
    checkUppercaseCharacter = new RegExp('(?=.*[A-Z])')
    checkLowercaseCharacter = new RegExp('(?=.*[a-z])')
    checkSpecialCharacter = new RegExp('(?=.*[!@#\$%\^&\\*+\\-=_()!~`])')
    checkNumberCharacter = new RegExp('(?=.*[0-9])')
    checkEntirelyNotNumeric = new RegExp('^(?=.*[a-zA-Z])(?=.*[0-9]).+$')

    if(checkLowercaseCharacter.test(passwordValue)){
        lowercaseCharacter.style.display = 'none'
        lowercaseCharacterTwo.style.display = 'flex'
    }
    else{
        lowercaseCharacter.style.display = 'flex'
        lowercaseCharacterTwo.style.display = 'none'
    }

    if(checkUppercaseCharacter.test(passwordValue)){
        uppercaseCharacter.style.display = 'none'
        uppercaseCharacterTwo.style.display = 'flex'
    }
    else{
        uppercaseCharacter.style.display = 'flex'
        uppercaseCharacterTwo.style.display = 'none'
    }

    if(checkEightCharacter.test(passwordValue)){
        eightCharacter.style.display = 'none'
        eightCharacterTwo.style.display = 'flex'
    }
    else{
        eightCharacter.style.display = 'flex'
        eightCharacterTwo.style.display = 'none'
    }

    if(checkEntirelyNotNumeric.test(passwordValue)){
        entirelyNotNumeric.style.display = 'none'
        entirelyNotNumericTwo.style.display = 'flex'
    }
    else{
        entirelyNotNumeric.style.display = 'flex'
        entirelyNotNumericTwo.style.display = 'none'
    }

    if(checkNumberCharacter.test(passwordValue)){
        numberCharacter.style.display = 'none'
        numberCharacterTwo.style.display = 'flex'
    }
    else{
        numberCharacter.style.display = 'flex'
        numberCharacterTwo.style.display = 'none'
    }

    if(checkSpecialCharacter.test(passwordValue)){
        specialCharacter.style.display = 'none'
        specialCharacterTwo.style.display = 'flex'
    }
    else{
        specialCharacter.style.display = 'flex'
        specialCharacterTwo.style.display = 'none'
    }

    if(checkEightCharacter.test(passwordValue) && checkLowercaseCharacter.test(passwordValue) && checkUppercaseCharacter.test(passwordValue) && checkNumberCharacter.test(passwordValue) && checkSpecialCharacter.test(passwordValue) && checkEntirelyNotNumeric.test(passwordValue)){
        focusContent.style.display = 'none'
    }
    else{
        focusContent.style.display = 'flex'
    }

    }

    // Listens to the password inputs for making passwords
        passwordInput.addEventListener('input', function(){
        let passwordValue = passwordInput.value
        checkPassword(passwordValue)
    })

})



// Function to hide Messages
function hideFlashMessages() {
    const flashMessages = document.querySelectorAll('.Msg');
    flashMessages.forEach((message) => {
        setTimeout(() => {
            message.style.display = 'none';
        }, 3000); 
    });
}

document.addEventListener('DOMContentLoaded', function() {
    hideFlashMessages();
})