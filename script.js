/* ============================================
   Portfolio Script (Simple Structure)
   ============================================ */

(function () {
    'use strict';

    const ROLES = [
        'Full-Stack Engineer',
        'UI/UX Enthusiast',
        'Backend Specialist',
        'Problem Solver'
    ];

    const SKILLS = [
        { name: 'HTML', type: 'icon', value: 'devicon-html5-plain colored' },
        { name: 'CSS', type: 'icon', value: 'devicon-css3-plain colored' },
        { name: 'JavaScript', type: 'icon', value: 'devicon-javascript-plain colored' },
        { name: 'Java', type: 'icon', value: 'devicon-java-plain colored' },
        { name: 'Node.js', type: 'image', value: 'images/nodejs-fa.svg' },
        { name: 'React', type: 'icon', value: 'devicon-react-original colored' },
        { name: 'MySQL', type: 'icon', value: 'devicon-mysql-plain colored' },
        { name: 'Redis', type: 'icon', value: 'devicon-redis-plain colored' }
    ];

    const TOOLS = [
        { name: 'VS Code', type: 'image', value: 'images/vscode.png' },
        { name: 'Eclipse', type: 'image', value: 'images/eclipse.svg' },
        { name: 'GitHub', type: 'icon', value: 'devicon-github-original' },
        { name: 'Perplexity', type: 'image', value: 'images/perplexity.png' },
        { name: 'Antigravity', type: 'image', value: 'images/antigravity.png' },
        { name: 'Claude', type: 'image', value: 'images/claude.png' },
        { name: 'ChatGPT', type: 'image', value: 'images/chaatgpt.png' },
        { name: 'Gemini', type: 'image', value: 'images/gemini.png' }
    ];

    const PROJECTS = [
        // --- FULL STACK ---
        {
            category: 'fullstack',
            categoryLabel: 'Full Stack',
            title: 'SmartDrive',
            description: 'A React-based file management application featuring nested folders, file uploads, and a clean user interface.',
            image: 'images/smartdrive_1773052178017.png',
            alt: 'SmartDrive',
            tags: ['React', 'API'],
            links: [{ label: 'Client', href: 'https://github.com/Prince-Rajadurai/WorkDriveFrontend', outline: true }, { label: 'Server', href: 'https://github.com/Prince-Rajadurai/WorkDrive_BackEnd', outline: true }]
        },
        {
            category: 'fullstack',
            categoryLabel: 'Full Stack',
            title: 'Todo List',
            description: 'A backend task manager with CRUD APIs, input validation, and persistent data handling.',
            image: 'images/todo_list_1773052196652.png',
            alt: 'Todo List',
            tags: ['Node.js', 'Express', 'MySQL'],
            links: [
                { label: 'Code', href: 'https://github.com/Prince-Rajadurai/To-do-List', outline: true }
            ]
        },
        {
            category: 'fullstack',
            categoryLabel: 'Full Stack',
            title: 'Planet',
            description: 'A Node.js and Express backend providing a RESTful API for managing planetary data and celestial resources.',
            image: 'images/planet_1773052214815.png',
            alt: 'Planet',
            tags: ['Node.js', 'Express'],
            links: [{ label: 'Code', href: 'https://github.com/Prince-Rajadurai/Planet', outline: true }]
        },
        // --- JAVA ---
        {
            category: 'java',
            categoryLabel: 'Java',
            title: 'Word Connect',
            description: 'A Java-based word game where players connect letters to form valid words, backed by a MySQL database for progression.',
            image: 'images/word_connect_1773052228345.png',
            alt: 'Word Connect',
            tags: ['Java', 'DSA', 'MySQL'],
            links: [{ label: 'Code', href: 'https://github.com/Prince-Rajadurai/Word-Connect-With-Database', outline: true }]
        },
        {
            category: 'java',
            categoryLabel: 'Java',
            title: 'Priority Queue',
            description: 'A heap-based priority queue implementation with efficient insertion and removal operations.',
            image: 'images/priority_queue_1773052244083.png',
            alt: 'Priority Queue',
            tags: ['Java', 'DSA', 'MySQL'],
            links: [{ label: 'Code', href: 'https://github.com/Prince-Rajadurai/Implementation-of-Priority-Queue', outline: true }]
        },
        {
            category: 'java',
            categoryLabel: 'Java',
            title: 'Word Connect without DB',
            description: 'A standalone desktop version of the Word Connect game built in Java, operating entirely via local memory without an external database.',
            image: 'images/word_connect_desktop_1773052290905.png',
            alt: 'Word Connect without DB',
            tags: ['Java', 'OOPs'],
            links: [{ label: 'Code', href: 'https://github.com/Prince-Rajadurai/Word-Connect', outline: true }]
        },
        // --- JS ---
        {
            category: 'js',
            categoryLabel: 'JS',
            title: 'Elevate',
            description: 'An interactive productivity app designed to support learning, focus, and daily progress.',
            image: 'images/elevate_app_1773052307838.png',
            alt: 'Elevate',
            tags: ['HTML', 'CSS', 'JavaScript'],
            links: [
                { label: 'Live Demo', href: 'https://prince-rajadurai.github.io/Elevate/' },
                { label: 'Code', href: 'https://github.com/Prince-Rajadurai/Elevate', outline: true }
            ]
        },
        {
            category: 'js',
            categoryLabel: 'JS',
            title: 'Mini Quiz App',
            description: 'A lightweight JavaScript quiz application featuring dynamic questions, score tracking, and immediate feedback.',
            image: 'images/mini_quiz_1773052321639.png',
            alt: 'Mini Quiz App',
            tags: ['HTML', 'CSS', 'JavaScript'],
            links: [{ label: 'Live Demo', href: 'https://prince-rajadurai.github.io/Mini-Quizz/' }, { label: 'Code', href: 'https://github.com/Prince-Rajadurai/Mini-Quizz', outline: true }]
        },
        {
            category: 'js',
            categoryLabel: 'JS',
            title: 'Rock, Paper, Scissors game',
            description: 'A classic Rock, Paper, Scissors game built with vanilla JavaScript, featuring an interactive UI and score tracking.',
            image: 'images/rps_game_1773052336963.png',
            alt: 'Rock, Paper, Scissors game',
            tags: ['HTML', 'CSS', 'JavaScript'],
            links: [{ label: 'Live Demo', href: 'https://prince-rajadurai.github.io/Rock-Paper-Scissor-game/' }, { label: 'Code', href: 'https://github.com/Prince-Rajadurai/Rock-Paper-Scissor-game', outline: true }]
        },
        // --- HTML/CSS ---
        {
            category: 'htmlcss',
            categoryLabel: 'HTML/CSS',
            title: 'Harry Potter',
            description: 'A magical, themed website utilizing advanced CSS for responsive design and immersive visual storytelling.',
            image: 'images/harry_potter_1773052352797.png',
            alt: 'Harry Potter',
            tags: ['HTML', 'CSS'],
            links: [
                { label: 'Live Demo', href: 'https://prince-rajadurai.github.io/Harry-Potter/index.html' },
                { label: 'Code', href: 'https://github.com/Prince-Rajadurai/Harry-Potter', outline: true }
            ]
        },
        {
            category: 'htmlcss',
            categoryLabel: 'HTML/CSS',
            title: 'Professional Page',
            description: 'A responsive one-page site with clear content flow and strong visual hierarchy.',
            image: 'images/professional_page_1773052423678.png',
            alt: 'Professional Page',
            tags: ['HTML', 'CSS'],
            links: [{ label: 'Live Demo', href: 'https://prince-rajadurai.github.io/Professional-Design/' }, { label: 'Code', href: 'https://github.com/Prince-Rajadurai/Professional-Design', outline: true }]
        },
        {
            category: 'htmlcss',
            categoryLabel: 'HTML/CSS',
            title: 'Grid Layouting',
            description: 'A responsive layout demonstration showcasing the power of CSS Grid and Flexbox for complex UI structures.',
            image: 'images/grid_layouting_1773052442394.png',
            alt: 'Grid Layouting',
            tags: ['HTML', 'CSS'],
            links: [{ label: 'Live Demo', href: 'https://prince-rajadurai.github.io/Grid-Layouting/' }, { label: 'Code', href: 'https://github.com/Prince-Rajadurai/Grid-Layouting', outline: true }]
        },
        // --- SCRATCH ---
        {
            category: 'scratch',
            categoryLabel: 'Scratch',
            title: 'Elevate (Scratch)',
            description: 'A Scratch version of Elevate built with blocks, sprites, and interactive animations.',
            image: 'images/elevate_scratch_1773052457813.png',
            alt: 'Elevate (Scratch)',
            tags: ['Scratch', 'Math Logic'],
            links: [{ label: 'Live Demo', href: 'https://scratch.mit.edu/projects/1192739235/' }]
        },
        {
            category: 'scratch',
            categoryLabel: 'Scratch',
            title: 'Doreamon Bird',
            description: 'A fun Scratch game inspired by Flappy Bird featuring Doraemon, with gravity mechanics and increasing difficulty.',
            image: 'images/doreamon_bird_1773052472941.png',
            alt: 'Doreamon Bird',
            tags: ['Scratch', 'Game Logic'],
            links: [{ label: 'Live Demo', href: 'https://scratch.mit.edu/projects/1190004498/' }]
        },
        {
            category: 'scratch',
            categoryLabel: 'Scratch',
            title: 'Day Finder',
            description: 'A useful Scratch utility that calculates the exact day of the week for any given date using mathematical algorithms.',
            image: 'images/day_finder_1773052488406.png',
            alt: 'Day Finder',
            tags: ['Scratch', 'Calculations'],
            links: [{ label: 'Live Demo', href: 'https://scratch.mit.edu/projects/1187276716/' }]
        }
    ];

    function createSkillCard(item) {
        const card = document.createElement('div');
        card.className = 'skill-card reveal';

        if (item.type === 'icon') {
            const icon = document.createElement('i');
            icon.className = item.value;
            card.appendChild(icon);
        } else {
            const logo = document.createElement('img');
            logo.className = 'tool-logo';
            logo.src = item.value;
            logo.alt = item.name;
            card.appendChild(logo);
        }

        const label = document.createElement('span');
        label.textContent = item.name;
        card.appendChild(label);

        return card;
    }

    function renderCards(containerId, items) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const fragment = document.createDocumentFragment();
        items.forEach((item) => fragment.appendChild(createSkillCard(item)));
        container.replaceChildren(fragment);
    }

    function forceExternalLinksToNewTab() {
        document.querySelectorAll('a[href]').forEach((link) => {
            const href = (link.getAttribute('href') || '').trim();
            if (!href || href.startsWith('#')) return;
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        });
    }

    function initThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        const savedTheme = localStorage.getItem('portfolioTheme');
        const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

        function setTheme(theme) {
            document.body.setAttribute('data-theme', theme);
            if (!themeToggle) return;
            const switchTo = theme === 'light' ? 'dark' : 'light';
            const label = `Switch to ${switchTo} theme`;
            if (themeIcon) {
                const showingLight = theme === 'light';
                themeIcon.src = showingLight ? 'images/sun.svg' : 'images/moon.svg';
                themeIcon.alt = showingLight ? 'Sun icon' : 'Moon icon';
            }
            themeToggle.setAttribute('aria-label', label);
            themeToggle.setAttribute('title', label);
        }

        setTheme(savedTheme || (systemPrefersLight ? 'light' : 'dark'));

        if (!themeToggle) return;
        themeToggle.addEventListener('click', () => {
            const current = document.body.getAttribute('data-theme') || 'dark';
            const next = current === 'light' ? 'dark' : 'light';
            setTheme(next);
            localStorage.setItem('portfolioTheme', next);
        });
    }

    function initNavbar() {
        const nav = document.getElementById('nav');
        const navToggle = document.getElementById('navToggle');
        const navLinks = document.getElementById('navLinks');
        if (!nav || !navToggle || !navLinks) return;

        const navAnchors = Array.from(navLinks.querySelectorAll('a[href^="#"]'));
        const sections = navAnchors
            .map((link) => document.querySelector(link.getAttribute('href')))
            .filter(Boolean);

        function updateActiveNav() {
            if (sections.length === 0) return;
            const markerY = window.scrollY + Math.max((nav.offsetHeight || 80) + 30, window.innerHeight * 0.22);
            let currentId = sections[0].id;

            sections.forEach((section) => {
                if (markerY >= section.offsetTop) currentId = section.id;
            });

            navAnchors.forEach((link) => {
                const isActive = link.getAttribute('href') === `#${currentId}`;
                link.classList.toggle('active', isActive);
            });
        }

        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', window.scrollY > 60);
            updateActiveNav();
        });

        window.addEventListener('resize', updateActiveNav);

        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('open');
        });

        navLinks.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('open');
            });
        });

        updateActiveNav();
    }

    function initTypingEffect() {
        const roleEl = document.getElementById('typingRole');
        const rolePips = document.getElementById('rolePips');
        if (!roleEl || ROLES.length === 0) return;

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const HOLD_MS = 2500;
        const OUT_MS = 180;
        const IN_MS = 220;
        const STAGGER_MS = 34;
        const BUFFER_MS = 90;

        let roleIndex = 0;
        let currentText = ROLES[0];
        let pips = [];
        let loopTimeout = null;
        let finalizeTimeout = null;
        let charTimeouts = [];
        let isAnimating = false;

        roleEl.replaceChildren();
        const wordEl = document.createElement('span');
        wordEl.className = 'role-word';
        roleEl.appendChild(wordEl);

        function toHtmlChar(char) {
            return char === ' ' ? '&nbsp;' : (char || '&nbsp;');
        }

        function createCharSlot(char = '') {
            const slot = document.createElement('span');
            slot.className = 'role-char';
            slot.innerHTML = toHtmlChar(char);
            if (!char) slot.classList.add('is-empty');
            return slot;
        }

        function renderText(text) {
            const fragment = document.createDocumentFragment();
            text.split('').forEach((char) => fragment.appendChild(createCharSlot(char)));
            wordEl.replaceChildren(fragment);
        }

        function ensureSlotCount(count) {
            const slots = Array.from(wordEl.children);
            while (slots.length < count) {
                const slot = createCharSlot('');
                wordEl.appendChild(slot);
                slots.push(slot);
            }
            return slots;
        }

        function scheduleChar(fn, delay) {
            const id = window.setTimeout(fn, delay);
            charTimeouts.push(id);
            return id;
        }

        function clearCharTimers() {
            charTimeouts.forEach((id) => window.clearTimeout(id));
            charTimeouts = [];
        }

        function animateIn(slot) {
            slot.classList.add('is-entering');
            requestAnimationFrame(() => {
                slot.classList.remove('is-entering');
            });
        }

        function animateTo(nextText) {
            if (reduceMotion) {
                currentText = nextText;
                renderText(nextText);
                isAnimating = false;
                return 0;
            }

            clearCharTimers();
            if (finalizeTimeout) window.clearTimeout(finalizeTimeout);

            const fromChars = currentText.split('');
            const toChars = nextText.split('');
            const maxLen = Math.max(fromChars.length, toChars.length);
            const slots = ensureSlotCount(maxLen);

            for (let i = 0; i < maxLen; i += 1) {
                const slot = slots[i];
                const fromChar = fromChars[i] || '';
                const toChar = toChars[i] || '';
                const delay = i * STAGGER_MS;

                if (fromChar === toChar) {
                    slot.classList.remove('is-leaving', 'is-entering', 'is-empty');
                    slot.innerHTML = toHtmlChar(toChar);
                    if (!toChar) slot.classList.add('is-empty');
                    continue;
                }

                scheduleChar(() => {
                    if (fromChar) {
                        slot.classList.remove('is-empty');
                        slot.innerHTML = toHtmlChar(fromChar);
                        slot.classList.add('is-leaving');

                        scheduleChar(() => {
                            slot.classList.remove('is-leaving');
                            if (toChar) {
                                slot.innerHTML = toHtmlChar(toChar);
                                slot.classList.remove('is-empty');
                                animateIn(slot);
                                return;
                            }
                            slot.innerHTML = '&nbsp;';
                            slot.classList.add('is-empty');
                        }, OUT_MS);
                        return;
                    }

                    if (toChar) {
                        slot.classList.remove('is-empty');
                        slot.innerHTML = toHtmlChar(toChar);
                        animateIn(slot);
                        return;
                    }

                    slot.innerHTML = '&nbsp;';
                    slot.classList.add('is-empty');
                }, delay);
            }

            const totalMs = ((maxLen - 1) * STAGGER_MS) + OUT_MS + IN_MS + BUFFER_MS;
            finalizeTimeout = window.setTimeout(() => {
                currentText = nextText;
                renderText(nextText);
                isAnimating = false;
            }, totalMs);

            return totalMs;
        }

        function setupPips() {
            if (!rolePips) return;
            const fragment = document.createDocumentFragment();
            ROLES.forEach((_, index) => {
                const pip = document.createElement('span');
                pip.classList.toggle('active', index === roleIndex);
                fragment.appendChild(pip);
            });
            rolePips.replaceChildren(fragment);
            pips = Array.from(rolePips.children);
        }

        function setActivePip(index) {
            if (!pips.length) return;
            pips.forEach((pip, i) => pip.classList.toggle('active', i === index));
        }

        function setRoleMinWidth() {
            const measure = document.createElement('span');
            const style = window.getComputedStyle(roleEl);
            measure.style.position = 'absolute';
            measure.style.visibility = 'hidden';
            measure.style.whiteSpace = 'nowrap';
            measure.style.fontFamily = style.fontFamily;
            measure.style.fontSize = style.fontSize;
            measure.style.fontWeight = style.fontWeight;
            measure.style.letterSpacing = style.letterSpacing;
            document.body.appendChild(measure);

            let max = 0;
            ROLES.forEach((role) => {
                measure.textContent = role;
                max = Math.max(max, measure.getBoundingClientRect().width);
            });
            measure.remove();
            roleEl.style.minWidth = `${Math.ceil(max) + 4}px`;
        }

        function switchRole() {
            if (isAnimating) return 0;
            isAnimating = true;
            const nextIndex = (roleIndex + 1) % ROLES.length;
            setActivePip(nextIndex);
            const duration = animateTo(ROLES[nextIndex]);
            roleIndex = nextIndex;
            return duration;
        }

        function loopRoles() {
            const transitionDuration = switchRole();
            loopTimeout = window.setTimeout(loopRoles, HOLD_MS + transitionDuration);
        }

        renderText(currentText);
        setupPips();
        setRoleMinWidth();
        window.addEventListener('resize', setRoleMinWidth);

        loopTimeout = window.setTimeout(loopRoles, HOLD_MS);

        window.addEventListener('beforeunload', () => {
            if (loopTimeout) window.clearTimeout(loopTimeout);
            if (finalizeTimeout) window.clearTimeout(finalizeTimeout);
            clearCharTimers();
        });
    }

    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', (event) => {
                event.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            });
        });
    }

    function initContactForm() {
        const form = document.getElementById('contactForm');
        const submitBtn = document.getElementById('submitBtn');
        if (!form || !submitBtn) return;

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('name')?.value.trim() || '';
            const email = document.getElementById('email')?.value.trim() || '';
            const message = document.getElementById('message')?.value.trim() || '';

            const to = 'prince.rajadurai@zohocorp.com';
            const subject = encodeURIComponent(`Portfolio Contact - ${name || 'New Message'}`);
            const body = encodeURIComponent(
                `Name: ${name}\n` +
                `Email: ${email}\n\n` +
                `Message:\n${message}`
            );

            const mailtoUrl = `mailto:${to}?subject=${subject}&body=${body}`;
            window.location.href = mailtoUrl;

            submitBtn.textContent = '✓ Sent!';
            submitBtn.style.background = 'var(--success)';

            setTimeout(() => {
                submitBtn.textContent = 'Send Message';
                submitBtn.style.background = '';
                form.reset();
            }, 2500);
        });
    }

    function initProfileFallback() {
        const profileImg = document.getElementById('profileImg');
        if (!profileImg) return;

        profileImg.addEventListener('error', function () {
            this.src = 'data:image/svg+xml,' + encodeURIComponent(
                '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 320 320">' +
                '<rect width="320" height="320" rx="160" fill="#141c28"/>' +
                '<text x="160" y="175" text-anchor="middle" fill="#4fc3f7" font-size="80" font-family="sans-serif">P</text>' +
                '</svg>'
            );
        });
    }

    function createProjectCard(project) {
        const card = document.createElement('article');
        card.className = 'project-card reveal visible';

        const linksHtml = project.links.map((link) => {
            const classes = link.outline ? 'btn btn-sm btn-outline-light' : 'btn btn-sm';
            return `<a href="${link.href}" class="${classes}" target="_blank" rel="noopener noreferrer">${link.label}</a>`;
        }).join('');

        const tagsHtml = project.tags.map((tag) => `<span>${tag}</span>`).join('');

        card.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.alt}">
                <div class="project-overlay">
                    <div class="project-details">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="project-tags">${tagsHtml}</div>
                        <div class="project-actions">${linksHtml}</div>
                    </div>
                </div>
            </div>
        `;

        return card;
    }

    function renderProjects(category) {
        const projectsGrid = document.getElementById('projectsGrid');
        if (!projectsGrid) return;

        const filtered = category === 'all'
            ? PROJECTS
            : PROJECTS.filter((project) => project.category === category);

        const fragment = document.createDocumentFragment();
        filtered.forEach((project) => fragment.appendChild(createProjectCard(project)));
        projectsGrid.replaceChildren(fragment);
    }

    function initProjectFilters() {
        const filterWrap = document.getElementById('projectFilters');
        if (!filterWrap) return;

        const filterButtons = filterWrap.querySelectorAll('.project-filter-btn');

        filterButtons.forEach((button) => {
            button.addEventListener('click', () => {
                filterButtons.forEach((btn) => btn.classList.remove('active'));
                button.classList.add('active');
                renderProjects(button.dataset.filter);
            });
        });

        renderProjects('all');
    }

    function initRevealAnimation() {
        const revealElements = document.querySelectorAll('.reveal');
        if (revealElements.length === 0) return;

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            });
        }, { threshold: 0.1, rootMargin: '-30px' });

        revealElements.forEach((el) => {
            if (el.closest('#projects') || el.closest('#tools')) {
                el.classList.add('visible');
                return;
            }
            observer.observe(el);
        });
    }

    function init() {
        renderCards('skillsGrid', SKILLS);
        renderCards('toolsGrid', TOOLS);
        forceExternalLinksToNewTab();
        initThemeToggle();
        initNavbar();
        initTypingEffect();
        initSmoothScroll();
        initContactForm();
        initProfileFallback();
        initProjectFilters();
        initRevealAnimation();
    }

    init();
})();
