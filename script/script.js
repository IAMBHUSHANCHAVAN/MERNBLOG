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