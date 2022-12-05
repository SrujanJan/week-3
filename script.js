const color=["white","black","blue","fuchsia","gray","green","lime","maroon","navy","olive","purple","red","silver","teal","aqua","yellow"];
document.lastElementChild.lastElementChild.style.backgroundColor=color[0];


document.querySelector("#btnn").addEventListener("click",function(){
    const randomColor=Math.floor(Math.random()*color.length);
document.lastElementChild.lastElementChild.style.backgroundColor=color[randomColor];
})
//aqua, black, blue, fuchsia, gray (or grey), green, lime, maroon, navy, olive, purple, red, silver, teal, white, and yellow