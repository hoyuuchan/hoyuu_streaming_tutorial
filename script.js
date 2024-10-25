const images = [
  // 언더테일
  { src: './image/언더테일/sans01.gif', tag: '~샌즈01', category: '언더테일' },
  { src: './image/언더테일/sans0201.gif', tag: '~샌즈02', category: '언더테일' },
  { src: './image/언더테일/sans0301.gif', tag: '~샌즈03', category: '언더테일' },
  { src: './image/언더테일/sans0401.gif', tag: '~샌즈04', category: '언더테일' },
  { src: './image/언더테일/sans0501.gif', tag: '~샌즈05', category: '언더테일' },
  { src: './image/언더테일/sans0601.gif', tag: '~샌즈06, category: '언더테일'' },
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
