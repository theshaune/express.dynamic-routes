/* Packages */
var express = require('express')
  , router = express.Router();

/* Local Variables */ 
var categories = '(store|products)';

/* Routes */ 
router.get('/:category('+categories+')/:slug', function(req, res, next) {
 // Do something
 // req.param.category;
})
