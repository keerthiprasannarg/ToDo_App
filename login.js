console.log("enter userLogin");
document.addEventListener('DOMContentLoaded', function(){ 

    class loginform{
          constructor(Username,Password){
            this.loginBoxUsername=Username,
            this.loginBoxPassword=Password
          }
    }

    let loginSubmit = document.getElementById("loginBoxid");
    loginSubmit?.addEventListener('submit',(evt)=>{evt.preventDefault(); onUserLogin()} );
   
    function onUserLogin() {
        console.log("enter userLogin2");
        let loginBoxUsername =  document.getElementById("loginBoxUsername").value;
        let loginBoxPassword =  document.getElementById("loginBoxPassword").value;
        if( loginBoxUsername && loginBoxPassword){ 
            let userLogin= new loginform(document.getElementById("loginBoxUsername").value,document.getElementById("loginBoxPassword").value);
            console.log('userLogin', userLogin)
        }
    
    }
})
