 
# jcloud-ui-modules
###### Internal project use, not recommended to spread

#### 项目说明
* 一套基于[vue](http://cn.vuejs.org/)+[element-ui](http://element.eleme.io/#/zh-CN)的公共ui 
* 适用于PC控制台/管理系统类型的项目

#### 使用说明

> 1.安装依赖

`npm install jcloud-ui-modules --save`
    
> 2.在入口文件main.js中引入样式文件 

`import 'jcloud-ui-modules/dist/index.css'` 
    

#### 如何修改
* 在node_modules模块中找到jcloud-ui-modules
* 在文件路径/coverStyle/下子文件夹中修改scss文件
* 最后在total.scss文件@import引入相应文件即可 


#### 文件路径
    根目录/
    |----- coverStyle    //scss样式文件
    |----- dist          //项目生成好的css存放地



#### devlog:

###### Fri May 12 09:29:30 CST 2017
1.1.8版本更新 更新readme说明 publish

###### Thu May 11 18:25:22 CST 2017
1.1.6版本更新 将引用的精灵图转为base64 解决相对路径引入麻烦问题 

###### Thu May 11 13:55:55 CST 2017
1.1.4版本更新 添加项目依赖 优化引入方式
