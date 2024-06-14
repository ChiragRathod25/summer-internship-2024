const btns:object=document.querySelectorAll('.btn')
for(const button of btns){
button.addEventListener('click',function(e){
    console.log('clicked')
})
   
}