function prank(){
    var i=0;
    var btn=document.getElementsByClassName("btn-contain")[0];
    var contianer=document.getElementsByClassName("container")[0];
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
    var contianer=document.getElementsByClassName("container")[0];
    const ele=e.target;
    const ele0=document.getElementsByClassName("btn")[0].getBoundingClientRect();
    if(ele.classList.contains("no")){
        var x,y;
        y=(Math.random()*contianer.clientHeight);
        x=(Math.random()*contianer.clientWidth);
        condition=((x==ele0.x || y==ele0.y));
        while(condition){
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