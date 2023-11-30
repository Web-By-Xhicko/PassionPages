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

