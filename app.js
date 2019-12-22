const createError = require('http-errors'),
      express = require('express'),
      path = require('path'),
      cookieParser = require('cookie-parser'),
      logger = require('morgan'),
      mongoose = require('mongoose'),
      passport = require('passport'),
      flash = require('connect-flash'),
      session = require('express-session');

const app = express();

const shopRoutes = require('./routes/shopPage');
const userRoutes = require('./routes/user');

mongoose.connect("mongodb://localhost:27017/shopping")
require('./config/passport');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret:'SecretCode', resave: false, saveUninitialized: false}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//Shop Routes
app.use("/shop", shopRoutes);
app.use("/user", userRoutes);

app.get('/', (req, res) => {
  res.render("ShopLayout");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
