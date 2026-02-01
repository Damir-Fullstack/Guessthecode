const cd = document.getElementById("div");
const alert = document.getElementById("alert");
const code = "4297";
let con = "0000";
alert.innerHTML = "I'm alert-system(in this program)"
cd.innerHTML = con;
function del() {
  con = "0000";
  cd.innerHTML = "No Code;
}
function clickO() {
  let sc = con.split("");
  if(sc[0] === "0") {
    sc[0] = "1";
  } else if(sc[0] !== "0") {
    sc[1] = "1";
  } else if(sc[0] + sc[1] !== "00"){
    sc[2] = "1";
  } else if(sc[0] + sc[1] + sc[2] !== "000"){
    sc[3] = "1";
  } else if(con !== "0000") {
    alert.innerHTML = "In this code is only 4 numbers, not more";
    setTimeout({
      alert.innerHTML = "I'm alert-system(in this program)";
      del();
    }, 2000);
  }
  con = sc[0] + sc[1] + sc[2] + sc[3];
};
function clickTw() {
  let sc = con.split("");
  if(sc[0] === "0") {
    sc[0] = "2";
  } else if(sc[0] !== "0") {
    sc[1] = "2";
  } else if(sc[0] + sc[1] !== "00"){
    sc[2] = "2";
  } else if(sc[0] + sc[1] + sc[2] !== "000"){
    sc[3] = "2";
  } else if(con !== "0000") {
    alert.innerHTML = "In this code is only 4 numbers, not more";
    setTimeout({
      alert.innerHTML = "I'm alert-system(in this program)";
      del();
    }, 2000);
  }
  con = sc[0] + sc[1] + sc[2] + sc[3];
};
function clickTh() {
  let sc = con.split("");
  if(sc[0] === "0") {
    sc[0] = "3";
  } else if(sc[0] !== "0") {
    sc[1] = "3";
  } else if(sc[0] + sc[1] !== "00"){
    sc[2] = "2";
  } else if(sc[0] + sc[1] + sc[2] !== "000"){
    sc[3] = "3";
  } else if(con !== "0000") {
    alert.innerHTML = "In this code is only 4 numbers, not more";
    setTimeout({
      alert.innerHTML = "I'm alert-system(in this program)";
      del();
    }, 2000);
  }
  con = sc[0] + sc[1] + sc[2] + sc[3];
};
function clickFo() {
  let sc = con.split("");
  if(sc[0] === "0") {
    sc[0] = "4";
  } else if(sc[0] !== "0") {
    sc[1] = "4";
  } else if(sc[0] + sc[1] !== "00"){
    sc[2] = "4";
  } else if(sc[0] + sc[1] + sc[2] !== "000"){
    sc[3] = "4";
  } else if(con !== "0000") {
    alert.innerHTML = "In this code is only 4 numbers, not more";
    setTimeout({
      alert.innerHTML = "I'm alert-system(in this program)";
      del();
    }, 2000);
  }
  con = sc[0] + sc[1] + sc[2] + sc[3];
};
function clickFi() {
  let sc = con.split("");
  if(sc[0] === "0") {
    sc[0] = "5";
  } else if(sc[0] !== "0") {
    sc[1] = "2";
  } else if(sc[0] + sc[1] !== "00"){
    sc[2] = "5";
  } else if(sc[0] + sc[1] + sc[2] !== "000"){
    sc[3] = "5";
  } else if(con !== "0000") {
    alert.innerHTML = "In this code is only 4 numbers, not more";
    setTimeout({
      alert.innerHTML = "I'm alert-system(in this program)";
      del();
    }, 2000);
  }
  con = sc[0] + sc[1] + sc[2] + sc[3];
};
function clickSi() {
  let sc = con.split("");
  if(sc[0] === "0") {
    sc[0] = "6";
  } else if(sc[0] !== "0") {
    sc[1] = "6";
  } else if(sc[0] + sc[1] !== "00"){
    sc[2] = "6";
  } else if(sc[0] + sc[1] + sc[2] !== "000"){
    sc[3] = "6";
  } else if(con !== "0000") {
    alert.innerHTML = "In this code is only 4 numbers, not more";
    setTimeout({
      alert.innerHTML = "I'm alert-system(in this program)";
      del();
    }, 2000);
  }
  con = sc[0] + sc[1] + sc[2] + sc[3];
};
function clickSe() {
  let sc = con.split("");
  if(sc[0] === "0") {
    sc[0] = "7";
  } else if(sc[0] !== "0") {
    sc[1] = "7";
  } else if(sc[0] + sc[1] !== "00"){
    sc[2] = "7";
  } else if(sc[0] + sc[1] + sc[2] !== "000"){
    sc[3] = "7";
  } else if(con !== "0000") {
    alert.innerHTML = "In this code is only 4 numbers, not more";
    setTimeout({
      alert.innerHTML = "I'm alert-system(in this program)";
      del();
    }, 2000);
  }
  con = sc[0] + sc[1] + sc[2] + sc[3];
};
function clickE() {
  let sc = con.split("");
  if(sc[0] === "0") {
    sc[0] = "8";
  } else if(sc[0] !== "0") {
    sc[1] = "8";
  } else if(sc[0] + sc[1] !== "00"){
    sc[2] = "8";
  } else if(sc[0] + sc[1] + sc[2] !== "000"){
    sc[3] = "8";
  } else if(con !== "0000") {
    alert.innerHTML = "In this code is only 4 numbers, not more";
    setTimeout({
      alert.innerHTML = "I'm alert-system(in this program)";
      del();
    }, 2000);
  }
  con = sc[0] + sc[1] + sc[2] + sc[3];
};
function clickN() {
  let sc = con.split("");
  if(sc[0] === "0") {
    sc[0] = "9";
  } else if(sc[0] !== "0") {
    sc[1] = "9";
  } else if(sc[0] + sc[1] !== "00"){
    sc[2] = "9";
  } else if(sc[0] + sc[1] + sc[2] !== "000"){
    sc[3] = "9";
  } else if(con !== "0000") {
    alert.innerHTML = "In this code is only 4 numbers, not more";
    setTimeout({
      alert.innerHTML = "I'm alert-system(in this program)";
      del();
    }, 2000);
  }
  con = sc[0] + sc[1] + sc[2] + sc[3];
};
function enter() {
  if(con === code) {
    cd.innerHTML = "YOU WON!"
  } else{
    cd.innerHTML = "WRONG CODE";
    setTimeout({
      del();
    }, 1000)
  }
}
