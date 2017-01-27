module.export = function (options) {
    if (options === undefined)
        options = {};

    this.x = options.x;
    this.y = options.y;
};