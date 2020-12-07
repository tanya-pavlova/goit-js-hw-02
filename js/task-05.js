


const checkForSpam = function(message) {

    const itIsSpam = message.toLowerCase();

   if (itIsSpam.includes('sale')) {
     return true;
       
   }

  else if (itIsSpam.includes('spam')) {
    return true;        
   }

else {
    return false; 
}
   
};



console.log(checkForSpam('Latest technology news')); 

console.log(checkForSpam('JavaScript weekly newsletter')); 

console.log(checkForSpam('Get best sale offers now!')); 

console.log(checkForSpam('[SPAM] How to earn fast money?')); 