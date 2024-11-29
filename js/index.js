let inputEmail = document.getElementById("email")
let inputPassword = document.getElementById("password")
let logBtn=document.getElementById("btn")

let userList=[];

function test(){
    if(localStorage.getItem("users")!== null){
        userList=JSON.parse(localStorage.getItem("users"));

        for(let i=0;i<userList.length;i++){
            if(inputEmail.value==userList[i].email&&inputPassword.value==userList[i].password){
                window.location='./home.html'
                
                localStorage.setItem('indexBtn',i)
            }
            else{
                document.getElementById('alert').classList.remove('d-none')
            }
        }
    }
}

logBtn.addEventListener('click',function(){
    

    test();
   
})


















