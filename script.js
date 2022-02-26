function toggleFunction(){
    var x = document.getElementById("form-title");
    if (x.innerHTML === "Got more ideas or recommendations?") {
      x.innerHTML = "Swapped text!";
    } else {
      x.innerHTML = "Got more ideas or recommendations?";
    }
}