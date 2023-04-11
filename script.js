const mobile = document.querySelector('.mobile');
const modal = document.querySelector('.modal');
mobile.addEventListener('click', function(event){
    // console.log(event.currentTarget);
    if(mobile == event.target){
        mobile.classList.remove('open');
    }
})

function someFunction(){
    
    if(mobile.className.includes('open')){
        mobile.classList.remove('open');
    } else {
        mobile.classList.add('open');
    }
}