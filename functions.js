Load Burger Model
Load Pizza Model
Load Drink Model
Update Item Info
Handle AR Launch
Safe Model Switching
function updateMenu(modelFile, name, description, price) {
    const viewer = document.getElementById('main-viewer');
    
    // 1. Update Text Immediately
    document.getElementById('item-name').innerText = name;
    document.getElementById('item-description').innerText = description;
    document.getElementById('item-price').innerText = price;

    // 2. Force the 3D model to swap
    // We set it to empty first to "clear" the burger, then set the new one
    viewer.src = ""; 
    setTimeout(() => {
        viewer.src = modelFile;
    }, 50); 

    console.log("Switching model to: " + modelFile);
}