// . union() - Combine two Sets (all items from both)
// Think: "Everything from Set A OR Set B"
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);

const result = setA.union(setB);
console.log(result); 


// intersection() - Common items only
// Think: "What's in BOTH Set A AND Set B?"
const setc = new Set([1, 2, 3]);
const setd = new Set([3, 4, 5]);

const res = setc.intersection(setd);
console.log(res); 

// difference() - Items in A but NOT in B
// Think: "What's in A that's NOT in B?"

const sete= new Set([1, 2, 3]);
const seth = new Set([3, 4, 5]);

const r = sete.difference(seth);
console.log(r); 

// symmetricDifference() - Items in either, but NOT in both
// Think: "Everything that's UNIQUE to each set"

const setnum1=new Set([2,3,4]);
const setnum2=new Set([3,4,5]);

const give=setnum1.symmetricDifference(setnum2);
console.log(give);

// isSubsetOf() - Is A completely inside B?
// Think: "Are ALL of A's items also in B?

const seta= new Set([1, 2]);
const setb = new Set([1, 2, 3, 4]);

console.log(seta.isSubsetOf(setb)); 

// isSupersetOf() - Does A contain all of B?
// Think: "Does A have ALL of B's items (and maybe more)?"

const setAB = new Set([1, 2, 3, 4]);
const setBA = new Set([1, 2]);

console.log(setAB.isSupersetOf(setBA));

// isDisjointFrom() - Do they have NOTHING in common?
// Think: "Do these sets share ZERO items?"
const setX = new Set([1, 2, 3]);
const setY= new Set([4, 5, 6]);

console.log(setX.isDisjointFrom(setY));