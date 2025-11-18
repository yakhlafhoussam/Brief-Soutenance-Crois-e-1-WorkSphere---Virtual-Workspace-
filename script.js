let newbtn = document.querySelector("#new");
let newinfo = { url: '', gender: '', first: '', last: '', email: '', tel: '', role: '', exper: [], situation: false, id: '', start: '', end: '' };
let info = JSON.parse(window.localStorage.getItem("employer")) || [];
let gender = document.querySelector("#gender");
let first = document.querySelector("#first");
let last = document.querySelector("#last");
let email = document.querySelector("#email");
let tel = document.querySelector("#tel");
let role = document.querySelector("#role");
let start = document.querySelector("#start");
let end = document.querySelector("#end");
let employerplay = document.querySelector("#employerplay");
let employers;
let chose;
let index;
let num = 0;
let total = 0;

function turnon() {
    employers = document.querySelectorAll(".showinfo");
    employers.forEach(card => {
        card.addEventListener("click", (events) => {
            chose = Number(events.currentTarget.id);
            index = info.findIndex(info => info.id === chose);
            document.querySelector("#infopopup").style.display = "flex";
            if (info[index].url == "") {
                if (info[index].gender == "Male") {
                    document.querySelector("#profile").src = "img/man.png"
                } else {
                    document.querySelector("#profile").src = "img/woman.png"
                }
            } else {
                document.querySelector("#profile").src = info[index].url;
            }
            document.querySelector("#nameinfo").textContent = info[index].first + " " + info[index].last;
            document.querySelector("#roleinfo").textContent = info[index].role;
            document.querySelector("#startinfo").textContent = info[index].start;
            document.querySelector("#endinfo").textContent = info[index].end;
            document.querySelector("#emailinfo").textContent = info[index].email;
            document.querySelector("#emailinfo").href = "mailto:" + info[index].email;
            document.querySelector("#telinfo").textContent = info[index].tel;
            if (info[index].exper.length == 0) {
                document.querySelector("#experienceinfo").style.display = "none";
            } else {
                document.querySelector("#experienceinfo").style.display = "flex";
                document.querySelector("#experiencelist").innerHTML = "";
                for (let ex = 0; ex < info[index].exper.length; ex++) {
                    document.querySelector("#experiencelist").insertAdjacentHTML("beforeend", `
                        <li class="text-slate-900">${info[index].exper[ex]}</li>
                    `)
                }
            }
            if (info[index].situation == false) {
                document.querySelector("#situation").textContent = "This employer is absent";
            }
            document.querySelector("#done").onclick = function () {
                document.querySelector("#infopopup").style.display = "none";
            }
            document.querySelector("#del").onclick = function () {
                info[index].id = 0;
                window.localStorage.setItem("employer", JSON.stringify(info));
                document.querySelector("#infopopup").style.display = "none";
                location.reload();
            }
        });
    });
}

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
        newinfo.url = document.querySelector("#urlimg").value;
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
        newinfo.exper.push(document.querySelector("#experinputs").value);
        document.querySelector("#experience").insertAdjacentHTML("beforeend", `
            <li class="text-slate-900">${document.querySelector("#experinputs").value}</li>`
        );
        document.querySelector("#experinputs").value = "";
        document.querySelector("#experience").style.display = "flex";
    }
}
document.querySelector("#create").onclick = function () {
    if (gender.value == "0" || first.value == "" || last.value == "" || email.value == "" || tel.value == "" || role.value == "0" || start.value == "" || end.value == "" || end.value <= start.value) {
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
        if (start.value == "") {
            start.classList.add("border-red-600");
            gsap.to(start, {
                x: 3,
                duration: 0.05,
                yoyo: true,
                repeat: 3,
            });
        } else {
            start.classList.remove("border-red-600");
        }
        if (end.value == "") {
            end.classList.add("border-red-600");
            gsap.to(end, {
                x: 3,
                duration: 0.05,
                yoyo: true,
                repeat: 3,
            });
        } else {
            end.classList.remove("border-red-600");
        }
        if (end.value <= start.value) {
            document.querySelector("#reddatemsg").style.display = "flex";
            start.classList.add("border-red-600");
            gsap.to(start, {
                x: 3,
                duration: 0.05,
                yoyo: true,
                repeat: 3,
            });
            end.classList.add("border-red-600");
            gsap.to(end, {
                x: 3,
                duration: 0.05,
                yoyo: true,
                repeat: 3,
            });
        } else {
            start.classList.remove("border-red-600");
            end.classList.remove("border-red-600");
            document.querySelector("#reddatemsg").style.display = "none";
        }
    } else {
        document.querySelector("#redmsg").style.display = "none";
        newinfo.gender = gender.value;
        newinfo.first = first.value;
        newinfo.last = last.value;
        newinfo.email = email.value;
        newinfo.tel = tel.value;
        newinfo.role = role.value;
        newinfo.start = start.value;
        newinfo.end = end.value;
        newinfo.id = info.length + 1;
        info.push(newinfo);
        window.localStorage.setItem("employer", JSON.stringify(info));
        document.querySelector("#popup").style.display = "none";
        newinfo = { url: '', gender: '', first: '', last: '', email: '', tel: '', role: '', exper: [], situation: false, id: '' };
        location.reload();
    }
}

if (info.length == 0) {
    document.querySelector("#nomsg").style.display = "flex";
    document.querySelector("#number").style.display = "none";
} else {
    for (let i = 0; i < info.length; i++) {
        if (info[i].id != 0) {
            total++;
            if (info[i].situation == false) {
                num++;
                employerplay.insertAdjacentHTML("beforeend", `
                    <div id="${info[i].id}" class="bg-slate-400 w-full py-2 rounded-full flex items-center justify-between px-3 showinfo">
                        <div class="flex gap-2">
                            <img id="profil" class="w-14 h-14 rounded-full" src="">
                            <div class="flex flex-col justify-center">
                                <h1 class="text-slate-900 font-bold">${info[i].first} ${info[i].last}</h1>
                                <h1 class="text-slate-900">${info[i].role}</h1>
                            </div>
                        </div>
                    </div>`
                );
                if (info[i].url == "") {
                    if (info[i].gender == "Male") {
                        document.querySelector("#profil").src = "img/man.png";
                    } else {
                        document.querySelector("#profil").src = "img/woman.png";
                    }
                } else {
                    document.querySelector("#profil").src = info[i].url;
                }
                document.querySelector("#profil").removeAttribute("id");
            } else {

            }
        }
    }
    document.querySelector("#total").textContent = total;
    document.querySelector("#available").textContent = num;
    turnon();
}
