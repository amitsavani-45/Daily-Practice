let d1=new Date();
console.log(d1);


console.log(d1.toLocaleString('default',{

  weekday:"short",
  day:'2-digit',
  month: 'long',
  year:'2-digit'
}));