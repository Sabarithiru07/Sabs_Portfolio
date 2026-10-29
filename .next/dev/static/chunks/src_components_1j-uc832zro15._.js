(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/CursorRing.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CursorRing",
    ()=>CursorRing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function CursorRing() {
    _s();
    const ring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CursorRing.useEffect": ()=>{
            if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
            const r = ring.current, d = dot.current, root = document.documentElement;
            let x = -100, y = -100, rx = -100, ry = -100, raf = 0, shown = false;
            const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            root.classList.add('has-cursor');
            const move = {
                "CursorRing.useEffect.move": (e)=>{
                    x = e.clientX;
                    y = e.clientY;
                    d.style.transform = `translate3d(${x}px,${y}px,0)`;
                    if (!shown) {
                        shown = true;
                        rx = x;
                        ry = y;
                        r.classList.add('on');
                        d.classList.add('on');
                    }
                    const t = e.target?.closest?.('a,button,[role="button"],input,textarea,select,label,summary,.btn');
                    r.classList.toggle('hover', !!t && !t.matches('input,textarea,select'));
                    r.classList.toggle('text', !!t && t.matches('input,textarea,select'));
                }
            }["CursorRing.useEffect.move"];
            const down = {
                "CursorRing.useEffect.down": ()=>r.classList.add('press')
            }["CursorRing.useEffect.down"], up = {
                "CursorRing.useEffect.up": ()=>r.classList.remove('press')
            }["CursorRing.useEffect.up"];
            const leave = {
                "CursorRing.useEffect.leave": ()=>{
                    shown = false;
                    r.classList.remove('on');
                    d.classList.remove('on');
                }
            }["CursorRing.useEffect.leave"];
            const tick = {
                "CursorRing.useEffect.tick": ()=>{
                    const k = reduce ? 1 : 0.16;
                    rx += (x - rx) * k;
                    ry += (y - ry) * k;
                    r.style.transform = `translate3d(${rx}px,${ry}px,0)`;
                    raf = requestAnimationFrame(tick);
                }
            }["CursorRing.useEffect.tick"];
            raf = requestAnimationFrame(tick);
            window.addEventListener('pointermove', move, {
                passive: true
            });
            window.addEventListener('pointerdown', down);
            window.addEventListener('pointerup', up);
            document.documentElement.addEventListener('mouseleave', leave);
            return ({
                "CursorRing.useEffect": ()=>{
                    cancelAnimationFrame(raf);
                    root.classList.remove('has-cursor');
                    window.removeEventListener('pointermove', move);
                    window.removeEventListener('pointerdown', down);
                    window.removeEventListener('pointerup', up);
                    document.documentElement.removeEventListener('mouseleave', leave);
                }
            })["CursorRing.useEffect"];
        }
    }["CursorRing.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ring,
                className: "cursor-ring",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                    fileName: "[project]/src/components/CursorRing.tsx",
                    lineNumber: 42,
                    columnNumber: 72
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/CursorRing.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dot,
                className: "cursor-dot",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/CursorRing.tsx",
                lineNumber: 42,
                columnNumber: 83
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CursorRing.tsx",
        lineNumber: 42,
        columnNumber: 11
    }, this);
}
_s(CursorRing, "33I7aecQJcefNi4iC3bWJWDXE+Y=");
_c = CursorRing;
var _c;
__turbopack_context__.k.register(_c, "CursorRing");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MotionProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionProvider",
    ()=>MotionProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LazyMotion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs [app-client] (ecmascript)");
'use client';
;
;
// Motion's feature bundle is loaded asynchronously so it stays out of the initial JS.
const loadFeatures = ()=>__turbopack_context__.A("[project]/src/components/motionFeatures.ts [app-client] (ecmascript, async loader)").then((mod)=>mod.default);
const MotionProvider = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LazyMotion$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LazyMotion"], {
        features: loadFeatures,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/MotionProvider.tsx",
        lineNumber: 7,
        columnNumber: 74
    }, ("TURBOPACK compile-time value", void 0));
_c = MotionProvider;
var _c;
__turbopack_context__.k.register(_c, "MotionProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PageBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageBackground",
    ()=>PageBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
'use client';
;
;
// One fixed, page-wide animated constellation behind every section. Loaded client-side after hydration.
const Constellation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/Constellation.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/Constellation.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = Constellation;
const PageBackground = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "page-bg",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Constellation, {}, void 0, false, {
            fileName: "[project]/src/components/PageBackground.tsx",
            lineNumber: 6,
            columnNumber: 81
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/PageBackground.tsx",
        lineNumber: 6,
        columnNumber: 37
    }, ("TURBOPACK compile-time value", void 0));
