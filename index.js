document.addEventListener('DOMContentLoaded', () => {
  // 모든 서브메뉴 링크에 대해 이벤트 리스너 추가
  const submenuLinks = document.querySelectorAll('.submenu a');
  const iframe = document.getElementById('content_iframe'); // iframe 선택

  submenuLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault(); // 기본 링크 동작 방지

          const linkText = link.textContent.trim(); // 링크 텍스트 가져오기
          switch (linkText) {
              case 'Scar':
                  iframe.src = 'scar.html';
                  break;
              case '준비중 DesertEagle':
                  iframe.src = 'deserte.html'; // 예시 경로
                  break;
              // 추가 링크에 대한 케이스
              default:
                  console.log('링크 준비 중이거나 파일명 확인 필요');
                  break;
          }
      });
  });
});