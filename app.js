function prank(){
    var btn=document.getElementsByClassName("btn-contain")[0];
    btn.addEventListener("click",(e)=>{
        const mouseX=e.offsetX;
        const mouseY=e.offsetY;
        const ele=e.target;
        const ele0=document.getElementsByClassName("btn")[0].getBoundingClientRect();
        if(ele.classList.contains("no")){
            var x,y;
            y=Math.floor(Math.random()*btn.clientHeight);
            x=Math.floor(Math.random()*btn.clientWidth);
            condition=((x==ele0.x || y==ele0.y)||(x==(mouseX+ele.clientWidth/2) || y==(mouseY+ele.clientHeight/2)));
            while(condition){
                y=Math.floor(Math.random()*btn.clientHeight);
                x=Math.floor(Math.random()*btn.clientWidth);
            }
            ele.style.position="Absolute";
            ele.style.top=y+"px";
            ele.style.left=x+"px";
        }else{
            document.getElementsByClassName("reply")[0].innerText="Like I said You are stupid😂!"
            btn.style.display="None";
        }
        
    })
}
prank()