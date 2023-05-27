class Jetesat {
    constructor(x, y, index,opp,energy,arr){
        this.x = x;
        this.y = y;
        this.arr = arr;
        this.multiply = 0;
        this.index = index;
        this.energy = energy;
        this.opp = opp;
        




        this.directions = [
           [this.x - 1, this.y - 1],
           [this.x, this.y - 1],
           [this.x + 1, this.y - 1],
           [this.x - 1, this.y],
           [this.x + 1, this.y],
           [this.x - 1, this.y + 1],
           [this.x, this.y + 1],
           [this.x + 1, this.y + 1]
       ];
 
    }
    
    getNewCoordinates(){
        this.directions1 = [
        [this.x - 1, this.y - 1],
        [this.x , this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y ],
        [this.x + 1, this.y ],
        [this.x - 1, this.y + 1],
        [this.x , this.y + 1],
        [this.x + 1, this.y + 1]
        ];
       
    }
    chooseCell(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }  
        }
        return found;
    }
    
    eat(){
        this.getNewCoordinates();
        var newCell2 = random(this.chooseCell(this.opp));
        if(newCell2){
            matrix[this.y][this.x] = 0;
            matrix[newCell2[1]][newCell2[0]] = this.index;
            this.x = newCell2[0];
            this.y = newCell2[1];
            this.energy +=1;
            
        }
        else{
            this.energy -=1;
        }
        if(this.energy==0){
            this.die();
        }
        if(this.energy==8){
            this.mul();
        }
    }
    die(){
        for(var i in this.arr){
            if(this.x == this.arr[i].x && this.y == this.arr[i].y){
                matrix[this.y][this.x] = 0;
                this.arr.splice(i,1);
                break;
            }
        }
    }
    move(){
        this.getNewCoordinates();
        var newCell1 = random(this.chooseCell(0));
 
        if(newCell1){
            matrix[this.y][this.x] = 0
            matrix[newCell1[0]][newCell1[1]] = this.index;
            this.x = newCell1[0];
            this.y = newCell1[1];
        }
    }
    
}
class Grass extends Jetesat{
    
  constructor(x, y, index,opp,energy,arr){
    super(x, y, index,opp,energy,arr);
    
  }      
    
    mul() 
    {

        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if(newCell && this.multiply >= 5){
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;
 
            var newGrass = new Grass(newX, newY, 1);
            arrg.push(newGrass);
            this.multiply = 0;
        
        }
        
        
        }


}
class GrassEater extends Jetesat
 {
    constructor(x, y, index,opp,energy,arr){
        super(x, y, index,opp,energy,arr);
        
      }      
    
            
        mul(){
            var emptycells = this.chooseCell(0);
            var newCell = random(emptycells);

            if(newCell&&this.energy>=5){
                var newX = newCell[0];
                var newY = newCell[1];

            matrix[newY][newX]= 2;

            var newgrassEater = new GrassEater(newX,newY,2,1,0,arrgrasseater);
            arrgrasseater.push(newgrassEater);
            
            }
       
         
        }
        
    

        
    }
class hunter extends Jetesat {
    constructor(x, y, index,opp,energy,arr){
        super(x, y, index,opp,energy,arr);
        
      }      
      
   mul(){

        var emptycells = this.chooseCell(0);
            var newCellpr = random(emptycells);

            if(newCellpr&&this.energy>=5){
                var newX = newCellpr[0];
                var newY = newCellpr[1];

            matrix[newY][newX]= 3;

            var newHunter = new hunter(newX,newY,3,2,5,arrhunter);
            arrhunter.push(newHunter);
            this.energy = 5;
            }

           
    
   }

     
        }
class Killer extends Jetesat{
    constructor(x, y, index,opp,energy,arr){
        super(x, y, index,opp,energy,arr);
        
      }      
        
        mul(){

            var emptycells1 = this.chooseCell(0);
                var newCellk = random(emptycells1);
    
                if(newCellk&&this.energy>=10){
                    var newX = newCellk[0];
                    var newY = newCellk[1];
    
                matrix[newY][newX]= 4;
    
                var newKiller = new Killer(newX,newY,4,3,5,arrkiller);
                arrkiller.push(newKiller);
                //this.energy = 5;
    }
}
    } 
class Alien extends Jetesat{
       
    constructor(x, y, index,opp,energy,arr){
        super(x, y, index,opp,energy,arr);
        
      }      

   mul(){

        var emptycells = this.chooseCell(0);
            var newCella = random(emptycells);

            if(newCella&&this.energy>=5){
                var newX = newCella[0];
                var newY = newCella[1];

            matrix[newY][newX]= 5;

            var newAlien = new Alien(newX,newY,5,4,0,arralien);
            arralien.push(newAlien);
            
            }

           
    
   }

     


    }
class Bomb extends Jetesat{
         
    constructor(x, y, index,opp,energy,arr){
        super(x, y, index,opp,energy,arr);
        
      }      

   mul(){

        var emptycells = this.chooseCell(0);
            var newCella = random(emptycells);

            if(newCella&&this.energy>=5){
                var newX = newCella[0];
                var newY = newCella[1];

            matrix[newY][newX]= 6;

            var newAlien = new Alien(newX,newY,6,5,0,arrb);
            arrb.push(newAlien);
            this.energy = 0;
            
            }

           
    
   }

    
}
    