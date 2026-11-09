(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 13148, e => {
    "use strict";
    var t = e.i(74464),
        n = e.i(24802),
        r = e.i(98024),
        o = e.i(14320);
    e.s(["default", 0, function({
        error: e
    }) {
        return (0, t.jsx)(o.ErrorScreen, {
            error: e,
            testId: "page-error",
            home: (0, t.jsx)(r.ActionLink, {
                href: "/",
                children: n.SYSTEM.error.home
            })
        })
    }])
}, 98024, 14320, e => {
    "use strict";
    var t = e.i(74464),
        n = e.i(25097);
    let r = "inline-flex items-center justify-center rounded-[2px] bg-accent px-5 py-3 font-semibold text-white hover:bg-accent-hover",
        o = "inline-flex items-center justify-center rounded-[2px] bg-[color:var(--surface)] px-5 py-3 font-semibold text-ink";

    function i({
        title: e,
        body: n,
        children: r,
        testId: o
    }) {
        return (0, t.jsxs)("section", {
            className: "mx-auto flex max-w-2xl flex-col items-start gap-5 px-4 py-24 sm:px-6",
            "data-testid": o,
            children: [(0, t.jsx)("h1", {
                className: "font-title text-4xl uppercase text-ink sm:text-5xl",
                children: e
            }), (0, t.jsx)("p", {
                className: "text-lg text-muted",
                children: n
            }), r && (0, t.jsx)("div", {
                className: "flex flex-wrap gap-3",
                children: r
            })]
        })
    }
    e.s(["ActionLink", 0, function({
        href: e,
        primary: i,
        children: s
    }) {
        return (0, t.jsx)(n.default, {
            href: e,
            prefetch: !1,
            className: i ? r : o,
            children: s
        })
    }, "SystemPage", 0, i, "primaryButton", 0, r, "secondaryButton", 0, o], 98024);
    var s = e.i(59644),
        a = e.i(24802);
    let c = "xp_skew_reload:",
        l = [/\bFailed to load chunk\b/i, /\bLoading (?:CSS )?chunk [^\s]+ failed\b/i, /\bServer Action .* was not found on the server\b/i, /\bFailed to find Server Action\b/i, /\bdeployment[ -]?id\b.*\bmismatch\b|\bmismatch\b.*\bdeployment[ -]?id\b/i, /^Connection closed\.?$/, /Minified React error [#]412\b/],
        u = /^(?:Failed to fetch|Load failed|NetworkError when attempting to fetch resource\.?)$/;

    function d() {
        try {
            return window.sessionStorage
        } catch {
            return null
        }
    }
    let m = a.SYSTEM.error,
        f = a.SYSTEM.updated;

    function h() {
        window.location.reload()
    }

    function b() {
        return window.location.pathname
    }
    e.s(["ErrorScreen", 0, function({
        error: e,
        home: n,
        testId: o
    }) {
        let [a, y] = (0, s.useState)(() => (function(e) {
            if (!e || "object" != typeof e) return !1;
            let t = String(e.name ? ? ""),
                n = String(e.message ? ? "");
            return !!("ChunkLoadError" === t || "TypeError" === t && u.test(n.trim())) || l.some(e => e.test(n))
        })(e) && function(e, t, n) {
            try {
                if (!n) return !1;
                let r = Number(n.getItem(c + e));
                return !(Number.isFinite(r) && r > 0 && t - r >= 0 && t - r < 3e4)
            } catch {
                return !1
            }
        }(b(), Date.now(), d())), p = (0, s.useRef)(!1);
        return ((0, s.useEffect)(() => {
            a && !p.current && (p.current = !0, function(e, t, n) {
                try {
                    if (!n) return !1;
                    return n.setItem(c + e, String(t)), n.getItem(c + e) === String(t)
                } catch {
                    return !1
                }
            }(b(), Date.now(), d()) ? h() : y(!1))
        }, [a]), a) ? (0, t.jsx)(i, {
            title: f.title,
            body: f.body,
            testId: `${o}-updated`
        }) : (0, t.jsxs)(i, {
            title: m.title,
            body: m.body,
            testId: o,
            children: [(0, t.jsx)("button", {
                type: "button",
                className: r,
                onClick: h,
                children: m.retry
            }), n]
        })
    }], 14320)
}, 24802, e => {
    "use strict";
    e.s(["SYSTEM", 0, {
        buyHref: "/",
        notFound: {
            title: "Page not found",
            body: "This page does not exist.",
            home: "Back to the home page",
            buy: "Buy tickets"
        },
        error: {
            title: "Something went wrong",
            body: "This is on our side. Your tickets and payments are safe. Please try again in a moment.",
            retry: "Try again",
            home: "Home"
        },
        updated: {
            title: "One moment",
            body: "We've just updated the site. Reloading your page…"
        },
        siteOnly: {
            title: "Buy on the website",
            body: "Tickets for this event are sold on {site} only.",
            go: "Go to tickets"
        },
        cooldown: {
            title: "Please wait",
            body: "Too many tries. You can continue in {n}.",
            minute: "1 minute",
            minutes: "{n} minutes",
            ready: "You can continue now.",
            home: "Home",
            timer: "Time left"
        },
        maintenance: {
            title: "Back soon",
            body: "We're making the website better. Tickets you've already bought are safe and still work at the gate.",
            follow: "Follow {handle} for updates"
        }
    }])
}]);