const images = [
  // 언더테일
  { src: './image/언더테일/sans01.gif', tag: '~샌즈01' },
  { src: './image/언더테일/sans0201.gif', tag: '~샌즈02' },
  { src: './image/언더테일/sans0301.gif', tag: '~샌즈03' },
  { src: './image/언더테일/sans0401.gif', tag: '~샌즈04' },
  { src: './image/언더테일/sans0501.gif', tag: '~샌즈05' },
  { src: './image/언더테일/sans0601.gif', tag: '~샌즈06' },
  { src: './image/언더테일/sans0701.gif', tag: '~샌즈07' },
  { src: './image/언더테일/sans0801.webp', tag: '~샌즈08' },
  { src: './image/언더테일/sans0901.gif', tag: '~샌즈09' },
  { src: './image/언더테일/sanesss.gif', tag: '~싸네스' },
  { src: './image/언더테일/리퍼샌즈.jpg', tag: '~리퍼샌즈' },
  { src: './image/언더테일/papyrus01.gif', tag: '~파피루스01' },
  { src: './image/언더테일/papyrusA01.gif', tag: '~파피루스02' },
  { src: './image/언더테일/temmi01.gif', tag: '~테미01' },
  { src: './image/언더테일/temmiA01.gif', tag: '~테미02' },
  { src: './image/언더테일/bob.jpg', tag: '~밥' },
  { src: './image/언더테일/alphys0101.gif', tag: '~알피스01' },
  { src: './image/언더테일/alphys0201.gif', tag: '~알피스02' },
  { src: './image/언더테일/alphys0301.gif', tag: '~알피스03' },
  { src: './image/언더테일/asgore0101.gif', tag: '~아스고어01' },
  { src: './image/언더테일/asgore0201.webp', tag: '~아스고어02' },
  { src: './image/언더테일/flowey0101.gif', tag: '~플라위01' },
  { src: './image/언더테일/flowey0201.gif', tag: '~플라위02' },
  { src: './image/언더테일/flowey0301.gif', tag: '~플라위03' },
  { src: './image/언더테일/metaton01.gif', tag: '~메타톤01' },
  { src: './image/언더테일/metatonA01.gif', tag: '~메타톤02' },
  { src: './image/언더테일/metatonEX01.gif', tag: '~메타톤EX01' },
  { src: './image/언더테일/metatonEX02.gif', tag: '~메타톤EX02' },
  { src: './image/언더테일/metatonEX03.gif', tag: '~메타톤EX03' },
  { src: './image/언더테일/metatonEX04.gif', tag: '~메타톤EX04' },
  { src: './image/언더테일/muffet0101.gif', tag: '~머펫01' },
  { src: './image/언더테일/muffet0201.gif', tag: '~머펫02' },
  { src: './image/언더테일/napstablook0101.gif', tag: '~냅스타블룩01' },
  { src: './image/언더테일/napstablook0201.gif', tag: '~냅스타블룩02' },
  { src: './image/언더테일/toriel0101.gif', tag: '~토리엘01' },
  { src: './image/언더테일/toriel0201.gif', tag: '~토리엘02' },
  { src: './image/언더테일/toriel07.gif', tag: '~토리엘03' },
  { src: './image/언더테일/toriel08.gif', tag: '~토리엘04' },
  { src: './image/언더테일/toriel09.gif', tag: '~토리엘05' },
  { src: './image/언더테일/toriel10.gif', tag: '~토리엘06' },
  { src: './image/언더테일/Undyne01.gif', tag: '~언다인01' },
  { src: './image/언더테일/UndyneA01.gif', tag: '~언다인02' },

  // 산나비
  { src: './image/산나비/마리덜덜.gif', tag: '~마리덜덜' },
  { src: './image/산나비/마리바이.gif', tag: '~마리바이' },
  { src: './image/산나비/마리반짝.gif', tag: '~마리반짝' },
  { src: './image/산나비/마리엣.gif', tag: '~마리엣' },
  { src: './image/산나비/마리우웩.gif', tag: '~마리우웩' },
  { src: './image/산나비/마리월척.gif', tag: '~마리월척' },
  { src: './image/산나비/마리절레.gif', tag: '~마리절레' },
  { src: './image/산나비/마리짜잔01.gif', tag: '~마리짜잔01' },
  { src: './image/산나비/마리짜잔02.gif', tag: '~마리짜잔02' },
  { src: './image/산나비/마리짜잔03.gif', tag: '~마리짜잔03' },
  { src: './image/산나비/마리쩐다.gif', tag: '~마리쩐다' },
  { src: './image/산나비/마리크하하.gif', tag: '~마리크하하' },
  { src: './image/산나비/마리하아.gif', tag: '~마리하아' },
  { src: './image/산나비/마리하이.gif', tag: '~마리하이' },
  { src: './image/산나비/마리헿.gif', tag: '~마리헿' },
  { src: './image/산나비/마리흠.gif', tag: '~마리흠' },
  { src: './image/산나비/애기개못해.gif', tag: '~애기개못해' },
  { src: './image/산나비/애기그게.gif', tag: '~애기그게' },
  { src: './image/산나비/애기동동.gif', tag: '~애기동동' },
  { src: './image/산나비/애기두근.gif', tag: '~애기두근' },
  { src: './image/산나비/애기뒤적.gif', tag: '~애기뒤적' },
  { src: './image/산나비/애기반짝01.gif', tag: '~애기반짝01' },
  { src: './image/산나비/애기반짝02.gif', tag: '~애기반짝02' },
  { src: './image/산나비/애기브이.gif', tag: '~애기브이' },
  { src: './image/산나비/애기생축.gif', tag: '~애기생축' },
  { src: './image/산나비/애기신나.gif', tag: '~애기신나' },
  { src: './image/산나비/애기싫어.gif', tag: '~애기싫어' },
  { src: './image/산나비/애기위험.gif', tag: '~애기위험' },
  { src: './image/산나비/애기윙크.gif', tag: '~애기윙크' },
  { src: './image/산나비/애기잘자.gif', tag: '~애기잘자' },
  { src: './image/산나비/애기잠깐.gif', tag: '~애기잠깐' },
  { src: './image/산나비/애기점프.gif', tag: '~애기점프' },
  { src: './image/산나비/애기펄럭.gif', tag: '~애기펄럭' },
  { src: './image/산나비/애기행운.gif', tag: '~애기행운' },
  { src: './image/산나비/애기호출.gif', tag: '~애기호출' },
  { src: './image/산나비/애기흔들.gif', tag: '~애기흔들' },
  { src: './image/산나비/야옹이대원이지켜보고있다.gif', tag: '~야옹이지켜' },
  { src: './image/산나비/야옹이대원절레.gif', tag: '~야옹이절레' },
  { src: './image/산나비/야옹이대원짝짝.gif', tag: '~야옹이짝짝' },
  { src: './image/산나비/지켜보고있습니다.gif', tag: '~지켜보고있음' },
  // 추가 이미지 데이터...
];

const imageContainer = document.getElementById('imageContainer');

images.forEach(image => {
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
      .then(() => alert(`태그가 클립보드에 복사되었습니다: ${image.tag}`))
      .catch(err => console.error('클립보드 복사 실패', err));
  });

  imageContainer.appendChild(imageBox);
});
