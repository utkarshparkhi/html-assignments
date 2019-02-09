function update() {
    var request = new XMLHttpRequest()
    var email = document.getElementById("email").value
    request.open("POST","http://172.25.55.8:3000/my_machau_api",true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(`email=${email}`)
}