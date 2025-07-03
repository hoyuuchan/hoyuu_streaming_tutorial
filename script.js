// script.js (수정 후)

// allImagesData는 client.html에서 imageData.js를 통해 이미 로드되어 전역 변수로 사용 가능합니다.
// 기존 images 배열을 정의하던 부분은 모두 제거하고 아래 코드를 사용합니다.
const images = allImagesData.map(item => ({
  src: item.path,
  tag: item.siteTag, // imageData.js의 siteTag를 사용
  category: item.categories[0] // 첫 번째 카테고리만 사용 (필요에 따라 조정 가능)
}));

console.log("변환된 images 배열:", images); // ✨ 이 코드 추가

// script.js (renderImages 함수 내부)
const imageContainer = document.getElementById('imageContainer');
if (!imageContainer) {
    console.error('Error: #imageContainer element not found!');
    return; // 컨테이너가 없으면 함수 종료
}
// ... 이미지 박스 생성 로직 계속
