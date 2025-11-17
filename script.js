let newbtn = document.querySelector("#new");
let newinfo = { url: 'url', gender: 'gender', first: 'first', last: 'last', email: 'email', tel: 'tel', role: 'role', exper: 'experiance', situation: false, id: '00' };
let info = JSON.parse(window.localStorage.getItem("employer")) || [];
let gender = document.querySelector("#gender");
let first = document.querySelector("#first");
let last = document.querySelector("#last");
let email = document.querySelector("#email");
let tel = document.querySelector("#tel");
let role = document.querySelector("#role");

newbtn.onclick = function () {
    document.querySelector("#redmsg").style.display = "none";
    document.querySelector("#newimg").src = "img/man.png";
    document.querySelector("#imginput").style.display = "flex";
    document.querySelector("#experience").style.display = "none";
    document.querySelector("#urlimg").value = "";
    document.querySelector("#urlimg").value = "";
    document.querySelector("#experinputs").value = "";
    document.querySelector("#imginput").classList.remove("border-red-600");
    document.querySelector("#experinput").classList.remove("border-red-600");
    document.querySelector("#experience").innerHTML = "";
    gender.classList.remove("border-red-600");
    first.classList.remove("border-red-600");
    last.classList.remove("border-red-600");
    email.classList.remove("border-red-600");
    tel.classList.remove("border-red-600");
    role.classList.remove("border-red-600");
    gender.value = "0";
    first.value = "";
    last.value = "";
    email.value = "";
    tel.value = "";
    role.value = "0";
    document.querySelector("#popup").style.display = "flex";
}
document.querySelector("#close").onclick = function () {
    document.querySelector("#popup").style.display = "none";
    newinfo = [];
}
document.querySelector("#adds").onclick = function () {
    if (document.querySelector("#urlimg").value == "") {
        document.querySelector("#imginput").classList.add("border-red-600");
        gsap.to("#imginput", {
            x: 3,
            duration: 0.05,
            yoyo: true,
            repeat: 3,
        });
    } else {
        document.querySelector("#newimg").src = document.querySelector("#urlimg").value;
        document.querySelector("#imginput").style.display = "none";
    }
}
document.querySelector("#add").onclick = function () {
    if (document.querySelector("#experinputs").value == "") {
        document.querySelector("#experinput").classList.add("border-red-600");
        gsap.to("#experinput", {
            x: 3,
            duration: 0.05,
            yoyo: true,
            repeat: 3,
        });
    } else {
        document.querySelector("#experinput").classList.remove("border-red-600");
        document.querySelector("#experience").insertAdjacentHTML("beforeend", `
            <li class="text-slate-900">${document.querySelector("#experinputs").value}</li>`
        );
        document.querySelector("#experinputs").value = "";
        document.querySelector("#experience").style.display = "flex";
    }
}
document.querySelector("#create").onclick = function () {
    if (gender.value == "0" || first.value == "" || last.value == "" || email.value == "" || tel.value == "" || role.value == "0") {
        document.querySelector("#redmsg").style.display = "flex";
        if (gender.value == "0") {
            gender.classList.add("border-red-600");
            gsap.to(gender, {
                x: 3,
                duration: 0.05,
                yoyo: true,
                repeat: 3,
            });
        } else {
            gender.classList.remove("border-red-600");
        }
        if (first.value == "") {
            first.classList.add("border-red-600");
            gsap.to(first, {
                x: 3,
                duration: 0.05,
                yoyo: true,
                repeat: 3,
            });
        } else {
            first.classList.remove("border-red-600");
        }
        if (last.value == "") {
            last.classList.add("border-red-600");
            gsap.to(last, {
                x: 3,
                duration: 0.05,
                yoyo: true,
                repeat: 3,
            });
        } else {
            last.classList.remove("border-red-600");
        }
        if (email.value == "") {
            email.classList.add("border-red-600");
            gsap.to(email, {
                x: 3,
                duration: 0.05,
                yoyo: true,
                repeat: 3,
            });
        } else {
            email.classList.remove("border-red-600");
        }
        if (tel.value == "") {
            tel.classList.add("border-red-600");
            gsap.to(tel, {
                x: 3,
                duration: 0.05,
                yoyo: true,
                repeat: 3,
            });
        } else {
            tel.classList.remove("border-red-600");
        }
        if (role.value == "0") {
            role.classList.add("border-red-600");
            gsap.to(role, {
                x: 3,
                duration: 0.05,
                yoyo: true,
                repeat: 3,
            });
        } else {
            role.classList.remove("border-red-600");
        }
    } else {
        document.querySelector("#redmsg").style.display = "none";
        info.push(newinfo);
        console.log(info);
        window.localStorage.setItem("employer", JSON.stringify(info));
        document.querySelector("#popup").style.display = "none";
        newinfo = [];
    }
}