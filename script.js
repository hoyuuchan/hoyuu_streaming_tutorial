// script.js (수정 후)

// allImagesData는 이미 로드되어 전역 변수로 사용 가능합니다.
// 기존 images 배열을 정의하던 부분은 모두 제거하고 아래 코드를 사용합니다.
const images = allImagesData.map(item => ({
  src: item.path,
  tag: item.siteTag, // imageData.js의 siteTag를 사용
  category: item.categories[0] // 첫 번째 카테고리만 사용 (필요에 따라 조정 가능)
}));

console.log("변환된 images 배열:", images); // 이제 이 console.log는 출력될 것입니다.

// --- renderImages 함수 시작 ---
// 이 함수는 모든 이미지를 화면에 렌더링합니다.
function renderImages(imageList) { // imageList 매개변수 추가 (혹은 images 사용)
    const imageContainer = document.getElementById('imageContainer');
    if (!imageContainer) {
        console.error('Error: #imageContainer element not found!');
        // return; // ✨ 여기서는 return 문을 제거하거나 함수 내부로 이동해야 합니다.
        return; // renderImages 함수 내부에 있다면 OK, 그러나 지금은 전역에 있어서 문제.
                 // 이 코드가 renderImages 함수 정의 '안'에 있어야 합니다.
    }

    // 기존 이미지를 모두 제거 (새로운 필터링 적용 시 필요)
    imageContainer.innerHTML = '';

    imageList.forEach(image => { // 'images.forEach' 대신 'imageList.forEach' 사용 고려
        const imageBox = document.createElement('div');
        imageBox.className = 'image-box';

        const img = document.createElement('img');
        img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        img.dataset.src = image.src;
        img.style.opacity = '0';
        img.onload = () => {
          img.style.opacity = '1';
        };
        img.onerror = () => { // 이미지 로드 실패 시 디버깅을 위한 에러 핸들러 추가
            console.error('Failed to load image:', image.src);
        };

        imageBox.appendChild(img);

        const tag = document.createElement('div');
        tag.className = 'tag';
        tag.innerText = image.tag;
        imageBox.appendChild(tag);

        imageBox.addEventListener('click', () => {
          navigator.clipboard.writeText(image.tag)
          .then(() => {
            const popup = document.createElement('div');
            popup.innerText = '클립보드에 복사되었습니다!';
            popup.className = 'clipboard-popup';
            document.body.appendChild(popup);

            setTimeout(() => document.body.removeChild(popup), 1500);
          })
          .catch(err => console.error('클립보드 복사 실패', err));
        });

        imageContainer.appendChild(imageBox);

        // 이미지 관찰 시작
        imageObserver.observe(img);
    });
}
// --- renderImages 함수 끝 ---


// IntersectionObserver 초기화 (이전 답변에서 제시된 코드)
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const imageUrl = img.dataset.src;
      if (imageUrl) {
        img.src = imageUrl;
        img.onload = () => {
          img.style.opacity = '1';
        };
        img.onerror = () => { // 에러 핸들러 추가
          console.error('Failed to load lazy image:', imageUrl);
        };
      }
      observer.unobserve(img);
    }
  });
}, {
  rootMargin: '0px 0px 100px 0px'
});


// 드롭다운 메뉴 변경 시 필터링 (기존 코드 유지)
const categoryFilter = document.getElementById('categoryFilter');
if (categoryFilter) { // categoryFilter가 존재하는지 확인
    categoryFilter.addEventListener('change', () => {
      const selectedCategory = categoryFilter.value;
      const filteredImages = selectedCategory === 'all'
        ? images
        : images.filter(image => image.category === selectedCategory);
      renderImages(filteredImages);
    });
} else {
    console.error('Error: #categoryFilter element not found!');
}


// DOMContentLoaded 이벤트 발생 시 초기화 (가장 중요!)
document.addEventListener('DOMContentLoaded', () => {
    // 이미지를 렌더링하고 카테고리 필터를 채웁니다.
    renderImages(images); // ✨ 이제 이 함수가 호출됩니다.

    // 카테고리 필터 드롭다운 채우기 함수 (필요하다면)
    // function populateCategoryFilter() { /* ... */ }
    // populateCategoryFilter(); // 필요하면 호출
});

// populateCategoryFilter 함수 예시 (script.js에 없다면 추가)
// function populateCategoryFilter() {
//   const categories = [...new Set(allImagesData.flatMap(item => item.categories))];
//   const categoryFilter = document.getElementById('categoryFilter');
//   if (categoryFilter) {
//     categories.forEach(category => {
//       if (category !== '3D') { // 이미 HTML에 있는 카테고리는 제외
//         const option = document.createElement('option');
//         option.value = category;
//         option.innerText = category;
//         categoryFilter.appendChild(option);
//       }
//     });
//   }
// }
