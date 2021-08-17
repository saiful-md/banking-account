// Balance , deposit and current balance determine 

/* document.getElementById('deposit-button').addEventListener('click', function(){
    // deposit input 
    const depositInput = document.getElementById('deposit-input');
    const depositInputValueText = depositInput.value;
    const depositInputAmount = parseFloat(depositInputValueText);
    

    // deposit total 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalValueText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalValueText);
    depositTotal.innerText = depositInputAmount + depositTotalAmount;

    // current balance 
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceValueText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceValueText);
    totalBalance.innerText = depositInputAmount + totalBalanceAmount;

    // clear deposit input 
    depositInput.value = '';
})

// determine balance , withdraw, current balance 

document.getElementById('withdraw-button').addEventListener('click', function(){
    // withdraw input 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputValue = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputValue);

    // withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalValue = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalValue);
    withdrawTotal.innerText = withdrawTotalAmount + withdrawInputAmount;

    //withdraw balance 
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceValueText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceValueText);
    totalBalance.innerText =  totalBalanceAmount - withdrawInputAmount ;

    //clear input 
    withdrawInput.value = '';

}) */

//function 

function inputField(inputId){
    const inputValue = document.getElementById(inputId);
    const inputValueText = inputValue.value;
    const inputAmount = parseFloat(inputValueText);
    //clear 
    inputValue.value = '';
    return inputAmount;
}

function updateTotalField(totalFieldId, amount){
    const totalField = document.getElementById(totalFieldId);
    const totalFieldText = totalField.innerText;
    const totalFieldAmount = parseFloat(totalFieldText);
    totalField.innerText = totalFieldAmount + amount;
}

function getCurrentBalance(){
    const currentBalance = document.getElementById('balance-total');
    const currentBalanceText = currentBalance.innerText;
    const currentBalanceAmount = parseFloat(currentBalanceText);
    return currentBalanceAmount;
}

function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const previousBalance = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = previousBalance + amount;
    }
    else{
        balanceTotal.innerText  = previousBalance - amount;
    }
}

//deposit function
document.getElementById('deposit-button').addEventListener('click',function(){
    const depositAmount = inputField('deposit-input');
    if(depositAmount > 0){
        updateTotalField('deposit-total',depositAmount);
        updateBalance(depositAmount, true);
    }
})

//withdraw function
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawAmount = inputField('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount< currentBalance){
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount > currentBalance){
        console.log('you can not withdraw more than what you have in your account');
    }
})
    

