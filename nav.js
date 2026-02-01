document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.querySelector('.nav-container');
    const navItems = document.querySelectorAll('.nav-item');

    // 클릭 이벤트 처리 (단순 페이지 이동)
    // navItems의 href 속성으로 자연스럽게 이동되므로, 별도의 JS 처리가 필요 없을 수도 있음.
    // 하지만 active 클래스 관리를 위해 남겨둔다면 아래와 같이 수정.
    // 사실 페이지가 이동되면 HTML/CSS에서 active 클래스를 지정해두었으므로 JS로 active를 바꿀 필요도 없음.
    // 따라서 nav.js의 대부분의 로직을 제거해도 무방함.

    // 만약 현재 페이지에서도 active 상태를 유지하고 싶다면 URL 비교 로직 정도만 있으면 됨.
    // 하지만 guide.html과 index.html이 분리되어 있고 각 파일에서 class="nav-item active"를 이미 지정하고 있음.
    // 그러므로 JS는 아무런 동작을 하지 않아도 됨.

    // 사용자 요청: "움직이는 모션 삭제", "대기 후 이동 삭제"
    // -> 즉, 그냥 a 태그 본연의 기능(바로 이동)만 남기면 됨.
});
