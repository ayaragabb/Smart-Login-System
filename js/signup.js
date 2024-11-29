
let inputName = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");

function signup() {
  


    if (inputName.value.trim() !== "" && inputEmail.value.trim() !== "" && inputPassword.value.trim() !== "") {
        let userList = [];

        if (localStorage.getItem("users") !== null) {
            userList = JSON.parse(localStorage.getItem("users"));

            
            let emailExists = userList.some(user => user.email === inputEmail.value);

            if (emailExists) {
                clear();
                document.getElementById('exit').classList.remove("d-none");
                document.getElementById('success').classList.add("d-none");
                document.getElementById('alert').classList.add("d-none");
            } else {
              
                let newUser = {
                    name: inputName.value,
                    email: inputEmail.value,
                    password: inputPassword.value
                };
                userList.push(newUser);
                localStorage.setItem("users", JSON.stringify(userList));

                document.getElementById('success').classList.remove("d-none");
                document.getElementById('alert').classList.add("d-none");
                document.getElementById('exit').classList.add("d-none");
                clear();
            }
        } else {
           
            let newUser = {
                name: inputName.value,
                email: inputEmail.value,
                password: inputPassword.value
            };
            userList.push(newUser);
            localStorage.setItem("users", JSON.stringify(userList));

            document.getElementById('success').classList.remove("d-none");
            document.getElementById('alert').classList.add("d-none");
            document.getElementById('exit').classList.add("d-none");
            clear();
        }
    } else {
        
        document.getElementById('success').classList.add("d-none");
        document.getElementById('alert').classList.remove("d-none");
        document.getElementById('exit').classList.add("d-none");
    }
}
 function clear(){
     inputName.value=null;
     inputEmail.value=null;
     inputPassword.value=null;
 }


















// function singup(){
//     if(inputName.value!=="" && inputEmail.value!=="" && inputPassword.value!==""){
        
//         if(localStorage.getItem("users") !== null){
//             userList=JSON.parse(localStorage.getItem("users"));

//             for(let i=0 ; i<userList.length;i++){

        
//                 if(inputEmail.value!==userList[i].email){
//                     let users={
//                     name:inputName.value,
//                     email:inputEmail.value,
//                     password:inputPassword.value
//                     };
//                     userList.push(users);
//                     localStorage.setItem("users",JSON.stringify(userList));
//                     document.getElementById('success').classList.remove("d-none");
//                     document.getElementById('alert').classList.add("d-none");
//                     document.getElementById('exit').classList.add("d-none");
//                 }
//                 else if(inputEmail.value ==userList[i].email){
//                     document.getElementById('exit').classList.remove("d-none");
//                     document.getElementById('success').classList.add("d-none");
//                     document.getElementById('alert').classList.add("d-none");
//                 }
    
//             }

//         }
//         else if(localStorage.getItem("users") == null){


//             let users={
//             name:inputName.value,
//             email:inputEmail.value,
//             password:inputPassword.value
//             };
//             userList.push(users);
//             localStorage.setItem("users",JSON.stringify(userList));
//             document.getElementById('success').classList.remove("d-none");
//             document.getElementById('alert').classList.add("d-none");
//             document.getElementById('exit').classList.add("d-none");

//         }


        
//     }
//     else{
//         document.getElementById('success').classList.add("d-none");
//         document.getElementById('alert').classList.remove("d-none");
//         document.getElementById('exit').classList.add("d-none");
//     }
// }









// let inputName= document.getElementById('name');
// let inputEmail=document.getElementById('email');
// let inputPassword=document.getElementById('password');
// let userList=[];

// if(localStorage.getItem("users") !== null){
//     userList=JSON.parse(localStorage.getItem("users"));
// }



// function singup(){
//     if(inputName.value!=="" && inputEmail.value!=="" && inputPassword.value!==""){

//                     let users={
//                     name:inputName.value,
//                     email:inputEmail.value,
//                     password:inputPassword.value
//                     };
//                     userList.push(users);
//                     localStorage.setItem("users",JSON.stringify(userList));
//                     document.getElementById('success').classList.remove("d-none");
                    
//                     document.getElementById('alert').classList.add("d-none");
//                 }
//                 else{
//                     document.getElementById('alert').classList.remove("d-none");
//                     document.getElementById('success').classList.add("d-none");
                    
//                 }
            

        
      
// }
