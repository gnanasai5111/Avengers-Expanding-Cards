var a=document.querySelectorAll(".avengers-image");
console.log(a);
for(var i=0;i<a.length;i++){
  a[i].addEventListener("click",function(){
    removeActiveClasses();

    this.classList.add("active");
  });
}
function removeActiveClasses(){
  // for(var i=0;i<a.length;i++){
  // a[i].classList.remove("active");
  // }
  a.forEach((item)=>{
    item.classList.remove("active");

  });
}
