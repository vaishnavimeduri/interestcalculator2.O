let dum=false;
function AddEntry(){
    let x=document.getElementById("name").value
    let y=document.getElementById("bankinterest").value
    let z=calcinterest(y)
    document.getElementById("table").innerHTML+=(dum==true)?`
    <tr  class="grey">
    <td id="1"></td>
    <td id="2"></td>
    <td id="3"></td>
    </tr>
    `:
    `
    <tr>
    <td id="1"></td>
    <td id="2"></td>
    <td id="3"></td>
    </tr>
    `
    if(dum===false){
        dum=true;
    }
    else{
        dum=false;
    }
    document.getElementById("1").innerText=x
    document.getElementById("2").innerText=y
    document.getElementById("3").innerText=z
    document.getElementById("1").removeAttribute("id");
    document.getElementById("2").removeAttribute("id");
    document.getElementById("3").removeAttribute("id");
}
let dum1=false
function displaydetails(){
     if(dum1===false){
        document.getElementById("entries").style="display: block;"
        dum1=true
    }
    else{
        document.getElementById("entries").style="display: none;"
        dum1=false
    }
}
function calcinterest(z){
    z=Number(z)
    if(z>200000){
        return((z+((z*10)/100))-(((z+((z*10)/100))*0.2)/100))
     }
   else if(z>100000){
    return ((z+((z*5)/100))-(((z+((z*10)/100))*0.05)/100))
     }
   else {
    return (z+(z*3)/100)
     }
    
}