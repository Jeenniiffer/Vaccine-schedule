// 台灣幼兒疫苗時程表（以月齡為單位）
const schedule = [
  { age: 0, vaccines: [{name:"B型肝炎疫苗", dose:1, type:"公費"}, {name:"卡介苗", dose:1, type:"公費"}] },
  { age: 1, vaccines: [{name:"B型肝炎疫苗", dose:2, type:"公費"}] },
  { age: 2, vaccines: [
      {name:"五合一（白喉、破傷風、百日咳、小兒麻痺、b型嗜血桿菌）", dose:1, type:"公費"},
      {name:"13價肺炎鏈球菌疫苗 (PCV13)", dose:1, type:"公費"},
      {name:"口服輪狀病毒疫苗", dose:1, type:"自費"}
  ] },
  { age: 4, vaccines: [
      {name:"五合一", dose:2, type:"公費"},
      {name:"13價肺炎鏈球菌", dose:2, type:"公費"},
      {name:"口服輪狀病毒疫苗", dose:2, type:"自費"}
  ] },
  { age: 5, vaccines: [{name:"五合一", dose:3, type:"公費"}] },
  { age: 6, vaccines: [
      {name:"B型肝炎疫苗", dose:3, type:"公費"},
      {name:"流感疫苗（首次需2劑）", dose:1, type:"公費/自費"}
  ] },
  { age: 12, vaccines: [
      {name:"MMR（麻疹、腮腺炎、德國麻疹混合疫苗）", dose:1, type:"公費"},
      {name:"水痘疫苗", dose:1, type:"公費"},
      {name:"13價肺炎鏈球菌", dose:3, type:"公費"}
  ] },
  { age: 15, vaccines: [{name:"日本腦炎活性減毒疫苗", dose:1, type:"公費"}] },
  { age: 18, vaccines: [
      {name:"A型肝炎疫苗", dose:1, type:"自費"},
      {name:"五合一", dose:4, type:"公費"}
  ] },
  { age: 27, vaccines: [
      {name:"A型肝炎疫苗", dose:2, type:"自費"},
      {name:"日本腦炎疫苗", dose:2, type:"公費"}
  ] },
  { age: 60, vaccines: [
      {name:"DTaP-IPV（白喉、破傷風、百日咳、小兒麻痺）加強劑", dose:1, type:"公費"}
  ] },
  { age: 72, vaccines: [
      {name:"MMR 第2劑", dose:2, type:"公費"}
  ] },
  { age: 144, vaccines: [
      {name:"HPV（人類乳突病毒疫苗）", dose:1, type:"自費"}
  ] }
];

// 將輸入年齡轉換為總月齡
function parseAge(input) {
  input = input.toLowerCase().trim();
  if (input.includes('y')) {
    let parts = input.split('y');
    let years = parseInt(parts[0]);
    let months = parts[1] ? parseInt(parts[1].replace('m','')) : 0;
    return years*12 + months;
  }
  return parseInt(input);
}

// 查詢疫苗
function checkVaccines() {
  const ageInput = document.getElementById("ageInput").value;
  const ageMonths = parseAge(ageInput);

  if (isNaN(ageMonths)) {
    document.getElementById("result").innerHTML = "<p>請輸入正確數字或格式</p>";
    return;
  }

  let pastVaccines = [];
  let currentVaccines = [];

  schedule.forEach(s => {
    if (s.age <= ageMonths) pastVaccines = pastVaccines.concat(s.vaccines);
    if (s.age === ageMonths) currentVaccines = currentVaccines.concat(s.vaccines);
  });

  function renderList(vaccines) {
    return vaccines.map(v => `<div class="vaccine-card ${v.type === '公費' ? 'public' : 'private'}">
      ${v.name} 第${v.dose}劑 (${v.type})
    </div>`).join("");
  }

  let resultHTML = `<h3>過去已接種疫苗</h3
