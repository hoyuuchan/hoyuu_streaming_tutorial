document.addEventListener('DOMContentLoaded', () => {
    const portfolioContainer = document.querySelector('.portfolio-container');
    const detailView = document.getElementById('portfolio-detail-view');
    const detailContent = document.getElementById('portfolio-detail-content');

    // Generate grid from data
    function generatePortfolioGrid() {
        const container = document.getElementById('dynamic-portfolio-container');
        const detailsContainer = document.getElementById('dynamic-hidden-details');
        if (!container || !detailsContainer || typeof portfolioData === 'undefined') return;

        // Group items by year
        const groupedByYear = {};
        for (const item of portfolioData) {
            if (!groupedByYear[item.year]) {
                groupedByYear[item.year] = [];
            }
            groupedByYear[item.year].push(item);
        }

        // Sort years descending
        const sortedYears = Object.keys(groupedByYear).sort((a, b) => b - a);

        let gridHTML = '';
        let detailsHTML = '';

        for (const year of sortedYears) {
            gridHTML += `<div class="portfolio-year-section">
                <h2 class="portfolio-year-title">${year}년</h2>
                <div class="portfolio-grid">`;

            for (const item of groupedByYear[year]) {
                // Generate grid card
                let descBadge = item.desc_badge ? `<p class="card-desc">${item.desc_badge}</p>` : '';
                gridHTML += `
                    <div class="portfolio-card" id="card-${item.id}" onclick="location.hash='#${item.id}'">
                        <div class="card-image">
                            <img src="${item.mainImage}" style="${item.mainImageStyle || ''}">
                        </div>
                        <div class="card-content">
                            <h3 class="card-title">${item.title}</h3>
                            ${descBadge}
                            <div class="card-meta">
                                <span class="card-date">${item.date}</span>
                            </div>
                        </div>
                    </div>`;

                // Generate detail content
                let imagesHTML = '';
                if (item.detailImages && item.detailImages.length > 0) {
                    imagesHTML = `<div class="pm-gallery-masonry ${item.count_class || ''}">`;
                    for (const img of item.detailImages) {
                        imagesHTML += `<img data-src="${img}">`;
                    }
                    imagesHTML += `</div>`;
                }

                let descriptionHTML = '';
                if (item.description) {
                    let descContent = item.description;
                    if (!descContent.includes('<p>')) {
                        descContent = `<p>${descContent.replace(/\n/g, '<br>')}</p>`;
                    }
                    descriptionHTML = `
                    <div class="pm-description">
                        ${descContent}
                    </div>`;
                }

                detailsHTML += `
                <div id="detail-${item.id}">
                    <div class="pm-content-wrapper">
                        ${descriptionHTML}
                        ${imagesHTML}
                    </div>
                </div>`;
            }

            gridHTML += `</div></div>`;
        }

        container.innerHTML = gridHTML;
        detailsContainer.innerHTML = detailsHTML;
    }

    generatePortfolioGrid();

    // Function to handle hash changes
    function handleHashChange() {
        const hash = location.hash.substring(1); // Remove '#'
        if (hash) {
            openPortfolioDetail(hash);
        } else {
            showPortfolioGrid();
        }
    }

    // Function to show grid
    function showPortfolioGrid() {
        if (portfolioContainer) portfolioContainer.style.display = 'block';
        if (detailView) detailView.style.display = 'none';
        if (detailContent) detailContent.innerHTML = ''; // Clear content
        window.isProgrammaticScroll = true;
        window.scrollTo(0, 0);
        setTimeout(() => window.isProgrammaticScroll = false, 500);
    }

    // Function to show detail
    function openPortfolioDetail(id) {
        // Find the hidden content
        const content = document.getElementById(`detail-${id}`);

        // Find the card element to extract header data
        const card = document.getElementById(`card-${id}`);

        if (content && detailContent) {
            let headerHTML = '';

            // Move title inside .pm-description instead of a separate header
            let titleHTML = '';
            if (card) {
                const dateEl = card.querySelector('.card-date');
                const titleEl = card.querySelector('.card-title');

                const date = dateEl ? dateEl.innerText : '';
                const title = titleEl ? titleEl.innerText : '';

                titleHTML = `
                    <div class="pm-info-header" style="margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 15px;">
                        <h1 class="pm-title" style="font-size: 1.8rem; font-weight: 800; margin: 0 0 8px 0; color: #111; line-height: 1.2;">${title}</h1>
                        <span class="pm-date" style="font-size: 0.9rem; color: #777;">${date}</span>
                    </div>
                `;
            }

            // Create a temporary element to manipulate the HTML
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = content.innerHTML;

            const descriptionEl = tempContainer.querySelector('.pm-description');
            if (descriptionEl && titleHTML) {
                descriptionEl.insertAdjacentHTML('afterbegin', titleHTML);
            }

            // Inject modified content
            detailContent.innerHTML = tempContainer.innerHTML;

            // --- [NEW] Bottom Sheet Interaction Logic ---
            const newDescriptionEl = detailContent.querySelector('.pm-description');
            if (newDescriptionEl) {
                // 바텀시트 클릭 시 펼치기
                newDescriptionEl.addEventListener('click', function (e) {
                    if (!this.classList.contains('expanded')) {
                        this.classList.add('expanded');
                    }
                });

                // 내부 클릭 시 이벤트 전파 방지 (바깥 클릭과 구분하기 위함)
                newDescriptionEl.addEventListener('click', function (e) {
                    e.stopPropagation();
                });

                // --- [NEW] Scrollbar visibility logic ---
                let descScrollTimeout;
                newDescriptionEl.addEventListener('scroll', function() {
                    this.classList.add('is-scrolling');
                    clearTimeout(descScrollTimeout);
                    descScrollTimeout = setTimeout(() => {
                        this.classList.remove('is-scrolling');
                    }, 800); // 0.8초 후 스크롤바 숨김
                });
                // ----------------------------------------
            }

            // 바텀시트 외부(갤러리 등) 클릭 시 접기
            if (detailView) {
                detailView.onclick = function (e) {
                    if (newDescriptionEl && newDescriptionEl.classList.contains('expanded')) {
                        // 클릭된 요소가 바텀시트 내부가 아닐 경우에만 접기
                        if (!newDescriptionEl.contains(e.target)) {
                            newDescriptionEl.classList.remove('expanded');
                        }
                    }
                };
            }
            // --------------------------------------------

            // Lazy load images
            const lazyImages = detailContent.querySelectorAll('img[data-src]');
            lazyImages.forEach(img => {
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
            });

            // Lazy load background images
            const lazyBgElements = detailContent.querySelectorAll('[data-bg]');
            lazyBgElements.forEach(el => {
                el.style.backgroundImage = el.getAttribute('data-bg');
                el.removeAttribute('data-bg');
            });

            // Switch view
            if (portfolioContainer) portfolioContainer.style.display = 'none';
            if (detailView) detailView.style.display = 'block';
            window.isProgrammaticScroll = true;
            window.scrollTo(0, 0);
            setTimeout(() => window.isProgrammaticScroll = false, 500);
        } else {
            console.error(`Detail content for ${id} not found.`);
            // if content not found, go back to grid
            showPortfolioGrid();
        }
    }

    // Event listeners
    window.addEventListener('hashchange', handleHashChange);

    // Initial check
    handleHashChange();

    // --- [NEW] Lightbox Logic ---
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');

    if (lightboxOverlay && lightboxImg && lightboxClose) {
        // Event delegation for images in the detail view
        detailContent.addEventListener('click', function (e) {
            if (e.target.tagName.toLowerCase() === 'img') {
                // pm-gallery-masonry 또는 pm-description 내부의 이미지만 라이트박스 적용
                const isGalleryImg = e.target.closest('.pm-gallery-masonry') || e.target.closest('.pm-description');
                if (isGalleryImg) {
                    // pm-description이 expanded 상태일 때, 외부 갤러리 이미지 클릭 시 라이트박스 방지
                    const expandedDescription = document.querySelector('.pm-description.expanded');
                    if (expandedDescription && !expandedDescription.contains(e.target)) {
                        return; // 라이트박스를 띄우지 않음 (이후 detailView.onclick에서 바텀시트가 닫힘)
                    }

                    const src = e.target.src;
                    if (src) {
                        lightboxImg.src = src;
                        lightboxOverlay.classList.add('active');
                    }
                }
            }
        });

        // Close lightbox on close button click
        lightboxClose.addEventListener('click', function () {
            lightboxOverlay.classList.remove('active');
        });

        // Close lightbox on overlay background click
        lightboxOverlay.addEventListener('click', function (e) {
            if (e.target === lightboxOverlay) {
                lightboxOverlay.classList.remove('active');
            }
        });
    }
    // --------------------------------------------

    // --- [NEW] Scroll to Hide Bottom Sheet Logic ---
    let scrollTimeout;
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function () {
        const currentScrollY = window.scrollY;

        // 프로그래매틱 스크롤(페이지 전환 시 최상단 이동) 또는 이미지 로딩으로 인한 미세한 스크롤 방지
        if (window.isProgrammaticScroll || Math.abs(currentScrollY - lastScrollY) < 10) {
            lastScrollY = currentScrollY;
            return;
        }

        lastScrollY = currentScrollY;

        const bottomSheet = document.querySelector('.pm-description');
        // Only apply if the bottom sheet exists and is NOT currently expanded
        if (bottomSheet && !bottomSheet.classList.contains('expanded')) {
            // Add class to hide it while scrolling
            bottomSheet.classList.add('scrolling-hidden');

            // Clear existing timeout
            clearTimeout(scrollTimeout);

            // Set new timeout to show it again when scrolling stops (e.g. 3000ms after last scroll event)
            scrollTimeout = setTimeout(function () {
                bottomSheet.classList.remove('scrolling-hidden');
            }, 500);
        }
    }, { passive: true });
    // -----------------------------------------------
});
