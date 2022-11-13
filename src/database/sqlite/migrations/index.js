const sqliteConnection = require('../../sqlite');
const createUsers = require('./createUsers');

async function migrationsRun(){
    const schemes = [
        createUsers
    ].join('');

    sqliteConnection().then(db => db.exec(schemes))
    .catch(error => console.error(error));
}

module.exports = migrationsRun;