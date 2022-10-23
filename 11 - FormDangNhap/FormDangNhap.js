function onClickBtnLogin() {
    txtWelcome = document.getElementById("txt-welcome")
    txtWelcome.innerHTML += ` <i><b>${document.getElementById("textbox-username").value}</b></i>`
    document.getElementById("txt-welcome").style.visibility = "visible"
}