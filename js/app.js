let cont ;
const cargarFace = ()=>{
    let face='';
    for(cont=0;cont<=10;cont++){
        let face = `<label>
        <input type="radio" name="green" />
        <div class="face"></div>
      </label>`;
        if(cont==true){
            document.getElementById("lab").innerHTML=face.repeat(290);
           
        }
        
    
    }
   
    
}
