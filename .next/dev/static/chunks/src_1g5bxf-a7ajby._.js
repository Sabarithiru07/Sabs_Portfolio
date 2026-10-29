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
                    children: shown.map((p)=>{
                        const Icon = iconFor(p);
                        const cover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fallback$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coverOf"])(p);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].article, {
                            layout: true,
                            className: "glass pad spot",
                            onMouseMove: spotlight,
                            whileHover: {
                                y: -6
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
                                    className: "thumb",
                                    children: cover ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: cover,
                                        alt: `${p.title} cover`,
                                        width: 1200,
                                        height: 800,
                                        loading: "lazy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectGrid.tsx",
                                        lineNumber: 47,
                                        columnNumber: 23
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                size: 46,
                                                strokeWidth: 1.4,
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectGrid.tsx",
                                                lineNumber: 48,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "thumb-tag",
                                                children: p.technologies[0]
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProjectGrid.tsx",
                                                lineNumber: 48,
                                                columnNumber: 80
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProjectGrid.tsx",
                                        lineNumber: 48,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectGrid.tsx",
                                    lineNumber: 44,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        marginTop: 0
                                    },
                                    children: p.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectGrid.tsx",
                                    lineNumber: 50,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "sub",
                                    children: p.summary
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectGrid.tsx",
                                    lineNumber: 51,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "chips",
                                    style: {
                                        margin: '12px 0 16px'
                                    },
                                    children: p.technologies.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "tag",
                                            children: t
                                        }, t, false, {
                                            fileName: "[project]/src/components/ProjectGrid.tsx",
                                            lineNumber: 52,
                                            columnNumber: 99
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectGrid.tsx",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "btn-row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TransitionLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransitionLink"], {
                                            href: `/projects/${p.slug}/`,
                                            className: "btn btn-glass btn-sm",
                                            children: [
                                                "Case study ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProjectGrid.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 109
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ProjectGrid.tsx",
                                            lineNumber: 54,
                                            columnNumber: 19
                                        }, this),
                                        p.github_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: p.github_url,
                                            rel: "noopener noreferrer",
                                            className: "btn btn-glass btn-sm",
                                            children: "GitHub"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectGrid.tsx",
                                            lineNumber: 55,
                                            columnNumber: 36
                                        }, this),
                                        p.live_demo_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: p.live_demo_url,
                                            rel: "noopener noreferrer",
                                            className: "btn btn-glass btn-sm",
                                            children: "Live demo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProjectGrid.tsx",
                                            lineNumber: 56,
                                            columnNumber: 39
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ProjectGrid.tsx",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, p.slug, true, {
                            fileName: "[project]/src/components/ProjectGrid.tsx",
                            lineNumber: 42,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.mjs [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanEye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scan-eye.mjs [app-client] (ecmascript) <export default as ScanEye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server.mjs [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const ICONS = {
    brain: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
    sparkles: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
    server: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"],
    scan: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2d$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ScanEye$3e$__["ScanEye"],
    palette: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"]
};
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
                threshold: 0.3
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
        className: `glass pad skill-card${on ? ' on' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-head",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "icon-chip",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            size: 22
                        }, void 0, false, {
                            fileName: "[project]/src/components/SkillCard.tsx",
                            lineNumber: 20,
                            columnNumber: 62
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillCard.tsx",
                        lineNumber: 20,
                        columnNumber: 34
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillCard.tsx",
                        lineNumber: 20,
                        columnNumber: 87
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SkillCard.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "skill-list",
                children: items.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "skill-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: s.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SkillCard.tsx",
                                        lineNumber: 24,
                                        columnNumber: 40
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "skill-level",
                                        children: s.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SkillCard.tsx",
                                        lineNumber: 24,
                                        columnNumber: 61
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SkillCard.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "track",
                                role: "progressbar",
                                "aria-label": s.name,
                                "aria-valuemin": 0,
                                "aria-valuemax": 100,
                                "aria-valuenow": s.pct,
                                "aria-valuetext": s.label,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "fill",
                                    style: {
                                        transform: on ? `scaleX(${s.pct / 100})` : 'scaleX(0)',
                                        transitionDelay: `${i * 90}ms`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SkillCard.tsx",
                                    lineNumber: 26,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SkillCard.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this)
                        ]
                    }, s.name, true, {
                        fileName: "[project]/src/components/SkillCard.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/SkillCard.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SkillCard.tsx",
        lineNumber: 19,
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
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
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
        className: "timeline",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "tl-track",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/Timeline.tsx",
                lineNumber: 14,
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
                lineNumber: 15,
                columnNumber: 7
            }, this),
            entries.map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].li, {
                    className: "tl-item",
                    initial: reduce ? false : {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        margin: '-80px'
                    },
                    transition: {
                        duration: 0.5
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["m"].span, {
                            className: "tl-node",
                            "aria-hidden": "true",
                            initial: reduce ? false : {
                                backgroundColor: '#160D2B',
                                boxShadow: '0 0 0 rgba(168,85,247,0)'
                            },
                            whileInView: {
                                backgroundColor: '#A855F7',
                                boxShadow: '0 0 16px rgba(168,85,247,.8)'
                            },
                            viewport: {
                                margin: '-45% 0px -45% 0px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/Timeline.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass pad",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: e.what
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Timeline.tsx",
                                    lineNumber: 24,
                                    columnNumber: 38
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "tl-meta",
                                    children: [
                                        e.where,
                                        e.when
                                    ].filter(Boolean).join(', ')
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Timeline.tsx",
                                    lineNumber: 24,
                                    columnNumber: 63
                                }, this),
                                e.details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "tl-details",
                                    children: e.details.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: d
                                        }, d, false, {
                                            fileName: "[project]/src/components/Timeline.tsx",
                                            lineNumber: 24,
                                            columnNumber: 197
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Timeline.tsx",
                                    lineNumber: 24,
                                    columnNumber: 150
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Timeline.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/src/components/Timeline.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Timeline.tsx",
        lineNumber: 13,
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

/**
 * ====================  BREVO SETTINGS  ====================
 * Put your values in a file called `.env.local` in the project root (never commit it):
 *
 *   NEXT_PUBLIC_BREVO_API_KEY=xkeysib-...your key...
 *   NEXT_PUBLIC_BREVO_SENDER_EMAIL=you@your-verified-domain.com   (must be a verified sender in Brevo)
 *   NEXT_PUBLIC_BREVO_TO_EMAIL=sabariarasu54@gmail.com            (where the messages arrive; optional, defaults to the resume email)
 *
 * IMPORTANT: this site is static (no server), so anything starting with NEXT_PUBLIC_ ends up in the browser and can be read by visitors.
 * To limit the risk, create a dedicated Brevo API key just for this form, and in Brevo > Security > Authorised IPs / domain
 * restrictions lock it down. For full safety put the key behind a tiny serverless function and set NEXT_PUBLIC_CONTACT_ENDPOINT instead.
 */ __turbopack_context__.s([
    "BREVO",
    ()=>BREVO,
    "brevoReady",
    ()=>brevoReady
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const BREVO = {
    apiKey: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_BREVO_API_KEY ?? '',
    senderEmail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_BREVO_SENDER_EMAIL ?? '',
    toEmail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_BREVO_TO_EMAIL ?? '',
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
/**
 * Delivery order:
 *  1. Brevo (set the keys in .env.local, see lib/brevo.ts)
 *  2. NEXT_PUBLIC_CONTACT_ENDPOINT (Formspree / Web3Forms ...)
 *  3. The visitor's email app (mailto), so the form always works.
 */ const ENDPOINT = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CONTACT_ENDPOINT;
const esc = (t)=>t.replace(/[&<>"']/g, (c)=>({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        })[c]);
async function sendContact(d) {
    if (d.website) return 'sent'; // honeypot filled: pretend success, send nothing
    const subject = `Portfolio message from ${d.name}`;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brevo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brevoReady"])()) {
        let res;
        try {
            res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brevo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BREVO"].url, {
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
        } catch  {
            throw new ContactError('Network error. Please try again.');
        }
        if (res.ok) return 'sent';
        if (res.status === 429) throw new ContactError('Too many messages. Try again later.');
        throw new ContactError('Could not send your message. Please try again, or email me directly.');
    }
    if (!ENDPOINT) {
        window.location.href = `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${d.message}\n\n${d.name} <${d.email}>`)}`;
        return 'mailto';
    }
    let res;
    try {
        res = await fetch(ENDPOINT, {
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
    } catch  {
        throw new ContactError('Network error. Please try again.');
    }
    if (res.ok) return 'sent';
    if (res.status === 429) throw new ContactError('Too many messages. Try again later.');
    throw new ContactError('Could not send your message. Please try again, or email me directly.');
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
const design = {
    enabled: true,
    heading: 'UI/UX Design',
    items: [
        {
            title: 'Evento',
            text: 'Event booking app. Figma wireframes and high-fidelity prototypes.'
        },
        {
            title: 'Neobrew',
            text: 'Craft coffee e-commerce. Figma wireframes and high-fidelity prototypes.'
        },
        {
            title: 'MindfulTech',
            text: 'Mental health platform. Figma wireframes and high-fidelity prototypes.'
        }
    ]
};
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
const achievements = [
    {
        icon: 'grad',
        title: 'GPA 8.2 / 10',
        text: 'B.Sc Computer Science, Bharathidasan University (2021 to 2024).'
    },
    {
        icon: 'rocket',
        title: 'GenAI products in production',
        text: 'Built AI-powered automation systems at JLA Tech Service, integrating Claude and ChatGPT into real workflows.'
    },
    {
        icon: 'sparkles',
        title: 'AI across healthcare, safety and transport',
        text: 'Delivered chatbots and computer-vision systems: medical chatbot, railway enquiry bot, accident and smoking detection, ulcer detection.'
    },
    {
        icon: 'palette',
        title: 'UI/UX Design Course',
        text: 'Completed the UI/UX Design course at Fortune Innovatives (2024 to 2025) with Figma prototypes for Evento, Neobrew and MindfulTech.'
    },
    {
        icon: 'award',
        title: 'Website Evaluation Workshop',
        text: 'Certified, December 2024.'
    },
    {
        icon: 'award',
        title: 'Branding and Digital Marketing Workshops',
        text: 'Branding Workshop (Jan 2024) and Digital Marketing Workshop (Feb 2025).'
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

//# sourceMappingURL=src_1g5bxf-a7ajby._.js.map