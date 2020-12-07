const { TestScheduler } = require('jest')
const part1Functions = require('./part1_functions')


test('calcAverage function', () => {
    expect(part1Functions.calcAverage([2,3,4])).toBe(3);
});

test('readLogFile', async () => {
    const testLogFile = await part1Functions.readLogFile('/Users/u_kast/Desktop/other_stuff/heartbeat_challenge/testLogFile.log.gz');
    await expect(testLogFile[0].duration).toEqual(0.052525752);
});

test('reduceToDuration', async () => {
    const testLogFile = await part1Functions.readLogFile('/Users/u_kast/Desktop/other_stuff/heartbeat_challenge/testLogFile.log.gz');
    expect(part1Functions.reduceToDuration(testLogFile, 'operationType', 'query')).toEqual([0.052525752,0.750366427,1.342834366]);
});

test('computeAverageDurations', async () => {
    const testLogFile = await part1Functions.readLogFile('/Users/u_kast/Desktop/other_stuff/heartbeat_challenge/testLogFile.log.gz');
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
    const testLogFile = await part1Functions.readLogFile('/Users/u_kast/Desktop/other_stuff/heartbeat_challenge/testLogFile.log.gz');
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
    const testLogFile = await part1Functions.readLogFile('/Users/u_kast/Desktop/other_stuff/heartbeat_challenge/testLogFile.log.gz');
    const operationTypes = ['query', 'subscription', 'mutation']
    expect(part1Functions.computeMaxDurations(testLogFile, 'operationType', operationTypes)).toEqual(
        {
            "mutation": 0.159220955,
            "query": 1.342834366, 
            "subscription": 87.068694843
        }
    );
});


