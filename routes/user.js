const router = require('express').Router(),
    passport = require('passport'),
        csrf = require("csurf");

const csrfProtection = csrf();
router.use(csrfProtection);

router.get("/signup", (req, res, next) => {
   res.render("FinalPage/signUp", {csrfToken: req.csrfToken()})
});

router.post("/signup", passport.authenticate('local.signup', {
   successRedirect: '/user/profile',
   failureRedirect: '/user/signup',
   failureFlash: true
}));

router.get('/profile', (req, res) => {
   res.render('FinalPage/profile')
});

module.exports = router;