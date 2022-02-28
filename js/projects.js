const btn = document.getElementById("menuicon");
const navBar = document.getElementById("navM");

btn.addEventListener("click", showNav);

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






