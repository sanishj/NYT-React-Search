let userData = [
    { id: 1, name: 'Bex' },
    { id: 2, name: 'Gowri' },
    { id: 3, name: 'Katie' },
    { id: 4, name: 'Not Real Helen' },
    { id: 5, name: 'Tony' }
]

//setup a basic controller
module.exports = {
    findAll: (req, res) => res.json(userData),
    findById: (req, res) => res.json(userData.filter(user => user.id === +req.param.id))
}