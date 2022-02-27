//buttons to display data
const btn1 = document.getElementById("zanbtn");
const btn2 = document.getElementById("bglowbtn");
const btn3 = document.getElementById("gtibtn");

//Info to hide 
const info1 = document.getElementById("za");
const info2 = document.getElementById("bglow");
const info3 = document.getElementById("gti");



btn1.addEventListener("click", showZan)

function showZan()
{
    if(info1.style.display ==='none')
    {
        info1.style.display = 'block';
        info2.style.display = "none";
        info3.style.display = "none";
    }
    else
    {
        info1.style.display = 'none';
    }
}

btn2.addEventListener("click", showBglow)

function showBglow()
{
    if(info2.style.display === 'none')
    {
        info1.style.display = 'none';

        info2.style.display = 'block';
        info3.style.display = "none";

    }
    else
    {
        info2.style.display = "none";
    }
}



btn3.addEventListener("click", showGti)

function showGti()
{
    if(info3.style.display === 'none')
    {
        info1.style.display = 'none';
        info2.style.display = 'none';

        info3.style.display = "block"
    }
    else
    {
        info3.style.display = "none";
    }
}

