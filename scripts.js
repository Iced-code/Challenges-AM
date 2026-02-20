function toggleDisplay(elementID){
    const element = document.getElementById(elementID);
    if(element.style.display === "none"){
        element.style.display = "inline";
    }
    else {
        element.style.display = "none";
    }
}