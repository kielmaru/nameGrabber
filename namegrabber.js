(function($){
var as = $('.ex_product_name>a').each(function(){this.text()});
for (var i = 0; i<as.length;i++){
console.log(as[i]);	
};
})(jQuery)
