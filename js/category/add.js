/** 添加分类
 * Created by zzzd on 2017/10/21.
 */
define(['jquery',
    'text!tpls/cateAddtpl.html',
    'art'
],function($,text,art){
    return function(){

        $.ajax({
            url:'/api/category/top',
            type:"get",
            success:function(res){
                if(res.code!=200) throw new Error(res.msg);
                res.result.unshift({cg_id:0,cg_name:'顶级分类'})
                var $html = $(art.render(text,res)).on('submit','form',function(e){
                    e.preventDefault();
                    var FormData = $(this).serialize();
                    $.ajax({
                        url:'/api/category/add',
                        type:'post',
                        data:FormData,
                        success: function (res) {
                            if(res.code!=200) throw new Error(res.msg);
                            //隐藏模态框
                            $html.modal('hide');
                            //模拟点击讲师管理列表
                            $(".list-group a[matter=category]").trigger("click");
                        }
                    })
                }).myModal();
            }
        })


        //$html.on('hidden.bs.modal',function(){
        //    $html.remove();
        //}).appendTo('body').modal();
        //调用自己写的基于jq的插件方法；

    }
})