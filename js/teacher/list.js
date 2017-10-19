/** 讲师列表
 * Created by zzzd on 2017/10/18.
 */
 define(['jquery',
         //requirejs官方提供了text插件查看模板的内容(text的路径!模板的路径)
         'text!tpls/teacherListtpl.html',
         'art',
          'teacher/show',
          'teacher/add',
          'teacher/edit',
          'teacher/status'
        ],function($,text,art,teacherShow,teacherAdd,teacherEdit,teacherStatus){
     return function (){
         //将模板内容渲染在讲师列表中
         //$('.content').html(text);
         //使用ajax获取数据
         $.ajax({
             url:'/api/teacher',
             type:'get',
             success:function (data) {
                 //console.log(data);
                 //这样写减少了{}的嵌套
                 //if(data.code != 200) return console.log(data.msg);
                 if (data.code != 200) throw  new Error(data.msg); //抛出异常
                 var res = data.result;  //是一个数组
                 //将数据编译到模板中
                 var html = art.render(text, {r: res})
                 //给查看按钮绑定点击事件
                 var $panel = $(html);
                 //第一种事件委托方法
                 //$($panel).on('click','.btn-show',function(){
                 //    console.log('....');
                 //})
                 //第二种
                 $panel.on('click', '.btn-show', function () {
                     //将这个模板页面的tc_id实参传过去
                     var tc_id = $(this).parent().attr('tc_id');
                     //查看讲师
                     teacherShow(tc_id);
                 }).on('click', '.btn-add', function () {
                     //添加讲师
                     teacherAdd();
                 }).on('click', '.btn-edit', function () {
                     var tc_id = $(this).parent().attr('tc_id');
                     //编辑讲师
                     teacherEdit(tc_id);
                 }).on('click', '.btn-status', function () {
                     //保存这个按钮
                      var $btn = $(this);
                     //注销/启用按钮的变换
                     var tc_id = $(this).parent().attr('tc_id');
                     var tc_status = $(this).parent().attr('tc_status');
                     teacherStatus(tc_id, tc_status,function(status){
                            //将账户状态文本值用新的状态码改了
                          $btn.parent().siblings('.tc-status').text(status==0?'启用':'注销');
                          $btn.text(status==0?'注销':'启用');
                          //将按钮的状态码与数据库同步
                         $btn.parent().attr('tc_status',status);
                     })
                 })
                 $('.content').html($panel);
             }
         })
     }
 })