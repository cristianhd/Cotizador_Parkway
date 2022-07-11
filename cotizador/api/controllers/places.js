const Places = require("../models/Places");

function findPlaces(req, res, next) {

    const {place} = req.query;
    
    if(place === undefined) next(); // cuando no viene ninguna consulta
    
   
    try {
      Places.find({name: { $regex: '.*' + place + '.*' } }).limit(5).then((places) => {
        res.json(places);
      });
    } catch (error) {
      res.send(error.message);
    }
  }

  function findAllPlaces(req,res,next){
      
      console.log("pase por aqui")
    try {
        Places.find({}).then((places)=>{
            res.send(places)
        });
    } catch (error) {
        res.send(error.message);
      }

  }

  module.exports = {
    findPlaces,
    findAllPlaces
  }