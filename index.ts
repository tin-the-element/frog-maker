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


interface AssetSvg {
    svgLink: string;
    x: number;
    y: number;
    height: number;

}
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

let froggy = {svgLink: "assets/Froggy.svg", x: 60, y: 140, height: 300};
let party_hat = {svgLink: "assets/hat.svg", x: 150, y: 0, height: 100};
let santa_hat = {svgLink: "assets/Festive-Red-Hat.svg", x: 160, y: 110, height: 100};



function draw_party() {
    clearCanvas()
    drawElement(froggy)
    drawElement(party_hat)
}
function draw_santa() {
    clearCanvas()
    drawElement(froggy)
    drawElement(santa_hat)
}
