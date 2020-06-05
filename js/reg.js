window.onload = function () {
    var regtel = /^1[3|4|5|7|8]\d{9}$/;
    var regqq = /^[1-9]\d{4,}$/
    var regnc = /^[\u4e00-\u9fa5]{2,8}$/;
    var regmsg = /^\d{6}$/;
    var regpwd = /^[a-zA-z0-9_-]{6,16}$/;
    var tel = document.querySelector('#tel');   // 手机号码的正则表达式  
    var qq = document.querySelector('#qq');   // 手机号码的正则表达式  
    var nc = document.querySelector('#nc');
    var msg = document.querySelector('#msg');
    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd');
    regexp(tel, regtel);    //手机号码
    regexp(qq, regqq);    //QQ号码
    regexp(nc, regnc);    //昵称
    regexp(msg, regmsg);    //短信验证
    regexp(pwd, regpwd);    //密码验证
    function regexp(ele, reg) {
        ele.onblur = function () {
            if (reg.test(this.value)) {
                // console.log('正确的');
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确';
            } else {
                // console.log('不正确');
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请从新输入 ';
            }
        }
    };
    surepwd.onblur = function () {
        if (this.value == pwd.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 两次密码输入不一致，请从新输入 ';
        }
    }
}