const images = [
  // 3D
  { src: './image/3D/블렌더.png', tag: '~블렌더', category: '블렌더' },
  { src: './image/3D/블렌더응답없음.png', tag: '~블렌더응답없음', category: '블렌더' },

  // 감정표현
  { src: './image/감정표현/두렵다.png', tag: '~두렵다', category: '감정표현' },
  { src: './image/감정표현/띠껍다.png', tag: '~띠껍다', category: '감정표현' },
  { src: './image/감정표현/마참내.png', tag: '~마참내', category: '감정표현' },
  { src: './image/감정표현/멋있다.png', tag: '~멋있다', category: '감정표현' },
  { src: './image/감정표현/손도깔끔.png', tag: '~손도깔끔', category: '감정표현' },
  { src: './image/감정표현/슬프다.png', tag: '~슬프다',giftegory: '감정표현' },
  { src: './image/감정표현/심영놀람.gif', tag: '~심영놀람',giftegory: '감정표현' },
  { src: './image/감정표현/심영놀람2.gif', tag: '~심영놀람2',giftegory: '감정표현' },
  { src: './image/감정표현/안하겠소.gif', tag: '~안하겠소', category: '감정표현' },
  { src: './image/감정표현/이상하다.png', tag: '~이상하다', category: '감정표현' },
  { src: './image/감정표현/즐겁다.png', tag: '~즐겁다', category: '감정표현' },
  { src: './image/감정표현/화난다.png', tag: '~화난다', category: '감정표현' },
  { src: './image/감정표현/냥경악.gif', tag: '~냥경악', category: '감정표현' },
  { src: './image/감정표현/심영박수.gif', tag: '~심영박수', category: '감정표현' },
  { src: './image/감정표현/심영박수2.gif', tag: '~심영박수2', category: '감정표현' },
  { src: './image/감정표현/잇님놀람.png', tag: '~잇님놀람', category: '감정표현' },
  { src: './image/감정표현/잇님따봉.png', tag: '~잇님따봉', category: '감정표현' },
  { src: './image/감정표현/잇님윙크.png', tag: '~잇님윙크', category: '감정표현' },
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
  // 추가 이미지 데이터...
];

const imageContainer = document.getElementById('imageContainer');
const categoryFilter = document.getElementById('categoryFilter');

// 이미지 목록을 렌더링하는 함수
function renderImages(filteredImages) {
  imageContainer.innerHTML = ''; // 기존 이미지 초기화

  filteredImages.forEach(image => {
    const imageBox = document.createElement('div');
    imageBox.className = 'image-box';

    const img = document.createElement('img');
    img.src = image.src;
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
  });
}

// 드롭다운 메뉴 변경 시 필터링
categoryFilter.addEventListener('change', () => {
  const selectedCategory = categoryFilter.value;

  if (selectedCategory === 'all') {
    renderImages(images); // 전체 이미지를 렌더링
  } else {
    const filteredImages = images.filter(image => image.category === selectedCategory);
    renderImages(filteredImages); // 선택된 카테고리의 이미지만 렌더링
  }
});

// 초기 렌더링: 전체 이미지를 표시
renderImages(images);
