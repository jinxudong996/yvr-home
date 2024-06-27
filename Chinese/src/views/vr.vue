<template>
  <div style="background: #000;">
    <headertop></headertop>
    <div class="allWzNyDw">
      <div class="w_1760 allWzNyDwCon">
        <div class="allWzNyDwLeft">
          <!-- <img src="../assets/images/home.png" alt="" />
          首页
          <span class="allWzNyDwConIco">&nbsp;</span>
          VR
          <span class="allWzNyDwConIco">&nbsp;</span>
          YVR 2 -->
        </div>
        <div class="allWzNyDwRight">
          <!-- 概览
          <span class="allWzNyDwRightIco">&nbsp;</span>
          参数
          <span class="allWzNyDwRightIco">&nbsp;</span>
          包装清单
          <span class="allWzNyDwRightIco">&nbsp;</span>
          常见问题 -->
          <div class="allBtn active w118"><a href="https://mall.jd.com/index-1000425743.html"
              target="_blank">购买产品<span>&nbsp;</span></a></div>
        </div>
      </div>
    </div>
    <!-- <div style="height: 100px;"></div> -->
    <div class="vrDxNgS1WcBj" id="vrDxNgS1WcBj" :style="vrDxNgS1WcBjBg">
      <div class="vrDxNgS1Wc" id="vrDxNgS1Wc">
        <div class="vrTx11" id="vrTx11">
          <img class="vrDxNgS1WcImg" id="vrDxNgS1WcImg_0" src="../assets/images/bj9.jpg" alt="">
          <img class="vrDxNgS1WcImg" id="vrDxNgS1WcImg_2" src="../assets/images/bj11.jpg" alt="">
          <img class="" id="vrDxNgS1WcImg_3" src="../assets/images/bj12.jpg" alt="">

          <div class="yvrSwiperCon_1" id="vrTx_1">
            <img class="img100" src="../assets/images/YVR2.png" alt="" />
          </div>
          <div class="yvrSwiperCon_2" id="vrTx_2">
            <div id="animate1"><img src="../assets/images/yvr2img.png" alt="" /></div>
          </div>
          <div class="yvrSwiperCon_3" id="vrDxNgS1WcBut">
            <div class="allBtn addBk videoOpen" source="/static/video/video.mp4"><a href="javascript:void(0);">观看影片<span>&nbsp;</span></a></div>
            <div class="allBtn addBk"><a href="https://mall.jd.com/index-1000425743.html"
                target="_blank">购买产品<span>&nbsp;</span></a></div>
          </div>

          <div class="colorfff yvrSwiperCon_4" id="vrTx_3">
            <div class="f72 bolder yvrSwiperCon_4_1">10 年沉淀</div>
            <div class="f30 yvrSwiperCon_4_2">核心研发人员来自硅谷智能算法团队<br>
              拥有 10 年 VR 行业经验沉淀</div>
          </div>
          <div class="yvrSwiperCon_5" id="vrTx_4">
            <img class="img100" src="../assets/images/img4.png" alt="" />
          </div>
          <div class="colorfff yvrSwiperCon_6 yvrSwiperCon_7" id="vrTx_6">
            <div class="f72 bolder yvrSwiperCon_6_1">全球首款</div>
            <div class="f30 yvrSwiperCon_6_2">正式量产的 Pancake 光学 VR 一体机</div>
          </div>
          <div class="colorfff yvrSwiperCon_8" id="vrTx_7">
            <div class="f72 bolder yvrSwiperCon_6_1">太阳镜一体化设计</div>
            <div class="f30 yvrSwiperCon_6_2">荣获多项国内外工业设计大奖</div>
            <div class="yvrSwiperCon_8_3"><img src="../assets/images/img6.png" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
    <div style="position: relative;z-index: 15;background: #000;">
      <!-- 移动端 -->
      <!-- Swiper -->
      <div class="swiper yvrSwiper" id="yvrSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper-no-swiping" :style="yvrSwiperBg1">
            <div class="yvrSwiperCon_1">
              <div class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s"
                swiper-animate-delay="0s">
                <img class="img100" src="../assets/images/YVR2.png" alt="" />
              </div>
            </div>
            <div class="yvrSwiperCon_2">
              <div class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s"
                swiper-animate-delay="0.2s"><img src="../assets/images/yvr2img.png" alt="" /></div>
            </div>
            <div class="yvrSwiperCon_3">
              <div class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s"
                swiper-animate-delay="0.4s">
                <div class="allBtn addBk videoOpen" source="/static/video/video.mp4"><a href="javascript:void(0);">观看影片<span>&nbsp;</span></a></div>
                <div class="allBtn addBk"><a href="https://mall.jd.com/index-1000425743.html"
                    target="_blank">购买产品<span>&nbsp;</span></a></div>
              </div>
            </div>
          </div>
          <div class="swiper-slide swiper-no-swiping" :style="yvrSwiperBg2" style="background-position: bottom center;">
            <div class="colorfff yvrSwiperCon_4">
              <div class="ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="0.5s"
                swiper-animate-delay="0s">
                <div class="f72 bolder yvrSwiperCon_4_1">10 年沉淀</div>
                <div class="f30 yvrSwiperCon_4_2">核心研发人员来自硅谷智能算法团队<br>
                  拥有 10 年 VR 行业经验沉淀</div>
              </div>
            </div>
            <div class="yvrSwiperCon_5">
              <div class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s"
                swiper-animate-delay="0s">
                <img class="img100" src="../assets/images/img4.png" alt="" />
              </div>
            </div>
          </div>
          <div class="swiper-slide swiper-no-swiping" :style="yvrSwiperBg3" style="background-position: top center;">
            <div class="colorfff yvrSwiperCon_6 yvrSwiperCon_7">
              <div class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s"
                swiper-animate-delay="0s">
                <div class="f72 bolder yvrSwiperCon_6_1">全球首款</div>
                <div class="f30 yvrSwiperCon_6_2">正式量产的 Pancake 光学 VR 一体机</div>
              </div>
            </div>
          </div>
          <div class="swiper-slide swiper-no-swiping" :style="yvrSwiperBg4" style="background-position: top center;">
            <div class="colorfff yvrSwiperCon_8">
              <div class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s"
                swiper-animate-delay="0s">
                <div class="f72 bolder yvrSwiperCon_6_1">太阳镜一体化设计</div>
                <div class="f30 yvrSwiperCon_6_2">荣获多项国内外工业设计大奖</div>
                <div class="yvrSwiperCon_8_3"><img src="../assets/images/img6.png" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dlgRzNr" id="dlgRzNr">
        <div class="dlgRzNrbj_1">
          <div class="dlgRzNrLeft">
            <div class="dlgRzNrImgMk wow fadeInUp">
              <img class="img100" src="../assets/images/img9.png" alt="" />
              <div class="dlgRzNrImgMkWz">
                <div class="f36 dlgRzNrImgMkWz_1">SGS 低蓝光护眼权威认证</div>
                <div class="f20 dlgRzNrImgMkWz_2">四周不变形，边缘不模糊，久戴不头晕</div>
              </div>
            </div>
          </div>
          <div class="dlgRzNrRig">
            <div class="dlgRzNrRigTop">
              <div class="dlgRzNrImgMk dlgRzNrRigTop_1 wow fadeInUp">
                <img class="img100" src="../assets/images/img10.png" alt="" />
                <div class="dlgRzNrImgMkWz">
                  <div class="f36 dlgRzNrImgMkWz_1">两片式Pancake镜片</div>
                  <div class="f20 dlgRzNrImgMkWz_2">四周不变形，边缘不模糊，久戴不头晕</div>
                </div>
              </div>
              <div class="dlgRzNrImgMk dlgRzNrRigTop_2 wow fadeInUp">
                <img class="img100" src="../assets/images/img11.png" alt="" />
                <div class="dlgRzNrImgMkWz">
                  <div class="f36 dlgRzNrImgMkWz_1">自适应瞳距调节</div>
                  <div class="f20 dlgRzNrImgMkWz_2">无需调节，一戴即清晰</div>
                </div>
              </div>
            </div>
            <div class="dlgRzNrRigBot">
              <div class="dlgRzNrImgMk wow fadeInUp">
                <img class="img100" src="../assets/images/img12.png" alt="" />
                <div class="dlgRzNrImgMkWz posLeft">
                  <div class="f36 dlgRzNrImgMkWz_1">低功耗 快运行</div>
                  <div class="f20 dlgRzNrImgMkWz_2">满血 LPDDR5，UFS3.1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dlgRzNrbj_2">
          <div class="dlgRzNrImgMk wow fadeInUp">
            <img class="img100" src="../assets/images/img13.png" alt="" />
            <div class="dlgRzNrImgMkWz posLeftCen">
              <div class="f36 dlgRzNrImgMkWz_1">6DoF 空间定位</div>
              <div class="f20 dlgRzNrImgMkWz_2">跑跳不丢定位，虚实自由穿梭</div>
            </div>
          </div>
          <div class="dlgRzNrImgMk wow fadeInUp">
            <img class="img100" src="../assets/images/img14.png" alt="" />
            <div class="dlgRzNrImgMkWz posLeftCen">
              <div class="f36 dlgRzNrImgMkWz_1">创新充电手柄</div>
              <div class="f20 dlgRzNrImgMkWz_2">超强续航，绿色环保，轻松持握</div>
            </div>
          </div>
        </div>
        <div class="dlgRzNrbj_3">
          <div class="dlgRzNrbj_3Left">
            <div class="dlgRzNrImgMk wow fadeInUp">
              <img class="img100" src="../assets/images/img15.png" alt="" />
              <div class="dlgRzNrImgMkWz posLeftTop">
                <div class="f36 dlgRzNrImgMkWz_1">初看经典 细看高级</div>
                <div class="f20 dlgRzNrImgMkWz_2">荣获全球三大工业设计奖项</div>
              </div>
            </div>
          </div>
          <div class="dlgRzNrbj_3Right">
            <div class="dlgRzNrImgMk wow fadeInUp">
              <img class="img100" src="../assets/images/img16.png" alt="" />
              <div class="dlgRzNrImgMkWz posRigCen">
                <div class="f36 dlgRzNrImgMkWz_1">表面涂层</div>
                <div class="f20 dlgRzNrImgMkWz_2">采用 Babyskin 婴儿手感漆更亲肤</div>
              </div>
            </div>
            <div class="dlgRzNrImgMk wow fadeInUp">
              <img class="img100" src="../assets/images/img17.png" alt="" />
              <div class="dlgRzNrImgMkWz posRigCen">
                <div class="f36 dlgRzNrImgMkWz_1">可调节阻尼头枕</div>
                <div class="f20 dlgRzNrImgMkWz_2">为亚洲人脸型设计，舒适更贴合</div>
              </div>
            </div>
          </div>
        </div>
        <div class="dlgRzNrbj_2">
          <div class="dlgRzNrImgMk wow fadeInUp">
            <img class="img100" src="../assets/images/img18.png" alt="" />
            <div class="dlgRzNrImgMkWz posLeftCen">
              <div class="f36 dlgRzNrImgMkWz_1">曲面设计</div>
              <div class="f20 dlgRzNrImgMkWz_2">深度高达 73 mm<br />的复杂双曲前壳装饰件</div>
            </div>
          </div>
          <div class="dlgRzNrImgMk wow fadeInUp">
            <img class="img100" src="../assets/images/img19.png" alt="" />
            <div class="dlgRzNrImgMkWz posRigCen">
              <div class="f36 dlgRzNrImgMkWz_1">磁吸面罩</div>
              <div class="f20 dlgRzNrImgMkWz_2">磁吸面罩轻轻一碰，随即吸附</div>
            </div>
          </div>
        </div>
      </div>
      <div class="lcdNrBj colorfff">
        <div class="lcdNrPPi">
          <div class="lcdNrPPiLeft wow fadeInUp">
            <div class="f72 bolder lcdNrBjBt">Fast-LCD 显示屏 *2</div>
            <div class="f26 lcdNrBjJs">双屏更符合人眼视觉系统，画面更立体、更真实</div>
            <div class="f26 textCenter lcdNrPPiLeftCon">
              1058 PPI <br>
              像素密度越高 画面越清晰<br>
              <img src="../assets/images/img20.png" alt="" />
            </div>
          </div>
          <div class="lcdNrPPiRight">
            <img class="img100" src="../assets/images/img21.png" alt="" />
          </div>
        </div>
        <div class="lcdNrGq wow fadeInUp">
          <div class="f72 bolder textCenter lcdNrBjBt">高清</div>
          <div class="f26 textCenter lcdNrBjJs">多镜片折叠光路设计，克服传统镜片视野边缘模糊现象<br>
            有效减少边缘眩光，带来全域清晰的视觉体验</div>
          <div class="lcdNrGqCon"><img class="img100" src="../assets/images/img2211.png" alt="" /></div>
        </div>
        <div class="lcdNrFbl wow fadeInUp">
          <div class="f72 bolder textCenter lcdNrBjBt">超高清渲染分辨率</div>
          <div class="f26 textCenter lcdNrBjJs">90Hz 刷新率 画面更流畅、更清晰，畅玩不眩晕</div>
          <div class="lcdNrFblCon"><img class="img100" src="../assets/images/img23.png" alt="" /></div>
        </div>
      </div>
      <div class="gxnSmlMd colorfff">
        <div class="gxnSmlMdCon">
          <div class="gxnSmlMdConLeft wow fadeInUp">
            <div class="f72 bolder lcdNrBjBt">高性能线性马达<br>
              让震动赋予生命力</div>
            <div class="f26 lcdNrBjJs">振频范围达到 50Hz-500Hz，射击的后坐力、 挥砍的阻力、<br>
              钓鱼的拉力...都高度还原振感的反馈， 超级带劲</div>
            <div class="gxnSmlMdCon_1"><img class="img100" src="../assets/images/img26.png" alt="" /></div>
          </div>
        </div>
      </div>
      <div class="gnHxXl colorfff">
        <div class="gxnSmlMdCon">
          <div class="gxnSmlMdConLeft wow fadeInUp">
            <div class="f72 bolder lcdNrBjBt">高能核“芯” 骁龙 XR2</div>
            <div class="f26 lcdNrBjJs">升级配置 LPDDR5 低功耗内存技术和 UFS 3.1<br>
              高速闪存技术，场景过渡更流畅</div>
            <!-- <div class="gnHxXlCon_1"><img class="img100" src="images/img27.png" alt="" /></div> -->
            <div class="mrXzGdLc">
              <ul>
                <li>
                  <h3><span class="f48 bolder counter">30</span><span class="f24 noBolder">%</span></h3>
                  <p class="f18">数据传输速率提升</p>
                </li>
                <li>
                  <h3><span class="f48 bolder counter">50</span><span class="f24 noBolder">%</span></h3>
                  <p class="f18">数据访问速率提升</p>
                </li>
                <li>
                  <h3><span class="f48 bolder counter">20</span><span class="f24 noBolder">%</span></h3>
                  <p class="f18">功耗降低</p>
                </li>
                <li>
                  <h3><span class="f48 bolder counter">40</span><span class="f24 noBolder">%</span></h3>
                  <p class="f18">加载时间缩短</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="cgSyTy colorfff">
        <img class="img100" src="../assets/images/bj16.jpg" alt="">
        <div class="cgSyTyPos wow fadeInUp">
          <div class="f72 bolder lcdNrBjBt">双目 4K 体验 105°超广视野</div>
          <div class="f26 lcdNrBjJs">纤毫毕现 沉浸体验</div>
        </div>
        <div class="jsKlJbSwiperBut wow fadeInUp">
          <div class="jsKlJbSwiper-button-prev"></div><!--左箭头。如果放置在swiper外面，需要自定义样式。-->
          <div class="jsKlJbSwiper-button-next"></div><!--右箭头。如果放置在swiper外面，需要自定义样式。-->
        </div>
      </div>
      <div class="jsKlJbSwiperWc">
        <div class="jsKlJbSwiper wow fadeInUp">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="dlgRzNrImgMk">
                <img class="img100" src="../assets/images/img24.png" alt="" />
                <div class="dlgRzNrImgMkWz posLeftCen">
                  <div class="f72 dlgRzNrImgMkWz_1">趣味健身 </div>
                  <div class="f26 dlgRzNrImgMkWz_2">家里就是健身房，边玩边健身，欢乐加倍</div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="dlgRzNrImgMk">
                <img class="img100" src="../assets/images/vrxz1.png" alt="" />
                <div class="dlgRzNrImgMkWz posLeftCen">
                  <div class="f72 dlgRzNrImgMkWz_1">VR游戏大作 玩不腻 玩不停</div>
                  <div class="f26 dlgRzNrImgMkWz_2">沉浸式第一视角，犹如亲临战场</div>
                </div>
              </div>
            </div>
            <!-- <div class="swiper-slide">
              <div class="dlgRzNrImgMk">
                <img class="img100" src="../assets/images/vrxz2.png" alt="" />
                <div class="dlgRzNrImgMkWz posLeftCen">
                  <div class="f72 dlgRzNrImgMkWz_1">IMAX 级影院 - 感受经典大片再现</div>
                  <div class="f26 dlgRzNrImgMkWz_2">3D电影、经典大片、全景视频随心看</div>
                </div>
              </div>
            </div> -->
            <div class="swiper-slide">
              <div class="dlgRzNrImgMk">
                <img class="img100" src="../assets/images/vrxz4.png" alt="" />
                <div class="dlgRzNrImgMkWz posLeftCen">
                  <div class="f72 dlgRzNrImgMkWz_1">亲子娱乐 开启VR奇幻之旅</div>
                  <div class="f26 dlgRzNrImgMkWz_2">体验 VR 高科技带来的震感，快乐成长</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="jlMjZyXZ colorfff textCenter">
        <div class="f72 bolder lcdNrBjBt wow fadeInUp">一键串流 6000+ 私人秘境自由选 </div>
        <div class="f26 lcdNrBjJs wow fadeInUp">官网下载串流助手，畅玩 Steam 游戏大作</div>
        <div class="jlMjZyXZImg wow fadeInUp"><img class="img100" src="../assets/images/img25.png" alt="" /></div>
      </div>
      <footerbottom></footerbottom>
    </div>
  </div>
