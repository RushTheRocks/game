class Yes{
    constructor(x,y,width,height){
        this.xPosition=x;
        this.yPosition=y;
        this.width=width
        this.height=height
       this.image1=loadAnimation("images/freeplayanimation1.png","images/freeplayanimation2.png","images/freeplayanimation3.png")
        this.image2=loadAnimation("images/story mode animation 1.png","images/story mode animation 2.png","images/story mode animation 3.png")
    }
    display(){
        image(this.image1,640,210,20,20)
        
        image(this.image2,640,400,20,20);

    }
    
    start(){
        background(backIMG)
        storyMode=new Yes(640,210,20,20);
        FreePlay=new Yes(640,400,20,20);

    }
}