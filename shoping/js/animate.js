function animate(obj,target,callback){
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 10;
       step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if(obj.offsetLeft == target){
            //停止动画 本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            // if(callback){
            //     //调用函数
            //     callback();
            // }
            callback && callback();
        }
        obj.style.left = obj.offsetLeft + step +'px';
    },15);
}