const jwt = require('jsonwebtoken');
const jwtKey = process.env.JWTKEY;

module.exports = (req, res, next) => {

  const Header = req.headers["authorization"].split(" ")[1];
  if (typeof Header === "undefined") return res.sendStatus(403); // Forbidden
  console.log("First", Header)

  // Verifying Authorization header with our private key
  jwt.verify(Header, jwtKey, (err, authData) => {
    if (err) {
      console.log("second", err)
      return res.sendStatus(403)}; // Forbidden
    // if (authData._id !== req.params.id) {
    //   console.log("third", req.body, "and", authData)
    //   return res.sendStatus(403)
    // }; // Forbidden
    if (authData.Account !== 1) {
      console.log("fourth")
      return res.sendStatus(403)
    }; // Forbidden
    next();
  });
}
