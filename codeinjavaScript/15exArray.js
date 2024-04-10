const marval_heros=["captain america","spider man","hulk","iron man"]
const dc_heros=["bat man","super man","flash"]

// marval heros and dc heros marge  single array
// first mathed


// marval_heros.push(dc_heros)
// console.log(marval_heros)


// second mathed

const total_heros= marval_heros.concat(dc_heros)
// console.log(total_heros)

// spread oprator
// 3rd mathed

const spread_heros=[...marval_heros,...dc_heros];
// console.log(spread_heros)

// const number=[1,2,3,[3,2,1],3,6,[3,2]]
// const tot_number=number.flat(Infinity)
// console.log(tot_number)


// console.log(Array.inArray("Neeraj"));
// console.log(Array.from("Neeraj"));

let score1=400
let score2=300
let score3=5300

console.log(Array.of(score1,score2,score3))

