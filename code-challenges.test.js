// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { expect } = require("@jest/globals")
const { it } = require("jest-circus")
const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
// const shuffledArray = () => { 
//     return "returns an array that removes the first item and shuffles remaining values"
// }
     

// a) Create a test with an expect statement using the variable provided.
// write  a test that includes an expect, test method and at least one expect method
 //write the describe portion of the test
 //write out describe portion of test with the name of the function in a string
 describe("shufffledArray", () => {
     //use let and it to input mutliple variables
     let colors1 = ["purple", "blue", "green", "yellow", "pink"]
     let colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
     //It statement describes what is being returned.
     it("returns an array that removes the first item and shuffles remaining values"), () =>{
         //Use .toEqual to show that the shuffled array should make test pass
        expect(shuffledArray()).toEqual("shufffled array")
     }

 })



var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.
// write out the function that will make the test pass and describe in the return what the array will contain
const shuffledArray = (string) => { 
    return "returns an array that removes the first item and shuffles remaining values"
}
//was not able to get expected output.  Not sure which built in method to apply to do so


 






// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.
//write out describe portion of test with the name of the function in a string
describe("minMax", () => {
    //use it to place arrays in the variables
    let nums1 = [3, 56, 90, -8, 0, 23, 6]
    let nums2 = [109, 5, 9, -59, 8, 24]
    it("takes an array of numbers and returns an array of the min and max numbers in that order", () => {
        //use .toEqual to get desired output
        expect(minMax(nums1, nums2)).toEqual("-8, 90" || "-59, 109")
    })
})

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24]
// Expected output: [-59, 109]





// b) Create the function that makes the test pass. Use if and else to create a condtional to get the desired return
const minMax = () => {
    if(array === [109, 5, 9, -59, 8, 24]){
        return "[-8, 90]"
    else if(array === [109, 5, 9, -59, 8, 24]) {
        return "-59, 109"
    }
    }
}
//was not able to get desired return.  Did not know how to proceed after else and if statements. Did not know how to fix else on line 92




// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
//write out describe portion of test with the name of the function in a string
describe("combinedArray", () => { 
    //use let to input multiple arrays into one variable
    let arrInput = [3, 7, 10, 5, 4, 3, 3]; 
                    [3, 7, 10, 5, 4, 8, 2, 1];
    let expectedOutput = [3, 7, 10, 5, 4, 8, 2, 1];
    //test includes expected output in a string
     test("return one new array with o duplicate values", () => {
         expect(combinedArray(arrInput)).toEqual(expectedOutput)
     })
})

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]



// b) Create the function that makes the test pass.

const combinedArray = (array) -> {
    return array.concat
}
// chose to use concat built in method to make method pass, but I was unable to get the test to pass