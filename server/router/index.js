const router = require('express').Router()
const io = require('socket.io-emitter')({ host: 'localhost', port: 6379 });

router.post('/makan', function(req, res){
    io.emit("balesan", req.body.text)
    res.send('<h1>masuk gan</h1>');
})
router.get('/', function(req, res){
    res.send('<h1>Hello world</h1>');
});
module.exports = router