const splashSvg = `<svg class="splash-svg" xmlns="http://www.w3.org/2000/svg" fill="#F2496B" width="236" height="236" viewBox="0 0 236 236"><path d="M113.33 95.33C105.56 77.16 68.31 63.5 40.25 63.5c-23.8 0-40.08 8.27-40.08 26.2 0 13.9 12.26 23.6 22.4 23.6 22.16 0 34.88-21.47 63.41-21.47 10.14 0 18.62 4.47 18.62 11.1 0 2.83-1.9 4.94-4.72 4.94-2.36 0-4.11-1.19-8.5-1.19-28.77 0-76.85 41.06-76.85 66.78 0 12.74 10.14 23.6 23.1 23.6 8.73 0 17.22-4.72 21-12.99 8.72-17.23 4.02-25.48 16.73-52.6 4.24-8.97 11.78-13.92 17.67-13.92 3.77 0 6.6 2.36 6.6 5.44 0 7.08-17.44 7.32-17.44 43.64 0 26.2 7.08 69.36 33.24 69.36 12.73 0 22.64-10.6 22.64-23.12 0-3.55-.7-7.08-2.13-10.15-8.02-17.46-21-20.52-33.72-47.9-1.64-3.54-2.59-7.08-2.59-10.39 0-6.6 2.6-10.15 7.55-10.15 3.08 0 5.2 2.13 5.2 5.2 0 29.96 57.52 60.62 81.57 60.62 13.2 0 24.05-10.15 24.05-22.65 0-13.21-10.84-24.06-24.52-24.06-12.5 0-21 1.41-31.83 1.41-12.73 0-38.44.24-38.44-14.86 0-4.02 3.08-5.66 4.95-5.66 6.36 0 5.66 8.72 30.41 8.72 26.64 0 77.33-21.95 77.33-49.07 0-12.99-10.61-23.6-23.1-23.6-5.2 0-10.15 1.9-14.4 5.2-14.85 11.55-11.3 29.72-35.82 47.66-5.67 4.47-11.31 6.13-16.73 6.13-3.3 0-9.42-.94-9.42-6.6 0-2.6 1.64-4.25 4.24-4.73 17.92-3.07 45.03-40.1 45.03-93.43a23.15 23.15 0 0 0-23.1-23.12 23.15 23.15 0 0 0-23.11 23.12c0 18.63 10.83 31.85 10.83 62.06 0 12.5-7.07 21.24-13.91 21.24-2.59 0-4.95-2.13-4.95-4.72s4.02-7.08 4.02-16.99c0-30.2-34.89-86.11-59.4-86.11-14.87 0-23.12 11.33-23.12 22.65 0 7.08 3.08 14.16 8.73 18.4 14.38 11.8 28.77 13.69 52.34 32.33 6.61 5.2 10.14 12.27 10.14 18.18 0 4.72-2.13 7.55-5.89 7.55-2.36 0-4.02-1.42-4.95-3.78h-.04l.04-.03Z"/></svg>`;

const gympassSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="#F46152" fill-rule="evenodd" width="355" height="73" viewBox="0 0 129 24"><path d="m14.81 6.64 3.39-1.91C17.04 1.76 14.16 0 10.3 0 3.94 0 0 4.06 0 9.97 0 16.43 5.21 20 10.18 20c4.56 0 7.54-2.2 8.82-4.03V9.02H9.2v3.2h6.14l-.02 2.2s-1.8 1.78-5.07 1.78c-3.5 0-5.51-2.45-5.51-6.33 0-3.9 2-6.36 5.46-6.36 2.06 0 3.59 1.27 4.61 3.13ZM21.1 23.68v-3.13c.74.12 1.23.15 1.74.15 1.54 0 2.7-.52 3.2-1.56l.1-.37-6.09-12.3h4.84L27.96 14c.24.55.31.87.41 1.38h.08c.08-.44.18-.76.39-1.35l2.94-7.57h4.53l-5.78 12.9c-1.44 3.2-3.56 4.48-7.25 4.48-.57 0-1.46-.05-2.18-.17ZM41.95 8.93V6.47H37.7V18.8h4.38V12.4c0-2 1.02-3.16 2.74-3.16 1.64 0 2.46 1 2.46 3.01v6.54h4.37v-6.46c0-1.95 1.03-3.09 2.74-3.09 1.64 0 2.46 1 2.46 3.01v6.54h4.38v-7.3c0-3.48-1.79-5.4-5-5.4-2.24 0-3.96.96-5.01 2.86-.77-1.92-2.28-2.86-4.53-2.86-2.28 0-3.87.94-4.74 2.83Z"/><path d="M67.94 8.54V6.47H63.7V23.6h4.38v-6.54a6.15 6.15 0 0 0 4.92 2.1c3.9 0 6.55-2.62 6.55-6.59 0-3.92-2.53-6.48-6.37-6.48-2.26 0-4.18.84-5.23 2.44Zm3.59.4c2.2 0 3.48 1.33 3.48 3.64 0 2.32-1.33 3.75-3.5 3.75-2.13 0-3.54-1.35-3.54-3.43v-.51c0-2.2 1.4-3.46 3.56-3.46ZM81.23 15.42c0-1.14.5-2.07 1.39-2.69.9-.59 2.17-.96 4.45-1.18l4.77-.42v-.37c0-1.38-.98-2.05-2.72-2.05-1.76 0-2.81.67-3 1.9h-4.48c.34-2.81 3.18-4.51 7.5-4.51 4.87 0 7.1 1.7 7.1 5.28v3.82c0 1.58.1 2.73.31 3.6h-4.33c-.1-.6-.18-1.36-.18-2.1-.84 1.55-2.84 2.47-5.56 2.47-3.22 0-5.25-1.43-5.25-3.75Zm10.71-1.5v-.8l-3.53.35c-1.95.22-2.7.72-2.7 1.68 0 .91.93 1.45 2.44 1.45 2.25 0 3.79-1.06 3.79-2.68Z"/><path d="m97.78 16.23 2.36-1.92c1.2 1.38 3.02 2.12 5.68 2.12 1.8 0 2.59-.37 2.59-1.13 0-.7-.39-.97-1.85-1.11l-3.4-.32c-3.13-.37-4.61-1.63-4.61-3.8 0-2.52 2.4-3.97 6.7-3.97 3.1 0 5.62.84 7.05 2.34l-2.05 2.02c-1.3-1.13-2.92-1.67-5.22-1.67-1.7 0-2.49.32-2.49 1.03 0 .6.46.89 1.64 1.01l3.77.37c3.15.35 4.4 1.6 4.4 3.78 0 2.6-2.28 4.19-6.73 4.19-3.56 0-6.25-1.01-7.84-2.94ZM115.86 14.31l-2.36 1.92c1.6 1.93 4.28 2.94 7.84 2.94 4.46 0 6.74-1.58 6.74-4.2 0-2.16-1.26-3.42-4.4-3.77l-3.77-.37c-1.18-.12-1.64-.42-1.64-1 0-.72.8-1.04 2.48-1.04 2.3 0 3.92.54 5.23 1.67l2.05-2.02c-1.44-1.5-3.95-2.34-7.05-2.34-4.3 0-6.7 1.45-6.7 3.97 0 2.17 1.48 3.43 4.6 3.8l3.4.32c1.47.14 1.85.42 1.85 1.1 0 .77-.8 1.14-2.58 1.14-2.67 0-4.49-.74-5.69-2.12Z"/></svg>`;

const isBecomingSvg = `<svg width="306" height="65" viewBox="0 0 306 65" fill="#1D1D1F" xmlns="http://www.w3.org/2000/svg"><path d="M0.0909045 51V15.3901H8.869V51H0.0909045ZM0.0909045 11.2676V5.15487C0.0909045 2.45391 1.61908 0.961281 4.32003 0.961281H4.67542C7.41191 0.961281 8.90454 2.45391 8.90454 5.15487V11.2676H0.0909045ZM26.1009 51.6397C17.8204 51.6397 13.0226 47.6238 12.7028 40.1962H20.3081C20.6279 43.9278 22.6181 45.7758 26.2075 45.7758C29.3349 45.7758 31.1119 44.3542 31.1119 41.7599V41.1202C31.1119 39.13 30.2234 38.0994 27.0605 37.2109L21.4809 35.6472C15.7946 34.119 13.1292 31.0627 13.1292 25.7674V24.95C13.1292 18.6241 17.8914 14.7504 25.7811 14.7504C33.3864 14.7504 38.2907 18.1266 38.2907 23.1731C38.2907 25.3054 36.9758 26.5137 34.6658 26.5137C32.8533 26.5137 31.3607 25.6253 30.4011 23.7772C29.5482 21.5383 28.0911 20.6143 25.5323 20.6143C22.6536 20.6143 20.9833 21.8937 20.9833 24.2037V24.5591C20.9833 26.5848 21.9073 27.651 24.6083 28.3973L29.9036 29.8544C36.3006 31.5247 39.0015 34.51 39.0015 39.8053V40.907C39.0015 47.6949 34.2038 51.6397 26.1009 51.6397ZM53.7657 51V0.534816H62.5438V20.5432C64.3918 16.7405 67.6969 14.7148 72.1037 14.7148C78.8206 14.7148 82.8009 19.3704 82.8009 27.3311V38.9523C82.8009 46.913 78.8206 51.6042 72.1037 51.6042C67.0928 51.6042 63.5389 48.9387 61.9396 44.1055V51H53.7657ZM62.3661 31.4892V34.8298C62.3661 41.2268 64.6761 44.8162 68.8342 44.8162C71.9971 44.8162 73.8807 42.6839 73.8807 38.9523V27.26C73.8807 23.564 71.9971 21.4317 68.8342 21.4317C64.6761 21.4317 62.3661 25.0566 62.3661 31.4892ZM100.565 51.6397C91.5024 51.6397 86.2427 46.4155 86.2427 37.4952V28.8948C86.2427 19.939 91.3603 14.7504 100.316 14.7504C109.023 14.7504 114.141 19.9746 114.141 28.8948V35.2207H95.1274V39.2011C95.1274 42.9327 97.1531 45.1716 100.671 45.1716C104.225 45.1716 105.931 43.3947 106.18 39.592H113.785C113.323 47.375 108.49 51.6397 100.565 51.6397ZM95.0918 29.9965H105.576V26.9757C105.576 23.2797 103.728 21.1474 100.352 21.1474C96.9754 21.1474 95.0918 23.3152 95.0918 26.9047V29.9965ZM131.149 51.6397C122.335 51.6397 117.253 46.4155 117.253 37.4242V28.9659C117.253 19.9035 122.3 14.7504 131.007 14.7504C138.434 14.6437 143.907 19.406 143.801 25.5542C143.801 27.8287 142.379 29.1436 139.927 29.1436C137.652 29.1436 136.124 28.0419 135.698 25.874C135.129 22.7111 133.53 21.2184 130.936 21.2184C127.915 21.2184 126.138 23.3508 126.138 27.0823V39.0945C126.138 42.8971 127.986 45.1005 131.113 45.1005C134.525 45.1005 136.266 43.1815 136.515 38.4548H144.12C143.943 47.4106 139.109 51.6397 131.149 51.6397ZM161.025 51.6397C151.962 51.6397 146.667 46.4155 146.667 37.4597V28.9304C146.667 19.939 151.962 14.7504 161.025 14.7504C170.052 14.7504 175.382 19.939 175.382 28.9304V37.4597C175.382 46.4155 170.052 51.6397 161.025 51.6397ZM155.552 27.2956V39.0945C155.552 42.8971 157.577 45.1005 161.025 45.1005C164.472 45.1005 166.462 42.8971 166.462 39.0945V27.2956C166.462 23.4929 164.472 21.254 161.025 21.254C157.577 21.254 155.552 23.4929 155.552 27.2956ZM215.93 51V26.4071C215.93 23.5995 214.437 22.0358 211.771 22.0358C208.644 22.0358 206.618 24.0971 206.618 27.4022V51H197.84V26.4071C197.84 23.5995 196.348 22.0358 193.647 22.0358C190.555 22.0358 188.529 24.0971 188.529 27.4022V51H179.751V15.3901H187.96V21.1829C189.346 17.2381 192.971 14.7504 197.698 14.7504C202.283 14.7504 205.41 17.167 206.298 21.3251C207.578 17.3092 211.132 14.7504 215.787 14.7504C221.225 14.7504 224.672 18.2687 224.672 23.9549V51H215.93ZM229.988 51V15.3901H238.767V51H229.988ZM229.988 11.2676V5.15487C229.988 2.45391 231.517 0.961281 234.218 0.961281H234.573C237.309 0.961281 238.802 2.45391 238.802 5.15487V11.2676H229.988ZM244.271 51V15.3901H252.48V21.3251C253.191 19.3704 254.47 17.7712 256.283 16.5628C258.095 15.3545 260.192 14.7504 262.573 14.7504C268.153 14.7504 271.742 18.3753 271.742 24.3459V51H262.964V26.4071C262.964 23.564 261.329 22.0358 258.486 22.0358C255.217 22.0358 253.049 24.1682 253.049 27.722V51H244.271ZM289.277 41.9021H289.206H283.698C282.098 41.9021 281.281 42.5418 281.281 43.8567C281.281 45.1716 282.098 45.8113 283.698 45.8113H296.314C302.178 45.8113 305.483 48.9743 305.483 54.4117V55.4779C305.483 61.022 302.036 64.5048 296.314 64.5048H281.494C277.052 64.5048 274.351 62.2303 274.351 58.4987C274.351 55.5134 276.092 53.4166 279.078 52.7059C276.803 51.5686 275.453 49.4008 275.453 46.842C275.453 43.0038 277.905 40.3739 281.779 39.983C278.545 37.9928 276.697 34.6877 276.697 30.6718V25.9451C276.697 19.3704 281.814 14.7504 289.277 14.7504C290.912 14.7504 292.476 14.9636 293.968 15.3901H305.376V21.1829H300.721C301.503 22.64 301.894 24.2037 301.894 25.9451V30.6718C301.894 37.2465 296.705 41.9021 289.277 41.9021ZM280.25 56.3664V56.7218C280.25 58.4632 281.281 59.4582 283.165 59.4582H295.461C297.345 59.4582 298.411 58.5342 298.411 56.7218V56.3664C298.411 54.5539 297.416 53.5943 295.461 53.5943H283.165C281.281 53.5943 280.25 54.5539 280.25 56.3664ZM285.013 24.9145V31.7379C285.013 34.7232 286.612 36.5001 289.277 36.5001C291.943 36.5001 293.506 34.7232 293.506 31.7379V24.9145C293.506 21.9292 291.943 20.1878 289.277 20.1878C286.612 20.1878 285.013 21.9292 285.013 24.9145Z"/></svg>`;

const wellhubSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="#F2496B" width="582" height="106" viewBox="0 0 582 106"><path d="m529.88 58.43.06-.02a1.8 1.8 0 0 1 1.71.25c13.1 9.9 39.32-2.18 46.88-9.92a10.05 10.05 0 0 0 2.75-8.83 10.21 10.21 0 0 0-5.6-7.45l-1.67-.8.06.16c-4.27-1.34-9.05.46-12.28 4.74l-1.9 2.58c-4.48 6.16-11.97 16.47-18.84 17.53a6.93 6.93 0 0 1-5.35-1.34 1.84 1.84 0 0 1-.66-2.07l.02-.06c.22-.64.7-1.1 1.28-1.25 15.82-4.18 22.52-31.82 21.12-42.37a10.1 10.1 0 0 0-5.29-7.63 10.37 10.37 0 0 0-9.37-.3l-.21.1c-4.66 2.14-6.75 7.44-5.23 13.2l.87 3.06c2.75 9.61 7.33 25.69-1.8 28.66a2.1 2.1 0 0 1-2.36-.8l-.07-.09a1.93 1.93 0 0 1-.18-1.83c6.22-14.83-11.37-37.06-20.45-42.47a10.33 10.33 0 0 0-9.31-.68 10.19 10.19 0 0 0-6.11 7.07l-.05.22c-1.2 4.93 1.68 9.85 7.18 12.25l2.99 1.26c9.39 3.9 25.08 10.43 21.46 19.42a2.04 2.04 0 0 1-2.04 1.21 1.97 1.97 0 0 1-1.63-1c-7.8-14.14-36.4-14.41-46.4-10.75a10.15 10.15 0 0 0-6.34 6.78 10.1 10.1 0 0 0 1.79 9.13l.13.17c3.15 4 8.84 4.85 14.18 2.1l2.84-1.53c9-4.84 24.06-12.95 28.83-4.33.38.68.27 1.55-.29 2.16l-.06.07c-.47.5-1.15.72-1.83.6-16.02-2.82-34.12 19.11-37.46 29.13a10 10 0 0 0 1.42 9.15 10.34 10.34 0 0 0 8.32 4.3h.35c5.07 0 9.22-3.86 10.35-9.64l.58-3.16c1.35-7.56 3.6-20.23 9.45-23.99a7 7 0 0 1 5.73-.85c.6.15 1.1.68 1.18 1.32l.03.17c.1.57-.14 1.16-.62 1.55-12.68 10.43-6.61 38.38-.64 47.38a10.26 10.26 0 0 0 8.68 4.62c3.13 0 6.02-1.35 8.04-3.8l.12-.14c3.25-3.92 2.82-9.6-1.1-14.11a383.4 383.4 0 0 0-2.11-2.4c-5.15-5.76-13.77-15.4-13.1-22.28.19-2 1.14-3.62 2.9-4.96.53-.4 1.3-.44 1.9-.1.53.31.86.89.88 1.53.31 16.32 26.23 29.05 37.07 30.06a10.32 10.32 0 0 0 11.1-12.35l-.05-.23c-1.08-4.96-5.8-8.15-11.84-7.97-.96.03-2.04.09-3.23.15-7.75.38-20.71 1.02-25.74-3.75a6.8 6.8 0 0 1-2.15-5.3c0-.68.46-1.28 1.13-1.52l-.02-.01ZM.57 38.18h19.4l9.65 24.23a3.68 3.68 0 0 0 6.84.01l9.8-24.24H63.5l10.64 24.74a3.69 3.69 0 0 0 6.83-.1l9.66-24.64h18.78L86.75 89.63H69.22L57.94 63.55a3.69 3.69 0 0 0-6.79.04L40.21 89.63H23L.57 38.18ZM106.07 64.05c0-16.06 14.51-27.34 36.32-27.34 21.81 0 35.07 11.8 35.07 27.56v3.02h-48.53a2.77 2.77 0 0 0-2.52 3.9c2.33 5.1 8.27 8 16.81 8 6.89 0 12-2.1 14.92-5.01.63-.63 1.16-1.26 1.57-1.89L176.93 75c-.42.95-1.04 1.89-1.77 2.72-6.16 8.66-17.32 13.88-32.24 13.88-22.02 0-36.84-10.96-36.84-27.56v.01Zm48.3-6.25a2.77 2.77 0 0 0 2.03-4.65c-2.74-3-7.42-4.85-13.7-4.85-6.27 0-11.14 1.76-14.14 4.88-1.67 1.72-.36 4.62 2.05 4.62h23.76ZM182.66 16.59h18.99v73.04h-18.99V16.59ZM210.83 16.59h18.99v73.04h-18.99V16.59ZM239 16.59h18.99v24.08a2.76 2.76 0 0 0 4.56 2.1c4.56-3.91 10.64-6.04 18.19-6.04 14.92 0 24.1 8.55 24.1 23.79v29.1h-18.78V63.45c0-8.67-4.9-13.36-13.46-13.36-9.18 0-14.61 5.63-14.61 14.93v24.63h-19V16.58ZM311.43 67.3V38.17h18.89v26.14a13.4 13.4 0 0 0 13.22 13.4c9.22.1 14.84-5.54 14.84-14.92V38.17h18.9v51.45H358.7v-.87c0-3.1-3.54-4.74-6-2.87-4.43 3.37-10.12 5.2-17.06 5.2-15.03 0-24.21-8.56-24.21-23.8v.01ZM404.11 89.26v.37h-18.57V16.59h18.99V40.8a2.76 2.76 0 0 0 4.53 2.12c4.84-4.03 11.74-6.4 19.79-6.4 17.94 0 30.26 11.27 30.26 27.65S446.59 91.6 428.53 91.6c-7.45 0-13.81-2-18.57-5.43-2.44-1.76-5.85.06-5.85 3.07Zm17.75-10.48c10.85 0 17.43-5.63 17.43-14.61s-6.37-14.51-17.22-14.51c-10.85 0-17.84 5.74-17.84 14.6 0 8.88 6.98 14.52 17.63 14.52Z"/></svg>`;

const comingMaySvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="#000" width="252" height="39" viewBox="0 0 252 39"><path d="M15.31 20.94h5.1c-.24 6.83-3.7 10.05-9.73 10.05C4.18 31 .34 27.1.34 20.31v-8.73C.34 4.78 4.2.8 10.6.8c3.6 0 6.3 1.3 8.07 3.6a7.35 7.35 0 0 1 1.62 4.58c0 1.62-.9 2.54-2.65 2.54-1.53 0-2.58-.76-2.83-2.38-.36-2.58-1.83-3.95-4.25-3.95-2.92 0-4.5 1.85-4.5 5.32v10.75c0 3.38 1.72 5.34 4.65 5.34 2.85 0 4.41-1.7 4.6-5.66Zm15.63 10.05c-5.36 0-8.5-3.09-8.5-8.39v-5.04c0-5.32 3.14-8.4 8.5-8.4 5.34 0 8.5 3.08 8.5 8.4v5.04c0 5.3-3.16 8.4-8.5 8.4ZM27.7 16.6v6.98c0 2.25 1.2 3.55 3.24 3.55s3.22-1.3 3.22-3.55v-6.98c0-2.25-1.18-3.58-3.22-3.58s-3.24 1.33-3.24 3.58ZM63.84 30.6V16.06c0-1.66-.88-2.58-2.46-2.58-1.85 0-3.04 1.22-3.04 3.17v13.96h-5.2V16.06c0-1.66-.88-2.58-2.48-2.58-1.83 0-3.03 1.22-3.03 3.17v13.96h-5.19V9.54h4.86v3.43c.82-2.33 2.96-3.8 5.76-3.8 2.71 0 4.56 1.43 5.09 3.89.75-2.38 2.86-3.9 5.61-3.9 3.22 0 5.26 2.09 5.26 5.45v16h-5.18Zm8.74 0V9.54h5.2v21.07h-5.2Zm0-23.5V3.49c0-1.6.9-2.48 2.5-2.48h.22c1.61 0 2.5.88 2.5 2.48V7.1h-5.22Zm8.87 23.5V9.54h4.86v3.52a5.67 5.67 0 0 1 2.25-2.82 6.55 6.55 0 0 1 3.72-1.07c3.3 0 5.43 2.14 5.43 5.67v15.77h-5.2V16.06c0-1.68-.96-2.58-2.65-2.58-1.93 0-3.21 1.26-3.21 3.36v13.77h-5.2Zm27.05-5.38h-3.3c-.95 0-1.43.38-1.43 1.16 0 .77.48 1.15 1.43 1.15h7.47c3.46 0 5.42 1.87 5.42 5.1v.62c0 3.28-2.04 5.34-5.42 5.34h-8.77c-2.63 0-4.23-1.34-4.23-3.55 0-1.77 1.03-3 2.8-3.43a3.8 3.8 0 0 1-2.15-3.47c0-2.27 1.45-3.82 3.75-4.06a6.25 6.25 0 0 1-3.01-5.5v-2.8c0-3.9 3.03-6.62 7.44-6.62.97 0 1.9.12 2.78.37h6.75v3.43h-2.76c.47.86.7 1.79.7 2.82v2.8c0 3.89-3.07 6.64-7.47 6.64Zm-5.34 8.56v.2c0 1.04.61 1.63 1.73 1.63h7.27c1.12 0 1.75-.55 1.75-1.62v-.21c0-1.08-.6-1.64-1.75-1.64h-7.27c-1.12 0-1.73.56-1.73 1.64Zm2.82-18.61v4.04c0 1.76.94 2.81 2.52 2.81s2.5-1.05 2.5-2.81v-4.04c0-1.77-.92-2.8-2.5-2.8s-2.52 1.03-2.52 2.8Zm21.48 15.43V1.18h7.84l5.2 20.9 5.19-20.9h7.84V30.6h-5.03V6.81l-5.84 22.12c-.28 1.11-.95 1.68-1.98 1.68h-.52c-1 0-1.7-.57-1.98-1.68L132.4 6.85v23.76h-4.94Zm40.23 0v-3.2c-.7 2.26-2.72 3.58-5.51 3.58-3.43 0-5.51-1.95-5.51-5.15v-1.66c0-2.7 1.5-4.5 4.5-5.11l5.05-1.1c.77-.16 1.13-.52 1.13-1.21v-1.41c0-1.62-.9-2.53-2.56-2.53-1.75 0-2.72.89-2.99 2.67-.31 1.2-1.16 1.8-2.5 1.8-1.45 0-2.25-.79-2.25-2.3 0-3.36 3.05-5.8 7.9-5.8 4.71 0 7.55 2.14 7.55 5.78V30.6h-4.81Zm-5.91-6.81v1.68c0 1.41.88 2.21 2.4 2.21 1.87 0 3.17-1.26 3.17-3.26v-4.2c-.23.27-.65.48-1.26.63l-2.38.52c-1.4.34-1.93 1.07-1.93 2.42Zm19.57 14.8h-4.18c-1.01 0-1.54-.54-1.54-1.53v-.78c0-.99.53-1.54 1.54-1.54h2.92c.93 0 1.45-.42 1.68-1.34l.76-3.2h-3.07l-5.17-20.67h5.2l3.8 17.75 3.82-17.75h5.03l-6.18 25.07c-.63 2.67-2.17 4-4.6 4Zm28.58-7.6c-6.08 0-9.6-3.71-9.6-10.14V10.74c0-6.3 3.52-9.94 9.51-9.94 3.01 0 5.5.9 7 2.52a5.2 5.2 0 0 1 1.5 3.72c0 1.5-.78 2.23-2.36 2.23-1.36 0-2.18-.6-2.71-1.8-.6-1.8-1.68-2.53-3.51-2.53-2.59 0-3.91 1.47-3.91 4.4v4.87c1.11-1.53 3.07-2.44 5.57-2.44 4.65 0 7.5 3.05 7.5 7.82v2.9c0 5.28-3.42 8.5-9 8.5Zm-4.12-10.23v.97c0 3.26 1.57 5.09 4.18 5.09 2.33 0 3.66-1.43 3.66-3.87v-3.39c0-2.5-1.33-3.95-3.62-3.95-2.63 0-4.22 1.87-4.22 5.15Zm26.03 9.84h-3.8c-2.88 0-4.44-1.55-4.44-4.41V13.1h-3.22V9.54h3.22v-5.5c0-1.62.9-2.5 2.59-2.5 1.68 0 2.6.88 2.6 2.5v5.5h4.42v3.56h-4.42v12.26c0 .9.45 1.36 1.35 1.36h1.7c1 0 1.54.55 1.54 1.54v.82c0 .99-.55 1.53-1.54 1.53ZM246.4 9.17c3.3 0 5.39 2.06 5.39 5.44v16h-5.2V15.96c0-1.6-.92-2.48-2.6-2.48-1.92 0-3.16 1.11-3.16 3.04v14.1h-5.21V.75h5.2V12.6c.85-2.16 2.96-3.44 5.58-3.44Z"/></svg>`;

//check if dom is loaded
function checkIfReady(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

checkIfReady(function () {
  addSplashAnimation();
});

function addSplashAnimation() {
  const splashContainer = `<div class="speero-splash-wrapper">
    <div class="speero-news">
      <div class="speero-gympass-line">${gympassSvg} ${isBecomingSvg}</div>
      <div class="speero-wellness-line">${wellhubSvg}</div>
      <div class="speero-coming-line">${comingMaySvg}</div>
      <button>Continue to Gympass</button>
    </div>
    ${splashSvg}
  </div>`;

  document.querySelector("html").classList.add("unscrollable");
  document.querySelector("body").insertAdjacentHTML("afterbegin", splashContainer);

  document.querySelector(".speero-splash-wrapper button").addEventListener("click", function () {
    document.querySelector("html").classList.remove("unscrollable");
    document.querySelector(".speero-splash-wrapper").remove();
  });

  //if the button is not clicked, remove the wrapper entirely
  //6500 = var(--animation-duration) + 2.5s + 2s (see CSS for speero-splash-wrapper)
  setTimeout(function () {
    document.querySelector("html").classList.remove("unscrollable");
    document.querySelector(".speero-splash-wrapper").remove();
  }, 6500);
}
