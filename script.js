let start = document.getElementById("Start")
let ul = document.getElementById("ul")
let ser = document.getElementById("service")
let port = document.getElementById("portfolio")
let about = document.getElementById("about")
let team = document.getElementById("team")
let contact = document.getElementById("contact")

let plus1 = document.getElementById("portplus1")
let plus2 = document.getElementById("portplus2")
let plus3 = document.getElementById("portplus3")
let plus4 = document.getElementById("portplus4")
let plus5 = document.getElementById("portplus5")
let plus6 = document.getElementById("portplus6")
let dorw = document.getElementById("dorw")
let hzor = document.getElementById("hzor")

let in1 = document.getElementById("in1")
let in2 = document.getElementById("in2")
let in3 = document.getElementById("in3")
let in4 = document.getElementById("in4")

let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let p3 = document.getElementById("p3")
let p4 = document.getElementById("p4")

function input1() {
    if (in1.value == "") {
        p1.innerHTML = "A name is required."
    } else{p1.innerHTML = ""}
    if (in1.value !== "" && in2.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) && in3.value !== "" && in4.value !== "") {
        document.getElementById("but").removeAttribute("disabled","")
        document.getElementById("but").style.opacity = "100%"
        document.getElementById("but").style.cursor = "pointer"
    } else{
        document.getElementById("but").style.opacity = "70%"
        document.getElementById("but").style.cursor = "auto"
        document.getElementById("but").setAttribute("disabled","")
    }
}

function input2() {
    if (in2.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))) {
        p2.innerHTML = ""
    } else{p2.innerHTML = "Email is not valid."}
        if (in1.value !== "" && in2.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) && in3.value !== "" && in4.value !== "") {
        document.getElementById("but").removeAttribute("disabled","")
        document.getElementById("but").style.opacity = "100%"
        document.getElementById("but").style.cursor = "pointer"
    } else{
        document.getElementById("but").style.opacity = "70%"
        document.getElementById("but").style.cursor = "auto"
        document.getElementById("but").setAttribute("disabled","")
    }
}

function input3() {
    if (in3.value == "") {
        p3.innerHTML = "A phone number is required."
    } else{p3.innerHTML = ""}
    if (in1.value !== "" && in2.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) && in3.value !== "" && in4.value !== "") {
        document.getElementById("but").removeAttribute("disabled","")
        document.getElementById("but").style.opacity = "100%"
        document.getElementById("but").style.cursor = "pointer"
    } else{
        document.getElementById("but").style.opacity = "70%"
        document.getElementById("but").style.cursor = "auto"
        document.getElementById("but").setAttribute("disabled","")
    }
}

function input4() {
    if (in4.value == "") {
        p4.innerHTML = "A message is required."
    } else{p4.innerHTML = ""}
    if (in1.value !== "" && in2.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) && in3.value !== "" && in4.value !== "") {
        document.getElementById("but").removeAttribute("disabled","")
        document.getElementById("but").style.opacity = "100%"
        document.getElementById("but").style.cursor = "pointer"
    } else{
        document.getElementById("but").style.opacity = "70%"
        document.getElementById("but").style.cursor = "auto"
        document.getElementById("but").setAttribute("disabled","")
    }
}

document.getElementById("but").onclick = () => {
    document.getElementById("but").innerHTML = "Sent!"
    document.getElementById("but").style.cursor = "auto"
    document.getElementById("but").setAttribute("disabled","")
    in1.setAttribute("disabled","")
    in1.style.backgroundColor = "white"
    in2.setAttribute("disabled","")
    in2.style.backgroundColor = "white"
    in3.setAttribute("disabled","")
    in3.style.backgroundColor = "white"
    in4.setAttribute("disabled","")
    in4.style.backgroundColor = "white"
}


start.onclick = () => {
    document.documentElement.scrollTop = 0
    port.style.color = "white"
    ser.style.color = "white"
    team.style.color = "white"
    about.style.color = "white"
    contact.style.color = "white"
}

