var playerController = require('../controllers/players');

module.exports = app => {
    app
        .get('/players', playerController.getAll)
        .post('/players/add', playerController.create)
        .delete('/players/delete/:id', playerController.delete)
        .put('/players/update', playerController.update)
        
        .all("*", (req,res,next) => {
            res.sendFile(path.resolve("./public/dist/index.html"))
        })
}