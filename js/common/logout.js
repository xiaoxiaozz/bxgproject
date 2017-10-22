/** 退出到登陆界面
 * Created by zzzd on 2017/10/21.
 */
  define(['jquery'],function($){
      return function(){
          //a.首先将a标签的跳转功能去除才能保证后面的代码正常运行
          $('.login-out').on('click',function(e){
              //阻止a标签的跳转也可以用javascript：viod（0）；
              e.preventDefault();
              //b。给服务器发送请求
              $.ajax({
                  url:'/api/logout',
                  type:'post',
                  success:function(res){
                      if(res.code!=200) throw new Error(res.msg);
                      //发送成功后移除cookie的值
                      $.removeCookie('userinfo');
                      //实现跳转登陆页面
                      location.href = 'login.html';
                  }
              })
          })
      }
  })
