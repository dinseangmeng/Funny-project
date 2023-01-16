var btn=document.getElementsByClassName("btn-contain")[0];
var contianer=document.getElementsByClassName("container")[0];
function prank(){
    var i=0;
    btn.addEventListener("click",(e)=>{
        i++;
        action(i,e);
        
    })
    document.querySelector(".no").addEventListener("mouseover",(e)=>{
        i++;
        action(i,e);
        
    })
}
function action(i,e){
    const ele=e.target;//get what element is event fired on?
    const ele0=document.getElementsByClassName("btn")[0];
    if(ele.classList.contains("no")){//if button is has class name 'no'
        var x,y;
        y=(Math.random()*contianer.clientHeight);//generate location y coordinate
        x=(Math.random()*contianer.clientWidth);//generate location x coordinate
        while(((x==ele0.x || y==ele0.y))){//Make sure new location(x,y) not the same old one
            y=(Math.random()*contianer.clientHeight);
            x=(Math.random()*contianer.clientWidth);
        }

        ele.style.position="Absolute";
        ele.style.top=y+"px";
        ele.style.right=x+"px";
    }else{
        if(i==1){
            document.getElementsByClassName("reply")[0].innerText="Aww I Love you too 🥰";
        }else document.getElementsByClassName("reply")[0].innerText="I love you too ❤️" ;
        document.querySelector(".btn-contain").style.display="None";
        document.querySelector("#question").style.display="None";
        
    }
}
prank()