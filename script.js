//1. Create a variable `grade` and give it a value between 1 and 100
//2. Create an if statement that does the following

//- if grade is between `100` and `90` the if statement shall console log `You got an A grade`
//- if grade is between `90` and `75` the if statement shall console log `You got an B grade`
//- if grade is between `75` and `60` the if statement shall console log `You got an C grade`
-// if grade is less than `60` the if statement shall console log `You got an FAILED`



// Solution 

let grade = 91

if(grade <= 100 && grade >= 90 ){
    console.log("you got A grade")
}else if(grade <= 90 && grade >= 75 ){
    console.log("you got B grade")
}else if(grade <= 75 && grade >= 60 ){
    console.log("you got C grade")
}else if(grade <= 60 ){
    console.log("you got an FAILED")
}