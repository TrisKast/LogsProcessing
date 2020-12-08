"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
const fs = require('fs');
const zlib = require('zlib');
const readline = require('readline');
// Defnine a function to calc the average of a numeric array
const calcAverage = (array) => array.reduce((sum, value) => sum + value) / array.length;
// Define reader for logfile, reads line by line
const lineReader = (path) => readline.createInterface({
    input: fs.createReadStream(path).pipe(zlib.createGunzip())
});
/*
Readin of logfile; gets parsed in a 2D-tablelike-array
Input: Logfile
Output: 2D-array: rows: operations; cols: type | operationname | duration
*/
const readLogFile = (path) => __awaiter(void 0, void 0, void 0, function* () {
    var e_1, _a;
    const logFileArray = [];
    try {
        for (var _b = __asyncValues(lineReader(path)), _c; _c = yield _b.next(), !_c.done;) {
            let line = _c.value;
            if (line.includes('operation-responsetime')) {
                const operationElements = line.split(' | ');
                logFileArray.push({
                    operationType: operationElements[3].split(': ')[1],
                    operation: operationElements[1].split(': ')[1],
                    duration: parseFloat(operationElements[2].split(': ')[1])
                });
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return (logFileArray);
});
/*
Helper function; used in task 3, 4 & 5
Input: Logfile, groupBy criteria: operationType | operations, specific operationtype or operationname
Output: List of durations
Filter the inputfile for operations that fulfill the groupBy critera
Reduce this list to only contain the durations and return it
*/
const reduceToDuration = (inputFile, groupBy, operationTyp) => {
    const typeSpecificOpsDurations = inputFile
        .filter(operation => operation[groupBy] == operationTyp)
        .map(operation => operation.duration);
    return typeSpecificOpsDurations;
};
// Task 3
/*
Call the helper function for each operationname / operationtype and compute the average on the returned durations
using a pre-defined function
Input: Logfile, groupBy attribute, set of operationtypes | operationnames
Output: Dictionary mapping the average duration to the corresponding operationtype or operationname
*/
const computeAverageDurations = (inputFile, groupBy, operationTypes) => {
    const avgPerType = {};
    operationTypes.forEach(operationTyp => {
        const typeSpecificOpsDuration = reduceToDuration(inputFile, groupBy, operationTyp);
        avgPerType[operationTyp] = calcAverage(typeSpecificOpsDuration);
    });
    return avgPerType;
};
// Task 4
/*
Pretty similar to the function of task 3
I decided to built them as seperate functions, because even if they work basically in the same way,
the targeted outcome is a different one. Of course they could be combined into one function but I think it is clenaer
to have one specific function for one specific task.
*/
const computeMaxDurations = (inputFile, groupBy, operationTypes) => {
    const maxPerType = {};
    operationTypes.forEach(operationTyp => {
        maxPerType[operationTyp] = Math.max(...reduceToDuration(inputFile, groupBy, operationTyp));
    });
    return maxPerType;
};
// Task 5
/*
Pretty much the same as the function for exercise 4, calcualtes minimum instead of maximum
*/
const computeMinDurations = (inputFile, groupBy, operationTypes) => {
    const minPerType = {};
    operationTypes.forEach(operationTyp => {
        minPerType[operationTyp] = Math.min(...reduceToDuration(inputFile, groupBy, operationTyp));
    });
    return minPerType;
};
exports.readLogFile = readLogFile;
exports.computeMinDurations = computeMinDurations;
exports.computeMaxDurations = computeMaxDurations;
exports.computeAverageDurations = computeAverageDurations;
exports.calcAverage = calcAverage;
exports.reduceToDuration = reduceToDuration;
exports.lineReader = lineReader;
