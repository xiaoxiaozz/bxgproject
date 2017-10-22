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
        datelang:'../assets/bootstrap-datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN',
        cookie:'lib/jquery.cookie',
        upload:'../assets/uploadify/jquery.uploadify'
    },
    shim:{
        //配置某个插件依赖于一个插件
        bootstrap:{
            deps:['jquery']
        },
        datelang:{
            deps:['datetimepicker']
        },
        upload:{
            deps:['jquery']

        }
    }
})

require(['jquery',
    'teacher/list',
    'common/login',
    'common/logout',
    'category/list',
    'course/list',
    'course/add',
    'common/myModal',
    'bootstrap',
     'datetimepicker',
    'datelang',
    'cookie',
    'upload'
     ],function($,teacherList,login,logout,categoryList,courseList,courseAdd){

      //获取登陆界面的信息
       login();

    //实现菜单栏内容切换
    $('.list-group').on('click','a',function(){
        //为自定义属性定义一个变量
        var value = $(this).attr('matter');
        //使用switch 来选择
        switch (value){
            case 'teacher':
                teacherList();  //讲师列表
                break;
            case 'course':

                courseList();   //课程列表
                break;
            case 'addcourse':

                courseAdd();  //添加课程
                break;
            case 'category':

                 categoryList();   // 课程分类
                break;
            case 'chart':
                $('.content').html('图表统计');
                break;
        }
        $(this).addClass('active').siblings().removeClass('active');
    })
    //让页面一打开就是讲师管理的界面
    $(".list-group a[matter=teacher]").trigger("click");

    // 实现退出功能
       logout();
})