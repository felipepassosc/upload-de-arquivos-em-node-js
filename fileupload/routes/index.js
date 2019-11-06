router.post('/', function(req, res, next){
  var formidable = require('formidable');
  var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      res.write('File uploaded');
      res.end();
    });
});