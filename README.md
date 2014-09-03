<font size='12px'>
this is a plug-in that help you to display the numbers. 
the number will scroll up or down once the change happened.
if you want to change the number ,you need to set a interval to start the change every time you need and set the new number at the same time.
The demo.html will tell you how to use the plugin;

这是一个用来展示数字的插件。
他的效果就是，当数字发生变化的时候，数字会上下滚动而不是直接切换。
如果你需要改变数字，可以设置一个interval来每隔段时间去改变一次，当然，每次要传入新的数字
请查看demo.html，他将告诉你怎么使用

####参数说明：
#####during : 2000,//滚动延迟,(scroll delay)
#####height:30,//高度,(height)
#####width:20,//宽度,(width)
#####autoAdd:0,自动补全(auto add prefix,0 for default. For example,when you set the autoAdd to  5,then the plugin will change 334 to 00,334)
#####curNumber:100//数字(the number to display)

####补充说明：
#####如果需要自适应，需要根据屏幕宽度设定高度和宽度即可
#####If you want the plugin to autoSize,just resize the height and width when the browser has resized.

####已知问题：

#####暂不支持小数
#####进位分隔符垂直位置会出现问题，可以在页面针对性的设置
#####字体大小使用了vw自适应，若浏览器不支持，需要自行修改

#####Not ready for decimal at present;
#####The comma is not placed well sometimes;
#####I use vw to set the font,you need to edit again if it isn't suported by your browser.
</font>
