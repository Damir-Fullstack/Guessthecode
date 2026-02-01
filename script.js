const cd = document.getElementById("div");
const alert = document.getElementById("alert");
const code = "4297";
let con = "0000";
alert.innerHTML = "I'm alert-system(in this program)"
cd.innerHTML = con;
function del() {
  con = "0000";
  cd.innerHTML = "No Code";
}
function error() {
  alert.innerHTML = "In this code is only 4 numbers, not more";
  setTimeout(() => {
      alert.innerHTML = "I'm alert-system(in this program)";
      del();
    }, 2000);
};
function clickO() {
  let sc = con.split("");
  if(sc[0] === "0") {
    sc[0] = "1";
  } else if(sc[3] !== "0") {
    error();
  } else if(sc[2] !== "0"){
    sc[3] = "1";
  } else if(sc[1] !== "0"){
    sc[2] = "1";
  } else if(sc[0] !== "0") {
    sc[1] = 1;
  }
  con = sc[0] + sc[1] + sc[2] + sc[3];
  cd.innerHTML = con;
};
function clickTw() {
  let sc = con.split("");
  if(sc[0] === "0") {
    sc[0] = "2";
  } else if(sc[3] !== "0") {
    error();
  } else if(sc[2] !== "0"){
    sc[3] = "2";
  } else if(sc[1] !== "0"){
    sc[2] = "2";
  } else if(sc[0] !== "0") {
    sc[1] = "2";
  }
  con = sc[0] + sc[1] + sc[2] + sc[3];
  cd.innerHTML = con;
};
function clickTh() {
  let sc = con.split("");
  if(sc[0] === "0") {
    sc[0] = "3";
  } else if(sc[3] !== "0") {
    error();
  } else if(sc[2] !== "0"){
    sc[3] = "3";
  } else if(sc[1] !== "0"){
    sc[2] = "3";
  } else if(sc[0] !== "0") {
    sc[1] = "3";
  }
  con = sc[0] + sc[1] + sc[2] + sc[3];
  cd.innerHTML = con;
};
function clickFo() {
  let sc = con.split("");
  if(sc[0] === "0") {
    sc[0] = "4";
  } else if(sc[3] !== "0") {
    error();
  } else if(sc[2] !== "0"){
    sc[3] = "4";
  } else if(sc[1] !== "0"){
    sc[2] = "4";
  } else if(sc[0] !== "0") {
    sc[1] = "4";
  }
  con = sc[0] + sc[1] + sc[2] + sc[3];
  cd.innerHTML = con;
};
function clickFi() {
  let sc = con.split("");
  if(sc[0] === "0") {
    sc[0] = "5";
  } else if(sc[3] !== "0") {
    error();
  } else if(sc[2] !== "0"){
    sc[3] = "5";
  } else if(sc[1] !== "0"){
    sc[2] = "5";
  } else if(sc[0] !== "0") {
    sc[1] = "5";
  }
  con = sc[0] + sc[1] + sc[2] + sc[3];
  cd.innerHTML = con;
};
function clickSi() {
  let sc = con.split("");
  if(sc[0] === "0") {
    sc[0] = "6";
  } else if(sc[3] !== "0") {
    error();
  } else if(sc[2] !== "0"){
    sc[3] = "6";
  } else if(sc[1] !== "0"){
    sc[2] = "6";
  } else if(sc[0] !== "0") {
    sc[1] = "6";
  }
  con = sc[0] + sc[1] + sc[2] + sc[3];
  cd.innerHTML = con;
};
function clickSe() {
  let sc = con.split("");
  if(sc[0] === "0") {
    sc[0] = "7";
  } else if(sc[3] !== "0") {
    error();
  } else if(sc[2] !== "0"){
    sc[3] = "7";
  } else if(sc[1] !== "0"){
    sc[2] = "7";
  } else if(sc[0] !== "0") {
    sc[1] = "7";
  }
  con = sc[0] + sc[1] + sc[2] + sc[3];
  cd.innerHTML = con;
};
function clickE() {
  let sc = con.split("");
  if(sc[0] === "0") {
    sc[0] = "8";
  } else if(sc[3] !== "0") {
    error();
  } else if(sc[2] !== "0"){
    sc[3] = "8";
  } else if(sc[1] !== "0"){
    sc[2] = "8";
  } else if(sc[0] !== "0") {
    sc[1] = "8";
  }
  con = sc[0] + sc[1] + sc[2] + sc[3];
  cd.innerHTML = con;
};
function clickN() {
  let sc = con.split("");
  if(sc[0] === "0") {
    sc[0] = "9";
  } else if(sc[3] !== "0") {
    error();
  } else if(sc[2] !== "0"){
    sc[3] = "9";
  } else if(sc[1] !== "0"){
    sc[2] = "9";
  } else if(sc[0] !== "0") {
    sc[1] = "9";
  }
  con = sc[0] + sc[1] + sc[2] + sc[3];
  cd.innerHTML = con;
};
function enter() {
  if(con === code) {
    cd.innerHTML = "YOU WON!"
  } else{
    cd.innerHTML = "WRONG CODE";
    setTimeout(() => {
      del();
    }, 1000)
  }
}
