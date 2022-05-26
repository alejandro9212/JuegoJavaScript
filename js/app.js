
const cargarFace = ()=>{
    for(cont=0; cont<=11; cont++){

        let face = `<label>
        <input type="radio" name="green" />
        <div class="face"></div>
        </label>`;
        if(cont <=10){

            document.getElementById("lab").innerHTML=face.repeat(300);
        }


    }
                
         
     }

