const fs       = require('fs');
const zlib     = require('zlib');
const readline = require('readline');

// Defnine a function to calc the average of a numeric array
const calcAverage = (array: number[]) => array.reduce((sum, value) => sum + value) / array.length;

// Define reader for logfile, reads line by line
const lineReader = (path) => readline.createInterface({
  input: fs.createReadStream(path).pipe(zlib.createGunzip())
});

/* 
Readin of logfile; gets parsed in a 2D-tablelike-array
Input: Logfile
Output: 2D-array: rows: operations; cols: type | operationname | duration
*/
const readLogFile = async (path:string) => {

  const logFileArray: {operationType: string, operation: string, duration: number}[] = []
  for await (let line of lineReader(path)) {
    if(line.includes('operation-responsetime')){
        const operationElements: string[] = line.split(' | ')
        logFileArray.push({
            operationType: operationElements[3].split(': ')[1],
            operation: operationElements[1].split(': ')[1], 
            duration: parseFloat(operationElements[2].split(': ')[1])
        })
    }
  }
  return (logFileArray)

}

/*
Helper function; used in task 3, 4 & 5
Input: Logfile, groupBy criteria: operationType | operations, specific operationtype or operationname
Output: List of durations 
Filter the inputfile for operations that fulfill the groupBy critera
Reduce this list to only contain the durations and return it
*/
const reduceToDuration = (inputFile:{operationType: string, operation: string, duration: number}[], groupBy:string, operationTyp:string) => {
    const typeSpecificOpsDurations:number[] = inputFile
        .filter(operation => operation[groupBy] == operationTyp)
        .map(operation => operation.duration)
    return typeSpecificOpsDurations
};

// Task 3
/* 
Call the helper function for each operationname / operationtype and compute the average on the returned durations 
using a pre-defined function
Input: Logfile, groupBy attribute, set of operationtypes | operationnames
Output: Dictionary mapping the average duration to the corresponding operationtype or operationname
*/
const computeAverageDurations = (inputFile:{operationType: string, operation: string, duration: number}[], groupBy:string, operationTypes:string[]) => {
    const avgPerType:{[operationname: string]: Number} = {}
    operationTypes.forEach(operationTyp => {
        const typeSpecificOpsDuration: number[] = reduceToDuration(inputFile, groupBy, operationTyp)
        avgPerType[operationTyp] = calcAverage(typeSpecificOpsDuration)
    }); 
    return avgPerType
}

// Task 4
/* 
Pretty similar to the function of task 3
I decided to built them as seperate functions, because even if they work basically in the same way, 
the targeted outcome is a different one. Of course they could be combined into one function but I think it is clenaer
to have one specific function for one specific task.
*/
const computeMaxDurations = (inputFile:{operationType: string, operation: string, duration: number}[], groupBy:string, operationTypes:string[]) => {
    const maxPerType:{[operationname: string]: Number} = {}
    operationTypes.forEach(operationTyp => {
        maxPerType[operationTyp] = Math.max(...reduceToDuration(inputFile, groupBy, operationTyp))
    });   
    return maxPerType
}

// Task 5
/* 
Pretty much the same as the function for exercise 4, calcualtes minimum instead of maximum
*/
const computeMinDurations = (inputFile:{operationType: string, operation: string, duration: number}[], groupBy:string, operationTypes:string[]) => {
    const minPerType:{[operationname: string]: Number} = {}
    operationTypes.forEach(operationTyp => {
        minPerType[operationTyp] = Math.min(...reduceToDuration(inputFile, groupBy, operationTyp))
    });   
    return minPerType
}

exports.readLogFile = readLogFile;
exports.computeMinDurations = computeMinDurations;
exports.computeMaxDurations = computeMaxDurations;
exports.computeAverageDurations = computeAverageDurations;
exports.calcAverage = calcAverage;
exports.reduceToDuration = reduceToDuration;

