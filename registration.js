console.log("enter regUser");
document.addEventListener('DOMContentLoaded', function(){
    class registerationForm{
        constructor(firstName,lastName,Username,Password){
            this.registerfirstname=firstName,
            this.registerlastname=lastName,
            this.registerUsername=Username,
            this.registerPassword=Password
        }
  }

    let onRegister = document.getElementById("registrationBoxid");
    onRegister?.addEventListener('submit',(evt)=>{evt.preventDefault(); onUserRegister()} );
    function onUserRegister() {
        console.log("enter regUser");
        let regFirstName =  document.getElementById("registrationBoxFirstname").value;
        let regLastName =  document.getElementById("registrationBoxLastname").value;
        let regUsername =  document.getElementById("registrationBoxUsername").value;
        let regPassword =  document.getElementById("registrationBoxPassword").value;
        if( regFirstName && regLastName && regUsername && regPassword){
            let regform=new registerationForm(document.getElementById("registrationBoxFirstname").value,document.getElementById("registrationBoxLastname").value,document.getElementById("registrationBoxUsername").value,document.getElementById("registrationBoxPassword").value)
            console.log("register",regform)
        }
    
    }
})
