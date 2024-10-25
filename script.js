const images = [
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
