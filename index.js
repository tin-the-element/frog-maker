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
function drawElement(asset) {
    var canvas = document.getElementById('canvas_view');
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.onload = function () {
        ctx.drawImage(img, asset.x, asset.y, asset.height, asset.height * img.height / img.width);
    };
    img.src = asset.svgLink;
}
function clearCanvas() {
    var canvas = document.getElementById('canvas_view');
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
var froggy = { svgLink: "assets/Froggy.svg", x: 60, y: 140, height: 300 };
var party_hat = { svgLink: "assets/hat.svg", x: 150, y: 0, height: 100 };
var santa_hat = { svgLink: "assets/Festive-Red-Hat.svg", x: 160, y: 110, height: 100 };
function draw_party() {
    clearCanvas();
    drawElement(froggy);
    drawElement(party_hat);
}
function draw_santa() {
    clearCanvas();
    drawElement(froggy);
    drawElement(santa_hat);
}
