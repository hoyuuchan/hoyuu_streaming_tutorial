
const imageContainer = document.getElementById('imageContainer');

// 1. Lazy Loading: Intersection Observer 설정
const observerOptions = {
  root: null,
  rootMargin: '50px',
  threshold: 0.1
};

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const realSrc = img.dataset.src;
      if (realSrc) {
        // 실제 이미지 로드 완료 시 loaded 클래스 추가 및 애니메이션 확실히 제거
        img.onload = () => {
          img.style.opacity = '1';
          const imageBox = img.closest('.image-box');
          if (imageBox) {
            imageBox.classList.add('loaded');
            imageBox.style.animation = 'none';
            imageBox.style.backgroundColor = '#f7f7f7';
          }
        };
        img.src = realSrc;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    }
  });
}, observerOptions);


// 2. 함수: 이미지를 update: true 기준으로 정렬하는 함수
function sortImagesByUpdate(imageList) {
  return imageList.slice().sort((a, b) => {
    const aIsUpdate = a.update ? 1 : 0;
    const bIsUpdate = b.update ? 1 : 0;

    // update: true가 0보다 큰 값을 가지므로, b - a를 통해 내림차순 정렬 (true가 앞으로)
    return bIsUpdate - aIsUpdate;
  });
}


// 3. 이미지 목록 렌더링 함수 (New 배지 + Lazy Loading 적용)
function renderImages(filteredImages) {
  imageContainer.innerHTML = ''; // 기존 이미지 초기화

  filteredImages.forEach(image => {
    const imageBox = document.createElement('div');
    imageBox.className = 'image-box';

    // 3-1. 이미지 요소 생성 및 lazy loading 설정
    const img = document.createElement('img');

    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
    img.dataset.src = image.src;
    img.style.opacity = '0';

    imageBox.appendChild(img);

    // 3-2. 태그 요소 생성
    const tag = document.createElement('div');
    tag.className = 'tag';
    tag.innerText = image.tag;
    imageBox.appendChild(tag);

    // 3-3. [New Badge] update: true 일 때 배지 추가 (정렬 기준과 동일하게 'update' 사용)
    if (image.update === true) {
      const badge = document.createElement('div');
      badge.className = 'new-badge';
      // badge.innerText = 'New';
      imageBox.appendChild(badge);
    }

    // 3-4. 클릭 시 복사 이벤트
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

    // 3-5. 이미지 관찰 시작
    imageObserver.observe(img);
  });
}


// 4. 라디오 버튼 필터링 및 정렬 로직 (이벤트 리스너)
/* =========================================
   [1] 카테고리 구조 정의 (설정)
   ========================================= */
const categoryStructure = [
  { label: '전체', value: 'all', type: 'all' },
  {
    label: '오리지널',
    value: 'original_group',
    children: [
      { label: '전체', value: 'all_original' },
      { label: '🎉호유티콘 콘테스트', value: '호유티콘', className: 'hoyuuticon' },
      { label: '란호유', value: '란호유' },
      { label: '호유링기링', value: '호유링기링' },
      { label: '기타', value: '란호유기타' }
    ]
  },
  { label: '동방프로젝트', value: '동방' },
  { label: '감정표현', value: '감정표현' },

  {
    label: '게임',
    value: 'game_group', // 그룹 식별자
    children: [
      { label: '전체', value: 'all_game' }, // 게임 전체 보기용
      { label: '디제이맥스', value: '디맥' },
      { label: '언더테일', value: '언더테일' },
      { label: '마인크래프트', value: '마크' },
      { label: '산나비', value: '산나비' },
      { label: '히오스', value: '히오스' },
      { label: '기타', value: '게임기타' }
    ]
  },

  { label: '블렌더', value: '블렌더' },
  { label: '기타', value: '기타' }
];

// 컨테이너 요소 가져오기
const mainContainer = document.getElementById('mainCategoryContainer');
const subContainer = document.getElementById('subCategoryContainer');

/* =========================================
   [2] 버튼 생성 함수
   ========================================= */
function createRadioButton(container, item, name, isChecked = false) {
  const input = document.createElement('input');
  input.type = 'radio';
  input.id = `radio-${item.value}`;
  input.name = name;
  input.value = item.value;
  input.checked = isChecked;

  const label = document.createElement('label');
  label.htmlFor = `radio-${item.value}`;
  label.innerText = item.label;

  // [추가] 데이터에 className이 있으면 라벨에 클래스 추가
  if (item.className) {
    label.classList.add(item.className);
  }

  container.appendChild(input);
  container.appendChild(label);

  return input;
}

/* =========================================
   [3] 메인 카테고리 렌더링
   ========================================= */
categoryStructure.forEach((item, index) => {
  const isFirst = index === 0; // 첫 번째(전체)는 기본 선택
  const radio = createRadioButton(mainContainer, item, 'main-cat', isFirst);

  // 메인 버튼 클릭 이벤트
  radio.addEventListener('change', () => {
    // 1. 하위 카테고리가 있는 경우 (게임)
    if (item.children) {
      renderSubCategories(item.children); // 소분류 버튼 생성
      subContainer.style.display = 'flex'; // 소분류 박스 보이기

      // 게임 버튼을 누르자마자 '게임 전체'를 보여줌
      filterImagesByList(item.children.map(c => c.value).filter(v => v !== 'all_game'));
    }
    // 2. 하위 카테고리가 없는 경우 (오리지널, 동방 등)
    else {
      subContainer.style.display = 'none'; // 소분류 박스 숨기기
      subContainer.innerHTML = ''; // 내용 비우기

      filterImages(item.value); // 바로 필터링 실행
    }
  });
});

