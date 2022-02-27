//Experience

//buttons to display data
const btn1 = document.getElementById("zanbtn");
const btn2 = document.getElementById("bglowbtn");
const btn3 = document.getElementById("gtibtn");

//Info to hide 
const info1 = document.getElementById("za");
const info2 = document.getElementById("bglow");
const info3 = document.getElementById("gti");
//End of Experience

// Education 
const btn4 = document.getElementById("ms");
const btn5 = document.getElementById("cna");
const btn6 = document.getElementById("gk");


const info4 = document.getElementById("ms1");
const info5 = document.getElementById("cna1");
const info6 = document.getElementById("gk1");



//End of Education


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







// Education 
// const btn4 = document.getElementById("ms");
// const btn5 = document.getElementById("cna");
// const btn6 = document.getElementById("gk");


// const info4 = document.getElementById("ms1");
// const info5 = document.getElementById("cna1");
// const info6 = document.getElementById("gk1");

btn4.addEventListener("click", showMs);

function showMs()
{
    if(info4.style.display === "none")
    {
        info4.style.display = "block";
        info5.style.display = "none";
        info6.style.display = "none";


    }
    else
    {
        info4.style.display = "none";
    }
}



btn5.addEventListener("click", showCna);

function showCna()
{
    if(info5.style.display === "none")
    {
        info4.style.display = "none";
        info5.style.display = "block";
        info6.style.display = "none";
    }
    else
    {
        info5.style.display = "none";
    }
}







btn6.addEventListener("click", showGk);

function showGk()
{
    if(info6.style.display === "none")
    {
        info4.style.display = "none";
        info5.style.display = "none";
        info6.style.display = "block";
    }
    else
    {
        info6.style.display = "none";
    }
}



