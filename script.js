import react from "react";
//callback


// let stocks = {
//     Fruits: ["strawberry", "grapes", "banana", "apple"],
//     liquid: ["water", "ice"],
//     holder: ["cone", "cup", "stick"],
//     toppings: ["chocolate", "peanuts"],
// };

// let order = (fruit_name, call_production) => {

//     setTimeout(function () {

//         console.log(`${stocks.Fruits[fruit_name]} was selected`)

//         // Order placed. Call production to start
//         call_production();
//     }, 0000)
// };

// let production = () => {

//     setTimeout(() => {
//         console.log("place the order")


//         setTimeout(() => {
//             console.log("cut the fruit")

//             setTimeout(() => {
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)                  // callback hell
//                 setTimeout(() => {
//                     console.log("started the machine")

//                     setTimeout(() => {
//                         console.log(`Ice cream placed on ${stocks.holder[2]}`)

//                         setTimeout(() => {
//                             console.log(`${stocks.toppings[0]} and ${stocks.toppings[1]} was selected `)
//                             setTimeout(() => {
//                                 console.log("serve the icecream")
//                             }, 3000)
//                         }, 3000)
//                     }, 2000)
//                 }, 1000)
//             }, 1000)
//         }, 2000)
//     }, 2000)
// };
// order(0, production);



// promises


// let stocks = {
//   Fruits: ["strawberry", "grapes", "banana", "apple"],
//   liquid: ["water", "ice"],
//   holder: ["cone", "cup", "stick"],
//   toppings: ["chocolate", "peanuts"]
// };
// let shop_open =  false;//true;

// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (shop_open) {
//       setTimeout(() => {
//         // work is 👇 getting done here
//         resolve(work());

//         // Setting 👇 time here for 1 work
//       }, time);
//     } else {
//       reject(console.log("Our shop is closed"));
//     }
//   });
// };

// // step 1
// order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
//   // step 2
//   .then(() => {
//     return order(0000, () => console.log("production has started"));
//   })

//   // step 3
//   .then(() => {
//     return order(2000, () => console.log("Fruit has been chopped"));
//   })

//   // step 4
//   .then(() => {
//     return order(1000, () =>
//       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
//     );
//   })

//   // step 5                                                                      
//   .then(() => {
//     return order(1000, () => console.log("start the machine"));                 // promise chaining
//   })

//   // step 6
//   .then(() => {
//     return order(2000, () =>
//       console.log(`ice cream placed on ${stocks.holder[1]}`)
//     );
//   })

//   // step 7
//   .then(() => {
//     return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`));
//   })

//   // Step 8
//   .then(() => {
//     return order(2000, () => console.log("Serve Ice Cream"));
//   })

//   .catch(()=>{
//     console.log("Customer Left! ");                                                //Error Handling
//   })

//   .finally(()=>{
//     console.log("Day ended! Shop is closed")
//   })


// function kitchen(){

//   return new Promise ((resolve, reject)=>{
//     if(true){
//        resolve("promise is fulfilled")
//     }

//     else{ 
//         reject("error caught here")                          //Example of promise
//     }
//   })
// }

// kitchen()  // run the code
// .then()    // next step
// .then()    // next step
// .catch()   // error caught here
// .finally() // end of the promise [optional]

  //Async/Await

  let stocks = {
    Fruits: {
      
    }["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
  };
  let shop_open =  true;

  // let order = () =>{
  //   return new Promise( (resolve, reject) =>{

  //     if(1){
  //       resolve()
  //     }
  //     else{
  //       reject()
  //     }
  //   } )
  // }
//   async function kitchen(){

//     try{
//  // Let's create a fake problem      
//        await abc;
//     }
 
//     catch(error){
//        console.log("abc does not exist", error)                                     // Async/Await function example
//     }
 
//     finally{
//        console.log("Runs code anyways")
//     }
//  }
 
//  kitchen()  // run the code


//Now we are watching how the await function work..........



function toppings_choice (){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{

      resolve( console.log("which topping would you love?") )

    },3000)
  })
}async function kitchen(){

  console.log("A")
  console.log("B")
  console.log("C")
  
  await toppings_choice()         //Await worked
  
  console.log("D")
  console.log("E")

}

// Trigger the function

kitchen();

console.log("doing the dishes")
console.log("cleaning the tables")
console.log("taking orders")



  