"use strict";
// const { 
//     readLogFile, 
//     computeAverageDurations, 
//     computeMaxDurations, 
//     computeMinDurations 
// } = require('./part1_functions');
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const part1Functions = require('./part1_functions');
const { parseOPDurationsIntoDict, parseOPDurationsToSQLString, writeSQLStringAsFile } = require('./part2_functions');
const main = (inputfilePath) => __awaiter(void 0, void 0, void 0, function* () {
    // Async, since logfiles can get quite large
    const logFile = yield part1Functions.readLogFile(inputfilePath);
    // Different operationTypes:
    const operationTypes = [...new Set(logFile.map(operation => operation.operationType))];
    // Different operations:
    const operations = [...new Set(logFile.map(operation => operation.operation))];
    // Task 1
    // Get length of parsed logfile
    console.log(`Total operations performed: ${logFile.length}`);
    // Task 2
    // Filter for query, subscription and mutation; count length of returned list
    operationTypes.forEach(operationTyp => {
        const typeSpecificOps = logFile.filter(operation => operation['operationType'] == operationTyp);
        console.log(`Performed ${operationTyp}s: ${typeSpecificOps.length}`);
    });
    // Call the functions which write the requested information to stdout
    // Task 3a
    console.log('Average duration time per operation type: ');
    console.table(part1Functions.computeAverageDurations(logFile, 'operationType', operationTypes));
    // Task 3b
    console.log('Average duration time per operation: ');
    console.table(part1Functions.computeAverageDurations(logFile, 'operation', operations));
    // Task 4a
    console.log('Max durations per operation type: ');
    console.table(part1Functions.computeMaxDurations(logFile, 'operationType', operationTypes));
    // Task 4b
    console.log('Max durations per operation: ');
    console.table(part1Functions.computeMaxDurations(logFile, 'operation', operations));
    // Task 5a
    console.log('Min durations per operation type: ');
    console.table(part1Functions.computeMinDurations(logFile, 'operationType', operationTypes));
    // Task 5b
    console.log('Min durations per operation: ');
    console.table(part1Functions.computeMinDurations(logFile, 'operation', operations));
    // Part 2
    const opDurations = parseOPDurationsIntoDict(logFile, operations);
    const sqlInjectionFileContent = parseOPDurationsToSQLString(opDurations);
    // Write the string to the sql file
    writeSQLStringAsFile(sqlInjectionFileContent, './metric_injection.sql');
});
main('logs.log.gz');
