const usuarioConectado = (req, res, next) => {
    if (!req.session.currentUser) {
        res.redirect("/auth/login")
        return
    }
    next()
}

const usuarioNoconectado = (req, res, next) => {
    if (req.session.currentUser) {
        return res.redirect("/")
    }
    next()
}


module.exports = {
    usuarioConectado,
    usuarioNoconectado
}