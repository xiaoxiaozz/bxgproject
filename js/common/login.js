/** ��ȡ��½�������Ϣ
 * Created by zzzd on 2017/10/21.
 */
 define(['jquery'],function($){
     return function(){
         //  var str = sessionStorage.getItem('userinfo');
         var str = $.cookie('userinfo');

         // �ж����û�л�ȡ����Ϣ�ͷ��ص�½ҳ���½
         if(!str) return location.href= 'login.html';
         // ���յ�����Ϣ��ִ������Ĵ���
         // ����ȡ���Ķ�����Ϣ��json�����л�
         var userinfo = JSON.parse(str);

         $('.profile img').attr('src',userinfo.tc_avatar);
         $('.profile .text-userName').text(userinfo.tc_name);
     }
 })