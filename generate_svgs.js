const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'images');

const svgs = {};

const baseDefs = `
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <linearGradient id="bgAlt" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#334155" />
    </linearGradient>
    <linearGradient id="accent1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>
    <linearGradient id="accent2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" />
      <stop offset="100%" stop-color="#4f46e5" />
    </linearGradient>
    <linearGradient id="accent3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#c084fc" />
      <stop offset="100%" stop-color="#9333ea" />
    </linearGradient>
    <linearGradient id="accent4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
    <linearGradient id="accent5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fbbf24" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="15" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <filter id="glow-strong" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="35" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
`;

function wrap(content) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">${baseDefs}<rect width="800" height="600" fill="url(#bg)" />${content}</svg>`;
}

// 1. SmartDrive
svgs['smartdrive_pro.svg'] = wrap(`
  <g transform="translate(400, 300)">
    <path d="M-80,-20 C-80,-60 -20,-80 0,-80 C30,-80 80,-40 80,0 C120,0 120,60 80,60 L-70,60 C-110,60 -110,0 -80,-20 Z" fill="none" stroke="url(#accent1)" stroke-width="12" filter="url(#glow)"/>
    <rect x="-40" y="-10" width="80" height="60" rx="8" fill="url(#accent2)" opacity="0.9"/>
    <path d="M-40,10 L0,-10 L40,10" fill="none" stroke="url(#bg)" stroke-width="8" stroke-linejoin="round"/>
  </g>
`);

// 2. Todo List
svgs['todo_pro.svg'] = wrap(`
  <g transform="translate(250, 150)">
    <rect x="0" y="0" width="60" height="60" rx="16" fill="url(#accent4)" filter="url(#glow)"/>
    <path d="M15,30 L25,40 L45,20" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="90" y="15" width="240" height="30" rx="15" fill="rgba(255,255,255,0.15)"/>
    
    <rect x="0" y="100" width="60" height="60" rx="16" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="4"/>
    <rect x="90" y="115" width="180" height="30" rx="15" fill="rgba(255,255,255,0.08)"/>

    <rect x="0" y="200" width="60" height="60" rx="16" fill="url(#accent2)" filter="url(#glow)"/>
    <path d="M15,230 L25,240 L45,220" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="90" y="215" width="200" height="30" rx="15" fill="rgba(255,255,255,0.15)"/>
  </g>
`);

// 3. Planet
svgs['planet_pro.svg'] = wrap(`
  <g transform="translate(400, 300)">
    <circle cx="0" cy="0" r="130" fill="url(#accent2)" filter="url(#glow-strong)"/>
    <ellipse cx="0" cy="0" rx="240" ry="60" transform="rotate(-20)" fill="none" stroke="url(#accent1)" stroke-width="8" opacity="0.9"/>
    <circle cx="200" cy="-70" r="24" fill="url(#accent3)"/>
    <circle cx="-150" cy="130" r="14" fill="url(#accent4)"/>
    <circle cx="100" cy="160" r="6" fill="#fff" opacity="0.6"/>
    <circle cx="-220" cy="-110" r="4" fill="#fff" opacity="0.5"/>
  </g>
`);

// 4. Word Connect
svgs['word_connect_pro.svg'] = wrap(`
  <g transform="translate(400, 300)">
    <line x1="-120" y1="-80" x2="0" y2="-150" stroke="rgba(255,255,255,0.2)" stroke-width="6"/>
    <line x1="0" y1="-150" x2="110" y2="-40" stroke="rgba(255,255,255,0.2)" stroke-width="6"/>
    <line x1="110" y1="-40" x2="50" y2="90" stroke="url(#accent5)" stroke-width="10" filter="url(#glow)"/>
    <line x1="50" y1="90" x2="-90" y2="50" stroke="url(#accent5)" stroke-width="10" filter="url(#glow)"/>
    <line x1="-90" y1="50" x2="-120" y2="-80" stroke="rgba(255,255,255,0.2)" stroke-width="6"/>
    
    <circle cx="-120" cy="-80" r="35" fill="url(#accent1)"/>
    <circle cx="0" cy="-150" r="35" fill="url(#accent2)"/>
    <circle cx="110" cy="-40" r="45" fill="url(#accent3)" filter="url(#glow)"/>
    <circle cx="50" cy="90" r="45" fill="url(#accent4)" filter="url(#glow)"/>
    <circle cx="-90" cy="50" r="45" fill="url(#accent5)" filter="url(#glow)"/>
  </g>
`);

