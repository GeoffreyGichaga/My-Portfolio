const btn = document.getElementById("sendbtn");
const btn1 = document.getElementById("menuicon");
const navBar = document.getElementById("navM");

btn.addEventListener("click", showAlert);

function showAlert()
{
    alert("Thanks for reaching me ,I'll be intouch with you in a short while")

    
}





btn1.addEventListener("click", showNav);

function showNav()
{
    if(navBar.style.display === "none")
    {
        navBar.style.display = "block";
    }
    else
    {
        navBar.style.display = "none";
    }
}






