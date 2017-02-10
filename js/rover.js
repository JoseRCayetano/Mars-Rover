var Walle = {
   positionX: 0,
   positionY: 0,
   direction: "E",
   
   move: function (f_b){
       'use stric';
       switch (this.direction){
           case "N":
               if(f_b === "f"){
                   if (!this.check_stone(this.positionX,this.positionY-1)){
                      this.positionY--; 
                   }
                   
               }else{
                   if (!this.check_stone(this.positionX,this.positionY+1)){
                      this.positionY++;
                   }                  
               }
           break;
           case "E":
               if (f_b === "f"){
                   if (!this.check_stone(this.positionX+1,this.positionY)){
                      this.positionX++; 
                   }                   
               }else{
                   if (!this.check_stone(this.positionX-1,this.positionY)){
                      this.positionX--; 
                   }               }
           break;
           case "S":
               if (f_b === "f"){
                   if (!this.check_stone(this.positionX,this.positionY+1)){
                       this.positionY++;
                   }                        
               }else{
                   if (!this.check_stone(this.positionX,this.positionY-1)){
                       this.positionY--;
                   }                  
               }
           break;
           case "W":
               if (f_b === "f"){
                   if (!this.check_stone(this.positionX-1,this.positionY)){
                       this.positionX--;
                   }                    
               }else{
                   if (!this.check_stone(this.positionX+1,this.positionY)){
                      this.positionX++; 
                   }                    
               }
           break;
       }
   },
   check_planet_limit: function (){
       'use stric';
       if (this.positionX>9){ //Si es superior a 9 es porque ha dado al vuelta
           this.positionX = 0;
       }else if(this.positionX < 0){
           this.positionX = 9;
       }
       if (this.positionY > 9){
           this.positionY = 0;
       }else if (this.positionY < 0){
           this.positionY = 9;
       }
   },
   check_stone: function (x,y){
       'use stric';
       var stone = false;
       var pos;
       //Compruebo que que si se pasa de los limites lo vuelvo a poner a 0 o 9
       if (x === 10){
           x = 0;
       }
       if ( x === -1){
           x = 9;
       }
       if (y === 10){
           y = 0;
       }
       if ( y === -1){
           y = 9;
       }
       pos = y+""+x;
       if (document.getElementById(pos).className === "stone"){
           document.getElementById("crash").play();
           stone = true;  
           this.destroy(pos);
       }
      
       return stone;
   },
   destroy: function(pos){
       'use stric';
       var respuesta;
       do {          
           respuesta = prompt("ATTENTION!!: you has found a stone.\n Do you want destroy it?.\n"+
                                "1.- Yes\n"+
                                "2.- No\n"+ 
                                "Select a number, please...");
            respuesta = parseInt(respuesta);
       }while (respuesta < 1 || respuesta > 2);
       if (respuesta === 1){
           document.getElementById("destroy").play();
           document.getElementById(pos).removeAttribute("class");
       }
   }
  
};
