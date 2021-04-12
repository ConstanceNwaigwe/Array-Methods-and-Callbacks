import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final
//data.filter(item => (item.population >= 650000)).map(i => console.log(i.state));
fifaData.filter(hT => (hT.year === 2014)).map(i => console.log(i["Home Team Name"]));

//(b) Away Team name for 2014 world cup final
fifaData.filter(hT => (hT.year === 2014)).map(i => console.log(i["Away Team Name"]));

//(c) Home Team goals for 2014 world cup final
fifaData.filter(hT => (hT.year === 2014)).map(i => console.log(i["Away Team Goals"]));

//(d) Away Team goals for 2014 world cup final
fifaData.filter(hT => (hT.year === 2014)).map(i => console.log(i["Away Team Goals"]));

//(e) Winner of 2014 world cup final */
fifaData.filter(hT => (hT.year === 2014)).map(i => console.log(i["Win conditions"]));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(dt) {
    //let arr1 = [];
    return dt.filter(i => (i.Stage === "Final"));
    //return arr1;

}
getFinals(fifaData);



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

let ranarr = []
function getYears(arr2, calfun) {
calfun(fifaData).map(i => (arr2.push(i.Year)));
return arr2;
}
getYears(ranarr, getFinals);



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

let arara = [];

function getWinners(arr3, funcal) {
    funcal(fifaData).map(i => {
        if((i["Home Team Goals"] + i["Half-time Home Goals"]) > (i["Away Team Goals"] + i["Half-time Away Goals"])){
          arr3.push(i["Home Team Name"])
        }
        else if((i["Away Team Goals"] + i["Half-time Away Goals"]) > (i["Home Team Goals"] + i["Half-time Home Goals"])){
            arr3.push(i["Away Team Name"])
          }
        
      })
    return arr3
}
getWinners(arara, getFinals);


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

let anarr = [];
function getWinnersByYear(anotherarr, anotherfun1, anotherfun2) {
    anotherfun1(ranarr, getFinals).map(a => {
        anotherfun2(arara, getFinals).map(b => {
            //console.log(`In ${a}, ${b} won the world cup!`)
            anotherarr.push(`In ${a}, ${b} won the world cup!`)
        })
    });
    return anotherarr;
}
getWinnersByYear(anarr, getYears, getWinners);



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(callfun) {
   //callfun(fifaData).reduce()
   let ar2 = [];
   //callfun.map(i => (ar2.push(i["Home Team Goals"] + i["Half-time Home Goals"] + i["Away Team Goals"] + i["Half-time Away Goals"])));
   callfun.map(i => (ar2.push(i["Home Team Goals"] + i["Away Team Goals"])));

   let getsum = ar2.reduce((total, i) => total += i,0);
   return `${Math.round((getsum/ar2.length) * 100)/100}`;
}
getAverageGoals(getFinals(fifaData));



/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
