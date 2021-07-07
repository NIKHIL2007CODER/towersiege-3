class Box extends BaseClass {
  constructor(x,y,width,height) {
   
    super(x,y,width,height);
   
   
    this.visibility = 255;
   // World.add(world, this.body);
  }
  display(){
    if((this.body.speed)<10){
    super.display();
   }
   else{
World.remove(world,this.body)  

push();
this.Visiblity=this.Visiblity-5;
tint(255,this.Visiblity)

//do nothing
rect(this.body.position.x,this.body.position.y,this.width,this,height);
pop();
}
    var pos =this.body.position;
    rectMode(CENTER);
    
    
  }
};