/* =========================================
   [4] 서브 카테고리 렌더링 함수 (모든 그룹 지원 업그레이드)
   ========================================= */
function renderSubCategories(children) {
  subContainer.innerHTML = '';

  children.forEach((child, index) => {
    const isFirst = index === 0;
    const radio = createRadioButton(subContainer, child, 'sub-cat', isFirst);

    radio.addEventListener('change', () => {
      // [수정됨] value가 문자열이고 'all_'로 시작하면 '전체 보기'로 인식
      if (typeof child.value === 'string' && child.value.startsWith('all_')) {
        // 형제들의 모든 값을 긁어모읍니다 (자신은 제외)
        const allValues = children
          .map(c => c.value)            // 값들을 가져옴
          .flat()                       // 배열이 있으면 평평하게 폅니다
          .filter(v => v !== child.value); // 현재 눌린 'all_...' 버튼 값은 제외

        filterImagesByList(allValues);
      }
      // 2. 값이 배열일 때 (예: ['디맥', '란호유'])
      else if (Array.isArray(child.value)) {
        filterImagesByList(child.value);
      }
      // 3. 값이 하나일 때 (예: '언더테일')
      else {
        filterImages(child.value);
      }
    });
  });
}

/* =========================================
   [5] 필터링 로직 (단일 값)
   ========================================= */
function filterImages(categoryValue) {
  let filtered = [];
  if (categoryValue === 'all') {
    filtered = images;
  } else {
    filtered = images.filter(image => {
      if (Array.isArray(image.category)) {
        return image.category.includes(categoryValue);
      }
      return image.category === categoryValue;
    });
  }
  updateDisplay(filtered);
}

/* =========================================
   [6] 필터링 로직 (리스트 - 게임 그룹용)
   ========================================= */
function filterImagesByList(categoryList) {
  // 카테고리가 categoryList 배열 안에 하나라도 포함되면 보여줌
  const filtered = images.filter(image => {
    const imgCat = Array.isArray(image.category) ? image.category : [image.category];
    // 교집합 확인: 이미지의 카테고리 중 하나라도 리스트에 있는지
    return imgCat.some(cat => categoryList.includes(cat));
  });
  updateDisplay(filtered);
}

/* =========================================
   [7] 화면 갱신 및 정렬 (공통 함수)
   ========================================= */
function updateDisplay(filteredList) {
  const sorted = sortImagesByUpdate(filteredList); // New 정렬 적용
  renderImages(sorted); // 화면 그리기
}

// 초기 로딩 시 '전체' 보여주기
filterImages('all');


// 5. [최종 해결] 페이지 로드 시 초기 렌더링
// 스크립트가 실행되자마자 (DOM 로드 후) 정렬된 전체 이미지를 렌더링합니다.
const initiallySortedImages = sortImagesByUpdate(images);
renderImages(initiallySortedImages);



// [추가] 메인 카테고리 스크롤 그라데이션 표시 기능
function updateScrollGradient() {
  const wrapper = document.querySelector('.main-group-wrapper');
  const mainGroup = document.querySelector('.main-group');

  if (!wrapper || !mainGroup) return;

  const scrollLeft = mainGroup.scrollLeft;
  const scrollWidth = mainGroup.scrollWidth;
  const clientWidth = mainGroup.clientWidth;

  // 왼쪽으로 스크롤 가능한 경우 (처음이 아닌 경우)
  if (scrollLeft > 5) {
    wrapper.classList.add('scroll-left');
  } else {
    wrapper.classList.remove('scroll-left');
  }

  // 오른쪽으로 스크롤 가능한 경우 (끝이 아닌 경우)
  if (scrollLeft < scrollWidth - clientWidth - 5) {
    wrapper.classList.add('scroll-right');
  } else {
    wrapper.classList.remove('scroll-right');
  }
}

// 페이지 로드 시 및 스크롤 시 그라데이션 업데이트
setTimeout(() => {
  const mainGroup = document.querySelector('.main-group');
  if (mainGroup) {
    mainGroup.addEventListener('scroll', updateScrollGradient);
    updateScrollGradient(); // 초기 상태 설정

    // [추가] PC에서 마우스 드래그 스크롤 기능
    let isDown = false;
    let startX;
    let scrollLeft;
    let isDragging = false; // 드래그 여부 추적

    mainGroup.addEventListener('mousedown', (e) => {
      isDown = true;
      isDragging = false; // 드래그 시작 시 초기화
      mainGroup.style.cursor = 'grabbing';
      startX = e.pageX - mainGroup.offsetLeft;
      scrollLeft = mainGroup.scrollLeft;
    });

    mainGroup.addEventListener('mouseleave', () => {
      isDown = false;
      mainGroup.style.cursor = 'grab';
    });

    mainGroup.addEventListener('mouseup', () => {
      isDown = false;
      mainGroup.style.cursor = 'grab';
    });

    mainGroup.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - mainGroup.offsetLeft;
      const walk = (x - startX) * 1.5; // 스크롤 속도 조절

      // 일정 거리 이상 이동하면 드래그로 판정
      if (Math.abs(x - startX) > 5) {
        isDragging = true;
      }

      mainGroup.scrollLeft = scrollLeft - walk;
    });

    // 드래그 중이면 클릭 이벤트 막기
    mainGroup.addEventListener('click', (e) => {
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
        isDragging = false;
      }
    }, true); // capture phase에서 처리

    // 초기 커서 스타일 설정
    mainGroup.style.cursor = 'grab';
  }
}, 100);

// 화면 크기 변경 시에도 업데이트
window.addEventListener('resize', updateScrollGradient);

