const Login = require('../models/LoginModel')

exports.index = (req, res) => {
   if(req.session.user) return res.render('login-logado')
   return res.render('login')
};

exports.register = async function (req, res, next) {
    try {
        const login = new Login(req.body);
        await login.register(); 
    
        if(login.errors.length > 0) {
            req.flash('errors', login.errors); 
            req.session.save(function(){
                res.redirect('back');
            })
            return;
        }
    
        req.flash('sucess', 'Seu usuário foi criado com sucesso'); 
        req.session.save(function(){
            res.redirect('back');
        })
        return;
    } catch (e) {
        console.log(e)
       return res.render('404')
    }
 
}; 

exports.login = async function (req, res, next) {
    try {
        const login = new Login(req.body);
        await login.login(); 
    
        if(login.errors.length > 0) {
            req.flash('errors', login.errors); 
            req.session.save(function(){
                res.redirect('back');
            })
            return;
        }
        if(!login.user) {
            req.flash('errors', login.errors); 
            req.session.save(function(){
                res.redirect('back');
            })
            return;
        }
    
        req.flash('sucess', 'Você logou com sucesso'); 
        req.session.user = login.user; 
        req.session.save(function(){
            res.redirect('/');
        })
        return;
    } catch (e) {
        console.log(e)
       return res.render('404')
    }
 
}; 

exports.logout = function (req, res) {
    
    req.session.destroy()
    res.redirect('/')
}