<template>
  <div class="conference-brochure">
    <div class="header">
      <div class="w padding flex">
        <span>FinLLM 2026</span>
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
        <div class="presentation-note">
          <strong>Presentation note:</strong>
          Pre-recorded or video presentations are permitted only in exceptional circumstances, such as visa-related
          issues or other force majeure situations.
        </div>
        <section
          v-for="award in awards"
          :key="award.name"
          class="award-section"
        >
          <h2 class="award-title">
            {{ award.name }}
            <span class="award-count"
              >{{ award.papers.length }} {{ award.papers.length === 1 ? 'paper' : 'papers' }}</span
            >
          </h2>
          <article
            v-for="paper in award.papers"
            :key="paper.title"
            class="paper"
          >
            <div class="cente-title">{{ paper.authors }}</div>
            <div class="paper-title">{{ paper.title }}</div>
            <a
              v-if="paper.link"
              class="paper-link"
              :href="paper.link"
              target="_blank"
              rel="noopener noreferrer"
              >{{ paper.link }}</a
            >
          </article>
        </section>
      </div>
    </div>
    <div class="footer padding">
      <div>
        <div class="email-icon"></div>
        <div class="email-info">
          <p>If you have any question, feel free to contact us:</p>
          <p style="color: #b3ebff">yanjiangpeng@efunds.com.cn</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      awards: [
        {
          name: 'Best Paper Award',
          papers: [
            {
              authors:
                'Jijun Chi, Zhenghan Tai, Hanwei Wu, Tung Sum Thomas Kwok, Hailin He, Yanzhang Ma, Zixing Liao, Bohuai Xiao, Chaolong Jiang, Jianliang Lei, Jerry Huang, Peng Lu, Muzhi Li, Liheng Ma, Yihong Wu, Sicheng Lyu, Jingrui Tian, Dingtao Hu, Yufei Cui, Ling Zhou, Lei Ding and Xinyu Wang',
              title: 'FinSAgent: A Financial Specialized Multi-Agent System for SEC Filing Analysis',
            },
          ],
        },
        {
          name: 'Best Paper Runner-Up Award',
          papers: [
            {
              authors: 'Zijie Zhao and Roy Welsch',
              title:
                'Learning Whom to Trust: Market-Feedback Adaptive RAG for Frozen LLMs and Event-Driven Market-Impact Signals',
            },
          ],
        },
        {
          name: 'Long Oral Paper Award',
          papers: [
            {
              authors: 'Jan Spörer',
              title: 'Can Open-Weight Models Compete on Financial Text Comprehension?',
            },
            {
              authors: 'Isabel Xu, Cynthia Xu, Rachel Ren, Cong Guo and Jiacheng Ding',
              title:
                'TriAgent: Divergence-Aware Multi-Agent Committees for Cost-Efficient and Privacy-Preserving Financial Sentiment Analysis',
            },
            {
              authors: 'Anastasiia Fedorova, Fedor Buzaev, Marat Galyavov and Daria Pugacheva',
              title: 'Document-Grounded DCF Valuation with LLM Assumption Governance',
            },
            {
              authors: 'Guy Stéphane Waffo Dzuyo, Gaël Guibon, Christophe Cerisara and Luis Belmar Letelier',
              title:
                'Benchmarking Generalization in Financial Statement Fraud Detection: Robust Evaluation and Novel Tasks',
              link: 'https://arxiv.org/abs/2607.19259',
            },
            {
              authors: 'Mingxuan Yi, Vidal Mehra, Jing Chen and John Cartlidge',
              title: 'Enhancing Regime Shift Detection Using Unstructured Data: A Study on the Treasury Market',
              link: 'https://arxiv.org/abs/2605.30363',
            },
          ],
        },
        {
          name: 'Short Oral Paper Award',
          papers: [
            {
              authors: 'Ruoxi Zhao and Maziar Raissi',
              title: 'Backtrader-Bench: Benchmarking LLM Agents on Algorithmic Trading with Self-Generated MCQs',
            },
            {
              authors: 'Chun Chet Ng, Jia Yu Lim and Wei Zeng Low',
              title: 'PRISM: Prompt-Refined In-Context System Modeling for Financial Retrieval',
              link: 'https://arxiv.org/abs/2511.14130',
            },
            {
              authors: 'Manuela Zaidan and Silvia Tessaro Trapani',
              title: 'Substantive Equality in the Age of Generative and Agentic AI: Rethinking Creditworthiness',
            },
            {
              authors: 'Joohyun Lee and Sungwoo Hong',
              title: 'Hierarchical Reranking for Scalable Financial RAG System',
              link: 'https://arxiv.org/abs/2607.27523',
            },
            {
              authors: 'Daohan Zhu, Sitong Ge, Ruofei Wang, Honggu Chen, Yubo Hou, Tao Wan and Zengchang Qin',
              title: 'Beyond Sentiment: Structured Information Extraction from Financial News',
              link: 'https://arxiv.org/abs/2607.28496',
            },
            {
              authors: 'Yikuan Huang and Zheqi Fan',
              title:
                'From Prompting to Autonomous Discovery: A Closed-Loop Agentic LLM Framework for Financial Signal Generation',
            },
            {
              authors: 'Anubhav Lakra and Yue Feng',
              title: 'CACHE-UK: A Stability-Aware Memory Editor for Sequentially Updated Quantized LLMs in Finance',
              link: 'https://arxiv.org/abs/2607.28292',
            },
            {
              authors: 'Bünyamin Burak Payzun, Irem Demirtaş, Simona Scala, Elena Ferretti and Seçil Arslan',
              title: 'Benchmarks Are Not Validation: A System-Level View of Financial LLM Applications',
            },
            {
              authors:
                'Viacheslav Shalamov, Valeria Efimova, Ilya Novitskiy, Kirill Mironov, Sergey Muravyov, Georgii Petrov and Andrey Silivonchik',
              title:
                'Evaluating Frontier LLMs Against an Interpretable Reference for Cross-Border Economic-Crisis Detection',
            },
            {
              authors: 'Rui Sun, Zuo Bai, Li Zhao and Zuoyou Jiang',
              title: 'ContestTrade: A Multi-Agent Trading System Based on Internal Contest Mechanism',
              link: 'https://arxiv.org/abs/2508.00554',
            },
          ],
        },
      ],
    }
  },
}
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
.presentation-note {
  margin: 22px 0 34px;
  padding: 16px 20px;
  border-left: 5px solid #4774f4;
  border-radius: 0 8px 8px 0;
  color: #4f5b62;
  background: #f3f6ff;
  font-size: 18px;
  line-height: 1.65;
  text-align: left;
  strong {
    color: #0d152e;
    font-weight: 700;
  }
}
.award-section {
  margin-top: 54px;
  &:first-child {
    margin-top: 24px;
  }
}
.award-title {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0 0 26px;
  padding-bottom: 12px;
  border-bottom: 1px solid #dce5fb;
  color: #0d152e;
  font-size: 28px;
  line-height: 1.4;
  font-weight: 600;
}
.award-count {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 2px 12px;
  border-radius: 14px;
  color: #4774f4;
  background: #edf2ff;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
}
.paper {
  position: relative;
  margin: 0 0 30px;
  padding-left: 22px;
  &::before {
    content: '';
    position: absolute;
    top: 12px;
    left: 0;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #4774f4;
  }
  .cente-title {
    margin-top: 0;
    color: #81838c;
    font-size: 26px;
    line-height: 1.5;
    font-weight: 500;
  }
}
.paper-title {
  margin-top: 0;
  color: #81838c;
  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;
}
.paper-link {
  display: block;
  margin-top: 0;
  margin-bottom: 20px;
  color: #0088ff;
  font-size: 20px;
  line-height: 2;
  overflow-wrap: anywhere;
  &:hover {
    color: #1e4dcc;
    text-decoration: underline;
  }
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
  .award-title {
    align-items: flex-start;
    flex-direction: column;
    font-size: 46px;
  }
  .presentation-note {
    padding: 26px 30px;
    border-left-width: 10px;
    border-radius: 0 14px 14px 0;
    font-size: 36px;
  }
  .award-count {
    min-height: 48px;
    padding: 4px 20px;
    border-radius: 24px;
    font-size: 26px;
  }
  .paper {
    padding-left: 30px;
    &::before {
      top: 22px;
      width: 12px;
      height: 12px;
    }
    .cente-title {
      font-size: 52px;
    }
  }
  .paper-title {
    font-size: 40px;
  }
  .paper-link {
    font-size: 40px;
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
