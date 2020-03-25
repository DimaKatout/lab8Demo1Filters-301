let numbers =[1,2,3,4,5];
//map:takes array ,return array of SAME size
//that contains new data based on the original data
//it doesn't change the source
let poweredNumber=numbers.map((number) =>{
 return Math.pow(number,3);
});

console.log(numbers);
console.log(poweredNumber);

if (numbers.length==2)
console.log('hi');
else 
console.log('hello');
/////////////////////////////////////////////////

//filter:takes array ,return array of <= size
//that contains new data filtered from the original data
//it doesn't change the source


let oddNum=numbers.filter(number=>number%2!=0);
let poweredOddNumber=oddNum.map(number=>Math.pow(number,3));
console.log(oddNum);
console.log(poweredNumber);


const cats=[{name:'Shery',color:'white'},

{name:'frankie',color:'black'},
{name:'Instance',color:'gray'},
{name:'Abeyer',color:'red'}]

let bwCats=cats.filter(cat=>{
    if (cat.color=='black'||cat.color=='white')
    return cat.name;
    //return true  nafs alnatejeh
})

console.log(bwCats);