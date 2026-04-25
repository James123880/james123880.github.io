// 语言切换
function setLang(lang) {
  const zh = document.querySelectorAll('.zh');
  const en = document.querySelectorAll('.en');

  if (lang === 'zh') {
    zh.forEach(el => el.style.display = 'block');
    en.forEach(el => el.style.display = 'none');
  } else {
    zh.forEach(el => el.style.display = 'none');
    en.forEach(el => el.style.display = 'block');
  }
}

// 动画显示
function showBlocks() {
  const blocks = document.querySelectorAll('.block');
  blocks.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('show');
    }, i * 600);
  });
}
function goPrayer() {
  window.location.href = "prayer.html";
}
