
// ---> This is for the toggle on the light and dark mode <---

const moon = document.getElementById("moon");

  moon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
      moon.src = "./images/sun.jpeg";
    }else{
      moon.src ="./images/moon.png";
    }
      
}