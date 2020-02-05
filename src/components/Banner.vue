<template>
  <div>
    <br />
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="item in list" :key="item.id">
        <img :src="item.url" height="300px" class="image" />
      </el-carousel-item>
    </el-carousel>
    <br />
    <el-collapse v-for="item in data" :key="item.id">
      <el-collapse-item :title="item.title" class="title">
        <p>{{item.source}}</p>
        <h2>{{item.time}}</h2>
        <h2 v-html="item.body">{{item.body}}</h2>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 0,
          url:
            "http://hbimg.b0.upaiyun.com/adea2ff1cc853dd10c08b1cc4334ff3dcb2484fc15b4c-qsITi8_fw658"
        },
        {
          id: 1,
          url:
            "http://img4.imgtn.bdimg.com/it/u=1603911582,2570097064&fm=15&gp=0.jpg"
        },
        {
          id: 2,
          url:
            "http://www.jshddq.net/UploadFiles/img_1_885253656_2821456355_26.jpg"
        },
        {
          id: 3,
          url:
            "http://www.caisheng.net/UploadFiles/img_2_276660526_1014868384_27.jpg"
        },
        {
          id: 4,
          url:
            "http://5b0988e595225.cdn.sohucs.com/images/20181126/6dd8129b66f7492ea56b2a3a75577262.jpeg"
        },
        {
          id: 5,
          url:
            "http://img4.imgtn.bdimg.com/it/u=1531859331,2193748339&fm=26&gp=0.jpg"
        }
      ],
      data: [
        {
          id: 0,
          title: "回家了！科比遗体移交家属",
          source: "2020-02-05 11:22:45 hupu体育",
          body:
            '<p>原标题：回家了…科比和吉安娜等9人遗体已被移交给家人</p><p>据《美国周刊》此前报道，洛杉矶郡的验尸部门已经将科比和二女儿吉安娜等六人的遗体交还给他们各自的家庭。而洛杉矶郡的验尸部门官网最新结果显示，全部九人遗体都已经被交还。</p><p class="f_center pcenter"><img alt="回家了…科比和吉安娜等6人遗体已被移交给家人" src="https://img1.utuku.china.com/550x0/news/20200205/31825cd1-4d87-4d99-b380-42dfa9bef316.jpg"/><br/></p><p>在此前的科比坠机事故中，一共有9人在空难中丧生。洛杉矶尸检部门已经对死因做出调查，并且给出结果，认定为钝器挫伤的意外事故。</p><p>《美国周刊》报道说，洛杉矶郡的尸检部门已经向他们证实，已经将包括和吉安娜在内的六人遗体交换给他们各自的家庭。其中，在空难中丧生的奥托博利一家三口的遗体暂时没有被交还。</p><p>事发当时，由于空难现场比较惨烈，给辨认尸体带来了很大困难。科比等四人的遗体残骸通过指纹识别被辨认，吉安娜等五人的遗体通过DNA分析检测被识别。</p><p>尽管这是一起巨大的悲剧，但现在遗体能够回到各自家中，对于他们的家人来说，也是一个告慰。接下来，遗体下葬、追悼会等事宜肯定是他们家人需要考虑的事情。</p>'
        },
        {
          id: 1,
          title: "科比正式退役!20年生涯终结 史诗级告别战轰60分",
          source: "2016-04-14 13:02:46　来源: 网易体育",
          body: `<p>对于这一天的到来，大多数人已经早有准备，在比赛之前，4月13日（美国时间）已经被命名为“曼巴日”，洛杉矶的地铁站也改名为“科比站”。在比赛开始前几个小时，就有大批球迷聚集在斯台普斯中心外，他们高呼着科比的名字，在签名版上留下自己想对科比说的话。科比送给这座城市5次总冠军游行，而如今这座城市的人们也自发还给了科比一次纪念游行。</p><p>比赛开始，科比迎来自己漫长告别的终点冲刺。</p><p>也许是为了一次性燃烧掉自己重回赛场的所有欲望，科比在今天爆炸出了惊人的能量，半场22分已经让认为他将会轻松打完最后一战的球迷略微有些吃惊，<span style="text-indent: 2em;">但毕竟如今科比是37岁而非17岁，体力消耗让他明显的露出疲态，以至于第三节在外线连续投出了三不沾——这像是在提醒着所有球迷和科比自己：青春已逝，他的生涯正在无限接近终点。</span></p><p>很巧合，20年前，初出茅庐的他就曾在季后赛对爵士连续投出外线三不沾，科比也在无意之中完成了生涯收尾的呼应，成就了另类的“圆满”。只不过，今天没有漫天的嘘声，只有无限的绿灯，无限的开火权。科比一辈子被批“自私低效”，但在这最后一战，所有人都盼着他做回自己，拿到50分。</p><p>当年的队友斯科特没有煞风景，他将科比继续留在了场上去追逐自己的终点。一如以前无数次这样坚持，今天科比就是要奋力走完生涯的最后一段，不是为了再证明什么，只是不想留遗憾。等到第四节，所有人都开始为科比的得分计数，就像3节62分那天，就像81分那天。他曾经让世界屏息以待过，今天仍是如此。</p><p>奥尼尔此前曾挑战科比在最后一战砍50分，科比当时嘴上拒绝了，但今天他的表现却很诚实，大概他比谁都想要50分。而在最后1分45秒，他做到了。他再次赢了奥尼尔！哪怕自己都可能感觉不到双腿了。但沉浸在满场的“科比”欢呼声中，他依然表情严肃，他太累了，但他还要继续。</p><p>最后31.6秒，他用第50次出手拿到了58分，带着撕裂过的肩膀，断裂过的跟腱，粉碎过的膝盖。</p><p>终于，在他整个职业生涯的最后14.8秒，科比完成了自己在NBA的最后两次罚球，得到了自己职业生涯的第33643分，也是本场的第60分，全场欢腾，已经出局季后赛的<a href="/keywords/6/5/6e564eba/1.html" title="湖人" target="_blank">湖人</a>球迷像是在庆祝获得总冠军。</p>`
        },
        {
          id: 2,
          title: "科比荣膺奥斯卡最佳动画短片 坦言感觉比夺冠更爽",
          source: "2018-03-05 10:42:03　来源: 网易体育",
          body: `<p>科比除了对篮球热爱外，他一直在其它领域有所尝试，特别是文学艺术方面，比如他平时喜欢写作，希望通过创造艺术来给人们带来影响、带来感动。</p><p>“当我退役时，我想成为一个讲述者，讲述我的故事，这也可以让更多的人知道，我可以做除篮球之外其它更多的事情，”在之前接受采访时科比曾这样表示。</p><p class="f_center"><img alt="科比荣膺奥斯卡最佳动画短片 坦言感觉比夺冠更爽" src="http://cms-bucket.nosdn.127.net/d347cd77e81641e5a92e59e93abe1a0e20180305115807.png?imageView&amp;thumbnail=550x0" /><br  /></p><p class="f_center"><img alt="科比荣膺奥斯卡最佳动画短片 坦言感觉比夺冠更爽" src="http://cms-bucket.nosdn.127.net/baa72c056fd04e41a2eac5b6c1ca640e20180305115807.png?imageView&amp;thumbnail=550x0" /><br  /></p><p class="f_center"><img alt="科比荣膺奥斯卡最佳动画短片 坦言感觉比夺冠更爽" src="http://cms-bucket.nosdn.127.net/42dc38d0b07a4d8e8ae104c42a69e6ad20180305115808.png?imageView&amp;thumbnail=550x0" /><br  /></p><p class="f_center"><img alt="科比荣膺奥斯卡最佳动画短片 坦言感觉比夺冠更爽" src="http://cms-bucket.nosdn.127.net/2f1b384ac25446bc9777a780c9a53fb320180305115807.png?imageView&amp;thumbnail=550x0" /><br  /></p><p><!-- AD200x300_1 -->
<div class="gg200x300">
<div class="at_item right_ad_item" adType="rightAd" requestUrl="https://nex.163.com/q?app=7BE0FC82&c=sports&l=133&site=netease&affiliate=sports&cat=article&type=logo300x250&location=12"></div>
<a href="javascript:;" target="_self" class="ad_hover_href"></a>
</div><p>在科比得奖后，湖人官方也向他表示了祝贺：“恭喜科比！！更多的奖杯！！”而科比的前队友奥尼尔也是发了推特，表示：“祝贺科比赢得了他的第一个奥斯卡奖，这太了不起了兄弟，为你骄傲，我好嫉妒啊哈哈哈。”</p><p>此外，韦德、勒夫、魔术师也都送上了祝贺。勒夫表示：“恭喜我的好朋友科比赢得奥斯卡奖，完全配得上！！”随后，勒布朗也更新推特，向科比表达了致敬。</p>`
        }
      ]
    };
  }
};
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>