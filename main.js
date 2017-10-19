/**
 * Created by zzzd on 2017/10/17.
 */
require.config({
    //设置基础路径
    baseUrl: 'js',
    paths:{
        //配置一些常用的第三方模块路径(基于基础路径)不能有后缀有了会报错
        jquery :'lib/jquery-2.1.4',
        bootstrap:'../assets/bootstrap/js/bootstrap',
        //模板引擎
        art :'lib/template-web',
        tpls:'../tpls',
        text:'lib/text',
        datetimepicker:'../assets/bootstrap-datetimepicker/js/bootstrap-datetimepicker',
        datelang:'../assets/bootstrap-datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN'
    },
    shim:{
        //配置某个插件依赖于一个插件
        bootstrap:{
            deps:['jquery']
        },
        datelang:{
            deps:['datetimepicker']
        }
    }
})

require(['jquery',
    'teacher/list',
    'bootstrap',
     'datetimepicker',
    'datelang'
     ],function($,teacherList){
    //实现菜单栏内容切换
    $('.list-group').on('click','a',function(){
        //为自定义属性定义一个变量
        var value = $(this).attr('matter');
        //使用switch 来选择
        switch (value){
            case 'teacher':
                teacherList();
                break;
            case 'course':
                $('.content').html('课程管理');
                break;
            case 'addcourse':
                $('.content').html('添加课程');
                break;
            case 'category':
                $('.content').html('课程分类');
                break;
            case 'chart':
                $('.content').html('图表统计');
                break;
        }
        $(this).addClass('active').siblings().removeClass('active');
    })
    //让页面一打开就是讲师管理的界面
    $(".list-group a[matter=teacher]").trigger("click");
})