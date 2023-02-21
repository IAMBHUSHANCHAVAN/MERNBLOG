function myFunction() {
    var x = document.getElementById("howread").value;
    document.getElementById("hh").innerHTML = x;
    // alert(`the name is ${x}`)
    var y = document.getElementById("improve").value;
    document.getElementById("h1").innerHTML = y;
    // alert(`the name is ${y}`)
    var z= document.getElementById("fff").value;
    document.getElementById("h2").innerHTML = z;
    alert(`you read our blog - ${x} \n your most favourate blog is ${y} \n and your feed back is ${z}` )
  }

  function fnc(){
    let passs = document.getElementById("pass").value
    let confpass = document.getElementById("conpass").value

    if (passs!=confpass){
      alert("enter same password")
    }
    else if(passs.length>8){
      alert("too long")
    }
    else{
      alert("matched")
    }
  }