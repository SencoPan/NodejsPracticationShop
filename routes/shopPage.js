const router = require('express').Router();

router.get('/test', (req, res) => {
    res.render('./Partials/header');
});
router.get('/', (req, res) => {
    res.render('./Partials/shop');
});

module.exports = router;