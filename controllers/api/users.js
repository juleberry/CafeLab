// creates the route from the usersCtrl
const create = (req, res) => {
  res.status(200).json ({
    user: {
      name: req.body.name,
      email: req.body.email
    }
  })
}

module.exports = {
  create
}