// number and string type
var price3 = '45.8';
var price4 = 55.1;

console.log( typeof price3);
console.log( typeof price4);

// boolean type
var isLoved = true;
console.log( typeof isLoved); 

// undefined types
var romantic ;
console.log(romantic);

// js a 1 and 2 er floting point fixed thakena ajnno fixed krte hoy ,fixwd krle string typer hye jay tokhn flot number a convert krte hoy.
var number = 0.1 ;
var number2 = 0.2;
var totalNumner = number + number2;
totalNumner = totalNumner.toFixed(2);
totalNumner =  parseFloat(totalNumner)
console.log(totalNumner);


// vagfol and vagses
var mangos = 15;
var man = 2;
var gotmangos = mangos / man;
var gotmangos = mangos % man;
console.log(gotmangos);