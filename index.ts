// class Student {
//     fullName: string;
//     constructor(
//         public firstName: string,
//         public middleInitial: string,
//         public lastName: string
//     ){
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }


// ------------------------------------------------------------
// Ideas: 
//      Hold global variables to keep track of what element is being held onto
//      Scrape the assets folder to find all the assets?

// Todos: Find a way to not have to hardcode all this functionality in
// 

// Global variables and constants (storing data)
let froggy = {name: 'froggy', svgLink: "assets/Froggy.svg", x: 60, y: 140, height: 300};
let party_hat = {name: 'party_hat', svgLink: "assets/hat.svg", x: 150, y: 0, height: 100};
let santa_hat = {name: 'santa_hat', svgLink: "assets/Festive-Red-Hat.svg", x: 160, y: 110, height: 100};

let frog_array = [froggy, party_hat]

const __BASEFROG_INDEX__ = 0;
const __HAT_INDEX__ = 1;

const BASE_FROG = [froggy]
const HAT_ARRAY = [party_hat, santa_hat];


// Interfaces and classes
interface AssetSvg {
    name: string;
    svgLink: string;
    x: number;
    y: number;
    height: number;
}

// Functions to draw the elements
function drawElement(asset: AssetSvg) {
    var canvas = <HTMLCanvasElement> document.getElementById('canvas_view');
    var ctx = canvas.getContext("2d");

    var img = new Image();
    img.onload = function() {
        ctx.drawImage(img, asset.x, asset.y, asset.height, asset.height * img.height / img.width);
    }

    img.src = asset.svgLink
    
}

function clearCanvas() {
    var canvas = <HTMLCanvasElement> document.getElementById('canvas_view');
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function draw(asset: AssetSvg, index: number) {
    frog_array[index] = asset;
    clearCanvas()
    for (var i of frog_array) {
        drawElement(i)
    }
}

// Functions to show the choice of things
function populate(page_number: number) {
    let populate_array : Array<AssetSvg>;
    switch (page_number) {
        case 1:
            populate_array = HAT_ARRAY
    }

    let items_chooser = document.getElementById("item_chooser");
    items_chooser.innerHTML = ""
    for (var i of populate_array) {
        items_chooser.innerHTML += '<div onclick="draw(' + i.name + ', __HAT_INDEX__)"><img class="selector_img" src="' + i.svgLink + '" /></div>'    
    }
}

populate(1);
