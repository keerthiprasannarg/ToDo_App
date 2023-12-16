console.log("enter regUser");
document.addEventListener('DOMContentLoaded', function () {
    class registerationForm {
        constructor(Username, Password, email) {
            this.UserName = Username,
                this.Email = email,
                this.Password = Password
        }
    }

    let onRegister = document.getElementById("registrationBoxid");
    onRegister?.addEventListener('submit', (evt) => { evt.preventDefault(); onUserRegister() });
    async function onUserRegister() {
        console.log("enter regUser");
        let regUsername = document.getElementById("registrationBoxUsername").value;
        let regPassword = document.getElementById("registrationBoxPassword").value;
        let email = document.getElementById("registrationBoxEmail").value;
        if (regUsername && regPassword) {
            let regform = new registerationForm(document.getElementById("registrationBoxUsername").value, document.getElementById("registrationBoxPassword").value, email)
            console.log("register", regform)
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(regform)
            };
            fetch('http://localhost:3000/users/register', requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log('data: ', data)
                    window.location.href = "./login.html"
                }
                );
        }

    }
})
