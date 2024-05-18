
const formElement = document.getElementById("form");
const moon = document.getElementById("moon");
const usernameEl = document.getElementById("username");
const titleEl = document.getElementById("title");
const contentEl = document.getElementById("content");
const postContainer = document.getElementById("postContainer");

// Toggle for the light and dark mode
  moon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
      moon.src = "./images/sun.jpeg";
    }else{
      moon.src ="./images/moon.png";
    }
      
}
// function to save user input into local storage
function saveBlog(){
  const savedBlogs = JSON.parse(localStorage.getItem('Blogs')) || [];
  const blogData = {
    username: usernameEl.value,
    title: titleEl.value,
    content: contentEl.value
 } 
  savedBlogs.push(blogData)
  localStorage.setItem('Blogs', JSON.stringify(savedBlogs))
 

}

// Submit Button
formElement.addEventListener('submit', function(event){
  event.preventDefault();
  saveBlog();
  window.location.href="/blog.html"
})
