const {sequelize, Sequelize} = require('../util/databaseService');
const {searchQuery} = require('../util/util');
exports.search = async(req, res) => {
    try {
        const searchWord = req.query.q;
        console.log(searchWord);
        if(typeof searchWord !== 'string') throw new Error("Please enter word to search");
        
        console.log(searchWord.length);
        if(searchWord.length <= 2){
            return res.status(200).send();
        }
        const query = searchQuery(searchWord);
        const result = await sequelize.query(query);
        return res.send({
            total: result[1],
            data: result[0]
        });
    } catch (error) {
        res.status(404).send({
            message: error.message
        })
    }
}