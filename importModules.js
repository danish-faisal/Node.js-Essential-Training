// const counter = require("./exportModules");
const { countReset } = require("console");
const { inc, dec, getCount } = require("./exportModules");

// counter.inc();
// counter.inc();
// counter.inc();
// counter.dec();

inc();
inc();
inc();
dec();

// console.log(counter.getCount());
console.log(getCount());