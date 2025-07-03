// script.js (수정 후)

// allImagesData는 client.html에서 imageData.js를 통해 이미 로드되어 전역 변수로 사용 가능합니다.
// 기존 images 배열을 정의하던 부분은 모두 제거하고 아래 코드를 사용합니다.
const images = allImagesData.map(item => ({
  src: item.path,
  tag: item.siteTag, // imageData.js의 siteTag를 사용
  category: item.categories[0] // 첫 번째 카테고리만 사용 (필요에 따라 조정 가능)
}));

// 이후 script.js의 나머지 로직 (이미지 표시, 필터링 등)은 그대로 유지합니다.
// 예:
// document.addEventListener('DOMContentLoaded', () => {
//   renderImages(images);
//   populateCategoryFilter();
// });
