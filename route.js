var categories = '(store|products)';

router.get('/:category('+categories+')/:slug', function(req, res, next) {
 // Do something
 // req.param.category;
})
