// Day 3 - Conditional ( if / else ) Statements
const myAge = 25;
const hasAccount = true;
const score = 75;

// Example 1: Simple if Statement
if(myAge >=18) {
    console.log("You are an adult.");
}
// Example 2: if/else
    if(hasAccount) {
        console.log("Welcome back!");
    } else{
        console.log("Please create an account.");
    }
    
    //Example 3: if/ else if / else 
        if(score >=90) {
            console.log("Grade: A");
        } else if(score >=70){
            console.log("Grade: B");
        } else if(score >=50) {
            console.log("Grade: C");
        } else{
            console.log("Grade: F");
        }


        // Practice section 
        const temperature = 28;
        const isRaining = false;

        if(temperature >= 30){
            console.log("It is hot outside.");
        } else if(temperature >= 20){
            console.log(" It is warm outside.");
        } else{
            console.log(" It is cold outside.");
        }

        if(isRaining){
            console.log("Take an umbrella.");
        } else{
            console.log("No need for an umbrella.");
        }
        