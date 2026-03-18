<template>
  <div class="home">
    <div style="display: none">
      <img
        src="@/assets/img/logo.jpg"
        alt=""
      />
    </div>
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
    <div class="subtitle padding w">
      <div class="sub-text">
        International Symposium on <br />Large Language Models for Financial Services<br />
        (FinLLM@IJCAI2026)<br />
        <div class="sub-title">
          In Conjunction with IJCAI2026<br />
          <span>Bremen, Germany, August 15-17, 2026</span>
        </div>
      </div>
      <button
        class="registration"
        @click="$router.push('/fcb2026')"
      >
        2026 Accepted Papers
      </button>
      <button
        class="registration"
        @click="$router.push('/fcb2025')"
      >
        2025 Accepted Papers
      </button>
      <button
        class="registration"
        @click="$router.push('/fcb2023')"
      >
        2023 Accepted Papers
      </button>
    </div>
    <div class="center-box w padding">
      <div class="mg-bottom"></div>
      <h1>Scope and Objective</h1>
      <div class="cente-text mg-bottom">
        Building on the resounding success of our previous symposiums—FinLLM@IJCAI 2023 in Macau and the dual-city
        FinLLM@IJCAI 2025 in Montreal & Guangzhou—FinLLM 2026 returns as a core satellite event of IJCAI 2026. Large
        Language Models (LLMs) have consistently demonstrated transformative potential in the financial sector,
        automating complex tasks ranging from financial forecasting and risk management to sentiment analysis and
        insight extraction.<br /><br />

        The landscape of financial technology is now experiencing a paradigm shift from conversational LLMs to highly
        autonomous AI agents. The explosive growth of open-source agentic frameworks, such as OpenClaw, is democratizing
        complex financial operations. This evolution is enabling the rise of the "One-Person Company" (OPC)
        organizational paradigm—where lean teams or solo founders can orchestrate multi-agent systems to autonomously
        handle quantitative analysis, algorithmic trading, and portfolio management at an enterprise scale.<br /><br />

        As the deployment of these systems deepens, new critical frontiers have emerged. A major focus is the
        collaboration between large and small models, seeking the optimal balance between the robust reasoning of
        cloud-based foundation models and the latency/privacy benefits of local, smaller models. Furthermore, the
        economic efficiency of token consumption in high-frequency financial applications, the robust security of
        autonomous execution, and the complex landscape of bias diversity in global finance have become central to
        sustainable AI integration.<br /><br />

        FinLLM 2026 aims to provide a global platform for academic researchers, industry practitioners, and policymakers
        to share novel research, exchange best practices, and debate the future of AI in finance.
      </div>

      <h1>Call for Papers</h1>
      <div class="cente-text mg-bottom">
        We invite original research contributions, position papers, and work-in-progress reports. The workshop topics
        include but are not limited to:<br /><br />

        <span
          class="p-text"
          style="font-weight: 700"
          >1. Architectures, Agentic Workflows & Model Collaboration:</span
        ><br />
        • Synergistic frameworks combining Large Foundation Models (Cloud) and Small Specialized Models (Edge/Local) in
        finance.<br />
        • Autonomous AI agents (e.g., OpenClaw) and the "One-Person Company" (OPC) organizational paradigm.<br />
        • Multi-agent systems (Manager/Worker frameworks) for complex financial decision-making and smart trading.<br />
        • Multimodal financial data modeling and cross-lingual architectures for global finance.<br /><br />

        <span
          class="p-text"
          style="font-weight: 700"
          >2. Efficiency, Token Economics & Optimization:</span
        ><br />
        • Token economics and cost-effective deployment strategies for financial LLM applications.<br />
        • Resource-efficient fine-tuning, inference, and distillation for high-frequency financial tasks.<br />
        • Sustainable scaling of multi-agent interactions in enterprise environments.<br /><br />

        <span
          class="p-text"
          style="font-weight: 700"
          >3. Security, Trust & Ethics in Autonomous Finance:</span
        ><br />
        • Advanced security protocols and permission controls for autonomous financial AI agents.<br />
        • Evaluating and managing bias diversity, fairness, and cultural alignment in cross-border financial
        predictions.<br />
        • Real-time model validation, hallucination mitigation, and systemic stability in algorithmic trading.<br />
        • Cross-border data privacy compliance and regulatory alignment for agentic AI.
      </div>

      <h1>Submission Instructions</h1>
      <div class="cente-text mg-bottom">
        Each submission can be up to 7 pages of contents plus up to 2 additional pages of references and
        acknowledgements. The submitted papers must be written in English and in PDF format according to the
        <a
          href="https://www.ijcai.org/authors_kit"
          target="_blank"
          >IJCAI'26 template</a
        >. All submitted papers will be under a single-blind peer review for their novelty, technical quality, and
        impact. The submissions can contain author details.<br /><br />

        Based on the requirement from IJCAI'26, at least one author of each accepted paper must travel to the IJCAI
        venue in person. In addition, multiple submissions of the same paper to more than one IJCAI workshop are
        forbidden.<br /><br />

        <span>Easychair submission site:</span> [Link to be updated]<br />
        <span>For enquiries, please email to:</span>
        <a href="mailto:yanjiangpeng@efunds.com.cn">yanjiangpeng@efunds.com.cn</a>
      </div>

      <h1>Important Dates</h1>
      <div class="card-box mg-bottom">
        <div class="card">
          <p class="title">Final Submission Deadline:</p>
          <p class="timer">
            <span class="month">May 1, 2026</span>
            <span class="date">(23:59:59 AoE)</span>
          </p>
        </div>
        <div class="card">
          <p class="title">Notification Due:</p>
          <p class="timer">
            <span class="month">June 1, 2026</span>
            <span class="date">(23:59:59 AoE)</span>
          </p>
        </div>
        <div class="card">
          <p class="title">Workshop Date:</p>
          <p class="timer">
            <span class="month">August 15-17, 2026</span>
          </p>
        </div>
      </div>
    </div>

    <div class="center-box w padding">
      <p><br /></p>
      <h1>Organizing Committee</h1>

      <div class="cente-text mg-bottom">
        <h2 style="font-size: 28px; color: #0078ce; margin: 30px 0 20px 0">General Chairs</h2>
        <div class="centet-people">
          <div class="people-box">
            <div class="info-box">
              <div class="avt">
                <img
                  src="@/assets/img/7.png"
                  alt=""
                />
              </div>
              <div class="info">
                <p class="name">Qiang Yang</p>
                <p class="note">The Hong Kong Polytechnic University</p>
              </div>
            </div>
            <div class="info-box">
              <div class="avt">
                <img
                  src="@/assets/img/9.png"
                  alt=""
                />
              </div>
              <div class="info">
                <p class="name">Liyuan Chen</p>
                <p class="note">E Fund Management Co., Ltd.</p>
              </div>
            </div>
          </div>
        </div>
        <div style="margin-top: 20px; font-size: 18px; line-height: 1.8">
          <p>
            <strong>Prof. Qiang Yang:</strong> Director of Academy of Artificial Intelligence, Chief Artificial
            Intelligence Officer, and half-time Chair Professor of AI in the Department of Data Science and Artificial
            Intelligence at Hong Kong PolyU. AAAI Fellow, IEEE Fellow, AAAS Fellow, IAPR Fellow and ACM Distinguished
            Member. President of IJCAI (2017-2019). PC Chair and Co-Chair: IJCAI(2015), ACM KDD(2010).
          </p>
          <p style="margin-top: 15px">
            <strong>Ms. Liyuan Chen:</strong> Vice President of E Fund Management, Chairperson of E Fund FinTech
            Executive Committee.
          </p>
        </div>
      </div>

      <div class="cente-text mg-bottom">
        <h2 style="font-size: 28px; color: #0078ce; margin: 30px 0 20px 0">Executive Chair</h2>
        <div class="centet-people">
          <div class="people-box">
            <div class="info-box">
              <div class="avt">
                <img
                  src="@/assets/img/6.png"
                  alt=""
                />
              </div>
              <div class="info">
                <p class="name">Shuoling Liu</p>
                <p class="note">E Fund Management Co., Ltd.</p>
              </div>
            </div>
          </div>
        </div>
        <div style="margin-top: 20px; font-size: 18px; line-height: 1.8">
          <p>
            <strong>Dr. Shuoling Liu:</strong> Chief Information Officer of E Fund Management, Member of E Fund FinTech
            Executive Committee, Head of Innovation Lab, Member of the FinTech Special Committee of AMAC.
          </p>
        </div>
      </div>

      <div class="cente-text mg-bottom">
        <h2 style="font-size: 28px; color: #0078ce; margin: 30px 0 20px 0">Program Committee (TBD)</h2>
        <div class="centet-people">
          <div class="people-box">
            <div class="info-box">
              <div
                class="avt"
                style="background-color: #e0e0e0"
              ></div>
              <div class="info">
                <p class="name">Xiaojun Zeng</p>
                <p class="note">The University of Manchester</p>
              </div>
            </div>
            <div class="info-box">
              <div
                class="avt"
                style="background-color: #e0e0e0"
              ></div>
              <div class="info">
                <p class="name">Zhongtian Sun</p>
                <p class="note">University of Kent</p>
              </div>
            </div>
            <div class="info-box">
              <div
                class="avt"
                style="background-color: #e0e0e0"
              ></div>
              <div class="info">
                <p class="name">Xiu Li</p>
                <p class="note">Tsinghua University</p>
              </div>
            </div>
            <div class="info-box">
              <div
                class="avt"
                style="background-color: #e0e0e0"
              ></div>
              <div class="info">
                <p class="name">Qianqian Xie</p>
                <p class="note">Wuhan University</p>
              </div>
            </div>
          </div>
        </div>
        <p style="margin-top: 20px; font-size: 18px; color: #666">More members to be announced...</p>
      </div>

      <div class="cente-text mg-bottom">
        <h2 style="font-size: 28px; color: #0078ce; margin: 30px 0 20px 0">Workshop Secretary</h2>
        <div class="centet-people">
          <div class="people-box">
            <div class="info-box">
              <div
                class="avt"
                style="background-color: #e0e0e0"
              ></div>
              <div class="info">
                <p class="name">Jiangpeng Yan</p>
                <p class="note">E Fund Management Co., Ltd.</p>
              </div>
            </div>
            <div class="info-box">
              <div
                class="avt"
                style="background-color: #e0e0e0"
              ></div>
              <div class="info">
                <p class="name">Yuchen Shi</p>
                <p class="note">E Fund Management Co., Ltd.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1>Organized by</h1>
      <div class="cente-text mg-bottom">
        • E Fund Management Co., Ltd., China<br />
        • Tsinghua University, China<br />
        • The Hong Kong Polytechnic University, Hong Kong, China<br />
        • The University of Manchester, UK<br />
        • University of Kent, UK<br />
        • Wuhan University, China
      </div>

      <h1>Meeting Agenda</h1>
      <div class="cente-text mg-bottom">
        <p style="font-size: 20px; color: #81838c">To be announced.</p>
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
export default {}
</script>

