const router = require('express').Router(),
    passport = require('passport'),
        csrf = require("csurf");

const csrfProtection = csrf({ cookie: true });
router.use(csrfProtection);


router.get('/profile', IsLoggedIn,(req, res) => {
   res.render('FinalPage/profile')
});

router.use('/shop', notLoggedin, (req, res, next) => {
   next()
});

router.get("/signup", (req, res) => {
   let messages = req.flash('error');
   res.render("FinalPage/signUp", {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0})
});

router.post("/signup", passport.authenticate('local.signup', {
   successRedirect: '/user/profile',
   failureRedirect: '/user/signup',
   failureFlash: true
}));

router.get('/signin', (req, res) => {
   let messages = req.flash('error');
   res.render("FinalPage/signin", {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0})
});

router.post('/signin', passport.authenticate('local.signin', {
   successRedirect: '/user/profile',
   failureRedirect: '/user/signin',
   failureFlash: true
}, (info) => {
   console.log('User is authorised' + info);
}));

router.get('/logout', IsLoggedIn,(req, res) => {
   req.logout();
   res.redirect('/shop');
});

module.exports = router;

function IsLoggedIn(req, res, next) {
   if (req.isAuthenticated()) {
      return next();
   }
   res.redirect('/shop');
}

function notLoggedin(req, res, next) {
   if (!req.isAuthenticated()) {
      return next();
   }
   res.redirect('/shop');
}