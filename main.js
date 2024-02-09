const btn = document.querySelector('.btn'),
wrapper = document.querySelector('.wrapper')


btn.addEventListener('click', ()=>{
    wrapper.classList.toggle('shadow')
    btn.classList.toggle('run')
    btn.classList.toggle('white')
    document.body.classList.toggle('black')

})




// const zvezd = document.querySelector('.zvezds')


// // zvezd.innerHTML = `<div class="zvezd"></div>`
// // zvezd.style.marginLeft = '30px'
// for (let i=0;i<100;i+=1){
//     let a = document.createElement('div')
//     // a.style.marginLeft = `33px`
//     a.innerHTML = `<div class="zvezd">
//     </div>`
    
//     zvezd.appendChild(a)
  
// }