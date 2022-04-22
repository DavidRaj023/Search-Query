exports.searchQuery = (word)=> {
    return `SELECT * FROM Person.Person WHERE FirstName LIKE '%${word}%' OR MiddleName LIKE '%${word}%' OR LastName LIKE '%${word}%' ORDER BY FirstName ASC;`
}