document.getElementById("tell").onclick = () => {
    document.documentElement.scrollTop = 735
    port.style.color = "white"
    ser.style.color = "orange"
    team.style.color = "white"
    about.style.color = "white"
    contact.style.color = "white"
}

plus1.onclick = () => {
    hzor.style.top = document.documentElement.scrollTop + "px"
    hzor.style.overflowY = "scroll"
    document.body.style.overflow = "hidden"
    dorw.style.display = "block"
    hzor.style.display = "block"
    document.getElementById("jam").style.display = "block"
}

dorw.onclick = () => {
    dorw.style.display = "none"
    hzor.style.display = "none"
    document.body.style.overflow = "auto"
    document.getElementById("koshik").style.display = "none"
    document.getElementById("jam").style.display = "none"
    document.getElementById("finish").style.display = "none"
    document.getElementById("lines").style.display = "none"
    document.getElementById("south").style.display = "none"
    document.getElementById("window").style.display = "none"
}

document.getElementById("closeb1").onclick = () => {
    dorw.style.display = "none"
    hzor.style.display = "none"
    document.body.style.overflow = "auto"
    document.getElementById("jam").style.display = "none"
}

document.getElementById("closeb2").onclick = () => {
    dorw.style.display = "none"
    hzor.style.display = "none"
    document.body.style.overflow = "auto"
    document.getElementById("koshik").style.display = "none"
}

document.getElementById("closex1").onclick = () => {
    dorw.style.display = "none"
    hzor.style.display = "none"
    document.body.style.overflow = "auto"
    document.getElementById("jam").style.display = "none"
}

document.getElementById("closex2").onclick = () => {
    dorw.style.display = "none"
    hzor.style.display = "none"
    document.body.style.overflow = "auto"
    document.getElementById("koshik").style.display = "none"
}

document.getElementById("closeb3").onclick = () => {
    dorw.style.display = "none"
    hzor.style.display = "none"
    document.body.style.overflow = "auto"
    document.getElementById("finish").style.display = "none"
}

document.getElementById("closex3").onclick = () => {
    dorw.style.display = "none"
    hzor.style.display = "none"
    document.body.style.overflow = "auto"
    document.getElementById("finish").style.display = "none"
}

document.getElementById("closeb4").onclick = () => {
    dorw.style.display = "none"
    hzor.style.display = "none"
    document.body.style.overflow = "auto"
    document.getElementById("lines").style.display = "none"
}

document.getElementById("closex4").onclick = () => {
    dorw.style.display = "none"
    hzor.style.display = "none"
    document.body.style.overflow = "auto"
    document.getElementById("lines").style.display = "none"
}

document.getElementById("closeb5").onclick = () => {
    dorw.style.display = "none"
    hzor.style.display = "none"
    document.body.style.overflow = "auto"
    document.getElementById("south").style.display = "none"
}

document.getElementById("closex5").onclick = () => {
    dorw.style.display = "none"
    hzor.style.display = "none"
    document.body.style.overflow = "auto"
    document.getElementById("south").style.display = "none"
}

document.getElementById("closeb6").onclick = () => {
    dorw.style.display = "none"
    hzor.style.display = "none"
    document.body.style.overflow = "auto"
    document.getElementById("window").style.display = "none"
}

document.getElementById("closex6").onclick = () => {
    dorw.style.display = "none"
    hzor.style.display = "none"
    document.body.style.overflow = "auto"
    document.getElementById("window").style.display = "none"
}

plus2.onclick = () => {
    hzor.style.top = document.documentElement.scrollTop + "px"
    hzor.style.overflowY = "scroll"
    document.body.style.overflow = "hidden"
    dorw.style.display = "block"
    hzor.style.display = "block"
    document.getElementById("koshik").style.display = "block"
}

plus3.onclick = () => {
    hzor.style.top = document.documentElement.scrollTop + "px"
    hzor.style.overflowY = "scroll"
    document.body.style.overflow = "hidden"
    dorw.style.display = "block"
    hzor.style.display = "block"
    document.getElementById("finish").style.display = "block"
}

