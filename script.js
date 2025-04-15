function checkAnswers() {
    const correct = {
      q1: "c", // CPU
      q2: "b", // DNS
      q3: "c", // RAM
      q4: "b", // BIOS
      q5: "c"  // URL
    };
  
    let score = 0;
    for (let i = 1; i <= 5; i++) {
      const radios = document.getElementsByName("q" + i);
      for (const r of radios) {
        if (r.checked && r.value === correct["q" + i]) {
          score++;
        }
      }
    }
  
    const result = document.getElementById("result");
    result.textContent = `총 5문제 중 ${score}문제를 맞혔습니다.`;
    result.style.color = score >= 4 ? "green" : "red";
  }
  