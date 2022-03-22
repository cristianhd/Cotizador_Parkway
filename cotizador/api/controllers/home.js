function renderHomeApi(req, res, next){
    res.render('index', { title: 'API PARKWAY' });
}

  module.exports = {
    renderHomeApi
  }