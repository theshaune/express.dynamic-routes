var categories = '(store|products);

router.get('/:category('+categories+')/:slug', getPageDetails, function(req, res, next) {
 // Do something
})
