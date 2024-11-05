const images = [
  // 3D
  { src: './image/3D/블렌더.png', tag: '~블렌더', category: '블렌더' },
  { src: './image/3D/블렌더응답없음.png', tag: '~블렌더응답없음', category: '블렌더' },
  { src: './image/3D/블렌더수잔.png', tag: '~블렌더수잔', category: '블렌더' },
  
  // 오리지널
  { src: './image/오리지널/란호유.png', tag: '~란호유', category: '란호유' },

  // 감정표현
  { src: './image/감정표현/두렵다.png', tag: '~두렵다', category: '감정표현' },
  { src: './image/감정표현/띠껍다.png', tag: '~띠껍다', category: '감정표현' },
  { src: './image/감정표현/마참내.png', tag: '~마참내', category: '감정표현' },
  { src: './image/감정표현/멋있다.png', tag: '~멋있다', category: '감정표현' },
  { src: './image/감정표현/손도깔끔.png', tag: '~손도깔끔', category: '감정표현' },
  { src: './image/감정표현/슬프다.png', tag: '~슬프다', category: '감정표현' },
  { src: './image/감정표현/고자라니.gif', tag: '~고자라니', category: '감정표현' },
  { src: './image/감정표현/심영놀람.gif', tag: '~심영놀람', category: '감정표현' },
  { src: './image/감정표현/심영놀람2.gif', tag: '~심영놀람2', category: '감정표현' },
  { src: './image/감정표현/안하겠소.gif', tag: '~안하겠소', category: '감정표현' },
  { src: './image/감정표현/이상하다.png', tag: '~이상하다', category: '감정표현' },
  { src: './image/감정표현/즐겁다.png', tag: '~즐겁다', category: '감정표현' },
  { src: './image/감정표현/화난다.png', tag: '~화난다', category: '감정표현' },
  { src: './image/감정표현/냥경악.gif', tag: '~냥경악', category: '감정표현' },
  { src: './image/감정표현/냥따봉.png', tag: '~냥따봉', category: '감정표현' },
  { src: './image/감정표현/심영박수.gif', tag: '~심영박수', category: '감정표현' },
  { src: './image/감정표현/심영박수2.gif', tag: '~심영박수2', category: '감정표현' },
  { src: './image/감정표현/잇님놀람.png', tag: '~잇님놀람', category: '감정표현' },
  { src: './image/감정표현/잇님따봉.png', tag: '~잇님따봉', category: '감정표현' },
  { src: './image/감정표현/잇님윙크.png', tag: '~잇님윙크', category: '감정표현' },
  { src: './image/감정표현/잇님절망.png', tag: '~잇님절망', category: '감정표현' },
  { src: './image/감정표현/잇님하트.png', tag: '~잇님하트', category: '감정표현' },
  { src: './image/감정표현/톰인사.gif', tag: '~톰인사', category: '감정표현' },
  { src: './image/감정표현/톰화들짝.gif', tag: '~톰화들짝', category: '감정표현' },
  { src: './image/감정표현/제리인사.gif', tag: '~제리인사', category: '감정표현' },
  { src: './image/감정표현/제리기도.gif', tag: '~제리기도', category: '감정표현' },
  { src: './image/감정표현/제리기도2.gif', tag: '~제리기도2', category: '감정표현' },
  { src: './image/감정표현/제리메롱.gif', tag: '~제리메롱', category: '감정표현' },
  { src: './image/감정표현/제리줘팸.gif', tag: '~제리줘팸', category: '감정표현' },
  { src: './image/감정표현/제리폭소.gif', tag: '~제리폭소', category: '감정표현' },

  // 동방프로젝트
  { src: './image/동방/안된다구.png', tag: '~안된다구', category: '동방' },
  { src: './image/동방/아하.png', tag: '~아하', category: '동방' },
  { src: './image/동방/팔이짧아슬픈요괴.gif', tag: '~팔이짧아슬픈요괴', category: '동방' },
  { src: './image/동방/팔이짧아슬픈요괴2.png', tag: '~팔이짧아슬픈요괴2', category: '동방' },
  { src: './image/동방/팔이짧아슬픈요괴3.png', tag: '~팔이짧아슬픈요괴3', category: '동방' },
  { src: './image/동방/레밀멋있지.webp', tag: '~레밀멋있지', category: '동방' },
  { src: './image/동방/레밀불꺼조.webp', tag: '~레밀불꺼조', category: '동방' },
  { src: './image/동방/레밀엑설.webp', tag: '~레밀엑설', category: '동방' },
  { src: './image/동방/레이무동방아냐.webp', tag: '~레이무동방아냐', category: '동방' },
  { src: './image/동방/레이무망한다고.webp', tag: '~레이무망한다고', category: '동방' },
  { src: './image/동방/레이무절규.gif', tag: '~레이무절규', category: '동방' },
  { src: './image/동방/마리사덜덜.webp', tag: '~마리사덜덜', category: '동방' },
  { src: './image/동방/마리사덜덜2.gif', tag: '~마리사덜덜2', category: '동방' },
  { src: './image/동방/마리사아이스.webp', tag: '~마리사아이스', category: '동방' },
  { src: './image/동방/모코우주작.webp', tag: '~모코우주작', category: '동방' },
  { src: './image/동방/사나에갈.webp', tag: '~사나에갈', category: '동방' },
  { src: './image/동방/사나에신앙.webp', tag: '~사나에신앙', category: '동방' },
  { src: './image/동방/사나에크으.webp', tag: '~사나에크으', category: '동방' },
  { src: './image/동방/사쿠야함멈춰.webp', tag: '~사쿠야함멈춰', category: '동방' },
  { src: './image/동방/사토리짝.webp', tag: '~사토리짝', category: '동방' },
  { src: './image/동방/사토리짝2.webp', tag: '~사토리짝2', category: '동방' },
  { src: './image/동방/사토리짝3.gif', tag: '~사토리짝3', category: '동방' },
  { src: './image/동방/사토리빡.webp', tag: '~사토리빡', category: '동방' },
  { src: './image/동방/사토리오린.webp', tag: '~사토리오린', category: '동방' },
  { src: './image/동방/스와코따봉.webp', tag: '~스와코따봉', category: '동방' },
  { src: './image/동방/스와코뻐큐.webp', tag: '~스와코뻐큐', category: '동방' },
  { src: './image/동방/스와코엠지.webp', tag: '~스와코엠지', category: '동방' },
  { src: './image/동방/스와코재앙.webp', tag: '~스와코재앙', category: '동방' },
  { src: './image/동방/유유코부거스.webp', tag: '~유유코부거스', category: '동방' },
  { src: './image/동방/유카리17살.webp', tag: '~유카리17살', category: '동방' },
  { src: './image/동방/치르노이제뭐함.webp', tag: '~치르노이제뭐함', category: '동방' },
  { src: './image/동방/치르노점점점.webp', tag: '~치르노점점점', category: '동방' },
  { src: './image/동방/코이시기대중.webp', tag: '~코이시기대중', category: '동방' },
  { src: './image/동방/코이시흑화.webp', tag: '~코이시흑화', category: '동방' },
  { src: './image/동방/테위뻥이야.webp', tag: '~테위뻥이야', category: '동방' },
  { src: './image/동방/텐시엣헴.webp', tag: '~텐시엣헴', category: '동방' },
  { src: './image/동방/플랑주세요.webp', tag: '~플랑주세요', category: '동방' },
  { src: './image/동방/플랑허접.webp', tag: '~플랑허접', category: '동방' },
  { src: './image/동방/플랑허접2.webp', tag: '~플랑허접2', category: '동방' },
  { src: './image/동방/플랑볼따구.gif', tag: '~플랑볼따구', category: '동방' },
  { src: './image/동방/클피죽으면.png', tag: '~클피죽으면', category: '동방' },
  
  // 언더테일
  { src: './image/언더테일/sans01.gif', tag: '~샌즈01', category: '언더테일' },
  { src: './image/언더테일/sans0201.gif', tag: '~샌즈02', category: '언더테일' },
  { src: './image/언더테일/sans0301.gif', tag: '~샌즈03', category: '언더테일' },
  { src: './image/언더테일/sans0401.gif', tag: '~샌즈04', category: '언더테일' },
  { src: './image/언더테일/sans0501.gif', tag: '~샌즈05', category: '언더테일' },
  { src: './image/언더테일/sans0601.gif', tag: '~샌즈06', category: '언더테일' },
  { src: './image/언더테일/sans0701.gif', tag: '~샌즈07', category: '언더테일' },
  { src: './image/언더테일/sans0801.webp', tag: '~샌즈08', category: '언더테일' },
  { src: './image/언더테일/sans0901.gif', tag: '~샌즈09', category: '언더테일' },
  { src: './image/언더테일/sanesss.gif', tag: '~싸네스', category: '언더테일' },
  { src: './image/언더테일/리퍼샌즈.jpg', tag: '~리퍼샌즈', category: '언더테일' },
  { src: './image/언더테일/papyrus01.gif', tag: '~파피루스01', category: '언더테일' },
  { src: './image/언더테일/papyrusA01.gif', tag: '~파피루스02', category: '언더테일' },
  { src: './image/언더테일/temmi01.gif', tag: '~테미01', category: '언더테일' },
  { src: './image/언더테일/temmiA01.gif', tag: '~테미02', category: '언더테일' },
  { src: './image/언더테일/bob.jpg', tag: '~밥', category: '언더테일' },
  { src: './image/언더테일/alphys0101.gif', tag: '~알피스01', category: '언더테일' },
  { src: './image/언더테일/alphys0201.gif', tag: '~알피스02', category: '언더테일' },
  { src: './image/언더테일/alphys0301.gif', tag: '~알피스03', category: '언더테일' },
  { src: './image/언더테일/asgore0101.gif', tag: '~아스고어01', category: '언더테일' },
  { src: './image/언더테일/asgore0201.webp', tag: '~아스고어02', category: '언더테일' },
  { src: './image/언더테일/asriel.gif', tag: '~아스리엘', category: '언더테일' },
  { src: './image/언더테일/flowey0101.gif', tag: '~플라위01', category: '언더테일' },
  { src: './image/언더테일/flowey0201.gif', tag: '~플라위02', category: '언더테일' },
  { src: './image/언더테일/flowey0301.gif', tag: '~플라위03', category: '언더테일' },
  { src: './image/언더테일/metaton01.gif', tag: '~메타톤01', category: '언더테일' },
  { src: './image/언더테일/metatonA01.gif', tag: '~메타톤02', category: '언더테일' },
  { src: './image/언더테일/metatonEX01.gif', tag: '~메타톤EX01', category: '언더테일' },
  { src: './image/언더테일/metatonEX02.gif', tag: '~메타톤EX02', category: '언더테일' },
  { src: './image/언더테일/metatonEX03.gif', tag: '~메타톤EX03', category: '언더테일' },
  { src: './image/언더테일/metatonEX04.gif', tag: '~메타톤EX04', category: '언더테일' },
  { src: './image/언더테일/muffet0101.gif', tag: '~머펫01', category: '언더테일' },
  { src: './image/언더테일/muffet0201.gif', tag: '~머펫02', category: '언더테일' },
  { src: './image/언더테일/napstablook0101.gif', tag: '~냅스타블룩01', category: '언더테일' },
  { src: './image/언더테일/napstablook0201.gif', tag: '~냅스타블룩02', category: '언더테일' },
  { src: './image/언더테일/toriel0101.gif', tag: '~토리엘01', category: '언더테일' },
  { src: './image/언더테일/toriel0201.gif', tag: '~토리엘02', category: '언더테일' },
  { src: './image/언더테일/toriel07.gif', tag: '~토리엘03', category: '언더테일' },
  { src: './image/언더테일/toriel08.gif', tag: '~토리엘04', category: '언더테일' },
  { src: './image/언더테일/toriel09.gif', tag: '~토리엘05', category: '언더테일' },
  { src: './image/언더테일/toriel10.gif', tag: '~토리엘06', category: '언더테일' },
  { src: './image/언더테일/Undyne01.gif', tag: '~언다인01', category: '언더테일' },
  { src: './image/언더테일/UndyneA01.gif', tag: '~언다인02', category: '언더테일' },
  { src: './image/언더테일/히트플.png', tag: '~히트플', category: '언더테일' },
  { src: './image/언더테일/히트플깜짝.png', tag: '~히트플깜짝', category: '언더테일' },
  { src: './image/언더테일/프리스크.png', tag: '~프리스크', category: '언더테일' },
  { src: './image/언더테일/chara0101.gif', tag: '~차라', category: '언더테일' },
  { src: './image/언더테일/chara0201.gif', tag: '~차라02', category: '언더테일' },

  // 마인크래프트
  { src: './image/마크/거미.png', tag: '~거미', category: '마크' },
  { src: './image/마크/닭.png', tag: '~닭', category: '마크' },
  { src: './image/마크/닭ㅠㅠ.png', tag: '~닭ㅠㅠ', category: '마크' },
  { src: './image/마크/돼지.png', tag: '~돼지', category: '마크' },
  { src: './image/마크/돼지ㅠㅠ.png', tag: '~돼지ㅠㅠ', category: '마크' },
  { src: './image/마크/소.png', tag: '~소', category: '마크' },
  { src: './image/마크/소ㅠㅠ.png', tag: '~소', category: '마크' },
  { src: './image/마크/스켈레톤.png', tag: '~소ㅠㅠ', category: '마크' },
  { src: './image/마크/슬라임.png', tag: '~슬라임', category: '마크' },
  { src: './image/마크/양.png', tag: '~양', category: '마크' },
  { src: './image/마크/양ㅠㅠ.png', tag: '~양ㅠㅠ', category: '마크' },
  { src: './image/마크/엔더맨.png', tag: '~엔더맨', category: '마크' },
  { src: './image/마크/좀비.png', tag: '~좀비', category: '마크' },
  { src: './image/마크/주민.png', tag: '~주민', category: '마크' },
  { src: './image/마크/주민ㅠㅠ.png', tag: '~주민ㅠㅠ', category: '마크' },
  { src: './image/마크/크리퍼.png', tag: '~크리퍼', category: '마크' },

  // 산나비
  { src: './image/산나비/마리덜덜.gif', tag: '~마리덜덜', category: '산나비' },
  { src: './image/산나비/마리바이.gif', tag: '~마리바이', category: '산나비' },
  { src: './image/산나비/마리반짝.gif', tag: '~마리반짝', category: '산나비' },
  { src: './image/산나비/마리엣.gif', tag: '~마리엣', category: '산나비' },
  { src: './image/산나비/마리우웩.gif', tag: '~마리우웩', category: '산나비' },
  { src: './image/산나비/마리월척.gif', tag: '~마리월척', category: '산나비' },
  { src: './image/산나비/마리절레.gif', tag: '~마리절레', category: '산나비' },
  { src: './image/산나비/마리짜잔01.gif', tag: '~마리짜잔01', category: '산나비' },
  { src: './image/산나비/마리짜잔02.gif', tag: '~마리짜잔02', category: '산나비' },
  { src: './image/산나비/마리짜잔03.gif', tag: '~마리짜잔03', category: '산나비' },
  { src: './image/산나비/마리쩐다.gif', tag: '~마리쩐다', category: '산나비' },
  { src: './image/산나비/마리크하하.gif', tag: '~마리크하하', category: '산나비' },
  { src: './image/산나비/마리하아.gif', tag: '~마리하아', category: '산나비' },
  { src: './image/산나비/마리하이.gif', tag: '~마리하이', category: '산나비' },
  { src: './image/산나비/마리헿.gif', tag: '~마리헿', category: '산나비' },
  { src: './image/산나비/마리흠.gif', tag: '~마리흠', category: '산나비' },
  { src: './image/산나비/애기개못해.gif', tag: '~애기개못해', category: '산나비' },
  { src: './image/산나비/애기그게.gif', tag: '~애기그게', category: '산나비' },
  { src: './image/산나비/애기동동.gif', tag: '~애기동동', category: '산나비' },
  { src: './image/산나비/애기두근.gif', tag: '~애기두근', category: '산나비' },
  { src: './image/산나비/애기뒤적.gif', tag: '~애기뒤적', category: '산나비' },
  { src: './image/산나비/애기반짝01.gif', tag: '~애기반짝01', category: '산나비' },
  { src: './image/산나비/애기반짝02.gif', tag: '~애기반짝02', category: '산나비' },
  { src: './image/산나비/애기브이.gif', tag: '~애기브이', category: '산나비' },
  { src: './image/산나비/애기생축.gif', tag: '~애기생축', category: '산나비' },
  { src: './image/산나비/애기신나.gif', tag: '~애기신나', category: '산나비' },
  { src: './image/산나비/애기싫어.gif', tag: '~애기싫어', category: '산나비' },
  { src: './image/산나비/애기위험.gif', tag: '~애기위험', category: '산나비' },
  { src: './image/산나비/애기윙크.gif', tag: '~애기윙크', category: '산나비' },
  { src: './image/산나비/애기잘자.gif', tag: '~애기잘자', category: '산나비' },
  { src: './image/산나비/애기잠깐.gif', tag: '~애기잠깐', category: '산나비' },
  { src: './image/산나비/애기점프.gif', tag: '~애기점프', category: '산나비' },
  { src: './image/산나비/애기펄럭.gif', tag: '~애기펄럭', category: '산나비' },
  { src: './image/산나비/애기행운.gif', tag: '~애기행운', category: '산나비' },
  { src: './image/산나비/애기호출.gif', tag: '~애기호출', category: '산나비' },
  { src: './image/산나비/애기흔들.gif', tag: '~애기흔들', category: '산나비' },
  { src: './image/산나비/야옹이대원이지켜보고있다.gif', tag: '~야옹이지켜', category: '산나비' },
  { src: './image/산나비/야옹이대원절레.gif', tag: '~야옹이절레', category: '산나비' },
  { src: './image/산나비/야옹이대원짝짝.gif', tag: '~야옹이짝짝', category: '산나비' },
  { src: './image/산나비/지켜보고있습니다.gif', tag: '~지켜보고있음', category: '산나비' },

  // 기타
  { src: './image/기타/레굴루스.png', tag: '~레굴루스', category: '기타' },
  { src: './image/기타/레굴루스점점점.png', tag: '~레굴루스점점점', category: '기타' },
  { src: './image/기타/와구.png', tag: '~와구', category: '기타' },
  { src: './image/기타/삭제.webp', tag: '~삭제', category: '기타' },

  // 추가 이미지 데이터...
];

