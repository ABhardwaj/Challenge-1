function print(x) {
	console.log(x);
}
// Write a function called billTotal that can be used to 
// calculate the total to be paid at a restaurant -- 
// including tip and tax -- given the subtotal 
// (i.e. cost of food and drinks). We can assume that the tip 
// will be 15% and tax will be 9.5%. Make sure that the tip 
// does not include the tax!
// return "Your total comes to " + total;
// Hint to get a decimal place of 2 you can use
// Math.round(numberWithDecimal * 100)/100
// i.e. Math.round(15.051102 * 100)/100 becomes 15.05,


function billTotal(total) {
	// write code here
	var billTotal = 0;
	var tip = 0;
	var tax = 0;
	if(total > 0)
	{
        tip = (15/100)*total ;
        tax = (9.5/100)*total;
        billTotal = total + tip + tax;
        return Math.round(billTotal*100)/100;
	}
	else
	{
		return "You Got Lucky !! lunch/dinner is free"
	}
}

// billTotal(21.55); // "Your total comes to $26.83"

// Implement the function called animalNoise that accepts two 
// parameters: a type of animal and an emotion that indicates 
// that animal's current emotional state. Based on the 
// combination of animal and emotion, animalNoise should return 
// an appropriate noise (represented as a string). 
// The function should work with at least two different 
// animals and emotions.

// Some ideas include:

// Animals: cat, dog, horse, duck, chicken, cow, human
// Emotions: angry, happy, sad, surprised
// If you're feeling uninspired, feel free to use "smileys" to convey emotion.

function animalNoise(animal, emotion) {
// TODO: your code here
     var animals = ["cat", "dog", "horse", "duck", "chicken", "cow", "human"];
     var Emotions =["angry", "happy", "sad", "surprised"];
     var noise = ["Meow", "Bark", "Neigh", "Quack",":)"];

    // Code only noise for Emotions "angry" // I am returning Funny Sound for everything else
     if(animal.toLowerCase() == animals[0])
     {
          switch(emotion.toLowerCase()) {
          case Emotions[0]:
               return noise[0];
               break;
           default:
              return "Funny Sound";

          }

     }
     else if(animal.toLowerCase() == animals[1])
     {
           switch(emotion.toLowerCase()) {
           case Emotions[0]:
                 return noise[1];
                 break;
            default:
              return "Funny Sound";
          }
     }
    else if(animal.toLowerCase() == animals[2])
     {
          switch(emotion.toLowerCase()) {
          case Emotions[0]:
               return noise[2];
               break;
          default:
              return "Funny Sound";

          }
     }
     else if(animal.toLowerCase() == animals[3])
     {
          switch(emotion.toLowerCase()) {
           case Emotions[0]:
               return noise[3];
               break;
            default:
              return "Funny Sound";
          }
     }
     else if(animal.toLowerCase() == animals[4])
     {
          switch(emotion.toLowerCase()) {
           case Emotions[0]:
               return noise[4];
               break;
            default:
              return "Funny Sound";
          }
     }
     else if(animal.toLowerCase() == animals[5])
     {
          switch(emotion.toLowerCase()) {
           case Emotions[0]:
               return noise[4];
               break;
           default:
              return "Funny Sound";
          }
     }
     else if(animal.toLowerCase() == animals[6])
     {
          switch(emotion.toLowerCase()) {
           case Emotions[0]:
               return noise[4];
               break;
           default:
              return "Funny Sound";
          }
     }
     else{
     	return "Animal not found !!!"
     }

}


// The digital sum of a number is the sum of all its digits, 
// e.g. digitalSum(1337) should output 14: 1 + 3 + 3 + 7. 
// Use any of the methods of reptition that we have covered so 
// far (no while loops) to implement this function.

// HINTS: Try the following at a console:

// 1337 % 10;
// 133 % 10;
// 13 % 10;
// 1337 / 10;
// Math.floor(1337 / 10);
// Math.floor(133 / 10);
// What should digitalSum of a single-digit number 
// return, e.g. digitalSum(8)?

function digitalSum(n)
{
	 //base case  // if we have single digit like 8 .. 8 % 10 == 8 
	 if(n % 10 == n)
	 {
	 	return n
	 }

	 return digitalSum1(n % 10) + digitalSum1(Math.floor(n / 10));
}

// Just for fun // not using while loop though :)
function digitalSum1(n)
{
	 var total = 0;

	 var str = n + "";

	 //var strarr = [];

	 str = str.split("");

	 for(i=0 ; i < str.length; i++)
	 {
          total = total + parseInt(str[i]);
          //console.log(total);
	 }

	 return total;

	 
}