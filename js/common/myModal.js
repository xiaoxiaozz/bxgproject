/**创建一个封装模态框的方法
 * Created by zzzd on 2017/10/21.
 */
    define(['jquery'],function($) {
        $.fn.extend({
            myModal:function(){
                this.on('hidden.bs.modal',function(){
                    this.remove();
                }).appendTo('body').modal();
                return this;  //为了使得这个函数还能继续用链式编程返回本身
            }
        })
    })


//关于jquery插件，分类2种类型
//1、工具类插件：jquery.cookie.js  -->$.cookie  $.removeCookie     $.xxx
//如果要开发一个工具类插件的话，就可以直接给$添加 属性or方法
//                          也可以调用 $.extend(  {  a:function(){},b:function(){}  }  )
//                                      -->相当于给$添加了a和b2个方法

//2、DOM操作类插件：bootstrap.js   -->$(...).modal();
//要想开发一个DOM操作类插件，可以直接给$.fn($.prototype)添加  "属性or方法"
//                  也可以 $.fn.extend( {  f1:function(){},f2:function(){}  }  )
