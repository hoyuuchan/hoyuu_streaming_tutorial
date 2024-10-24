    const images = [
      { src: 'https://nng-phinf.pstatic.net/MjAyNDEwMjRfMjkg/MDAxNzI5NzA4NTQxNjI4.rO8RNfhEl8tgRM3DBZrIY-xo0-Q0e4qiecZRNmor89Ag.fevnEMJZg3kxJcADg4YQid3S2rH-0KSPzN-REuHzHpMg.PNG/6.png?type=f174_174', tag: '태그1' },
      { src: 'https://nng-phinf.pstatic.net/MjAyNDEwMjRfMjkg/MDAxNzI5NzA4NTQxNjI4.rO8RNfhEl8tgRM3DBZrIY-xo0-Q0e4qiecZRNmor89Ag.fevnEMJZg3kxJcADg4YQid3S2rH-0KSPzN-REuHzHpMg.PNG/6.png?type=f174_174', tag: '태그2' },
      { src: 'https://nng-phinf.pstatic.net/MjAyNDEwMjRfMjkg/MDAxNzI5NzA4NTQxNjI4.rO8RNfhEl8tgRM3DBZrIY-xo0-Q0e4qiecZRNmor89Ag.fevnEMJZg3kxJcADg4YQid3S2rH-0KSPzN-REuHzHpMg.PNG/6.png?type=f174_174', tag: '태그3' },
      { src: 'https://nng-phinf.pstatic.net/MjAyNDEwMjRfMjkg/MDAxNzI5NzA4NTQxNjI4.rO8RNfhEl8tgRM3DBZrIY-xo0-Q0e4qiecZRNmor89Ag.fevnEMJZg3kxJcADg4YQid3S2rH-0KSPzN-REuHzHpMg.PNG/6.png?type=f174_174', tag: '태그4' },
      { src: 'https://nng-phinf.pstatic.net/MjAyNDEwMjRfMjkg/MDAxNzI5NzA4NTQxNjI4.rO8RNfhEl8tgRM3DBZrIY-xo0-Q0e4qiecZRNmor89Ag.fevnEMJZg3kxJcADg4YQid3S2rH-0KSPzN-REuHzHpMg.PNG/6.png?type=f174_174', tag: '태그5' },
      { src: 'https://nng-phinf.pstatic.net/MjAyNDEwMjRfMjkg/MDAxNzI5NzA4NTQxNjI4.rO8RNfhEl8tgRM3DBZrIY-xo0-Q0e4qiecZRNmor89Ag.fevnEMJZg3kxJcADg4YQid3S2rH-0KSPzN-REuHzHpMg.PNG/6.png?type=f174_174', tag: '태그6' },
      { src: 'https://nng-phinf.pstatic.net/MjAyNDEwMjRfMjkg/MDAxNzI5NzA4NTQxNjI4.rO8RNfhEl8tgRM3DBZrIY-xo0-Q0e4qiecZRNmor89Ag.fevnEMJZg3kxJcADg4YQid3S2rH-0KSPzN-REuHzHpMg.PNG/6.png?type=f174_174', tag: '태그7' },
      { src: 'https://nng-phinf.pstatic.net/MjAyNDEwMjRfMjkg/MDAxNzI5NzA4NTQxNjI4.rO8RNfhEl8tgRM3DBZrIY-xo0-Q0e4qiecZRNmor89Ag.fevnEMJZg3kxJcADg4YQid3S2rH-0KSPzN-REuHzHpMg.PNG/6.png?type=f174_174', tag: '태그8' },
      { src: 'https://nng-phinf.pstatic.net/MjAyNDEwMjRfMjkg/MDAxNzI5NzA4NTQxNjI4.rO8RNfhEl8tgRM3DBZrIY-xo0-Q0e4qiecZRNmor89Ag.fevnEMJZg3kxJcADg4YQid3S2rH-0KSPzN-REuHzHpMg.PNG/6.png?type=f174_174', tag: '태그9' },
      { src: 'https://nng-phinf.pstatic.net/MjAyNDEwMjRfMjkg/MDAxNzI5NzA4NTQxNjI4.rO8RNfhEl8tgRM3DBZrIY-xo0-Q0e4qiecZRNmor89Ag.fevnEMJZg3kxJcADg4YQid3S2rH-0KSPzN-REuHzHpMg.PNG/6.png?type=f174_174', tag: '태그10' },
      { src: 'https://nng-phinf.pstatic.net/MjAyNDEwMjRfMjkg/MDAxNzI5NzA4NTQxNjI4.rO8RNfhEl8tgRM3DBZrIY-xo0-Q0e4qiecZRNmor89Ag.fevnEMJZg3kxJcADg4YQid3S2rH-0KSPzN-REuHzHpMg.PNG/6.png?type=f174_174', tag: '태그11' },
      { src: 'https://nng-phinf.pstatic.net/MjAyNDEwMjRfMjkg/MDAxNzI5NzA4NTQxNjI4.rO8RNfhEl8tgRM3DBZrIY-xo0-Q0e4qiecZRNmor89Ag.fevnEMJZg3kxJcADg4YQid3S2rH-0KSPzN-REuHzHpMg.PNG/6.png?type=f174_174', tag: '태그12' },
      { src: 'https://nng-phinf.pstatic.net/MjAyNDEwMjRfMjkg/MDAxNzI5NzA4NTQxNjI4.rO8RNfhEl8tgRM3DBZrIY-xo0-Q0e4qiecZRNmor89Ag.fevnEMJZg3kxJcADg4YQid3S2rH-0KSPzN-REuHzHpMg.PNG/6.png?type=f174_174', tag: '태그13' },
      /* 추가 이미지 데이터... */
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