const imageContainer = document.getElementById('imageContainer');
const categoryFilter = document.getElementById('categoryFilter');

// Intersection Observer 설정
const observerOptions = {
  root: null,
  rootMargin: '50px', // 이미지가 뷰포트 50px 전에 로딩 시작
  threshold: 0.1
};

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const realSrc = img.dataset.src;
      if (realSrc) {
        img.src = realSrc;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    }
  });
}, observerOptions);

// 이미지 목록을 렌더링하는 함수
function renderImages(filteredImages) {
  imageContainer.innerHTML = ''; // 기존 이미지 초기화

  filteredImages.forEach(image => {
    const imageBox = document.createElement('div');
    imageBox.className = 'image-box';

    // 이미지 요소 생성 및 lazy loading 설정
    const img = document.createElement('img');
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; // 투명 placeholder
    img.dataset.src = image.src; // 실제 이미지 URL을 data-src에 저장
    img.style.opacity = '0';
    img.onload = () => {
      img.style.opacity = '1';
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

// 드롭다운 메뉴 변경 시 필터링
categoryFilter.addEventListener('change', () => {
  const selectedCategory = categoryFilter.value;

  if (selectedCategory === 'all') {
    renderImages(images);
  } else {
    const filteredImages = images.filter(image => image.category === selectedCategory);
    renderImages(filteredImages);
  }
});

// 초기 렌더링: 전체 이미지를 표시
renderImages(images);
