// lower care 
let personName: string = "Sami"
console.log("lowercase:", personName.toLowerCase());

// Upper case
console.log("upercase:", personName.toUpperCase());

// title case
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));
