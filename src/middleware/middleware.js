exports.middleWareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.sucess = req.flash('sucess')
    res.locals.user = req.session.user; 
    next(); 
};

exports.checkCsrfError = (err, req, res, next) => {
    if( err && err.code === 'EBADCSRFTOKEN') {
        return res.render('pag404')
    }
}; 

exports.loginRequired = (req, res, next) => {
    if (!req.session.user) {
        req.flash('errors', 'Você precisa fazer login');
        req.session.save(() => res.redirect('/login/index'));
        return; 
    }

    next(); 
}

