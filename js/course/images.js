/** 切换图片
 * Created by zzzd on 2017/10/22.
 */
define([
    'jquery',
    'text!tpls/courseImagetpl.html',
    'art'
],function($,text,art){
    return function(id){
        $.ajax({
            url:'/api/course/picture',
            type:'get',
            data:{cs_id:id},
            success:function(res){
                if(res.code!=200) throw new Error(res.msg);
                var $html = $(art.render(text,res.result))
                $('.content').html($html);
                //引入上传文件插件
                $html.find('#fileImage').uploadify({
                    formData :{cs_id:id},  //定义在文件上传时需要一同提交的其他数据对象。
                    //服务器接收文件流的name名称
                    fileObjName:"cs_cover_original",
                    auto:true,  //当文件被添加到列队中是会自动上传
                    buttonText:'选择图片', //定义按钮的文本
                    multi:false,     //每次只能选一个图片 ，默认为true 多选
                    //指定上传过程中看到的进度模板
                    itemTemplate:"<span></span>",
                    fileTypeExts : '*.gif; *.jpg; *.png',   //指定了上传的时候可以选择的文件类型
                    swf   : '/bxg07/assets/uploadify/uploadify.swf', //指向本地的swf文件
                    //处理请求的服务器地址
                    uploader : '/api/uploader/cover',
                    //上传成功后触发的事件
                    onUploadSuccess:function(){
                        //上传成功后应跳转到课程管理页面（就是默认点击课程管理的按钮）
                        $(".list-group a[matter=course]").trigger("click");
                    }
                })
            }
        })
    }
})