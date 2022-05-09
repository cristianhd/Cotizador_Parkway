const { default: axios } = require("axios");

async function VerifyToken(req, res, next) {
  try {
    const accessToken = req.headers.authorization.split(" ")[1];
    const response = await axios.get(
      "https://dev-ascvuavf.us.auth0.com/userinfo",
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const infoUser = response.data;
    console.log(infoUser);
    console.log(accessToken);
  
    next();
  } catch (error) {
    res.send(error.message);
  }
}

module.exports = {VerifyToken};
