(function($){
var as = $('.ex_product_name>a');
var names=new Array();
for (var i = 0; i<as.length;i++){
names.push(as[i].text);	
};
alert(names);
})(jQuery)
