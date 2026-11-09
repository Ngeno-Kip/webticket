(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 8555, e => {
    "use strict";
    var t = e.i(74464),
        a = e.i(59644),
        s = e.i(85976),
        r = e.i(77666),
        i = e.i(42917);
    let n = {
            instagram: "Instagram",
            x: "X",
            tiktok: "TikTok",
            youtube: "YouTube",
            facebook: "Facebook"
        },
        o = {
            instagram: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
            x: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
            tiktok: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
            youtube: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
            facebook: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
        };

    function l(e) {
        return i.SOCIAL_BY_DOMAIN[(0, s.identityForHost)(e).domain] ? ? null
    }
    let c = {
        landing: {
            list: "grid gap-[10px] md:flex",
            link: "flex h-[44px] w-full items-center justify-center border border-lp-input-border hover:border-lp-amber focus-visible:border-lp-amber focus-visible:outline-none md:w-[44px]",
            icon: "h-[18px] w-[18px] fill-lp-ink"
        },
        night: {
            list: "flex gap-2",
            link: "grid h-11 w-11 place-items-center rounded-sm bg-glass",
            icon: "h-[18px] w-[18px] fill-white"
        },
        surface: {
            list: "flex gap-2",
            link: "grid h-11 w-11 place-items-center rounded-sm bg-surface",
            icon: "h-[18px] w-[18px] fill-ink"
        }
    };
    e.s(["SocialLinks", 0, function({
        config: e,
        look: d = "landing"
    }) {
        let [p, h] = (0, a.useState)(() => l(s.CANONICAL_DOMAIN));
        (0, a.useEffect)(() => {
            void 0 === e && h(l((0, r.browserHost)()))
        }, [e]);
        let m = void 0 === e ? p : e,
            u = m ? (0, i.socialLinks)(m.links) : [];
        return m && u.length ? (0, t.jsx)("ul", {
            className: c[d].list,
            style: "landing" === d ? {
                gridTemplateColumns: `repeat(${u.length}, minmax(0, 1fr))`
            } : void 0,
            "data-testid": "landing" === d ? "landing-social" : "site-social",
            children: u.map(({
                network: e,
                href: a
            }) => (0, t.jsx)("li", {
                children: (0, t.jsx)("a", {
                    href: a,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": `${m.owner} on ${n[e]}`,
                    className: c[d].link,
                    children: (0, t.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        className: c[d].icon,
                        children: (0, t.jsx)("path", {
                            d: o[e]
                        })
                    })
                })
            }, e))
        }) : null
    }, "socialFor", 0, l])
}, 15635, e => {
    "use strict";
    var t = e.i(74464);
    e.s(["BackGlyph", 0, function({
        className: e
    }) {
        return (0, t.jsx)("svg", {
            width: "22",
            height: "22",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            className: e,
            children: (0, t.jsx)("path", {
                d: "M15 5l-7 7 7 7",
                stroke: "currentColor",
                strokeWidth: "2.2",
                fill: "none"
            })
        })
    }, "CloseGlyph", 0, function({
        className: e
    }) {
        return (0, t.jsx)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            className: e,
            children: (0, t.jsx)("path", {
                d: "M6 6l12 12M18 6 6 18",
                stroke: "currentColor",
                strokeWidth: "2.2"
            })
        })
    }, "MenuGlyph", 0, function({
        className: e
    }) {
        return (0, t.jsx)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            className: e,
            children: (0, t.jsx)("path", {
                d: "M3 6h18M3 12h18M3 18h18",
                stroke: "currentColor",
                strokeWidth: "2.2"
            })
        })
    }, "MoonGlyph", 0, function({
        className: e
    }) {
        return (0, t.jsx)("svg", {
            width: "22",
            height: "22",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            className: e,
            children: (0, t.jsx)("path", {
                d: "M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinejoin: "round"
            })
        })
    }, "ShareGlyph", 0, function({
        className: e
    }) {
        return (0, t.jsx)("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            "aria-hidden": "true",
            className: e,
            children: (0, t.jsx)("path", {
                d: "M10 2v11M5.5 6.5 10 2l4.5 4.5M4 10v7h12v-7",
                stroke: "currentColor",
                strokeWidth: "2",
                fill: "none"
            })
        })
    }, "SunGlyph", 0, function({
        className: e
    }) {
        return (0, t.jsxs)("svg", {
            width: "22",
            height: "22",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            className: e,
            children: [(0, t.jsx)("circle", {
                cx: "12",
                cy: "12",
                r: "4.5",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2"
            }), (0, t.jsx)("path", {
                d: "M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8",
                stroke: "currentColor",
                strokeWidth: "2"
            })]
        })
    }, "UserGlyph", 0, function({
        className: e
    }) {
        return (0, t.jsxs)("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            className: e,
            children: [(0, t.jsx)("circle", {
                cx: "12",
                cy: "8",
                r: "4",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2"
            }), (0, t.jsx)("path", {
                d: "M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2"
            })]
        })
    }])
}, 23879, e => {
    "use strict";
    var t = e.i(74464),
        a = e.i(25097),
        s = e.i(16766),
        r = e.i(59644),
        i = e.i(22809);

    function n({
        className: e
    }) {
        return (0, t.jsxs)("svg", {
            viewBox: "0 0 280 280",
            className: e,
            "aria-hidden": "true",
            focusable: "false",
            "data-testid": "favicon-mark",
            children: [(0, t.jsx)("path", {
                fill: i.LANDING.markRed,
                d: "M139.8.7s-39.4,41-54.4,72.9c0,0,25.7,54.4,0,124.1,0,0,29.2,47,54.4,76.5,0,0,26.7-40.8,48.7-78.9,0,0-31.4-48.9,1.6-128.6,0,0-20.9-44.7-50.3-65.9Z"
            }), (0, t.jsxs)("g", {
                fill: i.LANDING.markWhite,
                children: [(0, t.jsx)("ellipse", {
                    cx: "140.4",
                    cy: "133.4",
                    rx: "14.5",
                    ry: "11.6",
                    transform: "translate(2.6 269.5) rotate(-88.2)"
                }), (0, t.jsx)("path", {
                    d: "M143.8,23.5l-.6,88.7s12.2-18.9,14.1-46c1.9-27.1-6.9-37.3-13.5-42.6Z"
                }), (0, t.jsx)("path", {
                    d: "M136.6,23.3l-.6,89.4s-13.9-24.6-13.3-45c.6-20.4,3.6-35.3,13.9-44.4Z"
                }), (0, t.jsx)("path", {
                    d: "M144.4,155.8l.5,95.8s10.8-16.8,13-50.4c2.2-33.6-13.5-45.4-13.5-45.4Z"
                }), (0, t.jsx)("path", {
                    d: "M134.6,155l2,96.5s-17.3-29.9-14.9-61.7c1.5-20.2,12.9-34.8,12.9-34.8Z"
                }), (0, t.jsx)("path", {
                    d: "M10.3,89.9c-5.9,15.4-9.2,32.1-9.2,49.6s3.6,36,10.2,52.1c7.6-15.8,16.8-33.5,28.2-52.7,0,0-14.1-22.7-29.2-49Z"
                }), (0, t.jsx)("path", {
                    d: "M124.9,1.6C75.9,6.8,34.5,37.6,14.3,80.3c8,13.7,18.1,30.3,30.8,50.1,0,0,16.6-48.2,79.8-128.9Z"
                }), (0, t.jsx)("path", {
                    d: "M16.9,203.8c21.7,41.4,63.7,70.4,112.7,74-33.6-36.8-83.8-130.4-83.8-130.4-10.4,16.2-20.4,36.5-29,56.4Z"
                }), (0, t.jsx)("path", {
                    d: "M265.9,81.6C246.6,39.6,206.9,8.9,159.5,2.2c10.9,14.1,43.1,58.7,71.6,129.2,0,0,15.9-22.2,34.8-49.7Z"
                }), (0, t.jsx)("path", {
                    d: "M269.7,90.6c-15.5,23.8-28.9,44.2-31.2,47.1l31.3,50.3c5.6-15.1,8.7-31.5,8.7-48.5s-3.2-33.7-8.9-48.9Z"
                }), (0, t.jsx)("path", {
                    d: "M147.6,278c51.7-2.9,95.9-34,117.2-78.3l-33.6-53.5c-26.1,49.2-71.5,114.7-83.6,131.8Z"
                })]
            })]
        })
    }
    let o = ["M136.5,17s-8.7,9.1-12.2,16.9c0,0,6.2,13.2.3,30.2,0,0,6.3,11.4,12.3,18.5,0,0,6.9-10,12-19.3,0,0-8.2-12.1-.6-31.6,0,0-4.8-9.5-11.8-14.6Z", "M246.7,25.8s-1.7,5.9-4.2,13.4c0,0,8,13-1.2,26.6l5.5,16.5s5.8-7.9,10.5-18.8c0,0-1.5-5,0-18.4,0,0-1.7-12.5-10.6-19.3Z", "M47,40c-1.1,2.7-3.6,8.9-4.5,12.1,0,0,1.6,11.4.1,16.4,0,0,1.5,9.8,6.7,15.3l.2-13.5s-3.6-2-3.1-11.5,2.6-10.9,2.6-10.9c0,0-.8-5.1-1.2-7.7s-.6-.5-.7,0Z"],
        l = ["M137.9,20.1l-.8,22.2s2.8-4.6,3.4-11.4-1.2-9.4-2.6-10.8Z", "M136.4,20l-.8,22.3s-2.8-6.3-2.5-11.4,1.1-8.8,3.3-11Z", "M137.3,53.1l.3,24s2.3-4.2,2.7-12.7-3-11.3-3-11.3Z", "M135.2,52.9l.7,24.2s-3.8-7.4-3.4-15.4,2.7-8.8,2.7-8.8Z", "M251.4,49.3s-1.7,0-1.9,2.3,1.1,4.8,2.4,4.5,2.3-5.8-.6-6.9Z", "M252,57.4c-.3,2.5-1.6,14.2-3.5,19.4,0,.2.2.2.3.1,1-1.6,2.9-5,3.9-9.8s0-8.6-.4-9.7-.3,0-.3,0Z", "M250.7,56.5s-1.3,14.8-3.8,20.8c0,0-1.5-9.4,3.8-20.8Z", "M249,29.5c1.5,2.7,5,10.3,2.9,19.1,0,0-1.5-14.1-3-19s.1-.2.2,0Z", "M247.1,29.1c.6,2.3,2.8,12,3.1,19.2,0,0-4.5-11-3.3-19.2s.2-.1.2,0Z", "M47.2,41.5s-1.5,10.4-2.4,15.4c0,0-2.5-4.5,2.4-15.4Z", "M44.7,64.5c-.3-1.9,1.6,4.2,3.3,15.3.3,2.1-3.5-2.1-3.3-15.3Z", "M44.5,58.1s-.6,1.8-.5,2.7.2,1.1.3,1.8.5.3.6,0c.1-.6.3-1.4.2-2.3,0-1.8,0-2.9-.6-2.2Z", "M62.1,56.6c-.3-1.2-2.4-10.6-2.3-18.3-2.2,5.4-7,17.4-7.3,21.8-.3,4.5,5.7,16.3,8.2,21-.3-4.9-.8-16.6,1.4-24.5Z", "M72.9,28.8l-10.8,4.3c0,1.7-.4,10.7,1.5,19.1,1.2-4.4,4.7-16,9.2-23.5Z", "M74.2,32c-2.2,4.6-8.3,18.3-9,25.1.4,1.2,4.4,13.7,10.3,22.5.2-3.9,1-15.3,4.7-26.6-.6-1.4-5-11.4-6-21.1Z", "M76.9,27.3c0,1.9-.3,11.9,4.4,21.8,1.5-3.9,6.9-17.6,13.8-26.4-2.6.5-8.9,1.9-18.2,4.7Z", "M59.1,34.2l-8.9,4.4c0,1.2-.4,6.5,1.3,14.9,1.1-3.3,3.6-10.9,7.6-19.3Z", "M59.7,84.6c-4.9-8.5-7.2-14.8-8.2-18.1-.5,7.3-.2,16.1,0,18.2h8.2Z", "M63.4,84.5h11.4c-1.6-2.7-7.3-12.1-10.6-21.8-.6,3.9-1.9,13.2-.8,21.8Z", "M98,84.2c-2.1-3.2-10.6-16.4-16.3-28-.4,1.8-1.1,5.2-1.7,9.2-.8,5.3-1.7,12.9-1.2,18.9l19.2-.2Z", "M97.6,23.4c-2.9,3.8-8.9,13.8-14.3,28.9.6,2.8,4.8,11.9,16.2,26.9.9-3.2,4.6-14.4,12.9-28.9-1.5-2.3-11.9-18.9-14.9-26.8Z", "M100,21.9c.6,1.7,3.2,8.2,14.2,25.1,1.1-3,5.2-12.7,17.8-29.1-4.6.4-22.8,2-32,3.9Z", "M101.5,84.2c1.6,0,4.8-.1,9.6-.2,8.7,0,20.1,0,23.7,0-3.3-3.5-7.7-9.6-13-18.3-3.4-5.6-6.3-10.6-7.3-12.5-6.4,10.5-11.9,27.5-13,31Z", "M178.3,17.8c-3.7-.2-19.6-.8-29.8-.7s-4.8,0-6.3.2c.9,1.1,2.7,3.4,5.1,7.1,3,4.6,7.4,12.2,11.8,22.5,2.5-3.5,13.6-19.6,19.2-29.1Z", "M196.9,42.4c-2.8-4.8-7.9-12.8-16.1-23.3-2.6,4.1-17.2,27.2-19.4,30.4l20.2,31.7c2.4-3.3,14.2-20.3,19.6-30.9-.3-.7-1.5-3.4-4.2-7.9Z", "M215.1,21.8c-3.4-.5-21.6-3.4-31-3.7,2.9,3.9,15.5,21,19.2,30.3,1.9-3.6,8.7-16.8,11.8-26.6Z", "M215,83.1c-.7-2.9-4.4-16.1-12-29.5-1.9,3.4-9.8,17.5-20.3,29.8l32.3-.3Z", "M217.2,22.7c-.9,3.3-4.3,15-12,28,.5,1,2.6,5.2,5,10.4,2.4,5.3,5.5,12.9,7.2,19.3,2.1-3.4,9.4-15.2,16.3-27.7-1-2.2-9.4-21-16.4-30.1Z", "M179,83.5l-19.9-31c-6.3,12-17.1,27.8-19.6,31.4l39.5-.4Z", "M244.8,26.4c-2.2-.5-12.6-2.6-24.9-4,2.3,2.4,7.9,9.5,15.7,27.7,1.8-4.2,8.3-19.9,9.2-23.7Z", "M219.4,83.1l24.9-.2c-1-3.2-5.4-18-9.1-27.4-1.7,3.6-7.7,16.2-15.9,27.6Z", "M267,31.6c-.5,4.3-2.5,18.6-4.5,23.3.7,1.6,5.5,12.8,6.2,25.8,2.3-4.3,8.5-16.4,10.4-22.1-.2-1.2-2-13.2-12-26.9Z", "M282.8,58.3c.3,1.3,2.6,12.2,2.1,20.9,1.7-4.4,4.6-12.5,4.7-17.8.1-7.1-2.5-18.3-6.4-24.1.5,3.9,1.4,13.4-.5,21.1Z", "M270.3,82.6h12.5c.1-1.8.5-8.7-2.1-20.5-1.6,3.9-6.4,14.7-10.4,20.5Z", "M280.9,35.2l-11.2-3.9c1.1,1.5,3,4.2,5,7.5,3.2,5.4,5.4,10.1,6.4,14,.5-4.2,1.1-12.1-.2-17.6Z", "M266.4,82.7c-1-7.9-4.2-19.1-5.5-23.6-.8,3.8-3,8.7-6.4,14.8-2.3,4.1-4.6,7.5-5.6,9l17.6-.2Z", "M261,50.5c2-7.1,2.9-18.3,3.1-20.6l-13.5-2.7c3.1,2.9,5.8,7.7,8,14.3,1.2,3.6,2,7,2.4,8.9Z", "M36.2,56.9c-.6,3.2-1,6.7-1,9.7.1,5.1,1.4,10.4,2.4,13.9l-1.3-13.1c0,0-.5-4.7-.2-10.6Z", "M45.1,41.6l-4.7,3.3s-2,9.3-1.4,16.3c1.4-8.6,6-19.6,6-19.6Z", "M40.7,84.8h6.6c-2.1-3.7-5.9-13.8-7.5-18.1-.7,7.8.6,16.2.9,18.1Z"];

    function c({
        className: e
    }) {
        return (0, t.jsxs)("svg", {
            viewBox: "0 0 319.5 111",
            "aria-hidden": "true",
            focusable: "false",
            className: e,
            "data-testid": "stadium-mark",
            children: [o.map(e => (0, t.jsx)("path", {
                d: e,
                fill: i.LANDING.markRed
            }, e)), (0, t.jsx)("ellipse", {
                cx: "136.5",
                cy: "47.6",
                rx: "3.6",
                ry: "2.5",
                transform: "translate(87.6 183.7) rotate(-89.5)",
                fill: i.LANDING.markWhite
            }), l.map(e => (0, t.jsx)("path", {
                d: e,
                fill: i.LANDING.markWhite
            }, e)), (0, t.jsx)("polygon", {
                points: "14.7 88.6 305.3 88.6 300.8 85.6 21.5 87.6 14.7 88.6",
                fill: i.LANDING.markWhite
            })]
        })
    }
    var d = e.i(8555),
        p = e.i(80458),
        h = e.i(15635),
        m = e.i(9177),
        u = e.i(31009),
        g = e.i(62880),
        f = e.i(97046),
        x = e.i(59491);
    let k = {
        event: null,
        packages: "confirmation_number",
        hotels: "hotel",
        experiences: "landscape",
        flights: "flight"
    };

    function b(e, t) {
        return !!e && !!t && (e === t || e.startsWith(`${t}/`))
    }
    let y = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-bold";
    e.s(["HeaderBar", 0, function({
        links: e,
        ticketsHref: i
    }) {
        let o = (0, s.usePathname)(),
            l = (0, f.useLoggedIn)(),
            {
                theme: v,
                toggle: w
            } = (0, g.useTheme)(),
            [_, M] = (0, r.useState)(!1),
            N = (0, r.useRef)(null),
            E = (0, r.useRef)(null),
            j = (0, r.useCallback)(() => {
                M(!1), N.current ? .focus()
            }, []);
        (0, r.useEffect)(() => {
            if (!_) return;
            E.current ? .focus();
            let e = e => "Escape" === e.key && j(),
                t = window.matchMedia ? .("(min-width: 900px)"),
                a = () => t ? .matches && M(!1);
            return document.addEventListener("keydown", e), t ? .addEventListener ? .("change", a), () => {
                document.removeEventListener("keydown", e), t ? .removeEventListener ? .("change", a)
            }
        }, [_, j]);
        let $ = "dark" === v ? m.HEADER.toLight : m.HEADER.toDark;
        return (0, t.jsxs)("header", {
            className: "absolute inset-x-0 top-0 z-20 text-night-ink",
            "data-testid": "site-header",
            children: [(0, t.jsxs)("div", {
                className: `${x.WRAP} flex h-[60px] items-center gap-1.5`,
                children: [(0, t.jsxs)(a.default, {
                    href: "/",
                    prefetch: !1,
                    "aria-label": m.HEADER.home,
                    className: "flex min-h-11 items-center gap-2.5 text-white",
                    children: [(0, t.jsx)(n, {
                        className: "h-9 w-9 shrink-0 max-[399px]:h-8 max-[399px]:w-8 min-[900px]:hidden"
                    }), (0, t.jsx)(c, {
                        className: "hidden h-10 w-auto shrink-0 min-[900px]:block"
                    }), (0, t.jsxs)("span", {
                        className: "whitespace-nowrap font-title uppercase leading-none",
                        "data-testid": "site-name",
                        children: [(0, t.jsx)("span", {
                            className: "hidden text-[20px] tracking-[.02em] min-[600px]:inline",
                            children: m.SITE_NAME
                        }), (0, t.jsxs)("span", {
                            className: "grid min-[600px]:hidden",
                            "aria-hidden": "true",
                            children: [(0, t.jsx)("span", {
                                className: "text-[24px] tracking-[.03em]",
                                children: m.SITE_NAME_SHORT
                            }), (0, t.jsx)("span", {
                                className: "mt-0.5 text-[10px] tracking-[.32em] text-white/80",
                                children: m.SITE_NAME_REST
                            })]
                        })]
                    })]
                }), (0, t.jsx)("nav", {
                    "aria-label": m.HEADER.nav,
                    className: "ml-9 hidden gap-1 min-[1200px]:flex",
                    children: [...e, {
                        key: "about",
                        label: m.MENU.about,
                        href: m.FOOTER.aboutHref
                    }].map(e => {
                        let s = b(o, e.href);
                        return (0, t.jsx)(a.default, {
                            href: e.href,
                            prefetch: !1,
                            "aria-current": s ? "page" : void 0,
                            className: `inline-flex min-h-11 items-center whitespace-nowrap px-3.5 text-base tracking-[.01em] text-night-ink underline-offset-8 ${s?"font-bold underline decoration-2":"font-light hover:underline hover:decoration-1"}`,
                            children: e.label
                        }, e.key)
                    })
                }), (0, t.jsx)("span", {
                    className: "flex-1"
                }), l && (0, t.jsxs)(a.default, {
                    href: u.ACCOUNT_HOME,
                    prefetch: !1,
                    className: `${y} min-h-10 border-[1.5px] border-night-ink/50 px-3.5 text-sm text-night-ink max-[419px]:px-2.5`,
                    "data-testid": "nav-my-tickets",
                    children: [(0, t.jsx)(h.UserGlyph, {}), (0, t.jsx)("span", {
                        className: "max-[419px]:sr-only",
                        children: m.HEADER.myTickets
                    })]
                }), (0, t.jsx)("button", {
                    type: "button",
                    onClick: w,
                    "aria-label": $,
                    className: "grid h-11 w-11 place-items-center rounded-sm hover:bg-glass max-[599px]:hidden",
                    "data-testid": "theme-toggle",
                    children: "dark" === v ? (0, t.jsx)(h.SunGlyph, {}) : (0, t.jsx)(h.MoonGlyph, {})
                }), i && (0, t.jsx)(a.default, {
                    href: i,
                    prefetch: !1,
                    className: `${y} min-h-10 bg-primary px-3.5 text-sm text-on-primary hover:bg-primary-hover ${l?"max-[599px]:hidden":""}`,
                    "data-testid": "nav-tickets",
                    children: m.HEADER.tickets
                }), (0, t.jsx)("button", {
                    ref: N,
                    type: "button",
                    "aria-label": m.HEADER.menu,
                    "aria-expanded": _,
                    "aria-controls": "site-menu",
                    onClick: () => M(!0),
                    className: "-mr-2.5 grid h-11 w-11 place-items-center rounded-sm hover:bg-glass min-[1200px]:hidden",
                    "data-testid": "menu-button",
                    children: (0, t.jsx)(h.MenuGlyph, {})
                })]
            }), _ && (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("div", {
                    className: "fixed inset-0 z-[59] bg-scrim min-[1200px]:hidden",
                    onClick: j,
                    "aria-hidden": "true",
                    "data-testid": "menu-scrim"
                }), (0, t.jsxs)("div", {
                    id: "site-menu",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": m.MENU.title,
                    className: "fixed inset-y-0 right-0 z-[60] grid w-full max-w-[420px] content-start gap-3.5 overflow-auto bg-bg px-4 pb-7 pt-3 text-body md:px-8 min-[1200px]:hidden",
                    onClick: e => e.target.closest("a") && M(!1),
                    children: [(0, t.jsxs)("div", {
                        className: "flex min-h-[52px] items-center justify-between",
                        children: [(0, t.jsx)("span", {
                            className: "font-title text-[26px] uppercase text-ink",
                            children: m.MENU.title
                        }), (0, t.jsx)("button", {
                            ref: E,
                            type: "button",
                            "aria-label": m.MENU.close,
                            onClick: j,
                            className: "grid h-11 w-11 place-items-center rounded-sm text-ink",
                            children: (0, t.jsx)(h.CloseGlyph, {})
                        })]
                    }), i && (0, t.jsx)(a.default, {
                        href: i,
                        prefetch: !1,
                        className: `${y} min-h-14 w-full bg-primary px-5 text-[17px] text-on-primary hover:bg-primary-hover`,
                        children: m.MENU.buy
                    }), e.length > 0 && (0, t.jsx)("nav", {
                        "aria-label": m.HEADER.nav,
                        className: "grid grid-cols-2 gap-[3px]",
                        children: e.map(e => {
                            let s = k[e.key];
                            return (0, t.jsxs)(a.default, {
                                href: e.href,
                                prefetch: !1,
                                "aria-current": b(o, e.href) ? "page" : void 0,
                                className: `grid content-start gap-0.5 bg-surface p-3.5 no-underline ${"event"===e.key?"col-span-2":"min-h-28"}`,
                                children: [s && (0, t.jsx)(p.Icon, {
                                    name: s,
                                    size: 28,
                                    className: "mb-2 text-ink"
                                }), (0, t.jsx)("span", {
                                    className: "text-[17px] font-bold text-ink",
                                    children: e.label
                                }), (0, t.jsx)("small", {
                                    className: "text-[13px] text-muted",
                                    children: e.note
                                })]
                            }, e.key)
                        })
                    }), (0, t.jsx)("div", {
                        className: "grid gap-[3px]",
                        children: l ? (0, t.jsxs)(a.default, {
                            href: u.ACCOUNT_HOME,
                            prefetch: !1,
                            className: "grid min-h-16 content-center bg-surface px-4 py-3.5",
                            children: [(0, t.jsx)("span", {
                                className: "text-[17px] font-bold text-ink",
                                children: m.MENU.myTickets
                            }), (0, t.jsx)("small", {
                                className: "text-[13px] text-muted",
                                children: m.MENU.myTicketsNote
                            })]
                        }) : (0, t.jsxs)(a.default, {
                            href: "/login",
                            prefetch: !1,
                            className: "grid min-h-16 content-center bg-surface px-4 py-3.5",
                            children: [(0, t.jsx)("span", {
                                className: "text-[17px] font-bold text-ink",
                                children: m.MENU.logIn
                            }), (0, t.jsx)("small", {
                                className: "text-[13px] text-muted",
                                children: m.MENU.logInNote
                            })]
                        })
                    }), (0, t.jsxs)("div", {
                        className: "flex items-center justify-between bg-surface px-4 py-3 font-bold text-ink",
                        children: [(0, t.jsx)("span", {
                            id: "menu-dark-label",
                            children: m.MENU.dark
                        }), (0, t.jsx)("button", {
                            type: "button",
                            role: "switch",
                            "aria-checked": "dark" === v,
                            "aria-labelledby": "menu-dark-label",
                            onClick: w,
                            className: `relative h-[30px] w-[52px] ${"dark"===v?"bg-primary":"bg-fill-line"}`,
                            "data-testid": "menu-theme-switch",
                            children: (0, t.jsx)("span", {
                                className: `absolute top-[3px] h-6 w-6 bg-white transition-[left] duration-150 ${"dark"===v?"left-[25px]":"left-[3px]"}`
                            })
                        })]
                    }), (0, t.jsxs)("p", {
                        className: "flex flex-wrap gap-x-[18px] gap-y-1 text-sm",
                        children: [(0, t.jsx)(a.default, {
                            href: m.FOOTER.helpHref,
                            prefetch: !1,
                            className: "inline-flex min-h-10 items-center text-body",
                            children: m.FOOTER.helpPage
                        }), (0, t.jsx)(a.default, {
                            href: m.FOOTER.faqHref,
                            prefetch: !1,
                            className: "inline-flex min-h-10 items-center text-body",
                            children: m.MENU.faq
                        }), (0, t.jsx)(a.default, {
                            href: m.FOOTER.aboutHref,
                            prefetch: !1,
                            className: "inline-flex min-h-10 items-center text-body",
                            children: m.MENU.about
                        }), (0, t.jsx)(a.default, {
                            href: m.FOOTER.ticketingTermsHref,
                            prefetch: !1,
                            className: "inline-flex min-h-10 items-center text-body",
                            children: m.MENU.ticketingTerms
                        }), (0, t.jsx)(a.default, {
                            href: "/terms",
                            prefetch: !1,
                            className: "inline-flex min-h-10 items-center text-body",
                            children: m.MENU.terms
                        }), (0, t.jsx)(a.default, {
                            href: "/privacy",
                            prefetch: !1,
                            className: "inline-flex min-h-10 items-center text-body",
                            children: m.MENU.privacy
                        })]
                    }), (0, t.jsx)(d.SocialLinks, {
                        look: "surface"
                    })]
                })]
            })]
        })
    }, "isCurrent", 0, b], 23879)
}, 62880, 97046, e => {
    "use strict";
    var t = e.i(59644),
        a = e.i(22809);

    function s() {
        return "dark" === document.documentElement.getAttribute("data-theme") ? "dark" : "light"
    }
    let r = new Set;

    function i(e) {
        return r.add(e), () => {
            r.delete(e)
        }
    }
    e.s(["useTheme", 0, function() {
        return {
            theme: (0, t.useSyncExternalStore)(i, s, () => "light"),
            toggle: (0, t.useCallback)(() => (function(e) {
                document.documentElement.setAttribute("data-theme", e);
                try {
                    localStorage.setItem(a.THEME_STORAGE_KEY, e)
                } catch {}
                r.forEach(e => e())
            })("dark" === s() ? "light" : "dark"), [])
        }
    }], 62880), e.s(["useLoggedIn", 0, function() {
        let [e, a] = (0, t.useState)(!1);
        return (0, t.useEffect)(() => {
            let e = !0;
            return fetch("/account/api/session", {
                cache: "no-store",
                credentials: "same-origin"
            }).then(e => e.ok ? e.json() : null).then(t => {
                e && t ? .loggedIn === !0 && a(!0)
            }).catch(() => {}), () => {
                e = !1
            }
        }, []), e
    }], 97046)
}, 59491, e => {
    "use strict";
    e.s(["WRAP", 0, "mx-auto w-full max-w-[1160px] px-4 md:px-8"])
}, 42917, e => {
    "use strict";
    let t = ["instagram", "x", "tiktok", "youtube", "facebook"],
        a = {
            owner: "Talanta Sports City",
            links: {
                instagram: "https://www.instagram.com/talantasportscity/",
                x: "https://x.com/talantacity",
                tiktok: "https://www.tiktok.com/@talantasportscity",
                youtube: "https://www.youtube.com/@TalantaSportsCity",
                facebook: "https://www.facebook.com/TalantaSportsCity"
            }
        },
        s = {
            instagram: ["instagram.com", "www.instagram.com"],
            x: ["x.com", "twitter.com", "www.x.com", "www.twitter.com"],
            tiktok: ["tiktok.com", "www.tiktok.com"],
            youtube: ["youtube.com", "www.youtube.com"],
            facebook: ["facebook.com", "www.facebook.com"]
        };
    e.s(["EMAIL_RE", 0, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, "LANDING_COPY", 0, {
        cta: "GET NOTIFIED",
        notify: {
            lead: "TICKETS ON SALE",
            accent: "5 NOVEMBER",
            body: "Notify me of any updates and news.",
            placeholder: "you@email.com",
            submit: "NOTIFY ME",
            busy: "SENDING…",
            invalid: "Enter a valid email address.",
            failed: "We couldn't save that just now. Please try again.",
            doneTitle: "YOU'RE ON THE LIST",
            done: e => `We'll email ${e} when tickets drop.`
        },
        title: "Tickets drop soon",
        description: "Notify me of any updates and news."
    }, "SOCIAL_BY_DOMAIN", 0, {
        "talantasportscity.com": a,
        "xperience.ke": a
    }, "socialLinks", 0, function(e) {
        let a = [];
        for (let r of t) {
            let t, i = e[r];
            if (i) {
                try {
                    t = new URL(i)
                } catch {
                    continue
                }
                "https:" === t.protocol && !t.username && !t.password && s[r].includes(t.hostname) && a.push({
                    network: r,
                    href: t.href
                })
            }
        }
        return a
    }])
}, 85976, e => {
    "use strict";
    e.i(10592);
    let t = {
            "talantasportscity.com": {
                domain: "talantasportscity.com",
                publicDomain: "talantasportscity.com",
                name: "Talanta Sports City",
                contact: "info@talantasportscity.com",
                address: "Ngong Rd, Nairobi",
                stadiumMark: !0,
                blank: !1
            },
            "xperience.ke": {
                domain: "xperience.ke",
                publicDomain: "talantasportscity.com",
                name: "Talanta Sports City",
                contact: "info@talantasportscity.com",
                address: "Ngong Rd, Nairobi",
                stadiumMark: !0,
                blank: !0
            }
        },
        a = "talantasportscity.com";
    ! function(e) {
        let {
            name: t,
            publicDomain: a,
            contact: s,
            address: r
        } = e
    }(t[a]), e.s(["CANONICAL_DOMAIN", 0, a, "SITE_IDENTITIES", 0, t, "identityForHost", 0, function(e) {
        return t[(e ? ? "").trim().toLowerCase().replace(/:\d+$/, "").replace(/^www\./, "")] ? ? t[a]
    }])
}, 9177, e => {
    "use strict";
    let t = "Talanta Sports City",
        a = {
            home: `${t}, home`,
            nav: "Main",
            myTickets: "My tickets",
            tickets: "Tickets",
            menu: "Menu",
            toLight: "Switch to light theme",
            toDark: "Switch to dark theme"
        };
    e.s(["FOOTER", 0, {
        buy: "Buy",
        help: "Help",
        legal: "Legal",
        contact: "Contact",
        myTickets: "My tickets",
        helpPage: "Help and contact",
        helpHref: "/help",
        gettingThere: "Getting there",
        logIn: "Log in",
        terms: "Terms of Use",
        privacy: "Privacy Policy",
        about: "About the Stadium",
        aboutHref: "/about",
        ticketingTerms: "Ticketing and Admission Terms",
        ticketingTermsHref: "/ticketing-terms",
        faq: "Frequently Asked Questions",
        faqHref: "/faq",
        contactUs: "Contact us",
        email: "info@talantasportscity.com",
        address: "Ngong Rd, Nairobi",
        assureLabel: "Buying here",
        official: "Official ticket seller",
        officialFor: e => e ? `for ${e} at Talanta` : "for matches at Talanta",
        secure: "Secure mobile money and card",
        secureNote: "Card details never touch this site",
        tickets: "Secure tickets",
        ticketsNote: "By SMS and e-mail, and under My tickets",
        copyright: e => `\xa9 ${e} ${t} \xb7 Ngong Rd, Nairobi.`
    }, "HEADER", 0, a, "MENU", 0, {
        title: "Menu",
        close: "Close menu",
        buy: "Buy tickets",
        myTickets: "My tickets",
        myTicketsNote: "Tickets, trips and QR codes",
        logIn: "Log in",
        logInNote: "See your tickets: no password, we send a code",
        dark: "Dark theme",
        terms: "Terms",
        privacy: "Privacy",
        about: "About",
        ticketingTerms: "Ticketing terms",
        faq: "FAQ"
    }, "SITE_NAME", 0, t, "SITE_NAME_REST", 0, "Sports City", "SITE_NAME_SHORT", 0, "Talanta"])
}, 31009, e => {
    "use strict";
    e.i(10592);
    let t = "/account/tickets",
        a = "/login",
        s = /^\/account\/(?:experiences|packages|trips\/flights|trips\/hotels)\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
        r = new Set(["/account/trips"]);

    function i(e) {
        return "string" != typeof e ? t : r.has(e) || s.test(e) ? e : t
    }
    e.s(["ACCOUNT_HOME", 0, t, "LOGIN_PATH", 0, a, "loginHref", 0, function(e) {
        let s = i(e);
        return s === t ? a : `${a}?next=${encodeURIComponent(s)}`
    }, "safeNext", 0, i])
}, 77666, e => {
    "use strict";
    e.s(["browserHost", 0, function() {
        return window.location.host
    }])
}, 16766, (e, t, a) => {
    t.exports = e.r(14417)
}, 22809, e => {
    "use strict";
    var t;
    let a, s = {
            bg: "#F6F4F0",
            surface: "#FFFFFF",
            surface2: "#F0EDE8",
            sunken: "#ECE8E2",
            night: "#0E0C10",
            night2: "#1A1720",
            nightInk: "#F5F1EA",
            nightBody: "#CFC7BB",
            ink: "#14121A",
            body: "#3A3640",
            muted: "#5F5A63",
            border: "transparent",
            fillLine: "#E4E0DA",
            control: "#85808A",
            tileEdge: "#D3D6DB",
            pick: "#14121A",
            primary: "#0A7A3D",
            primaryHover: "#08652F",
            onPrimary: "#FFFFFF",
            gold: "#8A5500",
            focus: "#14121A",
            ok: "#17663A",
            okBg: "#E8F3EC",
            bad: "#A3190F",
            badBg: "#FCEDEB",
            warn: "#7A4E00",
            warnBg: "#FFF4DC",
            score: "#0F3D8C"
        },
        r = { ...s,
            bg: "#0E0C10",
            surface: "#18151C",
            surface2: "#211D26",
            sunken: "#0A090C",
            night: "#060508",
            night2: "#141118",
            ink: "#F5F1EA",
            body: "#D6CFD8",
            muted: "#A9A2AD",
            fillLine: "#2D2933",
            control: "#7E7685",
            tileEdge: "#4A4552",
            pick: "#B4AEBB",
            gold: "#F5B53A",
            focus: "#F5F1EA",
            ok: "#6FD39A",
            okBg: "#12261B",
            bad: "#FF8A80",
            badBg: "#2A1412",
            warn: "#F5C46B",
            warnBg: "#2A2010",
            score: "#3D7BE0"
        },
        i = {
            bg: "#ffffff",
            ink: "#101820",
            muted: "#6b7280",
            surface: "#f5f5f7",
            border: "#ececef"
        },
        n = {
            sel: "#BB0000"
        },
        o = "#1F4A2C",
        l = "#5B6472",
        c = "--stpk-soon:#2A2F37;--stpk-soon-hover:#363C46;--stpk-soon-label:#C4CAD3",
        d = `:root[data-theme=dark] .stpk,:root[data-theme=dark] .stpk .sp_mapbox{--stpk-ink:${r.ink};--stpk-muted:${r.muted};--stpk-line:${r.fillLine};--stpk-bg2:${r.surface2};--stpk-map:${r.sunken};--stpk-maplabel:${r.body}b3;--stpk-pitch:${o};--stpk-own:${r.ok};--stpk-soldout:${l};${c}}@media (prefers-color-scheme:dark){:root:not([data-theme=light]) .stpk,:root:not([data-theme=light]) .stpk .sp_mapbox{--stpk-ink:${r.ink};--stpk-muted:${r.muted};--stpk-line:${r.fillLine};--stpk-bg2:${r.surface2};--stpk-map:${r.sunken};--stpk-maplabel:${r.body}b3;--stpk-pitch:${o};--stpk-own:${r.ok};--stpk-soldout:${l};${c}}}:root[data-theme=dark] .stpk{background:var(--bg);color:var(--ink)}@media (prefers-color-scheme:dark){:root:not([data-theme=light]) .stpk{background:var(--bg);color:var(--ink)}}` + (t = [
            [".sp_bar,.sp_side,.sp_card,.sp_ctrls button,.sp_back,.sp_datepill,.sp_fchip,.sp_fin,.sp_hint,.sp_legend,.sp_navback,.sp_pick,.sp_qtbtn,.sp_qtctl,.sp_selcard,.sp_shows,.sp_tip,.sp_toast,.sp_zones,.sp_clear,.sp_loading,.sp_vfnote,.sp_active,.sp_lhead,.sp_grp,.sp_gwrap,.sp_tophint", "background:var(--surface);color:var(--ink);border-color:var(--fill-line)"],
            ['.sp_card:hover,.sp_card.hov,.sp_card[data-active],.sp_navback:hover,.sp_clear:hover,.sp_grp:hover,.sp_qtbtn:hover:not(:disabled),.sp_datepill[aria-pressed="true"]', "background:var(--surface-2)"],
            [".sp_aname,.sp_cname,.sp_cprice,.sp_listttl,.sp_qtval,.sp_qtlbl,.sp_vftitle,.sp_backlink:hover", "color:var(--ink)"],
            [".sp_lcount,.sp_ameta,.sp_ahint,.sp_backlink", "color:var(--muted)"],
            [".sp_mapbox", "border-color:var(--fill-line)"]
        ], a = e => t.map(([t, a]) => `${e} .stpk :is(${t}){${a}}`).join(""), `${a(":root[data-theme=dark]")}@media (prefers-color-scheme:dark){${a(":root:not([data-theme=light])")}}`),
        p = {
            bg: "#0E0C10",
            divider: "#2A2529",
            inputBorder: "#4A4247",
            headline: "#FFFFFF",
            ink: "#F5F1EA",
            body: "#CFC7BB",
            muted: "#A39A8E",
            amber: "#F0A20F",
            ctaBorder: "rgba(255,255,255,.55)",
            markRed: "#be0000",
            markWhite: "#fff",
            scrim: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.2) 24%, rgba(0,0,0,.2) 76%, rgba(0,0,0,0) 100%)",
            overlay: "radial-gradient(ellipse 45% 55% at 50% 40%, rgba(14,12,16,.72), rgba(14,12,16,.35) 70%, rgba(14,12,16,.25))"
        },
        h = ["linear-gradient(160deg,#9bb06a,#4e5e2a)", "linear-gradient(160deg,#7fc3c9,#2d6e7a)", "linear-gradient(160deg,#8fb3d1,#3b5f80)", "linear-gradient(160deg,#d1b38f,#80603b)", "linear-gradient(160deg,#c99a7f,#7a4b2d)", "linear-gradient(160deg,#a99ac9,#4b3d7a)"],
        m = {
            general: "#5B8DEF",
            vip: "#E0A11B",
            vvip: "#FF7A1A",
            box: "#8E44AD"
        };

    function u(e, t) {
        return `color-scheme:${t};--bg:${e.bg};--surface:${e.surface};--surface-2:${e.surface2};--sunken:${e.sunken};--night:${e.night};--night-2:${e.night2};--night-ink:${e.nightInk};--night-body:${e.nightBody};--ink:${e.ink};--body:${e.body};--muted:${e.muted};--border:${e.border};--fill-line:${e.fillLine};--control:${e.control};--tile-edge:${e.tileEdge};--pick:${e.pick};--primary:${e.primary};--primary-hover:${e.primaryHover};--on-primary:${e.onPrimary};--gold:${e.gold};--focus:${e.focus};--ok:${e.ok};--ok-bg:${e.okBg};--bad:${e.bad};--bad-bg:${e.badBg};--warn:${e.warn};--warn-bg:${e.warnBg};--score:${e.score}`
    }
    s.night, e.s(["COLORS", 0, {
        light: s,
        dark: r
    }, "LANDING", 0, p, "LIGHT_SURFACE", 0, i, "PAY_MARKS", 0, {
        visa: "#1A1F71",
        mcRed: "#EB001B",
        mcYellow: "#F79E1B",
        mcOverlap: "#FF5F00",
        amex: "#2E77BC",
        mpesa: "#3BA935",
        airtel: "#E40000"
    }, "THEME_STORAGE_KEY", 0, "tsc-theme", "TICKET_QR", 0, {
        bg: "#FFFFFF",
        ink: "#000000",
        text: "#3A3640",
        stamp: "#A3190F"
    }, "themeCss", 0, function() {
        let e = [u(s, "light"), '--font-body:var(--xp-font-barlow), ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif', '--font-display:var(--xp-font-barlow), ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif', "--font-title:var(--xp-font-anton), Impact, sans-serif", "--xp-band:linear-gradient(180deg,rgba(10,9,12,.65),rgba(10,9,12,.25) 35%,rgba(10,9,12,.75))", "--xp-band-wide:linear-gradient(90deg,var(--night) 0%,var(--night) 35%,rgba(14,12,16,.5) 48%,rgba(14,12,16,0) 65%),linear-gradient(180deg,rgba(10,9,12,.5),rgba(10,9,12,0) 22%)", "--xp-poster:linear-gradient(180deg,rgba(10,9,12,.75) 0%,rgba(10,9,12,.55) 45%,rgba(10,9,12,.05) 72%,rgba(10,9,12,.25) 100%)", "--xp-scrim:rgba(10,9,12,.6)", "--xp-glass:rgba(255,255,255,.08)", "--xp-assure:#6FD39A", "--xp-white:#FFFFFF", "--xp-city-shade:linear-gradient(180deg,rgba(0,0,0,0) 40%,rgba(0,0,0,.72))", "--xp-stay-shade:linear-gradient(180deg,rgba(0,0,0,.05) 20%,rgba(0,0,0,.78))", "--xp-stay-note:#ECE7E0", "--xp-packages-card:linear-gradient(140deg,#3f5a4a,#16241c)", ...h.map((e, t) => `--xp-city-${t}:${e}`), ...Object.entries(m).map(([e, t]) => `--z-${e}:${t}`), ...Object.entries(n).map(([e, t]) => `--stpk-${e}:${t}`), `--lp-bg:${p.bg}`, `--lp-divider:${p.divider}`, `--lp-input-border:${p.inputBorder}`, `--lp-headline:${p.headline}`, `--lp-ink:${p.ink}`, `--lp-body:${p.body}`, `--lp-muted:${p.muted}`, `--lp-amber:${p.amber}`, `--lp-cta-border:${p.ctaBorder}`, `--lp-mark-red:${p.markRed}`, `--lp-mark-white:${p.markWhite}`, `--lp-overlay:${p.overlay}`, `--lp-scrim:${p.scrim}`],
            t = [`--bg:${i.bg}`, `--ink:${i.ink}`, `--muted:${i.muted}`, `--surface:${i.surface}`, `--border:${i.border}`, "color:var(--ink)"],
            a = u(r, "dark");
        return `:root{${e.join(";")}}:root[data-theme=dark]{${a}}@media (prefers-color-scheme:dark){:root:not([data-theme=light]){${a}}}.stpk{${u(s,"light")};color:var(--ink)}:root[data-theme=dark] .stpk{${a}}@media (prefers-color-scheme:dark){:root:not([data-theme=light]) .stpk{${a}}}` + d + `.mf-modal{${u(s,"light")};${t.join(";")}}` + 'html .stpk{font-family:var(--font-body)}html .stpk :is(.sp_navback,.sp_evimg,.sp_datepill,.sp_chip,.sp_zones,.sp_legend,.sp_mapbox,.sp_side,.sp_qtctl,.sp_qtbtn,.sp_fchip,.sp_fsort,.sp_fseg,.sp_fin,.sp_active,.sp_thumb,.sp_pick,.sp_cont,.sp_selcard,.sp_selcount,.sp_ctrls button,.sp_back,.sp_tip,.sp_tipimg,.sp_hint,.sp_toast,.sp_clear,.sp_vfimg,.sp_vfnote,.sp_tophint){border-radius:2px}html .stpk :is(.sp_dot,.sp_chip,.sp_zones,.sp_legend,.sp_ctrls button,.sp_back,.sp_tip,.sp_hint,.sp_toast,.sp_selcard,.sp_tophint):not(:focus-visible){box-shadow:none}html .stpk .sp_chip{font-size:13px;letter-spacing:.04em;min-height:40px;padding:0 12px;backdrop-filter:none}html .stpk .sp_chip.sp_chip[aria-pressed="false"]{background:var(--surface);color:var(--ink);border:0;box-shadow:inset 0 0 0 1.5px var(--control)}html .stpk .sp_fsort{border:0;background:var(--surface-2);padding:3px}html .stpk .sp_fseg{min-height:36px;padding:0 14px;font-size:14px;font-weight:500;background:none;color:var(--muted)}html .stpk .sp_fseg.on{background:var(--surface);color:var(--ink);font-weight:700}html .stpk .sp_cprice{display:inline-flex;flex-direction:column;align-items:flex-end;line-height:1.15}html .stpk .sp_cprice .sp_from{margin-bottom:2px}html .stpk .sp_cont{background:var(--primary);color:var(--on-primary)}html .stpk .sp_cont:hover{background:var(--primary-hover)}@media(max-width:880px){html .stpk .sp_mapbox{display:grid;grid-template-columns:auto 1fr;grid-template-rows:auto auto minmax(0,1fr);row-gap:6px;padding:8px 8px 0}html .stpk .sp_mapbox>.sp_canvas{grid-column:1/-1;grid-row:3;min-height:0}html .stpk .sp_ctrls{position:relative;left:0;top:0;grid-column:1;grid-row:1;align-self:center}html .stpk .sp_maptiers{position:static;grid-column:2;grid-row:1;align-self:center}html .stpk .sp_chip{min-height:30px;padding:0 8px;font-size:11px}html .stpk .sp_backrow{position:relative;left:0;top:0;grid-column:1;grid-row:2;justify-self:start;align-self:center}html .stpk .sp_back{position:static;display:block}html .stpk .sp_tophint{position:static;transform:none;grid-column:1/-1;grid-row:3;justify-self:center;align-self:start;margin-top:8px;font-size:12px;padding:5px 10px}html .stpk .sp_legend{position:static;grid-column:2;grid-row:2;flex-direction:row;flex-wrap:wrap;justify-content:flex-end;align-self:center;gap:2px 8px;padding:0;background:none;border:0;font-size:10.5px}}html .mf-modal{box-shadow:none}html .mf-modal button.rounded-full{border-radius:2px}'
    }])
}]);