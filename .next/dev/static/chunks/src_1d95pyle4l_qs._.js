(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/AboutReveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutReveal",
    ()=>AboutReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function AboutReveal({ profile, children }) {
    _s();
    const grid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const slot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [stage, setStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('static');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AboutReveal.useEffect": ()=>{
            const g = grid.current, s = slot.current;
            if (!g || !s || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
            const measure = {
                "AboutReveal.useEffect.measure": ()=>{
                    const gr = g.getBoundingClientRect(), sr = s.getBoundingClientRect();
                    g.style.setProperty('--dx', `${Math.round(gr.left + gr.width / 2 - (sr.left + sr.width / 2))}px`); // slot centre -> grid centre
                }
            }["AboutReveal.useEffect.measure"];
            measure();
            setStage(0);
            window.addEventListener('resize', measure);
            const timers = [];
            const io = new IntersectionObserver({
                "AboutReveal.useEffect": (es)=>{
                    if (!es.some({
                        "AboutReveal.useEffect": (e)=>e.isIntersecting
                    }["AboutReveal.useEffect"])) return;
                    io.disconnect();
                    measure();
                    setStage(1);
                    timers.push(window.setTimeout({
                        "AboutReveal.useEffect": ()=>setStage(2)
                    }["AboutReveal.useEffect"], 1200), window.setTimeout({
                        "AboutReveal.useEffect": ()=>setStage(3)
                    }["AboutReveal.useEffect"], 2150));
                }
            }["AboutReveal.useEffect"], {
                threshold: 0.4
            });
            io.observe(g);
            return ({
                "AboutReveal.useEffect": ()=>{
                    io.disconnect();
                    window.removeEventListener('resize', measure);
                    timers.forEach(clearTimeout);
                }
            })["AboutReveal.useEffect"];
        }
    }["AboutReveal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: grid,
        className: "about about-reveal",
        "data-stage": stage,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: slot,
                className: "about-slot",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "about-mover",
                    children: profile
                }, void 0, false, {
                    fileName: "[project]/src/components/AboutReveal.tsx",
                    lineNumber: 36,
                    columnNumber: 46
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AboutReveal.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "about-details",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/AboutReveal.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AboutReveal.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(AboutReveal, "KgidByKO29UG3XujRSmkGCFfe8Y=");
_c = AboutReveal;
var _c;
__turbopack_context__.k.register(_c, "AboutReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AchievementCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AchievementCarousel",
    ()=>AchievementCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.mjs [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/megaphone.mjs [app-client] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.mjs [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.mjs [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.mjs [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mouse-pointer-click.mjs [app-client] (ecmascript) <export default as MousePointerClick>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const ICONS = {
    mic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"],
    grad: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
    palette: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
    megaphone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"],
    globe: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
    trending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"]
};
function AchievementCarousel() {
    _s();
    const n = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["achievements"].length;
    const [i, setI] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [paused, setPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const drag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const go = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "AchievementCarousel.useCallback[go]": (d)=>setI({
                "AchievementCarousel.useCallback[go]": (v)=>(v + d + n) % n
            }["AchievementCarousel.useCallback[go]"])
    }["AchievementCarousel.useCallback[go]"], [
        n
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AchievementCarousel.useEffect": ()=>{
            if (paused || open || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            const t = window.setInterval({
                "AchievementCarousel.useEffect.t": ()=>go(1)
            }["AchievementCarousel.useEffect.t"], 5200);
            return ({
                "AchievementCarousel.useEffect": ()=>window.clearInterval(t)
            })["AchievementCarousel.useEffect"];
        }
    }["AchievementCarousel.useEffect"], [
        paused,
        open,
        go
    ]);
    const rel = (k)=>{
        let d = k - i;
        if (d > n / 2) d -= n;
        if (d < -n / 2) d += n;
        return d;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ac",
        onMouseEnter: ()=>setPaused(true),
        onMouseLeave: ()=>setPaused(false),
        onKeyDown: (e)=>{
            if (e.key === 'ArrowRight') go(1);
            if (e.key === 'ArrowLeft') go(-1);
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ac-stage",
                tabIndex: 0,
                "aria-roledescription": "carousel",
                "aria-label": "Achievements",
                onPointerDown: (e)=>{
                    drag.current = {
                        x: e.clientX,
                        moved: false
                    };
                },
                onPointerMove: (e)=>{
                    if (drag.current && Math.abs(e.clientX - drag.current.x) > 8) drag.current.moved = true;
                },
                onPointerUp: (e)=>{
                    const d = drag.current;
                    drag.current = null;
                    if (d && Math.abs(e.clientX - d.x) > 50) go(e.clientX < d.x ? 1 : -1);
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["achievements"].map((a, k)=>{
                    const d = rel(k), Icon = ICONS[a.icon] ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], active = d === 0, far = Math.abs(d) > 2;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: `ac-card${active ? ' active' : ''}`,
                        "aria-hidden": far,
                        style: {
                            ['--d']: d,
                            ['--abs']: Math.abs(d),
                            zIndex: 10 - Math.abs(d),
                            opacity: far ? 0 : 1,
                            pointerEvents: far ? 'none' : 'auto'
                        },
                        onClick: ()=>{
                            if (drag.current?.moved) return;
                            active ? setOpen(a) : setI(k);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ac-badge",
                                children: a.badge
                            }, void 0, false, {
                                fileName: "[project]/src/components/AchievementCarousel.tsx",
                                lineNumber: 39,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ac-icon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    size: 30
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AchievementCarousel.tsx",
                                    lineNumber: 40,
                                    columnNumber: 41
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/AchievementCarousel.tsx",
                                lineNumber: 40,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: a.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/AchievementCarousel.tsx",
                                lineNumber: 41,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "ac-sub",
                                children: a.subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/AchievementCarousel.tsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "ac-date",
                                children: a.date
                            }, void 0, false, {
                                fileName: "[project]/src/components/AchievementCarousel.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "ac-sum",
                                children: a.summary
                            }, void 0, false, {
                                fileName: "[project]/src/components/AchievementCarousel.tsx",
                                lineNumber: 44,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "ac-cta",
                                tabIndex: active ? 0 : -1,
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    active ? setOpen(a) : setI(k);
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__["MousePointerClick"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AchievementCarousel.tsx",
                                        lineNumber: 46,
                                        columnNumber: 17
                                    }, this),
                                    " Click & view"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AchievementCarousel.tsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this)
                        ]
                    }, a.id, true, {
                        fileName: "[project]/src/components/AchievementCarousel.tsx",
                        lineNumber: 36,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/AchievementCarousel.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ac-nav",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>go(-1),
                        "aria-label": "Previous achievement",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/components/AchievementCarousel.tsx",
                            lineNumber: 53,
                            columnNumber: 88
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/AchievementCarousel.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ac-dots",
                        role: "tablist",
                        "aria-label": "Choose achievement",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["achievements"].map((a, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                role: "tab",
                                "aria-selected": k === i,
                                "aria-label": a.title,
                                className: k === i ? 'on' : '',
                                onClick: ()=>setI(k)
                            }, a.id, false, {
                                fileName: "[project]/src/components/AchievementCarousel.tsx",
                                lineNumber: 55,
                                columnNumber: 39
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/AchievementCarousel.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>go(1),
                        "aria-label": "Next achievement",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/components/AchievementCarousel.tsx",
                            lineNumber: 57,
                            columnNumber: 83
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/AchievementCarousel.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AchievementCarousel.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AchievementModal, {
                a: open,
                onClose: ()=>setOpen(null)
            }, void 0, false, {
                fileName: "[project]/src/components/AchievementCarousel.tsx",
                lineNumber: 59,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AchievementCarousel.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(AchievementCarousel, "yxeN9zoSkxRTNvQXzf1Y6gWi76I=");
_c = AchievementCarousel;
function AchievementModal({ a, onClose }) {
    _s1();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [light, setLight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const g = a.gallery ?? [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AchievementModal.useEffect": ()=>setMounted(true)
    }["AchievementModal.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AchievementModal.useEffect": ()=>{
            const prev = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            const key = {
                "AchievementModal.useEffect.key": (e)=>{
                    if (light !== null) {
                        if (e.key === 'Escape') setLight(null);
                        if (e.key === 'ArrowRight') setLight({
                            "AchievementModal.useEffect.key": (v)=>v === null ? v : (v + 1) % g.length
                        }["AchievementModal.useEffect.key"]);
                        if (e.key === 'ArrowLeft') setLight({
                            "AchievementModal.useEffect.key": (v)=>v === null ? v : (v - 1 + g.length) % g.length
                        }["AchievementModal.useEffect.key"]);
                    } else if (e.key === 'Escape') onClose();
                }
            }["AchievementModal.useEffect.key"];
            window.addEventListener('keydown', key);
            return ({
                "AchievementModal.useEffect": ()=>{
                    document.body.style.overflow = prev;
                    window.removeEventListener('keydown', key);
                }
            })["AchievementModal.useEffect"];
        }
    }["AchievementModal.useEffect"], [
        light,
        g.length,
        onClose
    ]);
    if (!mounted) return null;
    const Icon = ICONS[a.icon] ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rv am",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": a.title,
        onClick: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rv-sheet am-sheet",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rv-bar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "am-bar-title",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AchievementCarousel.tsx",
                                        lineNumber: 86,
                                        columnNumber: 66
                                    }, this),
                                    " ",
                                    a.badge
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AchievementCarousel.tsx",
                                lineNumber: 86,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "rv-close",
                                onClick: onClose,
                                "aria-label": "Close",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AchievementCarousel.tsx",
                                    lineNumber: 87,
                                    columnNumber: 91
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/AchievementCarousel.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AchievementCarousel.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rv-body",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `am-head${a.poster ? ' has-poster' : ''}`,
                                children: [
                                    a.poster && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "am-poster",
                                        onClick: ()=>setLight(-1),
                                        "aria-label": "View invitation larger",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: a.poster,
                                            alt: `Invitation: ${a.title}`,
                                            width: 480,
                                            height: 720
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AchievementCarousel.tsx",
                                            lineNumber: 92,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AchievementCarousel.tsx",
                                        lineNumber: 90,
                                        columnNumber: 26
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: a.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AchievementCarousel.tsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "am-meta",
                                                children: [
                                                    a.subtitle,
                                                    " · ",
                                                    a.date
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AchievementCarousel.tsx",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, this),
                                            a.tags && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "chips",
                                                children: a.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "tag",
                                                        children: t
                                                    }, t, false, {
                                                        fileName: "[project]/src/components/AchievementCarousel.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 66
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AchievementCarousel.tsx",
                                                lineNumber: 96,
                                                columnNumber: 26
                                            }, this),
                                            a.details.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "am-p",
                                                    children: p
                                                }, p, false, {
                                                    fileName: "[project]/src/components/AchievementCarousel.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 35
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AchievementCarousel.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AchievementCarousel.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "am-h",
                                children: "Highlights"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AchievementCarousel.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "am-list",
                                children: a.highlights.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AchievementCarousel.tsx",
                                                lineNumber: 101,
                                                columnNumber: 70
                                            }, this),
                                            h
                                        ]
                                    }, h, true, {
                                        fileName: "[project]/src/components/AchievementCarousel.tsx",
                                        lineNumber: 101,
                                        columnNumber: 58
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/AchievementCarousel.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            g.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "am-h",
                                        children: "Photo gallery"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AchievementCarousel.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "am-gallery",
                                        children: g.map((im, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setLight(k),
                                                "aria-label": `Open photo ${k + 1}: ${im.alt}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: im.src,
                                                    alt: im.alt,
                                                    loading: "lazy"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AchievementCarousel.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 17
                                                }, this)
                                            }, im.src, false, {
                                                fileName: "[project]/src/components/AchievementCarousel.tsx",
                                                lineNumber: 105,
                                                columnNumber: 15
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AchievementCarousel.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AchievementCarousel.tsx",
                                lineNumber: 102,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AchievementCarousel.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AchievementCarousel.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            light !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lb",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Photo viewer",
                onClick: (e)=>{
                    e.stopPropagation();
                    if (e.target === e.currentTarget) setLight(null);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "lb-x",
                        onClick: ()=>setLight(null),
                        "aria-label": "Close photo",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 22
                        }, void 0, false, {
                            fileName: "[project]/src/components/AchievementCarousel.tsx",
                            lineNumber: 113,
                            columnNumber: 106
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/AchievementCarousel.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this),
                    light >= 0 && g.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "lb-n prev",
                        onClick: ()=>setLight((light - 1 + g.length) % g.length),
                        "aria-label": "Previous photo",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            size: 26
                        }, void 0, false, {
                            fileName: "[project]/src/components/AchievementCarousel.tsx",
                            lineNumber: 114,
                            columnNumber: 174
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/AchievementCarousel.tsx",
                        lineNumber: 114,
                        columnNumber: 42
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: light === -1 ? a.poster : g[light].src,
                        alt: light === -1 ? `Invitation: ${a.title}` : g[light].alt
                    }, void 0, false, {
                        fileName: "[project]/src/components/AchievementCarousel.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this),
                    light >= 0 && g.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "lb-n next",
                        onClick: ()=>setLight((light + 1) % g.length),
                        "aria-label": "Next photo",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            size: 26
                        }, void 0, false, {
                            fileName: "[project]/src/components/AchievementCarousel.tsx",
                            lineNumber: 117,
                            columnNumber: 159
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/AchievementCarousel.tsx",
                        lineNumber: 117,
                        columnNumber: 42
                    }, this),
                    light >= 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "lb-cap",
                        children: [
                            g[light].alt,
                            " · ",
                            light + 1,
                            " / ",
                            g.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AchievementCarousel.tsx",
                        lineNumber: 118,
                        columnNumber: 26
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AchievementCarousel.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AchievementCarousel.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this), document.body);
}
_s1(AchievementModal, "uk83wzZ9q7iSxlde105E26NiEnQ=");
_c1 = AchievementModal;
var _c, _c1;
__turbopack_context__.k.register(_c, "AchievementCarousel");
__turbopack_context__.k.register(_c1, "AchievementModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/BrandIcons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Generated from Simple Icons (CC0) and Tabler Icons (MIT). Brand colours are the official ones.
__turbopack_context__.s([
    "BrandIcon",
    ()=>BrandIcon,
    "brandColor",
    ()=>brandColor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const ICONS = {
    "python": {
        "vb": "0 0 24 24",
        "stroke": false,
        "color": "#3776AB",
        "parts": [
            {
                "tag": "path",
                "attr": {
                    "d": "M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"
                }
            }
        ]
    },
    "django": {
        "vb": "0 0 24 24",
        "stroke": false,
        "color": "#44B78B",
        "parts": [
            {
                "tag": "path",
                "attr": {
                    "d": "M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z"
                }
            }
        ]
    },
    "git": {
        "vb": "0 0 24 24",
        "stroke": false,
        "color": "#F05032",
        "parts": [
            {
                "tag": "path",
                "attr": {
                    "d": "M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z"
                }
            }
        ]
    },
    "figma": {
        "vb": "0 0 24 24",
        "stroke": false,
        "color": "#F24E1E",
        "parts": [
            {
                "tag": "path",
                "attr": {
                    "d": "M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"
                }
            }
        ]
    },
    "claude": {
        "vb": "0 0 24 24",
        "stroke": false,
        "color": "#D97757",
        "parts": [
            {
                "tag": "path",
                "attr": {
                    "d": "m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"
                }
            }
        ]
    },
    "mysql": {
        "vb": "0 0 24 24",
        "stroke": false,
        "color": "#4479A1",
        "parts": [
            {
                "tag": "path",
                "attr": {
                    "d": "M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"
                }
            }
        ]
    },
    "javascript": {
        "vb": "0 0 24 24",
        "stroke": false,
        "color": "#F7DF1E",
        "parts": [
            {
                "tag": "path",
                "attr": {
                    "d": "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
                }
            }
        ]
    },
    "html5": {
        "vb": "0 0 24 24",
        "stroke": false,
        "color": "#E34F26",
        "parts": [
            {
                "tag": "path",
                "attr": {
                    "d": "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
                }
            }
        ]
    },
    "css3": {
        "vb": "0 0 24 24",
        "stroke": false,
        "color": "#1572B6",
        "parts": [
            {
                "tag": "path",
                "attr": {
                    "d": "M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0Zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84-.096-.192-.288-.264-.552-.264-.456 0-.696.264-.696.84-.024.576.288.888.768 1.08.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176.264 0 .456-.072.552-.24.192-.312.24-1.176-.048-1.512-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536 0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84-.096-.192-.264-.264-.528-.264-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296.264.432.408.984.408 1.656.024 1.608-.888 2.592-2.472 2.592-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176.264 0 .456-.072.552-.24.216-.312.264-1.176-.048-1.512-.288-.408-.888-.6-1.32-.816-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96-.312-.144-.768-.048-.888.24-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848.432-.408 1.146-.624 1.857-.63"
                }
            }
        ]
    },
    "php": {
        "vb": "0 0 24 24",
        "stroke": false,
        "color": "#777BB4",
        "parts": [
            {
                "tag": "path",
                "attr": {
                    "d": "M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z"
                }
            }
        ]
    },
    "huggingface": {
        "vb": "0 0 24 24",
        "stroke": false,
        "color": "#FFD21E",
        "parts": [
            {
                "tag": "path",
                "attr": {
                    "d": "M12.025 1.13c-5.77 0-10.449 4.647-10.449 10.378 0 1.112.178 2.181.503 3.185.064-.222.203-.444.416-.577a.96.96 0 0 1 .524-.15c.293 0 .584.124.84.284.278.173.48.408.71.694.226.282.458.611.684.951v-.014c.017-.324.106-.622.264-.874s.403-.487.762-.543c.3-.047.596.06.787.203s.31.313.4.467c.15.257.212.468.233.542.01.026.653 1.552 1.657 2.54.616.605 1.01 1.223 1.082 1.912.055.537-.096 1.059-.38 1.572.637.121 1.294.187 1.967.187.657 0 1.298-.063 1.921-.178-.287-.517-.44-1.041-.384-1.581.07-.69.465-1.307 1.081-1.913 1.004-.987 1.647-2.513 1.657-2.539.021-.074.083-.285.233-.542.09-.154.208-.323.4-.467a1.08 1.08 0 0 1 .787-.203c.359.056.604.29.762.543s.247.55.265.874v.015c.225-.34.457-.67.683-.952.23-.286.432-.52.71-.694.257-.16.547-.284.84-.285a.97.97 0 0 1 .524.151c.228.143.373.388.43.625l.006.04a10.3 10.3 0 0 0 .534-3.273c0-5.731-4.678-10.378-10.449-10.378M8.327 6.583a1.5 1.5 0 0 1 .713.174 1.487 1.487 0 0 1 .617 2.013c-.183.343-.762-.214-1.102-.094-.38.134-.532.914-.917.71a1.487 1.487 0 0 1 .69-2.803m7.486 0a1.487 1.487 0 0 1 .689 2.803c-.385.204-.536-.576-.916-.71-.34-.12-.92.437-1.103.094a1.487 1.487 0 0 1 .617-2.013 1.5 1.5 0 0 1 .713-.174m-10.68 1.55a.96.96 0 1 1 0 1.921.96.96 0 0 1 0-1.92m13.838 0a.96.96 0 1 1 0 1.92.96.96 0 0 1 0-1.92M8.489 11.458c.588.01 1.965 1.157 3.572 1.164 1.607-.007 2.984-1.155 3.572-1.164.196-.003.305.12.305.454 0 .886-.424 2.328-1.563 3.202-.22-.756-1.396-1.366-1.63-1.32q-.011.001-.02.006l-.044.026-.01.008-.03.024q-.018.017-.035.036l-.032.04a1 1 0 0 0-.058.09l-.014.025q-.049.088-.11.19a1 1 0 0 1-.083.116 1.2 1.2 0 0 1-.173.18q-.035.029-.075.058a1.3 1.3 0 0 1-.251-.243 1 1 0 0 1-.076-.107c-.124-.193-.177-.363-.337-.444-.034-.016-.104-.008-.2.022q-.094.03-.216.087-.06.028-.125.063l-.13.074q-.067.04-.136.086a3 3 0 0 0-.135.096 3 3 0 0 0-.26.219 2 2 0 0 0-.12.121 2 2 0 0 0-.106.128l-.002.002a2 2 0 0 0-.09.132l-.001.001a1.2 1.2 0 0 0-.105.212q-.013.036-.024.073c-1.139-.875-1.563-2.317-1.563-3.203 0-.334.109-.457.305-.454m.836 10.354c.824-1.19.766-2.082-.365-3.194-1.13-1.112-1.789-2.738-1.789-2.738s-.246-.945-.806-.858-.97 1.499.202 2.362c1.173.864-.233 1.45-.685.64-.45-.812-1.683-2.896-2.322-3.295s-1.089-.175-.938.647 2.822 2.813 2.562 3.244-1.176-.506-1.176-.506-2.866-2.567-3.49-1.898.473 1.23 2.037 2.16c1.564.932 1.686 1.178 1.464 1.53s-3.675-2.511-4-1.297c-.323 1.214 3.524 1.567 3.287 2.405-.238.839-2.71-1.587-3.216-.642-.506.946 3.49 2.056 3.522 2.064 1.29.33 4.568 1.028 5.713-.624m5.349 0c-.824-1.19-.766-2.082.365-3.194 1.13-1.112 1.789-2.738 1.789-2.738s.246-.945.806-.858.97 1.499-.202 2.362c-1.173.864.233 1.45.685.64.451-.812 1.683-2.896 2.322-3.295s1.089-.175.938.647-2.822 2.813-2.562 3.244 1.176-.506 1.176-.506 2.866-2.567 3.49-1.898-.473 1.23-2.037 2.16c-1.564.932-1.686 1.178-1.464 1.53s3.675-2.511 4-1.297c.323 1.214-3.524 1.567-3.287 2.405.238.839 2.71-1.587 3.216-.642.506.946-3.49 2.056-3.522 2.064-1.29.33-4.568 1.028-5.713-.624"
                }
            }
        ]
    },
    "langchain": {
        "vb": "0 0 24 24",
        "stroke": false,
        "color": "#1C9E8F",
        "parts": [
            {
                "tag": "path",
                "attr": {
                    "d": "M13.796 0a6.93 6.93 0 0 0-4.91 2.019L5.451 5.455l3.273 3.27 3.432-3.432a2.284 2.284 0 0 1 3.277 0 2.28 2.28 0 0 1 0 3.275L12 12.001l3.273 3.273 3.433-3.435c2.692-2.692 2.692-7.127 0-9.82A6.92 6.92 0 0 0 13.796 0m-5.07 8.728-3.433 3.434c-2.692 2.693-2.692 7.126 0 9.819A6.92 6.92 0 0 0 10.203 24a6.93 6.93 0 0 0 4.911-2.02l3.432-3.432-3.271-3.272-3.433 3.433a2.284 2.284 0 0 1-3.277 0 2.28 2.28 0 0 1 0-3.276L12 12z"
                }
            }
        ]
    },
    "tensorflow": {
        "vb": "0 0 24 24",
        "stroke": false,
        "color": "#FF6F00",
        "parts": [
            {
                "tag": "path",
                "attr": {
                    "d": "M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l3.092 1.788-.018-4.618-3.074-1.756V7.603l6.168 3.564z"
                }
            }
        ]
    },
    "opencv": {
        "vb": "0 0 24 24",
        "stroke": false,
        "color": "#5C3EE8",
        "parts": [
            {
                "tag": "path",
                "attr": {
                    "d": "M11.8992.8525C8.735.8525 6.17 3.4175 6.17 6.5817c0 2.102 1.1321 3.9398 2.8198 4.9366l1.6412-2.7849c.0411-.0699.0176-.1593-.0495-.2048-.6233-.4227-1.0328-1.137-1.0328-1.947 0-1.298 1.0524-2.3504 2.3505-2.3504 1.2981 0 2.3505 1.0524 2.3505 2.3505 0 .8098-.4095 1.5242-1.0328 1.947-.0671.0454-.0907.1348-.0495.2047l1.6414 2.785c1.6878-.9969 2.8199-2.8346 2.8199-4.9367 0-3.1642-2.5653-5.7292-5.7295-5.7292zm-6.17 10.8366C2.565 11.6891 0 14.2541 0 17.4183c0 3.1642 2.565 5.7292 5.7292 5.7292 3.1798 0 5.8074-2.6995 5.7275-5.8762H8.2313c-.0847 0-.1513.0717-.1519.1564-.0082 1.266-1.0644 2.3411-2.3502 2.3411-1.2981 0-2.3505-1.0524-2.3505-2.3505 0-1.2982 1.0524-2.3505 2.3505-2.3505.34 0 .663.0724.9547.2022.0713.0318.1566.0077.1962-.0595l1.6464-2.7935c-.8273-.4636-1.7815-.7279-2.7973-.7279zm15.4424.7614l-1.6366 2.7878c-.041.07-.0172.1594.05.2048.624.4217 1.0348 1.1354 1.0363 1.9452.0022 1.298-1.0483 2.352-2.3465 2.3542-1.298.0023-2.3523-1.0482-2.3545-2.3462-.0015-.8098.4068-1.5248 1.0294-1.9486.067-.0457.0905-.1353.0492-.2051l-1.6464-2.7818c-1.6859.9998-2.8146 2.8394-2.811 4.9415.0056 3.1641 2.575 5.7248 5.7393 5.7192 3.1641-.0054 5.7246-2.575 5.7192-5.7392-.0037-2.1022-1.139-3.938-2.8284-4.9318z"
                }
            }
        ]
    },
    "whatsapp": {
        "vb": "0 0 24 24",
        "stroke": false,
        "color": "#25D366",
        "parts": [
            {
                "tag": "path",
                "attr": {
                    "d": "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                }
            }
        ]
    },
    "openai": {
        "vb": "0 0 24 24",
        "stroke": true,
        "color": "#10A37F",
        "parts": [
            {
                "tag": "path",
                "attr": {
                    "d": "M11.217 19.384a3.501 3.501 0 0 0 6.783 -1.217v-5.167l-6 -3.35"
                }
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M5.214 15.014a3.501 3.501 0 0 0 4.446 5.266l4.34 -2.534v-6.946"
                }
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M6 7.63c-1.391 -.236 -2.787 .395 -3.534 1.689a3.474 3.474 0 0 0 1.271 4.745l4.263 2.514l6 -3.348"
                }
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M12.783 4.616a3.501 3.501 0 0 0 -6.783 1.217v5.067l6 3.45"
                }
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M18.786 8.986a3.501 3.501 0 0 0 -4.446 -5.266l-4.34 2.534v6.946"
                }
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M18 16.302c1.391 .236 2.787 -.395 3.534 -1.689a3.474 3.474 0 0 0 -1.271 -4.745l-4.308 -2.514l-5.955 3.42"
                }
            }
        ]
    },
    "adobexd": {
        "vb": "0 0 24 24",
        "stroke": true,
        "color": "#FF61F6",
        "parts": [
            {
                "tag": "path",
                "attr": {
                    "d": "M3 12c0 -4.243 0 -6.364 1.318 -7.682s3.44 -1.318 7.682 -1.318s6.364 0 7.682 1.318s1.318 3.44 1.318 7.682s0 6.364 -1.318 7.682s-3.44 1.318 -7.682 1.318s-6.364 0 -7.682 -1.318s-1.318 -3.44 -1.318 -7.682"
                }
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M6 8l5 8"
                }
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M6 16l5 -8"
                }
            },
            {
                "tag": "path",
                "attr": {
                    "d": "M18 11v4c0 1.1 -.517 .997 -1.5 .997a2.5 2.5 0 0 1 -2.5 -2.497a2.5 2.5 0 0 1 2.5 -2.5l1.5 0v-3"
                }
            }
        ]
    }
};
const brandColor = (k)=>ICONS[k].color;
function BrandIcon({ name, size = 24, colored = true, ...rest }) {
    const d = ICONS[name];
    const common = d.stroke ? {
        fill: 'none',
        stroke: colored ? d.color : 'currentColor',
        strokeWidth: 1.6,
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
    } : {
        fill: colored ? d.color : 'currentColor'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: d.vb,
        width: size,
        height: size,
        "aria-hidden": "true",
        focusable: "false",
        ...common,
        ...rest,
        children: d.parts.filter((p)=>p.attr.stroke !== 'none').map((p, i)=>p.tag === 'path' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: p.attr.d
            }, i, false, {
                fileName: "[project]/src/components/BrandIcons.tsx",
                lineNumber: 14,
                columnNumber: 87
            }, this) : p.tag === 'circle' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: p.attr.cx,
                cy: p.attr.cy,
                r: p.attr.r
            }, i, false, {
                fileName: "[project]/src/components/BrandIcons.tsx",
                lineNumber: 14,
                columnNumber: 140
            }, this) : p.tag === 'rect' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: p.attr.x,
                y: p.attr.y,
                width: p.attr.width,
                height: p.attr.height,
                rx: p.attr.rx
            }, i, false, {
                fileName: "[project]/src/components/BrandIcons.tsx",
                lineNumber: 14,
                columnNumber: 223
            }, this) : null)
    }, void 0, false, {
        fileName: "[project]/src/components/BrandIcons.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = BrandIcon;
var _c;
__turbopack_context__.k.register(_c, "BrandIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CollisionReveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CollisionReveal",
    ()=>CollisionReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function CollisionReveal({ id, className = '', title, a, b, children }) {
    _s();
    const stage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('static');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CollisionReveal.useEffect": ()=>{
            const el = stage.current;
            if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
            setState('armed');
            const io = new IntersectionObserver({
                "CollisionReveal.useEffect": (es)=>{
                    if (es.some({
                        "CollisionReveal.useEffect": (e)=>e.isIntersecting
                    }["CollisionReveal.useEffect"])) {
                        setState('play');
                        io.disconnect();
                    }
                }
            }["CollisionReveal.useEffect"], {
                threshold: 0.35,
                rootMargin: '0px 0px -12% 0px'
            });
            io.observe(el);
            return ({
                "CollisionReveal.useEffect": ()=>io.disconnect()
            })["CollisionReveal.useEffect"];
        }
    }["CollisionReveal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        className: `${className} collide ${state}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: stage,
                className: "cr-stage",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "cr-icon cr-a",
                        style: {
                            ['--dx']: -1
                        },
                        "aria-hidden": "true",
                        children: a
                    }, void 0, false, {
                        fileName: "[project]/src/components/CollisionReveal.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "cr-icon cr-b",
                        style: {
                            ['--dx']: 1
                        },
                        "aria-hidden": "true",
                        children: b
                    }, void 0, false, {
                        fileName: "[project]/src/components/CollisionReveal.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "cr-flash",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CollisionReveal.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "cr-ring",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CollisionReveal.tsx",
                        lineNumber: 30,
                        columnNumber: 57
                    }, this),
                    Array.from({
                        length: 14
                    }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                            className: "cr-spark",
                            style: {
                                ['--r']: `${i * (360 / 14)}deg`
                            },
                            "aria-hidden": "true"
                        }, i, false, {
                            fileName: "[project]/src/components/CollisionReveal.tsx",
                            lineNumber: 31,
                            columnNumber: 47
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "cr-title grad",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/CollisionReveal.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CollisionReveal.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cr-body",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/CollisionReveal.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CollisionReveal.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(CollisionReveal, "W9x8z6IGf847RW342im0N/GxXpU=");
_c = CollisionReveal;
var _c;
__turbopack_context__.k.register(_c, "CollisionReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ContactForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactForm",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.mjs [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.mjs [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/contact.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ContactForm() {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        kind: 'idle'
    });
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    async function onSubmit(e) {
        e.preventDefault();
        const form = e.currentTarget, f = new FormData(form);
        setState({
            kind: 'loading'
        });
        try {
            const r = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendContact"])({
                name: String(f.get('name')),
                email: String(f.get('email')),
                message: String(f.get('message')),
                website: String(f.get('website') ?? '')
            });
            form.reset();
            setState({
                kind: r === 'mailto' ? 'mailto' : 'success'
            });
        } catch (err) {
            setState({
                kind: 'error',
                message: err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactError"] ? err.message : 'Something went wrong.'
            });
        }
    }
    // Opens WhatsApp with whatever has been typed so far already filled in.
    function openWhatsApp() {
        const f = new FormData(formRef.current);
        const name = String(f.get('name') || '').trim(), msg = String(f.get('message') || '').trim();
        const text = `Hi Sabari, ${msg || 'I saw your portfolio and would like to connect.'}${name ? `\n\n- ${name}` : ''}`;
        window.open(`https://wa.me/${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        ref: formRef,
        onSubmit: onSubmit,
        className: "glass pad cf",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "cf-title",
                children: "Let's talk"
            }, void 0, false, {
                fileName: "[project]/src/components/ContactForm.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cf-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "Name",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "name",
                                type: "text",
                                placeholder: "Your name",
                                required: true,
                                maxLength: 100,
                                autoComplete: "name"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactForm.tsx",
                                lineNumber: 35,
                                columnNumber: 20
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContactForm.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: [
                            "Email",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                name: "email",
                                type: "email",
                                placeholder: "you@email.com",
                                required: true,
                                maxLength: 100,
                                autoComplete: "email"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactForm.tsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContactForm.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ContactForm.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: [
                    "Message",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        name: "message",
                        rows: 4,
                        placeholder: "How can I help you?",
                        required: true,
                        minLength: 10,
                        maxLength: 3000
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactForm.tsx",
                        lineNumber: 38,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ContactForm.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: "hp",
                name: "website",
                tabIndex: -1,
                autoComplete: "off",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/ContactForm.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "btn btn-primary cf-send",
                disabled: state.kind === 'loading',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactForm.tsx",
                        lineNumber: 40,
                        columnNumber: 87
                    }, this),
                    " ",
                    state.kind === 'loading' ? 'Sending…' : 'Send message'
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ContactForm.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cf-or",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "or"
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactForm.tsx",
                    lineNumber: 41,
                    columnNumber: 30
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ContactForm.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "btn cf-wa",
                onClick: openWhatsApp,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactForm.tsx",
                        lineNumber: 42,
                        columnNumber: 74
                    }, this),
                    " Message me on WhatsApp"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ContactForm.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-live": "polite",
                className: "cf-status",
                children: [
                    state.kind === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: 'var(--cyan)'
                        },
                        children: "Thanks! Your message was sent."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactForm.tsx",
                        lineNumber: 44,
                        columnNumber: 38
                    }, this),
                    state.kind === 'mailto' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: 'var(--cyan)'
                        },
                        children: "Your email app should open with the message ready to send."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactForm.tsx",
                        lineNumber: 45,
                        columnNumber: 37
                    }, this),
                    state.kind === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "err",
                        children: state.message
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactForm.tsx",
                        lineNumber: 46,
                        columnNumber: 36
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ContactForm.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ContactForm.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(ContactForm, "6OAgi+SgNdvn7aNJhGrLP1UVo+Y=");
_c = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DesignCover.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DesignCover",
    ()=>DesignCover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function DesignCover({ src, alt, variant = 0 }) {
    _s();
    const [bad, setBad] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (bad) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `dz-art dz-${variant % 3}`,
            role: "img",
            "aria-label": alt,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "dz-frame f1"
                }, void 0, false, {
                    fileName: "[project]/src/components/DesignCover.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "dz-frame f2"
                }, void 0, false, {
                    fileName: "[project]/src/components/DesignCover.tsx",
                    lineNumber: 10,
                    columnNumber: 41
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "dz-frame f3"
                }, void 0, false, {
                    fileName: "[project]/src/components/DesignCover.tsx",
                    lineNumber: 10,
                    columnNumber: 73
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DesignCover.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this);
    }
    // eslint-disable-next-line @next/next/no-img-element
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        className: "dz-img",
        src: src,
        alt: alt,
        width: 1200,
        height: 700,
        loading: "lazy",
        onError: ()=>setBad(true)
    }, void 0, false, {
        fileName: "[project]/src/components/DesignCover.tsx",
        lineNumber: 15,
        columnNumber: 10
    }, this);
}
_s(DesignCover, "Y5czYc2f/CaIEq2KBpAddpWnnIg=");
_c = DesignCover;
var _c;
__turbopack_context__.k.register(_c, "DesignCover");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/EnterReveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EnterReveal",
    ()=>EnterReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intro$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/intro.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$blast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/blast.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function EnterReveal() {
    _s();
    const canvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const done = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "EnterReveal.useLayoutEffect": ()=>{
            if (done.current) return; // StrictMode runs effects twice in development
            const root = document.documentElement;
            try {
                if (sessionStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intro$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INTRO_FLAG"])) {
                    root.setAttribute('data-intro', '1');
                    sessionStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$intro$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INTRO_FLAG"]);
                }
            } catch  {}
            if (!root.hasAttribute('data-intro')) return;
            done.current = true;
            if (canvas.current) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$blast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fireParticles"])(canvas.current, 1500);
            window.setTimeout({
                "EnterReveal.useLayoutEffect": ()=>root.removeAttribute('data-intro')
            }["EnterReveal.useLayoutEffect"], 2600);
        }
    }["EnterReveal.useLayoutEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "enter-fx",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "enter-reveal"
            }, void 0, false, {
                fileName: "[project]/src/components/EnterReveal.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "er-rays"
            }, void 0, false, {
                fileName: "[project]/src/components/EnterReveal.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "er-ring e1"
            }, void 0, false, {
                fileName: "[project]/src/components/EnterReveal.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "er-ring e2"
            }, void 0, false, {
                fileName: "[project]/src/components/EnterReveal.tsx",
                lineNumber: 31,
                columnNumber: 38
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "er-ring e3"
            }, void 0, false, {
                fileName: "[project]/src/components/EnterReveal.tsx",
                lineNumber: 31,
                columnNumber: 69
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "er-core"
            }, void 0, false, {
                fileName: "[project]/src/components/EnterReveal.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvas,
                className: "er-canvas"
            }, void 0, false, {
                fileName: "[project]/src/components/EnterReveal.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/EnterReveal.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(EnterReveal, "YTMgDHcQgNz/Tt9ATpyLAHWNK3E=");
_c = EnterReveal;
var _c;
__turbopack_context__.k.register(_c, "EnterReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FooterReveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FooterReveal",
    ()=>FooterReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function FooterReveal({ children }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FooterReveal.useEffect": ()=>{
            const el = ref.current;
            if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
            setState('armed');
            const io = new IntersectionObserver({
                "FooterReveal.useEffect": (es)=>{
                    if (es.some({
                        "FooterReveal.useEffect": (e)=>e.isIntersecting
                    }["FooterReveal.useEffect"])) {
                        setState('armed in');
                        io.disconnect();
                    }
                }
            }["FooterReveal.useEffect"], {
                threshold: 0.3
            });
            io.observe(el);
            return ({
                "FooterReveal.useEffect": ()=>io.disconnect()
            })["FooterReveal.useEffect"];
        }
    }["FooterReveal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        ref: ref,
        className: `footer ${state}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/FooterReveal.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
_s(FooterReveal, "Zp7aguZQcBiGQs7Ofcs16T1MZwk=");
_c = FooterReveal;
var _c;
__turbopack_context__.k.register(_c, "FooterReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LocationMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocationMap",
    ()=>LocationMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mouse-pointer-click.mjs [app-client] (ecmascript) <export default as MousePointerClick>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const PLACE = 'Thathaiyangarpet, Tiruchirappalli, Tamil Nadu';
const EMBED = `https://www.google.com/maps?q=${encodeURIComponent(PLACE)}&z=14&output=embed`;
const OPEN = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PLACE)}`;
function LocationMap() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "map-card glass",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "map-info",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "map-pin",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                            size: 26
                        }, void 0, false, {
                            fileName: "[project]/src/components/LocationMap.tsx",
                            lineNumber: 15,
                            columnNumber: 35
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/LocationMap.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Find me here"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LocationMap.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "sub",
                        children: [
                            "Thathaiyengarpet, Trichy",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/LocationMap.tsx",
                                lineNumber: 17,
                                columnNumber: 52
                            }, this),
                            "Tamil Nadu, India"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LocationMap.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "btn btn-primary btn-sm",
                        href: OPEN,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [
                            "Open in Google Maps ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/LocationMap.tsx",
                                lineNumber: 18,
                                columnNumber: 121
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LocationMap.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LocationMap.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `map-frame${active ? ' active' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        title: "Map showing Thathaiyengarpet, Trichy",
                        src: EMBED,
                        loading: "lazy",
                        referrerPolicy: "no-referrer-when-downgrade",
                        allowFullScreen: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/LocationMap.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    !active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "map-cover",
                        onClick: ()=>setActive(true),
                        "aria-label": "Click to explore the map",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "map-ping",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                        fileName: "[project]/src/components/LocationMap.tsx",
                                        lineNumber: 24,
                                        columnNumber: 40
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                        fileName: "[project]/src/components/LocationMap.tsx",
                                        lineNumber: 24,
                                        columnNumber: 45
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        size: 30
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LocationMap.tsx",
                                        lineNumber: 24,
                                        columnNumber: 50
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LocationMap.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "map-hint",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$click$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointerClick$3e$__["MousePointerClick"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LocationMap.tsx",
                                        lineNumber: 25,
                                        columnNumber: 40
                                    }, this),
                                    " Click to explore the map"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LocationMap.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LocationMap.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LocationMap.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LocationMap.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_s(LocationMap, "1cfVChV6gA1Fk8+xDnwTj3gmgZo=");
_c = LocationMap;
var _c;
__turbopack_context__.k.register(_c, "LocationMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Magnetic.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Magnetic",
    ()=>Magnetic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function Magnetic({ children }) {
    const move = (e)=>{
        if (!matchMedia('(hover: hover) and (pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const el = e.currentTarget, r = el.getBoundingClientRect();
        const clamp = (v)=>Math.max(-10, Math.min(10, v));
        el.style.transform = `translate(${clamp((e.clientX - r.left - r.width / 2) * 0.25)}px, ${clamp((e.clientY - r.top - r.height / 2) * 0.25)}px)`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "magnetic",
        onMouseMove: move,
        onMouseLeave: (e)=>{
            e.currentTarget.style.transform = '';
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Magnetic.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Magnetic;
var _c;
__turbopack_context__.k.register(_c, "Magnetic");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Navbar({ monogram, links }) {
    _s();
    const LINKS = links;
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const obs = new IntersectionObserver({
                "Navbar.useEffect": (es)=>es.forEach({
                        "Navbar.useEffect": (e)=>e.isIntersecting && setActive(e.target.id)
                    }["Navbar.useEffect"])
            }["Navbar.useEffect"], {
                rootMargin: '-45% 0px -50% 0px'
            });
            LINKS.forEach({
                "Navbar.useEffect": (id)=>{
                    const el = document.getElementById(id);
                    if (el) obs.observe(el);
                }
            }["Navbar.useEffect"]);
            const onScroll = {
                "Navbar.useEffect.onScroll": ()=>setScrolled(window.scrollY > 24)
            }["Navbar.useEffect.onScroll"];
            onScroll();
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>{
                    obs.disconnect();
                    window.removeEventListener('scroll', onScroll);
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        LINKS
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if (!open) return;
            const onKey = {
                "Navbar.useEffect.onKey": (e)=>{
                    if (e.key === 'Escape') {
                        setOpen(false);
                        toggleRef.current?.focus();
                    }
                }
            }["Navbar.useEffect.onKey"];
            window.addEventListener('keydown', onKey);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('keydown', onKey)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        open
    ]);
    const items = LINKS.map((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: `#${id}`,
            onClick: ()=>setOpen(false),
            "aria-current": active === id ? 'true' : undefined,
            className: `navlink${active === id ? ' active' : ''}`,
            children: id
        }, id, false, {
            fileName: "[project]/src/components/Navbar.tsx",
            lineNumber: 30,
            columnNumber: 5
        }, this));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `top${scrolled ? ' scrolled' : ''}`,
        "aria-label": "Primary",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#top",
                        className: "mono",
                        children: monogram
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "links",
                        children: items
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        ref: toggleRef,
                        className: "menu-btn",
                        "aria-expanded": open,
                        "aria-controls": "drawer",
                        "aria-label": open ? 'Close menu' : 'Open menu',
                        onClick: ()=>setOpen((o)=>!o),
                        children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 40,
                            columnNumber: 19
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {}, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 40,
                            columnNumber: 27
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "drawer",
                className: "drawer",
                children: items
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 43,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(Navbar, "fsjoIBri3+nrMM4xmYiz2rTUPKI=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProjectGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectGrid",
    ()=>ProjectGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TransitionLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.mjs [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.mjs [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/car.mjs [app-client] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart-pulse.mjs [app-client] (ecmascript) <export default as HeartPulse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanEye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scan-eye.mjs [app-client] (ecmascript) <export default as ScanEye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$train$2d$front$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrainFront$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/train-front.mjs [app-client] (ecmascript) <export default as TrainFront>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fallback$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fallback.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function spotlight(e) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
}
const iconFor = (p)=>{
    const k = `${p.slug} ${p.title}`.toLowerCase();
    if (/medical|ulcer|health/.test(k)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__["HeartPulse"];
    if (/railway|train/.test(k)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$train$2d$front$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrainFront$3e$__["TrainFront"];
    if (/accident|road/.test(k)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"];
    if (/detect|smok/.test(k)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanEye$3e$__["ScanEye"];
    if (/resume|job|recruit/.test(k)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"];
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"];
};
function ProjectGrid({ projects }) {
    _s();
    const [tag, setTag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const tags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectGrid.useMemo[tags]": ()=>[
                'All',
                ...new Set(projects.flatMap({
                    "ProjectGrid.useMemo[tags]": (p)=>p.technologies
                }["ProjectGrid.useMemo[tags]"]))
            ]
    }["ProjectGrid.useMemo[tags]"], [
        projects
    ]);
    const shown = tag === 'All' ? projects : projects.filter((p)=>p.technologies.includes(tag));
    if (!projects.length) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "sub",
        children: "No published projects yet."
    }, void 0, false, {
        fileName: "[project]/src/components/ProjectGrid.tsx",
        lineNumber: 28,
        columnNumber: 32
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "group",
                "aria-label": "Filter projects",
                style: {
                    display: 'flex',
                    gap: 8,
                    flexWrap: 'wrap',
                    marginBottom: 24
                },
                children: tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "tag filter",
                        "aria-pressed": t === tag,
                        onClick: ()=>setTag(t),
                        children: t
                    }, t, false, {
                        fileName: "[project]/src/components/ProjectGrid.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectGrid.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].div, {
                layout: true,
                className: "grid",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "popLayout",
                    children: shown.map((p, idx)=>{
                        const Icon = iconFor(p);
                        const cover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fallback$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coverOf"])(p);
                        const domain = p.case_study_content?.Domain;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].article, {
                            layout: true,
                            className: "glass spot pj-card",
                            onMouseMove: spotlight,
                            whileHover: {
                                y: -8
                            },
                            initial: {
                                opacity: 0,
                                scale: 0.96
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                scale: 0.96
                            },
                            transition: {
                                duration: 0.3
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pj-media",
                                    children: [
                                        cover ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: cover,
                                            alt: `${p.title} cover`,
                                            width: 1200,
                                            height: 800,
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectGrid.tsx",
                                            lineNumber: 48,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "pj-ph",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                size: 52,
                                                strokeWidth: 1.3,
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectGrid.tsx",
                                                lineNumber: 49,
                                                columnNumber: 47
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectGrid.tsx",
                                            lineNumber: 49,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "pj-shade",
                                            "aria-hidden": "true"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectGrid.tsx",
                                            lineNumber: 50,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "pj-no",
                                            "aria-hidden": "true",
                                            children: String(idx + 1).padStart(2, '0')
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectGrid.tsx",
                                            lineNumber: 51,
                                            columnNumber: 19
                                        }, this),
                                        typeof domain === 'string' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "pj-domain",
                                            children: domain
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectGrid.tsx",
                                            lineNumber: 52,
                                            columnNumber: 50
                                        }, this),
                                        p.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "pj-star",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    size: 13,
                                                    fill: "currentColor"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProjectGrid.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 60
                                                }, this),
                                                " Featured"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProjectGrid.tsx",
                                            lineNumber: 53,
                                            columnNumber: 34
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransitionLink"], {
                                            href: `/projects/${p.slug}/`,
                                            className: "pj-open",
                                            "aria-label": `Open case study: ${p.title}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                size: 22
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectGrid.tsx",
                                                lineNumber: 54,
                                                columnNumber: 128
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectGrid.tsx",
                                            lineNumber: 54,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProjectGrid.tsx",
                                    lineNumber: 45,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pj-body",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: p.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectGrid.tsx",
                                            lineNumber: 57,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "sub",
                                            children: p.summary
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectGrid.tsx",
                                            lineNumber: 58,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "chips",
                                            children: [
                                                p.technologies.slice(0, 4).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "tag",
                                                        children: t
                                                    }, t, false, {
                                                        fileName: "[project]/src/components/ProjectGrid.tsx",
                                                        lineNumber: 60,
                                                        columnNumber: 58
                                                    }, this)),
                                                p.technologies.length > 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "tag more",
                                                    children: [
                                                        "+",
                                                        p.technologies.length - 4
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ProjectGrid.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 51
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProjectGrid.tsx",
                                            lineNumber: 59,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pj-foot",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransitionLink"], {
                                                    href: `/projects/${p.slug}/`,
                                                    className: "btn btn-primary btn-sm",
                                                    children: [
                                                        "Case study ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ProjectGrid.tsx",
                                                            lineNumber: 64,
                                                            columnNumber: 113
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ProjectGrid.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 21
                                                }, this),
                                                p.github_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: p.github_url,
                                                    rel: "noopener noreferrer",
                                                    className: "btn btn-glass btn-sm",
                                                    children: "GitHub"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProjectGrid.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 38
                                                }, this),
                                                p.live_demo_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: p.live_demo_url,
                                                    rel: "noopener noreferrer",
                                                    className: "btn btn-glass btn-sm",
                                                    children: "Live demo"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProjectGrid.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProjectGrid.tsx",
                                            lineNumber: 63,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProjectGrid.tsx",
                                    lineNumber: 56,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, p.slug, true, {
                            fileName: "[project]/src/components/ProjectGrid.tsx",
                            lineNumber: 43,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/ProjectGrid.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectGrid.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProjectGrid.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(ProjectGrid, "xWjo3ZcoByqcSOb3iThzHajCEJ4=");
_c = ProjectGrid;
var _c;
__turbopack_context__.k.register(_c, "ProjectGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ResumeViewer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResumeViewer",
    ()=>ResumeViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fallback$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fallback.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ResumeViewer() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResumeViewer.useEffect": ()=>setMounted(true)
    }["ResumeViewer.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResumeViewer.useEffect": ()=>{
            if (!open) return;
            const prev = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            const key = {
                "ResumeViewer.useEffect.key": (e)=>{
                    if (e.key === 'Escape') setOpen(false);
                }
            }["ResumeViewer.useEffect.key"];
            window.addEventListener('keydown', key);
            return ({
                "ResumeViewer.useEffect": ()=>{
                    document.body.style.overflow = prev;
                    window.removeEventListener('keydown', key);
                }
            })["ResumeViewer.useEffect"];
        }
    }["ResumeViewer.useEffect"], [
        open
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "btn btn-glass btn-resume",
                onClick: ()=>setOpen(true),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/src/components/ResumeViewer.tsx",
                        lineNumber: 23,
                        columnNumber: 96
                    }, this),
                    " Resume"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ResumeViewer.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            mounted && open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rv",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Resume",
                onClick: (e)=>{
                    if (e.target === e.currentTarget) setOpen(false);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rv-sheet",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rv-bar",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "Resume"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ResumeViewer.tsx",
                                    lineNumber: 28,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rv-actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "btn btn-primary btn-sm",
                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].resume,
                                            download: "Sabari_T_Resume.pdf",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ResumeViewer.tsx",
                                                    lineNumber: 30,
                                                    columnNumber: 108
                                                }, this),
                                                " Download Resume"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ResumeViewer.tsx",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "rv-close",
                                            onClick: ()=>setOpen(false),
                                            "aria-label": "Close resume",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ResumeViewer.tsx",
                                                lineNumber: 31,
                                                columnNumber: 117
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ResumeViewer.tsx",
                                            lineNumber: 31,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ResumeViewer.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ResumeViewer.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rv-body",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                    className: "rv-head",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/sabari.jpg",
                                            alt: "",
                                            width: 96,
                                            height: 96,
                                            className: "rv-photo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ResumeViewer.tsx",
                                            lineNumber: 36,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ResumeViewer.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "rv-role",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ResumeViewer.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "rv-contact",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ResumeViewer.tsx",
                                                                    lineNumber: 41,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " ",
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ResumeViewer.tsx",
                                                            lineNumber: 41,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ResumeViewer.tsx",
                                                                    lineNumber: 42,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " ",
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].whatsappLabel
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ResumeViewer.tsx",
                                                            lineNumber: 42,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ResumeViewer.tsx",
                                                                    lineNumber: 43,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " ",
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].location
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ResumeViewer.tsx",
                                                            lineNumber: 43,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ResumeViewer.tsx",
                                                                    lineNumber: 44,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " LinkedIn"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ResumeViewer.tsx",
                                                            lineNumber: 44,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ResumeViewer.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ResumeViewer.tsx",
                                            lineNumber: 37,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ResumeViewer.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "rv-sec",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "Summary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ResumeViewer.tsx",
                                            lineNumber: 48,
                                            columnNumber: 43
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].bio
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ResumeViewer.tsx",
                                            lineNumber: 48,
                                            columnNumber: 59
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ResumeViewer.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "rv-sec",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "Skills"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ResumeViewer.tsx",
                                            lineNumber: 49,
                                            columnNumber: 43
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rv-skills",
                                            children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["skills"]).map(([g, v])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            children: g
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ResumeViewer.tsx",
                                                            lineNumber: 51,
                                                            columnNumber: 32
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "chips",
                                                            children: v.items.map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "tag",
                                                                    children: i.name
                                                                }, i.name, false, {
                                                                    fileName: "[project]/src/components/ResumeViewer.tsx",
                                                                    lineNumber: 51,
                                                                    columnNumber: 85
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ResumeViewer.tsx",
                                                            lineNumber: 51,
                                                            columnNumber: 44
                                                        }, this)
                                                    ]
                                                }, g, true, {
                                                    fileName: "[project]/src/components/ResumeViewer.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ResumeViewer.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ResumeViewer.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "rv-sec",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "Experience & Education"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ResumeViewer.tsx",
                                            lineNumber: 54,
                                            columnNumber: 43
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                            className: "rv-time",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeline"].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rv-t-head",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: t.what
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ResumeViewer.tsx",
                                                                    lineNumber: 57,
                                                                    columnNumber: 48
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        t.where,
                                                                        t.when ? ` · ${t.when}` : ''
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/ResumeViewer.tsx",
                                                                    lineNumber: 57,
                                                                    columnNumber: 73
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/ResumeViewer.tsx",
                                                            lineNumber: 57,
                                                            columnNumber: 21
                                                        }, this),
                                                        t.details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            children: t.details.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: d
                                                                }, d, false, {
                                                                    fileName: "[project]/src/components/ResumeViewer.tsx",
                                                                    lineNumber: 58,
                                                                    columnNumber: 59
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ResumeViewer.tsx",
                                                            lineNumber: 58,
                                                            columnNumber: 35
                                                        }, this)
                                                    ]
                                                }, t.what + t.where, true, {
                                                    fileName: "[project]/src/components/ResumeViewer.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ResumeViewer.tsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ResumeViewer.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "rv-sec",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "Projects"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ResumeViewer.tsx",
                                            lineNumber: 62,
                                            columnNumber: 43
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "rv-proj",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fallback$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackProjects"].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: p.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ResumeViewer.tsx",
                                                            lineNumber: 63,
                                                            columnNumber: 85
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: p.summary
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ResumeViewer.tsx",
                                                            lineNumber: 63,
                                                            columnNumber: 111
                                                        }, this)
                                                    ]
                                                }, p.slug, true, {
                                                    fileName: "[project]/src/components/ResumeViewer.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 68
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ResumeViewer.tsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ResumeViewer.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "rv-sec",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "Quick facts"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ResumeViewer.tsx",
                                            lineNumber: 65,
                                            columnNumber: 43
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "rv-proj",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["facts"].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: f.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ResumeViewer.tsx",
                                                            lineNumber: 66,
                                                            columnNumber: 75
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: f.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ResumeViewer.tsx",
                                                            lineNumber: 66,
                                                            columnNumber: 101
                                                        }, this)
                                                    ]
                                                }, f.label, true, {
                                                    fileName: "[project]/src/components/ResumeViewer.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 57
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ResumeViewer.tsx",
                                            lineNumber: 66,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ResumeViewer.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rv-foot",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "btn btn-primary",
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].resume,
                                        download: "Sabari_T_Resume.pdf",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ResumeViewer.tsx",
                                                lineNumber: 68,
                                                columnNumber: 124
                                            }, this),
                                            " Download Resume (PDF)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ResumeViewer.tsx",
                                        lineNumber: 68,
                                        columnNumber: 40
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ResumeViewer.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ResumeViewer.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ResumeViewer.tsx",
                    lineNumber: 26,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ResumeViewer.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this), document.body)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ResumeViewer.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(ResumeViewer, "VlaysusojikZx3po79dU20nMR2o=");
_c = ResumeViewer;
var _c;
__turbopack_context__.k.register(_c, "ResumeViewer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal,
    "ease",
    ()=>ease
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const ease = [
    0.22,
    1,
    0.36,
    1
];
function Reveal({ children, delay = 0 }) {
    _s();
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    if (reduce) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Reveal.tsx",
        lineNumber: 10,
        columnNumber: 22
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].div, {
        style: {
            transformPerspective: 900
        },
        initial: {
            opacity: 0,
            y: 56,
            rotateX: 12,
            scale: 0.95
        },
        whileInView: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1
        },
        viewport: {
            once: true,
            margin: '-70px'
        },
        transition: {
            duration: 0.75,
            ease,
            delay
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/Reveal.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(Reveal, "VqoxUmuj54Zl2QZdC/zIZVdX+nY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/RippleField.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RippleField",
    ()=>RippleField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function RippleField({ children }) {
    _s();
    const layer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RippleField.useEffect": ()=>{
            const host = root.current?.closest('section') ?? root.current, l = layer.current;
            if (!host || !l || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            let lastY = window.scrollY, acc = 0, lastT = 0;
            const drop = {
                "RippleField.useEffect.drop": ()=>{
                    const r = l.getBoundingClientRect(), h = host.getBoundingClientRect();
                    const top = Math.max(h.top, 0), bottom = Math.min(h.bottom, window.innerHeight);
                    const el = document.createElement('span');
                    el.className = 'rf-drop';
                    el.style.left = `${window.innerWidth * (0.15 + Math.random() * 0.7) - r.left}px`;
                    el.style.top = `${top + (bottom - top) * (0.15 + Math.random() * 0.7) - r.top}px`;
                    el.style.setProperty('--sz', `${280 + Math.random() * 180}px`);
                    l.appendChild(el);
                    el.addEventListener('animationend', {
                        "RippleField.useEffect.drop": (e)=>{
                            if (e.target === el) el.remove();
                        }
                    }["RippleField.useEffect.drop"]);
                    while(l.querySelectorAll('.rf-drop').length > 12)l.querySelector('.rf-drop')?.remove();
                }
            }["RippleField.useEffect.drop"];
            const onScroll = {
                "RippleField.useEffect.onScroll": ()=>{
                    const y = window.scrollY, d = Math.abs(y - lastY);
                    lastY = y;
                    const h = host.getBoundingClientRect();
                    if (h.bottom < 0 || h.top > window.innerHeight) {
                        acc = 0;
                        return;
                    }
                    acc += d;
                    const now = performance.now();
                    if (acc >= 70 && now - lastT > 140) {
                        acc = 0;
                        lastT = now;
                        drop();
                    }
                }
            }["RippleField.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "RippleField.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["RippleField.useEffect"];
        }
    }["RippleField.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: root,
        className: "ripple-field",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: layer,
                className: "rf-layer",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/RippleField.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RippleField.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(RippleField, "9nNia7Td0+GCG/cxKrNgO3ib1u4=");
_c = RippleField;
var _c;
__turbopack_context__.k.register(_c, "RippleField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/RoleRotator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RoleRotator",
    ()=>RoleRotator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function RoleRotator({ roles }) {
    _s();
    const [i, setI] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RoleRotator.useEffect": ()=>{
            if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            const t = setInterval({
                "RoleRotator.useEffect.t": ()=>setI({
                        "RoleRotator.useEffect.t": (x)=>(x + 1) % roles.length
                    }["RoleRotator.useEffect.t"])
            }["RoleRotator.useEffect.t"], 2600);
            return ({
                "RoleRotator.useEffect": ()=>clearInterval(t)
            })["RoleRotator.useEffect"];
        }
    }["RoleRotator.useEffect"], [
        roles.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: roles.join(', ')
            }, void 0, false, {
                fileName: "[project]/src/components/RoleRotator.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "rise role-word",
                "aria-hidden": "true",
                children: roles[i]
            }, i, false, {
                fileName: "[project]/src/components/RoleRotator.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RoleRotator.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(RoleRotator, "hNm1BMhSwnO7hi+K19vdPn3jRII=");
_c = RoleRotator;
var _c;
__turbopack_context__.k.register(_c, "RoleRotator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/RollingNumber.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RollingNumber",
    ()=>RollingNumber
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function RollingNumber({ value, suffix = '', duration = 1.8 }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [on, setOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RollingNumber.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            if (typeof IntersectionObserver === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                setOn(true);
                return;
            }
            const io = new IntersectionObserver({
                "RollingNumber.useEffect": (es)=>{
                    if (es.some({
                        "RollingNumber.useEffect": (e)=>e.isIntersecting
                    }["RollingNumber.useEffect"])) {
                        setOn(true);
                        io.disconnect();
                    }
                }
            }["RollingNumber.useEffect"], {
                threshold: 0.4
            });
            io.observe(el);
            return ({
                "RollingNumber.useEffect": ()=>io.disconnect()
            })["RollingNumber.useEffect"];
        }
    }["RollingNumber.useEffect"], []);
    const digits = String(value).split('');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        className: "roll",
        "aria-label": `${value}${suffix}`,
        children: [
            digits.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "roll-col",
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "roll-reel",
                        style: {
                            transform: `translateY(${on ? -(10 + Number(d)) : 0}em)`,
                            transitionDuration: `${duration + i * 0.35}s`
                        },
                        children: Array.from({
                            length: 20
                        }, (_, n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: n % 10
                            }, n, false, {
                                fileName: "[project]/src/components/RollingNumber.tsx",
                                lineNumber: 20,
                                columnNumber: 51
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/RollingNumber.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this)
                }, i, false, {
                    fileName: "[project]/src/components/RollingNumber.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)),
            suffix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "roll-suffix",
                "aria-hidden": "true",
                children: suffix
            }, void 0, false, {
                fileName: "[project]/src/components/RollingNumber.tsx",
                lineNumber: 24,
                columnNumber: 18
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RollingNumber.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(RollingNumber, "s+D2Unuz/a0d0TB1GLikAViXWaI=");
_c = RollingNumber;
var _c;
__turbopack_context__.k.register(_c, "RollingNumber");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ScrollBand.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollBand",
    ()=>ScrollBand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ScrollBand({ text }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollBand.useEffect": ()=>{
            const el = ref.current;
            if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            let cleanup = {
                "ScrollBand.useEffect.cleanup": ()=>{}
            }["ScrollBand.useEffect.cleanup"];
            let cancelled = false;
            const start = {
                "ScrollBand.useEffect.start": async ()=>{
                    const [{ gsap }, { ScrollTrigger }] = await Promise.all([
                        __turbopack_context__.A("[project]/node_modules/gsap/index.js [app-client] (ecmascript, async loader)"),
                        __turbopack_context__.A("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript, async loader)")
                    ]);
                    if (cancelled) return;
                    gsap.registerPlugin(ScrollTrigger);
                    const tween = gsap.fromTo(el, {
                        xPercent: 5
                    }, {
                        xPercent: -35,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top bottom',
                            end: 'bottom top',
                            scrub: 0.6
                        }
                    });
                    cleanup = ({
                        "ScrollBand.useEffect.start": ()=>{
                            tween.scrollTrigger?.kill();
                            tween.kill();
                        }
                    })["ScrollBand.useEffect.start"];
                }
            }["ScrollBand.useEffect.start"];
            const io = new IntersectionObserver({
                "ScrollBand.useEffect": (entries)=>{
                    if (entries.some({
                        "ScrollBand.useEffect": (e)=>e.isIntersecting
                    }["ScrollBand.useEffect"])) {
                        io.disconnect();
                        void start();
                    }
                }
            }["ScrollBand.useEffect"], {
                rootMargin: '600px 0px'
            });
            io.observe(el);
            return ({
                "ScrollBand.useEffect": ()=>{
                    cancelled = true;
                    io.disconnect();
                    cleanup();
                }
            })["ScrollBand.useEffect"];
        }
    }["ScrollBand.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "band",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "band-text",
            children: `${text} · `.repeat(6)
        }, void 0, false, {
            fileName: "[project]/src/components/ScrollBand.tsx",
            lineNumber: 29,
            columnNumber: 46
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ScrollBand.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(ScrollBand, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = ScrollBand;
var _c;
__turbopack_context__.k.register(_c, "ScrollBand");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SectionAuras.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionAuras",
    ()=>SectionAuras
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function SectionAuras() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SectionAuras.useEffect": ()=>{
            const io = new IntersectionObserver({
                "SectionAuras.useEffect": (es)=>es.forEach({
                        "SectionAuras.useEffect": (e)=>e.target.setAttribute('data-live', String(e.isIntersecting))
                    }["SectionAuras.useEffect"])
            }["SectionAuras.useEffect"], {
                rootMargin: '200px'
            });
            document.querySelectorAll('section.aura').forEach({
                "SectionAuras.useEffect": (s)=>io.observe(s)
            }["SectionAuras.useEffect"]);
            return ({
                "SectionAuras.useEffect": ()=>io.disconnect()
            })["SectionAuras.useEffect"];
        }
    }["SectionAuras.useEffect"], []);
    return null;
}
_s(SectionAuras, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = SectionAuras;
var _c;
__turbopack_context__.k.register(_c, "SectionAuras");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SkillCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkillCard",
    ()=>SkillCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.mjs [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.mjs [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/languages.mjs [app-client] (ecmascript) <export default as Languages>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square-text.mjs [app-client] (ecmascript) <export default as MessageSquareText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.mjs [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plug.mjs [app-client] (ecmascript) <export default as Plug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanEye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scan-eye.mjs [app-client] (ecmascript) <export default as ScanEye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server.mjs [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$workflow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Workflow$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/workflow.mjs [app-client] (ecmascript) <export default as Workflow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BrandIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BrandIcons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const ICONS = {
    brain: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
    sparkles: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
    server: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"],
    scan: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanEye$3e$__["ScanEye"],
    palette: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"]
};
/** Picks a brand logo (or a generic icon) for a skill from its name. */ function skillIcon(name) {
    const n = name.toLowerCase();
    const brand = [
        [
            /python/,
            'python'
        ],
        [
            /django/,
            'django'
        ],
        [
            /^git$/,
            'git'
        ],
        [
            /mysql/,
            'mysql'
        ],
        [
            /figma/,
            'figma'
        ],
        [
            /claude/,
            'claude'
        ],
        [
            /chatgpt|openai/,
            'openai'
        ],
        [
            /hugging/,
            'huggingface'
        ],
        [
            /langchain/,
            'langchain'
        ],
        [
            /javascript/,
            'javascript'
        ],
        [
            /html/,
            'html5'
        ],
        [
            /php/,
            'php'
        ]
    ];
    for (const [re, k] of brand)if (re.test(n)) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BrandIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BrandIcon"], {
        name: k,
        size: 20
    }, void 0, false, {
        fileName: "[project]/src/components/SkillCard.tsx",
        lineNumber: 14,
        columnNumber: 55
    }, this);
    const generic = [
        [
            /llm|prompt/,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquareText$3e$__["MessageSquareText"]
        ],
        [
            /rest|api/,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plug$3e$__["Plug"]
        ],
        [
            /vision|detection/,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"]
        ],
        [
            /medical|image/,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanEye$3e$__["ScanEye"]
        ],
        [
            /automation|workflow/,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$workflow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Workflow$3e$__["Workflow"]
        ],
        [
            /ml|model/,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"]
        ],
        [
            /nlp|language/,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$languages$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Languages$3e$__["Languages"]
        ],
        [
            /responsive|ui/,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"]
        ]
    ];
    for (const [re, I] of generic)if (re.test(n)) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(I, {
        size: 20
    }, void 0, false, {
        fileName: "[project]/src/components/SkillCard.tsx",
        lineNumber: 17,
        columnNumber: 57
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
        size: 20
    }, void 0, false, {
        fileName: "[project]/src/components/SkillCard.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
function SkillCard({ title, icon, items }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [on, setOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SkillCard.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const io = new IntersectionObserver({
                "SkillCard.useEffect": ([e])=>{
                    if (e.isIntersecting) {
                        setOn(true);
                        io.disconnect();
                    }
                }
            }["SkillCard.useEffect"], {
                threshold: 0.2
            });
            io.observe(el);
            return ({
                "SkillCard.useEffect": ()=>io.disconnect()
            })["SkillCard.useEffect"];
        }
    }["SkillCard.useEffect"], []);
    const Icon = ICONS[icon] ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `glass skill-card sk2${on ? ' on' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sk-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sk-icon",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/src/components/SkillCard.tsx",
                            lineNumber: 34,
                            columnNumber: 35
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillCard.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/SkillCard.tsx",
                                lineNumber: 35,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    items.length,
                                    " skills"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SkillCard.tsx",
                                lineNumber: 35,
                                columnNumber: 30
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SkillCard.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SkillCard.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "sk-tiles",
                children: items.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: `sk-tile lv${s.pct >= 80 ? 3 : s.pct >= 50 ? 2 : 1}`,
                        style: {
                            ['--pct']: `${s.pct}%`,
                            ['--dl']: `${i * 90}ms`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sk-logo",
                                children: skillIcon(s.name)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SkillCard.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sk-info",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sk-line",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "sk-name",
                                                children: s.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillCard.tsx",
                                                lineNumber: 42,
                                                columnNumber: 40
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                className: "sk-lvl",
                                                children: s.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillCard.tsx",
                                                lineNumber: 42,
                                                columnNumber: 81
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SkillCard.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sk-bar",
                                        role: "img",
                                        "aria-label": `${s.name}: ${s.label}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                            fileName: "[project]/src/components/SkillCard.tsx",
                                            lineNumber: 43,
                                            columnNumber: 88
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SkillCard.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SkillCard.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.name, true, {
                        fileName: "[project]/src/components/SkillCard.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/SkillCard.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SkillCard.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(SkillCard, "s+D2Unuz/a0d0TB1GLikAViXWaI=");
_c = SkillCard;
var _c;
__turbopack_context__.k.register(_c, "SkillCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TiltCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TiltCard",
    ()=>TiltCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
const canTilt = ()=>window.matchMedia('(hover: hover) and (pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function TiltCard({ children }) {
    const move = (e)=>{
        if (!canTilt()) return;
        const el = e.currentTarget, r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(800px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-4px)`;
    };
    const leave = (e)=>{
        e.currentTarget.style.transform = '';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tilt h-full",
        onMouseMove: move,
        onMouseLeave: leave,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/TiltCard.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
_c = TiltCard;
var _c;
__turbopack_context__.k.register(_c, "TiltCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Timeline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Timeline",
    ()=>Timeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.mjs [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.mjs [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.mjs [app-client] (ecmascript) <export default as Palette>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const kindOf = (e)=>{
    const k = `${e.what} ${e.where}`.toLowerCase();
    if (/ui\/ux|design course/.test(k)) return {
        label: 'Course',
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"]
    };
    if (/b\.sc|university|degree/.test(k)) return {
        label: 'Education',
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"]
    };
    if (/certif|workshop/.test(k)) return {
        label: 'Certifications',
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"]
    };
    return {
        label: 'Experience',
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
    };
};
function Timeline({ entries }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: ref,
        offset: [
            'start 80%',
            'end 60%'
        ]
    });
    const scaleY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        0,
        1
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
        ref: ref,
        className: "timeline tl2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "tl-track",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/Timeline.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].span, {
                className: "tl-line",
                "aria-hidden": "true",
                style: {
                    scaleY: reduce ? 1 : scaleY
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Timeline.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            entries.map((e, i)=>{
                const { label, Icon } = kindOf(e);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].li, {
                    className: `tl-item tl-${label.toLowerCase()}`,
                    initial: reduce ? false : {
                        opacity: 0,
                        x: -24
                    },
                    whileInView: {
                        opacity: 1,
                        x: 0
                    },
                    viewport: {
                        once: true,
                        margin: '-80px'
                    },
                    transition: {
                        duration: 0.55
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "tl-node tl-badge",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/Timeline.tsx",
                                lineNumber: 32,
                                columnNumber: 67
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Timeline.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "glass tl-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                    className: "tl-top",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "tl-kind",
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Timeline.tsx",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, this),
                                        e.when && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "tl-when",
                                            children: e.when
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Timeline.tsx",
                                            lineNumber: 36,
                                            columnNumber: 28
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Timeline.tsx",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "tl-role",
                                    children: e.what
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Timeline.tsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "tl-org",
                                    children: e.where
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Timeline.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this),
                                e.details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "tl-points",
                                    children: e.details.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Timeline.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 87
                                                }, this),
                                                d
                                            ]
                                        }, d, true, {
                                            fileName: "[project]/src/components/Timeline.tsx",
                                            lineNumber: 40,
                                            columnNumber: 75
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Timeline.tsx",
                                    lineNumber: 40,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Timeline.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/components/Timeline.tsx",
                    lineNumber: 29,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Timeline.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(Timeline, "BQPWQhwn0XMJY5QCdFfh70+X9O8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = Timeline;
var _c;
__turbopack_context__.k.register(_c, "Timeline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TransitionLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransitionLink",
    ()=>TransitionLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function TransitionLink({ href, className = '', children }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function onClick(e) {
        if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        e.preventDefault();
        const root = document.documentElement;
        setBusy(true);
        root.classList.add('pt-cover');
        window.setTimeout(()=>router.push(href), 450);
        window.setTimeout(()=>{
            root.classList.remove('pt-cover');
            setBusy(false);
        }, 6000); // safety net if navigation stalls
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        onClick: onClick,
        className: `${className}${busy ? ' busy' : ''}`,
        "aria-busy": busy,
        children: [
            children,
            busy && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "btn-spin",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/TransitionLink.tsx",
                lineNumber: 24,
                columnNumber: 26
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TransitionLink.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(TransitionLink, "u8P6Slo7w5ENE9bHfSRYTKVwlt8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = TransitionLink;
var _c;
__turbopack_context__.k.register(_c, "TransitionLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/blast.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fireParticles",
    ()=>fireParticles
]);
const COLORS = [
    '#A855F7',
    '#22D3EE',
    '#C4B5FD',
    '#F5F3FF',
    '#6D28D9'
];
function fireParticles(canvas, duration = 1700) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.width = window.innerWidth * dpr, h = canvas.height = window.innerHeight * dpr;
    const cx = w / 2, cy = h / 2, reach = Math.hypot(w, h) / 2;
    const ps = Array.from({
        length: 720
    }, (_, i)=>{
        const a = Math.random() * Math.PI * 2, big = i % 23 === 0, streak = i % 3 === 0;
        const sp = (big ? 0.25 : 0.3 + Math.random() * 1.1) * reach / 46;
        return {
            x: cx,
            y: cy,
            px: cx,
            py: cy,
            vx: Math.cos(a) * sp,
            vy: Math.sin(a) * sp,
            streak,
            r: (big ? 9 + Math.random() * 7 : 2.4 + Math.random() * 3.6) * dpr,
            c: COLORS[Math.random() * COLORS.length | 0],
            life: 0.7 + Math.random() * 0.5
        };
    });
    const t0 = performance.now();
    let last = t0;
    const tick = (now)=>{
        const t = (now - t0) / duration, k = Math.min((now - last) / 16.67, 4);
        last = now;
        const drag = Math.pow(0.985, k);
        ctx.globalCompositeOperation = 'destination-out';
        ctx.globalAlpha = Math.min(0.12 * k, 0.5);
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, w, h); // fade old frames = trails
        ctx.globalCompositeOperation = 'lighter';
        for (const p of ps){
            p.px = p.x;
            p.py = p.y;
            p.x += p.vx * k;
            p.y += p.vy * k;
            p.vx *= drag;
            p.vy *= drag;
            p.vy += 0.015 * dpr * k;
            const a = Math.max(0, 1 - t / p.life);
            if (a <= 0) continue;
            ctx.globalAlpha = a;
            ctx.fillStyle = ctx.strokeStyle = p.c;
            if (p.streak) {
                ctx.lineWidth = p.r * 0.8;
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.moveTo(p.px - p.vx * 4, p.py - p.vy * 4);
                ctx.lineTo(p.x, p.y);
                ctx.stroke();
            } else {
                const r = p.r * (0.5 + a);
                ctx.beginPath();
                ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = a * 0.25;
                ctx.beginPath();
                ctx.arc(p.x, p.y, r * 2.6, 0, Math.PI * 2);
                ctx.fill(); // cheap glow (shadowBlur is too slow)
            }
        }
        if (t < 1.1) requestAnimationFrame(tick);
        else {
            ctx.globalCompositeOperation = 'source-over';
            ctx.globalAlpha = 1;
            ctx.clearRect(0, 0, w, h);
        }
    };
    requestAnimationFrame(tick);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/brevo.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BREVO",
    ()=>BREVO,
    "brevoReady",
    ()=>brevoReady
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// NEXT_PUBLIC_ vars must be written out literally like this so Next.js can inline them at build time.
const API_KEY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_BREVO_API_KEY ?? '';
const SENDER_EMAIL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_BREVO_SENDER_EMAIL ?? '';
const TO_EMAIL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_BREVO_TO_EMAIL ?? '';
const BREVO = {
    apiKey: API_KEY.trim(),
    senderEmail: SENDER_EMAIL.trim(),
    toEmail: TO_EMAIL.trim(),
    senderName: 'Portfolio Contact Form',
    url: 'https://api.brevo.com/v3/smtp/email'
};
const brevoReady = ()=>!!(BREVO.apiKey && BREVO.senderEmail);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/contact.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactError",
    ()=>ContactError,
    "sendContact",
    ()=>sendContact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brevo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/brevo.ts [app-client] (ecmascript)");
;
;
class ContactError extends Error {
    fields;
    constructor(message, fields){
        super(message), this.fields = fields;
    }
}
const ENDPOINT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CONTACT_ENDPOINT;
const esc = (t)=>t.replace(/[&<>"']/g, (c)=>({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        })[c]);
function openMailto(d, subject) {
    window.location.href = `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${d.message}\n\n${d.name} <${d.email}>`)}`;
    return 'mailto';
}
async function sendContact(d) {
    if (d.website) return 'sent'; // honeypot
    const subject = `Portfolio message from ${d.name}`;
    // 1) Brevo
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brevo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brevoReady"])()) {
        try {
            const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brevo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BREVO"].url, {
                method: 'POST',
                headers: {
                    'api-key': __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brevo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BREVO"].apiKey,
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    sender: {
                        name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brevo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BREVO"].senderName,
                        email: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brevo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BREVO"].senderEmail
                    },
                    to: [
                        {
                            email: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brevo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BREVO"].toEmail || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email,
                            name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].name
                        }
                    ],
                    replyTo: {
                        email: d.email,
                        name: d.name
                    },
                    subject,
                    htmlContent: `<h3>New message from your portfolio</h3><p><b>Name:</b> ${esc(d.name)}<br><b>Email:</b> ${esc(d.email)}</p><p>${esc(d.message).replace(/\n/g, '<br>')}</p>`,
                    textContent: `${d.message}\n\n${d.name} <${d.email}>`
                })
            });
            if (res.ok) return 'sent';
            if (res.status === 429) throw new ContactError('Too many messages. Try again later.');
            const body = await res.text();
            console.error(`[contact] Brevo failed ${res.status}:`, body);
        } catch (e) {
            if (e instanceof ContactError) throw e;
            console.error('[contact] Brevo request error (CORS / network / blocked):', e);
        }
        return openMailto(d, subject); // Brevo failed -> still let the visitor reach you
    }
    console.warn('[contact] Brevo env vars are EMPTY in this build. Add NEXT_PUBLIC_BREVO_* in Render and rebuild with cleared cache.');
    // 2) Optional external endpoint
    if (ENDPOINT) {
        try {
            const res = await fetch(ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    name: d.name,
                    email: d.email,
                    subject,
                    message: d.message
                })
            });
            if (res.ok) return 'sent';
            if (res.status === 429) throw new ContactError('Too many messages. Try again later.');
        } catch (e) {
            if (e instanceof ContactError) throw e;
        }
    }
    // 3) mailto
    return openMailto(d, subject);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/content.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// All content below comes from Sabari's resume. Edit this file to change what the site shows.
__turbopack_context__.s([
    "LEVELS",
    ()=>LEVELS,
    "achievements",
    ()=>achievements,
    "avatar",
    ()=>avatar,
    "design",
    ()=>design,
    "designProjects",
    ()=>designProjects,
    "facts",
    ()=>facts,
    "marqueeSkills",
    ()=>marqueeSkills,
    "orbitIcons",
    ()=>orbitIcons,
    "profile",
    ()=>profile,
    "skills",
    ()=>skills,
    "stats",
    ()=>stats,
    "timeline",
    ()=>timeline
]);
const profile = {
    name: 'Sabari Thirunavukkarasu',
    title: 'AI / GenAI Developer',
    tagline: 'Python, Django, LLMs and Computer Vision',
    roles: [
        'GenAI applications',
        'Claude and ChatGPT integrations',
        'computer vision systems',
        'Django backends'
    ],
    status: 'Open to AI / GenAI developer roles',
    intro: 'AI/ML developer and fresh graduate who builds GenAI-powered products that integrate Claude and ChatGPT across healthcare, safety and transport.',
    bio: 'AI/ML enthusiast and fresh graduate with hands-on experience building GenAI-powered applications, integrating large language models (Claude, ChatGPT) into real-world products across healthcare, safety, and transport. Skilled in Python, prompt engineering, and ML model integration, with practical exposure to computer vision and predictive analytics. Eager to apply and deepen expertise in frameworks like LangChain, LlamaIndex, and Hugging Face, and contribute to cutting-edge Generative AI products in a collaborative engineering environment.',
    location: 'Erode, India',
    email: 'sabariarasu54@gmail.com',
    linkedin: 'https://linkedin.com/in/sabari-thirunavukkarasu-550805263',
    behance: 'https://behance.net/sabarit',
    resume: '/Sabari_T_Resume.pdf',
    whatsapp: '919677339073',
    whatsappLabel: ''
};
const facts = [
    {
        icon: 'pin',
        label: 'Location',
        value: 'Erode, India'
    },
    {
        icon: 'grad',
        label: 'Education',
        value: 'B.Sc Computer Science, Bharathidasan University (GPA 8.2 / 10)'
    },
    {
        icon: 'target',
        label: 'Focus',
        value: 'GenAI apps, LLM integration, computer vision, predictive analytics'
    },
    {
        icon: 'book',
        label: 'Learning',
        value: 'LangChain, LlamaIndex and Hugging Face (self-learning)'
    }
];
const LEVELS = {
    learning: {
        label: 'Learning',
        pct: 35
    },
    working: {
        label: 'Working',
        pct: 65
    },
    strong: {
        label: 'Strong',
        pct: 90
    }
};
const skills = {
    'GenAI and NLP': {
        icon: 'brain',
        items: [
            {
                name: 'LLM Integration (Claude, ChatGPT)',
                level: 'strong'
            },
            {
                name: 'Prompt Engineering',
                level: 'strong'
            },
            {
                name: 'LangChain',
                level: 'learning'
            },
            {
                name: 'LlamaIndex',
                level: 'learning'
            },
            {
                name: 'Hugging Face',
                level: 'learning'
            }
        ]
    },
    'AI Tools': {
        icon: 'sparkles',
        items: [
            {
                name: 'Claude (Anthropic)',
                level: 'strong'
            },
            {
                name: 'ChatGPT',
                level: 'strong'
            },
            {
                name: 'AI Workflow Automation',
                level: 'working'
            }
        ]
    },
    Backend: {
        icon: 'server',
        items: [
            {
                name: 'Python',
                level: 'strong'
            },
            {
                name: 'Django',
                level: 'strong'
            },
            {
                name: 'REST APIs',
                level: 'strong'
            },
            {
                name: 'MySQL',
                level: 'working'
            },
            {
                name: 'PHP',
                level: 'working'
            },
            {
                name: 'Git',
                level: 'working'
            }
        ]
    },
    'AI and ML': {
        icon: 'scan',
        items: [
            {
                name: 'ML Model Integration',
                level: 'strong'
            },
            {
                name: 'Computer Vision',
                level: 'working'
            },
            {
                name: 'Medical Image Analysis',
                level: 'working'
            },
            {
                name: 'Detection Systems',
                level: 'working'
            }
        ]
    },
    'Frontend and Design': {
        icon: 'palette',
        items: [
            {
                name: 'HTML5 and CSS3',
                level: 'working'
            },
            {
                name: 'JavaScript',
                level: 'working'
            },
            {
                name: 'Figma',
                level: 'strong'
            },
            {
                name: 'Responsive UI',
                level: 'working'
            }
        ]
    }
};
const timeline = [
    {
        what: 'Python AI/ML Developer',
        where: 'JLA Tech Service',
        details: [
            'Built AI-powered management and automation systems with Python Django, integrating Claude and ChatGPT for intelligent workflow automation.',
            'Developed predictive analytics tools delivering data-driven forecasts and business intelligence from structured inputs.',
            'Managed end-to-end development: requirement gathering, AI integration, backend engineering, testing and deployment.'
        ]
    },
    {
        what: 'AI Full Stack Developer',
        where: 'Freelance',
        details: [
            'Developed and deployed full-stack web applications and AI-powered chatbots using Python Django, HTML/CSS/JavaScript and MySQL.',
            'Built detection and prediction web apps with computer vision and ML models for healthcare, public safety and transport.'
        ]
    },
    {
        what: 'B.Sc Computer Science',
        where: 'Bharathidasan University',
        when: '2021 to 2024',
        details: [
            'GPA 8.2 / 10'
        ]
    },
    {
        what: 'UI/UX Design Course',
        where: 'Fortune Innovatives',
        when: '2024 to 2025'
    },
    {
        what: 'Certifications',
        where: 'Workshops',
        details: [
            'Website Evaluation Workshop (Dec 2024)',
            'Branding Workshop (Jan 2024)',
            'Digital Marketing Workshop (Feb 2025)'
        ]
    }
];
const avatar = {
    body: '/avatar.webp'
};
const marqueeSkills = [
    {
        name: 'Artificial Intelligence',
        icon: 'brain'
    },
    {
        name: 'Generative AI',
        icon: 'sparkles'
    },
    {
        name: 'Python',
        icon: 'python'
    },
    {
        name: 'Django',
        icon: 'django'
    },
    {
        name: 'Machine Learning',
        icon: 'cpu'
    },
    {
        name: 'Computer Vision',
        icon: 'eye'
    },
    {
        name: 'LLM Integration',
        icon: 'openai'
    },
    {
        name: 'Prompt Engineering',
        icon: 'message'
    },
    {
        name: 'Claude',
        icon: 'claude'
    },
    {
        name: 'ChatGPT',
        icon: 'openai'
    },
    {
        name: 'NLP',
        icon: 'languages'
    },
    {
        name: 'REST APIs',
        icon: 'plug'
    },
    {
        name: 'LangChain',
        icon: 'langchain'
    },
    {
        name: 'Hugging Face',
        icon: 'huggingface'
    },
    {
        name: 'MySQL',
        icon: 'mysql'
    },
    {
        name: 'JavaScript',
        icon: 'javascript'
    },
    {
        name: 'Figma',
        icon: 'figma'
    },
    {
        name: 'Git',
        icon: 'git'
    }
];
const orbitIcons = [
    'python',
    'django',
    'git',
    'figma',
    'claude',
    'openai',
    'huggingface',
    'mysql'
];
const stats = [
    {
        value: 2,
        suffix: '+',
        label: 'Years Developing Experience'
    },
    {
        value: 20,
        suffix: '+',
        label: 'Projects Shipped'
    },
    {
        value: 5,
        suffix: '+',
        label: 'Core Technologies'
    }
];
const design = {
    enabled: true,
    heading: 'UI/UX Design'
};
const designProjects = [
    {
        slug: 'evento',
        title: 'Evento',
        tagline: 'Event booking app',
        cover: '/design/evento.jpg',
        tools: [
            'Figma',
            'Wireframing',
            'Prototyping'
        ],
        role: 'UI/UX designer',
        year: '2024 to 2025',
        overview: 'Evento is an event booking app concept: discover events, view the details and book a place in a few taps. I designed the full flow in Figma, from low-fidelity wireframes to a clickable high-fidelity prototype.',
        problem: 'Finding an event, comparing options and booking usually takes too many screens. The goal was a short, clear path from browsing to a confirmed booking.',
        process: [
            'Mapped the user flow from home to booking confirmation.',
            'Sketched low-fidelity wireframes for every key screen.',
            'Built a consistent colour, type and component set in Figma.',
            'Turned the wireframes into high-fidelity screens and a clickable prototype.'
        ],
        features: [
            'Event discovery and browsing',
            'Clear event detail screens',
            'Simple booking flow',
            'Consistent components across screens'
        ],
        outcome: 'A complete, clickable prototype that shows the whole booking journey end to end.',
        behance: 'https://behance.net/sabarit'
    },
    {
        slug: 'neobrew',
        title: 'Neobrew',
        tagline: 'Craft coffee e-commerce',
        cover: '/projects/Neobrew.jpg',
        tools: [
            'Figma',
            'Wireframing',
            'Prototyping'
        ],
        role: 'UI/UX designer',
        year: '2024 to 2025',
        overview: 'Neobrew is an e-commerce concept for craft coffee. I designed the storefront in Figma with warm, rich visuals, product browsing and a simple checkout journey, then linked the screens into a high-fidelity prototype.',
        problem: 'Online coffee shops often look like generic stores. The brief was to make buying coffee feel as good as drinking it, while keeping the path to checkout short.',
        process: [
            'Defined the brand mood: warm, premium and approachable.',
            'Wireframed the home, product, cart and checkout screens.',
            'Designed the high-fidelity UI with a coffee-inspired palette.',
            'Linked the screens into an interactive prototype and refined the flow.'
        ],
        features: [
            'Product browsing with strong visuals',
            'Clear product pages',
            'Short cart and checkout flow',
            'Brand-led colour and typography'
        ],
        outcome: 'A polished e-commerce prototype with a distinct brand feel.',
        behance: 'https://behance.net/sabarit'
    },
    {
        slug: 'mindfultech',
        title: 'MindfulTech',
        tagline: 'Mental health platform',
        cover: '/design/mindfultech.jpg',
        tools: [
            'Figma',
            'Wireframing',
            'Prototyping'
        ],
        role: 'UI/UX designer',
        year: '2024 to 2025',
        overview: 'MindfulTech is a mental health platform concept built around calm, clarity and trust. I designed the experience in Figma, from wireframes to a high-fidelity prototype, with soft visuals and gentle interactions.',
        problem: 'Wellbeing apps can feel overwhelming. The design needed to be calm, easy to navigate and never pushy, so people feel comfortable using it.',
        process: [
            'Researched the tone and visual language of calm, trustworthy products.',
            'Wireframed the main journeys with as few steps as possible.',
            'Designed soft, accessible high-fidelity screens.',
            'Prototyped the flows and checked them for clarity.'
        ],
        features: [
            'Calm, low-stimulation visual style',
            'Simple navigation',
            'Readable typography and spacing',
            'Consistent component library'
        ],
        outcome: 'A gentle, accessible prototype that puts the user at ease.',
        behance: 'https://behance.net/sabarit'
    }
];
const achievements = [
    {
        id: 'chief-guest',
        icon: 'mic',
        badge: 'Chief Guest',
        title: 'Chief Guest, Association Function 2k26',
        subtitle: 'RVS Polytechnic College, Sulur, Coimbatore',
        date: '24 July 2026',
        summary: 'Invited as Chief Guest by the Departments of Computer Engineering and Information Technology.',
        details: [
            'A major career milestone and a proud moment: I was invited as the Chief Guest for the Association Function 2k26, hosted by the Departments of Computer Engineering and Information Technology at RVS Polytechnic College, Sulur, Coimbatore.',
            'Standing on that stage and addressing passionate students as a Python AI/ML Developer representing INITZ Technologies and JLA Tech Service has been one of the biggest achievements of my professional journey so far.',
            'A heartfelt thank you to the management, Principal Dr. M. Nadarajan, ME., Ph.D, the department faculty and the student organisers for the warm welcome and the seamless event.',
            'Stepping into a mentor and guest speaker role reinforces my passion for building impactful AI solutions while giving back to the tech community.'
        ],
        highlights: [
            'Shared insights on emerging trends in Artificial Intelligence and Machine Learning.',
            'Discussed practical roadmap strategies for students aspiring to build modern tech and software careers.',
            'Interacted with energetic minds eager to innovate and make an impact in the industry.'
        ],
        tags: [
            'Chief Guest',
            'Public Speaking',
            'AI / ML',
            'Python',
            'Mentorship',
            'RVS Group'
        ],
        poster: '/achievements/invitation.jpg',
        gallery: [
            {
                src: '/achievements/guest-panel.jpg',
                alt: 'On stage with the Principal, faculty and staff at the Association Function'
            },
            {
                src: '/achievements/guest-speaking-1.jpg',
                alt: 'Addressing the students on how AI will change jobs'
            },
            {
                src: '/achievements/guest-speaking-2.jpg',
                alt: 'Presenting AI trends in front of the XENORA 2k26 stage'
            },
            {
                src: '/achievements/guest-award.jpg',
                alt: 'Receiving a token of appreciation from the Principal'
            },
            {
                src: '/achievements/guest-speaking-3.jpg',
                alt: 'Talking with students about AI and future skills'
            }
        ]
    },
    {
        id: 'bsc',
        icon: 'grad',
        badge: 'Degree',
        title: 'B.Sc Computer Science',
        subtitle: 'Bharathidasan University',
        date: '2021 to 2024',
        summary: 'Graduated with a GPA of 8.2 / 10.',
        details: [
            'I completed my B.Sc in Computer Science at Bharathidasan University between 2021 and 2024, finishing with a GPA of 8.2 out of 10.',
            'The degree gave me the programming and computer science foundation behind my work today: building GenAI-powered applications with Python and Django, integrating large language models such as Claude and ChatGPT, and shipping computer vision projects.'
        ],
        highlights: [
            'GPA 8.2 / 10',
            'Foundation for AI/ML and full-stack development',
            'Led straight into professional roles at JLA Tech Service and freelance work'
        ],
        tags: [
            'Computer Science',
            'Bharathidasan University'
        ]
    },
    {
        id: 'uiux',
        icon: 'palette',
        badge: 'Course',
        title: 'UI/UX Design Course',
        subtitle: 'Fortune Innovatives',
        date: '2024 to 2025',
        summary: 'Learned user-centred design and built three Figma prototypes.',
        details: [
            'I completed the UI/UX Design course at Fortune Innovatives from 2024 to 2025, learning how to turn an idea into clear wireframes and polished, high-fidelity prototypes in Figma.',
            'The course work became my design portfolio: Evento (event booking), Neobrew (craft coffee e-commerce) and MindfulTech (mental health platform).'
        ],
        highlights: [
            'Figma wireframes and high-fidelity prototypes',
            'Three complete design projects: Evento, Neobrew and MindfulTech',
            'Design skills that now shape the interfaces of my own AI products'
        ],
        tags: [
            'UI/UX',
            'Figma',
            'Prototyping'
        ]
    },
    {
        id: 'branding',
        icon: 'megaphone',
        badge: 'Workshop',
        title: 'Branding Workshop',
        subtitle: 'Workshop certification',
        date: 'January 2024',
        summary: 'A workshop on how brands are built and presented.',
        details: [
            'I attended the Branding Workshop in January 2024, which looked at how a brand identity is built and kept consistent across colour, typography, tone and presentation.',
            'It improved how I approach visual identity in my UI/UX and web projects.'
        ],
        highlights: [
            'Brand identity fundamentals',
            'Consistency in colour, type and tone',
            'Applied in my design projects'
        ],
        tags: [
            'Branding',
            'Design'
        ]
    },
    {
        id: 'website-eval',
        icon: 'globe',
        badge: 'Workshop',
        title: 'Website Evaluation Workshop',
        subtitle: 'Workshop certification',
        date: 'December 2024',
        summary: 'A workshop on judging and improving websites.',
        details: [
            'I completed the Website Evaluation Workshop in December 2024, which covered how to review a website for usability, clarity, performance and overall quality.',
            'I use this thinking when I review my own builds before delivery.'
        ],
        highlights: [
            'Reviewing usability and clarity',
            'Spotting performance and quality issues',
            'Applied to my web development work'
        ],
        tags: [
            'Web',
            'Usability'
        ]
    },
    {
        id: 'digital-marketing',
        icon: 'trending',
        badge: 'Workshop',
        title: 'Digital Marketing Workshop',
        subtitle: 'Workshop certification',
        date: 'February 2025',
        summary: 'A workshop on reaching audiences online.',
        details: [
            'I completed the Digital Marketing Workshop in February 2025, an introduction to how products and brands reach and engage audiences online.',
            'It helps me build web projects that are ready to be found and shared.'
        ],
        highlights: [
            'How online audiences are reached',
            'Content and visibility basics',
            'Supports my freelance web projects'
        ],
        tags: [
            'Marketing',
            'Digital'
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/fallback.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "coverOf",
    ()=>coverOf,
    "fallbackProjects",
    ()=>fallbackProjects,
    "projectCovers",
    ()=>projectCovers
]);
const projectCovers = {
    'medical-chatbot': '/projects/medical-chatbot.jpg',
    'railway-enquiry-chatbot': '/projects/railway-enquiry-chatbot.jpg',
    'accident-detection-system': '/projects/accident-detection-system.jpg',
    'smoking-detection-system': '/projects/smoking-detection-system.jpg',
    'ulcer-detection-tool': '/projects/ulcer-detection-tool.jpg',
    'ai-job-recommendation-resume-screening': '/projects/AI-Powered_Job_Matching_Banner.jpg'
};
const coverOf = (p)=>p.thumbnail || projectCovers[p.slug] || null;
const fallbackProjects = [
    {
        "slug": "medical-chatbot",
        "title": "Medical Chatbot",
        "summary": "AI health assistant for symptom checks and medical Q&A.",
        "description": "An AI health assistant that handles symptom checks and general medical questions in a simple chat interface. Prompts were designed to guide Claude toward context-aware, easy-to-follow conversational responses, with a Django backend and MySQL behind it.",
        "technologies": [
            "Python",
            "Django",
            "Claude",
            "MySQL"
        ],
        "featured": true,
        "case_study_content": {
            "Domain": "Healthcare",
            "Overview": "An AI health assistant that handles symptom checks and general medical questions in a simple chat interface. Prompts were designed to guide Claude toward context-aware, easy-to-follow conversational responses, with a Django backend and MySQL behind it.",
            "Problem": "People often want quick, understandable answers to basic health questions before they can reach a professional. A conversational assistant can explain common symptoms and point to sensible next steps.",
            "Key features": [
                "Answers everyday health queries in plain language",
                "Symptom checks through natural conversation",
                "Context-aware replies shaped by prompts designed for Claude",
                "Basic guidance and wellness tips",
                "Appointment support"
            ],
            "How it works": [
                "The user describes symptoms or asks a medical question in the chat.",
                "The Django backend sends the message to Claude together with prompts designed to keep answers context-aware.",
                "Claude's reply is returned and shown in the conversation.",
                "The conversation continues turn by turn."
            ],
            "Technology stack": [
                "Python — application logic and prompt handling",
                "Django — web backend and chat interface",
                "Claude (Anthropic) — conversational responses guided by designed prompts",
                "MySQL — database"
            ],
            "Note": "Provides general information only and does not replace professional medical advice."
        },
        "thumbnail": null,
        "github_url": "",
        "live_demo_url": "",
        "updated_at": ""
    },
    {
        "slug": "railway-enquiry-chatbot",
        "title": "Railway Enquiry Chatbot",
        "summary": "Intelligent chatbot for Indian Railway: PNR status, live schedules and booking help.",
        "description": "An intelligent chatbot for Indian Railway enquiries. Travellers ask about PNR status, live train schedules and booking help in natural language, powered by ChatGPT prompt flows on a Django backend.",
        "technologies": [
            "Python",
            "Django",
            "ChatGPT",
            "REST APIs"
        ],
        "featured": true,
        "case_study_content": {
            "Domain": "Transport",
            "Overview": "An intelligent chatbot for Indian Railway enquiries. Travellers ask about PNR status, live train schedules and booking help in natural language, powered by ChatGPT prompt flows on a Django backend.",
            "Problem": "Railway information is spread across screens and forms, while passengers simply want a quick answer, such as where their train is or whether a PNR is confirmed.",
            "Key features": [
                "PNR status checks",
                "Live train status and schedules",
                "Train timings and general enquiries",
                "Seat availability and booking help",
                "Natural-language questions handled by ChatGPT prompt flows"
            ],
            "How it works": [
                "The passenger types a question, for example a PNR status or a train schedule.",
                "ChatGPT prompt flows interpret the request and work out what information is needed.",
                "The Django backend uses REST APIs to fetch the railway information.",
                "The answer is composed and returned in the chat window."
            ],
            "Technology stack": [
                "Python — application logic",
                "Django — web backend and chat interface",
                "ChatGPT (OpenAI) — natural-language understanding through prompt flows",
                "REST APIs — connect the chatbot to railway information"
            ]
        },
        "thumbnail": null,
        "github_url": "",
        "live_demo_url": "",
        "updated_at": ""
    },
    {
        "slug": "accident-detection-system",
        "title": "Accident Detection System",
        "summary": "Real-time road accident detection that alerts authorities.",
        "description": "A real-time road accident detection system. AI/ML models analyse camera or sensor input and alert authorities when an accident is detected, while a Django backend automatically logs the incident data.",
        "technologies": [
            "Computer Vision",
            "Django"
        ],
        "featured": true,
        "case_study_content": {
            "Domain": "Public safety and transport",
            "Overview": "A real-time road accident detection system. AI/ML models analyse camera or sensor input and alert authorities when an accident is detected, while a Django backend automatically logs the incident data.",
            "Problem": "After a road accident every minute before help arrives matters, yet crashes are often noticed late. Automatic detection shortens the gap between an accident and an emergency response.",
            "Key features": [
                "Real-time accident detection with computer vision",
                "Instant alerts to authorities and emergency contacts",
                "Location details sent with each alert",
                "Automatic logging of incident data",
                "Incident records stored by the Django backend"
            ],
            "How it works": [
                "Video or sensor input is monitored continuously.",
                "Computer vision and ML models detect an accident in the feed.",
                "An alert with the incident details is sent to the authorities.",
                "The Django backend logs the incident automatically for later review."
            ],
            "Technology stack": [
                "Computer Vision — detects accidents from camera or sensor data",
                "AI / ML models — classification and alert triggering",
                "Django — backend, alert handling and incident logging",
                "Python — model integration and application logic"
            ]
        },
        "thumbnail": null,
        "github_url": "",
        "live_demo_url": "",
        "updated_at": ""
    },
    {
        "slug": "smoking-detection-system",
        "title": "Smoking Detection System",
        "summary": "Detects smoking in restricted zones and triggers instant alerts.",
        "description": "A computer-vision system that detects smoking in restricted zones and triggers instant alert notifications, helping keep offices, schools, hospitals and public spaces smoke-free.",
        "technologies": [
            "Computer Vision",
            "Django"
        ],
        "featured": false,
        "case_study_content": {
            "Domain": "Public safety",
            "Overview": "A computer-vision system that detects smoking in restricted zones and triggers instant alert notifications, helping keep offices, schools, hospitals and public spaces smoke-free.",
            "Problem": "Smoking rules in restricted areas are hard to enforce with manual patrols alone, and the fire and health risks are real.",
            "Key features": [
                "AI-powered detection of smoking behaviour in video feeds",
                "Instant alerts to security or authorities",
                "Continuous real-time monitoring",
                "Incident reports and analytics to track compliance"
            ],
            "How it works": [
                "Camera feeds from restricted zones are monitored.",
                "Computer vision detects smoking behaviour in the footage.",
                "An alert notification is triggered immediately.",
                "The incident is recorded so patterns can be reviewed and compliance improved."
            ],
            "Technology stack": [
                "Computer Vision — detects smoking in video feeds",
                "Django — backend, alert notifications and incident records",
                "Python — application logic"
            ]
        },
        "thumbnail": null,
        "github_url": "",
        "live_demo_url": "",
        "updated_at": ""
    },
    {
        "slug": "ulcer-detection-tool",
        "title": "Ulcer Detection Tool",
        "summary": "Medical image analysis platform for early-stage ulcer detection.",
        "description": "A medical image analysis platform for early-stage foot ulcer detection. A user uploads a foot image, AI analyses it, and the platform returns results and recommendations to support clinical decisions.",
        "technologies": [
            "Medical Imaging AI",
            "Django"
        ],
        "featured": false,
        "case_study_content": {
            "Domain": "Healthcare",
            "Overview": "A medical image analysis platform for early-stage foot ulcer detection. A user uploads a foot image, AI analyses it, and the platform returns results and recommendations to support clinical decisions.",
            "Problem": "Foot ulcers that go unnoticed can lead to serious complications. Early, easy-to-use image-based screening helps patients and clinicians act sooner.",
            "Key features": [
                "Image analysis: upload a foot image for AI-powered review",
                "Early-stage ulcer detection",
                "Results with practical recommendations",
                "Progress tracking over time",
                "Simple, non-invasive workflow"
            ],
            "How it works": [
                "A foot image is uploaded through the web interface.",
                "AI models analyse the image for signs of an ulcer.",
                "The platform shows the result together with recommendations.",
                "Progress can be tracked to support treatment decisions."
            ],
            "Technology stack": [
                "Medical Imaging AI — image analysis for early-stage ulcer detection",
                "Django — web platform and results delivery",
                "Python — application logic"
            ],
            "Note": "Supports clinical decisions and does not replace professional diagnosis."
        },
        "thumbnail": null,
        "github_url": "",
        "live_demo_url": "",
        "updated_at": ""
    },
    {
        "slug": "ai-job-recommendation-resume-screening",
        "title": "AI-Based Job Recommendation & Resume Screening System",
        "summary": "AI-powered platform for resume screening and personalized job recommendations.",
        "description": "A web-based recruitment platform developed using Python and Django that analyzes resumes, extracts candidate skills and qualifications, and recommends suitable job opportunities based on job descriptions. The system helps job seekers discover relevant vacancies and assists recruiters in screening candidates efficiently.",
        "technologies": [
            "Python",
            "Django",
            "Artificial Intelligence",
            "Natural Language Processing",
            "MySQL",
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap"
        ],
        "featured": false,
        "case_study_content": {
            "Domain": "Recruitment and Human Resources",
            "Overview": "An AI-powered recruitment web application that automates resume screening and recommends suitable job opportunities based on candidate skills, qualifications, and experience. Developed using Python, Django, and MySQL, the platform simplifies job searching and supports efficient candidate evaluation.",
            "Problem": "Job seekers often struggle to find relevant vacancies, while recruiters spend considerable time manually reviewing resumes. Automated resume analysis and personalized job recommendations can reduce repetitive work and improve recruitment efficiency.",
            "Key features": [
                "Resume upload and information extraction from PDF and DOCX files",
                "AI-based resume screening and candidate evaluation",
                "Personalized job recommendations based on candidate profiles",
                "Resume-to-job compatibility scoring",
                "Candidate profile and skill management",
                "Job posting and management for recruiters",
                "Job application and status tracking",
                "Dashboard for recommended jobs and resume analysis results"
            ],
            "How it works": [
                "The job seeker registers, logs in, and uploads a resume through the web interface.",
                "The Django backend processes the resume and extracts skills, qualifications, education, and experience.",
                "AI and text-processing techniques compare candidate information with available job descriptions.",
                "The system calculates matching scores and ranks suitable job opportunities.",
                "The job seeker reviews recommendations and applies for relevant vacancies.",
                "Recruiters manage job listings, review candidate profiles, and evaluate applications through the dashboard."
            ],
            "Technology stack": [
                "Python — application logic, resume processing, and matching algorithms",
                "Django — web backend, authentication, and recruitment workflows",
                "Artificial Intelligence and NLP — resume analysis, skill extraction, and job recommendations",
                "MySQL — storage for candidate profiles, job listings, and application records",
                "HTML, CSS, JavaScript, Bootstrap — responsive user interface and dashboards",
                "PDF/DOCX processing libraries — resume text extraction"
            ],
            "Note": "Job recommendations and compatibility scores support recruitment decisions but do not guarantee candidate suitability. Human review is essential for fair and informed hiring decisions."
        },
        "thumbnail": "/projects/AI-Powered_Job_Matching_Banner.jpg",
        "github_url": "",
        "live_demo_url": "",
        "updated_at": ""
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/intro.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Where the visitor lands after the welcome video. Change here if the portfolio route ever moves. */ __turbopack_context__.s([
    "INTRO_FLAG",
    ()=>INTRO_FLAG,
    "PORTFOLIO_PATH",
    ()=>PORTFOLIO_PATH
]);
const PORTFOLIO_PATH = '/portfolio/';
const INTRO_FLAG = 'intro-blast';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=src_1d95pyle4l_qs._.js.map