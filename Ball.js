class Ball {
          constructor ( x , y , radius){

                   var box_options = { restitution: 0.5 , friction: 1.5 , density: 1 }
                    this.Body = Bodies.circle( x , y ,radius , box_options );
                    this.x = x ;
                    this.y = y ;
                    this.radius = radius

                    World.add(world,this.Body);
          }

          display(){
                    push ()
                    
                    translate(this.Body.position.x , this.Body.position.y);
                    rotate(this.Body.angle)
                    fill("yellow");

                   ellipseMode(RADIUS);
                   ellipse( 0 , 0 ,this.radius,this.radius);
                   pop()
  
          };
          
}