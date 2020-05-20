$(function () {
    // 1. 全选 全不选功能模块
    // 就是把全选按钮的状态赋值给三个小的按钮
    // 事件用change
    $(".checkall").change(function () {
        $(".j-checkbox, .checkall").prop("checked", $(this).prop("checked"));
        if($(this).prop("checked")){
            // 让所有商品添加背景 check-cart-item 类
            $(".cart-item").addClass("check-cart-item");
        }else {
            // 让所有商品移除背景 check-cart-item 类
            $(".cart-item").removeClass("check-cart-item");
        }
    });
    // 2. 如果小复选框被选中的个数等于3 就应该把全选框选上 否则不选
    $(".j-checkbox").change(function () {
        // if(被选中的小复选框个数 === 3){
        //     选中全选
        // }else {
        //     不选中全选
        // }
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        };
        if($(this).prop("checked")) {
             // 让所有商品添加背景 check-cart-item 类
            $(this).parents(".cart-item").addClass("check-cart-item");
        }else{
             // 让所有商品移除背景 check-cart-item 类
             $(this).parents(".cart-item").removeClass("check-cart-item");
            }
    });
    // 3. 增加减少商品模块 首先声明一个变量，当点击+号时就++，然后赋值给文本框
    $(".increment").click(function(){
        let n = $(this).siblings(".itxt").val();
        n++;
        $(this).siblings(".itxt").val(n);
        // 3.1计算小计模块 文本框的值 * 当前商品价格
        let price = $(this).parents(".p-num").siblings(".p-price").text();
        price = price.substr(1);
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + (price * n).toFixed(2));
        getSum();
    })
    $(".decrement").click(function(){
        let n = $(this).siblings(".itxt").val();
        if(n == 1){
            return false;
        };
        n--;
        $(this).siblings(".itxt").val(n);
        let price = $(this).parents(".p-num").siblings(".p-price").text();
        price = price.substr(1);
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + (price * n).toFixed(2));
        getSum();
    });
    // 4. 用户修改文本框的值
    $(".itxt").change(function(){
        let n = $(this).val();
        n = n < 0 ? n = 0 : n ;
        let price = $(this).parents(".p-num").siblings(".p-price").text();
        price = price.substr(1);
        $(this).parents(".p-num").siblings(".p-sum").text("￥" + (price * n).toFixed(2));
        getSum();
    });
    // 5. 计算总计 和总额模块
    getSum();
    function getSum(){
        let count = 0;  // 总件数
        let money = 0;  // 总价格
        $(".itxt").each(function(i, ele){
            count += parseInt($(ele).val());
        });
        $(".amount-sum em").text(count);
        $(".p-sum").each(function(i, ele){
            money += parseFloat($(ele).text().substr(1));
        });
        $(".price-sum em").text("￥" + money.toFixed(2));
    };
    // 6. 删除商品模块
    // (!) 商品后面的删除按钮
    $(".p-action a").click(function(){
        $(this).parents(".cart-item").remove();
        getSum();
    })
    // (2) 删除选中的商品
    $(".remove-batch").click(function(){
        $(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
    })
    // (3) 清空购物车
    $(".clear-all").click(function(){
        $(".cart-item").remove();
        getSum();
    })
})