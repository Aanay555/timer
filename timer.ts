#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { differenceInSeconds } from "date-fns";

 const response = await inquirer.prompt(
    {
    type: "number",
    name: "userinput",
    message: "Enter amount of Seconds",
    validate : (input)=> {
        if(isNaN(input)){
        return "Please Enter valid number";
    } else if ((input > 60)){
        return "Second must be in 60"
    } else {
        return true;
    }
},
});
//function for timer
let input = response.userinput

function startTime(val: number){
    
const intTime = new Date().setSeconds(new Date().getSeconds() + val);
const intervalTime = new Date(intTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiffernce =differenceInSeconds(intervalTime,currentTime);
        if(timeDiffernce <= 0){
            console.log("Time has Expired");
            process.exit();
        }
        const min =Math.floor((timeDiffernce % (3600 * 24))/ 3600);
        const sec = Math.floor(timeDiffernce % 60);
        console.log(chalk.bold.red(`${min.toString().padStart(2, "0")} : ${sec.toString().padStart(2, "0")}`));
    }, 1000)
}
startTime(input);