_c1 = PageBackground;
var _c, _c1;
__turbopack_context__.k.register(_c, "Constellation");
__turbopack_context__.k.register(_c1, "PageBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Parallax.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Parallax",
    ()=>Parallax,
    "ScrollOrbs",
    ()=>ScrollOrbs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
// One shared rAF-throttled scroll loop drives every parallax layer on the page.
const subs = new Set();
let raf = 0, bound = false;
const tick = ()=>{
    raf = 0;
    subs.forEach((f)=>f());
};
const onScroll = ()=>{
    if (!raf) raf = requestAnimationFrame(tick);
};
function subscribe(f) {
    if (!bound) {
        addEventListener('scroll', onScroll, {
            passive: true
        });
        addEventListener('resize', onScroll);
        bound = true;
    }
    subs.add(f);
    f();
    return ()=>{
        subs.delete(f);
        if (!subs.size) {
            removeEventListener('scroll', onScroll);
            removeEventListener('resize', onScroll);
            bound = false;
        }
    };
}
const reduced = ()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
function Parallax({ speed = 0.1, className = '', innerClassName = '', children }) {
    _s();
    const outer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Parallax.useEffect": ()=>{
            if (reduced()) return;
            return subscribe({
                "Parallax.useEffect": ()=>{
                    const o = outer.current, i = inner.current;
                    if (!o || !i) return;
                    const r = o.getBoundingClientRect(); // outer is never transformed, so measuring it is stable
                    i.style.transform = `translate3d(0,${(-(r.top + r.height / 2 - innerHeight / 2) * speed).toFixed(1)}px,0)`;
                }
            }["Parallax.useEffect"]);
        }
    }["Parallax.useEffect"], [
        speed
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: outer,
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: inner,
            className: innerClassName,
            style: {
                willChange: 'transform'
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/Parallax.tsx",
            lineNumber: 27,
            columnNumber: 49
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Parallax.tsx",
        lineNumber: 27,
        columnNumber: 10
    }, this);
}
_s(Parallax, "KTbcaNdx0IMPkGLx1C44Yyf5+AU=");
_c = Parallax;
const ORBS = [
    {
        fx: 700,
        fy: 900,
        ax: 90,
        ay: 140
    },
    {
        fx: 1000,
        fy: 650,
        ax: 120,
        ay: 110
    },
    {
        fx: 800,
        fy: 1100,
        ax: 70,
        ay: 170
    }
];
function ScrollOrbs() {
    _s1();
    const els = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollOrbs.useEffect": ()=>{
            if (reduced()) return;
            return subscribe({
                "ScrollOrbs.useEffect": ()=>{
                    const y = scrollY;
                    els.current.forEach({
                        "ScrollOrbs.useEffect": (el, k)=>{
                            if (!el) return;
                            const o = ORBS[k];
                            el.style.transform = `translate3d(${(Math.cos(y / o.fx + k * 2) * o.ax).toFixed(1)}px,${(Math.sin(y / o.fy + k) * o.ay).toFixed(1)}px,0)`;
                        }
                    }["ScrollOrbs.useEffect"]);
                }
            }["ScrollOrbs.useEffect"]);
        }
    }["ScrollOrbs.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "orbs",
        "aria-hidden": "true",
        children: ORBS.map((_, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: (el)=>{
                    els.current[k] = el;
                },
                className: `orb o${k + 1}`
            }, k, false, {
                fileName: "[project]/src/components/Parallax.tsx",
                lineNumber: 44,
                columnNumber: 71
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/Parallax.tsx",
        lineNumber: 44,
        columnNumber: 10
    }, this);
}
_s1(ScrollOrbs, "Qku19/504pKHAR6h+mE8eb35mm0=");
_c1 = ScrollOrbs;
var _c, _c1;
__turbopack_context__.k.register(_c, "Parallax");
__turbopack_context__.k.register(_c1, "ScrollOrbs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ScrollProgress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollProgress",
    ()=>ScrollProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ScrollProgress() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollProgress.useEffect": ()=>{
            if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            let raf = 0;
            const update = {
                "ScrollProgress.useEffect.update": ()=>{
                    raf = 0;
                    const max = document.documentElement.scrollHeight - innerHeight;
                    if (ref.current) ref.current.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`;
                }
            }["ScrollProgress.useEffect.update"];
            const onScroll = {
                "ScrollProgress.useEffect.onScroll": ()=>{
                    if (!raf) raf = requestAnimationFrame(update);
                }
            }["ScrollProgress.useEffect.onScroll"];
            update();
            addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "ScrollProgress.useEffect": ()=>{
                    removeEventListener('scroll', onScroll);
                    cancelAnimationFrame(raf);
                }
            })["ScrollProgress.useEffect"];
        }
    }["ScrollProgress.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: "progress",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/src/components/ScrollProgress.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_s(ScrollProgress, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = ScrollProgress;
var _c;
__turbopack_context__.k.register(_c, "ScrollProgress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=src_components_1j-uc832zro15._.js.map