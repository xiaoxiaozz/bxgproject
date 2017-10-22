/** 编辑分类管理
 * Created by zzzd on 2017/10/22.
 */
define(['jquery',
    'text!tpls/cateEdittpl.html',
    'art'
],function($,text,art){
    return function(id){
        $.ajax({
            url:'/api/category/edit',
            type:'get',
            data:{cg_id:id},
            success:function(res){
                if(res.code!=200) throw new Error(res.msg);
                //添加一条顶级分类的固定数据
                res.result.top.unshift({cg_id:0,cg_name:'顶级分类'});
                var $html = $(art.render(text,res.result));
                $html.on('submit','form',function(e){
                    e.preventDefault();
                    var FormData = $(this).serialize();
                    $.ajax({
                        url:'/api/category/modify',
                        type:'post',
                        data:FormData,
                        success:function(res){
                            if(res.code!=200) throw new Error(res.msg);
                             $html.modal('hide');
                            $(".list-group a[matter=category]").trigger("click");
                        }
                    })
                }).myModal();
            }
        })
    }
})