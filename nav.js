document.addEventListener('DOMContentLoaded', () => {
    // 호유 아이콘 원형 확장(Circular Reveal) 메뉴
    const hoyuuIconBtn = document.getElementById('hoyuuIconBtn');
    const hoyuuCircleOverlay = document.getElementById('hoyuuCircleOverlay');
    const hoyuuCloseIcon = document.getElementById('hoyuuDropdownCloseBtn');

    if (!hoyuuIconBtn || !hoyuuCircleOverlay || !hoyuuCloseIcon) return;

    const revealTargets = hoyuuCircleOverlay.querySelectorAll(
        '.hoyuu-circle-close-icon, .hoyuu-dropdown-links'
    );

    let isOpen = false;
    let rafId = null;

    // easeInOutCubic
    function ease(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function animate(opening) {
        if (rafId) cancelAnimationFrame(rafId);

        const rect = hoyuuIconBtn.getBoundingClientRect();
        const startX = rect.left + rect.width / 2;
        const startY = rect.top + rect.height / 2;
        const W = window.innerWidth;
        const H = window.innerHeight;
        const maxR = Math.hypot(W, H) * 1.05;
        const orbitR = Math.max(50, Math.min(W, H) * 0.12);
        const duration = 520;
        const startTime = performance.now();

        hoyuuCloseIcon.style.left = startX + 'px';
        hoyuuCloseIcon.style.top = startY + 'px';
        hoyuuCircleOverlay.classList.toggle('open', opening);

        if (!opening) {
            revealTargets.forEach((el) => (el.style.opacity = '0'));
            hoyuuCircleOverlay
                .querySelectorAll('.hoyuu-dropdown-links a.show-desc')
                .forEach((l) => l.classList.remove('show-desc'));
        }

        function frame(now) {
            const p = Math.min((now - startTime) / duration, 1);
            const ep = ease(p);
            const dirP = opening ? ep : 1 - ep;

            const angle = dirP * Math.PI * 0.9;
            const cx = startX + orbitR * Math.sin(angle);
            const cy = startY + orbitR * (1 - Math.cos(angle));
            const r = dirP * maxR;

            hoyuuCircleOverlay.style.clipPath = `circle(${r}px at ${cx}px ${cy}px)`;

            if (p < 1) {
                rafId = requestAnimationFrame(frame);
            } else if (opening) {
                revealTargets.forEach((el) => (el.style.opacity = '1'));
            }
        }

        rafId = requestAnimationFrame(frame);
    }

    function setOpen(open) {
        isOpen = open;
        animate(open);
    }

    hoyuuIconBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        setOpen(!isOpen);
    });

    hoyuuCloseIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        setOpen(false);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // 메뉴 링크 설명글 툴팁 - hover가 없는 터치 기기는 첫 탭에 설명글만 보여주고,
    // 같은 링크를 다시 탭해야 실제 이동하도록 처리
    const descLinks = document.querySelectorAll('.hoyuu-dropdown-links a[data-desc]');
    if (!descLinks.length) return;

    const isCoarsePointer = window.matchMedia('(hover: none)').matches;
    if (!isCoarsePointer) return;

    descLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            if (!link.classList.contains('show-desc')) {
                e.preventDefault();
                descLinks.forEach((l) => l.classList.remove('show-desc'));
                link.classList.add('show-desc');
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.hoyuu-dropdown-links a[data-desc]')) {
            descLinks.forEach((l) => l.classList.remove('show-desc'));
        }
    });
});
