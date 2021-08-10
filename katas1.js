//Katas 1

let soma = 0
function oneThroughTwenty(total) {

for(i=0; i<total; i++){
   soma = soma+1
   console.log(soma)
}

}

console.log(oneThroughTwenty(20))

//katas 2
soma=0
function evensToTwenty(total) {
  
  
  
  for(i=0; i<total; i++){
      soma = soma+1
         if(soma%2 == 0){
             console.log(soma)
         }
     }

}
console.log(evensToTwenty(20))

//katas 3
 soma = 0
function oddsToTwenty(total) {



for(i=0; i<total; i++){
soma = soma+1
   if(soma%2 != 0){
       console.log(soma)
   }
}

}
console.log(oddsToTwenty(20))

//katas 4

 soma = 0
function multiplesoffive(total) {



  for(i=0; i<total; i++){
    soma = soma+1
    if(soma%5 == 0){
         console.log(soma)
    }
  }

}

console.log(multiplesoffive(100))

//katas 5

 soma = 0
    
function squareNumbers(total) {



    for(i=0; i<total; i++){
        soma = soma+1
        let perfeito = (soma*soma)
        if(perfeito%soma == 0){
            console.log(perfeito)
         }
    }

}
console.log(squareNumbers(10))


//katas 6
 soma = 0
 function countingBackward(total) {
  
  
  
  for(i=total; i>0; i= i-1){
      console.log(i)
      
  }
}
console.log(countingBackward(20))

//katas 7
 soma = 0
 
function evenNumbersBackwards(total) {



    for(i=total; i>0; i=i-1){
        
         if(i%2 == 0){
            console.log(i)      
         }
    }
    

}
console.log(evenNumbersBackwards(20))


//katas 8
 soma = 0
    
function oddNumbersBackwards(total) {



    for(i=total; i>0; i=i-1){
        
         if(i%2 != 0){
            console.log(i)      
         }
    }
    

}
console.log(oddNumbersBackwards(20))


//katas 9 
 soma = 0
    
function multiplesOfFiveBackwards(total) {



    for(i=total; i>0; i=i-1){
        
         if(i%5 == 0){
            console.log(i)      
         }
    }
    

}
console.log(multiplesOfFiveBackwards(100))

//katas 10
    
  let perfeito 
  function quareNumbersBackwards(total) {
  
      for(i=total; i>0; i=i-1){
          perfeito = i*i
          
           if(perfeito%i == 0){
              console.log(perfeito)      
           }
      }
      
  
  }
  console.log(quareNumbersBackwards(10))
  