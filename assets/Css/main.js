// /show/hidden password
var show=true;
function togglePass(){
    
    if  (show){
        document.getElementById("pass").type ="text";
        show=false;
    }else{
        document.getElementById("pass").type ="password";
        show=true;
    }
}
// login/signin form
// function onSignin(){
//    var siggin=document.getElementById("auth-form__signin"); 
//     var login=document.getElementById("auth-form__login");
//     siggin.style.display="block";
//     login.style.display ="none";
// }
   
// function onLogin(){
//    var siggin=document.getElementById("auth-form__signin");
//    var login=document.getElementById("auth-form__login");
//     login.style.display ="block";
//     siggin.style.display="none";
// }

//su kien khi nhan tab dang ky
//an dang nhap hiendangky
function onDangky(){
    var divdk=document.getElementById("divdangky");
    var divdn=document.getElementById("divdangnhap");
    divdk.style.display="block";
    
    divdn.style.display="none";
  }
  
  
  // an phan dang ky
  function onDangNhap(){
    var divdk=document.getElementById("divdangky");
    var divdn=document.getElementById("divdangnhap");
    divdn.style.display="block";
    divdk.style.display="none";
    
}