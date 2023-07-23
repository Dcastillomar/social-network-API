// const connection = require ('../config/connection');
// const { User, Thought} = require('../models');
// const { getRandomUser, getRandomThought } = require ('./data');

// connection.on('error', (err) => err);

// connection.once('open', async () =>{
//     console.log('connected');

//     let userCheck = await connection.db.listConnections({ name: 'users'}).toArray();
//     if (userCheck.length) {
//         await connection.dropCollection('users');
//     }

//     let thoughtCheck= await connection.db.listConnections({ name: 'thoughts'}).toArray();
//     if (thoughtCheck.length){
//         await connection.dropCollection('thoughts')
//     }

//     const users = [];
//     const thoughts = getRandomThought(10);

//     for (let i=0; i <20; i++){
//         const username = getRandomUser();
     
//         users.push({
//             username,
//             email,
//             thoughts, 
//             friends
//         })
//     }
//     await User.collection.insertMany(users);
//     await Thought.collection.insertMany(thoughts);

//     console.table(users);
//     console.table(thoughts);
//     console.info('Seeding complete');
//     process.exit(0);
//   });

