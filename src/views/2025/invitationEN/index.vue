<template>
  <div class="invitation2025">
    <!-- 顶部蓝色背景和LOGO -->
    <div class="header-bg">
      <div class="header-content">
        <span class="header-title">FinLLM 2025</span>
        <img
          class="header-logo"
          src="@/assets/img/ijcai.png"
          alt="IJCAI LOGO"
        />
      </div>
    </div>
    <div class="main-content">
      <img
        class="main-bg-img"
        src="@/assets/img/2025-bg.png"
        alt="内容背景"
      />
      <div class="main-inner">
        <div class="main-title">
          Invitation to the 2025 International Workshop on Large Language Models in Financial Services(FinLLM 2025)@
          IJCAI 2025
        </div>
        <div class="main-section">
          We are honored to invite you to participate in the 2025 International Workshop on Large Language Models in
          Financial Services (FinLLM 2025), which is a workshop of the 26th International Joint Conference on Artificial
          Intelligence (IJCAI 2025). This high-level academic event will be held on the morning of August 29, 2025, at
          the Langham Hotel Guangzhou South. For more detailed information, please visit the workshop website:<br />
          <a
            href="https://finllm.github.io/workshop/#/"
            target="_blank"
            >https://finllm.github.io/workshop/#/</a
          >
        </div>
        <div class="main-section">
          FinLLM 2025 is jointly organized by the research team led by Professor Qiang Yang, Fellow of the Royal Society
          of Canada, the research team led by Professor Xiu Li from Tsinghua Shenzhen International Graduate School, and
          E Fund Management Co., Ltd. The organizing committee aims to bring together renowned scholars from academia
          and experienced practitioners from the financial industry worldwide to share cutting-edge research outcomes as
          well as insightful and practical perspectives. This workshop seeks to gather leading researchers,
          professionals, and practitioners working on technologies, applications, and challenges related to large
          language models (LLMs) in financial services. We believe your expertise in this field will make a significant
          contribution to the success of this event.
        </div>
        <div class="main-section">
          The workshop has received numerous paper submissions from around the world, and selected outstanding
          contributions will be invited for presentation during the workshop. Papers accepted for the workshop will be
          considered for publication in a special issue titled "Theory and Applications of Large Foundation Models in
          Finance", to be published in the journal Frontiers of Information Technology & Electronic Engineering (FITEE)
          — a publication of the Chinese Academy of Engineering indexed by SCI. For more details about the special
          issue, please visit:
          <a href="https://www.fitee.zjujournals.com/en/news/184388"
            >https://www.fitee.zjujournals.com/en/news/184388</a
          >
        </div>
        <div class="main-section">
          If you have any questions or need further assistance, please feel free to contact us at:<br />
          <a href="mailto:yanjiangpeng@efunds.com.cn">yanjiangpeng@efunds.com.cn</a><br />
          We look forward to your participation in this distinguished event and hope to meet you in Guangzhou.
        </div>
        <div
          class="main-section"
          style="text-align: left; margin-top: 20px"
        >
          Best regards,<br />
          On behalf of the FinLLM 2025 Organizing Committee
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.invitation2025 {
  display: flex;
  flex-direction: column;
}
.header-bg {
  background: url('@/assets/img/2025-header.png') no-repeat;
  background-size: cover;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 750px) {
    height: 180px;
  }
}
.header-content {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  margin-top: 16px;
}
.header-title {
  color: #fff;
  font-size: 48px;
  font-weight: 800;
  letter-spacing: 2px;
  @media (max-width: 750px) {
    font-size: 64px;
  }
}
.header-logo {
  height: 80px;
  @media (max-width: 750px) {
    height: 120px;
  }
}
.main-content {
  padding: 0 24px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: -1;
  flex: 1;
  overflow: hidden;
}
.main-bg {
  position: absolute;
  left: 50%;
  top: 0;
  width: 100vw;
  max-width: 700px;
  transform: translateX(-50%);
  z-index: 1;
}
.main-bg-img {
  position: absolute;
  top: -5%;
  width: 100%;
  height: 105%;
}
.main-triangle {
  position: absolute;
  right: 0;
  top: 0;
  width: 80px;
  @media (max-width: 750px) {
    width: 120px;
  }
}
.main-inner {
  position: relative;
  z-index: 2;
  margin: 0 auto;
  padding: 80px 100px 32px 100px;
  box-sizing: border-box;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1920px;
}
.main-title {
  color: #1556a2;
  font-size: 60px;
  font-weight: 900;
  line-height: 1.3;
  margin-bottom: 100px;
  @media (max-width: 750px) {
    font-size: 80px;
  }
}
.main-section {
  color: #222;
  font-size: 32px;
  line-height: 1.7;
  margin-bottom: 32px;
  word-break: break-all;
  text-align: left;
  padding: 0 32px;
  @media (max-width: 750px) {
    font-size: 44px;
    margin-bottom: 48px;
    line-height: 1.7;
    padding: 0 40px;
  }
}
.main-section a {
  color: #1556a2;
  word-break: break-all;
}
@media (max-width: 750px) {
  .main-inner {
    padding: 80px 100px 32px 100px;
  }
  .main-bg-img {
    border-radius: 32px;
  }
}
</style>
