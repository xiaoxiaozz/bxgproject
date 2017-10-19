/**查看讲师
 * Created by zzzd on 2017/10/18.
 */
define(['jquery',
    'text!tpls/teacherShowtpl.html',
    'art'
],function($,text,art){
    return function (id){
        $.ajax({
            url:'/api/teacher/view',
            type:'get',
            data:{
                tc_id:id
            },
            success: function (res){
                //console.log(res);
                if(res.code !=200) throw new Error(res.msg);
                var html = art.render(text,res.result);

                var $html = $(html).on('hidden.bs.modal',function(){
                    //$(this).remove();
                    //因为链式编程的返回值还是这个元素本身所以可以定义一个变量来表达本身
                    $html.remove();
                }).appendTo('body').modal();

            }
        })
    }
})