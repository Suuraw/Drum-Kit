let length=document.querySelectorAll(".drum").length
for(let i=0;i<length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
    
    makesound(this.innerHTML)
    animation(this.innerHTML)
    });
}
document.addEventListener("keydown",function(event)
{
makesound(event.key)
animation(event.key)
});
function makesound(key)
{
    
    switch(key)
    {
    case "w": 
    let w=new Audio('sounds/tom-1.mp3');
    w.play();
    break
    case "a":
        let a=new Audio('sounds/tom-2.mp3');
    a.play()
    break
    case "s":
        let s=new Audio('sounds/tom-3.mp3');
    s.play();
    case "d":
        let d=new Audio('sounds/tom-4.mp3');
    d.play()
    case "j":
        let j=new Audio('sounds/snare.mp3');
    j.play()
    case "k":
    let k=new Audio('sounds/crash.mp3');
    k.play()
    case "l":
    let l=new Audio('sounds/kick-bass.mp3');
    l.play()
    default: console.log("no sound")
    }
}
function animation(key)
{
    let k=document.querySelector("."+key)
    k.classList.add("pressed")
    setTimeout(()=>
    {
        k.classList.remove("pressed")
    },1000)
}
