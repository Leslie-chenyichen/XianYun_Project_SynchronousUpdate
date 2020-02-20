/* **************************************************************************************************************************
【特别注意：这里是很重要的(高德地图)的相关知识•第一次使用•不太会使用•多写些注释•多注意老师写的文档与功能的参考文档！
扩展知识1：
  Element-Ul是饿了么前端团队推出的一款基于Vue.js 2.0 的桌面端UI框架，手机端有对应框架是Mint UI。
    A.1现在的目标是：把高德地图提供的免费后台API返回的数据后，引入到Nuxt.js页面中去，把这个高德地图渲染在当前的页面中去。
    以供了双向绑定用户输入的城市名，然后是在页面中等待3秒数据重新刷新吧？接着是显示出于用户当时输入的城市加于准确定位
扩展知识2：
  vue在调用高德地图共分以下四步：分别为
    B.1高德地图(现已被阿里云收购了)，先是在高德地图开发者平台上：注册个人用户后＞服务升级＞自定义地图＞应用Key名＞申请key,这个项目的key，
       我当前这个酒店模块•页面中运用的Key的秘钥是【闲云旅游高德地图--Key:"7b5c78bb96029a264caaf798c4a5bd12"】
       注意好了，这个key的值是不能少多引号的
    B.2 安装vue-amap是一套基于Vue 2.0和高德地图的地图组件。
    B.3使用组件去调用地图;注：这三步是非常重要的，多看多记，第一次学习这个地图•用心点，不要只求结果，要要的是首先理解，英文的意思
    B.4在配置文件nuxt.cofig.js中的plugins里添加刚才写的vue-map.js文件，写上这句'@/plugins/vue-map',
扩展知识3：
  当前页面运用了那些组件•插件说明：
    C.1 AMap.Geolocation：定位服务插件。融合了浏览器定位、高精度IP定位、安卓定位sdk辅助定位等多种手段，提供了获取当前准确位置、
                     获取当前城市信息、持续定位(浏览器定位)等功能。用户可以通过两种当时获得定位的成败和结果
    C.2 AMap.Marker:覆盖物(ToolBar)是指叠加在地图底图之上的一些常见要素。
    C.3 AMap.ToolBar:打开高德地图时通常会看到在左上角有一个导航条(ToolBar)，这个就是今天所要做的地图控件
    C.4 AMap.Circle :高德地图WEB端，在所画的圆（Circle）内显示在圆（Marker）内的点
    C.5 AMap.PolyLine:高德地图(Polyline) 实时轨迹 
*/
/* *************************************************************************************************************************/
/* **************************************************************************************************************************
注1：【特别注意了：如果做测试时，先拿自已的的副文件来试手，注：千万不要拿•清宇•的源文件直接就开始做了，吸取上次的教训】
注2：这是方法看了csdn•大佬们分析•第一次使用•尽量做详细•现在这里已经完成了在酒店模块的页面中已显示出来•下一步要绑定用户输入【上海市】城市值的数据
注3：这里是引入了vue的原框架，原因：是为是使用Element-Ul中的UI框架
注4:这个页面有时是要按F5刷新的，
**************************************************************************************************************************************************
*/
//下面区域是开始做的主内容了,注：高德地图免费给用户提供的后台API只提供中国国内，除外无数据提供
//注：这里是引入了VUE的原始框架，目的就是为了就是使用Element-Ul中的一些比较实用比较好看的组件
import Vue from 'vue';
//注：这里是引入了名为VueAMap：覆盖物的组件
import VueAMap from 'vue-amap';
//注：这里是使用vue-amap：覆盖物的组件
Vue.use(VueAMap);

//下面这里是初始化这个vue-amap高德地图的组件
if (!Vue.prototype.$isSERVER) {
  VueAMap.initAMapApiLoader({
    //高德地图的key: 我当时注册的应用名是：闲云旅游高德地图Key
    Key:"7b5c78bb96029a264caaf798c4a5bd12",
    //插件集合，【AMap.Geolocation：】
    plugin: ['AMap.Geolocation', 'AMap.Marker', 'AMap.ToolBar', 'AMap.Circle', 'AMap.PolyLine'],
    uiVersion: '1.0', //使用代码更新 UIVersion为1.0版本 属性
    // 高德 sdk 版本，默认为 1.4.4这个就不太搞的懂了
    v: '1.4.8'
  })
}
