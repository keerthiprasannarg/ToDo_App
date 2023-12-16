console.log("enter userLogin");
document.addEventListener('DOMContentLoaded', function () {

    class loginform {
        constructor(Username, Password) {
            this.username = Username,
                this.password = Password
        }
    }

    let loginSubmit = document.getElementById("loginBoxid");
    loginSubmit?.addEventListener('submit', (evt) => { evt.preventDefault(); onUserLogin() });

    async function onUserLogin() {
        console.log("enter userLogin2");
        let loginBoxUsername = document.getElementById("loginBoxUsername").value;
        let loginBoxPassword = document.getElementById("loginBoxPassword").value;
        if (loginBoxUsername && loginBoxPassword) {
            let userLogin = {
                username: loginBoxUsername,
                password: loginBoxPassword
            }
            // new loginform(document.getElementById("loginBoxUsername").value,document.getElementById("loginBoxPassword").value);
            console.log('userLogin', userLogin)
            // let options = {
            //     method:"POST",
            //     headers:{
            //         "content-type":"application/json"
            //     },
            //     body:JSON.stringify(userLogin)
            // }
            // console.log('options: ', options);

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userLogin)
            };
            fetch('http://localhost:3000/users/login', requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log('data: ', data)
                    if (data.UserName) {
                        localStorage.setItem("user", JSON.stringify(data))

                        window.location.href = "./totolist.html"
                    }
                }
                );
            // await fetch("http://localhost:3000/users/login",options).then(res=>res.json).then(data=>{
            //     console.log('data: ', data);
            // if(data.UserName){
            // }
            // })
        }

    }
})
