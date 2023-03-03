const { User } = require('../models');

const userData = [{
        username: 'Harry',
        password: 'harry1'

    },
    {
        username: 'Dani',
        password: 'dani1'
    },
    {
        username: 'Molly',
        password: 'molly1'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;