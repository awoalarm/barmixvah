/* GET add drink page. */
// Show the add form
exports.form = function (Ing) {
  return function (req, res) {
    Ing.find({}, function (err, ings) {
      res.render('adding', {
        title: 'Bar Mixvah: Add Ingredient',
        ings: ings
      });
    });
  };
}

// Add a drink
exports.addIng = function (Ing) {
  return function (req, res) {
    console.log(req.body);
    var ing = new Ing(req.body);
    ing.save(function (err, ing) {
      if (err || !ing) {
        res.json({ error: err });
      } else {
        res.json({ ing: ing });
      }
    });
  };
};

// Log the drink to console
exports.logIng = function (Ing) {
  return function (req, res) {
    console.log(req.body);
  };
};;
