(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Constellation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Constellation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Constellation() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Constellation.useEffect": ()=>{
            const canvas = ref.current;
            const ctx = canvas?.getContext('2d');
            if (!canvas || !ctx) return;
            const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
            const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
            const LINK = 130, REACH = 180;
            const mouse = {
                x: -9999,
                y: -9999
            };
            let w = 0, h = 0, raf = 0, pts = [], visible = true;
            const frame = {
                "Constellation.useEffect.frame": ()=>{
                    ctx.clearRect(0, 0, w, h);
                    for (const a of pts){
                        if (!reduce) {
                            a.x += a.vx;
                            a.y += a.vy;
                            if (a.x < 0 || a.x > w) a.vx *= -1;
                            if (a.y < 0 || a.y > h) a.vy *= -1;
                        }
                        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
                        if (dm < REACH) {
                            ctx.strokeStyle = `rgba(34,211,238,${(1 - dm / REACH) * 0.65})`;
                            ctx.lineWidth = 1;
                            ctx.beginPath();
                            ctx.moveTo(a.x, a.y);
                            ctx.lineTo(mouse.x, mouse.y);
                            ctx.stroke();
                            a.x += (mouse.x - a.x) * 0.006;
                            a.y += (mouse.y - a.y) * 0.006;
                        }
                    }
                    for(let i = 0; i < pts.length; i++){
                        const a = pts[i];
                        for(let j = i + 1; j < pts.length; j++){
                            const b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
                            if (d < LINK) {
                                ctx.strokeStyle = `rgba(168,85,247,${(1 - d / LINK) * 0.38})`;
                                ctx.lineWidth = 1;
                                ctx.beginPath();
                                ctx.moveTo(a.x, a.y);
                                ctx.lineTo(b.x, b.y);
                                ctx.stroke();
                            }
                        }
                        ctx.fillStyle = 'rgba(196,181,253,0.85)';
                        ctx.beginPath();
                        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }["Constellation.useEffect.frame"];
            const loop = {
                "Constellation.useEffect.loop": ()=>{
                    frame();
                    raf = requestAnimationFrame(loop);
                }
            }["Constellation.useEffect.loop"];
            const start = {
                "Constellation.useEffect.start": ()=>{
                    if (!raf && !reduce && visible && !document.hidden) raf = requestAnimationFrame(loop);
                }
            }["Constellation.useEffect.start"];
            const stop = {
                "Constellation.useEffect.stop": ()=>{
                    cancelAnimationFrame(raf);
                    raf = 0;
                }
            }["Constellation.useEffect.stop"];
            const resize = {
                "Constellation.useEffect.resize": ()=>{
                    const r = canvas.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 1.5);
                    w = r.width;
                    h = r.height;
                    canvas.width = w * dpr;
                    canvas.height = h * dpr;
                    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                    const n = Math.min(fine ? 56 : 28, Math.floor(w * h / 14000));
                    pts = Array.from({
                        length: n
                    }, {
                        "Constellation.useEffect.resize": ()=>({
                                x: Math.random() * w,
                                y: Math.random() * h,
                                vx: (Math.random() - 0.5) * 0.35,
                                vy: (Math.random() - 0.5) * 0.35,
                                r: Math.random() * 1.4 + 0.6
                            })
                    }["Constellation.useEffect.resize"]);
                    frame();
                }
            }["Constellation.useEffect.resize"];
            const onMove = {
                "Constellation.useEffect.onMove": (e)=>{
                    const r = canvas.getBoundingClientRect();
                    mouse.x = e.clientX - r.left;
                    mouse.y = e.clientY - r.top;
                }
            }["Constellation.useEffect.onMove"];
            const onLeave = {
                "Constellation.useEffect.onLeave": ()=>{
                    mouse.x = mouse.y = -9999;
                }
            }["Constellation.useEffect.onLeave"];
            const onVis = {
                "Constellation.useEffect.onVis": ()=>document.hidden ? stop() : start()
            }["Constellation.useEffect.onVis"];
            resize();
            start();
            const ro = new ResizeObserver(resize);
            ro.observe(canvas);
            const io = new IntersectionObserver({
                "Constellation.useEffect": ([e])=>{
                    visible = e.isIntersecting;
                    visible ? start() : stop();
                }
            }["Constellation.useEffect"]);
            io.observe(canvas);
            document.addEventListener('visibilitychange', onVis);
            if (fine && !reduce) {
                window.addEventListener('pointermove', onMove, {
                    passive: true
                });
                document.addEventListener('pointerleave', onLeave);
            }
            return ({
                "Constellation.useEffect": ()=>{
                    stop();
                    ro.disconnect();
                    io.disconnect();
                    document.removeEventListener('visibilitychange', onVis);
                    window.removeEventListener('pointermove', onMove);
                    document.removeEventListener('pointerleave', onLeave);
                }
            })["Constellation.useEffect"];
        }
    }["Constellation.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: ref
    }, void 0, false, {
        fileName: "[project]/src/components/Constellation.tsx",
        lineNumber: 73,
        columnNumber: 10
    }, this);
}
_s(Constellation, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = Constellation;
var _c;
__turbopack_context__.k.register(_c, "Constellation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Constellation.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/Constellation.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_Constellation_tsx_090t9hf7-3qpp._.js.map