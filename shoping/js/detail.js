window.addEventListener('load',function(){
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    //1. 当我们鼠标经过preview_img 就显示和隐藏mask遮挡层和big大盒子
    preview_img.addEventListener('mouseover',function(){
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout',function(){
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    //2. 鼠标移动的试试，让黄色盒子跟着鼠标来走
    preview_img.addEventListener('mousemove',function(e){
        //(1). 计算出鼠标在盒子内的坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        //(2). 盒子高度的一半是150  就是mask的最终left 和 top 的值
        //(3). mask移动的距离
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        //(4). 如果x坐标小于0 就让他停在0 的位置
        //遮挡层的最大移动距离
        var maskMax = preview_img.offsetWidth - mask.offsetWidth;
        
        if(maskX <= 0){
            maskX = 0;
        }else if(maskX >= maskMax) {
            maskX = maskMax;
        }
        if(maskY <= 0){
            maskY = 0;
        }else if(maskY >= maskMax) {
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        // 大图移动的距离 = 遮挡层移动距离 * 大图最大移动距离 / 遮挡层最大移动距离
        var bigImg = document.querySelector('.bigImg');
        // 大图
        var bigMax = bigImg.offsetWidth - big.offsetWidth;
        // 大图的移动距离 X Y
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';
        //                 遮挡层移动距离*大图片最大移动距离
        // 大图片移动距离 =  ——————————————————————————————
        //                 遮挡层最大移动距离
        
    })
})