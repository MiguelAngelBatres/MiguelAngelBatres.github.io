// NECESSARY CONSTANTS
const pathname = location.pathname
let themebuttontext = document.getElementById("theme-button")

setTheme() // necessary for it to persist


// CHANGE THEME FUNCTION
function setStoredtheme(){
  if(getCookie("Theme")==="Light"){
    setCookie("Theme","Dark")
  }else{
    setCookie("Theme","Light")
  }
  setTheme()
}

// THEME PERSISTENCE FUNCTION
function setTheme(){
    let isSpanish = getCookie("Language")=="Español" ? true : false
    if(getCookie("Theme")==="Light"){
        document.documentElement.setAttribute('data-theme','light')
        isSpanish ? themebuttontext.innerHTML = "Modo Oscuro" : themebuttontext.innerHTML = "Dark Mode"
    }else{
        document.documentElement.setAttribute('data-theme','dark')
        isSpanish ? themebuttontext.innerHTML = "Modo Claro" : themebuttontext.innerHTML = "Light Mode"
    }
}

// CHANGE LANGUAGE FUNCTION
function changelanguage(){
     if(pathname.match("/es/")){
        setCookie("Language","Ingles")
       location.href = location.href.replace("/es/","/")
    }else{
        setCookie("Language","Español")
       location.href = location.href.replace("/index.html","/es/index.html")
    }
}

// REDIRECT PATH FUNCTION
function redirect(path){
    let finalPath
    if(pathname.match("/es/")){
       finalPath = path ? `/MaleficariusCode/${path}/es/index.html` : `/MaleficariusCode/es/index.html`
    }else{
       finalPath = path ? `/MaleficariusCode/${path}/index.html` : `/MaleficariusCode/index.html`
    }
    location.href = location.origin + finalPath
}

// COOKIE FUNCTIONS
function getCookie(name){
    let cookies = document.cookie.split(";")
    for(let i=0;i<cookies.length;i++){
        let cookie = cookies[i].replace(" ","").split("=")
        if(cookie[0]==name){
            return cookie[1]
        }
    }
}
function setCookie(name,value){
    const today = new Date()
    today.setDate(today.getDate() + 7)
    let expires = `expires=${today.toUTCString()}`
    document.cookie = `${name}=${value};${expires};path=/`
}