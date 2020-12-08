const { TestScheduler } = require('jest')
const part1Functions = require('./part1_functions')


test('calcAverage function regular', () => {
    expect(part1Functions.calcAverage([2,3,4])).toBe(3);
});

test('calcAverage function including negativ', () => {
    expect(part1Functions.calcAverage([2,3,-8])).toBe(-1);
});

test('calcAverage function including zero', () => {
    expect(part1Functions.calcAverage([2,7,0])).toBe(3);
});

test('test line reader', async () => {
    const readLines = []
    for await (let line of part1Functions.lineReader('./testLogFile.log.gz')) {
        readLines.push(line)
    }
    expect(readLines[0]).toMatch('[graphql] operation | operation: SearchPatients | opId: 118');
})


test('readLogFile', async () => {
    const testLogFile = await part1Functions.readLogFile('./testLogFile.log.gz');
    await expect(testLogFile[0].duration).toBeCloseTo(0.052525752);
});

test('reduceToDuration', async () => {
    const testLogFile = await part1Functions.readLogFile('./testLogFile.log.gz');
    expect(part1Functions.reduceToDuration(testLogFile, 'operationType', 'query')).toEqual([0.052525752,0.750366427,1.342834366]);
});

test('computeAverageDurations', async () => {
    const testLogFile = await part1Functions.readLogFile('./testLogFile.log.gz');
    const operationTypes = ['query', 'subscription', 'mutation']
    expect(part1Functions.computeAverageDurations(testLogFile, 'operationType', operationTypes)).toEqual(
        {
            "mutation": 0.146207036,
            "query": 0.7152421816666666, 
            "subscription": 87.068694843
        }
    );
});

test('computeMinDurations', async () => {
    const testLogFile = await part1Functions.readLogFile('./testLogFile.log.gz');
    const operationTypes = ['query', 'subscription', 'mutation']
    expect(part1Functions.computeMinDurations(testLogFile, 'operationType', operationTypes)).toEqual(
        {
            "mutation": 0.133193117,
            "query": 0.052525752, 
            "subscription": 87.068694843
        }
    );
});

test('computeMaxDurations', async () => {
    const testLogFile = await part1Functions.readLogFile('./testLogFile.log.gz');
    const operationTypes = ['query', 'subscription', 'mutation']
    expect(part1Functions.computeMaxDurations(testLogFile, 'operationType', operationTypes)).toEqual(
        {
            "mutation": 0.159220955,
            "query": 1.342834366, 
            "subscription": 87.068694843
        }
    );
});