</template>

<script>
  import headertop from '@/components/header.vue'
  import footerbottom from '@/components/footer.vue'
  import bj8 from '@/assets/images/bj8.jpg'
  import bj9 from '@/assets/images/bj9.jpg'
  import bj11 from '@/assets/images/bj11.jpg'
  import bj12 from '@/assets/images/bj12.jpg'
  export default {
    components: {
      headertop,
      footerbottom
    },
    data() {
      return {
        vrDxNgS1WcBjBg: {
          backgroundImage: `url(${bj8})`
        },
        yvrSwiperBg1: {
          backgroundImage: `url(${bj8})`
        },
        yvrSwiperBg2: {
          backgroundImage: `url(${bj9})`
        },
        yvrSwiperBg3: {
          backgroundImage: `url(${bj11})`
        },
        yvrSwiperBg4: {
          backgroundImage: `url(${bj12})`
        },
      }
    },
    mounted() {
      $(function() { // wait for document ready
        // init controller
        var controller = new ScrollMagic.Controller();
        var vheight = window.innerHeight;
        var durationHeight = vheight * 0.5;
        var durationHeight_1 = vheight * 1;
        var durationHeight_2 = vheight * 1.5;
        var durationHeight_3 = vheight * 2;
        var durationHeight_4 = vheight * 2.5;
        var durationHeight_5 = vheight * 3;
        var durationHeight_6 = vheight * 3.5;
        var durationHeight_7 = vheight * 4;


        // build scenes
        var wipeAnimation_1 = new TimelineMax()
          .fromTo("#vrTx_1", 3, {
            scale: '1',
            opacity: "1"
          }, {
            scale: '2',
            opacity: "0",
            ease: Linear.easeNone
          }, "+=0.4") // in from right
        new ScrollMagic.Scene({
            triggerElement: "#vrDxNgS1Wc",
            triggerHook: "onLeave",
            duration: durationHeight
          })
          .setPin("#vrDxNgS1Wc")
          .setTween(wipeAnimation_1)
          // .addIndicators({
          // 	name: "1-位置1"
          // })
          .addTo(controller);

        // build scenes
        var wipeAnimation_2 = new TimelineMax()
          .fromTo("#vrTx_2", 3, {
            top: '56%',
            opacity: "1",
            scale: '1',
          }, {
            top: '-300px',
            opacity: "0",
            scale: '.8',
            ease: Linear.easeNone
          }, "+=0.4") // in from right
        new ScrollMagic.Scene({
            triggerElement: "#vrDxNgS1Wc",
            triggerHook: "onLeave",
            duration: durationHeight
          })
          .setPin("#vrDxNgS1Wc")
          .setTween(wipeAnimation_2)
          // .addIndicators({
          // 	name: "1-位置1"
          // })
          .addTo(controller);

        // build scenes
        var wipeAnimation_3 = new TimelineMax()
          .fromTo("#vrTx_3", 3, {
            left: '-1000px',
            opacity: "0"
          }, {
            left: '15%',
            opacity: "1",
            ease: Linear.easeNone
          }, "+=0.4") // in from right
        new ScrollMagic.Scene({
            triggerElement: "#vrDxNgS1Wc",
            triggerHook: "onLeave",
            duration: durationHeight_1 * 1.1,
            // offset: durationHeight_1
          })
          .setPin("#vrDxNgS1Wc")
          .setTween(wipeAnimation_3)
          // .addIndicators({
          // 	name: "2-位置2"
          // })
          .addTo(controller);


        var wipeAnimation_4 = new TimelineMax()
          .fromTo("#vrTx_4", 3, {
            right: '-2000px',
            opacity: "0.5",
            scale: '0.5',
          }, {
            right: '-200px',
            opacity: "1",
            scale: '1.1',
            ease: Linear.easeNone
          }, "+=0.4") // in from right
        new ScrollMagic.Scene({
            triggerElement: "#vrDxNgS1Wc",
            triggerHook: "onLeave",
            duration: durationHeight_1 * 1.1,
            // offset: durationHeight_1/2
          })
          .setPin("#vrDxNgS1Wc")
          .setTween(wipeAnimation_4)
          // .addIndicators({
          // 	name: "2-位置2"
          // }) // add indicators (requires plugin)
          .addTo(controller);

        var wipeAnimation_4_img = new TimelineMax()
          .fromTo("#vrDxNgS1WcImg_0", 3, {
            scale: '1',
            opacity: "1",
            top: "-1300px"
          }, {
            scale: '1.05',
            opacity: "1",
            top: "0px"
            // ease: Linear.easeNone
          }, "+=0.8") // in from right
        new ScrollMagic.Scene({
            triggerElement: "#vrDxNgS1Wc",
            triggerHook: "onLeave",
            duration: durationHeight_1 * 1,
            // offset: "200px"
          })
          .setPin("#vrDxNgS1Wc")
          .setTween(wipeAnimation_4_img)
          // .addIndicators({
          // 	name: "2-位置2"
          // }) // add indicators (requires plugin)
          .addTo(controller);


        var wipeAnimation_6 = new TimelineMax()
          .fromTo("#vrTx_6", 3, {
            bottom: '-600px',
            opacity: "0.5"
          }, {
            bottom: '5%',
            opacity: "1",
            ease: Linear.easeNone
          }, "+=0.4") // in from right
        new ScrollMagic.Scene({
            triggerElement: "#vrDxNgS1Wc",
            triggerHook: "onLeave",
            duration: durationHeight_2 * 1.3,
          })
          .setPin("#vrDxNgS1Wc")
          .setTween(wipeAnimation_6)
          // .addIndicators({
          // 	name: "2-位置2"
          // }) // add indicators (requires plugin)
          .addTo(controller);

        var wipeAnimation_6_img = new TimelineMax()
          .fromTo("#vrDxNgS1WcImg_2", 3, {
            scale: '0.5',
            opacity: "1",
            top: "-2000px"
          }, {
            scale: '1',
            opacity: "1",
            top: "0px"
            // ease: Linear.easeNone
          }, "+=0.8") // in from right
        new ScrollMagic.Scene({
            triggerElement: "#vrDxNgS1Wc",
            triggerHook: "onLeave",
            duration: durationHeight_2 * 1.4,
            // offset: "200px"
          })
          .setPin("#vrDxNgS1Wc")
          .setTween(wipeAnimation_6_img)
          // .addIndicators({
          // 	name: "2-位置2"
          // }) // add indicators (requires plugin)
          .addTo(controller);

        var wipeAnimation_7 = new TimelineMax()
          .fromTo("#vrTx_7", 3, {
            left: '-2000px',
            opacity: "0.5"
          }, {
            left: '7%',
            opacity: "1",
            ease: Linear.easeNone
          }, "+=0.4") // in from right
        new ScrollMagic.Scene({
            triggerElement: "#vrDxNgS1Wc",
            triggerHook: "onLeave",
            duration: durationHeight_2 * 2.95,
            offset: durationHeight_1
          })
          .setPin("#vrDxNgS1Wc")
          .setTween(wipeAnimation_7)
          // .addIndicators({
          // 	name: "2-位置2"
          // }) // add indicators (requires plugin)
          .addTo(controller);


        var wipeAnimation_7_img = new TimelineMax()
          .fromTo("#vrDxNgS1WcImg_3", 3, {
            scale: '1',
            opacity: "1",
            bottom: "-2000px"
          }, {
            scale: '1.05',
            opacity: "1",
            bottom: "0px"
            // ease: Linear.easeNone
          }, "+=0.8") // in from right
        new ScrollMagic.Scene({
            triggerElement: "#vrDxNgS1Wc",
            triggerHook: "onLeave",
            duration: durationHeight_2 * 2.65,
            offset: durationHeight_1
          })
          .setPin("#vrDxNgS1Wc")
          .setTween(wipeAnimation_7_img)
          // .addIndicators({
          // 	name: "2-位置2"
          // }) // add indicators (requires plugin)
          .addTo(controller);



        // function updateDxNgS1WcBj_1(e) {
        //   // document.getElementById('video').pause();
        //   if (e.type == "enter") {
        //     $(".vrDxNgS1WcBj").css("background-image", "url(/static/img/bj8.jpg)")
        //     $("#vrDxNgS1WcBut").css("opacity", "1")
        //   } else {
        //     $(".vrDxNgS1WcBj").css("background-image", "url(/static/img/black.jpg)")
        //     $("#vrDxNgS1WcBut").css("opacity", "0")
        //   }
        // }
        // new ScrollMagic.Scene({
        //     triggerElement: "#vrDxNgS1Wc",
        //     // triggerHook: "onLeave",
        //     duration: durationHeight,
        //     offset: durationHeight
        //     // offset: vheight,
        //   })
        //   .setPin("#vrDxNgS1Wc")
        //   .on("enter leave", updateDxNgS1WcBj_1)
        //   // .addIndicators({
        //   // 	name: "背景1"
        //   // }) // add indicators (requires plugin)
        //   .addTo(controller);

        function updateDxNgS1WcBj_2(e) {
          if (e.type == "enter") {

          } else {
            $("#vrDxNgS1WcImg_0").css("opacity", "0")
            $("#vrTx_4").css("opacity", "0")
            $("#vrTx_3").css("opacity", "0")
          }
        }
        new ScrollMagic.Scene({
            triggerElement: "#vrDxNgS1Wc",
            // triggerHook: "onLeave",
            duration: durationHeight,
            offset: durationHeight_1 * 1.15
            // offset: vheight,
          })
          .setPin("#vrDxNgS1Wc")
          .on("enter leave", updateDxNgS1WcBj_2)
          // .addIndicators({
          // 	name: "背景2"
          // }) // add indicators (requires plugin)
          .addTo(controller);


        function updateDxNgS1WcBj_16(e) {
          if (e.type == "enter") {

          } else {
            $("#vrDxNgS1WcImg_2").css("opacity", "0")
            $("#vrTx_6").css("opacity", "0")
          }
        }
        new ScrollMagic.Scene({
            triggerElement: "#vrDxNgS1Wc",
            triggerHook: "onLeave",
            duration: durationHeight_2 * 1.35,
            offset: durationHeight_1
            // offset: durationHeight_1
            // offset: vheight,
          })
          .setPin("#vrDxNgS1Wc")
          .on("enter leave", updateDxNgS1WcBj_16)
          // .addIndicators({
          // 	name: "背景2"
          // }) // add indicators (requires plugin)
          .addTo(controller);


      });
      $(function() {


        $(".allTopConMenu ul li").eq(2).addClass("active");

        if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
          new WOW().init();
        };

        var mySwiper = new Swiper('.jsKlJbSwiper', {
          initialSlide: 0,
          slidesPerView: 1.1,
          spaceBetween: 30,
          // loop: true,
          centeredSlides: true,
          navigation: {
            nextEl: '.jsKlJbSwiper-button-next',
            prevEl: '.jsKlJbSwiper-button-prev',
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            430: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1.1,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 1.1,
              spaceBetween: 30,
            }
          }
        });


        $('.counter').countUp({
          time: 1500
        });


        // $(".gotoVideo").click(function() {
        // 	var thisPos = window.innerHeight * 14;
        // 	$('html,body').animate({
        // 		scrollTop: thisPos
        // 	}, 'slow');
        // 	document.getElementById('video').play();
        // })
      })

      // wapGoToVideo
      // wapVideo
      // var _topHeader = $("#header").outerHeight(true);
      // var distanceToTop_1 = $('.wapVideoWc').offset().top - _topHeader;
      // $(".wapGoToVideo").click(function() {
      //   $('html,body').animate({
      //     scrollTop: distanceToTop_1
      //   }, 'slow');
      //   document.getElementById('wapVideo').play();
      // })

      $(".videoOpen").on("click", function() {
      	var src = $(this).attr("source");
      	if (src == '' || src == undefined) {
      		alert('暂无视频');
      		return;
      	}
      	var htmls =
      		'<div class="fixedVideo"><div class="videoDDD"><div class="clearfix shipingTit"><a class="closeVideo" href="javascript:;"></a></div><div class="openVd"></div></div></div>';
      	$('body').append(htmls);
      	var html = '';
      	if (src.indexOf('http') > -1) {
      		html =
      			'<embed allowtransparency="true" allowfullscreen="true" allowfullscreenInteractive="true" scrolling="no" border="0" frameborder="0"  src="' +
      			src + '" allowfullscreen></embed>';
      	} else {
      		html = '<video controls autoplay  src="' + src + '">不支持</video>';
      	}

      	$(".fixedVideo .videoDDD .openVd").append(html);

      	$(".fixedVideo").fadeIn();
      	$(".closeVideo").click(function() {
      		$(".fixedVideo").remove();
      	});
      });


      // var yvrSwiper = new Swiper('#yvrSwiper', {
      // 	observer: true, //开启动态检查器，监测swiper和slide
      // 	observeParents: true, //监测Swiper 的祖/父元素
      // 	initialSlide: 0,
      // 	// direction: 'vertical',
      // 	// followFinger: false,
      // 	speed: 500,
      // 	noSwiping: false,
      // 	// mousewheel: true,
      // 	on: {
      // 		init: function() {
      // 			swiperAnimateCache(this); //隐藏动画元素
      // 			swiperAnimate(this); //初始化完成开始动画
      // 		},
      // 		slideChangeTransitionEnd: function() {
      // 			swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      // 			//this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
      // 		},
      // 		slideChangeTransitionStart: function() {
      // 			if (this.activeIndex == 6) {
      // 				document.getElementById('video').play();
      // 			} else{
      // 				document.getElementById('video').pause();
      // 			}
      // 		},
      // 	}
      // 	// on: {
      // 	// 	init: function(swiper) {
      // 	// 		slide = this.slides.eq(0);
      // 	// 		slide.addClass('ani-slide');
      // 	// 	},
      // 	// 	transitionStart: function() {
      // 	// 		for (i = 0; i < this.slides.length; i++) {
      // 	// 			slide = this.slides.eq(i);
      // 	// 			slide.removeClass('ani-slide');
      // 	// 		}
      // 	// 	},
      // 	// 	transitionEnd: function() {
      // 	// 		slide = this.slides.eq(this.activeIndex);
      // 	// 		slide.addClass('ani-slide');

      // 	// 	},
      // 	// }
      // });


      // window.onscroll = function() {
      // 	var scrollPosition = window.scrollY;
      // 	var aaHeight = window.innerHeight * 15.1;
      // 	var bbHeight = window.innerHeight * 8.5;
      // 	console.log(scrollPosition, aaHeight)
      // 	if (scrollPosition >= aaHeight || scrollPosition < bbHeight) {
      // 		document.getElementById('video').pause();
      // 	} else {
      // 		document.getElementById('video').play();
      // 	}
      // };

      window.onscroll = function() {
      	var scrollPosition = window.scrollY;
      	var dypHeight = window.innerHeight * 0.5;
      	console.log(scrollPosition, dypHeight)
      	if (scrollPosition >= dypHeight) {
      		$(".vrDxNgS1WcBj").css("background-image", "url(/static/img/black.jpg)")
      		$("#vrDxNgS1WcBut").css("opacity", "0")
      	} else {
      		$(".vrDxNgS1WcBj").css("background-image", "url(/static/img/bj8.jpg)")
      		$("#vrDxNgS1WcBut").css("opacity", "1")
      	}
      };


    }
  }
</script>

<style scoped>

</style>
