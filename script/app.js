const btnWatchMenu=document.getElementById('watchMenu')
const currencyBtn=document.querySelector('.currency')
const prices=document.querySelectorAll('.products-item-price')
const productsBtn=document.querySelectorAll('.product-btn')
const inpBurger=document.getElementById('burger')
const inpName=document.getElementById('name')
const inpPhone=document.getElementById('phone')
const btnOrder=document.getElementById('order-btn')
const titles=document.querySelectorAll('.products-item-title')

const root=document.querySelector('#root')
const input=document.querySelectorAll('input')


btnWatchMenu.onclick=()=>{
    document.getElementById('products').scrollIntoView({
        behavior:"smooth"
    })
}

currencyBtn.onclick=()=>{
    document.getElementById('products').scrollIntoView({
        behavior:"smooth"
    })

    console.log(currencyBtn.innerHTML);
    let currentCurrent=currencyBtn.innerHTML //$

    let newCurrency='$'
    let kurs=0
    if (currentCurrent==='$') {
        newCurrency='€'
        kurs=0.9
        for(i=0; i<prices.length; i++){
           let basePrice=prices[i].getAttribute('data-base-price')
           prices[i].innerText=basePrice*kurs+ newCurrency
        }
    }  else if (currentCurrent==='€'){
        newCurrency='сом'
        kurs=89
        for(i=0; i<prices.length; i++){
           let basePrice=prices[i].getAttribute('data-base-price')
           prices[i].innerText=basePrice*kurs+ newCurrency
        }
    } else if (currentCurrent==='сом'){
        newCurrency='$'
        kurs=1
        for(i=0; i<prices.length; i++){
           let basePrice=prices[i].getAttribute('data-base-price')
           prices[i].innerText=basePrice*kurs+ newCurrency
        }
    } 
    

    currencyBtn.innerHTML=newCurrency
  
}

productsBtn.forEach((btn, i)=>{
    btn.onclick=()=>{
      document.getElementById('order').scrollIntoView({
        behavior:"smooth"
    })
    inpBurger.value=`${titles[i].innerText}-${prices[i].innerText}`
} 
})



btnOrder.onclick=()=>{ 
    if( input[2].value.trim().length>0 && input[1].value.trim().length>0 && input[0].value.trim().length>0){
        alert('Ваш заказ оформлен')
    }else{
        for (let i = 0; i < input.length; i++) {
            if (input[i].value.trim().length === 0) {
                input[i].style.borderColor = 'red';
            } else {
                input[i].style.borderColor = '';
            }
        }
    }
}