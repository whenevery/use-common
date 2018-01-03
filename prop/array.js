WY.prop(Array , 'every' , function(func){
    for(var i=0;i<this.length;i++){
        if(func(this[i] , i) === false)return false;
    }
    return true;
});
WY.prop(Array , 'find' , function(func){
    for(var i=0;i<this.length;i++){
        if(func(this[i] , i) === true)return this[i];
    }
    return null;
});
WY.prop(Array , 'findIndex' , function(func){
    for(var i=0;i<this.length;i++){
        if(func(this[i] , i) === true)return i;
    }
    return -1;
});
WY.prop(Array , 'sum' , function(func){
    func = func || function(a){return a - 0};
    var sum = 0;
    this.forEach(function(a){
        sum += func(a);
    });
    return sum;
});