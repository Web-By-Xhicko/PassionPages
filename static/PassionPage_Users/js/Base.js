let navParent = document.querySelectorAll('.Nav_Parent')
let navChild = document.querySelectorAll('.Nav_Child')




navParent.forEach ( function(nav_listen){
    nav_listen.addEventListener('click', function(){
        navChild.classList.toggle('Activate')
    })
});


// nav_parent_listener.addEventListener('click', function(){
//     nav_child_listener.classList.toggle('Activate')
// })


// navParent.addEventListener('click', function(){
//         navChild.classList.toggle('Activate')
// })