let logoutBtn = document.getElementById("logout");
let userList=[];






if(localStorage.getItem('users')!==null){
    userList=JSON.parse(localStorage.getItem('users'));
    indexBtn=localStorage.getItem('indexBtn')
    let text= document.getElementById("text").innerHTML+=`${userList[indexBtn].name}`;
};

logoutBtn.addEventListener('click',function(){
    window.location='./index.html';
})

