/** øŒ≥Ãπ‹¿Ì
 * Created by zzzd on 2017/10/22.
 */
   define([
         'jquery',
         'text!tpls/courseListtpl.html',
         'art',
         'course/images'
   ],function($,text,art,images){
       return function(){
           $.ajax({
                url:'/api/course',
               type:'get',
               success:function(res){
                   if(res.code!=200) throw new Error(res.msg);
                   var $html = $(art.render(text,res))
                       .on('click','.media-object',function(){
                        var cs_id = $(this).parents('.media').attr('cs_id');
                           images(cs_id);
                   })
                   $('.content').html($html);
               }
            })

       }
   })