// 5. Priority Queue
svgs['priority_queue_pro.svg'] = wrap(`
  <g transform="translate(400, 140)">
    <line x1="0" y1="0" x2="-150" y2="110" stroke="rgba(255,255,255,0.2)" stroke-width="6"/>
    <line x1="0" y1="0" x2="150" y2="110" stroke="rgba(255,255,255,0.2)" stroke-width="6"/>
    <line x1="-150" y1="110" x2="-230" y2="230" stroke="rgba(255,255,255,0.2)" stroke-width="6"/>
    <line x1="-150" y1="110" x2="-70" y2="230" stroke="url(#accent1)" stroke-width="8" filter="url(#glow)"/>
    <line x1="150" y1="110" x2="70" y2="230" stroke="rgba(255,255,255,0.2)" stroke-width="6"/>
    <line x1="150" y1="110" x2="230" y2="230" stroke="rgba(255,255,255,0.2)" stroke-width="6"/>
    
    <circle cx="0" cy="0" r="50" fill="url(#accent3)" filter="url(#glow)"/>
    <circle cx="-150" cy="110" r="40" fill="url(#accent2)"/>
    <circle cx="150" cy="110" r="40" fill="url(#accent2)"/>
    <circle cx="-230" cy="230" r="30" fill="url(#accent1)"/>
    <circle cx="-70" cy="230" r="30" fill="url(#accent4)" filter="url(#glow)"/>
    <circle cx="70" cy="230" r="30" fill="url(#accent1)"/>
    <circle cx="230" cy="230" r="30" fill="url(#accent1)"/>
  </g>
`);

// 6. Word Connect DB
svgs['word_connect_desktop_pro.svg'] = wrap(`
  <g transform="translate(250, 150)">
    <rect x="0" y="0" width="80" height="80" rx="16" fill="url(#accent1)" filter="url(#glow)" opacity="0.9"/>
    <rect x="100" y="0" width="80" height="80" rx="16" fill="rgba(255,255,255,0.1)"/>
    <rect x="200" y="0" width="80" height="80" rx="16" fill="rgba(255,255,255,0.1)"/>
    
    <rect x="0" y="100" width="80" height="80" rx="16" fill="rgba(255,255,255,0.1)"/>
    <rect x="100" y="100" width="80" height="80" rx="16" fill="url(#accent2)" filter="url(#glow)" opacity="0.9"/>
    <rect x="200" y="100" width="80" height="80" rx="16" fill="rgba(255,255,255,0.1)"/>
    
    <rect x="0" y="200" width="80" height="80" rx="16" fill="rgba(255,255,255,0.1)"/>
    <rect x="100" y="200" width="80" height="80" rx="16" fill="rgba(255,255,255,0.1)"/>
    <rect x="200" y="200" width="80" height="80" rx="16" fill="url(#accent3)" filter="url(#glow)" opacity="0.9"/>
    
    <path d="M40,40 L140,140 L240,240" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)"/>
  </g>
`);

