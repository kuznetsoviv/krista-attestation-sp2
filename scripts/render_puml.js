const SOURCE_DIR = "diagram_src";
const SOURCE_EXT = ".puml";
const DEST_DIR = "img\\algorithms";
const DEST_FORMAT = "svg";
const FILE_NAMES = [
    "cons_algorithm",
    "nsi_algorithm",
    "budget_algorithm"
];

let plantuml = require('node-plantuml');
let fs = require('fs');
let path = require('path');

FILE_NAMES.forEach(fileName => {
    let gen = plantuml.generate(SOURCE_DIR + path.sep + fileName + SOURCE_EXT,
        {format: DEST_FORMAT, charset: "UTF-8"});
    gen.out.pipe(fs.createWriteStream(DEST_DIR + path.sep + fileName + "." + DEST_FORMAT));
})