/** �˳�����½����
 * Created by zzzd on 2017/10/21.
 */
  define(['jquery'],function($){
      return function(){
          //a.���Ƚ�a��ǩ����ת����ȥ�����ܱ�֤����Ĵ�����������
          $('.login-out').on('click',function(e){
              //��ֹa��ǩ����תҲ������javascript��viod��0����
              e.preventDefault();
              //b������������������
              $.ajax({
                  url:'/api/logout',
                  type:'post',
                  success:function(res){
                      if(res.code!=200) throw new Error(res.msg);
                      //���ͳɹ����Ƴ�cookie��ֵ
                      $.removeCookie('userinfo');
                      //ʵ����ת��½ҳ��
                      location.href = 'login.html';
                  }
              })
          })
      }
  })
