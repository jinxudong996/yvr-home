<template>
  <div>
    <headertop></headertop>
    <div class="allNyBan" :style="allNyBanBg">
      <img class="img100" src="../assets/images/xz/banner2.jpg" alt="" />
      <div class="allNyBanPos">
        <div class="f52 bolder colorfff textCenter allNyBanPosTit_1 wow fadeInUp">加入我们</div>
        <div class="f24 colorfff textCenter wow fadeInUp allNyBanPosTit_2">改变世界获取信息的方式</div>
      </div>
      <div class="llMoreNr">
        <p class="llMoreNr_1">往下浏览更多内容</p>
        <div class="llMoreNrImg"><img src="../assets/images/xz/rowdown.png" alt="" /></div>
      </div>
    </div>
    <div class="jrMxQh">
      <div class="f46 bolder jrMxQh_1 wow fadeInUp">欢迎加入玩出梦想</div>
      <div class="jsKlJbSwiperBut jrMxQh_2 wow fadeInUp">
        <div class="jsKlJbSwiper-button-prev bjheise rowLeft"></div><!--左箭头。如果放置在swiper外面，需要自定义样式。-->
        <div class="jsKlJbSwiper-button-next bjheise rowRight"></div><!--右箭头。如果放置在swiper外面，需要自定义样式。-->
      </div>
    </div>
    <div class="swiper jrMxQhSwiper wow fadeInUp">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in dataListSlogan" :key="index * 1.111">
          <img class="img100" :src="imgUrl + item.image" alt="" />
          <div class="jrMxQhSwiperMc">
            <div class="f20 colorfff jrMxQhSwiperTit"><i></i>{{ item.title }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="gdrWcmX" style="background-image: url(../assets/images/xz/bj5.jpg);">
      <img class="img100" src="../assets/images/xz/bj5.jpg" alt="" />
      <div class="f52 bolder colorfff gdrWcmXNr">
        <div class="wow fadeInUp">让更多人玩出梦想</div>
      </div>
    </div>
    <div class="w1440 zpJob wow fadeInUp">
      <div class="f46 bolder textCenter zpJobTit">招聘岗位</div>
      <div class="zpJobSx">
        <div class="zpJobSxMk">
          <select class="zpJobSelect" name="" id="" v-model="data1">
            <option :value="null">城市</option>
            <option :value="item.dictValue" v-for="(item, index) in option1" :key="index * 1.11">{{ item.dictLabel }}
            </option>

          </select>
        </div>
        <div class="zpJobSxMk">
          <select class="zpJobSelect" name="" id="" v-model="data2">
            <option :value="null">岗位名称</option>
            <option :value="item.dictValue" v-for="(item, index) in option2" :key="index * 1.33">{{ item.dictLabel }}
            </option>
          </select>
        </div>
        <div class="zpJobSxMk">
          <select class="zpJobSelect" name="" id="" v-model="data3">
            <option :value="null">工作经验</option>
            <option :value="item.dictValue" v-for="(item, index) in option3" :key="index * 1.33">{{ item.dictLabel }}
            </option>
          </select>
        </div>
        <!-- <div class="zpJobSxMk">
      			<select class="zpJobSelect" name="" id="">
      				<option value="">学历</option>
      				<option value="">学历1</option>
      				<option value="">学历2</option>
      			</select>
      		</div> -->
        <div class="zpJobSxMk">
          <input class="zpJobInp" type="search" placeholder="搜索您感兴趣岗位" v-model="inputValue" @keyup.enter="seaarchFun" />
          <div class="zpJobSxMkPos" @click="seaarchFun">
            搜索<img src="../assets/images/xz/ss.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="w1440 zpJobList wow fadeInUp" v-if="isShow">
      <!-- zpJobListMk -->
      <div class="zpJobListMk" v-for="(item, index) in dataList" :key="index * 9.999">
        <div class="zpJobListMkTop f18">
          <div class="zpJobListMkTopMk zpJobListMkTop_1">{{ item.city }}</div>
          <div class="zpJobListMkTopMk zpJobListMkTop_2">{{ item.position }}</div>
          <div class="zpJobListMkTopMk zpJobListMkTop_3">{{ item.yearsRequired }}年以上</div>
          <!-- <div class="zpJobListMkTopMk zpJobListMkTop_4">本科及以上</div> -->
          <div class="zpJobListMkRow"></div>
        </div>
        <div class="zpJobListMkBot">
          <div class="zpJobListMkBotTop">
            <div class="zpJobListMkBotTopMk">
              <h3 class="f18">岗位描述</h3>
              <p class="f14" style="white-space: pre-wrap;" v-html="item.positionDescription"></p>
            </div>
            <div class="zpJobListMkBotTopMk">
              <h3 class="f18">岗位要求</h3>
              <p class="f14" style="white-space: pre-wrap;" v-html="item.positionRequirements"></p>
            </div>
            <div class="zpJobListMkBotTopMk">
              <h3 class="f18">福利</h3>
              <p class="f14" style="white-space: pre-wrap;" v-html="item.benefits"></p>
            </div>
          </div>
          <div class="zpJobListMkBotJlWc">
            <div class="zpJobListMkBotJl">欢迎简历投递到 <span>liuf@sinolf.com</span> <img src="../assets/images/xz/row4.png"
                alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="f26 noSjAll" v-else>暂无相关岗位</div>
    <div class="fyPages mt0 mb5 wow fadeInUp" v-show="isShow">
      <span class="fyPagesLink"><a @click="jumpD(-1)" href="javascript:void(0);">上一页</a></span>
      {{ pageNum }}/{{ total }}
      <span class="fyPagesLink"><a @click="jumpD(1)" href="javascript:void(0);">下一页</a></span>
    </div>
    <footerbottom></footerbottom>
  </div>
</template>

<script>
  import headertop from '@/components/header.vue'
  import footerbottom from '@/components/footer.vue'
  import banner2 from '@/assets/images/xz/banner2.jpg'
  import {
    jobList,
    dictType
  } from '@/api/index.js'
  import {
    slogan
  } from '@/api/index.js'

  let jobListData1 = {
    "records": [
        {
            "id": 1,
            "city": "上海",
            "position": "眼动算法工程师",
            "yearsRequired": "3",
            "positionDescription": "\n1、按照要求完成眼球追踪算法开发；\n2、负责公司眼球追踪相关专利的整理和书写；\n3、负责搭建光学环境方案，并配合相关人员完成测试、装调工作。\n任职资格\n",
            "positionRequirements": "1、全日制本科及以上学历，3年以上眼球追踪开发经验，ARVR相关行业工作经验者优先；\n2、精通 Python/C/C++ 一种或多种；\n3、了解深度学习基本原理，熟悉至少一种深度学习训练框架及其模型文件的解析，如pytorch、caffe、tensorflow； \n4、至少在图像中的目标检测与识别、语义分割或者图像内容理解等领域之一具有良好的学术或者业界经验；\n5、有完整落地经验者优先；\n6、熟悉常用的卷积计算加速方法优先，如gemm、winograd算法等。",
            "benefits": "五险一金 生日福利，节假日福利饭贴，下午茶，双休"
        },
        {
            "id": 2,
            "city": "上海",
            "position": "手势算法工程师",
            "yearsRequired": "5",
            "positionDescription": "1、负责3D肢体识别，手势识别，三维重建，语义识别等方面的深度学习算法开发；\n2、跟踪计算机视觉和深度学习算法的最新论文和开源项目的进展，并在项目中应用和优化；\n3、负责技术文档编写，及配合嵌入式工程师进行模型平台移植。\n\n",
            "positionRequirements": "1、计算机视觉、人工智能等相关专业硕士以上学历；\n2、5年以上基于深度学习的肢体识别相关研发经验。有移动端算法开发经验者优先；\n3、完成过实际部署的算法体系，或发表过世界级重要相关论文；\n4、有深度学习模型的轻量化设计，及模型压缩经验者优先；\n5、热爱算法研究，自驱力强，能和团队融洽的合作。",
            "benefits": "五险一金 生日福利，节假日福利饭贴，下午茶，双休"
        },
        {
            "id": 3,
            "city": "上海",
            "position": "三维视觉算法工程师",
            "yearsRequired": null,
            "positionDescription": "1、负责移动平台基于立体视觉/Tof的三维重建MR算法研究与落地；\n2、负责MR场景下物体/场景的三维重建、新视角生成、编辑及渲染相关工作。\n\n",
            "positionRequirements": "1、硕士及以上学历，计算机视觉、人工智能等相关专业，4年以上视觉算法工作经验；\n2、熟练掌握计算机视觉、多视图几何、SFM、MVS、NeRF等三维重建相关算法；\n3、熟练掌握Python、C++、Pytorch，拥有良好的编程习惯和代码风格；\n4、熟悉常见的开源三维重建框架，具有实际基于深度学习/三维重建/NeRF项目经验者优先；\n5、熟悉CPU/GPU性能优化（neon, cuda等）优先，有移动平台Android相关算法开发落地经验优先；\n6、对新技术怀有热情，善于分析和解决问题，良好的团队协作能力。",
            "benefits": "五险一金 生日福利，节假日福利饭贴，下午茶，双休"
        },
        {
            "id": 4,
            "city": "上海",
            "position": "性能优化工程师",
            "yearsRequired": "2",
            "positionDescription": "1、负责算法(SLAM、头手6dof、VST、手势等)在移动端工程落地和性能优化；\n2、利用高通异构性能(ARM/DSP/CVP等)，实现算法优化加速。\n\n",
            "positionRequirements": "1、本科及以上学历，计算机视觉、人工智能、电子信息等相关专业，性能优化项目经验2年以上经验；\n2、熟悉SLAM、图像处理等相关算法，具有工程或优化经验；\n3、熟悉软件开发流程，熟练掌握C/C++，熟悉linux开发环境；\n4、熟悉CPU体系结构，掌握C++、Intrinsics编程优化，熟悉指令集加速(NEON/SSE，DSP等)；\n5、熟悉系统性能分析和调优，如系统负载、系统阻塞、内存碎片等。",
            "benefits": "五险一金 生日福利，节假日福利饭贴，下午茶，双休"
        },
        {
            "id": 5,
            "city": "上海",
            "position": "XR系统工程师",
            "yearsRequired": "2",
            "positionDescription": "1、基于高通平台，负责XR系统Runtime的开发与维护；\n2、开发VR眼镜设备的特殊需求；\n3、对接算法团队，集成算法到native服务；\n4、解决系统的性能/稳定性问题。\n\n",
            "positionRequirements": "1、本科及以上学历，计算机相关专业，2年以上开发经验；\n2、熟练掌握C++/JAVA开发技能，扎实的数据结构和算法基础；\n3、对新技术保持热情，能够持续学习，具备团队意识；\n4、具备XR产品开发经验者优先（包括但不限于XR Runtime/XR SDK/3D引擎等）；\n5、具备高通平台native层服务开发，IMU/Camera/display/performance相关模块开发调试经验优先。",
            "benefits": "五险一金 生日福利，节假日福利饭贴，下午茶，双休"
        },
        {
            "id": 6,
            "city": "上海",
            "position": "图形工程师",
            "yearsRequired": "2",
            "positionDescription": "1、负责公司VR设备渲染引擎及图形相关特性的开发；\n2、MR相关前沿技术的研发与落地。\n",
            "positionRequirements": "\n1、计算机、数学、机械等相关专业，硕士及以上，数学功底扎实，2年以上图形开发相关经验；\n2、熟悉3D图形学、实时渲染、性能优化，有较好的算法基础；\n3、精通GLES,、C、C++；\n4、具有团队合作精神和良好的沟通能力；\n5、有AR、VR、视频、camera开发经验者优先；\n6、有Vulkan, Python经验者优先；\n7、有移动端3D渲染引擎开发（Android）、自研引擎开发、开源引擎二次开发经验者优先。",
            "benefits": "五险一金 生日福利，节假日福利饭贴，下午茶，双休"
        },
        {
            "id": 7,
            "city": "上海",
            "position": "Android Framework开发工程师",
            "yearsRequired": "4",
            "positionDescription": "1、解决Android系统原生代码中的各种问题；\n2、负责Android系统的深度定制和性能优化；\n3、维护Android Framework中的各系统服务；\n4、开发和维护Android系统的原生应用；\n5、负责产品需求的技术文档编写和维护。",
            "positionRequirements": "1、全日制本科及以上学历 ，熟练掌握C++/Java等语言；\n2、4年以上Android Framework和App的实际工作经验；\n3、熟悉Android Framework的代码架构和运行机制；\n4、熟悉AMS、PMS、WMS和SurfaceFlinger等系统服务原理和View体系结构；\n5、深入理解Android系统的Service、Binder、Callback机制；\n6、具有良好的团队协作能力、沟通能力和自我驱动意识；\n7、有XR设备或Virtual Display相关开发经验者优先。",
            "benefits": "五险一金 生日福利，节假日福利饭贴，下午茶，双休"
        },
        {
            "id": 8,
            "city": "上海",
            "position": "BSP开发工程师",
            "yearsRequired": "3",
            "positionDescription": "1、负责高通Android平台驱动和HAL的开发与调试；\n2、负责高通平台系统性能的调试与优化；\n3、协助硬件对目标板进行测试验证；\n4、负责开发设计过程中的技术文档撰写。",
            "positionRequirements": "1、全日制本科及以上学历，3年以上android产品驱动开发经验；\n2、熟悉高通平台Audio,Camera,Sensor,Display,充电等驱动模块；\n3、熟悉linux内核开发及调试；\n4、熟悉Android/Linux驱动架构；\n5、熟悉操作系统机制原理，能够对系统性能，功耗处理提供优化方案；\n6、具有多模块驱动开发经验者优先。",
            "benefits": "五险一金 生日福利，节假日福利饭贴，下午茶，双休"
        },
        {
            "id": 9,
            "city": "上海",
            "position": "光学工程师",
            "yearsRequired": "2",
            "positionDescription": "1、负责VR一体机光学系统设计与测试；\n2、参与光学系统设计的各个阶段，从系统的规格制定到零部件设计，直至最终的系统测试；\n3、光学系统的机械装调、校正，设计文档管理，制定VR光学测试标准流程；\n4、光学系统的评价，包括光学参数和图像测试。",
            "positionRequirements": "1、光学相关专业本科及以上学历；\n2、2年以上光学产品研发工作经验，有具体的光学设计经验；\n3、熟悉光学产品相关的知识,如产品设计,加工,测试,调试,2D图的绘制,可靠性相关的知识；\n4、对模具加工、模仁补正以及注塑工艺,有一定的了解及认识；\n5、熟悉使用ZEMAX,CODEV,MATLAB,CAD等专业软件，具备独立设计能力；\n6、有一定的英文基础,能够做全英文的分析报告及邮件的沟通；\n7、有Camera开发经验和HMD 开发经验者优先；\n8、对VR/AR行业内的技术和市场信息有清晰的掌握优先。",
            "benefits": "五险一金 生日福利，节假日福利饭贴，下午茶，双休"
        },
        {
            "id": 10,
            "city": "上海",
            "position": "音频工程师",
            "yearsRequired": "5",
            "positionDescription": "1、负责VR产品的音频方案整体设计，端到端负责试产和量产过程中相关问题的分析解决；\n2、负责对音频器件如Speaker、Mic单品进行选型评估、测试并输出定制规格；\n3、参与音频机构堆叠，协同结构工程师进行音腔仿真和设计；\n4、负责完成音频各项参数的调试及测试，针对测试效果提供优化方案，生成音频参数并回归整机音效；\n5、制定产线音频测试规范，跟进测试结果，确保产线测试一致性。",
            "positionRequirements": "1、声学、电子及相关专业本科以上学历；\n2、5年以上音频研发相关工作经验，具有电声相关知识背景，熟悉常见电声元器件的性能；\n3、熟悉音频指标及测试标准，熟悉声学仿真软件的使用；\n4、熟悉智能设备或手机音频相关测试标准，熟悉高通平台，熟练使用ACQUA、AP及Soundcheck等音频测试设备；\n5、具有VR/手机Audio研发经验优先。",
            "benefits": "五险一金 生日福利，节假日福利饭贴，下午茶，双休"
        }
    ],
    "total": 18,
    "size": 10,
    "current": 1,
    "orders": [],
    "optimizeCountSql": true,
    "searchCount": true,
    "countId": null,
    "maxLimit": null,
    "pages": 2
}

  let jobListData2 = {
    "records": [
        {
            "id": 11,
            "city": "上海",
            "position": "结构工程师",
            "yearsRequired": "3",
            "positionDescription": "1、负责VR设备的整体结构设计，并提供相对应的BOM及开模资料；\n2、评审外观设计方案，与ID，硬件及光学等交互结构方案并给出堆叠设计；\n3、负责模具评审，试模，检讨试模样品与模具问题点，研究对策，协调模厂出修模资料；\n4、负责改进产品和工艺，并导入实施；\n5、根据总体和各阶段日程，跟踪、推进与确认各部品的状况；\n6、协助生产部门解决现场生产中出现的问题，进行技术改进，以完善设备性能和提高生产效率。",
            "positionRequirements": "1、机械设计相关专业毕业，本科及以上学历，专职结构设计3~5年以上；\n2、具有笔记本、手机、VR等行业设计经验，尤其有VR设计及量产整机设计开发经验尤佳；\n3、熟悉塑料和金属材料的物理特性及表面处理方法和工艺；\n4、熟悉塑胶模具、五金模具及其它，特别了解注塑工艺和钣金加工工艺；\n5、有良好的设计思路，能够独立担当设计任务，根据市场趋势的变化，满足产品设计需求；       \n6、有创新能力、良好的沟通能力和团队协作精神；\n7、熟练使用各种软件：Pro-E、AUTOCAD。",
            "benefits": "五险一金 生日福利，节假日福利饭贴，下午茶，双休"
        },
        {
            "id": 12,
            "city": "上海",
            "position": "工业设计师",
            "yearsRequired": "1",
            "positionDescription": "1、负责VR产品的工业设计工作，包括外观造型，CMF，符合人体工程学；\n2、负责产品概念设计以及PI设计元素的提取及整理，新品的前瞻性设计；\n3、协助或独立完成设计相关工作。",
            "positionRequirements": "1、本科及以上学历，工业设计专业；\n2、1-3年工作经验，有消费电子项目经历。如特别优秀，对工作年限不做要求；\n3、工作主动，具有强烈的创新意识，勇于挑战颠覆性设计及工艺。",
            "benefits": "五险一金 生日福利，节假日福利饭贴，下午茶，双休"
        },
        {
            "id": 13,
            "city": "上海",
            "position": "体验设计师",
            "yearsRequired": "3",
            "positionDescription": "1、负责MR产品的体验设计工作（系统交互/UI），输出VR端和移动端的空间界面设计方案；\n2、和产品共同探讨创新项目的模式和体验，梳理用户诉求，制定设计目标和策略。结合竞品分析进行MR场景下的设计验证，提供完整设计解决方案；\n3、视觉设计能力突出，创新能力出色。洞察和分析设计流行趋势，独立完成产品的视觉方向定义，并制定高品质视觉规范；\n4、制定和输出设计规范和组件，提升体验合理性及项目效率。",
            "positionRequirements": "1、具备创新能力，热衷新事物，擅长思考，有非常强的学习能力，乐于实验和探索。并能捕捉创新点转化落地为设计方案；\n2、具备系统的设计思维和落地能力，能够独立推进设计项目落地；\n3、细节控，追求像素级别的完美，具备较高的审美和出色的视觉把控力；\n4、本科及以上学历，视觉传达等相关专业；\n5、三年以上互联网或智能硬件产品工作经验，VR产品，游戏，智能终端系统设计经验优先；\n6、熟练使用figma/sketch等设计软件。有使用Unity经验者加分。",
            "benefits": "五险一金 生日福利，节假日福利饭贴，下午茶，双休"
        },
        {
            "id": 14,
            "city": "上海",
            "position": "项目质量管理",
            "yearsRequired": "3",
            "positionDescription": "1、以项目质量经理角色对项目开发质量负责；\n2、负责项目开发过程各领域质量状态跟踪及可视化报表输出；\n3、负责项目研发质量控制（含PCBA方案外研）；\n4、负责项目开发过程各技术评审、DFMEA等；\n5、负责项目开发过程交付件及输出审核。",
            "positionRequirements": "1、本科及以上学历，研发或质量专业；\n2、三年以上手机、VR、投影仪等智能硬件研发质量管理经验；\n3、熟悉研发全过程；\n4、熟悉质量管理体系，包括但不限于ISO9001，ISO14001，IATF16949；\n5、较强的逻辑思维能力与沟通能力。",
            "benefits": "五险一金 生日福利，节假日福利饭贴，下午茶，双休"
        },
        {
            "id": 15,
            "city": "上海",
            "position": "供应商质量管理",
            "yearsRequired": "3",
            "positionDescription": "1、主导供应商导入审核与年度考评；\n2、维护合格供应商名录，依据分级标准对供应商实施分级管控；\n3、跟进供应商质量协议签署；\n4、对供应商进行辅导，提升并完善供应商质量管控流程；\n项目物料质量管理：\n5、分解质量目标，制定各零部件认证测试标准与质量目标；\n6、参与关键器件选型，并对器件及供应商质量风险进行识别与评定；\n7、项目开发阶段完成与关键供应商/物料标准释放；\n8、参与关键组件的试制过程管理，参与组件开模试模、试产与交付质量管理；\n9、监督并推动供应商所交付物料制程/材料/设计等质量问题的改进，以确保交付目标；\n10、主导物料承认计划与承认进度；跟进供应商承认书与封样件；\n11、建立与维护供应商质量数据库，为新项目选型提供评定依据。",
            "positionRequirements": "1、大学本科及以上学历，电子类相关专业；\n2、三年以上笔记本、VR、投影仪等智能硬件供应商质量管理经验；\n3、熟悉结构件、光电声件质量标准、测试方法；熟练使用各项检测工具；\n4、熟悉质量管理体系，包括但不限于ISO9001，ISO14001，IATF16949；\n5、较强的逻辑思维能力与沟通能力；善于推动供应商质量改进。",
            "benefits": "五险一金 生日福利，节假日福利饭贴，下午茶，双休"
        },
        {
            "id": 16,
            "city": "上海",
            "position": "平面设计实习生",
            "yearsRequired": null,
            "positionDescription": "1、协助设计师完成市场运营向的平面物料供给，包括但不限于产品海报、Banner资源位和新媒体长图文等；\n2、独立承接日常小型设计需求（包括平面设计、视频剪辑等），并按时交付；\n3、协助建立视觉设计规范；\n4、其它设计支持工作。",
            "positionRequirements": "1、本科及以上学历，视觉传达设计相关专业，每周到岗至少3天；\n2、熟练掌握PS、AI等平面设计软件，具备插画能力，和视频剪辑能力；\n3、专业理论基础扎实，有良好的审美，对设计趋势有敏锐洞察；\n4、具备一定协作沟通能力，责任心强，具备主观能动性和owner意识加分；\n5、有科技行业设计经验者优先。",
            "benefits": "五险一金 生日福利，节假日福利饭贴，下午茶，双休"
        },
        {
            "id": 17,
            "city": "上海",
            "position": "摄影实习生",
            "yearsRequired": null,
            "positionDescription": "1、掌握基础的拍摄技能，能协助完成拍摄任务，包括但不限于展会、采访等；\n2、对各类器材拥有一定的熟悉度，不同风格的布景及光感布置；\n3、对作品的主题创意、剪辑、色彩、音乐等方面有较好的把握能力，能简单修片；\n4、对接跟拍，以及领导安排的其他工作。",
            "positionRequirements": "1、本科及以上学历在校生，编导、摄影相关专业优先；\n2、有时尚相关短视频拍摄经验加分；\n3、了解摄影摄像的相关领域常识、懂得灯光基础、布景、如何构图等；\n4、有一定视频拍摄能力，优秀的镜头感，具备较好的视觉审美能力、敏锐的观察力和画面捕捉能力；\n5、良好的沟通能力。",
            "benefits": "五险一金 生日福利，节假日福利饭贴，下午茶，双休"
        },
        {
            "id": 18,
            "city": "上海",
            "position": "产品实习生",
            "yearsRequired": null,
            "positionDescription": "1、参与XR应用分发平台（包括应用商店、管理后台等模块）的产品规划、设计和版本迭代；\n2、研究XR市场趋势和行业动态，挖掘新的产品方向和功能；\n3、梳理团队运营需求，优化后台功能，提升团队工作效率；\n4、参与用户体验优化，持续改进平台功能和性能。",
            "positionRequirements": "1、本科及以上学历，实习6个月以上优先；\n2、对XR行业充满热情，对应用分发平台有一定了解；\n3、具备用户思维，善于沟通，业务逻辑清晰，有较强的理解能力；\n4、有应用商店、生态搭建经验者优先。",
            "benefits": "五险一金 生日福利，节假日福利饭贴，下午茶，双休"
        }
    ],
    "total": 18,
    "size": 10,
    "current": 2,
    "orders": [],
    "optimizeCountSql": true,
    "searchCount": true,
    "countId": null,
    "maxLimit": null,
    "pages": 2
  }

  let cms_job_city = [
    {
        "createBy": "admin",
        "createTime": "2024-06-14 19:06:19",
        "updateBy": "",
        "updateTime": null,
        "remark": null,
        "dictCode": 37,
        "dictSort": 1,
        "dictLabel": "上海",
        "dictLabelEn": null,
        "dictValue": "上海",
        "dictType": "cms_job_city",
        "cssClass": null,
        "listClass": "default",
        "isDefault": "N",
        "status": "0"
    },
    {
        "createBy": "admin",
        "createTime": "2024-06-14 19:06:25",
        "updateBy": "",
        "updateTime": null,
        "remark": null,
        "dictCode": 38,
        "dictSort": 2,
        "dictLabel": "北京",
        "dictLabelEn": null,
        "dictValue": "北京",
        "dictType": "cms_job_city",
        "cssClass": null,
        "listClass": "default",
        "isDefault": "N",
        "status": "0"
    },
    {
        "createBy": "admin",
        "createTime": "2024-06-20 15:02:10",
        "updateBy": "",
        "updateTime": null,
        "remark": null,
        "dictCode": 55,
        "dictSort": 3,
        "dictLabel": "深圳",
        "dictLabelEn": null,
        "dictValue": "深圳",
        "dictType": "cms_job_city",
        "cssClass": null,
        "listClass": "default",
        "isDefault": "N",
        "status": "0"
    },
    {
        "createBy": "admin",
        "createTime": "2024-06-20 15:02:19",
        "updateBy": "",
        "updateTime": null,
        "remark": null,
        "dictCode": 56,
        "dictSort": 4,
        "dictLabel": "南昌",
        "dictLabelEn": null,
        "dictValue": "南昌",
        "dictType": "cms_job_city",
        "cssClass": null,
        "listClass": "default",
        "isDefault": "N",
        "status": "0"
    }
  ]

  let cms_job_position = [
    {
        "createBy": "admin",
        "createTime": "2024-06-14 19:09:12",
        "updateBy": "admin",
        "updateTime": "2024-06-20 14:59:45",
        "remark": null,
        "dictCode": 39,
        "dictSort": 1,
        "dictLabel": "研发",
        "dictLabelEn": null,
        "dictValue": "研发",
        "dictType": "cms_job_position",
        "cssClass": null,
        "listClass": "default",
        "isDefault": "N",
        "status": "0"
    },
    {
        "createBy": "admin",
        "createTime": "2024-06-14 19:09:29",
        "updateBy": "admin",
        "updateTime": "2024-06-20 14:59:53",
        "remark": null,
        "dictCode": 40,
        "dictSort": 2,
        "dictLabel": "产品",
        "dictLabelEn": null,
        "dictValue": "产品",
        "dictType": "cms_job_position",
        "cssClass": null,
        "listClass": "default",
        "isDefault": "N",
        "status": "0"
    },
    {
        "createBy": "admin",
        "createTime": "2024-06-20 15:00:05",
        "updateBy": "",
        "updateTime": null,
        "remark": null,
        "dictCode": 47,
        "dictSort": 3,
        "dictLabel": "销售服务",
        "dictLabelEn": null,
        "dictValue": "销售服务",
        "dictType": "cms_job_position",
        "cssClass": null,
        "listClass": "default",
        "isDefault": "N",
        "status": "0"
    },
    {
        "createBy": "admin",
        "createTime": "2024-06-20 15:00:14",
        "updateBy": "",
        "updateTime": null,
        "remark": null,
        "dictCode": 48,
        "dictSort": 4,
        "dictLabel": "市场",
        "dictLabelEn": null,
        "dictValue": "市场",
        "dictType": "cms_job_position",
        "cssClass": null,
        "listClass": "default",
        "isDefault": "N",
        "status": "0"
    },
    {
        "createBy": "admin",
        "createTime": "2024-06-20 15:00:22",
        "updateBy": "",
        "updateTime": null,
        "remark": null,
        "dictCode": 49,
        "dictSort": 5,
        "dictLabel": "工业设计",
        "dictLabelEn": null,
        "dictValue": "工业设计",
        "dictType": "cms_job_position",
        "cssClass": null,
        "listClass": "default",
        "isDefault": "N",
        "status": "0"
    },
    {
        "createBy": "admin",
        "createTime": "2024-06-20 15:00:29",
        "updateBy": "",
        "updateTime": null,
        "remark": null,
        "dictCode": 50,
        "dictSort": 6,
        "dictLabel": "供应链",
        "dictLabelEn": null,
        "dictValue": "供应链",
        "dictType": "cms_job_position",
        "cssClass": null,
        "listClass": "default",
        "isDefault": "N",
        "status": "0"
    },
    {
        "createBy": "admin",
        "createTime": "2024-06-20 15:00:37",
        "updateBy": "",
        "updateTime": null,
        "remark": null,
        "dictCode": 51,
        "dictSort": 7,
        "dictLabel": "生态",
        "dictLabelEn": null,
        "dictValue": "生态",
        "dictType": "cms_job_position",
        "cssClass": null,
        "listClass": "default",
        "isDefault": "N",
        "status": "0"
    },
    {
        "createBy": "admin",
        "createTime": "2024-06-20 15:00:46",
        "updateBy": "",
        "updateTime": null,
        "remark": null,
        "dictCode": 52,
        "dictSort": 8,
        "dictLabel": "职能/支持",
        "dictLabelEn": null,
        "dictValue": "职能/支持",
        "dictType": "cms_job_position",
        "cssClass": null,
        "listClass": "default",
        "isDefault": "N",
        "status": "0"
    }
  ]

  let cms_job_year = [
    {
        "createBy": "admin",
        "createTime": "2024-06-14 19:14:56",
        "updateBy": "admin",
        "updateTime": "2024-06-20 16:48:52",
        "remark": null,
        "dictCode": 42,
        "dictSort": 2,
        "dictLabel": "1年以上",
        "dictLabelEn": null,
        "dictValue": "1",
        "dictType": "cms_job_year",
        "cssClass": null,
        "listClass": "default",
        "isDefault": "N",
        "status": "0"
    },
    {
        "createBy": "admin",
        "createTime": "2024-06-14 19:15:21",
        "updateBy": "admin",
        "updateTime": "2024-06-20 16:48:54",
        "remark": null,
        "dictCode": 43,
        "dictSort": 3,
        "dictLabel": "2年以上",
        "dictLabelEn": null,
        "dictValue": "2",
        "dictType": "cms_job_year",
        "cssClass": null,
        "listClass": "default",
        "isDefault": "N",
        "status": "0"
    },
    {
        "createBy": "admin",
        "createTime": "2024-06-14 19:15:34",
        "updateBy": "admin",
        "updateTime": "2024-06-20 16:48:57",
        "remark": null,
        "dictCode": 44,
        "dictSort": 4,
        "dictLabel": "3年以上",
        "dictLabelEn": null,
        "dictValue": "3",
        "dictType": "cms_job_year",
        "cssClass": null,
        "listClass": "default",
        "isDefault": "N",
        "status": "0"
    },
    {
        "createBy": "admin",
        "createTime": "2024-06-20 16:42:15",
        "updateBy": "admin",
        "updateTime": "2024-06-20 16:49:01",
        "remark": null,
        "dictCode": 57,
        "dictSort": 5,
        "dictLabel": "4年以上",
        "dictLabelEn": null,
        "dictValue": "4",
        "dictType": "cms_job_year",
        "cssClass": null,
        "listClass": "default",
        "isDefault": "N",
        "status": "0"
    },
    {
        "createBy": "admin",
        "createTime": "2024-06-20 16:42:26",
        "updateBy": "admin",
        "updateTime": "2024-06-20 16:49:04",
        "remark": null,
        "dictCode": 58,
        "dictSort": 7,
        "dictLabel": "5年以上",
        "dictLabelEn": null,
        "dictValue": "5",
        "dictType": "cms_job_year",
        "cssClass": null,
        "listClass": "default",
        "isDefault": "N",
        "status": "0"
    }
  ]

  let sloganData = [
    {
        "title": "玩出梦想科技VR体验展厅",
        "subTitle": null,
        "image": "/profile/2024/06/22/img18-5e53079_20240622155755A003.png",
        "sortOrder": 1
    },
    {
        "title": "2023年10月玩出梦想科技团建",
        "subTitle": null,
        "image": "/profile/2024/06/22/img19-e67b263_20240622155815A004.png",
        "sortOrder": 2
    }
  ]

  export default {
    components: {
      headertop,
      footerbottom
    },
    data() {
      var that = this
      return {
        allNyBanBg: {
          backgroundImage: `url(${banner2})`
        },
        pageNum: 1,
        option1: [],
        option2: [],
        option3: [],
        total: 0,
        data1: null,
        data2: null,
        data3: null,
        dataList: [],
        dataListSlogan: [],
        imgUrl: that.BASE_API,
        inputValue: '', // 绑定的值
        isShow: true
      }
    },
    methods: {
      async jumpD(index) {
        if (index == -1) {
          if (this.pageNum == 1) {
            return
          }
          this.pageNum--
          await this.jobList()
        } else {
          if (this.pageNum >= this.total) {
            return
          }
          this.pageNum++
          await this.jobList()
        }
      },
      seaarchFun() {
        this.pageNum = 1
        this.jobList()
      },
      async dictType() {
        // let res1 = await dictType('cms_job_city')
        // let res2 = await dictType('cms_job_position')
        // let res3 = await dictType('cms_job_year')
        // this.option1 = res1.data
        // this.option2 = res2.data
        // this.option3 = res3.data

        this.option1 = cms_job_city
        this.option2 = cms_job_position
        this.option3 = cms_job_year
      },
      async jobList() {
        this.dataList = []
        // this.total=0
        // this.pageNum=0
        // let res = await jobList({
        //   city: this.data1,
        //   keyword: this.inputValue,
        //   pageNum: this.pageNum,
        //   pageSize: 10,
        //   position: this.data2,
        //   yearsRequired: this.data3
        // })
        if(this.pageNum == 1){
          this.dataList = jobListData1.records
          this.total = jobListData1.pages
        }else if(this.pageNum == 2){
          this.dataList = jobListData2.records
          this.total = jobListData2.pages
        }
        // this.dataList = res.data.records
        // this.total = res.data.pages
        if (this.dataList.length > 0) {
          this.isShow = true
          this.$nextTick(() => {
            setTimeout(() => {
              $(".zpJobList .zpJobListMk").eq(0).find(".zpJobListMkRow").addClass("on");
              $(".zpJobList .zpJobListMk").eq(0).find(".zpJobListMkBot").show();
              $(".zpJobListMkTop").click(function() {
                if ($(this).find(".zpJobListMkRow").hasClass("on")) {
                  $(this).find(".zpJobListMkRow").removeClass("on");
                  $(this).next().slideUp();
                } else {
                  $(".zpJobListMkRow").removeClass("on");
                  $(this).find(".zpJobListMkRow").addClass("on");
                  $(".zpJobListMkBot").slideUp();
                  $(this).next().slideDown();
                }
              })
            }, 300)
            // $(".zpJobList .zpJobListMk").eq(0).find(".zpJobListMkBot").show();
            // $(".zpJobListMkTop").click(function () {
            //     if (!$(this).next().is(":hidden")) {
            //       $(this).find(".zpJobListMkRow").removeClass("on");
            //       $(this).next().slideUp();
            //     } else {
            //       $(".zpJobListMkRow").removeClass("on");
            //       $(this).find(".zpJobListMkRow").addClass("on");
            //       $(".zpJobListMkBot").slideUp();
            //       $(this).next().slideDown();
            //     }
            //   })

          })
        } else {
          this.isShow = false
        }



        console.log(this.total)
      },
      async slogan() {
        // let res = await slogan({})
        // let data = res.data
        this.dataListSlogan = sloganData

      }
    },
    async mounted() {
      await this.dictType()
      await this.jobList()
      await this.slogan()
      $(".allTopConMenu ul li").eq(5).addClass("active");
      if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
        new WOW().init();
      };
      var jrMxQhSwiper = new Swiper('.jrMxQhSwiper', {
        initialSlide: 0,
        slidesPerView: 1.9,
        spaceBetween: 65,
        navigation: {
          nextEl: '.jsKlJbSwiper-button-next',
          prevEl: '.jsKlJbSwiper-button-prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 1.3,
            spaceBetween: 10
          },
          430: {
            slidesPerView: 1.3,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 30
          },
          1280: {
            slidesPerView: 1.9,
            spaceBetween: 55
          }
        }
      })



    }
  }
</script>

<style scoped></style>
