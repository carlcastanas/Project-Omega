const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const randon = require('random');
const FILE_PATH = './data.json';

const makeCommit = n => {
    if (n === 0) return simpleGit().push();
    const x = randon.int(0, 54);
    const y = randon.int(0, 6);
    const DATE = moment().subtract(2, 'y').add(1, 'd')
        .add(x, 'w').add(y, 'd').format();
    const data = {
        data: DATE
    }
    console.log(DATE);
    jsonfile.writeFile(FILE_PATH, data, () => {
        simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE },
            makeCommit.bind(this, --n));
    });
}

makeCommit(10);