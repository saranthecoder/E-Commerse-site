var MenuItems =document.getElementById("MenuItems");
MenuItems.style.maxHeight="0px";
function menutoggle(){
    if(MenuItems.style.maxHeight==="200px"){
        console.log("close")
        MenuItems.style.maxHeight="0px";
    }
    else{
        console.log("open")
        MenuItems.style.maxHeight="200px";
    }
}