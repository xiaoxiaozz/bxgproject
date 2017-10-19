/**
 * Created by zzzd on 2017/10/19.
 */
  define(['jquery',
          'text!tpls/teacherEdittpl.html',
          'art'
         ],function($,text,art){
        return function (id) {
            $.ajax({
                url:"/api/teacher/edit",
                type:'get',
                data:{tc_id:id},
                success:function(res){
                    if(res.code!=200) throw new Error(res.msg);
                    var html = art.render(text,res.result);
                   var $html =  $(html).on('submit','form',function(e){
                       e.preventDefault();
                            var FormData = $(this).serialize();
                       $.ajax({
                           url:'/api/teacher/update',
                           type:"post",
                           data:FormData,
                           success:function(res){
                               if(res.code!=200) throw new Error(res.msg);
                                //隐藏模态框
                                $html.modal('hide');
                               //模拟点击事件
                               $(".list-group a[matter=teacher]").trigger("click");
                           }
                       })
                   }).on('shown.bs.modal',function(){
                        $html.find('.date-jion').datetimepicker({
                            format:'yyyy-mm-dd',
                            //选择完后自动关闭日期控件
                            autoclose:'true',
                            minView:'month',
                            todayBtn:'true',
                            language:'zh-CN'
                        })
                   }).on('hidden.bs.modal',function(){
                       //在模态框容器去除之前去掉日期控件容器
                       $html.find('.date-jion').datetimepicker('remove');
                       $html.remove();
                   }).appendTo('body').modal();
                }
            })
        }
  })