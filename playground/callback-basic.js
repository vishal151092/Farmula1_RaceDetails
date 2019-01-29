var methodOne = (id, callback)=>{
if(id=='vishal.u.singh'){

    callback('vishal151092@gmail.com');
}
}

methodOne('vishal.u.singh',(id)=>{
console.log(`My email-Id is ${id}`);
} );