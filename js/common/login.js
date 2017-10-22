/** 获取登陆界面的信息
 * Created by zzzd on 2017/10/21.
 */
 define(['jquery'],function($){
     return function(){
         //  var str = sessionStorage.getItem('userinfo');
         var str = $.cookie('userinfo');

         // 判断如果没有获取到信息就返回登陆页面登陆
         if(!str) return location.href= 'login.html';
         // 接收到了信息再执行下面的代码
         // 将获取到的对象信息用json饭序列化
         var userinfo = JSON.parse(str);

         $('.profile img').attr('src',userinfo.tc_avatar);
         $('.profile .text-userName').text(userinfo.tc_name);
     }
 })