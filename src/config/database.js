
require('dotenv').config();
const { mongo, default: mongoose } = require('mongoose');

const dbState = [{
    value: 0,
    label: "disconnected"
},
{
    value: 1,
    label: "connected"
},
{
    value: 2,
    label: "connecting"
},
{
    value: 3,
    label: "disconnecting"
}];


const connection = async () => {
    try {
        const  options={
            user: process.env.DB_USER,
            pass: process.env.DB_PASSWORD,
            dbName: process.env.DB_NAME,
        }
        await mongoose.connect(process.env.DB_HOST, options);
        const state = Number(mongoose.connection.readyState);
        console.log(dbState.find(f => f.value == state).label, "to db"); // connected to db
        console.log('Connect to database successfully');
    }catch (error) {
        console.log('Connect to database failed');
        console.log(error);
    }
}


module.exports = {
    connection
}