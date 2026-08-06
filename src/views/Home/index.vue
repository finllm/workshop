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
          <a
            href="https://ijcai.org/"
            target="_blank"
          >
            <img
              src="@/assets/img/ijcai.png"
              alt="IJCAI"
            />
          </a>
          <a
            href="https://2026.ijcai.org/"
            target="_blank"
          >
            <img
              src="@/assets/img/logo-2026.jpg"
              alt="IJCAI 2026"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="subtitle padding w">
      <div class="sub-text">
        International Symposium on <br />Large Language Models for Financial Services<br />
        (FinLLM@IJCAI2026)<br />
        <div class="sub-title">
          Bremen, Germany, August 15, 2026<br />
          <span>In Conjunction with IJCAI2026, August 15-21, 2026</span>
        </div>
      </div>
      <div class="conf-link-small">
        Visit the main conference website at:
        <a
          href="https://2026.ijcai.org/"
          target="_blank"
          >https://2026.ijcai.org/</a
        >
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

        <span>Easychair submission site:</span>
        <a
          href="https://easychair.org/conferences/?conf=finllmijcai2026"
          target="_blank"
          >https://easychair.org/conferences/?conf=finllmijcai2026</a
        ><br />
        <span>For enquiries, please email to:</span>
        <a href="mailto:yanjiangpeng@efunds.com.cn">yanjiangpeng@efunds.com.cn</a>
      </div>

      <h1>Important Dates</h1>
      <div class="card-box mg-bottom">
        <div class="card">
          <p class="title">Final Submission Deadline:</p>
          <p class="timer">
            <span class="month">May 15, 2026</span>
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
            <span class="month">August 15, 2026</span>
          </p>
        </div>
      </div>
    </div>

    <div class="center-box w padding">
      <h1>Workshop Policy & Awards</h1>
      <div class="cente-text mg-bottom">
        <span
          class="p-text"
          style="font-weight: 700"
          >Exchange-Focused:</span
        ><br />
        We prioritize discussion and will provide award certificates for accepted papers. Top-3 papers will also get
        registration fee support.<br /><br />

        <span
          class="p-text"
          style="font-weight: 700"
          >Submission Policy:</span
        ><br />
        We allow submissions of papers already published elsewhere (please specify upon submission); these will not
        undergo secondary review.<br /><br />

        <span
          class="p-text"
          style="font-weight: 700"
          >Publication:</span
        ><br />
        There will be no formal workshop proceedings. Instead, accepted papers will receive detailed review feedback and
        in-depth discussion at the workshop to help authors revise and improve their work, with the aim of enhancing
        paper quality for future submission to other venues.<br /><br />

        <span
          class="p-text"
          style="font-weight: 700"
          >Outstanding Paper Recognition:</span
        ><br />
        To encourage and recognize exceptional contributions, FinLLM 2026 will select a number of distinguished papers
        for special recognition. Award recipients will be honored during the workshop and may receive additional support
        to facilitate their participation. Details of the evaluation criteria and recognition process will be
        communicated to authors of accepted papers. We warmly invite high-quality submissions that push the boundaries
        of LLM research in finance.
      </div>
    </div>

    <div class="center-box w padding">
      <p><br /></p>
      <h1>Organizing Committee</h1>

      <div class="cente-text mg-bottom">
        <h2 style="font-size: 28px; color: #4774f4; margin: 30px 0 20px 0">General Chairs</h2>
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
        <div
          class="cente-text"
          style="margin-top: 20px"
        >
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
        <h2 style="font-size: 28px; color: #4774f4; margin: 30px 0 20px 0">Executive Chair</h2>
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
        <div
          class="cente-text"
          style="margin-top: 20px"
        >
          <p>
            <strong>Dr. Shuoling Liu:</strong> Chief Information Officer of E Fund Management, Member of E Fund FinTech
            Executive Committee, Head of Innovation Lab, Member of the FinTech Special Committee of AMAC.
          </p>
        </div>
      </div>

      <div class="cente-text mg-bottom">
        <h2 style="font-size: 28px; color: #4774f4; margin: 30px 0 20px 0">Program Committee</h2>
        <div class="centet-people">
          <div class="people-box">
            <div class="info-box">
              <div class="avt">
                <img
                  src="@/assets/img/XiaojunZeng.png"
                  alt=""
                />
              </div>
              <div class="info">
                <p class="name">Xiaojun Zeng</p>
                <p class="note">The University of Manchester</p>
              </div>
            </div>
            <div class="info-box">
              <div class="avt">
                <img
                  src="@/assets/img/ZhongtianSun.jpg"
                  alt=""
                />
              </div>
              <div class="info">
                <p class="name">Zhongtian Sun</p>
                <p class="note">University of Kent</p>
              </div>
            </div>
            <div class="info-box">
              <div class="avt">
                <img
                  src="@/assets/img/XiuLi.png"
                  alt=""
                />
              </div>
              <div class="info">
                <p class="name">Xiu Li</p>
                <p class="note">Tsinghua University</p>
              </div>
            </div>
            <div class="info-box">
              <div class="avt">
                <img
                  src="@/assets/img/QianQianXie.jpg"
                  alt=""
                />
              </div>
              <div class="info">
                <p class="name">Qianqian Xie</p>
                <p class="note">Wuhan University</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="cente-text mg-bottom">
        <h2 style="font-size: 28px; color: #4774f4; margin: 30px 0 20px 0">Workshop Secretary</h2>
        <div class="centet-people">
          <div class="people-box">
            <div class="info-box">
              <div class="avt">
                <img
                  src="@/assets/img/jiangpengyan.png"
                  alt=""
                />
              </div>
              <div class="info">
                <p class="name">Jiangpeng Yan</p>
                <p class="note">E Fund Management Co., Ltd.</p>
              </div>
            </div>
            <div class="info-box">
              <div class="avt">
                <img
                  src="@/assets/img/yuchenshi.png"
                  alt=""
                />
              </div>
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
      <div class="agenda-intro">August 15, 2026 · Bremen, Germany</div>
      <div class="agenda-note">
        <strong>Presentation note:</strong>
        Pre-recorded or video presentations are permitted only in exceptional circumstances, such as visa-related issues
        or other force majeure situations.
      </div>
      <div class="agenda-table-wrap mg-bottom">
        <table class="agenda-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Session</th>
              <th>Speaker</th>
              <th>Institution</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in agenda"
              :key="item.time"
              :class="{ 'break-row': item.isBreak, 'featured-row': item.isFeatured }"
            >
              <td class="agenda-time">{{ item.time }}</td>
              <td>
                <span class="session-label">{{ item.session }}</span>
                <span
                  v-if="item.paperId"
                  class="agenda-paper-id"
                  >{{ item.paperId }}</span
                >
              </td>
              <td>{{ item.speaker }}</td>
              <td class="agenda-institution">{{ item.institution }}</td>
              <td class="agenda-title">{{ item.title }}</td>
            </tr>
          </tbody>
        </table>
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
      agenda: [
        {
          time: '09:00–09:10',
          session: 'Opening Remarks',
          speaker: 'Shuoling Liu',
          institution: 'E Fund, China',
          title: 'Welcome and workshop introduction',
          isFeatured: true,
        },
        {
          time: '09:10–09:40',
          session: 'Invited Talk I',
          speaker: 'Prof. Qiang Yang',
          institution: 'Hong Kong Polytechnic University, Hong Kong',
          title: 'Federated Learning and LLM',
          isFeatured: true,
        },
        {
          time: '09:40–10:05',
          paperId: 'FINLLM26-01',
          session: 'Best Paper Award Presentation',
          speaker: 'Xinyu Wang',
          institution: 'SimpleWay.AI, Canada\nMcGill University, Canada',
          title: 'FinSAgent: A Financial Specialized Multi-Agent System for SEC Filing Analysis',
          isFeatured: true,
        },
        { time: '10:05–10:15', session: 'Coffee Break (informal discussion)', isBreak: true },
        {
          time: '10:15–10:30',
          paperId: 'FINLLM26-03',
          session: 'Long Oral',
          speaker: 'Jan Spörer',
          institution: 'University of St. Gallen, Switzerland',
          title: 'Can Open-Weight Models Compete on Financial Text Comprehension?',
        },
        {
          time: '10:30–10:45',
          paperId: 'FINLLM26-04',
          session: 'Long Oral',
          speaker: 'Isabel Xu',
          institution: 'The Overlake School, United States',
          title:
            'TriAgent: Divergence-Aware Multi-Agent Committees for Cost-Efficient and Privacy-Preserving Financial Sentiment Analysis',
        },
        {
          time: '10:45–11:00',
          paperId: 'FINLLM26-05',
          session: 'Long Oral (pre-recorded)',
          speaker: 'Anastasiia Fedorova',
          institution: 'Higher School of Economics, Russia',
          title: 'Document-Grounded DCF Valuation with LLM Assumption Governance',
        },
        {
          time: '11:00–11:15',
          paperId: 'FINLLM26-06',
          session: 'Long Oral',
          speaker: 'Guy Stephane Waffo Dzuyo',
          institution: 'Université de Lorraine, France',
          title:
            'Benchmarking Generalization in Financial Statement Fraud Detection: Robust Evaluation and Novel Tasks',
        },
        {
          time: '11:15–11:30',
          paperId: 'FINLLM26-07',
          session: 'Long Oral',
          speaker: 'Mingxuan Yi',
          institution: 'University of Bristol, United Kingdom',
          title: 'Enhancing Regime Shift Detection Using Unstructured Data: A Study on the Treasury Market',
        },
        { time: '11:30–14:00', session: 'Lunch Break (informal / poster exchange)', isBreak: true },
        {
          time: '14:00–14:30',
          session: 'Invited Talk II',
          speaker: 'Asst. Prof. Zhongtian Sun',
          institution: 'University of Kent, United Kingdom',
          title: 'Towards Trustworthy AI in Finance: Structure, Agents, and Accountability',
          isFeatured: true,
        },
        {
          time: '14:30–14:55',
          paperId: 'FINLLM26-02',
          session: 'Best Paper Runner-Up Presentation',
          speaker: 'Zijie Zhao',
          institution: 'Massachusetts Institute of Technology, United States',
          title:
            'Learning Whom to Trust: Market-Feedback Adaptive RAG for Frozen LLMs and Event-Driven Market-Impact Signals',
          isFeatured: true,
        },
        {
          time: '14:55–15:03',
          paperId: 'FINLLM26-08',
          session: 'Short Oral (pre-recorded)',
          speaker: 'Ruoxi Zhao',
          institution: 'University of California, United States',
          title: 'Backtrader-Bench: Benchmarking LLM Agents on Algorithmic Trading with Self-Generated MCQs',
        },
        {
          time: '15:03–15:11',
          paperId: 'FINLLM26-09',
          session: 'Short Oral (pre-recorded)',
          speaker: 'Chun Chet Ng',
          institution: 'AI Lens, Malaysia',
          title: 'PRISM: Prompt-Refined In-Context System Modeling for Financial Retrieval',
        },
        {
          time: '15:11–15:19',
          paperId: 'FINLLM26-10',
          session: 'Short Oral (pre-recorded)',
          speaker: 'Manuela Zaidan',
          institution: 'Intesa Sanpaolo SPA, Italy',
          title: 'Substantive Equality in the Age of Generative and Agentic AI: Rethinking Creditworthiness',
        },
        {
          time: '15:19–15:27',
          paperId: 'FINLLM26-11',
          session: 'Short Oral',
          speaker: 'Joohyun Lee',
          institution: 'Financial Security Institute, South Korea\nHanyang University, South Korea',
          title: 'Hierarchical Reranking for Scalable Financial RAG System',
        },
        {
          time: '15:27–15:35',
          paperId: 'FINLLM26-12',
          session: 'Short Oral',
          speaker: 'Sitong Ge',
          institution: 'Beihang University, China',
          title: 'Beyond Sentiment: Structured Information Extraction from Financial News',
        },
        { time: '15:35–15:45', session: 'Coffee Break (informal discussion)', isBreak: true },
        {
          time: '15:45–15:53',
          paperId: 'FINLLM26-13',
          session: 'Short Oral',
          speaker: 'Yikuan Huang',
          institution: 'Hong Kong University of Science and Technology, Hong Kong',
          title:
            'From Prompting to Autonomous Discovery: A Closed-Loop Agentic LLM Framework for Financial Signal Generation',
        },
        {
          time: '15:53–16:01',
          paperId: 'FINLLM26-14',
          session: 'Short Oral',
          speaker: 'Anubhav Lakra',
          institution: 'Indian Institute of Technology Madras, India',
          title: 'CACHE-UK: A Stability-Aware Memory Editor for Sequentially Updated Quantized LLMs in Finance',
        },
        {
          time: '16:01–16:09',
          paperId: 'FINLLM26-15',
          session: 'Short Oral',
          speaker: 'Irem Demirtas',
          institution: 'Prometeia SPA, Turkey',
          title: 'Benchmarks Are Not Validation: A System-Level View of Financial LLM Applications',
        },
        {
          time: '16:09–16:17',
          paperId: 'FINLLM26-16',
          session: 'Short Oral (pre-recorded)',
          speaker: 'Sergei Muravev',
          institution: 'ITMO University, Russia',
          title:
            'Evaluating Frontier LLMs Against an Interpretable Reference for Cross-Border Economic-Crisis Detection',
        },
        {
          time: '16:17–16:25',
          paperId: 'FINLLM26-17',
          session: 'Short Oral',
          speaker: 'Mengting Chen',
          institution: 'Stepfun, China',
          title: 'ContestTrade: A Multi-Agent Trading System Based on Internal Contest Mechanism',
        },
        {
          time: '16:25–16:50',
          session: 'Award Ceremony & Closing Remarks',
          speaker: 'Shuoling Liu',
          institution: 'E Fund, China',
          title: 'Award recognition, acknowledgements, and closing remarks',
          isFeatured: true,
        },
      ],
    }
  },
}
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
.agenda-intro {
  display: inline-flex;
  align-items: center;
  margin: 4px 0 24px;
  padding: 8px 16px;
  border-radius: 999px;
  color: #4774f4;
  background: #edf2ff;
  font-size: 18px;
  line-height: 1.4;
  font-weight: 700;
}
.agenda-note {
  margin: 0 0 24px;
  padding: 14px 18px;
  border-left: 5px solid #4774f4;
  border-radius: 0 8px 8px 0;
  color: #4f5b62;
  background: #f3f6ff;
  font-size: 18px;
  line-height: 1.65;
  strong {
    color: #0d152e;
    font-weight: 700;
  }
}
.agenda-table-wrap {
  overflow-x: auto;
  border: 1px solid #dfe6f5;
  border-radius: 14px;
  background: #ffffff;
  box-shadow: 0 12px 34px rgba(36, 65, 130, 0.08);
}
.agenda-table {
  width: 100%;
  min-width: 1360px;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: fixed;
  text-align: left;
  th,
  td {
    padding: 19px 17px;
    border-bottom: 1px solid #e8edf7;
    vertical-align: top;
    color: #4f5b62;
    font-size: 18px;
    line-height: 1.6;
    overflow-wrap: break-word;
  }
  th {
    color: #ffffff;
    background: #4774f4;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.01em;
  }
  th:first-child {
    width: 130px;
  }
  th:nth-child(2) {
    width: 230px;
  }
  th:nth-child(3) {
    width: 190px;
  }
  th:nth-child(4) {
    width: 300px;
  }
  th:last-child {
    width: auto;
  }
  tbody tr:last-child td {
    border-bottom: 0;
  }
  tbody tr:not(.break-row):hover td {
    background: #f7f9ff;
  }
  .agenda-time {
    color: #0f172a;
    font-weight: 700;
    white-space: nowrap;
  }
  .session-label {
    color: #315fd8;
    font-weight: 700;
  }
  .agenda-paper-id {
    display: table;
    margin-top: 7px;
    padding: 2px 9px;
    border: 1px solid #cbd8ff;
    border-radius: 999px;
    color: #315fd8;
    background: #ffffff;
    font-size: 13px;
    line-height: 1.4;
    font-weight: 700;
    letter-spacing: 0.02em;
  }
  .agenda-institution {
    white-space: pre-line;
  }
  .agenda-title {
    color: #0f172a;
    font-weight: 600;
  }
  .featured-row td {
    background: #f8faff;
  }
  .featured-row .session-label {
    color: #173f9e;
  }
  .break-row td {
    padding-top: 12px;
    padding-bottom: 12px;
    color: #667085;
    background: #f3f6fb;
  }
  .break-row .session-label {
    color: #667085;
    font-style: italic;
  }
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
  background: #4774f4;
  .right {
    display: flex;
    align-items: center;
    gap: 16px;
    @media (max-width: 750px) {
      gap: 20px;
    }
    a {
      display: inline-block;
      width: 230px;
      height: 86px;
      flex-shrink: 0;
      @media (max-width: 750px) {
        width: 180px;
        height: 67px;
      }
      img {
        width: 100%;
        height: 100%;
        vertical-align: top;
        object-fit: contain;
      }
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
      background-color: #ffffff;
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
    height: 54px;
    background-color: #4774f4;
    border: none;
    color: #ffffff;
    margin-top: 20px;
    font-size: 20px;
    cursor: pointer;
    margin-right: 30px;
    border-radius: 5px;
    padding: 0 18px;
    @media (max-width: 750px) {
      width: 300px;
      height: 100px;
      font-size: 36px;
    }
  }
  .conf-link-small {
    display: block;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 20px;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;
    a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: underline;
      &:hover {
        color: #ffffff;
      }
    }
    @media (max-width: 750px) {
      font-size: 36px;
    }
  }
}
.center-box {
  h1 {
    font-size: 48px;
    color: #0f172a;
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
    background-color: #4774f4;
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
      border-left: 1px solid #4774f4;
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
    color: #4f5b62;
    text-align: justify;
    line-height: 34px;
    font-weight: 500;
    a {
      color: #4774f4;
      text-decoration: none;
      &:hover {
        color: #2f50c1;
        text-decoration: underline;
      }
    }
    .centet-people {
      display: flex;
      align-items: center;
      margin-top: 40px;
      @media (max-width: 750px) {
        display: block;
      }
      .left-title {
        font-size: 24px;
        color: #4774f4;
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
              color: #0f172a;
              font-weight: 700;
              @media (max-width: 750px) {
                font-size: 42px;
              }
            }
            .note {
              font-size: 16.2px;
              color: #0f172a;
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
          color: #4f5b62;
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
        color: #4f5b62;
        line-height: 33px;
        font-weight: 700;
      }
      .timer {
        color: #4f5b62;
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
    color: #4f5b62;
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
              color: #0f172a;
              font-weight: 700;
              @media (max-width: 750px) {
                font-size: 42px;
              }
            }
            .note {
              font-size: 16.2px;
              color: #0f172a;
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
        color: #4774f4;
      }
    }
    .bg-none {
      background: none;
    }
  }
  .h1-title {
    margin-top: 50px;
    font-size: 26px;
    color: #4f5b62;
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
  .agenda-intro {
    margin-bottom: 30px;
    padding: 14px 24px;
    font-size: 34px;
  }
  .agenda-note {
    margin-bottom: 30px;
    padding: 24px 28px;
    border-left-width: 10px;
    border-radius: 0 14px 14px 0;
    font-size: 34px;
  }
  .agenda-table-wrap {
    border-radius: 20px;
  }
  .agenda-table {
    min-width: 2300px;
    th,
    td {
      padding: 24px 20px;
      font-size: 30px;
      line-height: 1.5;
    }
    th {
      font-size: 32px;
    }
    th:first-child {
      width: 230px;
    }
    th:nth-child(2) {
      width: 390px;
    }
    th:nth-child(3) {
      width: 330px;
    }
    th:nth-child(4) {
      width: 510px;
    }
    .agenda-paper-id {
      margin-top: 10px;
      padding: 4px 14px;
      font-size: 24px;
    }
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
