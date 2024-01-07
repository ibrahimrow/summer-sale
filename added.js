let total = 0;



document.getElementById('firstFeild').addEventListener('click', function () {
   const firstCard = document.getElementById('firstH')
   const newCard = firstCard.innerText;
   const selectItem = document.getElementById('selected-items')
   const li = document.createElement('li');
   li.innerText = newCard;
   // console.log(li)
   selectItem.appendChild(li)
   // 
    const firstAmout = document.getElementById('firstAmount');
    const firstAmountString = firstAmout.innerText;
    const newAmount1 = parseFloat(firstAmountString);
    console.log(newAmount1)
    


})


// second card


document.getElementById('secondFeild').addEventListener('click', function () {
   const secondCard = document.getElementById('secondH')
   const newCard = secondCard.innerText;
   const selectItem = document.getElementById('selected-items')
   const li = document.createElement('li');
   li.innerText = newCard;
   // console.log(li)
   selectItem.appendChild(li)
   // 
   const secondAmount = document.getElementById('secondAmount');
   const secondAmountString = secondAmount.innerText;
   const newAmount2 = parseFloat(secondAmountString);
   console.log(newAmount2)


})

// third card

document.getElementById('thirdFeild').addEventListener('click', function () {
   const thirdCard = document.getElementById('thirdH')
   const newCard = thirdCard.innerText;
   const selectItem = document.getElementById('selected-items')
   const li = document.createElement('li');
   li.innerText = newCard;
   // console.log(li)
   selectItem.appendChild(li)

   const thirdAmount = document.getElementById('amountThird');
   const thirdAmountString = thirdAmount.innerText;
   const newAmount3 = parseFloat(thirdAmountString);
   console.log(newAmount3);


})
document.getElementById('fourFeild').addEventListener('click', function () {
   const fourCard = document.getElementById('fourH')
   const newCard = fourCard.innerText;
   const selectItem = document.getElementById('selected-items')
   const li = document.createElement('li');
   li.innerText = newCard;
   console.log(li)
   selectItem.appendChild(li)


})
document.getElementById('fiveFeild').addEventListener('click', function () {
   const fiveCard = document.getElementById('fiveH')
   const newCard = fiveCard.innerText;
   const selectItem = document.getElementById('selected-items')
   const li = document.createElement('li');
   li.innerText = newCard;
   console.log(li)
   selectItem.appendChild(li)


})
document.getElementById('sixFeild').addEventListener('click', function () {
   const sixCard = document.getElementById('sixH')
   const newCard = sixCard.innerText;
   const selectItem = document.getElementById('selected-items')
   const li = document.createElement('li');
   li.innerText = newCard;
   console.log(li)
   selectItem.appendChild(li)


})
total = firstAmout + secondAmount + thirdAmount;
console.log(total);
 
