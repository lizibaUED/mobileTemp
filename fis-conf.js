//modules.parser.less表示设置后缀名为less的文件的parser，第二个less表示使用fis-parser-less进行编译
fis.config.set('modules.parser.less', 'less');
//将less文件编译为css
fis.config.set('roadmap.ext.less', 'css');
//css,js打包
fis.config.set('pack', {
    '/pkg/lib.js': [
        'js/lib/jquery.js',
        'js/lib/underscore.js',
        'js/lib/backbone.js',
        'js/lib/backbone.localStorage.js',
    ]
});
//资源定位
// fis.config.merge({
//     roadmap : {
//         path : [
//             {
//                 //所有的js文件
//                 reg : 'js/**.js',
//                 //发布到/static/js/xxx目录下
//                 release : 'static/js$&'
//             },
//             {
//                 //所有的css文件
//                 reg : 'css/**.css',
//                 //发布到/static/css/xxx目录下
//                 release : 'static/css$&'
//             },
//             {
//                 //所有image目录下的.png，.gif文件
//                 reg : /^\/images\/(.*\.(?:png|gif))/i,
//                 //发布到/static/pic/xxx目录下
//                 release : 'static/pic/$1'
//             }
//         ]
//     }
// });