plus4.onclick = () => {
    hzor.style.top = document.documentElement.scrollTop + "px"
    hzor.style.overflowY = "scroll"
    document.body.style.overflow = "hidden"
    dorw.style.display = "block"
    hzor.style.display = "block"
    document.getElementById("lines").style.display = "block"
}

plus5.onclick = () => {
    hzor.style.top = document.documentElement.scrollTop + "px"
    hzor.style.overflowY = "scroll"
    document.body.style.overflow = "hidden"
    dorw.style.display = "block"
    hzor.style.display = "block"
    document.getElementById("south").style.display = "block"
}

plus6.onclick = () => {
    hzor.style.top = document.documentElement.scrollTop + "px"
    hzor.style.overflowY = "scroll"
    document.body.style.overflow = "hidden"
    dorw.style.display = "block"
    hzor.style.display = "block"
    document.getElementById("window").style.display = "block"
}

ser.onclick = () => {
    document.getElementById("nav").style.backgroundColor = "rgb(39, 39, 39)"
    document.getElementById("nav").style.height = "60px"
    start.style.fontSize = "30px"
    start.style.top = "10px"
    ul.style.fontSize = "19px"
    ul.style.paddingTop = "15px"
    document.documentElement.scrollTop = 735
    port.style.color = "white"
    about.style.color = "white"
    team.style.color = "white"
    contact.style.color = "white"
}

port.onclick = () => {
    document.getElementById("nav").style.backgroundColor = "rgb(39, 39, 39)"
    document.getElementById("nav").style.height = "60px"
    start.style.fontSize = "30px"
    start.style.top = "10px"
    ul.style.fontSize = "19px"
    ul.style.paddingTop = "15px"
    document.documentElement.scrollTop = 1324
    ser.style.color = "white"
    about.style.color = "white"
    team.style.color = "white"
    contact.style.color = "white"
}

about.onclick = () => {
    document.getElementById("nav").style.backgroundColor = "rgb(39, 39, 39)"
    document.getElementById("nav").style.height = "60px"
    start.style.fontSize = "30px"
    start.style.top = "10px"
    ul.style.fontSize = "19px"
    ul.style.paddingTop = "15px"
    document.documentElement.scrollTop = 2424
    port.style.color = "white"
    ser.style.color = "white"
    team.style.color = "white"
    contact.style.color = "white"
}

team.onclick = () => {
    document.getElementById("nav").style.backgroundColor = "rgb(39, 39, 39)"
    document.getElementById("nav").style.height = "60px"
    start.style.fontSize = "30px"
    start.style.top = "10px"
    ul.style.fontSize = "19px"
    ul.style.paddingTop = "15px"
    document.documentElement.scrollTop = 4024
    port.style.color = "white"
    about.style.color = "white"
    ser.style.color = "white"
    contact.style.color = "white"
}

contact.onclick = () => {
    document.getElementById("nav").style.backgroundColor = "rgb(39, 39, 39)"
    document.getElementById("nav").style.height = "60px"
    start.style.fontSize = "30px"
    start.style.top = "10px"
    ul.style.fontSize = "19px"
    ul.style.paddingTop = "15px"
    document.documentElement.scrollTop = 5055
    port.style.color = "white"
    about.style.color = "white"
    team.style.color = "white"
    ser.style.color = "white"
}

function guyn1() {
    ser.style.color = "orange"
}

function anguyn1() {
    ser.style.color = "white"
}

function guyn2() {
    port.style.color = "orange"
}

function anguyn2() {
    port.style.color = "white"
}

function guyn3() {
    about.style.color = "orange"
}

function anguyn3() {
    about.style.color = "white"
}

function guyn4() {
    team.style.color = "orange"
}

function anguyn4() {
    team.style.color = "white"
}

function guyn5() {
    contact.style.color = "orange"
}

function anguyn5() {
    contact.style.color = "white"
}

