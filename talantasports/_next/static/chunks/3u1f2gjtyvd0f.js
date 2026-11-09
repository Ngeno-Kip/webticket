(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 11996, 74358, e => {
    "use strict";
    var t = e.i(74464),
        a = e.i(25097),
        i = e.i(59644),
        n = e.i(76207),
        o = e.i(42917);
    let s = {
        approved: !0,
        title: "Get notified",
        intro: "Leave a phone number or an e-mail address and we will tell you when tickets go on sale.",
        consent: "I agree that Talanta Sports City may contact me about tickets for this event, by the phone number or e-mail address I give. My details are used for nothing else, and I can unsubscribe at any time.",
        submit: "Notify me",
        done: "You're on the list. We'll be in touch when tickets go on sale."
    };
    e.s(["NOTIFY", 0, s], 74358), e.i(85976);
    let r = {
            approved: !0,
            version: "tsc-2026-10-26-b",
            title: s.title,
            intro: s.intro,
            consent: "By submitting your email, you also agree for us to send you news and updates about Talanta Sports City.",
            submit: s.submit,
            done: s.done
        },
        l = {
            landing: {
                copy: o.LANDING_COPY.notify,
                form: "flex flex-col gap-[14px]",
                row: "flex flex-col gap-[10px] md:flex-row md:gap-0",
                input: e => `min-w-0 flex-1 rounded-none border bg-transparent p-4 font-barlow text-[16px] text-lp-headline outline-none placeholder:text-lp-muted focus-visible:border-lp-ink md:px-5 md:py-[18px] md:text-[18px] ${e?"border-lp-amber focus-visible:border-lp-amber":"border-lp-input-border"}`,
                button: "cursor-pointer rounded-none border-0 bg-lp-headline p-4 font-barlow-cond text-[17px] font-bold tracking-[.12em] text-lp-bg hover:bg-lp-amber focus-visible:bg-lp-amber focus-visible:outline-none disabled:cursor-wait disabled:opacity-70 md:px-8 md:py-5 md:text-[18px]",
                notice: "font-barlow text-[15px] leading-[1.45] text-lp-body",
                error: "font-barlow text-[14px] text-lp-amber md:text-[15px]",
                done: "flex flex-col gap-[6px] border border-lp-amber px-4 py-4 md:px-5 md:py-[18px]",
                doneTitle: "font-anton text-[26px] uppercase text-lp-headline md:text-[28px]",
                doneBody: "font-barlow text-[15px] text-lp-body md:text-[16px]"
            },
            poster: {
                copy: { ...o.LANDING_COPY.notify,
                    submit: "Notify me",
                    busy: "Sending…",
                    doneTitle: "You're on the list."
                },
                form: "flex w-full max-w-[420px] flex-col gap-3",
                row: "flex gap-2",
                input: () => "min-h-12 min-w-0 flex-1 rounded-sm border bg-white px-[18px] text-base text-night placeholder:text-muted",
                button: "min-h-12 flex-none cursor-pointer rounded-sm bg-white px-[22px] text-[17px] font-semibold text-night hover:bg-white/85 disabled:cursor-wait disabled:opacity-70",
                notice: "text-[13px] leading-[1.45] text-white/80",
                error: "text-sm font-semibold text-white",
                done: "flex max-w-[420px] flex-col gap-1 rounded-sm bg-ok-bg px-4 py-3 text-ok",
                doneTitle: "font-bold",
                doneBody: "text-sm"
            }
        };

    function d({
        look: e = "landing"
    }) {
        let [a, n] = (0, i.useState)(""), [s, c] = (0, i.useState)({
            kind: "idle"
        }), u = l[e], h = u.copy;
        if ("done" === s.kind) return (0, t.jsxs)("div", {
            role: "status",
            className: u.done,
            children: [(0, t.jsx)("p", {
                className: u.doneTitle,
                children: h.doneTitle
            }), (0, t.jsx)("p", {
                className: u.doneBody,
                children: h.done(s.email)
            })]
        });
        async function m(e) {
            if (e.preventDefault(), "busy" === s.kind) return;
            let t = a.trim();
            if (!o.EMAIL_RE.test(t)) return c({
                kind: "error",
                field: "email",
                message: h.invalid
            });
            c({
                kind: "busy"
            });
            try {
                let e = await fetch("/api/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: t,
                        consent: !0
                    })
                });
                if (e.ok) return c({
                    kind: "done",
                    email: t
                });
                let a = await e.json().catch(() => ({})),
                    i = "string" == typeof a.error && a.error ? a.error : h.failed;
                c({
                    kind: "error",
                    field: "server",
                    message: i
                })
            } catch {
                c({
                    kind: "error",
                    field: "server",
                    message: h.failed
                })
            }
        }
        let p = "error" === s.kind && "email" === s.field,
            f = "busy" === s.kind;
        return (0, t.jsxs)("form", {
            onSubmit: m,
            noValidate: !0,
            className: u.form,
            "data-testid": "landing-signup",
            children: [(0, t.jsxs)("div", {
                className: u.row,
                children: [(0, t.jsx)("input", {
                    id: "notify-email",
                    type: "email",
                    inputMode: "email",
                    autoComplete: "email",
                    value: a,
                    onChange: e => {
                        n(e.target.value), "error" === s.kind && c({
                            kind: "idle"
                        })
                    },
                    maxLength: 254,
                    placeholder: h.placeholder,
                    "aria-label": "Email address",
                    "aria-invalid": p || void 0,
                    "aria-describedby": "error" === s.kind ? "notify-notice notify-error" : "notify-notice",
                    className: u.input(p)
                }), (0, t.jsx)("button", {
                    type: "submit",
                    disabled: f,
                    className: u.button,
                    children: f ? h.busy : h.submit
                })]
            }), (0, t.jsx)("p", {
                id: "notify-notice",
                "data-testid": "consent-notice",
                className: u.notice,
                children: r.consent
            }), "error" === s.kind && (0, t.jsx)("p", {
                id: "notify-error",
                role: "alert",
                className: u.error,
                children: s.message
            })]
        })
    }

    function c(e, t) {
        let a = Math.max(0, Math.floor((e - t) / 1e3));
        return {
            d: Math.floor(a / 86400),
            h: Math.floor(a % 86400 / 3600),
            m: Math.floor(a % 3600 / 60),
            s: a % 60
        }
    }
    e.s(["MatchCta", 0, function({
        sale: e,
        opensLabel: o,
        buyHref: s,
        fromLabel: r,
        formOpen: l
    }) {
        let u = "upcoming" === e.kind ? Date.parse(e.opensAt) : null,
            [h, m] = (0, i.useState)(null);
        if ((0, i.useEffect)(() => {
                if (null === u) return;
                let e = () => m(Date.now());
                e();
                let t = setInterval(e, 1e3);
                return () => clearInterval(t)
            }, [u]), ("open" === e.kind || null !== u && null !== h && h >= u) && s) return (0, t.jsxs)("div", {
            className: "mt-[26px] grid justify-items-start gap-3",
            "data-testid": "cta-buy",
            children: [(0, t.jsx)(a.default, {
                href: s,
                prefetch: !1,
                className: "inline-flex min-h-14 items-center justify-center rounded-sm bg-white px-9 text-[17px] font-semibold text-night hover:bg-white/85",
                children: n.HOME.buy
            }), r && (0, t.jsxs)("p", {
                className: "text-sm text-white/85",
                children: [n.HOME.from, " ", (0, t.jsx)("b", {
                    className: "text-white",
                    children: r
                }), " ", n.HOME.perSeat, " ·", " ", (0, t.jsx)(a.default, {
                    href: s,
                    prefetch: !1,
                    className: "text-white underline",
                    children: n.HOME.allPrices
                })]
            })]
        });
        if (null !== u && o) {
            let e = null === h ? null : c(u, h);
            return (0, t.jsxs)("div", {
                className: "mt-[26px] grid justify-items-start gap-3",
                "data-testid": "cta-presale",
                children: [(0, t.jsx)("p", {
                    className: "font-semibold text-white",
                    children: n.HOME.onSale(o)
                }), (0, t.jsx)("div", {
                    role: "timer",
                    "aria-label": e ? n.HOME.opensIn(e.d, e.h, e.m) : n.HOME.onSale(o),
                    className: "grid w-full max-w-[420px] grid-cols-4 gap-2",
                    "data-testid": "countdown",
                    children: n.HOME.countdown.map((a, i) => (0, t.jsxs)("div", {
                        className: "grid justify-items-center rounded-sm border border-white/20 bg-white/10 py-2.5 backdrop-blur-sm",
                        children: [(0, t.jsx)("b", {
                            className: "font-title text-[40px] leading-none text-white tabular-nums",
                            children: e ? String([e.d, e.h, e.m, e.s][i]).padStart(2, "0") : "--"
                        }), (0, t.jsx)("span", {
                            className: "mt-1 text-xs text-white/80",
                            children: a
                        })]
                    }, a))
                }), l && (0, t.jsx)(d, {
                    look: "poster"
                })]
            })
        }
        return (0, t.jsx)("p", {
            className: "mt-[26px] font-semibold text-white",
            "data-testid": "cta-closed",
            children: n.HOME.closed
        })
    }, "remaining", 0, c], 11996)
}, 92932, e => {
    "use strict";
    var t = e.i(74464),
        a = e.i(59644);
    let i = (e, t, a) => e.replace("{n}", String(t)).replace("{total}", String(a));
    e.s(["AUTO_MS", 0, 6e3, "StadiumCarousel", 0, function({
        slides: e,
        words: n,
        className: o = ""
    }) {
        let s = e.length,
            [r, l] = (0, a.useState)(0),
            [d, c] = (0, a.useState)(() => new Set([0])),
            [u, h] = (0, a.useState)(!1),
            [m, p] = (0, a.useState)(!1),
            [f, g] = (0, a.useState)(!1),
            [b, y] = (0, a.useState)(0),
            x = (0, a.useRef)(null);
        (0, a.useEffect)(() => g(!("function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)), []), (0, a.useEffect)(() => {
            let e = (r + 1) % s;
            c(t => t.has(r) && t.has(e) ? t : new Set([...t, r, e]))
        }, [r, s]);
        let w = (0, a.useCallback)(e => l((e % s + s) % s), [s]),
            v = e => {
                p(!0), w(e)
            };
        if ((0, a.useEffect)(() => {
                if (!f || u || m || s < 2) return;
                let e = window.setTimeout(() => w(r + 1), 6e3);
                return () => window.clearTimeout(e)
            }, [f, u, m, r, s, w]), 0 === s) return null;
        let k = x.current ? .horizontal === !0,
            T = {
                transform: `translateX(calc(${-100*r}% + ${b}px))`
            };
        return (0, t.jsxs)("section", {
            "aria-roledescription": "carousel",
            "aria-label": n.label,
            className: `relative overflow-hidden rounded-sm bg-night ${o}`,
            "data-testid": "stadium-carousel",
            "data-auto": f && !m ? "on" : "off",
            onMouseEnter: () => h(!0),
            onMouseLeave: () => h(!1),
            onFocus: () => h(!0),
            onBlur: e => {
                e.currentTarget.contains(e.relatedTarget) || h(!1)
            },
            onKeyDown: e => {
                "ArrowRight" === e.key ? v(r + 1) : "ArrowLeft" === e.key && v(r - 1)
            },
            children: [(0, t.jsx)("div", {
                className: "absolute inset-0 touch-pan-y",
                onTouchStart: e => {
                    let t = e.touches[0];
                    x.current = t ? {
                        x: t.clientX,
                        y: t.clientY,
                        horizontal: null
                    } : null
                },
                onTouchMove: e => {
                    let t = x.current,
                        a = e.touches[0];
                    if (!t || !a) return;
                    let i = a.clientX - t.x,
                        n = a.clientY - t.y;
                    null === t.horizontal && Math.abs(i) + Math.abs(n) > 8 && (t.horizontal = Math.abs(i) > Math.abs(n)), t.horizontal && y(i)
                },
                onTouchEnd: e => {
                    let t = x.current,
                        a = e.changedTouches[0] ? .clientX;
                    x.current = null, y(0), t ? .horizontal && null != a && (a - t.x <= -50 ? v(r + 1) : a - t.x >= 50 && v(r - 1))
                },
                onTouchCancel: () => {
                    x.current = null, y(0)
                },
                children: (0, t.jsx)("div", {
                    className: `flex h-full ${k?"":"transition-transform duration-500 ease-out motion-reduce:transition-none"}`,
                    style: T,
                    "data-testid": "stadium-carousel-track",
                    children: e.map((e, a) => (0, t.jsx)("div", {
                        role: "group",
                        "aria-roledescription": "slide",
                        "aria-label": i(n.position, a + 1, s),
                        "aria-hidden": a !== r || void 0,
                        inert: a !== r || void 0,
                        className: "h-full min-w-0 flex-[0_0_100%]",
                        "data-testid": "stadium-slide",
                        children: d.has(a) ? (0, t.jsx)("img", {
                            src: e.src,
                            srcSet: e.srcSet,
                            sizes: "(min-width: 900px) 480px, 100vw",
                            alt: e.alt,
                            width: 1200,
                            height: 800,
                            loading: 0 === a ? "eager" : "lazy",
                            decoding: "async",
                            draggable: !1,
                            className: "h-full w-full select-none object-cover"
                        }) : (0, t.jsx)("span", {
                            role: "img",
                            "aria-label": e.alt,
                            className: "block h-full w-full"
                        })
                    }, e.src))
                })
            }), s > 1 && (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("span", {
                    className: "sr-only",
                    "aria-live": "polite",
                    children: i(n.position, r + 1, s)
                }), (0, t.jsx)("div", {
                    className: "absolute inset-x-0 bottom-0 flex justify-center p-2",
                    children: (0, t.jsx)("div", {
                        className: "flex items-center",
                        "data-testid": "carousel-dots",
                        children: e.map((e, a) => (0, t.jsx)("button", {
                            type: "button",
                            "aria-label": i(n.show, a + 1, s),
                            "aria-current": a === r ? "true" : void 0,
                            onClick: () => v(a),
                            className: "grid h-8 w-6 place-items-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
                            children: (0, t.jsx)("span", {
                                className: `block h-2 w-2 rounded-full shadow-[0_0_2px_rgba(0,0,0,0.6)] transition-colors ${a===r?"bg-white":"bg-white/50"}`
                            })
                        }, e.src))
                    })
                })]
            })]
        })
    }])
}, 76207, e => {
    "use strict";
    let t = (e, t, a, i) => ({
            id: e.toLowerCase().normalize("NFKD").replace(/\p{M}/gu, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
            q: e,
            a: t,
            ...a ? {
                steps: a
            } : {},
            ...i ? {
                after: i
            } : {}
        }),
        a = {
            title: "Frequently Asked Questions",
            lead: "Find answers to common questions about the stadium, upcoming events, tickets and planning your visit.",
            metaTitle: "FAQ",
            contents: "Contents",
            all: "All questions",
            href: "/faq",
            sections: [{
                id: "about-the-stadium",
                title: "About the Stadium",
                items: [t("Where is the Raila Odinga International Stadium located?", ["The Raila Odinga International Stadium is located at the Jamhuri Grounds along Ngong Road in Nairobi, Kenya, about 10 kilometres west of the city's Central Business District."]), t("What is the stadium's seating capacity?", ["The stadium has a seating capacity of 60,000 spectators, making it one of Kenya's largest sporting venues. Seating configurations and available capacity may vary depending on the event."]), t("When is the stadium's official inauguration?", ["The stadium's official inauguration is scheduled for Tuesday, 5th January 2027, featuring an international friendly between FC Bayern Munich and AFC Ajax Amsterdam. Kick-off is scheduled for 8:15 p.m. East African Time (EAT)."]), t("Why is the stadium named after Raila Odinga?", ["The stadium is named in honour of the late former Prime Minister, Rt. Hon. Raila Amolo Odinga, in recognition of his contribution to Kenya's democratic transformation and national development. It is intended to serve as a lasting national landmark and a home for future generations of athletes and supporters."]), t("Will the stadium host AFCON 2027 matches?", ["The Raila Odinga International Stadium forms part of Kenya's preparations to co-host the 2027 Africa Cup of Nations alongside Uganda and Tanzania under the PAMOJA partnership."]), t("Will stadium tours be available?", ["Information on guided stadium tours and visitor experiences will be announced once the relevant arrangements have been confirmed. Please check the website for future updates."])]
            }, {
                id: "events-and-tickets",
                title: "Events and Tickets",
                items: [t("Where can I purchase tickets?", ["Official tickets for the Bayern Munich versus Ajax Amsterdam match will be available exclusively through the official Talanta Sports City website at www.TalantaSportsCity.com. We strongly encourage fans to purchase tickets only through authorised channels to avoid fraud and invalid tickets."]), t("How much do tickets cost?", ["Tickets for the inaugural Bayern Munich versus Ajax Amsterdam match start at KES 2,500. Additional seating categories and prices will also be displayed on the official ticketing platform on www.TalantaSportsCity.com."]), t("When do tickets go on sale?", ["Ticket sales for the inaugural match open on Thursday, 5th November 2026, at 6:00 pm EAT, through www.TalantaSportsCity.com."]), t("Can I choose my seat when purchasing a ticket?", ["Yes. Available seating categories and seat-selection options for the inaugural match will be displayed during the ticket-purchasing process. Please review your selected ticket details before completing payment."]), t("Can I purchase tickets at the stadium?", ["No. Fans can only purchase tickets for the inaugural match online through www.TalantaSportsCity.com. There will be no physical ticket sales anywhere for the inaugural match."]), t("Can I transfer my ticket to someone else?", ["Yes. You can send a ticket to a guest from My tickets. Transfers are governed by the terms and conditions displayed during purchase. Please review these conditions before buying or sending a ticket. To send your ticket:"], ["Open My tickets and choose the ticket you want to send.", 'Tap "Send to a guest".', 'Enter your guest\'s full name and either their Kenyan mobile number or their e-mail, then tap "Send ticket".', "Your guest gets a link to their ticket by SMS or e-mail, the way you entered it, and opens it with a code we send there.", 'Your copy of that seat stops working as soon as it is sent, and your guest\'s ticket has a new entry code. Your ticket shows "Sent to" your guest\'s name, then "Accepted by" them once they open it. Until they open it, you can take it back.'], ["Personal passes and invitations can't be sent, and a guest can't pass a ticket on again."]), t("Can I get a refund if I am unable to attend?", ["No. There will be no refunds or cancellations for the inaugural match as per the ticketing terms and conditions applicable, except if the match is cancelled: a cancelled match is refunded in accordance with the terms and conditions. Please review these carefully before completing your purchase."]), t("What does 'No Re-entry' mean?", ["The No Re-entry policy for the inaugural match means that once you enter the stadium and your ticket is scanned, you will not be allowed to leave and return using the same ticket. Please ensure you have everything you need before entering the stadium."]), t("Can I attend the match with my children?", ["Yes. Families and children are welcome at the stadium. Every attendee, including children, must have a valid paid ticket and an allocated seat. Children should be accompanied and supervised by a responsible adult throughout their visit. Any additional age-related conditions will be communicated in the event's ticketing terms."]), t("Will Bayern Munich and Ajax Amsterdam bring their first-team players?", ["The scheduled fixture for the inaugural match is between FC Bayern Munich and AFC Ajax Amsterdam. Squad selection and individual player participation are determined by the respective clubs. Confirmed squad information will be shared through official channels when available. The appearance of any specific player is not guaranteed."]), t("What happens if the inaugural match is postponed or cancelled?", ["If the FC Bayern Munich versus AFC Ajax Amsterdam inaugural match is postponed or cancelled, official announcements will be made through the Talanta Sports City website and verified communication channels. Ticket holders will receive information on revised match arrangements and any applicable refund or ticket-validity procedures in accordance with the terms and conditions."])]
            }, {
                id: "plan-your-visit",
                title: "Plan Your Visit on 5th January",
                items: [t("What time will the stadium gates open?", ["Gate-opening time for the inaugural Bayern Munich versus Ajax Amsterdam match is at 11:00am EAT. The kick-off time for the match will be 8:15pm EAT on 5th January 2027. We recommend arriving early to allow sufficient time for security checks, ticket validation and locating your seat."]), t("What should I bring to the stadium?", ["Please bring your valid event ticket and any identification required under the inaugural match entry conditions."]), t("Can I bring food and drinks into the stadium?", ["No. For the inaugural match, food and beverages from outside are not permitted."]), t("Are bags allowed inside the stadium for the inaugural match?", ["Visitors are encouraged to bring only essential personal belongings to help ensure a smooth entry process."]), t("Is parking available at the stadium for the inaugural match?", ["No."]), t("Is public transport available to the stadium for the inaugural match?", ["Public transport and other travel options serving the stadium will be included in the event-specific visitor information. Supporters and ticket holders should check official announcements for recommended routes."]), t("What security measures will be in place?", ["The safety and wellbeing of spectators, participants and staff are a priority. Visitors should expect appropriate security screening, ticket checks and crowd-management procedures. A detailed guide, including entry requirements, prohibited items and emergency guidance, is contained in the terms and conditions. All visitors are required to follow instructions from authorised stadium personnel."])]
            }, {
                id: "accessibility-and-hospitality",
                title: "Accessibility, Hospitality and Premium Experiences",
                items: [t("Is the stadium accessible to persons with disabilities?", ["The Raila Odinga International Stadium has been designed with accessibility in mind, including facilities and provisions intended to support persons with disabilities. Information on accessible seating, designated entrances, mobility assistance, accessible washrooms and other available services will be provided. Visitors requiring assistance are encouraged to contact the stadium's customer support team."]), t("How can I purchase accessible seating?", ["Information on accessible seating categories and booking arrangements is available through the official ticketing platform. Fans should review the accessibility information while purchasing tickets."]), t("Can I bring a wheelchair or mobility aid?", ["Yes. Visitors who use wheelchairs or other mobility aids are welcome. Please check the terms and conditions for information on designated seating, entrances and assistance arrangements."]), t("Can I book a skybox or premium hospitality package for the inaugural match?", ["Yes. Skyboxes and premium hospitality experiences are available. Skyboxes are booked by email: information on package options, availability, inclusions, pricing and booking procedures can be received by emailing hospitality@talantasportscity.com. Platinum and Gold hospitality are bought on this website: see the Platinum page and the Gold page."]), t("Can I book hospitality for a group or corporate event?", ["Group and corporate hospitality opportunities are available for the inaugural match subject to availability. Please check the Hospitality section of the website for confirmed packages and booking contacts."])]
            }, {
                id: "broadcast-and-updates",
                title: "Broadcast and Official Updates",
                items: [t("Will the Bayern Munich versus Ajax Amsterdam match be televised or livestreamed?", ["Broadcast and streaming arrangements will be announced once confirmed. Fans are encouraged to follow official Talanta Sports City channels for information on authorised broadcasters and streaming platforms."]), t("How can journalists and media organisations apply for accreditation?", ["Journalists, photographers, videographers and accredited media organisations wishing to cover events at the Raila Odinga International Stadium will be required to apply for media accreditation. For accreditation enquiries on the inaugural FC Bayern Munich versus AFC Ajax Amsterdam match on 5th January 2027, please contact the Talanta Sports City Press Office at press@talantasportscity.com.", "Please note: Media accreditation is subject to approval, and submitting an application does not guarantee access to the event."]), t("Where can I find official event updates?", ["For the latest information on events, tickets, travel arrangements, stadium entry and matchday announcements, visit www.TalantaSportsCity.com and follow the verified Talanta Sports City accounts on Facebook, Instagram, TikTok and X. Please rely on official channels for confirmed information and avoid purchasing tickets or making payments through unauthorised accounts."]), t("Who can I contact if I need assistance?", ["For ticketing enquiries, accessibility support or general event information, please use the official contact details provided on the Talanta Sports City website."])]
            }]
        },
        i = a.sections.flatMap(e => e.items).find(e => "What does 'No Re-entry' mean?" === e.q);
    a.all, a.href, i.q, i.a[0], e.s(["COMPLETE_TRIP", 0, {
        title: "Complete your trip",
        tickets: {
            name: "Match tickets",
            note: "Pick your seats for the match",
            cta: "Pick your seats"
        },
        hotels: {
            name: "Hotels",
            note: "Near the stadium, for the match nights",
            cta: "See hotels"
        },
        experiences: {
            name: "Things to do",
            note: "Safaris and city tours while you're in Nairobi",
            cta: "See things to do"
        },
        flights: {
            name: "Flights",
            note: "Fly in to Nairobi (NBO)",
            cta: "Search flights"
        }
    }, "GETTING_THERE", 0, {
        title: "Getting there",
        address: "Address",
        addressText: "Raila Odinga International Stadium, Talanta Sports City, Ngong Rd, Nairobi.",
        directions: "Get directions",
        directionsHref: "https://www.google.com/maps/dir/?api=1&destination=-1.30611,36.75028",
        stadiumName: "Raila Odinga International Stadium",
        flying: "Flying in",
        flyingText: "Fly to Jomo Kenyatta International Airport (NBO), then drive about 25 km to the stadium.",
        findFlights: "Find flights",
        mapCaption: "Your gate and entrance are printed on your ticket."
    }, "HOME", 0, {
        buy: "Buy tickets",
        from: "From",
        perSeat: "per seat",
        allPrices: "All prices",
        onSale: e => `Tickets on sale ${e}`,
        countdown: ["days", "hours", "mins", "secs"],
        opensIn: (e, t, a) => `Sale opens in ${e} days ${t} hours ${a} minutes`,
        closed: "Tickets are not on sale."
    }], 76207)
}]);