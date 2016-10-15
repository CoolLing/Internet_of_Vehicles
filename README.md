# Internet_of_Vehicles
第五届 中国软件杯 大学生程序设计大赛 “车联网移动APP”赛题作品 http://www.cnsoftbei.com/

“车联网”移动应用软件

简介
开发团队甲天下 团队成员(3人) 欧威健、刘水清、凌海彬
 
界面浏览

登录界面 / 注册界面

index  图片 1

主界面 / 添加车辆

main  addvehicle

地图界面 / 导航

map  mapfind

违章查询 / 加油

money  oi

设置

set

赛题介绍

比赛要求

目标实现功能

以下主要功能： 
1. 注册，登陆，个人信息
2. 可预约加油 
3. 地图实时显示当前汽车位置，并显示周围的加油站 
4. 根据路况选择路线 
5. 维护车辆信息 
6. 开车时可听音乐 
7. 交通违章信息

功能性需求

1. 注册，登录，个人信息

2. 预约加油：

要求：

绑定一个汽车信息 （个人可有多辆汽车）
含有姓名，时间，加油站，加油类型，加油数量（升或金额）等信息。
把数据发送给服务器并存储，生成二维码。此预约订单在APP显示二维码，以便去加油站扫码加油。
APP可查看提交后的预约订单详情
3. 地图实时显示当前汽车位置，并显示周围的加油站

要求：

以手机为载体作为汽车，实时更新当先位置
并显示周围的加油站和显示加油站相关信息
4. 根据路况选择最优线路

要求：

起始点为：可输入地址或当前位置
目的地：可输入地址
起始和目的地可互换
给予最优线路，并可实时告知当前位置 ### 5. 维护车辆信息 #### 要求：
可维护多辆个人汽车。
假设汽车屏幕可提供此车辆当前信息的二维码,可供用户扫码，APP可扫码并把个人汽车信息维护到手机里面。（因此要求参赛者自己生成一个二维码，然后通过手机扫码完成此功能。）
信息包含但不限于：汽车品牌、标志、型号、车牌号码、发动机号、车身级别（几门几座）、里程数、汽油量（%）、发动机性能（好、异常）、变速器性能（好、异常），车灯（好、坏）。
汽车信息也需要维护到服务器端的数据库里。
要求把以下通知及时推送到手机端
当服务器端的数据库里记录的汽油量少于20%时，给手机发送通知告诉汽车车主该去加油
服务器端的数据库里记录的里程数每超过15000公里倍数时，给手机发送通知告诉汽车车主需要进行维护
当服务器端的数据库里记录的发动机出现异常、变速器出现异常或车灯有坏的时候，给手机发送通知告诉汽车车主需要进行维修 ### 6. 可播放音乐 #### 要求：
进入APP的时候，音乐自动播放
出APP的时候，音乐结束
音乐轮播
请选项合适的音乐

7. 交通违章信息

要求：

通过之前被绑定的车牌号和发动机号，调用（http://www.cheshouye.com/api.html（参考））提供的接口，获得违章信息并明显。 ## 非功能性需求
优秀的用户体验和功能设计。最终能达到简洁，大方，美观，用户体验良好的作品为佳。
基于Android 或IOS的原生开发或混合开发（Android 或 IOS二选一即可）。
参赛者可根据自身能力和时间加入额外功能，如预约支付（支付宝，微信钱包，银联等）等。额外功能将占据一定的评比分数
开发进度记录

2016.5.10 开发用户系统

Date: Thu Jun 16 16:11:13 2016 +0800

完成开发
Date: Wed Jun 8 19:32:21 2016 +0800

二维码功能 完成
Date: Wed Jun 8 10:15:43 2016 +0800

二维码功能模块 DEV1
Date: Wed Jun 1 16:06:25 2016 +0800

主界面模块     车辆模块
Date: Wed Jun 1 13:17:35 2016 +0800

设置模块 完成
Date: Wed Jun 1 00:02:42 2016 +0800

设置模块 DEV3  第二个界面完成
Date: Wed Jun 8 10:15:43 2016 +0800

二维码功能模块 DEV1
Date: Wed Jun 1 16:06:25 2016 +0800

主界面模块     车辆模块
Date: Wed Jun 1 13:17:35 2016 +0800

设置模块 完成
Date: Wed Jun 1 00:02:42 2016 +0800

设置模块 DEV3  第二个界面完成
Date: Tue May 31 23:33:40 2016 +0800

设置模块 DEV2   第一个界面完工 个人资料界面ING
Date: Wed Jun 8 10:15:43 2016 +0800

二维码功能模块 DEV1
Date: Wed Jun 1 16:06:25 2016 +0800

主界面模块     车辆模块
Date: Wed Jun 1 13:17:35 2016 +0800

设置模块 完成
Date: Wed Jun 1 00:02:42 2016 +0800

设置模块 DEV3  第二个界面完成
Date: Tue May 31 23:33:40 2016 +0800

设置模块 DEV2   第一个界面完工 个人资料界面ING
Date: Tue May 31 22:05:28 2016 +0800

设置模块DEV1素材 带BUG
Date: Thu May 26 17:29:01 2016 +0800

违章查询模块 DEV2 完成查询他人
Date: Thu May 26 15:05:34 2016 +0800

违章模块 DEV1
Date: Tue May 24 17:38:24 2016 +0800

导航模块  增加导航定位
Date: Tue May 24 17:24:08 2016 +0800

导航模块 完成  界面第一次美化
Date: Tue May 24 16:51:04 2016 +0800

导航模块  完成  界面待优化
Date: Tue May 24 16:01:19 2016 +0800

导航魔抗 DEV2
Date: Mon May 23 19:15:36 2016 +0800

导航模块 DEV2
Date: Mon May 23 19:06:29 2016 +0800

地图导航 DEV1
