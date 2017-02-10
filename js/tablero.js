function generar_tablero (id_capa){
    'use stric';
    for (var i = 0; i < 10; i++){
        var fila = document.createElement("tr");
        var id=""+i;
        fila.setAttribute("id",id);
        for (var j = 0; j < 10; j++){
            var cuadro = document.createElement("td");
            cuadro.setAttribute("id",id+j);
            //cuadro.setAttribute("class","walle");
            fila.appendChild(cuadro);
            
        }
        document.getElementById(id_capa).appendChild(fila);
    }
    inicializar(9,0);
}
function inicializar(max,min) {
    'use stric';
    var x;
    var y;
    var pos;
    var coor =[]; //Guardar coordenadas usadas y que no se repitan
    for (var i = 0; i < 11 ; i++){
        if (i === 0){ //Posicion para walle
             x = Math.floor(Math.random() * (max - min)) + min;
             y = Math.floor(Math.random() * (max - min)) + min;
             Walle.positionX = x;
             Walle.positionY = y;
             pos =y+""+x;
             coor.push(pos); 
             document.getElementById(pos).setAttribute("class","walle_E");
         }else{ //Posicionamiento de las piedras
            pos="";
            x = Math.floor(Math.random() * (max - min)) + min;
            y = Math.floor(Math.random() * (max - min)) + min;
            pos =y+""+x;
            if (coor.indexOf(pos) === -1){ //Si no ha sido usada la posicion
               coor.push(pos); 
               document.getElementById(pos).setAttribute("class","stone"); 
            }else{//Si ha sido usada que decremente i para que siempre ponga 10 piedras                
                i--;
            }
            
         }
    }
}
//Repinta la dirección a la que mira walle cuando se cambia el rumbo
function repaint_walle (rumbo) {
   'use stric';
   var repaint = document.getElementById("walle");
   repaint.removeAttribute("class");
   if (rumbo === "N"){
       repaint.setAttribute("class","walle_n");
   }
   if (rumbo === "S"){
       repaint.setAttribute("class","walle_s");
   }
   if (rumbo === "E"){
       repaint.setAttribute("class","walle_e");
   }
   if (rumbo === "W"){
       repaint.setAttribute("class","walle_w");
   }
  
}
//Elimino a walle de donde estaba
function remove_walle (){
    'use stric';
    var eliminar_walle = document.querySelector(".walle_N");
    if (eliminar_walle !== null){
        eliminar_walle.removeAttribute("class");
    }
    var eliminar_walle = document.querySelector(".walle_S");
    if (eliminar_walle !== null){
        eliminar_walle.removeAttribute("class");
    }
    var eliminar_walle = document.querySelector(".walle_E");
    if (eliminar_walle !== null){
        eliminar_walle.removeAttribute("class");
    }
    var eliminar_walle = document.querySelector(".walle_W");
    if (eliminar_walle !== null){
        eliminar_walle.removeAttribute("class");
    }
}
function play (name){
    'use stric';
    var audio = new Audio(name);
    audio.play();
}


