//var ----> const

const Engine = Matter.Engine; //Crear espacio de nombre para Engine  // motor fisico 
const World = Matter.World; //Crear espacio de nombre para World // crear objetos  
const Bodies = Matter.Bodies; //Crear espacio de nombre para Bodies  // caracteristicas 
const Body = Matter.Body; //Crear espacio de nombre para Body

var boton;

var angulo=60; // el nombre de tu quieras 

function setup() {
  createCanvas(400,400);
                               
   engine = Engine.create(); //crear engine quiere decir motor 
   world = engine.world;   //AGREGAR EL MUNDO
 
  

  
   var ball_options = {   //AQUI ESTAN LOS VALORES DE LA PELOTA  (2) 
    restitution: 0.95,   // REBOTAR
    frictionAir:0.01     // GRAVEDAD 
  }
   
   var ground_options ={
     isStatic: true
   };
  
   boton = createImg('up.png'); // pueden ser comillas simples y dobles
  boton.position(350,30); // posicion 
  boton.size(50,50); // tamaño
  boton.mouseClicked(fuerza); // uso de funcion force 

  ground = Bodies.rectangle(100,300,400,20,ground_options); // creacion piso
  ball = Bodies.circle(100,10,20,ball_options);  // pelota tiene RESTITUCIÓN Y FRICTION 
  World.add(world,ball); // agregar al mundo
  World.add(world,ground); // agregar al mundo
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);  //DRAW SPRITES 
  
  Matter.Body.rotate(ground,angulo) // para rotar necesitamos decirle  QUÉ y el angulo
  

  // este orden es importante, si cambiamos el orden todo se mueve!!!! 
  push(); // captura la nueva posición
  translate(ground.position.x,ground.position.y); // guardamos la posición
   rotate(angulo); // gira solo alrededor del origen 
   rect(0,0,100,20); // esta va arriba de pop 
   pop(); // regresa a la vieja posición 


   
   angulo -=0.1; // aumentamos en uno para que INICIE A LA DERECHA 
   // RESTAMOS para que gire a la izq -1

  
  //escribir una función para pelota 
  ellipse(ball.position.x,ball.position.y,20);  // para circulos 1 valor por que es el radio
  //escribir una función rectangle para mostrar el suelo.
  rect(ground.position.x,ground.position.y,400,20); // para rectangulos 2 valores por que es ALTO Y ANCHO. 
  

  
}

function fuerza()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
  // las primeras son pos de x y y 
  // las segunda son la fuerza o movimiento 
}
