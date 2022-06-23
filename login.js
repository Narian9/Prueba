const users = [
    {username: "usuario1", password: "123.", saldo: 50, login(){return this.username} },
    {username: "usuario2", password: "1234", saldo: 20 },
    {username: "usuario3", password: "12345", saldo: 100}
] ;
let form = {user: "usuario1", pass: "123."};
// function login(form){

    
//     if(form.user.value=="ALERA"){
//         if(form.pass.value=="123."){
//             location="init.html";
//         } else{
//             alert("Error de password");
//         }
//     }else{
//         alert("Error de Usuario");
//     }
// }
// function login(form){
//     if(form.user.value==searchUser()){
//         if(form.pass.value=="123."){
//             location="init.html";
//         } else{
//             alert("Error de password");
//         }
//     }else{
//         alert("Error de Usuario");
//     }

function searchUser(){
    let element={};
    let usern="";
    for (let i = 0; i < users.length; i++) {
        element = users[i];
        for (const username in element) {
            if (Object.hasOwnProperty.call(element, username)) {
                usern = element[username];
                //hasta aquí me retorna el nombre se usuario necesita una condición para detenerse                
                }}
                if(form.user.value===usern){
                    console.log(usern);
                    break;
                }
}
return usern;
}
console.log(searchUser());
// for (let i = 0; i < users.length; i++) {
//     const element = users[i];
//     for (const username in element) {
//         if (Object.hasOwnProperty.call(element, username)) {
//             const usern = element[username];
//             console.log(usern);
//             for (const password in element) {
//             if (Object.hasOwnProperty.call(element, password)) {
//                 const passw = element[password];
//                 console.log(passw);

//                  if(form.user.value==usern){
//                  if(form.pass.value==passw){
//                      //location="init.html";
//                      console.log("inicio sesión");
//                  }else{
//                      //alert("Error de password");
//                      console.log("Error de password");
//                     }
//     }else{
//         console.log("Error de Usuario");
//     }
//         }
//     }
// }
// }
// }
// }
// console.log(login()) 
   


