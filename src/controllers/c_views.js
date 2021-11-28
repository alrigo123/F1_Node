const controller = {}


controller.index = (req, res) => {
  res.render('index', { title: 'Formula 1 en Español El mas Grande de Peru' })
}

controller.autor = (req, res) => {
  res.render('autor', { title: 'Autor from this website' })
}

controller.pilot = (req, res) => {  
  res.render('pilot', { title: 'Pilot from this website' })
}

controller.log = (req, res) => {
  res.render('./templates/login', { title: 'Login' ,alert:false})
}

controller.reg = (req, res) => {
  res.render('./templates/register', { title: 'Register' })
}


module.exports = controller
