function checkVaccines() {
  const age = document.getElementById("ageInput").value.trim();
  let result = "";

  // 簡化範例資料表
  const schedule = {
    "新生兒": {
      public: ["B型肝炎 第1劑", "卡介苗"],
      private: []
    },
    "2個月": {
      public: ["五合一疫苗 第1劑", "肺炎鏈球菌 第1劑"],
      private: ["輪狀病毒疫苗 第1劑"]
    },
    "6個月": {
      public: ["B型肝炎 第3劑", "流感疫苗（首次需2劑）"],
      private: ["輪狀病毒疫苗 第3劑（依品牌）"]
    },
    "1歲": {
      public: ["MMR 第1劑", "水痘疫苗 第1劑", "肺炎鏈球菌加強劑"],
      private: ["A型肝炎疫苗 第1劑"]
    },
    "國小一年級": {
      public: ["白喉/破傷風/百日咳加強劑", "小兒麻痺口服疫苗"],
      private: ["流感疫苗（每年建議自費四價）"]
    }
  };

  if (schedule[age]) {
    result = `
      <h3>公費疫苗</h3>
      <ul>${schedule[age].public.map(v => `<li class="public">${v}</li>`).join("")}</ul>
      <h3>自費疫苗</h3>
      <ul>${schedule[age].private.map(v => `<li class="private">${v}</li>`).join("")}</ul>
    `;
  } else {
    result = "<p>查無此年齡的疫苗資料，請重新輸入。</p>";
  }

  document.getElementById("result").innerHTML = result;
}
