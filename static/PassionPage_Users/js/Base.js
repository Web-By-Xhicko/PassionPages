let navParent = document.querySelector('.Nav_Parent')
let navParent2 = document.querySelector('.Nav_Parent2')
let navChild = document.querySelector('.Nav_Child');
let navChild2 = document.querySelector('.Nav_Child2');
let child2_svg = document.querySelector('.Nav_Parent2 svg')
let isRotated = false;
let isRotated2 = false;


    navParent.addEventListener('click', function(){
            navChild.classList.toggle('Activate')
            rotateToggle(navParent);
    })


    navParent2.addEventListener('click', function(){
        navChild2.classList.toggle('Activate')
        rotateToggle(navParent2);
    })

function rotateToggle(parentElement) {
    let child1_svg = parentElement.querySelector('svg')
     child1_svg.classList.toggle('rotate-clockwise');
}


let Navlist_Listener = document.querySelector('.Navlist_Listener')
let Reveal_NavList = document.querySelector('.Reveal_NavList')

Navlist_Listener.addEventListener('click', function(){
    Reveal_NavList.classList.toggle('Activate')
})