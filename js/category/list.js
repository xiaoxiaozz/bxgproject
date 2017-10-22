/** 课程分类列表
 * Created by zzzd on 2017/10/21.
 */
   define(['jquery',
            'text!tpls/categoryListtpl.html',
           'art',
           'category/add',
           'category/edit'
          ],function($,text,art,cateAdd,cateEdit){
       return function(){
           $.ajax({
               url:'/api/category',
               type:'get',
               success: function(res){
                   if(res.code!=200) throw new Error(res.msg);
                   var $catelist = $(art.render(text,res));
                    $catelist.on('click','.btn-add',function(){
                        cateAdd();
                    }).on('click','.btn-edit',function(){
                        var cg_id = $(this).parent().attr('cg_id');
                        cateEdit(cg_id);
                    })
                   $('.content').html($catelist);
               }
           })
       }
   })