create database hgmall;
# 用户
create TABLE users
(
    uId    INT          NOT NULL AUTO_INCREMENT,
    uName  VARCHAR(50)  NOT NULL,
    uEmail VARCHAR(200) NOT NULL,
    uPsw   VARCHAR(200) NOT NULL,
    PRIMARY KEY (uId)
);

# 所有商品
create TABLE product
(
    pId    INT          NOT NULL AUTO_INCREMENT,
    uName  VARCHAR(50)  NOT NULL,
    pImage VARCHAR(500) NOT NULL,
    pTitle VARCHAR(50)  NOT NULL,
    pPrice VARCHAR(100) NOT NULL,
    pText  VARCHAR(500) NOT NULL,
    pTime  VARCHAR(60)  NOT NULL,
    PRIMARY KEY (pId)
);

# 订单
create TABLE allorder
(
    oId       INT          NOT NULL AUTO_INCREMENT,
    pImage    VARCHAR(500) NOT NULL,
    pTitle    VARCHAR(50)  NOT NULL,
    oBuyName  VARCHAR(50)  NOT NULL,
    oSellName VARCHAR(50)  NOT NULL,
    oTime     VARCHAR(50)  NOT NULL,
    PRIMARY KEY (oId)
);

insert into users
values (1, "用户", "123456789@qq.com", "123");
insert into users
values (null, "用户2", "987654321@qq.com", "123");
insert into users
values (null, "小米", "546987123@qq.com", "123");
insert into product
values (1, "小米", "Redmi Note 9.jpg", "Redmi Note 9 5G 小米手机", "1299", "4800万超清三摄 云墨灰 6GB+128GB 游戏智能手机 小米 红米", "2020-2-2");
insert into product
values (null, "小米", "mi11.jpg", "小米11 5G", "4299", "小米11 5G 骁龙888 2K AMOLED四曲面柔性屏 1亿像素 55W有线闪充 50W无线闪充 8GB+256GB 蓝色 游戏手机", "2020-2-2");
insert into product
values (null, "用户", "AirpPods.jpg", "Apple 苹果 AirPods Pro 主动降噪无线蓝牙耳机", "1499", "Apple 苹果 AirPods Pro 主动降噪无线蓝牙耳机", "2020-2-2");
insert into product
values (null, "用户", "huaweiMusic.jpg", "华为音箱小艺音响", "231", "华为音箱小艺音响丹拿音质WIFI蓝牙AI人工智能语音2机器人遥控闹钟提醒多功能桌面通话音响低音炮 AI功能-星云白 数码", "2020-2-2");
insert into product
values (null, "用户2", "wj.jpg", "益米 儿童男孩玩具 挖掘车", "189", "益米 儿童男孩玩具 挖掘车 挖掘机收纳停车场仿真挖土机模型塔吊工程车 轨道玩具 新年礼物", "2020-2-2");
