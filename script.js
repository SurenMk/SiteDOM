let start = document.getElementById("Start")
let ul = document.getElementById("ul")

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
    } else { p1.innerHTML = "" }
    if (in1.value !== "" && in2.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) && in3.value !== "" && in4.value !== "") {
        document.getElementById("but").removeAttribute("disabled", "")
        document.getElementById("but").style.opacity = "100%"
        document.getElementById("but").style.cursor = "pointer"
    } else {
        document.getElementById("but").style.opacity = "70%"
        document.getElementById("but").style.cursor = "auto"
        document.getElementById("but").setAttribute("disabled", "")
    }
}

function input2() {
    if (in2.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))) {
        p2.innerHTML = ""
    } else { p2.innerHTML = "Email is not valid." }
    if (in1.value !== "" && in2.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) && in3.value !== "" && in4.value !== "") {
        document.getElementById("but").removeAttribute("disabled", "")
        document.getElementById("but").style.opacity = "100%"
        document.getElementById("but").style.cursor = "pointer"
    } else {
        document.getElementById("but").style.opacity = "70%"
        document.getElementById("but").style.cursor = "auto"
        document.getElementById("but").setAttribute("disabled", "")
    }
}

function input3() {
    if (in3.value == "") {
        p3.innerHTML = "A phone number is required."
    } else { p3.innerHTML = "" }
    if (in1.value !== "" && in2.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) && in3.value !== "" && in4.value !== "") {
        document.getElementById("but").removeAttribute("disabled", "")
        document.getElementById("but").style.opacity = "100%"
        document.getElementById("but").style.cursor = "pointer"
    } else {
        document.getElementById("but").style.opacity = "70%"
        document.getElementById("but").style.cursor = "auto"
        document.getElementById("but").setAttribute("disabled", "")
    }
}

function input4() {
    if (in4.value == "") {
        p4.innerHTML = "A message is required."
    } else { p4.innerHTML = "" }
    if (in1.value !== "" && in2.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) && in3.value !== "" && in4.value !== "") {
        document.getElementById("but").removeAttribute("disabled", "")
        document.getElementById("but").style.opacity = "100%"
        document.getElementById("but").style.cursor = "pointer"
    } else {
        document.getElementById("but").style.opacity = "70%"
        document.getElementById("but").style.cursor = "auto"
        document.getElementById("but").setAttribute("disabled", "")
    }
}

document.getElementById("but").onclick = () => {
    document.getElementById("but").innerHTML = "Sent!"
    document.getElementById("but").style.cursor = "auto"
    document.getElementById("but").setAttribute("disabled", "")
    in1.setAttribute("disabled", "")
    in1.style.backgroundColor = "white"
    in2.setAttribute("disabled", "")
    in2.style.backgroundColor = "white"
    in3.setAttribute("disabled", "")
    in3.style.backgroundColor = "white"
    in4.setAttribute("disabled", "")
    in4.style.backgroundColor = "white"
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


document.onscroll = function () {
    let scroll = document.documentElement.scrollTop

    document.querySelectorAll('.section').forEach((e, i) => {
        if (e.offsetTop - document.querySelector("#nav").clientHeight <= scroll) {
            document.querySelectorAll("#nav a").forEach((e) => {
                e.classList.contains('Active_color') ? e.classList.remove('Active_color') : ''
            });
            document.querySelectorAll('#nav li')[i].querySelector('a').classList.add("Active_color")
        }
    })

    if (scroll < 30) {
        document.getElementById("nav").style.backgroundColor = "transparent"
        document.getElementById("nav").style.height = "100px"
        start.style.fontSize = "35px"
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
        document.querySelectorAll("#nav a").forEach((e) => {
            e.classList.contains('Active_color') ? e.classList.remove('Active_color') : ''
        });
    }
    if (scroll > 30) {
        document.getElementById("nav").style.backgroundColor = "rgb(39, 39, 39)"
        document.getElementById("nav").style.height = "60px"
        ul.style.height = "60px"
        start.style.fontSize = "30px"
        ul.style.fontSize = "19px"
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