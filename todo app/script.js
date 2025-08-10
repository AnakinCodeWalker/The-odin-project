function changebg(color,vlaue){
    document.body.querySelector("button").innerHTML=vlaue;
    document.body.style.color='white';
    document.body.style.backgroundColor=color;
}
// const darkbutton=document.getElementById("dark");
// darkbutton.addEventListener('click',function(){
//     console.log("clicked");
//     changebg('black');
// });

const toggle=document.getElementById('toggle');
// console.log(toggle);
toggle.addEventListener('click',()=>{
if(!document.body.style.backgroundColor||document.body.style.backgroundColor=='white'){
    changebg('black',"clicked");
}else{
    changebg('white',"click me");
}
},false);