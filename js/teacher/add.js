/** 添加讲师
 * Created by zzzd on 2017/10/18.
 */
define(['jquery',
    'text!tpls/teacherAddtpl.html'
],function($,text){
    return function(){
        var $html = $(text);
        //为添加讲师绑定一个hidden.bs.modal事件在模态框被隐藏（并且同时在 CSS 过渡效果完成）之后被触发
        $html.on('submit','form',function(e){
            //e.preventDefault();
            var FormData = $(this).serialize();
            $.ajax({
                url:'/api/teacher/add',
                type:'post',
                data:FormData,
                success:function (res){
                    if(res.code!=200) throw new Error(res.msg);
                    //隐藏模态框
                    $html.modal('hide');
                    //模拟点击讲师管理列表
                    $(".list-group a[matter=teacher]").trigger("click");
                }
            });
            return false;
        }).on('shown.bs.modal',function(){
            //添加bootstrap日期控件，初始化
            $html.find('.date-jion').datetimepicker({
                format: 'yyyy-mm-dd',
                //当你选择完一个日期之后是否是自动关闭选择器
                autoclose:true,
                //最小能看到的视图：
                minView:"month",
                //是否显示"今天"按钮
                todayBtn:true,
                language:"zh-CN"
            })
        }).on('hidden.bs.modal',function(){
            //在模态框去除之前去掉日期控件
            $html.find('.date-jion').datetimepicker('remove');
            $html.remove();//删除多余生成的模态框
        }).appendTo('body').modal();
    }
})