function tradutor(){
    let input = document.getElementById("tradutor");
    let p = document.getElementById("res");
    let inputvalue = (input.value);


    if(inputvalue == "Bom dia" || inputvalue == "bom dia"){
        p.innerHTML = "Good Morning"
    }else if(inputvalue == "Boa tarde" || inputvalue == "boa tarde"){
        p.innerHTML = "Good afternoon"
    }
     else if(inputvalue == "Boa noite" || inputvalue == "boa noite"){
        p.innerHTML = "Goodnight"
    }
    else {
        p.innerHTML = ""
    }
    
}