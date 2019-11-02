module.exports = function(e) {
    e.addPassthroughCopy("assets");
    
    return {
        templateFormats: ["css", "njk", "html"]
    };
};