/* GET edit page */
exports.show = function (Drink, Ing) {
  return function (req, res) {
    Drink.find({}, function (err, drinks) {
	 Ing.find({}, function (err, ings) {   
      res.render('edit', { 
        title: "Bar Mixvah: Edit Drinks" ,
        ings: ings,
        drinks: drinks,
      });
      });
    });
  };
};

exports.updateDrink = function (Drink) {
  return function (req, res) {
    Drink.findOneAndUpdate({ _id: req.body._id }, 
      {
        name: req.body.name,
        besk: req.body.besk,
        image: req.body.image,
        ingredients: req.body.ingredients
      }, 
      function (err, drink) {
        if (drink) {
          console.log("Update Drink");
          res.send(drink);
        }
    });
  };
};

exports.deleteDrink = function (Drink) {
  return function (req, res) {
    Drink.findOneAndRemove({ _id: req.body._id }, 
      function (err, drink) {
        if (drink) {
          console.log("Deleted Drink");
          res.send(drink);
        }
    });
  };
};

exports.deleteIngDrink = function (Drink) {
  return function (req, res) {
    Drink.findOneAndRemove({ _id: req.body.ingredients._id }, 
      function (err, drink) {
        if (drink) {
          console.log("Deleted Drink Ingredients");
          res.send(drink);
        }
    });
  };
};