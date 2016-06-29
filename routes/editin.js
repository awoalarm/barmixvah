/* GET edit page */
exports.show = function (Ing) {
  return function (req, res) {
    Ing.find({}, function (err, ings) {
      res.render('editin', { 
        title: "Bar Mixvah: Edit Ingredients" ,
        ings: ings,
      });
    });
  };
};

exports.updateIng = function (Ing) {
  return function (req, res) {
    Ing.findOneAndUpdate({ _id: req.body._id }, 
      {
        name: req.body.name
      }, 
      function (err, ing) {
        if (ing) {
          console.log("Update Ingridients");
          res.send(ing);
        }
    });
  };
};