// const { 
//     readLogFile, 
//     computeAverageDurations, 
//     computeMaxDurations, 
//     computeMinDurations 
// } = require('./part1_functions');

const part1Functions = require('./part1_functions')


const { 
    parseOPDurationsIntoDict, 
    parseOPDurationsToSQLString,
    writeSQLStringAsFile
} = require('./part2_functions');


const main = async (inputfilePath:String) => {

    // Async, since logfiles can get quite large
    const logFile:{operationType: string, operation: string, duration: number}[] = await part1Functions.readLogFile(inputfilePath);
    // Different operationTypes:
    const operationTypes: string[] = [...new Set(logFile.map(operation => operation.operationType))];

    // Different operations:
    const operations: string[] = [...new Set(logFile.map(operation => operation.operation))];

    // Task 1
    // Get length of parsed logfile
    console.log(`Total operations performed: ${logFile.length}`);

    // Task 2
    // Filter for query, subscription and mutation; count length of returned list
    operationTypes.forEach(operationTyp => {
        const typeSpecificOps:{operationType: string, operation: string, duration: number}[] = logFile.filter(operation => operation['operationType'] == operationTyp)
        console.log(`Performed ${operationTyp}s: ${typeSpecificOps.length}`);
    })

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
    console.table(part1Functions.computeMinDurations(logFile, 'operation', operations))

    
    // Part 2
    const opDurations = parseOPDurationsIntoDict(logFile, operations);
    const sqlInjectionFileContent: String = parseOPDurationsToSQLString(opDurations);

    // Write the string to the sql file
    writeSQLStringAsFile(sqlInjectionFileContent, './metric_injection.sql');

}

main('logs.log.gz')