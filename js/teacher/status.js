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
                  //�ûص���������õ�״̬ʵ�δ���list.js��
                  callback(status);
              }
          })
      }
  })