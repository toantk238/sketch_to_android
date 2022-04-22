const { Sketch, Page, Artboard } = require('sketch-constructor');

const path = process.cwd()

Sketch.fromFile(`${process.cwd()}/files/Rock 2.sketch`).then((sketch) => {
    const artboard = sketch.getPages()[1].getArtboards()[0]
    const layers = artboard.layers
    console.log("ABC");

});

console.log("ToanTK")
