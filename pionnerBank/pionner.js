const loginBtn= document.getElementById('login');
 loginBtn.addEventListener('click', function(){
     const loginArea = document.getElementById('login-main');
     loginArea.style.display='none';
     const dashBoard =document.getElementById('dashboard');
     dashBoard.style.display='block';
 });
 const depositBtn = document.getElementById('depositBtn');
 depositBtn.addEventListener('click', function(){
 const depositNumber = getInputNumber('depositAmount')

     updateSpanText('currentDeposit', depositNumber)
     updateSpanText('balance', depositNumber)
     document.getElementById('depositAmount').value="";
 });
 function updateSpanText (id,depositNumber){
    const balance = document.getElementById(id).innerText;
    const currentBalance =parseFloat(balance);
    const currentTotalBalance =depositNumber+currentBalance;
    document.getElementById(id).innerText=currentTotalBalance; 
 }
 //withdraw Amount  added//
 const withdrawBtn=document.getElementById('withdrawBtn');
 withdrawBtn.addEventListener('click', function(){
     const withdrawNumber = getInputNumber('withdrawAmount')

     updateSpanText('currentWithdraw', withdrawNumber)
     updateSpanText('balance', -1 * withdrawNumber)

     document.getElementById('withdrawAmount').value="";
 })
 function getInputNumber(id){
    const  withdrawAmount = document.getElementById(id).value;
    const withdrawNumber = parseFloat(withdrawAmount)
    return withdrawNumber
 }