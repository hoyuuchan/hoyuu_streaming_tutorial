const images = [

  // 3D
  { src: './image/3D/블렌더.png', tag: '~블렌더', category: '블렌더' },
  { src: './image/3D/블렌더응답없음.png', tag: '~블렌더응답없음', category: '블렌더' },
  { src: './image/3D/블렌더수잔.png', tag: '~블렌더수잔', category: '블렌더' },

  // 감정표현
  { src: './image/감정표현/마참내.png', tag: '~마참내', category: '감정표현' },
  { src: './image/감정표현/두렵다.png', tag: '~두렵다', category: '감정표현' },
  { src: './image/감정표현/띠껍다.png', tag: '~띠껍다', category: '감정표현' },
  { src: './image/감정표현/멋있다.png', tag: '~멋있다', category: '감정표현' },
  { src: './image/감정표현/슬프다.png', tag: '~슬프다', category: '감정표현' },
  { src: './image/감정표현/이상하다.png', tag: '~이상하다', category: '감정표현' },
  { src: './image/감정표현/즐겁다.png', tag: '~즐겁다', category: '감정표현' },
  { src: './image/감정표현/화난다.png', tag: '~화난다', category: '감정표현', },
  { src: './image/감정표현/손도깔끔.png', tag: '~손도깔끔', category: '감정표현' },
  { src: './image/감정표현/상하이조.gif', tag: '~상하이조', category: '감정표현' },
  { src: './image/감정표현/의사양반.gif', tag: '~의사양반', category: '감정표현' },
  { src: './image/감정표현/고자라니.gif', tag: '~고자라니', category: '감정표현' },
  { src: './image/감정표현/심영놀람.gif', tag: '~심영놀람', category: '감정표현' },
  { src: './image/감정표현/심영놀람2.gif', tag: '~심영놀람2', category: '감정표현' },
  { src: './image/감정표현/안하겠소.gif', tag: '~안하겠소', category: '감정표현' },
  { src: './image/감정표현/심영박수.gif', tag: '~심영박수', category: '감정표현' },
  { src: './image/감정표현/심영박수2.gif', tag: '~심영박수2', category: '감정표현' },
  { src: './image/감정표현/냥경악.gif', tag: '~냥경악', category: '감정표현' },
  { src: './image/감정표현/냥따봉.png', tag: '~냥따봉', category: '감정표현' },
  { src: './image/감정표현/멈춰.png', tag: '~멈춰', category: '감정표현' },
  { src: './image/감정표현/멈춰2.png', tag: '~멈춰2', category: '감정표현' },
  { src: './image/감정표현/멈춰3.png', tag: '~멈춰3', category: '감정표현' },
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
  { src: './image/감정표현/날속였어.png', tag: '~날속였어', category: '감정표현' },
  { src: './image/감정표현/이해했어.png', tag: '~이해했어', category: '감정표현' },
  { src: './image/감정표현/페페기대.png', tag: '~페페기대', category: '감정표현' },
  { src: './image/감정표현/페페눈물.png', tag: '~페페눈물', category: '감정표현' },
  { src: './image/감정표현/페페따봉.png', tag: '~페페따봉', category: '감정표현' },
  { src: './image/감정표현/페페웃음.png', tag: '~페페웃음', category: '감정표현' },
  { src: './image/감정표현/페페절규.png', tag: '~페페절규', category: '감정표현' },
  { src: './image/감정표현/페페타노스.png', tag: '~페페타노스', category: '감정표현' },
  { src: './image/감정표현/가만히.png', tag: '~가만히', category: '감정표현' },
  { src: './image/감정표현/고마워요.png', tag: '~고마워요', category: '감정표현' },
  { src: './image/감정표현/귀여운.png', tag: '~귀여운', category: '감정표현' },
  { src: './image/감정표현/기어요.png', tag: '~기어요', category: '감정표현' },
  { src: './image/감정표현/길쭉해요.png', tag: '~길쭉해요', category: '감정표현' },
  { src: './image/감정표현/꺅.png', tag: '~꺅', category: '감정표현' },
  { src: './image/감정표현/나빴어.png', tag: '~나빴어', category: '감정표현' },
  { src: './image/감정표현/먹을만하네요.png', tag: '~먹을만', category: '감정표현' },
  { src: './image/감정표현/물음표.png', tag: '~물음표', category: '감정표현' },
  { src: './image/감정표현/뭘바요.png', tag: '~뭘바요', category: '감정표현' },
  { src: './image/감정표현/미안해요.png', tag: '~미안해요', category: '감정표현' },
  { src: './image/감정표현/반가워요.png', tag: '~반가워요', category: '감정표현' },
  { src: './image/감정표현/배고파요.png', tag: '~배고파요', category: '감정표현' },
  { src: './image/감정표현/변태.png', tag: '~변태', category: '감정표현' },
  { src: './image/감정표현/보고있어요.png', tag: '~보고있어요', category: '감정표현' },
  { src: './image/감정표현/사랑해요.png', tag: '~사랑해요2', category: '감정표현' },
  { src: './image/감정표현/숨을래요.png', tag: '~숨을래요', category: '감정표현' },
  { src: './image/감정표현/싫은데요.png', tag: '~싫은데요', category: '감정표현' },
  { src: './image/감정표현/안돼요.png', tag: '~안돼요', category: '감정표현' },
  { src: './image/감정표현/안아줘요.png', tag: '~안아줘요', category: '감정표현' },
  { src: './image/감정표현/앨랠래.png', tag: '~앨랠래', category: '감정표현' },
  { src: './image/감정표현/어쩔.png', tag: '~어쩔', category: '감정표현' },
  { src: './image/감정표현/왜.png', tag: '~왜', category: '감정표현' },
  { src: './image/감정표현/왜요.png', tag: '~왜요', category: '감정표현' },
  { src: './image/감정표현/으아아앙.png', tag: '~으아아앙', category: '감정표현' },
  { src: './image/감정표현/이상해요.png', tag: '~이상해요', category: '감정표현' },
  { src: './image/감정표현/잘자요.png', tag: '~잘자요', category: '감정표현' },
  { src: './image/감정표현/점점점.png', tag: '~점점점', category: '감정표현' },
  { src: './image/감정표현/졸려요.png', tag: '~졸려요', category: '감정표현' },
  { src: './image/감정표현/좋아해요.png', tag: '~좋아해요', category: '감정표현' },
  { src: './image/감정표현/참잘했어요.png', tag: '~참잘했어요', category: '감정표현' },
  { src: './image/감정표현/푸하하.png', tag: '~푸하하', category: '감정표현' },
  { src: './image/감정표현/할수있어요.png', tag: '~할수있어요', category: '감정표현' },
  { src: './image/감정표현/행복해요.png', tag: '~행복해요', category: '감정표현' },
  { src: './image/감정표현/화났어요.png', tag: '~화났어요', category: '감정표현', },
  { src: './image/감정표현/상상도못한.png', tag: '~ㄴㅇㄱ', category: '감정표현' },
  { src: './image/감정표현/현장개추.png', tag: '~현장개추', category: '감정표현' },
  { src: './image/감정표현/현장몰루.png', tag: '~몰루', category: '감정표현' },
  { src: './image/감정표현/현장물음표.png', tag: '~현장물음표', category: '감정표현' },
  { src: './image/감정표현/현장비추.png', tag: '~현장비추', category: '감정표현' },
  { src: './image/감정표현/현장안돼.png', tag: '~안됩니다', category: '감정표현' },
  { src: './image/감정표현/현장어째서.png', tag: '~어째서', category: '감정표현' },
  { src: './image/감정표현/현장에.png', tag: '~에', category: '감정표현' },
  { src: './image/감정표현/현장이새기.png', tag: '~이새기', category: '감정표현', },
  { src: './image/감정표현/현장좋았쓰.png', tag: '~좋았쓰', category: '감정표현' },
  { src: './image/감정표현/현장캡처.png', tag: '~캡쳐', category: '감정표현' },
  { src: './image/감정표현/현장힘들어.png', tag: '~힘들어', category: '감정표현' },
  { src: './image/감정표현/현장ㅠㅠ.png', tag: '~ㅠㅠ', category: '감정표현' },
  { src: './image/감정표현/호동_못된생선.gif', tag: '~못된생선', category: '감정표현' },
  { src: './image/감정표현/호동_인내심한계.webp', tag: '~인내심한계', category: '감정표현' },
  { src: './image/감정표현/호동_정신좀차려.webp', tag: '~정신좀차려', category: '감정표현' },
  { src: './image/감정표현/호동_제정신아님.webp', tag: '~제정신아님', category: '감정표현' },
  { src: './image/감정표현/개죽개추.png', tag: '~개죽개추', category: '감정표현' },
  { src: './image/감정표현/개죽비추.png', tag: '~개죽비추', category: '감정표현' },
  { src: './image/감정표현/개죽검거.png', tag: '~검거중', category: '감정표현' },
  { src: './image/감정표현/개죽뽑아.png', tag: '~뽑아', category: '감정표현' },
  { src: './image/감정표현/개죽뽑지마.png', tag: '~뽑지마', category: '감정표현' },
  { src: './image/감정표현/개죽살아.png', tag: '~그럼살아', category: '감정표현' },
  { src: './image/감정표현/개죽죽어.png', tag: '~그럼죽어', category: '감정표현' },
  { src: './image/감정표현/개죽질러.png', tag: '~그럼질러', category: '감정표현' },
  { src: './image/감정표현/개죽일어나.png', tag: '~그럼일어나', category: '감정표현' },
  { src: './image/감정표현/개죽잘자.png', tag: '~그럼잘자', category: '감정표현' },
  { src: './image/감정표현/개죽그려.png', tag: '~그려와', category: '감정표현' },
  { src: './image/감정표현/개죽만들어.png', tag: '~그럼만들어', category: '감정표현' },
  { src: './image/감정표현/개죽내놔.png', tag: '~그럼내놔', category: '감정표현' },
  { src: './image/감정표현/개죽타라.png', tag: '~그럼타라', category: '감정표현' },
  { src: './image/감정표현/개죽괜찮.png', tag: '~괜찮은데', category: '감정표현' },
  { src: './image/감정표현/개죽꿀잼.png', tag: '~꿀잼인데', category: '감정표현' },
  { src: './image/감정표현/개죽노잼.png', tag: '~노잼인데', category: '감정표현' },
  { src: './image/감정표현/개죽별로.png', tag: '~별로던데', category: '감정표현' },
  { src: './image/감정표현/개죽부거.png', tag: '~부거줄', category: '감정표현' },
  { src: './image/감정표현/개죽분탕.png', tag: '~분탕', category: '감정표현' },
  { src: './image/감정표현/개죽비틱.png', tag: '~비틱', category: '감정표현' },
  { src: './image/감정표현/개죽뿌려.png', tag: '~그럼뿌려', category: '감정표현' },
  { src: './image/감정표현/개죽설득.png', tag: '~설득중', category: '감정표현' },
  { src: './image/감정표현/개죽설명.png', tag: '~설명중', category: '감정표현' },
  { src: './image/감정표현/개죽심한욕.png', tag: '~심한욕', category: '감정표현' },
  { src: './image/감정표현/개죽차단.png', tag: '~차단중', category: '감정표현' },
  { src: './image/감정표현/개죽칭찬.png', tag: '~칭찬중', category: '감정표현' },
  { src: './image/감정표현/뭐라는건지.png', tag: '~뭐라는건지', category: '감정표현' },
  { src: './image/감정표현/캐피탈리즘호.png', tag: '~캐피탈리즘호', category: '감정표현' },
  { src: './image/감정표현/캐피탈리즘폴짝.png', tag: '~폴짝', category: '감정표현' },
  { src: './image/감정표현/캐피탈리즘빚.png', tag: '~빚이', category: '감정표현' },
  { src: './image/감정표현/뚱이사랑.png', tag: '~사랑해요', category: '감정표현' },
  { src: './image/감정표현/고양이실패단.png', tag: '~고양이실패단', category: '감정표현' },
  { src: './image/감정표현/함정카드.png', tag: '~함정카드', category: '감정표현' },
  { src: './image/감정표현/드라군이출동.png', tag: '~드라군이출동', category: '감정표현' },
  { src: './image/감정표현/드라군드.png', tag: '~드', category: '감정표현' },
  { src: './image/감정표현/드라군라.png', tag: '~라', category: '감정표현' },
  { src: './image/감정표현/드라군군.png', tag: '~군', category: '감정표현' },
  { src: './image/감정표현/아무것도.png', tag: '~어무것도안하고싶다', category: '감정표현' },
  { src: './image/감정표현/행복회로행복.png', tag: '~행복회로', category: '감정표현' },
  { src: './image/감정표현/행복회로직전.png', tag: '~뜨끈한회로', category: '감정표현' },
  { src: './image/감정표현/행복회로불탐.png', tag: '~불타는회로', category: '감정표현' },
  { src: './image/감정표현/자세한설명.png', tag: '~자세한설명생략', category: '감정표현' },
  { src: './image/감정표현/근데이제뭐함.png', tag: '~근데이제뭐함', category: '감정표현' },
  { src: './image/감정표현/두뇌풀가동.png', tag: '~두뇌풀가동', category: '감정표현' },
  { src: './image/감정표현/사회인봇제비.png', tag: '~사회인봇제비', category: '감정표현' },
  { src: './image/감정표현/사회인봇제비2.png', tag: '~사회인봇제비2', category: '감정표현' },
  { src: './image/감정표현/사회인봇제비3.png', tag: '~사회인봇제비3', category: '감정표현' },
  { src: './image/감정표현/사회인봇제비4.png', tag: '~사회인봇제비4', category: '감정표현' },
  { src: './image/감정표현/사회인봇제비5.png', tag: '~사회인봇제비5', category: '감정표현' },
  { src: './image/감정표현/한강수온.png', tag: '~한강수온', category: '감정표현' },
  { src: './image/감정표현/미쳤습니까.png', tag: '~미쳤습니까', category: '감정표현' },
  { src: './image/감정표현/무슨소리니봇치야.png', tag: '~무슨소리니봇치야', category: '감정표현' },
  { src: './image/감정표현/하라는공부.png', tag: '~하라는공부', category: '감정표현' },
  { src: './image/감정표현/고만해미친놈들아.png', tag: '~고만해미친놈들아', category: '감정표현' },
  { src: './image/감정표현/혼란하다.png', tag: '~혼란하다', category: '감정표현' },
  { src: './image/감정표현/계획대로.png', tag: '~계획대로', category: '감정표현' },
  { src: './image/감정표현/저건사야해.png', tag: '~저건사야해', category: '감정표현' },
  { src: './image/감정표현/타라.jpg', tag: '~타라', category: '감정표현' },
  { src: './image/감정표현/개당황.jpg', tag: '~개당황', category: '감정표현' },
  { src: './image/감정표현/대부분버그.gif', tag: '~대부분버그', category: '감정표현' },
  { src: './image/감정표현/시끄러워.png', tag: '~시끄러워', category: '감정표현' },
  { src: './image/감정표현/돌림판.gif', tag: '~돌림판', category: '감정표현' },
  { src: './image/감정표현/돌림판2.gif', tag: '~돌림판2', category: '감정표현' },
  { src: './image/감정표현/주작.png', tag: '~주작', category: '감정표현' },
  { src: './image/감정표현/주작2.gif', tag: '~주작2', category: '감정표현' },
  { src: './image/감정표현/도라에몽.png', tag: '~난다알아', category: '감정표현' },
  { src: './image/감정표현/도라에몽2.png', tag: '~니수준', category: '감정표현' },
  { src: './image/감정표현/란란루.gif', tag: '~란란루', category: '감정표현', update: true },

  // 동방프로젝트
  { src: './image/동방/안된다구.png', tag: '~안된다구', category: '동방' },
  { src: './image/동방/아하.png', tag: '~아하', category: '동방' },
  { src: './image/동방/자렴.png', tag: '~자렴', category: '동방' },
  { src: './image/동방/좋아.png', tag: '~좋아', category: '동방' },
  { src: './image/동방/없어요.png', tag: '~없어요', category: '동방' },
  { src: './image/동방/쟤가.png', tag: '~쟤가', category: '동방' },
  { src: './image/동방/모르겠어.png', tag: '~모르겠어', category: '동방' },
  { src: './image/동방/절레절레.gif', tag: '~절레절레', category: '동방' },
  { src: './image/동방/좋을대로.png', tag: '~좋을대로', category: '동방' },
  { src: './image/동방/루미댄스.gif', tag: '~루미댄스', category: '동방' },
  { src: './image/동방/루미댄스2.webp', tag: '~루미댄스2', category: '동방' },
  { src: './image/동방/라바댄스.gif', tag: '~라바댄스', category: '동방' },
  { src: './image/동방/레미댄스.gif', tag: '~레미댄스', category: '동방' },
  { src: './image/동방/치르댄스.webp', tag: '~치르댄스', category: '동방' },
  { src: './image/동방/팔이짧아슬픈요괴.gif', tag: '~팔이짧아슬픈요괴', category: '동방' },
  { src: './image/동방/팔이짧아슬픈요괴2.png', tag: '~팔이짧아슬픈요괴2', category: '동방' },
  { src: './image/동방/팔이짧아슬픈요괴3.png', tag: '~팔이짧아슬픈요괴3', category: '동방' },
  { src: './image/동방/클피죽으면.png', tag: '~클피죽으면', category: '동방' },
  { src: './image/동방/레밀멋있지.webp', tag: '~레밀멋있지', category: '동방' },
  { src: './image/동방/레밀불꺼조.webp', tag: '~레밀불꺼조', category: '동방' },
  { src: './image/동방/레밀엑설.webp', tag: '~레밀엑설', category: '동방' },
  { src: './image/동방/레밀차한잔.gif', tag: '~차한잔', category: '동방' },
  { src: './image/동방/레이무동방아냐.webp', tag: '~레이무동방아냐', category: '동방' },
  { src: './image/동방/레이무망한다고.webp', tag: '~레이무망한다고', category: '동방' },
  { src: './image/동방/레이무절규.gif', tag: '~레이무절규', category: '동방' },
  { src: './image/동방/마리사덜덜.webp', tag: '~마리사덜덜', category: '동방' },
  { src: './image/동방/마리사덜덜2.gif', tag: '~마리사덜덜2', category: '동방' },
  { src: './image/동방/마리사아이스.webp', tag: '~마리사아이스', category: '동방' },
  { src: './image/동방/모코우주작.webp', tag: '~기습주작', category: '동방' },
  { src: './image/동방/모코우댄스.webp', tag: '~모코댄스', category: '동방' },
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
  { src: './image/동방/유유코수박.png', tag: '~유유코수박', category: '동방' },
  { src: './image/동방/유유코머임.png', tag: '~이거뭐야', category: '동방' },
  { src: './image/동방/유유코총.png', tag: '~유유코총', category: '동방' },
  { src: './image/동방/동방탓.png', tag: '~동방탓', category: '동방' },
  { src: './image/동방/니하오냥.gif', tag: '~니하오냥', category: '동방' },
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
  { src: './image/동방/안능하제옇.png', tag: '~안능하제옇', category: '동방' },
  { src: './image/동방/첸물음표.png', tag: '~첸물음표', category: '동방' },
  { src: './image/동방/첸퉤에엣.png', tag: '~퉤에엣', category: '동방' },
  { src: './image/동방/첸스으읍.png', tag: '~스으읍', category: '동방' },
  { src: './image/동방/첸커어억.png', tag: '~커어억', category: '동방' },
  { src: './image/동방/첸즌즌치키.png', tag: '~즌즌치키', category: '동방' },
  { src: './image/동방/방방댄스.gif', tag: '~방방댄스', category: '동방' },
  { src: './image/동방/니토리짝짝.gif', tag: '~짝짝', category: '동방' },
  { src: './image/동방/파츄리끝내줘.png', tag: '~인생은끝내줘', category: '동방' },
  { src: './image/동방/케이네오케이네.webp', tag: '~오케이네', category: '동방' },
  { src: './image/동방/요우무법규.png', tag: '~요우무법규', category: '동방' },
  { src: './image/동방/코가사원망.png', tag: '~원망스러워', category: '동방' },
  { src: './image/동방/코가사와.webp', tag: '~코가사와', category: '동방' },
  { src: './image/동방/코가사칼.webp', tag: '~코가사칼', category: '동방' },
  { src: './image/동방/세이란일어남.png', tag: '~지금일어났다', category: '동방' },
  { src: './image/동방/시온쾅.webp', tag: '~시온쾅', category: '동방' },
  { src: './image/동방/에린에린.webp', tag: '~에린에린', category: '동방' },
  { src: './image/동방/에린에린2.webp', tag: '~에린에린2', category: '동방' },
  { src: './image/동방/사구메움짤.webp', tag: '~사구메움짤', category: '동방' },
  { src: './image/동방/사나에움짤.webp', tag: '~사나에움짤', category: '동방' },
  { src: './image/동방/우동게움짤.webp', tag: '~우동게움짤', category: '동방' },
  { src: './image/동방/클피움짤.webp', tag: '~클피움짤', category: '동방' },
  { src: './image/동방/헤카티아움짤.webp', tag: '~헤카티아움짤', category: '동방' },
  { src: './image/동방/레이무스런.webp', tag: '~레이무스런', category: '동방' },
  { src: './image/동방/감마리.webp', tag: '~감마리', category: '동방' },
  { src: './image/동방/코가사.png', tag: '~코가사', category: '동방' },
  { src: './image/동방/시즈하.png', tag: '~시즈하', category: '동방' },
  { src: './image/동방/미노리코.png', tag: '~미노리코', category: '동방' },
  { src: './image/동방/아야.png', tag: '~아야', category: '동방' },
  { src: './image/동방/카구야.png', tag: '~카구야', category: '동방' },
  { src: './image/동방/모코우.png', tag: '~모코우', category: '동방' },
  { src: './image/동방/에이린.png', tag: '~에이린', category: '동방' },
  { src: './image/동방/사나에.png', tag: '~사나에', category: '동방' },
  { src: './image/동방/하타테.png', tag: '~하타테', category: '동방' },
  { src: './image/동방/와카사기히메.png', tag: '~와카사기', category: '동방' },
  { src: './image/동방/쿠타카.png', tag: '~쿠타카', category: '동방' },
  { src: './image/동방/타카네.png', tag: '~타카네', category: '동방' },
  { src: './image/동방/레밀리아.png', tag: '~레밀리아', category: '동방' },
  { src: './image/동방/플랑도르.png', tag: '~플랑도르', category: '동방' },
  { src: './image/동방/코이시.png', tag: '~코이시', category: '동방' },
  { src: './image/동방/사토리.png', tag: '~사토리', category: '동방' },
  { src: './image/동방/치르노.png', tag: '~치르노', category: '동방' },
  { src: './image/동방/치르노흑.png', tag: '~흑르노', category: '동방' },
  { src: './image/동방/루미아.png', tag: '~루미아', category: '동방' },
  { src: './image/동방/요우무.png', tag: '~요우무', category: '동방' },
  { src: './image/동방/사쿠야.png', tag: '~사쿠야', category: '동방' },
  { src: './image/동방/파츄리.png', tag: '~파츄리', category: '동방' },
  { src: './image/동방/홍메이링.png', tag: '~홍메이링', category: '동방' },
  { src: './image/동방/유카리.png', tag: '~유카리', category: '동방' },
  { src: './image/동방/유카리파.png', tag: '~파카리', category: '동방' },
  { src: './image/동방/란.png', tag: '~란', category: '동방' },
  { src: './image/동방/첸.png', tag: '~첸', category: '동방' },
  { src: './image/동방/앨리스.png', tag: '~앨리스', category: '동방' },
  { src: './image/동방/유유코.png', tag: '~유유코', category: '동방' },
  { src: './image/동방/니토리.png', tag: '~니토리', category: '동방' },
  { src: './image/동방/클라운피스.png', tag: '~클라운피스', category: '동방' },
  { src: './image/동방/미스티아.png', tag: '~미스티아', category: '동방' },
  { src: './image/동방/쿄코.png', tag: '~쿄코', category: '동방' },
  { src: './image/동방/리글.png', tag: '~리글', category: '동방' },
  { src: './image/동방/세이란.png', tag: '~세이란', category: '동방' },
  { src: './image/동방/링고.png', tag: '~링고', category: '동방' },
  { src: './image/동방/케이네.png', tag: '~케이네', category: '동방' },
  { src: './image/동방/케이네백택.png', tag: '~백택케이네', category: '동방' },
  { src: './image/동방/곽청아.png', tag: '~곽청아', category: '동방' },
  { src: './image/동방/요시카.png', tag: '~요시카', category: '동방' },
  { src: './image/동방/텐시.png', tag: '~텐시', category: '동방' },
  { src: './image/동방/텐큐.png', tag: '~텐큐', category: '동방' },
  { src: './image/동방/레이무.png', tag: '~레이무', category: '동방' },
  { src: './image/동방/마리사.png', tag: '~마리사', category: '동방' },
  { src: './image/동방/우동게.png', tag: '~우동게', category: '동방' },
  { src: './image/동방/테위.png', tag: '~테위', category: '동방' },
  { src: './image/동방/순호.png', tag: '~순호', category: '동방' },
  { src: './image/동방/오키나.png', tag: '~오키나', category: '동방' },
  { src: './image/동방/야치에.png', tag: '~야치에', category: '동방' },
  { src: './image/동방/미코.png', tag: '~미코', category: '동방' },
  { src: './image/동방/아운.png', tag: '~아운', category: '동방' },
  { src: './image/동방/나즈린.png', tag: '~나즈린', category: '동방' },
  { src: './image/동방/린.png', tag: '~린', category: '동방' },
  { src: './image/동방/츠카사.png', tag: '~츠카사', category: '동방' },
  { src: './image/동방/사키.png', tag: '~사키', category: '동방' },
  { src: './image/동방/유마.png', tag: '~유마', category: '동방' },
  { src: './image/동방/스이카.png', tag: '~스이카', category: '동방' },
  { src: './image/동방/손미천.png', tag: '~손미천', category: '동방' },
  { src: './image/동방/ZUN.png', tag: '~ZUN', category: '동방' },
  { src: './image/동방/ZUZ.png', tag: '~ZUZ', category: '동방' },
  { src: './image/동방/후모코가사.png', tag: '~후모코가사', category: '동방' },
  { src: './image/동방/후모아야.png', tag: '~후모아야', category: '동방' },
  { src: './image/동방/후모하타테.png', tag: '~후모하타테', category: '동방' },
  { src: './image/동방/후모유카리.png', tag: '~후모유카리', category: '동방' },
  { src: './image/동방/후모란.png', tag: '~후모란', category: '동방' },
  { src: './image/동방/후모첸.png', tag: '~후모첸', category: '동방' },
  { src: './image/동방/후모유유코.png', tag: '~후모유유코', category: '동방' },
  { src: './image/동방/후모요우무.png', tag: '~후모요우무', category: '동방' },
  { src: './image/동방/후모죠온.png', tag: '~후모죠온', category: '동방' },
  { src: './image/동방/후모시온.png', tag: '~후모시온', category: '동방' },
  { src: './image/동방/후모레이무.png', tag: '~후모레이무', category: '동방' },
  { src: './image/동방/후모구레이무.png', tag: '~후모구레이무', category: '동방' },
  { src: './image/동방/후모마리사.png', tag: '~후모마리사', category: '동방' },
  { src: './image/동방/후모구마리사.png', tag: '~후모구마리사', category: '동방' },
  { src: './image/동방/후모치르노.png', tag: '~후모치르노', category: '동방' },
  { src: './image/동방/후모흑르노.png', tag: '~후모흑르노', category: '동방' },
  { src: './image/동방/후모순호.png', tag: '~후모순호', category: '동방' },
  { src: './image/동방/후모오키나.png', tag: '~후모오키나', category: '동방' },
  { src: './image/동방/후모헤카티아.png', tag: '~후모헤카티아', category: '동방' },
  { src: './image/동방/후모코이시.png', tag: '~후모코이시', category: '동방' },
  { src: './image/동방/후모사토리.png', tag: '~후모사토리', category: '동방' },
  { src: './image/동방/후모오린.png', tag: '~후모오린', category: '동방' },
  { src: './image/동방/후모오쿠.png', tag: '~후모오쿠', category: '동방' },
  { src: './image/동방/후모레밀.png', tag: '~후모레밀', category: '동방' },
  { src: './image/동방/후모플랑.png', tag: '~후모플랑', category: '동방' },
  { src: './image/동방/후모파츄리.png', tag: '~후모파츄리', category: '동방' },
  { src: './image/동방/후모사쿠야.png', tag: '~후모사쿠야', category: '동방' },
  { src: './image/동방/후모도철.png', tag: '~후모도철', category: '동방' },
  { src: './image/동방/후모사나에.png', tag: '~후모사나에', category: '동방' },
  { src: './image/동방/후모스와코.png', tag: '~후모스와코', category: '동방' },
  { src: './image/동방/후모히지리.png', tag: '~후모히지리', category: '동방' },
  { src: './image/동방/후모나즈린.png', tag: '~후모나즈린', category: '동방' },
  { src: './image/동방/후모코코로.png', tag: '~후모코코로', category: '동방' },
  { src: './image/동방/후모텐시.png', tag: '~후모텐시', category: '동방' },
  { src: './image/동방/후모카센.png', tag: '~후모카센', category: '동방' },
  { src: './image/동방/후모앨리스.png', tag: '~후모앨리스', category: '동방' },
  { src: './image/동방/후모텐큐.png', tag: '~후모텐큐', category: '동방' },
  { src: './image/동방/후모파르시.png', tag: '~후모파르시', category: '동방' },
  { src: './image/동방/후모히나.png', tag: '~후모히나', category: '동방' },
  { src: './image/동방/후모니토리.png', tag: '~후모카센', category: '동방' },
  { src: './image/동방/후모누에.png', tag: '~후모카센', category: '동방' },
  { src: './image/동방/후모루미아.png', tag: '~후모루미아', category: '동방' },
  { src: './image/동방/후모사구메.png', tag: '~후모사구메', category: '동방' },
  { src: './image/동방/후모시키.png', tag: '~후모시키', category: '동방' },
  { src: './image/동방/후모렌코.png', tag: '~후모렌코', category: '동방' },
  { src: './image/동방/후모메리.png', tag: '~후모메리', category: '동방' },
  { src: './image/동방/후모모미지.png', tag: '~후모모미지', category: '동방' },
  { src: './image/동방/후모미코.png', tag: '~후모미코', category: '동방' },
  { src: './image/동방/후모세이쟈.png', tag: '~후모세이쟈', category: '동방' },
  { src: './image/동방/후모에링.png', tag: '~후모에링', category: '동방' },
  { src: './image/동방/후모유카.png', tag: '~후모유카', category: '동방' },
  { src: './image/동방/후모린노.png', tag: '~후모린노', category: '동방' },
  
  // 언더테일
  { src: './image/언더테일/sans01.gif', tag: '~샌즈', category: '언더테일' },
  { src: './image/언더테일/sans0201.gif', tag: '~샌즈2', category: '언더테일' },
  { src: './image/언더테일/sans0301.gif', tag: '~샌즈3', category: '언더테일' },
  { src: './image/언더테일/sans0401.gif', tag: '~샌즈4', category: '언더테일' },
  { src: './image/언더테일/sans0501.gif', tag: '~샌즈5', category: '언더테일' },
  { src: './image/언더테일/sans0601.gif', tag: '~샌즈6', category: '언더테일' },
  { src: './image/언더테일/sans0701.gif', tag: '~샌즈7', category: '언더테일' },
  { src: './image/언더테일/sans0801.webp', tag: '~샌즈8', category: '언더테일' },
  { src: './image/언더테일/sans0901.gif', tag: '~샌즈9', category: '언더테일' },
  { src: './image/언더테일/sanesss.gif', tag: '~싸네스', category: '언더테일' },
  { src: './image/언더테일/리퍼샌즈.jpg', tag: '~리퍼샌즈', category: '언더테일' },
  { src: './image/언더테일/swapsans.png', tag: '~스왚샌즈', category: '언더테일' },
  { src: './image/언더테일/papyrus01.gif', tag: '~파피루스', category: '언더테일' },
  { src: './image/언더테일/papyrusA01.gif', tag: '~파피루스2', category: '언더테일' },
  { src: './image/언더테일/temmi01.gif', tag: '~테미', category: '언더테일' },
  { src: './image/언더테일/temmiA01.gif', tag: '~테미2', category: '언더테일' },
  { src: './image/언더테일/bob.jpg', tag: '~밥', category: '언더테일' },
  { src: './image/언더테일/alphys0101.gif', tag: '~알피스', category: '언더테일' },
  { src: './image/언더테일/alphys0201.gif', tag: '~알피스2', category: '언더테일' },
  { src: './image/언더테일/alphys0301.gif', tag: '~알피스3', category: '언더테일' },
  { src: './image/언더테일/asgore0101.gif', tag: '~아스고어', category: '언더테일' },
  { src: './image/언더테일/asgore0201.webp', tag: '~아스고어2', category: '언더테일' },
  { src: './image/언더테일/asriel.gif', tag: '~아스리엘', category: '언더테일' },
  { src: './image/언더테일/flowey0101.gif', tag: '~플라위', category: '언더테일' },
  { src: './image/언더테일/flowey0201.gif', tag: '~플라위2', category: '언더테일' },
  { src: './image/언더테일/flowey0301.gif', tag: '~플라위3', category: '언더테일' },
  { src: './image/언더테일/metaton01.gif', tag: '~메타톤', category: '언더테일' },
  { src: './image/언더테일/metatonA01.gif', tag: '~메타톤2', category: '언더테일' },
  { src: './image/언더테일/metatonEX01.gif', tag: '~메타톤EX', category: '언더테일' },
  { src: './image/언더테일/metatonEX02.gif', tag: '~메타톤EX2', category: '언더테일' },
  { src: './image/언더테일/metatonEX03.gif', tag: '~메타톤EX3', category: '언더테일' },
  { src: './image/언더테일/metatonEX04.gif', tag: '~메타톤EX4', category: '언더테일' },
  { src: './image/언더테일/muffet0101.gif', tag: '~머펫', category: '언더테일' },
  { src: './image/언더테일/muffet0201.gif', tag: '~머펫2', category: '언더테일' },
  { src: './image/언더테일/napstablook0101.gif', tag: '~냅스타블룩', category: '언더테일' },
  { src: './image/언더테일/napstablook0201.gif', tag: '~냅스타블룩2', category: '언더테일' },
  { src: './image/언더테일/toriel0101.gif', tag: '~토리엘', category: '언더테일' },
  { src: './image/언더테일/toriel0201.gif', tag: '~토리엘2', category: '언더테일' },
  { src: './image/언더테일/toriel07.gif', tag: '~토리엘3', category: '언더테일' },
  { src: './image/언더테일/toriel08.gif', tag: '~토리엘4', category: '언더테일' },
  { src: './image/언더테일/toriel09.gif', tag: '~토리엘5', category: '언더테일' },
  { src: './image/언더테일/toriel10.gif', tag: '~토리엘6', category: '언더테일' },
  { src: './image/언더테일/Undyne01.gif', tag: '~언다인', category: '언더테일' },
  { src: './image/언더테일/UndyneA01.gif', tag: '~언다인2', category: '언더테일' },
  { src: './image/언더테일/히트플.png', tag: '~히트플', category: '언더테일' },
  { src: './image/언더테일/히트플깜짝.png', tag: '~히트플깜짝', category: '언더테일' },
  { src: './image/언더테일/프리스크.png', tag: '~프리스크', category: '언더테일' },
  { src: './image/언더테일/chara0101.gif', tag: '~차라', category: '언더테일' },
  { src: './image/언더테일/chara0201.gif', tag: '~차라2', category: '언더테일' },

  // 디맥
  { src: './image/디맥/가면라이더.png', tag: '~가면라이더', category: '디맥' },
  { src: './image/디맥/냐옹이.png', tag: '~냐옹이', category: '디맥' },
  { src: './image/디맥/다람쥐.png', tag: '~다람쥐', category: '디맥' },
  { src: './image/디맥/따오기.png', tag: '~따오기', category: '디맥' },
  { src: './image/디맥/뜸부기.png', tag: '~뜸부기', category: '디맥' },

  // 히오스
  { src: './image/올피콘/올피ㅋㅋ.png', tag: '~올피ㅋㅋ', category: '히오스' },
  { src: './image/올피콘/올피놀람.png', tag: '~올피놀람', category: '히오스' },
  { src: './image/올피콘/올피메롱.png', tag: '~올피메롱', category: '히오스' },
  { src: './image/올피콘/올피슬퍼.png', tag: '~올피슬퍼', category: '히오스' },
  { src: './image/올피콘/올피이런.png', tag: '~올피이런', category: '히오스' },
  { src: './image/올피콘/올피쿨.png', tag: '~올피쿨', category: '히오스' },
  { src: './image/올피콘/올피펫.png', tag: '~올피펫', category: '히오스' },
  { src: './image/올피콘/올피하트.png', tag: '~올피하트', category: '히오스' },
  { src: './image/올피콘/올피해피.png', tag: '~올피해피', category: '히오스' },
  { src: './image/올피콘/올피화남.png', tag: '~올피화남', category: '히오스' },
  { src: './image/올피콘/올피흠.png', tag: '~올피흠', category: '히오스' },

  // 산나비
  { src: './image/산나비/대장그건.gif', tag: '~대장그건', category: '산나비' },
  { src: './image/산나비/대장더없나.gif', tag: '~대장더없나', category: '산나비' },
  { src: './image/산나비/대장더있나.gif', tag: '~대장더있나', category: '산나비' },
  { src: './image/산나비/대장업.gif', tag: '~대장업', category: '산나비' },
  { src: './image/산나비/대장다운.gif', tag: '~대장다운', category: '산나비' },
  { src: './image/산나비/대장연주.gif', tag: '~대장연주', category: '산나비' },
  { src: './image/산나비/송소령.gif', tag: '~송소령', category: '산나비' },
  { src: './image/산나비/송소령찰싹.gif', tag: '~송소령찰싹', category: '산나비' },
  { src: './image/산나비/송소령애기.gif', tag: '~송소령애기', category: '산나비' },
  { src: './image/산나비/마리덜덜.gif', tag: '~마리덜덜', category: '산나비' },
  { src: './image/산나비/마리바이.gif', tag: '~마리바이', category: '산나비' },
  { src: './image/산나비/마리반짝01.gif', tag: '~마리반짝01', category: '산나비' },
  { src: './image/산나비/마리반짝02.gif', tag: '~마리반짝02', category: '산나비' },
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
  { src: './image/산나비/마리으앙01.gif', tag: '~마리엉', category: '산나비' },
  { src: './image/산나비/마리으앙02.gif', tag: '~마리엉엉', category: '산나비' },
  { src: './image/산나비/마리으앙03.gif', tag: '~마리으앙', category: '산나비' },
  { src: './image/산나비/게이밍마리01.gif', tag: '~게이밍마리01', category: '산나비' },
  { src: './image/산나비/게이밍마리02.gif', tag: '~게이밍마리02', category: '산나비' },
  { src: './image/산나비/마리타닥.gif', tag: '~마리타닥', category: '산나비' },
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
  { src: './image/산나비/애기그리고.gif', tag: '~애기그리고', category: '산나비' },
  { src: './image/산나비/애기소식.gif', tag: '~애기소식', category: '산나비' },
  { src: './image/산나비/애기다치지.gif', tag: '~애기다치지', category: '산나비' },
  { src: './image/산나비/애기귀여워.gif', tag: '~애기귀여워', category: '산나비' },
  { src: './image/산나비/야옹이대원이지켜보고있다.gif', tag: '~야옹이지켜', category: '산나비' },
  { src: './image/산나비/야옹이대원절레.gif', tag: '~야옹이절레', category: '산나비' },
  { src: './image/산나비/야옹이대원짝짝.gif', tag: '~야옹이짝짝', category: '산나비' },
  { src: './image/산나비/지켜보고있습니다.gif', tag: '~지켜보고있음', category: '산나비' },
  { src: './image/산나비/신원확인.gif', tag: '~신원확인', category: '산나비' },
  { src: './image/산나비/어명집행.gif', tag: '~어명집행', category: '산나비' },

  // 마인크래프트
  { src: './image/마크/거미.png', tag: '~거미', category: '마크' },
  { src: './image/마크/닭.png', tag: '~닭', category: '마크' },
  { src: './image/마크/닭ㅠㅠ.png', tag: '~닭ㅠㅠ', category: '마크' },
  { src: './image/마크/돼지.png', tag: '~돼지', category: '마크' },
  { src: './image/마크/돼지ㅠㅠ.png', tag: '~돼지ㅠㅠ', category: '마크' },
  { src: './image/마크/소.png', tag: '~소', category: '마크' },
  { src: './image/마크/소ㅠㅠ.png', tag: '~소ㅠㅠ', category: '마크' },
  { src: './image/마크/스켈레톤.png', tag: '~스켈레톤', category: '마크' },
  { src: './image/마크/슬라임.png', tag: '~슬라임', category: '마크' },
  { src: './image/마크/양.png', tag: '~양', category: '마크' },
  { src: './image/마크/양ㅠㅠ.png', tag: '~양ㅠㅠ', category: '마크' },
  { src: './image/마크/엔더맨.png', tag: '~엔더맨', category: '마크' },
  { src: './image/마크/좀비.png', tag: '~좀비', category: '마크' },
  { src: './image/마크/주민.png', tag: '~주민', category: '마크' },
  { src: './image/마크/주민ㅠㅠ.png', tag: '~주민ㅠㅠ', category: '마크' },
  { src: './image/마크/크리퍼.png', tag: '~크리퍼', category: '마크' },
  { src: './image/마크/구리원석.webp', tag: '~구리원석', category: '마크' },
  { src: './image/마크/구리주괴.webp', tag: '~구리주괴', category: '마크' },
  { src: './image/마크/금원석.webp', tag: '~금원석', category: '마크' },
  { src: './image/마크/금조각.webp', tag: '~금조각', category: '마크' },
  { src: './image/마크/금주괴.webp', tag: '~금주괴', category: '마크' },
  { src: './image/마크/다이아.webp', tag: '~다이아', category: '마크' },
  { src: './image/마크/레드스톤.webp', tag: '~레드스톤', category: '마크' },
  { src: './image/마크/석탄.webp', tag: '~석탄', category: '마크' },
  { src: './image/마크/철원석.webp', tag: '~철원석', category: '마크' },
  { src: './image/마크/철조각.webp', tag: '~철조각', category: '마크' },
  { src: './image/마크/철주괴.webp', tag: '~철주괴', category: '마크' },
  { src: './image/마크/청금석.webp', tag: '~청금석', category: '마크' },
  { src: './image/마크/에메랄드.webp', tag: '~에메랄드', category: '마크' },

  // 기타
  { src: './image/기타/레굴루스.png', tag: '~레굴루스', category: '게임기타' },
  { src: './image/기타/레굴루스점점점.png', tag: '~레굴루스점점점', category: '게임기타' },
  { src: './image/기타/와구.png', tag: '~와구', category: '게임기타' },
  { src: './image/기타/삭제.webp', tag: '~삭제', category: '게임기타' },
  { src: './image/기타/센스.png', tag: '~센스', category: '게임기타' },
  { src: './image/기타/소닉링없찐.gif', tag: '~링없찐', category: '게임기타' },
  { src: './image/기타/소닉결혼반지.png', tag: '~링일찐', category: '게임기타' },
  { src: './image/기타/도로시씻어.png', tag: '~지휘관씻어', category: ['게임기타', '감정표현'] },
  { src: './image/기타/도로시좀씻어.png', tag: '~지휘관좀씻어', category: ['게임기타', '감정표현'] },
  { src: './image/기타/도로롱.webp', tag: '~도로롱', category: ['게임기타', '감정표현'] },
  { src: './image/기타/도로롱레몬.png', tag: '~도로롱레몬', category: ['게임기타', '감정표현'] },
  { src: './image/기타/도로롱레몬2.png', tag: '~도로롱레몬2', category: ['게임기타', '감정표현'] },
  { src: './image/기타/도로롱생각.webp', tag: '~도로롱생각', category: ['게임기타', '감정표현'] },
  { src: './image/기타/도로롱감전.webp', tag: '~도로롱감전', category: ['게임기타', '감정표현'] },
  { src: './image/기타/도로롱관찰.webp', tag: '~도로롱관찰', category: ['게임기타', '감정표현'] },
  { src: './image/기타/도로롱기타.webp', tag: '~도로롱기타', category: ['게임기타', '감정표현'] },
  { src: './image/기타/도로롱와구.gif', tag: '~도로롱와구', category: ['게임기타', '감정표현'] },
  { src: './image/기타/도로롱하트.gif', tag: '~도로롱하트', category: ['게임기타', '감정표현'], update: true },
  { src: './image/기타/볼트공중.png', tag: '~볼트공중', category: '게임기타' },
  { src: './image/기타/모자걸댄스.webp', tag: '~모자걸댄스', category: ['게임기타', '감정표현'] },
  { src: './image/기타/두근두근.gif', tag: '~두근두근', category: ['게임기타', '감정표현'] },
  { src: './image/기타/정상영업.png', tag: '~정상영업', category: '기타' },
  { src: './image/기타/혼란하다.png', tag: '~혼란하다', category: '기타' },
  { src: './image/기타/날속인거니.png', tag: '~날속인거니', category: '기타' },
  { src: './image/기타/즌다.webp', tag: '~즌다', category: '기타' },
  { src: './image/기타/즌즌즌다.webp', tag: '~즌즌즌다', category: '기타' },
  { src: './image/기타/즌다조식.webp', tag: '~즌다오키테', category: '기타' },
  { src: './image/기타/잼민펀치.png', tag: '~잼민펀치', category: '기타' },
  { src: './image/기타/잼민펀치2.png', tag: '~잼민펀치2', category: '기타' },
  { src: './image/기타/안돼돌아가.png', tag: '~안돼돌아가', category: '기타' },
  { src: './image/기타/강도에요.png', tag: '~강도에요', category: '기타' },
  { src: './image/기타/기가차드.png', tag: '~기가차드', category: '기타' },
  { src: './image/기타/기가차드2.png', tag: '~기가차드2', category: '기타' },
  { src: './image/기타/기가차드3.png', tag: '~기가차드3', category: '기타' },
  { src: './image/기타/기가차드4.png', tag: '~기가차드4', category: '기타' },
  { src: './image/기타/기가차드5.png', tag: '~기가차드5', category: '기타' },
  { src: './image/기타/흑화쿠키2.png', tag: '~흑화쿠키2', category: '기타' },
  { src: './image/기타/테토쮸글.webp', tag: '~테토쮸글', category: '기타' },
  { src: './image/기타/테토뚱뚱.webp', tag: '~테토뚱뚱', category: '기타', update: true },
  { src: './image/기타/안안에베베.webp', tag: '~안안에베베', category: ['게임기타', '감정표현'] },
  { src: './image/기타/안안뭐.webp', tag: '~안안뭐', category: ['게임기타', '감정표현'] },
  { src: './image/기타/안안ㅋ.webp', tag: '~안안ㅋ', category: ['게임기타', '감정표현'] },
  { src: './image/기타/안안ㅎ.webp', tag: '~안안ㅎ', category: ['게임기타', '감정표현'] },
  { src: './image/기타/스피키.jpg', tag: '~스피키', category: ['게임기타', '감정표현'], update: true },

  // 오리지널
  { src: './image/오리지널/란호유.png', tag: '~란호유', category: '란호유' },
  { src: './image/오리지널/음란호유.png', tag: '~음란호유', category: '란호유' },
  { src: './image/오리지널/음란호유2.png', tag: '~음란호유2', category: '란호유' },
  { src: './image/오리지널/호유표독.png', tag: '~호유표독', category: '란호유' },
  { src: './image/오리지널/니코호유.png', tag: '~니코호유', category: '란호유' },
  { src: './image/오리지널/란호유페로.webp', tag: '~호유페로', category: '란호유' },
  { src: './image/오리지널/란호유의문.png', tag: '~호유의문', category: '란호유' },
  { src: './image/오리지널/란호유씨익.png', tag: '~호유씨익', category: '란호유' },
  { src: './image/오리지널/란호유멍.png', tag: '~호유멍', category: '란호유' },
  { src: './image/오리지널/란가사.png', tag: '~란가사', category: '란호유' },
  { src: './image/오리지널/500억자산가.png', tag: '~란르밀', category: '란호유' },
  { src: './image/오리지널/호유타라.png', tag: '~호유타라', category: '란호유' },
  { src: './image/오리지널/호유뭐지.gif', tag: '~빡호유', category: '란호유' },
  { src: './image/오리지널/호유만질래.png', tag: '~호유만질래', category: '란호유' },
  { src: './image/오리지널/호유눈치.png', tag: '~호유눈치', category: '란호유' },
  { src: './image/오리지널/호유쿄코.png', tag: '~호유쿄코', category: '란호유' },
  { src: './image/오리지널/호유더위사냥.png', tag: '~호유더위사냥', category: '란호유' },
  { src: './image/오리지널/작업은끝내줘.png', tag: '~작업은끝내줘', category: '란호유' },
  { src: './image/오리지널/호유댓글.png', tag: '~댓글인줄알았지', category: '란호유' },
  { src: './image/오리지널/란호유아헤.gif', tag: '~란헤가오', category: '란호유' },
  { src: './image/오리지널/란호유바보털.gif', tag: '~호유바보털', category: '란호유' },
  { src: './image/오리지널/란호유아니에요.gif', tag: '~호유아니에요', category: '란호유' },
  { src: './image/오리지널/란호유리본.gif', tag: '~호유리본', category: '란호유' },
  { src: './image/오리지널/란호유메이드.gif', tag: '~호유메이드2', category: '란호유' },
  { src: './image/오리지널/란호유쿠키.gif', tag: '~호유쿠키', category: '란호유' },
  { src: './image/오리지널/란호유쿠키와구.gif', tag: '~호유쿠키와구', category: '란호유' },
  { src: './image/오리지널/흑화쿠키.gif', tag: '~흑화쿠키', category: '란호유' },
  { src: './image/오리지널/란호유네코.gif', tag: '~네코호유', category: '란호유' },
  { src: './image/오리지널/란호유바니.gif', tag: '~호유바니2', category: '란호유' },
  { src: './image/오리지널/란호유바니2.gif', tag: '~호유바니3', category: '란호유' },
  { src: './image/오리지널/란호유바니3.gif', tag: '~호유바니4', category: '란호유' },
  { src: './image/오리지널/유와씨.webp', tag: '~유와씨', category: '란호유기타' },
  { src: './image/오리지널/진짜에요유아.png', tag: '~유아진짜에요', category: '란호유기타' },
  { src: './image/언더테일/호유샌즈.png', tag: '~호유샌즈', category: '호유링기링' },
  { src: './image/오리지널/호유란.png', tag: '~호유란', category: ['동방', '호유링기링', '호유링기링'] },
  { src: './image/오리지널/호유첸.png', tag: '~호유첸', category: ['동방', '호유링기링'] },
  { src: './image/오리지널/호유요우무.png', tag: '~호유요우무', category: ['동방', '호유링기링'] },
  { src: './image/오리지널/호유스타.png', tag: '~호유스타', category: ['동방', '호유링기링'] },
  { src: './image/오리지널/호유써니.png', tag: '~호유써니', category: ['동방', '호유링기링'] },
  { src: './image/오리지널/호유루나.png', tag: '~호유루나', category: ['동방', '호유링기링'] },
  { src: './image/오리지널/호유빟어.png', tag: '~호유빟어', category: ['동방', '호유링기링'] },
  { src: './image/오리지널/호유마미조.png', tag: '~호유마미조', category: ['동방', '호유링기링'] },
  { src: './image/오리지널/호유미코.png', tag: '~호유미코', category: ['동방', '호유링기링'] },
  { src: './image/오리지널/호유오쿠.png', tag: '~호유오쿠', category: ['동방', '호유링기링'] },
  { src: './image/오리지널/호유와타리.png', tag: '~호유와타리', category: '호유링기링' },
  { src: './image/오리지널/호유와타리2.png', tag: '~호유와타리2', category: '호유링기링' },
  { src: './image/오리지널/호유보이.png', tag: '~호유보이', category: ['란호유', '호유링기링'] },
  { src: './image/오리지널/호유보이2.png', tag: '~호유보이2', category: ['란호유', '호유링기링'] },
  { src: './image/오리지널/호유바니.png', tag: '~호유바니', category: ['란호유', '호유링기링'] },
  { src: './image/오리지널/호유메이드.png', tag: '~호유메이드', category: ['란호유', '호유링기링'] },
  { src: './image/오리지널/호유도로시.png', tag: '~호유도로시', category: ['란호유', '호유링기링'] },
  { src: './image/오리지널/호유젖소.png', tag: '~호유젖소', category: ['란호유', '호유링기링'] },
  { src: './image/오리지널/호유체리.png', tag: '~호유체리', category: ['란호유', '호유링기링'] },
  { src: './image/오리지널/호유한복.png', tag: '~호유한복', category: ['란호유', '호유링기링'] },
  { src: './image/오리지널/호유매드니스.png', tag: '~호유매드니스', category: ['란호유', '호유링기링'] },
  { src: './image/오리지널/호유스파게티.png', tag: '~호유스파게티', category: ['란호유', '호유링기링'] },
  { src: './image/오리지널/호피키.png', tag: '~호피키', category: '란호유' },
  { src: './image/오리지널/호피키.gif', tag: '~호피키으앙', category: '란호유' },
  { src: './image/오리지널/호유노.png', tag: '~호유노', category: ['란호유', '호유링기링'] },
  { src: './image/오리지널/호유미쿠.png', tag: '~호유미쿠', category: ['호유링기링'] },
  { src: './image/오리지널/호유미쿠2.png', tag: '~호유미쿠2', category: ['호유링기링'] },
  { src: './image/오리지널/호유독미쿠.png', tag: '~호유독미쿠', category: ['호유링기링'] },
  { src: './image/오리지널/호유린.png', tag: '~호유린', category: ['호유링기링'] },
  { src: './image/오리지널/호유테토.png', tag: '~호유테토', category: ['호유링기링'] },
  { src: './image/오리지널/호유트랜.png', tag: '~호유트랜', category: ['호유링기링'] },
  { src: './image/오리지널/호유리바이.png', tag: '~호유리바이', category: ['호유링기링'] },
  { src: './image/오리지널/호유애쉬.png', tag: '~호유애쉬', category: ['호유링기링'] },
  { src: './image/오리지널/호유다인.png', tag: '~호유다인', category: ['호유링기링', '디맥'] },
  { src: './image/오리지널/호유레나.png', tag: '~호유레나', category: ['호유링기링', '디맥'] },
  { src: './image/오리지널/호유랑이.png', tag: '~호유랑아', category: ['호유링기링'] },
  { src: './image/오리지널/호유유와씨.png', tag: '~호유유와씨', category: ['호유링기링'] },
  { src: './image/오리지널/호유도로시2.png', tag: '~호유도로시2', category: ['호유링기링'] },
  { src: './image/오리지널/호유증여.png', tag: '~호유증여', category: ['호유링기링'] },
  { src: './image/오리지널/호유질.png', tag: '~호유질', category: ['호유링기링'] },
  { src: './image/오리지널/모자걸총.png', tag: '~모자걸총', category: ['호유링기링', '게임기타'] },
  { src: './image/오리지널/호유스마일.png', tag: '~호유스마일', category: ['호유링기링', '게임기타'] },
  { src: './image/오리지널/호유에마.png', tag: '~호유에마', category: ['호유링기링', '게임기타'] },
  { src: './image/오리지널/호유키라.png', tag: '~호유키라', category: ['호유링기링', '게임기타'] },
  { src: './image/오리지널/d1.png', tag: '~아운조용히', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/d2.png', tag: '~오린따봉', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/d3.png', tag: '~텐시엉엉', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/d4.png', tag: '~레이무부적', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/d5.png', tag: '~ㅈㅉㅇㅇ', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/d6.png', tag: '~다봤구나', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/d7.png', tag: '~뀨', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/d8.png', tag: '~구야꺼', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/d9.png', tag: '~그런건가', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/d10.png', tag: '~코이시으흐흐', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/d11.png', tag: '~사토리으흐흐', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/d12.png', tag: '~캬', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/d13.png', tag: '~짜잔', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/d14.png', tag: '~잘자', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/d15.png', tag: '~치르노으앙', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/d16.png', tag: '~사나에부거', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/d17.png', tag: '~으헤', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/d18.png', tag: '~오쿠의문', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/d19.png', tag: '~모코우갈', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/d20.png', tag: '~유유코줘', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/d21.png', tag: '~클피펀치', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/d22.png', tag: '~마리사몰루', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/d23.png', tag: '~음모론아니야', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/d24.png', tag: '~눈을떴구나', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/d25.png', tag: '~나즈린고마워요', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/d26.png', tag: '~난잘못없어', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/d27.png', tag: '~히지리사랑해요', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/d28.png', tag: '~에베베', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/d29.png', tag: '~시온거지', category: ['호유링기링', '동방'] },
  { src: './image/오리지널/호유댄스.webp', tag: '~호유댄스', category: '란호유' },
  { src: './image/오리지널/호유댄스2.webp', tag: '~호유댄스2', category: '란호유' },
  { src: './image/오리지널/호유댄스3.webp', tag: '~호유댄스3', category: '란호유' },
  { src: './image/오리지널/호유댄스4.webp', tag: '~호유댄스4', category: '란호유' },
  { src: './image/오리지널/호바유보.gif', tag: '~호바유보', category: '호유티콘' },
  { src: './image/오리지널/호바유보2.gif', tag: '~호바유보2', category: '호유티콘' },
  { src: './image/오리지널/호바유보3.webp', tag: '~호바유보3', category: '호유티콘' },
  { src: './image/오리지널/호유엣헴.gif', tag: '~호유엣헴', category: '호유티콘' },
  { src: './image/오리지널/호유엣헴2.png', tag: '~호유엣헴2', category: '호유티콘' },
  { src: './image/오리지널/호유파이어.webp', tag: '~호유파이어', category: '호유티콘' },
  { src: './image/오리지널/호유키서.gif', tag: '~호유키서', category: '호유티콘' },
  { src: './image/오리지널/호유경악.gif', tag: '~호유경악', category: '호유티콘' },
  { src: './image/오리지널/호유아악.gif', tag: '~호유아악', category: '호유티콘' },
  { src: './image/오리지널/블렌더고수.png', tag: '~블렌더고수', category: ['호유티콘', '블렌더'] },
  { src: './image/오리지널/지브러시고수.png', tag: '~지브러시고수', category: ['호유티콘', '블렌더'] },
  { src: './image/오리지널/뜌땨땨.png', tag: '~뜌땨땨', category: ['란호유', '호유티콘'] },
  { src: './image/오리지널/호유쭈욱.gif', tag: '~호유쭈욱', category: '호유티콘' },
  { src: './image/오리지널/호유쭈욱2.gif', tag: '~호유쭈욱2', category: '호유티콘' },
  { src: './image/오리지널/호유쭈욱3.gif', tag: '~호유쭈욱3', category: '호유티콘' },
  { src: './image/오리지널/호유쭈욱4.gif', tag: '~호유쭈욱4', category: '호유티콘' },
  { src: './image/오리지널/호유쭈욱5.gif', tag: '~호유쭈욱5', category: '호유티콘' },
  { src: './image/오리지널/호유쭈욱6.gif', tag: '~호유쭈욱6', category: '호유티콘' },
  { src: './image/오리지널/스파게티.png', tag: '~스파게티', category: '란호유기타' },

  // 추가 이미지 데이터...
  ];

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
      badge.innerText = 'New';
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

// [새로 추가] 도움말 버튼 클릭 이벤트 처리
const helpButton = document.getElementById('helpButton');
const helpBox = document.getElementById('helpBox');

const helpMessage = `
  <strong>📣 채팅콘 사용법</strong><br>
  사용할 채팅콘을 클릭하면 명령어가 복사됩니다.<br>
  명령어를 채팅창에 붙여넣기를 하시면 콘이 출력됩니다.<br>
  <strong>✨ 효과 추가</strong><br>
  명령어 뒤에 <b>커져라!</b>, <b>빙글빙글!</b>, <b>으랏~챠!</b>를 입력해보세요!<br>
  ex)란호유 으랏~챠!
`;

helpButton.addEventListener('click', () => {
  // 박스 내용 채우기 (HTML 허용)
  helpBox.innerHTML = helpMessage; 
  
  // display 속성 토글 (보이거나 숨기기)
  if (helpBox.style.display === 'block') {
    helpBox.style.display = 'none';
  } else {
    helpBox.style.display = 'block';
  }
});

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

