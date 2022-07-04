//promesa tiene 3 estasos. pendiente, cumplido, rechazado

const promise = new Promise (function(resolve, reject){
    resolve ('hey');
}); 

const cows = 11;

const countCows = new Promise(function(resolve, reject){
    if (cows > 10){
        resolve(`We have ${cows} cows on the farm` )
    }else{
        reject ('no cows')
    }
});

countCows.then((result) =>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
}).finally(()=> console.log('finally'));