
module.exports = function (options) {

    var _sampleOptions = {
        width: 2,
        height: 2,
        pattern: "horizontalSerpentine", // verticalSerpentine, mapped
        map: [
            [3,4],
            [2,1]
        ]
    };

    var _sampleBox = {
        orientation: landscape, // portrait
        rotation: normal, // inverse - normal -> Stecker oben, inverse -> Stecker unten
        position: {
            x: 0,
            y: 0
        }
    };

    var _samplePixel = {
        position: {
            x: 0,
            y: 0
        },
        color: {
            red: 255,
            green: 0,
            blue: 0
        },

    };

    var boxes = [];
    var pixels = [];

    var validatePixel = function (pixel) {
        if (pixel &&
            pixel.position &&
            pixel.position.x &&
            pixel.position.y &&
            pixel.color &&
            pixel.color.red &&
            pixel.color.green &&
            pixel.color.blue) {
            return true;
        }

        return false;
    };


    function send() {

    };

    function setPixel(pixel) {
        if (!validatePixel(pixel)) { return {error: ["pixel is not valid"]}; }


    };

    function setList() {

    };

    function setArray() {
    };

    return {
        send: send,
        setPixel: setPixel,
        setList: setList,
        setArray: setArray
    };
};
