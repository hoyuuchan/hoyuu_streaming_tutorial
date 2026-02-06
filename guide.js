document.addEventListener('DOMContentLoaded', () => {
    // 사이드바 토글 로직
    const toggleBtn = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar-area');

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            toggleBtn.classList.toggle('active'); // 버튼에도 active 클래스 토글

            // 버튼 텍스트 변경 or 스타일 변경 (옵션)
            if (sidebar.classList.contains('active')) {
                toggleBtn.innerText = '≫';
            } else {
                toggleBtn.innerText = '≪';
            }
        });
    }

    // 명령어 데이터 정의 (그룹화됨)
    // HTML에서 명령어 데이터 파싱
    // HTML에서 명령어 데이터 파싱
    function parseCommandDataFromHTML() {
        const sourceContainer = document.getElementById('command-data-source');
        if (!sourceContainer) return [];

        // [NEW] 아이템 파싱 헬퍼 함수
        const parseItem = (itemEl) => {
            const name = itemEl.dataset.name;
            const infoEl = itemEl.querySelector('.info');
            const imageEl = itemEl.querySelector('.image');
            const guideExEl = itemEl.querySelector('.guide-ex');
            const infoPreviewEl = itemEl.querySelector('.info-preview');

            // [NEW] 링크 및 비활성 아이템 체크
            const isLink = itemEl.classList.contains('item-link');
            const isNoAction = itemEl.classList.contains('item-no');
            const isNew = itemEl.classList.contains('item-new');

            let linkUrl = '';
            if (isLink) {
                const linkEl = itemEl.querySelector('a');
                if (linkEl) {
                    linkUrl = linkEl.getAttribute('href');
                }
            }

            return {
                type: 'item', // 식별자
                isLink: isLink,
                isNoAction: isNoAction,
                isNew: isNew,
                linkUrl: linkUrl,
                name: name,
                cleanName: name ? name.replace(/<[^>]*>?/gm, '') : '', // [NEW] 태그 제거한 이름 (URL용)
                // innerHTML을 사용하여 HTML 태그(예: coin-icon)와 줄바꿈을 모두 유지
                info: infoEl ? infoEl.innerHTML.trim() : '',
                image: imageEl ? imageEl.textContent.trim() : '',
                guide_ex: guideExEl ? guideExEl.innerHTML.trim() : '',
                guide_ddu: itemEl.querySelector('.guide-ddu') ? itemEl.querySelector('.guide-ddu').innerHTML.trim() : '', // [NEW] 뚜봇 전용 템플릿 파싱
                guide_ch: itemEl.querySelector('.guide-ch') ? itemEl.querySelector('.guide-ch').innerHTML.trim() : '',
                info_preview: infoPreviewEl ? infoPreviewEl.innerHTML.trim() : '',
                tip: itemEl.querySelector('.tip') ? itemEl.querySelector('.tip').innerHTML.trim() : '',
                coin: itemEl.dataset.coin || ''
            };
        };

        const groups = [];
        const groupElements = sourceContainer.querySelectorAll('.group');

        groupElements.forEach(groupEl => {
            const category = groupEl.dataset.category;
            const children = []; // items -> children으로 개념 변경 (계층 구조 지원)

            // 직계 자식만 순회
            Array.from(groupEl.children).forEach(child => {
                if (child.classList.contains('item')) {
                    children.push(parseItem(child));
                } else if (child.classList.contains('sub-group')) {
                    const subCategory = child.dataset.category;
                    const subItems = [];
                    // 서브 그룹 내 아이템 파싱
                    child.querySelectorAll('.item').forEach(subItemEl => {
                        subItems.push(parseItem(subItemEl));
                    });

                    children.push({
                        type: 'sub-group',
                        category: subCategory,
                        items: subItems
                    });
                }
            });

            groups.push({
                category: category,
                children: children // items -> children
            });
        });

        return groups;
    }

    const commandGroups = parseCommandDataFromHTML();

    const gridContainer = document.getElementById('command-grid');

    // 스크롤 등장 효과를 위한 Intersection Observer 설정 (필요 없다면 제거 가능)
    const observerOptions = {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
    };

    const boxObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const box = entry.target;
                box.classList.add('visible');
                observer.unobserve(box);
            }
        });
    }, observerOptions);

    // 사이드바 목록 생성 함수
    function renderSidebar() {
        gridContainer.innerHTML = ''; // 초기화

        // [NEW] 렌더링 헬퍼 함수
        const renderSidebarItem = (cmd, container, isSub = false) => {
            const box = document.createElement('div');
            box.classList.add('command-box');
            if (isSub) {
                box.classList.add('sub-item-box'); // CSS용 클래스
            }
            box.dataset.name = cmd.name; // 매칭을 위해 원본 이름 저장

            // 간단하게 이름만 표시
            box.innerHTML = `
                <div class="command-box-content">
                    <div class="command-name">${cmd.name}</div>
                </div>
            `;

            // 클릭 이벤트 (인라인 콘텐츠 변경)
            box.addEventListener('click', () => {
                // [NEW] 링크 아이템 처리
                if (cmd.isLink && cmd.linkUrl) {
                    window.open(cmd.linkUrl, '_blank');
                    return;
                }

                // [NEW] 비활성 아이템 처리
                if (cmd.isNoAction) {
                    return; // 아무 동작 안함
                }

                // [NEW] 이미 활성화된 항목이면 중단 (중복 로드 및 히스토리 방지)
                if (box.classList.contains('active-item')) return;

                showCommandDetail(cmd);

                // 활성 상태 표시
                document.querySelectorAll('.command-box').forEach(b => b.classList.remove('active-item'));
                box.classList.add('active-item');
            });

            // [NEW] 클래스 추가 (스타일링용)
            if (cmd.isLink) box.classList.add('item-link');
            if (cmd.isNoAction) box.classList.add('item-no');
            if (cmd.isNew) box.classList.add('item-new');

            container.appendChild(box);
            // 관찰 시작 
            boxObserver.observe(box);
        };

        commandGroups.forEach(group => {
            // 대분류 헤더 생성
            const header = document.createElement('h4');
            header.className = 'sidebar-category-header';
            header.innerText = group.category;
            gridContainer.appendChild(header);

            // [MODIFIED] 계층 구조 렌더링
            group.children.forEach(child => {
                if (child.type === 'sub-group') {
                    // [NEW] 서브 그룹 헤더 제거 (요청사항: 카테고리 이름 X)
                    // 아이템만 렌더링 (들여쓰기 적용)
                    child.items.forEach(cmd => {
                        renderSidebarItem(cmd, gridContainer, true);
                    });
                } else {
                    // 일반 아이템
                    renderSidebarItem(child, gridContainer, false);
                }
            });
        });

        // Intro 텍스트들도 관찰
        const textElements = document.querySelectorAll('.guide-intro h1, .guide-intro p');
        textElements.forEach(el => boxObserver.observe(el));
    }

    // 인트로 그리드 (첫 화면) 생성 함수
    function renderIntroGrid() {
        const introGrid = document.querySelector('.intro-grid');
        // 기존 인트로 텍스트 유지하고 그 뒤에 추가하거나, 혹은 아예 대체할지? 
        // 사용자 요청: "설명서 첫 페이지에... 해당 내용들을 한줄에 두칸씩 보이게"
        // 기존 .guide-intro는 유지하면서 그 아래에 그리드를 추가하는 것이 자연스러움.

        // 기존 그리드 컨테이너가 없다면 생성
        let gridList = splitIntroGrid(introGrid);

        commandGroups.forEach(group => {
            // 카테고리별로 표시할지, 그냥 쭉 나열할지? -> "해당 내용들을" 이라고 했으니 쭉 나열 or 카테고리 포함
            // 디자인 예시를 보면 그냥 카드 형태임. 카테고리 헤더도 넣어주면 좋을듯.

            // 카테고리 헤더
            const header = document.createElement('h3');
            header.className = 'intro-category-header';
            header.innerText = group.category;
            header.style.width = "100%"; // 꽉 차게
            header.style.marginTop = "30px";
            header.style.marginBottom = "10px";
            header.style.color = "#555";
            gridList.appendChild(header);

            header.style.color = "#555";
            gridList.appendChild(header);

            // [MODIFIED] 계층 구조에 따른 레이아웃 처리
            group.children.forEach(child => {
                if (child.type === 'sub-group') {
                    // [NEW] 서브 그룹 컨테이너 (Full Width)
                    const subContainer = document.createElement('div');
                    subContainer.className = 'intro-sub-group-container';
                    // CSS에서 grid 제어할 예정이지만 인라인 스타일로 구조 잡기
                    subContainer.style.width = '100%'; // 전체 너비 사용
                    subContainer.style.display = 'flex';
                    subContainer.style.flexWrap = 'wrap';
                    // subContainer.style.gridTemplateColumns = 'repeat(4, 1fr)'; // 내부도 2열 (또는 모바일 1열)
                    subContainer.style.gap = '20px';
                    subContainer.style.marginTop = '10px';
                    subContainer.style.marginBottom = '20px';

                    child.items.forEach(cmd => {
                        const card = document.createElement('div');
                        // [NEW] 서브 아이템 클래스
                        card.className = 'intro-card sub-item';
                        if (cmd.isNew) card.classList.add('item-new');

                        // [NEW] 미리보기 없음, 제목만 표시
                        card.innerHTML = `
                             <div class="intro-card-title">${cmd.name}</div>
                        `;

                        // 클릭 이벤트
                        card.addEventListener('click', () => {
                            showCommandDetail(cmd);
                            document.querySelectorAll('.command-box').forEach(box => {
                                if (box.dataset.name === cmd.name) {
                                    document.querySelectorAll('.command-box').forEach(b => b.classList.remove('active-item'));
                                    box.classList.add('active-item');
                                    box.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                }
                            });
                        });

                        subContainer.appendChild(card);
                        // [NEW] 리사이즈 관찰 시작
                        cardResizeObserver.observe(card);
                    });

                    gridList.appendChild(subContainer);

                } else {
                    // 일반 아이템
                    const cmd = child;
                    const card = document.createElement('div');
                    card.className = 'intro-card';
                    if (cmd.isNew) card.classList.add('item-new');

                    // 간단한 정보 표시
                    let descText = cmd.info_preview || (cmd.info ? cmd.info.split('\n')[0] : '');

                    card.innerHTML = `
                        <div class="intro-card-title">${cmd.name}</div>
                        <div class="intro-card-desc">${descText}</div>
                    `;

                    card.addEventListener('click', () => {
                        // [NEW] 링크 아이템 처리
                        if (cmd.isLink && cmd.linkUrl) {
                            window.open(cmd.linkUrl, '_blank');
                            return;
                        }

                        // [NEW] 비활성 아이템 처리
                        if (cmd.isNoAction) {
                            return; // 아무 동작 안함
                        }

                        showCommandDetail(cmd);
                        document.querySelectorAll('.command-box').forEach(box => {
                            // 일반 아이템의 경우 dataset.name으로 매칭
                            if (box.dataset.name === cmd.name) {
                                document.querySelectorAll('.command-box').forEach(b => b.classList.remove('active-item'));
                                box.classList.add('active-item');
                                box.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }
                        });
                    });

                    // [NEW] 클래스 추가 (스타일링용)
                    if (cmd.isLink) card.classList.add('item-link');
                    if (cmd.isNoAction) card.classList.add('item-no');

                    gridList.appendChild(card);

                    // [NEW] 리사이즈 관찰 시작
                    cardResizeObserver.observe(card);
                }
            });
        });
    }

    function splitIntroGrid(introGrid) {
        // 기존 .guide-intro 뒤에 새로운 그리드 컨테이너 생성
        let list = document.getElementById('intro-command-list');
        if (!list) {
            list = document.createElement('div');
            list.id = 'intro-command-list';
            list.className = 'intro-command-list';
            introGrid.appendChild(list);
        }
        list.innerHTML = '';
        return list;
    }

    // [NEW] 카드 너비 감지 및 스타일 변경 (ResizeObserver)
    const cardResizeObserver = new ResizeObserver(entries => {
        entries.forEach(entry => {
            const card = entry.target;
            const parent = card.parentElement;
            if (!parent) return;

            // 부모 너비의 90% 이상이면 한 줄을 다 차지하는 것으로 간주
            const isWide = entry.contentRect.width > (parent.clientWidth * 0.9);

            if (isWide) {
                card.classList.add('wide-layout');
            } else {
                card.classList.remove('wide-layout');
            }
        });
    });

    /* -------------------------------------------------------------------------- */
    /* [Inline Content Render Logic] */
    /* -------------------------------------------------------------------------- */
    const contentArea = document.querySelector('.content-area');
    const introGrid = document.querySelector('.intro-grid');
    const docContent = document.querySelector('.doc-content');

    // [NEW] URL 해시 기반 네비게이션 처리 함수
    function handleLocation() {
        const hash = window.location.hash.substring(1); // # 제거

        if (hash) {
            // 해시가 있으면 해당 명령어 상세 페이지 표시
            // commandGroups에서 해당 명령어 찾기
            let foundCmd = null;
            // decodeURIComponent로 한글 해시 처리
            const decodedHash = decodeURIComponent(hash);

            for (const group of commandGroups) {
                // [MODIFIED] cleanName으로 검색 (계층 구조 지원)
                for (const child of group.children) {
                    if (child.type === 'sub-group') {
                        const item = child.items.find(i => i.cleanName === decodedHash);
                        if (item) {
                            foundCmd = item;
                            break;
                        }
                    } else {
                        if (child.cleanName === decodedHash) {
                            foundCmd = child;
                            break;
                        }
                    }
                }
                if (foundCmd) break;
            }

            if (foundCmd) {
                // history.pushState 없이 렌더링만 수행 (popstate 루프 방지)
                showCommandDetail(foundCmd, false);
            } else {
                // 명령어를 찾지 못했으면 목록으로
                showIntro();
            }
        } else {
            // 해시가 없으면 목록 표시
            showIntro();
        }
    }

    // [NEW] 목록 보기 함수 (back 버튼 등에서 호출)
    function showIntro() {
        // 인트로 보이기, 상세 내용 숨기기
        if (introGrid) introGrid.style.display = 'flex';
        if (docContent) docContent.style.display = 'none';

        // 사이드바 활성 상태 해제
        document.querySelectorAll('.command-box').forEach(b => b.classList.remove('active-item'));

        // [NEW] 사이드바 스크롤 맨 위로 이동
        const sidebar = document.querySelector('.sidebar-area');
        if (sidebar) sidebar.scrollTop = 0;

        // 상태 초기화
        clearAllManagedTimers();
        clearInfiniteWalk();
        isCharacterMainAction = false;

        if (typeof gigantamaxTimer !== 'undefined' && gigantamaxTimer) {
            clearTimeout(gigantamaxTimer);
            gigantamaxTimer = null;
        }
        if (typeof gigantamaxStacks !== 'undefined') {
            gigantamaxStacks = 0;
        }
        if (typeof isActionCooldown !== 'undefined') {
            isActionCooldown = false;
        }
    }

    // [NEW] popstate 이벤트 리스너
    window.addEventListener('popstate', handleLocation);

    // [NEW] 초기 로드 시 해시 체크
    // DOMContentLoaded 끝부분에서 호출하거나 여기서 바로 호출 (commandGroups 준비 후)
    // 아래쪽에서 호출하기 위해 여기선 함수 정의만 함.

    function showCommandDetail(cmd, pushState = true) {
        // 이전 페이지/명령어의 애니메이션 상태 초기화
        clearAllManagedTimers();
        clearInfiniteWalk();
        isCharacterMainAction = false; // 강제 초기화

        // [NEW] 거다이맥스 상태 초기화 (이스터에그 활성 시 유지)
        if (!isGigantamaxEasterEggActive) {
            if (typeof gigantamaxTimer !== 'undefined' && gigantamaxTimer) {
                clearTimeout(gigantamaxTimer);
                gigantamaxTimer = null;
            }
            if (typeof gigantamaxStacks !== 'undefined') {
                gigantamaxStacks = 0;
            }
        }

        // [NEW] 쿨타임 초기화
        if (typeof isActionCooldown !== 'undefined') {
            isActionCooldown = false;
        }

        // [NEW] History State 추가
        if (pushState) {
            // [MODIFIED] cleanName 사용 (URL 깔끔하게)
            history.pushState({ name: cmd.cleanName }, '', `#${cmd.cleanName}`);
        }

        // [NEW] 마미조 이스터에그 모드 체크 (클래스 토글)
        if (docContent) {
            if (isMamijoEasterEggActive && cmd.cleanName === '사실그거마미조임!') {
                docContent.classList.add('mamijo-mode');
                // [NEW] 재방문 시 애니메이션 생략 체크
                if (hasMamijoAnimationPlayed) {
                    docContent.classList.add('no-animation');
                }
            } else {
                docContent.classList.remove('mamijo-mode');
                docContent.classList.remove('no-animation');
            }
        }

        // 인트로 숨기고 문서 콘텐츠 영역 보이기
        if (introGrid) introGrid.style.display = 'none';
        if (docContent) docContent.style.display = 'block';

        // [NEW] 사이드바 활성 상태 동기화
        const sidebarBoxes = document.querySelectorAll('.command-box');
        sidebarBoxes.forEach(box => {
            box.classList.remove('active-item');
            if (box.dataset.name === cmd.name) {
                box.classList.add('active-item');
                // 필요한 경우 스크롤 이동 (초기 로드 시 유용)
                // box.scrollIntoView({ behavior: 'smooth', block: 'center' });
                // 단, 클릭으로 진입 시에는 클릭한 위치가 유지되는게 좋으므로
                // 초기 로드(pushState가 false인 경우? 아니면 항상?) 상황에 따라 다를 수 있음.
                // 여기서는 항상 active를 맞춰주되, 스크롤은 너무 튀지 않게 조정하거나 생략 가능.
                // 사용자 요청에 "새로고침을 하면 active 요소가 적용되지 않는 문제" 해결이 우선이므로 클래스 추가는 필수.
                // 스크롤은 일단 보류하거나 필요시 주석 해제. (새로고침 시 해당 위치로 스크롤되면 좋음)
                // 만약 클릭해서 들어온 경우라면 이미 화면에 있을 가능성이 높음.
                box.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });

        // 텍스트 처리
        let infoText = cmd.info || '설명이 없습니다.';
        infoText = infoText.replace(/\n/g, '<br>');

        let exText = '';
        if (cmd.guide_ex || cmd.name === '채팅콘 사용법') {
            let guideText = cmd.guide_ex || '~채팅콘이름'; // 기본 텍스트
            guideText = guideText; // 포맷팅 기호 제거됨

            // 입력창 스타일 (Option 2) 적용
            // 텍스트는 .doc-example-text, 복사 버튼은 .doc-copy-btn
            // 채팅콘 사용법은 클릭 시 랜덤 로직을 위해 onclick 제거 (simulateChat에서 처리)
            let btnAttr = 'onclick="copyText(this)"';
            if (cmd.name === '채팅콘 사용법') {
                btnAttr = '';
            }

            exText = `
                <div class="doc-example-container">
                    <div class="doc-example-text">${guideText}</div>
                    <button class="doc-copy-btn" ${btnAttr}>채팅</button>
                </div>
            `;
        }

        // [NEW] 뚜봇(Ddubot) 템플릿 처리
        if (cmd.guide_ddu) {
            // [MODIFIED] 입력 텍스트 추출 로직
            let dduInputText = ''; // 기본값
            let dduContentHtml = cmd.guide_ddu;

            // 임시 DOM 생성하여 파싱
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = cmd.guide_ddu;
            // 첫 번째 span을 입력 텍스트로 간주 (혹은 특정 클래스 지정이 낫지만 예시 코드상 그냥 span)
            const inputSpan = tempDiv.querySelector('span');

            if (inputSpan) {
                dduInputText = inputSpan.innerText; // span 안의 텍스트를 입력창 내용으로 사용
                inputSpan.remove(); // 메시지 내용에서는 제거
                dduContentHtml = tempDiv.innerHTML; // span 제거된 나머지 HTML
            }

            // exText 생성 (추출한 텍스트 적용)
            // 스타일 color:#aaa 제거 (입력된 텍스트는 검정색이 자연스러움, 기본값일때만 회색)
            const textStyle = dduInputText === '(직접 입력 가능)' ? 'style="color:#aaa;"' : '';

            exText = `
                <div class="doc-example-container">
                    <div class="doc-example-text" ${textStyle}>${dduInputText}</div>
                    <button class="doc-dummy-btn" style="cursor: pointer;">채팅</button>
                </div>
            `;

            // 파싱된 나머지 콘텐츠를 cmd 객체에 잠시 저장하여 아래에서 사용
            cmd.cleaned_ddu = dduContentHtml;
        }


        // 이미지 처리
        let imageHtml = '';
        if (cmd.image) {
            // 애니메이션 클래스 결정
            let imgClass = '';
            if (cmd.name === "두근두근!") imgClass = 'heartbeat';
            else if (cmd.name === "커져라!") imgClass = 'big';
            else if (cmd.name === "빙글빙글!") imgClass = 'bingle';
            else if (cmd.name === "네르지마세요!") imgClass = 'squash';

            // 마미조 효과는 컨테이너에 적용해야 하지만 여기선 단순화
            let containerClass = '';
            if (cmd.name.includes("사실그거마미조임!")) containerClass = 'effect-mamijo'; // typo fix origin

            // [NEW] 커져라! 이스터에그 크기 적용 (기본 200px + 스택 * 10px)
            let inlineStyle = '';
            if (cmd.name === "커져라!") {
                const currentSize = growEasterEggBaseSize + (growEasterEggCount * growEasterEggIncrement);
                inlineStyle = `style = "width: ${currentSize}px; height: ${currentSize}px; max-width: none;"`;
            }

            // [NEW] 으랏~챠! 이스터에그 : 상세 페이지 진입 시에도 애니메이션 적용 & 이미지 2개
            if (cmd.name === '으랏~챠!') {
                imageHtml = `
                    <div class="doc-image-container modify_type jjibu animate__animated animate__bounce">
                         <img class="dccon notani" src="./image/guide/으랏챠.gif" style="width: 100px; height: 100px; max-width: none;">
                         <img src="${cmd.image}" style="width: 100px; height: 100px; max-width: none;">
                    </div>
                `;
            } else {
                imageHtml = `
                    <div class="doc-image-container ${containerClass}">
                        <img src="${cmd.image}" class="${imgClass}" alt="${cmd.name}" ${inlineStyle}>
                    </div>
                `;
            }
        }

        // 코인 정보 (있을 경우만)
        let coinHtml = '';
        if (cmd.coin) {
            coinHtml = `<div class="coin-pay"><span class='coin-icon'></span> ${cmd.coin}개</div>`;
        }

        // tip 정보
        let tipHtml = '';
        if (cmd.tip) {
            tipHtml = `<div class="tip">${cmd.tip}</div>`;
        }



        // HTML 주입
        if (cmd.guide_ch) {
            // 캐릭터 스테이지 레이아웃 (guide-ch)
            let guideText = cmd.guide_ch;
            // 입력창 스타일 적용
            const displayText = guideText.replace(/^~/, '');

            // [MODIFIED] 기본 캐릭터('채팅')일 경우 버튼 비활성화 (클릭 이벤트 제거)
            // cmd.name에 태그가 포함될 수 있으므로 cleanName으로 비교
            let btnAttr = `onclick = "simulateCharacterAction('${guideText.replace(/'/g, "\\'").replace(/"/g, ' & quot; ')}', this)"`;
            let btnClass = "doc-copy-btn";

            if (cmd.cleanName === '기본 캐릭터') {
                btnAttr = ''; // 클릭 이벤트 없음
                // 커서는 pointer 유지 (요청사항: hover 효과 동일)
                // 만약 default 커서를 원하면 style 추가 필요하지만, "클릭 자체가 되지 않게"라고 했으므로 이벤트만 제거가 안전
                // 명시적으로 style="cursor: default;"를 추가할 수도 있음. 
                // "hover 효과는 동일하지만" -> hover시 색상 변경 등은 유지. cursor는 보통 버튼이면 pointer임.
                // 클릭이 안된다는 걸 보여주기 위해 cursor: default가 나을 수 있음.
                btnAttr = 'style="cursor: default;"';
            }

            // [NEW] isNew 속성에 따라 클래스 추가
            // const containerClass = cmd.isNew ? 'doc-example-container item-new' : 'doc-example-container';
            // reverted based on user feedback (apply to intro-card only)
            const containerClass = 'doc-example-container';

            const exInputHtml = `
                <div class="${containerClass}">
                    <div class="doc-example-text">${displayText}</div>
                    <button class="${btnClass}" ${btnAttr}>채팅</button>
                </div>
            `;

            docContent.innerHTML = `
                <div class="doc-layout-split">
                    <!-- Left Column: 설명 영역 -->
                    <div class="doc-main-col">
                        <button id="back-to-main-btn" class="back-btn">❮ 목록으로</button>
                        <h1 class="doc-title">${cmd.name}${coinHtml}</h1>
                        <div class="doc-header-line"></div>
                        <div class="doc-center-wrapper">
                            ${imageHtml}
                            <div class="doc-description">${infoText}</div>
                        </div>
                        ${cmd.tip ? `<div class="doc-tip">
                            <div class="doc-tip-icon">💡</div>${tipHtml}
                        </div>` : ''}

                    </div>
                    <!-- Right Column: 캐릭터 스테이지 -->
                    <div class="doc-chat-col">
                        <div class="character-stage" id="character-stage-area" style="${cmd.name.includes('투척!') ? 'flex-direction: row-reverse;' : ''}">
                             <img src="./image/guide/piyo_stand.png" class="character-stande" alt="Character" style="${cmd.name.includes('멈춰!') ? 'opacity:0;' : ''} ${cmd.name.includes('투척!') ? 'left: 0%; transform: translateX(0);' : ''}">
                        </div>
                        <div class="chat-input-area">
                            ${exInputHtml}
                        </div>
                    </div>
                </div>
            `;

            // 멈춰! 명령의 경우
            if (cmd.name.includes('멈춰!')) {
                // [NEW] 멈춰! 이스터에그 상태면 버튼 비활성화 + 걷기 시작
                if (isStopEasterEggActive) {
                    btnAttr = 'disabled style="opacity: 0.5; cursor: not-allowed; cursor: default;"';

                    // 오버플로우 허용 (화면 밖 이동)
                    setTimeout(() => {
                        const stageArea = document.querySelector('#character-stage-area');
                        if (stageArea) stageArea.classList.add('allow-overflow');

                        startInfiniteWalk(true, true); // [MODIFIED] 전체 화면 모드 활성화
                        showChatBubbleFromCharacter('알앗서용, 움직일게용', true); // 영구 표시
                        startFollowingBubble(); // 말풍선 따라가기 재개
                    }, 100);
                } else {
                    // 일반 상태: 즉시 걷기 시작 (멈출 준비)
                    setTimeout(startInfiniteWalk, 100);
                }
            }
            // [NEW] 기본 캐릭터: 영구 말풍선 표시
            else if (cmd.cleanName === '기본 캐릭터') {
                // 레이아웃 렌더링 직후 실행
                setTimeout(() => {
                    showChatBubbleFromCharacter('방송에는 이렇게 나와용', true);
                }, 100);
                clearInfiniteWalk();
            }
            // 그 외 명령은 걷기 타이머 정리
            else {
                clearInfiniteWalk();
            }

            // 뒤로가기 버튼 이벤트는 아래 공통 로직에서 처리됨

        } else if (cmd.guide_ex || cmd.name === '채팅콘 사용법') {
            // 레이아웃 분기: 2단 레이아웃 (7:3)
            docContent.innerHTML = `
                <div class="doc-layout-split">
                    <!-- Left Column: 설명 영역 -->
                    <div class="doc-main-col">
                        <button id="back-to-main-btn" class="back-btn">❮ 목록으로</button>
                        <h1 class="doc-title">${cmd.name}${coinHtml}</h1>
                        <div class="doc-header-line"></div>
                        <div class="doc-center-wrapper">
                            ${imageHtml}
                            <div class="doc-description">${infoText}</div>
                        </div>
                        ${cmd.tip ? `<div class="doc-tip">
                            <div class="doc-tip-icon">💡</div>${tipHtml}
                        </div>` : ''}

                    </div>
                    <!-- Right Column: 채팅 시뮬레이터 & 입력창 -->
                    <div class="doc-chat-col">
                        <div class="chat-simulator">
                             <div class="chat-header">채팅</div>
                             <div class="chat-messages" id="chat-simulator-area">
                                <div class="chat-msg system">채팅방에 오신 것을 환영합니다!</div>
                                <div class="chat-notice-box">
                                    <div class="notice-icon">📢</div>
                                    <div class="notice-text">
                                        쾌적한 시청 환경을 위해 일부 메시지는 필터링 됩니다. 클린 라이브 채팅 문화 만들기에 동참해 주세요.
                                    </div>
                                </div>
                             </div>
                        </div>
                        <div class="chat-input-area">
                            ${exText}
                        </div>
                    </div>
                </div>
            `;

            // 시뮬레이션 이벤트 연결
            const copyBtn = docContent.querySelector('.doc-copy-btn');
            if (copyBtn) {
                copyBtn.addEventListener('click', () => {
                    simulateChat(cmd);
                });
            }

        } else if (cmd.guide_ddu) {
            // [NEW] 뚜봇 레이아웃 (2단)
            docContent.innerHTML = `
                <div class="doc-layout-split">
                    <!-- Left Column -->
                    <div class="doc-main-col">
                        <button id="back-to-main-btn" class="back-btn">❮ 목록으로</button>
                        <h1 class="doc-title">${cmd.name}${coinHtml}</h1>
                        <div class="doc-header-line"></div>
                        <div class="doc-center-wrapper">
                            ${imageHtml}
                            <div class="doc-description">${infoText}</div>
                        </div>
                        ${cmd.tip ? `<div class="doc-tip">
                             <div class="doc-tip-icon">💡</div>${tipHtml}
                        </div>` : ''}

                    </div>
                    <!-- Right Column -->
                    <div class="doc-chat-col">
                        <div class="chat-simulator">
                             <div class="chat-header">채팅</div>
                             <div class="chat-messages" id="chat-simulator-area">
                                <div class="chat-msg system">채팅방에 오신 것을 환영합니다!</div>
                                <div class="chat-notice-box">
                                    <div class="notice-icon">📢</div>
                                    <div class="notice-text">
                                        쾌적한 시청 환경을 위해 일부 메시지는 필터링 됩니다. 클린 라이브 채팅 문화 만들기에 동참해 주세요.
                                    </div>
                                </div>
                                <!-- 뚜봇 메시지 자동 출력 -->
                                ${(() => {
                    // [MODIFIED] 줄바꿈 기준으로 메시지 분리 (cleaned_ddu 사용)
                    // cmd.cleaned_ddu가 없으면 기존 guide_ddu 사용(방어 코드)
                    const sourceContent = cmd.cleaned_ddu || cmd.guide_ddu;

                    // HTML 파싱으로 텍스트만 추출해서 줄바꿈 처리하는 게 안전함
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = sourceContent;
                    const pureText = tempDiv.innerText; // innerText는 줄바꿈을 보존함

                    const lines = pureText.split('\n');
                    return lines.map(line => {
                        const trimmedLine = line.trim();
                        if (!trimmedLine) return ''; // 빈 줄 무시

                        return `
                        <div class="chat-msg bot" style="align-items: flex-start; gap: 8px;">
                            <div class="chat-profile-icon" style="flex-shrink: 0;"></div>
                            <div style="font-weight: bold; font-size: 0.9em; white-space: nowrap; color: #314edc;">뚜팔봇</div>
                            <div style="color: #314edc; word-break: break-all;">
                                ${trimmedLine}
                            </div>
                        </div>
                        `;
                    }).join('');
                })()}
                             </div>
                        </div>
                        <div class="chat-input-area">
                            ${exText}
                        </div>
                    </div>
                </div>
            `;

            // 입력창 활성화 (실제 입력 가능하게 하려면 추가 로직 필요하지만, 여기선 disabled 버튼만 렌더링됨)
            // [MODIFIED] 버튼 클래스 변경 (이벤트 연결 방지) 및 disabled 제거 (hover 효과 유지)
            // .doc-dummy-btn 클래스를 CSS에 추가해야 함.
            exText = `
                <div class="doc-example-container">
                    <div class="doc-example-text" style="color:#aaa;">(직접 입력 가능)</div>
                    <button class="doc-dummy-btn" style="cursor: pointer;">채팅</button>
                </div>
            `;

            // docContent에 exText를 주입하지 않았음. 위 HTML 템플릿의 ${exText}에 들어감.

        } else {
            // 기존 레이아웃 (1단)
            docContent.innerHTML = `
                <button id="back-to-main-btn" class="back-btn">❮ 목록으로</button>
                <h1 class="doc-title">${cmd.name}${coinHtml}</h1>
                <div class="doc-header-line"></div>
                ${imageHtml}
                <div class="doc-description">${infoText}</div>
                ${exText ? `${exText}` : ''}
                ${cmd.tip ? `<div class="doc-tip">${tipHtml}</div>` : ''}

            `;
        }

        // 뒤로가기 버튼 이벤트 리스너 추가
        const backBtn = document.getElementById('back-to-main-btn');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                // History API 적용
                // 목록으로 돌아갈 때는 해시를 제거하고 목록 뷰를 보여줌
                if (window.location.hash) {
                    // 뒤로가기 히스토리 스택을 위해 pushState 사용
                    history.pushState(null, '', 'guide.html'); // or just remove hash
                    showIntro();
                } else {
                    showIntro();
                }
            });
        }

        // 만약 지연 표시 텍스트가 있다면 타이머 설정
        const delayedTexts = docContent.querySelectorAll('.delayed-text');
        delayedTexts.forEach(el => {
            setManagedTimeout(() => {
                el.classList.add('visible');
            }, 60000); // 1분 (60000ms)
        });

        // [NEW] 거다이맥스 이스터에그 상태 복구 (해당 명령어일 때만)
        if (isGigantamaxEasterEggActive && cmd.name.includes('거다이맥스!')) {
            const charImg = document.querySelector('#character-stage-area .character-stande');
            const stageArea = document.querySelector('#character-stage-area');

            if (stageArea) {
                stageArea.classList.add('allow-overflow');
            }

            if (charImg) {
                const scaleValue = 10.0;
                charImg.style.transformOrigin = 'center bottom';
                charImg.classList.add('gigantamax-glow');

                let currentTransform = charImg.style.transform || '';
                if (!currentTransform.includes('translateX')) {
                    currentTransform = 'translateX(-50%) ';
                }
                // scaleX 보존
                let scaleX = 'scaleX(1)';
                if (currentTransform.includes('scaleX(-1)')) {
                    scaleX = 'scaleX(-1)';
                }

                // 애니메이션 없이 즉시 적용
                charImg.style.transition = 'none';
                charImg.style.transform = `translateX(-50%) ${scaleX} scale(${scaleValue})`;

                // [NEW] 재방문 대사 처리
                gigantamaxVisitCount++;
                const messages = [
                    "이렇게 될걸 알고 누르셧나용?",
                    "와웅",
                    "그래두 커지니까 좋네용",
                    "이때 아니면 언제 커지겠서용",
                    "거마워용",
                    "할말두 업구 이제 그만 말할게용",
                    "와아아앙",
                    "씽난다"
                ];

                let msgIndex = gigantamaxVisitCount - 1;
                if (msgIndex < 0) msgIndex = 0; // 방어 코드
                if (msgIndex >= messages.length) {
                    msgIndex = messages.length - 1; // 마지막 메시지 고정
                }

                showChatBubbleFromCharacter(messages[msgIndex], true);
            }
        }

        // [NEW] 빙글빙글! 이스터에그 재방문 시 애니메이션 실행
        if (isBingleEasterEggActive && cmd.name === "빙글빙글!") {
            triggerBarrelRoll();
        }
    }

    // 채팅 시뮬레이션 함수
    function simulateChat(cmd) {
        const chatArea = document.getElementById('chat-simulator-area');
        if (!chatArea) return;

        // [채팅콘 사용법] 랜덤 채팅콘 로직
        if (cmd.name === '채팅콘 사용법' || cmd.name === '채팅콘 명령어' || cmd.name === '또다른 채팅콘 사용법') {
            // [MODIFIED] 버퍼에서 이미지 가져오기
            const randomItem = getPreloadedImage();

            if (randomItem) {

                let finalText = randomItem.tag;
                let effectClass = '';
                let containerClass = '';
                let effectName = '';
                let inlineStyle = ''; // [NEW] 인라인 스타일 추가

                // [NEW] 또다른 채팅콘 사용법: 좌우 반전
                if (cmd.name === '또다른 채팅콘 사용법') {
                    finalText = `~~${randomItem.tag}`;
                    inlineStyle = 'transform: scaleX(-1);';
                }

                // [NEW] 채팅 명령어일 경우 랜덤 효과 추가
                if (cmd.name === '채팅콘 명령어') {
                    const effects = [
                        { name: '커져라!', class: 'big' },
                        { name: '두근두근!', class: 'heartbeat' },
                        { name: '빙글빙글!', class: 'bingle' },
                        { name: '네르지마세요!', class: 'squash' },
                        { name: '사실그거마미조임!', class: 'mamijo' } // 마미조는 별도 처리 필요할 수 있음
                    ];

                    const randomEffect = effects[Math.floor(Math.random() * effects.length)];
                    effectName = randomEffect.name;

                    // 텍스트 조합: ~태그 효과!
                    finalText = `${randomItem.tag} ${randomEffect.name}`;

                    // 클래스 설정
                    if (randomEffect.name === '사실그거마미조임!') {
                        containerClass = 'effect-mamijo';
                    } else {
                        effectClass = randomEffect.class;
                    }
                }

                // 1. 입력창 텍스트 업데이트
                const inputAreaText = document.querySelector('.doc-example-text');
                if (inputAreaText) {
                    inputAreaText.innerText = finalText;
                }

                // 2. 텍스트 복사 및 버튼 피드백
                navigator.clipboard.writeText(finalText).then(() => {
                    const copyBtn = document.querySelector('.doc-copy-btn');
                    if (copyBtn) {
                        const originalText = copyBtn.innerText;
                        copyBtn.innerText = '복사됨!';
                        copyBtn.classList.add('copied');
                        setTimeout(() => {
                            copyBtn.innerText = originalText;
                            copyBtn.classList.remove('copied');
                        }, 1000);
                    }
                });

                // 3. 채팅방에 이미지 표시
                const botMsg = document.createElement('div');
                botMsg.className = 'chat-msg bot';

                // 이미지 HTML 생성 (효과 적용)
                // [MODIFIED] inlineStyle 적용 (또다른 채팅콘 사용법 대응)
                let imgHtml = `<img src="${randomItem.src}" class="${effectClass}" style="max-height:200px; ${inlineStyle}">`;

                // 기본적으로 100px이지만, 효과에 따라 스타일 조정이 CSS에 있을 것임.
                // 다만 기존 코드 참조하면 style="max-width:100px;"가 inline으로 박혀있음.
                // 효과가 잘 보이려면 max-width 제한을 풀어야 할 수도 있으나, 일단 유지.
                // (기존 코드: img src="..." class="..." style="max-width:200px;" for detailed view, but chat bubble is smaller)
                // 채팅콘 사용법의 경우 max-width:100px 였음.

                // [MODIFIED] 이미지 메시지에는 프로필 아이콘 제거
                botMsg.innerHTML = `
                   <div class="chat-bubble">
                       <div class="doc-image-container ${containerClass}" style="margin:0;">
                            ${imgHtml}
                       </div>
                   </div>
                `;
                chatArea.appendChild(botMsg);

                // 4. 복사 완료 메시지
                const noticeMsg = document.createElement('div');
                noticeMsg.className = 'chat-msg bot';
                noticeMsg.innerHTML = `
                   <div class="chat-bubble">
                       복사되었습니다!
                   </div>
                `;
                chatArea.appendChild(noticeMsg);

                // 스크롤 처리 함수
                const scrollToBottom = () => {
                    chatArea.scrollTop = chatArea.scrollHeight;
                };

                // 이미지 로드 시 스크롤 업데이트
                const imgEl = botMsg.querySelector('img');
                if (imgEl) {
                    imgEl.onload = scrollToBottom;
                }

                // 기본적으로 약간의 지연 후 스크롤 (텍스트 렌더링 등 고려)
                setTimeout(scrollToBottom, 10);
                setTimeout(scrollToBottom, 50); // 안전장치
            }
            return; // 기본 로직 건너뜀
        }

        // ... 기존 로직 ...
        // 사용자 메시지 (명령어)
        /*
        const userMsg = document.createElement('div');
        userMsg.className = 'chat-msg user';
        userMsg.innerText = 'User: ' + (cmd.guide_ex ? cmd.guide_ex.replace(/==|~~/g, '') : cmd.name); // 예시 텍스트에서 꾸밈기호 제거
        chatArea.appendChild(userMsg);
        */

        // 이미지 메시지 (봇 응답 등)
        if (cmd.image) {
            const botMsg = document.createElement('div');
            botMsg.className = 'chat-msg bot';

            // 이미지가 있다면 logic 재사용을 위해 HTML 생성
            let imgClass = '';
            if (cmd.name === "두근두근!") imgClass = 'heartbeat';
            else if (cmd.name === "커져라!") imgClass = 'big';
            else if (cmd.name === "빙글빙글!") imgClass = 'bingle';
            else if (cmd.name === "네르지마세요!") imgClass = 'squash';

            let containerClass = '';
            if (cmd.name.includes("사실그거마미조임!")) containerClass = 'effect-mamijo';

            // [MODIFIED] 이미지 메시지에는 프로필 아이콘 제거
            // [NEW] 커져라! 이스터에그: 클릭 시 크기 증가 및 적용
            let inlineStyle = 'style="max-width:200px;"';

            if (cmd.name === "커져라!") {
                // [NEW] 최대 횟수 체크
                if (growEasterEggCount < growEasterEggMaxLimit) {
                    growEasterEggCount++;
                } else {
                    // 한도 도달 시 (선택사항: 알림이나 다른 반응)
                    // 현재는 그냥 더 안 커지게만 처리
                }

                const currentSize = growEasterEggBaseSize + (growEasterEggCount * growEasterEggIncrement);

                // 챗 이미지: 고정 200px (요청사항)
                inlineStyle = 'style="width: 200px; height: 200px; max-width: none;"';

                // [NEW] 좌측 상세 이미지도 실시간 업데이트
                const detailImg = document.querySelector('.doc-image-container img.big');
                if (detailImg) {
                    detailImg.style.width = `${currentSize}px`;
                    detailImg.style.height = `${currentSize}px`;
                    detailImg.style.maxWidth = 'none'; // 제한 해제
                }
            } else if (cmd.name === "빙글빙글!") {
                // [NEW] 빙글빙글! 이스터에그 카운트
                bingleEasterEggClicks++;
                if (bingleEasterEggClicks >= 10) {
                    isBingleEasterEggActive = true;
                    bingleEasterEggClicks = 0; // 초기화 (또는 유지)
                    triggerBarrelRoll();
                }
            } else if (cmd.cleanName === "사실그거마미조임!") {
                // [NEW] 마미조 이스터에그 카운트
                mamijoEasterEggClicks++;
                if (mamijoEasterEggClicks >= 10) {
                    isMamijoEasterEggActive = true;
                    mamijoEasterEggClicks = 0;
                    // 화면 즉시 갱신 (클래스 추가)
                    const contentArea = document.querySelector('.doc-content');
                    if (contentArea) {
                        contentArea.classList.add('mamijo-mode');
                    }
                    // [NEW] 애니메이션 재생됨 표시
                    hasMamijoAnimationPlayed = true;
                }
            }

            if (cmd.name === '으랏~챠!') {
                botMsg.innerHTML = `
                <div class="chat-bubble">
                    <div class="doc-image-container modify_type jjibu animate__animated animate__bounce" style="margin-left:70px;">
                         <img class="dccon notani" src="./image/guide/으랏챠.gif" style="width: 100px; height: 100px; max-width: none;">
                         <img src="${cmd.image}" style="width: 100px; height: 100px; max-width: none;">
                    </div>
                </div>
                `;
            } else {
                botMsg.innerHTML = `
                    <div class="chat-bubble">
                        <div class="doc-image-container ${containerClass}" style="margin:0;">
                             <img src="${cmd.image}" class="${imgClass}" alt="${cmd.name}" ${inlineStyle}>
                        </div>
                    </div>
                 `;
            }
            chatArea.appendChild(botMsg);

            // 텍스트 메시지 (복사 완료 알림)
            const noticeMsg = document.createElement('div');
            noticeMsg.className = 'chat-msg bot';
            noticeMsg.innerHTML = `
                <div class="chat-bubble">
                    복사되었습니다!
                </div>
             `;
            chatArea.appendChild(noticeMsg);

            chatArea.appendChild(noticeMsg);

            // 스크롤 처리 함수
            const scrollToBottom = () => {
                chatArea.scrollTop = chatArea.scrollHeight;
            };

            // 이미지 로드 시 스크롤 업데이트
            const imgEl = botMsg.querySelector('img');
            if (imgEl) {
                imgEl.onload = scrollToBottom;
            }

            // 스크롤 하단으로 (즉시 + 지연)
            setTimeout(scrollToBottom, 10);
            setTimeout(scrollToBottom, 50); // 안전장치
        }
    }

    // 애니메이션 타임아웃/인터벌 관리 (페이지 이동 시 초기화용)
    const managedTimeouts = [];
    const managedIntervals = [];

    function setManagedTimeout(callback, delay) {
        const id = setTimeout(() => {
            callback();
            // 완료된 타임아웃 제거
            const index = managedTimeouts.indexOf(id);
            if (index > -1) managedTimeouts.splice(index, 1);
        }, delay);
        managedTimeouts.push(id);
        return id;
    }

    function setManagedInterval(callback, delay) {
        const id = setInterval(callback, delay);
        managedIntervals.push(id);
        return id;
    }

    function clearAllManagedTimers() {
        managedTimeouts.forEach(id => clearTimeout(id));
        managedTimeouts.length = 0;
        managedIntervals.forEach(id => clearInterval(id));
        managedIntervals.length = 0;
    }

    // 전역 복사 함수
    window.copyText = function (element) {
        let textToCopy = '';

        // 버튼 클릭 시 (Input Field Style)
        if (element.classList.contains('doc-copy-btn')) {
            // 형제 요소(.doc-example-text)에서 텍스트 가져오기
            const textEl = element.previousElementSibling;
            if (textEl) textToCopy = textEl.innerText;
        } else {
            // 기존 방식 (요소 자체 클릭)
            textToCopy = element.innerText;
        }

        navigator.clipboard.writeText(textToCopy).then(() => {
            // 복사 성공 피드백 (텍스트 변경 없음)
            /*
            const originalText = element.innerText;
            element.innerText = '복사됨!';
            element.classList.add('copied');
     
            setTimeout(() => {
                element.innerText = originalText;
                element.classList.remove('copied');
            }, 1000);
            */
        }).catch(err => {
            console.error('복사 실패:', err);
        });
    };

    // 캐릭터 동작 시뮬레이션 (guide-ch)
    let isCharacterMainAction = false; // 동작 중복 방지 플래그 (점프, 비행 공유)
    let isActionCooldown = false; // [NEW] 버튼 쿨타임 플래그 (2초)

    window.simulateCharacterAction = function (text, element) {
        // 애니메이션 중복 실행 방지
        // 멈춰! 명령은 예외 (어떤 상황에서도 멈출 수 있어야 함)
        if (isCharacterMainAction && !text.includes('멈춰!')) {
            return;
        }

        // [NEW] 쿨타임 체크 (멈춰!, 거다이맥스! 제외)
        if (isActionCooldown && !text.includes('멈춰!') && !text.includes('거다이맥스!')) {
            return;
        }

        // 쿨타임 설정 (멈춰!, 거다이맥스! 제외)
        if (!text.includes('멈춰!') && !text.includes('거다이맥스!')) {
            isActionCooldown = true;
            if (element) {
                element.style.opacity = '0.5';
                //element.style.cursor = 'not-allowed';
                // element.innerText = '대기...'; // 대기 텍스트 변경 여부는 요청 없으나 쿨타임 표시는 유지하는게 좋음
            }

            setTimeout(() => {
                isActionCooldown = false;
                if (element) {
                    element.style.opacity = '1';
                    element.style.cursor = 'pointer';
                    // 원래 텍스트 복구 (항상 '채팅'이라고 가정)
                    element.innerText = '채팅';
                }
            }, 1000); // 1초로 변경
        }

        // 텍스트 복사 및 피드백 표시
        if (!text.includes('투척!') && !text.includes('박제!') && text !== '채팅') {
            // 투척/박제는 내부에서 별도 텍스트 생성 후 복사하므로 여기선 건너뜀
            // [NEW] '채팅' (기본 캐릭터)은 복사하지 않음
            navigator.clipboard.writeText(text).then(() => {
                // 버튼 텍스트 변경("복사됨!") 제거 요청 반영
                showCopyFeedback();
            }).catch(err => {
                console.error('복사 실패:', err);
            });
        } else {
            // 투척/박제는 내부에서 복사 진행 후 showCopyFeedback 호출
            // 기본 캐릭터('채팅')는 복사 없음
        }

        // 명령어별 특수 효과 분기
        if (text === '채팅') {
            showChatBubbleFromCharacter('화면에는 이렇게 나와용');
        } else if (text.includes('점프!')) {
            triggerJumpElement();
        } else if (text.includes('비행!')) {
            triggerFlyElement();
        } else if (text.includes('달리기!')) {
            triggerRunElement();
        } else if (text.includes('멈춰!')) {
            triggerStopElement();
        } else if (text.includes('움직여!')) {
            triggerResumeElement();
        } else if (text.includes('얼마남음?')) {
            showChatBubbleFromCharacter('100개 남았어용');
        } else if (text.includes('거다이맥스!')) {
            triggerGigantamaxElement();
        } else if (text.includes('투척!')) {
            triggerThrowElement();
        } else if (text.includes('박제!')) {
            triggerPinElement();
        } else if (text.includes('통통!')) {
            triggerBounceElement();
        }
    };

    // 박제 관리 변수
    let currentPinnedElement = null;
    let pinTimeout = null;

    // 박제 기능 구현
    function triggerPinElement() {
        // [MODIFIED] 버퍼에서 이미지 가져오기
        const selectedImage = getPreloadedImage();
        if (!selectedImage) return; // 이미지 데이터가 없으면 중단

        // 2. 텍스트 업데이트 및 복사 (~태그 박제!)
        const pinCommand = `${selectedImage.tag} 박제!`;

        const inputAreaText = document.querySelector('.doc-example-text');
        if (inputAreaText) {
            inputAreaText.innerText = pinCommand;
        }

        // 복사 수행
        navigator.clipboard.writeText(pinCommand).then(() => {
            showCopyFeedback();
        });

        // 3. 화면 박제 효과

        // 기존 타임아웃 제거 (중요: 페이드아웃 중인 요소가 사라지기 전에 클릭되면 이 타임아웃이 꼬일 수 있음)
        if (pinTimeout) {
            clearTimeout(pinTimeout);
            pinTimeout = null;
        }

        // 기존 박제 요소 즉시 제거 (페이드아웃 없이 즉시 교체)
        if (currentPinnedElement) {
            currentPinnedElement.remove();
            currentPinnedElement = null;
        }

        // 랜덤 위치 계산
        const margin = 100;
        const randomX = margin + Math.random() * (window.innerWidth - margin * 2);
        const randomY = margin + Math.random() * (window.innerHeight - margin * 2 - 150);

        // 새 박제 요소 생성
        const pinnedElement = document.createElement('div');
        pinnedElement.className = 'pinned-content';

        // 이미지 태그 생성
        const imgHtml = `<img src="${selectedImage.src}" style="width: 100px; height: 100px; display: block;">`;
        pinnedElement.innerHTML = `<div class="pinned-body">${imgHtml}</div>`;

        // 스타일 적용
        pinnedElement.style.cssText = `
            position: fixed;
            left: ${randomX}px;
            top: ${randomY}px;
            transform: translate(-50%, 0) scale(0.5) rotate(-10deg);
            z-index: 10000;
            background: rgba(51, 51, 51, 0.95);
            border: 2px solid #4ade80;
            border-radius: 12px;
            padding: 12px 16px;
            box-shadow: 0 4px 20px rgba(74, 222, 128, 0.3), 0 0 40px rgba(74, 222, 128, 0.1);
            font-size: 16px;
            font-weight: 700;
            opacity: 0;
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            text-align: center;
            pointer-events: none;
        `;

        document.body.appendChild(pinnedElement);
        currentPinnedElement = pinnedElement;

        // 등장 애니메이션 (requestAnimationFrame 사용하여 페인트 이후 적용)
        requestAnimationFrame(() => {
            // transition 효과를 위해 강제 리플로우
            void pinnedElement.offsetWidth;
            pinnedElement.style.opacity = '1';
            pinnedElement.style.transform = 'translate(-50%, 0) scale(1) rotate(0deg)';
        });

        // 10초 후 제거
        pinTimeout = setTimeout(() => {
            if (pinnedElement && pinnedElement.parentNode) {
                pinnedElement.style.opacity = '0';
                pinnedElement.style.transform = 'translate(-50%, 0) scale(0.5) rotate(10deg)';

                // 트랜지션 완료 후 삭제
                setTimeout(() => {
                    if (pinnedElement.parentNode) {
                        pinnedElement.remove();
                    }
                    if (currentPinnedElement === pinnedElement) {
                        currentPinnedElement = null;
                    }
                }, 500);
            }
        }, 10000);
    }

    // 투척 기능 구현
    function triggerThrowElement() {
        // [MODIFIED] 버퍼에서 이미지 가져오기
        const selectedImage = getPreloadedImage();
        if (!selectedImage) return; // 이미지 데이터가 없으면 중단

        // 2. 랜덤 개수 (1~10) 결정
        const throwCount = Math.floor(Math.random() * 10) + 1;

        // 텍스트 업데이트 및 복사 (~태그 투척N!)
        // 개수가 1개일 때는 '투척!', 그 외에는 '투척N!'
        const commandSuffix = throwCount === 1 ? '투척!' : `투척${throwCount}!`;
        const throwCommand = `${selectedImage.tag} ${commandSuffix}`;

        const inputAreaText = document.querySelector('.doc-example-text');
        if (inputAreaText) {
            inputAreaText.innerText = throwCommand;
        }

        // 복사 수행
        navigator.clipboard.writeText(throwCommand).then(() => {
            showCopyFeedback();
        });

        // 3. 물리 효과로 이미지 발사
        const charImg = document.querySelector('#character-stage-area .character-stande');
        if (!charImg) return;

        const rect = charImg.getBoundingClientRect();
        // 캐릭터 중심에서 발사
        const startX = rect.left + rect.width / 2;
        const startY = rect.top + rect.height / 3; // 머리/어깨 부근

        for (let i = 0; i < throwCount; i++) {
            // 약간의 시차를 두고 발사 (0.1초 간격) 또는 동시 발사
            // 여기서는 동시 발사하되 속도 랜덤성을 부여
            createThrownImage(selectedImage.src, startX, startY, i);
        }
    }

    function createThrownImage(src, startX, startY, index) {
        const size = 50; // 사용자 요청 50px
        const projectile = document.createElement('img');
        projectile.src = src;
        projectile.className = 'thrown-projectile';
        projectile.style.position = 'fixed';
        projectile.style.width = `${size}px`;
        projectile.style.height = `${size}px`;
        projectile.style.left = `${startX - size / 2}px`;
        projectile.style.top = `${startY - size / 2}px`;
        projectile.style.zIndex = '9999';
        projectile.style.pointerEvents = 'none'; // 클릭 방지
        projectile.style.objectFit = 'contain';

        document.body.appendChild(projectile);

        // 물리 변수
        let posX = startX - size / 2;
        let posY = startY - size / 2;

        // 오른쪽 방향으로 발사 (채팅창이 오른쪽에 있으므로)
        // 캐릭터가 보고있는 방향 고려? 가이드 페이지에서는 보통 오른쪽(채팅창 쪽)을 봄.
        const direction = 1;

        // 속도 설정 (랜덤성 추가)
        // X축: 오른쪽으로 쭉 뻗어나가게
        let velocityX = (400 + Math.random() * 300) * direction;
        // Y축: 위로 솟았다가 떨어지게 (음수가 위쪽)
        let velocityY = -(300 + Math.random() * 200);

        // 인덱스에 따른 약간의 퍼짐 효과
        velocityX += (index * 20);
        velocityY -= (index * 30); // 뒤에 나올수록 더 높이 뜸

        const gravity = 1200; // 중력 가속도
        const bounce = 0.6; // 탄성
        const friction = 0.8; // 바닥 마찰

        // 회전 효과
        let rotation = 0;
        let rotationSpeed = (Math.random() - 0.5) * 720; // 초당 회전 각도

        let lastTime = performance.now();
        let bounceCount = 0;
        const maxBounces = 3;

        function update(currentTime) {
            if (!projectile.parentNode) return;

            const dt = Math.min((currentTime - lastTime) / 1000, 0.05); // 델타 타임 (최대 0.05초)
            lastTime = currentTime;

            // 중력 적용
            velocityY += gravity * dt;

            // 위치 이동
            posX += velocityX * dt;
            posY += velocityY * dt;

            // 회전 적용
            rotation += rotationSpeed * dt;

            // 바닥 충돌 처리 (화면 하단 기준)
            // 가이드 페이지 채팅 영역의 바닥을 기준으로 잡거나 화면 전체 바닥으로 잡음.
            // 여기서는 심플하게 화면 바닥 - 50px 정도로 설정
            const groundLevel = window.innerHeight - 50;

            if (posY + size > groundLevel) {
                posY = groundLevel - size;
                velocityY *= -bounce; // 반동
                velocityX *= friction; // 마찰로 인한 감속

                bounceCount++;

                // 멈춤 조건
                if (bounceCount > maxBounces || Math.abs(velocityY) < 50) {
                    projectile.remove();
                    return;
                }
            }

            // [MODIFIED] 벽 충돌 처리 (좌우 반사)
            if (posX <= 0) {
                posX = 0;
                velocityX *= -0.8; // 벽 부딪힐 때 약간의 에너지 손실
            } else if (posX + size >= window.innerWidth) {
                posX = window.innerWidth - size;
                velocityX *= -0.8; // 벽 부딪힐 때 약간의 에너지 손실
            }

            // 스타일 적용
            projectile.style.left = `${posX}px`;
            projectile.style.top = `${posY}px`;
            projectile.style.transform = `rotate(${rotation}deg)`;

            requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
    }

    // 복사 피드백 표시 (캐릭터 스테이지 내부)
    function showCopyFeedback() {
        const stage = document.getElementById('character-stage-area');
        if (!stage) return;

        let feedback = stage.querySelector('.copy-feedback');
        if (!feedback) {
            feedback = document.createElement('div');
            feedback.className = 'copy-feedback';
            feedback.innerText = '복사되었습니다!';
            stage.appendChild(feedback);
        }

        // 애니메이션 리셋
        feedback.classList.remove('show');
        void feedback.offsetWidth;
        feedback.classList.add('show');

        setTimeout(() => {
            feedback.classList.remove('show');
        }, 2000);
    }

    function triggerJumpElement() {
        const charImg = document.querySelector('#character-stage-area .character-stande');
        if (!charImg) return;

        if (isCharacterMainAction) return;
        isCharacterMainAction = true;

        // 점프 높이 랜덤 (100px ~ 300px)
        const jumpHeight = 100 + Math.random() * 200;

        // 1. 점프 (올라가기)
        charImg.style.transition = 'bottom 0.4s ease-out';
        charImg.style.bottom = `${jumpHeight}px`;

        // 2. 하강 및 착지
        setManagedTimeout(() => {
            charImg.style.transition = 'bottom 0.4s ease-in';
            charImg.style.bottom = '0px';

            // 3. 착지 바운스 (Fly와 동일)
            setManagedTimeout(() => {
                charImg.style.transition = 'bottom 0.1s ease-out';
                charImg.style.bottom = '10px';
                setManagedTimeout(() => {
                    charImg.style.transition = 'bottom 0.1s ease-in';
                    charImg.style.bottom = '0px';

                    // 종료 정리
                    setManagedTimeout(() => {
                        charImg.style.transition = '';
                        isCharacterMainAction = false;
                    }, 100);
                }, 100);
            }, 400); // 하강 시간
        }, 400); // 상승 시간
    }

    function triggerBounceElement() {
        const stage = document.getElementById('character-stage-area');
        const charImg = stage ? stage.querySelector('.character-stande') : null;
        if (!stage || !charImg) return;

        if (isCharacterMainAction) return;
        isCharacterMainAction = true;

        const startLeft = charImg.offsetLeft;
        const startBottom = parseFloat(getComputedStyle(charImg).bottom) || 0;

        const stageWidth = stage.clientWidth;
        const stageHeight = stage.clientHeight;
        const charWidth = charImg.offsetWidth;
        const charHeight = charImg.offsetHeight;

        charImg.style.transition = 'none';
        charImg.style.position = 'absolute';
        charImg.style.left = `${startLeft}px`;
        charImg.style.bottom = `${startBottom}px`;

        const originalTransform = charImg.style.transform || '';

        const gravity = 1500;
        const safeHeight = stageHeight - charHeight;
        let velY = Math.sqrt(2 * gravity * safeHeight) * 1.1;

        let velX = (Math.random() - 0.5) * 800;

        let rotation = 0;
        let angularVelocity = (Math.random() - 0.5) * 360 * 2;

        const bounce = 0.85;
        const friction = 0.98;

        let posX = startLeft;
        let posY = startBottom;

        let lastTime = performance.now();
        let bounceGroundHitCount = 0;

        function update(currentTime) {
            if (!isCharacterMainAction) return;

            const dt = Math.min((currentTime - lastTime) / 1000, 0.05);
            lastTime = currentTime;

            velY -= gravity * dt;

            velX *= 0.998;
            velY *= 0.998;

            rotation += angularVelocity * dt;
            angularVelocity *= 0.995;

            posX += velX * dt;
            posY += velY * dt;

            if (posX < 0) {
                posX = 0;
                velX = Math.abs(velX) * bounce;
                angularVelocity = Math.abs(angularVelocity) * 0.8;
            } else if (posX > stageWidth - charWidth) {
                posX = stageWidth - charWidth;
                velX = -Math.abs(velX) * bounce;
                angularVelocity = -Math.abs(angularVelocity) * 0.8;
            }

            if (posY > stageHeight - charHeight) {
                posY = stageHeight - charHeight;
                velY = -Math.abs(velY) * bounce;
                velX += (Math.random() - 0.5) * 400;
            }

            if (posY <= 0) {
                posY = 0;
                velY = Math.abs(velY) * bounce;
                velX *= friction;
                bounceGroundHitCount++;
            }

            charImg.style.left = `${posX}px`;
            charImg.style.bottom = `${posY}px`;

            let currentScaleX = 1;
            if (originalTransform.includes('scaleX(-1)')) currentScaleX = -1;
            charImg.style.transform = `scaleX(${currentScaleX}) rotate(${rotation}deg)`;

            const speed = Math.sqrt(velX * velX + velY * velY);
            if (posY <= 1 && speed < 50 && bounceGroundHitCount > 2) {
                stopBounce();
                return;
            }

            requestAnimationFrame(update);
        }

        function stopBounce() {
            if (!isCharacterMainAction) return;
            isCharacterMainAction = false;

            charImg.style.transition = '';
            charImg.style.position = '';
            charImg.style.left = '';
            charImg.style.bottom = '0px';
            charImg.style.transform = originalTransform.replace(/rotate\([^)]*\)/, '');
        }

        requestAnimationFrame(update);
    }

    function triggerFlyElement() {
        const charImg = document.querySelector('#character-stage-area .character-stande');
        if (!charImg) return;

        if (isCharacterMainAction) return;
        isCharacterMainAction = true;

        // 비행 높이 랜덤 (150px ~ 350px) - 스테이지 높이 480px 고려
        const flyHeight = 150 + Math.random() * 200;

        // 1단계: 날아오르기 (0.5초)
        charImg.style.transition = 'bottom 0.5s ease-out';
        charImg.style.bottom = flyHeight + 'px';

        // 2단계: 공중 체공 (둥둥)
        let floatCount = 0;
        const maxFloat = 6; // 약 3초 체공

        const floatInterval = setManagedInterval(() => {
            if (floatCount >= maxFloat) {
                clearInterval(floatInterval);
                landing();
                return;
            }
            const offset = (floatCount % 2 === 0) ? 15 : -15;
            charImg.style.transition = 'bottom 0.5s ease-in-out';
            charImg.style.bottom = (flyHeight + offset) + 'px';
            floatCount++;
        }, 500);

        // 3단계: 착륙
        function landing() {
            // [수정] 바로 하강 시작 (딜레이 제거)
            charImg.style.transition = 'bottom 0.6s ease-in';
            charImg.style.bottom = '0px';

            // 착지 후 바운스
            setManagedTimeout(() => {
                charImg.style.transition = 'bottom 0.1s ease-out';
                charImg.style.bottom = '10px';
                setManagedTimeout(() => {
                    charImg.style.transition = 'bottom 0.1s ease-in';
                    charImg.style.bottom = '0px';

                    // 종료 정리
                    setManagedTimeout(() => {
                        charImg.style.transition = '';
                        isCharacterMainAction = false;
                    }, 100);
                }, 100);
            }, 600);
        }
    }


    function triggerRunElement() {
        const charImg = document.querySelector('#character-stage-area .character-stande');
        if (!charImg) return;

        if (isCharacterMainAction) return;
        isCharacterMainAction = true;

        // 달리기 이미지로 변경
        const originalSrc = charImg.src;
        charImg.src = './image/guide/piyo_walk.gif';

        // 1단계: 오른쪽으로 달리기 (화면 밖으로) - 속도 증가 (0.6s)
        charImg.style.transition = 'left 0.4s linear'; // 0.6초 동안 이동
        charImg.style.transform = 'translateX(-50%) scaleX(1)'; // 오른쪽 보기
        charImg.style.left = '150%'; // 화면 밖으로

        // 2단계: 2초 대기 후 왼쪽에서 나타나기
        setManagedTimeout(() => {
            // 위치 리셋 (왼쪽 화면 밖) - transition 없이 순간이동
            charImg.style.transition = 'none';
            charImg.style.left = '-50%';

            // 리플로우 강제
            void charImg.offsetWidth;

            // 3단계: 원래 위치로 돌아오기 - 속도 증가 (0.6s)
            setManagedTimeout(() => {
                charImg.style.transition = 'left 0.6s ease-out';
                charImg.style.left = '50%';

                // 도착 후 정지
                setManagedTimeout(() => {
                    charImg.style.transition = '';
                    charImg.src = originalSrc; // 원래 이미지 복구
                    charImg.style.transform = 'translateX(-50%)'; // 방향 초기화
                    isCharacterMainAction = false;
                }, 600); // 0.6초(이동 시간) 후에 실행해야 함
            }, 100);
        }, 1000); // 0.6s(이동) + 2s(대기) = 2.6초
    }

    // 멈춰! 전용 무한 걷기 변수
    let infiniteWalkInterval = null;
    let isInfiniteWalking = false;

    // 거다이맥스 변수
    let gigantamaxStacks = 0;
    let gigantamaxTimer = null;
    let gigantamaxEasterEggClicks = 0;
    let isGigantamaxEasterEggActive = false;
    let gigantamaxVisitCount = 0; // [NEW] 재방문 카운트

    // [NEW] 커져라! 이스터에그 변수
    let growEasterEggCount = 0;
    const growEasterEggIncrement = 10; // 10px씩 증가
    const growEasterEggBaseSize = 200; // 기본 200px
    const growEasterEggMaxLimit = 20; // [NEW] 최대 커지는 횟수 (제한)

    // [NEW] 빙글빙글! 이스터에그 변수
    let bingleEasterEggClicks = 0;
    let isBingleEasterEggActive = false;

    // [NEW] 배럴 롤 애니메이션 실행 함수
    function triggerBarrelRoll() {
        document.body.classList.remove('barrel-roll');
        // 리플로우 강제 (애니메이션 재시작용)
        void document.body.offsetWidth;
        document.body.classList.add('barrel-roll');

        // 애니메이션 종료 시간(1s) 후 클래스 제거? 
        // 계속 클래스를 유지하면 애니메이션이 끝나고 멈춰있지만, 
        // 다시 트리거할 때 remove -> add 하므로 상관없음.
        // 깔끔하게 제거해주는 것이 좋음.
        setTimeout(() => {
            document.body.classList.remove('barrel-roll');
        }, 1000);
    }

    // [NEW] 마미조 이스터에그 변수
    let mamijoEasterEggClicks = 0;
    let isMamijoEasterEggActive = false;
    let hasMamijoAnimationPlayed = false;

    // [NEW] 멈춰! 이스터에그 변수
    let stopEasterEggClicks = 0;
    let isStopEasterEggActive = false;
    let bubbleFollowInterval = null;

    // [NEW] 투척/박제 이미지 미리 로드 시스템
    const throwImageBuffer = [];
    const MAX_BUFFER_SIZE = 5;

    // 버퍼 채우기 함수
    function fillThrowImageBuffer() {
        if (typeof images === 'undefined' || images.length === 0) return;

        while (throwImageBuffer.length < MAX_BUFFER_SIZE) {
            const randomIdx = Math.floor(Math.random() * images.length);
            const item = images[randomIdx];

            // 이미지 객체 미리 로드 (브라우저 캐시 활용)
            const img = new Image();
            img.src = item.src;

            // 데이터 객체에 함께 저장
            throwImageBuffer.push({
                ...item, // 기존 데이터 복사 (src, tag 등)
                preloadedImg: img // 로드된 이미지 객체 참조 (필요시 사용)
            });
        }
    }

    // 버퍼에서 하나 꺼내오기 함수
    function getPreloadedImage() {
        // 이미지가 하나도 없다면 긴급히 하나 채움
        if (throwImageBuffer.length === 0) {
            fillThrowImageBuffer();
        }

        // 버퍼가 비어있으면 (images 자체가 없는 경우 등) null 반환
        if (throwImageBuffer.length === 0) return null;

        // 앞에서 하나 꺼냄 (FIFO)
        const item = throwImageBuffer.shift();

        // 꺼낸 만큼 다시 채워넣기 (비동기적으로/즉시 실행)
        // setTimeout을 사용하여 현재 실행 흐름 방해 최소화
        setTimeout(fillThrowImageBuffer, 0);

        return item;
    }

    // 초기화 시 버퍼 채우기 (최초 1회 실행)
    // images 데이터가 로드된 상태여야 함 (data.js가 먼저 로드되므로 가능)
    // 약간의 지연 후 실행하여 초기 렌더링 부하 분산
    setTimeout(fillThrowImageBuffer, 1000);

    // [NEW] 말풍선 따라가기 로직
    function startFollowingBubble() {
        // 기존 인터벌 제거
        if (bubbleFollowInterval) clearInterval(bubbleFollowInterval);

        // 멈춰! 이스터에그가 아니면 실행하지 않음
        if (!isStopEasterEggActive) return;

        bubbleFollowInterval = setInterval(() => {
            const charImg = document.querySelector('#character-stage-area .character-stande');
            // 이스터에그 상태가 아니거나 이미지가 없으면 종료
            if (!isStopEasterEggActive || !charImg) {
                clearInterval(bubbleFollowInterval);
                bubbleFollowInterval = null;
                return;
            }

            // 현재 캐릭터의 left 값 가져오기
            // transition으로 움직이므로 getComputedStyle 사용
            const computedLeft = getComputedStyle(charImg).left;

            // 말풍선 찾기
            const bubble = document.querySelector('#character-stage-area .character-bubble');
            if (bubble) {
                // 말풍선을 캐릭터 위치로 이동
                // 말풍선은 absolute이고 stage 기준임. 캐릭터도 stage 기준.
                bubble.style.left = computedLeft;
                bubble.style.transform = 'translateX(-50%)'; // 말풍선 중심 맞추기
                // 깜빡임 방지를 위해 transition 제거?
                // bubble.style.transition = 'none'; // 필요시 주석 해제
            }
        }, 16); // 약 60fps
    }

    function startInfiniteWalk(startFromCurrent = false, useWindowBounds = false) {
        const charImg = document.querySelector('#character-stage-area .character-stande');
        if (!charImg) return;

        clearInfiniteWalk();
        isInfiniteWalking = true;
        isCharacterMainAction = true; // 사용자 상호작용(점프 등)과 겹치지 않게
        charImg.src = './image/guide/piyo_walk.gif';
        charImg.style.transform = 'translateX(-50%) scaleX(1)'; // 오른쪽 보기
        charImg.style.opacity = '1'; // 숨겨진 이미지 표시

        const loopWalk = (isFirstStep = false) => {
            if (!isInfiniteWalking) return;

            if (isFirstStep && startFromCurrent) {
                // 현재 위치에서 끝까지
                const stageRect = charImg.parentElement.getBoundingClientRect();
                const currentLeftPx = charImg.getBoundingClientRect().left - stageRect.left;

                let endLeftPx;
                let fullDist;
                let durationSpec;

                // [MODIFIED] 이스터에그 여부가 아니라 파라미터로 판단
                if (useWindowBounds) {
                    // 화면 오른쪽 끝 (여유분 포함)
                    endLeftPx = window.innerWidth - stageRect.left + 100;
                    // 전체 이동 거리 (화면 왼쪽 끝 -> 오른쪽 끝)
                    const startLeftPx = -stageRect.left - 100;
                    fullDist = endLeftPx - startLeftPx;
                    // 속도 유지를 위해 거리 비례 시간 (기본 4000ms 기준 거리보다 길어지므로 시간 증가)
                    // 기본거리: stageWidth * 1.4 -> 4000ms
                    // 현재거리: fullDist
                    // 비율: fullDist / (stageWidth * 1.4) * 4000
                    const stageWidth = stageRect.width;
                    durationSpec = (fullDist / (stageWidth * 1.4)) * 4000;
                } else {
                    const stageWidth = stageRect.width;
                    endLeftPx = stageWidth * 1.2; // 120%
                    fullDist = stageWidth * 1.4;
                    durationSpec = 4000;
                }

                // 남은 거리 계산
                const distance = endLeftPx - currentLeftPx;
                let dur = (distance / fullDist) * durationSpec;
                if (dur < 0) dur = 0;

                // 트랜지션 적용
                charImg.style.transition = 'none';
                charImg.style.left = currentLeftPx + 'px';
                void charImg.offsetWidth; // Force Reflow

                charImg.style.transition = `left ${dur}ms linear`;
                charImg.style.left = endLeftPx + 'px';

                infiniteWalkInterval = setTimeout(() => {
                    loopWalk(false); // 다음부터는 처음부터 시작
                }, dur);
            } else {
                // 오른쪽 밖으로 이동 후 (이미 밖 상태거나 처음 시작)

                let startLeftPx, endLeftPx, dur;
                const stageRect = charImg.parentElement.getBoundingClientRect();

                // [MODIFIED] 이스터에그 여부가 아니라 파라미터로 판단
                if (useWindowBounds) {
                    // 화면 왼쪽 끝 (여유분 포함) - stage 기준 좌표로 변환
                    startLeftPx = -stageRect.left - 100;
                    // 화면 오른쪽 끝
                    endLeftPx = window.innerWidth - stageRect.left + 100;

                    const fullDist = endLeftPx - startLeftPx;
                    const stageWidth = stageRect.width;
                    // 속도 일정하게 유지
                    dur = (fullDist / (stageWidth * 1.4)) * 4000;
                } else {
                    startLeftPx = '-20%';
                    endLeftPx = '120%';
                    dur = 4000;
                }

                charImg.style.transition = 'none';
                if (typeof startLeftPx === 'number') {
                    charImg.style.left = startLeftPx + 'px';
                } else {
                    charImg.style.left = startLeftPx;
                }
                void charImg.offsetWidth;

                charImg.style.transition = `left ${dur}ms linear`;
                if (typeof endLeftPx === 'number') {
                    charImg.style.left = endLeftPx + 'px';
                } else {
                    charImg.style.left = endLeftPx;
                }

                // 반복
                infiniteWalkInterval = setTimeout(() => {
                    loopWalk(false);
                }, dur);
            }
        };

        loopWalk(startFromCurrent);
    }

    function clearInfiniteWalk() {
        isInfiniteWalking = false;
        if (infiniteWalkInterval) {
            clearTimeout(infiniteWalkInterval);
            infiniteWalkInterval = null;
        }
    }

    function triggerStopElement() {
        const charImg = document.querySelector('#character-stage-area .character-stande');

        // [NEW] 이스터에그 활성 상태면 클릭 무시 (이미 비활성화되어 접근 어렵지만 방어 코드)
        if (isStopEasterEggActive) return;

        // 멈춰있을 때만 카운트 증가
        if (!isInfiniteWalking && charImg) {
            stopEasterEggClicks++;
            if (stopEasterEggClicks >= 10) {
                isStopEasterEggActive = true;
                stopEasterEggClicks = 0;

                // 이스터에그 발동: 다시 움직이기 (전체 화면)
                startInfiniteWalk(true, true);
                showChatBubbleFromCharacter('알앗서용, 움직일게용', true);

                // 오버플로우 허용
                const stageArea = document.querySelector('#character-stage-area');
                if (stageArea) stageArea.classList.add('allow-overflow');

                // 말풍선 따라가기 시작
                startFollowingBubble();

                // 버튼 비활성화 처리 (현재 상세 뷰 버튼 찾기)
                const btn = document.querySelector('.doc-copy-btn');
                if (btn && btn.innerText.includes('채팅')) { // 안전장치
                    btn.disabled = true;
                    btn.style.opacity = '0.5';
                    // "전에 넣은 금지 마크가 너무 어색해서 제가 빼버렸습니다" -> cursor: default 혹은 pointer 유지?
                    // disabled 속성이면 브라우저 기본 스타일이 들어갈 수 있음.
                    // 일단 cursor 변경 없이 opacity만? 아니면 default?
                    // "마우스 커서 이벤트는 넣지 않아도 됩니다" -> cursor 변경 안함.
                    btn.style.cursor = 'default';
                }
                return;
            }
        }

        if (!charImg || !isInfiniteWalking) return;

        // 현재 위치에서 멈춤
        const computedLeft = getComputedStyle(charImg).left;
        charImg.style.transition = 'none';
        charImg.style.left = computedLeft;

        // 상태 해제
        clearInfiniteWalk();
        isCharacterMainAction = false;

        // 이미지 변경 및 말풍선
        charImg.src = './image/guide/piyo_stand.png';
        charImg.style.transform = 'translateX(-50%)'; // 정면 보기? 아니면 걷던 방향? 보통 정면

        showChatBubbleFromCharacter('멈췄어용');
    }

    function triggerResumeElement() {
        // 이미 걷고 있으면 무시
        if (isInfiniteWalking) return;

        showChatBubbleFromCharacter('움직여야징');
        startInfiniteWalk(true); // 현재 위치에서 시작
    }

    function triggerGigantamaxElement() {
        const charImg = document.querySelector('#character-stage-area .character-stande');
        if (!charImg) return;

        // [NEW] 이스터에그 활성 상태면 중단 (효과 유지)
        if (isGigantamaxEasterEggActive) {
            showChatBubbleFromCharacter('우와아아아앙', true);
            return;
        }

        // 1. 이미 최대 중첩인 경우 (5스택)
        if (gigantamaxStacks >= 5) {
            // [NEW] 이스터에그 카운트 체크
            gigantamaxEasterEggClicks++;

            if (gigantamaxEasterEggClicks >= 10) {
                // 이스터에그 발동!
                isGigantamaxEasterEggActive = true;
                gigantamaxEasterEggClicks = 0; // 초기화

                // 오버플로우 허용 클래스 추가
                const stageArea = document.querySelector('#character-stage-area');
                if (stageArea) stageArea.classList.add('allow-overflow');

                // 10배 크기 적용
                const scaleValue = 10.0;
                charImg.style.transformOrigin = 'center bottom';
                charImg.classList.add('gigantamax-glow');

                let currentTransform = charImg.style.transform || '';
                if (!currentTransform.includes('translateX')) {
                    currentTransform = 'translateX(-50%) ';
                }
                let scaleX = 'scaleX(1)';
                if (currentTransform.includes('scaleX(-1)')) {
                    scaleX = 'scaleX(-1)';
                }

                charImg.style.transition = 'transform 0.5s ease-out';
                charImg.style.transform = `translateX(-50%) ${scaleX} scale(${scaleValue})`;

                // 영구 말풍선
                showChatBubbleFromCharacter('우와아아아앙', true);

                // 기존 타이머 제거 (돌아오지 않음)
                if (gigantamaxTimer) {
                    clearTimeout(gigantamaxTimer);
                    gigantamaxTimer = null;
                }
            } else {
                showChatBubbleFromCharacter('더는 못커져용');
            }
            return;
        }

        // 2. 중첩 횟수 증가
        const stacks = 1;
        gigantamaxStacks += stacks;

        // 스케일 계산: 첫번째 1.6, 두번째부터 +0.3씩
        const scaleValue = 1.6 + (gigantamaxStacks - 1) * 0.3;

        // 아래쪽 기준으로 커지도록 transform-origin 설정
        charImg.style.transformOrigin = 'center bottom';

        // 거다이맥스 효과 표시 (이미지에 빛나는 효과 추가)
        charImg.classList.add('gigantamax-glow');

        // 기존 transform 값(scaleX 등)을 유지해야 하나? 
        // guide-ch에선 기본적으로 transform: none 또는 translateX(-50%) 등임.
        // run 상태에선 translateX(-50%) scaleX(1) 등.
        // 우선순위: 거다이맥스는 보통 stand 상태에서 테스트한다고 가정.
        // 현재 transform 값을 기반으로 scale 추가

        // guide.js 환경에 맞게 단순화: 항상 정면(혹은 현재상태) 유지
        // computedStyle로 현재 matrix를 가져오는건 복잡하므로, 
        // style.transform에 설정된 값 기준으로 병합하거나, 
        // scaleX(-1) 여부만 체크 (runEffect 등에서 설정됨)

        let currentTransform = charImg.style.transform || '';
        // translateX(-50%)는 항상 필요 (CSS center align)
        if (!currentTransform.includes('translateX')) {
            // 기본적으로 guide.js CSS상 캐릭터는 left: 50%, transform: translateX(-50%)임
            // script.js 로직과 달리 여기서는 translateX 유지가 중요
            currentTransform = 'translateX(-50%) ';
        }

        // scaleX 보존
        let scaleX = 'scaleX(1)';
        if (currentTransform.includes('scaleX(-1)')) {
            scaleX = 'scaleX(-1)';
        }

        charImg.style.transition = 'transform 0.5s ease-out';
        charImg.style.transform = `translateX(-50%) ${scaleX} scale(${scaleValue})`;

        // 말풍선 표시
        if (gigantamaxStacks === 1) {
            showChatBubbleFromCharacter('커졌서용');
        } else {
            showChatBubbleFromCharacter(`${gigantamaxStacks}단계!`);
        }

        // 거다이맥스 타이머 설정 (5초 유지)
        if (gigantamaxTimer) {
            clearTimeout(gigantamaxTimer);
        }
        gigantamaxTimer = setTimeout(() => {
            endGigantamax();
        }, 5000); // 5초
    }

    function endGigantamax() {
        // [NEW] 이스터에그 상태면 돌아오지 않음
        if (isGigantamaxEasterEggActive) return;

        const charImg = document.querySelector('#character-stage-area .character-stande');

        if (gigantamaxStacks > 0) {
            showChatBubbleFromCharacter('작아졋서용...');
        }

        gigantamaxStacks = 0;
        gigantamaxTimer = null;
        gigantamaxEasterEggClicks = 0; // 리셋

        if (!charImg) return;

        // 효과 제거
        charImg.classList.remove('gigantamax-glow');

        // 크기 원복
        let currentTransform = charImg.style.transform || '';
        // scaleX 보존 확인
        let scaleX = 'scaleX(1)';
        if (currentTransform.includes('scaleX(-1)')) {
            scaleX = 'scaleX(-1)';
        }

        // translateX(-50%)는 항상 유지
        charImg.style.transition = 'transform 0.5s ease-in';
        charImg.style.transform = `translateX(-50%) ${scaleX}`; // scale 제거

        // transform-origin 복원
        setTimeout(() => {
            if (charImg) charImg.style.transformOrigin = '';
        }, 500);
    }

    function showChatBubbleFromCharacter(text, isPersistent = false) {
        const stage = document.getElementById('character-stage-area');
        if (!stage) return;

        let bubble = stage.querySelector('.character-bubble');
        let isNew = false;
        let updateInterval = null;

        if (!bubble) {
            isNew = true;
            bubble = document.createElement('div');
            bubble.className = 'character-bubble';
            stage.appendChild(bubble);

            // 초기 스타일 설정
            bubble.style.position = 'absolute';
            bubble.style.left = '50%';
            bubble.style.transform = 'translateX(-50%)';
            bubble.style.opacity = '0';
            bubble.style.transition = 'bottom 0.5s ease-out, opacity 0.3s ease-out'; // Animate bottom for Gigantamax
        } else {
            // 기존 타이머 제거 (사라지지 않게 연장)
            if (bubble.dataset.removeTimer) {
                clearTimeout(parseInt(bubble.dataset.removeTimer));
            }
            if (bubble.dataset.intervalId) {
                clearInterval(parseInt(bubble.dataset.intervalId));
            }
        }

        bubble.innerText = text;

        // 꼬리 재추가 (innerText가 내용을 덮어쓰므로 매번 추가 필요)
        let tail = document.createElement('div');
        tail.className = 'character-bubble-tail';
        bubble.appendChild(tail);

        // 거다이맥스 크기에 따른 높이 조정
        let bottomOffset = 80;

        // [NEW] 시각적 상태(클래스)가 있을 때만 높이 적용 (다른 페이지에서 영향 방지)
        const charImgForBubble = stage.querySelector('.character-stande');
        const hasGlow = charImgForBubble && charImgForBubble.classList.contains('gigantamax-glow');

        if (hasGlow) {
            if (gigantamaxStacks > 0) {
                // 현재 스케일 계산 (Gigantamax 로직과 동일)
                const scaleValue = 1.6 + (gigantamaxStacks - 1) * 0.3;
                bottomOffset = 80 * scaleValue;
            }

            // [NEW] 이스터에그 상태면 고정값 500px
            if (isGigantamaxEasterEggActive) {
                bottomOffset = 500;
            }
        }

        // 애니메이션을 위해 먼저 설정 후 변경이 아니라, 그냥 변경하면 transition 적용됨
        bubble.style.bottom = `${bottomOffset}px`;

        // 말풍선 위치 추적 루프 (움직여! 등 이동시)
        const charImg = stage.querySelector('.character-stande');
        if (charImg) {
            // 초기 위치 동기화
            const updatePos = () => {
                if (!bubble.parentNode) return;
                const style = window.getComputedStyle(charImg);
                bubble.style.left = style.left;
            };

            updatePos();

            updateInterval = setInterval(() => {
                if (!bubble.parentNode || bubble.style.opacity === '0') {
                    clearInterval(updateInterval);
                    return;
                }
                updatePos();
            }, 16);

            bubble.dataset.intervalId = updateInterval;
        }

        if (isNew) {
            requestAnimationFrame(() => {
                bubble.style.opacity = '1';
            });
        } else {
            bubble.style.opacity = '1';
        }

        // [MODIFIED] 영구 지속일 경우 타이머 설정 안 함
        if (!isPersistent) {
            const removeTimer = setTimeout(() => {
                bubble.style.opacity = '0';
                setTimeout(() => {
                    if (bubble.parentNode && bubble.style.opacity === '0') {
                        bubble.parentNode.removeChild(bubble);
                    }
                    if (updateInterval) clearInterval(updateInterval);
                }, 300);
            }, 2000); // 문구가 바뀌었으니 읽을 시간 2초

            bubble.dataset.removeTimer = removeTimer;
        } else {
            // 영구 지속이더라도 기존 타이머는 위에서 클리어됨
        }
    }

    // 사이드바 드래그 스크롤 기능 추가
    function enableDragScroll() {
        const slider = document.querySelector('.sidebar-area');
        if (!slider) return;

        let isDown = false;
        let startY;
        let scrollTop;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('grabbing');
            startY = e.pageY - slider.offsetTop;
            scrollTop = slider.scrollTop;
            // 드래그 중에는 클릭 이벤트 방지를 위해 CSS pointer-events 조정 가능하지만, 
            // 여기서는 단순 스크롤 구현에 집중
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('grabbing');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('grabbing');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const y = e.pageY - slider.offsetTop;
            const walk = (y - startY) * 2; // 스크롤 속도 조절 (2배 빠른 스크롤)
            slider.scrollTop = scrollTop - walk;
        });
    }

    // 초기 렌더링
    renderSidebar();
    renderIntroGrid();
    enableDragScroll();

    // [NEW] 초기 로드 시 URL 해시 확인하여 페이지 이동
    handleLocation();

    // 목차(h3) 클릭 시 첫 페이지로 돌아가기 (History 적용)
    const sidebarHeader = document.querySelector('.sidebar-header h3');
    if (sidebarHeader) {
        sidebarHeader.style.cursor = 'pointer';
        sidebarHeader.addEventListener('click', () => {
            // 단순 UI 변경이 아니라 History Push
            if (window.location.hash) {
                history.pushState(null, '', 'guide.html'); // url clean
                showIntro();
            } else {
                showIntro(); // 이미 해시 없으면 UI만 리셋
            }
        });
    }
});
