const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

const passBox = document.getElementById("pass-box")
const totChar = document.getElementById("total-char")
const uppInp = document.getElementById("upper-case");
const lowInp = document.getElementById("lower-case");
const numInp = document.getElementById("numbers");
const symbolInp = document.getElementById("symbols");


function getRandomData(dataset){
    return dataset[Math.floor(Math.random()*dataset.length)];
}

function genaratePssword(password = ""){
  if(uppInp.checked){
    password += getRandomData(upperSet);
  }
  if(lowInp.checked){
    password += getRandomData(lowerSet);
  }
  if(numInp.checked){
    password += getRandomData(numberSet);
  }
  if(symbolInp.checked){
    password += getRandomData(symbolSet);
  }
  if(password.length<totChar.value){
    return genaratePssword(password);
  }
  passBox.innerText = properSize(password,totChar.value);
  console.log(password);
}


document.getElementById("btn").addEventListener("click" , ()=>{
    genaratePssword();
});



function properSize(str,num){
if(str.length>num){
    let substr = str.substring(0,num);
    return substr;
}else{
    return str;
}
}
