
exports.showClass = function(req, res){
  res.render('jslesson', { title: 'Javascript Deep Dive' });
};

exports.showJSAdv = function(req, res){
  res.render('jsadvlesson', { title: 'Javascript Deep Dive' });
};

exports.showNode = function(req, res){
  res.render('nodelesson', { title: 'Javascript Deep Dive' });
};

exports.showExpress = function(req, res){
  res.render('expresslesson', { title: 'Javascript Deep Dive' });
};
