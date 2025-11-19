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
let employerinput = document.querySelector("#employerinput");
let meeting;
let reception;
let archive;
let security;
let staff;
let server;
let meetinged;
let receptioned;
let archiveed;
let securityed;
let staffed;
let servered;
let employers;
let chose;
let index;
let num = 0;
let total = 0;
let urlput = false;
let inputnum = 0;
let search = document.querySelector("#search");
let searchinput = "";
let firstsearch = "";
let lastsearch = "";
let found = false;
let receptionnum;
let archivenum;
let securitynum;
let servernum;


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
                        <li class="text-slate-900 md:text-2xl">${info[index].exper[ex]}</li>
                    `)
                }
            }
            if (info[index].situation == false) {
                document.querySelector("#situation").textContent = "This employer is absent";
            } else {
                if (found) {
                    document.querySelector("#situation").textContent = `Now in ${info[index].situation} room`;
                }
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

function addemployer() {
    document.querySelectorAll(".added").forEach(carded => {
        carded.addEventListener("click", (eventsed) => {
                chose = eventsed.currentTarget.id;
                index = info.findIndex(info => info.id + "ed" == chose);
                document.querySelector(".meeting").src = info[index].url;
                info[index].situation = "meeting";
                window.localStorage.setItem("employer", JSON.stringify(info));
                location.reload();
                document.querySelector("#inputpopup").style.display = "none";
                chose = 0;
        });
    });
}

function addreceptionemployer() {
    document.querySelectorAll(".added").forEach(carded => {
        carded.addEventListener("click", (eventsed) => {
            if (chose != 0) {
                chose = eventsed.currentTarget.id;
                index = info.findIndex(info => info.id + "ed" == chose);
                document.querySelector(".reception").src = info[index].url;
                info[index].situation = "reception";
                window.localStorage.setItem("employer", JSON.stringify(info));
                location.reload();
                document.querySelector("#inputpopup").style.display = "none";
                chose = 0;
            }
        });
    });
}

function addarchiveemployer() {
    document.querySelectorAll(".added").forEach(carded => {
        carded.addEventListener("click", (eventsed) => {
            if (chose != 0) {
                chose = eventsed.currentTarget.id;
                index = info.findIndex(info => info.id + "ed" == chose);
                document.querySelector(".archive").src = info[index].url;
                info[index].situation = "archive";
                window.localStorage.setItem("employer", JSON.stringify(info));
                location.reload();
                document.querySelector("#inputpopup").style.display = "none";
                chose = 0;
            }
        });
    });
}

function addsecurityemployer() {
    document.querySelectorAll(".added").forEach(carded => {
        carded.addEventListener("click", (eventsed) => {
            if (chose != 0) {
                chose = eventsed.currentTarget.id;
                index = info.findIndex(info => info.id + "ed" == chose);
                document.querySelector(".security").src = info[index].url;
                info[index].situation = "security";
                window.localStorage.setItem("employer", JSON.stringify(info));
                location.reload();
                document.querySelector("#inputpopup").style.display = "none";
                chose = 0;
            }
        });
    });
}

function addstaffemployer() {
    document.querySelectorAll(".added").forEach(carded => {
        carded.addEventListener("click", (eventsed) => {
            if (chose != 0) {
                chose = eventsed.currentTarget.id;
                index = info.findIndex(info => info.id + "ed" == chose);
                document.querySelector(".staff").src = info[index].url;
                info[index].situation = "staff";
                window.localStorage.setItem("employer", JSON.stringify(info));
                location.reload();
                document.querySelector("#inputpopup").style.display = "none";
                chose = 0;
            }
        });
    });
}

function addserveremployer() {
    document.querySelectorAll(".added").forEach(carded => {
        carded.addEventListener("click", (eventsed) => {
            if (chose != 0) {
                chose = eventsed.currentTarget.id;
                index = info.findIndex(info => info.id + "ed" == chose);
                document.querySelector(".server").src = info[index].url;
                info[index].situation = "server";
                window.localStorage.setItem("employer", JSON.stringify(info));
                location.reload();
                document.querySelector("#inputpopup").style.display = "none";
                chose = 0;
            }
        });
    });
}

function plusdisplay() {
    document.querySelector("#closeinput").onclick = function () {
        document.querySelector("#inputpopup").style.display = "none";
        document.querySelector("#nomsginput").style.display = "none";
        inputnum = 0;
        employerinput.innerHTML = "";
    }
    meeting.forEach(card => {
        card.addEventListener("click", (events) => {
            document.querySelector("#inputpopup").style.display = "flex";
            if (num == 0) {
                document.querySelector("#nomsginput").style.display = "flex";
            } else {
                for (let i = 0; i < info.length; i++) {
                    if (info[i].id != 0) {
                        if (info[i].situation == false) {
                            employerinput.insertAdjacentHTML("beforeend", `
                            <div id="${info[i].id}ed" class="bg-slate-400 w-11/12 py-2 rounded-full flex items-center justify-between px-3 added">
                                <div class="flex gap-2">
                                    <img id="profil" class="w-14 h-14 lg:w-20 lg:h-20 rounded-full" src="">
                                    <div class="flex flex-col justify-center">
                                        <h1 class="text-slate-900 font-bold md:text-2xl">${info[i].first} ${info[i].last}</h1>
                                        <h1 class="text-slate-900 md:text-2xl">${info[i].role}</h1>
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
                            if (info[i].situation != "meeting") {
                                console.log(info[i].situation)
                            }
                        }
                    }
                }
                addemployer();
            }
        });
    });
    meetinged.forEach(card => {
        card.addEventListener("click", (events) => {
            chose = events.currentTarget.id;
            index = info.findIndex(info => info.id + "ed" == chose);
            document.querySelector("#infoputpopup").style.display = "flex";
            if (info[index].url == "") {
                if (info[index].gender == "Male") {
                    document.querySelector("#profileinput").src = "img/man.png"
                } else {
                    document.querySelector("#profileinput").src = "img/woman.png"
                }
            } else {
                document.querySelector("#profileinput").src = info[index].url;
            }
            document.querySelector("#nameinfoinput").textContent = info[index].first + " " + info[index].last;
            document.querySelector("#roleinfoinput").textContent = info[index].role;
            document.querySelector("#startinfoinput").textContent = info[index].start;
            document.querySelector("#endinfoinput").textContent = info[index].end;
            document.querySelector("#emailinfoinput").textContent = info[index].email;
            document.querySelector("#emailinfoinput").href = "mailto:" + info[index].email;
            document.querySelector("#telinfoinput").textContent = info[index].tel;
            if (info[index].exper.length == 0) {
                document.querySelector("#experienceinfoinput").style.display = "none";
            } else {
                document.querySelector("#experienceinfoinput").style.display = "flex";
                document.querySelector("#experiencelistinput").innerHTML = "";
                for (let ex = 0; ex < info[index].exper.length; ex++) {
                    document.querySelector("#experiencelistinput").insertAdjacentHTML("beforeend", `
                        <li class="text-slate-900 md:text-2xl">${info[index].exper[ex]}</li>
                    `)
                }
            }
            document.querySelector("#situationinput").textContent = "This employer in the meeting room";
            document.querySelector("#doneinput").onclick = function () {
                document.querySelector("#infoputpopup").style.display = "none";
            }
            document.querySelector("#delinput").onclick = function () {
                info[index].situation = false;
                window.localStorage.setItem("employer", JSON.stringify(info));
                document.querySelector("#infoputpopup").style.display = "none";
                location.reload();
            }
        });
    });
    reception.forEach(card => {
        card.addEventListener("click", (events) => {
            document.querySelector("#inputpopup").style.display = "flex";
            if (num == 0) {
                document.querySelector("#nomsginput").style.display = "flex";
            } else {
                for (let i = 0; i < info.length; i++) {
                    if (info[i].id != 0) {
                        if (info[i].situation == false && info[i].role == "Manager" || info[i].situation == false && info[i].role == "Receptionist") {
                            employerinput.insertAdjacentHTML("beforeend", `
                            <div id="${info[i].id}ed" class="bg-slate-400 w-11/12 py-2 rounded-full flex items-center justify-between px-3 added">
                                <div class="flex gap-2">
                                    <img id="profil" class="w-14 h-14 lg:w-20 lg:h-20 rounded-full" src="">
                                    <div class="flex flex-col justify-center">
                                        <h1 class="text-slate-900 font-bold md:text-2xl">${info[i].first} ${info[i].last}</h1>
                                        <h1 class="text-slate-900 md:text-2xl">${info[i].role}</h1>
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
                            inputnum++;
                        } else {
                            if (info[i].situation != "Manager" || info[i].situation != "Receptionist") {
                                console.log(info[i].situation)
                            }
                        }
                    }
                }
                if (inputnum == 0) {
                    document.querySelector("#nomsginput").style.display = "flex";
                }
                addreceptionemployer();
            }
        });
    });
    receptioned.forEach(card => {
        card.addEventListener("click", (events) => {
            chose = events.currentTarget.id;
            index = info.findIndex(info => info.id + "ed" == chose);
            document.querySelector("#infoputpopup").style.display = "flex";
            if (info[index].url == "") {
                if (info[index].gender == "Male") {
                    document.querySelector("#profileinput").src = "img/man.png"
                } else {
                    document.querySelector("#profileinput").src = "img/woman.png"
                }
            } else {
                document.querySelector("#profileinput").src = info[index].url;
            }
            document.querySelector("#nameinfoinput").textContent = info[index].first + " " + info[index].last;
            document.querySelector("#roleinfoinput").textContent = info[index].role;
            document.querySelector("#startinfoinput").textContent = info[index].start;
            document.querySelector("#endinfoinput").textContent = info[index].end;
            document.querySelector("#emailinfoinput").textContent = info[index].email;
            document.querySelector("#emailinfoinput").href = "mailto:" + info[index].email;
            document.querySelector("#telinfoinput").textContent = info[index].tel;
            if (info[index].exper.length == 0) {
                document.querySelector("#experienceinfoinput").style.display = "none";
            } else {
                document.querySelector("#experienceinfoinput").style.display = "flex";
                document.querySelector("#experiencelistinput").innerHTML = "";
                for (let ex = 0; ex < info[index].exper.length; ex++) {
                    document.querySelector("#experiencelistinput").insertAdjacentHTML("beforeend", `
                        <li class="text-slate-900 md:text-2xl">${info[index].exper[ex]}</li>
                    `)
                }
            }
            document.querySelector("#situationinput").textContent = "This employer in the reception room";
            document.querySelector("#doneinput").onclick = function () {
                document.querySelector("#infoputpopup").style.display = "none";
            }
            document.querySelector("#delinput").onclick = function () {
                info[index].situation = false;
                window.localStorage.setItem("employer", JSON.stringify(info));
                document.querySelector("#infoputpopup").style.display = "none";
                location.reload();
            }
        });
    });
    archive.forEach(card => {
        card.addEventListener("click", (events) => {
            document.querySelector("#inputpopup").style.display = "flex";
            if (num == 0) {
                document.querySelector("#nomsginput").style.display = "flex";
            } else {
                for (let i = 0; i < info.length; i++) {
                    if (info[i].id != 0) {
                        if (info[i].situation == false && info[i].role != "Cleaner") {
                            employerinput.insertAdjacentHTML("beforeend", `
                            <div id="${info[i].id}ed" class="bg-slate-400 w-11/12 py-2 rounded-full flex items-center justify-between px-3 added">
                                <div class="flex gap-2">
                                    <img id="profil" class="w-14 h-14 lg:w-20 lg:h-20 rounded-full" src="">
                                    <div class="flex flex-col justify-center">
                                        <h1 class="text-slate-900 font-bold md:text-2xl">${info[i].first} ${info[i].last}</h1>
                                        <h1 class="text-slate-900 md:text-2xl">${info[i].role}</h1>
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
                            inputnum++;
                        } else {
                            if (info[i].situation == "Cleaner") {
                                console.log(info[i].situation)
                            }
                        }
                    }
                }
                if (inputnum == 0) {
                    document.querySelector("#nomsginput").style.display = "flex";
                }
                addarchiveemployer();
            }
        });
    });
    archiveed.forEach(card => {
        card.addEventListener("click", (events) => {
            chose = events.currentTarget.id;
            index = info.findIndex(info => info.id + "ed" == chose);
            document.querySelector("#infoputpopup").style.display = "flex";
            if (info[index].url == "") {
                if (info[index].gender == "Male") {
                    document.querySelector("#profileinput").src = "img/man.png"
                } else {
                    document.querySelector("#profileinput").src = "img/woman.png"
                }
            } else {
                document.querySelector("#profileinput").src = info[index].url;
            }
            document.querySelector("#nameinfoinput").textContent = info[index].first + " " + info[index].last;
            document.querySelector("#roleinfoinput").textContent = info[index].role;
            document.querySelector("#startinfoinput").textContent = info[index].start;
            document.querySelector("#endinfoinput").textContent = info[index].end;
            document.querySelector("#emailinfoinput").textContent = info[index].email;
            document.querySelector("#emailinfoinput").href = "mailto:" + info[index].email;
            document.querySelector("#telinfoinput").textContent = info[index].tel;
            if (info[index].exper.length == 0) {
                document.querySelector("#experienceinfoinput").style.display = "none";
            } else {
                document.querySelector("#experienceinfoinput").style.display = "flex";
                document.querySelector("#experiencelistinput").innerHTML = "";
                for (let ex = 0; ex < info[index].exper.length; ex++) {
                    document.querySelector("#experiencelistinput").insertAdjacentHTML("beforeend", `
                        <li class="text-slate-900 md:text-2xl">${info[index].exper[ex]}</li>
                    `)
                }
            }
            document.querySelector("#situationinput").textContent = "This employer in the archive room";
            document.querySelector("#doneinput").onclick = function () {
                document.querySelector("#infoputpopup").style.display = "none";
            }
            document.querySelector("#delinput").onclick = function () {
                info[index].situation = false;
                window.localStorage.setItem("employer", JSON.stringify(info));
                document.querySelector("#infoputpopup").style.display = "none";
                location.reload();
            }
        });
    });
    security.forEach(card => {
        card.addEventListener("click", (events) => {
            document.querySelector("#inputpopup").style.display = "flex";
            if (num == 0) {
                document.querySelector("#nomsginput").style.display = "flex";
            } else {
                for (let i = 0; i < info.length; i++) {
                    if (info[i].id != 0) {
                        if (info[i].situation == false && (info[i].role == "Manager" || info[i].role == "Security")) {
                            employerinput.insertAdjacentHTML("beforeend", `
                            <div id="${info[i].id}ed" class="bg-slate-400 w-11/12 py-2 rounded-full flex items-center justify-between px-3 added">
                                <div class="flex gap-2">
                                    <img id="profil" class="w-14 h-14 lg:w-20 lg:h-20 rounded-full" src="">
                                    <div class="flex flex-col justify-center">
                                        <h1 class="text-slate-900 font-bold md:text-2xl">${info[i].first} ${info[i].last}</h1>
                                        <h1 class="text-slate-900 md:text-2xl">${info[i].role}</h1>
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
                            inputnum++;
                        } else {
                            if (info[i].situation != "Manager" || info[i].situation != "Security") {
                                console.log(info[i].situation)
                            }
                        }
                    }
                }
                if (inputnum == 0) {
                    document.querySelector("#nomsginput").style.display = "flex";
                }
                addsecurityemployer();
            }
        });
    });
    securityed.forEach(card => {
        card.addEventListener("click", (events) => {
            chose = events.currentTarget.id;
            index = info.findIndex(info => info.id + "ed" == chose);
            document.querySelector("#infoputpopup").style.display = "flex";
            if (info[index].url == "") {
                if (info[index].gender == "Male") {
                    document.querySelector("#profileinput").src = "img/man.png"
                } else {
                    document.querySelector("#profileinput").src = "img/woman.png"
                }
            } else {
                document.querySelector("#profileinput").src = info[index].url;
            }
            document.querySelector("#nameinfoinput").textContent = info[index].first + " " + info[index].last;
            document.querySelector("#roleinfoinput").textContent = info[index].role;
            document.querySelector("#startinfoinput").textContent = info[index].start;
            document.querySelector("#endinfoinput").textContent = info[index].end;
            document.querySelector("#emailinfoinput").textContent = info[index].email;
            document.querySelector("#emailinfoinput").href = "mailto:" + info[index].email;
            document.querySelector("#telinfoinput").textContent = info[index].tel;
            if (info[index].exper.length == 0) {
                document.querySelector("#experienceinfoinput").style.display = "none";
            } else {
                document.querySelector("#experienceinfoinput").style.display = "flex";
                document.querySelector("#experiencelistinput").innerHTML = "";
                for (let ex = 0; ex < info[index].exper.length; ex++) {
                    document.querySelector("#experiencelistinput").insertAdjacentHTML("beforeend", `
                        <li class="text-slate-900 md:text-2xl">${info[index].exper[ex]}</li>
                    `)
                }
            }
            document.querySelector("#situationinput").textContent = "This employer in the security room";
            document.querySelector("#doneinput").onclick = function () {
                document.querySelector("#infoputpopup").style.display = "none";
            }
            document.querySelector("#delinput").onclick = function () {
                info[index].situation = false;
                window.localStorage.setItem("employer", JSON.stringify(info));
                document.querySelector("#infoputpopup").style.display = "none";
                location.reload();
            }
        });
    });
    staff.forEach(card => {
        card.addEventListener("click", (events) => {
            document.querySelector("#inputpopup").style.display = "flex";
            if (num == 0) {
                document.querySelector("#nomsginput").style.display = "flex";
            } else {
                for (let i = 0; i < info.length; i++) {
                    if (info[i].id != 0) {
                        if (info[i].situation == false) {
                            employerinput.insertAdjacentHTML("beforeend", `
                            <div id="${info[i].id}ed" class="bg-slate-400 w-11/12 py-2 rounded-full flex items-center justify-between px-3 added">
                                <div class="flex gap-2">
                                    <img id="profil" class="w-14 h-14 lg:w-20 lg:h-20 rounded-full" src="">
                                    <div class="flex flex-col justify-center">
                                        <h1 class="text-slate-900 font-bold md:text-2xl">${info[i].first} ${info[i].last}</h1>
                                        <h1 class="text-slate-900 md:text-2xl">${info[i].role}</h1>
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
                            inputnum++;
                        } else {
                            if (info[i].situation != "staff") {
                                console.log(info[i].situation)
                            }
                        }
                    }
                }
                if (inputnum == 0) {
                    document.querySelector("#nomsginput").style.display = "flex";
                }
                addstaffemployer();
            }
        });
    });
    staffed.forEach(card => {
        card.addEventListener("click", (events) => {
            chose = events.currentTarget.id;
            index = info.findIndex(info => info.id + "ed" == chose);
            document.querySelector("#infoputpopup").style.display = "flex";
            if (info[index].url == "") {
                if (info[index].gender == "Male") {
                    document.querySelector("#profileinput").src = "img/man.png"
                } else {
                    document.querySelector("#profileinput").src = "img/woman.png"
                }
            } else {
                document.querySelector("#profileinput").src = info[index].url;
            }
            document.querySelector("#nameinfoinput").textContent = info[index].first + " " + info[index].last;
            document.querySelector("#roleinfoinput").textContent = info[index].role;
            document.querySelector("#startinfoinput").textContent = info[index].start;
            document.querySelector("#endinfoinput").textContent = info[index].end;
            document.querySelector("#emailinfoinput").textContent = info[index].email;
            document.querySelector("#emailinfoinput").href = "mailto:" + info[index].email;
            document.querySelector("#telinfoinput").textContent = info[index].tel;
            if (info[index].exper.length == 0) {
                document.querySelector("#experienceinfoinput").style.display = "none";
            } else {
                document.querySelector("#experienceinfoinput").style.display = "flex";
                document.querySelector("#experiencelistinput").innerHTML = "";
                for (let ex = 0; ex < info[index].exper.length; ex++) {
                    document.querySelector("#experiencelistinput").insertAdjacentHTML("beforeend", `
                        <li class="text-slate-900 md:text-2xl">${info[index].exper[ex]}</li>
                    `)
                }
            }
            document.querySelector("#situationinput").textContent = "This employer in the staff room";
            document.querySelector("#doneinput").onclick = function () {
                document.querySelector("#infoputpopup").style.display = "none";
            }
            document.querySelector("#delinput").onclick = function () {
                info[index].situation = false;
                window.localStorage.setItem("employer", JSON.stringify(info));
                document.querySelector("#infoputpopup").style.display = "none";
                location.reload();
            }
        });
    });
    server.forEach(card => {
        card.addEventListener("click", (events) => {
            document.querySelector("#inputpopup").style.display = "flex";
            if (num == 0) {
                document.querySelector("#nomsginput").style.display = "flex";
            } else {
                for (let i = 0; i < info.length; i++) {
                    if (info[i].id != 0) {
                        if (info[i].situation == false && (info[i].role == "Manager" || info[i].role == "Technician")) {
                            employerinput.insertAdjacentHTML("beforeend", `
                            <div id="${info[i].id}ed" class="bg-slate-400 w-11/12 py-2 rounded-full flex items-center justify-between px-3 added">
                                <div class="flex gap-2">
                                    <img id="profil" class="w-14 h-14 lg:w-20 lg:h-20 rounded-full" src="">
                                    <div class="flex flex-col justify-center">
                                        <h1 class="text-slate-900 font-bold md:text-2xl">${info[i].first} ${info[i].last}</h1>
                                        <h1 class="text-slate-900 md:text-2xl">${info[i].role}</h1>
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
                            inputnum++;
                        } else {
                            if (info[i].situation != "Technician" || info[i].situation != "Security") {
                                console.log(info[i].situation)
                            }
                        }
                    }
                }
                if (inputnum == 0) {
                    document.querySelector("#nomsginput").style.display = "flex";
                }
                addserveremployer();
            }
        });
    });
    servered.forEach(card => {
        card.addEventListener("click", (events) => {
            chose = events.currentTarget.id;
            index = info.findIndex(info => info.id + "ed" == chose);
            document.querySelector("#infoputpopup").style.display = "flex";
            if (info[index].url == "") {
                if (info[index].gender == "Male") {
                    document.querySelector("#profileinput").src = "img/man.png"
                } else {
                    document.querySelector("#profileinput").src = "img/woman.png"
                }
            } else {
                document.querySelector("#profileinput").src = info[index].url;
            }
            document.querySelector("#nameinfoinput").textContent = info[index].first + " " + info[index].last;
            document.querySelector("#roleinfoinput").textContent = info[index].role;
            document.querySelector("#startinfoinput").textContent = info[index].start;
            document.querySelector("#endinfoinput").textContent = info[index].end;
            document.querySelector("#emailinfoinput").textContent = info[index].email;
            document.querySelector("#emailinfoinput").href = "mailto:" + info[index].email;
            document.querySelector("#telinfoinput").textContent = info[index].tel;
            if (info[index].exper.length == 0) {
                document.querySelector("#experienceinfoinput").style.display = "none";
            } else {
                document.querySelector("#experienceinfoinput").style.display = "flex";
                document.querySelector("#experiencelistinput").innerHTML = "";
                for (let ex = 0; ex < info[index].exper.length; ex++) {
                    document.querySelector("#experiencelistinput").insertAdjacentHTML("beforeend", `
                        <li class="text-slate-900 md:text-2xl">${info[index].exper[ex]}</li>
                    `)
                }
            }
            document.querySelector("#situationinput").textContent = "This employer in the staff room";
            document.querySelector("#doneinput").onclick = function () {
                document.querySelector("#infoputpopup").style.display = "none";
            }
            document.querySelector("#delinput").onclick = function () {
                info[index].situation = false;
                window.localStorage.setItem("employer", JSON.stringify(info));
                document.querySelector("#infoputpopup").style.display = "none";
                location.reload();
            }
        });
    });
}

search.onclick = function () {
    document.querySelector("#searchpopup").style.display = "flex";
    document.querySelector("#closesearch").onclick = function () {
        document.querySelector("#searchpopup").style.display = "none";
        document.querySelector("#searchinput").value = "";
        document.querySelector("#nomsgsearch").style.display = "none";
    }
    document.querySelector("#searchinput").oninput = function () {
        document.querySelector("#employersearch").innerHTML = "";
        found = false;
        for (let hyk = 0; hyk < info.length; hyk++) {
            searchinput = document.querySelector("#searchinput").value.toLowerCase();
            firstsearch = info[hyk].first.toLowerCase();
            lastsearch = info[hyk].last.toLowerCase();
            if (firstsearch.includes(searchinput) || lastsearch.includes(searchinput)) {
                found = true;
                document.querySelector("#nomsgsearch").style.display = "none";
                document.querySelector("#employersearch").insertAdjacentHTML("beforeend", `
                    <div id="${info[hyk].id}" class="bg-slate-400 w-11/12 py-2 rounded-full flex items-center justify-between px-3 showinfo">
                        <div class="flex gap-2">
                            <img id="profil" class="w-14 h-14 lg:w-20 lg:h-20 rounded-full" src="">
                            <div class="flex flex-col justify-center">
                                <h1 class="text-slate-900 font-bold md:text-2xl">${info[hyk].first} ${info[hyk].last}</h1>
                                <h1 class="text-slate-900 md:text-2xl">${info[hyk].role}</h1>
                            </div>
                        </div>
                    </div>`
                );
                if (info[hyk].url == "") {
                    if (info[hyk].gender == "Male") {
                        document.querySelector("#profil").src = "img/man.png";
                    } else {
                        document.querySelector("#profil").src = "img/woman.png";
                    }
                } else {
                    document.querySelector("#profil").src = info[hyk].url;
                }
                document.querySelector("#profil").removeAttribute("id");
            }
            if (found) {
                document.querySelector("#nomsgsearch").style.display = "none";
            } else {
                document.querySelector("#nomsgsearch").style.display = "flex";
            }
        }
        turnon();
    }
}

newbtn.onclick = function () {
    document.querySelector("#redmsg").style.display = "none";
    document.querySelector("#newimg").src = "img/man.png";
    document.querySelector("#imginput").style.display = "flex";
    document.querySelector("#experience").style.display = "none";
    document.querySelector("#reddatemsg").style.display = "none";
    document.querySelector("#urlimg").value = "";
    document.querySelector("#urlimg").value = "";
    document.querySelector("#experinputs").value = "";
    document.querySelector("#imginput").classList.remove("border-red-600");
    document.querySelector("#experinput").classList.remove("border-red-600");
    start.classList.remove("border-red-600");
    end.classList.remove("border-red-600");
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
        urlput = true;
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
            <li class="text-slate-900 md:text-2xl">${document.querySelector("#experinputs").value}</li>`
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
        if (urlput == false) {
            if (gender.value == "Male") {
                newinfo.url = "img/man.png"
            } else {
                newinfo.url = "img/woman.png";
            }
        }
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
for (let cal = 0; cal < info.length; cal++) {
    if (info[cal].id != 0) {
        total++;
    }
}
if (total == 0) {
    document.querySelector("#nomsg").style.display = "flex";
    document.querySelector("#number").style.display = "none";
    turnon();
    plusdisplay();
} else {
    for (let i = 0; i < info.length; i++) {
        if (info[i].id != 0) {
            if (info[i].situation == false) {
                num++;
                employerplay.insertAdjacentHTML("beforeend", `
                    <div id="${info[i].id}" class="bg-slate-400 w-full py-2 rounded-full flex items-center justify-between px-3 showinfo">
                        <div class="flex gap-2">
                            <img id="profil" class="w-14 h-14 lg:w-20 lg:h-20 rounded-full" src="">
                            <div class="flex flex-col justify-center">
                                <h1 class="text-slate-900 font-bold md:text-2xl">${info[i].first} ${info[i].last}</h1>
                                <h1 class="text-slate-900 md:text-2xl">${info[i].role}</h1>
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
                document.querySelector(`.${info[i].situation}`).src = info[i].url;
                document.querySelector(`.${info[i].situation}`).id = info[i].id + "ed";
                document.querySelector(`.${info[i].situation}`).classList.replace(info[i].situation, info[i].situation + "ed");
            }
        }
    }
    receptionnum = document.querySelectorAll(".reception");
    archivenum = document.querySelectorAll(".archive");
    servernum = document.querySelectorAll(".server");
    securitynum = document.querySelectorAll(".security");
    if (receptionnum.length == 7) {
        document.querySelector("#receptionroom").classList.add("opacity-50");
        document.querySelector("#receptionroom").classList.add("bg-red-600");
    }
    if (archivenum.length == 4) {
        document.querySelector("#archiveroom").classList.add("opacity-50");
        document.querySelector("#archiveroom").classList.add("bg-red-600");
    }
    if (servernum.length == 1) {
        document.querySelector("#serverroom").classList.add("opacity-50");
        document.querySelector("#serverroom").classList.add("bg-red-600");
    }
    if (securitynum.length == 4) {
        document.querySelector("#securityroom").classList.add("opacity-50");
        document.querySelector("#securityroom").classList.add("bg-red-600");
    }
    if (num == 0) {
        document.querySelector("#nomsg").style.display = "flex";
    }
    meeting = document.querySelectorAll(".meeting");
    reception = document.querySelectorAll(".reception");
    archive = document.querySelectorAll(".archive");
    security = document.querySelectorAll(".security");
    staff = document.querySelectorAll(".staff");
    server = document.querySelectorAll(".server");
    meetinged = document.querySelectorAll(".meetinged");
    receptioned = document.querySelectorAll(".receptioned");
    archiveed = document.querySelectorAll(".archiveed");
    securityed = document.querySelectorAll(".securityed");
    staffed = document.querySelectorAll(".staffed");
    servered = document.querySelectorAll(".servered");
    document.querySelector("#total").textContent = total;
    document.querySelector("#available").textContent = num;
    turnon();
    plusdisplay();
}
