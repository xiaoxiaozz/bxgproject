/**
 * Created by zzzd on 2017/10/19.
 */
  define([
        'jquery',

  ],function($){
      return function(id,status,callback){
          $.ajax({
              url:'/api/teacher/handle',
              type:'post',
              data:{tc_id:id,tc_status:status},
              success: function(res){
                  if(res.code!=200) throw new Error(res.msg);
                    var status = res.result.tc_status;
                  //用回调函数将获得的状态实参传到list.js中
                  callback(status);
              }
          })
      }
  })