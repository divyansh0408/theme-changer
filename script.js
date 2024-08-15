function light()
{
    const icon = document.querySelector(".img2");
    document.getElementById("colorcng").style.background="white";
    document.getElementById("colorcng").style.color="black";
    icon.src = "Images/dark.png";    
}

function dark()
{
    
    const icon = document.querySelector(".img1");
    document.getElementById("colorcng").style.background="black";
    document.getElementById("colorcng").style.color="grey";

    icon.src = "Images/light.png";    
    
}