// 7. Elevate
svgs['elevate_pro.svg'] = wrap(`
  <g transform="translate(200, 480)">
    <rect x="0" y="-120" width="65" height="120" rx="12" fill="rgba(255,255,255,0.1)"/>
    <rect x="85" y="-200" width="65" height="200" rx="12" fill="rgba(255,255,255,0.15)"/>
    <rect x="170" y="-300" width="65" height="300" rx="12" fill="url(#accent1)" filter="url(#glow)"/>
    <rect x="255" y="-220" width="65" height="220" rx="12" fill="rgba(255,255,255,0.1)"/>
    <rect x="340" y="-400" width="65" height="400" rx="12" fill="url(#accent2)" filter="url(#glow)"/>
    
    <path d="M-20,-90 L75,-170 L160,-270 L245,-190 L330,-370 L420,-420" fill="none" stroke="url(#accent4)" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)"/>
    <circle cx="420" cy="-420" r="14" fill="#fff" filter="url(#glow)"/>
  </g>
`);

// 8. Mini Quiz App
svgs['mini_quiz_pro.svg'] = wrap(`
  <g transform="translate(400, 300)">
    <rect x="-160" y="-210" width="320" height="420" rx="24" fill="url(#bgAlt)" stroke="rgba(255,255,255,0.2)" stroke-width="2" filter="url(#glow)"/>
    
    <circle cx="0" cy="-80" r="55" fill="url(#accent5)"/>
    <path d="M-15,-100 C-15,-115 15,-115 15,-100 C15,-85 0,-75 0,-65 M0,-45 L0,-45.5" fill="none" stroke="#fff" stroke-width="12" stroke-linecap="round"/>
    
    <rect x="-110" y="20" width="220" height="45" rx="22.5" fill="rgba(255,255,255,0.1)"/>
    <rect x="-110" y="85" width="220" height="45" rx="22.5" fill="url(#accent4)" opacity="0.9"/>
    <rect x="-110" y="150" width="220" height="45" rx="22.5" fill="rgba(255,255,255,0.1)"/>
    
    <circle cx="70" cy="107.5" r="10" fill="#fff"/>
  </g>
`);

// 9. Rock Paper Scissors
svgs['rps_pro.svg'] = wrap(`
  <g transform="translate(400, 300)">
    <circle cx="-110" cy="65" r="75" fill="url(#accent1)" filter="url(#glow)" opacity="0.9"/>
    <rect x="25" y="-15" width="130" height="130" rx="24" transform="rotate(45)" fill="url(#accent3)" filter="url(#glow)" opacity="0.9"/>
    <polygon points="0,-150 85,-10 -85,-10" fill="url(#accent5)" filter="url(#glow)" opacity="0.9"/>
  </g>
`);

// 10. Harry Potter
svgs['harry_potter_pro.svg'] = wrap(`
  <g transform="translate(400, 300)">
    <path d="M-50,-130 L25,-25 L-25,0 L70,130" fill="none" stroke="url(#accent5)" stroke-width="20" stroke-linecap="round" stroke-linejoin="miter" filter="url(#glow-strong)"/>
    <circle cx="-130" cy="-60" r="8" fill="#fff" filter="url(#glow)"/>
    <circle cx="110" cy="-80" r="12" fill="url(#accent5)" filter="url(#glow)"/>
    <circle cx="-90" cy="90" r="10" fill="#fff" filter="url(#glow)"/>
    <circle cx="130" cy="50" r="6" fill="#fff" filter="url(#glow)"/>
  </g>
`);

// 11. Professional Page
svgs['professional_page_pro.svg'] = wrap(`
  <g transform="translate(200, 150)">
    <rect x="0" y="0" width="400" height="35" rx="8" fill="rgba(255,255,255,0.15)"/>
    <rect x="0" y="70" width="280" height="18" rx="6" fill="rgba(255,255,255,0.25)"/>
    <rect x="0" y="105" width="360" height="12" rx="6" fill="rgba(255,255,255,0.1)"/>
    <rect x="0" y="130" width="320" height="12" rx="6" fill="rgba(255,255,255,0.1)"/>
    
    <rect x="0" y="180" width="120" height="120" rx="16" fill="url(#accent1)" opacity="0.9"/>
    <rect x="140" y="180" width="120" height="120" rx="16" fill="url(#accent2)" opacity="0.9"/>
    <rect x="280" y="180" width="120" height="120" rx="16" fill="url(#accent4)" opacity="0.9"/>
  </g>
`);

