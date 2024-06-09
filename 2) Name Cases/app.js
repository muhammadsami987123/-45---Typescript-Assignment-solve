// lower care 
var personName = "Sami";
console.log("lowercase:", personName.toLowerCase());
// Upper case
console.log("upercase:", personName.toUpperCase());
// title case
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
