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
var froggy = { name: 'froggy', svgLink: "assets/Froggy.svg", x: 60, y: 140, height: 300 };
var party_hat = { name: 'party_hat', svgLink: "assets/hat.svg", x: 150, y: 0, height: 100 };
var santa_hat = { name: 'santa_hat', svgLink: "assets/Festive-Red-Hat.svg", x: 160, y: 110, height: 100 };
var frog_array = [froggy, party_hat];
var __BASEFROG_INDEX__ = 0;
var __HAT_INDEX__ = 1;
var BASE_FROG = [froggy];
var HAT_ARRAY = [party_hat, santa_hat];
// Functions to draw the elements
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
function draw(asset, index) {
    frog_array[index] = asset;
    clearCanvas();
    for (var _i = 0, frog_array_1 = frog_array; _i < frog_array_1.length; _i++) {
        var i = frog_array_1[_i];
        drawElement(i);
    }
}
// Functions to show the choice of things
function populate(page_number) {
    var populate_array;
    switch (page_number) {
        case 1:
            populate_array = HAT_ARRAY;
    }
    var items_chooser = document.getElementById("item_chooser");
    items_chooser.innerHTML = "";
    for (var _i = 0, populate_array_1 = populate_array; _i < populate_array_1.length; _i++) {
        var i = populate_array_1[_i];
        items_chooser.innerHTML += '<div onclick="draw(' + i.name + ', __HAT_INDEX__)"><img class="selector_img" src="' + i.svgLink + '" /></div>';
    }
}
populate(1);