<style lang="less" scoped>
@import '../../style/public.less';
.padding {
  padding: 0 130px;
}
.w {
  min-width: 1715px;
  max-width: 1920px;
  margin: 0 auto;
}
.mg-bottom {
  margin-bottom: 50px;
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
.subtitle {
  background: url('@/assets/img/header-bg.jpg') no-repeat;
  height: 614px;
  box-sizing: border-box;
  background-size: 100% 100%;
  padding-top: 90px;
  @media (max-width: 750px) {
    height: 1400px;
  }
  .sub-text {
    position: relative;
    font-size: 43px;
    color: #ffffff;
    line-height: 60px;
    font-weight: 700;
    padding-left: 20px;
    .sub-title {
      font-size: 35px;
      color: rgba(255, 255, 255, 0.8);
      margin-top: 20px;
    }
    @media (max-width: 750px) {
      font-size: 80px;
      line-height: 1.5;
      padding-left: 50px;
      .sub-title {
        font-size: 60px;
      }
    }
    @media (max-width: 375px) {
      font-size: 70px;
      line-height: 1.4;
      padding-left: 16px;
      .sub-title {
        font-size: 60px;
      }
    }
    &::before {
      position: absolute;
      width: 10px;
      content: '';
      display: inline-block;
      background-color: #4774f4;
      left: 0;
      top: 15px;
      bottom: 15px;
      @media (max-width: 750px) {
        width: 30px;
      }
      @media (max-width: 375px) {
        width: 10px;
      }
    }
  }
  .sub-img {
    width: 300px;
    height: 434px;
    flex-shrink: 0;
    @media (max-width: 750px) {
      width: 330px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .registration {
    height: 50px;
    background-color: #4270f1;
    border: none;
    color: #ffffff;
    margin-top: 20px;
    font-size: 16px;
    cursor: pointer;
    margin-right: 30px;
    border-radius: 5px;
    @media (max-width: 750px) {
      width: 300px;
      height: 100px;
      font-size: 28px;
    }
  }
}
.center-box {
  h1 {
    font-size: 48px;
    color: #0d152e;
    line-height: 60px;
    font-weight: 700;
    &::before {
      content: '';
      display: inline-block;
      width: 10px;
      height: 40px;
      background-color: #4774f4;
      margin-right: 10px;
      vertical-align: baseline;
    }
  }

  .center-img-box {
    display: flex;
    margin-top: 72px;
    margin-bottom: 32px;
    width: 100%;
    background-color: #299bff;
    @media (max-width: 750px) {
      flex-direction: column;
      border-radius: 20px;
      padding: 80px 0;
    }

    .center-text-box {
      border-color: transparent;
      color: #ffffff;
      border-radius: 15px 0 0 15px;
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 750px) {
        width: 100%;
        justify-content: start;
        padding-left: 30px;
        font-size: 42px;
      }

      .center-text-top {
        margin-bottom: 12px;
        @media (max-width: 750px) {
          margin-bottom: 20px;
        }
      }

      .center-text-title {
        font-weight: 600;
        font-size: 32px;
      }

      .center-text-body {
        font-weight: 400;
        font-size: 24px;
      }
    }

    @media (max-width: 750px) {
      margin-top: -250px;
      .center-text-content {
        margin-left: 24px;
        @media (max-width: 750px) {
          span {
            font-size: 50px !important;
          }
        }
      }
    }

    .center-img {
      flex-grow: 1;
      border-radius: 0 15px 15px 0;
      border-left: 1px solid #20b9e1;
      height: 320px;
      @media (max-width: 750px) {
        width: 100%;
        height: auto;
        margin-top: 30px;
      }
    }
  }
  .cente-text {
    font-size: 20px;
    color: #81838c;
    text-align: justify;
    line-height: 34px;
    font-weight: 500;
    .centet-people {
      display: flex;
      align-items: center;
      margin-top: 40px;
      @media (max-width: 750px) {
        display: block;
      }
      .left-title {
        font-size: 24px;
        color: #0078ce;
        font-weight: 700;
        width: 280px;
        @media (max-width: 750px) {
          width: auto;
          font-size: 42px;
          margin-bottom: 20px;
        }
      }
      .people-box {
        flex: 1;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .info-box {
          display: flex;
          align-items: center;
          width: 25%;
          @media (max-width: 750px) {
            width: 50%;
            margin-bottom: 40px;
          }
          .avt {
            width: 90px;
            height: 90px;
            margin-right: 20px;
            background: rgba(95, 95, 95, 0.16);
            border-radius: 50%;
            overflow: hidden;
            @media (max-width: 750px) {
              width: 180px;
              height: 180px;
            }
            img {
              width: 100%;
              height: 100%;
            }
          }
          .xuqian {
            width: 100px;
            height: 90px;
          }
          @media (max-width: 750px) {
            .xuqian {
              width: 200px;
              height: 180px;
            }
          }
          .info {
            p {
              margin: 0;
            }
            .name {
              font-size: 19.8px;
              color: #292f36;
              font-weight: 700;
              @media (max-width: 750px) {
                font-size: 42px;
              }
            }
            .note {
              font-size: 16.2px;
              color: #292f36;
              font-weight: 500;
              text-align: left;
              @media (max-width: 750px) {
                font-size: 32px;
              }
            }
          }
        }
      }
    }
    .cente-text-title {
      font-size: 26px;
      font-weight: 700;
      margin-bottom: 34px;
    }
    .cente-text-cente {
      text-align: left;
      span {
        font-size: 26px;
        font-weight: 700;
      }
      .img-box {
        width: 620px;
        @media (max-width: 750px) {
          display: none;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .justify {
      text-align: justify;
    }
    .cente-footer {
      margin-top: 34px;
    }
    .p-text {
      font-size: 26px;
      font-weight: 700;
    }
    .table {
      width: 100%;
      margin-top: 20px;

      table {
        width: 100%;
        border-collapse: collapse;
        overflow: hidden;
      }

      th,
      td {
        padding: 12px;
        text-align: left;
        font-size: 16px;
        line-height: 1.5;
      }

      th:first-child,
      td:first-child {
        width: 200px;
        min-width: 200px;
      }

      th:last-child,
      td:last-child {
        width: 320px;
        min-width: 320px;
        padding-left: 16px;
      }

      thead {
        background-color: #f7f9fb;
        color: #4774f4;
        font-size: 26px;

        th {
          font-weight: 700;
          font-size: 24px;
        }
      }

      tbody {
        tr {
          &:nth-child(even) {
            background-color: #f7f9fb;
          }
        }

        td {
          color: #81838c;
          font-weight: 500;
          font-size: 24px;
          word-break: break-all;
        }
      }
    }
  }
  .card-box {
    display: flex;
    justify-content: space-around;
    .card {
      width: 285px;
      height: 156px;
      background: #f7f9fb;
      border-radius: 23px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p {
        margin: 0;
      }
      .title {
        font-size: 20px;
        color: #81838c;
        line-height: 33px;
        font-weight: 700;
      }
      .timer {
        color: #81838c;
        .month {
          font-size: 20px;
          font-weight: 500;
        }
        .date {
          font-size: 16px;
          font-weight: 500;
        }
      }
    }
  }
  .item-box {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    color: #81838c;
    text-align: justify;
    line-height: 34px;
    font-weight: 500;
    .item-box-left {
      width: 50%;
      background: url('@/assets/img/IMG.png') no-repeat;
      background-size: contain;
      text-align: left;
      p {
        font-size: 26px;
        font-weight: 700;
      }
    }
    .item-box-right {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      & > p {
        width: 280px;
        @media (max-width: 750px) {
          font-size: 42px !important;
          width: auto;
        }
      }
      @media (max-width: 750px) {
        display: block;
      }
      & > div {
        display: flex;
        flex: 1;
        justify-content: space-between;
        @media (max-width: 750px) {
          flex-wrap: wrap;
          margin-top: 40px;
        }
        .info-box {
          display: flex;
          align-items: center;
          width: 25%;
          @media (max-width: 750px) {
            width: 50%;
            margin-bottom: 40px;
          }
          .avt {
            width: 90px;
            height: 90px;
            margin-right: 20px;
            background: rgba(95, 95, 95, 0.16);
            border-radius: 50%;
            overflow: hidden;
            @media (max-width: 750px) {
              width: 180px;
              height: 180px;
            }
            img {
              width: 100%;
              height: 100%;
            }
          }
          .xuqian {
            width: 100px;
            height: 90px;
          }
          @media (max-width: 750px) {
            .xuqian {
              width: 200px;
              height: 180px;
            }
          }
          .info {
            flex: 1;
            p {
              margin: 0;
            }
            .name {
              font-size: 19.8px;
              color: #292f36;
              font-weight: 700;
              @media (max-width: 750px) {
                font-size: 42px;
              }
            }
            .note {
              font-size: 16.2px;
              color: #292f36;
              font-weight: 500;
              text-align: left;
              @media (max-width: 750px) {
                font-size: 32px;
              }
            }
          }
        }
      }
      p {
        font-size: 26px;
        font-weight: 700;
        margin: 0;
        color: #0078ce;
      }
    }
    .bg-none {
      background: none;
    }
  }
  .h1-title {
    margin-top: 50px;
    font-size: 26px;
    color: #81838c;
    line-height: 34px;
    font-weight: 700;
  }
}
.middle {
  min-width: 1715px;
  height: 544px;
  background: url('@/assets/img/CTA.png') no-repeat;
  background-size: cover;
  padding-top: 72px;
  margin-bottom: 50px;
  & > div {
    h1 {
      font-size: 48px;
      color: #ffffff;
      line-height: 60px;
      font-weight: 700;
      margin-bottom: 50px;
      &::before {
        content: '';
        display: inline-block;
        width: 10px;
        height: 40px;
        background-color: #ffffff;
        margin-right: 10px;
        vertical-align: baseline;
      }
    }
    & > div {
      display: flex;
      & > div {
        font-size: 27px;
        color: #ffffff;
        line-height: 45.9px;
        font-weight: 500;
        span {
          font-size: 35px;
          font-weight: 700;
        }
      }
    }
    .middle-mg {
      margin-right: 309px;
    }
  }
}
@media (max-width: 750px) {
  .header,
  .footer,
  .middle {
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
  .center-box {
    .cente-text {
      line-height: 50px;
    }
    .item-box {
      line-height: 60px;
      display: block;
      .item-box-left,
      .item-box-right {
        width: 100%;
        text-align: left;
      }
      .item-box-left {
        margin-bottom: 30px;
        background-position-x: 700px;
      }
      .media-bottom {
        margin-bottom: 0;
      }
    }
    .card-box {
      flex-wrap: wrap;
      .card {
        width: 49%;
        margin-bottom: 30px;
        .title {
          margin-bottom: 20px;
        }
      }
    }
  }
  .middle {
    height: auto;
    padding: 72px 0;
    & > div {
      .middle-mg {
        margin: 0;
      }
      & > div {
        display: unset;
        & > div {
          line-height: 60px;
        }
      }
    }
  }
  .table {
    table {
      font-size: 36px;
    }

    th,
    td {
      padding: 12px 10px;
      font-size: 36px;
    }

    thead {
      th {
        font-size: 36px;
      }
    }

    tbody {
      td {
        font-size: 36px;
      }

      th:first-child,
      td:first-child {
        width: 340px;
        min-width: 340px;
      }

      th:last-child,
      td:last-child {
        width: 340px;
        min-width: 340px;
        padding-left: 24px;
      }
    }
  }
}
@supports (-moz-appearance: none) {
  @media (max-width: 750px) {
    .public-mixin();
  }
}
@media screen and (-webkit-min-device-pixel-ratio: 2) and (max-width: 750px) {
  .public-mixin();
}

@media screen and (-webkit-max-device-pixel-ratio: 1) and (max-width: 750px) {
  .public-mixin();
}

@media screen and (device-aspect-ratio: 16/9) and (-webkit-min-device-pixel-ratio: 3) and (max-width: 750px) {
  .public-mixin();
}
</style>
