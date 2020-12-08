const fs = require('fs');
const { 
    computeAverageDurations, 
    computeMaxDurations, 
    computeMinDurations 
} = require('./part1_functions');

// Part 2
/* 
Reformat the computed durations into a sepcific form for later readout;
Take each operation name as a key in an object and build another object as value 
containing the average, min and max duration values; 
form:
{Operationname: {'average': averageDuration, 'max': maximalDuration,'min': minimalDuration}}[]
*/
exports.parseOPDurationsIntoDict = (inputFile:{operationType: string, operation: string, duration: number}[], operationNames:string[]) => {
    const operationDurations: {[operationname: string]: {'average':Number,'max':Number,'min':Number}} = {};
    for (const opName of operationNames){
        operationDurations[opName] = {'average':0,'max':0,'min':0}
        operationDurations[opName]['type'] = inputFile
            .filter(operation => operation.operation == opName)
            .map(operation => operation.operationType)[0]
        operationDurations[opName]['average'] = computeAverageDurations(inputFile, 'operation', operationNames)[opName]
        operationDurations[opName]['max'] = computeMaxDurations(inputFile, 'operation', operationNames)[opName]
        operationDurations[opName]['min'] = computeMinDurations(inputFile, 'operation', operationNames)[opName]
    }
    return operationDurations
}

// Parse a dict into a string which can be written as an SQL file
exports.parseOPDurationsToSQLString = (opDurationDict:{[operationname: string]:{'average':Number,'max':Number,'min':Number}}) =>{

    // Build a string which will be used to generate the sql file
    let sqlInjectionString: String = `INSERT INTO GraphqlDurations
    ( operation, operationType, duration, method )
    VALUES \n`

    // The specific values can be easily read out and added to the string
    for (const opName in opDurationDict) {
        const operation: {'average':Number,'max':Number,'min':Number} = opDurationDict[opName];
        sqlInjectionString += `\t('${opName}', '${operation['type']}', ${operation['average']}, 'AVG'), \n`
        sqlInjectionString += `\t('${opName}', '${operation['type']}', ${operation['max']}, 'MAX'), \n`
        sqlInjectionString += `\t('${opName}', '${operation['type']}', ${operation['min']}, 'MIN'), \n`
    }

    // Remove the last ', \n' from the string
    sqlInjectionString = sqlInjectionString.substring(0, sqlInjectionString.length - 3);
    return sqlInjectionString
}

// Wrapper for writing the SQL string to a file
exports.writeSQLStringAsFile = (sqlString: string, outfile: string) => {
    fs.writeFile(outfile, sqlString, function(err:String) {
        if(err) {
            return console.log(err);
        }
        console.log("The sql file was saved!");
    }); 
}

export {};