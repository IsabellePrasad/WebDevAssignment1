window.onload = function() {
        
    //Alicia
    var textbox1 = document.createElement("input")
    textbox1.type = "text"
    textbox1.id = "first"
    document.body.appendChild(textbox1)

    var textbox2 = document.createElement("input")
    textbox2.type = "text"
    textbox2.id = "last"
    document.body.appendChild(textbox2)

    var button = document.createElement("input")
    button.type = "button"
    button.id = "go"
    button.value = "Go"
    document.body.appendChild(button)


    //Isabelle
    button.onclick = function() {

        var letters = /^[A-Za-z]+$/
        if(textbox1.value.match(letters), textbox2.value.match(letters)) {
            document.getElementById("first").style.backgroundColor = "white";
            document.getElementById("last").style.backgroundColor = "white";
        }
        else {
            document.getElementById("first").style.backgroundColor = "pink";
            document.getElementById("last").style.backgroundColor = "pink";
            
            alert("Wrong");
    
            textbox1.focus;
            textbox2.focus;
        }

        /*button.onclick = function() {

        for(let i = textbox1.value.charCodeAt(0); i <= textbox2.value.charCodeAt(0); i++) {
            let letter = String.fromCharCode(i)

            if(textbox1.value < textbox2.value) {
                document.getElementById("first").style.backgroundColor = "yellow";
                document.getElementById("last").style.backgroundColor = "yellow";
                
                alert("Wrong Order");
            }
            else {
                document.getElementById("first").style.backgroundColor = "white";
                document.getElementById("last").style.backgroundColor = "white";
            }
        }
    }*/

        //Alicia
        var byeDiv1 = document.getElementById("o-first-div")
        var byeDiv2 = document.getElementById("o-second-div") 
        var byeDiv3 = document.getElementById("o-third-div")
        if(textbox1.value != "", textbox2.value !="") {
                byeDiv1.remove();
                byeDiv2.remove();
                byeDiv3.remove();
            }

        //Isabelle
        var div1 = document.createElement("div")
        div1.id = "top"
        div1.style.backgroundColor = "white"
        document.body.appendChild(div1)

        for(let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
          
            let myLetter = String.fromCharCode(i)
          
            let myImage = document.createElement('img')
            myImage.src = "./letters/" + myLetter + ".png"
            myImage.id = myLetter
            myImage.height = 100
            myImage.width = 100

            div1.appendChild(myImage)
                
        }
    
        var div2 = document.createElement("div")
        div2.id = "middle"
        document.body.appendChild(div2)

        var div3 = document.createElement("div")
        div3.id = "bottom"
        document.body.appendChild(div3)
        
    } 
}