// 12. Grid Layouting
svgs['grid_layouting_pro.svg'] = wrap(`
  <g transform="translate(200, 150)">
    <rect x="0" y="0" width="400" height="65" rx="12" fill="url(#accent3)" filter="url(#glow)"/>
    <rect x="0" y="85" width="120" height="235" rx="12" fill="rgba(255,255,255,0.1)"/>
    <rect x="140" y="85" width="260" height="150" rx="12" fill="url(#accent1)" filter="url(#glow)"/>
    <rect x="140" y="255" width="120" height="65" rx="12" fill="rgba(255,255,255,0.15)"/>
    <rect x="280" y="255" width="120" height="65" rx="12" fill="url(#accent5)"/>
  </g>
`);

// 13. Elevate (Scratch)
svgs['elevate_scratch_pro.svg'] = wrap(`
  <g transform="translate(280, 180)">
    <path d="M0,0 L130,0 C130,0 145,-20 165,-20 C185,-20 200,0 200,0 L240,0 L240,70 L0,70 Z" fill="url(#accent1)" filter="url(#glow)"/>
    <path d="M20,70 L150,70 C150,70 165,50 185,50 C205,50 220,70 220,70 L260,70 L260,140 L20,140 Z" fill="url(#accent4)" filter="url(#glow)"/>
    <path d="M40,140 L170,140 C170,140 185,120 205,120 C225,120 240,140 240,140 L280,140 L280,210 L40,210 Z" fill="url(#accent3)" filter="url(#glow)"/>
  </g>
`);

// 14. Doreamon Bird
svgs['doreamon_bird_pro.svg'] = wrap(`
  <g transform="translate(400, 300)">
    <rect x="-120" y="-220" width="45" height="160" rx="12" fill="rgba(255,255,255,0.1)"/>
    <rect x="75" y="60" width="45" height="160" rx="12" fill="url(#accent1)" opacity="0.6"/>
    
    <path d="M-220,100 Q-55,170 0,0 T220,-100" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="6" stroke-dasharray="12,12"/>
    <circle cx="0" cy="0" r="30" fill="url(#accent1)" filter="url(#glow-strong)"/>
    <circle cx="-12" cy="-6" r="6" fill="#fff"/>
  </g>
`);

// 15. Day Finder
svgs['day_finder_pro.svg'] = wrap(`
  <g transform="translate(400, 300)">
    <rect x="-110" y="-130" width="220" height="260" rx="24" fill="url(#bgAlt)" stroke="url(#accent1)" stroke-width="6" filter="url(#glow)"/>
    <line x1="-110" y1="-55" x2="110" y2="-55" stroke="url(#accent1)" stroke-width="6"/>
    <circle cx="-65" cy="-90" r="10" fill="#fff"/>
    <circle cx="65" cy="-90" r="10" fill="#fff"/>
    
    <rect x="-65" y="-10" width="35" height="35" rx="8" fill="rgba(255,255,255,0.15)"/>
    <rect x="-17.5" y="-10" width="35" height="35" rx="8" fill="rgba(255,255,255,0.15)"/>
    <rect x="30" y="-10" width="35" height="35" rx="8" fill="rgba(255,255,255,0.15)"/>
    
    <rect x="-65" y="45" width="35" height="35" rx="8" fill="rgba(255,255,255,0.15)"/>
    <rect x="-17.5" y="45" width="35" height="35" rx="8" fill="url(#accent4)" filter="url(#glow)"/>
    <rect x="30" y="45" width="35" height="35" rx="8" fill="rgba(255,255,255,0.15)"/>
  </g>
`);

for (const [name, content] of Object.entries(svgs)) {
  fs.writeFileSync(path.join(outDir, name), content);
}
console.log("Successfully generated all gorgeous SVGs.");
