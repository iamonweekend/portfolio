import React from "react";

export function RetroIllustration() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "460px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        viewBox="0 0 460 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "100%",
          height: "auto",
          overflow: "visible",
        }}
      >
        {/* Subtle Background Halftone / Grid Frame */}
        <rect
          x="12"
          y="12"
          width="436"
          height="356"
          fill="#F5F5F0"
          stroke="#000000"
          strokeWidth="2.5"
          strokeDasharray="4 4"
        />

        {/* Small Retro Window on top right */}
        <g transform="translate(290, 24)">
          <rect
            x="0"
            y="0"
            width="140"
            height="90"
            fill="#FFFFFF"
            stroke="#000000"
            strokeWidth="2.5"
          />
          <rect
            x="0"
            y="0"
            width="140"
            height="20"
            fill="#D9D9D4"
            stroke="#000000"
            strokeWidth="2.5"
          />
          {/* Window dots */}
          <circle cx="12" cy="10" r="3.5" fill="#000000" />
          <circle cx="24" cy="10" r="3.5" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5" />
          <text
            x="50"
            y="14"
            fontFamily="monospace"
            fontSize="9"
            fontWeight="bold"
            fill="#000000"
          >
            vansh.exe
          </text>
          {/* Inner content */}
          <text x="14" y="42" fontFamily="monospace" fontSize="10" fill="#000000">
            &gt; STATUS: OK
          </text>
          <text x="14" y="60" fontFamily="monospace" fontSize="10" fill="#000000">
            &gt; BUILD: 2026
          </text>
          <rect x="14" y="68" width="8" height="12" fill="#000000" />
        </g>

        {/* CRT Monitor Main Body */}
        <g transform="translate(60, 40)">
          {/* Monitor Outer Shell (Thick CRT Bevel) */}
          <rect
            x="20"
            y="10"
            width="250"
            height="200"
            rx="6"
            fill="#FFFFFF"
            stroke="#000000"
            strokeWidth="3"
          />
          {/* Shadow line under top rim */}
          <line x1="20" y1="20" x2="270" y2="20" stroke="#000000" strokeWidth="1.5" />

          {/* CRT Screen Bezel (Dark Border) */}
          <rect
            x="36"
            y="30"
            width="218"
            height="145"
            rx="8"
            fill="#D9D9D4"
            stroke="#000000"
            strokeWidth="2.5"
          />

          {/* Inner Glass CRT Screen */}
          <rect
            x="46"
            y="40"
            width="198"
            height="125"
            rx="6"
            fill="#FFFFFF"
            stroke="#000000"
            strokeWidth="2"
          />

          {/* Screen Content: Retro smiling computer & prompt */}
          <g transform="translate(60, 52)">
            <text x="0" y="16" fontFamily="monospace" fontSize="11" fontWeight="bold" fill="#000000">
              C:\VANSH&gt; HELLO_
            </text>

            {/* Retro Smiley Face on Screen */}
            <rect x="36" y="32" width="70" height="52" rx="4" fill="#F5F5F0" stroke="#000000" strokeWidth="2" />
            {/* Eyes */}
            <circle cx="56" cy="50" r="4.5" fill="#000000" />
            <circle cx="86" cy="50" r="4.5" fill="#000000" />
            {/* Smile */}
            <path
              d="M 58 66 Q 71 78 84 66"
              stroke="#000000"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          {/* Monitor Lower Controls & Badge */}
          <rect x="36" y="184" width="40" height="12" fill="#D9D9D4" stroke="#000000" strokeWidth="1.5" />
          <text x="42" y="193" fontFamily="monospace" fontSize="8" fontWeight="bold" fill="#000000">
            VANSH
          </text>
          {/* Power button & LED */}
          <circle cx="236" cy="190" r="4" fill="#000000" />
          <circle cx="248" cy="190" r="3" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5" />

          {/* Monitor Neck Stand */}
          <path
            d="M 120 210 L 110 245 L 180 245 L 170 210 Z"
            fill="#D9D9D4"
            stroke="#000000"
            strokeWidth="2.5"
          />

          {/* Monitor Base Plate */}
          <rect
            x="85"
            y="245"
            width="120"
            height="16"
            rx="2"
            fill="#FFFFFF"
            stroke="#000000"
            strokeWidth="2.5"
          />
          {/* Swivel detail */}
          <line x1="95" y1="253" x2="195" y2="253" stroke="#000000" strokeWidth="1.5" />
        </g>

        {/* 3.5" Floppy Disk (Resting on Left) */}
        <g transform="translate(36, 235)">
          {/* Floppy Outer Body */}
          <path
            d="M 0 0 L 68 0 L 78 10 L 78 78 L 0 78 Z"
            fill="#FFFFFF"
            stroke="#000000"
            strokeWidth="2.5"
          />
          {/* Metal Shutter at top */}
          <rect x="14" y="0" width="42" height="30" fill="#D9D9D4" stroke="#000000" strokeWidth="2" />
          <rect x="22" y="6" width="10" height="18" rx="2" fill="#000000" />
          {/* Write Protect Notch */}
          <rect x="66" y="66" width="6" height="6" fill="#000000" />
          {/* Floppy Paper Label */}
          <rect x="12" y="38" width="54" height="34" fill="#F5F5F0" stroke="#000000" strokeWidth="1.5" />
          <line x1="18" y1="46" x2="60" y2="46" stroke="#000000" strokeWidth="1.5" />
          <line x1="18" y1="54" x2="52" y2="54" stroke="#000000" strokeWidth="1.5" />
          <text x="18" y="65" fontFamily="monospace" fontSize="7" fontWeight="bold" fill="#000000">
            v1.44 MB
          </text>
        </g>

        {/* Retro Mechanical Keyboard */}
        <g transform="translate(130, 290)">
          {/* Keyboard Shell */}
          <polygon
            points="10,0 220,0 234,48 0,48"
            fill="#FFFFFF"
            stroke="#000000"
            strokeWidth="2.5"
          />
          {/* Key Rows (Block grid) */}
          {/* Row 1 */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <rect
              key={`k1-${i}`}
              x={18 + i * 20}
              y={6}
              width="15"
              height="8"
              fill="#D9D9D4"
              stroke="#000000"
              strokeWidth="1.5"
            />
          ))}
          {/* Row 2 */}
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <rect
              key={`k2-${i}`}
              x={14 + i * 21}
              y={18}
              width="16"
              height="9"
              fill="#D9D9D4"
              stroke="#000000"
              strokeWidth="1.5"
            />
          ))}
          {/* Spacebar Row */}
          <rect x="55" y="31" width="115" height="11" fill="#D9D9D4" stroke="#000000" strokeWidth="1.5" />
          <rect x="18" y="31" width="28" height="11" fill="#D9D9D4" stroke="#000000" strokeWidth="1.5" />
          <rect x="180" y="31" width="38" height="11" fill="#D9D9D4" stroke="#000000" strokeWidth="1.5" />
        </g>

        {/* Retro Corded Mouse */}
        <g transform="translate(382, 300)">
          {/* Mouse Cable winding towards computer */}
          <path
            d="M 22 0 C 15 -25, 45 -40, 20 -70 C 0 -95, -15 -80, -25 -100"
            stroke="#000000"
            strokeWidth="2"
            fill="none"
          />
          {/* Mouse Shell */}
          <rect
            x="4"
            y="0"
            width="36"
            height="55"
            rx="12"
            fill="#FFFFFF"
            stroke="#000000"
            strokeWidth="2.5"
          />
          {/* Button Splitter Line */}
          <line x1="22" y1="0" x2="22" y2="22" stroke="#000000" strokeWidth="2" />
          <line x1="4" y1="22" x2="40" y2="22" stroke="#000000" strokeWidth="2" />
        </g>

        {/* Playful Pixel Stars & Retro Accents */}
        <g transform="translate(32, 70)">
          <path d="M 10 0 L 12 8 L 20 10 L 12 12 L 10 20 L 8 12 L 0 10 L 8 8 Z" fill="#000000" />
        </g>
        <g transform="translate(410, 160)">
          <path d="M 8 0 L 10 6 L 16 8 L 10 10 L 8 16 L 6 10 L 0 8 L 6 6 Z" fill="#000000" />
        </g>
        <g transform="translate(370, 230)">
          <polygon points="6,0 12,12 0,12" fill="#000000" />
        </g>
      </svg>
    </div>
  );
}
