const router = require('express').Router();
const ctrl   = require('../controllers/messageController');

router.post('/', ctrl.createMessage);
router.get('/', ctrl.listMessages);
router.get('/search', ctrl.searchMessages);
router.get('/user/:userId', ctrl.listUserMessages);
router.delete('/:id', ctrl.deleteMessage);

module.exports = router;
