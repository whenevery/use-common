WY.prop(Number , 'toMoney' , function(){
    return this.toFixed(2) - 0;
});
WY.prop(Number , 'turnMoney' , function(){
    return (this/100).toFixed(2);
});
WY.prop(String , 'turnMoney' , function(){
    return (this/100).toFixed(2);
});
WY.prop(String , 'padStart' , function(num , split){
    split = split || ' ';
    return (Array(num + 1).join(split) + this).slice(-num);
});
WY.prop(Number , 'padStart' , String.prototype.padStart);
WY.prop(String , 'padEnd' , function(num , split){
    split = split || ' ';
    return (this + Array(num + 1).join(split)).slice(0,num);
});
WY.prop(Number , 'padEnd' , String.prototype.padEnd);