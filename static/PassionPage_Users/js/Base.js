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
        User_Revealer.classList.remove('Activate')
    })

    // Script to reveal and hide user authentication 
let User_Activator = document.querySelector('.User_Activator')
let User_Revealer =  document.querySelector('.User_Revealer')

    User_Activator.addEventListener('click', function(){
        User_Revealer.classList.toggle('Activate')
        Reveal_NavList.classList.remove('Activate')
    })
