const router = require('express').Router(),
        csrf = require("csurf");

const csrfProtection = csrf();
router.use(csrfProtection);

router.get("/signup", (req, res, next) => {
   res.render("FinalPage/signUp", {csrfToken: req.csrfToken()})
});

router.post("/signup", (req, res) => {
   res.redirect("/");
});

module.exports = router;