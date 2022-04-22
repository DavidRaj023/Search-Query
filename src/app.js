const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const {
    Sequelize,
    sequelize
} = require('./util/databaseService');

const appRouter = require('./router/appRouter');

app.use(express.json());
appRouter(app);

//{ force: true }
sequelize.sync().then((result) => {
    console.log("re-sync.");
    app.listen(PORT, () => {
        console.log(`Server Started and running on port: ${PORT}`);
    })
}).catch((err) => {
    console.log(err);
})