document.onscroll = function () {
    let scroll = document.documentElement.scrollTop
    ser.addEventListener("mouseover", guyn1)
    ser.addEventListener("mouseleave", anguyn1)
    port.addEventListener("mouseover", guyn2)
    port.addEventListener("mouseleave", anguyn2)
    about.addEventListener("mouseover", guyn3)
    about.addEventListener("mouseleave", anguyn3)
    team.addEventListener("mouseover", guyn4)
    team.addEventListener("mouseleave", anguyn4)
    contact.addEventListener("mouseover", guyn5)
    contact.addEventListener("mouseleave", anguyn5)

    if (scroll < 30) {
        document.getElementById("nav").style.backgroundColor = "transparent"
        document.getElementById("nav").style.height = "100px"
        start.style.fontSize = "35px"
        start.style.top = "20px"
        ul.style.fontSize = "20px"
        if (window.innerWidth <= 992) {
            ul.style.fontSize = "16px"
            start.style.fontSize = "24px"
        }
        if (window.innerWidth <= 768) {
            ul.style.fontSize = "13px"
            start.style.fontSize = "20px"
        }
        if (window.innerWidth <= 480) {
            ul.style.fontSize = "9px"
            start.style.fontSize = "15px"
            start.style.paddingTop = "40px"
        }
        ul.style.height = "100px"
        ser.style.color = "white"
    }
    if (scroll > 30 && scroll < 750) {
        document.getElementById("nav").style.backgroundColor = "rgb(39, 39, 39)"
        document.getElementById("nav").style.height = "60px"
        ul.style.height = "60px"
        start.style.fontSize = "30px"
        start.style.top = "10px"
        ul.style.fontSize = "19px"
        ser.style.color = "orange"
        ser.removeEventListener("mouseleave", anguyn1)
        port.style.color = "white"
    }
    if (scroll > 750 && scroll < 1850) {
        document.getElementById("nav").style.backgroundColor = "rgb(39, 39, 39)"
        document.getElementById("nav").style.height = "60px"
        ul.style.height = "60px"
        start.style.fontSize = "30px"
        start.style.top = "10px"
        ul.style.fontSize = "19px"
        ser.style.color = "white"
        port.style.color = "orange"
        port.removeEventListener("mouseleave", anguyn2)
        about.style.color = "white"
    }
    if (scroll > 1850 && scroll < 3500) {
        document.getElementById("nav").style.backgroundColor = "rgb(39, 39, 39)"
        document.getElementById("nav").style.height = "60px"
        ul.style.height = "60px"
        start.style.fontSize = "30px"
        start.style.top = "10px"
        ul.style.fontSize = "19px"
        port.style.color = "white"
        about.style.color = "orange"
        about.removeEventListener("mouseleave", anguyn3)
        team.style.color = "white"
    }
    if (scroll > 3500 && scroll < 4500) {
        document.getElementById("nav").style.backgroundColor = "rgb(39, 39, 39)"
        document.getElementById("nav").style.height = "60px"
        ul.style.height = "60px"
        start.style.fontSize = "30px"
        start.style.top = "10px"
        ul.style.fontSize = "19px"
        about.style.color = "white"
        team.style.color = "orange"
        team.removeEventListener("mouseleave", anguyn4)
        contact.style.color = "white"
    }
    if (scroll > 4500) {
        document.getElementById("nav").style.backgroundColor = "rgb(39, 39, 39)"
        document.getElementById("nav").style.height = "60px"
        ul.style.height = "60px"
        start.style.fontSize = "30px"
        start.style.top = "10px"
        ul.style.fontSize = "19px"
        team.style.color = "white"
        contact.style.color = "orange"
        contact.removeEventListener("mouseleave", anguyn5)
    }
    if (window.innerWidth <= 992) {
        ul.style.fontSize = "15px"
        start.style.fontSize = "20px"
    }
    if (window.innerWidth <= 768) {
        ul.style.fontSize = "12px"
        start.style.fontSize = "16px"
    }
    if (window.innerWidth <= 480) {
        ul.style.fontSize = "8px"
        start.style.fontSize = "13px"
    }
    if (window.innerWidth <= 300) {
        ul.style.fontSize = "5px"
        start.style.fontSize = "10px"
        
    }
}