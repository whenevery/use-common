WY.prop = function (obj , key , func){
    if(!obj.prototype[key]){
        Object.defineProperty(obj.prototype , key , {
            get:function(){
                return func
            },
        });
    }
};