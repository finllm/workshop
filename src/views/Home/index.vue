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
        <span>FinLLM 2025</span>
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
        (FinLLM 2025)@IJCAI 2025<br />
        <div class="sub-title">
          Engineering Symposium on Theories and Applications<br />
          of Financial Large Models<br />
          <span>Guangzhou, China, August 29, 2025</span>
        </div>
      </div>
      <button
        class="registration"
        @click="$router.push('/fcb2025')"
      >
        2025 AcceptedList
      </button>
      <button
        class="registration"
        @click="$router.push('/fcb2023')"
      >
        2023 AcceptedList
      </button>
    </div>
    <div class="center-box w padding">
      <!-- <div class="center-img-box"></div> -->
      <div class="mg-bottom"></div>
      <h1>Scope and Objective</h1>
      <div class="cente-text mg-bottom">
        Building on the success of FinLLM2023 in Macau, FinLLM2025 returns as a core satellite event of IJCAI 2025,
        scheduled for <b>August 29, 2025</b> in Guangzhou. This symposium continues to bridge pretrained large-language
        models (LLMs) with financial services, addressing breakthroughs in technology, real-world applications, and
        emerging challenges. <br /><br />

        LLMs have demonstrated transformative potential in financial forecasting, risk management, and sentiment
        analysis, automating tasks like financial report analysis and insight extraction. FinLLM2025 aims to provide a
        global platform for stakeholders to share novel research, exchange industry best practices, and debate the
        future of LLM integration in finance.<br /><br />
        <span
          class="p-text"
          style="font-weight: 700"
          >Thematic Focus</span
        ><br />
        1. Expanding Applications & Best Practices<br />
        Exploring untapped use cases (e.g., smart trading, cross-lingual analysis) and refining workflows for seamless
        LLM integration.<br /><br />
        2. Overcoming Efficiency, Effectiveness, & Trust Challenges<br />
        Addressing data privacy, model interpretability, bias mitigation, and regulatory compliance in financial LLM
        applications.
      </div>
      <h1>Call for Papers & Updates</h1>
      <div class="cente-text mg-bottom">
        <div class="cente-text-cente flex">
          <div class="text">
            <span>Submission Updates</span>
            <br />
            <b>• Original Submissions (closed on June 6, 2025):</b><br />
            &nbsp;&nbsp;&nbsp;&nbsp;∘ Two outstanding student authors have been awarded sponsorship for IJCAI 2025
            registration fees.<br />
            &nbsp;&nbsp;&nbsp;&nbsp;∘ Selected papers have been notified and recommended for publication in the FITEE
            special issue "Theory and Applications of Financial Large Models" (SCI-E indexed, IF 2.7).<br />
            <b>• Extended Submission Period (open until July 15, 2025):</b><br />
            We welcome late submissions for workshop presentation consideration. Submissions will be evaluated for
            innovative research on LLM applications in finance, with selected authors invited to showcase their work at
            FinLLM2025.<br /><br />
          </div>
        </div>
        <div class="cente-text-cente flex">
          <div class="text">
            <span>Submission Guidelines</span>
            <br />
            • Submit via <a href="https://easychair.org/account2/signin?l=5508383540203630141">EasyChair.</a><br />
            • Follow <a href="https://www.fitee.zjujournals.com/en/about/7144/">FITEE template</a> or IJCAI 2025
            formatting (English only).<br />
            • Note: Late submissions will not be considered for FITEE publication but may qualify for workshop
            presentation.<br /><br />
          </div>
        </div>
        <div class="cente-text-cente flex">
          <div class="text">
            <span>Key Topics (including but not limited to)</span><br />
            <span>Techniques: </span>
            <br />
            • Multimodal financial data modeling with LLMs<br />
            • Cross-lingual LLM architectures for global finance <br />
            • Human-in-the-loop frameworks for financial decision-making<br /><br />
            <span>Applications:</span><br />
            • LLM-based algorithmic trading systems<br />
            • Semantic analysis of regulatory filings<br />
            • Explainable AI in risk assessment<br /><br />
            <span>Challenges:</span><br />
            • Ethical biases in financial LLM predictions<br />
            • Cross-border data privacy compliance<br />
            • Real-time model validation for financial stability<br /><br />
          </div>
          <div class="img-box">
            <img
              src="@/assets/img/IMG.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <h1>Important Dates</h1>
      <div class="card-box mg-bottom">
        <div class="card">
          <p class="title">Submission Deadline:</p>
          <p class="timer">
            <span class="month">July 15, 2025</span>
            <span class="date">(23:59:59 AoE)</span>
          </p>
        </div>
        <div class="card">
          <p class="title">Presentation Notification:</p>
          <p class="timer">
            <span class="month">July 20, 2025</span>
            <!-- <span class="date">(23:59:59 AoE)</span> -->
          </p>
        </div>
        <div class="card">
          <p class="title">Workshop Date:</p>
          <p class="timer">
            <span class="month">August 29, 2025</span>
            <!-- <span class="date">(23:59:59 AoE)</span> -->
          </p>
        </div>
        <!-- <div class="card">
          <p class="title">Symposium Date:</p>
          <p class="timer">
            <span class="month">August 20, 2023</span>
          </p>
        </div> -->
      </div>
    </div>
    <div class="center-box w padding">
      <p><br /></p>
      <h1>Organizers of Organizing Committee</h1>
      <div class="cente-text mg-bottom">
        <div class="centet-people">
          <div class="left-title">General Chair</div>
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
                <p class="note">PolyU</p>
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
                <p class="note">E Fund</p>
              </div>
            </div>
          </div>
        </div>
        <div class="centet-people">
          <div
            class="left-title"
            style="text-align: left"
          >
            Chairman of the Program Committee
          </div>
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
                <p class="note">E Fund</p>
              </div>
            </div>
          </div>
        </div>
        <div class="centet-people">
          <div class="left-title">Student Program Chairs</div>
          <div class="people-box">
            <div class="info-box">
              <div class="avt">
                <img
                  src="@/assets/img/mayue.png"
                  alt=""
                />
              </div>
              <div class="info">
                <p class="name">Yue Ma</p>
                <p class="note">HKUST</p>
              </div>
            </div>
            <div class="info-box">
              <div class="avt">
                <img
                  src="@/assets/img/zhangjunjie.png"
                  alt=""
                />
              </div>
              <div class="info">
                <p class="name">Junjie Zhang</p>
                <p class="note">NTU</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cente-text mg-bottom">
        <div class="cente-text-cente justify">
          <span>Qiang Yang: </span>
          Director of Academy of Artificial Intelligence, Chief Artificial Intelligence Officer, and half-time Chair
          Professor of AI in the Department of Data Science and Artificial Intelligence at Hongkong PolyU. AAAI Fellow,
          IEEE Fellow, AAAS Fellow, IAPR Fellow and ACM Distinguished Members. President of IJCAI (2017-2019). Vice
          Chair of ACM SIGART (SIGAI) (2009-2012), PC Chair and Co-Chair: IJCAI(2015), ACM KDD(2010).<br />
          Google Scholar: <br /><a href="https://scholar.google.com/citations?user=1LxWZLQAAAAJ"
            >https://scholar.google.com/citations?user=1LxWZLQAAAAJ</a
          ><br /><br />
          <span>Liyuan Chen: </span>
          Vice President of E Fund Management, Chairperson of E Fund FinTech Executive Committee.<br /><br />
          <span>Shuoling Liu: </span>
          Cheif Information Officer of E Fund Management, Member of E Fund FinTech Executive Committee, Head of
          Innovation Lab, Member of the FinTech Special Committee of AMAC.<br /><br />
          <span>Prof. Xiu Li: </span>
          Tsinghua Shenzhen International Graduate School, China. <br /><br />
          <span>Prof. Xiaojun Zeng: </span>
          University of Manchester, UK. <br /><br />
          <span>Prof. Bo An: </span>
          Nanyang Technological University, Singapore.<br /><br />
          <span>Prof. Jian Guo: </span>
          Digital Economy Institute of Guangdong-Hong Kong-Macao Greater Bay Area (IDEA), China.<br /><br />
          <span>Dr. Jianzong Wang: </span>
          Deputy Chief Engineer of Ping An Technology Co., Ltd., China.
        </div>
      </div>
      <h1>Meeting Agenda</h1>
      <div class="cente-text mg-bottom">
        <div class="table">
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Item or report title</th>
                <th>Host or reporter</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>08:30-08:35</td>
                <td>Opening Speech</td>
                <td>Shuoling Liu, E Fund</td>
              </tr>
              <tr>
                <td>08:35-09:05</td>
                <td>Continual Federated Learning</td>
                <td>Professor Qiang Yang, PolyU</td>
              </tr>
              <tr>
                <td>09:05-09:35</td>
                <td>Exploration of the Application and Optimization of Financial Large Models</td>
                <td>LuChuan, NVIDIA</td>
              </tr>
              <tr>
                <td>09:35-10:05</td>
                <td>Qwen Dianjin: Advances and Insights</td>
                <td>Lifan Guo, Alibaba</td>
              </tr>
              <tr>
                <td>10:05-10:15</td>
                <td>Coffee Break</td>
                <td></td>
              </tr>
              <tr>
                <td>10:15-10:45</td>
                <td>Large Invest Model</td>
                <td>Professor Jian Guo, IDEA</td>
              </tr>
              <tr>
                <td>10:45-11:00</td>
                <td>The Exploration of LLMs in Finance: A Case Study on Compliance and Security</td>
                <td>Junyang Li, E Fund</td>
              </tr>
              <tr>
                <td>11:00-11:10</td>
                <td>DeepFund: Will LLMs be Professional at Fund Investment? A Live Arena Perspective</td>
                <td>Changlun Li, HKUST</td>
              </tr>
              <tr>
                <td>11:10-11:20</td>
                <td>
                  Advanced Financial Reasoning at Scale: A Comprehensive Evaluation of Large Language Models on CFA
                  Level III
                </td>
                <td>Rochester Institute of Technology (Video)</td>
              </tr>
              <tr>
                <td>11:20-11:30</td>
                <td>FinSphere, a Real-Time Stock Analysis Agent Powered by Instruction-Tuned LLMs and Domain Tools</td>
                <td>Shijie Han, Columbia University</td>
              </tr>
              <tr>
                <td>11:30-11:35</td>
                <td>TULIP: Adapting Open-Source Large Language Models for Underrepresented</td>
                <td>İrem Demirtaş, Burak Payzun Prometeia SPA</td>
              </tr>
              <tr>
                <td>11:35-11:40</td>
                <td>FinMarBa: A Market-Informed Dataset for Financial Sentiment Classification</td>
                <td>Ai For Alpha, France (Video)</td>
              </tr>
              <tr>
                <td>11:40-11:45</td>
                <td>
                  Integration of Large Language Models and Environmental, Social, and Governance in Financial
                  Investment: State of the Art and Key Takeaways
                </td>
                <td>Qianyu Lu, University of Cambridge</td>
              </tr>
              <tr>
                <td>11:45-11:50</td>
                <td>
                  HARLF: Hierarchical Reinforcement Learning and Lightweight LLM-Driven Sentiment Integration for
                  Financial Portfolio Optimization
                </td>
                <td>Benjamin CORIAT, CentraleSupelec, France</td>
              </tr>
              <tr>
                <td>11:50-11:55</td>
                <td>Awarding ceromony</td>
                <td></td>
              </tr>
              <tr>
                <td>11:55-12:00</td>
                <td>Ending talk</td>
                <td>Shuoling Liu, E Fund</td>
              </tr>
            </tbody>
          </table>
        </div>
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
  // display: flex;
  // justify-content: space-between;
  padding-top: 90px;
  @media (max-width: 750px) {
    height: 1200px;
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
            // border: 1px solid #e2e2e2;
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
        // margin-left: 120px;
        @media (max-width: 750px) {
          // margin-left: 40px;
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
            // border: 1px solid #e2e2e2;
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
/* 针对 Firefox 浏览器 */
@supports (-moz-appearance: none) {
  @media (max-width: 750px) {
    .public-mixin();
  }
}
/* 针对 iOS 设备，Retina 屏幕 */
@media screen and (-webkit-min-device-pixel-ratio: 2) and (max-width: 750px) {
  .public-mixin();
}

/* 针对 iOS 设备，非 Retina 屏幕 */
@media screen and (-webkit-max-device-pixel-ratio: 1) and (max-width: 750px) {
  .public-mixin();
}

/* 针对特定的 iOS 设备（例如：iPhone 6/7/8 Plus） */
@media screen and (device-aspect-ratio: 16/9) and (-webkit-min-device-pixel-ratio: 3) and (max-width: 750px) {
  .public-mixin();
}
</style>
