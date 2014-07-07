(function($){
var as = $('.ulchildlink>a');
var names=new Array();
for (var i = 0; i<as.length;i++){
names.push(as[i].text);	
};
alert(names);
})(jQuery)
