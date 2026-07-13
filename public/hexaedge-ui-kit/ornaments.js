/* ============================================================
   HexaEdge · Chinese Classical SVG Ornament Library
   All symbols use currentColor for inking flexibility.
   Auto-injects defs on DOMContentLoaded.
   Usage:  <svg class="om"><use href="#om-knot"/></svg>
   ============================================================ */

const ORNAMENT_DEFS = `
<defs>
  <symbol id="om-knot" viewBox="0 0 120 180">
    <g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <line x1="60" y1="6" x2="60" y2="24"/>

      <g transform="translate(60 70)">
        <rect x="-42" y="-11" width="84" height="22" rx="11"/>
        <rect x="-42" y="-11" width="84" height="22" rx="11" transform="rotate(45)"/>
        <rect x="-42" y="-11" width="84" height="22" rx="11" transform="rotate(90)"/>
        <rect x="-42" y="-11" width="84" height="22" rx="11" transform="rotate(135)"/>
      </g>

      <path d="M60 60 L 70 70 L 60 80 L 50 70 Z"/>

      <line x1="60" y1="116" x2="60" y2="124"/>
      <path d="M52 124 L 68 124 L 65 132 L 55 132 Z"/>
      <line x1="55" y1="132" x2="65" y2="132"/>

      <line x1="55" y1="132" x2="52" y2="172"/>
      <line x1="58" y1="132" x2="56" y2="174"/>
      <line x1="60" y1="132" x2="60" y2="176"/>
      <line x1="62" y1="132" x2="64" y2="174"/>
      <line x1="65" y1="132" x2="68" y2="172"/>
    </g>
  </symbol>

  <symbol id="om-lantern" viewBox="0 0 120 200">
    <g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <line x1="60" y1="4" x2="60" y2="18"/>
      <circle cx="60" cy="20" r="3" fill="currentColor"/>

      <path d="M40 30 L 36 24 L 84 24 L 80 30"/>
      <line x1="36" y1="24" x2="84" y2="24"/>
      <path d="M22 36 Q 26 30 32 30 L 88 30 Q 94 30 98 36"/>
      <line x1="22" y1="36" x2="98" y2="36"/>

      <line x1="42" y1="36" x2="42" y2="42"/>
      <line x1="78" y1="36" x2="78" y2="42"/>
      <line x1="42" y1="42" x2="78" y2="42"/>

      <path d="M42 42 C 28 70 28 118 42 146"/>
      <path d="M78 42 C 92 70 92 118 78 146"/>
      <line x1="42" y1="146" x2="78" y2="146"/>

      <path d="M52 42 C 48 70 48 118 52 146"/>
      <path d="M60 42 L 60 146"/>
      <path d="M68 42 C 72 70 72 118 68 146"/>

      <path d="M30 70 C 50 73 70 73 90 70" opacity="0.55"/>
      <path d="M30 118 C 50 121 70 121 90 118" opacity="0.55"/>

      <path d="M22 152 Q 26 158 32 158 L 88 158 Q 94 158 98 152"/>
      <line x1="22" y1="152" x2="98" y2="152"/>
      <path d="M40 158 L 36 164 L 84 164 L 80 158"/>
      <line x1="36" y1="164" x2="84" y2="164"/>

      <path d="M52 168 L 68 168 L 65 176 L 55 176 Z"/>
      <line x1="55" y1="176" x2="65" y2="176"/>

      <line x1="55" y1="176" x2="52" y2="196"/>
      <line x1="58" y1="176" x2="56" y2="198"/>
      <line x1="60" y1="176" x2="60" y2="198"/>
      <line x1="62" y1="176" x2="64" y2="198"/>
      <line x1="65" y1="176" x2="68" y2="196"/>

      <line x1="22" y1="152" x2="18" y2="168" opacity="0.7"/>
      <line x1="98" y1="152" x2="102" y2="168" opacity="0.7"/>
    </g>
  </symbol>

  <symbol id="om-ruyi" viewBox="0 0 100 120">
    <g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <!-- symmetric tri-lobe ruyi head -->
      <path d="M 50 16
               C 47 22 46 27 47 31
               C 42 25 33 24 27 29
               C 18 36 20 47 30 50
               C 37 52 45 50 50 45
               C 55 50 63 52 70 50
               C 80 47 82 36 73 29
               C 67 24 58 25 53 31
               C 54 27 53 22 50 16 Z"/>
      <circle cx="50" cy="34" r="2.4" fill="currentColor" stroke="none"/>
      <!-- symmetric tapered handle -->
      <path d="M 45 50 C 43 68 43 88 46 104 L 54 104 C 57 88 57 68 55 50 Z"/>
      <!-- symmetric foot cloud -->
      <path d="M 50 104 C 44 106 40 112 44 116 C 47 118 50 116 50 113 C 50 116 53 118 56 116 C 60 112 56 106 50 104 Z"/>
    </g>
  </symbol>

  <symbol id="om-mountain" viewBox="0 0 200 80">
    <g fill="currentColor">
      <polygon opacity="0.22" points="0,80 30,46 60,72 96,38 132,68 168,42 200,64 200,80"/>
      <polygon opacity="0.38" points="0,80 22,60 48,72 80,54 116,72 150,58 188,72 200,68 200,80"/>
      <polygon opacity="0.62" points="0,80 18,72 44,76 70,68 104,76 138,70 170,76 200,72 200,80"/>
    </g>
  </symbol>

  <symbol id="om-water" viewBox="0 0 200 80">
    <g fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.7">
      <path d="M0 40 Q 12 28 24 40 T 48 40 T 72 40 T 96 40 T 120 40 T 144 40 T 168 40 T 192 40"/>
      <path d="M0 52 Q 12 40 24 52 T 48 52 T 72 52 T 96 52 T 120 52 T 144 52 T 168 52 T 192 52"/>
      <path d="M0 64 Q 12 52 24 64 T 48 64 T 72 64 T 96 64 T 120 64 T 144 64 T 168 64 T 192 64"/>
    </g>
  </symbol>

  <symbol id="om-waves" viewBox="0 0 400 120">
    <g fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
      <g>
        <g><path d="M0 110 A 25 25 0 0 1 50 110"/><path d="M8 110 A 17 17 0 0 1 42 110"/><path d="M16 110 A 9 9 0 0 1 34 110"/></g>
        <g transform="translate(50 0)"><path d="M0 110 A 25 25 0 0 1 50 110"/><path d="M8 110 A 17 17 0 0 1 42 110"/><path d="M16 110 A 9 9 0 0 1 34 110"/></g>
        <g transform="translate(100 0)"><path d="M0 110 A 25 25 0 0 1 50 110"/><path d="M8 110 A 17 17 0 0 1 42 110"/><path d="M16 110 A 9 9 0 0 1 34 110"/></g>
        <g transform="translate(150 0)"><path d="M0 110 A 25 25 0 0 1 50 110"/><path d="M8 110 A 17 17 0 0 1 42 110"/><path d="M16 110 A 9 9 0 0 1 34 110"/></g>
        <g transform="translate(200 0)"><path d="M0 110 A 25 25 0 0 1 50 110"/><path d="M8 110 A 17 17 0 0 1 42 110"/><path d="M16 110 A 9 9 0 0 1 34 110"/></g>
        <g transform="translate(250 0)"><path d="M0 110 A 25 25 0 0 1 50 110"/><path d="M8 110 A 17 17 0 0 1 42 110"/><path d="M16 110 A 9 9 0 0 1 34 110"/></g>
        <g transform="translate(300 0)"><path d="M0 110 A 25 25 0 0 1 50 110"/><path d="M8 110 A 17 17 0 0 1 42 110"/><path d="M16 110 A 9 9 0 0 1 34 110"/></g>
        <g transform="translate(350 0)"><path d="M0 110 A 25 25 0 0 1 50 110"/><path d="M8 110 A 17 17 0 0 1 42 110"/><path d="M16 110 A 9 9 0 0 1 34 110"/></g>
      </g>

      <path d="M0 80 Q 12 70 24 80 T 48 80 T 72 80 T 96 80 T 120 80 T 144 80 T 168 80 T 192 80 T 216 80 T 240 80 T 264 80 T 288 80 T 312 80 T 336 80 T 360 80 T 384 80" opacity="0.7" stroke-width="1.2"/>
      <path d="M0 62 Q 14 52 28 62 T 56 62 T 84 62 T 112 62 T 140 62 T 168 62 T 196 62 T 224 62 T 252 62 T 280 62 T 308 62 T 336 62 T 364 62 T 392 62" opacity="0.5" stroke-width="1.1"/>
      <path d="M0 44 Q 18 32 36 44 T 72 44 T 108 44 T 144 44 T 180 44 T 216 44 T 252 44 T 288 44 T 324 44 T 360 44 T 396 44" opacity="0.32" stroke-width="1"/>
    </g>
  </symbol>

  <symbol id="om-coin" viewBox="0 0 100 100">
    <g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="50" cy="50" r="42"/>
      <circle cx="50" cy="50" r="36"/>
      <rect x="38" y="38" width="24" height="24"/>
      <text x="50" y="28" text-anchor="middle" font-family="Noto Serif SC, serif" font-size="11" font-weight="600" fill="currentColor" stroke="none">天</text>
      <text x="50" y="80" text-anchor="middle" font-family="Noto Serif SC, serif" font-size="11" font-weight="600" fill="currentColor" stroke="none">地</text>
      <text x="22" y="55" text-anchor="middle" font-family="Noto Serif SC, serif" font-size="11" font-weight="600" fill="currentColor" stroke="none">乾</text>
      <text x="78" y="55" text-anchor="middle" font-family="Noto Serif SC, serif" font-size="11" font-weight="600" fill="currentColor" stroke="none">坤</text>
    </g>
  </symbol>

  <symbol id="om-fan" viewBox="0 0 140 130">
    <g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <line x1="70" y1="110" x2="70" y2="122"/>
      <line x1="67" y1="122" x2="64" y2="127"/>
      <line x1="73" y1="122" x2="76" y2="127"/>

      <path d="M 14 96 A 56 56 0 0 1 126 96"/>

      <path d="M 38 102 A 32 32 0 0 1 102 102" opacity="0.5"/>

      <path d="M 25 99 A 45 45 0 0 1 115 99" opacity="0.35"/>

      <line x1="70" y1="110" x2="14" y2="96"/>
      <line x1="70" y1="110" x2="18" y2="75"/>
      <line x1="70" y1="110" x2="30" y2="56"/>
      <line x1="70" y1="110" x2="49" y2="44"/>
      <line x1="70" y1="110" x2="70" y2="40"/>
      <line x1="70" y1="110" x2="91" y2="44"/>
      <line x1="70" y1="110" x2="110" y2="56"/>
      <line x1="70" y1="110" x2="122" y2="75"/>
      <line x1="70" y1="110" x2="126" y2="96"/>

      <circle cx="70" cy="110" r="3.5" fill="currentColor"/>

    </g>
  </symbol>

  <symbol id="om-plum" viewBox="0 0 100 100">
    <g fill="currentColor">
      <g transform="translate(50 50)">
        <ellipse cx="0" cy="-18" rx="11" ry="20"/>
        <ellipse cx="0" cy="-18" rx="11" ry="20" transform="rotate(72)"/>
        <ellipse cx="0" cy="-18" rx="11" ry="20" transform="rotate(144)"/>
        <ellipse cx="0" cy="-18" rx="11" ry="20" transform="rotate(216)"/>
        <ellipse cx="0" cy="-18" rx="11" ry="20" transform="rotate(288)"/>
      </g>
    </g>
    <circle cx="50" cy="50" r="8" fill="#FFFFFF"/>
    <g transform="translate(50 50)">
      <g stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round">
        <line x1="0" y1="0" x2="0" y2="-13" transform="rotate(0)"/>
        <line x1="0" y1="0" x2="0" y2="-13" transform="rotate(72)"/>
        <line x1="0" y1="0" x2="0" y2="-13" transform="rotate(144)"/>
        <line x1="0" y1="0" x2="0" y2="-13" transform="rotate(216)"/>
        <line x1="0" y1="0" x2="0" y2="-13" transform="rotate(288)"/>
      </g>
      <g fill="currentColor">
        <circle cx="0" cy="-13" r="2"/>
        <circle cx="0" cy="-13" r="2" transform="rotate(72) translate(0 0)"/>
      </g>
      <g fill="currentColor">
        <circle cx="0" cy="-13" r="1.8"/>
        <circle cx="12.4" cy="-4" r="1.8"/>
        <circle cx="7.6" cy="10.5" r="1.8"/>
        <circle cx="-7.6" cy="10.5" r="1.8"/>
        <circle cx="-12.4" cy="-4" r="1.8"/>
      </g>
      <circle cx="0" cy="0" r="1.6" fill="currentColor"/>
    </g>
  </symbol>

  <symbol id="om-bamboo" viewBox="0 0 80 120">
    <g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <line x1="40" y1="8" x2="40" y2="116"/>
      <line x1="34" y1="28" x2="46" y2="28"/>
      <line x1="34" y1="56" x2="46" y2="56"/>
      <line x1="34" y1="84" x2="46" y2="84"/>
      <path d="M40 22 Q 56 14 70 6"/>
      <path d="M40 22 Q 52 18 66 14" opacity="0.6"/>
      <path d="M40 50 Q 24 44 10 36"/>
      <path d="M40 50 Q 28 48 14 44" opacity="0.6"/>
      <path d="M40 78 Q 56 72 72 64"/>
      <path d="M40 78 Q 52 76 64 72" opacity="0.6"/>
    </g>
  </symbol>

  <symbol id="om-lotus" viewBox="0 0 120 100">
    <g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M60 50 C 30 30 24 56 36 70"/>
      <path d="M60 50 C 90 30 96 56 84 70"/>
      <path d="M60 50 C 40 32 32 62 50 76"/>
      <path d="M60 50 C 80 32 88 62 70 76"/>
      <path d="M60 50 C 52 36 68 36 60 50"/>
      <path d="M60 50 C 52 36 68 36 60 50 Z" fill="currentColor" opacity="0.15" stroke="none"/>
      <line x1="12" y1="84" x2="108" y2="84" opacity="0.5"/>
      <path d="M16 90 Q 28 84 40 90 T 64 90 T 88 90 T 104 90" opacity="0.5"/>
    </g>
  </symbol>

  <symbol id="om-scroll" viewBox="0 0 100 110">
    <g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 24 Q 50 16 86 24"/>
      <line x1="18" y1="26" x2="18" y2="92"/>
      <line x1="28" y1="26" x2="28" y2="92"/>
      <line x1="38" y1="26" x2="38" y2="92"/>
      <line x1="48" y1="26" x2="48" y2="92"/>
      <line x1="58" y1="26" x2="58" y2="92"/>
      <line x1="68" y1="26" x2="68" y2="92"/>
      <line x1="78" y1="26" x2="78" y2="92"/>
      <line x1="82" y1="26" x2="82" y2="92"/>
      <circle cx="14" cy="24" r="3"/>
      <circle cx="86" cy="24" r="3"/>
      <path d="M14 92 Q 50 100 86 92"/>
      <line x1="22" y1="40" x2="22" y2="48" opacity="0.5"/>
      <line x1="32" y1="36" x2="32" y2="52" opacity="0.5"/>
      <line x1="42" y1="40" x2="42" y2="46" opacity="0.5"/>
      <line x1="52" y1="36" x2="52" y2="58" opacity="0.5"/>
      <line x1="62" y1="42" x2="62" y2="50" opacity="0.5"/>
      <line x1="72" y1="38" x2="72" y2="54" opacity="0.5"/>
      <line x1="50" y1="100" x2="50" y2="108" opacity="0.6"/>
    </g>
  </symbol>

  <symbol id="om-moon" viewBox="0 0 100 100">
    <g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <!-- symmetric crescent moon (about y=50) -->
      <path d="M 58 14 A 38 38 0 1 0 58 86 A 52 52 0 0 1 58 14 Z" fill="currentColor" stroke="none" opacity="0.12"/>
      <path d="M 58 14 A 38 38 0 1 0 58 86 A 52 52 0 0 1 58 14 Z"/>
      <circle cx="78" cy="32" r="1.8" fill="currentColor" stroke="none" opacity="0.55"/>
      <circle cx="82" cy="50" r="1.3" fill="currentColor" stroke="none" opacity="0.4"/>
      <circle cx="78" cy="68" r="1.8" fill="currentColor" stroke="none" opacity="0.55"/>
    </g>
  </symbol>

  <symbol id="om-scales" viewBox="0 0 100 110">
    <g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <line x1="50" y1="14" x2="50" y2="92"/>
      <rect x="40" y="92" width="20" height="6"/>
      <line x1="34" y1="98" x2="66" y2="98"/>
      <line x1="14" y1="22" x2="86" y2="22"/>
      <line x1="20" y1="24" x2="20" y2="40"/>
      <line x1="80" y1="24" x2="80" y2="40"/>
      <line x1="24" y1="40" x2="16" y2="40"/>
      <line x1="84" y1="40" x2="76" y2="40"/>
      <path d="M8 40 L 32 40 L 26 56 L 14 56 Z"/>
      <path d="M68 40 L 92 40 L 86 56 L 74 56 Z"/>
      <circle cx="50" cy="22" r="3" fill="currentColor"/>
      <path d="M46 14 L 54 14 L 50 8 Z" fill="currentColor"/>
    </g>
  </symbol>

  <symbol id="om-carriage" viewBox="0 0 140 100">
    <g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M44 50 L 44 70 L 88 70 L 88 50 Z"/>
      <path d="M40 50 Q 66 38 92 50"/>
      <line x1="50" y1="44" x2="50" y2="50"/>
      <line x1="66" y1="40" x2="66" y2="50"/>
      <line x1="82" y1="44" x2="82" y2="50"/>
      <circle cx="54" cy="78" r="10"/>
      <circle cx="80" cy="78" r="10"/>
      <line x1="54" y1="68" x2="54" y2="88"/>
      <line x1="44" y1="78" x2="64" y2="78"/>
      <line x1="80" y1="68" x2="80" y2="88"/>
      <line x1="70" y1="78" x2="90" y2="78"/>
      <line x1="44" y1="62" x2="20" y2="58"/>
      <path d="M20 58 Q 12 58 8 62 L 8 70 L 12 70 L 12 64 L 18 64 L 20 70 L 24 70 L 22 60 Z" fill="currentColor" stroke="none" opacity="0.5"/>
      <path d="M8 60 L 4 56"/>
      <line x1="98" y1="56" x2="120" y2="56" opacity="0.4"/>
      <line x1="100" y1="64" x2="128" y2="64" opacity="0.4"/>
      <line x1="98" y1="72" x2="118" y2="72" opacity="0.4"/>
    </g>
  </symbol>

  <symbol id="om-xi" viewBox="0 0 120 100">
    <g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <g transform="translate(8 18)">
        <line x1="6" y1="0" x2="42" y2="0"/>
        <line x1="6" y1="0" x2="6" y2="24"/>
        <line x1="42" y1="0" x2="42" y2="24"/>
        <line x1="0" y1="12" x2="48" y2="12"/>
        <line x1="0" y1="24" x2="48" y2="24"/>
        <line x1="6" y1="24" x2="6" y2="44"/>
        <line x1="42" y1="24" x2="42" y2="44"/>
        <line x1="6" y1="44" x2="42" y2="44"/>
        <line x1="12" y1="32" x2="36" y2="32"/>
        <line x1="24" y1="44" x2="24" y2="56"/>
      </g>
      <g transform="translate(64 18)">
        <line x1="6" y1="0" x2="42" y2="0"/>
        <line x1="6" y1="0" x2="6" y2="24"/>
        <line x1="42" y1="0" x2="42" y2="24"/>
        <line x1="0" y1="12" x2="48" y2="12"/>
        <line x1="0" y1="24" x2="48" y2="24"/>
        <line x1="6" y1="24" x2="6" y2="44"/>
        <line x1="42" y1="24" x2="42" y2="44"/>
        <line x1="6" y1="44" x2="42" y2="44"/>
        <line x1="12" y1="32" x2="36" y2="32"/>
        <line x1="24" y1="44" x2="24" y2="56"/>
      </g>
    </g>
  </symbol>

  <symbol id="om-peach" viewBox="0 0 100 100">
    <g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M 50 92
               C 22 92 12 70 18 50
               C 22 38 36 32 44 42
               C 44 36 46 28 50 22
               C 54 28 56 36 56 42
               C 64 32 78 38 82 50
               C 88 70 78 92 50 92 Z"/>
      <path d="M 50 22 Q 47 50 50 86" opacity="0.5"/>
      <path d="M 50 22 C 42 14 30 14 24 20 C 30 28 42 28 50 22 Z"/>
      <path d="M 28 20 Q 38 22 48 24" opacity="0.45"/>
      <path d="M 50 22 C 56 18 66 20 68 26 C 60 28 54 26 50 22 Z" opacity="0.85"/>
      <line x1="50" y1="22" x2="48" y2="12"/>
    </g>
  </symbol>

  <symbol id="om-huiwen" viewBox="0 0 240 32">
    <g fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="square" stroke-linejoin="miter">
      <g>
        <path d="M0 28 L 0 12 L 24 12 L 24 24 L 12 24 L 12 18 L 18 18"/>
        <path d="M30 28 L 30 12 L 54 12 L 54 24 L 42 24 L 42 18 L 48 18"/>
        <path d="M60 28 L 60 12 L 84 12 L 84 24 L 72 24 L 72 18 L 78 18"/>
        <path d="M90 28 L 90 12 L 114 12 L 114 24 L 102 24 L 102 18 L 108 18"/>
        <path d="M120 28 L 120 12 L 144 12 L 144 24 L 132 24 L 132 18 L 138 18"/>
        <path d="M150 28 L 150 12 L 174 12 L 174 24 L 162 24 L 162 18 L 168 18"/>
        <path d="M180 28 L 180 12 L 204 12 L 204 24 L 192 24 L 192 18 L 198 18"/>
        <path d="M210 28 L 210 12 L 234 12 L 234 24 L 222 24 L 222 18 L 228 18"/>
      </g>
      <line x1="0" y1="2" x2="240" y2="2"/>
      <line x1="0" y1="30" x2="240" y2="30"/>
    </g>
  </symbol>

  <symbol id="om-lattice" viewBox="0 0 100 100">
    <g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <rect x="6" y="6" width="88" height="88"/>
      <path d="M6 30 L 30 30 L 30 6"/>
      <path d="M30 30 L 50 50"/>
      <path d="M50 50 L 70 30 L 94 30"/>
      <path d="M70 30 L 70 6"/>
      <path d="M50 50 L 30 70 L 6 70"/>
      <path d="M30 70 L 30 94"/>
      <path d="M50 50 L 70 70 L 94 70"/>
      <path d="M70 70 L 70 94"/>
      <circle cx="30" cy="30" r="2" fill="currentColor"/>
      <circle cx="70" cy="30" r="2" fill="currentColor"/>
      <circle cx="30" cy="70" r="2" fill="currentColor"/>
      <circle cx="70" cy="70" r="2" fill="currentColor"/>
      <circle cx="50" cy="50" r="3" fill="currentColor"/>
    </g>
  </symbol>

  <symbol id="om-divider" viewBox="0 0 400 24">
    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <line x1="0" y1="12" x2="130" y2="12" stroke-width="0.8" opacity="0.6"/>
      <path d="M130 12 q 8 -8 16 0 t 16 0 t 16 0" stroke-width="1.2" opacity="0.7"/>
      <circle cx="200" cy="12" r="3" fill="currentColor" stroke="none"/>
      <circle cx="200" cy="12" r="6" stroke-width="0.6" opacity="0.5"/>
      <path d="M222 12 q 8 -8 16 0 t 16 0 t 16 0" stroke-width="1.2" opacity="0.7"/>
      <line x1="270" y1="12" x2="400" y2="12" stroke-width="0.8" opacity="0.6"/>
    </g>
  </symbol>

  <symbol id="om-bagua" viewBox="0 0 120 120">
    <g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="60" cy="60" r="56"/>
      <circle cx="60" cy="60" r="46"/>
      <g font-family="serif" font-size="14" fill="currentColor" stroke="none">
        <text x="60" y="14" text-anchor="middle">☰</text>
        <text x="60" y="118" text-anchor="middle">☷</text>
        <text x="10" y="65" text-anchor="middle">☵</text>
        <text x="110" y="65" text-anchor="middle">☲</text>
        <text x="24" y="28" text-anchor="middle">☴</text>
        <text x="96" y="28" text-anchor="middle">☱</text>
        <text x="24" y="105" text-anchor="middle">☶</text>
        <text x="96" y="105" text-anchor="middle">☳</text>
      </g>
      <path d="M60 30 A 30 30 0 0 1 60 90 A 15 15 0 0 0 60 60 A 15 15 0 0 1 60 30 Z" fill="currentColor"/>
      <circle cx="60" cy="45" r="3" fill="white"/>
      <circle cx="60" cy="75" r="3" fill="currentColor"/>
    </g>
  </symbol>

  <symbol id="om-flame" viewBox="0 0 60 100">
    <g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <!-- symmetric flame about x=30 -->
      <path d="M 30 6
               C 38 24 47 42 44 60
               C 42 76 37 86 30 95
               C 23 86 18 76 16 60
               C 13 42 22 24 30 6 Z"/>
      <path d="M 30 34
               C 35 46 39 56 37 67
               C 36 77 33 83 30 88
               C 27 83 24 77 23 67
               C 21 56 25 46 30 34 Z" opacity="0.5"/>
    </g>
  </symbol>

</defs>
`;

// Auto-inject defs into every page that includes this script
(function injectOrnaments() {
  function go() {
    if (document.getElementById('__om-defs')) return;
    const wrap = document.createElement('div');
    wrap.id = '__om-defs';
    wrap.setAttribute('aria-hidden', 'true');
    wrap.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden;pointer-events:none';
    wrap.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">${ORNAMENT_DEFS}</svg>`;
    document.body.insertBefore(wrap, document.body.firstChild);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', go);
  } else {
    go();
  }
})();
