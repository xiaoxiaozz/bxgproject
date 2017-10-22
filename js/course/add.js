/**Ìí¼Ó¿Î³Ì
 * Created by zzzd on 2017/10/22.
 */
   define([
        'jquery',
        'text!tpls/courseAddtpl.html',
   ],function($,text){
       return function (){
            var $html = $(text);
           $html.on('submit','form',function(e){
               e.preventDefault();
               var FormData = $(this).serialize();
               $.ajax({
                   url:'/api/course/create',
                   type:'post',
                   data:FormData,
                   success:function(res){
                       if(res.code!=200) throw new Error(res.msg);
                       $html.modal('hide');
                       $('.list-group a[matter=course]').trigger('click');
                   }
               })
           }).myModal();
       }
   })