/**����һ����װģ̬��ķ���
 * Created by zzzd on 2017/10/21.
 */
    define(['jquery'],function($) {
        $.fn.extend({
            myModal:function(){
                this.on('hidden.bs.modal',function(){
                    this.remove();
                }).appendTo('body').modal();
                return this;  //Ϊ��ʹ������������ܼ�������ʽ��̷��ر���
            }
        })
    })


//����jquery���������2������
//1������������jquery.cookie.js  -->$.cookie  $.removeCookie     $.xxx
//���Ҫ����һ�����������Ļ����Ϳ���ֱ�Ӹ�$��� ����or����
//                          Ҳ���Ե��� $.extend(  {  a:function(){},b:function(){}  }  )
//                                      -->�൱�ڸ�$�����a��b2������

//2��DOM����������bootstrap.js   -->$(...).modal();
//Ҫ�뿪��һ��DOM��������������ֱ�Ӹ�$.fn($.prototype)���  "����or����"
//                  Ҳ���� $.fn.extend( {  f1:function(){},f2:function(){}  }  )
