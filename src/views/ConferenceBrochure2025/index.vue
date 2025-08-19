<template>
  <div class="conference-brochure">
    <div class="header">
      <div class="w padding flex">
        <span>FinLLM 2025</span>
        <div class="right">
          <img
            src="@/assets/img/ijcai.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="centen-box w padding">
      <h1 class="big-title">Accepted Papers</h1>
      <div class="cente-text mg-bottom">
        <div class="cente-title mg">Changlun Li, Yao Shi, Yuyu Luo and Nan Tang</div>
        DeepFund: Will LLMs be Professional at Fund Investment? A Live Arena Perspective
        <div class="link">
          (<a
            href="https://arxiv.org/pdf/2503.18313"
            target="_blank"
            >https://arxiv.org/pdf/2503.18313</a
          >)
        </div>

        <div class="cente-title">
          Pranam Shetty, Abhisek Upadhayaya, Parth Mitesh Shah, Srikanth Jagabathula, Shilpi Nayak and Anna Joo Fee
        </div>
        Advanced Financial Reasoning at Scale: A Comprehensive Evaluation of Large Language Models on CFA Level III
        <div class="link">
          （<a
            href="https://arxiv.org/abs/2507.02954"
            target="_blank"
            >https://arxiv.org/abs/2507.02954</a
          >）
        </div>

        <div class="cente-title">Shijie Han, Jingshu Zhang, Yiqing Shen, Kaiyuan Yan and Hongguang Li</div>
        FinSphere, a Real-Time Stock Analysis Agent Powered by Instruction-Tuned LLMs and Domain Tools
        <div class="link">
          （<a
            href="https://arxiv.org/abs/2501.12399"
            target="_blank"
            >https://arxiv.org/abs/2501.12399</a
          >）
        </div>

        <div class="cente-title">Irem Demirtas, Burak Payzun and Secil Arslan</div>
        TULIP: Adapting Open-Source Large Language Models for Underrepresented Languages and Specialized Financial Tasks
        <!-- <div class="link">
          (<a
            href="https://arxiv.org/abs/2503.15485"
            target="_blank"
            >https://arxiv.org/abs/2503.15485</a
          >)
        </div> -->

        <div class="cente-title">Eric Benhamou, Baptiste Lefort, Beatrice Guez and Jean-Jacques Ohana</div>
        FinMarBa: A Market-Informed Dataset for Financial Sentiment Classification
        <div class="link">
          （<a
            href="https://arxiv.org/pdf/2507.22932"
            target="_blank"
            >https://arxiv.org/pdf/2507.22932</a
          >）
        </div>

        <div class="cente-title">Qianyu Lu, Qiang Yang, Mengzhen Fan, Shuyan Li</div>
        Integration of Large Language Models and Environmental, Social, and Governance (ESG) in Financial Investment:
        State-of-the-Art and Key Takeaways

        <div class="cente-title">Benjamin Coriat and Eric Benhamou</div>
        HARLF: Hierarchical Reinforcement Learning and Lightweight LLM-Driven Sentiment Integration for Financial
        Portfolio Optimization
        <div class="link">
          （<a
            href="https://arxiv.org/abs/2507.18560"
            target="_blank"
            >https://arxiv.org/abs/2507.18560</a
          >）
        </div>
      </div>
    </div>
    <div class="footer padding">
      <div>
        <div class="email-icon"></div>
        <div class="email-info">
          <p>If you have any question, feel free to contact us:</p>
          <p style="color: #b3ebff">finllm2023@easychair.org</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@import '../../style/public.less';
.conference-brochure {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header,
.footer {
  min-width: 1715px;
  height: 103px;
  line-height: 103px;
  font-size: 28px;
  color: #ffffff;
  letter-spacing: 0;
  font-weight: 700;
  background: url('@/assets/img/CTA.png') no-repeat;
  background-size: cover;
  .right {
    width: 172px;
    height: 64px;
    @media (max-width: 750px) {
      width: 300px;
      height: 120px;
    }
    img {
      width: 100%;
      height: 100%;
      vertical-align: top;
    }
  }
}
.footer {
  height: 151px;
  margin-top: 100px;
  font-size: 20px;
  color: #ffffff;
  font-weight: 500;
  display: flex;
  align-items: center;
  & > div {
    display: flex;
    .email-icon {
      width: 30px;
      height: 30px;
      margin-right: 9px;
      background: url('@/assets/img/email.png') no-repeat;
      background-size: cover;
    }
    p {
      margin: 0;
      line-height: 1.5;
    }
  }
}
.padding {
  padding: 0 130px;
}
.title {
  font-size: 40px;
  color: #0d152e;
  font-weight: 600;
  margin-top: 59px;
  @media (max-width: 750px) {
    font-size: 60px;
  }
}
.big-title {
  @media (max-width: 750px) {
    font-size: 60px;
  }
}
.cente-text {
  font-size: 20px;
  color: #81838c;
  text-align: justify;
  line-height: 1.5;

  @media (max-width: 750px) {
    font-size: 40px;
  }

  .cente-title {
    font-size: 26px;
    color: #81838c;
    margin-top: 68px;
    font-weight: 500;
    text-align: left;

    @media (max-width: 750px) {
      font-size: 52px;
    }
  }
  .mg {
    margin-top: 25px !important;
  }
}
.centen-box {
  margin-top: 50px;
  flex: 1;
  h1 {
    font-size: 32px;
    color: #0d152e;
    line-height: 2;
    font-weight: 600;
    display: flex;
    align-items: center;
    @media (max-width: 750px) {
      font-size: 50px;
    }
    &::before {
      content: '';
      display: inline-block;
      width: 10px;
      height: 35px;
      background-color: #4774f4;
      margin-right: 10px;
      vertical-align: baseline;
      @media (max-width: 750px) {
        height: 50px;
      }
    }
  }
  .text {
    font-size: 20px;
    color: #81838c;
    text-align: justify;
    line-height: 1.5;
    font-weight: 400;
    margin-bottom: 30px;
    @media (max-width: 750px) {
      font-size: 40px;
    }
    .email {
      color: #0088ff;
    }
  }
  .link {
    display: block;
    font-size: 20px;
    color: #0088ff;
    line-height: 2;
    font-weight: 400;
    margin-bottom: 20px;
    @media (max-width: 750px) {
      font-size: 40px;
    }
  }
  .process {
    font-size: 20px;
    color: #81838c;
    line-height: 2;
    font-weight: 400;
    @media (max-width: 750px) {
      font-size: 40px;
    }
    span {
      color: #1eb9e1;
    }
    .process-img {
      display: flex;
      margin-bottom: 28px;
      @media (max-width: 750px) {
        justify-content: space-between;
      }
      & > div {
        width: 200px;
        margin-right: 30px;
        @media (max-width: 750px) {
          width: 48%;
          margin: 0;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
.cente-text {
  font-size: 20px;
  color: #81838c;
  text-align: justify;
  line-height: 1.5;

  @media (max-width: 750px) {
    font-size: 40px;
  }

  .cente-title {
    font-size: 26px;
    color: #81838c;
    margin-top: 68px;
    font-weight: 500;
    text-align: left;

    @media (max-width: 750px) {
      font-size: 52px;
    }
  }
}

.mg-bottom {
  margin-bottom: 50px;
}
@media (max-width: 750px) {
  .header,
  .footer {
    min-width: 375px;
  }
  .header {
    height: 200px;
    line-height: 200px;
    font-size: 80px;
  }
  .w {
    min-width: 100vw;
    max-width: 100vw;
  }
}
.jz-box {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  img {
    width: 48%;
    margin-bottom: 50px;
  }
}
</style>
