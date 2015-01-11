
exports.showHTML = function(req, res){
  res.render('html', { title: 'Javascript Deep Dive' });
};

exports.showCSSSelectors = function(req, res){
  res.render('css-selectors', { title: 'Javascript Deep Dive' });
};

exports.showCSSPosition = function(req, res){
  res.render('css-position', { title: 'Javascript Deep Dive' });
};

exports.showAnimation = function(req, res){
  res.render('animation', { title: 'Javascript Deep Dive' });
};

exports.showGrid = function(req, res){
  res.render('grid', { title: 'Javascript Deep Dive' });
};

