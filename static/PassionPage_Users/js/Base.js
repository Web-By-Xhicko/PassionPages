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
    