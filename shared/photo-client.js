var zs = Object.defineProperty;
var Ms = (t, e, n) => e in t ? zs(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var X = (t, e, n) => Ms(t, typeof e != "symbol" ? e + "" : e, n);
const sr = document.createElement("i");
function Qr(t) {
  const e = "&" + t + ";";
  sr.innerHTML = e;
  const n = sr.textContent;
  return (
    // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
    // yield `null`.
    n.charCodeAt(n.length - 1) === 59 && t !== "semi" || n === e ? !1 : n
  );
}
function oe(t, e, n, r) {
  const i = t.length;
  let s = 0, a;
  if (e < 0 ? e = -e > i ? 0 : i + e : e = e > i ? i : e, n = n > 0 ? n : 0, r.length < 1e4)
    a = Array.from(r), a.unshift(e, n), t.splice(...a);
  else
    for (n && t.splice(e, n); s < r.length; )
      a = r.slice(s, s + 1e4), a.unshift(e, 0), t.splice(...a), s += 1e4, e += 1e4;
}
function ee(t, e) {
  return t.length > 0 ? (oe(t, t.length, 0, e), t) : e;
}
const Sn = {}.hasOwnProperty;
function Xr(t) {
  const e = {};
  let n = -1;
  for (; ++n < t.length; )
    qs(e, t[n]);
  return e;
}
function qs(t, e) {
  let n;
  for (n in e) {
    const i = (Sn.call(t, n) ? t[n] : void 0) || (t[n] = {}), s = e[n];
    let a;
    if (s)
      for (a in s) {
        Sn.call(i, a) || (i[a] = []);
        const o = s[a];
        Hs(
          // @ts-expect-error Looks like a list.
          i[a],
          Array.isArray(o) ? o : o ? [o] : []
        );
      }
  }
}
function Hs(t, e) {
  let n = -1;
  const r = [];
  for (; ++n < e.length; )
    (e[n].add === "after" ? t : r).push(e[n]);
  oe(t, 0, 0, r);
}
function Zr(t) {
  const e = {};
  let n = -1;
  for (; ++n < t.length; )
    Ws(e, t[n]);
  return e;
}
function Ws(t, e) {
  let n;
  for (n in e) {
    const i = (Sn.call(t, n) ? t[n] : void 0) || (t[n] = {}), s = e[n];
    let a;
    if (s)
      for (a in s)
        i[a] = s[a];
  }
}
function Vs(t, e) {
  const n = Number.parseInt(t, e);
  return (
    // C0 except for HT, LF, FF, CR, space.
    n < 9 || n === 11 || n > 13 && n < 32 || // Control character (DEL) of C0, and C1 controls.
    n > 126 && n < 160 || // Lone high surrogates and low surrogates.
    n > 55295 && n < 57344 || // Noncharacters.
    n > 64975 && n < 65008 || /* eslint-disable no-bitwise */
    (n & 65535) === 65535 || (n & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    n > 1114111 ? "�" : String.fromCodePoint(n)
  );
}
const Ks = { '"': "quot", "&": "amp", "<": "lt", ">": "gt" };
function ei(t) {
  return t.replace(/["&<>]/g, e);
  function e(n) {
    return "&" + Ks[
      /** @type {keyof typeof characterReferences} */
      n
    ] + ";";
  }
}
function Se(t) {
  return t.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const ne = Ne(/[A-Za-z]/), te = Ne(/[\dA-Za-z]/), Gs = Ne(/[#-'*+\--9=?A-Z^-~]/);
function Kt(t) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    t !== null && (t < 32 || t === 127)
  );
}
const En = Ne(/\d/), Js = Ne(/[\dA-Fa-f]/), Ys = Ne(/[!-/:-@[-`{-~]/);
function L(t) {
  return t !== null && t < -2;
}
function z(t) {
  return t !== null && (t < 0 || t === 32);
}
function $(t) {
  return t === -2 || t === -1 || t === 32;
}
const Hn = Ne(new RegExp("\\p{P}|\\p{S}", "u")), lt = Ne(/\s/);
function Ne(t) {
  return e;
  function e(n) {
    return n !== null && n > -1 && t.test(String.fromCharCode(n));
  }
}
function Me(t, e) {
  const n = ei(Qs(t || ""));
  if (!e)
    return n;
  const r = n.indexOf(":"), i = n.indexOf("?"), s = n.indexOf("#"), a = n.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    r < 0 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    a > -1 && r > a || i > -1 && r > i || s > -1 && r > s || // It is a protocol, it should be allowed.
    e.test(n.slice(0, r)) ? n : ""
  );
}
function Qs(t) {
  const e = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < t.length; ) {
    const s = t.charCodeAt(n);
    let a = "";
    if (s === 37 && te(t.charCodeAt(n + 1)) && te(t.charCodeAt(n + 2)))
      i = 2;
    else if (s < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s)) || (a = String.fromCharCode(s));
    else if (s > 55295 && s < 57344) {
      const o = t.charCodeAt(n + 1);
      s < 56320 && o > 56319 && o < 57344 ? (a = String.fromCharCode(s, o), i = 1) : a = "�";
    } else
      a = String.fromCharCode(s);
    a && (e.push(t.slice(r, n), encodeURIComponent(a)), r = n + i + 1, a = ""), i && (n += i, i = 0);
  }
  return e.join("") + t.slice(r);
}
const ar = {}.hasOwnProperty, or = /^(https?|ircs?|mailto|xmpp)$/i, Xs = /^https?$/i;
function Zs(t) {
  const e = t || {};
  let n = !0;
  const r = {}, i = [[]], s = [], a = [], l = (
    /** @type {NormalizedHtmlExtension} */
    Zr([{
      enter: {
        blockQuote: F,
        codeFenced: Te,
        codeFencedFenceInfo: v,
        codeFencedFenceMeta: v,
        codeIndented: Ae,
        codeText: js,
        content: _s,
        definition: gs,
        definitionDestinationString: ys,
        definitionLabelString: v,
        definitionTitleString: v,
        emphasis: Is,
        htmlFlow: Os,
        htmlText: er,
        image: de,
        label: v,
        link: Ke,
        listItemMarker: O,
        listItemValue: S,
        listOrdered: D,
        listUnordered: U,
        paragraph: K,
        reference: v,
        resource: Ge,
        resourceDestinationString: Je,
        resourceTitleString: v,
        setextHeading: Ss,
        strong: Ps
      },
      exit: {
        atxHeading: Ts,
        atxHeadingSequence: ks,
        autolinkEmail: Bs,
        autolinkProtocol: Fs,
        blockQuote: Y,
        characterEscapeValue: pt,
        characterReferenceMarkerHexadecimal: tr,
        characterReferenceMarkerNumeric: tr,
        characterReferenceValue: Us,
        codeFenced: m,
        codeFencedFence: he,
        codeFencedFenceInfo: g,
        codeFencedFenceMeta: R,
        codeFlowValue: Rs,
        codeIndented: m,
        codeText: Ls,
        codeTextData: pt,
        data: pt,
        definition: vs,
        definitionDestinationString: ws,
        definitionLabelString: ms,
        definitionTitleString: bs,
        emphasis: $s,
        hardBreakEscape: Xn,
        hardBreakTrailing: Xn,
        htmlFlow: Zn,
        htmlFlowData: pt,
        htmlText: Zn,
        htmlTextData: pt,
        image: Qn,
        label: ft,
        labelText: G,
        lineEnding: Cs,
        link: Qn,
        listOrdered: j,
        listUnordered: B,
        paragraph: ce,
        reference: R,
        referenceString: je,
        resource: R,
        resourceDestinationString: pn,
        resourceTitleString: ps,
        setextHeading: xs,
        setextHeadingLineSequence: As,
        setextHeadingText: Es,
        strong: Ds,
        thematicBreak: Ns
      }
    }, ...e.htmlExtensions || []])
  ), u = {
    definitions: r,
    tightStack: a
  }, h = {
    buffer: v,
    encode: b,
    getData: y,
    lineEndingIfNeeded: A,
    options: e,
    raw: _,
    resume: w,
    setData: p,
    tag: k
  };
  let c = e.defaultLineEnding;
  return f;
  function f(E) {
    let I = -1, Q = 0;
    const fe = [];
    let ye = [], xe = [];
    for (; ++I < E.length; )
      !c && (E[I][1].type === "lineEnding" || E[I][1].type === "lineEndingBlank") && (c = /** @type {LineEnding} */
      E[I][2].sliceSerialize(E[I][1])), (E[I][1].type === "listOrdered" || E[I][1].type === "listUnordered") && (E[I][0] === "enter" ? fe.push(I) : d(E.slice(fe.pop(), I))), E[I][1].type === "definition" && (E[I][0] === "enter" ? (xe = ee(xe, E.slice(Q, I)), Q = I) : (ye = ee(ye, E.slice(Q, I + 1)), Q = I + 1));
    ye = ee(ye, xe), ye = ee(ye, E.slice(Q)), I = -1;
    const we = ye;
    for (l.enter.null && l.enter.null.call(h); ++I < E.length; ) {
      const nr = l[we[I][0]], rr = we[I][1].type, ir = nr[rr];
      ar.call(nr, rr) && ir && ir.call({
        sliceSerialize: we[I][2].sliceSerialize,
        ...h
      }, we[I][1]);
    }
    return l.exit.null && l.exit.null.call(h), i[0].join("");
  }
  function d(E) {
    const I = E.length;
    let Q = 0, fe = 0, ye = !1, xe;
    for (; ++Q < I; ) {
      const we = E[Q];
      if (we[1]._container)
        xe = void 0, we[0] === "enter" ? fe++ : fe--;
      else switch (we[1].type) {
        case "listItemPrefix": {
          we[0] === "exit" && (xe = !0);
          break;
        }
        case "linePrefix":
          break;
        case "lineEndingBlank": {
          we[0] === "enter" && !fe && (xe ? xe = void 0 : ye = !0);
          break;
        }
        default:
          xe = void 0;
      }
    }
    E[0][1]._loose = ye;
  }
  function p(E, I) {
    u[E] = I;
  }
  function y(E) {
    return u[E];
  }
  function v() {
    i.push([]);
  }
  function w() {
    return i.pop().join("");
  }
  function k(E) {
    n && (p("lastWasTag", !0), i[i.length - 1].push(E));
  }
  function _(E) {
    p("lastWasTag"), i[i.length - 1].push(E);
  }
  function x() {
    _(c || `
`);
  }
  function A() {
    const E = i[i.length - 1], I = E[E.length - 1], Q = I ? I.charCodeAt(I.length - 1) : null;
    Q === 10 || Q === 13 || Q === null || x();
  }
  function b(E) {
    return y("ignoreEncode") ? E : ei(E);
  }
  function R() {
    w();
  }
  function D(E) {
    a.push(!E._loose), A(), k("<ol"), p("expectFirstItem", !0);
  }
  function U(E) {
    a.push(!E._loose), A(), k("<ul"), p("expectFirstItem", !0);
  }
  function S(E) {
    if (y("expectFirstItem")) {
      const I = Number.parseInt(this.sliceSerialize(E), 10);
      I !== 1 && k(' start="' + b(String(I)) + '"');
    }
  }
  function O() {
    y("expectFirstItem") ? k(">") : q(), A(), k("<li>"), p("expectFirstItem"), p("lastWasTag");
  }
  function j() {
    q(), a.pop(), x(), k("</ol>");
  }
  function B() {
    q(), a.pop(), x(), k("</ul>");
  }
  function q() {
    y("lastWasTag") && !y("slurpAllLineEndings") && A(), k("</li>"), p("slurpAllLineEndings");
  }
  function F() {
    a.push(!1), A(), k("<blockquote>");
  }
  function Y() {
    a.pop(), A(), k("</blockquote>"), p("slurpAllLineEndings");
  }
  function K() {
    a[a.length - 1] || (A(), k("<p>")), p("slurpAllLineEndings");
  }
  function ce() {
    a[a.length - 1] ? p("slurpAllLineEndings", !0) : k("</p>");
  }
  function Te() {
    A(), k("<pre><code"), p("fencesCount", 0);
  }
  function g() {
    const E = w();
    k(' class="language-' + E + '"');
  }
  function he() {
    const E = y("fencesCount") || 0;
    E || (k(">"), p("slurpOneLineEnding", !0)), p("fencesCount", E + 1);
  }
  function Ae() {
    A(), k("<pre><code>");
  }
  function m() {
    const E = y("fencesCount");
    E !== void 0 && E < 2 && u.tightStack.length > 0 && !y("lastWasTag") && x(), y("flowCodeSeenData") && A(), k("</code></pre>"), E !== void 0 && E < 2 && A(), p("flowCodeSeenData"), p("fencesCount"), p("slurpOneLineEnding");
  }
  function de() {
    s.push({
      image: !0
    }), n = void 0;
  }
  function Ke() {
    s.push({});
  }
  function G(E) {
    s[s.length - 1].labelId = this.sliceSerialize(E);
  }
  function ft() {
    s[s.length - 1].label = w();
  }
  function je(E) {
    s[s.length - 1].referenceId = this.sliceSerialize(E);
  }
  function Ge() {
    v(), s[s.length - 1].destination = "";
  }
  function Je() {
    v(), p("ignoreEncode", !0);
  }
  function pn() {
    s[s.length - 1].destination = w(), p("ignoreEncode");
  }
  function ps() {
    s[s.length - 1].title = w();
  }
  function Qn() {
    let E = s.length - 1;
    const I = s[E], Q = I.referenceId || I.labelId, fe = I.destination === void 0 ? r[Se(Q)] : I;
    for (n = !0; E--; )
      if (s[E].image) {
        n = void 0;
        break;
      }
    I.image ? (k('<img src="' + Me(fe.destination, e.allowDangerousProtocol ? void 0 : Xs) + '" alt="'), _(I.label), k('"')) : k('<a href="' + Me(fe.destination, e.allowDangerousProtocol ? void 0 : or) + '"'), k(fe.title ? ' title="' + fe.title + '"' : ""), I.image ? k(" />") : (k(">"), _(I.label), k("</a>")), s.pop();
  }
  function gs() {
    v(), s.push({});
  }
  function ms(E) {
    w(), s[s.length - 1].labelId = this.sliceSerialize(E);
  }
  function ys() {
    v(), p("ignoreEncode", !0);
  }
  function ws() {
    s[s.length - 1].destination = w(), p("ignoreEncode");
  }
  function bs() {
    s[s.length - 1].title = w();
  }
  function vs() {
    const E = s[s.length - 1], I = Se(E.labelId);
    w(), ar.call(r, I) || (r[I] = s[s.length - 1]), s.pop();
  }
  function _s() {
    p("slurpAllLineEndings", !0);
  }
  function ks(E) {
    y("headingRank") || (p("headingRank", this.sliceSerialize(E).length), A(), k("<h" + y("headingRank") + ">"));
  }
  function Ss() {
    v(), p("slurpAllLineEndings");
  }
  function Es() {
    p("slurpAllLineEndings", !0);
  }
  function Ts() {
    k("</h" + y("headingRank") + ">"), p("headingRank");
  }
  function As(E) {
    p("headingRank", this.sliceSerialize(E).charCodeAt(0) === 61 ? 1 : 2);
  }
  function xs() {
    const E = w();
    A(), k("<h" + y("headingRank") + ">"), _(E), k("</h" + y("headingRank") + ">"), p("slurpAllLineEndings"), p("headingRank");
  }
  function pt(E) {
    _(b(this.sliceSerialize(E)));
  }
  function Cs(E) {
    if (!y("slurpAllLineEndings")) {
      if (y("slurpOneLineEnding")) {
        p("slurpOneLineEnding");
        return;
      }
      if (y("inCodeText")) {
        _(" ");
        return;
      }
      _(b(this.sliceSerialize(E)));
    }
  }
  function Rs(E) {
    _(b(this.sliceSerialize(E))), p("flowCodeSeenData", !0);
  }
  function Xn() {
    k("<br />");
  }
  function Os() {
    A(), er();
  }
  function Zn() {
    p("ignoreEncode");
  }
  function er() {
    e.allowDangerousHtml && p("ignoreEncode", !0);
  }
  function Is() {
    k("<em>");
  }
  function Ps() {
    k("<strong>");
  }
  function js() {
    p("inCodeText", !0), k("<code>");
  }
  function Ls() {
    p("inCodeText"), k("</code>");
  }
  function $s() {
    k("</em>");
  }
  function Ds() {
    k("</strong>");
  }
  function Ns() {
    A(), k("<hr />");
  }
  function tr(E) {
    p("characterReferenceType", E.type);
  }
  function Us(E) {
    const I = this.sliceSerialize(E), Q = y("characterReferenceType") ? Vs(I, y("characterReferenceType") === "characterReferenceMarkerNumeric" ? 10 : 16) : Qr(I);
    _(b(
      /** @type {string} */
      Q
    )), p("characterReferenceType");
  }
  function Fs(E) {
    const I = this.sliceSerialize(E);
    k('<a href="' + Me(I, e.allowDangerousProtocol ? void 0 : or) + '">'), _(b(I)), k("</a>");
  }
  function Bs(E) {
    const I = this.sliceSerialize(E);
    k('<a href="' + Me("mailto:" + I) + '">'), _(b(I)), k("</a>");
  }
}
function N(t, e, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let s = 0;
  return a;
  function a(l) {
    return $(l) ? (t.enter(n), o(l)) : e(l);
  }
  function o(l) {
    return $(l) && s++ < i ? (t.consume(l), o) : (t.exit(n), e(l));
  }
}
const ea = {
  tokenize: ta
};
function ta(t) {
  const e = t.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return e;
  function r(o) {
    if (o === null) {
      t.consume(o);
      return;
    }
    return t.enter("lineEnding"), t.consume(o), t.exit("lineEnding"), N(t, e, "linePrefix");
  }
  function i(o) {
    return t.enter("paragraph"), s(o);
  }
  function s(o) {
    const l = t.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = l), n = l, a(o);
  }
  function a(o) {
    if (o === null) {
      t.exit("chunkText"), t.exit("paragraph"), t.consume(o);
      return;
    }
    return L(o) ? (t.consume(o), t.exit("chunkText"), s) : (t.consume(o), a);
  }
}
const na = {
  tokenize: ra
}, lr = {
  tokenize: ia
};
function ra(t) {
  const e = this, n = [];
  let r = 0, i, s, a;
  return o;
  function o(_) {
    if (r < n.length) {
      const x = n[r];
      return e.containerState = x[1], t.attempt(x[0].continuation, l, u)(_);
    }
    return u(_);
  }
  function l(_) {
    if (r++, e.containerState._closeFlow) {
      e.containerState._closeFlow = void 0, i && k();
      const x = e.events.length;
      let A = x, b;
      for (; A--; )
        if (e.events[A][0] === "exit" && e.events[A][1].type === "chunkFlow") {
          b = e.events[A][1].end;
          break;
        }
      w(r);
      let R = x;
      for (; R < e.events.length; )
        e.events[R][1].end = {
          ...b
        }, R++;
      return oe(e.events, A + 1, 0, e.events.slice(x)), e.events.length = R, u(_);
    }
    return o(_);
  }
  function u(_) {
    if (r === n.length) {
      if (!i)
        return f(_);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return p(_);
      e.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return e.containerState = {}, t.check(lr, h, c)(_);
  }
  function h(_) {
    return i && k(), w(r), f(_);
  }
  function c(_) {
    return e.parser.lazy[e.now().line] = r !== n.length, a = e.now().offset, p(_);
  }
  function f(_) {
    return e.containerState = {}, t.attempt(lr, d, p)(_);
  }
  function d(_) {
    return r++, n.push([e.currentConstruct, e.containerState]), f(_);
  }
  function p(_) {
    if (_ === null) {
      i && k(), w(0), t.consume(_);
      return;
    }
    return i = i || e.parser.flow(e.now()), t.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: s
    }), y(_);
  }
  function y(_) {
    if (_ === null) {
      v(t.exit("chunkFlow"), !0), w(0), t.consume(_);
      return;
    }
    return L(_) ? (t.consume(_), v(t.exit("chunkFlow")), r = 0, e.interrupt = void 0, o) : (t.consume(_), y);
  }
  function v(_, x) {
    const A = e.sliceStream(_);
    if (x && A.push(null), _.previous = s, s && (s.next = _), s = _, i.defineSkip(_.start), i.write(A), e.parser.lazy[_.start.line]) {
      let b = i.events.length;
      for (; b--; )
        if (
          // The token starts before the line ending…
          i.events[b][1].start.offset < a && // …and either is not ended yet…
          (!i.events[b][1].end || // …or ends after it.
          i.events[b][1].end.offset > a)
        )
          return;
      const R = e.events.length;
      let D = R, U, S;
      for (; D--; )
        if (e.events[D][0] === "exit" && e.events[D][1].type === "chunkFlow") {
          if (U) {
            S = e.events[D][1].end;
            break;
          }
          U = !0;
        }
      for (w(r), b = R; b < e.events.length; )
        e.events[b][1].end = {
          ...S
        }, b++;
      oe(e.events, D + 1, 0, e.events.slice(R)), e.events.length = b;
    }
  }
  function w(_) {
    let x = n.length;
    for (; x-- > _; ) {
      const A = n[x];
      e.containerState = A[1], A[0].exit.call(e, t);
    }
    n.length = _;
  }
  function k() {
    i.write([null]), s = void 0, i = void 0, e.containerState._closeFlow = void 0;
  }
}
function ia(t, e, n) {
  return N(t, t.attempt(this.parser.constructs.document, e, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Gt(t) {
  if (t === null || z(t) || lt(t))
    return 1;
  if (Hn(t))
    return 2;
}
function on(t, e, n) {
  const r = [];
  let i = -1;
  for (; ++i < t.length; ) {
    const s = t[i].resolveAll;
    s && !r.includes(s) && (e = s(e, n), r.push(s));
  }
  return e;
}
const Tn = {
  name: "attention",
  resolveAll: sa,
  tokenize: aa
};
function sa(t, e) {
  let n = -1, r, i, s, a, o, l, u, h;
  for (; ++n < t.length; )
    if (t[n][0] === "enter" && t[n][1].type === "attentionSequence" && t[n][1]._close) {
      for (r = n; r--; )
        if (t[r][0] === "exit" && t[r][1].type === "attentionSequence" && t[r][1]._open && // If the markers are the same:
        e.sliceSerialize(t[r][1]).charCodeAt(0) === e.sliceSerialize(t[n][1]).charCodeAt(0)) {
          if ((t[r][1]._close || t[n][1]._open) && (t[n][1].end.offset - t[n][1].start.offset) % 3 && !((t[r][1].end.offset - t[r][1].start.offset + t[n][1].end.offset - t[n][1].start.offset) % 3))
            continue;
          l = t[r][1].end.offset - t[r][1].start.offset > 1 && t[n][1].end.offset - t[n][1].start.offset > 1 ? 2 : 1;
          const c = {
            ...t[r][1].end
          }, f = {
            ...t[n][1].start
          };
          ur(c, -l), ur(f, l), a = {
            type: l > 1 ? "strongSequence" : "emphasisSequence",
            start: c,
            end: {
              ...t[r][1].end
            }
          }, o = {
            type: l > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...t[n][1].start
            },
            end: f
          }, s = {
            type: l > 1 ? "strongText" : "emphasisText",
            start: {
              ...t[r][1].end
            },
            end: {
              ...t[n][1].start
            }
          }, i = {
            type: l > 1 ? "strong" : "emphasis",
            start: {
              ...a.start
            },
            end: {
              ...o.end
            }
          }, t[r][1].end = {
            ...a.start
          }, t[n][1].start = {
            ...o.end
          }, u = [], t[r][1].end.offset - t[r][1].start.offset && (u = ee(u, [["enter", t[r][1], e], ["exit", t[r][1], e]])), u = ee(u, [["enter", i, e], ["enter", a, e], ["exit", a, e], ["enter", s, e]]), u = ee(u, on(e.parser.constructs.insideSpan.null, t.slice(r + 1, n), e)), u = ee(u, [["exit", s, e], ["enter", o, e], ["exit", o, e], ["exit", i, e]]), t[n][1].end.offset - t[n][1].start.offset ? (h = 2, u = ee(u, [["enter", t[n][1], e], ["exit", t[n][1], e]])) : h = 0, oe(t, r - 1, n - r + 3, u), n = r + u.length - h - 2;
          break;
        }
    }
  for (n = -1; ++n < t.length; )
    t[n][1].type === "attentionSequence" && (t[n][1].type = "data");
  return t;
}
function aa(t, e) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Gt(r);
  let s;
  return a;
  function a(l) {
    return s = l, t.enter("attentionSequence"), o(l);
  }
  function o(l) {
    if (l === s)
      return t.consume(l), o;
    const u = t.exit("attentionSequence"), h = Gt(l), c = !h || h === 2 && i || n.includes(l), f = !i || i === 2 && h || n.includes(r);
    return u._open = !!(s === 42 ? c : c && (i || !f)), u._close = !!(s === 42 ? f : f && (h || !c)), e(l);
  }
}
function ur(t, e) {
  t.column += e, t.offset += e, t._bufferIndex += e;
}
const oa = {
  name: "autolink",
  tokenize: la
};
function la(t, e, n) {
  let r = 0;
  return i;
  function i(d) {
    return t.enter("autolink"), t.enter("autolinkMarker"), t.consume(d), t.exit("autolinkMarker"), t.enter("autolinkProtocol"), s;
  }
  function s(d) {
    return ne(d) ? (t.consume(d), a) : d === 64 ? n(d) : u(d);
  }
  function a(d) {
    return d === 43 || d === 45 || d === 46 || te(d) ? (r = 1, o(d)) : u(d);
  }
  function o(d) {
    return d === 58 ? (t.consume(d), r = 0, l) : (d === 43 || d === 45 || d === 46 || te(d)) && r++ < 32 ? (t.consume(d), o) : (r = 0, u(d));
  }
  function l(d) {
    return d === 62 ? (t.exit("autolinkProtocol"), t.enter("autolinkMarker"), t.consume(d), t.exit("autolinkMarker"), t.exit("autolink"), e) : d === null || d === 32 || d === 60 || Kt(d) ? n(d) : (t.consume(d), l);
  }
  function u(d) {
    return d === 64 ? (t.consume(d), h) : Gs(d) ? (t.consume(d), u) : n(d);
  }
  function h(d) {
    return te(d) ? c(d) : n(d);
  }
  function c(d) {
    return d === 46 ? (t.consume(d), r = 0, h) : d === 62 ? (t.exit("autolinkProtocol").type = "autolinkEmail", t.enter("autolinkMarker"), t.consume(d), t.exit("autolinkMarker"), t.exit("autolink"), e) : f(d);
  }
  function f(d) {
    if ((d === 45 || te(d)) && r++ < 63) {
      const p = d === 45 ? f : c;
      return t.consume(d), p;
    }
    return n(d);
  }
}
const Dt = {
  partial: !0,
  tokenize: ua
};
function ua(t, e, n) {
  return r;
  function r(s) {
    return $(s) ? N(t, i, "linePrefix")(s) : i(s);
  }
  function i(s) {
    return s === null || L(s) ? e(s) : n(s);
  }
}
const ti = {
  continuation: {
    tokenize: ha
  },
  exit: da,
  name: "blockQuote",
  tokenize: ca
};
function ca(t, e, n) {
  const r = this;
  return i;
  function i(a) {
    if (a === 62) {
      const o = r.containerState;
      return o.open || (t.enter("blockQuote", {
        _container: !0
      }), o.open = !0), t.enter("blockQuotePrefix"), t.enter("blockQuoteMarker"), t.consume(a), t.exit("blockQuoteMarker"), s;
    }
    return n(a);
  }
  function s(a) {
    return $(a) ? (t.enter("blockQuotePrefixWhitespace"), t.consume(a), t.exit("blockQuotePrefixWhitespace"), t.exit("blockQuotePrefix"), e) : (t.exit("blockQuotePrefix"), e(a));
  }
}
function ha(t, e, n) {
  const r = this;
  return i;
  function i(a) {
    return $(a) ? N(t, s, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a) : s(a);
  }
  function s(a) {
    return t.attempt(ti, e, n)(a);
  }
}
function da(t) {
  t.exit("blockQuote");
}
const ni = {
  name: "characterEscape",
  tokenize: fa
};
function fa(t, e, n) {
  return r;
  function r(s) {
    return t.enter("characterEscape"), t.enter("escapeMarker"), t.consume(s), t.exit("escapeMarker"), i;
  }
  function i(s) {
    return Ys(s) ? (t.enter("characterEscapeValue"), t.consume(s), t.exit("characterEscapeValue"), t.exit("characterEscape"), e) : n(s);
  }
}
const ri = {
  name: "characterReference",
  tokenize: pa
};
function pa(t, e, n) {
  const r = this;
  let i = 0, s, a;
  return o;
  function o(c) {
    return t.enter("characterReference"), t.enter("characterReferenceMarker"), t.consume(c), t.exit("characterReferenceMarker"), l;
  }
  function l(c) {
    return c === 35 ? (t.enter("characterReferenceMarkerNumeric"), t.consume(c), t.exit("characterReferenceMarkerNumeric"), u) : (t.enter("characterReferenceValue"), s = 31, a = te, h(c));
  }
  function u(c) {
    return c === 88 || c === 120 ? (t.enter("characterReferenceMarkerHexadecimal"), t.consume(c), t.exit("characterReferenceMarkerHexadecimal"), t.enter("characterReferenceValue"), s = 6, a = Js, h) : (t.enter("characterReferenceValue"), s = 7, a = En, h(c));
  }
  function h(c) {
    if (c === 59 && i) {
      const f = t.exit("characterReferenceValue");
      return a === te && !Qr(r.sliceSerialize(f)) ? n(c) : (t.enter("characterReferenceMarker"), t.consume(c), t.exit("characterReferenceMarker"), t.exit("characterReference"), e);
    }
    return a(c) && i++ < s ? (t.consume(c), h) : n(c);
  }
}
const cr = {
  partial: !0,
  tokenize: ma
}, hr = {
  concrete: !0,
  name: "codeFenced",
  tokenize: ga
};
function ga(t, e, n) {
  const r = this, i = {
    partial: !0,
    tokenize: A
  };
  let s = 0, a = 0, o;
  return l;
  function l(b) {
    return u(b);
  }
  function u(b) {
    const R = r.events[r.events.length - 1];
    return s = R && R[1].type === "linePrefix" ? R[2].sliceSerialize(R[1], !0).length : 0, o = b, t.enter("codeFenced"), t.enter("codeFencedFence"), t.enter("codeFencedFenceSequence"), h(b);
  }
  function h(b) {
    return b === o ? (a++, t.consume(b), h) : a < 3 ? n(b) : (t.exit("codeFencedFenceSequence"), $(b) ? N(t, c, "whitespace")(b) : c(b));
  }
  function c(b) {
    return b === null || L(b) ? (t.exit("codeFencedFence"), r.interrupt ? e(b) : t.check(cr, y, x)(b)) : (t.enter("codeFencedFenceInfo"), t.enter("chunkString", {
      contentType: "string"
    }), f(b));
  }
  function f(b) {
    return b === null || L(b) ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), c(b)) : $(b) ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), N(t, d, "whitespace")(b)) : b === 96 && b === o ? n(b) : (t.consume(b), f);
  }
  function d(b) {
    return b === null || L(b) ? c(b) : (t.enter("codeFencedFenceMeta"), t.enter("chunkString", {
      contentType: "string"
    }), p(b));
  }
  function p(b) {
    return b === null || L(b) ? (t.exit("chunkString"), t.exit("codeFencedFenceMeta"), c(b)) : b === 96 && b === o ? n(b) : (t.consume(b), p);
  }
  function y(b) {
    return t.attempt(i, x, v)(b);
  }
  function v(b) {
    return t.enter("lineEnding"), t.consume(b), t.exit("lineEnding"), w;
  }
  function w(b) {
    return s > 0 && $(b) ? N(t, k, "linePrefix", s + 1)(b) : k(b);
  }
  function k(b) {
    return b === null || L(b) ? t.check(cr, y, x)(b) : (t.enter("codeFlowValue"), _(b));
  }
  function _(b) {
    return b === null || L(b) ? (t.exit("codeFlowValue"), k(b)) : (t.consume(b), _);
  }
  function x(b) {
    return t.exit("codeFenced"), e(b);
  }
  function A(b, R, D) {
    let U = 0;
    return S;
    function S(F) {
      return b.enter("lineEnding"), b.consume(F), b.exit("lineEnding"), O;
    }
    function O(F) {
      return b.enter("codeFencedFence"), $(F) ? N(b, j, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(F) : j(F);
    }
    function j(F) {
      return F === o ? (b.enter("codeFencedFenceSequence"), B(F)) : D(F);
    }
    function B(F) {
      return F === o ? (U++, b.consume(F), B) : U >= a ? (b.exit("codeFencedFenceSequence"), $(F) ? N(b, q, "whitespace")(F) : q(F)) : D(F);
    }
    function q(F) {
      return F === null || L(F) ? (b.exit("codeFencedFence"), R(F)) : D(F);
    }
  }
}
function ma(t, e, n) {
  const r = this;
  return i;
  function i(a) {
    return a === null ? n(a) : (t.enter("lineEnding"), t.consume(a), t.exit("lineEnding"), s);
  }
  function s(a) {
    return r.parser.lazy[r.now().line] ? n(a) : e(a);
  }
}
const gn = {
  name: "codeIndented",
  tokenize: wa
}, ya = {
  partial: !0,
  tokenize: ba
};
function wa(t, e, n) {
  const r = this;
  return i;
  function i(u) {
    return t.enter("codeIndented"), N(t, s, "linePrefix", 5)(u);
  }
  function s(u) {
    const h = r.events[r.events.length - 1];
    return h && h[1].type === "linePrefix" && h[2].sliceSerialize(h[1], !0).length >= 4 ? a(u) : n(u);
  }
  function a(u) {
    return u === null ? l(u) : L(u) ? t.attempt(ya, a, l)(u) : (t.enter("codeFlowValue"), o(u));
  }
  function o(u) {
    return u === null || L(u) ? (t.exit("codeFlowValue"), a(u)) : (t.consume(u), o);
  }
  function l(u) {
    return t.exit("codeIndented"), e(u);
  }
}
function ba(t, e, n) {
  const r = this;
  return i;
  function i(a) {
    return r.parser.lazy[r.now().line] ? n(a) : L(a) ? (t.enter("lineEnding"), t.consume(a), t.exit("lineEnding"), i) : N(t, s, "linePrefix", 5)(a);
  }
  function s(a) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "linePrefix" && o[2].sliceSerialize(o[1], !0).length >= 4 ? e(a) : L(a) ? i(a) : n(a);
  }
}
const va = {
  name: "codeText",
  previous: ka,
  resolve: _a,
  tokenize: Sa
};
function _a(t) {
  let e = t.length - 4, n = 3, r, i;
  if ((t[n][1].type === "lineEnding" || t[n][1].type === "space") && (t[e][1].type === "lineEnding" || t[e][1].type === "space")) {
    for (r = n; ++r < e; )
      if (t[r][1].type === "codeTextData") {
        t[n][1].type = "codeTextPadding", t[e][1].type = "codeTextPadding", n += 2, e -= 2;
        break;
      }
  }
  for (r = n - 1, e++; ++r <= e; )
    i === void 0 ? r !== e && t[r][1].type !== "lineEnding" && (i = r) : (r === e || t[r][1].type === "lineEnding") && (t[i][1].type = "codeTextData", r !== i + 2 && (t[i][1].end = t[r - 1][1].end, t.splice(i + 2, r - i - 2), e -= r - i - 2, r = i + 2), i = void 0);
  return t;
}
function ka(t) {
  return t !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Sa(t, e, n) {
  let r = 0, i, s;
  return a;
  function a(c) {
    return t.enter("codeText"), t.enter("codeTextSequence"), o(c);
  }
  function o(c) {
    return c === 96 ? (t.consume(c), r++, o) : (t.exit("codeTextSequence"), l(c));
  }
  function l(c) {
    return c === null ? n(c) : c === 32 ? (t.enter("space"), t.consume(c), t.exit("space"), l) : c === 96 ? (s = t.enter("codeTextSequence"), i = 0, h(c)) : L(c) ? (t.enter("lineEnding"), t.consume(c), t.exit("lineEnding"), l) : (t.enter("codeTextData"), u(c));
  }
  function u(c) {
    return c === null || c === 32 || c === 96 || L(c) ? (t.exit("codeTextData"), l(c)) : (t.consume(c), u);
  }
  function h(c) {
    return c === 96 ? (t.consume(c), i++, h) : i === r ? (t.exit("codeTextSequence"), t.exit("codeText"), e(c)) : (s.type = "codeTextData", u(c));
  }
}
class Ea {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(e) {
    this.left = e ? [...e] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(e) {
    if (e < 0 || e >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(e, n) {
    const r = n ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(e, r) : e > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(e, n, r) {
    const i = n || 0;
    this.setCursor(Math.trunc(e));
    const s = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && gt(this.left, r), s.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(e) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(e);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(e) {
    this.setCursor(Number.POSITIVE_INFINITY), gt(this.left, e);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(e) {
    this.setCursor(0), this.right.push(e);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(e) {
    this.setCursor(0), gt(this.right, e.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(e) {
    if (!(e === this.left.length || e > this.left.length && this.right.length === 0 || e < 0 && this.left.length === 0))
      if (e < this.left.length) {
        const n = this.left.splice(e, Number.POSITIVE_INFINITY);
        gt(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - e, Number.POSITIVE_INFINITY);
        gt(this.left, n.reverse());
      }
  }
}
function gt(t, e) {
  let n = 0;
  if (e.length < 1e4)
    t.push(...e);
  else
    for (; n < e.length; )
      t.push(...e.slice(n, n + 1e4)), n += 1e4;
}
function ii(t) {
  const e = {};
  let n = -1, r, i, s, a, o, l, u;
  const h = new Ea(t);
  for (; ++n < h.length; ) {
    for (; n in e; )
      n = e[n];
    if (r = h.get(n), n && r[1].type === "chunkFlow" && h.get(n - 1)[1].type === "listItemPrefix" && (l = r[1]._tokenizer.events, s = 0, s < l.length && l[s][1].type === "lineEndingBlank" && (s += 2), s < l.length && l[s][1].type === "content"))
      for (; ++s < l.length && l[s][1].type !== "content"; )
        l[s][1].type === "chunkText" && (l[s][1]._isInFirstContentOfListItem = !0, s++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(e, Ta(h, n)), n = e[n], u = !0);
    else if (r[1]._container) {
      for (s = n, i = void 0; s--; )
        if (a = h.get(s), a[1].type === "lineEnding" || a[1].type === "lineEndingBlank")
          a[0] === "enter" && (i && (h.get(i)[1].type = "lineEndingBlank"), a[1].type = "lineEnding", i = s);
        else if (!(a[1].type === "linePrefix" || a[1].type === "listItemIndent")) break;
      i && (r[1].end = {
        ...h.get(i)[1].start
      }, o = h.slice(i, n), o.unshift(r), h.splice(i, n - i + 1, o));
    }
  }
  return oe(t, 0, Number.POSITIVE_INFINITY, h.slice(0)), !u;
}
function Ta(t, e) {
  const n = t.get(e)[1], r = t.get(e)[2];
  let i = e - 1;
  const s = [];
  let a = n._tokenizer;
  a || (a = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (a._contentTypeTextTrailing = !0));
  const o = a.events, l = [], u = {};
  let h, c, f = -1, d = n, p = 0, y = 0;
  const v = [y];
  for (; d; ) {
    for (; t.get(++i)[1] !== d; )
      ;
    s.push(i), d._tokenizer || (h = r.sliceStream(d), d.next || h.push(null), c && a.defineSkip(d.start), d._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = !0), a.write(h), d._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = void 0)), c = d, d = d.next;
  }
  for (d = n; ++f < o.length; )
    // Find a void token that includes a break.
    o[f][0] === "exit" && o[f - 1][0] === "enter" && o[f][1].type === o[f - 1][1].type && o[f][1].start.line !== o[f][1].end.line && (y = f + 1, v.push(y), d._tokenizer = void 0, d.previous = void 0, d = d.next);
  for (a.events = [], d ? (d._tokenizer = void 0, d.previous = void 0) : v.pop(), f = v.length; f--; ) {
    const w = o.slice(v[f], v[f + 1]), k = s.pop();
    l.push([k, k + w.length - 1]), t.splice(k, 2, w);
  }
  for (l.reverse(), f = -1; ++f < l.length; )
    u[p + l[f][0]] = p + l[f][1], p += l[f][1] - l[f][0] - 1;
  return u;
}
const Aa = {
  resolve: Ca,
  tokenize: Ra
}, xa = {
  partial: !0,
  tokenize: Oa
};
function Ca(t) {
  return ii(t), t;
}
function Ra(t, e) {
  let n;
  return r;
  function r(o) {
    return t.enter("content"), n = t.enter("chunkContent", {
      contentType: "content"
    }), i(o);
  }
  function i(o) {
    return o === null ? s(o) : L(o) ? t.check(xa, a, s)(o) : (t.consume(o), i);
  }
  function s(o) {
    return t.exit("chunkContent"), t.exit("content"), e(o);
  }
  function a(o) {
    return t.consume(o), t.exit("chunkContent"), n.next = t.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, i;
  }
}
function Oa(t, e, n) {
  const r = this;
  return i;
  function i(a) {
    return t.exit("chunkContent"), t.enter("lineEnding"), t.consume(a), t.exit("lineEnding"), N(t, s, "linePrefix");
  }
  function s(a) {
    if (a === null || L(a))
      return n(a);
    const o = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && o && o[1].type === "linePrefix" && o[2].sliceSerialize(o[1], !0).length >= 4 ? e(a) : t.interrupt(r.parser.constructs.flow, n, e)(a);
  }
}
function si(t, e, n, r, i, s, a, o, l) {
  const u = l || Number.POSITIVE_INFINITY;
  let h = 0;
  return c;
  function c(w) {
    return w === 60 ? (t.enter(r), t.enter(i), t.enter(s), t.consume(w), t.exit(s), f) : w === null || w === 32 || w === 41 || Kt(w) ? n(w) : (t.enter(r), t.enter(a), t.enter(o), t.enter("chunkString", {
      contentType: "string"
    }), y(w));
  }
  function f(w) {
    return w === 62 ? (t.enter(s), t.consume(w), t.exit(s), t.exit(i), t.exit(r), e) : (t.enter(o), t.enter("chunkString", {
      contentType: "string"
    }), d(w));
  }
  function d(w) {
    return w === 62 ? (t.exit("chunkString"), t.exit(o), f(w)) : w === null || w === 60 || L(w) ? n(w) : (t.consume(w), w === 92 ? p : d);
  }
  function p(w) {
    return w === 60 || w === 62 || w === 92 ? (t.consume(w), d) : d(w);
  }
  function y(w) {
    return !h && (w === null || w === 41 || z(w)) ? (t.exit("chunkString"), t.exit(o), t.exit(a), t.exit(r), e(w)) : h < u && w === 40 ? (t.consume(w), h++, y) : w === 41 ? (t.consume(w), h--, y) : w === null || w === 32 || w === 40 || Kt(w) ? n(w) : (t.consume(w), w === 92 ? v : y);
  }
  function v(w) {
    return w === 40 || w === 41 || w === 92 ? (t.consume(w), y) : y(w);
  }
}
function ai(t, e, n, r, i, s) {
  const a = this;
  let o = 0, l;
  return u;
  function u(d) {
    return t.enter(r), t.enter(i), t.consume(d), t.exit(i), t.enter(s), h;
  }
  function h(d) {
    return o > 999 || d === null || d === 91 || d === 93 && !l || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    d === 94 && !o && "_hiddenFootnoteSupport" in a.parser.constructs ? n(d) : d === 93 ? (t.exit(s), t.enter(i), t.consume(d), t.exit(i), t.exit(r), e) : L(d) ? (t.enter("lineEnding"), t.consume(d), t.exit("lineEnding"), h) : (t.enter("chunkString", {
      contentType: "string"
    }), c(d));
  }
  function c(d) {
    return d === null || d === 91 || d === 93 || L(d) || o++ > 999 ? (t.exit("chunkString"), h(d)) : (t.consume(d), l || (l = !$(d)), d === 92 ? f : c);
  }
  function f(d) {
    return d === 91 || d === 92 || d === 93 ? (t.consume(d), o++, c) : c(d);
  }
}
function oi(t, e, n, r, i, s) {
  let a;
  return o;
  function o(f) {
    return f === 34 || f === 39 || f === 40 ? (t.enter(r), t.enter(i), t.consume(f), t.exit(i), a = f === 40 ? 41 : f, l) : n(f);
  }
  function l(f) {
    return f === a ? (t.enter(i), t.consume(f), t.exit(i), t.exit(r), e) : (t.enter(s), u(f));
  }
  function u(f) {
    return f === a ? (t.exit(s), l(a)) : f === null ? n(f) : L(f) ? (t.enter("lineEnding"), t.consume(f), t.exit("lineEnding"), N(t, u, "linePrefix")) : (t.enter("chunkString", {
      contentType: "string"
    }), h(f));
  }
  function h(f) {
    return f === a || f === null || L(f) ? (t.exit("chunkString"), u(f)) : (t.consume(f), f === 92 ? c : h);
  }
  function c(f) {
    return f === a || f === 92 ? (t.consume(f), h) : h(f);
  }
}
function Tt(t, e) {
  let n;
  return r;
  function r(i) {
    return L(i) ? (t.enter("lineEnding"), t.consume(i), t.exit("lineEnding"), n = !0, r) : $(i) ? N(t, r, n ? "linePrefix" : "lineSuffix")(i) : e(i);
  }
}
const Ia = {
  name: "definition",
  tokenize: ja
}, Pa = {
  partial: !0,
  tokenize: La
};
function ja(t, e, n) {
  const r = this;
  let i;
  return s;
  function s(d) {
    return t.enter("definition"), a(d);
  }
  function a(d) {
    return ai.call(
      r,
      t,
      o,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(d);
  }
  function o(d) {
    return i = Se(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), d === 58 ? (t.enter("definitionMarker"), t.consume(d), t.exit("definitionMarker"), l) : n(d);
  }
  function l(d) {
    return z(d) ? Tt(t, u)(d) : u(d);
  }
  function u(d) {
    return si(
      t,
      h,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(d);
  }
  function h(d) {
    return t.attempt(Pa, c, c)(d);
  }
  function c(d) {
    return $(d) ? N(t, f, "whitespace")(d) : f(d);
  }
  function f(d) {
    return d === null || L(d) ? (t.exit("definition"), r.parser.defined.push(i), e(d)) : n(d);
  }
}
function La(t, e, n) {
  return r;
  function r(o) {
    return z(o) ? Tt(t, i)(o) : n(o);
  }
  function i(o) {
    return oi(t, s, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(o);
  }
  function s(o) {
    return $(o) ? N(t, a, "whitespace")(o) : a(o);
  }
  function a(o) {
    return o === null || L(o) ? e(o) : n(o);
  }
}
const $a = {
  name: "hardBreakEscape",
  tokenize: Da
};
function Da(t, e, n) {
  return r;
  function r(s) {
    return t.enter("hardBreakEscape"), t.consume(s), i;
  }
  function i(s) {
    return L(s) ? (t.exit("hardBreakEscape"), e(s)) : n(s);
  }
}
const Na = {
  name: "headingAtx",
  resolve: Ua,
  tokenize: Fa
};
function Ua(t, e) {
  let n = t.length - 2, r = 3, i, s;
  return t[r][1].type === "whitespace" && (r += 2), n - 2 > r && t[n][1].type === "whitespace" && (n -= 2), t[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && t[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
    type: "atxHeadingText",
    start: t[r][1].start,
    end: t[n][1].end
  }, s = {
    type: "chunkText",
    start: t[r][1].start,
    end: t[n][1].end,
    contentType: "text"
  }, oe(t, r, n - r + 1, [["enter", i, e], ["enter", s, e], ["exit", s, e], ["exit", i, e]])), t;
}
function Fa(t, e, n) {
  let r = 0;
  return i;
  function i(h) {
    return t.enter("atxHeading"), s(h);
  }
  function s(h) {
    return t.enter("atxHeadingSequence"), a(h);
  }
  function a(h) {
    return h === 35 && r++ < 6 ? (t.consume(h), a) : h === null || z(h) ? (t.exit("atxHeadingSequence"), o(h)) : n(h);
  }
  function o(h) {
    return h === 35 ? (t.enter("atxHeadingSequence"), l(h)) : h === null || L(h) ? (t.exit("atxHeading"), e(h)) : $(h) ? N(t, o, "whitespace")(h) : (t.enter("atxHeadingText"), u(h));
  }
  function l(h) {
    return h === 35 ? (t.consume(h), l) : (t.exit("atxHeadingSequence"), o(h));
  }
  function u(h) {
    return h === null || h === 35 || z(h) ? (t.exit("atxHeadingText"), o(h)) : (t.consume(h), u);
  }
}
const Ba = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], dr = ["pre", "script", "style", "textarea"], za = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: Ha,
  tokenize: Wa
}, Ma = {
  partial: !0,
  tokenize: Ka
}, qa = {
  partial: !0,
  tokenize: Va
};
function Ha(t) {
  let e = t.length;
  for (; e-- && !(t[e][0] === "enter" && t[e][1].type === "htmlFlow"); )
    ;
  return e > 1 && t[e - 2][1].type === "linePrefix" && (t[e][1].start = t[e - 2][1].start, t[e + 1][1].start = t[e - 2][1].start, t.splice(e - 2, 2)), t;
}
function Wa(t, e, n) {
  const r = this;
  let i, s, a, o, l;
  return u;
  function u(m) {
    return h(m);
  }
  function h(m) {
    return t.enter("htmlFlow"), t.enter("htmlFlowData"), t.consume(m), c;
  }
  function c(m) {
    return m === 33 ? (t.consume(m), f) : m === 47 ? (t.consume(m), s = !0, y) : m === 63 ? (t.consume(m), i = 3, r.interrupt ? e : g) : ne(m) ? (t.consume(m), a = String.fromCharCode(m), v) : n(m);
  }
  function f(m) {
    return m === 45 ? (t.consume(m), i = 2, d) : m === 91 ? (t.consume(m), i = 5, o = 0, p) : ne(m) ? (t.consume(m), i = 4, r.interrupt ? e : g) : n(m);
  }
  function d(m) {
    return m === 45 ? (t.consume(m), r.interrupt ? e : g) : n(m);
  }
  function p(m) {
    const de = "CDATA[";
    return m === de.charCodeAt(o++) ? (t.consume(m), o === de.length ? r.interrupt ? e : j : p) : n(m);
  }
  function y(m) {
    return ne(m) ? (t.consume(m), a = String.fromCharCode(m), v) : n(m);
  }
  function v(m) {
    if (m === null || m === 47 || m === 62 || z(m)) {
      const de = m === 47, Ke = a.toLowerCase();
      return !de && !s && dr.includes(Ke) ? (i = 1, r.interrupt ? e(m) : j(m)) : Ba.includes(a.toLowerCase()) ? (i = 6, de ? (t.consume(m), w) : r.interrupt ? e(m) : j(m)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(m) : s ? k(m) : _(m));
    }
    return m === 45 || te(m) ? (t.consume(m), a += String.fromCharCode(m), v) : n(m);
  }
  function w(m) {
    return m === 62 ? (t.consume(m), r.interrupt ? e : j) : n(m);
  }
  function k(m) {
    return $(m) ? (t.consume(m), k) : S(m);
  }
  function _(m) {
    return m === 47 ? (t.consume(m), S) : m === 58 || m === 95 || ne(m) ? (t.consume(m), x) : $(m) ? (t.consume(m), _) : S(m);
  }
  function x(m) {
    return m === 45 || m === 46 || m === 58 || m === 95 || te(m) ? (t.consume(m), x) : A(m);
  }
  function A(m) {
    return m === 61 ? (t.consume(m), b) : $(m) ? (t.consume(m), A) : _(m);
  }
  function b(m) {
    return m === null || m === 60 || m === 61 || m === 62 || m === 96 ? n(m) : m === 34 || m === 39 ? (t.consume(m), l = m, R) : $(m) ? (t.consume(m), b) : D(m);
  }
  function R(m) {
    return m === l ? (t.consume(m), l = null, U) : m === null || L(m) ? n(m) : (t.consume(m), R);
  }
  function D(m) {
    return m === null || m === 34 || m === 39 || m === 47 || m === 60 || m === 61 || m === 62 || m === 96 || z(m) ? A(m) : (t.consume(m), D);
  }
  function U(m) {
    return m === 47 || m === 62 || $(m) ? _(m) : n(m);
  }
  function S(m) {
    return m === 62 ? (t.consume(m), O) : n(m);
  }
  function O(m) {
    return m === null || L(m) ? j(m) : $(m) ? (t.consume(m), O) : n(m);
  }
  function j(m) {
    return m === 45 && i === 2 ? (t.consume(m), Y) : m === 60 && i === 1 ? (t.consume(m), K) : m === 62 && i === 4 ? (t.consume(m), he) : m === 63 && i === 3 ? (t.consume(m), g) : m === 93 && i === 5 ? (t.consume(m), Te) : L(m) && (i === 6 || i === 7) ? (t.exit("htmlFlowData"), t.check(Ma, Ae, B)(m)) : m === null || L(m) ? (t.exit("htmlFlowData"), B(m)) : (t.consume(m), j);
  }
  function B(m) {
    return t.check(qa, q, Ae)(m);
  }
  function q(m) {
    return t.enter("lineEnding"), t.consume(m), t.exit("lineEnding"), F;
  }
  function F(m) {
    return m === null || L(m) ? B(m) : (t.enter("htmlFlowData"), j(m));
  }
  function Y(m) {
    return m === 45 ? (t.consume(m), g) : j(m);
  }
  function K(m) {
    return m === 47 ? (t.consume(m), a = "", ce) : j(m);
  }
  function ce(m) {
    if (m === 62) {
      const de = a.toLowerCase();
      return dr.includes(de) ? (t.consume(m), he) : j(m);
    }
    return ne(m) && a.length < 8 ? (t.consume(m), a += String.fromCharCode(m), ce) : j(m);
  }
  function Te(m) {
    return m === 93 ? (t.consume(m), g) : j(m);
  }
  function g(m) {
    return m === 62 ? (t.consume(m), he) : m === 45 && i === 2 ? (t.consume(m), g) : j(m);
  }
  function he(m) {
    return m === null || L(m) ? (t.exit("htmlFlowData"), Ae(m)) : (t.consume(m), he);
  }
  function Ae(m) {
    return t.exit("htmlFlow"), e(m);
  }
}
function Va(t, e, n) {
  const r = this;
  return i;
  function i(a) {
    return L(a) ? (t.enter("lineEnding"), t.consume(a), t.exit("lineEnding"), s) : n(a);
  }
  function s(a) {
    return r.parser.lazy[r.now().line] ? n(a) : e(a);
  }
}
function Ka(t, e, n) {
  return r;
  function r(i) {
    return t.enter("lineEnding"), t.consume(i), t.exit("lineEnding"), t.attempt(Dt, e, n);
  }
}
const Ga = {
  name: "htmlText",
  tokenize: Ja
};
function Ja(t, e, n) {
  const r = this;
  let i, s, a;
  return o;
  function o(g) {
    return t.enter("htmlText"), t.enter("htmlTextData"), t.consume(g), l;
  }
  function l(g) {
    return g === 33 ? (t.consume(g), u) : g === 47 ? (t.consume(g), A) : g === 63 ? (t.consume(g), _) : ne(g) ? (t.consume(g), D) : n(g);
  }
  function u(g) {
    return g === 45 ? (t.consume(g), h) : g === 91 ? (t.consume(g), s = 0, p) : ne(g) ? (t.consume(g), k) : n(g);
  }
  function h(g) {
    return g === 45 ? (t.consume(g), d) : n(g);
  }
  function c(g) {
    return g === null ? n(g) : g === 45 ? (t.consume(g), f) : L(g) ? (a = c, K(g)) : (t.consume(g), c);
  }
  function f(g) {
    return g === 45 ? (t.consume(g), d) : c(g);
  }
  function d(g) {
    return g === 62 ? Y(g) : g === 45 ? f(g) : c(g);
  }
  function p(g) {
    const he = "CDATA[";
    return g === he.charCodeAt(s++) ? (t.consume(g), s === he.length ? y : p) : n(g);
  }
  function y(g) {
    return g === null ? n(g) : g === 93 ? (t.consume(g), v) : L(g) ? (a = y, K(g)) : (t.consume(g), y);
  }
  function v(g) {
    return g === 93 ? (t.consume(g), w) : y(g);
  }
  function w(g) {
    return g === 62 ? Y(g) : g === 93 ? (t.consume(g), w) : y(g);
  }
  function k(g) {
    return g === null || g === 62 ? Y(g) : L(g) ? (a = k, K(g)) : (t.consume(g), k);
  }
  function _(g) {
    return g === null ? n(g) : g === 63 ? (t.consume(g), x) : L(g) ? (a = _, K(g)) : (t.consume(g), _);
  }
  function x(g) {
    return g === 62 ? Y(g) : _(g);
  }
  function A(g) {
    return ne(g) ? (t.consume(g), b) : n(g);
  }
  function b(g) {
    return g === 45 || te(g) ? (t.consume(g), b) : R(g);
  }
  function R(g) {
    return L(g) ? (a = R, K(g)) : $(g) ? (t.consume(g), R) : Y(g);
  }
  function D(g) {
    return g === 45 || te(g) ? (t.consume(g), D) : g === 47 || g === 62 || z(g) ? U(g) : n(g);
  }
  function U(g) {
    return g === 47 ? (t.consume(g), Y) : g === 58 || g === 95 || ne(g) ? (t.consume(g), S) : L(g) ? (a = U, K(g)) : $(g) ? (t.consume(g), U) : Y(g);
  }
  function S(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || te(g) ? (t.consume(g), S) : O(g);
  }
  function O(g) {
    return g === 61 ? (t.consume(g), j) : L(g) ? (a = O, K(g)) : $(g) ? (t.consume(g), O) : U(g);
  }
  function j(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? n(g) : g === 34 || g === 39 ? (t.consume(g), i = g, B) : L(g) ? (a = j, K(g)) : $(g) ? (t.consume(g), j) : (t.consume(g), q);
  }
  function B(g) {
    return g === i ? (t.consume(g), i = void 0, F) : g === null ? n(g) : L(g) ? (a = B, K(g)) : (t.consume(g), B);
  }
  function q(g) {
    return g === null || g === 34 || g === 39 || g === 60 || g === 61 || g === 96 ? n(g) : g === 47 || g === 62 || z(g) ? U(g) : (t.consume(g), q);
  }
  function F(g) {
    return g === 47 || g === 62 || z(g) ? U(g) : n(g);
  }
  function Y(g) {
    return g === 62 ? (t.consume(g), t.exit("htmlTextData"), t.exit("htmlText"), e) : n(g);
  }
  function K(g) {
    return t.exit("htmlTextData"), t.enter("lineEnding"), t.consume(g), t.exit("lineEnding"), ce;
  }
  function ce(g) {
    return $(g) ? N(t, Te, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(g) : Te(g);
  }
  function Te(g) {
    return t.enter("htmlTextData"), a(g);
  }
}
const Wn = {
  name: "labelEnd",
  resolveAll: Za,
  resolveTo: eo,
  tokenize: to
}, Ya = {
  tokenize: no
}, Qa = {
  tokenize: ro
}, Xa = {
  tokenize: io
};
function Za(t) {
  let e = -1;
  const n = [];
  for (; ++e < t.length; ) {
    const r = t[e][1];
    if (n.push(t[e]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", e += i;
    }
  }
  return t.length !== n.length && oe(t, 0, t.length, n), t;
}
function eo(t, e) {
  let n = t.length, r = 0, i, s, a, o;
  for (; n--; )
    if (i = t[n][1], s) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      t[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (a) {
      if (t[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (s = n, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (a = n);
  const l = {
    type: t[s][1].type === "labelLink" ? "link" : "image",
    start: {
      ...t[s][1].start
    },
    end: {
      ...t[t.length - 1][1].end
    }
  }, u = {
    type: "label",
    start: {
      ...t[s][1].start
    },
    end: {
      ...t[a][1].end
    }
  }, h = {
    type: "labelText",
    start: {
      ...t[s + r + 2][1].end
    },
    end: {
      ...t[a - 2][1].start
    }
  };
  return o = [["enter", l, e], ["enter", u, e]], o = ee(o, t.slice(s + 1, s + r + 3)), o = ee(o, [["enter", h, e]]), o = ee(o, on(e.parser.constructs.insideSpan.null, t.slice(s + r + 4, a - 3), e)), o = ee(o, [["exit", h, e], t[a - 2], t[a - 1], ["exit", u, e]]), o = ee(o, t.slice(a + 1)), o = ee(o, [["exit", l, e]]), oe(t, s, t.length, o), t;
}
function to(t, e, n) {
  const r = this;
  let i = r.events.length, s, a;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      s = r.events[i][1];
      break;
    }
  return o;
  function o(f) {
    return s ? s._inactive ? c(f) : (a = r.parser.defined.includes(Se(r.sliceSerialize({
      start: s.end,
      end: r.now()
    }))), t.enter("labelEnd"), t.enter("labelMarker"), t.consume(f), t.exit("labelMarker"), t.exit("labelEnd"), l) : n(f);
  }
  function l(f) {
    return f === 40 ? t.attempt(Ya, h, a ? h : c)(f) : f === 91 ? t.attempt(Qa, h, a ? u : c)(f) : a ? h(f) : c(f);
  }
  function u(f) {
    return t.attempt(Xa, h, c)(f);
  }
  function h(f) {
    return e(f);
  }
  function c(f) {
    return s._balanced = !0, n(f);
  }
}
function no(t, e, n) {
  return r;
  function r(c) {
    return t.enter("resource"), t.enter("resourceMarker"), t.consume(c), t.exit("resourceMarker"), i;
  }
  function i(c) {
    return z(c) ? Tt(t, s)(c) : s(c);
  }
  function s(c) {
    return c === 41 ? h(c) : si(t, a, o, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(c);
  }
  function a(c) {
    return z(c) ? Tt(t, l)(c) : h(c);
  }
  function o(c) {
    return n(c);
  }
  function l(c) {
    return c === 34 || c === 39 || c === 40 ? oi(t, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(c) : h(c);
  }
  function u(c) {
    return z(c) ? Tt(t, h)(c) : h(c);
  }
  function h(c) {
    return c === 41 ? (t.enter("resourceMarker"), t.consume(c), t.exit("resourceMarker"), t.exit("resource"), e) : n(c);
  }
}
function ro(t, e, n) {
  const r = this;
  return i;
  function i(o) {
    return ai.call(r, t, s, a, "reference", "referenceMarker", "referenceString")(o);
  }
  function s(o) {
    return r.parser.defined.includes(Se(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? e(o) : n(o);
  }
  function a(o) {
    return n(o);
  }
}
function io(t, e, n) {
  return r;
  function r(s) {
    return t.enter("reference"), t.enter("referenceMarker"), t.consume(s), t.exit("referenceMarker"), i;
  }
  function i(s) {
    return s === 93 ? (t.enter("referenceMarker"), t.consume(s), t.exit("referenceMarker"), t.exit("reference"), e) : n(s);
  }
}
const so = {
  name: "labelStartImage",
  resolveAll: Wn.resolveAll,
  tokenize: ao
};
function ao(t, e, n) {
  const r = this;
  return i;
  function i(o) {
    return t.enter("labelImage"), t.enter("labelImageMarker"), t.consume(o), t.exit("labelImageMarker"), s;
  }
  function s(o) {
    return o === 91 ? (t.enter("labelMarker"), t.consume(o), t.exit("labelMarker"), t.exit("labelImage"), a) : n(o);
  }
  function a(o) {
    return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(o) : e(o);
  }
}
const oo = {
  name: "labelStartLink",
  resolveAll: Wn.resolveAll,
  tokenize: lo
};
function lo(t, e, n) {
  const r = this;
  return i;
  function i(a) {
    return t.enter("labelLink"), t.enter("labelMarker"), t.consume(a), t.exit("labelMarker"), t.exit("labelLink"), s;
  }
  function s(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : e(a);
  }
}
const mn = {
  name: "lineEnding",
  tokenize: uo
};
function uo(t, e) {
  return n;
  function n(r) {
    return t.enter("lineEnding"), t.consume(r), t.exit("lineEnding"), N(t, e, "linePrefix");
  }
}
const qt = {
  name: "thematicBreak",
  tokenize: co
};
function co(t, e, n) {
  let r = 0, i;
  return s;
  function s(u) {
    return t.enter("thematicBreak"), a(u);
  }
  function a(u) {
    return i = u, o(u);
  }
  function o(u) {
    return u === i ? (t.enter("thematicBreakSequence"), l(u)) : r >= 3 && (u === null || L(u)) ? (t.exit("thematicBreak"), e(u)) : n(u);
  }
  function l(u) {
    return u === i ? (t.consume(u), r++, l) : (t.exit("thematicBreakSequence"), $(u) ? N(t, o, "whitespace")(u) : o(u));
  }
}
const ie = {
  continuation: {
    tokenize: go
  },
  exit: yo,
  name: "list",
  tokenize: po
}, ho = {
  partial: !0,
  tokenize: wo
}, fo = {
  partial: !0,
  tokenize: mo
};
function po(t, e, n) {
  const r = this, i = r.events[r.events.length - 1];
  let s = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, a = 0;
  return o;
  function o(d) {
    const p = r.containerState.type || (d === 42 || d === 43 || d === 45 ? "listUnordered" : "listOrdered");
    if (p === "listUnordered" ? !r.containerState.marker || d === r.containerState.marker : En(d)) {
      if (r.containerState.type || (r.containerState.type = p, t.enter(p, {
        _container: !0
      })), p === "listUnordered")
        return t.enter("listItemPrefix"), d === 42 || d === 45 ? t.check(qt, n, u)(d) : u(d);
      if (!r.interrupt || d === 49)
        return t.enter("listItemPrefix"), t.enter("listItemValue"), l(d);
    }
    return n(d);
  }
  function l(d) {
    return En(d) && ++a < 10 ? (t.consume(d), l) : (!r.interrupt || a < 2) && (r.containerState.marker ? d === r.containerState.marker : d === 41 || d === 46) ? (t.exit("listItemValue"), u(d)) : n(d);
  }
  function u(d) {
    return t.enter("listItemMarker"), t.consume(d), t.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || d, t.check(
      Dt,
      // Can’t be empty when interrupting.
      r.interrupt ? n : h,
      t.attempt(ho, f, c)
    );
  }
  function h(d) {
    return r.containerState.initialBlankLine = !0, s++, f(d);
  }
  function c(d) {
    return $(d) ? (t.enter("listItemPrefixWhitespace"), t.consume(d), t.exit("listItemPrefixWhitespace"), f) : n(d);
  }
  function f(d) {
    return r.containerState.size = s + r.sliceSerialize(t.exit("listItemPrefix"), !0).length, e(d);
  }
}
function go(t, e, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, t.check(Dt, i, s);
  function i(o) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, N(t, e, "listItemIndent", r.containerState.size + 1)(o);
  }
  function s(o) {
    return r.containerState.furtherBlankLines || !$(o) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, a(o)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, t.attempt(fo, e, a)(o));
  }
  function a(o) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, N(t, t.attempt(ie, e, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o);
  }
}
function mo(t, e, n) {
  const r = this;
  return N(t, i, "listItemIndent", r.containerState.size + 1);
  function i(s) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "listItemIndent" && a[2].sliceSerialize(a[1], !0).length === r.containerState.size ? e(s) : n(s);
  }
}
function yo(t) {
  t.exit(this.containerState.type);
}
function wo(t, e, n) {
  const r = this;
  return N(t, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(s) {
    const a = r.events[r.events.length - 1];
    return !$(s) && a && a[1].type === "listItemPrefixWhitespace" ? e(s) : n(s);
  }
}
const fr = {
  name: "setextUnderline",
  resolveTo: bo,
  tokenize: vo
};
function bo(t, e) {
  let n = t.length, r, i, s;
  for (; n--; )
    if (t[n][0] === "enter") {
      if (t[n][1].type === "content") {
        r = n;
        break;
      }
      t[n][1].type === "paragraph" && (i = n);
    } else
      t[n][1].type === "content" && t.splice(n, 1), !s && t[n][1].type === "definition" && (s = n);
  const a = {
    type: "setextHeading",
    start: {
      ...t[r][1].start
    },
    end: {
      ...t[t.length - 1][1].end
    }
  };
  return t[i][1].type = "setextHeadingText", s ? (t.splice(i, 0, ["enter", a, e]), t.splice(s + 1, 0, ["exit", t[r][1], e]), t[r][1].end = {
    ...t[s][1].end
  }) : t[r][1] = a, t.push(["exit", a, e]), t;
}
function vo(t, e, n) {
  const r = this;
  let i;
  return s;
  function s(u) {
    let h = r.events.length, c;
    for (; h--; )
      if (r.events[h][1].type !== "lineEnding" && r.events[h][1].type !== "linePrefix" && r.events[h][1].type !== "content") {
        c = r.events[h][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || c) ? (t.enter("setextHeadingLine"), i = u, a(u)) : n(u);
  }
  function a(u) {
    return t.enter("setextHeadingLineSequence"), o(u);
  }
  function o(u) {
    return u === i ? (t.consume(u), o) : (t.exit("setextHeadingLineSequence"), $(u) ? N(t, l, "lineSuffix")(u) : l(u));
  }
  function l(u) {
    return u === null || L(u) ? (t.exit("setextHeadingLine"), e(u)) : n(u);
  }
}
const _o = {
  tokenize: ko
};
function ko(t) {
  const e = this, n = t.attempt(
    // Try to parse a blank line.
    Dt,
    r,
    // Try to parse initial flow (essentially, only code).
    t.attempt(this.parser.constructs.flowInitial, i, N(t, t.attempt(this.parser.constructs.flow, i, t.attempt(Aa, i)), "linePrefix"))
  );
  return n;
  function r(s) {
    if (s === null) {
      t.consume(s);
      return;
    }
    return t.enter("lineEndingBlank"), t.consume(s), t.exit("lineEndingBlank"), e.currentConstruct = void 0, n;
  }
  function i(s) {
    if (s === null) {
      t.consume(s);
      return;
    }
    return t.enter("lineEnding"), t.consume(s), t.exit("lineEnding"), e.currentConstruct = void 0, n;
  }
}
const So = {
  resolveAll: ui()
}, Eo = li("string"), To = li("text");
function li(t) {
  return {
    resolveAll: ui(t === "text" ? Ao : void 0),
    tokenize: e
  };
  function e(n) {
    const r = this, i = this.parser.constructs[t], s = n.attempt(i, a, o);
    return a;
    function a(h) {
      return u(h) ? s(h) : o(h);
    }
    function o(h) {
      if (h === null) {
        n.consume(h);
        return;
      }
      return n.enter("data"), n.consume(h), l;
    }
    function l(h) {
      return u(h) ? (n.exit("data"), s(h)) : (n.consume(h), l);
    }
    function u(h) {
      if (h === null)
        return !0;
      const c = i[h];
      let f = -1;
      if (c)
        for (; ++f < c.length; ) {
          const d = c[f];
          if (!d.previous || d.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function ui(t) {
  return e;
  function e(n, r) {
    let i = -1, s;
    for (; ++i <= n.length; )
      s === void 0 ? n[i] && n[i][1].type === "data" && (s = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== s + 2 && (n[s][1].end = n[i - 1][1].end, n.splice(s + 2, i - s - 2), i = s + 2), s = void 0);
    return t ? t(n, r) : n;
  }
}
function Ao(t, e) {
  let n = 0;
  for (; ++n <= t.length; )
    if ((n === t.length || t[n][1].type === "lineEnding") && t[n - 1][1].type === "data") {
      const r = t[n - 1][1], i = e.sliceStream(r);
      let s = i.length, a = -1, o = 0, l;
      for (; s--; ) {
        const u = i[s];
        if (typeof u == "string") {
          for (a = u.length; u.charCodeAt(a - 1) === 32; )
            o++, a--;
          if (a) break;
          a = -1;
        } else if (u === -2)
          l = !0, o++;
        else if (u !== -1) {
          s++;
          break;
        }
      }
      if (e._contentTypeTextTrailing && n === t.length && (o = 0), o) {
        const u = {
          type: n === t.length || l || o < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: s ? a : r.start._bufferIndex + a,
            _index: r.start._index + s,
            line: r.end.line,
            column: r.end.column - o,
            offset: r.end.offset - o
          },
          end: {
            ...r.end
          }
        };
        r.end = {
          ...u.start
        }, r.start.offset === r.end.offset ? Object.assign(r, u) : (t.splice(n, 0, ["enter", u, e], ["exit", u, e]), n += 2);
      }
      n++;
    }
  return t;
}
const xo = {
  42: ie,
  43: ie,
  45: ie,
  48: ie,
  49: ie,
  50: ie,
  51: ie,
  52: ie,
  53: ie,
  54: ie,
  55: ie,
  56: ie,
  57: ie,
  62: ti
}, Co = {
  91: Ia
}, Ro = {
  [-2]: gn,
  [-1]: gn,
  32: gn
}, Oo = {
  35: Na,
  42: qt,
  45: [fr, qt],
  60: za,
  61: fr,
  95: qt,
  96: hr,
  126: hr
}, Io = {
  38: ri,
  92: ni
}, Po = {
  [-5]: mn,
  [-4]: mn,
  [-3]: mn,
  33: so,
  38: ri,
  42: Tn,
  60: [oa, Ga],
  91: oo,
  92: [$a, ni],
  93: Wn,
  95: Tn,
  96: va
}, jo = {
  null: [Tn, So]
}, Lo = {
  null: [42, 95]
}, $o = {
  null: []
}, Do = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: Lo,
  contentInitial: Co,
  disable: $o,
  document: xo,
  flow: Oo,
  flowInitial: Ro,
  insideSpan: jo,
  string: Io,
  text: Po
}, Symbol.toStringTag, { value: "Module" }));
function No(t, e, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: n && n.line || 1,
    column: n && n.column || 1,
    offset: n && n.offset || 0
  };
  const i = {}, s = [];
  let a = [], o = [];
  const l = {
    attempt: R(A),
    check: R(b),
    consume: k,
    enter: _,
    exit: x,
    interrupt: R(b, {
      interrupt: !0
    })
  }, u = {
    code: null,
    containerState: {},
    defineSkip: y,
    events: [],
    now: p,
    parser: t,
    previous: null,
    sliceSerialize: f,
    sliceStream: d,
    write: c
  };
  let h = e.tokenize.call(u, l);
  return e.resolveAll && s.push(e), u;
  function c(O) {
    return a = ee(a, O), v(), a[a.length - 1] !== null ? [] : (D(e, 0), u.events = on(s, u.events, u), u.events);
  }
  function f(O, j) {
    return Fo(d(O), j);
  }
  function d(O) {
    return Uo(a, O);
  }
  function p() {
    const {
      _bufferIndex: O,
      _index: j,
      line: B,
      column: q,
      offset: F
    } = r;
    return {
      _bufferIndex: O,
      _index: j,
      line: B,
      column: q,
      offset: F
    };
  }
  function y(O) {
    i[O.line] = O.column, S();
  }
  function v() {
    let O;
    for (; r._index < a.length; ) {
      const j = a[r._index];
      if (typeof j == "string")
        for (O = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === O && r._bufferIndex < j.length; )
          w(j.charCodeAt(r._bufferIndex));
      else
        w(j);
    }
  }
  function w(O) {
    h = h(O);
  }
  function k(O) {
    L(O) ? (r.line++, r.column = 1, r.offset += O === -3 ? 2 : 1, S()) : O !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    a[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = O;
  }
  function _(O, j) {
    const B = j || {};
    return B.type = O, B.start = p(), u.events.push(["enter", B, u]), o.push(B), B;
  }
  function x(O) {
    const j = o.pop();
    return j.end = p(), u.events.push(["exit", j, u]), j;
  }
  function A(O, j) {
    D(O, j.from);
  }
  function b(O, j) {
    j.restore();
  }
  function R(O, j) {
    return B;
    function B(q, F, Y) {
      let K, ce, Te, g;
      return Array.isArray(q) ? (
        /* c8 ignore next 1 */
        Ae(q)
      ) : "tokenize" in q ? (
        // Looks like a construct.
        Ae([
          /** @type {Construct} */
          q
        ])
      ) : he(q);
      function he(G) {
        return ft;
        function ft(je) {
          const Ge = je !== null && G[je], Je = je !== null && G.null, pn = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Ge) ? Ge : Ge ? [Ge] : [],
            ...Array.isArray(Je) ? Je : Je ? [Je] : []
          ];
          return Ae(pn)(je);
        }
      }
      function Ae(G) {
        return K = G, ce = 0, G.length === 0 ? Y : m(G[ce]);
      }
      function m(G) {
        return ft;
        function ft(je) {
          return g = U(), Te = G, G.partial || (u.currentConstruct = G), G.name && u.parser.constructs.disable.null.includes(G.name) ? Ke() : G.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            j ? Object.assign(Object.create(u), j) : u,
            l,
            de,
            Ke
          )(je);
        }
      }
      function de(G) {
        return O(Te, g), F;
      }
      function Ke(G) {
        return g.restore(), ++ce < K.length ? m(K[ce]) : Y;
      }
    }
  }
  function D(O, j) {
    O.resolveAll && !s.includes(O) && s.push(O), O.resolve && oe(u.events, j, u.events.length - j, O.resolve(u.events.slice(j), u)), O.resolveTo && (u.events = O.resolveTo(u.events, u));
  }
  function U() {
    const O = p(), j = u.previous, B = u.currentConstruct, q = u.events.length, F = Array.from(o);
    return {
      from: q,
      restore: Y
    };
    function Y() {
      r = O, u.previous = j, u.currentConstruct = B, u.events.length = q, o = F, S();
    }
  }
  function S() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function Uo(t, e) {
  const n = e.start._index, r = e.start._bufferIndex, i = e.end._index, s = e.end._bufferIndex;
  let a;
  if (n === i)
    a = [t[n].slice(r, s)];
  else {
    if (a = t.slice(n, i), r > -1) {
      const o = a[0];
      typeof o == "string" ? a[0] = o.slice(r) : a.shift();
    }
    s > 0 && a.push(t[i].slice(0, s));
  }
  return a;
}
function Fo(t, e) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < t.length; ) {
    const s = t[n];
    let a;
    if (typeof s == "string")
      a = s;
    else switch (s) {
      case -5: {
        a = "\r";
        break;
      }
      case -4: {
        a = `
`;
        break;
      }
      case -3: {
        a = `\r
`;
        break;
      }
      case -2: {
        a = e ? " " : "	";
        break;
      }
      case -1: {
        if (!e && i) continue;
        a = " ";
        break;
      }
      default:
        a = String.fromCharCode(s);
    }
    i = s === -2, r.push(a);
  }
  return r.join("");
}
function Bo(t) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      Xr([Do, ...(t || {}).extensions || []])
    ),
    content: i(ea),
    defined: [],
    document: i(na),
    flow: i(_o),
    lazy: {},
    string: i(Eo),
    text: i(To)
  };
  return r;
  function i(s) {
    return a;
    function a(o) {
      return No(r, s, o);
    }
  }
}
function zo(t) {
  for (; !ii(t); )
    ;
  return t;
}
const pr = /[\0\t\n\r]/g;
function Mo() {
  let t = 1, e = "", n = !0, r;
  return i;
  function i(s, a, o) {
    const l = [];
    let u, h, c, f, d;
    for (s = e + (typeof s == "string" ? s.toString() : new TextDecoder(a || void 0).decode(s)), c = 0, e = "", n && (s.charCodeAt(0) === 65279 && c++, n = void 0); c < s.length; ) {
      if (pr.lastIndex = c, u = pr.exec(s), f = u && u.index !== void 0 ? u.index : s.length, d = s.charCodeAt(f), !u) {
        e = s.slice(c);
        break;
      }
      if (d === 10 && c === f && r)
        l.push(-3), r = void 0;
      else
        switch (r && (l.push(-5), r = void 0), c < f && (l.push(s.slice(c, f)), t += f - c), d) {
          case 0: {
            l.push(65533), t++;
            break;
          }
          case 9: {
            for (h = Math.ceil(t / 4) * 4, l.push(-2); t++ < h; ) l.push(-1);
            break;
          }
          case 10: {
            l.push(-4), t = 1;
            break;
          }
          default:
            r = !0, t = 1;
        }
      c = f + 1;
    }
    return o && (r && l.push(-5), e && l.push(e), l.push(null)), l;
  }
}
function qo(t, e, n) {
  return typeof e != "string" && (n = e, e = void 0), Zs(n)(zo(Bo(n).document().write(Mo()(t, e, !0))));
}
const Ho = {
  tokenize: Yo,
  partial: !0
}, ci = {
  tokenize: Qo,
  partial: !0
}, hi = {
  tokenize: Xo,
  partial: !0
}, di = {
  tokenize: Zo,
  partial: !0
}, Wo = {
  tokenize: el,
  partial: !0
}, fi = {
  name: "wwwAutolink",
  tokenize: Go,
  previous: gi
}, pi = {
  name: "protocolAutolink",
  tokenize: Jo,
  previous: mi
}, Pe = {
  name: "emailAutolink",
  tokenize: Ko,
  previous: yi
}, Ee = {};
function Vo() {
  return {
    text: Ee
  };
}
let Ue = 48;
for (; Ue < 123; )
  Ee[Ue] = Pe, Ue++, Ue === 58 ? Ue = 65 : Ue === 91 && (Ue = 97);
Ee[43] = Pe;
Ee[45] = Pe;
Ee[46] = Pe;
Ee[95] = Pe;
Ee[72] = [Pe, pi];
Ee[104] = [Pe, pi];
Ee[87] = [Pe, fi];
Ee[119] = [Pe, fi];
function Ko(t, e, n) {
  const r = this;
  let i, s;
  return a;
  function a(c) {
    return !An(c) || !yi.call(r, r.previous) || Vn(r.events) ? n(c) : (t.enter("literalAutolink"), t.enter("literalAutolinkEmail"), o(c));
  }
  function o(c) {
    return An(c) ? (t.consume(c), o) : c === 64 ? (t.consume(c), l) : n(c);
  }
  function l(c) {
    return c === 46 ? t.check(Wo, h, u)(c) : c === 45 || c === 95 || te(c) ? (s = !0, t.consume(c), l) : h(c);
  }
  function u(c) {
    return t.consume(c), i = !0, l;
  }
  function h(c) {
    return s && i && ne(r.previous) ? (t.exit("literalAutolinkEmail"), t.exit("literalAutolink"), e(c)) : n(c);
  }
}
function Go(t, e, n) {
  const r = this;
  return i;
  function i(a) {
    return a !== 87 && a !== 119 || !gi.call(r, r.previous) || Vn(r.events) ? n(a) : (t.enter("literalAutolink"), t.enter("literalAutolinkWww"), t.check(Ho, t.attempt(ci, t.attempt(hi, s), n), n)(a));
  }
  function s(a) {
    return t.exit("literalAutolinkWww"), t.exit("literalAutolink"), e(a);
  }
}
function Jo(t, e, n) {
  const r = this;
  let i = "", s = !1;
  return a;
  function a(c) {
    return (c === 72 || c === 104) && mi.call(r, r.previous) && !Vn(r.events) ? (t.enter("literalAutolink"), t.enter("literalAutolinkHttp"), i += String.fromCodePoint(c), t.consume(c), o) : n(c);
  }
  function o(c) {
    if (ne(c) && i.length < 5)
      return i += String.fromCodePoint(c), t.consume(c), o;
    if (c === 58) {
      const f = i.toLowerCase();
      if (f === "http" || f === "https")
        return t.consume(c), l;
    }
    return n(c);
  }
  function l(c) {
    return c === 47 ? (t.consume(c), s ? u : (s = !0, l)) : n(c);
  }
  function u(c) {
    return c === null || Kt(c) || z(c) || lt(c) || Hn(c) ? n(c) : t.attempt(ci, t.attempt(hi, h), n)(c);
  }
  function h(c) {
    return t.exit("literalAutolinkHttp"), t.exit("literalAutolink"), e(c);
  }
}
function Yo(t, e, n) {
  let r = 0;
  return i;
  function i(a) {
    return (a === 87 || a === 119) && r < 3 ? (r++, t.consume(a), i) : a === 46 && r === 3 ? (t.consume(a), s) : n(a);
  }
  function s(a) {
    return a === null ? n(a) : e(a);
  }
}
function Qo(t, e, n) {
  let r, i, s;
  return a;
  function a(u) {
    return u === 46 || u === 95 ? t.check(di, l, o)(u) : u === null || z(u) || lt(u) || u !== 45 && Hn(u) ? l(u) : (s = !0, t.consume(u), a);
  }
  function o(u) {
    return u === 95 ? r = !0 : (i = r, r = void 0), t.consume(u), a;
  }
  function l(u) {
    return i || r || !s ? n(u) : e(u);
  }
}
function Xo(t, e) {
  let n = 0, r = 0;
  return i;
  function i(a) {
    return a === 40 ? (n++, t.consume(a), i) : a === 41 && r < n ? s(a) : a === 33 || a === 34 || a === 38 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 60 || a === 63 || a === 93 || a === 95 || a === 126 ? t.check(di, e, s)(a) : a === null || z(a) || lt(a) ? e(a) : (t.consume(a), i);
  }
  function s(a) {
    return a === 41 && r++, t.consume(a), i;
  }
}
function Zo(t, e, n) {
  return r;
  function r(o) {
    return o === 33 || o === 34 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 63 || o === 95 || o === 126 ? (t.consume(o), r) : o === 38 ? (t.consume(o), s) : o === 93 ? (t.consume(o), i) : (
      // `<` is an end.
      o === 60 || // So is whitespace.
      o === null || z(o) || lt(o) ? e(o) : n(o)
    );
  }
  function i(o) {
    return o === null || o === 40 || o === 91 || z(o) || lt(o) ? e(o) : r(o);
  }
  function s(o) {
    return ne(o) ? a(o) : n(o);
  }
  function a(o) {
    return o === 59 ? (t.consume(o), r) : ne(o) ? (t.consume(o), a) : n(o);
  }
}
function el(t, e, n) {
  return r;
  function r(s) {
    return t.consume(s), i;
  }
  function i(s) {
    return te(s) ? n(s) : e(s);
  }
}
function gi(t) {
  return t === null || t === 40 || t === 42 || t === 95 || t === 91 || t === 93 || t === 126 || z(t);
}
function mi(t) {
  return !ne(t);
}
function yi(t) {
  return !(t === 47 || An(t));
}
function An(t) {
  return t === 43 || t === 45 || t === 46 || t === 95 || te(t);
}
function Vn(t) {
  let e = t.length, n = !1;
  for (; e--; ) {
    const r = t[e][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      n = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      n = !1;
      break;
    }
  }
  return t.length > 0 && !n && (t[t.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
function tl() {
  return {
    exit: {
      literalAutolinkEmail: rl,
      literalAutolinkHttp: il,
      literalAutolinkWww: nl
    }
  };
}
function nl(t) {
  Kn.call(this, t, "http://");
}
function rl(t) {
  Kn.call(this, t, "mailto:");
}
function il(t) {
  Kn.call(this, t);
}
function Kn(t, e) {
  const n = this.sliceSerialize(t);
  this.tag('<a href="' + Me((e || "") + n) + '">'), this.raw(this.encode(n)), this.tag("</a>");
}
const sl = {
  tokenize: fl,
  partial: !0
};
function al() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: cl,
        continuation: {
          tokenize: hl
        },
        exit: dl
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: ul
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: ol,
        resolveTo: ll
      }
    }
  };
}
function ol(t, e, n) {
  const r = this;
  let i = r.events.length;
  const s = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let a;
  for (; i--; ) {
    const l = r.events[i][1];
    if (l.type === "labelImage") {
      a = l;
      break;
    }
    if (l.type === "gfmFootnoteCall" || l.type === "labelLink" || l.type === "label" || l.type === "image" || l.type === "link")
      break;
  }
  return o;
  function o(l) {
    if (!a || !a._balanced)
      return n(l);
    const u = Se(r.sliceSerialize({
      start: a.end,
      end: r.now()
    }));
    return u.codePointAt(0) !== 94 || !s.includes(u.slice(1)) ? n(l) : (t.enter("gfmFootnoteCallLabelMarker"), t.consume(l), t.exit("gfmFootnoteCallLabelMarker"), e(l));
  }
}
function ll(t, e) {
  let n = t.length;
  for (; n--; )
    if (t[n][1].type === "labelImage" && t[n][0] === "enter") {
      t[n][1];
      break;
    }
  t[n + 1][1].type = "data", t[n + 3][1].type = "gfmFootnoteCallLabelMarker";
  const r = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, t[n + 3][1].start),
    end: Object.assign({}, t[t.length - 1][1].end)
  }, i = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, t[n + 3][1].end),
    end: Object.assign({}, t[n + 3][1].end)
  };
  i.end.column++, i.end.offset++, i.end._bufferIndex++;
  const s = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, i.end),
    end: Object.assign({}, t[t.length - 1][1].start)
  }, a = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, s.start),
    end: Object.assign({}, s.end)
  }, o = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    t[n + 1],
    t[n + 2],
    ["enter", r, e],
    // The `[`
    t[n + 3],
    t[n + 4],
    // The `^`.
    ["enter", i, e],
    ["exit", i, e],
    // Everything in between.
    ["enter", s, e],
    ["enter", a, e],
    ["exit", a, e],
    ["exit", s, e],
    // The ending (`]`, properly parsed and labelled).
    t[t.length - 2],
    t[t.length - 1],
    ["exit", r, e]
  ];
  return t.splice(n, t.length - n + 1, ...o), t;
}
function ul(t, e, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let s = 0, a;
  return o;
  function o(c) {
    return t.enter("gfmFootnoteCall"), t.enter("gfmFootnoteCallLabelMarker"), t.consume(c), t.exit("gfmFootnoteCallLabelMarker"), l;
  }
  function l(c) {
    return c !== 94 ? n(c) : (t.enter("gfmFootnoteCallMarker"), t.consume(c), t.exit("gfmFootnoteCallMarker"), t.enter("gfmFootnoteCallString"), t.enter("chunkString").contentType = "string", u);
  }
  function u(c) {
    if (
      // Too long.
      s > 999 || // Closing brace with nothing.
      c === 93 && !a || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      c === null || c === 91 || z(c)
    )
      return n(c);
    if (c === 93) {
      t.exit("chunkString");
      const f = t.exit("gfmFootnoteCallString");
      return i.includes(Se(r.sliceSerialize(f))) ? (t.enter("gfmFootnoteCallLabelMarker"), t.consume(c), t.exit("gfmFootnoteCallLabelMarker"), t.exit("gfmFootnoteCall"), e) : n(c);
    }
    return z(c) || (a = !0), s++, t.consume(c), c === 92 ? h : u;
  }
  function h(c) {
    return c === 91 || c === 92 || c === 93 ? (t.consume(c), s++, u) : u(c);
  }
}
function cl(t, e, n) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let s, a = 0, o;
  return l;
  function l(p) {
    return t.enter("gfmFootnoteDefinition")._container = !0, t.enter("gfmFootnoteDefinitionLabel"), t.enter("gfmFootnoteDefinitionLabelMarker"), t.consume(p), t.exit("gfmFootnoteDefinitionLabelMarker"), u;
  }
  function u(p) {
    return p === 94 ? (t.enter("gfmFootnoteDefinitionMarker"), t.consume(p), t.exit("gfmFootnoteDefinitionMarker"), t.enter("gfmFootnoteDefinitionLabelString"), t.enter("chunkString").contentType = "string", h) : n(p);
  }
  function h(p) {
    if (
      // Too long.
      a > 999 || // Closing brace with nothing.
      p === 93 && !o || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      p === null || p === 91 || z(p)
    )
      return n(p);
    if (p === 93) {
      t.exit("chunkString");
      const y = t.exit("gfmFootnoteDefinitionLabelString");
      return s = Se(r.sliceSerialize(y)), t.enter("gfmFootnoteDefinitionLabelMarker"), t.consume(p), t.exit("gfmFootnoteDefinitionLabelMarker"), t.exit("gfmFootnoteDefinitionLabel"), f;
    }
    return z(p) || (o = !0), a++, t.consume(p), p === 92 ? c : h;
  }
  function c(p) {
    return p === 91 || p === 92 || p === 93 ? (t.consume(p), a++, h) : h(p);
  }
  function f(p) {
    return p === 58 ? (t.enter("definitionMarker"), t.consume(p), t.exit("definitionMarker"), i.includes(s) || i.push(s), N(t, d, "gfmFootnoteDefinitionWhitespace")) : n(p);
  }
  function d(p) {
    return e(p);
  }
}
function hl(t, e, n) {
  return t.check(Dt, e, t.attempt(sl, e, n));
}
function dl(t) {
  t.exit("gfmFootnoteDefinition");
}
function fl(t, e, n) {
  const r = this;
  return N(t, i, "gfmFootnoteDefinitionIndent", 5);
  function i(s) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "gfmFootnoteDefinitionIndent" && a[2].sliceSerialize(a[1], !0).length === 4 ? e(s) : n(s);
  }
}
const pl = {}.hasOwnProperty, gl = {};
function ml(t, e) {
  return "Back to reference " + (t + 1) + (e > 1 ? "-" + e : "");
}
function yl(t) {
  const e = gl, n = e.label || "Footnotes", r = e.labelTagName || "h2", i = e.labelAttributes === null || e.labelAttributes === void 0 ? 'class="sr-only"' : e.labelAttributes, s = e.backLabel || ml, a = e.clobberPrefix === null || e.clobberPrefix === void 0 ? "user-content-" : e.clobberPrefix;
  return {
    enter: {
      gfmFootnoteDefinition() {
        this.getData("tightStack").push(!1);
      },
      gfmFootnoteDefinitionLabelString() {
        this.buffer();
      },
      gfmFootnoteCallString() {
        this.buffer();
      }
    },
    exit: {
      gfmFootnoteDefinition() {
        let o = this.getData("gfmFootnoteDefinitions");
        const l = this.getData("gfmFootnoteDefinitionStack"), u = this.getData("tightStack"), h = l.pop(), c = this.resume();
        o || this.setData("gfmFootnoteDefinitions", o = {}), pl.call(o, h) || (o[h] = c), u.pop(), this.setData("slurpOneLineEnding", !0), this.setData("lastWasTag");
      },
      gfmFootnoteDefinitionLabelString(o) {
        let l = this.getData("gfmFootnoteDefinitionStack");
        l || this.setData("gfmFootnoteDefinitionStack", l = []), l.push(Se(this.sliceSerialize(o))), this.resume(), this.buffer();
      },
      gfmFootnoteCallString(o) {
        let l = this.getData("gfmFootnoteCallOrder"), u = this.getData("gfmFootnoteCallCounts");
        const h = Se(this.sliceSerialize(o));
        let c;
        this.resume(), l || this.setData("gfmFootnoteCallOrder", l = []), u || this.setData("gfmFootnoteCallCounts", u = {});
        const f = l.indexOf(h), d = Me(h.toLowerCase());
        f === -1 ? (l.push(h), u[h] = 1, c = l.length) : (u[h]++, c = f + 1);
        const p = u[h];
        this.tag('<sup><a href="#' + a + "fn-" + d + '" id="' + a + "fnref-" + d + (p > 1 ? "-" + p : "") + '" data-footnote-ref="" aria-describedby="footnote-label">' + String(c) + "</a></sup>");
      },
      null() {
        const o = this.getData("gfmFootnoteCallOrder") || [], l = this.getData("gfmFootnoteCallCounts") || {}, u = this.getData("gfmFootnoteDefinitions") || {};
        let h = -1;
        for (o.length > 0 && (this.lineEndingIfNeeded(), this.tag('<section data-footnotes="" class="footnotes"><' + r + ' id="footnote-label"' + (i ? " " + i : "") + ">"), this.raw(this.encode(n)), this.tag("</" + r + ">"), this.lineEndingIfNeeded(), this.tag("<ol>")); ++h < o.length; ) {
          const c = o[h], f = Me(c.toLowerCase());
          let d = 0;
          const p = [];
          for (; ++d <= l[c]; )
            p.push('<a href="#' + a + "fnref-" + f + (d > 1 ? "-" + d : "") + '" data-footnote-backref="" aria-label="' + this.encode(typeof s == "string" ? s : s(h, d)) + '" class="data-footnote-backref">↩' + (d > 1 ? "<sup>" + d + "</sup>" : "") + "</a>");
          const y = p.join(" ");
          let v = !1;
          this.lineEndingIfNeeded(), this.tag('<li id="' + a + "fn-" + f + '">'), this.lineEndingIfNeeded(), this.tag(u[c].replace(/<\/p>(?:\r?\n|\r)?$/, function(w) {
            return v = !0, " " + y + w;
          })), v || (this.lineEndingIfNeeded(), this.tag(y)), this.lineEndingIfNeeded(), this.tag("</li>");
        }
        o.length > 0 && (this.lineEndingIfNeeded(), this.tag("</ol>"), this.lineEndingIfNeeded(), this.tag("</section>"));
      }
    }
  };
}
function wl() {
  return {
    enter: {
      strikethrough() {
        this.tag("<del>");
      }
    },
    exit: {
      strikethrough() {
        this.tag("</del>");
      }
    }
  };
}
function bl(t) {
  let n = {}.singleTilde;
  const r = {
    name: "strikethrough",
    tokenize: s,
    resolveAll: i
  };
  return n == null && (n = !0), {
    text: {
      126: r
    },
    insideSpan: {
      null: [r]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function i(a, o) {
    let l = -1;
    for (; ++l < a.length; )
      if (a[l][0] === "enter" && a[l][1].type === "strikethroughSequenceTemporary" && a[l][1]._close) {
        let u = l;
        for (; u--; )
          if (a[u][0] === "exit" && a[u][1].type === "strikethroughSequenceTemporary" && a[u][1]._open && // If the sizes are the same:
          a[l][1].end.offset - a[l][1].start.offset === a[u][1].end.offset - a[u][1].start.offset) {
            a[l][1].type = "strikethroughSequence", a[u][1].type = "strikethroughSequence";
            const h = {
              type: "strikethrough",
              start: Object.assign({}, a[u][1].start),
              end: Object.assign({}, a[l][1].end)
            }, c = {
              type: "strikethroughText",
              start: Object.assign({}, a[u][1].end),
              end: Object.assign({}, a[l][1].start)
            }, f = [["enter", h, o], ["enter", a[u][1], o], ["exit", a[u][1], o], ["enter", c, o]], d = o.parser.constructs.insideSpan.null;
            d && oe(f, f.length, 0, on(d, a.slice(u + 1, l), o)), oe(f, f.length, 0, [["exit", c, o], ["enter", a[l][1], o], ["exit", a[l][1], o], ["exit", h, o]]), oe(a, u - 1, l - u + 3, f), l = u + f.length - 2;
            break;
          }
      }
    for (l = -1; ++l < a.length; )
      a[l][1].type === "strikethroughSequenceTemporary" && (a[l][1].type = "data");
    return a;
  }
  function s(a, o, l) {
    const u = this.previous, h = this.events;
    let c = 0;
    return f;
    function f(p) {
      return u === 126 && h[h.length - 1][1].type !== "characterEscape" ? l(p) : (a.enter("strikethroughSequenceTemporary"), d(p));
    }
    function d(p) {
      const y = Gt(u);
      if (p === 126)
        return c > 1 ? l(p) : (a.consume(p), c++, d);
      if (c < 2 && !n) return l(p);
      const v = a.exit("strikethroughSequenceTemporary"), w = Gt(p);
      return v._open = !w || w === 2 && !!y, v._close = !y || y === 2 && !!w, o(p);
    }
  }
}
const yn = {
  none: "",
  left: ' align="left"',
  right: ' align="right"',
  center: ' align="center"'
};
function vl() {
  return {
    enter: {
      table(t) {
        const e = t._align;
        this.lineEndingIfNeeded(), this.tag("<table>"), this.setData("tableAlign", e);
      },
      tableBody() {
        this.tag("<tbody>");
      },
      tableData() {
        const t = this.getData("tableAlign"), e = this.getData("tableColumn"), n = yn[t[e]];
        n === void 0 ? this.buffer() : (this.lineEndingIfNeeded(), this.tag("<td" + n + ">"));
      },
      tableHead() {
        this.lineEndingIfNeeded(), this.tag("<thead>");
      },
      tableHeader() {
        const t = this.getData("tableAlign"), e = this.getData("tableColumn"), n = yn[t[e]];
        this.lineEndingIfNeeded(), this.tag("<th" + n + ">");
      },
      tableRow() {
        this.setData("tableColumn", 0), this.lineEndingIfNeeded(), this.tag("<tr>");
      }
    },
    exit: {
      // Overwrite the default code text data handler to unescape escaped pipes when
      // they are in tables.
      codeTextData(t) {
        let e = this.sliceSerialize(t);
        this.getData("tableAlign") && (e = e.replace(/\\([\\|])/g, _l)), this.raw(this.encode(e));
      },
      table() {
        this.setData("tableAlign"), this.setData("slurpAllLineEndings"), this.lineEndingIfNeeded(), this.tag("</table>");
      },
      tableBody() {
        this.lineEndingIfNeeded(), this.tag("</tbody>");
      },
      tableData() {
        const t = this.getData("tableAlign"), e = this.getData("tableColumn");
        e in t ? (this.tag("</td>"), this.setData("tableColumn", e + 1)) : this.resume();
      },
      tableHead() {
        this.lineEndingIfNeeded(), this.tag("</thead>");
      },
      tableHeader() {
        const t = this.getData("tableColumn");
        this.tag("</th>"), this.setData("tableColumn", t + 1);
      },
      tableRow() {
        const t = this.getData("tableAlign");
        let e = this.getData("tableColumn");
        for (; e < t.length; )
          this.lineEndingIfNeeded(), this.tag("<td" + yn[t[e]] + "></td>"), e++;
        this.setData("tableColumn", e), this.lineEndingIfNeeded(), this.tag("</tr>");
      }
    }
  };
}
function _l(t, e) {
  return e === "|" ? e : t;
}
class kl {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(e, n, r) {
    Sl(this, e, n, r);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(e) {
    if (this.map.sort(function(s, a) {
      return s[0] - a[0];
    }), this.map.length === 0)
      return;
    let n = this.map.length;
    const r = [];
    for (; n > 0; )
      n -= 1, r.push(e.slice(this.map[n][0] + this.map[n][1]), this.map[n][2]), e.length = this.map[n][0];
    r.push(e.slice()), e.length = 0;
    let i = r.pop();
    for (; i; ) {
      for (const s of i)
        e.push(s);
      i = r.pop();
    }
    this.map.length = 0;
  }
}
function Sl(t, e, n, r) {
  let i = 0;
  if (!(n === 0 && r.length === 0)) {
    for (; i < t.map.length; ) {
      if (t.map[i][0] === e) {
        t.map[i][1] += n, t.map[i][2].push(...r);
        return;
      }
      i += 1;
    }
    t.map.push([e, n, r]);
  }
}
function El(t, e) {
  let n = !1;
  const r = [];
  for (; e < t.length; ) {
    const i = t[e];
    if (n) {
      if (i[0] === "enter")
        i[1].type === "tableContent" && r.push(t[e + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (i[1].type === "tableContent") {
        if (t[e - 1][1].type === "tableDelimiterMarker") {
          const s = r.length - 1;
          r[s] = r[s] === "left" ? "center" : "right";
        }
      } else if (i[1].type === "tableDelimiterRow")
        break;
    } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
    e += 1;
  }
  return r;
}
function Tl() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: Al,
        resolveAll: xl
      }
    }
  };
}
function Al(t, e, n) {
  const r = this;
  let i = 0, s = 0, a;
  return o;
  function o(S) {
    let O = r.events.length - 1;
    for (; O > -1; ) {
      const q = r.events[O][1].type;
      if (q === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      q === "linePrefix") O--;
      else break;
    }
    const j = O > -1 ? r.events[O][1].type : null, B = j === "tableHead" || j === "tableRow" ? b : l;
    return B === b && r.parser.lazy[r.now().line] ? n(S) : B(S);
  }
  function l(S) {
    return t.enter("tableHead"), t.enter("tableRow"), u(S);
  }
  function u(S) {
    return S === 124 || (a = !0, s += 1), h(S);
  }
  function h(S) {
    return S === null ? n(S) : L(S) ? s > 1 ? (s = 0, r.interrupt = !0, t.exit("tableRow"), t.enter("lineEnding"), t.consume(S), t.exit("lineEnding"), d) : n(S) : $(S) ? N(t, h, "whitespace")(S) : (s += 1, a && (a = !1, i += 1), S === 124 ? (t.enter("tableCellDivider"), t.consume(S), t.exit("tableCellDivider"), a = !0, h) : (t.enter("data"), c(S)));
  }
  function c(S) {
    return S === null || S === 124 || z(S) ? (t.exit("data"), h(S)) : (t.consume(S), S === 92 ? f : c);
  }
  function f(S) {
    return S === 92 || S === 124 ? (t.consume(S), c) : c(S);
  }
  function d(S) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(S) : (t.enter("tableDelimiterRow"), a = !1, $(S) ? N(t, p, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(S) : p(S));
  }
  function p(S) {
    return S === 45 || S === 58 ? v(S) : S === 124 ? (a = !0, t.enter("tableCellDivider"), t.consume(S), t.exit("tableCellDivider"), y) : A(S);
  }
  function y(S) {
    return $(S) ? N(t, v, "whitespace")(S) : v(S);
  }
  function v(S) {
    return S === 58 ? (s += 1, a = !0, t.enter("tableDelimiterMarker"), t.consume(S), t.exit("tableDelimiterMarker"), w) : S === 45 ? (s += 1, w(S)) : S === null || L(S) ? x(S) : A(S);
  }
  function w(S) {
    return S === 45 ? (t.enter("tableDelimiterFiller"), k(S)) : A(S);
  }
  function k(S) {
    return S === 45 ? (t.consume(S), k) : S === 58 ? (a = !0, t.exit("tableDelimiterFiller"), t.enter("tableDelimiterMarker"), t.consume(S), t.exit("tableDelimiterMarker"), _) : (t.exit("tableDelimiterFiller"), _(S));
  }
  function _(S) {
    return $(S) ? N(t, x, "whitespace")(S) : x(S);
  }
  function x(S) {
    return S === 124 ? p(S) : S === null || L(S) ? !a || i !== s ? A(S) : (t.exit("tableDelimiterRow"), t.exit("tableHead"), e(S)) : A(S);
  }
  function A(S) {
    return n(S);
  }
  function b(S) {
    return t.enter("tableRow"), R(S);
  }
  function R(S) {
    return S === 124 ? (t.enter("tableCellDivider"), t.consume(S), t.exit("tableCellDivider"), R) : S === null || L(S) ? (t.exit("tableRow"), e(S)) : $(S) ? N(t, R, "whitespace")(S) : (t.enter("data"), D(S));
  }
  function D(S) {
    return S === null || S === 124 || z(S) ? (t.exit("data"), R(S)) : (t.consume(S), S === 92 ? U : D);
  }
  function U(S) {
    return S === 92 || S === 124 ? (t.consume(S), D) : D(S);
  }
}
function xl(t, e) {
  let n = -1, r = !0, i = 0, s = [0, 0, 0, 0], a = [0, 0, 0, 0], o = !1, l = 0, u, h, c;
  const f = new kl();
  for (; ++n < t.length; ) {
    const d = t[n], p = d[1];
    d[0] === "enter" ? p.type === "tableHead" ? (o = !1, l !== 0 && (gr(f, e, l, u, h), h = void 0, l = 0), u = {
      type: "table",
      start: Object.assign({}, p.start),
      // Note: correct end is set later.
      end: Object.assign({}, p.end)
    }, f.add(n, 0, [["enter", u, e]])) : p.type === "tableRow" || p.type === "tableDelimiterRow" ? (r = !0, c = void 0, s = [0, 0, 0, 0], a = [0, n + 1, 0, 0], o && (o = !1, h = {
      type: "tableBody",
      start: Object.assign({}, p.start),
      // Note: correct end is set later.
      end: Object.assign({}, p.end)
    }, f.add(n, 0, [["enter", h, e]])), i = p.type === "tableDelimiterRow" ? 2 : h ? 3 : 1) : i && (p.type === "data" || p.type === "tableDelimiterMarker" || p.type === "tableDelimiterFiller") ? (r = !1, a[2] === 0 && (s[1] !== 0 && (a[0] = a[1], c = Ut(f, e, s, i, void 0, c), s = [0, 0, 0, 0]), a[2] = n)) : p.type === "tableCellDivider" && (r ? r = !1 : (s[1] !== 0 && (a[0] = a[1], c = Ut(f, e, s, i, void 0, c)), s = a, a = [s[1], n, 0, 0])) : p.type === "tableHead" ? (o = !0, l = n) : p.type === "tableRow" || p.type === "tableDelimiterRow" ? (l = n, s[1] !== 0 ? (a[0] = a[1], c = Ut(f, e, s, i, n, c)) : a[1] !== 0 && (c = Ut(f, e, a, i, n, c)), i = 0) : i && (p.type === "data" || p.type === "tableDelimiterMarker" || p.type === "tableDelimiterFiller") && (a[3] = n);
  }
  for (l !== 0 && gr(f, e, l, u, h), f.consume(e.events), n = -1; ++n < e.events.length; ) {
    const d = e.events[n];
    d[0] === "enter" && d[1].type === "table" && (d[1]._align = El(e.events, n));
  }
  return t;
}
function Ut(t, e, n, r, i, s) {
  const a = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", o = "tableContent";
  n[0] !== 0 && (s.end = Object.assign({}, Ze(e.events, n[0])), t.add(n[0], 0, [["exit", s, e]]));
  const l = Ze(e.events, n[1]);
  if (s = {
    type: a,
    start: Object.assign({}, l),
    // Note: correct end is set later.
    end: Object.assign({}, l)
  }, t.add(n[1], 0, [["enter", s, e]]), n[2] !== 0) {
    const u = Ze(e.events, n[2]), h = Ze(e.events, n[3]), c = {
      type: o,
      start: Object.assign({}, u),
      end: Object.assign({}, h)
    };
    if (t.add(n[2], 0, [["enter", c, e]]), r !== 2) {
      const f = e.events[n[2]], d = e.events[n[3]];
      if (f[1].end = Object.assign({}, d[1].end), f[1].type = "chunkText", f[1].contentType = "text", n[3] > n[2] + 1) {
        const p = n[2] + 1, y = n[3] - n[2] - 1;
        t.add(p, y, []);
      }
    }
    t.add(n[3] + 1, 0, [["exit", c, e]]);
  }
  return i !== void 0 && (s.end = Object.assign({}, Ze(e.events, i)), t.add(i, 0, [["exit", s, e]]), s = void 0), s;
}
function gr(t, e, n, r, i) {
  const s = [], a = Ze(e.events, n);
  i && (i.end = Object.assign({}, a), s.push(["exit", i, e])), r.end = Object.assign({}, a), s.push(["exit", r, e]), t.add(n + 1, 0, s);
}
function Ze(t, e) {
  const n = t[e], r = n[0] === "enter" ? "start" : "end";
  return n[1][r];
}
const wi = /<(\/?)(iframe|noembed|noframes|plaintext|script|style|title|textarea|xmp)(?=[\t\n\f\r />])/gi, Cl = new RegExp("^" + wi.source, "i");
function Rl() {
  return {
    exit: {
      htmlFlowData(t) {
        mr.call(this, t, wi);
      },
      htmlTextData(t) {
        mr.call(this, t, Cl);
      }
    }
  };
}
function mr(t, e) {
  let n = this.sliceSerialize(t);
  this.options.allowDangerousHtml && (n = n.replace(e, "&lt;$1$2")), this.raw(this.encode(n));
}
function Ol() {
  return {
    enter: {
      taskListCheck() {
        this.tag('<input type="checkbox" disabled="" ');
      }
    },
    exit: {
      taskListCheck() {
        this.tag("/>");
      },
      taskListCheckValueChecked() {
        this.tag('checked="" ');
      }
    }
  };
}
const Il = {
  name: "tasklistCheck",
  tokenize: jl
};
function Pl() {
  return {
    text: {
      91: Il
    }
  };
}
function jl(t, e, n) {
  const r = this;
  return i;
  function i(l) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? n(l) : (t.enter("taskListCheck"), t.enter("taskListCheckMarker"), t.consume(l), t.exit("taskListCheckMarker"), s)
    );
  }
  function s(l) {
    return z(l) ? (t.enter("taskListCheckValueUnchecked"), t.consume(l), t.exit("taskListCheckValueUnchecked"), a) : l === 88 || l === 120 ? (t.enter("taskListCheckValueChecked"), t.consume(l), t.exit("taskListCheckValueChecked"), a) : n(l);
  }
  function a(l) {
    return l === 93 ? (t.enter("taskListCheckMarker"), t.consume(l), t.exit("taskListCheckMarker"), t.exit("taskListCheck"), o) : n(l);
  }
  function o(l) {
    return L(l) ? e(l) : $(l) ? t.check({
      tokenize: Ll
    }, e, n)(l) : n(l);
  }
}
function Ll(t, e, n) {
  return N(t, r, "whitespace");
  function r(i) {
    return i === null ? n(i) : e(i);
  }
}
function $l(t) {
  return Xr([
    Vo(),
    al(),
    bl(),
    Tl(),
    Pl()
  ]);
}
function Dl(t) {
  return Zr([
    tl(),
    yl(),
    wl(),
    vl(),
    Rl(),
    Ol()
  ]);
}
const bi = 22e3, Nl = /(?:^|\n)\[roy-sticker:(data:image\/webp;base64,[A-Za-z0-9+/]+={0,2})\]$/;
function ln(t) {
  if (typeof t != "string" || t.length > bi || !/^data:image\/webp;base64,[A-Za-z0-9+/]+={0,2}$/.test(t)) return !1;
  try {
    const e = atob(t.slice(t.indexOf(",") + 1));
    return e.slice(0, 4) === "RIFF" && e.slice(8, 12) === "WEBP";
  } catch {
    return !1;
  }
}
const Ul = (t) => String(t).replace(/[&<>"']/g, (e) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[e]);
function vi(t) {
  const e = String(t ?? ""), n = e.match(Nl);
  return n && ln(n[1]) ? { text: e.slice(0, n.index), sticker: n[1] } : { text: e, sticker: "" };
}
function _i(t, e = "", n = 2e3) {
  if (t = String(t).trim(), t.length > n || !t && !e || e && !ln(e)) throw Error("内容或贴纸格式无效");
  return t + (e ? (t ? `
` : "") + "[roy-sticker:" + e + "]" : "");
}
function ki(t) {
  const { text: e, sticker: n } = vi(t);
  return (e.length <= 12e3 ? qo(e, { allowDangerousHtml: !1, allowDangerousProtocol: !1, extensions: [$l()], htmlExtensions: [Dl()] }) : "<p>" + Ul(e) + "</p>") + (n ? '<img class="roy-comment-sticker" src="' + n + '" alt="Memoji / 贴纸" loading="lazy" decoding="async" width="128" height="128">' : "");
}
function Si(t, e) {
  Gn(), t.classList.add("roy-rich-body"), t.innerHTML = ki(e);
  for (const n of t.querySelectorAll("a"))
    n.rel = "nofollow ugc noopener noreferrer", n.target = "_blank";
}
function Gn() {
  if (typeof document > "u" || document.querySelector("[data-roy-rich-style]")) return;
  const t = document.createElement("link");
  t.rel = "stylesheet", t.href = "/shared/comment-rich.css", t.dataset.royRichStyle = "", document.head.append(t);
}
async function Ei(t) {
  if (!t || !["image/png", "image/jpeg", "image/webp", "image/avif"].includes(t.type) || !t.size || t.size > 12 * 1024 * 1024) throw Error("请选择 12 MB 内的 PNG、JPEG、WebP 或 AVIF 图片。");
  const e = URL.createObjectURL(t), n = new Image();
  try {
    await new Promise((s, a) => {
      n.onload = s, n.onerror = () => a(Error("图片无法读取，请先保存为 PNG。")), n.src = e;
    });
    const r = n.naturalWidth, i = n.naturalHeight;
    if (!r || !i || r * i > 64e6) throw Error("图片尺寸过大。");
    for (const s of [256, 224, 192, 160, 128]) {
      const a = Math.min(1, s / Math.max(r, i)), o = document.createElement("canvas");
      o.width = Math.max(1, Math.round(r * a)), o.height = Math.max(1, Math.round(i * a));
      const l = o.getContext("2d");
      if (!l) throw Error("浏览器暂不支持贴纸处理。");
      l.drawImage(n, 0, 0, o.width, o.height);
      for (const u of [0.9, 0.78, 0.6]) {
        const h = o.toDataURL("image/webp", u);
        if (ln(h)) return h;
      }
    }
    throw Error("贴纸太复杂，请使用更小的图片。");
  } finally {
    URL.revokeObjectURL(e), n.src = "";
  }
}
function Fl(t, { en: e = !1, limit: n = 2e3, stickers: r = !0 } = {}) {
  var _, x;
  Gn();
  let i = "", s = !1, a = 0;
  const o = t.required, l = document.createElement("div");
  l.className = "roy-rich-compose", l.innerHTML = `<div class="roy-rich-tools"><span>${e ? "Markdown supported" : "支持 Markdown"}</span><button type="button" data-rich-preview>${e ? "Preview" : "预览"}</button>${r ? `<button type="button" data-rich-sticker>${e ? "＋ Sticker" : "＋ 拟我表情 / 贴纸"}</button>` : ""}</div><input type="file" data-rich-file accept="image/png,image/jpeg,image/webp,image/avif" hidden><div data-rich-draft hidden><img alt="${e ? "Sticker preview" : "贴纸预览"}"><button type="button" data-rich-remove>${e ? "Remove sticker" : "移除贴纸"}</button></div><div class="roy-rich-body roy-rich-preview" data-rich-output hidden></div><p class="roy-rich-status" role="status"></p>`, (((_ = t.parentElement) == null ? void 0 : _.tagName) === "LABEL" ? t.parentElement : t).insertAdjacentElement("afterend", l);
  const h = (A) => l.querySelector(A), c = h(".roy-rich-status"), f = h("[data-rich-draft]"), d = h("[data-rich-output]"), p = h("[data-rich-file]"), y = h("[data-rich-preview]"), v = () => {
    t.required = o && !i, f.hidden = !i, i ? f.querySelector("img").src = i : f.querySelector("img").removeAttribute("src"), d.hidden || Si(d, t.value.trim() + (i ? `
[roy-sticker:` + i + "]" : "")), t.dispatchEvent(new Event("roy-rich-change", { bubbles: !0 }));
  };
  async function w(A) {
    if (t.matches(":disabled")) return;
    const b = ++a;
    s = !0, c.textContent = e ? "Processing sticker…" : "正在处理贴纸…";
    try {
      const R = await Ei(A);
      if (b !== a) return;
      i = R, c.textContent = e ? "Sticker ready. It will be sent with your comment." : "贴纸已准备好，将随留言一起发送。", v();
    } catch (R) {
      b === a && (c.textContent = e ? "Could not process this image. Try a smaller PNG or WebP." : R.message);
    } finally {
      b === a && (s = !1, v());
    }
  }
  y.onclick = () => {
    d.hidden = !d.hidden, y.textContent = d.hidden ? e ? "Preview" : "预览" : e ? "Hide preview" : "收起预览", v();
  }, (x = h("[data-rich-sticker]")) == null || x.addEventListener("click", () => {
    t.matches(":disabled") ? c.textContent = e ? "Sign in and set your nickname first." : "请先登录并设置昵称。" : p.click();
  }), p.onchange = () => {
    var A;
    (A = p.files) != null && A[0] && w(p.files[0]), p.value = "";
  }, h("[data-rich-remove]").onclick = () => {
    a++, s = !1, i = "", c.textContent = "", v();
  };
  const k = (A) => {
    var D, U;
    const b = [...((D = A.clipboardData) == null ? void 0 : D.files) || ((U = A.dataTransfer) == null ? void 0 : U.files) || []], R = b.find((S) => S.type.startsWith("image/"));
    R && r && !t.matches(":disabled") && (A.preventDefault(), w(R));
  };
  return t.addEventListener("paste", k), t.addEventListener("drop", k), t.addEventListener("input", () => {
    d.hidden || v();
  }), { get hasSticker() {
    return !!i;
  }, get busy() {
    return s;
  }, value() {
    if (s) throw Error("贴纸仍在处理中");
    return _i(t.value, i, n);
  }, clear() {
    a++, s = !1, i = "", c.textContent = "", d.hidden = !0, y.textContent = e ? "Preview" : "预览", v();
  }, destroy() {
    a++, t.removeEventListener("paste", k), t.removeEventListener("drop", k), l.remove();
  } };
}
const Bl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  STICKER_LIMIT: bi,
  bodyHTML: ki,
  compressSticker: Ei,
  createComposer: Fl,
  installStyles: Gn,
  packBody: _i,
  renderBody: Si,
  splitBody: vi,
  validSticker: ln
}, Symbol.toStringTag, { value: "Module" })), Ct = "https://ewjdofdzzozvzpjhcmyq.supabase.co".trim().replace(/\/$/, ""), nt = "sb_publishable_fOXI3ujosvq2W6yU7LQRpg_zkZXR2Ss".trim();
if (!!Ct != !!nt) throw new Error("Set both public Supabase variables, or leave both empty.");
if (Ct) {
  const t = new URL(Ct);
  if (t.protocol !== "https:" && !["localhost", "127.0.0.1"].includes(t.hostname)) throw new Error("Supabase must use HTTPS.");
  if (nt.startsWith("eyJ"))
    try {
      if (JSON.parse(atob(nt.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))).role !== "anon") throw new Error("Not an anon key");
    } catch {
      throw new Error("Only a public anon key is allowed, never service_role.");
    }
  else if (!nt.startsWith("sb_publishable_")) throw new Error("Use a Publishable key, never a Secret or Resend key.");
}
const Jt = { url: Ct, key: nt, configured: !!(Ct && nt) };
let zl;
function Jn() {
  return zl ?? (zl = Promise.resolve().then(() => Qh).then(({ createClient: t }) => t(Jt.url, Jt.key, {
    auth: { persistSession: !0, autoRefreshToken: !0, detectSessionInUrl: !1, storageKey: "roy-top-auth" }
  })));
}
const Ti = (t) => /[A-Z]/.test(t) && /[a-z]/.test(t);
function Rt(t) {
  if (t.error) throw t.error;
  return t.data;
}
async function Ml(t, e) {
  return Rt(await t.auth.signInWithOtp({ email: e, options: { shouldCreateUser: !1 } }));
}
async function ql(t, e, n) {
  if (!Ti(n)) throw { code: "password_case" };
  return Rt(await t.auth.signUp({ email: e, password: n, options: { data: { password_enabled: !0 } } }));
}
async function Hl(t, e, n) {
  return Rt(await t.auth.signInWithPassword({ email: e, password: n }));
}
async function Wl(t, e) {
  if (!Ti(e)) throw { code: "password_case" };
  const { user: n } = Rt(await t.auth.getUser());
  if (!(n != null && n.email_confirmed_at)) throw { code: "email_not_confirmed" };
  return Rt(await t.auth.updateUser({ password: e, data: { password_enabled: !0 } }));
}
class Vl extends HTMLElement {
  constructor() {
    super(...arguments);
    X(this, "api");
    X(this, "user", null);
    X(this, "mode", "code");
    X(this, "pending", "");
    X(this, "registration", !1);
    X(this, "reset", !1);
    X(this, "busy", !1);
    X(this, "until", 0);
    X(this, "timer");
    X(this, "unsubscribe");
  }
  get en() {
    return this.dataset.en === "true";
  }
  t(n, r) {
    return this.en ? r : n;
  }
  el(n) {
    return this.querySelector(n);
  }
  skipped() {
    var n;
    try {
      return sessionStorage.getItem("roy-password-later-" + ((n = this.user) == null ? void 0 : n.id)) === "1";
    } catch {
      return !1;
    }
  }
  status(n, r = !1) {
    const i = this.el("[data-auth-status]");
    i.textContent = n, i.hidden = !n, i.dataset.error = String(r);
  }
  failure(n) {
    const { code: r, message: i } = n || {};
    return r === "password_case" ? this.t("密码需同时包含大写和小写字母。", "Include both uppercase and lowercase letters.") : r === "email_confirmation_required" ? this.t("邮箱验证配置不符合要求，请联系站长。", "Email confirmation must be enabled. Contact the site owner.") : r === "invalid_credentials" ? this.t("邮箱或密码不正确。未设置或忘记密码，可使用验证码登录。", "Incorrect email or password. Use an email code if you have not set or have forgotten your password.") : r === "otp_expired" ? this.t("验证码无效或已过期，请重新获取。", "Invalid or expired code. Request a new one.") : r === "email_not_confirmed" ? this.t("请先验证邮箱。", "Please verify your email first.") : r === "weak_password" ? this.t("密码未通过邮箱服务的密码要求：", "The authentication service rejected this password: ") + (i || "") : r === "same_password" ? this.t("这个密码与原密码相同，请换一个。", "Choose a password different from your current password.") : r === "reauthentication_needed" || r === "reauthentication_not_valid" ? this.t("请重新使用邮箱验证码登录后设置密码。", "Sign in again with an email code before setting your password.") : r != null && r.includes("rate_limit") || r === "over_request_rate_limit" ? this.t("请求过于频繁，请稍后再试。", "Too many requests. Please try again later.") : this.t("暂时无法完成操作，请稍后重试。", "Could not complete the request. Please try again later.");
  }
  async connectedCallback() {
    var r;
    if (this.dataset.bound) return;
    this.dataset.bound = "true";
    const n = this.t.bind(this);
    if (this.innerHTML = `<form data-credentials class="roy-auth-fields">
   <label class="roy-auth-field"><span>${n("邮箱", "Email")}</span><input name="auth-email" type="email" autocomplete="email" maxlength="254" required placeholder="${n("邮箱", "Email")}" /></label>
   <label class="roy-auth-field" data-password-field hidden><span>${n("密码", "Password")}</span><input name="auth-password" type="password" autocomplete="current-password" placeholder="${n("密码", "Password")}" /></label>
   <button type="submit" class="roy-auth-primary" data-auth-submit>${n("获取验证码", "Send code")}</button>
  </form>
  <form data-verify class="roy-auth-fields" hidden><p data-target-email class="roy-auth-target"></p><label class="roy-auth-field"><span>${n("邮箱验证码", "Email code")}</span><input name="auth-token" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]{6,8}" minlength="6" maxlength="8" required placeholder="${n("邮箱验证码", "Email code")}" /></label><button type="submit" class="roy-auth-primary">${n("验证并登录", "Verify & sign in")}</button></form>
  <form data-set-password hidden><p class="roy-auth-setup-title">${n("为账号设置密码", "Set an account password")}</p><div class="roy-auth-fields"><label class="roy-auth-field"><span>${n("新密码", "New password")}</span><input name="new-password" type="password" autocomplete="new-password" minlength="6" required placeholder="${n("新密码", "New password")}" /></label><label class="roy-auth-field"><span>${n("确认密码", "Confirm password")}</span><input name="confirm-password" type="password" autocomplete="new-password" minlength="6" required placeholder="${n("再次输入密码", "Enter password again")}" /></label><button type="submit" class="roy-auth-primary">${n("保存密码", "Save password")}</button></div><button type="button" data-skip class="roy-auth-link">${n("稍后设置", "Set up later")}</button></form>
  <p data-password-hint class="roy-auth-hint" hidden>${n("密码需包含大小写字母；邮箱服务最低要求为 6 位。", "Include uppercase and lowercase letters; the email service requires at least 6 characters.")}</p>
  <p data-auth-status class="roy-auth-status" role="status" aria-live="polite" hidden></p>
  <div class="roy-auth-links" data-auth-links><a href="${this.en ? "/en" : ""}/terms/privacy-policy">${n("隐私说明", "Privacy")}</a><button type="button" data-mode-switch>${n("使用密码", "Use password")}</button><button type="button" data-register>${n("注册账号", "Create account")}</button><button type="button" data-forgot hidden>${n("忘记密码", "Forgot password")}</button><button type="button" data-resend hidden></button><button type="button" data-change hidden>${n("更换邮箱", "Change email")}</button></div>`, this.el("[data-credentials]").addEventListener("submit", (i) => {
      i.preventDefault(), this.submitCredentials();
    }), this.el("[data-verify]").addEventListener("submit", (i) => {
      i.preventDefault(), this.verify();
    }), this.el("[data-set-password]").addEventListener("submit", (i) => {
      i.preventDefault(), this.savePassword();
    }), this.el("[data-mode-switch]").addEventListener("click", () => this.switchMode(this.mode === "password" || this.mode === "register" ? "code" : "password")), this.el("[data-register]").addEventListener("click", () => this.switchMode("register")), this.el("[data-forgot]").addEventListener("click", () => {
      this.switchMode("code"), this.reset = !0, this.status(n("验证邮箱后可重新设置密码。", "Verify your email to set a new password."));
    }), this.el("[data-resend]").addEventListener("click", () => {
      this.resend();
    }), this.el("[data-change]").addEventListener("click", () => this.switchMode(this.registration ? "register" : "code")), this.el("[data-skip]").addEventListener("click", () => {
      var i;
      if (!this.busy) {
        try {
          sessionStorage.setItem("roy-password-later-" + ((i = this.user) == null ? void 0 : i.id), "1");
        } catch {
        }
        this.el("[name=new-password]").value = "", this.el("[name=confirm-password]").value = "", this.reset = !1, this.mode = "code", this.paint(), this.complete();
      }
    }), this.timer = setInterval(() => this.tick(), 1e3), this.paint(), !Jt.configured || location.protocol === "file:") {
      this.status(n("请通过网站地址打开后登录。", "Open the website address to sign in."));
      return;
    }
    try {
      this.api = await Jn();
      const { data: i, error: s } = await this.api.auth.getSession();
      if (s) throw s;
      this.user = ((r = i.session) == null ? void 0 : r.user) || null;
      const { data: a } = this.api.auth.onAuthStateChange((o, l) => {
        if (!(l != null && l.user) && this.user) {
          try {
            sessionStorage.removeItem("roy-password-later-" + this.user.id);
          } catch {
          }
          this.mode = "code", this.pending = "", this.registration = !1, this.reset = !1;
          for (const u of this.querySelectorAll("input[type=password]")) u.value = "";
          this.status("");
        }
        this.user = (l == null ? void 0 : l.user) || null, this.paint();
      });
      this.unsubscribe = () => a.subscription.unsubscribe(), this.paint();
    } catch (i) {
      this.status(this.failure(i), !0);
    }
  }
  disconnectedCallback() {
    var n;
    clearInterval(this.timer), (n = this.unsubscribe) == null || n.call(this), delete this.dataset.bound;
  }
  complete() {
    this.dispatchEvent(new CustomEvent("roy-auth-complete", { bubbles: !0, detail: { user: this.user } }));
  }
  switchMode(n) {
    this.busy || (this.mode = n, this.pending = "", this.registration = !1, this.reset = !1, this.el("[name=auth-password]").value = "", this.el("[name=auth-token]").value = "", this.status(""), this.paint());
  }
  paint() {
    var i;
    if (!this.querySelector("[data-credentials]")) return;
    const n = !!this.user && (this.reset || !((i = this.user.user_metadata) != null && i.password_enabled) && !this.skipped() && this.mode !== "password");
    this.hidden = !!this.user && !n, this.dataset.mode = n ? "setup" : this.mode, this.el("[data-credentials]").hidden = !!this.user || !!this.pending, this.el("[data-verify]").hidden = !!this.user || !this.pending, this.el("[data-set-password]").hidden = !n, this.el("[data-auth-links]").hidden = !!this.user, this.el("[data-password-field]").hidden = this.mode === "code";
    const r = this.el("[name=auth-password]");
    r.required = this.mode !== "code", r.autocomplete = this.mode === "register" ? "new-password" : "current-password", this.mode === "register" ? r.minLength = 6 : r.removeAttribute("minlength"), this.el("[data-password-hint]").hidden = !n && this.mode !== "register", this.el("[data-mode-switch]").textContent = this.mode === "code" ? this.t("使用密码", "Use password") : this.t("使用验证码", "Use code"), this.el("[data-register]").hidden = this.mode === "register" || !!this.pending, this.el("[data-forgot]").hidden = this.mode !== "password" || !!this.pending, this.el("[data-mode-switch]").hidden = !!this.pending, this.el("[data-change]").hidden = !this.pending, this.el("[data-resend]").hidden = !this.pending, this.el("[data-target-email]").textContent = this.pending;
    for (const s of this.querySelectorAll("input")) s.disabled = this.busy;
    for (const s of this.querySelectorAll("button")) s.disabled = this.busy;
    this.tick();
  }
  tick() {
    if (!this.querySelector("[data-auth-submit]")) return;
    const n = Math.max(0, Math.ceil((this.until - Date.now()) / 1e3)), r = this.el("[data-auth-submit]"), i = this.el("[data-resend]");
    r.textContent = this.mode === "password" ? this.t("密码登录", "Sign in") : this.mode === "register" ? this.t("注册并获取验证码", "Register & send code") : this.t("获取验证码", "Send code"), r.disabled = this.busy || this.mode !== "password" && n > 0, i.textContent = n ? this.t(`${n} 秒后重发`, `Resend in ${n}s`) : this.t("重新获取验证码", "Resend code"), i.disabled = this.busy || n > 0;
  }
  async run(n) {
    if (!(this.busy || !this.api)) {
      this.busy = !0, this.paint();
      try {
        await n();
      } catch (r) {
        this.status(this.failure(r), !0);
      } finally {
        this.busy = !1, this.paint();
      }
    }
  }
  async submitCredentials() {
    const n = this.el("[name=auth-email]").value.trim(), r = this.el("[name=auth-password]").value;
    this.mode !== "password" && this.until > Date.now() || await this.run(async () => {
      var i, s;
      if (this.mode === "password") {
        const a = await Hl(this.api, n, r);
        this.user = a.user, this.el("[name=auth-password]").value = "", this.complete();
        return;
      }
      if (this.mode === "register") {
        const a = await ql(this.api, n, r);
        if (this.el("[name=auth-password]").value = "", ((s = (i = a.user) == null ? void 0 : i.identities) == null ? void 0 : s.length) === 0) {
          this.switchAfterRequest("code"), this.status(this.t("该邮箱可能已经注册，请使用验证码登录。", "This email may already be registered. Sign in with an email code."));
          return;
        }
        if (a.session)
          throw await this.api.auth.signOut({ scope: "local" }), { code: "email_confirmation_required" };
        this.registration = !0;
      } else {
        try {
          await Ml(this.api, n);
        } catch (a) {
          if (["otp_disabled", "user_not_found", "signup_disabled"].includes(a.code) || /signups not allowed for otp/i.test(a.message || "")) {
            this.switchAfterRequest("register"), this.status(this.t("新账号请先设置密码，再获取注册验证码。", "Set a password before requesting your registration code."));
            return;
          }
          throw a;
        }
        this.registration = !1;
      }
      this.pending = n, this.until = Date.now() + 6e4, this.status(this.t("验证码已发送，请查看邮箱。", "Code sent. Please check your inbox.")), setTimeout(() => this.el("[name=auth-token]").focus(), 0);
    });
  }
  switchAfterRequest(n) {
    this.mode = n, this.pending = "", this.el("[name=auth-password]").value = "";
  }
  async verify() {
    const n = this.el("[name=auth-token]").value.trim();
    await this.run(async () => {
      var s;
      const { data: r, error: i } = await this.api.auth.verifyOtp({ email: this.pending, token: n, type: "email" });
      if (i) throw i;
      this.user = r.user, this.pending = "", this.el("[name=auth-token]").value = "", this.user && (this.reset || !((s = this.user.user_metadata) != null && s.password_enabled) && !this.skipped() && this.mode !== "password") ? this.status(this.t("邮箱已验证，可以设置密码；也可以稍后设置。", "Email verified. Set a password now or choose later.")) : (this.status(""), this.complete());
    });
  }
  async resend() {
    this.until > Date.now() || await this.run(async () => {
      const n = this.registration ? await this.api.auth.resend({ type: "signup", email: this.pending }) : await this.api.auth.signInWithOtp({ email: this.pending, options: { shouldCreateUser: !1 } });
      if (n.error) throw n.error;
      this.until = Date.now() + 6e4, this.status(this.t("验证码已重新发送。", "A new code has been sent."));
    });
  }
  async savePassword() {
    const n = this.el("[name=new-password]").value, r = this.el("[name=confirm-password]").value;
    if (n !== r) {
      this.status(this.t("两次输入的密码不一致。", "Passwords do not match."), !0);
      return;
    }
    await this.run(async () => {
      const i = await Wl(this.api, n);
      this.user = i.user, this.reset = !1, this.el("[name=new-password]").value = "", this.el("[name=confirm-password]").value = "", this.status(""), this.complete();
    });
  }
}
customElements.get("roy-account-auth") || customElements.define("roy-account-auth", Vl);
const rt = /* @__PURE__ */ new Map(), Ai = (t) => typeof t == "string" && t.length <= 22e3 && /^data:image\/(webp|jpeg);base64,[A-Za-z0-9+/]+={0,2}$/.test(t);
function xi(t) {
  const e = rt.get(t.dataset.avatarUser || "");
  t.style.backgroundImage = e ? `url("${e}")` : "", t.style.backgroundSize = "cover", t.style.backgroundPosition = "center", t.textContent = e ? "" : t.dataset.avatarInitial || "R";
}
function Ci(t, e, n = "") {
  const r = document.createElement("span");
  return r.className = "roy-account-avatar " + n, r.dataset.avatarUser = t || "", r.dataset.avatarInitial = [...e][0] || "R", r.setAttribute("aria-hidden", "true"), xi(r), r;
}
function Ri() {
  document.querySelectorAll("[data-avatar-user]").forEach(xi);
}
async function Oi(t, e) {
  const n = [...new Set(e.filter((r) => !!r))];
  for (let r = 0; r < n.length; r += 50) {
    const i = n.slice(r, r + 50);
    try {
      const { data: s, error: a } = await t.from("roy_top_avatars").select("user_id,avatar_data").in("user_id", i).abortSignal(AbortSignal.timeout(1e4));
      if (a) continue;
      for (const o of i) rt.delete(o);
      for (const o of s || []) Ai(o.avatar_data) && rt.set(o.user_id, o.avatar_data);
    } catch {
    }
  }
  Ri();
}
function Kl(t) {
  return new Promise((e, n) => {
    const r = new FileReader();
    r.onload = () => e(String(r.result)), r.onerror = () => n(Error("read")), r.readAsDataURL(t);
  });
}
async function Gl(t) {
  if (!["image/jpeg", "image/png", "image/webp", "image/avif"].includes(t.type) || t.size > 32 * 1024 * 1024 || !t.size) throw Error("format");
  const e = URL.createObjectURL(t), n = new Image();
  n.decoding = "async";
  try {
    await new Promise((a, o) => {
      n.onload = () => a(), n.onerror = () => o(Error("format")), n.src = e;
    });
    const { naturalWidth: r, naturalHeight: i } = n;
    if (!r || !i || r * i > 1e8) throw Error("dimensions");
    const s = Math.min(r, i);
    for (const a of [192, 160, 128]) {
      const o = document.createElement("canvas");
      o.width = o.height = Math.min(a, s);
      const l = o.getContext("2d");
      if (!l) throw Error("canvas");
      l.fillStyle = "#fff", l.fillRect(0, 0, o.width, o.height), l.imageSmoothingEnabled = !0, l.imageSmoothingQuality = "high", l.drawImage(n, (r - s) / 2, (i - s) / 2, s, s, 0, 0, o.width, o.height);
      for (const u of [0.88, 0.78, 0.68]) {
        let h = await new Promise((c) => o.toBlob(c, "image/webp", u));
        if ((!h || h.type !== "image/webp") && (h = await new Promise((c) => o.toBlob(c, "image/jpeg", u))), h && h.size <= 16384) {
          const c = await Kl(h);
          if (Ai(c)) return { data: c, bytes: h.size, edge: o.width };
        }
      }
    }
    throw Error("size");
  } finally {
    URL.revokeObjectURL(e), n.src = "";
  }
}
class Jl extends HTMLElement {
  constructor() {
    super(...arguments);
    X(this, "api");
    X(this, "user", null);
    X(this, "version", 0);
    X(this, "stop");
    X(this, "busy", !1);
  }
  get en() {
    return this.dataset.en === "true";
  }
  t(n, r) {
    return this.en ? r : n;
  }
  el(n) {
    return this.querySelector(n);
  }
  status(n) {
    this.el("[data-avatar-status]").textContent = n;
  }
  async connectedCallback() {
    var n;
    if (!this.dataset.ready) {
      this.dataset.ready = "true", this.hidden = !0, this.innerHTML = `<div class="roy-avatar-settings-row"><span data-avatar-preview></span><div class="roy-avatar-actions"><button type="button" data-avatar-choose>${this.t("设置头像", "Set avatar")}</button><button type="button" data-avatar-remove hidden>${this.t("移除", "Remove")}</button></div><input type="file" accept="image/jpeg,image/png,image/webp,image/avif" hidden /><span data-avatar-status role="status" aria-live="polite"></span></div>`, this.el("[data-avatar-choose]").addEventListener("click", () => {
        this.busy || (this.el("input").value = "", this.el("input").click());
      }), this.el("input").addEventListener("change", () => void this.choose()), this.el("[data-avatar-remove]").addEventListener("click", () => void this.removeAvatar());
      try {
        this.api = await Jn();
        const { data: r } = await this.api.auth.getSession(), { data: i } = this.api.auth.onAuthStateChange((s, a) => setTimeout(() => {
          var o;
          this.isConnected && (a == null ? void 0 : a.user.id) !== ((o = this.user) == null ? void 0 : o.id) && this.identity((a == null ? void 0 : a.user) ?? null);
        }, 0));
        this.stop = () => i.subscription.unsubscribe(), await this.identity(((n = r.session) == null ? void 0 : n.user) ?? null);
      } catch {
        this.hidden = !0;
      }
    }
  }
  disconnectedCallback() {
    var n;
    (n = this.stop) == null || n.call(this), this.version++;
  }
  async identity(n) {
    const r = ++this.version;
    if (this.user = n, this.hidden = !n, this.status(""), !n) return;
    const { data: i } = await this.api.from("roy_top_profiles").select("nickname").eq("user_id", n.id).maybeSingle();
    await Oi(this.api, [n.id]), r === this.version && (this.el("[data-avatar-preview]").replaceChildren(Ci(n.id, (i == null ? void 0 : i.nickname) || "R")), this.updateButtons());
  }
  updateButtons() {
    var r;
    const n = !!rt.get(((r = this.user) == null ? void 0 : r.id) || "");
    this.el("[data-avatar-choose]").textContent = this.t(n ? "更换头像" : "设置头像", n ? "Change avatar" : "Set avatar"), this.el("[data-avatar-remove]").hidden = !n, this.querySelectorAll("button").forEach((i) => i.disabled = this.busy);
  }
  changed(n, r) {
    r ? rt.set(n, r) : rt.delete(n), Ri(), window.dispatchEvent(new CustomEvent("roy-avatar-changed", { detail: { userId: n } })), this.updateButtons();
  }
  async choose() {
    var i, s, a;
    const n = (i = this.el("input").files) == null ? void 0 : i[0], r = this.user;
    if (!(!n || !r || this.busy)) {
      this.busy = !0, this.updateButtons(), this.status(this.t("正在压缩…", "Optimizing…"));
      try {
        const o = await Gl(n);
        if (((s = this.user) == null ? void 0 : s.id) !== r.id) return;
        this.status(this.t("正在保存…", "Saving…"));
        const { error: l } = await this.api.from("roy_top_avatars").upsert({ user_id: r.id, avatar_data: o.data }, { onConflict: "user_id" });
        if (l) throw l;
        if (((a = this.user) == null ? void 0 : a.id) !== r.id) return;
        this.changed(r.id, o.data), this.status(this.t(`已保存 · ${(o.bytes / 1024).toFixed(1)} KB`, `Saved · ${(o.bytes / 1024).toFixed(1)} KB`));
      } catch (o) {
        this.status(o.code === "PGRST205" ? this.t("头像功能尚未启用，请稍后重试。", "Avatars are not enabled yet.") : this.t("无法保存头像。请使用 32 MB 内的 JPG、PNG 或 WebP 图片，再试一次。", "Could not save. Use a JPG, PNG or WebP image under 32 MB and try again."));
      } finally {
        this.busy = !1, this.updateButtons();
      }
    }
  }
  async removeAvatar() {
    var r;
    const n = this.user;
    if (!(!n || this.busy)) {
      this.busy = !0, this.updateButtons();
      try {
        const { error: i } = await this.api.from("roy_top_avatars").delete().eq("user_id", n.id);
        if (i) throw i;
        ((r = this.user) == null ? void 0 : r.id) === n.id && (this.changed(n.id), this.status(this.t("已恢复默认头像。", "Default avatar restored.")));
      } catch {
        this.status(this.t("暂时无法移除头像，请重试。", "Could not remove avatar. Please try again."));
      } finally {
        this.busy = !1, this.updateButtons();
      }
    }
  }
}
customElements.get("roy-avatar-settings") || customElements.define("roy-avatar-settings", Jl);
Jt.configured && Jn().then((t) => {
  Object.assign(window, { RoyPhotoClient: t, RoyRichComments: Bl, RoyPhotoAvatars: { create: Ci, load: (e) => Oi(t, e) } }), window.dispatchEvent(new Event("roy-photo-ready"));
});
const Yl = Symbol.for("@supabase/supabase-js.traceContextExtractor");
function Ql() {
  return globalThis[Yl];
}
function un(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function Xl(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(a) {
      a(s);
    });
  }
  return new (n || (n = Promise))(function(s, a) {
    function o(h) {
      try {
        u(r.next(h));
      } catch (c) {
        a(c);
      }
    }
    function l(h) {
      try {
        u(r.throw(h));
      } catch (c) {
        a(c);
      }
    }
    function u(h) {
      h.done ? s(h.value) : i(h.value).then(o, l);
    }
    u((r = r.apply(t, e || [])).next());
  });
}
const Zl = (t) => t ? (...e) => t(...e) : (...e) => fetch(...e);
class cn extends Error {
  constructor(e, n = "FunctionsError", r) {
    super(e), this.name = n, this.context = r;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      context: this.context
    };
  }
}
class Ii extends cn {
  constructor(e) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", e);
  }
}
class xn extends cn {
  constructor(e) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
  }
}
class Cn extends cn {
  constructor(e) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e);
  }
}
var Yt;
(function(t) {
  t.Any = "any", t.ApNortheast1 = "ap-northeast-1", t.ApNortheast2 = "ap-northeast-2", t.ApSouth1 = "ap-south-1", t.ApSoutheast1 = "ap-southeast-1", t.ApSoutheast2 = "ap-southeast-2", t.CaCentral1 = "ca-central-1", t.EuCentral1 = "eu-central-1", t.EuWest1 = "eu-west-1", t.EuWest2 = "eu-west-2", t.EuWest3 = "eu-west-3", t.SaEast1 = "sa-east-1", t.UsEast1 = "us-east-1", t.UsWest1 = "us-west-1", t.UsWest2 = "us-west-2";
})(Yt || (Yt = {}));
class eu {
  /**
   * Creates a new Functions client bound to an Edge Functions URL.
   *
   * @example Using supabase-js (recommended)
   * ```ts
   * import { createClient } from '@supabase/supabase-js'
   *
   * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
   * const { data, error } = await supabase.functions.invoke('hello-world')
   * ```
   *
   * @category Edge Functions
   *
   * @example Standalone import for bundle-sensitive environments
   * ```ts
   * import { FunctionsClient, FunctionRegion } from '@supabase/functions-js'
   *
   * const functions = new FunctionsClient('https://xyzcompany.supabase.co/functions/v1', {
   *   headers: { apikey: 'your-publishable-key' },
   *   region: FunctionRegion.UsEast1,
   * })
   * ```
   */
  constructor(e, { headers: n = {}, customFetch: r, region: i = Yt.Any } = {}) {
    this.url = e, this.headers = n, this.region = i, this.fetch = Zl(r);
  }
  /**
   * Updates the authorization header
   * @param token - the new jwt token sent in the authorisation header
   *
   * @category Edge Functions
   *
   * @example Setting the authorization header
   * ```ts
   * functions.setAuth(session.access_token)
   * ```
   */
  setAuth(e) {
    this.headers.Authorization = `Bearer ${e}`;
  }
  /**
   * Invokes a function
   * @param functionName - The name of the Function to invoke.
   * @param options - Options for invoking the Function.
   * @example
   * ```ts
   * const { data, error } = await functions.invoke('hello-world', {
   *   body: { name: 'Ada' },
   * })
   * ```
   *
   * @category Edge Functions
   *
   * @remarks
   * - The API key is sent in the `apikey` header. The `Authorization` header is reserved
   *   for the signed-in user's JWT (or a custom auth token) — when there is no session, a
   *   new-format API key (`sb_publishable_…` / `sb_secret_…`) is not sent as a Bearer token.
   * - Invoke params generally match the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) spec.
   * - When you pass in a body to your function, we automatically attach the Content-Type header for `Blob`, `ArrayBuffer`, `File`, `FormData` and `String`. If it doesn't match any of these types we assume the payload is `json`, serialize it and attach the `Content-Type` header as `application/json`. You can override this behavior by passing in a `Content-Type` header of your own.
   * - Responses are automatically parsed as `json`, `blob` and `form-data` depending on the `Content-Type` header sent by your function. Responses are parsed as `text` by default.
   *
   * @example Basic invocation
   * ```js
   * const { data, error } = await supabase.functions.invoke('hello', {
   *   body: { foo: 'bar' }
   * })
   * ```
   *
   * @exampleDescription Error handling
   * A `FunctionsHttpError` error is returned if your function throws an error, `FunctionsRelayError` if the Supabase Relay has an error processing your function and `FunctionsFetchError` if there is a network error in calling your function. Log the full error object so fields like `name`, `context`, and any structured body aren't hidden.
   *
   * @example Error handling
   * ```js
   * import { FunctionsHttpError, FunctionsRelayError, FunctionsFetchError } from "@supabase/supabase-js";
   *
   * const { data, error } = await supabase.functions.invoke('hello', {
   *   headers: {
   *     "my-custom-header": 'my-custom-header-value'
   *   },
   *   body: { foo: 'bar' }
   * })
   *
   * if (error instanceof FunctionsHttpError) {
   *   const errorMessage = await error.context.json()
   *   console.error('Function returned an error', errorMessage)
   * } else if (error instanceof FunctionsRelayError) {
   *   console.error('Relay error:', error)
   * } else if (error instanceof FunctionsFetchError) {
   *   console.error('Fetch error:', error)
   * }
   * ```
   *
   * @exampleDescription Passing custom headers
   * You can pass custom headers to your function. Note: supabase-js automatically passes the `Authorization` header with the signed in user's JWT.
   *
   * @example Passing custom headers
   * ```js
   * const { data, error } = await supabase.functions.invoke('hello', {
   *   headers: {
   *     "my-custom-header": 'my-custom-header-value'
   *   },
   *   body: { foo: 'bar' }
   * })
   * ```
   *
   * @exampleDescription Calling with DELETE HTTP verb
   * You can also set the HTTP verb to `DELETE` when calling your Edge Function.
   *
   * @example Calling with DELETE HTTP verb
   * ```js
   * const { data, error } = await supabase.functions.invoke('hello', {
   *   headers: {
   *     "my-custom-header": 'my-custom-header-value'
   *   },
   *   body: { foo: 'bar' },
   *   method: 'DELETE'
   * })
   * ```
   *
   * @exampleDescription Invoking a Function in the UsEast1 region
   * Here are the available regions:
   * - `FunctionRegion.Any`
   * - `FunctionRegion.ApNortheast1`
   * - `FunctionRegion.ApNortheast2`
   * - `FunctionRegion.ApSouth1`
   * - `FunctionRegion.ApSoutheast1`
   * - `FunctionRegion.ApSoutheast2`
   * - `FunctionRegion.CaCentral1`
   * - `FunctionRegion.EuCentral1`
   * - `FunctionRegion.EuWest1`
   * - `FunctionRegion.EuWest2`
   * - `FunctionRegion.EuWest3`
   * - `FunctionRegion.SaEast1`
   * - `FunctionRegion.UsEast1`
   * - `FunctionRegion.UsWest1`
   * - `FunctionRegion.UsWest2`
   *
   * @example Invoking a Function in the UsEast1 region
   * ```js
   * import { createClient, FunctionRegion } from '@supabase/supabase-js'
   *
   * const { data, error } = await supabase.functions.invoke('hello', {
   *   body: { foo: 'bar' },
   *   region: FunctionRegion.UsEast1
   * })
   * ```
   *
   * @exampleDescription Calling with GET HTTP verb
   * You can also set the HTTP verb to `GET` when calling your Edge Function.
   *
   * @example Calling with GET HTTP verb
   * ```js
   * const { data, error } = await supabase.functions.invoke('hello', {
   *   headers: {
   *     "my-custom-header": 'my-custom-header-value'
   *   },
   *   method: 'GET'
   * })
   * ```
   *
   * @example Standalone client invoke
   * ```ts
   * const { data, error } = await functions.invoke('hello-world', {
   *   body: { name: 'Ada' },
   * })
   * ```
   */
  invoke(e) {
    return Xl(this, arguments, void 0, function* (n, r = {}) {
      var i, s;
      let a, o, l;
      try {
        const { headers: u, method: h, body: c, signal: f, timeout: d } = r;
        let p = {}, { region: y } = r;
        y || (y = this.region);
        const v = new URL(`${this.url}/${n}`);
        y && y !== "any" && (p["x-region"] = y, v.searchParams.set("forceFunctionRegion", y));
        let w;
        const k = !!u && Object.keys(u).some((D) => D.toLowerCase() === "content-type");
        c && !k ? typeof Blob < "u" && c instanceof Blob || c instanceof ArrayBuffer ? (p["Content-Type"] = c.type || "application/octet-stream", w = c) : typeof c == "string" ? (p["Content-Type"] = "text/plain", w = c) : typeof FormData < "u" && c instanceof FormData ? w = c : (p["Content-Type"] = "application/json", w = JSON.stringify(c)) : c && typeof c != "string" && !(typeof Blob < "u" && c instanceof Blob) && !(c instanceof ArrayBuffer) && !(typeof FormData < "u" && c instanceof FormData) ? w = JSON.stringify(c) : w = c;
        let _ = f;
        d && (o = new AbortController(), a = setTimeout(() => o.abort(), d), f ? (_ = o.signal, l = () => o.abort(), f.addEventListener("abort", l)) : _ = o.signal);
        const x = yield this.fetch(v.toString(), {
          method: h || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, p), this.headers), u),
          body: w,
          signal: _
        }).catch((D) => {
          throw new Ii(D);
        }), A = x.headers.get("x-relay-error");
        if (A && A === "true")
          throw new xn(x);
        if (!x.ok)
          throw new Cn(x);
        let b = ((i = x.headers.get("Content-Type")) !== null && i !== void 0 ? i : "text/plain").split(";")[0].trim().toLowerCase(), R;
        return b === "application/json" ? R = yield x.json() : b === "application/octet-stream" || b === "application/pdf" ? R = yield x.blob() : b === "text/event-stream" ? R = x : b === "multipart/form-data" ? R = yield x.formData() : R = yield x.text(), { data: R, error: null, response: x };
      } catch (u) {
        return {
          data: null,
          error: u,
          response: u instanceof Cn || u instanceof xn ? u.context : void 0
        };
      } finally {
        a && clearTimeout(a), l && ((s = r.signal) === null || s === void 0 || s.removeEventListener("abort", l));
      }
    });
  }
}
var Ve = class extends Error {
  /**
  * @example
  * ```ts
  * import PostgrestError from '@supabase/postgrest-js'
  *
  * throw new PostgrestError({
  *   message: 'Row level security prevented the request',
  *   details: 'RLS denied the insert',
  *   hint: 'Check your policies',
  *   code: 'PGRST301',
  * })
  * ```
  */
  constructor(t) {
    super(t.message), this.name = "PostgrestError", this.details = t.details, this.hint = t.hint, this.code = t.code;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      details: this.details,
      hint: this.hint,
      code: this.code
    };
  }
};
const Pi = 3, yr = (t) => Math.min(1e3 * 2 ** t, 3e4), tu = [520, 503], ji = [
  "GET",
  "HEAD",
  "OPTIONS"
];
function Ot(t) {
  "@babel/helpers - typeof";
  return Ot = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Ot(t);
}
function nu(t, e) {
  if (Ot(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Ot(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function ru(t) {
  var e = nu(t, "string");
  return Ot(e) == "symbol" ? e : e + "";
}
function iu(t, e, n) {
  return (e = ru(e)) in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function wr(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function qe(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? wr(Object(n), !0).forEach(function(r) {
      iu(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : wr(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function br(t, e) {
  return new Promise((n) => {
    if (e != null && e.aborted) {
      n();
      return;
    }
    const r = setTimeout(() => {
      e == null || e.removeEventListener("abort", i), n();
    }, t);
    function i() {
      clearTimeout(r), n();
    }
    e == null || e.addEventListener("abort", i);
  });
}
function su(t, e, n, r) {
  return !(!r || n >= Pi || !ji.includes(t) || !tu.includes(e));
}
async function Li(t, e, n, r) {
  let i = 0;
  for (; ; ) {
    const l = qe({}, n.headers);
    i > 0 && (l["X-Retry-Count"] = String(i));
    let u;
    try {
      u = await t(e, {
        method: n.method,
        headers: l,
        body: n.body,
        signal: n.signal
      });
    } catch (h) {
      var s;
      if ((h == null ? void 0 : h.name) === "AbortError" || (h == null ? void 0 : h.code) === "ABORT_ERR" || (h == null ? void 0 : h.name) === "TimeoutError" && (!((s = n.signal) === null || s === void 0) && s.aborted) || !ji.includes(n.method)) throw h;
      if (r && i < Pi) {
        const c = yr(i);
        i++, await br(c, n.signal);
        continue;
      }
      throw h;
    }
    if (su(n.method, u.status, i, r)) {
      var a, o;
      const h = (a = (o = u.headers) === null || o === void 0 ? void 0 : o.get("Retry-After")) !== null && a !== void 0 ? a : null, c = h !== null ? Math.max(0, parseInt(h, 10) || 0) * 1e3 : yr(i);
      await u.text(), i++, await br(c, n.signal);
      continue;
    }
    return u;
  }
}
var au = class {
  /**
  * Creates a builder configured for a specific PostgREST request.
  *
  * @example Using supabase-js (recommended)
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const { data, error } = await supabase.from('users').select('*')
  * ```
  *
  * @category Database
  *
  * @example Standalone import for bundle-sensitive environments
  * ```ts
  * import { PostgrestQueryBuilder } from '@supabase/postgrest-js'
  *
  * const builder = new PostgrestQueryBuilder(
  *   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
  *   { headers: new Headers({ apikey: 'your-publishable-key' }) }
  * )
  * ```
  */
  constructor(t) {
    var e, n, r, i, s;
    this.shouldThrowOnError = !1, this.retryEnabled = !0, this.method = t.method, this.url = t.url, this.headers = new Headers(t.headers), this.schema = t.schema, this.body = t.body, this.shouldThrowOnError = (e = t.shouldThrowOnError) !== null && e !== void 0 ? e : !1, this.signal = t.signal, this.isMaybeSingle = (n = t.isMaybeSingle) !== null && n !== void 0 ? n : !1, this.shouldStripNulls = (r = t.shouldStripNulls) !== null && r !== void 0 ? r : !1, this.urlLengthLimit = (i = t.urlLengthLimit) !== null && i !== void 0 ? i : 8e3, this.retryEnabled = (s = t.retry) !== null && s !== void 0 ? s : !0, t.fetch ? this.fetch = t.fetch : this.fetch = fetch;
  }
  /**
  * If there's an error with the query, throwOnError will reject the promise by
  * throwing the error instead of returning it as part of a successful response.
  *
  * {@link https://github.com/supabase/supabase-js/issues/92}
  *
  * @category Database
  * @subcategory Using modifiers
  */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
  * Strip null values from the response data. Properties with `null` values
  * will be omitted from the returned JSON objects.
  *
  * Requires PostgREST 11.2.0+.
  *
  * {@link https://docs.postgrest.org/en/stable/references/api/resource_representation.html#stripped-nulls}
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .stripNulls()
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text, bio text);
  *
  * insert into
  *   characters (id, name, bio)
  * values
  *   (1, 'Luke', null),
  *   (2, 'Leia', 'Princess of Alderaan');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Luke"
  *     },
  *     {
  *       "id": 2,
  *       "name": "Leia",
  *       "bio": "Princess of Alderaan"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  stripNulls() {
    if (this.headers.get("Accept") === "text/csv") throw new Error("stripNulls() cannot be used with csv()");
    return this.shouldStripNulls = !0, this;
  }
  /**
  * Set an HTTP header on this single PostgREST request, overriding any header
  * with the same name set on the client.
  *
  * This is an advanced escape hatch for one-off needs (passing a custom
  * `Authorization` for a single query, attaching a tracing header, etc.).
  * Most callers do not need it: configure client-wide headers via the
  * `headers` option when constructing the client, and authentication via
  * Supabase Auth.
  *
  * @param name - HTTP header name
  * @param value - HTTP header value
  *
  * @category Database
  * @subcategory Using modifiers
  */
  setHeader(t, e) {
    return this.headers = new Headers(this.headers), this.headers.set(t, e), this;
  }
  /**
  * @category Database
  * @subcategory Using modifiers
  *
  * Configure retry behavior for this request.
  *
  * By default, retries are enabled for idempotent requests (GET, HEAD, OPTIONS)
  * that fail with network errors or specific HTTP status codes (503, 520).
  * Retries use exponential backoff (1s, 2s, 4s) with a maximum of 3 attempts.
  *
  * @param enabled - Whether to enable retries for this request
  *
  * @example
  * ```ts
  * // Disable retries for a specific query
  * const { data, error } = await supabase
  *   .from('users')
  *   .select()
  *   .retry(false)
  * ```
  */
  retry(t) {
    return this.retryEnabled = t, this;
  }
  then(t, e) {
    var n = this;
    if (this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers.set("Accept-Profile", this.schema) : this.headers.set("Content-Profile", this.schema)), this.method !== "GET" && this.method !== "HEAD" && this.headers.set("Content-Type", "application/json"), this.shouldStripNulls) {
      const a = this.headers.get("Accept");
      a === "application/vnd.pgrst.object+json" ? this.headers.set("Accept", "application/vnd.pgrst.object+json;nulls=stripped") : (!a || a === "application/json") && this.headers.set("Accept", "application/vnd.pgrst.array+json;nulls=stripped");
    }
    const r = this.fetch;
    let s = (async () => {
      const a = {};
      n.headers.forEach((l, u) => {
        a[u] = l;
      });
      const o = await Li(r, n.url.toString(), {
        method: n.method,
        headers: a,
        body: JSON.stringify(n.body, (l, u) => typeof u == "bigint" ? u.toString() : u),
        signal: n.signal
      }, n.retryEnabled);
      return await n.processResponse(o);
    })();
    return this.shouldThrowOnError || (s = s.catch((a) => {
      var o;
      let l = "", u = "", h = "";
      const c = a == null ? void 0 : a.cause;
      if (c) {
        var f, d, p, y;
        const k = (f = c == null ? void 0 : c.message) !== null && f !== void 0 ? f : "", _ = (d = c == null ? void 0 : c.code) !== null && d !== void 0 ? d : "";
        l = `${(p = a == null ? void 0 : a.name) !== null && p !== void 0 ? p : "FetchError"}: ${a == null ? void 0 : a.message}`, l += `

Caused by: ${(y = c == null ? void 0 : c.name) !== null && y !== void 0 ? y : "Error"}: ${k}`, _ && (l += ` (${_})`), c != null && c.stack && (l += `
${c.stack}`);
      } else {
        var v;
        l = (v = a == null ? void 0 : a.stack) !== null && v !== void 0 ? v : "";
      }
      const w = this.url.toString().length;
      return (a == null ? void 0 : a.name) === "AbortError" || (a == null ? void 0 : a.code) === "ABORT_ERR" ? (h = "", u = "Request was aborted (timeout or manual cancellation)", w > this.urlLengthLimit && (u += `. Note: Your request URL is ${w} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)) : ((c == null ? void 0 : c.name) === "HeadersOverflowError" || (c == null ? void 0 : c.code) === "UND_ERR_HEADERS_OVERFLOW") && (h = "", u = "HTTP headers exceeded server limits (typically 16KB)", w > this.urlLengthLimit && (u += `. Your request URL is ${w} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)), {
        success: !1,
        error: {
          message: `${(o = a == null ? void 0 : a.name) !== null && o !== void 0 ? o : "FetchError"}: ${a == null ? void 0 : a.message}`,
          details: l,
          hint: u,
          code: h
        },
        data: null,
        count: null,
        status: 0,
        statusText: ""
      };
    })), s.then(t, e);
  }
  /**
  * Process a fetch response and return the standardized postgrest response.
  */
  async processResponse(t) {
    var e = this;
    let n = null, r = null, i = null, s = t.status, a = t.statusText;
    if (t.ok) {
      var o, l;
      if (e.method !== "HEAD") {
        var u;
        const d = await t.text();
        if (d !== "") if (e.headers.get("Accept") === "text/csv") r = d;
        else if (e.headers.get("Accept") && (!((u = e.headers.get("Accept")) === null || u === void 0) && u.includes("application/vnd.pgrst.plan+text"))) r = d;
        else try {
          r = JSON.parse(d);
        } catch {
          if (n = { message: d }, r = null, e.shouldThrowOnError) throw new Ve({
            message: d,
            details: "",
            hint: "",
            code: ""
          });
        }
      }
      const c = (o = e.headers.get("Prefer")) === null || o === void 0 ? void 0 : o.match(/count=(exact|planned|estimated)/), f = (l = t.headers.get("content-range")) === null || l === void 0 ? void 0 : l.split("/");
      if (c && f && f.length > 1 && (i = parseInt(f[1])), e.isMaybeSingle && Array.isArray(r)) if (r.length > 1) {
        if (n = {
          code: "PGRST116",
          details: `Results contain ${r.length} rows, application/vnd.pgrst.object+json requires 1 row`,
          hint: null,
          message: "JSON object requested, multiple (or no) rows returned"
        }, r = null, i = null, s = 406, a = "Not Acceptable", e.shouldThrowOnError) {
          var h;
          throw new Ve(qe(qe({}, n), {}, { hint: (h = n.hint) !== null && h !== void 0 ? h : "" }));
        }
      } else r.length === 1 ? r = r[0] : r = null;
    } else {
      const c = await t.text();
      try {
        n = JSON.parse(c), Array.isArray(n) && t.status === 404 && (r = [], n = null, s = 200, a = "OK");
      } catch {
        t.status === 404 && c === "" ? (s = 204, a = "No Content") : n = { message: c };
      }
      if (n && e.shouldThrowOnError) throw new Ve(n);
    }
    return {
      success: n === null,
      error: n,
      data: r,
      count: i,
      status: s,
      statusText: a
    };
  }
  /**
  * Override the type of the returned `data`.
  *
  * @typeParam NewResult - The new result type to override with
  * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
  *
  * @category Database
  * @subcategory Using modifiers
  */
  returns() {
    return this;
  }
  /**
  * Override the type of the returned `data` field in the response.
  *
  * @typeParam NewResult - The new type to cast the response data to
  * @typeParam Options - Optional type configuration (defaults to { merge: true })
  * @typeParam Options.merge - When true, merges the new type with existing return type. When false, replaces the existing types entirely (defaults to true)
  * @example
  * ```typescript
  * // Merge with existing types (default behavior)
  * const query = supabase
  *   .from('users')
  *   .select()
  *   .overrideTypes<{ custom_field: string }>()
  *
  * // Replace existing types completely
  * const replaceQuery = supabase
  *   .from('users')
  *   .select()
  *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
  * ```
  * @returns A PostgrestBuilder instance with the new type
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example Complete Override type of successful response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .overrideTypes<Array<MyType>, { merge: false }>()
  * ```
  *
  * @exampleResponse Complete Override type of successful response
  * ```ts
  * let x: typeof data // MyType[]
  * ```
  *
  * @example Complete Override type of object response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .maybeSingle()
  *   .overrideTypes<MyType, { merge: false }>()
  * ```
  *
  * @exampleResponse Complete Override type of object response
  * ```ts
  * let x: typeof data // MyType | null
  * ```
  *
  * @example Partial Override type of successful response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .overrideTypes<Array<{ status: "A" | "B" }>>()
  * ```
  *
  * @exampleResponse Partial Override type of successful response
  * ```ts
  * let x: typeof data // Array<CountryRowProperties & { status: "A" | "B" }>
  * ```
  *
  * @example Partial Override type of object response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .maybeSingle()
  *   .overrideTypes<{ status: "A" | "B" }>()
  * ```
  *
  * @exampleResponse Partial Override type of object response
  * ```ts
  * let x: typeof data // CountryRowProperties & { status: "A" | "B" } | null
  * ```
  *
  * @example Merge vs replace existing types
  * ```typescript
  * // Merge with existing types (default behavior)
  * const query = supabase
  *   .from('users')
  *   .select()
  *   .overrideTypes<{ custom_field: string }>()
  *
  * // Replace existing types completely
  * const replaceQuery = supabase
  *   .from('users')
  *   .select()
  *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
  * ```
  */
  overrideTypes() {
    return this;
  }
}, ou = class extends au {
  throwOnError() {
    return super.throwOnError();
  }
  /**
  * Perform a SELECT on the query result.
  *
  * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
  * return modified rows. By calling this method, modified rows are returned in
  * `data`.
  *
  * @param columns - The columns to retrieve, separated by commas
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `upsert()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .upsert({ id: 1, name: 'Han Solo' })
  *   .select()
  * ```
  *
  * @exampleSql With `upsert()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Han');
  * ```
  *
  * @exampleResponse With `upsert()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Han Solo"
  *     }
  *   ],
  *   "status": 201,
  *   "statusText": ""
  * }
  * ```
  */
  select(t) {
    let e = !1;
    const n = (t ?? "*").split("").map((r) => /\s/.test(r) && !e ? "" : (r === '"' && (e = !e), r)).join("");
    return this.url.searchParams.set("select", n), this.headers.append("Prefer", "return=representation"), this;
  }
  /**
  * Order the query result by `column`.
  *
  * You can call this method multiple times to order by multiple columns.
  *
  * You can order referenced tables, but it only affects the ordering of the
  * parent table if you use `!inner` in the query.
  *
  * @param column - The column to order by
  * @param options - Named parameters
  * @param options.ascending - If `true`, the result will be in ascending order
  * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
  * `null`s appear last.
  * @param options.referencedTable - Set this to order a referenced table by
  * its columns
  * @param options.foreignTable - Deprecated, use `options.referencedTable`
  * instead
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('id, name')
  *   .order('id', { ascending: false })
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 3,
  *       "name": "Han"
  *     },
  *     {
  *       "id": 2,
  *       "name": "Leia"
  *     },
  *     {
  *       "id": 1,
  *       "name": "Luke"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription On a referenced table
  * Ordering with `referencedTable` doesn't affect the ordering of the
  * parent table.
  *
  * @example On a referenced table
  * ```ts
  *   const { data, error } = await supabase
  *     .from('orchestral_sections')
  *     .select(`
  *       name,
  *       instruments (
  *         name
  *       )
  *     `)
  *     .order('name', { referencedTable: 'instruments', ascending: false })
  *
  * ```
  *
  * @exampleSql On a referenced table
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *   instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 1, 'harp'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse On a referenced table
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "strings",
  *       "instruments": [
  *         {
  *           "name": "violin"
  *         },
  *         {
  *           "name": "harp"
  *         }
  *       ]
  *     },
  *     {
  *       "name": "woodwinds",
  *       "instruments": []
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Order parent table by a referenced table
  * Ordering with `referenced_table(col)` affects the ordering of the
  * parent table.
  *
  * @example Order parent table by a referenced table
  * ```ts
  *   const { data, error } = await supabase
  *     .from('instruments')
  *     .select(`
  *       name,
  *       section:orchestral_sections (
  *         name
  *       )
  *     `)
  *     .order('section(name)', { ascending: true })
  *
  * ```
  *
  * @exampleSql Order parent table by a referenced table
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *   instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 2, 'flute'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse Order parent table by a referenced table
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "violin",
  *       "orchestral_sections": {"name": "strings"}
  *     },
  *     {
  *       "name": "flute",
  *       "orchestral_sections": {"name": "woodwinds"}
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  order(t, { ascending: e = !0, nullsFirst: n, foreignTable: r, referencedTable: i = r } = {}) {
    const s = i ? `${i}.order` : "order", a = this.url.searchParams.get(s);
    return this.url.searchParams.set(s, `${a ? `${a},` : ""}${t}.${e ? "asc" : "desc"}${n === void 0 ? "" : n ? ".nullsfirst" : ".nullslast"}`), this;
  }
  /**
  * Limit the query result by `rows`.
  *
  * @param rows - The maximum number of rows to return
  * @param options - Named parameters
  * @param options.referencedTable - Set this to limit rows of referenced
  * tables instead of the parent table
  * @param options.foreignTable - Deprecated, use `options.referencedTable`
  * instead
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  *   .limit(1)
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Luke"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example On a referenced table
  * ```ts
  * const { data, error } = await supabase
  *   .from('orchestral_sections')
  *   .select(`
  *     name,
  *     instruments (
  *       name
  *     )
  *   `)
  *   .limit(1, { referencedTable: 'instruments' })
  * ```
  *
  * @exampleSql On a referenced table
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *   instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 1, 'harp'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse On a referenced table
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "strings",
  *       "instruments": [
  *         {
  *           "name": "violin"
  *         }
  *       ]
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  limit(t, { foreignTable: e, referencedTable: n = e } = {}) {
    const r = typeof n > "u" ? "limit" : `${n}.limit`;
    return this.url.searchParams.set(r, `${t}`), this;
  }
  /**
  * Limit the query result by starting at an offset `from` and ending at the offset `to`.
  * Only records within this range are returned.
  * This respects the query order and if there is no order clause the range could behave unexpectedly.
  * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
  * and fourth rows of the query.
  *
  * @param from - The starting index from which to limit the result
  * @param to - The last index to which to limit the result
  * @param options - Named parameters
  * @param options.referencedTable - Set this to limit rows of referenced
  * tables instead of the parent table
  * @param options.foreignTable - Deprecated, use `options.referencedTable`
  * instead
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  *   .range(0, 1)
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Luke"
  *     },
  *     {
  *       "name": "Leia"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  range(t, e, { foreignTable: n, referencedTable: r = n } = {}) {
    const i = typeof r > "u" ? "offset" : `${r}.offset`, s = typeof r > "u" ? "limit" : `${r}.limit`;
    return this.url.searchParams.set(i, `${t}`), this.url.searchParams.set(s, `${e - t + 1}`), this;
  }
  /**
  * Set the AbortSignal for the fetch request.
  *
  * @param signal - The AbortSignal to use for the fetch request
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @remarks
  * You can use this to set a timeout for the request.
  *
  * @exampleDescription Aborting requests in-flight
  * You can use an [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) to abort requests.
  * Note that `status` and `statusText` don't mean anything for aborted requests as the request wasn't fulfilled.
  *
  * @example Aborting requests in-flight
  * ```ts
  * const ac = new AbortController()
  *
  * const { data, error } = await supabase
  *   .from('very_big_table')
  *   .select()
  *   .abortSignal(ac.signal)
  *
  * // Abort the request after 100 ms
  * setTimeout(() => ac.abort(), 100)
  * ```
  *
  * @exampleResponse Aborting requests in-flight
  * ```json
  *   {
  *     "error": {
  *       "message": "AbortError: The user aborted a request.",
  *       "details": "",
  *       "hint": "The request was aborted locally via the provided AbortSignal.",
  *       "code": ""
  *     },
  *     "status": 0,
  *     "statusText": ""
  *   }
  *
  * ```
  *
  * @example Set a timeout
  * ```ts
  * const { data, error } = await supabase
  *   .from('very_big_table')
  *   .select()
  *   .abortSignal(AbortSignal.timeout(1000 /* ms *\/))
  * ```
  *
  * @exampleResponse Set a timeout
  * ```json
  *   {
  *     "error": {
  *       "message": "FetchError: The user aborted a request.",
  *       "details": "",
  *       "hint": "",
  *       "code": ""
  *     },
  *     "status": 0,
  *     "statusText": ""
  *   }
  *
  * ```
  */
  abortSignal(t) {
    return this.signal = t, this;
  }
  /**
  * Return `data` as a single object instead of an array of objects.
  *
  * Query result must be one row (e.g. using `.limit(1)`), otherwise this
  * returns an error.
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  *   .limit(1)
  *   .single()
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": {
  *     "name": "Luke"
  *   },
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  single() {
    return this.headers.set("Accept", "application/vnd.pgrst.object+json"), this;
  }
  /**
  * Return `data` as a single object instead of an array of objects.
  *
  * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
  * this returns an error.
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .eq('name', 'Katniss')
  *   .maybeSingle()
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  maybeSingle() {
    return this.isMaybeSingle = !0, this;
  }
  /**
  * Return `data` as a string in CSV format.
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @exampleDescription Return data as CSV
  * By default, the data is returned in JSON format, but can also be returned as Comma Separated Values.
  *
  * @example Return data as CSV
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .csv()
  * ```
  *
  * @exampleSql Return data as CSV
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse Return data as CSV
  * ```json
  * {
  *   "data": "id,name\n1,Luke\n2,Leia\n3,Han",
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  csv() {
    return this.headers.set("Accept", "text/csv"), this;
  }
  /**
  * Return `data` as an object in [GeoJSON](https://geojson.org) format.
  *
  * @category Database
  * @subcategory Using modifiers
  */
  geojson() {
    return this.headers.set("Accept", "application/geo+json"), this;
  }
  /**
  * Return `data` as the EXPLAIN plan for the query.
  *
  * You need to enable the
  * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
  * setting before using this method.
  *
  * @param options - Named parameters
  *
  * @param options.analyze - If `true`, the query will be executed and the
  * actual run time will be returned
  *
  * @param options.verbose - If `true`, the query identifier will be returned
  * and `data` will include the output columns of the query
  *
  * @param options.settings - If `true`, include information on configuration
  * parameters that affect query planning
  *
  * @param options.buffers - If `true`, include information on buffer usage
  *
  * @param options.wal - If `true`, include information on WAL record generation
  *
  * @param options.format - The format of the output, can be `"text"` (default)
  * or `"json"`
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @exampleDescription Get the execution plan
  * By default, the data is returned in TEXT format, but can also be returned as JSON by using the `format` parameter.
  *
  * @example Get the execution plan
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .explain()
  * ```
  *
  * @exampleSql Get the execution plan
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse Get the execution plan
  * ```js
  * Aggregate  (cost=33.34..33.36 rows=1 width=112)
  *   ->  Limit  (cost=0.00..18.33 rows=1000 width=40)
  *         ->  Seq Scan on characters  (cost=0.00..22.00 rows=1200 width=40)
  * ```
  *
  * @exampleDescription Get the execution plan with analyze and verbose
  * By default, the data is returned in TEXT format, but can also be returned as JSON by using the `format` parameter.
  *
  * @example Get the execution plan with analyze and verbose
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .explain({analyze:true,verbose:true})
  * ```
  *
  * @exampleSql Get the execution plan with analyze and verbose
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse Get the execution plan with analyze and verbose
  * ```js
  * Aggregate  (cost=33.34..33.36 rows=1 width=112) (actual time=0.041..0.041 rows=1 loops=1)
  *   Output: NULL::bigint, count(ROW(characters.id, characters.name)), COALESCE(json_agg(ROW(characters.id, characters.name)), '[]'::json), NULLIF(current_setting('response.headers'::text, true), ''::text), NULLIF(current_setting('response.status'::text, true), ''::text)
  *   ->  Limit  (cost=0.00..18.33 rows=1000 width=40) (actual time=0.005..0.006 rows=3 loops=1)
  *         Output: characters.id, characters.name
  *         ->  Seq Scan on public.characters  (cost=0.00..22.00 rows=1200 width=40) (actual time=0.004..0.005 rows=3 loops=1)
  *               Output: characters.id, characters.name
  * Query Identifier: -4730654291623321173
  * Planning Time: 0.407 ms
  * Execution Time: 0.119 ms
  * ```
  */
  explain({ analyze: t = !1, verbose: e = !1, settings: n = !1, buffers: r = !1, wal: i = !1, format: s = "text" } = {}) {
    var a;
    const o = [
      t ? "analyze" : null,
      e ? "verbose" : null,
      n ? "settings" : null,
      r ? "buffers" : null,
      i ? "wal" : null
    ].filter(Boolean).join("|"), l = (a = this.headers.get("Accept")) !== null && a !== void 0 ? a : "application/json";
    return this.headers.set("Accept", `application/vnd.pgrst.plan+${s}; for="${l}"; options=${o};`), s === "json" ? this : this;
  }
  /**
  * Dry-run this request: execute the query but discard the changes.
  *
  * Server-side, PostgREST runs the query inside a transaction and rolls it back
  * instead of committing. The response still contains the data that *would* have
  * been returned — `RETURNING` clauses execute and RLS, triggers, and constraints
  * are all evaluated — but no row is actually inserted, updated, or deleted.
  *
  * This affects only the single request it is chained to. The JS caller has no
  * handle on the transaction: supabase-js does not group multiple queries into
  * one transaction. For multi-statement transactional logic, use a database
  * function (`supabase.rpc(...)`).
  *
  * Sets the `Prefer: tx=rollback` header. See PostgREST's docs on transaction
  * preferences for the underlying mechanism.
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @example Validate an insert without persisting
  * ```ts
  * const { data, error } = await supabase
  *   .from('countries')
  *   .insert({ name: 'France' })
  *   .select()
  *   .rollback()
  * // `data` shows what would have been inserted; nothing is saved.
  * ```
  */
  rollback() {
    return this.headers.append("Prefer", "tx=rollback"), this;
  }
  /**
  * Override the type of the returned `data`.
  *
  * @typeParam NewResult - The new result type to override with
  * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
  *
  * @category Database
  * @subcategory Using modifiers
  *
  * @remarks
  * - Deprecated: use overrideTypes method instead
  *
  * @example Override type of successful response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .returns<Array<MyType>>()
  * ```
  *
  * @exampleResponse Override type of successful response
  * ```js
  * let x: typeof data // MyType[]
  * ```
  *
  * @example Override type of object response
  * ```ts
  * const { data } = await supabase
  *   .from('countries')
  *   .select()
  *   .maybeSingle()
  *   .returns<MyType>()
  * ```
  *
  * @exampleResponse Override type of object response
  * ```js
  * let x: typeof data // MyType | null
  * ```
  */
  returns() {
    return this;
  }
  /**
  * Set the maximum number of rows that can be affected by the query.
  * Only available in PostgREST v13+ and only works with PATCH and DELETE methods.
  *
  * @param rows - The maximum number of rows that can be affected
  *
  * @category Database
  * @subcategory Using modifiers
  */
  maxAffected(t) {
    return this.headers.append("Prefer", "handling=strict"), this.headers.append("Prefer", `max-affected=${t}`), this;
  }
};
const vr = /* @__PURE__ */ new RegExp("[,()]");
var et = class extends ou {
  throwOnError() {
    return super.throwOnError();
  }
  /**
  * Match only rows where `column` is equal to `value`.
  *
  * To check if the value of `column` is NULL, you should use `.is()` instead.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .eq('name', 'Leia')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 2,
  *       "name": "Leia"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  eq(t, e) {
    return this.url.searchParams.append(t, `eq.${e}`), this;
  }
  /**
  * Match only rows where `column` is not equal to `value`.
  *
  * This filter does not include rows where `column` is `NULL`. To match null
  * values, use `.is(column, null)` instead.
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .neq('name', 'Leia')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Luke"
  *     },
  *     {
  *       "id": 3,
  *       "name": "Han"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  neq(t, e) {
    return this.url.searchParams.append(t, `neq.${e}`), this;
  }
  gt(t, e) {
    return this.url.searchParams.append(t, `gt.${e}`), this;
  }
  gte(t, e) {
    return this.url.searchParams.append(t, `gte.${e}`), this;
  }
  lt(t, e) {
    return this.url.searchParams.append(t, `lt.${e}`), this;
  }
  lte(t, e) {
    return this.url.searchParams.append(t, `lte.${e}`), this;
  }
  like(t, e) {
    return this.url.searchParams.append(t, `like.${e}`), this;
  }
  likeAllOf(t, e) {
    return this.url.searchParams.append(t, `like(all).{${e.join(",")}}`), this;
  }
  likeAnyOf(t, e) {
    return this.url.searchParams.append(t, `like(any).{${e.join(",")}}`), this;
  }
  ilike(t, e) {
    return this.url.searchParams.append(t, `ilike.${e}`), this;
  }
  ilikeAllOf(t, e) {
    return this.url.searchParams.append(t, `ilike(all).{${e.join(",")}}`), this;
  }
  ilikeAnyOf(t, e) {
    return this.url.searchParams.append(t, `ilike(any).{${e.join(",")}}`), this;
  }
  regexMatch(t, e) {
    return this.url.searchParams.append(t, `match.${e}`), this;
  }
  regexIMatch(t, e) {
    return this.url.searchParams.append(t, `imatch.${e}`), this;
  }
  is(t, e) {
    return this.url.searchParams.append(t, `is.${e}`), this;
  }
  /**
  * Match only rows where `column` IS DISTINCT FROM `value`.
  *
  * Unlike `.neq()`, this treats `NULL` as a comparable value. Two `NULL` values
  * are considered equal (not distinct), and comparing `NULL` with any non-NULL
  * value returns true (distinct).
  *
  * @param column - The column to filter on
  * @param value - The value to filter with
  */
  isDistinct(t, e) {
    return this.url.searchParams.append(t, `isdistinct.${e}`), this;
  }
  /**
  * Match only rows where `column` is included in the `values` array.
  *
  * @param column - The column to filter on
  * @param values - The values array to filter with
  *
  * @category Database
  * @subcategory Using filters
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  *   .in('name', ['Leia', 'Han'])
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 2,
  *       "name": "Leia"
  *     },
  *     {
  *       "id": 3,
  *       "name": "Han"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  in(t, e) {
    const n = Array.from(new Set(e)).map((r) => typeof r == "string" && vr.test(r) ? `"${r}"` : `${r}`).join(",");
    return this.url.searchParams.append(t, `in.(${n})`), this;
  }
  /**
  * Match only rows where `column` is NOT included in the `values` array.
  *
  * @param column - The column to filter on
  * @param values - The values array to filter with
  */
  notIn(t, e) {
    const n = Array.from(new Set(e)).map((r) => typeof r == "string" && vr.test(r) ? `"${r}"` : `${r}`).join(",");
    return this.url.searchParams.append(t, `not.in.(${n})`), this;
  }
  contains(t, e) {
    return typeof e == "string" ? this.url.searchParams.append(t, `cs.${e}`) : Array.isArray(e) ? this.url.searchParams.append(t, `cs.{${e.join(",")}}`) : this.url.searchParams.append(t, `cs.${JSON.stringify(e)}`), this;
  }
  containedBy(t, e) {
    return typeof e == "string" ? this.url.searchParams.append(t, `cd.${e}`) : Array.isArray(e) ? this.url.searchParams.append(t, `cd.{${e.join(",")}}`) : this.url.searchParams.append(t, `cd.${JSON.stringify(e)}`), this;
  }
  rangeGt(t, e) {
    return this.url.searchParams.append(t, `sr.${e}`), this;
  }
  rangeGte(t, e) {
    return this.url.searchParams.append(t, `nxl.${e}`), this;
  }
  rangeLt(t, e) {
    return this.url.searchParams.append(t, `sl.${e}`), this;
  }
  rangeLte(t, e) {
    return this.url.searchParams.append(t, `nxr.${e}`), this;
  }
  rangeAdjacent(t, e) {
    return this.url.searchParams.append(t, `adj.${e}`), this;
  }
  overlaps(t, e) {
    return typeof e == "string" ? this.url.searchParams.append(t, `ov.${e}`) : this.url.searchParams.append(t, `ov.{${e.join(",")}}`), this;
  }
  textSearch(t, e, { config: n, type: r } = {}) {
    let i = "";
    r === "plain" ? i = "pl" : r === "phrase" ? i = "ph" : r === "websearch" && (i = "w");
    const s = n === void 0 ? "" : `(${n})`;
    return this.url.searchParams.append(t, `${i}fts${s}.${e}`), this;
  }
  match(t) {
    return Object.entries(t).filter(([e, n]) => n !== void 0).forEach(([e, n]) => {
      this.url.searchParams.append(e, `eq.${n}`);
    }), this;
  }
  /**
  * Match only rows which doesn't satisfy the filter.
  *
  * Unlike most filters, `opearator` and `value` are used as-is and need to
  * follow [PostgREST
  * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
  * to make sure they are properly sanitized.
  *
  * @param column - The column to filter on
  * @param operator - The operator to be negated to filter with, following
  * PostgREST syntax
  * @param value - The value to filter with, following PostgREST syntax
  *
  * @category Database
  * @subcategory Using filters
  *
  * @remarks
  * not() expects you to use the raw PostgREST syntax for the filter values.
  *
  * ```ts
  * .not('id', 'in', '(5,6,7)')  // Use `()` for `in` filter
  * .not('arraycol', 'cs', '{"a","b"}')  // Use `cs` for `contains()`, `{}` for array values
  * ```
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('countries')
  *   .select()
  *   .not('name', 'is', null)
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  *
  * insert into
  *   countries (id, name)
  * values
  *   (1, 'null'),
  *   (2, null);
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  *   {
  *     "data": [
  *       {
  *         "id": 1,
  *         "name": "null"
  *       }
  *     ],
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *
  * ```
  */
  not(t, e, n) {
    return this.url.searchParams.append(t, `not.${e}.${n}`), this;
  }
  /**
  * Match only rows which satisfy at least one of the filters.
  *
  * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
  * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
  * to make sure it's properly sanitized.
  *
  * It's currently not possible to do an `.or()` filter across multiple tables.
  *
  * @param filters - The filters to use, following PostgREST syntax
  * @param options - Named parameters
  * @param options.referencedTable - Set this to filter on referenced tables
  * instead of the parent table
  * @param options.foreignTable - Deprecated, use `referencedTable` instead
  *
  * @category Database
  * @subcategory Using filters
  *
  * @remarks
  * or() expects you to use the raw PostgREST syntax for the filter names and values.
  *
  * ```ts
  * .or('id.in.(5,6,7), arraycol.cs.{"a","b"}')  // Use `()` for `in` filter, `{}` for array values and `cs` for `contains()`.
  * .or('id.in.(5,6,7), arraycol.cd.{"a","b"}')  // Use `cd` for `containedBy()`
  * ```
  *
  * @example With `select()`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  *   .or('id.eq.2,name.eq.Han')
  * ```
  *
  * @exampleSql With `select()`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse With `select()`
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Leia"
  *     },
  *     {
  *       "name": "Han"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example Use `or` with `and`
  * ```ts
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  *   .or('id.gt.3,and(id.eq.1,name.eq.Luke)')
  * ```
  *
  * @exampleSql Use `or` with `and`
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse Use `or` with `and`
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Luke"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example Use `or` on referenced tables
  * ```ts
  * const { data, error } = await supabase
  *   .from('orchestral_sections')
  *   .select(`
  *     name,
  *     instruments!inner (
  *       name
  *     )
  *   `)
  *   .or('section_id.eq.1,name.eq.guzheng', { referencedTable: 'instruments' })
  * ```
  *
  * @exampleSql Use `or` on referenced tables
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *   instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 2, 'flute'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse Use `or` on referenced tables
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "strings",
  *       "instruments": [
  *         {
  *           "name": "violin"
  *         }
  *       ]
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  or(t, { foreignTable: e, referencedTable: n = e } = {}) {
    const r = n ? `${n}.or` : "or";
    return this.url.searchParams.append(r, `(${t})`), this;
  }
  filter(t, e, n) {
    return this.url.searchParams.append(t, `${e}.${n}`), this;
  }
}, lu = class {
  /**
  * Creates a query builder scoped to a Postgres table or view.
  *
  * @category Database
  *
  * @param url - The URL for the query
  * @param options - Named parameters
  * @param options.headers - Custom headers
  * @param options.schema - Postgres schema to use
  * @param options.fetch - Custom fetch implementation
  * @param options.urlLengthLimit - Maximum URL length before warning
  * @param options.retry - Enable automatic retries for transient errors (default: true)
  *
  * @example Using supabase-js (recommended)
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const { data, error } = await supabase.from('users').select('*')
  * ```
  *
  * @example Standalone import for bundle-sensitive environments
  * ```ts
  * import { PostgrestQueryBuilder } from '@supabase/postgrest-js'
  *
  * const query = new PostgrestQueryBuilder(
  *   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
  *   { headers: { apikey: 'your-publishable-key' }, retry: true }
  * )
  * ```
  */
  constructor(t, { headers: e = {}, schema: n, fetch: r, urlLengthLimit: i = 8e3, retry: s }) {
    this.url = t, this.headers = new Headers(e), this.schema = n, this.fetch = r, this.urlLengthLimit = i, this.retry = s;
  }
  /**
  * Clone URL and headers to prevent shared state between operations.
  */
  cloneRequestState() {
    return {
      url: new URL(this.url.toString()),
      headers: new Headers(this.headers)
    };
  }
  /**
  * Perform a SELECT query on the table or view.
  *
  * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
  *
  * @param options - Named parameters
  *
  * @param options.head - When set to `true`, `data` will not be returned.
  * Useful if you only need the count.
  *
  * @param options.count - Count algorithm to use to count rows in the table or view.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @remarks
  * When using `count` with `.range()` or `.limit()`, the returned `count` is the total number of rows
  * that match your filters, not the number of rows in the current page. Use this to build pagination UI.
  
  * - By default, Supabase projects return a maximum of 1,000 rows. This setting can be changed in your project's [API settings](/dashboard/project/_/settings/api). It's recommended that you keep it low to limit the payload size of accidental or malicious requests. You can use `range()` queries to paginate through your data.
  * - `select()` can be combined with [Filters](/docs/reference/javascript/using-filters)
  * - `select()` can be combined with [Modifiers](/docs/reference/javascript/using-modifiers)
  * - `apikey` is a reserved keyword if you're using the [Supabase Platform](/docs/guides/platform) and [should be avoided as a column name](https://github.com/supabase/supabase/issues/5465). *
  * @category Database
  *
  * @example Getting your data
  * ```js
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select()
  * ```
  *
  * @exampleSql Getting your data
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Harry'),
  *   (2, 'Frodo'),
  *   (3, 'Katniss');
  * ```
  *
  * @exampleResponse Getting your data
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Harry"
  *     },
  *     {
  *       "id": 2,
  *       "name": "Frodo"
  *     },
  *     {
  *       "id": 3,
  *       "name": "Katniss"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Handling errors
  * The most useful field on a Postgres error is usually `hint` — when the database knows the fix, it puts the literal SQL there. For example, a permission-denied error (`code: '42501'`) arrives with a `hint` like `"Grant the required privileges to the current role with: GRANT SELECT ON public.characters TO anon;"`. Log the full `error` object so the hint isn't hidden behind `error.message`.
  *
  * @example Handling errors
  * ```js
  * const { data, error } = await supabase.from('characters').select()
  * if (error) {
  *   // Logs the full error: message, code, details, and hint.
  *   console.error(error)
  *   return
  * }
  * ```
  *
  * @exampleResponse Handling errors
  * ```json
  * {
  *   "error": {
  *     "code": "42501",
  *     "details": null,
  *     "hint": "Grant the required privileges to the current role with: GRANT SELECT ON public.characters TO anon;",
  *     "message": "permission denied for table characters"
  *   },
  *   "status": 401,
  *   "statusText": ""
  * }
  * ```
  *
  * @example Selecting specific columns
  * ```js
  * const { data, error } = await supabase
  *   .from('characters')
  *   .select('name')
  * ```
  *
  * @exampleSql Selecting specific columns
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Frodo'),
  *   (2, 'Harry'),
  *   (3, 'Katniss');
  * ```
  *
  * @exampleResponse Selecting specific columns
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "Frodo"
  *     },
  *     {
  *       "name": "Harry"
  *     },
  *     {
  *       "name": "Katniss"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Query referenced tables
  * If your database has foreign key relationships, you can query related tables too.
  *
  * @example Query referenced tables
  * ```js
  * const { data, error } = await supabase
  *   .from('orchestral_sections')
  *   .select(`
  *     name,
  *     instruments (
  *       name
  *     )
  *   `)
  * ```
  *
  * @exampleSql Query referenced tables
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *   instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 2, 'flute'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse Query referenced tables
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "strings",
  *       "instruments": [
  *         {
  *           "name": "violin"
  *         }
  *       ]
  *     },
  *     {
  *       "name": "woodwinds",
  *       "instruments": [
  *         {
  *           "name": "flute"
  *         }
  *       ]
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Query referenced tables with spaces in their names
  * If your table name contains spaces, you must use double quotes in the `select` statement to reference the table.
  *
  * @example Query referenced tables with spaces in their names
  * ```js
  * const { data, error } = await supabase
  *   .from('orchestral sections')
  *   .select(`
  *     name,
  *     "musical instruments" (
  *       name
  *     )
  *   `)
  * ```
  *
  * @exampleSql Query referenced tables with spaces in their names
  * ```sql
  * create table
  *   "orchestral sections" (id int8 primary key, name text);
  * create table
  *   "musical instruments" (
  *     id int8 primary key,
  *     section_id int8 not null references "orchestral sections",
  *     name text
  *   );
  *
  * insert into
  *   "orchestral sections" (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   "musical instruments" (id, section_id, name)
  * values
  *   (1, 2, 'flute'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse Query referenced tables with spaces in their names
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "strings",
  *       "musical instruments": [
  *         {
  *           "name": "violin"
  *         }
  *       ]
  *     },
  *     {
  *       "name": "woodwinds",
  *       "musical instruments": [
  *         {
  *           "name": "flute"
  *         }
  *       ]
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Query referenced tables through a join table
  * If you're in a situation where your tables are **NOT** directly
  * related, but instead are joined by a _join table_, you can still use
  * the `select()` method to query the related data. The join table needs
  * to have the foreign keys as part of its composite primary key.
  *
  * @example Query referenced tables through a join table
  * ```ts
  * const { data, error } = await supabase
  *   .from('users')
  *   .select(`
  *     name,
  *     teams (
  *       name
  *     )
  *   `)
  *   
  * ```
  *
  * @exampleSql Query referenced tables through a join table
  * ```sql
  * create table
  *   users (
  *     id int8 primary key,
  *     name text
  *   );
  * create table
  *   teams (
  *     id int8 primary key,
  *     name text
  *   );
  * -- join table
  * create table
  *   users_teams (
  *     user_id int8 not null references users,
  *     team_id int8 not null references teams,
  *     -- both foreign keys must be part of a composite primary key
  *     primary key (user_id, team_id)
  *   );
  *
  * insert into
  *   users (id, name)
  * values
  *   (1, 'Kiran'),
  *   (2, 'Evan');
  * insert into
  *   teams (id, name)
  * values
  *   (1, 'Green'),
  *   (2, 'Blue');
  * insert into
  *   users_teams (user_id, team_id)
  * values
  *   (1, 1),
  *   (1, 2),
  *   (2, 2);
  * ```
  *
  * @exampleResponse Query referenced tables through a join table
  * ```json
  *   {
  *     "data": [
  *       {
  *         "name": "Kiran",
  *         "teams": [
  *           {
  *             "name": "Green"
  *           },
  *           {
  *             "name": "Blue"
  *           }
  *         ]
  *       },
  *       {
  *         "name": "Evan",
  *         "teams": [
  *           {
  *             "name": "Blue"
  *           }
  *         ]
  *       }
  *     ],
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *   
  * ```
  *
  * @exampleDescription Query the same referenced table multiple times
  * If you need to query the same referenced table twice, use the name of the
  * joined column to identify which join to use. You can also give each
  * column an alias.
  *
  * @example Query the same referenced table multiple times
  * ```ts
  * const { data, error } = await supabase
  *   .from('messages')
  *   .select(`
  *     content,
  *     from:sender_id(name),
  *     to:receiver_id(name)
  *   `)
  *
  * // To infer types, use the name of the table (in this case `users`) and
  * // the name of the foreign key constraint.
  * const { data, error } = await supabase
  *   .from('messages')
  *   .select(`
  *     content,
  *     from:users!messages_sender_id_fkey(name),
  *     to:users!messages_receiver_id_fkey(name)
  *   `)
  * ```
  *
  * @exampleSql Query the same referenced table multiple times
  * ```sql
  *  create table
  *  users (id int8 primary key, name text);
  *
  *  create table
  *    messages (
  *      sender_id int8 not null references users,
  *      receiver_id int8 not null references users,
  *      content text
  *    );
  *
  *  insert into
  *    users (id, name)
  *  values
  *    (1, 'Kiran'),
  *    (2, 'Evan');
  *
  *  insert into
  *    messages (sender_id, receiver_id, content)
  *  values
  *    (1, 2, '👋');
  *  ```
  * ```
  *
  * @exampleResponse Query the same referenced table multiple times
  * ```json
  * {
  *   "data": [
  *     {
  *       "content": "👋",
  *       "from": {
  *         "name": "Kiran"
  *       },
  *       "to": {
  *         "name": "Evan"
  *       }
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Query nested foreign tables through a join table
  * You can use the result of a joined table to gather data in
  * another foreign table. With multiple references to the same foreign
  * table you must specify the column on which to conduct the join.
  *
  * @example Query nested foreign tables through a join table
  * ```ts
  *   const { data, error } = await supabase
  *     .from('games')
  *     .select(`
  *       game_id:id,
  *       away_team:teams!games_away_team_fkey (
  *         users (
  *           id,
  *           name
  *         )
  *       )
  *     `)
  *   
  * ```
  *
  * @exampleSql Query nested foreign tables through a join table
  * ```sql
  * ```sql
  * create table
  *   users (
  *     id int8 primary key,
  *     name text
  *   );
  * create table
  *   teams (
  *     id int8 primary key,
  *     name text
  *   );
  * -- join table
  * create table
  *   users_teams (
  *     user_id int8 not null references users,
  *     team_id int8 not null references teams,
  *
  *     primary key (user_id, team_id)
  *   );
  * create table
  *   games (
  *     id int8 primary key,
  *     home_team int8 not null references teams,
  *     away_team int8 not null references teams,
  *     name text
  *   );
  *
  * insert into users (id, name)
  * values
  *   (1, 'Kiran'),
  *   (2, 'Evan');
  * insert into
  *   teams (id, name)
  * values
  *   (1, 'Green'),
  *   (2, 'Blue');
  * insert into
  *   users_teams (user_id, team_id)
  * values
  *   (1, 1),
  *   (1, 2),
  *   (2, 2);
  * insert into
  *   games (id, home_team, away_team, name)
  * values
  *   (1, 1, 2, 'Green vs Blue'),
  *   (2, 2, 1, 'Blue vs Green');
  * ```
  *
  * @exampleResponse Query nested foreign tables through a join table
  * ```json
  *   {
  *     "data": [
  *       {
  *         "game_id": 1,
  *         "away_team": {
  *           "users": [
  *             {
  *               "id": 1,
  *               "name": "Kiran"
  *             },
  *             {
  *               "id": 2,
  *               "name": "Evan"
  *             }
  *           ]
  *         }
  *       },
  *       {
  *         "game_id": 2,
  *         "away_team": {
  *           "users": [
  *             {
  *               "id": 1,
  *               "name": "Kiran"
  *             }
  *           ]
  *         }
  *       }
  *     ],
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *   
  * ```
  *
  * @exampleDescription Filtering through referenced tables
  * If the filter on a referenced table's column is not satisfied, the referenced
  * table returns `[]` or `null` but the parent table is not filtered out.
  * If you want to filter out the parent table rows, use the `!inner` hint
  *
  * @example Filtering through referenced tables
  * ```ts
  * const { data, error } = await supabase
  *   .from('instruments')
  *   .select('name, orchestral_sections(*)')
  *   .eq('orchestral_sections.name', 'percussion')
  * ```
  *
  * @exampleSql Filtering through referenced tables
  * ```sql
  * create table
  *   orchestral_sections (id int8 primary key, name text);
  * create table
  *   instruments (
  *     id int8 primary key,
  *     section_id int8 not null references orchestral_sections,
  *     name text
  *   );
  *
  * insert into
  *   orchestral_sections (id, name)
  * values
  *   (1, 'strings'),
  *   (2, 'woodwinds');
  * insert into
  *   instruments (id, section_id, name)
  * values
  *   (1, 2, 'flute'),
  *   (2, 1, 'violin');
  * ```
  *
  * @exampleResponse Filtering through referenced tables
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "flute",
  *       "orchestral_sections": null
  *     },
  *     {
  *       "name": "violin",
  *       "orchestral_sections": null
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Querying referenced table with count
  * You can get the number of rows in a related table by using the
  * **count** property.
  *
  * @example Querying referenced table with count
  * ```ts
  * const { data, error } = await supabase
  *   .from('orchestral_sections')
  *   .select(`*, instruments(count)`)
  * ```
  *
  * @exampleSql Querying referenced table with count
  * ```sql
  * create table orchestral_sections (
  *   "id" "uuid" primary key default "extensions"."uuid_generate_v4"() not null,
  *   "name" text
  * );
  *
  * create table characters (
  *   "id" "uuid" primary key default "extensions"."uuid_generate_v4"() not null,
  *   "name" text,
  *   "section_id" "uuid" references public.orchestral_sections on delete cascade
  * );
  *
  * with section as (
  *   insert into orchestral_sections (name)
  *   values ('strings') returning id
  * )
  * insert into instruments (name, section_id) values
  * ('violin', (select id from section)),
  * ('viola', (select id from section)),
  * ('cello', (select id from section)),
  * ('double bass', (select id from section));
  * ```
  *
  * @exampleResponse Querying referenced table with count
  * ```json
  * [
  *   {
  *     "id": "693694e7-d993-4360-a6d7-6294e325d9b6",
  *     "name": "strings",
  *     "instruments": [
  *       {
  *         "count": 4
  *       }
  *     ]
  *   }
  * ]
  * ```
  *
  * @exampleDescription Querying with count option
  * You can get the number of rows by using the
  * [count](/docs/reference/javascript/select#parameters) option.
  *
  * @example Querying with count option
  * ```ts
  * const { count, error } = await supabase
  *   .from('characters')
  *   .select('*', { count: 'exact', head: true })
  * ```
  *
  * @exampleSql Querying with count option
  * ```sql
  * create table
  *   characters (id int8 primary key, name text);
  *
  * insert into
  *   characters (id, name)
  * values
  *   (1, 'Luke'),
  *   (2, 'Leia'),
  *   (3, 'Han');
  * ```
  *
  * @exampleResponse Querying with count option
  * ```json
  * {
  *   "count": 3,
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Querying JSON data
  * You can select and filter data inside of
  * [JSON](/docs/guides/database/json) columns. Postgres offers some
  * [operators](/docs/guides/database/json#query-the-jsonb-data) for
  * querying JSON data.
  *
  * @example Querying JSON data
  * ```ts
  * const { data, error } = await supabase
  *   .from('users')
  *   .select(`
  *     id, name,
  *     address->city
  *   `)
  * ```
  *
  * @exampleSql Querying JSON data
  * ```sql
  * create table
  *   users (
  *     id int8 primary key,
  *     name text,
  *     address jsonb
  *   );
  *
  * insert into
  *   users (id, name, address)
  * values
  *   (1, 'Frodo', '{"city":"Hobbiton"}');
  * ```
  *
  * @exampleResponse Querying JSON data
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Frodo",
  *       "city": "Hobbiton"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Querying referenced table with inner join
  * If you don't want to return the referenced table contents, you can leave the parenthesis empty.
  * Like `.select('name, orchestral_sections!inner()')`.
  *
  * @example Querying referenced table with inner join
  * ```ts
  * const { data, error } = await supabase
  *   .from('instruments')
  *   .select('name, orchestral_sections!inner(name)')
  *   .eq('orchestral_sections.name', 'woodwinds')
  *   .limit(1)
  * ```
  *
  * @exampleSql Querying referenced table with inner join
  * ```sql
  * create table orchestral_sections (
  *   "id" "uuid" primary key default "extensions"."uuid_generate_v4"() not null,
  *   "name" text
  * );
  *
  * create table instruments (
  *   "id" "uuid" primary key default "extensions"."uuid_generate_v4"() not null,
  *   "name" text,
  *   "section_id" "uuid" references public.orchestral_sections on delete cascade
  * );
  *
  * with section as (
  *   insert into orchestral_sections (name)
  *   values ('woodwinds') returning id
  * )
  * insert into instruments (name, section_id) values
  * ('flute', (select id from section)),
  * ('clarinet', (select id from section)),
  * ('bassoon', (select id from section)),
  * ('piccolo', (select id from section));
  * ```
  *
  * @exampleResponse Querying referenced table with inner join
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "flute",
  *       "orchestral_sections": {"name": "woodwinds"}
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Switching schemas per query
  * In addition to setting the schema during initialization, you can also switch schemas on a per-query basis.
  * Make sure you've set up your [database privileges and API settings](/docs/guides/api/using-custom-schemas).
  *
  * @example Switching schemas per query
  * ```ts
  * const { data, error } = await supabase
  *   .schema('myschema')
  *   .from('mytable')
  *   .select()
  * ```
  *
  * @exampleSql Switching schemas per query
  * ```sql
  * create schema myschema;
  *
  * create table myschema.mytable (
  *   id uuid primary key default gen_random_uuid(),
  *   data text
  * );
  *
  * insert into myschema.mytable (data) values ('mydata');
  * ```
  *
  * @exampleResponse Switching schemas per query
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": "4162e008-27b0-4c0f-82dc-ccaeee9a624d",
  *       "data": "mydata"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  select(t, e) {
    const { head: n = !1, count: r } = e ?? {}, i = n ? "HEAD" : "GET";
    let s = !1;
    const a = (t ?? "*").split("").map((u) => /\s/.test(u) && !s ? "" : (u === '"' && (s = !s), u)).join(""), { url: o, headers: l } = this.cloneRequestState();
    return o.searchParams.set("select", a), r && l.append("Prefer", `count=${r}`), new et({
      method: i,
      url: o,
      headers: l,
      schema: this.schema,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Perform an INSERT into the table or view.
  *
  * By default, inserted rows are not returned. To return it, chain the call
  * with `.select()`.
  *
  * @param values - The values to insert. Pass an object to insert a single row
  * or an array to insert multiple rows.
  *
  * @param options - Named parameters
  *
  * @param options.count - Count algorithm to use to count inserted rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @param options.defaultToNull - Make missing fields default to `null`.
  * Otherwise, use the default value for the column. Only applies for bulk
  * inserts.
  *
  * @category Database
  *
  * @example Create a record
  * ```ts
  * const { error } = await supabase
  *   .from('countries')
  *   .insert({ id: 1, name: 'Mordor' })
  * ```
  *
  * @exampleSql Create a record
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  * ```
  *
  * @exampleResponse Create a record
  * ```json
  * {
  *   "status": 201,
  *   "statusText": ""
  * }
  * ```
  *
  * @exampleDescription Handling errors
  * `error.hint` from Postgres often contains the actionable fix (e.g. `"Grant the required privileges to the current role with: GRANT INSERT ON public.countries TO anon;"` for a `42501` permission-denied error). Log the full `error` object so it isn't hidden behind `error.message`.
  *
  * @example Handling errors
  * ```js
  * const { error } = await supabase.from('countries').insert({ id: 1, name: 'Mordor' })
  * if (error) console.error(error)
  * ```
  *
  * @example Create a record and return it
  * ```ts
  * const { data, error } = await supabase
  *   .from('countries')
  *   .insert({ id: 1, name: 'Mordor' })
  *   .select()
  * ```
  *
  * @exampleSql Create a record and return it
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  * ```
  *
  * @exampleResponse Create a record and return it
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Mordor"
  *     }
  *   ],
  *   "status": 201,
  *   "statusText": ""
  * }
  * ```
  *
  * @exampleDescription Bulk create
  * A bulk create operation is handled in a single transaction.
  * If any of the inserts fail, none of the rows are inserted.
  *
  * @example Bulk create
  * ```ts
  * const { error } = await supabase
  *   .from('countries')
  *   .insert([
  *     { id: 1, name: 'Mordor' },
  *     { id: 1, name: 'The Shire' },
  *   ])
  * ```
  *
  * @exampleSql Bulk create
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  * ```
  *
  * @exampleResponse Bulk create
  * ```json
  * {
  *   "error": {
  *     "code": "23505",
  *     "details": "Key (id)=(1) already exists.",
  *     "hint": null,
  *     "message": "duplicate key value violates unique constraint \"countries_pkey\""
  *   },
  *   "status": 409,
  *   "statusText": ""
  * }
  * ```
  */
  insert(t, { count: e, defaultToNull: n = !0 } = {}) {
    var r;
    const i = "POST", { url: s, headers: a } = this.cloneRequestState();
    if (e && a.append("Prefer", `count=${e}`), n || a.append("Prefer", "missing=default"), Array.isArray(t)) {
      const o = t.reduce((l, u) => l.concat(Object.keys(u)), []);
      if (o.length > 0) {
        const l = [...new Set(o)].map((u) => `"${u}"`);
        s.searchParams.set("columns", l.join(","));
      }
    }
    return new et({
      method: i,
      url: s,
      headers: a,
      schema: this.schema,
      body: t,
      fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Perform an UPSERT on the table or view. Depending on the column(s) passed
  * to `onConflict`, `.upsert()` allows you to perform the equivalent of
  * `.insert()` if a row with the corresponding `onConflict` columns doesn't
  * exist, or if it does exist, perform an alternative action depending on
  * `ignoreDuplicates`.
  *
  * By default, upserted rows are not returned. To return it, chain the call
  * with `.select()`.
  *
  * @param values - The values to upsert with. Pass an object to upsert a
  * single row or an array to upsert multiple rows.
  *
  * @param options - Named parameters
  *
  * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
  * duplicate rows are determined. Two rows are duplicates if all the
  * `onConflict` columns are equal.
  *
  * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
  * `false`, duplicate rows are merged with existing rows.
  *
  * @param options.count - Count algorithm to use to count upserted rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @param options.defaultToNull - Make missing fields default to `null`.
  * Otherwise, use the default value for the column. This only applies when
  * inserting new rows, not when merging with existing rows under
  * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
  *
  * @example Upsert a single row using a unique key
  * ```ts
  * // Upserting a single row, overwriting based on the 'username' unique column
  * const { data, error } = await supabase
  *   .from('users')
  *   .upsert({ username: 'supabot' }, { onConflict: 'username' })
  *
  * // Example response:
  * // {
  * //   data: [
  * //     { id: 4, message: 'bar', username: 'supabot' }
  * //   ],
  * //   error: null
  * // }
  * ```
  *
  * @example Upsert with conflict resolution and exact row counting
  * ```ts
  * // Upserting and returning exact count
  * const { data, error, count } = await supabase
  *   .from('users')
  *   .upsert(
  *     {
  *       id: 3,
  *       message: 'foo',
  *       username: 'supabot'
  *     },
  *     {
  *       onConflict: 'username',
  *       count: 'exact'
  *     }
  *   )
  *
  * // Example response:
  * // {
  * //   data: [
  * //     {
  * //       id: 42,
  * //       handle: "saoirse",
  * //       display_name: "Saoirse"
  * //     }
  * //   ],
  * //   count: 1,
  * //   error: null
  * // }
  * ```
  *
  * @category Database
  *
  * @remarks
  * - Primary keys must be included in `values` to use upsert.
  *
  * @example Upsert your data
  * ```ts
  * const { data, error } = await supabase
  *   .from('instruments')
  *   .upsert({ id: 1, name: 'piano' })
  *   .select()
  * ```
  *
  * @exampleSql Upsert your data
  * ```sql
  * create table
  *   instruments (id int8 primary key, name text);
  *
  * insert into
  *   instruments (id, name)
  * values
  *   (1, 'harpsichord');
  * ```
  *
  * @exampleResponse Upsert your data
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "piano"
  *     }
  *   ],
  *   "status": 201,
  *   "statusText": ""
  * }
  * ```
  *
  * @exampleDescription Handling errors
  * `error.hint` from Postgres often contains the actionable fix (e.g. `"Grant the required privileges to the current role with: GRANT INSERT, UPDATE ON public.instruments TO anon;"` for a `42501` permission-denied error). Log the full `error` object so it isn't hidden behind `error.message`.
  *
  * @example Handling errors
  * ```js
  * const { data, error } = await supabase.from('instruments').upsert({ id: 1, name: 'piano' }).select()
  * if (error) console.error(error)
  * ```
  *
  * @example Bulk Upsert your data
  * ```ts
  * const { data, error } = await supabase
  *   .from('instruments')
  *   .upsert([
  *     { id: 1, name: 'piano' },
  *     { id: 2, name: 'harp' },
  *   ])
  *   .select()
  * ```
  *
  * @exampleSql Bulk Upsert your data
  * ```sql
  * create table
  *   instruments (id int8 primary key, name text);
  *
  * insert into
  *   instruments (id, name)
  * values
  *   (1, 'harpsichord');
  * ```
  *
  * @exampleResponse Bulk Upsert your data
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "piano"
  *     },
  *     {
  *       "id": 2,
  *       "name": "harp"
  *     }
  *   ],
  *   "status": 201,
  *   "statusText": ""
  * }
  * ```
  *
  * @exampleDescription Upserting into tables with constraints
  * In the following query, `upsert()` implicitly uses the `id`
  * (primary key) column to determine conflicts. If there is no existing
  * row with the same `id`, `upsert()` inserts a new row, which
  * will fail in this case as there is already a row with `handle` `"saoirse"`.
  * Using the `onConflict` option, you can instruct `upsert()` to use
  * another column with a unique constraint to determine conflicts.
  *
  * @example Upserting into tables with constraints
  * ```ts
  * const { data, error } = await supabase
  *   .from('users')
  *   .upsert({ id: 42, handle: 'saoirse', display_name: 'Saoirse' })
  *   .select()
  * ```
  *
  * @exampleSql Upserting into tables with constraints
  * ```sql
  * create table
  *   users (
  *     id int8 generated by default as identity primary key,
  *     handle text not null unique,
  *     display_name text
  *   );
  *
  * insert into
  *   users (id, handle, display_name)
  * values
  *   (1, 'saoirse', null);
  * ```
  *
  * @exampleResponse Upserting into tables with constraints
  * ```json
  * {
  *   "error": {
  *     "code": "23505",
  *     "details": "Key (handle)=(saoirse) already exists.",
  *     "hint": null,
  *     "message": "duplicate key value violates unique constraint \"users_handle_key\""
  *   },
  *   "status": 409,
  *   "statusText": ""
  * }
  * ```
  */
  upsert(t, { onConflict: e, ignoreDuplicates: n = !1, count: r, defaultToNull: i = !0 } = {}) {
    var s;
    const a = "POST", { url: o, headers: l } = this.cloneRequestState();
    if (l.append("Prefer", `resolution=${n ? "ignore" : "merge"}-duplicates`), e !== void 0 && o.searchParams.set("on_conflict", e), r && l.append("Prefer", `count=${r}`), i || l.append("Prefer", "missing=default"), Array.isArray(t)) {
      const u = t.reduce((h, c) => h.concat(Object.keys(c)), []);
      if (u.length > 0) {
        const h = [...new Set(u)].map((c) => `"${c}"`);
        o.searchParams.set("columns", h.join(","));
      }
    }
    return new et({
      method: a,
      url: o,
      headers: l,
      schema: this.schema,
      body: t,
      fetch: (s = this.fetch) !== null && s !== void 0 ? s : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Perform an UPDATE on the table or view.
  *
  * By default, updated rows are not returned. To return it, chain the call
  * with `.select()` after filters.
  *
  * @param values - The values to update with
  *
  * @param options - Named parameters
  *
  * @param options.count - Count algorithm to use to count updated rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @category Database
  *
  * @remarks
  * - `update()` should always be combined with [Filters](/docs/reference/javascript/using-filters) to target the item(s) you wish to update.
  *
  * @example Updating your data
  * ```ts
  * const { error } = await supabase
  *   .from('instruments')
  *   .update({ name: 'piano' })
  *   .eq('id', 1)
  * ```
  *
  * @exampleSql Updating your data
  * ```sql
  * create table
  *   instruments (id int8 primary key, name text);
  *
  * insert into
  *   instruments (id, name)
  * values
  *   (1, 'harpsichord');
  * ```
  *
  * @exampleResponse Updating your data
  * ```json
  * {
  *   "status": 204,
  *   "statusText": ""
  * }
  * ```
  *
  * @exampleDescription Handling errors
  * `error.hint` from Postgres often contains the actionable fix (e.g. `"Grant the required privileges to the current role with: GRANT UPDATE ON public.instruments TO anon;"` for a `42501` permission-denied error). Log the full `error` object so it isn't hidden behind `error.message`.
  *
  * @example Handling errors
  * ```js
  * const { error } = await supabase.from('instruments').update({ name: 'piano' }).eq('id', 1)
  * if (error) console.error(error)
  * ```
  *
  * @example Update a record and return it
  * ```ts
  * const { data, error } = await supabase
  *   .from('instruments')
  *   .update({ name: 'piano' })
  *   .eq('id', 1)
  *   .select()
  * ```
  *
  * @exampleSql Update a record and return it
  * ```sql
  * create table
  *   instruments (id int8 primary key, name text);
  *
  * insert into
  *   instruments (id, name)
  * values
  *   (1, 'harpsichord');
  * ```
  *
  * @exampleResponse Update a record and return it
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "piano"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Updating JSON data
  * Postgres offers some
  * [operators](/docs/guides/database/json#query-the-jsonb-data) for
  * working with JSON data. Currently, it is only possible to update the entire JSON document.
  *
  * @example Updating JSON data
  * ```ts
  * const { data, error } = await supabase
  *   .from('users')
  *   .update({
  *     address: {
  *       street: 'Melrose Place',
  *       postcode: 90210
  *     }
  *   })
  *   .eq('address->postcode', 90210)
  *   .select()
  * ```
  *
  * @exampleSql Updating JSON data
  * ```sql
  * create table
  *   users (
  *     id int8 primary key,
  *     name text,
  *     address jsonb
  *   );
  *
  * insert into
  *   users (id, name, address)
  * values
  *   (1, 'Michael', '{ "postcode": 90210 }');
  * ```
  *
  * @exampleResponse Updating JSON data
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Michael",
  *       "address": {
  *         "street": "Melrose Place",
  *         "postcode": 90210
  *       }
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  update(t, { count: e } = {}) {
    var n;
    const r = "PATCH", { url: i, headers: s } = this.cloneRequestState();
    return e && s.append("Prefer", `count=${e}`), new et({
      method: r,
      url: i,
      headers: s,
      schema: this.schema,
      body: t,
      fetch: (n = this.fetch) !== null && n !== void 0 ? n : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Perform a DELETE on the table or view.
  *
  * By default, deleted rows are not returned. To return it, chain the call
  * with `.select()` after filters.
  *
  * @param options - Named parameters
  *
  * @param options.count - Count algorithm to use to count deleted rows.
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @category Database
  *
  * @remarks
  * - `delete()` should always be combined with [filters](/docs/reference/javascript/using-filters) to target the item(s) you wish to delete.
  * - If you use `delete()` with filters and you have
  *   [RLS](/docs/learn/auth-deep-dive/auth-row-level-security) enabled, only
  *   rows visible through `SELECT` policies are deleted. Note that by default
  *   no rows are visible, so you need at least one `SELECT`/`ALL` policy that
  *   makes the rows visible.
  * - When using `delete().in()`, specify an array of values to target multiple rows with a single query. This is particularly useful for batch deleting entries that share common criteria, such as deleting users by their IDs. Ensure that the array you provide accurately represents all records you intend to delete to avoid unintended data removal.
  *
  * @example Delete a single record
  * ```ts
  * const response = await supabase
  *   .from('countries')
  *   .delete()
  *   .eq('id', 1)
  * ```
  *
  * @exampleSql Delete a single record
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  *
  * insert into
  *   countries (id, name)
  * values
  *   (1, 'Mordor');
  * ```
  *
  * @exampleResponse Delete a single record
  * ```json
  * {
  *   "status": 204,
  *   "statusText": ""
  * }
  * ```
  *
  * @exampleDescription Handling errors
  * `error.hint` from Postgres often contains the actionable fix (e.g. `"Grant the required privileges to the current role with: GRANT DELETE ON public.countries TO anon;"` for a `42501` permission-denied error). Log the full `error` object so it isn't hidden behind `error.message`.
  *
  * @example Handling errors
  * ```js
  * const { error } = await supabase.from('countries').delete().eq('id', 1)
  * if (error) console.error(error)
  * ```
  *
  * @example Delete a record and return it
  * ```ts
  * const { data, error } = await supabase
  *   .from('countries')
  *   .delete()
  *   .eq('id', 1)
  *   .select()
  * ```
  *
  * @exampleSql Delete a record and return it
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  *
  * insert into
  *   countries (id, name)
  * values
  *   (1, 'Mordor');
  * ```
  *
  * @exampleResponse Delete a record and return it
  * ```json
  * {
  *   "data": [
  *     {
  *       "id": 1,
  *       "name": "Mordor"
  *     }
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example Delete multiple records
  * ```ts
  * const response = await supabase
  *   .from('countries')
  *   .delete()
  *   .in('id', [1, 2, 3])
  * ```
  *
  * @exampleSql Delete multiple records
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  *
  * insert into
  *   countries (id, name)
  * values
  *   (1, 'Rohan'), (2, 'The Shire'), (3, 'Mordor');
  * ```
  *
  * @exampleResponse Delete multiple records
  * ```json
  * {
  *   "status": 204,
  *   "statusText": ""
  * }
  * ```
  */
  delete({ count: t } = {}) {
    var e;
    const n = "DELETE", { url: r, headers: i } = this.cloneRequestState();
    return t && i.append("Prefer", `count=${t}`), new et({
      method: n,
      url: r,
      headers: i,
      schema: this.schema,
      fetch: (e = this.fetch) !== null && e !== void 0 ? e : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
};
function uu(t, e) {
  try {
    const a = JSON.parse(t);
    if (a && typeof a == "object" && !Array.isArray(a)) {
      var n, r, i, s;
      return new Ve({
        message: String((n = a.message) !== null && n !== void 0 ? n : t),
        details: (r = a.details) !== null && r !== void 0 ? r : "",
        hint: (i = a.hint) !== null && i !== void 0 ? i : "",
        code: (s = a.code) !== null && s !== void 0 ? s : ""
      });
    }
  } catch {
  }
  return new Ve({
    message: t || e,
    details: "",
    hint: "",
    code: ""
  });
}
function _r(t, e, n) {
  var r;
  const i = t;
  return {
    success: !1,
    error: new Ve({
      message: `${(r = i == null ? void 0 : i.name) !== null && r !== void 0 ? r : "FetchError"}: ${i == null ? void 0 : i.message}`,
      details: "",
      hint: "",
      code: ""
    }),
    data: null,
    count: null,
    status: e,
    statusText: n
  };
}
var cu = class $i {
  /**
  * Creates a PostgREST client.
  *
  * @param url - URL of the PostgREST endpoint
  * @param options - Named parameters
  * @param options.headers - Custom headers
  * @param options.schema - Postgres schema to switch to
  * @param options.fetch - Custom fetch
  * @param options.timeout - Optional timeout in milliseconds for all requests. When set, requests will automatically abort after this duration to prevent indefinite hangs.
  * @param options.urlLengthLimit - Maximum URL length in characters before warnings/errors are triggered. Defaults to 8000.
  * @param options.retry - Enable or disable automatic retries for transient errors.
  *   When enabled, idempotent requests (GET, HEAD, OPTIONS) that fail with network
  *   errors or HTTP 503/520 responses will be automatically retried up to 3 times
  *   with exponential backoff (1s, 2s, 4s). Defaults to `true`.
  * @example Using supabase-js (recommended)
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const { data, error } = await supabase.from('profiles').select('*')
  * ```
  *
  * @category Database
  *
  * @remarks
  * - A `timeout` option (in milliseconds) can be set to automatically abort requests that take too long.
  * - A `urlLengthLimit` option (default: 8000) can be set to control when URL length warnings are included in error messages for aborted requests.
  *
  * @example Standalone import for bundle-sensitive environments
  * ```ts
  * import { PostgrestClient } from '@supabase/postgrest-js'
  *
  * const postgrest = new PostgrestClient('https://xyzcompany.supabase.co/rest/v1', {
  *   headers: { apikey: 'your-publishable-key' },
  *   schema: 'public',
  *   timeout: 30000, // 30 second timeout
  * })
  * ```
  */
  constructor(e, { headers: n = {}, schema: r, fetch: i, timeout: s, urlLengthLimit: a = 8e3, retry: o } = {}) {
    this.url = e, this.headers = new Headers(n), this.schemaName = r, this.urlLengthLimit = a;
    const l = i ?? globalThis.fetch;
    s !== void 0 && s > 0 ? this.fetch = (u, h) => {
      const c = new AbortController(), f = setTimeout(() => c.abort(), s), d = h == null ? void 0 : h.signal;
      if (d) {
        if (d.aborted)
          return clearTimeout(f), l(u, h);
        const p = () => {
          clearTimeout(f), c.abort();
        };
        return d.addEventListener("abort", p, { once: !0 }), l(u, qe(qe({}, h), {}, { signal: c.signal })).finally(() => {
          clearTimeout(f), d.removeEventListener("abort", p);
        });
      }
      return l(u, qe(qe({}, h), {}, { signal: c.signal })).finally(() => clearTimeout(f));
    } : this.fetch = l, this.retry = o;
  }
  from(e) {
    if (!e || typeof e != "string" || e.trim() === "") throw new Error("Invalid relation name: relation must be a non-empty string.");
    return new lu(new URL(`${this.url}/${e}`), {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Select a schema to query or perform an function (rpc) call.
  *
  * The schema needs to be on the list of exposed schemas inside Supabase.
  *
  * @param schema - The schema to query
  *
  * @category Database
  */
  schema(e) {
    return new $i(this.url, {
      headers: this.headers,
      schema: e,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
  /**
  * Fetch the OpenAPI description PostgREST publishes for this client's schema.
  *
  * The document lists only the tables, views and functions the caller's role
  * holds privileges on; PostgREST applies that filtering server-side. The
  * schema is the one this client was created with, so call `.schema()` first
  * to describe a different one. Transient failures are retried according to
  * the client's `retry` option, like any other idempotent request.
  *
  * @example
  * ```ts
  * const { data, error } = await supabase.getOpenApiSpec()
  * ```
  *
  * @example Describe a schema other than the client default
  * ```ts
  * const { data, error } = await supabase.schema('billing').getOpenApiSpec()
  * ```
  *
  * @category Database
  */
  async getOpenApiSpec() {
    var e = this, n;
    const r = new Headers(e.headers);
    r.set("Accept", "application/openapi+json"), e.schemaName && r.set("Accept-Profile", e.schemaName);
    const i = {};
    r.forEach((u, h) => {
      i[h] = u;
    });
    const s = (n = e.fetch) !== null && n !== void 0 ? n : globalThis.fetch;
    let a;
    try {
      var o;
      a = await Li(s, `${e.url}/`, {
        method: "GET",
        headers: i
      }, (o = e.retry) !== null && o !== void 0 ? o : !0);
    } catch (u) {
      return _r(u, 0, "");
    }
    let l;
    try {
      l = await a.text();
    } catch (u) {
      return _r(u, a.status, a.statusText);
    }
    if (a.ok) try {
      return {
        success: !0,
        error: null,
        data: JSON.parse(l),
        count: null,
        status: a.status,
        statusText: a.statusText
      };
    } catch {
    }
    return {
      success: !1,
      error: uu(l, a.statusText),
      data: null,
      count: null,
      status: a.status,
      statusText: a.statusText
    };
  }
  /**
  * Perform a function call.
  *
  * @param fn - The function name to call
  * @param args - The arguments to pass to the function call
  * @param options - Named parameters
  * @param options.head - When set to `true`, `data` will not be returned.
  * Useful if you only need the count.
  * @param options.get - When set to `true`, the function will be called with
  * read-only access mode.
  * @param options.count - Count algorithm to use to count rows returned by the
  * function. Only applicable for [set-returning
  * functions](https://www.postgresql.org/docs/current/functions-srf.html).
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  *
  * @example
  * ```ts
  * // For cross-schema functions where type inference fails, use overrideTypes:
  * const { data } = await supabase
  *   .schema('schema_b')
  *   .rpc('function_a', {})
  *   .overrideTypes<{ id: string; user_id: string }[]>()
  * ```
  *
  * @category Database
  *
  * @example Call a Postgres function without arguments
  * ```ts
  * const { data, error } = await supabase.rpc('hello_world')
  * ```
  *
  * @exampleSql Call a Postgres function without arguments
  * ```sql
  * create function hello_world() returns text as $$
  *   select 'Hello world';
  * $$ language sql;
  * ```
  *
  * @exampleResponse Call a Postgres function without arguments
  * ```json
  * {
  *   "data": "Hello world",
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example Call a Postgres function with arguments
  * ```ts
  * const { data, error } = await supabase.rpc('echo', { say: '👋' })
  * ```
  *
  * @exampleSql Call a Postgres function with arguments
  * ```sql
  * create function echo(say text) returns text as $$
  *   select say;
  * $$ language sql;
  * ```
  *
  * @exampleResponse Call a Postgres function with arguments
  * ```json
  *   {
  *     "data": "👋",
  *     "status": 200,
  *     "statusText": "OK"
  *   }
  *
  * ```
  *
  * @exampleDescription Bulk processing
  * You can process large payloads by passing in an array as an argument.
  *
  * @example Bulk processing
  * ```ts
  * const { data, error } = await supabase.rpc('add_one_each', { arr: [1, 2, 3] })
  * ```
  *
  * @exampleSql Bulk processing
  * ```sql
  * create function add_one_each(arr int[]) returns int[] as $$
  *   select array_agg(n + 1) from unnest(arr) as n;
  * $$ language sql;
  * ```
  *
  * @exampleResponse Bulk processing
  * ```json
  * {
  *   "data": [
  *     2,
  *     3,
  *     4
  *   ],
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @exampleDescription Call a Postgres function with filters
  * Postgres functions that return tables can also be combined with [Filters](/docs/reference/javascript/using-filters) and [Modifiers](/docs/reference/javascript/using-modifiers).
  *
  * @example Call a Postgres function with filters
  * ```ts
  * const { data, error } = await supabase
  *   .rpc('list_stored_countries')
  *   .eq('id', 1)
  *   .single()
  * ```
  *
  * @exampleSql Call a Postgres function with filters
  * ```sql
  * create table
  *   countries (id int8 primary key, name text);
  *
  * insert into
  *   countries (id, name)
  * values
  *   (1, 'Rohan'),
  *   (2, 'The Shire');
  *
  * create function list_stored_countries() returns setof countries as $$
  *   select * from countries;
  * $$ language sql;
  * ```
  *
  * @exampleResponse Call a Postgres function with filters
  * ```json
  * {
  *   "data": {
  *     "id": 1,
  *     "name": "Rohan"
  *   },
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  *
  * @example Call a read-only Postgres function
  * ```ts
  * const { data, error } = await supabase.rpc('hello_world', undefined, { get: true })
  * ```
  *
  * @exampleSql Call a read-only Postgres function
  * ```sql
  * create function hello_world() returns text as $$
  *   select 'Hello world';
  * $$ language sql;
  * ```
  *
  * @exampleResponse Call a read-only Postgres function
  * ```json
  * {
  *   "data": "Hello world",
  *   "status": 200,
  *   "statusText": "OK"
  * }
  * ```
  */
  rpc(e, n = {}, { head: r = !1, get: i = !1, count: s } = {}) {
    var a;
    let o;
    const l = new URL(`${this.url}/rpc/${e}`);
    let u;
    const h = (d) => d !== null && typeof d == "object" && (!Array.isArray(d) || d.some(h)), c = r && Object.values(n).some(h);
    c ? (o = "POST", u = n) : r || i ? (o = r ? "HEAD" : "GET", Object.entries(n).filter(([d, p]) => p !== void 0).map(([d, p]) => [d, Array.isArray(p) ? `{${p.join(",")}}` : `${p}`]).forEach(([d, p]) => {
      l.searchParams.append(d, p);
    })) : (o = "POST", u = n);
    const f = new Headers(this.headers);
    return c ? f.set("Prefer", s ? `count=${s},return=minimal` : "return=minimal") : s && f.set("Prefer", `count=${s}`), new et({
      method: o,
      url: l,
      headers: f,
      schema: this.schemaName,
      body: u,
      fetch: (a = this.fetch) !== null && a !== void 0 ? a : fetch,
      urlLengthLimit: this.urlLengthLimit,
      retry: this.retry
    });
  }
};
class Di {
  /**
   * Static-only utility – prevent instantiation.
   */
  constructor() {
  }
  static detectEnvironment() {
    var e;
    if (typeof WebSocket < "u")
      return { type: "native", wsConstructor: WebSocket };
    const n = globalThis;
    if (typeof globalThis < "u" && typeof n.WebSocket < "u")
      return { type: "native", wsConstructor: n.WebSocket };
    const r = typeof global < "u" ? global : void 0;
    if (r && typeof r.WebSocket < "u")
      return { type: "native", wsConstructor: r.WebSocket };
    if (typeof globalThis < "u" && typeof n.WebSocketPair < "u" && typeof globalThis.WebSocket > "u")
      return {
        type: "cloudflare",
        error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
      };
    if (typeof globalThis < "u" && n.EdgeRuntime || typeof navigator < "u" && (!((e = navigator.userAgent) === null || e === void 0) && e.includes("Vercel-Edge")))
      return {
        type: "unsupported",
        error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
      };
    const i = globalThis.process;
    if (i) {
      const s = i.versions;
      if (s && s.node)
        return {
          type: "unsupported",
          error: "Node.js detected but native WebSocket not found.",
          workaround: "Ensure you are running Node.js 22+ or provide a WebSocket implementation via the transport option."
        };
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
    };
  }
  /**
   * Returns the best available WebSocket constructor for the current runtime.
   *
   * @category Realtime
   *
   * @example Example with error handling
   * ```ts
   * try {
   *   const WS = WebSocketFactory.getWebSocketConstructor()
   *   const socket = new WS('wss://example.com/socket')
   * } catch (error) {
   *   console.error('WebSocket not available in this environment.', error)
   * }
   * ```
   */
  static getWebSocketConstructor() {
    const e = this.detectEnvironment();
    if (e.wsConstructor)
      return e.wsConstructor;
    let n = e.error || "WebSocket not supported in this environment.";
    throw e.workaround && (n += `

Suggested solution: ${e.workaround}`), new Error(n);
  }
  /**
   * Detects whether the runtime can establish WebSocket connections.
   *
   * @category Realtime
   *
   * @example Example in a Node.js script
   * ```ts
   * if (!WebSocketFactory.isWebSocketSupported()) {
   *   console.error('WebSockets are required for this script.')
   *   process.exitCode = 1
   * }
   * ```
   */
  static isWebSocketSupported() {
    try {
      return this.detectEnvironment().type === "native";
    } catch {
      return !1;
    }
  }
}
const hu = "2.118.0", du = `realtime-js/${hu}`, fu = "1.0.0", Ni = "2.0.0", pu = Ni, gu = 1e4, mu = 15e3, yu = 1e4, wu = 100, Le = {
  closed: "closed",
  errored: "errored",
  joined: "joined",
  joining: "joining",
  leaving: "leaving"
}, Ui = {
  close: "phx_close",
  error: "phx_error",
  join: "phx_join",
  leave: "phx_leave",
  access_token: "access_token"
}, Rn = {
  connecting: "connecting",
  closing: "closing",
  closed: "closed"
};
class bu {
  constructor(e) {
    this.HEADER_LENGTH = 1, this.USER_BROADCAST_PUSH_META_LENGTH = 6, this.KINDS = { userBroadcastPush: 3, userBroadcast: 4 }, this.BINARY_ENCODING = 0, this.JSON_ENCODING = 1, this.BROADCAST_EVENT = "broadcast", this.allowedMetadataKeys = [], this.allowedMetadataKeys = e ?? [];
  }
  encode(e, n) {
    if (e.event === this.BROADCAST_EVENT && !(e.payload instanceof ArrayBuffer) && typeof e.payload.event == "string")
      return n(this._binaryEncodeUserBroadcastPush(e));
    let r = [e.join_ref, e.ref, e.topic, e.event, e.payload];
    return n(JSON.stringify(r));
  }
  _binaryEncodeUserBroadcastPush(e) {
    var n;
    return this._isArrayBuffer((n = e.payload) === null || n === void 0 ? void 0 : n.payload) ? this._encodeBinaryUserBroadcastPush(e) : this._encodeJsonUserBroadcastPush(e);
  }
  _encodeBinaryUserBroadcastPush(e) {
    var n, r;
    const i = (r = (n = e.payload) === null || n === void 0 ? void 0 : n.payload) !== null && r !== void 0 ? r : new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(e, this.BINARY_ENCODING, i);
  }
  _encodeJsonUserBroadcastPush(e) {
    var n, r;
    const i = (r = (n = e.payload) === null || n === void 0 ? void 0 : n.payload) !== null && r !== void 0 ? r : {}, a = new TextEncoder().encode(JSON.stringify(i)).buffer;
    return this._encodeUserBroadcastPush(e, this.JSON_ENCODING, a);
  }
  _encodeUserBroadcastPush(e, n, r) {
    var i, s;
    const a = new TextEncoder(), o = a.encode(e.topic), l = a.encode((i = e.ref) !== null && i !== void 0 ? i : ""), u = a.encode((s = e.join_ref) !== null && s !== void 0 ? s : ""), h = a.encode(e.payload.event), c = this.allowedMetadataKeys ? this._pick(e.payload, this.allowedMetadataKeys) : {}, f = a.encode(Object.keys(c).length === 0 ? "" : JSON.stringify(c));
    if (u.length > 255)
      throw new Error(`joinRef length ${u.length} exceeds maximum of 255`);
    if (l.length > 255)
      throw new Error(`ref length ${l.length} exceeds maximum of 255`);
    if (o.length > 255)
      throw new Error(`topic length ${o.length} exceeds maximum of 255`);
    if (h.length > 255)
      throw new Error(`userEvent length ${h.length} exceeds maximum of 255`);
    if (f.length > 255)
      throw new Error(`metadata length ${f.length} exceeds maximum of 255`);
    const d = this.USER_BROADCAST_PUSH_META_LENGTH + u.length + l.length + o.length + h.length + f.length, p = new ArrayBuffer(this.HEADER_LENGTH + d), y = new DataView(p), v = new Uint8Array(p);
    let w = 0;
    y.setUint8(w++, this.KINDS.userBroadcastPush), y.setUint8(w++, u.length), y.setUint8(w++, l.length), y.setUint8(w++, o.length), y.setUint8(w++, h.length), y.setUint8(w++, f.length), y.setUint8(w++, n), v.set(u, w), w += u.length, v.set(l, w), w += l.length, v.set(o, w), w += o.length, v.set(h, w), w += h.length, v.set(f, w), w += f.length;
    var k = new Uint8Array(p.byteLength + r.byteLength);
    return k.set(new Uint8Array(p), 0), k.set(new Uint8Array(r), p.byteLength), k.buffer;
  }
  decode(e, n) {
    if (this._isArrayBuffer(e)) {
      let r = this._binaryDecode(e);
      return n(r);
    }
    if (typeof e == "string") {
      const r = JSON.parse(e), [i, s, a, o, l] = r;
      return n({ join_ref: i, ref: s, topic: a, event: o, payload: l });
    }
    return n({});
  }
  _binaryDecode(e) {
    const n = new DataView(e), r = n.getUint8(0), i = new TextDecoder();
    switch (r) {
      case this.KINDS.userBroadcast:
        return this._decodeUserBroadcast(e, n, i);
    }
  }
  _decodeUserBroadcast(e, n, r) {
    const i = n.getUint8(1), s = n.getUint8(2), a = n.getUint8(3), o = n.getUint8(4);
    let l = this.HEADER_LENGTH + 4;
    const u = r.decode(e.slice(l, l + i));
    l = l + i;
    const h = r.decode(e.slice(l, l + s));
    l = l + s;
    const c = r.decode(e.slice(l, l + a));
    l = l + a;
    const f = e.slice(l, e.byteLength), d = o === this.JSON_ENCODING ? JSON.parse(r.decode(f)) : f, p = {
      type: this.BROADCAST_EVENT,
      event: h,
      payload: d
    };
    return a > 0 && (p.meta = JSON.parse(c)), { join_ref: null, ref: null, topic: u, event: this.BROADCAST_EVENT, payload: p };
  }
  _isArrayBuffer(e) {
    var n;
    return e instanceof ArrayBuffer || ((n = e == null ? void 0 : e.constructor) === null || n === void 0 ? void 0 : n.name) === "ArrayBuffer";
  }
  _pick(e, n) {
    return !e || typeof e != "object" ? {} : Object.fromEntries(Object.entries(e).filter(([r]) => n.includes(r)));
  }
}
var M;
(function(t) {
  t.abstime = "abstime", t.bool = "bool", t.date = "date", t.daterange = "daterange", t.float4 = "float4", t.float8 = "float8", t.int2 = "int2", t.int4 = "int4", t.int4range = "int4range", t.int8 = "int8", t.int8range = "int8range", t.json = "json", t.jsonb = "jsonb", t.money = "money", t.numeric = "numeric", t.oid = "oid", t.reltime = "reltime", t.text = "text", t.time = "time", t.timestamp = "timestamp", t.timestamptz = "timestamptz", t.timetz = "timetz", t.tsrange = "tsrange", t.tstzrange = "tstzrange";
})(M || (M = {}));
const kr = (t, e, n = {}) => {
  var r;
  const i = (r = n.skipTypes) !== null && r !== void 0 ? r : [];
  return e ? Object.keys(e).reduce((s, a) => (s[a] = vu(a, t, e, i), s), {}) : {};
}, vu = (t, e, n, r) => {
  const i = e.find((o) => o.name === t), s = i == null ? void 0 : i.type, a = n[t];
  return s && !r.includes(s) ? Fi(s, a) : On(a);
}, Fi = (t, e) => {
  if (t.charAt(0) === "_") {
    const n = t.slice(1, t.length);
    return Eu(e, n);
  }
  switch (t) {
    case M.bool:
      return _u(e);
    case M.float4:
    case M.float8:
    case M.int2:
    case M.int4:
    case M.int8:
    case M.numeric:
    case M.oid:
      return ku(e);
    case M.json:
    case M.jsonb:
      return Su(e);
    case M.timestamp:
      return Tu(e);
    // Format to be consistent with PostgREST
    case M.abstime:
    // To allow users to cast it based on Timezone
    case M.date:
    // To allow users to cast it based on Timezone
    case M.daterange:
    case M.int4range:
    case M.int8range:
    case M.money:
    case M.reltime:
    // To allow users to cast it based on Timezone
    case M.text:
    case M.time:
    // To allow users to cast it based on Timezone
    case M.timestamptz:
    // To allow users to cast it based on Timezone
    case M.timetz:
    // To allow users to cast it based on Timezone
    case M.tsrange:
    case M.tstzrange:
      return On(e);
    default:
      return On(e);
  }
}, On = (t) => t, _u = (t) => {
  switch (t) {
    case "t":
      return !0;
    case "f":
      return !1;
    default:
      return t;
  }
}, ku = (t) => {
  if (typeof t == "string") {
    const e = parseFloat(t);
    if (!Number.isNaN(e))
      return e;
  }
  return t;
}, Su = (t) => {
  if (typeof t == "string")
    try {
      return JSON.parse(t);
    } catch {
      return t;
    }
  return t;
}, Eu = (t, e) => {
  if (typeof t != "string")
    return t;
  const n = t.length - 1, r = t[n];
  if (t[0] === "{" && r === "}") {
    let s;
    const a = t.slice(1, n);
    try {
      s = JSON.parse("[" + a + "]");
    } catch {
      s = a ? a.split(",") : [];
    }
    return s.map((o) => Fi(e, o));
  }
  return t;
}, Tu = (t) => typeof t == "string" ? t.replace(" ", "T") : t, Bi = (t) => {
  const e = new URL(t);
  return e.protocol = e.protocol.replace(/^ws/i, "http"), e.pathname = e.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, ""), e.pathname === "" || e.pathname === "/" ? e.pathname = "/api/broadcast" : e.pathname = e.pathname + "/api/broadcast", e.href;
};
var it = (t) => typeof t == "function" ? (
  /** @type {() => T} */
  t
) : function() {
  return t;
}, Au = typeof self < "u" ? self : null, tt = typeof window < "u" ? window : null, be = Au || tt || globalThis, xu = "2.0.0", Cu = 1e4, Ru = 1e3, Ou = 100, ke = (
  /** @type {const} */
  { connecting: 0, open: 1, closing: 2, closed: 3 }
), re = (
  /** @type {const} */
  {
    closed: "closed",
    errored: "errored",
    joined: "joined",
    joining: "joining",
    leaving: "leaving"
  }
), Re = (
  /** @type {const} */
  {
    close: "phx_close",
    error: "phx_error",
    join: "phx_join",
    reply: "phx_reply",
    leave: "phx_leave"
  }
), In = (
  /** @type {const} */
  {
    longpoll: "longpoll",
    websocket: "websocket"
  }
), Iu = (
  /** @type {const} */
  {
    complete: 4
  }
), Pn = "base64url.bearer.phx.", Ft = class {
  /**
   * Initializes the Push
   * @param {Channel} channel - The Channel
   * @param {ChannelEvent} event - The event, for example `"phx_join"`
   * @param {() => Record<string, unknown>} payload - The payload, for example `{user_id: 123}`
   * @param {number} timeout - The push timeout in milliseconds
   */
  constructor(t, e, n, r) {
    this.channel = t, this.event = e, this.payload = n || function() {
      return {};
    }, this.receivedResp = null, this.timeout = r, this.timeoutTimer = null, this.recHooks = [], this.sent = !1, this.ref = void 0;
  }
  /**
   *
   * @param {number} timeout
   */
  resend(t) {
    this.timeout = t, this.reset(), this.send();
  }
  /**
   *
   */
  send() {
    this.hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
      topic: this.channel.topic,
      event: this.event,
      payload: this.payload(),
      ref: this.ref,
      join_ref: this.channel.joinRef()
    }));
  }
  /**
   *
   * @param {string} status
   * @param {(response: any) => void} callback
   */
  receive(t, e) {
    return this.hasReceived(t) && e(this.receivedResp.response), this.recHooks.push({ status: t, callback: e }), this;
  }
  reset() {
    this.cancelRefEvent(), this.ref = null, this.refEvent = null, this.receivedResp = null, this.sent = !1;
  }
  destroy() {
    this.cancelRefEvent(), this.cancelTimeout();
  }
  /**
   * @private
   */
  matchReceive({ status: t, response: e, _ref: n }) {
    this.recHooks.filter((r) => r.status === t).forEach((r) => r.callback(e));
  }
  /**
   * @private
   */
  cancelRefEvent() {
    this.refEvent && this.channel.off(this.refEvent);
  }
  cancelTimeout() {
    clearTimeout(this.timeoutTimer), this.timeoutTimer = null;
  }
  startTimeout() {
    this.timeoutTimer && this.cancelTimeout(), this.ref = this.channel.socket.makeRef(), this.refEvent = this.channel.replyEventName(this.ref), this.channel.on(this.refEvent, (t) => {
      this.cancelRefEvent(), this.cancelTimeout(), this.receivedResp = t, this.matchReceive(t);
    }), this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  /**
   * @private
   */
  hasReceived(t) {
    return this.receivedResp && this.receivedResp.status === t;
  }
  trigger(t, e) {
    this.channel.trigger(this.refEvent, { status: t, response: e });
  }
}, zi = class {
  /**
  * @param {() => void} callback
  * @param {(tries: number) => number} timerCalc
  */
  constructor(t, e) {
    this.callback = t, this.timerCalc = e, this.timer = void 0, this.tries = 0;
  }
  reset() {
    this.tries = 0, clearTimeout(this.timer);
  }
  /**
   * Cancels any previous scheduleTimeout and schedules callback
   */
  scheduleTimeout() {
    clearTimeout(this.timer), this.timer = setTimeout(() => {
      this.tries = this.tries + 1, this.callback();
    }, this.timerCalc(this.tries + 1));
  }
}, Pu = class {
  /**
   * @param {string} topic
   * @param {Params | (() => Params)} params
   * @param {Socket} socket
   */
  constructor(t, e, n) {
    this.state = re.closed, this.topic = t, this.params = it(e || {}), this.socket = n, this.bindings = [], this.bindingRef = 0, this.timeout = this.socket.timeout, this.joinedOnce = !1, this.joinPush = new Ft(this, Re.join, this.params, this.timeout), this.pushBuffer = [], this.stateChangeRefs = [], this.rejoinTimer = new zi(() => {
      this.socket.isConnected() && this.rejoin();
    }, this.socket.rejoinAfterMs), this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset())), this.stateChangeRefs.push(
      this.socket.onOpen(() => {
        this.rejoinTimer.reset(), this.isErrored() && this.rejoin();
      })
    ), this.joinPush.receive("ok", () => {
      this.state = re.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((r) => r.send()), this.pushBuffer = [];
    }), this.joinPush.receive("error", (r) => {
      this.state = re.errored, this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, r), this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
    }), this.onClose(() => {
      this.rejoinTimer.reset(), this.socket.hasLogger() && this.socket.log("channel", `close ${this.topic}`), this.state = re.closed, this.socket.remove(this);
    }), this.onError((r) => {
      this.socket.hasLogger() && this.socket.log("channel", `error ${this.topic}`, r), this.isJoining() && this.joinPush.reset(), this.state = re.errored, this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
    }), this.joinPush.receive("timeout", () => {
      this.socket.hasLogger() && this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), new Ft(this, Re.leave, it({}), this.timeout).send(), this.state = re.errored, this.joinPush.reset(), this.socket.isConnected() && this.rejoinTimer.scheduleTimeout();
    }), this.on(Re.reply, (r, i) => {
      this.trigger(this.replyEventName(i), r);
    });
  }
  /**
   * Join the channel
   * @param {number} timeout
   * @returns {Push}
   */
  join(t = this.timeout) {
    if (this.joinedOnce)
      throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
    return this.timeout = t, this.joinedOnce = !0, this.rejoin(), this.joinPush;
  }
  /**
   * Teardown the channel.
   *
   * Destroys and stops related timers.
   */
  teardown() {
    this.pushBuffer.forEach((t) => t.destroy()), this.pushBuffer = [], this.rejoinTimer.reset(), this.joinPush.destroy(), this.state = re.closed, this.bindings = [];
  }
  /**
   * Hook into channel close
   * @param {ChannelBindingCallback} callback
   */
  onClose(t) {
    this.on(Re.close, t);
  }
  /**
   * Hook into channel errors
   * @param {ChannelOnErrorCallback} callback
   * @return {number}
   */
  onError(t) {
    return this.on(Re.error, (e) => t(e));
  }
  /**
   * Subscribes on channel events
   *
   * Subscription returns a ref counter, which can be used later to
   * unsubscribe the exact event listener
   *
   * @example
   * const ref1 = channel.on("event", do_stuff)
   * const ref2 = channel.on("event", do_other_stuff)
   * channel.off("event", ref1)
   * // Since unsubscription, do_stuff won't fire,
   * // while do_other_stuff will keep firing on the "event"
   *
   * @param {string} event
   * @param {ChannelBindingCallback} callback
   * @returns {number} ref
   */
  on(t, e) {
    let n = this.bindingRef++;
    return this.bindings.push({ event: t, ref: n, callback: e }), n;
  }
  /**
   * Unsubscribes off of channel events
   *
   * Use the ref returned from a channel.on() to unsubscribe one
   * handler, or pass nothing for the ref to unsubscribe all
   * handlers for the given event.
   *
   * @example
   * // Unsubscribe the do_stuff handler
   * const ref1 = channel.on("event", do_stuff)
   * channel.off("event", ref1)
   *
   * // Unsubscribe all handlers from event
   * channel.off("event")
   *
   * @param {string} event
   * @param {number} [ref]
   */
  off(t, e) {
    this.bindings = this.bindings.filter((n) => !(n.event === t && (typeof e > "u" || e === n.ref)));
  }
  /**
   * @private
   */
  canPush() {
    return this.socket.isConnected() && this.isJoined();
  }
  /**
   * Sends a message `event` to phoenix with the payload `payload`.
   * Phoenix receives this in the `handle_in(event, payload, socket)`
   * function. if phoenix replies or it times out (default 10000ms),
   * then optionally the reply can be received.
   *
   * @example
   * channel.push("event")
   *   .receive("ok", payload => console.log("phoenix replied:", payload))
   *   .receive("error", err => console.log("phoenix errored", err))
   *   .receive("timeout", () => console.log("timed out pushing"))
   * @param {string} event
   * @param {Object} payload
   * @param {number} [timeout]
   * @returns {Push}
   */
  push(t, e, n = this.timeout) {
    if (e = e || {}, !this.joinedOnce)
      throw new Error(`tried to push '${t}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
    let r = new Ft(this, t, function() {
      return e;
    }, n);
    return this.canPush() ? r.send() : (r.startTimeout(), this.pushBuffer.push(r)), r;
  }
  /** Leaves the channel
   *
   * Unsubscribes from server events, and
   * instructs channel to terminate on server
   *
   * Triggers onClose() hooks
   *
   * To receive leave acknowledgements, use the `receive`
   * hook to bind to the server ack, ie:
   *
   * @example
   * channel.leave().receive("ok", () => alert("left!") )
   *
   * @param {number} timeout
   * @returns {Push}
   */
  leave(t = this.timeout) {
    this.rejoinTimer.reset(), this.joinPush.cancelTimeout(), this.state = re.leaving;
    let e = () => {
      this.socket.hasLogger() && this.socket.log("channel", `leave ${this.topic}`), this.trigger(Re.close, "leave");
    }, n = new Ft(this, Re.leave, it({}), t);
    return n.receive("ok", () => e()).receive("timeout", () => e()), n.send(), this.canPush() || n.trigger("ok", {}), n;
  }
  /**
   * Overridable message hook
   *
   * Receives all events for specialized message handling
   * before dispatching to the channel callbacks.
   *
   * Must return the payload, modified or unmodified
   * @type{ChannelOnMessage}
   */
  onMessage(t, e, n) {
    return e;
  }
  /**
   * Overridable filter hook
   *
   * If this function returns `true`, `binding`'s callback will be called.
   *
   * @type{ChannelFilterBindings}
   */
  filterBindings(t, e, n) {
    return !0;
  }
  isMember(t, e, n, r) {
    return this.topic !== t ? !1 : r && r !== this.joinRef() ? (this.socket.hasLogger() && this.socket.log("channel", "dropping outdated message", { topic: t, event: e, payload: n, joinRef: r }), !1) : !0;
  }
  joinRef() {
    return this.joinPush.ref;
  }
  /**
   * @private
   */
  rejoin(t = this.timeout) {
    this.isLeaving() || (this.socket.leaveOpenTopic(this.topic), this.state = re.joining, this.joinPush.resend(t));
  }
  /**
   * @param {string} event
   * @param {unknown} [payload]
   * @param {?string} [ref]
   * @param {?string} [joinRef]
   */
  trigger(t, e, n, r) {
    let i = this.onMessage(t, e, n, r);
    if (e && !i)
      throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
    let s = this.bindings.filter((a) => a.event === t && this.filterBindings(a, e, n));
    for (let a = 0; a < s.length; a++)
      s[a].callback(i, n, r || this.joinRef());
  }
  /**
  * @param {string} ref
  */
  replyEventName(t) {
    return `chan_reply_${t}`;
  }
  isClosed() {
    return this.state === re.closed;
  }
  isErrored() {
    return this.state === re.errored;
  }
  isJoined() {
    return this.state === re.joined;
  }
  isJoining() {
    return this.state === re.joining;
  }
  isLeaving() {
    return this.state === re.leaving;
  }
}, Qt = class {
  static request(t, e, n, r, i, s, a) {
    if (be.XDomainRequest) {
      let o = new be.XDomainRequest();
      return this.xdomainRequest(o, t, e, r, i, s, a);
    } else if (be.XMLHttpRequest) {
      let o = new be.XMLHttpRequest();
      return this.xhrRequest(o, t, e, n, r, i, s, a);
    } else {
      if (be.fetch && be.AbortController)
        return this.fetchRequest(t, e, n, r, i, s, a);
      throw new Error("No suitable XMLHttpRequest implementation found");
    }
  }
  static fetchRequest(t, e, n, r, i, s, a) {
    let o = {
      method: t,
      headers: n,
      body: r
    }, l = null;
    return i && (l = new AbortController(), setTimeout(() => l.abort(), i), o.signal = l.signal), be.fetch(e, o).then((u) => u.text()).then((u) => this.parseJSON(u)).then((u) => a && a(u)).catch((u) => {
      u.name === "AbortError" && s ? s() : a && a(null);
    }), l;
  }
  static xdomainRequest(t, e, n, r, i, s, a) {
    return t.timeout = i, t.open(e, n), t.onload = () => {
      let o = this.parseJSON(t.responseText);
      a && a(o);
    }, s && (t.ontimeout = s), t.onprogress = () => {
    }, t.send(r), t;
  }
  static xhrRequest(t, e, n, r, i, s, a, o) {
    t.open(e, n, !0), t.timeout = s;
    for (let [l, u] of Object.entries(r))
      t.setRequestHeader(l, u);
    return t.onerror = () => o && o(null), t.onreadystatechange = () => {
      if (t.readyState === Iu.complete && o) {
        let l = this.parseJSON(t.responseText);
        o(l);
      }
    }, a && (t.ontimeout = a), t.send(i), t;
  }
  static parseJSON(t) {
    if (!t || t === "")
      return null;
    try {
      return JSON.parse(t);
    } catch {
      return console && console.log("failed to parse JSON response", t), null;
    }
  }
  static serialize(t, e) {
    let n = [];
    for (var r in t) {
      if (!Object.prototype.hasOwnProperty.call(t, r))
        continue;
      let i = e ? `${e}[${r}]` : r, s = t[r];
      typeof s == "object" ? n.push(this.serialize(s, i)) : n.push(encodeURIComponent(i) + "=" + encodeURIComponent(s));
    }
    return n.join("&");
  }
  static appendParams(t, e) {
    if (Object.keys(e).length === 0)
      return t;
    let n = t.match(/\?/) ? "&" : "?";
    return `${t}${n}${this.serialize(e)}`;
  }
}, ju = (t) => {
  let e = "", n = new Uint8Array(t), r = n.byteLength;
  for (let i = 0; i < r; i++)
    e += String.fromCharCode(n[i]);
  return btoa(e);
}, Ye = class {
  constructor(t, e) {
    e && e.length === 2 && e[1].startsWith(Pn) && (this.authToken = atob(e[1].slice(Pn.length))), this.endPoint = null, this.token = null, this.skipHeartbeat = !0, this.reqs = /* @__PURE__ */ new Set(), this.awaitingBatchAck = !1, this.currentBatch = null, this.currentBatchTimer = null, this.batchBuffer = [], this.onopen = function() {
    }, this.onerror = function() {
    }, this.onmessage = function() {
    }, this.onclose = function() {
    }, this.pollEndpoint = this.normalizeEndpoint(t), this.readyState = ke.connecting, setTimeout(() => this.poll(), 0);
  }
  normalizeEndpoint(t) {
    return t.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + In.websocket), "$1/" + In.longpoll);
  }
  endpointURL() {
    return Qt.appendParams(this.pollEndpoint, { token: this.token });
  }
  closeAndRetry(t, e, n) {
    this.close(t, e, n), this.readyState = ke.connecting;
  }
  ontimeout() {
    this.onerror("timeout"), this.closeAndRetry(1005, "timeout", !1);
  }
  isActive() {
    return this.readyState === ke.open || this.readyState === ke.connecting;
  }
  poll() {
    const t = { Accept: "application/json" };
    this.authToken && (t["X-Phoenix-AuthToken"] = this.authToken), this.ajax("GET", t, null, () => this.ontimeout(), (e) => {
      if (e) {
        var { status: n, token: r, messages: i } = e;
        if (n === 410 && this.token !== null) {
          this.onerror(410), this.closeAndRetry(3410, "session_gone", !1);
          return;
        }
        this.token = r;
      } else
        n = 0;
      switch (n) {
        case 200:
          i.forEach((s) => {
            setTimeout(() => this.onmessage({ data: s }), 0);
          }), this.poll();
          break;
        case 204:
          this.poll();
          break;
        case 410:
          this.readyState = ke.open, this.onopen({}), this.poll();
          break;
        case 403:
          this.onerror(403), this.close(1008, "forbidden", !1);
          break;
        case 0:
        case 500:
          this.onerror(500), this.closeAndRetry(1011, "internal server error", 500);
          break;
        default:
          throw new Error(`unhandled poll status ${n}`);
      }
    });
  }
  // we collect all pushes within the current event loop by
  // setTimeout 0, which optimizes back-to-back procedural
  // pushes against an empty buffer
  send(t) {
    typeof t != "string" && (t = ju(t)), this.currentBatch ? this.currentBatch.push(t) : this.awaitingBatchAck ? this.batchBuffer.push(t) : (this.currentBatch = [t], this.currentBatchTimer = setTimeout(() => {
      this.batchSend(this.currentBatch), this.currentBatch = null;
    }, 0));
  }
  batchSend(t, e = 0) {
    this.awaitingBatchAck = !0;
    const n = e + Ou, r = t.slice(e, n);
    this.ajax("POST", { "Content-Type": "application/x-ndjson" }, r.join(`
`), () => this.onerror("timeout"), (i) => {
      !i || i.status !== 200 ? (this.awaitingBatchAck = !1, this.onerror(i && i.status), this.closeAndRetry(1011, "internal server error", !1)) : n < t.length ? this.batchSend(t, n) : this.batchBuffer.length > 0 ? (this.batchSend(this.batchBuffer), this.batchBuffer = []) : this.awaitingBatchAck = !1;
    });
  }
  close(t, e, n) {
    for (let i of this.reqs)
      i.abort();
    this.readyState = ke.closed;
    let r = Object.assign({ code: 1e3, reason: void 0, wasClean: !0 }, { code: t, reason: e, wasClean: n });
    this.batchBuffer = [], clearTimeout(this.currentBatchTimer), this.currentBatchTimer = null, typeof CloseEvent < "u" ? this.onclose(new CloseEvent("close", r)) : this.onclose(r);
  }
  ajax(t, e, n, r, i) {
    let s, a = () => {
      this.reqs.delete(s), r();
    };
    s = Qt.request(t, this.endpointURL(), e, n, this.timeout, a, (o) => {
      this.reqs.delete(s), this.isActive() && i(o);
    }), this.reqs.add(s);
  }
}, Lu = class wt {
  /**
   * Initializes the Presence
   * @param {Channel} channel - The Channel
   * @param {PresenceOptions} [opts] - The options, for example `{events: {state: "state", diff: "diff"}}`
   */
  constructor(e, n = {}) {
    let r = n.events || /** @type {PresenceEvents} */
    { state: "presence_state", diff: "presence_diff" };
    this.state = /* @__PURE__ */ Object.create(null), this.pendingDiffs = [], this.channel = e, this.joinRef = null, this.caller = {
      onJoin: function() {
      },
      onLeave: function() {
      },
      onSync: function() {
      }
    }, this.channel.on(r.state, (i) => {
      let { onJoin: s, onLeave: a, onSync: o } = this.caller;
      this.joinRef = this.channel.joinRef(), this.state = wt.syncState(this.state, i, s, a), this.pendingDiffs.forEach((l) => {
        this.state = wt.syncDiff(this.state, l, s, a);
      }), this.pendingDiffs = [], o();
    }), this.channel.on(r.diff, (i) => {
      let { onJoin: s, onLeave: a, onSync: o } = this.caller;
      this.inPendingSyncState() ? this.pendingDiffs.push(i) : (this.state = wt.syncDiff(this.state, i, s, a), o());
    });
  }
  /**
   * @param {PresenceOnJoin} callback
   */
  onJoin(e) {
    this.caller.onJoin = e;
  }
  /**
   * @param {PresenceOnLeave} callback
   */
  onLeave(e) {
    this.caller.onLeave = e;
  }
  /**
   * @param {PresenceOnSync} callback
   */
  onSync(e) {
    this.caller.onSync = e;
  }
  /**
   * Returns the array of presences, with selected metadata.
   *
   * @template [T=PresenceState]
   * @param {((key: string, obj: PresenceState) => T)} [by]
   *
   * @returns {T[]}
   */
  list(e) {
    return wt.list(this.state, e);
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel.joinRef();
  }
  // lower-level public static API
  /**
   * Used to sync the list of presences on the server
   * with the client's state. An optional `onJoin` and `onLeave` callback can
   * be provided to react to changes in the client's local presences across
   * disconnects and reconnects with the server.
   *
   * @param {Record<string, PresenceState>} currentState
   * @param {Record<string, PresenceState>} newState
   * @param {PresenceOnJoin} onJoin
   * @param {PresenceOnLeave} onLeave
   *
   * @returns {Record<string, PresenceState>}
   */
  static syncState(e, n, r, i) {
    let s = this.toNullProtoObj(this.clone(e));
    n = this.toNullProtoObj(n);
    let a = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
    return this.map(s, (l, u) => {
      n[l] || (o[l] = u);
    }), this.map(n, (l, u) => {
      let h = s[l];
      if (h) {
        let c = u.metas.map((y) => y.phx_ref), f = h.metas.map((y) => y.phx_ref), d = u.metas.filter((y) => f.indexOf(y.phx_ref) < 0), p = h.metas.filter((y) => c.indexOf(y.phx_ref) < 0);
        d.length > 0 && (a[l] = u, a[l].metas = d), p.length > 0 && (o[l] = this.clone(h), o[l].metas = p);
      } else
        a[l] = u;
    }), this.syncDiff(s, { joins: a, leaves: o }, r, i);
  }
  /**
   *
   * Used to sync a diff of presence join and leave
   * events from the server, as they happen. Like `syncState`, `syncDiff`
   * accepts optional `onJoin` and `onLeave` callbacks to react to a user
   * joining or leaving from a device.
   *
   * @param {Record<string, PresenceState>} state
   * @param {PresenceDiff} diff
   * @param {PresenceOnJoin} onJoin
   * @param {PresenceOnLeave} onLeave
   *
   * @returns {Record<string, PresenceState>}
   */
  static syncDiff(e, n, r, i) {
    e = this.toNullProtoObj(e);
    let { joins: s, leaves: a } = this.clone(n);
    return r || (r = function() {
    }), i || (i = function() {
    }), this.map(s, (o, l) => {
      let u = e[o];
      if (e[o] = this.clone(l), u) {
        let h = e[o].metas.map((f) => f.phx_ref), c = u.metas.filter((f) => h.indexOf(f.phx_ref) < 0);
        e[o].metas.unshift(...c);
      }
      r(o, u, l);
    }), this.map(a, (o, l) => {
      let u = e[o];
      if (!u)
        return;
      let h = l.metas.map((c) => c.phx_ref);
      u.metas = u.metas.filter((c) => h.indexOf(c.phx_ref) < 0), i(o, u, l), u.metas.length === 0 && delete e[o];
    }), e;
  }
  /**
   * Returns the array of presences, with selected metadata.
   *
   * @template [T=PresenceState]
   * @param {Record<string, PresenceState>} presences
   * @param {((key: string, obj: PresenceState) => T)} [chooser]
   *
   * @returns {T[]}
   */
  static list(e, n) {
    return n || (n = function(r, i) {
      return i;
    }), this.map(e, (r, i) => n(r, i));
  }
  // private
  /**
  * @template T
  * @param {Record<string, PresenceState>} obj
  * @param {(key: string, obj: PresenceState) => T} func
  */
  static map(e, n) {
    return Object.getOwnPropertyNames(e).map((r) => n(r, e[r]));
  }
  // Presence keys are chosen on the server and may collide with
  // Object.prototype properties ("__proto__", "constructor", ...), so any
  // object indexed by presence key must not have a prototype chain
  //
  // TODO: replace the null-prototype objects with Maps in Phoenix 2.0
  // (breaking change for the lower-level static API)
  static toNullProtoObj(e) {
    if (Object.getPrototypeOf(e) === null)
      return e;
    let n = /* @__PURE__ */ Object.create(null);
    return Object.getOwnPropertyNames(e).forEach((r) => {
      n[r] = e[r];
    }), n;
  }
  /**
  * @template T
  * @param {T} obj
  * @returns {T}
  */
  static clone(e) {
    return JSON.parse(JSON.stringify(e));
  }
}, Bt = {
  HEADER_LENGTH: 1,
  META_LENGTH: 4,
  KINDS: { push: 0, reply: 1, broadcast: 2 },
  /**
  * @template T
  * @param {Message<Record<string, any>>} msg
  * @param {(msg: ArrayBuffer | string) => T} callback
  * @returns {T}
  */
  encode(t, e) {
    if (t.payload.constructor === ArrayBuffer)
      return e(this.binaryEncode(t));
    {
      let n = [t.join_ref, t.ref, t.topic, t.event, t.payload];
      return e(JSON.stringify(n));
    }
  },
  /**
  * @template T
  * @param {ArrayBuffer | string} rawPayload
  * @param {(msg: Message<unknown>) => T} callback
  * @returns {T}
  */
  decode(t, e) {
    if (t.constructor === ArrayBuffer)
      return e(this.binaryDecode(t));
    {
      let [n, r, i, s, a] = JSON.parse(t);
      return e({ join_ref: n, ref: r, topic: i, event: s, payload: a });
    }
  },
  /** @private */
  binaryEncode(t) {
    let { join_ref: e, ref: n, event: r, topic: i, payload: s } = t, a = new TextEncoder(), o = a.encode(e), l = a.encode(n), u = a.encode(i), h = a.encode(r);
    this.assertFieldSize(o.byteLength, "join_ref"), this.assertFieldSize(l.byteLength, "ref"), this.assertFieldSize(u.byteLength, "topic"), this.assertFieldSize(h.byteLength, "event");
    let c = this.META_LENGTH + o.byteLength + l.byteLength + u.byteLength + h.byteLength, f = new ArrayBuffer(this.HEADER_LENGTH + c), d = new Uint8Array(f), p = new DataView(f), y = 0;
    p.setUint8(y++, this.KINDS.push), p.setUint8(y++, o.byteLength), p.setUint8(y++, l.byteLength), p.setUint8(y++, u.byteLength), p.setUint8(y++, h.byteLength), d.set(o, y), y += o.byteLength, d.set(l, y), y += l.byteLength, d.set(u, y), y += u.byteLength, d.set(h, y), y += h.byteLength;
    var v = new Uint8Array(f.byteLength + s.byteLength);
    return v.set(d, 0), v.set(new Uint8Array(s), f.byteLength), v.buffer;
  },
  assertFieldSize(t, e) {
    if (t > 255)
      throw new Error(`unable to convert ${e} to binary: must be less than or equal to 255 bytes, but is ${t} bytes`);
  },
  /**
  * @private
  */
  binaryDecode(t) {
    let e = new DataView(t), n = e.getUint8(0), r = new TextDecoder();
    switch (n) {
      case this.KINDS.push:
        return this.decodePush(t, e, r);
      case this.KINDS.reply:
        return this.decodeReply(t, e, r);
      case this.KINDS.broadcast:
        return this.decodeBroadcast(t, e, r);
    }
  },
  /** @private */
  decodePush(t, e, n) {
    let r = e.getUint8(1), i = e.getUint8(2), s = e.getUint8(3), a = this.HEADER_LENGTH + this.META_LENGTH - 1, o = n.decode(t.slice(a, a + r));
    a = a + r;
    let l = n.decode(t.slice(a, a + i));
    a = a + i;
    let u = n.decode(t.slice(a, a + s));
    a = a + s;
    let h = t.slice(a, t.byteLength);
    return { join_ref: o, ref: null, topic: l, event: u, payload: h };
  },
  /** @private */
  decodeReply(t, e, n) {
    let r = e.getUint8(1), i = e.getUint8(2), s = e.getUint8(3), a = e.getUint8(4), o = this.HEADER_LENGTH + this.META_LENGTH, l = n.decode(t.slice(o, o + r));
    o = o + r;
    let u = n.decode(t.slice(o, o + i));
    o = o + i;
    let h = n.decode(t.slice(o, o + s));
    o = o + s;
    let c = n.decode(t.slice(o, o + a));
    o = o + a;
    let f = t.slice(o, t.byteLength), d = { status: c, response: f };
    return { join_ref: l, ref: u, topic: h, event: Re.reply, payload: d };
  },
  /** @private */
  decodeBroadcast(t, e, n) {
    let r = e.getUint8(1), i = e.getUint8(2), s = this.HEADER_LENGTH + 2, a = n.decode(t.slice(s, s + r));
    s = s + r;
    let o = n.decode(t.slice(s, s + i));
    s = s + i;
    let l = t.slice(s, t.byteLength);
    return { join_ref: null, ref: null, topic: a, event: o, payload: l };
  }
}, $u = class {
  /** Initializes the Socket *
   *
   * For IE8 support use an ES5-shim (https://github.com/es-shims/es5-shim)
   *
   * @constructor
   * @param {string} endPoint - The string WebSocket endpoint, ie, `"ws://example.com/socket"`,
   *                                               `"wss://example.com"`
   *                                               `"/socket"` (inherited host & protocol)
   * @param {SocketOptions} [opts] - Optional configuration
   */
  constructor(t, e = {}) {
    this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] }, this.channels = [], this.sendBuffer = [], this.ref = 0, this.fallbackRef = null, this.timeout = e.timeout || Cu, this.transport = e.transport || be.WebSocket || Ye, this.conn = void 0, this.primaryPassedHealthCheck = !1, this.longPollFallbackMs = e.longPollFallbackMs, this.fallbackTimer = null;
    let n = null;
    try {
      n = be && be.sessionStorage;
    } catch {
    }
    this.sessionStore = e.sessionStorage || n, this.establishedConnections = 0, this.defaultEncoder = Bt.encode.bind(Bt), this.defaultDecoder = Bt.decode.bind(Bt), this.closeWasClean = !0, this.disconnecting = !1, this.binaryType = e.binaryType || "arraybuffer", this.connectClock = 1, this.pageHidden = !1, this.encode = void 0, this.decode = void 0, this.transport !== Ye ? (this.encode = e.encode || this.defaultEncoder, this.decode = e.decode || this.defaultDecoder) : (this.encode = this.defaultEncoder, this.decode = this.defaultDecoder);
    let r = null;
    tt && tt.addEventListener && (tt.addEventListener("pagehide", (i) => {
      this.conn && (this.disconnect(), r = this.connectClock);
    }), tt.addEventListener("pageshow", (i) => {
      r === this.connectClock && (r = null, this.connect());
    }), tt.addEventListener("visibilitychange", () => {
      document.visibilityState === "hidden" ? this.pageHidden = !0 : (this.pageHidden = !1, !this.isConnected() && !this.closeWasClean && this.teardown(() => this.connect()));
    })), this.heartbeatIntervalMs = e.heartbeatIntervalMs || 3e4, this.autoSendHeartbeat = e.autoSendHeartbeat ?? !0, this.heartbeatCallback = e.heartbeatCallback ?? (() => {
    }), this.rejoinAfterMs = (i) => e.rejoinAfterMs ? e.rejoinAfterMs(i) : [1e3, 2e3, 5e3][i - 1] || 1e4, this.reconnectAfterMs = (i) => e.reconnectAfterMs ? e.reconnectAfterMs(i) : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][i - 1] || 5e3, this.logger = e.logger || null, !this.logger && e.debug && (this.logger = (i, s, a) => {
      console.log(`${i}: ${s}`, a);
    }), this.longpollerTimeout = e.longpollerTimeout || 2e4, this.params = it(e.params || {}), this.endPoint = `${t}/${In.websocket}`, this.vsn = e.vsn || xu, this.heartbeatTimeoutTimer = null, this.heartbeatTimer = null, this.heartbeatSentAt = null, this.pendingHeartbeatRef = null, this.reconnectTimer = new zi(() => {
      if (this.pageHidden) {
        this.log("Not reconnecting as page is hidden!"), this.teardown();
        return;
      }
      this.teardown(async () => {
        e.beforeReconnect && await e.beforeReconnect(), this.connect();
      });
    }, this.reconnectAfterMs), this.authToken = e.authToken && it(e.authToken);
  }
  /**
   * Returns the LongPoll transport reference
   */
  getLongPollTransport() {
    return Ye;
  }
  /**
   * Disconnects and replaces the active transport
   *
   * @param {SocketTransport} newTransport - The new transport class to instantiate
   *
   */
  replaceTransport(t) {
    this.connectClock++, this.closeWasClean = !0, clearTimeout(this.fallbackTimer), this.reconnectTimer.reset(), this.conn && (this.conn.close(), this.conn = null), this.transport = t;
  }
  /**
   * Returns the socket protocol
   *
   * @returns {"wss" | "ws"}
   */
  protocol() {
    return location.protocol.match(/^https/) ? "wss" : "ws";
  }
  /**
   * The fully qualified socket url
   *
   * @returns {string}
   */
  endPointURL() {
    let t = Qt.appendParams(
      Qt.appendParams(this.endPoint, this.params()),
      { vsn: this.vsn }
    );
    return t.charAt(0) !== "/" ? t : t.charAt(1) === "/" ? `${this.protocol()}:${t}` : `${this.protocol()}://${location.host}${t}`;
  }
  /**
   * Disconnects the socket
   *
   * See https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes for valid status codes.
   *
   * @param {() => void} [callback] - Optional callback which is called after socket is disconnected.
   * @param {number} [code] - A status code for disconnection (Optional).
   * @param {string} [reason] - A textual description of the reason to disconnect. (Optional)
   */
  disconnect(t, e, n) {
    this.connectClock++, this.disconnecting = !0, this.closeWasClean = !0, clearTimeout(this.fallbackTimer), this.reconnectTimer.reset(), this.teardown(() => {
      this.disconnecting = !1, t && t();
    }, e, n);
  }
  /**
   * @param {Params} [params] - [DEPRECATED] The params to send when connecting, for example `{user_id: userToken}`
   *
   * Passing params to connect is deprecated; pass them in the Socket constructor instead:
   * `new Socket("/socket", {params: {user_id: userToken}})`.
   */
  connect(t) {
    t && (console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"), this.params = it(t)), !(this.conn && !this.disconnecting) && (this.longPollFallbackMs && this.transport !== Ye ? this.connectWithFallback(Ye, this.longPollFallbackMs) : this.transportConnect());
  }
  /**
   * Logs the message. Override `this.logger` for specialized logging. noops by default
   * @param {string} kind
   * @param {string} msg
   * @param {Object} data
   */
  log(t, e, n) {
    this.logger && this.logger(t, e, n);
  }
  /**
   * Returns true if a logger has been set on this socket.
   */
  hasLogger() {
    return this.logger !== null;
  }
  /**
   * Registers callbacks for connection open events
   *
   * @example socket.onOpen(function(){ console.info("the socket was opened") })
   *
   * @param {SocketOnOpen} callback
   */
  onOpen(t) {
    let e = this.makeRef();
    return this.stateChangeCallbacks.open.push([e, t]), e;
  }
  /**
   * Registers callbacks for connection close events
   * @param {SocketOnClose} callback
   * @returns {string}
   */
  onClose(t) {
    let e = this.makeRef();
    return this.stateChangeCallbacks.close.push([e, t]), e;
  }
  /**
   * Registers callbacks for connection error events
   *
   * @example socket.onError(function(error){ alert("An error occurred") })
   *
   * @param {SocketOnError} callback
   * @returns {string}
   */
  onError(t) {
    let e = this.makeRef();
    return this.stateChangeCallbacks.error.push([e, t]), e;
  }
  /**
   * Registers callbacks for connection message events
   * @param {SocketOnMessage} callback
   * @returns {string}
   */
  onMessage(t) {
    let e = this.makeRef();
    return this.stateChangeCallbacks.message.push([e, t]), e;
  }
  /**
   * Sets a callback that receives lifecycle events for internal heartbeat messages.
   * Useful for instrumenting connection health (e.g. sent/ok/timeout/disconnected).
   * @param {HeartbeatCallback} callback
   */
  onHeartbeat(t) {
    this.heartbeatCallback = t;
  }
  /**
   * Pings the server and invokes the callback with the RTT in milliseconds
   * @param {(timeDelta: number) => void} callback
   *
   * Returns true if the ping was pushed or false if unable to be pushed.
   */
  ping(t) {
    if (!this.isConnected())
      return !1;
    let e = this.makeRef(), n = Date.now();
    this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: e });
    let r = this.onMessage((i) => {
      i.ref === e && (this.off([r]), t(Date.now() - n));
    });
    return !0;
  }
  /**
   * @private
   *
   * @param {Function}
   */
  transportName(t) {
    switch (t) {
      case Ye:
        return "LongPoll";
      default:
        return t.name;
    }
  }
  /**
   * @private
   */
  transportConnect() {
    this.connectClock++, this.closeWasClean = !1;
    let t;
    this.authToken && (t = ["phoenix", `${Pn}${btoa(this.authToken()).replace(/=/g, "")}`]), this.conn = new this.transport(this.endPointURL(), t), this.conn.binaryType = this.binaryType, this.conn.timeout = this.longpollerTimeout, this.conn.onopen = () => this.onConnOpen(), this.conn.onerror = (e) => this.onConnError(e), this.conn.onmessage = (e) => this.onConnMessage(e), this.conn.onclose = (e) => this.onConnClose(e);
  }
  getSession(t) {
    return this.sessionStore && this.sessionStore.getItem(t);
  }
  storeSession(t, e) {
    this.sessionStore && this.sessionStore.setItem(t, e);
  }
  connectWithFallback(t, e = 2500) {
    clearTimeout(this.fallbackTimer);
    let n = !1, r = !0, i, s, a = this.transportName(t), o = (l) => {
      this.log("transport", `falling back to ${a}...`, l), this.off([i, s]), r = !1, this.replaceTransport(t), this.transportConnect();
    };
    if (this.getSession(`phx:fallback:${a}`))
      return o("memorized");
    this.fallbackTimer = setTimeout(o, e), s = this.onError((l) => {
      this.log("transport", "error", l), r && !n && (clearTimeout(this.fallbackTimer), o(l));
    }), this.fallbackRef && this.off([this.fallbackRef]), this.fallbackRef = this.onOpen(() => {
      if (n = !0, !r) {
        let l = this.transportName(t);
        return this.primaryPassedHealthCheck || this.storeSession(`phx:fallback:${l}`, "true"), this.log("transport", `established ${l} fallback`);
      }
      clearTimeout(this.fallbackTimer), this.fallbackTimer = setTimeout(o, e), this.ping((l) => {
        this.log("transport", "connected to primary after", l), this.primaryPassedHealthCheck = !0, clearTimeout(this.fallbackTimer);
      });
    }), this.transportConnect();
  }
  clearHeartbeats() {
    clearTimeout(this.heartbeatTimer), clearTimeout(this.heartbeatTimeoutTimer);
  }
  onConnOpen() {
    this.hasLogger() && this.log("transport", `connected to ${this.endPointURL()}`), this.closeWasClean = !1, this.disconnecting = !1, this.establishedConnections++, this.flushSendBuffer(), this.reconnectTimer.reset(), this.autoSendHeartbeat && this.resetHeartbeat(), this.triggerStateCallbacks("open");
  }
  /**
   * @private
   */
  heartbeatTimeout() {
    if (this.pendingHeartbeatRef) {
      this.pendingHeartbeatRef = null, this.heartbeatSentAt = null, this.hasLogger() && this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
      try {
        this.heartbeatCallback("timeout");
      } catch (t) {
        this.log("error", "error in heartbeat callback", t);
      }
      this.triggerChanError(new Error("heartbeat timeout")), this.closeWasClean = !1, this.teardown(() => this.reconnectTimer.scheduleTimeout(), Ru, "heartbeat timeout");
    }
  }
  resetHeartbeat() {
    this.conn && this.conn.skipHeartbeat || (this.pendingHeartbeatRef = null, this.clearHeartbeats(), this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs));
  }
  teardown(t, e, n) {
    if (!this.conn)
      return t && t();
    const r = this.conn;
    this.waitForBufferDone(r, () => {
      e ? r.close(e, n || "") : r.close(), this.waitForSocketClosed(r, () => {
        this.conn === r && (this.conn.onopen = function() {
        }, this.conn.onerror = function() {
        }, this.conn.onmessage = function() {
        }, this.conn.onclose = function() {
        }, this.conn = null), t && t();
      });
    });
  }
  waitForBufferDone(t, e, n = 1) {
    if (n === 5 || !t.bufferedAmount) {
      e();
      return;
    }
    setTimeout(() => {
      this.waitForBufferDone(t, e, n + 1);
    }, 150 * n);
  }
  waitForSocketClosed(t, e, n = 1) {
    if (n === 5 || t.readyState === ke.closed) {
      e();
      return;
    }
    setTimeout(() => {
      this.waitForSocketClosed(t, e, n + 1);
    }, 150 * n);
  }
  /**
  * @param {CloseEvent} event
  */
  onConnClose(t) {
    this.conn && (this.conn.onclose = () => {
    }), this.hasLogger() && this.log("transport", "close", t), this.triggerChanError(t), this.clearHeartbeats(), this.closeWasClean || this.reconnectTimer.scheduleTimeout(), this.triggerStateCallbacks("close", t);
  }
  /**
   * @private
   * @param {Event} error
   */
  onConnError(t) {
    this.hasLogger() && this.log("transport", "error", t);
    let e = this.transport, n = this.establishedConnections;
    this.triggerStateCallbacks("error", t, e, n), (e === this.transport || n > 0) && this.triggerChanError(t);
  }
  /**
   * @private
   * @param {unknown} [reason] underlying close/error event forwarded to channel error listeners
   */
  triggerChanError(t) {
    this.channels.forEach((e) => {
      e.isErrored() || e.isLeaving() || e.isClosed() || e.trigger(Re.error, t);
    });
  }
  /**
   * @returns {string}
   */
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case ke.connecting:
        return "connecting";
      case ke.open:
        return "open";
      case ke.closing:
        return "closing";
      default:
        return "closed";
    }
  }
  /**
   * @returns {boolean}
   */
  isConnected() {
    return this.connectionState() === "open";
  }
  /**
   *
   * @param {Channel} channel
   */
  remove(t) {
    this.off(t.stateChangeRefs), this.channels = this.channels.filter((e) => e !== t);
  }
  /**
   * Removes `onOpen`, `onClose`, `onError,` and `onMessage` registrations.
   *
   * @param {string[]} refs - list of refs returned by calls to
   *                 `onOpen`, `onClose`, `onError,` and `onMessage`
   */
  off(t) {
    for (let e in this.stateChangeCallbacks)
      this.stateChangeCallbacks[e] = this.stateChangeCallbacks[e].filter(([n]) => t.indexOf(n) === -1);
  }
  /**
   * Initiates a new channel for the given topic
   *
   * @param {string} topic
   * @param {Params | (() => Params)} [chanParams]- Parameters for the channel
   * @returns {Channel}
   */
  channel(t, e = {}) {
    let n = new Pu(t, e, this);
    return this.channels.push(n), n;
  }
  /**
   * @param {Message<Record<string, any>>} data
   */
  push(t) {
    if (this.hasLogger()) {
      let { topic: e, event: n, payload: r, ref: i, join_ref: s } = t;
      this.log("push", `${e} ${n} (${s}, ${i})`, r);
    }
    this.isConnected() ? this.encode(t, (e) => this.conn.send(e)) : this.sendBuffer.push(() => this.encode(t, (e) => this.conn.send(e)));
  }
  /**
   * Return the next message ref, accounting for overflows
   * @returns {string}
   */
  makeRef() {
    let t = this.ref + 1;
    return t === this.ref ? this.ref = 0 : this.ref = t, this.ref.toString();
  }
  sendHeartbeat() {
    if (!this.isConnected()) {
      try {
        this.heartbeatCallback("disconnected");
      } catch (t) {
        this.log("error", "error in heartbeat callback", t);
      }
      return;
    }
    if (this.pendingHeartbeatRef) {
      this.heartbeatTimeout();
      return;
    }
    this.pendingHeartbeatRef = this.makeRef(), this.heartbeatSentAt = Date.now(), this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: this.pendingHeartbeatRef });
    try {
      this.heartbeatCallback("sent");
    } catch (t) {
      this.log("error", "error in heartbeat callback", t);
    }
    this.heartbeatTimeoutTimer = setTimeout(() => this.heartbeatTimeout(), this.heartbeatIntervalMs);
  }
  flushSendBuffer() {
    this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((t) => t()), this.sendBuffer = []);
  }
  /**
  * @param {MessageEvent<any>} rawMessage
  */
  onConnMessage(t) {
    this.decode(t.data, (e) => {
      let { topic: n, event: r, payload: i, ref: s, join_ref: a } = e;
      if (s && s === this.pendingHeartbeatRef) {
        const o = this.heartbeatSentAt ? Date.now() - this.heartbeatSentAt : void 0;
        this.clearHeartbeats();
        try {
          this.heartbeatCallback(i.status === "ok" ? "ok" : "error", o);
        } catch (l) {
          this.log("error", "error in heartbeat callback", l);
        }
        this.pendingHeartbeatRef = null, this.heartbeatSentAt = null, this.autoSendHeartbeat && (this.heartbeatTimer = setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs));
      }
      this.hasLogger() && this.log("receive", `${i.status || ""} ${n} ${r} ${s && "(" + s + ")" || ""}`.trim(), i);
      for (let o = 0; o < this.channels.length; o++) {
        const l = this.channels[o];
        l.isMember(n, r, i, a) && l.trigger(r, i, s, a);
      }
      this.triggerStateCallbacks("message", e);
    });
  }
  /**
   * @private
   * @template {keyof SocketStateChangeCallbacks} K
   * @param {K} event
   * @param {...Parameters<SocketStateChangeCallbacks[K][number][1]>} args
   * @returns {void}
   */
  triggerStateCallbacks(t, ...e) {
    try {
      this.stateChangeCallbacks[t].forEach(([n, r]) => {
        try {
          r(...e);
        } catch (i) {
          this.log("error", `error in ${t} callback`, i);
        }
      });
    } catch (n) {
      this.log("error", `error triggering ${t} callbacks`, n);
    }
  }
  leaveOpenTopic(t) {
    let e = this.channels.find((n) => n.topic === t && (n.isJoined() || n.isJoining()));
    e && (this.hasLogger() && this.log("transport", `leaving duplicate topic "${t}"`), e.leave());
  }
};
class At {
  constructor(e, n) {
    const r = Nu(n);
    this.presence = new Lu(e.getChannel(), r), this.presence.onJoin((i, s, a) => {
      const o = At.onJoinPayload(i, s, a);
      e.getChannel().trigger("presence", o);
    }), this.presence.onLeave((i, s, a) => {
      const o = At.onLeavePayload(i, s, a);
      e.getChannel().trigger("presence", o);
    }), this.presence.onSync(() => {
      e.getChannel().trigger("presence", { event: "sync" });
    });
  }
  get state() {
    return At.transformState(this.presence.state);
  }
  /**
   * @private
   * Remove 'metas' key
   * Change 'phx_ref' to 'presence_ref'
   * Remove 'phx_ref' and 'phx_ref_prev'
   *
   * @example Transform state
   * // returns {
   *  abc123: [
   *    { presence_ref: '2', user_id: 1 },
   *    { presence_ref: '3', user_id: 2 }
   *  ]
   * }
   * RealtimePresence.transformState({
   *  abc123: {
   *    metas: [
   *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
   *      { phx_ref: '3', user_id: 2 }
   *    ]
   *  }
   * })
   *
   */
  static transformState(e) {
    return e = Du(e), Object.getOwnPropertyNames(e).reduce((n, r) => {
      const i = e[r];
      return n[r] = Ht(i), n;
    }, {});
  }
  static onJoinPayload(e, n, r) {
    const i = Sr(n), s = Ht(r);
    return {
      event: "join",
      key: e,
      currentPresences: i,
      newPresences: s
    };
  }
  static onLeavePayload(e, n, r) {
    const i = Sr(n), s = Ht(r);
    return {
      event: "leave",
      key: e,
      currentPresences: i,
      leftPresences: s
    };
  }
}
function Ht(t) {
  return t.metas.map((e) => {
    const n = Object.getOwnPropertyDescriptors(e), r = Object.defineProperties({}, n);
    return r.presence_ref = r.phx_ref, delete r.phx_ref, delete r.phx_ref_prev, r;
  });
}
function Du(t) {
  return JSON.parse(JSON.stringify(t));
}
function Nu(t) {
  return (t == null ? void 0 : t.events) && { events: t.events };
}
function Sr(t) {
  return t != null && t.metas ? Ht(t) : [];
}
var jn;
(function(t) {
  t.SYNC = "sync", t.JOIN = "join", t.LEAVE = "leave";
})(jn || (jn = {}));
class Mi {
  get state() {
    return this.presenceAdapter.state;
  }
  /**
   * Creates a Presence helper that keeps the local presence state in sync with the server.
   *
   * @param channel - The realtime channel to bind to.
   * @param opts - Optional custom event names, e.g. `{ events: { state: 'state', diff: 'diff' } }`.
   *
   * @category Realtime
   *
   * @example Example for a presence channel
   * ```ts
   * const presence = new RealtimePresence(channel)
   *
   * channel.on('presence', ({ event, key }) => {
   *   console.log(`Presence ${event} on ${key}`)
   * })
   * ```
   */
  constructor(e, n) {
    this.channel = e, this.presenceAdapter = new At(this.channel.channelAdapter, n);
  }
}
function Uu(t) {
  if (t instanceof Error)
    return t;
  if (typeof t == "string")
    return new Error(t);
  if (t && typeof t == "object") {
    const e = t;
    if (typeof e.code == "number") {
      const n = typeof e.reason == "string" && e.reason ? ` (${e.reason})` : "";
      return new Error(`socket closed: ${e.code}${n}`, { cause: t });
    }
    return new Error("channel error: transport failure", { cause: t });
  }
  return new Error("channel error: connection lost");
}
class Fu {
  constructor(e, n, r) {
    const i = Bu(r);
    this.channel = e.getSocket().channel(n, i), this.socket = e;
  }
  get state() {
    return this.channel.state;
  }
  set state(e) {
    this.channel.state = e;
  }
  get joinedOnce() {
    return this.channel.joinedOnce;
  }
  get joinPush() {
    return this.channel.joinPush;
  }
  get rejoinTimer() {
    return this.channel.rejoinTimer;
  }
  on(e, n) {
    return this.channel.on(e, n);
  }
  off(e, n) {
    this.channel.off(e, n);
  }
  subscribe(e) {
    return this.channel.join(e);
  }
  unsubscribe(e) {
    return this.channel.leave(e);
  }
  teardown() {
    this.channel.teardown();
  }
  onClose(e) {
    this.channel.onClose(e);
  }
  onError(e) {
    return this.channel.onError(e);
  }
  push(e, n, r) {
    let i;
    try {
      i = this.channel.push(e, n, r);
    } catch {
      throw new Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`);
    }
    if (this.channel.pushBuffer.length > wu) {
      const s = this.channel.pushBuffer.shift();
      s.cancelTimeout(), this.socket.log("channel", `discarded push due to buffer overflow: ${s.event}`, s.payload());
    }
    return i;
  }
  updateJoinPayload(e) {
    const n = this.channel.joinPush.payload();
    this.channel.joinPush.payload = () => Object.assign(Object.assign({}, n), e);
  }
  canPush() {
    return this.socket.isConnected() && this.state === Le.joined;
  }
  isJoined() {
    return this.state === Le.joined;
  }
  isJoining() {
    return this.state === Le.joining;
  }
  isClosed() {
    return this.state === Le.closed;
  }
  isLeaving() {
    return this.state === Le.leaving;
  }
  updateFilterBindings(e) {
    this.channel.filterBindings = e;
  }
  updatePayloadTransform(e) {
    this.channel.onMessage = e;
  }
  /**
   * @internal
   */
  getChannel() {
    return this.channel;
  }
}
function Bu(t) {
  return {
    config: Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "", enabled: !1 },
      private: !1
    }, t.config)
  };
}
const zu = /[,()"\\]/, Mu = (t) => zu.test(t) || t !== t.trim(), qu = (t) => `"${t.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`, Er = (t) => {
  const e = t === null ? "null" : String(t);
  return Mu(e) ? qu(e) : e;
}, Hu = (t) => t === null ? "null" : String(t), Wu = (t, e) => {
  if (t === "in") {
    const n = Array.isArray(e) ? e : [e];
    if (n.length === 0)
      throw new Error("Realtime `in` filter requires at least one value.");
    return `in.(${Array.from(new Set(n)).map((i) => Er(i)).join(",")})`;
  }
  return t === "is" ? `is.${Hu(e)}` : `${t}.${Er(e)}`;
};
class qi {
  constructor() {
    this.filters = [];
  }
  add(e, n, r, i = !1) {
    const s = i ? "not." : "";
    return this.filters.push(`${e}=${s}${Wu(n, r)}`), this;
  }
  /** Match rows where `column` equals `value` (`column=eq.value`). */
  eq(e, n) {
    return this.add(e, "eq", n);
  }
  /** Match rows where `column` does not equal `value` (`column=neq.value`). */
  neq(e, n) {
    return this.add(e, "neq", n);
  }
  /** Match rows where `column` is greater than `value` (`column=gt.value`). */
  gt(e, n) {
    return this.add(e, "gt", n);
  }
  /** Match rows where `column` is greater than or equal to `value` (`column=gte.value`). */
  gte(e, n) {
    return this.add(e, "gte", n);
  }
  /** Match rows where `column` is less than `value` (`column=lt.value`). */
  lt(e, n) {
    return this.add(e, "lt", n);
  }
  /** Match rows where `column` is less than or equal to `value` (`column=lte.value`). */
  lte(e, n) {
    return this.add(e, "lte", n);
  }
  /**
   * Match rows where `column` is one of `values` (`column=in.(a,b,c)`).
   * Requires at least one value; duplicates are removed. An element containing a
   * reserved character is double-quoted (`in.("a,b",c)`), so commas inside an
   * element are preserved. `null` is intentionally not accepted (`IN (null)`
   * never matches in SQL) — use `is`/`not('col','is',null)` for null checks.
   */
  in(e, n) {
    return this.add(e, "in", n);
  }
  /** Match rows where `column` matches the case-sensitive `pattern` (`column=like.pattern`). */
  like(e, n) {
    return this.add(e, "like", n);
  }
  /** Match rows where `column` matches the case-insensitive `pattern` (`column=ilike.pattern`). */
  ilike(e, n) {
    return this.add(e, "ilike", n);
  }
  /** Match rows where `column` matches the POSIX regex `pattern` (`column=match.pattern`). */
  match(e, n) {
    return this.add(e, "match", n);
  }
  /** Match rows where `column` matches the case-insensitive POSIX regex `pattern` (`column=imatch.pattern`). */
  imatch(e, n) {
    return this.add(e, "imatch", n);
  }
  /**
   * Match rows where `column` `IS` the given value (`column=is.null`).
   * Accepts `null`, a boolean, or the keywords `'null' | 'true' | 'false' | 'unknown'`.
   */
  is(e, n) {
    return this.add(e, "is", n);
  }
  /** Match rows where `column` is distinct from `value` (`column=isdistinct.value`). NULL-safe inequality. */
  isDistinct(e, n) {
    return this.add(e, "isdistinct", n);
  }
  not(e, n, r) {
    return this.add(e, n, r, !0);
  }
  /**
   * Serialize all conditions into the comma-separated (AND) filter string.
   *
   * Conditions are joined by commas, which the server applies as `AND`. A scalar
   * value (or single `in` element) that contains a reserved character — `,`,
   * `(`, `)`, `"`, `\` — or surrounding whitespace is double-quoted and escaped
   * the way PostgREST does, so commas inside a value are preserved rather than
   * read as a condition boundary.
   */
  build() {
    return this.filters.join(",");
  }
  /** Alias for {@link build}; lets the builder be used wherever a string is expected. */
  toString() {
    return this.build();
  }
}
var Ln;
(function(t) {
  t.ALL = "*", t.INSERT = "INSERT", t.UPDATE = "UPDATE", t.DELETE = "DELETE";
})(Ln || (Ln = {}));
var $e;
(function(t) {
  t.BROADCAST = "broadcast", t.PRESENCE = "presence", t.POSTGRES_CHANGES = "postgres_changes", t.SYSTEM = "system";
})($e || ($e = {}));
var ve;
(function(t) {
  t.SUBSCRIBED = "SUBSCRIBED", t.TIMED_OUT = "TIMED_OUT", t.CLOSED = "CLOSED", t.CHANNEL_ERROR = "CHANNEL_ERROR";
})(ve || (ve = {}));
class _e {
  get state() {
    return this.channelAdapter.state;
  }
  set state(e) {
    this.channelAdapter.state = e;
  }
  get joinedOnce() {
    return this.channelAdapter.joinedOnce;
  }
  get timeout() {
    return this.socket.timeout;
  }
  get joinPush() {
    return this.channelAdapter.joinPush;
  }
  get rejoinTimer() {
    return this.channelAdapter.rejoinTimer;
  }
  /**
   * Creates a channel that can broadcast messages, sync presence, and listen to Postgres changes.
   *
   * The topic determines which realtime stream you are subscribing to. Config options let you
   * enable acknowledgement for broadcasts, presence tracking, or private channels.
   *
   * @category Realtime
   *
   * @example Using supabase-js (recommended)
   * ```ts
   * import { createClient } from '@supabase/supabase-js'
   *
   * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
   * const channel = supabase.channel('room1')
   * channel
   *   .on('broadcast', { event: 'cursor-pos' }, (payload) => console.log(payload))
   *   .subscribe()
   * ```
   *
   * @example Standalone import for bundle-sensitive environments
   * ```ts
   * import RealtimeClient from '@supabase/realtime-js'
   *
   * const client = new RealtimeClient('https://xyzcompany.supabase.co/realtime/v1', {
   *   params: { apikey: 'your-publishable-key' },
   * })
   * const channel = new RealtimeChannel('realtime:public:messages', { config: {} }, client)
   * ```
   */
  constructor(e, n = { config: {} }, r) {
    var i, s;
    if (this.topic = e, this.params = n, this.socket = r, this.bindings = {}, this.subTopic = e.replace(/^realtime:/i, ""), this.params.config = Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "", enabled: !1 },
      private: !1
    }, n.config), this.channelAdapter = new Fu(this.socket.socketAdapter, e, this.params), this.presence = new Mi(this), this._onClose(() => {
      this.socket._remove(this);
    }), this._updateFilterTransform(), this.broadcastEndpointURL = Bi(this.socket.socketAdapter.endPointURL()), this.private = this.params.config.private || !1, !this.private && (!((s = (i = this.params.config) === null || i === void 0 ? void 0 : i.broadcast) === null || s === void 0) && s.replay))
      throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`);
  }
  /**
   * Subscribe registers your client with the server.
   *
   * The optional `callback` receives a `status` and, on failure, an `err` argument.
   * Log the full `err` so its `cause`, `name`, and any structured fields aren't hidden
   * behind `err.message`.
   *
   * @category Realtime
   *
   * @example Handling errors
   * ```js
   * supabase.channel('room1').subscribe((status, err) => {
   *   if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
   *     // Log the full error: its `cause` often holds the underlying reason.
   *     console.error(status, err)
   *   }
   * })
   * ```
   */
  subscribe(e, n = this.timeout) {
    var r, i, s, a;
    if (this.socket.isConnected() || this.socket.connect(), this.channelAdapter.isClosed()) {
      const { config: { broadcast: o, presence: l, private: u, postgres_changes_options: h } } = this.params, c = (i = (r = this.bindings.postgres_changes) === null || r === void 0 ? void 0 : r.map((v) => v.filter)) !== null && i !== void 0 ? i : [], f = !!this.bindings[$e.PRESENCE] && this.bindings[$e.PRESENCE].length > 0 || ((s = this.params.config.presence) === null || s === void 0 ? void 0 : s.enabled) === !0, d = {}, p = Object.assign({ broadcast: o, presence: Object.assign(Object.assign({}, l), { enabled: f }), postgres_changes: c, private: u }, h ? { postgres_changes_options: h } : {});
      this.socket.accessTokenValue && (d.access_token = this.socket.accessTokenValue), this._onError((v) => {
        e == null || e(ve.CHANNEL_ERROR, Uu(v));
      }), this._onClose(() => e == null ? void 0 : e(ve.CLOSED)), this.updateJoinPayload(Object.assign({ config: p }, d)), this._updateFilterMessage();
      const y = h != null && h.wait && c.length > 0 ? Math.max(n, ((a = h.timeout) !== null && a !== void 0 ? a : mu) + yu) : n;
      this.channelAdapter.subscribe(y).receive("ok", async ({ postgres_changes: v }) => {
        if (this.socket._isManualToken() || this.socket.setAuth(), v === void 0) {
          e == null || e(ve.SUBSCRIBED);
          return;
        }
        this._updatePostgresBindings(v, e);
      }).receive("error", (v) => {
        this.state = Le.errored;
        const w = Object.values(v).join(", ") || "error";
        e == null || e(ve.CHANNEL_ERROR, new Error(w, { cause: v }));
      }).receive("timeout", () => {
        e == null || e(ve.TIMED_OUT);
      });
    }
    return this;
  }
  _updatePostgresBindings(e, n) {
    var r;
    const i = this.bindings.postgres_changes, s = (r = i == null ? void 0 : i.length) !== null && r !== void 0 ? r : 0, a = [];
    for (let o = 0; o < s; o++) {
      const l = i[o], { filter: { event: u, schema: h, table: c, filter: f } } = l, d = e && e[o];
      if (d && d.event === u && _e.isFilterValueEqual(d.schema, h) && _e.isFilterValueEqual(d.table, c) && _e.isFilterValueEqual(d.filter, f))
        a.push(Object.assign(Object.assign({}, l), { id: d.id }));
      else {
        this.unsubscribe(), this.state = Le.errored, n == null || n(ve.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
        return;
      }
    }
    this.bindings.postgres_changes = a, this.state != Le.errored && n && n(ve.SUBSCRIBED);
  }
  /**
   * Returns the current presence state for this channel.
   *
   * The shape is a map keyed by presence key (for example a user id) where each entry contains the
   * tracked metadata for that user.
   *
   * @category Realtime
   */
  presenceState() {
    return this.presence.state;
  }
  /**
   * Sends the supplied payload to the presence tracker so other subscribers can see that this
   * client is online. Use `untrack` to stop broadcasting presence for the same key.
   *
   * Tracking makes this client visible to other subscribers immediately, regardless of this
   * channel's `config.presence.enabled` setting or whether it has a `presence` listener — that
   * flag only affects whether *this* client receives presence updates from others (and, on
   * RLS-protected channels, whether it's authorized to do so).
   *
   * @category Realtime
   */
  async track(e, n = {}) {
    return await this.send({
      type: "presence",
      event: "track",
      payload: e
    }, n);
  }
  /**
   * Removes the current presence state for this client.
   *
   * @category Realtime
   */
  async untrack(e = {}) {
    return await this.send({
      type: "presence",
      event: "untrack"
    }, e);
  }
  /**
   * Listen to realtime events on this channel.
   * @category Realtime
   *
   * @remarks
   * - By default, Broadcast and Presence are enabled for all projects.
   * - By default, listening to database changes is disabled for new projects due to database performance and security concerns. You can turn it on by managing Realtime's [replication](/docs/guides/api#realtime-api-overview).
   * - You can receive the "previous" data for updates and deletes by setting the table's `REPLICA IDENTITY` to `FULL` (e.g., `ALTER TABLE your_table REPLICA IDENTITY FULL;`).
   * - Row level security is not applied to delete statements. When RLS is enabled and replica identity is set to full, only the primary key is sent to clients.
   *
   * @example Listen to broadcast messages
   * ```js
   * const channel = supabase.channel("room1")
   *
   * channel.on("broadcast", { event: "cursor-pos" }, (payload) => {
   *   console.log("Cursor position received!", payload);
   * }).subscribe((status) => {
   *   if (status === "SUBSCRIBED") {
   *     channel.send({
   *       type: "broadcast",
   *       event: "cursor-pos",
   *       payload: { x: Math.random(), y: Math.random() },
   *     });
   *   }
   * });
   * ```
   *
   * @example Listen to presence sync
   * ```js
   * const channel = supabase.channel('room1')
   * channel
   *   .on('presence', { event: 'sync' }, () => {
   *     console.log('Synced presence state: ', channel.presenceState())
   *   })
   *   .subscribe(async (status) => {
   *     if (status === 'SUBSCRIBED') {
   *       await channel.track({ online_at: new Date().toISOString() })
   *     }
   *   })
   * ```
   *
   * @example Listen to presence join
   * ```js
   * const channel = supabase.channel('room1')
   * channel
   *   .on('presence', { event: 'join' }, ({ newPresences }) => {
   *     console.log('Newly joined presences: ', newPresences)
   *   })
   *   .subscribe(async (status) => {
   *     if (status === 'SUBSCRIBED') {
   *       await channel.track({ online_at: new Date().toISOString() })
   *     }
   *   })
   * ```
   *
   * @example Listen to presence leave
   * ```js
   * const channel = supabase.channel('room1')
   * channel
   *   .on('presence', { event: 'leave' }, ({ leftPresences }) => {
   *     console.log('Newly left presences: ', leftPresences)
   *   })
   *   .subscribe(async (status) => {
   *     if (status === 'SUBSCRIBED') {
   *       await channel.track({ online_at: new Date().toISOString() })
   *       await channel.untrack()
   *     }
   *   })
   * ```
   *
   * Registering the same `postgres_changes` filter more than once on a channel is a no-op: the
   * duplicate is ignored and an error is logged, since the server only ever creates one
   * subscription per distinct filter.
   *
   * @example Listen to all database changes
   * ```js
   * supabase
   *   .channel('room1')
   *   .on('postgres_changes', { event: '*', schema: '*' }, payload => {
   *     console.log('Change received!', payload)
   *   })
   *   .subscribe()
   * ```
   *
   * @example Listen to a specific table
   * ```js
   * supabase
   *   .channel('room1')
   *   .on('postgres_changes', { event: '*', schema: 'public', table: 'countries' }, payload => {
   *     console.log('Change received!', payload)
   *   })
   *   .subscribe()
   * ```
   *
   * @example Listen to inserts
   * ```js
   * supabase
   *   .channel('room1')
   *   .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'countries' }, payload => {
   *     console.log('Change received!', payload)
   *   })
   *   .subscribe()
   * ```
   *
   * @exampleDescription Listen to updates
   * By default, Supabase will send only the updated record. If you want to receive the previous values as well you can
   * enable full replication for the table you are listening to:
   *
   * ```sql
   * alter table "your_table" replica identity full;
   * ```
   *
   * @example Listen to updates
   * ```js
   * supabase
   *   .channel('room1')
   *   .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'countries' }, payload => {
   *     console.log('Change received!', payload)
   *   })
   *   .subscribe()
   * ```
   *
   * @exampleDescription Listen to deletes
   * By default, Supabase does not send deleted records. If you want to receive the deleted record you can
   * enable full replication for the table you are listening to:
   *
   * ```sql
   * alter table "your_table" replica identity full;
   * ```
   *
   * @example Listen to deletes
   * ```js
   * supabase
   *   .channel('room1')
   *   .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'countries' }, payload => {
   *     console.log('Change received!', payload)
   *   })
   *   .subscribe()
   * ```
   *
   * @exampleDescription Listen to multiple events
   * You can chain listeners if you want to listen to multiple events for each table.
   *
   * @example Listen to multiple events
   * ```js
   * supabase
   *   .channel('room1')
   *   .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'countries' }, handleRecordInserted)
   *   .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'countries' }, handleRecordDeleted)
   *   .subscribe()
   * ```
   *
   * @exampleDescription Listen to row level changes
   * You can listen to individual rows using the format `{table}:{col}=eq.{val}` - where `{col}` is the column name, and `{val}` is the value which you want to match.
   *
   * @example Listen to row level changes
   * ```js
   * supabase
   *   .channel('room1')
   *   .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'countries', filter: 'id=eq.200' }, handleRecordUpdated)
   *   .subscribe()
   * ```
   */
  on(e, n, r) {
    const i = this.channelAdapter.isJoined() || this.channelAdapter.isJoining(), s = e === $e.PRESENCE || e === $e.POSTGRES_CHANGES;
    if (i && s)
      throw this.socket.log("channel", `cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`), new Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);
    return this._on(e, n, r);
  }
  /**
   * Sends a broadcast message explicitly via REST API.
   *
   * This method always uses the REST API endpoint regardless of WebSocket connection state.
   * Useful when you want to guarantee REST delivery or when gradually migrating from implicit REST fallback.
   *
   * Payloads that are `ArrayBuffer` or `ArrayBufferView` (e.g. `Uint8Array`) are sent as
   * `application/octet-stream`; all other payloads are JSON-encoded.
   *
   * @param event The name of the broadcast event
   * @param payload Payload to be sent (required)
   * @param opts Options including timeout
   * @returns Promise resolving to object with success status, and error details if failed
   *
   * @category Realtime
   */
  async httpSend(e, n, r = {}) {
    var i;
    if (n == null)
      return Promise.reject(new Error("Payload is required for httpSend()"));
    const s = n instanceof ArrayBuffer || ArrayBuffer.isView(n), a = {
      apikey: this.socket.apiKey ? this.socket.apiKey : "",
      "Content-Type": s ? "application/octet-stream" : "application/json"
    };
    this.socket.accessTokenValue && (a.Authorization = `Bearer ${this.socket.accessTokenValue}`);
    const o = new URL(this.broadcastEndpointURL);
    o.pathname += `/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`, this.private && o.searchParams.set("private", "true");
    const l = {
      method: "POST",
      headers: a,
      body: s ? n : JSON.stringify(n)
    }, u = await this._fetchWithTimeout(o.toString(), l, (i = r.timeout) !== null && i !== void 0 ? i : this.timeout);
    if (u.status === 202)
      return { success: !0 };
    if (u.status === 404)
      return Promise.reject(new Error("httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md"));
    let h = u.statusText;
    try {
      const c = await u.json();
      h = c.error || c.message || h;
    } catch {
    }
    return Promise.reject(new Error(h));
  }
  /**
   * Sends a message into the channel.
   *
   * @param args Arguments to send to channel
   * @param args.type The type of event to send
   * @param args.event The name of the event being sent
   * @param args.payload Payload to be sent
   * @param opts Options to be used during the send process
   *
   * @category Realtime
   *
   * @remarks
   * - When using REST you don't need to subscribe to the channel
   * - REST calls are only available from 2.37.0 onwards
   * - If you create a channel only to send a REST broadcast, remove it from
   *   the client when the send completes
   *
   * @example Send a message via websocket
   * ```js
   * const channel = supabase.channel('room1')
   *
   * channel.subscribe((status) => {
   *   if (status === 'SUBSCRIBED') {
   *     channel.send({
   *       type: 'broadcast',
   *       event: 'cursor-pos',
   *       payload: { x: Math.random(), y: Math.random() },
   *     })
   *   }
   * })
   * ```
   *
   * @exampleResponse Send a message via websocket
   * ```js
   * ok | timed out | error
   * ```
   *
   * @example Send a message via REST
   * ```js
   * const channel = supabase.channel('room1')
   *
   * try {
   *   await channel.httpSend('cursor-pos', { x: Math.random(), y: Math.random() })
   * } finally {
   *   await supabase.removeChannel(channel)
   * }
   * ```
   */
  async send(e, n = {}) {
    var r, i;
    if (!this.channelAdapter.canPush() && e.type === "broadcast") {
      const s = "Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.";
      this.socket.hasLogger() ? this.socket.log("channel", s) : console.warn(s);
      const { event: a, payload: o } = e, l = {
        apikey: this.socket.apiKey ? this.socket.apiKey : "",
        "Content-Type": "application/json"
      };
      this.socket.accessTokenValue && (l.Authorization = `Bearer ${this.socket.accessTokenValue}`);
      const u = {
        method: "POST",
        headers: l,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: a,
              payload: o,
              private: this.private
            }
          ]
        })
      };
      try {
        const h = await this._fetchWithTimeout(this.broadcastEndpointURL, u, (r = n.timeout) !== null && r !== void 0 ? r : this.timeout);
        return await ((i = h.body) === null || i === void 0 ? void 0 : i.cancel()), h.ok ? "ok" : "error";
      } catch (h) {
        return h instanceof Error && h.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((s) => {
        var a, o, l;
        const u = this.channelAdapter.push(e.type, e, n.timeout || this.timeout);
        e.type === "broadcast" && !(!((l = (o = (a = this.params) === null || a === void 0 ? void 0 : a.config) === null || o === void 0 ? void 0 : o.broadcast) === null || l === void 0) && l.ack) && s("ok"), u.receive("ok", () => s("ok")), u.receive("error", () => s("error")), u.receive("timeout", () => s("timed out"));
      });
  }
  /**
   * Updates the payload that will be sent the next time the channel joins (reconnects).
   * Useful for rotating access tokens or updating config without re-creating the channel.
   *
   * @category Realtime
   */
  updateJoinPayload(e) {
    this.channelAdapter.updateJoinPayload(e);
  }
  /**
   * Leaves the channel.
   *
   * Unsubscribes from server events, and instructs channel to terminate on server.
   * Triggers onClose() hooks.
   *
   * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
   * channel.unsubscribe().receive("ok", () => alert("left!") )
   *
   * @category Realtime
   */
  async unsubscribe(e = this.timeout) {
    return new Promise((n) => {
      this.channelAdapter.unsubscribe(e).receive("ok", () => n("ok")).receive("timeout", () => n("timed out")).receive("error", () => n("error"));
    });
  }
  /**
   * Destroys and stops related timers.
   *
   * @category Realtime
   */
  teardown() {
    this.channelAdapter.teardown();
  }
  /** @internal */
  async _fetchWithTimeout(e, n, r) {
    const i = new AbortController(), s = setTimeout(() => i.abort(), r), a = await this.socket.fetch(e, Object.assign(Object.assign({}, n), { signal: i.signal }));
    return clearTimeout(s), a;
  }
  /** @internal */
  _on(e, n, r) {
    var i;
    const s = e.toLocaleLowerCase(), a = n == null ? void 0 : n.filter;
    if ((a instanceof qi || typeof a == "object" && a !== null && typeof a.build == "function") && (n = Object.assign(Object.assign({}, n), { filter: a.build() })), s === $e.POSTGRES_CHANGES && ((i = this.bindings[s]) === null || i === void 0 ? void 0 : i.find((h) => _e.isSamePostgresFilter(h.filter, n))))
      return this.socket.log("error", `duplicate \`postgres_changes\` binding for ${this.topic} ignored`, n), this;
    const o = this.channelAdapter.on(e, r), l = {
      type: s,
      filter: n,
      callback: r,
      ref: o
    };
    return this.bindings[s] ? this.bindings[s].push(l) : this.bindings[s] = [l], this._updateFilterMessage(), this;
  }
  /**
   * Registers a callback that will be executed when the channel closes.
   *
   * @internal
   */
  _onClose(e) {
    this.channelAdapter.onClose(e);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(e) {
    this.channelAdapter.onError(e);
  }
  /** @internal */
  _updateFilterMessage() {
    this.channelAdapter.updateFilterBindings((e, n, r) => {
      var i, s, a, o, l, u, h;
      const c = e.event.toLocaleLowerCase();
      if (this._notThisChannelEvent(c, r))
        return !1;
      const f = (i = this.bindings[c]) === null || i === void 0 ? void 0 : i.find((d) => d.ref === e.ref);
      if (!f)
        return !0;
      if (["broadcast", "presence", "postgres_changes"].includes(c))
        if ("id" in f) {
          const d = f.id, p = (s = f.filter) === null || s === void 0 ? void 0 : s.event;
          return d && ((a = n.ids) === null || a === void 0 ? void 0 : a.includes(d)) && (p === "*" || (p == null ? void 0 : p.toLocaleLowerCase()) === ((o = n.data) === null || o === void 0 ? void 0 : o.type.toLocaleLowerCase()));
        } else {
          const d = (u = (l = f == null ? void 0 : f.filter) === null || l === void 0 ? void 0 : l.event) === null || u === void 0 ? void 0 : u.toLocaleLowerCase();
          return d === "*" || d === ((h = n == null ? void 0 : n.event) === null || h === void 0 ? void 0 : h.toLocaleLowerCase());
        }
      else
        return f.type.toLocaleLowerCase() === c;
    });
  }
  /** @internal */
  _notThisChannelEvent(e, n) {
    const { close: r, error: i, leave: s, join: a } = Ui;
    return n && [r, i, s, a].includes(e) && n !== this.joinPush.ref;
  }
  /** @internal */
  _updateFilterTransform() {
    this.channelAdapter.updatePayloadTransform((e, n, r) => {
      if (typeof n == "object" && "ids" in n) {
        const i = n.data, { schema: s, table: a, commit_timestamp: o, type: l, errors: u } = i;
        return Object.assign(Object.assign({}, {
          schema: s,
          table: a,
          commit_timestamp: o,
          eventType: l,
          new: {},
          old: {},
          errors: u
        }), this._getPayloadRecords(i));
      }
      return n;
    });
  }
  copyBindings(e) {
    if (this.joinedOnce)
      throw new Error("cannot copy bindings into joined channel");
    for (const n in e.bindings)
      for (const r of e.bindings[n])
        this._on(r.type, r.filter, r.callback);
  }
  /**
   * Compares two optional filter values for equality.
   * Treats undefined, null, and empty string as equivalent empty values.
   * @internal
   */
  static isFilterValueEqual(e, n) {
    return (e ?? void 0) === (n ?? void 0);
  }
  /**
   * Two `postgres_changes` filters are the same when the server would collapse them into a single
   * subscription.
   * @internal
   */
  static isSamePostgresFilter(e, n) {
    var r, i, s, a;
    const o = (i = (r = e == null ? void 0 : e.select) === null || r === void 0 ? void 0 : r.join()) !== null && i !== void 0 ? i : void 0, l = (a = (s = n == null ? void 0 : n.select) === null || s === void 0 ? void 0 : s.join()) !== null && a !== void 0 ? a : void 0;
    return (e == null ? void 0 : e.event) === (n == null ? void 0 : n.event) && _e.isFilterValueEqual(e == null ? void 0 : e.schema, n == null ? void 0 : n.schema) && _e.isFilterValueEqual(e == null ? void 0 : e.table, n == null ? void 0 : n.table) && _e.isFilterValueEqual(e == null ? void 0 : e.filter, n == null ? void 0 : n.filter) && o === l;
  }
  /** @internal */
  _getPayloadRecords(e) {
    const n = {
      new: {},
      old: {}
    };
    return (e.type === "INSERT" || e.type === "UPDATE") && (n.new = kr(e.columns, e.record)), (e.type === "UPDATE" || e.type === "DELETE") && (n.old = kr(e.columns, e.old_record)), n;
  }
}
class Vu {
  constructor(e, n) {
    this.socket = new $u(e, n);
  }
  get timeout() {
    return this.socket.timeout;
  }
  get endPoint() {
    return this.socket.endPoint;
  }
  get transport() {
    return this.socket.transport;
  }
  get heartbeatIntervalMs() {
    return this.socket.heartbeatIntervalMs;
  }
  get heartbeatCallback() {
    return this.socket.heartbeatCallback;
  }
  set heartbeatCallback(e) {
    this.socket.heartbeatCallback = e;
  }
  get heartbeatTimer() {
    return this.socket.heartbeatTimer;
  }
  get pendingHeartbeatRef() {
    return this.socket.pendingHeartbeatRef;
  }
  get reconnectTimer() {
    return this.socket.reconnectTimer;
  }
  get vsn() {
    return this.socket.vsn;
  }
  get encode() {
    return this.socket.encode;
  }
  get decode() {
    return this.socket.decode;
  }
  get reconnectAfterMs() {
    return this.socket.reconnectAfterMs;
  }
  get sendBuffer() {
    return this.socket.sendBuffer;
  }
  get stateChangeCallbacks() {
    return this.socket.stateChangeCallbacks;
  }
  connect() {
    this.socket.connect();
  }
  disconnect(e, n, r, i = 1e4) {
    return new Promise((s) => {
      setTimeout(() => s("timeout"), i), this.socket.disconnect(() => {
        e(), s("ok");
      }, n, r);
    });
  }
  push(e) {
    this.socket.push(e);
  }
  log(e, n, r) {
    this.socket.log(e, n, r);
  }
  hasLogger() {
    return this.socket.hasLogger();
  }
  makeRef() {
    return this.socket.makeRef();
  }
  onOpen(e) {
    this.socket.onOpen(e);
  }
  onClose(e) {
    this.socket.onClose(e);
  }
  onError(e) {
    this.socket.onError(e);
  }
  onMessage(e) {
    this.socket.onMessage(e);
  }
  isConnected() {
    return this.socket.isConnected();
  }
  isConnecting() {
    return this.socket.connectionState() == Rn.connecting;
  }
  isDisconnecting() {
    return this.socket.connectionState() == Rn.closing;
  }
  connectionState() {
    return this.socket.connectionState();
  }
  endPointURL() {
    return this.socket.endPointURL();
  }
  sendHeartbeat() {
    this.socket.sendHeartbeat();
  }
  /**
   * @internal
   */
  getSocket() {
    return this.socket;
  }
}
const Tr = {
  HEARTBEAT_INTERVAL: 25e3
}, Ku = [1e3, 2e3, 5e3, 1e4], Gu = 1e4;
function Ju() {
  const t = /* @__PURE__ */ new Map();
  return {
    get length() {
      return t.size;
    },
    clear() {
      t.clear();
    },
    getItem(e) {
      return t.has(e) ? t.get(e) : null;
    },
    key(e) {
      var n;
      return (n = Array.from(t.keys())[e]) !== null && n !== void 0 ? n : null;
    },
    removeItem(e) {
      t.delete(e);
    },
    setItem(e, n) {
      t.set(e, String(n));
    }
  };
}
function Yu() {
  try {
    if (typeof globalThis < "u" && globalThis.sessionStorage)
      return globalThis.sessionStorage;
  } catch {
  }
  return Ju();
}
const Qu = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class Hi {
  get endPoint() {
    return this.socketAdapter.endPoint;
  }
  get timeout() {
    return this.socketAdapter.timeout;
  }
  get transport() {
    return this.socketAdapter.transport;
  }
  get heartbeatCallback() {
    return this.socketAdapter.heartbeatCallback;
  }
  get heartbeatIntervalMs() {
    return this.socketAdapter.heartbeatIntervalMs;
  }
  get heartbeatTimer() {
    return this.worker ? this._workerHeartbeatTimer : this.socketAdapter.heartbeatTimer;
  }
  get pendingHeartbeatRef() {
    return this.worker ? this._pendingWorkerHeartbeatRef : this.socketAdapter.pendingHeartbeatRef;
  }
  get reconnectTimer() {
    return this.socketAdapter.reconnectTimer;
  }
  get vsn() {
    return this.socketAdapter.vsn;
  }
  get encode() {
    return this.socketAdapter.encode;
  }
  get decode() {
    return this.socketAdapter.decode;
  }
  get reconnectAfterMs() {
    return this.socketAdapter.reconnectAfterMs;
  }
  get sendBuffer() {
    return this.socketAdapter.sendBuffer;
  }
  get stateChangeCallbacks() {
    return this.socketAdapter.stateChangeCallbacks;
  }
  /**
   * Initializes the Socket.
   *
   * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
   * @param options.transport The Websocket Transport, for example WebSocket. This can be a custom implementation
   * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
   * @param options.params The optional params to pass when connecting.
   * @param options.headers Deprecated: headers cannot be set on websocket connections and this option will be removed in the future.
   * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
   * @param options.heartbeatCallback The optional function to handle heartbeat status and latency.
   * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
   * @param options.logLevel Sets the log level for Realtime
   * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
   * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
   * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
   * @param options.worker Use Web Worker to set a side flow. Defaults to false.
   * @param options.workerUrl The URL of the worker script. Defaults to https://realtime.supabase.com/worker.js that includes a heartbeat event call to keep the connection alive.
   * @param options.vsn The protocol version to use when connecting. Supported versions are "1.0.0" and "2.0.0". Defaults to "2.0.0".
   *
   * @category Realtime
   *
   * @example Using supabase-js (recommended)
   * ```ts
   * import { createClient } from '@supabase/supabase-js'
   *
   * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
   * const channel = supabase.channel('room1')
   * channel
   *   .on('broadcast', { event: 'cursor-pos' }, (payload) => console.log(payload))
   *   .subscribe()
   * ```
   *
   * @example Standalone import for bundle-sensitive environments
   * ```ts
   * import RealtimeClient from '@supabase/realtime-js'
   *
   * const client = new RealtimeClient('https://xyzcompany.supabase.co/realtime/v1', {
   *   params: { apikey: 'your-publishable-key' },
   * })
   * client.connect()
   * ```
   */
  constructor(e, n) {
    var r;
    if (this.channels = new Array(), this.accessTokenValue = null, this.accessToken = null, this.apiKey = null, this.httpEndpoint = "", this.headers = {}, this.params = {}, this.ref = 0, this.serializer = new bu(), this._manuallySetToken = !1, this._authPromise = null, this._authGeneration = 0, this._workerHeartbeatTimer = void 0, this._pendingWorkerHeartbeatRef = null, this._pendingDisconnectTimer = null, this._disconnectOnEmptyChannelsAfterMs = 0, this._resolveFetch = (s) => s ? (...a) => s(...a) : (...a) => fetch(...a), !(!((r = n == null ? void 0 : n.params) === null || r === void 0) && r.apikey))
      throw new Error("API key is required to connect to Realtime");
    this.apiKey = n.params.apikey;
    const i = this._initializeOptions(n);
    this.socketAdapter = new Vu(e, i), this.httpEndpoint = Bi(e), this.fetch = this._resolveFetch(n == null ? void 0 : n.fetch);
  }
  /**
   * Connects the socket, unless already connected.
   *
   * @category Realtime
   */
  connect() {
    if (!(this.isConnecting() || this.isDisconnecting() || this.isConnected())) {
      this.accessToken && !this._authPromise && this._setAuthSafely("connect"), this._setupConnectionHandlers();
      try {
        this.socketAdapter.connect();
      } catch (e) {
        const n = e.message;
        throw new Error(`WebSocket not available: ${n}`);
      }
      this._handleNodeJsRaceCondition();
    }
  }
  /**
   * Returns the URL of the websocket.
   * @returns string The URL of the websocket.
   *
   * @category Realtime
   */
  endpointURL() {
    return this.socketAdapter.endPointURL();
  }
  /**
   * Disconnects the socket.
   *
   * @param code A numeric status code to send on disconnect.
   * @param reason A custom reason for the disconnect.
   *
   * @category Realtime
   */
  async disconnect(e, n) {
    return this._cancelPendingDisconnect(), this.isDisconnecting() ? "ok" : await this.socketAdapter.disconnect(() => {
      clearInterval(this._workerHeartbeatTimer), this._terminateWorker();
    }, e, n);
  }
  /**
   * Returns all created channels
   *
   * @category Realtime
   */
  getChannels() {
    return this.channels;
  }
  /**
   * Unsubscribes, removes and tears down a single channel
   * @param channel A RealtimeChannel instance
   *
   * @category Realtime
   */
  async removeChannel(e) {
    const n = await e.unsubscribe();
    return n === "ok" && e.teardown(), n;
  }
  /**
   * Unsubscribes, removes and tears down all channels
   *
   * @category Realtime
   */
  async removeAllChannels() {
    const e = this.channels.map(async (r) => {
      const i = await r.unsubscribe();
      return r.teardown(), i;
    }), n = await Promise.all(e);
    return await this.disconnect(), n;
  }
  /**
   * Logs the message.
   *
   * For customized logging, `this.logger` can be overridden in Client constructor.
   *
   * @category Realtime
   */
  log(e, n, r) {
    this.socketAdapter.log(e, n, r);
  }
  /**
   * Returns true if a custom `logger` has been configured on this client.
   *
   * @category Realtime
   */
  hasLogger() {
    return this.socketAdapter.hasLogger();
  }
  /**
   * Returns the current state of the socket.
   *
   * @category Realtime
   */
  connectionState() {
    return this.socketAdapter.connectionState() || Rn.closed;
  }
  /**
   * Returns `true` is the connection is open.
   *
   * @category Realtime
   */
  isConnected() {
    return this.socketAdapter.isConnected();
  }
  /**
   * Returns `true` if the connection is currently connecting.
   *
   * @category Realtime
   */
  isConnecting() {
    return this.socketAdapter.isConnecting();
  }
  /**
   * Returns `true` if the connection is currently disconnecting.
   *
   * @category Realtime
   */
  isDisconnecting() {
    return this.socketAdapter.isDisconnecting();
  }
  /**
   * Creates (or reuses) a {@link RealtimeChannel} for the provided topic.
   *
   * Topics are automatically prefixed with `realtime:` to match the Realtime service.
   * If a channel with the same topic already exists it will be returned instead of creating
   * a duplicate connection.
   *
   * @category Realtime
   */
  channel(e, n = { config: {} }) {
    const r = `realtime:${e}`, i = this.getChannels().find((s) => s.topic === r);
    if (i)
      return i;
    {
      const s = new _e(`realtime:${e}`, n, this);
      return this._cancelPendingDisconnect(), this.channels.push(s), s;
    }
  }
  /**
   * Push out a message if the socket is connected.
   *
   * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
   *
   * @category Realtime
   */
  push(e) {
    this.socketAdapter.push(e);
  }
  /**
   * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
   *
   * If param is null it will use the `accessToken` callback function or the token set on the client.
   *
   * On callback used, it will set the value of the token internal to the client.
   *
   * When a token is explicitly provided AND no `accessToken` callback is configured,
   * it will be preserved across channel operations (including removeChannel and
   * resubscribe) and the client stays in manual-token mode.
   *
   * When an `accessToken` callback IS configured, the callback is the source of truth:
   * the client remains in callback mode and continues to refresh from it on heartbeat,
   * even after a bootstrap/override `setAuth(token)` call.
   *
   * The callback is called on connect and on every heartbeat (`heartbeatIntervalMs`,
   * default 25000ms). Its token must stay valid past the next call, or the server closes
   * the channel at expiry with no automatic resubscribe.
   *
   * @param token A JWT string to override the token set on the client.
   *
   * @example Setting the authorization header
   * // Use a manual token (preserved across resubscribes when no accessToken callback is set)
   * client.realtime.setAuth('my-custom-jwt')
   *
   * // Switch back to using the accessToken callback
   * client.realtime.setAuth()
   *
   * @category Realtime
   */
  async setAuth(e = null) {
    const n = ++this._authGeneration, r = this._performAuth(e, n);
    n === this._authGeneration && (this._authPromise = r);
    try {
      await r;
    } finally {
      this._authPromise === r && (this._authPromise = null);
    }
  }
  /**
   * Returns true if the current access token was explicitly set via setAuth(token),
   * false if it was obtained via the accessToken callback.
   * @internal
   */
  _isManualToken() {
    return this._manuallySetToken;
  }
  /**
   * Sends a heartbeat message if the socket is connected.
   *
   * @category Realtime
   */
  async sendHeartbeat() {
    this.socketAdapter.sendHeartbeat();
  }
  /**
   * Sets a callback that receives lifecycle events for internal heartbeat messages.
   * Useful for instrumenting connection health (e.g. sent/ok/timeout).
   *
   * @category Realtime
   */
  onHeartbeat(e) {
    this.socketAdapter.heartbeatCallback = this._wrapHeartbeatCallback(e);
  }
  /**
   * Return the next message ref, accounting for overflows
   *
   * @internal
   */
  _makeRef() {
    return this.socketAdapter.makeRef();
  }
  /**
   * Removes a channel from RealtimeClient
   *
   * @param channel An open subscription.
   *
   * @internal
   */
  _remove(e) {
    this.channels = this.channels.filter((n) => n.topic !== e.topic), this.channels.length === 0 && (this.log("transport", "no channels remaining, scheduling disconnect"), this._schedulePendingDisconnect());
  }
  /** @internal */
  _schedulePendingDisconnect() {
    if (this._cancelPendingDisconnect(), this._disconnectOnEmptyChannelsAfterMs === 0) {
      this.log("transport", "disconnecting immediately - no channels"), this.disconnect();
      return;
    }
    this._pendingDisconnectTimer = setTimeout(() => {
      this._pendingDisconnectTimer = null, this.channels.length === 0 && (this.log("transport", "deferred disconnect fired - no channels, disconnecting"), this.disconnect());
    }, this._disconnectOnEmptyChannelsAfterMs), this.log("transport", `deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`);
  }
  /** @internal */
  _cancelPendingDisconnect() {
    this._pendingDisconnectTimer !== null && (this.log("transport", "pending disconnect cancelled - channel activity detected"), clearTimeout(this._pendingDisconnectTimer), this._pendingDisconnectTimer = null);
  }
  /**
   * Perform the actual auth operation
   * @internal
   */
  async _performAuth(e, n) {
    let r, i = !1;
    if (e)
      r = e, i = !0;
    else if (this.accessToken)
      try {
        r = await this.accessToken();
      } catch (s) {
        this.log("error", "Error fetching access token from callback", s), r = this.accessTokenValue;
      }
    else
      r = this.accessTokenValue;
    n === this._authGeneration && (this.accessToken ? this._manuallySetToken = !1 : i && (this._manuallySetToken = !0), this.accessTokenValue != r && (this.accessTokenValue = r, this.channels.forEach((s) => {
      const a = {
        access_token: r,
        version: du
      };
      s.updateJoinPayload(a), s.joinedOnce && s.channelAdapter.isJoined() && s.channelAdapter.push(Ui.access_token, {
        access_token: r
      });
    })));
  }
  /**
   * Wait for any in-flight auth operations to complete
   * @internal
   */
  async _waitForAuthIfNeeded() {
    this._authPromise && await this._authPromise;
  }
  /**
   * Safely call setAuth with standardized error handling
   * @internal
   */
  _setAuthSafely(e = "general") {
    this._isManualToken() || this.setAuth().catch((n) => {
      this.log("error", `Error setting auth in ${e}`, n);
    });
  }
  /** @internal */
  _setupConnectionHandlers() {
    this.socketAdapter.onOpen(() => {
      (this._authPromise || (this.accessToken && !this.accessTokenValue ? this.setAuth() : Promise.resolve())).catch((n) => {
        this.log("error", "error waiting for auth on connect", n);
      }), this.worker && !this.workerRef && this._startWorkerHeartbeat();
    }), this.socketAdapter.onClose(() => {
      this.worker && this.workerRef && this._terminateWorker();
    }), this.socketAdapter.onMessage((e) => {
      e.ref && e.ref === this._pendingWorkerHeartbeatRef && (this._pendingWorkerHeartbeatRef = null);
    });
  }
  /** @internal */
  _handleNodeJsRaceCondition() {
    this.socketAdapter.isConnected() && this.socketAdapter.getSocket().onConnOpen();
  }
  /** @internal */
  _wrapHeartbeatCallback(e) {
    return (n, r) => {
      n !== "disconnected" && (n == "sent" && this._setAuthSafely(), e && e(n, r));
    };
  }
  /** @internal */
  _startWorkerHeartbeat() {
    this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
    const e = this._workerObjectUrl(this.workerUrl);
    this.workerRef = new Worker(e), this.workerRef.onerror = (n) => {
      this.log("worker", "worker error", n.message), this._terminateWorker(), this.disconnect();
    }, this.workerRef.onmessage = (n) => {
      n.data.event === "keepAlive" && this.sendHeartbeat();
    }, this.workerRef.postMessage({
      event: "start",
      interval: this.heartbeatIntervalMs
    });
  }
  /**
   * Terminate the Web Worker and clear the reference
   * @internal
   */
  _terminateWorker() {
    this.workerRef && (this.log("worker", "terminating worker"), this.workerRef.terminate(), this.workerRef = void 0);
  }
  /** @internal */
  _workerObjectUrl(e) {
    let n;
    if (e)
      n = e;
    else {
      const r = new Blob([Qu], { type: "application/javascript" });
      n = URL.createObjectURL(r);
    }
    return n;
  }
  /**
   * Initialize socket options with defaults
   * @internal
   */
  _initializeOptions(e) {
    var n, r, i, s, a, o, l, u, h, c, f, d;
    this.worker = (n = e == null ? void 0 : e.worker) !== null && n !== void 0 ? n : !1, this.accessToken = (r = e == null ? void 0 : e.accessToken) !== null && r !== void 0 ? r : null;
    const p = {};
    p.timeout = (i = e == null ? void 0 : e.timeout) !== null && i !== void 0 ? i : gu, p.heartbeatIntervalMs = (s = e == null ? void 0 : e.heartbeatIntervalMs) !== null && s !== void 0 ? s : Tr.HEARTBEAT_INTERVAL, this._disconnectOnEmptyChannelsAfterMs = (a = e == null ? void 0 : e.disconnectOnEmptyChannelsAfterMs) !== null && a !== void 0 ? a : 2 * ((o = e == null ? void 0 : e.heartbeatIntervalMs) !== null && o !== void 0 ? o : Tr.HEARTBEAT_INTERVAL), p.transport = (l = e == null ? void 0 : e.transport) !== null && l !== void 0 ? l : Di.getWebSocketConstructor(), p.params = e == null ? void 0 : e.params, p.logger = e == null ? void 0 : e.logger, p.heartbeatCallback = this._wrapHeartbeatCallback(e == null ? void 0 : e.heartbeatCallback), p.sessionStorage = (u = e == null ? void 0 : e.sessionStorage) !== null && u !== void 0 ? u : Yu(), p.reconnectAfterMs = (h = e == null ? void 0 : e.reconnectAfterMs) !== null && h !== void 0 ? h : ((k) => Ku[k - 1] || Gu);
    let y, v;
    const w = (c = e == null ? void 0 : e.vsn) !== null && c !== void 0 ? c : pu;
    switch (w) {
      case fu:
        y = (k, _) => _(JSON.stringify(k)), v = (k, _) => _(JSON.parse(k));
        break;
      case Ni:
        y = this.serializer.encode.bind(this.serializer), v = this.serializer.decode.bind(this.serializer);
        break;
      default:
        throw new Error(`Unsupported serializer version: ${p.vsn}`);
    }
    if (p.vsn = w, p.encode = (f = e == null ? void 0 : e.encode) !== null && f !== void 0 ? f : y, p.decode = (d = e == null ? void 0 : e.decode) !== null && d !== void 0 ? d : v, p.beforeReconnect = this._reconnectAuth.bind(this), (e != null && e.logLevel || e != null && e.log_level) && (this.logLevel = e.logLevel || e.log_level, p.params = Object.assign(Object.assign({}, p.params), { log_level: this.logLevel })), this.worker) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.workerUrl = e == null ? void 0 : e.workerUrl, p.autoSendHeartbeat = !this.worker;
    }
    return p;
  }
  /** @internal */
  async _reconnectAuth() {
    await this._waitForAuthIfNeeded(), this.isConnected() || this.connect();
  }
}
var It = class extends Error {
  constructor(t, e) {
    var n;
    super(t), this.name = "IcebergError", this.status = e.status, this.icebergType = e.icebergType, this.icebergCode = e.icebergCode, this.details = e.details, this.isCommitStateUnknown = e.icebergType === "CommitStateUnknownException" || [500, 502, 504].includes(e.status) && ((n = e.icebergType) == null ? void 0 : n.includes("CommitState")) === !0;
  }
  /**
   * Returns true if the error is a 404 Not Found error.
   */
  isNotFound() {
    return this.status === 404;
  }
  /**
   * Returns true if the error is a 409 Conflict error.
   */
  isConflict() {
    return this.status === 409;
  }
  /**
   * Returns true if the error is a 419 Authentication Timeout error.
   */
  isAuthenticationTimeout() {
    return this.status === 419;
  }
};
function Xu(t, e, n) {
  const r = new URL(e, t);
  if (n)
    for (const [i, s] of Object.entries(n))
      s !== void 0 && r.searchParams.set(i, s);
  return r.toString();
}
async function Zu(t) {
  return !t || t.type === "none" ? {} : t.type === "bearer" ? { Authorization: `Bearer ${t.token}` } : t.type === "header" ? { [t.name]: t.value } : t.type === "custom" ? await t.getHeaders() : {};
}
function ec(t) {
  const e = t.fetchImpl ?? globalThis.fetch;
  return {
    async request({
      method: n,
      path: r,
      query: i,
      body: s,
      headers: a
    }) {
      const o = Xu(t.baseUrl, r, i), l = await Zu(t.auth), u = await e(o, {
        method: n,
        headers: {
          ...s ? { "Content-Type": "application/json" } : {},
          ...l,
          ...a
        },
        body: s ? JSON.stringify(s) : void 0
      }), h = await u.text(), c = (u.headers.get("content-type") || "").includes("application/json"), f = c && h ? JSON.parse(h) : h;
      if (!u.ok) {
        const d = c ? f : void 0, p = d == null ? void 0 : d.error;
        throw new It(
          (p == null ? void 0 : p.message) ?? `Request failed with status ${u.status}`,
          {
            status: u.status,
            icebergType: p == null ? void 0 : p.type,
            icebergCode: p == null ? void 0 : p.code,
            details: d
          }
        );
      }
      return { status: u.status, headers: u.headers, data: f };
    }
  };
}
function zt(t) {
  return t.join("");
}
var tc = class {
  constructor(t, e = "") {
    this.client = t, this.prefix = e;
  }
  async listNamespaces(t) {
    const e = t ? { parent: zt(t.namespace) } : void 0;
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces`,
      query: e
    })).data.namespaces.map((r) => ({ namespace: r }));
  }
  async createNamespace(t, e) {
    const n = {
      namespace: t.namespace,
      properties: e == null ? void 0 : e.properties
    };
    return (await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces`,
      body: n
    })).data;
  }
  async dropNamespace(t) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${zt(t.namespace)}`
    });
  }
  async loadNamespaceMetadata(t) {
    return {
      properties: (await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces/${zt(t.namespace)}`
      })).data.properties
    };
  }
  async namespaceExists(t) {
    try {
      return await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${zt(t.namespace)}`
      }), !0;
    } catch (e) {
      if (e instanceof It && e.status === 404)
        return !1;
      throw e;
    }
  }
  async createNamespaceIfNotExists(t, e) {
    try {
      return await this.createNamespace(t, e);
    } catch (n) {
      if (n instanceof It && n.status === 409)
        return;
      throw n;
    }
  }
};
function Qe(t) {
  return t.join("");
}
var nc = class {
  constructor(t, e = "", n) {
    this.client = t, this.prefix = e, this.accessDelegation = n;
  }
  async listTables(t) {
    return (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${Qe(t.namespace)}/tables`
    })).data.identifiers;
  }
  async createTable(t, e) {
    const n = {};
    return this.accessDelegation && (n["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${Qe(t.namespace)}/tables`,
      body: e,
      headers: n
    })).data.metadata;
  }
  async updateTable(t, e) {
    const n = await this.client.request({
      method: "POST",
      path: `${this.prefix}/namespaces/${Qe(t.namespace)}/tables/${t.name}`,
      body: e
    });
    return {
      "metadata-location": n.data["metadata-location"],
      metadata: n.data.metadata
    };
  }
  async dropTable(t, e) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${Qe(t.namespace)}/tables/${t.name}`,
      query: { purgeRequested: String((e == null ? void 0 : e.purge) ?? !1) }
    });
  }
  async loadTable(t) {
    const e = {};
    return this.accessDelegation && (e["X-Iceberg-Access-Delegation"] = this.accessDelegation), (await this.client.request({
      method: "GET",
      path: `${this.prefix}/namespaces/${Qe(t.namespace)}/tables/${t.name}`,
      headers: e
    })).data.metadata;
  }
  async tableExists(t) {
    const e = {};
    this.accessDelegation && (e["X-Iceberg-Access-Delegation"] = this.accessDelegation);
    try {
      return await this.client.request({
        method: "HEAD",
        path: `${this.prefix}/namespaces/${Qe(t.namespace)}/tables/${t.name}`,
        headers: e
      }), !0;
    } catch (n) {
      if (n instanceof It && n.status === 404)
        return !1;
      throw n;
    }
  }
  async createTableIfNotExists(t, e) {
    try {
      return await this.createTable(t, e);
    } catch (n) {
      if (n instanceof It && n.status === 409)
        return await this.loadTable({ namespace: t.namespace, name: e.name });
      throw n;
    }
  }
}, rc = class {
  /**
   * Creates a new Iceberg REST Catalog client.
   *
   * @param options - Configuration options for the catalog client
   */
  constructor(t) {
    var r;
    let e = "v1";
    t.catalogName && (e += `/${t.catalogName}`);
    const n = t.baseUrl.endsWith("/") ? t.baseUrl : `${t.baseUrl}/`;
    this.client = ec({
      baseUrl: n,
      auth: t.auth,
      fetchImpl: t.fetch
    }), this.accessDelegation = (r = t.accessDelegation) == null ? void 0 : r.join(","), this.namespaceOps = new tc(this.client, e), this.tableOps = new nc(this.client, e, this.accessDelegation);
  }
  /**
   * Lists all namespaces in the catalog.
   *
   * @param parent - Optional parent namespace to list children under
   * @returns Array of namespace identifiers
   *
   * @example
   * ```typescript
   * // List all top-level namespaces
   * const namespaces = await catalog.listNamespaces();
   *
   * // List namespaces under a parent
   * const children = await catalog.listNamespaces({ namespace: ['analytics'] });
   * ```
   */
  async listNamespaces(t) {
    return this.namespaceOps.listNamespaces(t);
  }
  /**
   * Creates a new namespace in the catalog.
   *
   * @param id - Namespace identifier to create
   * @param metadata - Optional metadata properties for the namespace
   * @returns Response containing the created namespace and its properties
   *
   * @example
   * ```typescript
   * const response = await catalog.createNamespace(
   *   { namespace: ['analytics'] },
   *   { properties: { owner: 'data-team' } }
   * );
   * console.log(response.namespace); // ['analytics']
   * console.log(response.properties); // { owner: 'data-team', ... }
   * ```
   */
  async createNamespace(t, e) {
    return this.namespaceOps.createNamespace(t, e);
  }
  /**
   * Drops a namespace from the catalog.
   *
   * The namespace must be empty (contain no tables) before it can be dropped.
   *
   * @param id - Namespace identifier to drop
   *
   * @example
   * ```typescript
   * await catalog.dropNamespace({ namespace: ['analytics'] });
   * ```
   */
  async dropNamespace(t) {
    await this.namespaceOps.dropNamespace(t);
  }
  /**
   * Loads metadata for a namespace.
   *
   * @param id - Namespace identifier to load
   * @returns Namespace metadata including properties
   *
   * @example
   * ```typescript
   * const metadata = await catalog.loadNamespaceMetadata({ namespace: ['analytics'] });
   * console.log(metadata.properties);
   * ```
   */
  async loadNamespaceMetadata(t) {
    return this.namespaceOps.loadNamespaceMetadata(t);
  }
  /**
   * Lists all tables in a namespace.
   *
   * @param namespace - Namespace identifier to list tables from
   * @returns Array of table identifiers
   *
   * @example
   * ```typescript
   * const tables = await catalog.listTables({ namespace: ['analytics'] });
   * console.log(tables); // [{ namespace: ['analytics'], name: 'events' }, ...]
   * ```
   */
  async listTables(t) {
    return this.tableOps.listTables(t);
  }
  /**
   * Creates a new table in the catalog.
   *
   * @param namespace - Namespace to create the table in
   * @param request - Table creation request including name, schema, partition spec, etc.
   * @returns Table metadata for the created table
   *
   * @example
   * ```typescript
   * const metadata = await catalog.createTable(
   *   { namespace: ['analytics'] },
   *   {
   *     name: 'events',
   *     schema: {
   *       type: 'struct',
   *       fields: [
   *         { id: 1, name: 'id', type: 'long', required: true },
   *         { id: 2, name: 'timestamp', type: 'timestamp', required: true }
   *       ],
   *       'schema-id': 0
   *     },
   *     'partition-spec': {
   *       'spec-id': 0,
   *       fields: [
   *         { source_id: 2, field_id: 1000, name: 'ts_day', transform: 'day' }
   *       ]
   *     }
   *   }
   * );
   * ```
   */
  async createTable(t, e) {
    return this.tableOps.createTable(t, e);
  }
  /**
   * Updates an existing table's metadata.
   *
   * Can update the schema, partition spec, or properties of a table.
   *
   * @param id - Table identifier to update
   * @param request - Update request with fields to modify
   * @returns Response containing the metadata location and updated table metadata
   *
   * @example
   * ```typescript
   * const response = await catalog.updateTable(
   *   { namespace: ['analytics'], name: 'events' },
   *   {
   *     properties: { 'read.split.target-size': '134217728' }
   *   }
   * );
   * console.log(response['metadata-location']); // s3://...
   * console.log(response.metadata); // TableMetadata object
   * ```
   */
  async updateTable(t, e) {
    return this.tableOps.updateTable(t, e);
  }
  /**
   * Drops a table from the catalog.
   *
   * @param id - Table identifier to drop
   *
   * @example
   * ```typescript
   * await catalog.dropTable({ namespace: ['analytics'], name: 'events' });
   * ```
   */
  async dropTable(t, e) {
    await this.tableOps.dropTable(t, e);
  }
  /**
   * Loads metadata for a table.
   *
   * @param id - Table identifier to load
   * @returns Table metadata including schema, partition spec, location, etc.
   *
   * @example
   * ```typescript
   * const metadata = await catalog.loadTable({ namespace: ['analytics'], name: 'events' });
   * console.log(metadata.schema);
   * console.log(metadata.location);
   * ```
   */
  async loadTable(t) {
    return this.tableOps.loadTable(t);
  }
  /**
   * Checks if a namespace exists in the catalog.
   *
   * @param id - Namespace identifier to check
   * @returns True if the namespace exists, false otherwise
   *
   * @example
   * ```typescript
   * const exists = await catalog.namespaceExists({ namespace: ['analytics'] });
   * console.log(exists); // true or false
   * ```
   */
  async namespaceExists(t) {
    return this.namespaceOps.namespaceExists(t);
  }
  /**
   * Checks if a table exists in the catalog.
   *
   * @param id - Table identifier to check
   * @returns True if the table exists, false otherwise
   *
   * @example
   * ```typescript
   * const exists = await catalog.tableExists({ namespace: ['analytics'], name: 'events' });
   * console.log(exists); // true or false
   * ```
   */
  async tableExists(t) {
    return this.tableOps.tableExists(t);
  }
  /**
   * Creates a namespace if it does not exist.
   *
   * If the namespace already exists, returns void. If created, returns the response.
   *
   * @param id - Namespace identifier to create
   * @param metadata - Optional metadata properties for the namespace
   * @returns Response containing the created namespace and its properties, or void if it already exists
   *
   * @example
   * ```typescript
   * const response = await catalog.createNamespaceIfNotExists(
   *   { namespace: ['analytics'] },
   *   { properties: { owner: 'data-team' } }
   * );
   * if (response) {
   *   console.log('Created:', response.namespace);
   * } else {
   *   console.log('Already exists');
   * }
   * ```
   */
  async createNamespaceIfNotExists(t, e) {
    return this.namespaceOps.createNamespaceIfNotExists(t, e);
  }
  /**
   * Creates a table if it does not exist.
   *
   * If the table already exists, returns its metadata instead.
   *
   * @param namespace - Namespace to create the table in
   * @param request - Table creation request including name, schema, partition spec, etc.
   * @returns Table metadata for the created or existing table
   *
   * @example
   * ```typescript
   * const metadata = await catalog.createTableIfNotExists(
   *   { namespace: ['analytics'] },
   *   {
   *     name: 'events',
   *     schema: {
   *       type: 'struct',
   *       fields: [
   *         { id: 1, name: 'id', type: 'long', required: true },
   *         { id: 2, name: 'timestamp', type: 'timestamp', required: true }
   *       ],
   *       'schema-id': 0
   *     }
   *   }
   * );
   * ```
   */
  async createTableIfNotExists(t, e) {
    return this.tableOps.createTableIfNotExists(t, e);
  }
};
function Pt(t) {
  "@babel/helpers - typeof";
  return Pt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Pt(t);
}
function ic(t, e) {
  if (Pt(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if (Pt(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function sc(t) {
  var e = ic(t, "string");
  return Pt(e) == "symbol" ? e : e + "";
}
function ac(t, e, n) {
  return (e = sc(e)) in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function Ar(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function P(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ar(Object(n), !0).forEach(function(r) {
      ac(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ar(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var hn = class extends Error {
  constructor(t, e = "storage", n, r) {
    super(t), this.__isStorageError = !0, this.namespace = e, this.name = e === "vectors" ? "StorageVectorsError" : "StorageError", this.status = n, this.statusCode = r;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
};
function dn(t) {
  return typeof t == "object" && t !== null && "__isStorageError" in t;
}
var Xt = class extends hn {
  constructor(t, e, n, r = "storage", i) {
    super(t, r, e, n), this.name = r === "vectors" ? "StorageVectorsApiError" : "StorageApiError", this.status = e, this.statusCode = n, this.code = i;
  }
  toJSON() {
    return P(P({}, super.toJSON()), {}, { code: this.code });
  }
}, Wi = class extends hn {
  constructor(t, e, n = "storage") {
    super(t, n), this.name = n === "vectors" ? "StorageVectorsUnknownError" : "StorageUnknownError", this.originalError = e;
  }
};
function Zt(t, e, n) {
  const r = P({}, t), i = e.toLowerCase();
  for (const s of Object.keys(r)) s.toLowerCase() === i && delete r[s];
  return r[i] = n, r;
}
function oc(t) {
  const e = {};
  for (const [n, r] of Object.entries(t)) e[n.toLowerCase()] = r;
  return e;
}
const lc = (t) => t ? (...e) => t(...e) : (...e) => fetch(...e), uc = (t) => {
  if (typeof t != "object" || t === null) return !1;
  const e = Object.getPrototypeOf(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, $n = (t) => {
  if (Array.isArray(t)) return t.map((n) => $n(n));
  if (typeof t == "function" || t !== Object(t)) return t;
  const e = {};
  return Object.entries(t).forEach(([n, r]) => {
    const i = n.replace(/([-_][a-z])/gi, (s) => s.toUpperCase().replace(/[-_]/g, ""));
    e[i] = $n(r);
  }), e;
}, cc = (t) => !t || typeof t != "string" || t.length === 0 || t.length > 100 || t.trim() !== t || t.includes("/") || t.includes("\\") ? !1 : /^[\w!.\*'() &$@=;:+,?-]+$/.test(t), Dn = (t) => t.split("/").map(encodeURIComponent).join("/"), xr = (t) => {
  if (typeof t == "object" && t !== null) {
    const e = t;
    if (typeof e.msg == "string") return e.msg;
    if (typeof e.message == "string") return e.message;
    if (typeof e.error_description == "string") return e.error_description;
    if (typeof e.error == "string") return e.error;
    if (typeof e.error == "object" && e.error !== null) {
      const n = e.error;
      if (typeof n.message == "string") return n.message;
    }
  }
  return JSON.stringify(t);
}, hc = async (t, e, n, r) => {
  if (t !== null && typeof t == "object" && "json" in t && typeof t.json == "function") {
    const i = t;
    let s = parseInt(String(i.status), 10);
    Number.isFinite(s) || (s = 500), i.json().then((a) => {
      const o = (a == null ? void 0 : a.statusCode) || (a == null ? void 0 : a.code) || s + "";
      e(new Xt(xr(a), s, o, r, a == null ? void 0 : a.code));
    }).catch(() => {
      const a = s + "";
      e(new Xt(i.statusText || `HTTP ${s} error`, s, a, r));
    });
  } else e(new Wi(xr(t), t, r));
}, dc = (t, e, n, r) => {
  const i = {
    method: t,
    headers: (e == null ? void 0 : e.headers) || {}
  };
  if (t === "GET" || t === "HEAD" || !r) return P(P({}, i), n);
  if (uc(r)) {
    var s;
    const a = (e == null ? void 0 : e.headers) || {};
    let o;
    for (const [l, u] of Object.entries(a)) l.toLowerCase() === "content-type" && (o = u);
    i.headers = Zt(a, "Content-Type", (s = o) !== null && s !== void 0 ? s : "application/json"), i.body = JSON.stringify(r);
  } else i.body = r;
  return e != null && e.duplex && (i.duplex = e.duplex), P(P({}, i), n);
};
async function mt(t, e, n, r, i, s, a) {
  return new Promise((o, l) => {
    t(n, dc(e, r, i, s)).then((u) => {
      if (!u.ok) throw u;
      if (r != null && r.noResolveJson) return u;
      if (a === "vectors") {
        const h = u.headers.get("content-type");
        if (u.headers.get("content-length") === "0" || u.status === 204) return {};
        if (!h || !h.includes("application/json")) return {};
      }
      return u.json();
    }).then((u) => o(u)).catch((u) => hc(u, l, r, a));
  });
}
function Vi(t = "storage") {
  return {
    get: async (e, n, r, i) => mt(e, "GET", n, r, i, void 0, t),
    post: async (e, n, r, i, s) => mt(e, "POST", n, i, s, r, t),
    put: async (e, n, r, i, s) => mt(e, "PUT", n, i, s, r, t),
    head: async (e, n, r, i) => mt(e, "HEAD", n, P(P({}, r), {}, { noResolveJson: !0 }), i, void 0, t),
    remove: async (e, n, r, i, s) => mt(e, "DELETE", n, i, s, r, t)
  };
}
const fc = Vi("storage"), { get: st, post: ge, put: en, head: pc, remove: at } = fc, ae = Vi("vectors");
var dt = class {
  /**
  * Creates a new BaseApiClient instance
  * @param url - Base URL for API requests
  * @param headers - Default headers for API requests
  * @param fetch - Optional custom fetch implementation
  * @param namespace - Error namespace ('storage' or 'vectors')
  */
  constructor(t, e = {}, n, r = "storage") {
    this.shouldThrowOnError = !1, this.url = t, this.headers = oc(e), this.fetch = lc(n), this.namespace = r;
  }
  /**
  * Enable throwing errors instead of returning them.
  * When enabled, errors are thrown instead of returned in { data, error } format.
  *
  * @returns this - For method chaining
  */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
  * Set an HTTP header for the request.
  * Creates a shallow copy of headers to avoid mutating shared state.
  *
  * @param name - Header name
  * @param value - Header value
  * @returns this - For method chaining
  */
  setHeader(t, e) {
    return this.headers = Zt(this.headers, t, e), this;
  }
  /**
  * Handles API operation with standardized error handling
  * Eliminates repetitive try-catch blocks across all API methods
  *
  * This wrapper:
  * 1. Executes the operation
  * 2. Returns { data, error: null } on success
  * 3. Returns { data: null, error } on failure (if shouldThrowOnError is false)
  * 4. Throws error on failure (if shouldThrowOnError is true)
  *
  * @typeParam T - The expected data type from the operation
  * @param operation - Async function that performs the API call
  * @returns Promise with { data, error } tuple
  *
  * @example Handling an operation
  * ```typescript
  * async listBuckets() {
  *   return this.handleOperation(async () => {
  *     return await get(this.fetch, `${this.url}/bucket`, {
  *       headers: this.headers,
  *     })
  *   })
  * }
  * ```
  */
  async handleOperation(t) {
    var e = this;
    try {
      return {
        data: await t(),
        error: null
      };
    } catch (n) {
      if (e.shouldThrowOnError) throw n;
      if (dn(n)) return {
        data: null,
        error: n
      };
      throw n;
    }
  }
};
let Ki;
Ki = Symbol.toStringTag;
var gc = class {
  constructor(t, e) {
    this.downloadFn = t, this.shouldThrowOnError = e, this[Ki] = "StreamDownloadBuilder", this.promise = null;
  }
  then(t, e) {
    return this.getPromise().then(t, e);
  }
  catch(t) {
    return this.getPromise().catch(t);
  }
  finally(t) {
    return this.getPromise().finally(t);
  }
  getPromise() {
    return this.promise || (this.promise = this.execute()), this.promise;
  }
  async execute() {
    var t = this;
    try {
      return {
        data: (await t.downloadFn()).body,
        error: null
      };
    } catch (e) {
      if (t.shouldThrowOnError) throw e;
      if (dn(e)) return {
        data: null,
        error: e
      };
      throw e;
    }
  }
};
let Gi;
Gi = Symbol.toStringTag;
var mc = class {
  constructor(t, e) {
    this.downloadFn = t, this.shouldThrowOnError = e, this[Gi] = "BlobDownloadBuilder", this.promise = null;
  }
  asStream() {
    return new gc(this.downloadFn, this.shouldThrowOnError);
  }
  then(t, e) {
    return this.getPromise().then(t, e);
  }
  catch(t) {
    return this.getPromise().catch(t);
  }
  finally(t) {
    return this.getPromise().finally(t);
  }
  getPromise() {
    return this.promise || (this.promise = this.execute()), this.promise;
  }
  async execute() {
    var t = this;
    try {
      return {
        data: await (await t.downloadFn()).blob(),
        error: null
      };
    } catch (e) {
      if (t.shouldThrowOnError) throw e;
      if (dn(e)) return {
        data: null,
        error: e
      };
      throw e;
    }
  }
};
const wn = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
}, Cr = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: !1
};
var yc = class extends dt {
  constructor(t, e = {}, n, r) {
    super(t, e, r, "storage"), this.bucketId = n;
  }
  /**
  * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
  *
  * @param method HTTP method.
  * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
  * @param fileBody The body of the file to be stored in the bucket.
  */
  async uploadOrUpdate(t, e, n, r) {
    var i = this;
    return i.handleOperation(async () => {
      let s;
      const a = P(P({}, Cr), r);
      let o = P(P({}, i.headers), t === "POST" && { "x-upsert": String(a.upsert) });
      const l = a.metadata;
      if (typeof Blob < "u" && n instanceof Blob || typeof FormData < "u" && n instanceof FormData ? s = i.prepareUploadFormData(n, a) : (s = n, o["cache-control"] = `max-age=${a.cacheControl}`, o["content-type"] = a.contentType, a.contentEncoding && (o["content-encoding"] = a.contentEncoding), l && (o["x-metadata"] = i.toBase64(i.encodeMetadata(l))), (typeof ReadableStream < "u" && s instanceof ReadableStream || s && typeof s == "object" && "pipe" in s && typeof s.pipe == "function") && !a.duplex && (a.duplex = "half")), r != null && r.headers) for (const [f, d] of Object.entries(r.headers)) o = Zt(o, f, d);
      const u = i._removeEmptyFolders(e), h = i._getFinalPath(u), c = await (t == "PUT" ? en : ge)(i.fetch, `${i.url}/object/${h}`, s, P({ headers: o }, a != null && a.duplex ? { duplex: a.duplex } : {}));
      return {
        path: u,
        id: c.Id,
        fullPath: c.Key
      };
    });
  }
  /**
  * Uploads a file to an existing bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
  * @param fileBody The body of the file to be stored in the bucket.
  * @param fileOptions Optional file upload options including cacheControl, contentType, contentEncoding, upsert, and metadata.
  * @returns Promise with response containing file path, id, and fullPath or error
  *
  * @example Upload file
  * ```js
  * const avatarFile = event.target.files[0]
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .upload('public/avatar1.png', avatarFile, {
  *     cacheControl: '3600',
  *     upsert: false
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "public/avatar1.png",
  *     "fullPath": "avatars/public/avatar1.png"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @example Upload file using `ArrayBuffer` from base64 file data
  * ```js
  * import { decode } from 'base64-arraybuffer'
  *
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .upload('public/avatar1.png', decode('base64FileData'), {
  *     contentType: 'image/png'
  *   })
  * ```
  *
  * @example Handling errors
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .upload('public/avatar1.png', avatarFile)
  *
  * if (error) {
  *   // Log the full error so fields like `statusCode` and `error` (the
  *   // Storage error name, e.g. "Duplicate") aren't hidden behind `error.message`.
  *   console.error(error)
  *   return
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: only `insert` when you are uploading new files and `select`, `insert` and `update` when you are upserting files
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  * - For React Native, using either `Blob`, `File` or `FormData` does not work as intended. Upload file using `ArrayBuffer` from base64 file data instead, see example below.
  */
  async upload(t, e, n) {
    return this.uploadOrUpdate("POST", t, e, n);
  }
  /**
  * Upload a file with a token generated from `createSignedUploadUrl`.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
  * @param token The token generated from `createSignedUploadUrl`
  * @param fileBody The body of the file to be stored in the bucket.
  * @param fileOptions HTTP headers (cacheControl, contentType, contentEncoding, etc.).
  * **Note:** The `upsert` option has no effect here. To enable upsert behavior,
  * pass `{ upsert: true }` when calling `createSignedUploadUrl()` instead.
  * @returns Promise with response containing file path and fullPath or error
  *
  * @example Upload to a signed URL
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .uploadToSignedUrl('folder/cat.jpg', 'token-from-createSignedUploadUrl', file)
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "folder/cat.jpg",
  *     "fullPath": "avatars/folder/cat.jpg"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async uploadToSignedUrl(t, e, n, r) {
    var i = this;
    const s = i._removeEmptyFolders(t), a = i._getFinalPath(s), o = new URL(i.url + `/object/upload/sign/${a}`);
    return o.searchParams.set("token", e), i.handleOperation(async () => {
      let l;
      const u = P(P({}, Cr), r);
      let h = P(P({}, i.headers), { "x-upsert": String(u.upsert) });
      const c = u.metadata;
      if (typeof Blob < "u" && n instanceof Blob || typeof FormData < "u" && n instanceof FormData ? l = i.prepareUploadFormData(n, u) : (l = n, h["cache-control"] = `max-age=${u.cacheControl}`, h["content-type"] = u.contentType, u.contentEncoding && (h["content-encoding"] = u.contentEncoding), c && (h["x-metadata"] = i.toBase64(i.encodeMetadata(c))), (typeof ReadableStream < "u" && l instanceof ReadableStream || l && typeof l == "object" && "pipe" in l && typeof l.pipe == "function") && !u.duplex && (u.duplex = "half")), r != null && r.headers) for (const [f, d] of Object.entries(r.headers)) h = Zt(h, f, d);
      return {
        path: s,
        fullPath: (await en(i.fetch, o.toString(), l, P({ headers: h }, u != null && u.duplex ? { duplex: u.duplex } : {}))).Key
      };
    });
  }
  /**
  * Creates a signed upload URL.
  * Signed upload URLs can be used to upload files to the bucket without further authentication.
  * They are valid for 2 hours.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the current file name. For example `folder/image.png`.
  * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
  * @returns Promise with response containing signed upload URL, token, and path or error
  *
  * @example Create Signed Upload URL
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUploadUrl('folder/cat.jpg')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "signedUrl": "https://example.supabase.co/storage/v1/object/upload/sign/avatars/folder/cat.jpg?token=<TOKEN>",
  *     "path": "folder/cat.jpg",
  *     "token": "<TOKEN>"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `insert`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async createSignedUploadUrl(t, e) {
    var n = this;
    return n.handleOperation(async () => {
      let r = n._getFinalPath(t);
      const i = P({}, n.headers);
      e != null && e.upsert && (i["x-upsert"] = "true");
      const s = await ge(n.fetch, `${n.url}/object/upload/sign/${r}`, {}, { headers: i }), a = new URL(n.url + s.url), o = a.searchParams.get("token");
      if (!o) throw new hn("No token returned by API");
      return {
        signedUrl: a.toString(),
        path: t,
        token: o
      };
    });
  }
  /**
  * Replaces an existing file at the specified path with a new one.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
  * @param fileBody The body of the file to be stored in the bucket.
  * @param fileOptions Optional file upload options including cacheControl, contentType, contentEncoding, and metadata.
  * **Note:** The `upsert` option has no effect here. `update()` always replaces the
  * file at the given path, so the `x-upsert` header is not sent. To control upsert
  * behavior, use `upload()` instead.
  * @returns Promise with response containing file path, id, and fullPath or error
  *
  * @example Update file
  * ```js
  * const avatarFile = event.target.files[0]
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .update('public/avatar1.png', avatarFile, {
  *     cacheControl: '3600'
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "public/avatar1.png",
  *     "fullPath": "avatars/public/avatar1.png"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @example Update file using `ArrayBuffer` from base64 file data
  * ```js
  * import {decode} from 'base64-arraybuffer'
  *
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .update('public/avatar1.png', decode('base64FileData'), {
  *     contentType: 'image/png'
  *   })
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `update` and `select`
  * - `update()` always replaces the file at the given path regardless of the `upsert` option.
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  * - For React Native, using either `Blob`, `File` or `FormData` does not work as intended. Update file using `ArrayBuffer` from base64 file data instead, see example below.
  */
  async update(t, e, n) {
    return this.uploadOrUpdate("PUT", t, e, n);
  }
  /**
  * Moves an existing file to a new path in the same bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
  * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
  * @param options The destination options.
  * @param options.sourceVersionId The version id of the source object to move.
  * @returns Promise with response containing success message or error
  *
  * @example Move file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .move('public/avatar1.png', 'private/avatar2.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully moved"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `update` and `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async move(t, e, n) {
    var r = this;
    return r.handleOperation(async () => await ge(r.fetch, `${r.url}/object/move`, {
      bucketId: r.bucketId,
      sourceKey: t,
      destinationKey: e,
      destinationBucket: n == null ? void 0 : n.destinationBucket,
      sourceVersionId: n == null ? void 0 : n.sourceVersionId
    }, { headers: r.headers }));
  }
  /**
  * Copies an existing file to a new path in the same bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
  * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
  * @param options The destination and metadata options.
  * @param options.sourceVersionId The version id of the source object to copy.
  * @param options.copyMetadata Whether to copy the source metadata. Defaults to true. Set to false to apply metadata overrides; custom user metadata is not copied when false.
  * @param options.metadata File metadata overrides, applied only when copyMetadata is false. Unspecified fields retain their source values.
  * @returns Promise with response containing copied file path or error
  *
  * @example Copy file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .copy('public/avatar1.png', 'private/avatar2.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "path": "avatars/private/avatar2.png"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @example Copy file with content encoding
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('documents')
  *   .copy('source.txt.gz', 'copy.txt.gz', {
  *     copyMetadata: false,
  *     metadata: { contentEncoding: 'gzip' },
  *   })
  * ```
  * The source must already contain gzip-encoded bytes. Copying changes metadata only.
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `insert` and `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async copy(t, e, n) {
    var r = this;
    return r.handleOperation(async () => {
      const i = n;
      return { path: (await ge(r.fetch, `${r.url}/object/copy`, {
        bucketId: r.bucketId,
        sourceKey: t,
        destinationKey: e,
        destinationBucket: n == null ? void 0 : n.destinationBucket,
        sourceVersionId: n == null ? void 0 : n.sourceVersionId,
        copyMetadata: typeof (i == null ? void 0 : i.copyMetadata) == "boolean" ? i.copyMetadata : void 0,
        metadata: (i == null ? void 0 : i.copyMetadata) === !1 ? i.metadata : void 0
      }, { headers: r.headers })).Key };
    });
  }
  /**
  * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the current file name. For example `folder/image.png`.
  * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
  * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
  * @param options.transform Transform the asset before serving it to the client.
  * @param options.cacheNonce Append a cache nonce parameter to the URL to invalidate the cache.
  * @param options.versionId Create a signed URL for a specific object version rather than the current one.
  * @returns Promise with response containing signed URL or error
  *
  * @example Create Signed URL
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrl('folder/avatar1.png', 60)
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar1.png?token=<TOKEN>"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @example Create a signed URL for an asset with transformations
  * ```js
  * const { data } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrl('folder/avatar1.png', 60, {
  *     transform: {
  *       width: 100,
  *       height: 100,
  *     }
  *   })
  * ```
  *
  * @example Create a signed URL which triggers the download of the asset
  * ```js
  * const { data } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrl('folder/avatar1.png', 60, {
  *     download: true,
  *   })
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async createSignedUrl(t, e, n) {
    var r = this;
    return r.handleOperation(async () => {
      let i = r._getFinalPath(t);
      const s = typeof (n == null ? void 0 : n.transform) == "object" && n.transform !== null && Object.keys(n.transform).length > 0;
      let a = await ge(r.fetch, `${r.url}/object/sign/${i}`, P(P({ expiresIn: e }, s ? { transform: n.transform } : {}), (n == null ? void 0 : n.versionId) != null ? { versionId: n.versionId } : {}), { headers: r.headers });
      const o = new URLSearchParams();
      n != null && n.download && o.set("download", n.download === !0 ? "" : n.download), (n == null ? void 0 : n.cacheNonce) != null && o.set("cacheNonce", String(n.cacheNonce));
      const l = o.toString();
      return { signedUrl: encodeURI(`${r.url}${a.signedURL}${l ? `&${l}` : ""}`) };
    });
  }
  /**
  * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
  * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
  * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
  * @param options.cacheNonce Append a cache nonce parameter to the URL to invalidate the cache.
  * @returns Promise with response containing array of objects with signedUrl, path, and error or error
  *
  * @example Create Signed URLs
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .createSignedUrls(['folder/avatar1.png', 'folder/avatar2.png'], 60)
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [
  *     {
  *       "error": null,
  *       "path": "folder/avatar1.png",
  *       "signedURL": "/object/sign/avatars/folder/avatar1.png?token=<TOKEN>",
  *       "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar1.png?token=<TOKEN>"
  *     },
  *     {
  *       "error": null,
  *       "path": "folder/avatar2.png",
  *       "signedURL": "/object/sign/avatars/folder/avatar2.png?token=<TOKEN>",
  *       "signedUrl": "https://example.supabase.co/storage/v1/object/sign/avatars/folder/avatar2.png?token=<TOKEN>"
  *     }
  *   ],
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async createSignedUrls(t, e, n) {
    var r = this;
    return r.handleOperation(async () => {
      const i = await ge(r.fetch, `${r.url}/object/sign/${r.bucketId}`, {
        expiresIn: e,
        paths: t
      }, { headers: r.headers }), s = new URLSearchParams();
      n != null && n.download && s.set("download", n.download === !0 ? "" : n.download), (n == null ? void 0 : n.cacheNonce) != null && s.set("cacheNonce", String(n.cacheNonce));
      const a = s.toString();
      return i.map((o) => P(P({}, o), {}, { signedUrl: o.signedURL ? encodeURI(`${r.url}${o.signedURL}${a ? `&${a}` : ""}`) : null }));
    });
  }
  /**
  * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
  * @param options Optional settings: `transform` to transform the asset before serving it to the client, `cacheNonce` to append a cache nonce parameter to the URL to invalidate the cache, and `versionId` to download a specific object version.
  * @param parameters Additional fetch parameters like signal for cancellation. Supports standard fetch options including cache control.
  * @returns BlobDownloadBuilder instance for downloading the file
  *
  * @example Download file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": <BLOB>,
  *   "error": null
  * }
  * ```
  *
  * @example Download file with transformations
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png', {
  *     transform: {
  *       width: 100,
  *       height: 100,
  *       quality: 80
  *     }
  *   })
  * ```
  *
  * @example Download with cache control (useful in Edge Functions)
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png', {}, { cache: 'no-store' })
  * ```
  *
  * @example Download with abort signal
  * ```js
  * const controller = new AbortController()
  * setTimeout(() => controller.abort(), 5000)
  *
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .download('folder/avatar1.png', {}, { signal: controller.signal })
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  download(t, e, n) {
    const r = typeof (e == null ? void 0 : e.transform) == "object" && e.transform !== null && Object.keys(e.transform).length > 0 ? "render/image/authenticated" : "object", i = new URLSearchParams();
    e != null && e.transform && this.applyTransformOptsToQuery(i, e.transform), (e == null ? void 0 : e.cacheNonce) != null && i.set("cacheNonce", String(e.cacheNonce)), (e == null ? void 0 : e.versionId) != null && i.set("versionId", String(e.versionId));
    const s = i.toString(), a = this._getFinalPath(t), o = () => st(this.fetch, `${this.url}/${r}/${a}${s ? `?${s}` : ""}`, {
      headers: this.headers,
      noResolveJson: !0
    }, n);
    return new mc(o, this.shouldThrowOnError);
  }
  /**
  * Retrieves the details of an existing file.
  *
  * Returns detailed file metadata including size, content type, and timestamps.
  * Note: The API returns `last_modified` field, not `updated_at`.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the file name. For example `folder/image.png`.
  * @param options Optional settings, including `versionId` to retrieve a specific object version.
  * @returns Promise with response containing file metadata or error
  *
  * @example Get file info
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .info('folder/avatar1.png')
  *
  * if (data) {
  *   console.log('Last modified:', data.lastModified)
  *   console.log('Size:', data.size)
  * }
  * ```
  */
  async info(t, e) {
    var n = this;
    const r = n._getFinalPath(t), i = new URLSearchParams();
    (e == null ? void 0 : e.versionId) != null && i.set("versionId", String(e.versionId));
    const s = i.toString();
    return n.handleOperation(async () => $n(await st(n.fetch, `${n.url}/object/info/${r}${s ? `?${s}` : ""}`, { headers: n.headers })));
  }
  /**
  * Checks the existence of a file.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The file path, including the file name. For example `folder/image.png`.
  * @returns Promise with response containing boolean indicating file existence or error
  *
  * @example Check file existence
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .exists('folder/avatar1.png')
  * ```
  */
  async exists(t) {
    var e = this;
    const n = e._getFinalPath(t);
    try {
      return await pc(e.fetch, `${e.url}/object/${n}`, { headers: e.headers }), {
        data: !0,
        error: null
      };
    } catch (i) {
      if (e.shouldThrowOnError) throw i;
      if (dn(i)) {
        var r;
        const s = i instanceof Xt ? i.status : i instanceof Wi ? (r = i.originalError) === null || r === void 0 ? void 0 : r.status : void 0;
        if (s !== void 0 && [400, 404].includes(s)) return {
          data: !1,
          error: i
        };
      }
      throw i;
    }
  }
  /**
  * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
  * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
  * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
  * @param options.transform Transform the asset before serving it to the client.
  * @param options.cacheNonce Append a cache nonce parameter to the URL to invalidate the cache.
  * @param options.versionId Return the URL for a specific object version rather than the current one.
  * @returns Object with public URL
  *
  * @example Returns the URL for an asset in a public bucket
  * ```js
  * const { data } = supabase
  *   .storage
  *   .from('public-bucket')
  *   .getPublicUrl('folder/avatar1.png')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "publicUrl": "https://example.supabase.co/storage/v1/object/public/public-bucket/folder/avatar1.png"
  *   }
  * }
  * ```
  *
  * @example Returns the URL for an asset in a public bucket with transformations
  * ```js
  * const { data } = supabase
  *   .storage
  *   .from('public-bucket')
  *   .getPublicUrl('folder/avatar1.png', {
  *     transform: {
  *       width: 100,
  *       height: 100,
  *     }
  *   })
  * ```
  *
  * @example Returns the URL which triggers the download of an asset in a public bucket
  * ```js
  * const { data } = supabase
  *   .storage
  *   .from('public-bucket')
  *   .getPublicUrl('folder/avatar1.png', {
  *     download: true,
  *   })
  * ```
  *
  * @remarks
  * - The bucket needs to be set to public, either via [updateBucket()](/docs/reference/javascript/storage-updatebucket) or by going to Storage on [supabase.com/dashboard](https://supabase.com/dashboard), clicking the overflow menu on a bucket and choosing "Make public"
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  getPublicUrl(t, e) {
    const n = this._getFinalPath(t), r = new URLSearchParams();
    e != null && e.download && r.set("download", e.download === !0 ? "" : e.download), e != null && e.transform && this.applyTransformOptsToQuery(r, e.transform), (e == null ? void 0 : e.cacheNonce) != null && r.set("cacheNonce", String(e.cacheNonce)), (e == null ? void 0 : e.versionId) != null && r.set("versionId", String(e.versionId));
    const i = r.toString(), s = typeof (e == null ? void 0 : e.transform) == "object" && e.transform !== null && Object.keys(e.transform).length > 0 ? "render/image" : "object";
    return { data: { publicUrl: encodeURI(`${this.url}/${s}/public/${n}`) + (i ? `?${i}` : "") } };
  }
  /**
  * Deletes files within the same bucket
  *
  * Returns an array of FileObject entries for the deleted files. Note that deprecated
  * fields like `bucket_id` may or may not be present in the response - do not rely on them.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param paths An array of files to delete. Each entry is either a path (deletes whichever
  * version is currently at that path, e.g. `'folder/image.png'`), or `{ path, versionId }` to
  * delete an exact version current or archived (e.g. `{ path: 'folder/image.png', versionId: '...' }`).
  * @returns Promise with response containing array of deleted file objects or error
  *
  * @example Delete file
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .remove(['folder/avatar1.png'])
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [],
  *   "error": null
  * }
  * ```
  *
  * @example Delete a specific object version
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .remove([{ path: 'folder/avatar1.png', versionId: 'noncurrent-version-id' }])
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `delete` and `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async remove(t) {
    var e = this;
    return e.handleOperation(async () => await at(e.fetch, `${e.url}/object/${e.bucketId}`, { prefixes: t }, { headers: e.headers }));
  }
  /**
  * Purges the CDN cache for a single object in this bucket.
  *
  * Maps to `DELETE /cdn/{bucket}/{path}` on the Storage API. The server
  * issues a CDN invalidation for the object and returns `{ message: 'success' }`.
  *
  * **Requires the `service_role` key.** The underlying endpoint enforces
  * `service_role` JWT — calls made with the anon key or a user JWT will be
  * rejected by the server.
  *
  * **Hosted CDN feature.** On self-hosted Supabase, the Storage service must
  * have `CDN_PURGE_ENDPOINT_URL` configured and the `purgeCache` tenant
  * feature enabled, otherwise the server returns an error.
  *
  * Operates on a single object path. There is no wildcard or recursion: pass
  * the exact path of the object you want invalidated.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The path (relative to the bucket) of the object to purge, e.g. `folder/avatar.png`.
  * @param options Optional purge cache options.
  * @param options.transformations If true, purges only transformations (resized/formatted variants), leaving the original cached file intact.
  * @param parameters Optional fetch parameters such as an `AbortController` signal.
  * @returns Promise with `{ data: { message }, error: null }` on success or `{ data: null, error }` on failure.
  *
  * @example Purge a single cached object
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .purgeCache('folder/avatar1.png')
  * ```
  *
  * @example Purge only transformations for a single object
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .purgeCache('folder/avatar1.png', { transformations: true })
  * ```
  */
  async purgeCache(t, e, n) {
    var r = this;
    return r.handleOperation(async () => {
      const i = Dn(r._getFinalPath(t)), s = new URLSearchParams();
      e != null && e.transformations && s.set("transformations", "true");
      const a = s.toString();
      return await at(r.fetch, `${r.url}/cdn/${i}${a ? `?${a}` : ""}`, {}, { headers: r.headers }, n);
    });
  }
  /**
  * Get file metadata
  * @param id the file id to retrieve metadata
  */
  /**
  * Update file metadata
  * @param id the file id to update metadata
  * @param meta the new file metadata
  */
  /**
  * Lists all the files and folders within a path of the bucket.
  *
  * **Important:** For folder entries, fields like `id`, `updated_at`, `created_at`,
  * `last_accessed_at`, and `metadata` will be `null`. Only files have these fields populated.
  * Additionally, deprecated fields like `bucket_id`, `owner`, and `buckets` are NOT returned
  * by this method.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param path The folder path.
  * @param options Search options including limit (defaults to 100), offset, sortBy, and search
  * @param parameters Optional fetch parameters including signal for cancellation
  * @returns Promise with response containing array of files/folders or error
  *
  * @example List files in a bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .list('folder', {
  *     limit: 100,
  *     offset: 0,
  *     sortBy: { column: 'name', order: 'asc' },
  *   })
  *
  * // Handle files vs folders
  * data?.forEach(item => {
  *   if (item.id !== null) {
  *     // It's a file
  *     console.log('File:', item.name, 'Size:', item.metadata?.size)
  *   } else {
  *     // It's a folder
  *     console.log('Folder:', item.name)
  *   }
  * })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "avatar1.png",
  *       "id": "e668cf7f-821b-4a2f-9dce-7dfa5dd1cfd2",
  *       "updated_at": "2024-05-22T23:06:05.580Z",
  *       "created_at": "2024-05-22T23:04:34.443Z",
  *       "last_accessed_at": "2024-05-22T23:04:34.443Z",
  *       "metadata": {
  *         "eTag": "\"c5e8c553235d9af30ef4f6e280790b92\"",
  *         "size": 32175,
  *         "mimetype": "image/png",
  *         "cacheControl": "max-age=3600",
  *         "lastModified": "2024-05-22T23:06:05.574Z",
  *         "contentLength": 32175,
  *         "httpStatusCode": 200
  *       }
  *     }
  *   ],
  *   "error": null
  * }
  * ```
  *
  * @example Search files in a bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .list('folder', {
  *     limit: 100,
  *     offset: 0,
  *     sortBy: { column: 'name', order: 'asc' },
  *     search: 'jon'
  *   })
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: none
  *   - `objects` table permissions: `select`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async list(t, e, n) {
    var r = this;
    return r.handleOperation(async () => {
      const i = e != null && e.sortBy ? P(P({}, wn.sortBy), e.sortBy) : wn.sortBy, s = P(P(P({}, wn), e), {}, {
        sortBy: i,
        prefix: t || ""
      });
      return await ge(r.fetch, `${r.url}/object/list/${r.bucketId}`, s, { headers: r.headers }, n);
    });
  }
  /**
  * Lists all the files and folders within a bucket using the V2 API with pagination support.
  *
  * **Important:** Folder entries in the `folders` array only contain `name` and optionally `key` —
  * they have no `id`, timestamps, or `metadata` fields. Full file metadata is only available
  * on entries in the `objects` array.
  *
  * @experimental this method signature might change in the future
  *
  * @category Storage
  * @subcategory File Buckets
  * @param options Search options including prefix, cursor for pagination, limit, with_delimiter
  * @param parameters Optional fetch parameters including signal for cancellation
  * @returns Promise with response containing folders/objects arrays with pagination info or error
  *
  * @example List files with pagination
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .from('avatars')
  *   .listV2({
  *     prefix: 'folder/',
  *     limit: 100,
  *   })
  *
  * // Handle pagination
  * if (data?.hasNext) {
  *   const nextPage = await supabase
  *     .storage
  *     .from('avatars')
  *     .listV2({
  *       prefix: 'folder/',
  *       cursor: data.nextCursor,
  *     })
  * }
  *
  * // Handle files vs folders
  * data?.objects.forEach(file => {
  *   if (file.id !== null) {
  *     console.log('File:', file.name, 'Size:', file.metadata?.size)
  *   }
  * })
  * data?.folders.forEach(folder => {
  *   console.log('Folder:', folder.name)
  * })
  * ```
  */
  async listV2(t, e) {
    var n = this;
    return n.handleOperation(async () => {
      const r = P({}, t);
      return await ge(n.fetch, `${n.url}/object/list-v2/${n.bucketId}`, r, { headers: n.headers }, e);
    });
  }
  prepareUploadFormData(t, e) {
    const n = new FormData(), r = [];
    t instanceof FormData ? t.forEach((i, s) => {
      typeof i == "string" ? n.append(s, i) : r.push([s, i]);
    }) : r.push(["", t]), n.has("cacheControl") || n.append("cacheControl", e.cacheControl), e.metadata && !n.has("metadata") && n.append("metadata", this.encodeMetadata(e.metadata)), e.contentEncoding && !n.has("contentEncoding") && n.append("contentEncoding", e.contentEncoding);
    for (const [i, s] of r) n.append(i, s);
    return n;
  }
  encodeMetadata(t) {
    return JSON.stringify(t);
  }
  toBase64(t) {
    return typeof Buffer < "u" ? Buffer.from(t).toString("base64") : btoa(t);
  }
  _getFinalPath(t) {
    return `${this.bucketId}/${t.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(t) {
    return t.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  /** Modifies the `query`, appending values the from `transform` */
  applyTransformOptsToQuery(t, e) {
    return e.width && t.set("width", e.width.toString()), e.height && t.set("height", e.height.toString()), e.resize && t.set("resize", e.resize), e.format && t.set("format", e.format), e.quality && t.set("quality", e.quality.toString()), t;
  }
};
const wc = "2.118.0", Nt = { "X-Client-Info": `storage-js/${wc}` };
var bc = class extends dt {
  constructor(t, e = {}, n, r) {
    const i = new URL(t);
    r != null && r.useNewHostname && /supabase\.(co|in|red)$/.test(i.hostname) && !i.hostname.includes("storage.supabase.") && (i.hostname = i.hostname.replace("supabase.", "storage.supabase."));
    const s = i.href.replace(/\/$/, ""), a = P(P({}, Nt), e);
    super(s, a, n, "storage");
  }
  /**
  * Retrieves the details of all Storage buckets within an existing project.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param options Query parameters for listing buckets
  * @param options.limit Maximum number of buckets to return
  * @param options.offset Number of buckets to skip
  * @param options.sortColumn Column to sort by ('id', 'name', 'created_at', 'updated_at')
  * @param options.sortOrder Sort order ('asc' or 'desc')
  * @param options.search Search term to filter bucket names
  * @returns Promise with response containing array of buckets or error
  *
  * @example List buckets
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .listBuckets()
  * ```
  *
  * @example List buckets with options
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .listBuckets({
  *     limit: 10,
  *     offset: 0,
  *     sortColumn: 'created_at',
  *     sortOrder: 'desc',
  *     search: 'prod'
  *   })
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: `select`
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async listBuckets(t) {
    var e = this;
    return e.handleOperation(async () => {
      const n = e.listBucketOptionsToQueryString(t);
      return await st(e.fetch, `${e.url}/bucket${n}`, { headers: e.headers });
    });
  }
  /**
  * Retrieves the details of an existing Storage bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param id The unique identifier of the bucket you would like to retrieve.
  * @returns Promise with response containing bucket details or error
  *
  * @example Get bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .getBucket('avatars')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "id": "avatars",
  *     "name": "avatars",
  *     "owner": "",
  *     "public": false,
  *     "file_size_limit": 1024,
  *     "allowed_mime_types": [
  *       "image/png"
  *     ],
  *     "created_at": "2024-05-22T22:26:05.100Z",
  *     "updated_at": "2024-05-22T22:26:05.100Z"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: `select`
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async getBucket(t) {
    var e = this;
    return e.handleOperation(async () => await st(e.fetch, `${e.url}/bucket/${t}`, { headers: e.headers }));
  }
  /**
  * Creates a new Storage bucket
  *
  * @category Storage
  * @subcategory File Buckets
  * @param id A unique identifier for the bucket you are creating.
  * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
  * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
  * The global file size limit takes precedence over this value.
  * The default value is null, which doesn't set a per bucket file size limit.
  * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
  * The default value is null, which allows files with all mime types to be uploaded.
  * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
  * @param options.type (private-beta) specifies the bucket type. see `BucketType` for more details.
  *   - default bucket type is `STANDARD`
  * @param options.versioningStatus the bucket's initial object versioning status.
  * The default value is `DISABLED`
  * @returns Promise with response containing newly created bucket name or error
  *
  * @example Create bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .createBucket('avatars', {
  *     public: false,
  *     allowedMimeTypes: ['image/png'],
  *     fileSizeLimit: 1024
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "name": "avatars"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: `insert`
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async createBucket(t, e = { public: !1 }) {
    var n = this;
    return n.handleOperation(async () => await ge(n.fetch, `${n.url}/bucket`, {
      id: t,
      name: t,
      type: e.type,
      public: e.public,
      file_size_limit: e.fileSizeLimit,
      allowed_mime_types: e.allowedMimeTypes,
      versioning_status: e.versioningStatus
    }, { headers: n.headers }));
  }
  /**
  * Updates a Storage bucket
  *
  * @category Storage
  * @subcategory File Buckets
  * @param id A unique identifier for the bucket you are updating.
  * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
  * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
  * The global file size limit takes precedence over this value.
  * The default value is null, which doesn't set a per bucket file size limit.
  * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
  * The default value is null, which allows files with all mime types to be uploaded.
  * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
  * @param options.versioningStatus the bucket's new object versioning status. `DISABLED` is not
  * valid here, there's no transition back to it once versioning has been touched.
  * @returns Promise with response containing success message or error
  *
  * @example Update bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .updateBucket('avatars', {
  *     public: false,
  *     allowedMimeTypes: ['image/png'],
  *     fileSizeLimit: 1024
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully updated"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: `select` and `update`
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async updateBucket(t, e) {
    var n = this;
    return n.handleOperation(async () => await en(n.fetch, `${n.url}/bucket/${t}`, {
      id: t,
      name: t,
      public: e.public,
      file_size_limit: e.fileSizeLimit,
      allowed_mime_types: e.allowedMimeTypes,
      versioning_status: e.versioningStatus
    }, { headers: n.headers }));
  }
  /**
  * Removes all objects inside a single bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param id The unique identifier of the bucket you would like to empty.
  * @returns Promise with success message or error
  *
  * @example Empty bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .emptyBucket('avatars')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully emptied"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: `select`
  *   - `objects` table permissions: `select` and `delete`
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async emptyBucket(t) {
    var e = this;
    return e.handleOperation(async () => await ge(e.fetch, `${e.url}/bucket/${t}/empty`, {}, { headers: e.headers }));
  }
  /**
  * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
  * You must first `empty()` the bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param id The unique identifier of the bucket you would like to delete.
  * @returns Promise with success message or error
  *
  * @example Delete bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .deleteBucket('avatars')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully deleted"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: `select` and `delete`
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async deleteBucket(t) {
    var e = this;
    return e.handleOperation(async () => await at(e.fetch, `${e.url}/bucket/${t}`, {}, { headers: e.headers }));
  }
  /**
  * Returns the lifecycle policy stored on a bucket.
  *
  * Fails with `NoSuchLifecycleConfiguration` when the bucket has no policy.
  *
  * These rules expire previous versions of objects, not the current one.
  * Turn versioning on or there is nothing for the policy to act on.
  * Standard buckets only. Returns `FeatureNotEnabled` if lifecycle is off
  * for the project.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param id The unique identifier of the bucket.
  * @returns Promise with the lifecycle configuration or error
  *
  * @example Get lifecycle configuration
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .getBucketLifecycle('avatars')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "rules": [
  *       {
  *         "id": "expire-history",
  *         "status": "Enabled",
  *         "filter": {},
  *         "noncurrentVersionExpiration": {
  *           "noncurrentDays": 30,
  *           "newerNoncurrentVersions": 2
  *         }
  *       }
  *     ]
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: `select`
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async getBucketLifecycle(t) {
    var e = this;
    return e.handleOperation(async () => await st(e.fetch, e.bucketLifecycleUrl(t), { headers: e.headers }));
  }
  /**
  * Replaces the lifecycle policy on a bucket.
  *
  * The `rules` array you send is the whole policy. Anything previously stored
  * is overwritten. Send at least one rule. Call {@link deleteBucketLifecycle}
  * to remove the policy.
  *
  * Each rule currently supports only `noncurrentVersionExpiration`. `filter`
  * is required and must be `{}`. Prefix filters, tag filters, and current-object
  * expiration are rejected. Rule IDs must be unique. Omit `id` and the
  * server generates one.
  *
  * Standard buckets only. Returns `FeatureNotEnabled` if lifecycle is off
  * for the project.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param id The unique identifier of the bucket.
  * @param configuration The full lifecycle configuration to store.
  * @returns Promise with the stored configuration or error
  *
  * @example Replace lifecycle configuration
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .updateBucketLifecycle('avatars', {
  *     rules: [
  *       {
  *         id: 'expire-history',
  *         status: 'Enabled',
  *         filter: {},
  *         noncurrentVersionExpiration: {
  *           noncurrentDays: 30,
  *           newerNoncurrentVersions: 2,
  *         },
  *       },
  *     ],
  *   })
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: `select` and `update`
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async updateBucketLifecycle(t, e) {
    var n = this;
    return n.handleOperation(async () => await en(n.fetch, n.bucketLifecycleUrl(t), e, { headers: n.headers }));
  }
  /**
  * Removes the lifecycle policy from a bucket.
  *
  * Safe to call when no policy is stored. The response is still success.
  * Standard buckets only. Returns `FeatureNotEnabled` if lifecycle is off
  * for the project.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param id The unique identifier of the bucket.
  * @returns Promise with success message or error
  *
  * @example Delete lifecycle configuration
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .deleteBucketLifecycle('avatars')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully deleted"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - RLS policy permissions required:
  *   - `buckets` table permissions: `select` and `update`
  *   - `objects` table permissions: none
  * - Refer to the [Storage guide](/docs/guides/storage/security/access-control) on how access control works
  */
  async deleteBucketLifecycle(t) {
    var e = this;
    return e.handleOperation(async () => await at(e.fetch, e.bucketLifecycleUrl(t), {}, { headers: e.headers }));
  }
  /**
  * Purges the CDN cache for an entire bucket.
  *
  * Maps to `DELETE /cdn/{bucket}` on the Storage API. The server
  * issues a CDN invalidation for the bucket and returns `{ message: 'success' }`.
  *
  * **Requires the `service_role` key.** The underlying endpoint enforces
  * `service_role` JWT — calls made with the anon key or a user JWT will be
  * rejected by the server.
  *
  * **Hosted CDN feature.** On self-hosted Supabase, the Storage service must
  * have `CDN_PURGE_ENDPOINT_URL` configured and the `purgeCache` tenant
  * feature enabled, otherwise the server returns an error.
  *
  * @category Storage
  * @subcategory File Buckets
  * @param id The unique identifier of the bucket you would like to purge from cache.
  * @param options Optional purge cache options.
  * @param options.transformations If true, purges only transformations (resized/formatted variants), leaving original cached files intact.
  * @param parameters Optional fetch parameters such as an `AbortController` signal.
  * @returns Promise with `{ data: { message }, error: null }` on success or `{ data: null, error }` on failure.
  *
  * @example Purge cache for an entire bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .purgeBucketCache('avatars')
  * ```
  *
  * @example Purge only transformations for an entire bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .purgeBucketCache('avatars', { transformations: true })
  * ```
  */
  async purgeBucketCache(t, e, n) {
    var r = this;
    return r.handleOperation(async () => {
      const i = new URLSearchParams();
      e != null && e.transformations && i.set("transformations", "true");
      const s = i.toString();
      return await at(r.fetch, `${r.url}/cdn/${Dn(t)}${s ? `?${s}` : ""}`, {}, { headers: r.headers }, n);
    });
  }
  bucketLifecycleUrl(t) {
    return `${this.url}/bucket/${Dn(t)}/lifecycle`;
  }
  listBucketOptionsToQueryString(t) {
    const e = {};
    return t && ("limit" in t && (e.limit = String(t.limit)), "offset" in t && (e.offset = String(t.offset)), t.search && (e.search = t.search), t.sortColumn && (e.sortColumn = t.sortColumn), t.sortOrder && (e.sortOrder = t.sortOrder)), Object.keys(e).length > 0 ? "?" + new URLSearchParams(e).toString() : "";
  }
}, vc = class extends dt {
  /**
  * @alpha
  *
  * Creates a new StorageAnalyticsClient instance
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Analytics Buckets
  * @param url - The base URL for the storage API
  * @param headers - HTTP headers to include in requests
  * @param fetch - Optional custom fetch implementation
  *
  * @example Using supabase-js (recommended)
  * ```typescript
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const { data, error } = await supabase.storage.analytics.listBuckets()
  * ```
  *
  * @example Standalone import for bundle-sensitive environments
  * ```typescript
  * import { StorageAnalyticsClient } from '@supabase/storage-js'
  *
  * const client = new StorageAnalyticsClient(url, headers)
  * ```
  */
  constructor(t, e = {}, n) {
    const r = t.replace(/\/$/, ""), i = P(P({}, Nt), e);
    super(r, i, n, "storage");
  }
  /**
  * @alpha
  *
  * Creates a new analytics bucket using Iceberg tables
  * Analytics buckets are optimized for analytical queries and data processing
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Analytics Buckets
  * @param name A unique name for the bucket you are creating
  * @returns Promise with response containing newly created analytics bucket or error
  *
  * @example Create analytics bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .analytics
  *   .createBucket('analytics-data')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "name": "analytics-data",
  *     "type": "ANALYTICS",
  *     "format": "iceberg",
  *     "created_at": "2024-05-22T22:26:05.100Z",
  *     "updated_at": "2024-05-22T22:26:05.100Z"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - Creates a new analytics bucket using Iceberg tables
  * - Analytics buckets are optimized for analytical queries and data processing
  */
  async createBucket(t) {
    var e = this;
    return e.handleOperation(async () => await ge(e.fetch, `${e.url}/bucket`, { name: t }, { headers: e.headers }));
  }
  /**
  * @alpha
  *
  * Retrieves the details of all Analytics Storage buckets within an existing project
  * Only returns buckets of type 'ANALYTICS'
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Analytics Buckets
  * @param options Query parameters for listing buckets
  * @param options.limit Maximum number of buckets to return
  * @param options.offset Number of buckets to skip
  * @param options.sortColumn Column to sort by ('name', 'created_at', 'updated_at')
  * @param options.sortOrder Sort order ('asc' or 'desc')
  * @param options.search Search term to filter bucket names
  * @returns Promise with response containing array of analytics buckets or error
  *
  * @example List analytics buckets
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .analytics
  *   .listBuckets({
  *     limit: 10,
  *     offset: 0,
  *     sortColumn: 'created_at',
  *     sortOrder: 'desc'
  *   })
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": [
  *     {
  *       "name": "analytics-data",
  *       "type": "ANALYTICS",
  *       "format": "iceberg",
  *       "created_at": "2024-05-22T22:26:05.100Z",
  *       "updated_at": "2024-05-22T22:26:05.100Z"
  *     }
  *   ],
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - Retrieves the details of all Analytics Storage buckets within an existing project
  * - Only returns buckets of type 'ANALYTICS'
  */
  async listBuckets(t) {
    var e = this;
    return e.handleOperation(async () => {
      const n = new URLSearchParams();
      (t == null ? void 0 : t.limit) !== void 0 && n.set("limit", t.limit.toString()), (t == null ? void 0 : t.offset) !== void 0 && n.set("offset", t.offset.toString()), t != null && t.sortColumn && n.set("sortColumn", t.sortColumn), t != null && t.sortOrder && n.set("sortOrder", t.sortOrder), t != null && t.search && n.set("search", t.search);
      const r = n.toString(), i = r ? `${e.url}/bucket?${r}` : `${e.url}/bucket`;
      return await st(e.fetch, i, { headers: e.headers });
    });
  }
  /**
  * @alpha
  *
  * Deletes an existing analytics bucket
  * A bucket can't be deleted with existing objects inside it
  * You must first empty the bucket before deletion
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Analytics Buckets
  * @param bucketName The unique identifier of the bucket you would like to delete
  * @returns Promise with response containing success message or error
  *
  * @example Delete analytics bucket
  * ```js
  * const { data, error } = await supabase
  *   .storage
  *   .analytics
  *   .deleteBucket('analytics-data')
  * ```
  *
  * Response:
  * ```json
  * {
  *   "data": {
  *     "message": "Successfully deleted"
  *   },
  *   "error": null
  * }
  * ```
  *
  * @remarks
  * - Deletes an analytics bucket
  */
  async deleteBucket(t) {
    var e = this;
    return e.handleOperation(async () => await at(e.fetch, `${e.url}/bucket/${t}`, {}, { headers: e.headers }));
  }
  /**
  * @alpha
  *
  * Get an Iceberg REST Catalog client configured for a specific analytics bucket
  * Use this to perform advanced table and namespace operations within the bucket
  * The returned client provides full access to the Apache Iceberg REST Catalog API
  * with the Supabase `{ data, error }` pattern for consistent error handling on all operations.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Analytics Buckets
  * @param bucketName - The name of the analytics bucket (warehouse) to connect to
  * @returns The wrapped Iceberg catalog client
  * @throws {StorageError} If the bucket name is invalid
  *
  * @example Get catalog and create table
  * ```js
  * // First, create an analytics bucket
  * const { data: bucket, error: bucketError } = await supabase
  *   .storage
  *   .analytics
  *   .createBucket('analytics-data')
  *
  * // Get the Iceberg catalog for that bucket
  * const catalog = supabase.storage.analytics.from('analytics-data')
  *
  * // Create a namespace
  * const { error: nsError } = await catalog.createNamespace({ namespace: ['default'] })
  *
  * // Create a table with schema
  * const { data: tableMetadata, error: tableError } = await catalog.createTable(
  *   { namespace: ['default'] },
  *   {
  *     name: 'events',
  *     schema: {
  *       type: 'struct',
  *       fields: [
  *         { id: 1, name: 'id', type: 'long', required: true },
  *         { id: 2, name: 'timestamp', type: 'timestamp', required: true },
  *         { id: 3, name: 'user_id', type: 'string', required: false }
  *       ],
  *       'schema-id': 0,
  *       'identifier-field-ids': [1]
  *     },
  *     'partition-spec': {
  *       'spec-id': 0,
  *       fields: []
  *     },
  *     'write-order': {
  *       'order-id': 0,
  *       fields: []
  *     },
  *     properties: {
  *       'write.format.default': 'parquet'
  *     }
  *   }
  * )
  * ```
  *
  * @example List tables in namespace
  * ```js
  * const catalog = supabase.storage.analytics.from('analytics-data')
  *
  * // List all tables in the default namespace
  * const { data: tables, error: listError } = await catalog.listTables({ namespace: ['default'] })
  * if (listError) {
  *   if (listError.isNotFound()) {
  *     console.log('Namespace not found')
  *   }
  *   return
  * }
  * console.log(tables) // [{ namespace: ['default'], name: 'events' }]
  * ```
  *
  * @example Working with namespaces
  * ```js
  * const catalog = supabase.storage.analytics.from('analytics-data')
  *
  * // List all namespaces
  * const { data: namespaces } = await catalog.listNamespaces()
  *
  * // Create namespace with properties
  * await catalog.createNamespace(
  *   { namespace: ['production'] },
  *   { properties: { owner: 'data-team', env: 'prod' } }
  * )
  * ```
  *
  * @example Cleanup operations
  * ```js
  * const catalog = supabase.storage.analytics.from('analytics-data')
  *
  * // Drop table with purge option (removes all data)
  * const { error: dropError } = await catalog.dropTable(
  *   { namespace: ['default'], name: 'events' },
  *   { purge: true }
  * )
  *
  * if (dropError?.isNotFound()) {
  *   console.log('Table does not exist')
  * }
  *
  * // Drop namespace (must be empty)
  * await catalog.dropNamespace({ namespace: ['default'] })
  * ```
  *
  * @remarks
  * This method provides a bridge between Supabase's bucket management and the standard
  * Apache Iceberg REST Catalog API. The bucket name maps to the Iceberg warehouse parameter.
  * All authentication and configuration is handled automatically using your Supabase credentials.
  *
  * **Error Handling**: Invalid bucket names throw immediately. All catalog
  * operations return `{ data, error }` where errors are `IcebergError` instances from iceberg-js.
  * Use helper methods like `error.isNotFound()` or check `error.status` for specific error handling.
  * Use `.throwOnError()` on the analytics client if you prefer exceptions for catalog operations.
  *
  * **Cleanup Operations**: When using `dropTable`, the `purge: true` option permanently
  * deletes all table data. Without it, the table is marked as deleted but data remains.
  *
  * **Library Dependency**: The returned catalog wraps `IcebergRestCatalog` from iceberg-js.
  * For complete API documentation and advanced usage, refer to the
  * [iceberg-js documentation](https://supabase.github.io/iceberg-js/).
  */
  from(t) {
    var e = this;
    if (!cc(t)) throw new hn("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");
    const n = new rc({
      baseUrl: this.url,
      catalogName: t,
      auth: {
        type: "custom",
        getHeaders: async () => e.headers
      },
      fetch: this.fetch
    }), r = this.shouldThrowOnError;
    return new Proxy(n, { get(i, s) {
      const a = i[s];
      return typeof a != "function" ? a : async (...o) => {
        try {
          return {
            data: await a.apply(i, o),
            error: null
          };
        } catch (l) {
          if (r) throw l;
          return {
            data: null,
            error: l
          };
        }
      };
    } });
  }
}, _c = class extends dt {
  /** Creates a new VectorIndexApi instance */
  constructor(t, e = {}, n) {
    const r = t.replace(/\/$/, ""), i = P(P({}, Nt), {}, { "Content-Type": "application/json" }, e);
    super(r, i, n, "vectors");
  }
  /** Creates a new vector index within a bucket */
  async createIndex(t) {
    var e = this;
    return e.handleOperation(async () => await ae.post(e.fetch, `${e.url}/CreateIndex`, t, { headers: e.headers }) || {});
  }
  /** Retrieves metadata for a specific vector index */
  async getIndex(t, e) {
    var n = this;
    return n.handleOperation(async () => await ae.post(n.fetch, `${n.url}/GetIndex`, {
      vectorBucketName: t,
      indexName: e
    }, { headers: n.headers }));
  }
  /** Lists vector indexes within a bucket with optional filtering and pagination */
  async listIndexes(t) {
    var e = this;
    return e.handleOperation(async () => await ae.post(e.fetch, `${e.url}/ListIndexes`, t, { headers: e.headers }));
  }
  /** Deletes a vector index and all its data */
  async deleteIndex(t, e) {
    var n = this;
    return n.handleOperation(async () => await ae.post(n.fetch, `${n.url}/DeleteIndex`, {
      vectorBucketName: t,
      indexName: e
    }, { headers: n.headers }) || {});
  }
}, kc = class extends dt {
  /** Creates a new VectorDataApi instance */
  constructor(t, e = {}, n) {
    const r = t.replace(/\/$/, ""), i = P(P({}, Nt), {}, { "Content-Type": "application/json" }, e);
    super(r, i, n, "vectors");
  }
  /** Inserts or updates vectors in batch (1-500 per request) */
  async putVectors(t) {
    var e = this;
    if (t.vectors.length < 1 || t.vectors.length > 500) throw new Error("Vector batch size must be between 1 and 500 items");
    return e.handleOperation(async () => await ae.post(e.fetch, `${e.url}/PutVectors`, t, { headers: e.headers }) || {});
  }
  /** Retrieves vectors by their keys in batch */
  async getVectors(t) {
    var e = this;
    return e.handleOperation(async () => await ae.post(e.fetch, `${e.url}/GetVectors`, t, { headers: e.headers }));
  }
  /** Lists vectors in an index with pagination */
  async listVectors(t) {
    var e = this;
    if (t.segmentCount !== void 0) {
      if (t.segmentCount < 1 || t.segmentCount > 16) throw new Error("segmentCount must be between 1 and 16");
      if (t.segmentIndex !== void 0 && (t.segmentIndex < 0 || t.segmentIndex >= t.segmentCount))
        throw new Error(`segmentIndex must be between 0 and ${t.segmentCount - 1}`);
    }
    return e.handleOperation(async () => await ae.post(e.fetch, `${e.url}/ListVectors`, t, { headers: e.headers }));
  }
  /** Queries for similar vectors using approximate nearest neighbor search */
  async queryVectors(t) {
    var e = this;
    return e.handleOperation(async () => await ae.post(e.fetch, `${e.url}/QueryVectors`, t, { headers: e.headers }));
  }
  /** Deletes vectors by their keys in batch (1-500 per request) */
  async deleteVectors(t) {
    var e = this;
    if (t.keys.length < 1 || t.keys.length > 500) throw new Error("Keys batch size must be between 1 and 500 items");
    return e.handleOperation(async () => await ae.post(e.fetch, `${e.url}/DeleteVectors`, t, { headers: e.headers }) || {});
  }
}, Sc = class extends dt {
  /** Creates a new VectorBucketApi instance */
  constructor(t, e = {}, n) {
    const r = t.replace(/\/$/, ""), i = P(P({}, Nt), {}, { "Content-Type": "application/json" }, e);
    super(r, i, n, "vectors");
  }
  /** Creates a new vector bucket */
  async createBucket(t) {
    var e = this;
    return e.handleOperation(async () => await ae.post(e.fetch, `${e.url}/CreateVectorBucket`, { vectorBucketName: t }, { headers: e.headers }) || {});
  }
  /** Retrieves metadata for a specific vector bucket */
  async getBucket(t) {
    var e = this;
    return e.handleOperation(async () => await ae.post(e.fetch, `${e.url}/GetVectorBucket`, { vectorBucketName: t }, { headers: e.headers }));
  }
  /** Lists vector buckets with optional filtering and pagination */
  async listBuckets(t = {}) {
    var e = this;
    return e.handleOperation(async () => await ae.post(e.fetch, `${e.url}/ListVectorBuckets`, t, { headers: e.headers }));
  }
  /** Deletes a vector bucket (must be empty first) */
  async deleteBucket(t) {
    var e = this;
    return e.handleOperation(async () => await ae.post(e.fetch, `${e.url}/DeleteVectorBucket`, { vectorBucketName: t }, { headers: e.headers }) || {});
  }
}, Ec = class extends Sc {
  /**
  * @alpha
  *
  * Creates a StorageVectorsClient that can manage buckets, indexes, and vectors.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param url - Base URL of the Storage Vectors REST API.
  * @param options.headers - Optional headers (for example `Authorization`) applied to every request.
  * @param options.fetch - Optional custom `fetch` implementation for non-browser runtimes.
  *
  * @example Using supabase-js (recommended)
  * ```typescript
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * ```
  *
  * @example Standalone import for bundle-sensitive environments
  * ```typescript
  * import { StorageVectorsClient } from '@supabase/storage-js'
  *
  * const client = new StorageVectorsClient(url, options)
  * ```
  */
  constructor(t, e = {}) {
    super(t, e.headers || {}, e.fetch);
  }
  /**
  *
  * @alpha
  *
  * Access operations for a specific vector bucket
  * Returns a scoped client for index and vector operations within the bucket
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param vectorBucketName - Name of the vector bucket
  * @returns Bucket-scoped client with index and vector operations
  *
  * @example Accessing a vector bucket
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * ```
  */
  from(t) {
    return new Tc(this.url, this.headers, t, this.fetch);
  }
  /**
  *
  * @alpha
  *
  * Creates a new vector bucket
  * Vector buckets are containers for vector indexes and their data
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param vectorBucketName - Unique name for the vector bucket
  * @returns Promise with empty response on success or error
  *
  * @example Creating a vector bucket
  * ```typescript
  * const { data, error } = await supabase
  *   .storage
  *   .vectors
  *   .createBucket('embeddings-prod')
  * ```
  */
  async createBucket(t) {
    var e = () => super.createBucket, n = this;
    return e().call(n, t);
  }
  /**
  *
  * @alpha
  *
  * Retrieves metadata for a specific vector bucket
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param vectorBucketName - Name of the vector bucket
  * @returns Promise with bucket metadata or error
  *
  * @example Get bucket metadata
  * ```typescript
  * const { data, error } = await supabase
  *   .storage
  *   .vectors
  *   .getBucket('embeddings-prod')
  *
  * console.log('Bucket created:', data?.vectorBucket.creationTime)
  * ```
  */
  async getBucket(t) {
    var e = () => super.getBucket, n = this;
    return e().call(n, t);
  }
  /**
  *
  * @alpha
  *
  * Lists all vector buckets with optional filtering and pagination
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Optional filters (prefix, maxResults, nextToken)
  * @returns Promise with list of buckets or error
  *
  * @example List vector buckets
  * ```typescript
  * const { data, error } = await supabase
  *   .storage
  *   .vectors
  *   .listBuckets({ prefix: 'embeddings-' })
  *
  * data?.vectorBuckets.forEach(bucket => {
  *   console.log(bucket.vectorBucketName)
  * })
  * ```
  */
  async listBuckets(t = {}) {
    var e = () => super.listBuckets, n = this;
    return e().call(n, t);
  }
  /**
  *
  * @alpha
  *
  * Deletes a vector bucket (bucket must be empty)
  * All indexes must be deleted before deleting the bucket
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param vectorBucketName - Name of the vector bucket to delete
  * @returns Promise with empty response on success or error
  *
  * @example Delete a vector bucket
  * ```typescript
  * const { data, error } = await supabase
  *   .storage
  *   .vectors
  *   .deleteBucket('embeddings-old')
  * ```
  */
  async deleteBucket(t) {
    var e = () => super.deleteBucket, n = this;
    return e().call(n, t);
  }
}, Tc = class extends _c {
  /**
  * @alpha
  *
  * Creates a helper that automatically scopes all index operations to the provided bucket.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @example Creating a vector bucket scope
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * ```
  */
  constructor(t, e, n, r) {
    super(t, e, r), this.vectorBucketName = n;
  }
  /**
  *
  * @alpha
  *
  * Creates a new vector index in this bucket
  * Convenience method that automatically includes the bucket name
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Index configuration (vectorBucketName is automatically set)
  * @returns Promise with empty response on success or error
  *
  * @example Creating a vector index
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * await bucket.createIndex({
  *   indexName: 'documents-openai',
  *   dataType: 'float32',
  *   dimension: 1536,
  *   distanceMetric: 'cosine',
  *   metadataConfiguration: {
  *     nonFilterableMetadataKeys: ['raw_text']
  *   }
  * })
  * ```
  */
  async createIndex(t) {
    var e = () => super.createIndex, n = this;
    return e().call(n, P(P({}, t), {}, { vectorBucketName: n.vectorBucketName }));
  }
  /**
  *
  * @alpha
  *
  * Lists indexes in this bucket
  * Convenience method that automatically includes the bucket name
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Listing options (vectorBucketName is automatically set)
  * @returns Promise with response containing indexes array and pagination token or error
  *
  * @example List indexes
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * const { data } = await bucket.listIndexes({ prefix: 'documents-' })
  * ```
  */
  async listIndexes(t = {}) {
    var e = () => super.listIndexes, n = this;
    return e().call(n, P(P({}, t), {}, { vectorBucketName: n.vectorBucketName }));
  }
  /**
  *
  * @alpha
  *
  * Retrieves metadata for a specific index in this bucket
  * Convenience method that automatically includes the bucket name
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param indexName - Name of the index to retrieve
  * @returns Promise with index metadata or error
  *
  * @example Get index metadata
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * const { data } = await bucket.getIndex('documents-openai')
  * console.log('Dimension:', data?.index.dimension)
  * ```
  */
  async getIndex(t) {
    var e = () => super.getIndex, n = this;
    return e().call(n, n.vectorBucketName, t);
  }
  /**
  *
  * @alpha
  *
  * Deletes an index from this bucket
  * Convenience method that automatically includes the bucket name
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param indexName - Name of the index to delete
  * @returns Promise with empty response on success or error
  *
  * @example Delete an index
  * ```typescript
  * const bucket = supabase.storage.vectors.from('embeddings-prod')
  * await bucket.deleteIndex('old-index')
  * ```
  */
  async deleteIndex(t) {
    var e = () => super.deleteIndex, n = this;
    return e().call(n, n.vectorBucketName, t);
  }
  /**
  *
  * @alpha
  *
  * Access operations for a specific index within this bucket
  * Returns a scoped client for vector data operations
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param indexName - Name of the index
  * @returns Index-scoped client with vector data operations
  *
  * @example Accessing an index
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  *
  * // Insert vectors
  * await index.putVectors({
  *   vectors: [
  *     { key: 'doc-1', data: { float32: [...] }, metadata: { title: 'Intro' } }
  *   ]
  * })
  *
  * // Query similar vectors
  * const { data } = await index.queryVectors({
  *   queryVector: { float32: [...] },
  *   topK: 5
  * })
  * ```
  */
  index(t) {
    return new Ac(this.url, this.headers, this.vectorBucketName, t, this.fetch);
  }
}, Ac = class extends kc {
  /**
  *
  * @alpha
  *
  * Creates a helper that automatically scopes all vector operations to the provided bucket/index names.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @example Creating a vector index scope
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * ```
  */
  constructor(t, e, n, r, i) {
    super(t, e, i), this.vectorBucketName = n, this.indexName = r;
  }
  /**
  *
  * @alpha
  *
  * Inserts or updates vectors in this index
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Vector insertion options (bucket and index names automatically set)
  * @returns Promise with empty response on success or error
  *
  * @example Insert vectors into an index
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * await index.putVectors({
  *   vectors: [
  *     {
  *       key: 'doc-1',
  *       data: { float32: [0.1, 0.2, ...] },
  *       metadata: { title: 'Introduction', page: 1 }
  *     }
  *   ]
  * })
  * ```
  */
  async putVectors(t) {
    var e = () => super.putVectors, n = this;
    return e().call(n, P(P({}, t), {}, {
      vectorBucketName: n.vectorBucketName,
      indexName: n.indexName
    }));
  }
  /**
  *
  * @alpha
  *
  * Retrieves vectors by keys from this index
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Vector retrieval options (bucket and index names automatically set)
  * @returns Promise with response containing vectors array or error
  *
  * @example Get vectors by keys
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * const { data } = await index.getVectors({
  *   keys: ['doc-1', 'doc-2'],
  *   returnMetadata: true
  * })
  * ```
  */
  async getVectors(t) {
    var e = () => super.getVectors, n = this;
    return e().call(n, P(P({}, t), {}, {
      vectorBucketName: n.vectorBucketName,
      indexName: n.indexName
    }));
  }
  /**
  *
  * @alpha
  *
  * Lists vectors in this index with pagination
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Listing options (bucket and index names automatically set)
  * @returns Promise with response containing vectors array and pagination token or error
  *
  * @example List vectors with pagination
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * const { data } = await index.listVectors({
  *   maxResults: 500,
  *   returnMetadata: true
  * })
  * ```
  */
  async listVectors(t = {}) {
    var e = () => super.listVectors, n = this;
    return e().call(n, P(P({}, t), {}, {
      vectorBucketName: n.vectorBucketName,
      indexName: n.indexName
    }));
  }
  /**
  *
  * @alpha
  *
  * Queries for similar vectors in this index
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Query options (bucket and index names automatically set)
  * @returns Promise with response containing vectors ordered by distance, an optional pagination token, or an error
  *
  * @example Query similar vectors
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * const { data } = await index.queryVectors({
  *   queryVector: { float32: [0.1, 0.2, ...] },
  *   topK: 5,
  *   filter: { category: 'technical' },
  *   returnDistance: true,
  *   returnMetadata: true
  * })
  * ```
  */
  async queryVectors(t) {
    var e = () => super.queryVectors, n = this;
    return e().call(n, P(P({}, t), {}, {
      vectorBucketName: n.vectorBucketName,
      indexName: n.indexName
    }));
  }
  /**
  *
  * @alpha
  *
  * Deletes vectors by keys from this index
  * Convenience method that automatically includes bucket and index names
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  * @param options - Deletion options (bucket and index names automatically set)
  * @returns Promise with empty response on success or error
  *
  * @example Delete vectors by keys
  * ```typescript
  * const index = supabase.storage.vectors.from('embeddings-prod').index('documents-openai')
  * await index.deleteVectors({
  *   keys: ['doc-1', 'doc-2', 'doc-3']
  * })
  * ```
  */
  async deleteVectors(t) {
    var e = () => super.deleteVectors, n = this;
    return e().call(n, P(P({}, t), {}, {
      vectorBucketName: n.vectorBucketName,
      indexName: n.indexName
    }));
  }
}, xc = class extends bc {
  /**
  * Creates a client for Storage buckets, files, analytics, and vectors.
  *
  * @category Storage
  * @subcategory File Buckets
  *
  * @example Using supabase-js (recommended)
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * const avatars = supabase.storage.from('avatars')
  * ```
  *
  * @example Standalone import for bundle-sensitive environments
  * ```ts
  * import { StorageClient } from '@supabase/storage-js'
  *
  * const storage = new StorageClient('https://xyzcompany.supabase.co/storage/v1', {
  *   apikey: 'your-publishable-key',
  * })
  * const avatars = storage.from('avatars')
  * ```
  */
  constructor(t, e = {}, n, r) {
    super(t, e, n, r);
  }
  /**
  * Perform file operation in a bucket.
  *
  * @category Storage
  * @subcategory File Buckets
  *
  * @param id The bucket id to operate on.
  *
  * @example Accessing a bucket
  * ```typescript
  * const avatars = supabase.storage.from('avatars')
  * ```
  */
  from(t) {
    return new yc(this.url, this.headers, t, this.fetch);
  }
  /**
  *
  * @alpha
  *
  * Access vector storage operations.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Vector Buckets
  *
  * @returns A StorageVectorsClient instance configured with the current storage settings.
  */
  get vectors() {
    return new Ec(this.url + "/vector", {
      headers: this.headers,
      fetch: this.fetch
    });
  }
  /**
  *
  * @alpha
  *
  * Access analytics storage operations using Iceberg tables.
  *
  * **Public alpha:** This API is part of a public alpha release and may not be available to your account type.
  *
  * @category Storage
  * @subcategory Analytics Buckets
  *
  * @returns A StorageAnalyticsClient instance configured with the current storage settings.
  */
  get analytics() {
    return new vc(this.url + "/iceberg", this.headers, this.fetch);
  }
};
const Ji = "2.118.0", Oe = 30 * 1e3, bt = 3, bn = bt * Oe, Cc = 2 * Oe, Rc = "http://localhost:9999", Oc = "supabase.auth.token", Ic = { "X-Client-Info": `gotrue-js/${Ji}` }, Nn = "X-Supabase-Api-Version", Yi = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
}, Pc = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, He = "sb_flow_id", jc = 5, Lc = 600 * 1e3;
class ut extends Error {
  constructor(e, n, r) {
    super(e), this.__isAuthError = !0, this.name = "AuthError", this.status = n, this.code = r;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      code: this.code
    };
  }
}
function T(t) {
  return typeof t == "object" && t !== null && "__isAuthError" in t;
}
class Qi extends ut {
  constructor(e, n, r) {
    super(e, n, r), this.name = "AuthApiError", this.status = n, this.code = r;
  }
}
function Un(t) {
  return T(t) && t.name === "AuthApiError";
}
class ue extends ut {
  constructor(e, n) {
    super(e), this.name = "AuthUnknownError", this.originalError = n;
  }
}
class me extends ut {
  constructor(e, n, r, i) {
    super(e, r, i), this.name = n, this.status = r;
  }
}
class V extends me {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function vt(t) {
  return T(t) && t.name === "AuthSessionMissingError";
}
class Be extends me {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class _t extends me {
  constructor(e) {
    super(e, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class kt extends me {
  constructor(e, n = null) {
    super(e, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = n;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { details: this.details });
  }
}
function Xi(t) {
  return T(t) && t.name === "AuthImplicitGrantRedirectError";
}
class Fn extends me {
  constructor(e, n = null) {
    super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = n;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { details: this.details });
  }
}
class Zi extends me {
  constructor() {
    super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.", "AuthPKCECodeVerifierMissingError", 400, "pkce_code_verifier_not_found");
  }
}
class xt extends me {
  constructor(e, n) {
    super(e, "AuthRetryableFetchError", n, void 0);
  }
}
function St(t) {
  return T(t) && t.name === "AuthRetryableFetchError";
}
class Bn extends me {
  constructor(e = "Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)") {
    super(e, "AuthRefreshDiscardedError", 409, void 0);
  }
}
function zn(t) {
  return T(t) && t.name === "AuthRefreshDiscardedError";
}
class Mn extends me {
  constructor(e, n, r) {
    super(e, "AuthWeakPasswordError", n, "weak_password"), this.reasons = r;
  }
  toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { reasons: this.reasons });
  }
}
class jt extends me {
  constructor(e) {
    super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const tn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), Rr = ` 	
\r=`.split(""), $c = (() => {
  const t = new Array(128);
  for (let e = 0; e < t.length; e += 1)
    t[e] = -1;
  for (let e = 0; e < Rr.length; e += 1)
    t[Rr[e].charCodeAt(0)] = -2;
  for (let e = 0; e < tn.length; e += 1)
    t[tn[e].charCodeAt(0)] = e;
  return t;
})();
function Or(t, e, n) {
  if (t !== null)
    for (e.queue = e.queue << 8 | t, e.queuedBits += 8; e.queuedBits >= 6; ) {
      const r = e.queue >> e.queuedBits - 6 & 63;
      n(tn[r]), e.queuedBits -= 6;
    }
  else if (e.queuedBits > 0)
    for (e.queue = e.queue << 6 - e.queuedBits, e.queuedBits = 6; e.queuedBits >= 6; ) {
      const r = e.queue >> e.queuedBits - 6 & 63;
      n(tn[r]), e.queuedBits -= 6;
    }
}
function es(t, e, n) {
  const r = $c[t];
  if (r > -1)
    for (e.queue = e.queue << 6 | r, e.queuedBits += 6; e.queuedBits >= 8; )
      n(e.queue >> e.queuedBits - 8 & 255), e.queuedBits -= 8;
  else {
    if (r === -2)
      return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`);
  }
}
function Ir(t) {
  const e = [], n = (a) => {
    e.push(String.fromCodePoint(a));
  }, r = {
    utf8seq: 0,
    codepoint: 0
  }, i = { queue: 0, queuedBits: 0 }, s = (a) => {
    Uc(a, r, n);
  };
  for (let a = 0; a < t.length; a += 1)
    es(t.charCodeAt(a), i, s);
  return e.join("");
}
function Dc(t, e) {
  if (t <= 127) {
    e(t);
    return;
  } else if (t <= 2047) {
    e(192 | t >> 6), e(128 | t & 63);
    return;
  } else if (t <= 65535) {
    e(224 | t >> 12), e(128 | t >> 6 & 63), e(128 | t & 63);
    return;
  } else if (t <= 1114111) {
    e(240 | t >> 18), e(128 | t >> 12 & 63), e(128 | t >> 6 & 63), e(128 | t & 63);
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`);
}
function Nc(t, e) {
  for (let n = 0; n < t.length; n += 1) {
    let r = t.charCodeAt(n);
    if (r > 55295 && r <= 56319) {
      const i = (r - 55296) * 1024 & 65535;
      r = (t.charCodeAt(n + 1) - 56320 & 65535 | i) + 65536, n += 1;
    }
    Dc(r, e);
  }
}
function Uc(t, e, n) {
  if (e.utf8seq === 0) {
    if (t <= 127) {
      n(t);
      return;
    }
    for (let r = 1; r < 6; r += 1)
      if ((t >> 7 - r & 1) === 0) {
        e.utf8seq = r;
        break;
      }
    if (e.utf8seq === 2)
      e.codepoint = t & 31;
    else if (e.utf8seq === 3)
      e.codepoint = t & 15;
    else if (e.utf8seq === 4)
      e.codepoint = t & 7;
    else
      throw new Error("Invalid UTF-8 sequence");
    e.utf8seq -= 1;
  } else if (e.utf8seq > 0) {
    if (t <= 127)
      throw new Error("Invalid UTF-8 sequence");
    e.codepoint = e.codepoint << 6 | t & 63, e.utf8seq -= 1, e.utf8seq === 0 && n(e.codepoint);
  }
}
function ot(t) {
  const e = [], n = { queue: 0, queuedBits: 0 }, r = (i) => {
    e.push(i);
  };
  for (let i = 0; i < t.length; i += 1)
    es(t.charCodeAt(i), n, r);
  return new Uint8Array(e);
}
function Fc(t) {
  const e = [];
  return Nc(t, (n) => e.push(n)), new Uint8Array(e);
}
function We(t) {
  const e = [], n = { queue: 0, queuedBits: 0 }, r = (i) => {
    e.push(i);
  };
  return t.forEach((i) => Or(i, n, r)), Or(null, n, r), e.join("");
}
function ts(t) {
  return Math.round(Date.now() / 1e3) + t;
}
function Bc() {
  return Symbol("auth-callback");
}
const J = () => typeof window < "u" && typeof document < "u", Fe = {
  tested: !1,
  writable: !1
}, ns = () => {
  if (!J())
    return !1;
  try {
    if (typeof globalThis.localStorage != "object")
      return !1;
  } catch {
    return !1;
  }
  if (Fe.tested)
    return Fe.writable;
  const t = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(t, t), globalThis.localStorage.removeItem(t), Fe.tested = !0, Fe.writable = !0;
  } catch {
    Fe.tested = !0, Fe.writable = !1;
  }
  return Fe.writable;
};
function Pr(t) {
  const e = {}, n = new URL(t);
  if (n.hash && n.hash[0] === "#")
    try {
      new URLSearchParams(n.hash.substring(1)).forEach((i, s) => {
        e[s] = i;
      });
    } catch {
    }
  return n.searchParams.forEach((r, i) => {
    e[i] = r;
  }), e;
}
const rs = (t) => t ? (...e) => t(...e) : (...e) => fetch(...e), zc = (t) => typeof t == "object" && t !== null && "status" in t && "ok" in t && "json" in t && typeof t.json == "function", Ie = async (t, e, n) => {
  await t.setItem(e, JSON.stringify(n));
}, Z = async (t, e) => {
  const n = await t.getItem(e);
  if (!n)
    return null;
  try {
    return JSON.parse(n);
  } catch {
    return null;
  }
}, se = async (t, e) => {
  await t.removeItem(e);
};
class fn {
  constructor() {
    this.promise = new fn.promiseConstructor((e, n) => {
      this.resolve = e, this.reject = n;
    });
  }
}
fn.promiseConstructor = Promise;
function Mt(t) {
  const e = t.split(".");
  if (e.length !== 3)
    throw new jt("Invalid JWT structure");
  for (let r = 0; r < e.length; r++)
    if (!Pc.test(e[r]))
      throw new jt("JWT not in base64url format");
  return {
    // using base64url lib
    header: JSON.parse(Ir(e[0])),
    payload: JSON.parse(Ir(e[1])),
    signature: ot(e[2]),
    raw: {
      header: e[0],
      payload: e[1]
    }
  };
}
async function Mc(t) {
  return await new Promise((e) => {
    setTimeout(() => e(null), t);
  });
}
function qc(t, e) {
  return new Promise((r, i) => {
    (async () => {
      for (let s = 0; s < 1 / 0; s++)
        try {
          const a = await t(s);
          if (!e(s, null, a)) {
            r(a);
            return;
          }
        } catch (a) {
          if (!e(s, a)) {
            i(a);
            return;
          }
        }
    })();
  });
}
function is(t) {
  return ("0" + t.toString(16)).substr(-2);
}
function Hc() {
  const e = new Uint32Array(56);
  if (typeof crypto > "u") {
    const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", r = n.length;
    let i = "";
    for (let s = 0; s < 56; s++)
      i += n.charAt(Math.floor(Math.random() * r));
    return i;
  }
  return crypto.getRandomValues(e), Array.from(e, is).join("");
}
async function Wc(t) {
  const n = new TextEncoder().encode(t), r = await crypto.subtle.digest("SHA-256", n), i = new Uint8Array(r);
  return Array.from(i).map((s) => String.fromCharCode(s)).join("");
}
async function Vc(t) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), t;
  const n = await Wc(t);
  return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
const Kc = /^[a-zA-Z0-9_-]{8,64}$/;
function Wt(t) {
  return typeof t == "string" && Kc.test(t) ? t : null;
}
function Gc() {
  if (typeof crypto < "u" && typeof crypto.getRandomValues == "function") {
    const e = new Uint8Array(16);
    return crypto.getRandomValues(e), Array.from(e, is).join("");
  }
  let t = "";
  for (let e = 0; e < 32; e++)
    t += Math.floor(Math.random() * 16).toString(16);
  return t;
}
const ct = (t, e) => `${t}-flow-${e}-code-verifier`, Lt = (t) => `${t}-flows-code-verifier`;
async function Yn(t, e) {
  const n = await Z(t, Lt(e));
  return Array.isArray(n) ? n.filter((r) => Wt(r) !== null) : [];
}
async function Jc(t, e, n, r, i) {
  await Ie(t, ct(e, n), r);
  const s = (await Yn(t, e)).filter((a) => a !== n);
  for (s.push(n); s.length > jc; ) {
    const a = s.shift();
    await se(t, ct(e, a)), i == null || i(a);
  }
  await Ie(t, Lt(e), s), await Ie(t, `${e}-code-verifier`, r);
}
async function Yc(t, e, n) {
  if (n) {
    const i = await Z(t, ct(e, n));
    return { verifier: typeof i == "string" ? i : null, flowId: n };
  }
  const r = await Z(t, `${e}-code-verifier`);
  return { verifier: typeof r == "string" ? r : null, flowId: null };
}
async function pe(t, e, n) {
  const r = `${e}-code-verifier`;
  if (!n) {
    await se(t, r);
    return;
  }
  const i = ct(e, n), s = await Z(t, i);
  await se(t, i);
  const a = await Yn(t, e), o = a.filter((l) => l !== n);
  o.length !== a.length && (o.length > 0 ? await Ie(t, Lt(e), o) : await se(t, Lt(e))), s != null && s === await Z(t, r) && await se(t, r);
}
async function Qc(t, e) {
  const n = await Yn(t, e);
  for (const r of n)
    await se(t, ct(e, r));
  await se(t, Lt(e)), await se(t, `${e}-code-verifier`);
}
function Xc(t, e) {
  const n = t.indexOf("#");
  let r = n === -1 ? t : t.slice(0, n);
  const i = n === -1 ? "" : t.slice(n), s = r.indexOf("?");
  if (s !== -1) {
    const o = r.slice(0, s), l = r.slice(s + 1).split("&").filter((u) => u !== "" && u !== He && !u.startsWith(`${He}=`));
    r = l.length > 0 ? `${o}?${l.join("&")}` : o;
  }
  const a = r.includes("?") ? "&" : "?";
  return `${r}${a}${He}=${encodeURIComponent(e)}${i}`;
}
async function Zc(t, e, n = !1, r) {
  const i = Hc();
  let s = i;
  n && (s += "/recovery");
  const a = Gc();
  await Jc(t, e, a, s, r);
  const o = await Vc(i);
  return [o, i === o ? "plain" : "s256", a];
}
const eh = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function th(t) {
  const e = t.headers.get(Nn);
  if (!e || !e.match(eh))
    return null;
  try {
    return /* @__PURE__ */ new Date(`${e}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function nh(t) {
  if (!t)
    throw new Error("Missing exp claim");
  const e = Math.floor(Date.now() / 1e3);
  if (t <= e)
    throw new Error("JWT has expired");
}
function rh(t) {
  switch (t) {
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: { name: "SHA-256" }
      };
    case "ES256":
      return {
        name: "ECDSA",
        namedCurve: "P-256",
        hash: { name: "SHA-256" }
      };
    default:
      throw new Error("Invalid alg claim");
  }
}
const ih = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function Ce(t) {
  if (!ih.test(t))
    throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
}
function yt(t) {
  if (!t.recoveryCodes)
    throw new Error("@supabase/auth-js: the MFA recovery codes API is experimental and disabled by default. Enable it by passing `auth: { experimental: { recoveryCodes: true } }` to createClient (or to the GoTrueClient constructor).");
}
function vn() {
  const t = {};
  return new Proxy(t, {
    get: (e, n) => {
      if (n === "__isUserNotAvailableProxy")
        return !0;
      if (typeof n == "symbol") {
        const r = n.toString();
        if (r === "Symbol(Symbol.toPrimitive)" || r === "Symbol(Symbol.toStringTag)" || r === "Symbol(util.inspect.custom)")
          return;
      }
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${n}" property of the session object is not supported. Please use getUser() instead.`);
    },
    set: (e, n) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${n}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    },
    deleteProperty: (e, n) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${n}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    }
  });
}
function sh(t, e) {
  return new Proxy(t, {
    get: (n, r, i) => {
      if (r === "__isInsecureUserWarningProxy")
        return !0;
      if (typeof r == "symbol") {
        const s = r.toString();
        if (s === "Symbol(Symbol.toPrimitive)" || s === "Symbol(Symbol.toStringTag)" || s === "Symbol(util.inspect.custom)" || s === "Symbol(nodejs.util.inspect.custom)")
          return Reflect.get(n, r, i);
      }
      return !e.value && typeof r == "string" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), e.value = !0), Reflect.get(n, r, i);
    }
  });
}
function jr(t) {
  return JSON.parse(JSON.stringify(t));
}
const ze = (t) => {
  if (typeof t == "object" && t !== null) {
    const e = t;
    if (typeof e.msg == "string")
      return e.msg;
    if (typeof e.message == "string")
      return e.message;
    if (typeof e.error_description == "string")
      return e.error_description;
    if (typeof e.error == "string")
      return e.error;
  }
  return JSON.stringify(t);
}, Lr = [
  500,
  501,
  502,
  503,
  504,
  520,
  521,
  522,
  523,
  524,
  525,
  526,
  527,
  528,
  529,
  530
];
async function $r(t) {
  var e;
  if (!zc(t))
    throw new xt(ze(t), 0);
  let n;
  try {
    n = await t.json();
  } catch (s) {
    throw Lr.includes(t.status) ? new xt(t.statusText || `HTTP ${t.status}`, t.status) : new ue(ze(s), s);
  }
  if (Lr.includes(t.status))
    throw new xt(ze(n), t.status);
  let r;
  const i = th(t);
  if (i && i.getTime() >= Yi["2024-01-01"].timestamp && typeof n == "object" && n && typeof n.code == "string" ? r = n.code : typeof n == "object" && n && typeof n.error_code == "string" && (r = n.error_code), r) {
    if (r === "weak_password")
      throw new Mn(ze(n), t.status, ((e = n.weak_password) === null || e === void 0 ? void 0 : e.reasons) || []);
    if (r === "session_not_found")
      throw new V();
  } else if (typeof n == "object" && n && typeof n.weak_password == "object" && n.weak_password && Array.isArray(n.weak_password.reasons) && n.weak_password.reasons.length && n.weak_password.reasons.reduce((s, a) => s && typeof a == "string", !0))
    throw new Mn(ze(n), t.status, n.weak_password.reasons);
  throw new Qi(ze(n), t.status || 500, r);
}
const ah = (t, e, n, r) => {
  const i = { method: t, headers: (e == null ? void 0 : e.headers) || {} };
  return t === "GET" ? i : (i.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, e == null ? void 0 : e.headers), i.body = JSON.stringify(r), Object.assign(Object.assign({}, i), n));
};
async function C(t, e, n, r) {
  var i;
  const s = Object.assign({}, r == null ? void 0 : r.headers);
  s[Nn] || (s[Nn] = Yi["2024-01-01"].name), r != null && r.jwt && (s.Authorization = `Bearer ${r.jwt}`);
  const a = (i = r == null ? void 0 : r.query) !== null && i !== void 0 ? i : {};
  r != null && r.redirectTo && (a.redirect_to = r.redirectTo);
  const o = Object.keys(a).length ? "?" + new URLSearchParams(a).toString() : "", l = await oh(t, e, n + o, {
    headers: s,
    noResolveJson: r == null ? void 0 : r.noResolveJson
  }, {}, r == null ? void 0 : r.body);
  return r != null && r.xform ? r == null ? void 0 : r.xform(l) : { data: Object.assign({}, l), error: null };
}
async function oh(t, e, n, r, i, s) {
  const a = ah(e, r, i, s);
  let o;
  try {
    o = await t(n, Object.assign({}, a));
  } catch (l) {
    throw new xt(ze(l), 0);
  }
  if (o.ok || await $r(o), r != null && r.noResolveJson)
    return o;
  try {
    return await o.json();
  } catch (l) {
    await $r(l);
  }
}
function le(t) {
  var e;
  let n = null;
  ch(t) && (n = Object.assign({}, t), t.expires_at || (n.expires_at = ts(t.expires_in)));
  const r = (e = t.user) !== null && e !== void 0 ? e : typeof (t == null ? void 0 : t.id) == "string" ? t : null;
  return { data: { session: n, user: r }, error: null };
}
function Dr(t) {
  const e = le(t);
  return !e.error && t.weak_password && typeof t.weak_password == "object" && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.message && typeof t.weak_password.message == "string" && t.weak_password.reasons.reduce((n, r) => n && typeof r == "string", !0) && (e.data.weak_password = t.weak_password), e;
}
function De(t) {
  var e;
  return { data: { user: (e = t.user) !== null && e !== void 0 ? e : t }, error: null };
}
function lh(t) {
  return { data: t, error: null };
}
function uh(t) {
  const { action_link: e, email_otp: n, hashed_token: r, redirect_to: i, verification_type: s } = t, a = un(t, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), o = {
    action_link: e,
    email_otp: n,
    hashed_token: r,
    redirect_to: i,
    verification_type: s
  }, l = Object.assign({}, a);
  return {
    data: {
      properties: o,
      user: l
    },
    error: null
  };
}
function Nr(t) {
  return t;
}
function ch(t) {
  return !!t.access_token && !!t.refresh_token && !!t.expires_in;
}
const Vt = ["global", "local", "others"];
class ss {
  /**
   * Creates an admin API client that can be used to manage users and OAuth clients.
   *
   * @example Using supabase-js (recommended)
   * ```ts
   * import { createClient } from '@supabase/supabase-js'
   *
   * const supabase = createClient('https://xyzcompany.supabase.co', 'your-secret-key')
   * const { data, error } = await supabase.auth.admin.listUsers()
   * ```
   *
   * @example Standalone import for bundle-sensitive environments
   * ```ts
   * import { GoTrueAdminApi } from '@supabase/auth-js'
   *
   * const admin = new GoTrueAdminApi({
   *   url: 'https://xyzcompany.supabase.co/auth/v1',
   *   headers: { Authorization: `Bearer ${process.env.SUPABASE_SECRET_KEY}` },
   * })
   * ```
   */
  constructor({ url: e = "", headers: n = {}, fetch: r, experimental: i }) {
    this.url = e, this.headers = n, this.fetch = rs(r), this.experimental = i ?? {}, this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    }, this.oauth = {
      listClients: this._listOAuthClients.bind(this),
      createClient: this._createOAuthClient.bind(this),
      getClient: this._getOAuthClient.bind(this),
      updateClient: this._updateOAuthClient.bind(this),
      deleteClient: this._deleteOAuthClient.bind(this),
      regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this)
    }, this.customProviders = {
      listProviders: this._listCustomProviders.bind(this),
      createProvider: this._createCustomProvider.bind(this),
      getProvider: this._getCustomProvider.bind(this),
      updateProvider: this._updateCustomProvider.bind(this),
      deleteProvider: this._deleteCustomProvider.bind(this)
    }, this.passkey = {
      listPasskeys: this._adminListPasskeys.bind(this),
      deletePasskey: this._adminDeletePasskey.bind(this)
    };
  }
  /**
   * Removes a logged-in session.
   * @param jwt A valid, logged-in JWT.
   * @param scope The logout sope.
   *
   * @category Auth
   * @subcategory Auth Admin
   */
  async signOut(e, n = Vt[0]) {
    if (Vt.indexOf(n) < 0)
      throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Vt.join(", ")}`);
    try {
      return await C(this.fetch, "POST", `${this.url}/logout?scope=${n}`, {
        headers: this.headers,
        jwt: e,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (r) {
      if (T(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Sends an invite link to an email address.
   * @param email The email address of the user.
   * @param options Additional options to be included when inviting.
   *
   * @category Auth
   * @subcategory Auth Admin
   *
   * @remarks
   * - Sends an invite link to the user's email address.
   * - The `inviteUserByEmail()` method is typically used by administrators to invite users to join the application.
   * - Note that PKCE is not supported when using `inviteUserByEmail`. This is because the browser initiating the invite is often different from the browser accepting the invite which makes it difficult to provide the security guarantees required of the PKCE flow.
   *
   * @example Invite a user
   * ```js
   * const { data, error } = await supabase.auth.admin.inviteUserByEmail('email@example.com')
   * ```
   *
   * @exampleResponse Invite a user
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "invited_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "confirmation_sent_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {},
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     }
   *   },
   *   "error": null
   * }
   * ```
   */
  async inviteUserByEmail(e, n = {}) {
    try {
      return await C(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: e, data: n.data },
        headers: this.headers,
        redirectTo: n.redirectTo,
        xform: De
      });
    } catch (r) {
      if (T(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Generates email links and OTPs to be sent via a custom email provider.
   * @param params The parameters for generating the link, including the link `type`, the user's `email`, and type-specific options such as `password`, `data`, and `redirectTo`.
   *
   * @category Auth
   * @subcategory Auth Admin
   *
   * @remarks
   * - The following types can be passed into `generateLink()`: `signup`, `magiclink`, `invite`, `recovery`, `email_change_current`, `email_change_new`, `phone_change`.
   * - `generateLink()` only generates the email link for `email_change_email` if the **Secure email change** is enabled in your project's [email auth provider settings](/dashboard/project/_/auth/providers).
   * - `generateLink()` handles the creation of the user for `signup`, `invite` and `magiclink`.
   *
   * @example Generate a signup link
   * ```js
   * const { data, error } = await supabase.auth.admin.generateLink({
   *   type: 'signup',
   *   email: 'email@example.com',
   *   password: 'secret'
   * })
   * ```
   *
   * @exampleResponse Generate a signup link
   * ```json
   * {
   *   "data": {
   *     "properties": {
   *       "action_link": "<LINK_TO_SEND_TO_USER>",
   *       "email_otp": "999999",
   *       "hashed_token": "<HASHED_TOKEN",
   *       "redirect_to": "<REDIRECT_URL>",
   *       "verification_type": "signup"
   *     },
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "email@example.com",
   *       "phone": "",
   *       "confirmation_sent_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {},
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "email@example.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "email@example.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Generate an invite link
   * ```js
   * const { data, error } = await supabase.auth.admin.generateLink({
   *   type: 'invite',
   *   email: 'email@example.com'
   * })
   * ```
   *
   * @example Generate a magic link
   * ```js
   * const { data, error } = await supabase.auth.admin.generateLink({
   *   type: 'magiclink',
   *   email: 'email@example.com'
   * })
   * ```
   *
   * @example Generate a recovery link
   * ```js
   * const { data, error } = await supabase.auth.admin.generateLink({
   *   type: 'recovery',
   *   email: 'email@example.com'
   * })
   * ```
   *
   * @example Generate links to change current email address
   * ```js
   * // generate an email change link to be sent to the current email address
   * const { data, error } = await supabase.auth.admin.generateLink({
   *   type: 'email_change_current',
   *   email: 'current.email@example.com',
   *   newEmail: 'new.email@example.com'
   * })
   *
   * // generate an email change link to be sent to the new email address
   * const { data, error } = await supabase.auth.admin.generateLink({
   *   type: 'email_change_new',
   *   email: 'current.email@example.com',
   *   newEmail: 'new.email@example.com'
   * })
   * ```
   */
  async generateLink(e) {
    try {
      const { options: n } = e, r = un(e, ["options"]), i = Object.assign(Object.assign({}, r), n);
      return "newEmail" in r && (i.new_email = r == null ? void 0 : r.newEmail, delete i.newEmail), await C(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: i,
        headers: this.headers,
        xform: uh,
        redirectTo: n == null ? void 0 : n.redirectTo
      });
    } catch (n) {
      if (T(n))
        return {
          data: {
            properties: null,
            user: null
          },
          error: n
        };
      throw n;
    }
  }
  // User Admin API
  /**
   * Creates a new user.
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   *
   * @category Auth
   * @subcategory Auth Admin
   *
   * @remarks
   * - To confirm the user's email address or phone number, set `email_confirm` or `phone_confirm` to true. Both arguments default to false.
   * - `createUser()` will not send a confirmation email to the user. You can use [`inviteUserByEmail()`](/docs/reference/javascript/auth-admin-inviteuserbyemail) if you want to send them an email invite instead.
   * - If you are sure that the created user's email or phone number is legitimate and verified, you can set the `email_confirm` or `phone_confirm` param to `true`.
   *
   * @example With custom user metadata
   * ```js
   * const { data, error } = await supabase.auth.admin.createUser({
   *   email: 'user@email.com',
   *   password: 'password',
   *   user_metadata: { name: 'Yoda' }
   * })
   * ```
   *
   * @exampleResponse With custom user metadata
   * ```json
   * {
   *   data: {
   *     user: {
   *       id: '1',
   *       aud: 'authenticated',
   *       role: 'authenticated',
   *       email: 'example@email.com',
   *       email_confirmed_at: '2024-01-01T00:00:00Z',
   *       phone: '',
   *       confirmation_sent_at: '2024-01-01T00:00:00Z',
   *       confirmed_at: '2024-01-01T00:00:00Z',
   *       last_sign_in_at: '2024-01-01T00:00:00Z',
   *       app_metadata: {},
   *       user_metadata: {},
   *       identities: [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "1",
   *           "user_id": "1",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": true,
   *             "phone_verified": false,
   *             "sub": "1"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "email@example.com"
   *         },
   *       ],
   *       created_at: '2024-01-01T00:00:00Z',
   *       updated_at: '2024-01-01T00:00:00Z',
   *       is_anonymous: false,
   *     }
   *   }
   *   error: null
   * }
   * ```
   *
   * @example Auto-confirm the user's email
   * ```js
   * const { data, error } = await supabase.auth.admin.createUser({
   *   email: 'user@email.com',
   *   email_confirm: true
   * })
   * ```
   *
   * @example Auto-confirm the user's phone number
   * ```js
   * const { data, error } = await supabase.auth.admin.createUser({
   *   phone: '1234567890',
   *   phone_confirm: true
   * })
   * ```
   */
  async createUser(e) {
    try {
      return await C(this.fetch, "POST", `${this.url}/admin/users`, {
        body: e,
        headers: this.headers,
        xform: De
      });
    } catch (n) {
      if (T(n))
        return { data: { user: null }, error: n };
      throw n;
    }
  }
  /**
   * Get a list of users.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
   *
   * @category Auth
   * @subcategory Auth Admin
   *
   * @remarks
   * - Defaults to return 50 users per page.
   *
   * @example Get a page of users
   * ```js
   * const { data: { users }, error } = await supabase.auth.admin.listUsers()
   * ```
   *
   * @example Paginated list of users
   * ```js
   * const { data: { users }, error } = await supabase.auth.admin.listUsers({
   *   page: 1,
   *   perPage: 1000
   * })
   * ```
   */
  async listUsers(e) {
    var n, r, i, s, a, o, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 }, h = await C(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (r = (n = e == null ? void 0 : e.page) === null || n === void 0 ? void 0 : n.toString()) !== null && r !== void 0 ? r : "",
          per_page: (s = (i = e == null ? void 0 : e.perPage) === null || i === void 0 ? void 0 : i.toString()) !== null && s !== void 0 ? s : ""
        },
        xform: Nr
      });
      if (h.error)
        throw h.error;
      const c = await h.json(), f = (a = h.headers.get("x-total-count")) !== null && a !== void 0 ? a : 0, d = (l = (o = h.headers.get("link")) === null || o === void 0 ? void 0 : o.split(",")) !== null && l !== void 0 ? l : [];
      return d.length > 0 && (d.forEach((p) => {
        const y = parseInt(p.split(";")[0].split("=")[1].substring(0, 1)), v = JSON.parse(p.split(";")[1].split("=")[1]);
        u[`${v}Page`] = y;
      }), u.total = parseInt(f)), { data: Object.assign(Object.assign({}, c), u), error: null };
    } catch (u) {
      if (T(u))
        return { data: { users: [] }, error: u };
      throw u;
    }
  }
  /**
   * Get user by id.
   *
   * @param uid The user's unique identifier
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   *
   * @category Auth
   * @subcategory Auth Admin
   *
   * @remarks
   * - Fetches the user object from the database based on the user's id.
   * - The `getUserById()` method requires the user's id which maps to the `auth.users.id` column.
   *
   * @example Fetch the user object using the access_token jwt
   * ```js
   * const { data, error } = await supabase.auth.admin.getUserById(1)
   * ```
   *
   * @exampleResponse Fetch the user object using the access_token jwt
   * ```json
   * {
   *   data: {
   *     user: {
   *       id: '1',
   *       aud: 'authenticated',
   *       role: 'authenticated',
   *       email: 'example@email.com',
   *       email_confirmed_at: '2024-01-01T00:00:00Z',
   *       phone: '',
   *       confirmation_sent_at: '2024-01-01T00:00:00Z',
   *       confirmed_at: '2024-01-01T00:00:00Z',
   *       last_sign_in_at: '2024-01-01T00:00:00Z',
   *       app_metadata: {},
   *       user_metadata: {},
   *       identities: [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "1",
   *           "user_id": "1",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": true,
   *             "phone_verified": false,
   *             "sub": "1"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "email@example.com"
   *         },
   *       ],
   *       created_at: '2024-01-01T00:00:00Z',
   *       updated_at: '2024-01-01T00:00:00Z',
   *       is_anonymous: false,
   *     }
   *   }
   *   error: null
   * }
   * ```
   */
  async getUserById(e) {
    Ce(e);
    try {
      return await C(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        xform: De
      });
    } catch (n) {
      if (T(n))
        return { data: { user: null }, error: n };
      throw n;
    }
  }
  /**
   * Updates the user data. Changes are applied directly without confirmation flows.
   *
   * @param uid The user's unique identifier
   * @param attributes The data you want to update.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   *
   * @remarks
   * **Important:** This is a server-side operation and does **not** trigger client-side
   * `onAuthStateChange` listeners. The admin API has no connection to client state.
   *
   * To sync changes to the client after calling this method:
   * 1. On the client, call `supabase.auth.refreshSession()` to fetch the updated user data
   * 2. This will trigger the `TOKEN_REFRESHED` event and notify all listeners
   *
   * @example
   * ```typescript
   * // Server-side (Edge Function)
   * const { data, error } = await supabase.auth.admin.updateUserById(
   *   userId,
   *   { user_metadata: { preferences: { theme: 'dark' } } }
   * )
   *
   * // Client-side (to sync the changes)
   * const { data, error } = await supabase.auth.refreshSession()
   * // onAuthStateChange listeners will now be notified with updated user
   * ```
   *
   * @see {@link GoTrueClient.refreshSession} for syncing admin changes to the client
   * @see {@link GoTrueClient.updateUser} for client-side user updates (triggers listeners automatically)
   *
   * @category Auth
   * @subcategory Auth Admin
   *
   * @example Updates a user's email
   * ```js
   * const { data: user, error } = await supabase.auth.admin.updateUserById(
   *   '11111111-1111-1111-1111-111111111111',
   *   { email: 'new@email.com' }
   * )
   * ```
   *
   * @exampleResponse Updates a user's email
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "new@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "confirmed_at": "2024-01-01T00:00:00Z",
   *       "recovery_sent_at": "2024-01-01T00:00:00Z",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {
   *         "email": "example@email.com",
   *         "email_verified": false,
   *         "phone_verified": false,
   *         "sub": "11111111-1111-1111-1111-111111111111"
   *       },
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Updates a user's password
   * ```js
   * const { data: user, error } = await supabase.auth.admin.updateUserById(
   *   '6aa5d0d4-2a9f-4483-b6c8-0cf4c6c98ac4',
   *   { password: 'new_password' }
   * )
   * ```
   *
   * @example Updates a user's metadata
   * ```js
   * const { data: user, error } = await supabase.auth.admin.updateUserById(
   *   '6aa5d0d4-2a9f-4483-b6c8-0cf4c6c98ac4',
   *   { user_metadata: { hello: 'world' } }
   * )
   * ```
   *
   * @example Updates a user's app_metadata
   * ```js
   * const { data: user, error } = await supabase.auth.admin.updateUserById(
   *   '6aa5d0d4-2a9f-4483-b6c8-0cf4c6c98ac4',
   *   { app_metadata: { plan: 'trial' } }
   * )
   * ```
   *
   * @example Confirms a user's email address
   * ```js
   * const { data: user, error } = await supabase.auth.admin.updateUserById(
   *   '6aa5d0d4-2a9f-4483-b6c8-0cf4c6c98ac4',
   *   { email_confirm: true }
   * )
   * ```
   *
   * @example Confirms a user's phone number
   * ```js
   * const { data: user, error } = await supabase.auth.admin.updateUserById(
   *   '6aa5d0d4-2a9f-4483-b6c8-0cf4c6c98ac4',
   *   { phone_confirm: true }
   * )
   * ```
   *
   * @example Ban a user for 100 years
   * ```js
   * const { data: user, error } = await supabase.auth.admin.updateUserById(
   *   '6aa5d0d4-2a9f-4483-b6c8-0cf4c6c98ac4',
   *   { ban_duration: '876000h' }
   * )
   * ```
   */
  async updateUserById(e, n) {
    Ce(e);
    try {
      return await C(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
        body: n,
        headers: this.headers,
        xform: De
      });
    } catch (r) {
      if (T(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Delete a user. Requires a `service_role` key.
   *
   * @param id The user id you want to remove.
   * @param shouldSoftDelete If true, then the user will be soft-deleted from the auth schema. Soft deletion allows user identification from the hashed user ID but is not reversible.
   * Defaults to false for backward compatibility.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   *
   * @category Auth
   * @subcategory Auth Admin
   *
   * @remarks
   * - The `deleteUser()` method requires the user's ID, which maps to the `auth.users.id` column.
   *
   * @example Removes a user
   * ```js
   * const { data, error } = await supabase.auth.admin.deleteUser(
   *   '715ed5db-f090-4b8c-a067-640ecee36aa0'
   * )
   * ```
   *
   * @exampleResponse Removes a user
   * ```json
   * {
   *   "data": {
   *     "user": {}
   *   },
   *   "error": null
   * }
   * ```
   */
  async deleteUser(e, n = !1) {
    Ce(e);
    try {
      return await C(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        body: {
          should_soft_delete: n
        },
        xform: De
      });
    } catch (r) {
      if (T(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  async _listFactors(e) {
    Ce(e.userId);
    try {
      const { data: n, error: r } = await C(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
        headers: this.headers,
        xform: (i) => ({ data: { factors: i }, error: null })
      });
      return { data: n, error: r };
    } catch (n) {
      if (T(n))
        return { data: null, error: n };
      throw n;
    }
  }
  async _deleteFactor(e) {
    Ce(e.userId), Ce(e.id);
    try {
      return { data: await C(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
        headers: this.headers
      }), error: null };
    } catch (n) {
      if (T(n))
        return { data: null, error: n };
      throw n;
    }
  }
  /**
   * Lists all OAuth clients with optional pagination.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _listOAuthClients(e) {
    var n, r, i, s, a, o, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 }, h = await C(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (r = (n = e == null ? void 0 : e.page) === null || n === void 0 ? void 0 : n.toString()) !== null && r !== void 0 ? r : "",
          per_page: (s = (i = e == null ? void 0 : e.perPage) === null || i === void 0 ? void 0 : i.toString()) !== null && s !== void 0 ? s : ""
        },
        xform: Nr
      });
      if (h.error)
        throw h.error;
      const c = await h.json(), f = (a = h.headers.get("x-total-count")) !== null && a !== void 0 ? a : 0, d = (l = (o = h.headers.get("link")) === null || o === void 0 ? void 0 : o.split(",")) !== null && l !== void 0 ? l : [];
      return d.length > 0 && (d.forEach((p) => {
        const y = parseInt(p.split(";")[0].split("=")[1].substring(0, 1)), v = JSON.parse(p.split(";")[1].split("=")[1]);
        u[`${v}Page`] = y;
      }), u.total = parseInt(f)), { data: Object.assign(Object.assign({}, c), u), error: null };
    } catch (u) {
      if (T(u))
        return { data: { clients: [] }, error: u };
      throw u;
    }
  }
  /**
   * Creates a new OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _createOAuthClient(e) {
    try {
      return await C(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: e,
        headers: this.headers,
        xform: (n) => ({ data: n, error: null })
      });
    } catch (n) {
      if (T(n))
        return { data: null, error: n };
      throw n;
    }
  }
  /**
   * Gets details of a specific OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _getOAuthClient(e) {
    try {
      return await C(this.fetch, "GET", `${this.url}/admin/oauth/clients/${e}`, {
        headers: this.headers,
        xform: (n) => ({ data: n, error: null })
      });
    } catch (n) {
      if (T(n))
        return { data: null, error: n };
      throw n;
    }
  }
  /**
   * Updates an existing OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _updateOAuthClient(e, n) {
    try {
      return await C(this.fetch, "PUT", `${this.url}/admin/oauth/clients/${e}`, {
        body: n,
        headers: this.headers,
        xform: (r) => ({ data: r, error: null })
      });
    } catch (r) {
      if (T(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Deletes an OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _deleteOAuthClient(e) {
    try {
      return await C(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${e}`, {
        headers: this.headers,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (n) {
      if (T(n))
        return { data: null, error: n };
      throw n;
    }
  }
  /**
   * Regenerates the secret for an OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _regenerateOAuthClientSecret(e) {
    try {
      return await C(this.fetch, "POST", `${this.url}/admin/oauth/clients/${e}/regenerate_secret`, {
        headers: this.headers,
        xform: (n) => ({ data: n, error: null })
      });
    } catch (n) {
      if (T(n))
        return { data: null, error: n };
      throw n;
    }
  }
  /**
   * Lists all custom providers with optional type filter.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _listCustomProviders(e) {
    try {
      const n = {};
      return e != null && e.type && (n.type = e.type), await C(this.fetch, "GET", `${this.url}/admin/custom-providers`, {
        headers: this.headers,
        query: n,
        xform: (r) => {
          var i;
          return { data: { providers: (i = r == null ? void 0 : r.providers) !== null && i !== void 0 ? i : [] }, error: null };
        }
      });
    } catch (n) {
      if (T(n))
        return { data: { providers: [] }, error: n };
      throw n;
    }
  }
  /**
   * Creates a new custom OIDC/OAuth provider.
   *
   * For OIDC providers, the server fetches and validates the OpenID Connect discovery document
   * from the issuer's well-known endpoint (or the provided `discovery_url`) at creation time.
   * This may return a validation error (`error_code: "validation_failed"`) if the discovery
   * document is unreachable, not valid JSON, missing required fields, or if the issuer
   * in the document does not match the expected issuer.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _createCustomProvider(e) {
    try {
      return await C(this.fetch, "POST", `${this.url}/admin/custom-providers`, {
        body: e,
        headers: this.headers,
        xform: (n) => ({ data: n, error: null })
      });
    } catch (n) {
      if (T(n))
        return { data: null, error: n };
      throw n;
    }
  }
  /**
   * Gets details of a specific custom provider by identifier.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _getCustomProvider(e) {
    try {
      return await C(this.fetch, "GET", `${this.url}/admin/custom-providers/${e}`, {
        headers: this.headers,
        xform: (n) => ({ data: n, error: null })
      });
    } catch (n) {
      if (T(n))
        return { data: null, error: n };
      throw n;
    }
  }
  /**
   * Updates an existing custom provider.
   *
   * When `issuer` or `discovery_url` is changed on an OIDC provider, the server re-fetches and
   * validates the discovery document before persisting. This may return a validation error
   * (`error_code: "validation_failed"`) if the discovery document is unreachable, invalid, or
   * the issuer does not match.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _updateCustomProvider(e, n) {
    try {
      return await C(this.fetch, "PUT", `${this.url}/admin/custom-providers/${e}`, {
        body: n,
        headers: this.headers,
        xform: (r) => ({ data: r, error: null })
      });
    } catch (r) {
      if (T(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Deletes a custom provider.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _deleteCustomProvider(e) {
    try {
      return await C(this.fetch, "DELETE", `${this.url}/admin/custom-providers/${e}`, {
        headers: this.headers,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (n) {
      if (T(n))
        return { data: null, error: n };
      throw n;
    }
  }
  /**
   * Lists all passkeys for a user.
   *
   * This function should only be called on a server. Never expose your secret key in the browser.
   */
  async _adminListPasskeys(e) {
    Ce(e.userId);
    try {
      return await C(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/passkeys`, { headers: this.headers, xform: (n) => ({ data: n, error: null }) });
    } catch (n) {
      if (T(n))
        return { data: null, error: n };
      throw n;
    }
  }
  /**
   * Deletes a user's passkey.
   *
   * This function should only be called on a server. Never expose your secret key in the browser.
   */
  async _adminDeletePasskey(e) {
    Ce(e.userId), Ce(e.passkeyId);
    try {
      return await C(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`, { headers: this.headers, noResolveJson: !0 }), { data: null, error: null };
    } catch (n) {
      if (T(n))
        return { data: null, error: n };
      throw n;
    }
  }
}
function Ur(t = {}) {
  return {
    getItem: (e) => t[e] || null,
    setItem: (e, n) => {
      t[e] = n;
    },
    removeItem: (e) => {
      delete t[e];
    }
  };
}
globalThis && ns() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");
class hh extends Error {
  constructor(e) {
    super(e), this.isAcquireTimeout = !0;
  }
}
function dh() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function() {
          return this;
        },
        configurable: !0
      }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
function as(t) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(t))
    throw new Error(`@supabase/auth-js: Address "${t}" is invalid.`);
  return t.toLowerCase();
}
function fh(t) {
  return parseInt(t, 16);
}
function ph(t) {
  const e = new TextEncoder().encode(t);
  return "0x" + Array.from(e, (r) => r.toString(16).padStart(2, "0")).join("");
}
function gh(t) {
  var e;
  const { chainId: n, domain: r, expirationTime: i, issuedAt: s = /* @__PURE__ */ new Date(), nonce: a, notBefore: o, requestId: l, resources: u, scheme: h, uri: c, version: f } = t;
  {
    if (!Number.isInteger(n))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${n}`);
    if (!r)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');
    if (a && a.length < 8)
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);
    if (!c)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');
    if (f !== "1")
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${f}`);
    if (!((e = t.statement) === null || e === void 0) && e.includes(`
`))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${t.statement}`);
  }
  const d = as(t.address), p = h ? `${h}://${r}` : r, y = t.statement ? `${t.statement}
` : "", v = `${p} wants you to sign in with your Ethereum account:
${d}

${y}`;
  let w = `URI: ${c}
Version: ${f}
Chain ID: ${n}${a ? `
Nonce: ${a}` : ""}
Issued At: ${s.toISOString()}`;
  if (i && (w += `
Expiration Time: ${i.toISOString()}`), o && (w += `
Not Before: ${o.toISOString()}`), l && (w += `
Request ID: ${l}`), u) {
    let k = `
Resources:`;
    for (const _ of u) {
      if (!_ || typeof _ != "string")
        throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${_}`);
      k += `
- ${_}`;
    }
    w += k;
  }
  return `${v}
${w}`;
}
class W extends Error {
  constructor({ message: e, code: n, cause: r, name: i }) {
    var s;
    super(e, { cause: r }), this.__isWebAuthnError = !0, this.name = (s = i ?? (r instanceof Error ? r.name : void 0)) !== null && s !== void 0 ? s : "Unknown Error", this.code = n;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code
    };
  }
}
class nn extends W {
  constructor(e, n) {
    super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: n,
      message: e
    }), this.name = "WebAuthnUnknownError", this.originalError = n;
  }
}
function mh({ error: t, options: e }) {
  var n, r, i;
  const { publicKey: s } = e;
  if (!s)
    throw Error("options was missing required publicKey property");
  if (t.name === "AbortError") {
    if (e.signal instanceof AbortSignal)
      return new W({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: t
      });
  } else if (t.name === "ConstraintError") {
    if (((n = s.authenticatorSelection) === null || n === void 0 ? void 0 : n.requireResidentKey) === !0)
      return new W({
        message: "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: t
      });
    if (
      // @ts-ignore: `mediation` doesn't yet exist on CredentialCreationOptions but it's possible as of Sept 2024
      e.mediation === "conditional" && ((r = s.authenticatorSelection) === null || r === void 0 ? void 0 : r.userVerification) === "required"
    )
      return new W({
        message: "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: t
      });
    if (((i = s.authenticatorSelection) === null || i === void 0 ? void 0 : i.userVerification) === "required")
      return new W({
        message: "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: t
      });
  } else {
    if (t.name === "InvalidStateError")
      return new W({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: t
      });
    if (t.name === "NotAllowedError")
      return new W({
        message: t.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: t
      });
    if (t.name === "NotSupportedError")
      return s.pubKeyCredParams.filter((o) => o.type === "public-key").length === 0 ? new W({
        message: 'No entry in pubKeyCredParams was of type "public-key"',
        code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
        cause: t
      }) : new W({
        message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
        code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
        cause: t
      });
    if (t.name === "SecurityError") {
      const a = window.location.hostname;
      if (os(a)) {
        if (s.rp.id !== a)
          return new W({
            message: `The RP ID "${s.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: t
          });
      } else return new W({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: t
      });
    } else if (t.name === "TypeError") {
      if (s.user.id.byteLength < 1 || s.user.id.byteLength > 64)
        return new W({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: t
        });
    } else if (t.name === "UnknownError")
      return new W({
        message: "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: t
      });
  }
  return new W({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: t
  });
}
function yh({ error: t, options: e }) {
  const { publicKey: n } = e;
  if (!n)
    throw Error("options was missing required publicKey property");
  if (t.name === "AbortError") {
    if (e.signal instanceof AbortSignal)
      return new W({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: t
      });
  } else {
    if (t.name === "NotAllowedError")
      return new W({
        message: t.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: t
      });
    if (t.name === "SecurityError") {
      const r = window.location.hostname;
      if (os(r)) {
        if (n.rpId !== r)
          return new W({
            message: `The RP ID "${n.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: t
          });
      } else return new W({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: t
      });
    } else if (t.name === "UnknownError")
      return new W({
        message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: t
      });
  }
  return new W({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: t
  });
}
class wh {
  /**
   * Create an abort signal for a new WebAuthn operation.
   * Automatically cancels any existing operation.
   *
   * @returns {AbortSignal} Signal to pass to navigator.credentials.create() or .get()
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal MDN - AbortSignal}
   */
  createNewAbortSignal() {
    if (this.controller) {
      const n = new Error("Cancelling existing WebAuthn API call for new one");
      n.name = "AbortError", this.controller.abort(n);
    }
    const e = new AbortController();
    return this.controller = e, e.signal;
  }
  /**
   * Manually cancel the current WebAuthn operation.
   * Useful for cleaning up when user cancels or navigates away.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort MDN - AbortController.abort}
   */
  cancelCeremony() {
    if (this.controller) {
      const e = new Error("Manually cancelling existing WebAuthn API call");
      e.name = "AbortError", this.controller.abort(e), this.controller = void 0;
    }
  }
}
const qn = new wh();
function Fr(t) {
  if (!t)
    throw new Error("Credential creation options are required");
  if (typeof PublicKeyCredential < "u" && "parseCreationOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function")
    return PublicKeyCredential.parseCreationOptionsFromJSON(
      /** we assert the options here as typescript still doesn't know about future webauthn types */
      t
    );
  const { challenge: e, user: n, excludeCredentials: r } = t, i = un(
    t,
    ["challenge", "user", "excludeCredentials"]
  ), s = ot(e).buffer, a = Object.assign(Object.assign({}, n), { id: ot(n.id).buffer }), o = Object.assign(Object.assign({}, i), {
    challenge: s,
    user: a
  });
  if (r && r.length > 0) {
    o.excludeCredentials = new Array(r.length);
    for (let l = 0; l < r.length; l++) {
      const u = r[l];
      o.excludeCredentials[l] = Object.assign(Object.assign({}, u), {
        id: ot(u.id).buffer,
        type: u.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: u.transports
      });
    }
  }
  return o;
}
function Br(t) {
  if (!t)
    throw new Error("Credential request options are required");
  if (typeof PublicKeyCredential < "u" && "parseRequestOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function")
    return PublicKeyCredential.parseRequestOptionsFromJSON(t);
  const { challenge: e, allowCredentials: n } = t, r = un(
    t,
    ["challenge", "allowCredentials"]
  ), i = ot(e).buffer, s = Object.assign(Object.assign({}, r), { challenge: i });
  if (n && n.length > 0) {
    s.allowCredentials = new Array(n.length);
    for (let a = 0; a < n.length; a++) {
      const o = n[a];
      s.allowCredentials[a] = Object.assign(Object.assign({}, o), {
        id: ot(o.id).buffer,
        type: o.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: o.transports
      });
    }
  }
  return s;
}
function zr(t) {
  var e;
  if ("toJSON" in t && typeof t.toJSON == "function")
    return t.toJSON();
  const n = t;
  return {
    id: t.id,
    rawId: t.id,
    response: {
      attestationObject: We(new Uint8Array(t.response.attestationObject)),
      clientDataJSON: We(new Uint8Array(t.response.clientDataJSON))
    },
    type: "public-key",
    clientExtensionResults: t.getClientExtensionResults(),
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (e = n.authenticatorAttachment) !== null && e !== void 0 ? e : void 0
  };
}
function Mr(t) {
  var e;
  if ("toJSON" in t && typeof t.toJSON == "function")
    return t.toJSON();
  const n = t, r = t.getClientExtensionResults(), i = t.response;
  return {
    id: t.id,
    rawId: t.id,
    // W3C spec expects rawId to match id for JSON format
    response: {
      authenticatorData: We(new Uint8Array(i.authenticatorData)),
      clientDataJSON: We(new Uint8Array(i.clientDataJSON)),
      signature: We(new Uint8Array(i.signature)),
      userHandle: i.userHandle ? We(new Uint8Array(i.userHandle)) : void 0
    },
    type: "public-key",
    clientExtensionResults: r,
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (e = n.authenticatorAttachment) !== null && e !== void 0 ? e : void 0
  };
}
function os(t) {
  return (
    // Consider localhost valid as well since it's okay wrt Secure Contexts
    t === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(t)
  );
}
function rn() {
  var t, e;
  return !!(J() && "PublicKeyCredential" in window && window.PublicKeyCredential && "credentials" in navigator && typeof ((t = navigator == null ? void 0 : navigator.credentials) === null || t === void 0 ? void 0 : t.create) == "function" && typeof ((e = navigator == null ? void 0 : navigator.credentials) === null || e === void 0 ? void 0 : e.get) == "function");
}
async function ls(t) {
  try {
    const e = await navigator.credentials.create(
      /** we assert the type here until typescript types are updated */
      t
    );
    return e ? e instanceof PublicKeyCredential ? { data: e, error: null } : {
      data: null,
      error: new nn("Browser returned unexpected credential type", e)
    } : {
      data: null,
      error: new nn("Empty credential response", e)
    };
  } catch (e) {
    return {
      data: null,
      error: mh({
        error: e,
        options: t
      })
    };
  }
}
async function us(t) {
  try {
    const e = await navigator.credentials.get(
      /** we assert the type here until typescript types are updated */
      t
    );
    return e ? e instanceof PublicKeyCredential ? { data: e, error: null } : {
      data: null,
      error: new nn("Browser returned unexpected credential type", e)
    } : {
      data: null,
      error: new nn("Empty credential response", e)
    };
  } catch (e) {
    return {
      data: null,
      error: yh({
        error: e,
        options: t
      })
    };
  }
}
const bh = {
  hints: ["security-key"],
  authenticatorSelection: {
    authenticatorAttachment: "cross-platform",
    requireResidentKey: !1,
    /** set to preferred because older yubikeys don't have PIN/Biometric */
    userVerification: "preferred",
    residentKey: "discouraged"
  },
  attestation: "direct"
}, vh = {
  /** set to preferred because older yubikeys don't have PIN/Biometric */
  userVerification: "preferred",
  hints: ["security-key"],
  attestation: "direct"
};
function sn(...t) {
  const e = (i) => i !== null && typeof i == "object" && !Array.isArray(i), n = (i) => i instanceof ArrayBuffer || ArrayBuffer.isView(i), r = {};
  for (const i of t)
    if (i)
      for (const s in i) {
        const a = i[s];
        if (a !== void 0)
          if (Array.isArray(a))
            r[s] = a;
          else if (n(a))
            r[s] = a;
          else if (e(a)) {
            const o = r[s];
            e(o) ? r[s] = sn(o, a) : r[s] = sn(a);
          } else
            r[s] = a;
      }
  return r;
}
function _h(t, e) {
  return sn(bh, t, e || {});
}
function kh(t, e) {
  return sn(vh, t, e || {});
}
class Sh {
  constructor(e) {
    this.client = e, this.enroll = this._enroll.bind(this), this.challenge = this._challenge.bind(this), this.verify = this._verify.bind(this), this.authenticate = this._authenticate.bind(this), this.register = this._register.bind(this);
  }
  /**
   * Enroll a new WebAuthn factor.
   * Creates an unverified WebAuthn factor that must be verified with a credential.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Omit<MFAEnrollWebauthnParams, 'factorType'>} params - Enrollment parameters (friendlyName required)
   * @returns {Promise<AuthMFAEnrollWebauthnResponse>} Enrolled factor details or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-registering-a-new-credential W3C WebAuthn Spec - Registering a New Credential}
   */
  async _enroll(e) {
    return this.client.mfa.enroll(Object.assign(Object.assign({}, e), { factorType: "webauthn" }));
  }
  /**
   * Challenge for WebAuthn credential creation or authentication.
   * Combines server challenge with browser credential operations.
   * Handles both registration (create) and authentication (request) flows.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {MFAChallengeWebauthnParams & { friendlyName?: string; signal?: AbortSignal }} params - Challenge parameters including factorId
   * @param {Object} overrides - Allows you to override the parameters passed to navigator.credentials
   * @param {PublicKeyCredentialCreationOptionsFuture} overrides.create - Override options for credential creation
   * @param {PublicKeyCredentialRequestOptionsFuture} overrides.request - Override options for credential request
   * @returns {Promise<RequestResult>} Challenge response with credential or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-credential-creation W3C WebAuthn Spec - Credential Creation}
   * @see {@link https://w3c.github.io/webauthn/#sctn-verifying-assertion W3C WebAuthn Spec - Verifying Assertion}
   */
  async _challenge({ factorId: e, webauthn: n, friendlyName: r, signal: i }, s) {
    var a;
    try {
      const { data: o, error: l } = await this.client.mfa.challenge({
        factorId: e,
        webauthn: n
      });
      if (!o)
        return { data: null, error: l };
      const u = i ?? qn.createNewAbortSignal();
      if (o.webauthn.type === "create") {
        const { user: h } = o.webauthn.credential_options.publicKey;
        if (!h.name) {
          const c = r;
          if (c)
            h.name = `${h.id}:${c}`;
          else {
            const d = (await this.client.getUser()).data.user, p = ((a = d == null ? void 0 : d.user_metadata) === null || a === void 0 ? void 0 : a.name) || (d == null ? void 0 : d.email) || (d == null ? void 0 : d.id) || "User";
            h.name = `${h.id}:${p}`;
          }
        }
        h.displayName || (h.displayName = h.name);
      }
      switch (o.webauthn.type) {
        case "create": {
          const h = _h(o.webauthn.credential_options.publicKey, s == null ? void 0 : s.create), { data: c, error: f } = await ls({
            publicKey: h,
            signal: u
          });
          return c ? {
            data: {
              factorId: e,
              challengeId: o.id,
              webauthn: {
                type: o.webauthn.type,
                credential_response: c
              }
            },
            error: null
          } : { data: null, error: f };
        }
        case "request": {
          const h = kh(o.webauthn.credential_options.publicKey, s == null ? void 0 : s.request), { data: c, error: f } = await us(Object.assign(Object.assign({}, o.webauthn.credential_options), { publicKey: h, signal: u }));
          return c ? {
            data: {
              factorId: e,
              challengeId: o.id,
              webauthn: {
                type: o.webauthn.type,
                credential_response: c
              }
            },
            error: null
          } : { data: null, error: f };
        }
      }
    } catch (o) {
      return T(o) ? { data: null, error: o } : {
        data: null,
        error: new ue("Unexpected error in challenge", o)
      };
    }
  }
  /**
   * Verify a WebAuthn credential with the server.
   * Completes the WebAuthn ceremony by sending the credential to the server for verification.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Verification parameters
   * @param {string} params.challengeId - ID of the challenge being verified
   * @param {string} params.factorId - ID of the WebAuthn factor
   * @param {MFAVerifyWebauthnParams<T>['webauthn']} params.webauthn - WebAuthn credential response
   * @returns {Promise<AuthMFAVerifyResponse>} Verification result with session or error
   * @see {@link https://w3c.github.io/webauthn/#sctn-verifying-assertion W3C WebAuthn Spec - Verifying an Authentication Assertion}
   * */
  async _verify({ challengeId: e, factorId: n, webauthn: r }) {
    return this.client.mfa.verify({
      factorId: n,
      challengeId: e,
      webauthn: r
    });
  }
  /**
   * Complete WebAuthn authentication flow.
   * Performs challenge and verification in a single operation for existing credentials.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Authentication parameters
   * @param {string} params.factorId - ID of the WebAuthn factor to authenticate with
   * @param {Object} params.webauthn - WebAuthn configuration
   * @param {string} params.webauthn.rpId - Relying Party ID (defaults to current hostname)
   * @param {string[]} params.webauthn.rpOrigins - Allowed origins (defaults to current origin)
   * @param {AbortSignal} params.webauthn.signal - Optional abort signal
   * @param {PublicKeyCredentialRequestOptionsFuture} overrides - Override options for navigator.credentials.get
   * @returns {Promise<RequestResult<AuthMFAVerifyResponseData, WebAuthnError | AuthError>>} Authentication result
   * @see {@link https://w3c.github.io/webauthn/#sctn-authentication W3C WebAuthn Spec - Authentication Ceremony}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions MDN - PublicKeyCredentialRequestOptions}
   */
  async _authenticate({ factorId: e, webauthn: { rpId: n = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: r = typeof window < "u" ? [window.location.origin] : void 0, signal: i } = {} }, s) {
    if (!n)
      return {
        data: null,
        error: new ut("rpId is required for WebAuthn authentication")
      };
    try {
      if (!rn())
        return {
          data: null,
          error: new ue("Browser does not support WebAuthn", null)
        };
      const { data: a, error: o } = await this.challenge({
        factorId: e,
        webauthn: { rpId: n, rpOrigins: r },
        signal: i
      }, { request: s });
      if (!a)
        return { data: null, error: o };
      const { webauthn: l } = a;
      return this._verify({
        factorId: e,
        challengeId: a.challengeId,
        webauthn: {
          type: l.type,
          rpId: n,
          rpOrigins: r,
          credential_response: l.credential_response
        }
      });
    } catch (a) {
      return T(a) ? { data: null, error: a } : {
        data: null,
        error: new ue("Unexpected error in authenticate", a)
      };
    }
  }
  /**
   * Complete WebAuthn registration flow.
   * Performs enrollment, challenge, and verification in a single operation for new credentials.
   *
   * @experimental This method is experimental and may change in future releases
   * @param {Object} params - Registration parameters
   * @param {string} params.friendlyName - User-friendly name for the credential
   * @param {string} params.rpId - Relying Party ID (defaults to current hostname)
   * @param {string[]} params.rpOrigins - Allowed origins (defaults to current origin)
   * @param {AbortSignal} params.signal - Optional abort signal
   * @param {PublicKeyCredentialCreationOptionsFuture} overrides - Override options for navigator.credentials.create
   * @returns {Promise<RequestResult<AuthMFAVerifyResponseData, WebAuthnError | AuthError>>} Registration result
   * @see {@link https://w3c.github.io/webauthn/#sctn-registering-a-new-credential W3C WebAuthn Spec - Registration Ceremony}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions MDN - PublicKeyCredentialCreationOptions}
   */
  async _register({ friendlyName: e, webauthn: { rpId: n = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: r = typeof window < "u" ? [window.location.origin] : void 0, signal: i } = {} }, s) {
    if (!n)
      return {
        data: null,
        error: new ut("rpId is required for WebAuthn registration")
      };
    try {
      if (!rn())
        return {
          data: null,
          error: new ue("Browser does not support WebAuthn", null)
        };
      const { data: a, error: o } = await this._enroll({
        friendlyName: e
      });
      if (!a)
        return await this.client.mfa.listFactors().then((h) => {
          var c;
          return (c = h.data) === null || c === void 0 ? void 0 : c.all.find((f) => f.factor_type === "webauthn" && f.friendly_name === e && f.status === "unverified");
        }).then((h) => h ? this.client.mfa.unenroll({ factorId: h == null ? void 0 : h.id }) : void 0), { data: null, error: o };
      const { data: l, error: u } = await this._challenge({
        factorId: a.id,
        friendlyName: a.friendly_name,
        webauthn: { rpId: n, rpOrigins: r },
        signal: i
      }, {
        create: s
      });
      return l ? this._verify({
        factorId: a.id,
        challengeId: l.challengeId,
        webauthn: {
          rpId: n,
          rpOrigins: r,
          type: l.webauthn.type,
          credential_response: l.webauthn.credential_response
        }
      }) : { data: null, error: u };
    } catch (a) {
      return T(a) ? { data: null, error: a } : {
        data: null,
        error: new ue("Unexpected error in register", a)
      };
    }
  }
}
dh();
const Eh = {
  url: Rc,
  storageKey: Oc,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: Ic,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1,
  throwOnError: !1,
  lockAcquireTimeout: 5e3,
  // 5 seconds. Only used when a custom `lock` is supplied. TODO(v3): remove.
  skipAutoInitialize: !1,
  experimental: {}
}, Xe = {};
let qr = !1;
class ht {
  /**
   * The JWKS used for verifying asymmetric JWTs
   */
  get jwks() {
    var e, n;
    return (n = (e = Xe[this.storageKey]) === null || e === void 0 ? void 0 : e.jwks) !== null && n !== void 0 ? n : { keys: [] };
  }
  set jwks(e) {
    Xe[this.storageKey] = Object.assign(Object.assign({}, Xe[this.storageKey]), { jwks: e });
  }
  get jwks_cached_at() {
    var e, n;
    return (n = (e = Xe[this.storageKey]) === null || e === void 0 ? void 0 : e.cachedAt) !== null && n !== void 0 ? n : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(e) {
    Xe[this.storageKey] = Object.assign(Object.assign({}, Xe[this.storageKey]), { cachedAt: e });
  }
  /**
   * Create a new client for use in the browser.
   *
   * @example Using supabase-js (recommended)
   * ```ts
   * import { createClient } from '@supabase/supabase-js'
   *
   * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
   * const { data, error } = await supabase.auth.getUser()
   * ```
   *
   * @example Standalone import for bundle-sensitive environments
   * ```ts
   * import { GoTrueClient } from '@supabase/auth-js'
   *
   * const auth = new GoTrueClient({
   *   url: 'https://xyzcompany.supabase.co/auth/v1',
   *   headers: { apikey: 'your-publishable-key' },
   *   storageKey: 'supabase-auth',
   * })
   * ```
   */
  constructor(e) {
    var n, r, i;
    this.userStorage = null, this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.autoRefreshTickTimeout = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.lastRefreshFailure = null, this._sessionRemovalEpoch = 0, this.initializePromise = null, this._pendingInitNotifications = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lock = null, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log;
    const s = Object.assign(Object.assign({}, Eh), e);
    if (this.storageKey = s.storageKey, this.instanceID = (n = ht.nextInstanceID[this.storageKey]) !== null && n !== void 0 ? n : 0, ht.nextInstanceID[this.storageKey] = this.instanceID + 1, this.logDebugMessages = !!s.debug, typeof s.debug == "function" && (this.logger = s.debug), this.instanceID > 0 && J()) {
      const a = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      console.warn(a), this.logDebugMessages && console.trace(a);
    }
    if (this.persistSession = s.persistSession, this.autoRefreshToken = s.autoRefreshToken, this.experimental = (r = s.experimental) !== null && r !== void 0 ? r : {}, this.admin = new ss({
      url: s.url,
      headers: s.headers,
      fetch: s.fetch,
      experimental: this.experimental
    }), this.url = s.url, this.headers = s.headers, this.fetch = rs(s.fetch), this.detectSessionInUrl = s.detectSessionInUrl, this.flowType = s.flowType, this.hasCustomAuthorizationHeader = s.hasCustomAuthorizationHeader, this.throwOnError = s.throwOnError, this.lockAcquireTimeout = s.lockAcquireTimeout, s.lock != null && (this.lock = s.lock, qr || (qr = !0, console.warn(`${this._logPrefix()} The "lock" option is deprecated and will be removed in v3. The client now coordinates session refreshes without a lock, so most apps can drop the option. See https://github.com/supabase/supabase-js/blob/master/packages/core/auth-js/migrations/lockless-coordination.md`))), this.jwks || (this.jwks = { keys: [] }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER), this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
      webauthn: new Sh(this),
      recoveryCodes: {
        getStatus: this._getRecoveryCodesStatus.bind(this),
        generate: this._generateRecoveryCodes.bind(this),
        verify: this._verifyRecoveryCode.bind(this),
        regenerate: this._regenerateRecoveryCodes.bind(this),
        unenroll: this._unenrollRecoveryCodes.bind(this)
      }
    }, this.oauth = {
      getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
      approveAuthorization: this._approveAuthorization.bind(this),
      denyAuthorization: this._denyAuthorization.bind(this),
      listGrants: this._listOAuthGrants.bind(this),
      revokeGrant: this._revokeOAuthGrant.bind(this)
    }, this.passkey = {
      startRegistration: this._startPasskeyRegistration.bind(this),
      verifyRegistration: this._verifyPasskeyRegistration.bind(this),
      startAuthentication: this._startPasskeyAuthentication.bind(this),
      verifyAuthentication: this._verifyPasskeyAuthentication.bind(this),
      list: this._listPasskeys.bind(this),
      update: this._updatePasskey.bind(this),
      delete: this._deletePasskey.bind(this)
    }, this.persistSession ? (s.storage ? this.storage = s.storage : ns() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = Ur(this.memoryStorage)), s.userStorage && (this.userStorage = s.userStorage)) : (this.memoryStorage = {}, this.storage = Ur(this.memoryStorage)), J() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (a) {
        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", a);
      }
      (i = this.broadcastChannel) === null || i === void 0 || i.addEventListener("message", async (a) => {
        this._debug("received broadcast notification from other tab or client", a), (a.data.event === "TOKEN_REFRESHED" || a.data.event === "SIGNED_IN") && (this.lastRefreshFailure = null);
        try {
          await this._notifyAllSubscribers(a.data.event, a.data.session, !1);
        } catch (o) {
          this._debug("#broadcastChannel", "error", o);
        }
      });
    }
    s.skipAutoInitialize || this.initialize().catch((a) => {
      this._debug("#initialize()", "error", a);
    });
  }
  /**
   * Returns whether error throwing mode is enabled for this client.
   */
  isThrowOnErrorEnabled() {
    return this.throwOnError;
  }
  /**
   * Centralizes return handling with optional error throwing. When `throwOnError` is enabled
   * and the provided result contains a non-nullish error, the error is thrown instead of
   * being returned. This ensures consistent behavior across all public API methods.
   */
  _returnResult(e) {
    if (this.throwOnError && e && e.error)
      throw e.error;
    return e;
  }
  _logPrefix() {
    return `GoTrueClient@${this.storageKey}:${this.instanceID} (${Ji}) ${(/* @__PURE__ */ new Date()).toISOString()}`;
  }
  _debug(...e) {
    return this.logDebugMessages && this.logger(this._logPrefix(), ...e), this;
  }
  /**
   * Initialize the auth client by loading the session from storage or
   * detecting it from the URL after an OAuth, magic-link, or password-recovery
   * redirect.
   *
   * **Most callers do not need to invoke this directly.** The client calls it
   * automatically during construction, and to react to sign-in events (including
   * post-redirect events) you should subscribe to `onAuthStateChange` rather
   * than awaiting `initialize()`.
   *
   * You only need to call it manually when you have opted out of the automatic
   * call by passing `skipAutoInitialize: true` — for example, in an SSR context
   * where you need to control initialization timing. In that case, awaiting
   * `initialize()` returns the resolved session result (or any error encountered
   * while detecting it from the URL).
   *
   * @category Auth
   */
  async initialize() {
    var e;
    if (this.initializePromise)
      return await this.initializePromise;
    this._pendingInitNotifications = [], this.initializePromise = (async () => this.lock != null ? await this._acquireLock(this.lockAcquireTimeout, async () => await this._initialize()) : await this._initialize())();
    const n = await this.initializePromise, r = (e = this._pendingInitNotifications) !== null && e !== void 0 ? e : [];
    this._pendingInitNotifications = null;
    for (const i of r)
      await this._notifyAllSubscribers(i.event, i.session, i.broadcast);
    return n;
  }
  /**
   * IMPORTANT:
   * 1. Never throw in this method, as it is called from the constructor
   * 2. Never return a session from this method as it would be cached over
   *    the whole lifetime of the client
   */
  async _initialize() {
    var e;
    try {
      let n = {}, r = "none";
      if (J() && (n = Pr(window.location.href), this._isImplicitGrantCallback(n) ? r = "implicit" : await this._isPKCECallback(n) && (r = "pkce")), J() && this.detectSessionInUrl && r !== "none") {
        const { data: i, error: s } = await this._getSessionFromURL(n, r);
        if (s) {
          if (this._debug("#_initialize()", "error detecting session from URL", s), Xi(s)) {
            const l = (e = s.details) === null || e === void 0 ? void 0 : e.code;
            if (l === "identity_already_exists" || l === "identity_not_found" || l === "single_identity_not_deletable")
              return { error: s };
          }
          return { error: s };
        }
        const { session: a, redirectType: o } = i;
        return this._debug("#_initialize()", "detected session in URL", a, "redirect type", o), await this._saveSession(a), setTimeout(async () => {
          o === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", a) : await this._notifyAllSubscribers("SIGNED_IN", a);
        }, 0), { error: null };
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (n) {
      return T(n) ? this._returnResult({ error: n }) : this._returnResult({
        error: new ue("Unexpected error during initialization", n)
      });
    } finally {
      await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
    }
  }
  /**
   * Creates a new anonymous user.
   *
   * @returns A session where the is_anonymous claim in the access token JWT set to true
   *
   * @category Auth
   *
   * @remarks
   * - Returns an anonymous user
   * - It is recommended to set up captcha for anonymous sign-ins to prevent abuse. You can pass in the captcha token in the `options` param.
   *
   * @example Create an anonymous user
   * ```js
   * const { data, error } = await supabase.auth.signInAnonymously({
   *   options: {
   *     captchaToken
   *   }
   * });
   * ```
   *
   * @exampleResponse Create an anonymous user
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "",
   *       "phone": "",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {},
   *       "user_metadata": {},
   *       "identities": [],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": true
   *     },
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "token_type": "bearer",
   *       "expires_in": 3600,
   *       "expires_at": 1700000000,
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "email": "",
   *         "phone": "",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "app_metadata": {},
   *         "user_metadata": {},
   *         "identities": [],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z",
   *         "is_anonymous": true
   *       }
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Create an anonymous user with custom user metadata
   * ```js
   * const { data, error } = await supabase.auth.signInAnonymously({
   *   options: {
   *     data
   *   }
   * })
   * ```
   */
  async signInAnonymously(e) {
    var n, r, i;
    try {
      const s = await C(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (r = (n = e == null ? void 0 : e.options) === null || n === void 0 ? void 0 : n.data) !== null && r !== void 0 ? r : {},
          gotrue_meta_security: { captcha_token: (i = e == null ? void 0 : e.options) === null || i === void 0 ? void 0 : i.captchaToken }
        },
        xform: le
      }), { data: a, error: o } = s;
      if (o || !a)
        return this._returnResult({ data: { user: null, session: null }, error: o });
      const l = a.session, u = a.user;
      return a.session && (await this._saveSession(a.session), await this._notifyAllSubscribers("SIGNED_IN", l)), this._returnResult({ data: { user: u, session: l }, error: null });
    } catch (s) {
      if (T(s))
        return this._returnResult({ data: { user: null, session: null }, error: s });
      throw s;
    }
  }
  /**
   * Creates a new user.
   *
   * Be aware that if a user account exists in the system you may get back an
   * error message that attempts to hide this information from the user.
   * This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.
   *
   * @returns A logged-in session if the server has "autoconfirm" ON
   * @returns A user if the server has "autoconfirm" OFF
   *
   * @category Auth
   *
   * @remarks
   * - By default, the user needs to verify their email address before logging in. To turn this off, disable **Confirm email** in [your project](/dashboard/project/_/auth/providers).
   * - **Confirm email** determines if users need to confirm their email address after signing up.
   *   - If **Confirm email** is enabled, a `user` is returned but `session` is null.
   *   - If **Confirm email** is disabled, both a `user` and a `session` are returned.
   * - When the user confirms their email address, they are redirected to the [`SITE_URL`](/docs/guides/auth/redirect-urls#use-wildcards-in-redirect-urls) by default. You can modify your `SITE_URL` or add additional redirect URLs in [your project](/dashboard/project/_/auth/url-configuration).
   * - If signUp() is called for an existing confirmed user:
   *   - When both **Confirm email** and **Confirm phone** (even when phone provider is disabled) are enabled in [your project](/dashboard/project/_/auth/providers), an obfuscated/fake user object is returned.
   *   - When either **Confirm email** or **Confirm phone** (even when phone provider is disabled) is disabled, the error message, `User already registered` is returned.
   * - To fetch the currently logged-in user, refer to [`getUser()`](/docs/reference/javascript/auth-getuser).
   *
   * @example Sign up with an email and password
   * ```js
   * const { data, error } = await supabase.auth.signUp({
   *   email: 'example@email.com',
   *   password: 'example-password',
   * })
   * ```
   *
   * @exampleResponse Sign up with an email and password
   * ```json
   * // Some fields may be null if "confirm email" is enabled.
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {},
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z"
   *     },
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "token_type": "bearer",
   *       "expires_in": 3600,
   *       "expires_at": 1700000000,
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "email": "example@email.com",
   *         "email_confirmed_at": "2024-01-01T00:00:00Z",
   *         "phone": "",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "app_metadata": {
   *           "provider": "email",
   *           "providers": [
   *             "email"
   *           ]
   *         },
   *         "user_metadata": {},
   *         "identities": [
   *           {
   *             "identity_id": "22222222-2222-2222-2222-222222222222",
   *             "id": "11111111-1111-1111-1111-111111111111",
   *             "user_id": "11111111-1111-1111-1111-111111111111",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": false,
   *               "phone_verified": false,
   *               "sub": "11111111-1111-1111-1111-111111111111"
   *             },
   *             "provider": "email",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "example@email.com"
   *           }
   *         ],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z"
   *       }
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Sign up with a phone number and password (SMS)
   * ```js
   * const { data, error } = await supabase.auth.signUp({
   *   phone: '123456789',
   *   password: 'example-password',
   *   options: {
   *     channel: 'sms'
   *   }
   * })
   * ```
   *
   * @exampleDescription Sign up with a phone number and password (whatsapp)
   * The user will be sent a WhatsApp message which contains a OTP. By default, a given user can only request a OTP once every 60 seconds. Note that a user will need to have a valid WhatsApp account that is linked to Twilio in order to use this feature.
   *
   * @example Sign up with a phone number and password (whatsapp)
   * ```js
   * const { data, error } = await supabase.auth.signUp({
   *   phone: '123456789',
   *   password: 'example-password',
   *   options: {
   *     channel: 'whatsapp'
   *   }
   * })
   * ```
   *
   * @example Sign up with additional user metadata
   * ```js
   * const { data, error } = await supabase.auth.signUp(
   *   {
   *     email: 'example@email.com',
   *     password: 'example-password',
   *     options: {
   *       data: {
   *         first_name: 'John',
   *         age: 27,
   *       }
   *     }
   *   }
   * )
   * ```
   *
   * @exampleDescription Sign up with a redirect URL
   * - See [redirect URLs and wildcards](/docs/guides/auth/redirect-urls#use-wildcards-in-redirect-urls) to add additional redirect URLs to your project.
   *
   * @example Sign up with a redirect URL
   * ```js
   * const { data, error } = await supabase.auth.signUp(
   *   {
   *     email: 'example@email.com',
   *     password: 'example-password',
   *     options: {
   *       emailRedirectTo: 'https://example.com/welcome'
   *     }
   *   }
   * )
   * ```
   */
  async signUp(e) {
    var n, r, i;
    let s = null;
    try {
      let a;
      if ("email" in e) {
        const { email: c, password: f, options: d } = e;
        let p = null, y = null;
        this.flowType === "pkce" && ([p, y, s] = await this._getCodeChallengeAndMethod()), a = await C(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: this._maybeAppendFlowIdToRedirect(d == null ? void 0 : d.emailRedirectTo, s),
          body: {
            email: c,
            password: f,
            data: (n = d == null ? void 0 : d.data) !== null && n !== void 0 ? n : {},
            gotrue_meta_security: { captcha_token: d == null ? void 0 : d.captchaToken },
            code_challenge: p,
            code_challenge_method: y
          },
          xform: le
        });
      } else if ("phone" in e) {
        const { phone: c, password: f, options: d } = e;
        a = await C(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: c,
            password: f,
            data: (r = d == null ? void 0 : d.data) !== null && r !== void 0 ? r : {},
            channel: (i = d == null ? void 0 : d.channel) !== null && i !== void 0 ? i : "sms",
            gotrue_meta_security: { captcha_token: d == null ? void 0 : d.captchaToken }
          },
          xform: le
        });
      } else
        throw new _t("You must provide either an email or phone number and a password");
      const { data: o, error: l } = a;
      if (l || !o)
        return await pe(this.storage, this.storageKey, s), this._returnResult({ data: { user: null, session: null }, error: l });
      const u = o.session, h = o.user;
      return o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", u)), this._returnResult({ data: { user: h, session: u }, error: null });
    } catch (a) {
      if (await pe(this.storage, this.storageKey, s), T(a))
        return this._returnResult({ data: { user: null, session: null }, error: a });
      throw a;
    }
  }
  /**
   * Log in an existing user with an email and password or phone and password.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or that the
   * email/phone and password combination is wrong or that the account can only
   * be accessed via social login.
   *
   * @category Auth
   *
   * @remarks
   * - Requires either an email and password or a phone number and password.
   *
   * @example Sign in with email and password
   * ```js
   * const { data, error } = await supabase.auth.signInWithPassword({
   *   email: 'example@email.com',
   *   password: 'example-password',
   * })
   * ```
   *
   * @exampleResponse Sign in with email and password
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {},
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z"
   *     },
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "token_type": "bearer",
   *       "expires_in": 3600,
   *       "expires_at": 1700000000,
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "email": "example@email.com",
   *         "email_confirmed_at": "2024-01-01T00:00:00Z",
   *         "phone": "",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "app_metadata": {
   *           "provider": "email",
   *           "providers": [
   *             "email"
   *           ]
   *         },
   *         "user_metadata": {},
   *         "identities": [
   *           {
   *             "identity_id": "22222222-2222-2222-2222-222222222222",
   *             "id": "11111111-1111-1111-1111-111111111111",
   *             "user_id": "11111111-1111-1111-1111-111111111111",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": false,
   *               "phone_verified": false,
   *               "sub": "11111111-1111-1111-1111-111111111111"
   *             },
   *             "provider": "email",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "example@email.com"
   *           }
   *         ],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z"
   *       }
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Sign in with phone and password
   * ```js
   * const { data, error } = await supabase.auth.signInWithPassword({
   *   phone: '+13334445555',
   *   password: 'some-password',
   * })
   * ```
   *
   * @exampleDescription Handling errors
   * Log the full `error` object so fields like `code`, `status`, and `name` aren't hidden. The `error.code` (e.g. `'invalid_credentials'`, `'email_not_confirmed'`) is often more useful for branching than `error.message`, and the full object surfaces both.
   *
   * @example Handling errors
   * ```js
   * const { data, error } = await supabase.auth.signInWithPassword({
   *   email: 'example@email.com',
   *   password: 'example-password',
   * })
   * if (error) {
   *   console.error(error)
   *   return
   * }
   * ```
   */
  async signInWithPassword(e) {
    try {
      let n;
      if ("email" in e) {
        const { email: s, password: a, options: o } = e;
        n = await C(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: s,
            password: a,
            gotrue_meta_security: { captcha_token: o == null ? void 0 : o.captchaToken }
          },
          xform: Dr
        });
      } else if ("phone" in e) {
        const { phone: s, password: a, options: o } = e;
        n = await C(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: s,
            password: a,
            gotrue_meta_security: { captcha_token: o == null ? void 0 : o.captchaToken }
          },
          xform: Dr
        });
      } else
        throw new _t("You must provide either an email or phone number and a password");
      const { data: r, error: i } = n;
      if (i)
        return this._returnResult({ data: { user: null, session: null }, error: i });
      if (!r || !r.session || !r.user) {
        const s = new Be();
        return this._returnResult({ data: { user: null, session: null }, error: s });
      }
      return r.session && (await this._saveSession(r.session), await this._notifyAllSubscribers("SIGNED_IN", r.session)), this._returnResult({
        data: Object.assign({ user: r.user, session: r.session }, r.weak_password ? { weakPassword: r.weak_password } : null),
        error: i
      });
    } catch (n) {
      if (T(n))
        return this._returnResult({ data: { user: null, session: null }, error: n });
      throw n;
    }
  }
  /**
   * Log in an existing user via a third-party provider.
   * This method supports the PKCE flow.
   *
   * @category Auth
   *
   * @remarks
   * - This method is used for signing in using [Social Login (OAuth) providers](/docs/guides/auth#configure-third-party-providers).
   * - It works by redirecting your application to the provider's authorization screen, before bringing back the user to your app.
   *
   * @example Sign in using a third-party provider
   * ```js
   * const { data, error } = await supabase.auth.signInWithOAuth({
   *   provider: 'github'
   * })
   * ```
   *
   * @exampleResponse Sign in using a third-party provider
   * ```json
   * {
   *   data: {
   *     provider: 'github',
   *     url: <PROVIDER_URL_TO_REDIRECT_TO>,
   *     flowId: <PKCE_FLOW_ID_OR_NULL>
   *   },
   *   error: null
   * }
   * ```
   *
   * @exampleDescription Sign in using a third-party provider with redirect
   * - When the OAuth provider successfully authenticates the user, they are redirected to the URL specified in the `redirectTo` parameter. This parameter defaults to the [`SITE_URL`](/docs/guides/auth/redirect-urls#use-wildcards-in-redirect-urls). It does not redirect the user immediately after invoking this method.
   * - See [redirect URLs and wildcards](/docs/guides/auth/redirect-urls#use-wildcards-in-redirect-urls) to add additional redirect URLs to your project.
   *
   * @example Sign in using a third-party provider with redirect
   * ```js
   * const { data, error } = await supabase.auth.signInWithOAuth({
   *   provider: 'github',
   *   options: {
   *     redirectTo: 'https://example.com/welcome'
   *   }
   * })
   * ```
   *
   * @exampleDescription Sign in with scopes and access provider tokens
   * If you need additional access from an OAuth provider, in order to access provider specific APIs in the name of the user, you can do this by passing in the scopes the user should authorize for your application. Note that the `scopes` option takes in **a space-separated list** of scopes.
   *
   * Because OAuth sign-in often includes redirects, you should register an `onAuthStateChange` callback immediately after you create the Supabase client. This callback will listen for the presence of `provider_token` and `provider_refresh_token` properties on the `session` object and store them in local storage. The client library will emit these values **only once** immediately after the user signs in. You can then access them by looking them up in local storage, or send them to your backend servers for further processing.
   *
   * Finally, make sure you remove them from local storage on the `SIGNED_OUT` event. If the OAuth provider supports token revocation, make sure you call those APIs either from the frontend or schedule them to be called on the backend.
   *
   * @example Sign in with scopes and access provider tokens
   * ```js
   * // Register this immediately after calling createClient!
   * // Because signInWithOAuth causes a redirect, you need to fetch the
   * // provider tokens from the callback.
   * supabase.auth.onAuthStateChange((event, session) => {
   *   if (session && session.provider_token) {
   *     window.localStorage.setItem('oauth_provider_token', session.provider_token)
   *   }
   *
   *   if (session && session.provider_refresh_token) {
   *     window.localStorage.setItem('oauth_provider_refresh_token', session.provider_refresh_token)
   *   }
   *
   *   if (event === 'SIGNED_OUT') {
   *     window.localStorage.removeItem('oauth_provider_token')
   *     window.localStorage.removeItem('oauth_provider_refresh_token')
   *   }
   * })
   *
   * // Call this on your Sign in with GitHub button to initiate OAuth
   * // with GitHub with the requested elevated scopes.
   * await supabase.auth.signInWithOAuth({
   *   provider: 'github',
   *   options: {
   *     scopes: 'repo gist notifications'
   *   }
   * })
   * ```
   */
  async signInWithOAuth(e) {
    var n, r, i, s;
    return await this._handleProviderSignIn(e.provider, {
      redirectTo: (n = e.options) === null || n === void 0 ? void 0 : n.redirectTo,
      scopes: (r = e.options) === null || r === void 0 ? void 0 : r.scopes,
      queryParams: (i = e.options) === null || i === void 0 ? void 0 : i.queryParams,
      skipBrowserRedirect: (s = e.options) === null || s === void 0 ? void 0 : s.skipBrowserRedirect
    });
  }
  /**
   * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
   *
   * @category Auth
   *
   * @remarks
   * - Used when `flowType` is set to `pkce` in client options.
   * - When several PKCE flows are in flight at once, pass `options.flowId` so
   *   the code is exchanged with the verifier created by that specific flow.
   *   The flow id is returned by `signInWithOAuth`, and with
   *   `experimental.appendPkceFlowIdToRedirects` enabled it also arrives on
   *   your callback URL as the reserved `sb_flow_id` query parameter (read
   *   automatically in a browser).
   * - When a flow id is present but its stored verifier is gone (evicted,
   *   already used, or from another device), the call fails with a verifier
   *   missing error instead of trying another flow's verifier — a mismatched
   *   verifier would consume the single-use code. Without any flow id the
   *   most recently stored verifier is used, as before.
   *
   * @example Exchange Auth Code
   * ```js
   * supabase.auth.exchangeCodeForSession('34e770dd-9ff9-416c-87fa-43b31d7ef225')
   * ```
   *
   * @example Exchange Auth Code for a specific flow (e.g. in a server-side callback handler)
   * ```js
   * const flowId = requestUrl.searchParams.get('sb_flow_id')
   * supabase.auth.exchangeCodeForSession(code, flowId ? { flowId } : undefined)
   * ```
   *
   * @exampleResponse Exchange Auth Code
   * ```json
   * {
   *   "data": {
   *     session: {
   *       access_token: '<ACCESS_TOKEN>',
   *       token_type: 'bearer',
   *       expires_in: 3600,
   *       expires_at: 1700000000,
   *       refresh_token: '<REFRESH_TOKEN>',
   *       user: {
   *         id: '11111111-1111-1111-1111-111111111111',
   *         aud: 'authenticated',
   *         role: 'authenticated',
   *         email: 'example@email.com'
   *         email_confirmed_at: '2024-01-01T00:00:00Z',
   *         phone: '',
   *         confirmation_sent_at: '2024-01-01T00:00:00Z',
   *         confirmed_at: '2024-01-01T00:00:00Z',
   *         last_sign_in_at: '2024-01-01T00:00:00Z',
   *         app_metadata: {
   *           "provider": "email",
   *           "providers": [
   *             "email",
   *             "<OTHER_PROVIDER>"
   *           ]
   *         },
   *         user_metadata: {
   *           email: 'email@email.com',
   *           email_verified: true,
   *           full_name: 'User Name',
   *           iss: '<ISS>',
   *           name: 'User Name',
   *           phone_verified: false,
   *           provider_id: '<PROVIDER_ID>',
   *           sub: '<SUB>'
   *         },
   *         identities: [
   *           {
   *             "identity_id": "22222222-2222-2222-2222-222222222222",
   *             "id": "11111111-1111-1111-1111-111111111111",
   *             "user_id": "11111111-1111-1111-1111-111111111111",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": false,
   *               "phone_verified": false,
   *               "sub": "11111111-1111-1111-1111-111111111111"
   *             },
   *             "provider": "email",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "email@example.com"
   *           },
   *           {
   *             "identity_id": "33333333-3333-3333-3333-333333333333",
   *             "id": "<ID>",
   *             "user_id": "<USER_ID>",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": true,
   *               "full_name": "User Name",
   *               "iss": "<ISS>",
   *               "name": "User Name",
   *               "phone_verified": false,
   *               "provider_id": "<PROVIDER_ID>",
   *               "sub": "<SUB>"
   *             },
   *             "provider": "<PROVIDER>",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "example@email.com"
   *           }
   *         ],
   *         created_at: '2024-01-01T00:00:00Z',
   *         updated_at: '2024-01-01T00:00:00Z',
   *         is_anonymous: false
   *       },
   *       provider_token: '<PROVIDER_TOKEN>',
   *       provider_refresh_token: '<PROVIDER_REFRESH_TOKEN>'
   *     },
   *     user: {
   *       id: '11111111-1111-1111-1111-111111111111',
   *       aud: 'authenticated',
   *       role: 'authenticated',
   *       email: 'example@email.com',
   *       email_confirmed_at: '2024-01-01T00:00:00Z',
   *       phone: '',
   *       confirmation_sent_at: '2024-01-01T00:00:00Z',
   *       confirmed_at: '2024-01-01T00:00:00Z',
   *       last_sign_in_at: '2024-01-01T00:00:00Z',
   *       app_metadata: {
   *         provider: 'email',
   *         providers: [
   *           "email",
   *           "<OTHER_PROVIDER>"
   *         ]
   *       },
   *       user_metadata: {
   *         email: 'email@email.com',
   *         email_verified: true,
   *         full_name: 'User Name',
   *         iss: '<ISS>',
   *         name: 'User Name',
   *         phone_verified: false,
   *         provider_id: '<PROVIDER_ID>',
   *         sub: '<SUB>'
   *       },
   *       identities: [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "email@example.com"
   *         },
   *         {
   *           "identity_id": "33333333-3333-3333-3333-333333333333",
   *           "id": "<ID>",
   *           "user_id": "<USER_ID>",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": true,
   *             "full_name": "User Name",
   *             "iss": "<ISS>",
   *             "name": "User Name",
   *             "phone_verified": false,
   *             "provider_id": "<PROVIDER_ID>",
   *             "sub": "<SUB>"
   *           },
   *           "provider": "<PROVIDER>",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       created_at: '2024-01-01T00:00:00Z',
   *       updated_at: '2024-01-01T00:00:00Z',
   *       is_anonymous: false
   *     },
   *     redirectType: null
   *   },
   *   "error": null
   * }
   * ```
   */
  async exchangeCodeForSession(e, n) {
    return await this.initializePromise, this.lock != null ? this._acquireLock(this.lockAcquireTimeout, async () => this._exchangeCodeForSession(e, n)) : this._exchangeCodeForSession(e, n);
  }
  /**
   * Signs in a user by verifying a message signed by the user's private key.
   * Supports Ethereum (via Sign-In-With-Ethereum) & Solana (Sign-In-With-Solana) standards,
   * both of which derive from the EIP-4361 standard
   * With slight variation on Solana's side.
   * @reference https://eips.ethereum.org/EIPS/eip-4361
   *
   * @category Auth
   *
   * @remarks
   * - Uses a Web3 (Ethereum, Solana) wallet to sign a user in.
   * - Read up on the [potential for abuse](/docs/guides/auth/auth-web3#potential-for-abuse) before using it.
   *
   * @example Sign in with Solana or Ethereum (Window API)
   * ```js
   *   // uses window.ethereum for the wallet
   *   const { data, error } = await supabase.auth.signInWithWeb3({
   *     chain: 'ethereum',
   *     statement: 'I accept the Terms of Service at https://example.com/tos'
   *   })
   *
   *   // uses window.solana for the wallet
   *   const { data, error } = await supabase.auth.signInWithWeb3({
   *     chain: 'solana',
   *     statement: 'I accept the Terms of Service at https://example.com/tos'
   *   })
   * ```
   *
   * @example Sign in with Ethereum (Message and Signature)
   * ```js
   *   const { data, error } = await supabase.auth.signInWithWeb3({
   *     chain: 'ethereum',
   *     message: '<sign in with ethereum message>',
   *     signature: '<hex of the ethereum signature over the message>',
   *   })
   * ```
   *
   * @example Sign in with Solana (Brave)
   * ```js
   *   const { data, error } = await supabase.auth.signInWithWeb3({
   *     chain: 'solana',
   *     statement: 'I accept the Terms of Service at https://example.com/tos',
   *     wallet: window.braveSolana
   *   })
   * ```
   *
   * @example Sign in with Solana (Wallet Adapter)
   * ```jsx
   *   function SignInButton() {
   *   const wallet = useWallet()
   *
   *   return (
   *     <>
   *       {wallet.connected ? (
   *         <button
   *           onClick={() => {
   *             supabase.auth.signInWithWeb3({
   *               chain: 'solana',
   *               statement: 'I accept the Terms of Service at https://example.com/tos',
   *               wallet,
   *             })
   *           }}
   *         >
   *           Sign in with Solana
   *         </button>
   *       ) : (
   *         <WalletMultiButton />
   *       )}
   *     </>
   *   )
   * }
   *
   * function App() {
   *   const endpoint = clusterApiUrl('devnet')
   *   const wallets = useMemo(() => [], [])
   *
   *   return (
   *     <ConnectionProvider endpoint={endpoint}>
   *       <WalletProvider wallets={wallets}>
   *         <WalletModalProvider>
   *           <SignInButton />
   *         </WalletModalProvider>
   *       </WalletProvider>
   *     </ConnectionProvider>
   *   )
   * }
   * ```
   */
  async signInWithWeb3(e) {
    const { chain: n } = e;
    switch (n) {
      case "ethereum":
        return await this.signInWithEthereum(e);
      case "solana":
        return await this.signInWithSolana(e);
      default:
        throw new Error(`@supabase/auth-js: Unsupported chain "${n}"`);
    }
  }
  async signInWithEthereum(e) {
    var n, r, i, s, a, o, l, u, h, c, f;
    let d, p;
    if ("message" in e)
      d = e.message, p = e.signature;
    else {
      const { chain: y, wallet: v, statement: w, options: k } = e;
      let _;
      if (J())
        if (typeof v == "object")
          _ = v;
        else {
          const U = window;
          if ("ethereum" in U && typeof U.ethereum == "object" && "request" in U.ethereum && typeof U.ethereum.request == "function")
            _ = U.ethereum;
          else
            throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof v != "object" || !(k != null && k.url))
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        _ = v;
      }
      const x = new URL((n = k == null ? void 0 : k.url) !== null && n !== void 0 ? n : window.location.href), A = await _.request({
        method: "eth_requestAccounts"
      }).then((U) => U).catch(() => {
        throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid");
      });
      if (!A || A.length === 0)
        throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");
      const b = as(A[0]);
      let R = (r = k == null ? void 0 : k.signInWithEthereum) === null || r === void 0 ? void 0 : r.chainId;
      if (!R) {
        const U = await _.request({
          method: "eth_chainId"
        });
        R = fh(U);
      }
      const D = {
        domain: x.host,
        address: b,
        statement: w,
        uri: x.href,
        version: "1",
        chainId: R,
        nonce: (i = k == null ? void 0 : k.signInWithEthereum) === null || i === void 0 ? void 0 : i.nonce,
        issuedAt: (a = (s = k == null ? void 0 : k.signInWithEthereum) === null || s === void 0 ? void 0 : s.issuedAt) !== null && a !== void 0 ? a : /* @__PURE__ */ new Date(),
        expirationTime: (o = k == null ? void 0 : k.signInWithEthereum) === null || o === void 0 ? void 0 : o.expirationTime,
        notBefore: (l = k == null ? void 0 : k.signInWithEthereum) === null || l === void 0 ? void 0 : l.notBefore,
        requestId: (u = k == null ? void 0 : k.signInWithEthereum) === null || u === void 0 ? void 0 : u.requestId,
        resources: (h = k == null ? void 0 : k.signInWithEthereum) === null || h === void 0 ? void 0 : h.resources
      };
      d = gh(D), p = await _.request({
        method: "personal_sign",
        params: [ph(d), b]
      });
    }
    try {
      const { data: y, error: v } = await C(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({
          chain: "ethereum",
          message: d,
          signature: p
        }, !((c = e.options) === null || c === void 0) && c.captchaToken ? { gotrue_meta_security: { captcha_token: (f = e.options) === null || f === void 0 ? void 0 : f.captchaToken } } : null),
        xform: le
      });
      if (v)
        throw v;
      if (!y || !y.session || !y.user) {
        const w = new Be();
        return this._returnResult({ data: { user: null, session: null }, error: w });
      }
      return y.session && (await this._saveSession(y.session), await this._notifyAllSubscribers("SIGNED_IN", y.session)), this._returnResult({ data: Object.assign({}, y), error: v });
    } catch (y) {
      if (T(y))
        return this._returnResult({ data: { user: null, session: null }, error: y });
      throw y;
    }
  }
  async signInWithSolana(e) {
    var n, r, i, s, a, o, l, u, h, c, f, d;
    let p, y;
    if ("message" in e)
      p = e.message, y = e.signature;
    else {
      const { chain: v, wallet: w, statement: k, options: _ } = e;
      let x;
      if (J())
        if (typeof w == "object")
          x = w;
        else {
          const b = window;
          if ("solana" in b && typeof b.solana == "object" && ("signIn" in b.solana && typeof b.solana.signIn == "function" || "signMessage" in b.solana && typeof b.solana.signMessage == "function"))
            x = b.solana;
          else
            throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof w != "object" || !(_ != null && _.url))
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        x = w;
      }
      const A = new URL((n = _ == null ? void 0 : _.url) !== null && n !== void 0 ? n : window.location.href);
      if ("signIn" in x && x.signIn) {
        const b = await x.signIn(Object.assign(Object.assign(Object.assign({ issuedAt: (/* @__PURE__ */ new Date()).toISOString() }, _ == null ? void 0 : _.signInWithSolana), {
          // non-overridable properties
          version: "1",
          domain: A.host,
          uri: A.href
        }), k ? { statement: k } : null));
        let R;
        if (Array.isArray(b) && b[0] && typeof b[0] == "object")
          R = b[0];
        else if (b && typeof b == "object" && "signedMessage" in b && "signature" in b)
          R = b;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
        if ("signedMessage" in R && "signature" in R && (typeof R.signedMessage == "string" || R.signedMessage instanceof Uint8Array) && R.signature instanceof Uint8Array)
          p = typeof R.signedMessage == "string" ? R.signedMessage : new TextDecoder().decode(R.signedMessage), y = R.signature;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
      } else {
        if (!("signMessage" in x) || typeof x.signMessage != "function" || !("publicKey" in x) || typeof x != "object" || !x.publicKey || !("toBase58" in x.publicKey) || typeof x.publicKey.toBase58 != "function")
          throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
        p = [
          `${A.host} wants you to sign in with your Solana account:`,
          x.publicKey.toBase58(),
          ...k ? ["", k, ""] : [""],
          "Version: 1",
          `URI: ${A.href}`,
          `Issued At: ${(i = (r = _ == null ? void 0 : _.signInWithSolana) === null || r === void 0 ? void 0 : r.issuedAt) !== null && i !== void 0 ? i : (/* @__PURE__ */ new Date()).toISOString()}`,
          ...!((s = _ == null ? void 0 : _.signInWithSolana) === null || s === void 0) && s.notBefore ? [`Not Before: ${_.signInWithSolana.notBefore}`] : [],
          ...!((a = _ == null ? void 0 : _.signInWithSolana) === null || a === void 0) && a.expirationTime ? [`Expiration Time: ${_.signInWithSolana.expirationTime}`] : [],
          ...!((o = _ == null ? void 0 : _.signInWithSolana) === null || o === void 0) && o.chainId ? [`Chain ID: ${_.signInWithSolana.chainId}`] : [],
          ...!((l = _ == null ? void 0 : _.signInWithSolana) === null || l === void 0) && l.nonce ? [`Nonce: ${_.signInWithSolana.nonce}`] : [],
          ...!((u = _ == null ? void 0 : _.signInWithSolana) === null || u === void 0) && u.requestId ? [`Request ID: ${_.signInWithSolana.requestId}`] : [],
          ...!((c = (h = _ == null ? void 0 : _.signInWithSolana) === null || h === void 0 ? void 0 : h.resources) === null || c === void 0) && c.length ? [
            "Resources",
            ..._.signInWithSolana.resources.map((R) => `- ${R}`)
          ] : []
        ].join(`
`);
        const b = await x.signMessage(new TextEncoder().encode(p), "utf8");
        if (!b || !(b instanceof Uint8Array))
          throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
        y = b;
      }
    }
    try {
      const { data: v, error: w } = await C(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({ chain: "solana", message: p, signature: We(y) }, !((f = e.options) === null || f === void 0) && f.captchaToken ? { gotrue_meta_security: { captcha_token: (d = e.options) === null || d === void 0 ? void 0 : d.captchaToken } } : null),
        xform: le
      });
      if (w)
        throw w;
      if (!v || !v.session || !v.user) {
        const k = new Be();
        return this._returnResult({ data: { user: null, session: null }, error: k });
      }
      return v.session && (await this._saveSession(v.session), await this._notifyAllSubscribers("SIGNED_IN", v.session)), this._returnResult({ data: Object.assign({}, v), error: w });
    } catch (v) {
      if (T(v))
        return this._returnResult({ data: { user: null, session: null }, error: v });
      throw v;
    }
  }
  async _exchangeCodeForSession(e, n) {
    const r = (n == null ? void 0 : n.flowId) != null, i = r ? Wt(n == null ? void 0 : n.flowId) : J() ? Wt(Pr(window.location.href)[He]) : null;
    r && !i && this._debug("#_exchangeCodeForSession()", "provided flowId is not a valid flow id", n == null ? void 0 : n.flowId);
    const { verifier: s, flowId: a } = r && !i ? { verifier: null, flowId: null } : await Yc(this.storage, this.storageKey, i), [o, l] = (s ?? "").split("/");
    try {
      if (!o && this.flowType === "pkce")
        throw new Zi();
      const { data: u, error: h } = await C(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: e,
          code_verifier: o
        },
        xform: le
      });
      if (await pe(this.storage, this.storageKey, a), h)
        throw h;
      if (!u || !u.session || !u.user) {
        const c = new Be();
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: c
        });
      }
      return u.session && (await this._saveSession(u.session), await this._notifyAllSubscribers(l === "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", u.session)), this._returnResult({ data: Object.assign(Object.assign({}, u), { redirectType: l ?? null }), error: h });
    } catch (u) {
      if (await pe(this.storage, this.storageKey, a), T(u))
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: u
        });
      throw u;
    }
  }
  /**
   * Allows signing in with an OIDC ID token. The authentication provider used
   * should be enabled and configured.
   *
   * @category Auth
   *
   * @remarks
   * - Use an ID token to sign in.
   * - Especially useful when implementing sign in using native platform dialogs in mobile or desktop apps using Sign in with Apple or Sign in with Google on iOS and Android.
   * - You can also use Google's [One Tap](https://developers.google.com/identity/gsi/web/guides/display-google-one-tap) and [Automatic sign-in](https://developers.google.com/identity/gsi/web/guides/automatic-sign-in-sign-out) via this API.
   *
   * @example Sign In using ID Token
   * ```js
   * const { data, error } = await supabase.auth.signInWithIdToken({
   *   provider: 'google',
   *   token: 'your-id-token'
   * })
   * ```
   *
   * @exampleResponse Sign In using ID Token
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         ...
   *       },
   *       "user_metadata": {
   *         ...
   *       },
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "provider": "google",
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *     },
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "token_type": "bearer",
   *       "expires_in": 3600,
   *       "expires_at": 1700000000,
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "app_metadata": {
   *           ...
   *         },
   *         "user_metadata": {
   *           ...
   *         },
   *         "identities": [
   *           {
   *             "identity_id": "22222222-2222-2222-2222-222222222222",
   *             "provider": "google",
   *           }
   *         ],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z",
   *       }
   *     }
   *   },
   *   "error": null
   * }
   * ```
   */
  async signInWithIdToken(e) {
    try {
      const { options: n, provider: r, token: i, access_token: s, nonce: a } = e, o = await C(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: r,
          id_token: i,
          access_token: s,
          nonce: a,
          gotrue_meta_security: { captcha_token: n == null ? void 0 : n.captchaToken }
        },
        xform: le
      }), { data: l, error: u } = o;
      if (u)
        return this._returnResult({ data: { user: null, session: null }, error: u });
      if (!l || !l.session || !l.user) {
        const h = new Be();
        return this._returnResult({ data: { user: null, session: null }, error: h });
      }
      return l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("SIGNED_IN", l.session)), this._returnResult({ data: l, error: u });
    } catch (n) {
      if (T(n))
        return this._returnResult({ data: { user: null, session: null }, error: n });
      throw n;
    }
  }
  /**
   * Log in a user using magiclink or a one-time password (OTP).
   *
   * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
   * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
   * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or, that the account
   * can only be accessed via social login.
   *
   * Do note that you will need to configure a Whatsapp sender on Twilio
   * if you are using phone sign in with the 'whatsapp' channel. The whatsapp
   * channel is not supported on other providers
   * at this time.
   * This method supports PKCE when an email is passed.
   *
   * @category Auth
   *
   * @remarks
   * - Requires either an email or phone number.
   * - This method is used for passwordless sign-ins where a OTP is sent to the user's email or phone number.
   * - If the user doesn't exist, `signInWithOtp()` will signup the user instead. To restrict this behavior, you can set `shouldCreateUser` in `SignInWithPasswordlessCredentials.options` to `false`.
   * - If you're using an email, you can configure whether you want the user to receive a magiclink or a OTP.
   * - If you're using phone, you can configure whether you want the user to receive a OTP.
   * - The magic link's destination URL is determined by the [`SITE_URL`](/docs/guides/auth/redirect-urls#use-wildcards-in-redirect-urls).
   * - See [redirect URLs and wildcards](/docs/guides/auth/redirect-urls#use-wildcards-in-redirect-urls) to add additional redirect URLs to your project.
   * - Magic links and OTPs share the same implementation. To send users a one-time code instead of a magic link, [modify the magic link email template](/dashboard/project/_/auth/templates) to include `{{ .Token }}` instead of `{{ .ConfirmationURL }}`.
   * - See our [Twilio Phone Auth Guide](/docs/guides/auth/phone-login?showSMSProvider=Twilio) for details about configuring WhatsApp sign in.
   *
   * @exampleDescription Sign in with email
   * The user will be sent an email which contains either a magiclink or a OTP or both. By default, a given user can only request a OTP once every 60 seconds.
   *
   * @example Sign in with email
   * ```js
   * const { data, error } = await supabase.auth.signInWithOtp({
   *   email: 'example@email.com',
   *   options: {
   *     emailRedirectTo: 'https://example.com/welcome'
   *   }
   * })
   * ```
   *
   * @exampleResponse Sign in with email
   * ```json
   * {
   *   "data": {
   *     "user": null,
   *     "session": null
   *   },
   *   "error": null
   * }
   * ```
   *
   * @exampleDescription Sign in with SMS OTP
   * The user will be sent a SMS which contains a OTP. By default, a given user can only request a OTP once every 60 seconds.
   *
   * @example Sign in with SMS OTP
   * ```js
   * const { data, error } = await supabase.auth.signInWithOtp({
   *   phone: '+13334445555',
   * })
   * ```
   *
   * @exampleDescription Sign in with WhatsApp OTP
   * The user will be sent a WhatsApp message which contains a OTP. By default, a given user can only request a OTP once every 60 seconds. Note that a user will need to have a valid WhatsApp account that is linked to Twilio in order to use this feature.
   *
   * @example Sign in with WhatsApp OTP
   * ```js
   * const { data, error } = await supabase.auth.signInWithOtp({
   *   phone: '+13334445555',
   *   options: {
   *     channel:'whatsapp',
   *   }
   * })
   * ```
   */
  async signInWithOtp(e) {
    var n, r, i, s, a;
    let o = null;
    try {
      if ("email" in e) {
        const { email: l, options: u } = e;
        let h = null, c = null;
        this.flowType === "pkce" && ([h, c, o] = await this._getCodeChallengeAndMethod());
        const { error: f } = await C(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: l,
            data: (n = u == null ? void 0 : u.data) !== null && n !== void 0 ? n : {},
            create_user: (r = u == null ? void 0 : u.shouldCreateUser) !== null && r !== void 0 ? r : !0,
            gotrue_meta_security: { captcha_token: u == null ? void 0 : u.captchaToken },
            code_challenge: h,
            code_challenge_method: c
          },
          redirectTo: this._maybeAppendFlowIdToRedirect(u == null ? void 0 : u.emailRedirectTo, o)
        });
        return this._returnResult({ data: { user: null, session: null }, error: f });
      }
      if ("phone" in e) {
        const { phone: l, options: u } = e, { data: h, error: c } = await C(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: l,
            data: (i = u == null ? void 0 : u.data) !== null && i !== void 0 ? i : {},
            create_user: (s = u == null ? void 0 : u.shouldCreateUser) !== null && s !== void 0 ? s : !0,
            gotrue_meta_security: { captcha_token: u == null ? void 0 : u.captchaToken },
            channel: (a = u == null ? void 0 : u.channel) !== null && a !== void 0 ? a : "sms"
          }
        });
        return this._returnResult({
          data: { user: null, session: null, messageId: h == null ? void 0 : h.message_id },
          error: c
        });
      }
      throw new _t("You must provide either an email or phone number.");
    } catch (l) {
      if (await pe(this.storage, this.storageKey, o), T(l))
        return this._returnResult({ data: { user: null, session: null }, error: l });
      throw l;
    }
  }
  /**
   * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
   *
   * @category Auth
   *
   * @remarks
   * - The `verifyOtp` method takes in different verification types.
   * - If a phone number is used, the type can either be:
   *   1. `sms` – Used when verifying a one-time password (OTP) sent via SMS during sign-up or sign-in.
   *   2. `phone_change` – Used when verifying an OTP sent to a new phone number during a phone number update process.
   * - If an email address is used, the type can be one of the following (note: `signup` and `magiclink` types are deprecated):
   *   1. `email` – Used when verifying an OTP sent to the user's email during sign-up or sign-in.
   *   2. `recovery` – Used when verifying an OTP sent for account recovery, typically after a password reset request.
   *   3. `invite` – Used when verifying an OTP sent as part of an invitation to join a project or organization.
   *   4. `email_change` – Used when verifying an OTP sent to a new email address during an email update process.
   * - The verification type used should be determined based on the corresponding auth method called before `verifyOtp` to sign up / sign-in a user.
   * - The `TokenHash` is contained in the [email templates](/docs/guides/auth/auth-email-templates) and can be used to sign in.  You may wish to use the hash for the PKCE flow for Server Side Auth. Read [the Password-based Auth guide](/docs/guides/auth/passwords) for more details.
   *
   * @example Verify Signup One-Time Password (OTP)
   * ```js
   * const { data, error } = await supabase.auth.verifyOtp({ email, token, type: 'email'})
   * ```
   *
   * @exampleResponse Verify Signup One-Time Password (OTP)
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "confirmed_at": "2024-01-01T00:00:00Z",
   *       "recovery_sent_at": "2024-01-01T00:00:00Z",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {
   *         "email": "example@email.com",
   *         "email_verified": false,
   *         "phone_verified": false,
   *         "sub": "11111111-1111-1111-1111-111111111111"
   *       },
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     },
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "token_type": "bearer",
   *       "expires_in": 3600,
   *       "expires_at": 1700000000,
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "email": "example@email.com",
   *         "email_confirmed_at": "2024-01-01T00:00:00Z",
   *         "phone": "",
   *         "confirmed_at": "2024-01-01T00:00:00Z",
   *         "recovery_sent_at": "2024-01-01T00:00:00Z",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "app_metadata": {
   *           "provider": "email",
   *           "providers": [
   *             "email"
   *           ]
   *         },
   *         "user_metadata": {
   *           "email": "example@email.com",
   *           "email_verified": false,
   *           "phone_verified": false,
   *           "sub": "11111111-1111-1111-1111-111111111111"
   *         },
   *         "identities": [
   *           {
   *             "identity_id": "22222222-2222-2222-2222-222222222222",
   *             "id": "11111111-1111-1111-1111-111111111111",
   *             "user_id": "11111111-1111-1111-1111-111111111111",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": false,
   *               "phone_verified": false,
   *               "sub": "11111111-1111-1111-1111-111111111111"
   *             },
   *             "provider": "email",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "example@email.com"
   *           }
   *         ],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z",
   *         "is_anonymous": false
   *       }
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Verify SMS One-Time Password (OTP)
   * ```js
   * const { data, error } = await supabase.auth.verifyOtp({ phone, token, type: 'sms'})
   * ```
   *
   * @example Verify Email Auth (Token Hash)
   * ```js
   * const { data, error } = await supabase.auth.verifyOtp({ token_hash: tokenHash, type: 'email'})
   * ```
   */
  async verifyOtp(e) {
    var n, r;
    try {
      let i, s;
      "options" in e && (i = (n = e.options) === null || n === void 0 ? void 0 : n.redirectTo, s = (r = e.options) === null || r === void 0 ? void 0 : r.captchaToken);
      const { data: a, error: o } = await C(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, e), { gotrue_meta_security: { captcha_token: s } }),
        redirectTo: i,
        xform: le
      });
      if (o)
        throw o;
      if (!a)
        throw new Error("An error occurred on token verification.");
      const l = a.session, u = a.user;
      return l != null && l.access_token && (await this._saveSession(l), await this._notifyAllSubscribers(e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)), this._returnResult({ data: { user: u, session: l }, error: null });
    } catch (i) {
      if (T(i))
        return this._returnResult({ data: { user: null, session: null }, error: i });
      throw i;
    }
  }
  /**
   * Attempts a single-sign on using an enterprise Identity Provider. A
   * successful SSO attempt will redirect the current page to the identity
   * provider authorization page. The redirect URL is implementation and SSO
   * protocol specific.
   *
   * You can use it by providing a SSO domain. Typically you can extract this
   * domain by asking users for their email address. If this domain is
   * registered on the Auth instance the redirect will use that organization's
   * currently active SSO Identity Provider for the login.
   *
   * If you have built an organization-specific login page, you can use the
   * organization's SSO Identity Provider UUID directly instead.
   *
   * @category Auth
   *
   * @remarks
   * - Before you can call this method you need to [establish a connection](/docs/guides/auth/sso/auth-sso-saml#managing-saml-20-connections) to an identity provider. Use the [CLI commands](/docs/reference/cli/supabase-sso) to do this.
   * - If you've associated an email domain to the identity provider, you can use the `domain` property to start a sign-in flow.
   * - In case you need to use a different way to start the authentication flow with an identity provider, you can use the `providerId` property. For example:
   *     - Mapping specific user email addresses with an identity provider.
   *     - Using different hints to identity the identity provider to be used by the user, like a company-specific page, IP address or other tracking information.
   *
   * @example Sign in with email domain
   * ```js
   *   // You can extract the user's email domain and use it to trigger the
   *   // authentication flow with the correct identity provider.
   *
   *   const { data, error } = await supabase.auth.signInWithSSO({
   *     domain: 'company.com'
   *   })
   *
   *   if (data?.url) {
   *     // redirect the user to the identity provider's authentication flow
   *     window.location.href = data.url
   *   }
   * ```
   *
   * @example Sign in with provider UUID
   * ```js
   *   // Useful when you need to map a user's sign in request according
   *   // to different rules that can't use email domains.
   *
   *   const { data, error } = await supabase.auth.signInWithSSO({
   *     providerId: '21648a9d-8d5a-4555-a9d1-d6375dc14e92'
   *   })
   *
   *   if (data?.url) {
   *     // redirect the user to the identity provider's authentication flow
   *     window.location.href = data.url
   *   }
   * ```
   */
  async signInWithSSO(e) {
    var n, r, i, s;
    let a = null;
    try {
      let o = null, l = null;
      this.flowType === "pkce" && ([o, l, a] = await this._getCodeChallengeAndMethod());
      const u = await C(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? { provider_id: e.providerId } : null), "domain" in e ? { domain: e.domain } : null), { redirect_to: this._maybeAppendFlowIdToRedirect((n = e.options) === null || n === void 0 ? void 0 : n.redirectTo, a) }), !((r = e == null ? void 0 : e.options) === null || r === void 0) && r.captchaToken ? { gotrue_meta_security: { captcha_token: e.options.captchaToken } } : null), { skip_http_redirect: !0, code_challenge: o, code_challenge_method: l }),
        headers: this.headers,
        xform: lh
      });
      return !((i = u.data) === null || i === void 0) && i.url && J() && !(!((s = e.options) === null || s === void 0) && s.skipBrowserRedirect) && window.location.assign(u.data.url), this._returnResult(u);
    } catch (o) {
      if (await pe(this.storage, this.storageKey, a), T(o))
        return this._returnResult({ data: null, error: o });
      throw o;
    }
  }
  /**
   * Sends a reauthentication OTP to the user's email or phone number.
   * Requires the user to be signed-in.
   *
   * @category Auth
   *
   * @remarks
   * - This method is used together with `updateUser()` when a user's password needs to be updated.
   * - If you require your user to reauthenticate before updating their password, you need to enable the **Secure password change** option in your [project's email provider settings](/dashboard/project/_/auth/providers).
   * - A user is only require to reauthenticate before updating their password if **Secure password change** is enabled and the user **hasn't recently signed in**. A user is deemed recently signed in if the session was created in the last 24 hours.
   * - This method will send a nonce to the user's email. If the user doesn't have a confirmed email address, the method will send the nonce to the user's confirmed phone number instead.
   * - After receiving the OTP, include it as the `nonce` in your `updateUser()` call to finalize the password change.
   *
   * @exampleDescription Send reauthentication nonce
   * Sends a reauthentication nonce to the user's email or phone number.
   *
   * @example Send reauthentication nonce
   * ```js
   * const { error } = await supabase.auth.reauthenticate()
   * ```
   */
  async reauthenticate() {
    return await this.initializePromise, this.lock != null ? await this._acquireLock(this.lockAcquireTimeout, async () => await this._reauthenticate()) : await this._reauthenticate();
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (e) => {
        const { data: { session: n }, error: r } = e;
        if (r)
          throw r;
        if (!n)
          throw new V();
        const { error: i } = await C(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: n.access_token
        });
        return this._returnResult({ data: { user: null, session: null }, error: i });
      });
    } catch (e) {
      if (T(e))
        return this._returnResult({ data: { user: null, session: null }, error: e });
      throw e;
    }
  }
  /**
   * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
   *
   * @category Auth
   *
   * @remarks
   * - Resends a signup confirmation, email change or phone change email to the user.
   * - Passwordless sign-ins can be resent by calling the `signInWithOtp()` method again.
   * - Password recovery emails can be resent by calling the `resetPasswordForEmail()` method again.
   * - This method will only resend an email or phone OTP to the user if there was an initial signup, email change or phone change request being made(note: For existing users signing in with OTP, you should use `signInWithOtp()` again to resend the OTP).
   * - You can specify a redirect url when you resend an email link using the `emailRedirectTo` option.
   *
   * @exampleDescription Resend an email signup confirmation
   * Resends the email signup confirmation to the user
   *
   * @example Resend an email signup confirmation
   * ```js
   * const { error } = await supabase.auth.resend({
   *   type: 'signup',
   *   email: 'email@example.com',
   *   options: {
   *     emailRedirectTo: 'https://example.com/welcome'
   *   }
   * })
   * ```
   *
   * @exampleDescription Resend a phone signup confirmation
   * Resends the phone signup confirmation email to the user
   *
   * @example Resend a phone signup confirmation
   * ```js
   * const { error } = await supabase.auth.resend({
   *   type: 'sms',
   *   phone: '1234567890'
   * })
   * ```
   *
   * @exampleDescription Resend email change email
   * Resends the email change email to the user
   *
   * @example Resend email change email
   * ```js
   * const { error } = await supabase.auth.resend({
   *   type: 'email_change',
   *   email: 'email@example.com'
   * })
   * ```
   *
   * @exampleDescription Resend phone change OTP
   * Resends the phone change OTP to the user
   *
   * @example Resend phone change OTP
   * ```js
   * const { error } = await supabase.auth.resend({
   *   type: 'phone_change',
   *   phone: '1234567890'
   * })
   * ```
   */
  async resend(e) {
    let n = null;
    try {
      const r = `${this.url}/resend`;
      if ("email" in e) {
        const { email: i, type: s, options: a } = e;
        let o = null, l = null;
        this.flowType === "pkce" && ([o, l, n] = await this._getCodeChallengeAndMethod());
        const { error: u } = await C(this.fetch, "POST", r, {
          headers: this.headers,
          body: {
            email: i,
            type: s,
            gotrue_meta_security: { captcha_token: a == null ? void 0 : a.captchaToken },
            code_challenge: o,
            code_challenge_method: l
          },
          redirectTo: this._maybeAppendFlowIdToRedirect(a == null ? void 0 : a.emailRedirectTo, n)
        });
        return u && await pe(this.storage, this.storageKey, n), this._returnResult({ data: { user: null, session: null }, error: u });
      } else if ("phone" in e) {
        const { phone: i, type: s, options: a } = e, { data: o, error: l } = await C(this.fetch, "POST", r, {
          headers: this.headers,
          body: {
            phone: i,
            type: s,
            gotrue_meta_security: { captcha_token: a == null ? void 0 : a.captchaToken }
          }
        });
        return this._returnResult({
          data: { user: null, session: null, messageId: o == null ? void 0 : o.message_id },
          error: l
        });
      }
      throw new _t("You must provide either an email or phone number and a type");
    } catch (r) {
      if (await pe(this.storage, this.storageKey, n), T(r))
        return this._returnResult({ data: { user: null, session: null }, error: r });
      throw r;
    }
  }
  /**
   * Returns the session, refreshing it if necessary.
   *
   * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
   *
   * **IMPORTANT:** This method loads values directly from the storage attached
   * to the client. If that storage is based on request cookies for example,
   * the values in it may not be authentic and therefore it's strongly advised
   * against using this method and its results in such circumstances. A warning
   * will be emitted if this is detected. Use {@link GoTrueClient.getUser} instead.
   *
   * @category Auth
   *
   * @remarks
   * - Since the introduction of [asymmetric JWT signing keys](/docs/guides/auth/signing-keys), this method is considered low-level and we encourage you to use `getClaims()` or `getUser()` instead.
   * - Retrieves the current [user session](/docs/guides/auth/sessions) from the storage medium (local storage, cookies).
   * - The session contains an access token (signed JWT), a refresh token and the user object.
   * - If the session's access token is expired or is about to expire, this method will use the refresh token to refresh the session.
   * - When using in a browser, or you've called `startAutoRefresh()` in your environment (React Native, etc.) this function always returns a valid access token without refreshing the session itself, as this is done in the background. This function returns very fast.
   * - **IMPORTANT SECURITY NOTICE:** If using an insecure storage medium, such as cookies or request headers, the user object returned by this function **must not be trusted**. Always verify the JWT using `getClaims()` or your own JWT verification library to securely establish the user's identity and access. You can also use `getUser()` to fetch the user object directly from the Auth server for this purpose.
   * - Cross-tab refresh races are handled by the GoTrue server (the rotated token from the first tab is returned to subsequent tabs via the parent-of-active mechanism), so no client-side serialization is needed.
   *
   * @example Get the session data
   * ```js
   * const { data, error } = await supabase.auth.getSession()
   * ```
   *
   * @exampleResponse Get the session data
   * ```json
   * {
   *   "data": {
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "token_type": "bearer",
   *       "expires_in": 3600,
   *       "expires_at": 1700000000,
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "email": "example@email.com",
   *         "email_confirmed_at": "2024-01-01T00:00:00Z",
   *         "phone": "",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "app_metadata": {
   *           "provider": "email",
   *           "providers": [
   *             "email"
   *           ]
   *         },
   *         "user_metadata": {
   *           "email": "example@email.com",
   *           "email_verified": false,
   *           "phone_verified": false,
   *           "sub": "11111111-1111-1111-1111-111111111111"
   *         },
   *         "identities": [
   *           {
   *             "identity_id": "22222222-2222-2222-2222-222222222222",
   *             "id": "11111111-1111-1111-1111-111111111111",
   *             "user_id": "11111111-1111-1111-1111-111111111111",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": false,
   *               "phone_verified": false,
   *               "sub": "11111111-1111-1111-1111-111111111111"
   *             },
   *             "provider": "email",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "example@email.com"
   *           }
   *         ],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z",
   *         "is_anonymous": false
   *       }
   *     }
   *   },
   *   "error": null
   * }
   * ```
   */
  async getSession() {
    return await this.initializePromise, this.lock != null ? await this._acquireLock(this.lockAcquireTimeout, async () => this._useSession(async (e) => e)) : await this._useSession(async (e) => e);
  }
  /**
   * Acquires a global lock based on the storage key.
   *
   * TODO(v3): remove along with the legacy lock path. Only called when
   * `this.lock` is non-null (custom lock supplied via constructor). The
   * default lockless path bypasses this entirely.
   */
  async _acquireLock(e, n) {
    this._debug("#_acquireLock", "begin", e);
    try {
      if (this.lockAcquired) {
        const r = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), i = (async () => (await r, await n()))();
        return this.pendingInLock.push((async () => {
          try {
            await i;
          } catch {
          }
        })()), i;
      }
      return await this.lock(`lock:${this.storageKey}`, e, async () => {
        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
        try {
          this.lockAcquired = !0;
          const r = n();
          for (this.pendingInLock.push((async () => {
            try {
              await r;
            } catch {
            }
          })()), await r; this.pendingInLock.length; ) {
            const i = [...this.pendingInLock];
            await Promise.all(i), this.pendingInLock.splice(0, i.length);
          }
          return await r;
        } finally {
          this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1;
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  /**
   * Use instead of {@link GoTrueClient.getSession} inside the library. Loads the session
   * via `__loadSession` (which may trigger a refresh if the access token is
   * within the expiry margin) and runs `fn` with the result.
   */
  async _useSession(e) {
    this._debug("#_useSession", "begin");
    try {
      const n = await this.__loadSession();
      return await e(n);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  /**
   * NEVER USE DIRECTLY!
   *
   * Always use `_useSession`.
   */
  async __loadSession() {
    this._debug("#__loadSession()", "begin"), this.lock != null && !this.lockAcquired && this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
    try {
      let e = null;
      const n = await Z(this.storage, this.storageKey);
      if (this._debug("#getSession()", "session from storage", n), n !== null && (this._isValidSession(n) ? e = n : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !e)
        return { data: { session: null }, error: null };
      const r = e.expires_at ? e.expires_at * 1e3 - Date.now() < bn : !1;
      if (this._debug("#__loadSession()", `session has${r ? "" : " not"} expired`, "expires_at", e.expires_at), !r)
        return { data: { session: await this._hydrateSessionUser(e) }, error: null };
      const { data: i, error: s } = await this._callRefreshToken(e.refresh_token);
      if (s) {
        const a = await Z(this.storage, this.storageKey);
        return a && this._isValidSession(a) && a.expires_at && a.expires_at * 1e3 > Date.now() ? this._returnResult({
          data: { session: await this._hydrateSessionUser(a) },
          error: null
        }) : this._returnResult({ data: { session: null }, error: s });
      }
      return this._returnResult({ data: { session: i }, error: null });
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  /**
   * Completes a session read back from storage so it matches what callers of
   * `getSession()` expect: fills in `session.user` from `userStorage` when the
   * client keeps the user in split storage, and wraps the user in the
   * insecure-access warning proxy on the server.
   */
  async _hydrateSessionUser(e) {
    if (this.userStorage) {
      const n = await Z(this.userStorage, this.storageKey + "-user");
      e.user = n != null && n.user ? n.user : vn();
    }
    if (this.storage.isServer && e.user && !e.user.__isUserNotAvailableProxy) {
      const n = { value: this.suppressGetSessionWarning };
      e.user = sh(e.user, n), n.value && (this.suppressGetSessionWarning = !0);
    }
    return e;
  }
  /**
   * Gets the current user details if there is an existing session. This method
   * performs a network request to the Supabase Auth server, so the returned
   * value is authentic and can be used to base authorization rules on.
   *
   * @param jwt Takes in an optional access token JWT. If no JWT is provided, the JWT from the current session is used.
   *
   * @category Auth
   *
   * @remarks
   * - This method fetches the user object from the database instead of local session.
   * - This method is useful for checking if the user is authorized because it validates the user's access token JWT on the server.
   * - Should always be used when checking for user authorization on the server. On the client, you can instead use `getSession().session.user` for faster results. `getSession` is insecure on the server.
   *
   * @example Get the logged in user with the current existing session
   * ```js
   * const { data: { user } } = await supabase.auth.getUser()
   * ```
   *
   * @exampleResponse Get the logged in user with the current existing session
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "confirmed_at": "2024-01-01T00:00:00Z",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {
   *         "email": "example@email.com",
   *         "email_verified": false,
   *         "phone_verified": false,
   *         "sub": "11111111-1111-1111-1111-111111111111"
   *       },
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Get the logged in user with a custom access token jwt
   * ```js
   * const { data: { user } } = await supabase.auth.getUser(jwt)
   * ```
   */
  async getUser(e) {
    if (e)
      return await this._getUser(e);
    await this.initializePromise;
    let n;
    return this.lock != null ? n = await this._acquireLock(this.lockAcquireTimeout, async () => await this._getUser()) : n = await this._getUser(), n.data.user && (this.suppressGetSessionWarning = !0), n;
  }
  async _getUser(e) {
    try {
      return e ? await C(this.fetch, "GET", `${this.url}/user`, {
        headers: this.headers,
        jwt: e,
        xform: De
      }) : await this._useSession(async (n) => {
        var r, i, s;
        const { data: a, error: o } = n;
        if (o)
          throw o;
        return !(!((r = a.session) === null || r === void 0) && r.access_token) && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new V() } : await C(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (s = (i = a.session) === null || i === void 0 ? void 0 : i.access_token) !== null && s !== void 0 ? s : void 0,
          xform: De
        });
      });
    } catch (n) {
      if (T(n))
        return vt(n) && await this._removeSession(), this._returnResult({ data: { user: null }, error: n });
      throw n;
    }
  }
  /**
   * Updates user data for a logged in user.
   *
   * @category Auth
   *
   * @remarks
   * - In order to use the `updateUser()` method, the user needs to be signed in first.
   * - By default, email updates sends a confirmation link to both the user's current and new email.
   * To only send a confirmation link to the user's new email, disable **Secure email change** in your project's [email auth provider settings](/dashboard/project/_/auth/providers).
   *
   * @exampleDescription Update the email for an authenticated user
   * Sends a "Confirm Email Change" email to the new address. If **Secure Email Change** is enabled (default), confirmation is also required from the **old email** before the change is applied. To skip dual confirmation and apply the change after only the new email is verified, disable **Secure Email Change** in the [Email Auth Provider settings](/dashboard/project/_/auth/providers?provider=Email).
   *
   * @example Update the email for an authenticated user
   * ```js
   * const { data, error } = await supabase.auth.updateUser({
   *   email: 'new@email.com'
   * })
   * ```
   *
   * @exampleResponse Update the email for an authenticated user
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "confirmed_at": "2024-01-01T00:00:00Z",
   *       "new_email": "new@email.com",
   *       "email_change_sent_at": "2024-01-01T00:00:00Z",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {
   *         "email": "example@email.com",
   *         "email_verified": false,
   *         "phone_verified": false,
   *         "sub": "11111111-1111-1111-1111-111111111111"
   *       },
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @exampleDescription Update the phone number for an authenticated user
   * Sends a one-time password (OTP) to the new phone number.
   *
   * @example Update the phone number for an authenticated user
   * ```js
   * const { data, error } = await supabase.auth.updateUser({
   *   phone: '123456789'
   * })
   * ```
   *
   * @example Update the password for an authenticated user
   * ```js
   * const { data, error } = await supabase.auth.updateUser({
   *   password: 'new password'
   * })
   * ```
   *
   * @exampleDescription Update the user's metadata
   * Updates the user's custom metadata.
   *
   * **Note**: The `data` field maps to the `auth.users.raw_user_meta_data` column in your Supabase database. When calling `getUser()`, the data will be available as `user.user_metadata`.
   *
   * @example Update the user's metadata
   * ```js
   * const { data, error } = await supabase.auth.updateUser({
   *   data: { hello: 'world' }
   * })
   * ```
   *
   * @exampleDescription Update the user's password with a nonce
   * If **Secure password change** is enabled in your [project's email provider settings](/dashboard/project/_/auth/providers), updating the user's password would require a nonce if the user **hasn't recently signed in**. The nonce is sent to the user's email or phone number. A user is deemed recently signed in if the session was created in the last 24 hours.
   *
   * @example Update the user's password with a nonce
   * ```js
   * const { data, error } = await supabase.auth.updateUser({
   *   password: 'new password',
   *   nonce: '123456'
   * })
   * ```
   */
  async updateUser(e, n = {}) {
    return await this.initializePromise, this.lock != null ? await this._acquireLock(this.lockAcquireTimeout, async () => await this._updateUser(e, n)) : await this._updateUser(e, n);
  }
  async _updateUser(e, n = {}) {
    let r = null;
    try {
      return await this._useSession(async (i) => {
        const { data: s, error: a } = i;
        if (a)
          throw a;
        if (!s.session)
          throw new V();
        const o = s.session;
        let l = null, u = null;
        this.flowType === "pkce" && e.email != null && ([l, u, r] = await this._getCodeChallengeAndMethod());
        const { data: h, error: c } = await C(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: this._maybeAppendFlowIdToRedirect(n == null ? void 0 : n.emailRedirectTo, r),
          body: Object.assign(Object.assign({}, e), { code_challenge: l, code_challenge_method: u }),
          jwt: o.access_token,
          xform: De
        });
        if (c)
          throw c;
        return o.user = h.user, await this._saveSession(o), await this._notifyAllSubscribers("USER_UPDATED", o), this._returnResult({ data: { user: o.user }, error: null });
      });
    } catch (i) {
      if (await pe(this.storage, this.storageKey, r), T(i))
        return this._returnResult({ data: { user: null }, error: i });
      throw i;
    }
  }
  /**
   * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
   * If the refresh token or access token in the current session is invalid, an error will be thrown.
   * @param currentSession The current session that minimally contains an access token and refresh token.
   *
   * @category Auth
   *
   * @remarks
   * - This method sets the session using an `access_token` and `refresh_token`.
   * - If successful, a `SIGNED_IN` event is emitted.
   *
   * @exampleDescription Set the session
   * Sets the session data from an access_token and refresh_token, then returns an auth response or error.
   *
   * @example Set the session
   * ```js
   *   const { data, error } = await supabase.auth.setSession({
   *     access_token,
   *     refresh_token
   *   })
   * ```
   *
   * @exampleResponse Set the session
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "confirmed_at": "2024-01-01T00:00:00Z",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {
   *         "email": "example@email.com",
   *         "email_verified": false,
   *         "phone_verified": false,
   *         "sub": "11111111-1111-1111-1111-111111111111"
   *       },
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     },
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "email": "example@email.com",
   *         "email_confirmed_at": "2024-01-01T00:00:00Z",
   *         "phone": "",
   *         "confirmed_at": "2024-01-01T00:00:00Z",
   *         "last_sign_in_at": "11111111-1111-1111-1111-111111111111",
   *         "app_metadata": {
   *           "provider": "email",
   *           "providers": [
   *             "email"
   *           ]
   *         },
   *         "user_metadata": {
   *           "email": "example@email.com",
   *           "email_verified": false,
   *           "phone_verified": false,
   *           "sub": "11111111-1111-1111-1111-111111111111"
   *         },
   *         "identities": [
   *           {
   *             "identity_id": "2024-01-01T00:00:00Z",
   *             "id": "11111111-1111-1111-1111-111111111111",
   *             "user_id": "11111111-1111-1111-1111-111111111111",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": false,
   *               "phone_verified": false,
   *               "sub": "11111111-1111-1111-1111-111111111111"
   *             },
   *             "provider": "email",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "example@email.com"
   *           }
   *         ],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z",
   *         "is_anonymous": false
   *       },
   *       "token_type": "bearer",
   *       "expires_in": 3500,
   *       "expires_at": 1700000000
   *     }
   *   },
   *   "error": null
   * }
   * ```
   */
  async setSession(e) {
    return await this.initializePromise, this.lock != null ? await this._acquireLock(this.lockAcquireTimeout, async () => await this._setSession(e)) : await this._setSession(e);
  }
  async _setSession(e) {
    try {
      if (!e.access_token || !e.refresh_token)
        throw new V();
      const n = Date.now() / 1e3;
      let r = n, i = !0, s = null;
      const { payload: a } = Mt(e.access_token);
      if (a.exp && (r = a.exp, i = r <= n), i) {
        const { data: o, error: l } = await this._callRefreshToken(e.refresh_token);
        if (l)
          return this._returnResult({ data: { user: null, session: null }, error: l });
        if (!o)
          return { data: { user: null, session: null }, error: null };
        s = o;
      } else {
        const { data: o, error: l } = await this._getUser(e.access_token);
        if (l)
          return this._returnResult({ data: { user: null, session: null }, error: l });
        s = {
          access_token: e.access_token,
          refresh_token: e.refresh_token,
          user: o.user,
          token_type: "bearer",
          expires_in: r - n,
          expires_at: r
        }, await this._saveSession(s), await this._notifyAllSubscribers("SIGNED_IN", s);
      }
      return this._returnResult({ data: { user: s.user, session: s }, error: null });
    } catch (n) {
      if (T(n))
        return this._returnResult({ data: { session: null, user: null }, error: n });
      throw n;
    }
  }
  /**
   * Returns a new session, regardless of expiry status.
   * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
   * If the current session's refresh token is invalid, an error will be thrown.
   * @param currentSession The current session. If passed in, it must contain a refresh token.
   *
   * @category Auth
   *
   * @remarks
   * - This method will refresh and return a new session whether the current one is expired or not.
   *
   * @example Refresh session using the current session
   * ```js
   * const { data, error } = await supabase.auth.refreshSession()
   * const { session, user } = data
   * ```
   *
   * @exampleResponse Refresh session using the current session
   * ```json
   * {
   *   "data": {
   *     "user": {
   *       "id": "11111111-1111-1111-1111-111111111111",
   *       "aud": "authenticated",
   *       "role": "authenticated",
   *       "email": "example@email.com",
   *       "email_confirmed_at": "2024-01-01T00:00:00Z",
   *       "phone": "",
   *       "confirmed_at": "2024-01-01T00:00:00Z",
   *       "last_sign_in_at": "2024-01-01T00:00:00Z",
   *       "app_metadata": {
   *         "provider": "email",
   *         "providers": [
   *           "email"
   *         ]
   *       },
   *       "user_metadata": {
   *         "email": "example@email.com",
   *         "email_verified": false,
   *         "phone_verified": false,
   *         "sub": "11111111-1111-1111-1111-111111111111"
   *       },
   *       "identities": [
   *         {
   *           "identity_id": "22222222-2222-2222-2222-222222222222",
   *           "id": "11111111-1111-1111-1111-111111111111",
   *           "user_id": "11111111-1111-1111-1111-111111111111",
   *           "identity_data": {
   *             "email": "example@email.com",
   *             "email_verified": false,
   *             "phone_verified": false,
   *             "sub": "11111111-1111-1111-1111-111111111111"
   *           },
   *           "provider": "email",
   *           "last_sign_in_at": "2024-01-01T00:00:00Z",
   *           "created_at": "2024-01-01T00:00:00Z",
   *           "updated_at": "2024-01-01T00:00:00Z",
   *           "email": "example@email.com"
   *         }
   *       ],
   *       "created_at": "2024-01-01T00:00:00Z",
   *       "updated_at": "2024-01-01T00:00:00Z",
   *       "is_anonymous": false
   *     },
   *     "session": {
   *       "access_token": "<ACCESS_TOKEN>",
   *       "token_type": "bearer",
   *       "expires_in": 3600,
   *       "expires_at": 1700000000,
   *       "refresh_token": "<REFRESH_TOKEN>",
   *       "user": {
   *         "id": "11111111-1111-1111-1111-111111111111",
   *         "aud": "authenticated",
   *         "role": "authenticated",
   *         "email": "example@email.com",
   *         "email_confirmed_at": "2024-01-01T00:00:00Z",
   *         "phone": "",
   *         "confirmed_at": "2024-01-01T00:00:00Z",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "app_metadata": {
   *           "provider": "email",
   *           "providers": [
   *             "email"
   *           ]
   *         },
   *         "user_metadata": {
   *           "email": "example@email.com",
   *           "email_verified": false,
   *           "phone_verified": false,
   *           "sub": "11111111-1111-1111-1111-111111111111"
   *         },
   *         "identities": [
   *           {
   *             "identity_id": "22222222-2222-2222-2222-222222222222",
   *             "id": "11111111-1111-1111-1111-111111111111",
   *             "user_id": "11111111-1111-1111-1111-111111111111",
   *             "identity_data": {
   *               "email": "example@email.com",
   *               "email_verified": false,
   *               "phone_verified": false,
   *               "sub": "11111111-1111-1111-1111-111111111111"
   *             },
   *             "provider": "email",
   *             "last_sign_in_at": "2024-01-01T00:00:00Z",
   *             "created_at": "2024-01-01T00:00:00Z",
   *             "updated_at": "2024-01-01T00:00:00Z",
   *             "email": "example@email.com"
   *           }
   *         ],
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z",
   *         "is_anonymous": false
   *       }
   *     }
   *   },
   *   "error": null
   * }
   * ```
   *
   * @example Refresh session using a refresh token
   * ```js
   * const { data, error } = await supabase.auth.refreshSession({ refresh_token })
   * const { session, user } = data
   * ```
   */
  async refreshSession(e) {
    return await this.initializePromise, this.lock != null ? await this._acquireLock(this.lockAcquireTimeout, async () => await this._refreshSession(e)) : await this._refreshSession(e);
  }
  async _refreshSession(e) {
    try {
      return await this._useSession(async (n) => {
        var r;
        if (!e) {
          const { data: a, error: o } = n;
          if (o)
            throw o;
          e = (r = a.session) !== null && r !== void 0 ? r : void 0;
        }
        if (!(e != null && e.refresh_token))
          throw new V();
        const { data: i, error: s } = await this._callRefreshToken(e.refresh_token);
        return s ? this._returnResult({ data: { user: null, session: null }, error: s }) : i ? this._returnResult({ data: { user: i.user, session: i }, error: null }) : this._returnResult({ data: { user: null, session: null }, error: null });
      });
    } catch (n) {
      if (T(n))
        return this._returnResult({ data: { user: null, session: null }, error: n });
      throw n;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(e, n) {
    var r;
    try {
      if (!J())
        throw new kt("No browser detected.");
      if (e.error || e.error_description || e.error_code)
        throw new kt(e.error_description || "Error in URL with unspecified error_description", {
          error: e.error || "unspecified_error",
          code: e.error_code || "unspecified_code"
        });
      switch (n) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new Fn("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new kt("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (n === "pkce") {
        if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !e.code)
          throw new Fn("No code detected.");
        const { data: _, error: x } = await this._exchangeCodeForSession(e.code, {
          flowId: e[He]
        });
        if (x)
          throw x;
        const A = new URL(window.location.href);
        return A.searchParams.delete("code"), A.searchParams.delete(He), window.history.replaceState(window.history.state, "", A.toString()), {
          data: { session: _.session, redirectType: (r = _.redirectType) !== null && r !== void 0 ? r : null },
          error: null
        };
      }
      const { provider_token: i, provider_refresh_token: s, access_token: a, refresh_token: o, expires_in: l, expires_at: u, token_type: h } = e;
      if (!a || !l || !o || !h)
        throw new kt("No session defined in URL");
      const c = Math.round(Date.now() / 1e3), f = parseInt(l);
      let d = c + f;
      u && (d = parseInt(u));
      const p = d - c;
      p * 1e3 <= Oe && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${p}s, should have been closer to ${f}s`);
      const y = d - f;
      c - y >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", y, d, c) : c - y < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", y, d, c);
      const { data: v, error: w } = await this._getUser(a);
      if (w)
        throw w;
      const k = {
        provider_token: i,
        provider_refresh_token: s,
        access_token: a,
        expires_in: f,
        expires_at: d,
        refresh_token: o,
        token_type: h,
        user: v.user
      };
      return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), this._returnResult({ data: { session: k, redirectType: e.type }, error: null });
    } catch (i) {
      if (T(i))
        return this._returnResult({ data: { session: null, redirectType: null }, error: i });
      throw i;
    }
  }
  /**
   * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
   *
   * If `detectSessionInUrl` is a function, it will be called with the URL and params to determine
   * if the URL should be processed as a Supabase auth callback. This allows users to exclude
   * URLs from other OAuth providers (e.g., Facebook Login) that also return access_token in the fragment.
   */
  _isImplicitGrantCallback(e) {
    return typeof this.detectSessionInUrl == "function" ? this.detectSessionInUrl(new URL(window.location.href), e) : !!(e.access_token || e.error || e.error_description || e.error_code);
  }
  /**
   * Checks if the current URL and backing storage contain parameters given by a PKCE flow
   */
  async _isPKCECallback(e) {
    if (!e.code)
      return !1;
    const n = Wt(e[He]);
    return n && await Z(this.storage, ct(this.storageKey, n)) ? !0 : !!await Z(this.storage, `${this.storageKey}-code-verifier`);
  }
  /**
   * Inside a browser context, `signOut()` will remove the logged in user from the browser session and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
   *
   * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
   * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
   *
   * If using `others` scope, no `SIGNED_OUT` event is fired!
   *
   * **Warning:** the default `scope` is `'global'`. This signs the user out of
   * **every device they are currently signed in on**, not just the current
   * tab/session. If you only want to sign the user out of the current session
   * (the behavior most other auth libraries default to), pass
   * `{ scope: 'local' }` explicitly.
   *
   * @category Auth
   *
   * @remarks
   * - In order to use the `signOut()` method, the user needs to be signed in first.
   * - By default, `signOut()` uses the **global** scope, which signs out the user
   *   on every device they are signed in on (not just the current one). Pass
   *   `{ scope: 'local' }` to only sign out the current session. This is
   *   usually what apps want on a "Sign out" button, especially when users
   *   sign in from multiple devices and do not expect signing out of one to
   *   terminate the others.
   * - Since Supabase Auth uses JWTs for authentication, the access token JWT will be valid until it's expired. When the user signs out, Supabase revokes the refresh token and deletes the JWT from the client-side. This does not revoke the JWT and it will still be valid until it expires.
   *
   * @example Sign out of every device (global – default)
   * ```js
   * const { error } = await supabase.auth.signOut()
   * ```
   *
   * @example Sign out only the current session (recommended for most apps)
   * ```js
   * const { error } = await supabase.auth.signOut({ scope: 'local' })
   * ```
   *
   * @example Sign out of all other sessions, keep the current one
   * ```js
   * const { error } = await supabase.auth.signOut({ scope: 'others' })
   * ```
   */
  async signOut(e = { scope: "global" }) {
    return await this.initializePromise, this.lock != null ? await this._acquireLock(this.lockAcquireTimeout, async () => await this._signOut(e)) : await this._signOut(e);
  }
  async _signOut({ scope: e } = { scope: "global" }) {
    return await this._useSession(async (n) => {
      var r;
      const i = async () => {
        await this._removeSession();
      }, { data: s, error: a } = n;
      if (a && !vt(a))
        return this._returnResult({ error: a });
      const o = (r = s.session) === null || r === void 0 ? void 0 : r.access_token;
      if (o) {
        const { error: l } = await this.admin.signOut(o, e);
        if (l && !(Un(l) && (l.status === 404 || l.status === 401 || l.status === 403) || vt(l)))
          return e !== "others" && await i(), this._returnResult({ error: l });
      }
      return e !== "others" && await i(), this._returnResult({ error: null });
    });
  }
  /**  *
   * @category Auth
   *
   * @remarks
   * - Subscribes to important events occurring on the user's session.
   * - Use on the frontend/client. It is less useful on the server.
   * - Events are emitted across tabs to keep your application's UI up-to-date. Some events can fire very frequently, based on the number of tabs open. Use a quick and efficient callback function, and defer or debounce as many operations as you can to be performed outside of the callback.
   * - Callbacks can be `async` and can safely call other Supabase auth methods (`getUser`, `setSession`, etc.) from inside the callback.
   * - Keep callbacks quick. Events are awaited in order, so a slow callback delays subsequent events to subscribers in this tab.
   * - Emitted events:
   *   - `INITIAL_SESSION`
   *     - Emitted right after the Supabase client is constructed and the initial session from storage is loaded.
   *   - `SIGNED_IN`
   *     - Emitted each time a user session is confirmed or re-established, including on user sign in and when refocusing a tab.
   *     - Avoid making assumptions as to when this event is fired, this may occur even when the user is already signed in. Instead, check the user object attached to the event to see if a new user has signed in and update your application's UI.
   *     - This event can fire very frequently depending on the number of tabs open in your application.
   *   - `SIGNED_OUT`
   *     - Emitted when the user signs out. This can be after:
   *       - A call to `supabase.auth.signOut()`.
   *       - After the user's session has expired for any reason:
   *         - User has signed out on another device.
   *         - The session has reached its timebox limit or inactivity timeout.
   *         - User has signed in on another device with single session per user enabled.
   *         - Check the [User Sessions](/docs/guides/auth/sessions) docs for more information.
   *     - Use this to clean up any local storage your application has associated with the user.
   *   - `TOKEN_REFRESHED`
   *     - Emitted each time a new access and refresh token are fetched for the signed in user.
   *     - It's best practice and highly recommended to extract the access token (JWT) and store it in memory for further use in your application.
   *       - Avoid frequent calls to `supabase.auth.getSession()` for the same purpose.
   *     - There is a background process that keeps track of when the session should be refreshed so you will always receive valid tokens by listening to this event.
   *     - The frequency of this event is related to the JWT expiry limit configured on your project.
   *   - `USER_UPDATED`
   *     - Emitted each time the `supabase.auth.updateUser()` method finishes successfully. Listen to it to update your application's UI based on new profile information.
   *   - `PASSWORD_RECOVERY`
   *     - Emitted instead of the `SIGNED_IN` event when the user lands on a page that includes a password recovery link in the URL.
   *     - Use it to show a UI to the user where they can [reset their password](/docs/guides/auth/passwords#resetting-a-users-password-forgot-password).
   *
   * @example Listen to auth changes
   * ```js
   * const { data } = supabase.auth.onAuthStateChange((event, session) => {
   *   console.log(event, session)
   *
   *   if (event === 'INITIAL_SESSION') {
   *     // handle initial session
   *   } else if (event === 'SIGNED_IN') {
   *     // handle sign in event
   *   } else if (event === 'SIGNED_OUT') {
   *     // handle sign out event
   *   } else if (event === 'PASSWORD_RECOVERY') {
   *     // handle password recovery event
   *   } else if (event === 'TOKEN_REFRESHED') {
   *     // handle token refreshed event
   *   } else if (event === 'USER_UPDATED') {
   *     // handle user updated event
   *   }
   * })
   *
   * // call unsubscribe to remove the callback
   * data.subscription.unsubscribe()
   * ```
   *
   * @exampleDescription Listen to sign out
   * Make sure you clear out any local data, such as local and session storage, after the client library has detected the user's sign out.
   *
   * @example Listen to sign out
   * ```js
   * supabase.auth.onAuthStateChange((event, session) => {
   *   if (event === 'SIGNED_OUT') {
   *     console.log('SIGNED_OUT', session)
   *
   *     // clear local and session storage
   *     [
   *       window.localStorage,
   *       window.sessionStorage,
   *     ].forEach((storage) => {
   *       Object.entries(storage)
   *         .forEach(([key]) => {
   *           storage.removeItem(key)
   *         })
   *     })
   *   }
   * })
   * ```
   *
   * @exampleDescription Store OAuth provider tokens on sign in
   * When using [OAuth (Social Login)](/docs/guides/auth/social-login) you sometimes wish to get access to the provider's access token and refresh token, in order to call provider APIs in the name of the user.
   *
   * For example, if you are using [Sign in with Google](/docs/guides/auth/social-login/auth-google) you may want to use the provider token to call Google APIs on behalf of the user. Supabase Auth does not keep track of the provider access and refresh token, but does return them for you once, immediately after sign in. You can use the `onAuthStateChange` method to listen for the presence of the provider tokens and store them in local storage. You can further send them to your server's APIs for use on the backend.
   *
   * Finally, make sure you remove them from local storage on the `SIGNED_OUT` event. If the OAuth provider supports token revocation, make sure you call those APIs either from the frontend or schedule them to be called on the backend.
   *
   * @example Store OAuth provider tokens on sign in
   * ```js
   * // Register this immediately after calling createClient!
   * // Because signInWithOAuth causes a redirect, you need to fetch the
   * // provider tokens from the callback.
   * supabase.auth.onAuthStateChange((event, session) => {
   *   if (session && session.provider_token) {
   *     window.localStorage.setItem('oauth_provider_token', session.provider_token)
   *   }
   *
   *   if (session && session.provider_refresh_token) {
   *     window.localStorage.setItem('oauth_provider_refresh_token', session.provider_refresh_token)
   *   }
   *
   *   if (event === 'SIGNED_OUT') {
   *     window.localStorage.removeItem('oauth_provider_token')
   *     window.localStorage.removeItem('oauth_provider_refresh_token')
   *   }
   * })
   * ```
   *
   * @exampleDescription Use React Context for the User's session
   * Instead of relying on `supabase.auth.getSession()` within your React components, you can use a [React Context](https://react.dev/reference/react/createContext) to store the latest session information from the `onAuthStateChange` callback and access it that way.
   *
   * @example Use React Context for the User's session
   * ```js
   * const SessionContext = React.createContext(null)
   *
   * function main() {
   *   const [session, setSession] = React.useState(null)
   *
   *   React.useEffect(() => {
   *     const {data: { subscription }} = supabase.auth.onAuthStateChange(
   *       (event, session) => {
   *         if (event === 'SIGNED_OUT') {
   *           setSession(null)
   *         } else if (session) {
   *           setSession(session)
   *         }
   *       })
   *
   *     return () => {
   *       subscription.unsubscribe()
   *     }
   *   }, [])
   *
   *   return (
   *     <SessionContext.Provider value={session}>
   *       <App />
   *     </SessionContext.Provider>
   *   )
   * }
   * ```
   *
   * @example Listen to password recovery events
   * ```js
   * supabase.auth.onAuthStateChange((event, session) => {
   *   if (event === 'PASSWORD_RECOVERY') {
   *     console.log('PASSWORD_RECOVERY', session)
   *     // show screen to update user's password
   *     showPasswordResetScreen(true)
   *   }
   * })
   * ```
   *
   * @example Listen to sign in
   * ```js
   * supabase.auth.onAuthStateChange((event, session) => {
   *   if (event === 'SIGNED_IN') console.log('SIGNED_IN', session)
   * })
   * ```
   *
   * @example Listen to token refresh
   * ```js
   * supabase.auth.onAuthStateChange((event, session) => {
   *   if (event === 'TOKEN_REFRESHED') console.log('TOKEN_REFRESHED', session)
   * })
   * ```
   *
   * @example Listen to user updates
   * ```js
   * supabase.auth.onAuthStateChange((event, session) => {
   *   if (event === 'USER_UPDATED') console.log('USER_UPDATED', session)
   * })
   * ```
   */
  onAuthStateChange(e) {
    const n = Bc(), r = {
      id: n,
      callback: e,
      unsubscribe: () => {
        this._debug("#unsubscribe()", "state change callback with id removed", n), this.stateChangeEmitters.delete(n);
      }
    };
    return this._debug("#onAuthStateChange()", "registered callback with id", n), this.stateChangeEmitters.set(n, r), (async () => (await this.initializePromise, this.lock != null ? await this._acquireLock(this.lockAcquireTimeout, async () => {
      this._emitInitialSession(n);
    }) : await this._emitInitialSession(n)))(), { data: { subscription: r } };
  }
  async _emitInitialSession(e) {
    return await this._useSession(async (n) => {
      var r, i;
      try {
        const { data: { session: s }, error: a } = n;
        if (a)
          throw a;
        await ((r = this.stateChangeEmitters.get(e)) === null || r === void 0 ? void 0 : r.callback("INITIAL_SESSION", s)), this._debug("INITIAL_SESSION", "callback id", e, "session", s);
      } catch (s) {
        if (await ((i = this.stateChangeEmitters.get(e)) === null || i === void 0 ? void 0 : i.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", e, "error", s), zn(s))
          return;
        vt(s) || St(s) || Un(s) && (s.code === "refresh_token_not_found" || s.code === "refresh_token_already_used" || s.code === "session_expired") ? console.warn(s) : console.error(s);
      }
    });
  }
  /**
   * Sends a password reset request to an email address. This method supports the PKCE flow.
   *
   * @param email The email address of the user.
   * @param options.redirectTo The URL to send the user to after they click the password reset link.
   * @param options.captchaToken Verification token received when the user completes the captcha on the site.
   *
   * @category Auth
   *
   * @remarks
   * - The password reset flow consist of 2 broad steps: (i) Allow the user to login via the password reset link; (ii) Update the user's password.
   * - The `resetPasswordForEmail()` only sends a password reset link to the user's email.
   * To update the user's password, see [`updateUser()`](/docs/reference/javascript/auth-updateuser).
   * - A `PASSWORD_RECOVERY` event will be emitted when the password recovery link is clicked.
   * You can use [`onAuthStateChange()`](/docs/reference/javascript/auth-onauthstatechange) to listen and invoke a callback function on these events.
   * - When the user clicks the reset link in the email they are redirected back to your application.
   * You can configure the URL that the user is redirected to with the `redirectTo` parameter.
   * See [redirect URLs and wildcards](/docs/guides/auth/redirect-urls#use-wildcards-in-redirect-urls) to add additional redirect URLs to your project.
   * - After the user has been redirected successfully, prompt them for a new password and call `updateUser()`:
   * ```js
   * const { data, error } = await supabase.auth.updateUser({
   *   password: new_password
   * })
   * ```
   *
   * @example Reset password
   * ```js
   * const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
   *   redirectTo: 'https://example.com/update-password',
   * })
   * ```
   *
   * @exampleResponse Reset password
   * ```json
   * {
   *   data: {}
   *   error: null
   * }
   * ```
   *
   * @example Reset password (React)
   * ```js
   * /**
   *  * Step 1: Send the user an email to get a password reset token.
   *  * This email contains a link which sends the user back to your application.
   *  *\/
   * const { data, error } = await supabase.auth
   *   .resetPasswordForEmail('user@email.com')
   *
   * /**
   *  * Step 2: Once the user is redirected back to your application,
   *  * ask the user to reset their password.
   *  *\/
   *  useEffect(() => {
   *    supabase.auth.onAuthStateChange(async (event, session) => {
   *      if (event == "PASSWORD_RECOVERY") {
   *        const newPassword = prompt("What would you like your new password to be?");
   *        const { data, error } = await supabase.auth
   *          .updateUser({ password: newPassword })
   *
   *        if (data) alert("Password updated successfully!")
   *        if (error) alert("There was an error updating your password.")
   *      }
   *    })
   *  }, [])
   * ```
   */
  async resetPasswordForEmail(e, n = {}) {
    let r = null, i = null, s = null;
    this.flowType === "pkce" && ([r, i, s] = await this._getCodeChallengeAndMethod(
      !0
      // isPasswordRecovery
    ));
    try {
      return await C(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: e,
          code_challenge: r,
          code_challenge_method: i,
          gotrue_meta_security: { captcha_token: n.captchaToken }
        },
        headers: this.headers,
        redirectTo: this._maybeAppendFlowIdToRedirect(n.redirectTo, s)
      });
    } catch (a) {
      if (await pe(this.storage, this.storageKey, s), T(a))
        return this._returnResult({ data: null, error: a });
      throw a;
    }
  }
  /**
   * Gets all the identities linked to a user.
   *
   * @category Auth
   *
   * @remarks
   * - The user needs to be signed in to call `getUserIdentities()`.
   *
   * @example Returns a list of identities linked to the user
   * ```js
   * const { data, error } = await supabase.auth.getUserIdentities()
   * ```
   *
   * @exampleResponse Returns a list of identities linked to the user
   * ```json
   * {
   *   "data": {
   *     "identities": [
   *       {
   *         "identity_id": "22222222-2222-2222-2222-222222222222",
   *         "id": "2024-01-01T00:00:00Z",
   *         "user_id": "2024-01-01T00:00:00Z",
   *         "identity_data": {
   *           "email": "example@email.com",
   *           "email_verified": false,
   *           "phone_verified": false,
   *           "sub": "11111111-1111-1111-1111-111111111111"
   *         },
   *         "provider": "email",
   *         "last_sign_in_at": "2024-01-01T00:00:00Z",
   *         "created_at": "2024-01-01T00:00:00Z",
   *         "updated_at": "2024-01-01T00:00:00Z",
   *         "email": "example@email.com"
   *       }
   *     ]
   *   },
   *   "error": null
   * }
   * ```
   */
  async getUserIdentities() {
    var e;
    try {
      const { data: n, error: r } = await this.getUser();
      if (r)
        throw r;
      return this._returnResult({ data: { identities: (e = n.user.identities) !== null && e !== void 0 ? e : [] }, error: null });
    } catch (n) {
      if (T(n))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  /**  *
   * @category Auth
   *
   * @remarks
   * - The **Enable Manual Linking** option must be enabled from your [project's authentication settings](/dashboard/project/_/auth/providers).
   * - The user needs to be signed in to call `linkIdentity()`.
   * - If the candidate identity is already linked to the existing user or another user, `linkIdentity()` will fail.
   * - If `linkIdentity` is run in the browser, the user is automatically redirected to the returned URL. On the server, you should handle the redirect.
   *
   * @example Link an identity to a user
   * ```js
   * const { data, error } = await supabase.auth.linkIdentity({
   *   provider: 'github'
   * })
   * ```
   *
   * @exampleResponse Link an identity to a user
   * ```json
   * {
   *   data: {
   *     provider: 'github',
   *     url: <PROVIDER_URL_TO_REDIRECT_TO>,
   *     flowId: <PKCE_FLOW_ID_OR_NULL>
   *   },
   *   error: null
   * }
   * ```
   */
  async linkIdentity(e) {
    return "token" in e ? this.linkIdentityIdToken(e) : this.linkIdentityOAuth(e);
  }
  async linkIdentityOAuth(e) {
    var n;
    let r = null;
    try {
      const { data: i, error: s } = await this._useSession(async (a) => {
        var o, l, u, h, c;
        const { data: f, error: d } = a;
        if (d)
          throw d;
        const { url: p, flowId: y } = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
          redirectTo: (o = e.options) === null || o === void 0 ? void 0 : o.redirectTo,
          scopes: (l = e.options) === null || l === void 0 ? void 0 : l.scopes,
          queryParams: (u = e.options) === null || u === void 0 ? void 0 : u.queryParams,
          skipBrowserRedirect: !0
        });
        return r = y, await C(this.fetch, "GET", p, {
          headers: this.headers,
          jwt: (c = (h = f.session) === null || h === void 0 ? void 0 : h.access_token) !== null && c !== void 0 ? c : void 0
        });
      });
      if (s)
        throw s;
      return J() && !(!((n = e.options) === null || n === void 0) && n.skipBrowserRedirect) && window.location.assign(i == null ? void 0 : i.url), this._returnResult({
        data: { provider: e.provider, url: i == null ? void 0 : i.url, flowId: r },
        error: null
      });
    } catch (i) {
      if (T(i))
        return this._returnResult({
          data: { provider: e.provider, url: null, flowId: r },
          error: i
        });
      throw i;
    }
  }
  async linkIdentityIdToken(e) {
    return await this._useSession(async (n) => {
      var r;
      try {
        const { error: i, data: { session: s } } = n;
        if (i)
          throw i;
        const { options: a, provider: o, token: l, access_token: u, nonce: h } = e, c = await C(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
          headers: this.headers,
          jwt: (r = s == null ? void 0 : s.access_token) !== null && r !== void 0 ? r : void 0,
          body: {
            provider: o,
            id_token: l,
            access_token: u,
            nonce: h,
            link_identity: !0,
            gotrue_meta_security: { captcha_token: a == null ? void 0 : a.captchaToken }
          },
          xform: le
        }), { data: f, error: d } = c;
        return d ? this._returnResult({ data: { user: null, session: null }, error: d }) : !f || !f.session || !f.user ? this._returnResult({
          data: { user: null, session: null },
          error: new Be()
        }) : (f.session && (await this._saveSession(f.session), await this._notifyAllSubscribers("USER_UPDATED", f.session)), this._returnResult({ data: f, error: d }));
      } catch (i) {
        if (await pe(this.storage, this.storageKey, null), T(i))
          return this._returnResult({ data: { user: null, session: null }, error: i });
        throw i;
      }
    });
  }
  /**
   * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
   *
   * @category Auth
   *
   * @remarks
   * - The **Enable Manual Linking** option must be enabled from your [project's authentication settings](/dashboard/project/_/auth/providers).
   * - The user needs to be signed in to call `unlinkIdentity()`.
   * - The user must have at least 2 identities in order to unlink an identity.
   * - The identity to be unlinked must belong to the user.
   *
   * @example Unlink an identity
   * ```js
   * // retrieve all identities linked to a user
   * const identities = await supabase.auth.getUserIdentities()
   *
   * // find the google identity
   * const googleIdentity = identities.find(
   *   identity => identity.provider === 'google'
   * )
   *
   * // unlink the google identity
   * const { error } = await supabase.auth.unlinkIdentity(googleIdentity)
   * ```
   */
  async unlinkIdentity(e) {
    try {
      return await this._useSession(async (n) => {
        var r, i;
        const { data: s, error: a } = n;
        if (a)
          throw a;
        return await C(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
          headers: this.headers,
          jwt: (i = (r = s.session) === null || r === void 0 ? void 0 : r.access_token) !== null && i !== void 0 ? i : void 0
        });
      });
    } catch (n) {
      if (T(n))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  /**
   * Generates a new JWT.
   * @param refreshToken A valid refresh token that was returned on login.
   */
  async _refreshAccessToken(e) {
    const n = "#_refreshAccessToken()";
    this._debug(n, "begin");
    try {
      const r = Date.now();
      return await qc(async (i) => (i > 0 && await Mc(200 * Math.pow(2, i - 1)), this._debug(n, "refreshing attempt", i), await C(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
        body: { refresh_token: e },
        headers: this.headers,
        xform: le
      })), (i, s) => {
        const a = 200 * Math.pow(2, i);
        return s && St(s) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + a - r < Oe;
      });
    } catch (r) {
      if (this._debug(n, "error", r), T(r))
        return this._returnResult({ data: { session: null, user: null }, error: r });
      throw r;
    } finally {
      this._debug(n, "end");
    }
  }
  _isValidSession(e) {
    return typeof e == "object" && e !== null && "access_token" in e && "refresh_token" in e && "expires_at" in e;
  }
  async _handleProviderSignIn(e, n) {
    const { url: r, flowId: i } = await this._getUrlForProvider(`${this.url}/authorize`, e, {
      redirectTo: n.redirectTo,
      scopes: n.scopes,
      queryParams: n.queryParams
    });
    return this._debug("#_handleProviderSignIn()", "provider", e, "options", n, "url", r), J() && !n.skipBrowserRedirect && window.location.assign(r), { data: { provider: e, url: r, flowId: i }, error: null };
  }
  /**
   * Recovers the session from LocalStorage and refreshes the token
   * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
   */
  async _recoverAndRefresh() {
    var e, n;
    const r = "#_recoverAndRefresh()";
    this._debug(r, "begin");
    try {
      const i = await Z(this.storage, this.storageKey);
      if (i && this.userStorage) {
        let a = await Z(this.userStorage, this.storageKey + "-user");
        !this.storage.isServer && Object.is(this.storage, this.userStorage) && !a && (a = { user: i.user }, await Ie(this.userStorage, this.storageKey + "-user", a)), i.user = (e = a == null ? void 0 : a.user) !== null && e !== void 0 ? e : vn();
      } else if (i && !i.user && !i.user) {
        const a = await Z(this.storage, this.storageKey + "-user");
        a && (a != null && a.user) ? (i.user = a.user, await se(this.storage, this.storageKey + "-user"), await Ie(this.storage, this.storageKey, i)) : i.user = vn();
      }
      if (this._debug(r, "session from storage", i), !this._isValidSession(i)) {
        this._debug(r, "session is not valid"), i !== null && await this._removeSession();
        return;
      }
      const s = ((n = i.expires_at) !== null && n !== void 0 ? n : 1 / 0) * 1e3 - Date.now() < bn;
      if (this._debug(r, `session has${s ? "" : " not"} expired with margin of ${bn}s`), s) {
        if (this.autoRefreshToken && i.refresh_token) {
          const { error: a } = await this._callRefreshToken(i.refresh_token);
          a && (zn(a) ? this._debug(r, "refresh discarded by commit guard", a) : this._debug(r, "refresh failed", a));
        }
      } else if (i.user && i.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: a, error: o } = await this._getUser(i.access_token);
          !o && (a != null && a.user) ? (i.user = a.user, await this._saveSession(i), await this._notifyAllSubscribers("SIGNED_IN", i)) : this._debug(r, "could not get user data, skipping SIGNED_IN notification");
        } catch (a) {
          console.error("Error getting user data:", a), this._debug(r, "error getting user data, skipping SIGNED_IN notification", a);
        }
      else
        await this._notifyAllSubscribers("SIGNED_IN", i);
    } catch (i) {
      this._debug(r, "error", i), St(i) ? console.warn(i) : console.error(i);
      return;
    } finally {
      this._debug(r, "end");
    }
  }
  async _callRefreshToken(e) {
    var n, r;
    if (!e)
      throw new V();
    if (this.refreshingDeferred)
      return this.refreshingDeferred.promise;
    if (this.lastRefreshFailure && this.lastRefreshFailure.refreshToken === e && Date.now() < this.lastRefreshFailure.expiresAt)
      return this._debug("#_callRefreshToken()", "returning cached failure (cooldown active)"), this.lastRefreshFailure.result;
    const i = "#_callRefreshToken()";
    this._debug(i, "begin");
    try {
      this.refreshingDeferred = new fn(), this.refreshingDeferred.promise.then(void 0, () => {
      });
      const s = await Z(this.storage, this.storageKey), { data: a, error: o } = await this._refreshAccessToken(e);
      if (o)
        throw o;
      if (!a.session)
        throw new V();
      const l = await Z(this.storage, this.storageKey);
      if (s !== null && (l === null || l.refresh_token !== s.refresh_token)) {
        this._debug(i, "commit guard: storage changed since refresh started, discarding rotated tokens", {
          // Presence indicators only — never log refresh token fragments,
          // even partial. Logs may be forwarded to third-party services.
          startedWith: "present",
          nowHolds: l ? "replaced" : "cleared"
        });
        const f = {
          data: null,
          error: new Bn()
        };
        return this.refreshingDeferred.resolve(f), f;
      }
      const h = this._sessionRemovalEpoch;
      if (await this._saveSession(a.session), this._sessionRemovalEpoch !== h) {
        this._debug(i, "commit guard (post-save): _removeSession ran during _saveSession, undoing write"), await se(this.storage, this.storageKey), this.userStorage && await se(this.userStorage, this.storageKey + "-user");
        const f = {
          data: null,
          error: new Bn()
        };
        return this.refreshingDeferred.resolve(f), f;
      }
      await this._notifyAllSubscribers("TOKEN_REFRESHED", a.session);
      const c = { data: a.session, error: null };
      return this.lastRefreshFailure = null, this.refreshingDeferred.resolve(c), c;
    } catch (s) {
      if (this._debug(i, "error", s), T(s)) {
        const a = { data: null, error: s };
        if (!St(s)) {
          const o = await Z(this.storage, this.storageKey);
          !!(o != null && o.expires_at && o.expires_at * 1e3 > Date.now()) ? this._debug(i, "proactive refresh failed, access token still valid — preserving session") : await this._removeSession();
        }
        return this.lastRefreshFailure = {
          refreshToken: e,
          result: a,
          expiresAt: Date.now() + Cc
        }, (n = this.refreshingDeferred) === null || n === void 0 || n.resolve(a), a;
      }
      throw (r = this.refreshingDeferred) === null || r === void 0 || r.reject(s), s;
    } finally {
      this.refreshingDeferred = null, this._debug(i, "end");
    }
  }
  async _notifyAllSubscribers(e, n, r = !0) {
    if (this._pendingInitNotifications !== null && r) {
      this._pendingInitNotifications.push({ event: e, session: n, broadcast: r });
      return;
    }
    const i = `#_notifyAllSubscribers(${e})`;
    this._debug(i, "begin", n, `broadcast = ${r}`);
    try {
      this.broadcastChannel && r && this.broadcastChannel.postMessage({ event: e, session: n });
      const s = [], a = Array.from(this.stateChangeEmitters.values()).map(async (o) => {
        try {
          await o.callback(e, n);
        } catch (l) {
          s.push(l);
        }
      });
      if (await Promise.all(a), s.length > 0) {
        for (let o = 0; o < s.length; o += 1)
          console.error(s[o]);
        throw s[0];
      }
    } finally {
      this._debug(i, "end");
    }
  }
  /**
   * set currentSession and currentUser
   * process to _startAutoRefreshToken if possible
   */
  async _saveSession(e) {
    this._debug("#_saveSession()", e), this.suppressGetSessionWarning = !0;
    const n = Object.assign({}, e), r = n.user && n.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !r && n.user && await Ie(this.userStorage, this.storageKey + "-user", {
        user: n.user
      });
      const i = Object.assign({}, n);
      delete i.user;
      const s = jr(i);
      await Ie(this.storage, this.storageKey, s);
    } else {
      const i = jr(n);
      await Ie(this.storage, this.storageKey, i);
    }
  }
  async _removeSession() {
    this._sessionRemovalEpoch += 1, this._debug("#_removeSession()"), this.lastRefreshFailure = null, this.suppressGetSessionWarning = !1, await se(this.storage, this.storageKey), await Qc(this.storage, this.storageKey), await se(this.storage, this.storageKey + "-user"), this.userStorage && await se(this.userStorage, this.storageKey + "-user"), await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  /**
   * Removes any registered visibilitychange callback.
   *
   * {@link GoTrueClient.startAutoRefresh}
   * {@link GoTrueClient.stopAutoRefresh}
   */
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const e = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      e && J() && (window != null && window.removeEventListener) && window.removeEventListener("visibilitychange", e);
    } catch (n) {
      console.error("removing visibilitychange callback failed", n);
    }
  }
  /**
   * This is the private implementation of {@link GoTrueClient.startAutoRefresh}. Use this
   * within the library.
   */
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const e = setInterval(() => this._autoRefreshTokenTick(), Oe);
    this.autoRefreshTicker = e, e && typeof e == "object" && typeof e.unref == "function" ? e.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(e);
    const n = setTimeout(async () => {
      await this.initializePromise, await this._autoRefreshTokenTick();
    }, 0);
    this.autoRefreshTickTimeout = n, n && typeof n == "object" && typeof n.unref == "function" ? n.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(n);
  }
  /**
   * This is the private implementation of {@link GoTrueClient.stopAutoRefresh}. Use this
   * within the library.
   */
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const e = this.autoRefreshTicker;
    this.autoRefreshTicker = null, e && clearInterval(e);
    const n = this.autoRefreshTickTimeout;
    this.autoRefreshTickTimeout = null, n && clearTimeout(n);
  }
  /**
   * Starts an auto-refresh process in the background. The session is checked
   * every few seconds. Close to the time of expiration a process is started to
   * refresh the session. If refreshing fails it will be retried for as long as
   * necessary.
   *
   * If you set the {@link GoTrueClientOptions#autoRefreshToken} you don't need
   * to call this function, it will be called for you.
   *
   * On browsers the refresh process works only when the tab/window is in the
   * foreground to conserve resources as well as prevent race conditions and
   * flooding auth with requests. If you call this method any managed
   * visibility change callback will be removed and you must manage visibility
   * changes on your own.
   *
   * On non-browser platforms the refresh process works *continuously* in the
   * background, which may not be desirable. You should hook into your
   * platform's foreground indication mechanism and call these methods
   * appropriately to conserve resources.
   *
   * {@link GoTrueClient.stopAutoRefresh}
   *
   * @category Auth
   *
   * @remarks
   * - Only useful in non-browser environments such as React Native or Electron.
   * - The Supabase Auth library automatically starts and stops proactively refreshing the session when a tab is focused or not.
   * - On non-browser platforms, such as mobile or desktop apps built with web technologies, the library is not able to effectively determine whether the application is _focused_ or not.
   * - To give this hint to the application, you should be calling this method when the app is in focus and calling `supabase.auth.stopAutoRefresh()` when it's out of focus.
   *
   * @example Start and stop auto refresh in React Native
   * ```js
   * import { AppState } from 'react-native'
   *
   * // make sure you register this only once!
   * AppState.addEventListener('change', (state) => {
   *   if (state === 'active') {
   *     supabase.auth.startAutoRefresh()
   *   } else {
   *     supabase.auth.stopAutoRefresh()
   *   }
   * })
   * ```
   */
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  /**
   * Stops an active auto refresh process running in the background (if any).
   *
   * If you call this method any managed visibility change callback will be
   * removed and you must manage visibility changes on your own.
   *
   * See {@link GoTrueClient.startAutoRefresh} for more details.
   *
   * @category Auth
   *
   * @remarks
   * - Only useful in non-browser environments such as React Native or Electron.
   * - The Supabase Auth library automatically starts and stops proactively refreshing the session when a tab is focused or not.
   * - On non-browser platforms, such as mobile or desktop apps built with web technologies, the library is not able to effectively determine whether the application is _focused_ or not.
   * - When your application goes in the background or out of focus, call this method to stop the proactive refreshing of the session.
   *
   * @example Start and stop auto refresh in React Native
   * ```js
   * import { AppState } from 'react-native'
   *
   * // make sure you register this only once!
   * AppState.addEventListener('change', (state) => {
   *   if (state === 'active') {
   *     supabase.auth.startAutoRefresh()
   *   } else {
   *     supabase.auth.stopAutoRefresh()
   *   }
   * })
   * ```
   */
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  /**
   * Tears down the client's background work: stops the auto-refresh interval,
   * removes the `visibilitychange` listener, closes the cross-tab
   * `BroadcastChannel`, and clears registered `onAuthStateChange` subscribers.
   *
   * Call this from cleanup hooks when the client is being replaced before
   * its JS realm is destroyed. React Strict Mode and HMR are the common
   * cases. Any in-flight `fetch` calls continue to completion and may still
   * write to storage; dispose doesn't abort them or erase storage.
   *
   * Lifecycle caveat: because in-flight refreshes are not aborted, a
   * disposed instance can still persist a rotated session to storage after
   * `dispose()` returns. A subsequent `createClient` against the same
   * `storageKey` will pick up that session on its next read. If you need
   * strict isolation between client lifecycles, await any pending auth
   * operation before calling `dispose()` (or change the `storageKey` for
   * the replacement client).
   *
   * Safe to call repeatedly.
   *
   * @category Auth
   *
   * @example Cleanup on React unmount
   * ```ts
   * useEffect(() => {
   *   const client = createClient(...)
   *   return () => { client.auth.dispose() }
   * }, [])
   * ```
   */
  async dispose() {
    var e;
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh(), (e = this.broadcastChannel) === null || e === void 0 || e.close(), this.broadcastChannel = null, this.stateChangeEmitters.clear();
  }
  /**
   * Runs the auto refresh token tick.
   */
  async _autoRefreshTokenTick() {
    if (this._debug("#_autoRefreshTokenTick()", "begin"), this.lock != null) {
      try {
        await this._acquireLock(0, async () => {
          try {
            const e = Date.now();
            try {
              return await this._useSession(async (n) => {
                const { data: { session: r } } = n;
                if (!r || !r.refresh_token || !r.expires_at) {
                  this._debug("#_autoRefreshTokenTick()", "no session");
                  return;
                }
                const i = Math.floor((r.expires_at * 1e3 - e) / Oe);
                this._debug("#_autoRefreshTokenTick()", `access token expires in ${i} ticks, a tick lasts ${Oe}ms, refresh threshold is ${bt} ticks`), i <= bt && await this._callRefreshToken(r.refresh_token);
              });
            } catch (n) {
              console.error("Auto refresh tick failed with error. This is likely a transient error.", n);
            }
          } finally {
            this._debug("#_autoRefreshTokenTick()", "end");
          }
        });
      } catch (e) {
        if (e instanceof hh)
          this._debug("auto refresh token tick lock not available");
        else
          throw e;
      }
      return;
    }
    if (this.refreshingDeferred !== null) {
      this._debug("#_autoRefreshTokenTick()", "refresh already in flight, skipping");
      return;
    }
    try {
      const e = Date.now();
      try {
        await this._useSession(async (n) => {
          const { data: { session: r } } = n;
          if (!r || !r.refresh_token || !r.expires_at) {
            this._debug("#_autoRefreshTokenTick()", "no session");
            return;
          }
          const i = Math.floor((r.expires_at * 1e3 - e) / Oe);
          this._debug("#_autoRefreshTokenTick()", `access token expires in ${i} ticks, a tick lasts ${Oe}ms, refresh threshold is ${bt} ticks`), i <= bt && await this._callRefreshToken(r.refresh_token);
        });
      } catch (n) {
        console.error("Auto refresh tick failed with error. This is likely a transient error.", n);
      }
    } finally {
      this._debug("#_autoRefreshTokenTick()", "end");
    }
  }
  /**
   * Registers callbacks on the browser / platform, which in-turn run
   * algorithms when the browser window/tab are in foreground. On non-browser
   * platforms it assumes always foreground.
   */
  async _handleVisibilityChange() {
    if (this._debug("#_handleVisibilityChange()"), !J() || !(window != null && window.addEventListener))
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      this.visibilityChangedCallback = async () => {
        try {
          await this._onVisibilityChanged(!1);
        } catch (e) {
          this._debug("#visibilityChangedCallback", "error", e);
        }
      }, window == null || window.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0);
    } catch (e) {
      console.error("_handleVisibilityChange", e);
    }
  }
  /**
   * Callback registered with `window.addEventListener('visibilitychange')`.
   */
  async _onVisibilityChanged(e) {
    const n = `#_onVisibilityChanged(${e})`;
    if (this._debug(n, "visibilityState", document.visibilityState), document.visibilityState === "visible") {
      if (this.autoRefreshToken && this._startAutoRefresh(), !e)
        if (await this.initializePromise, this.lock != null)
          await this._acquireLock(this.lockAcquireTimeout, async () => {
            if (document.visibilityState !== "visible") {
              this._debug(n, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
              return;
            }
            await this._recoverAndRefresh();
          });
        else {
          if (document.visibilityState !== "visible") {
            this._debug(n, "visibilityState is no longer visible, skipping recovery");
            return;
          }
          await this._recoverAndRefresh();
        }
    } else document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh();
  }
  /**
   * Generates the relevant login URL for a third-party provider.
   * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param options.scopes A space-separated list of scopes granted to the OAuth application.
   * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
   */
  async _getUrlForProvider(e, n, r) {
    let i = r == null ? void 0 : r.redirectTo, s = null, a = null, o = null;
    this.flowType === "pkce" && ([s, a, o] = await this._getCodeChallengeAndMethod(), i = this._maybeAppendFlowIdToRedirect(i, o));
    const l = [`provider=${encodeURIComponent(n)}`];
    if (i && l.push(`redirect_to=${encodeURIComponent(i)}`), r != null && r.scopes && l.push(`scopes=${encodeURIComponent(r.scopes)}`), s != null && a != null) {
      const u = new URLSearchParams({
        code_challenge: `${encodeURIComponent(s)}`,
        code_challenge_method: `${encodeURIComponent(a)}`
      });
      l.push(u.toString());
    }
    if (r != null && r.queryParams) {
      const u = new URLSearchParams(r.queryParams);
      l.push(u.toString());
    }
    return r != null && r.skipBrowserRedirect && l.push(`skip_http_redirect=${r.skipBrowserRedirect}`), { url: `${e}?${l.join("&")}`, flowId: o };
  }
  /**
   * Appends the reserved flow id parameter to a redirect URL so the callback
   * can be matched to the verifier stored for its flow. Opt-in via
   * `experimental.appendPkceFlowIdToRedirects`: redirect URLs are validated
   * against the project's allow list including the query string, so an extra
   * parameter can stop exact (non-wildcard) entries from matching.
   */
  _maybeAppendFlowIdToRedirect(e, n) {
    return !e || !n || !this.experimental.appendPkceFlowIdToRedirects ? e ?? void 0 : Xc(e, n);
  }
  /**
   * Generates and stores a PKCE challenge/verifier pair for a new flow,
   * logging any pending verifier the bounded slot ring evicts.
   */
  async _getCodeChallengeAndMethod(e = !1) {
    return Zc(this.storage, this.storageKey, e, (n) => this._debug("#_getCodeChallengeAndMethod()", "evicted oldest pending PKCE verifier slot", n));
  }
  async _unenroll(e) {
    try {
      return await this._useSession(async (n) => {
        var r;
        const { data: i, error: s } = n;
        return s ? this._returnResult({ data: null, error: s }) : await C(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
          headers: this.headers,
          jwt: (r = i == null ? void 0 : i.session) === null || r === void 0 ? void 0 : r.access_token
        });
      });
    } catch (n) {
      if (T(n))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _enroll(e) {
    try {
      return await this._useSession(async (n) => {
        var r, i;
        const { data: s, error: a } = n;
        if (a)
          return this._returnResult({ data: null, error: a });
        const o = Object.assign({ friendly_name: e.friendlyName, factor_type: e.factorType }, e.factorType === "phone" ? { phone: e.phone } : e.factorType === "totp" ? { issuer: e.issuer } : {}), { data: l, error: u } = await C(this.fetch, "POST", `${this.url}/factors`, {
          body: o,
          headers: this.headers,
          jwt: (r = s == null ? void 0 : s.session) === null || r === void 0 ? void 0 : r.access_token
        });
        return u ? this._returnResult({ data: null, error: u }) : (e.factorType === "totp" && l.type === "totp" && (!((i = l == null ? void 0 : l.totp) === null || i === void 0) && i.qr_code) && (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`), this._returnResult({ data: l, error: null }));
      });
    } catch (n) {
      if (T(n))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _verify(e) {
    const n = async () => {
      try {
        return await this._useSession(async (r) => {
          var i;
          const { data: s, error: a } = r;
          if (a)
            return this._returnResult({ data: null, error: a });
          const o = Object.assign({ challenge_id: e.challengeId }, "webauthn" in e ? {
            webauthn: Object.assign(Object.assign({}, e.webauthn), { credential_response: e.webauthn.type === "create" ? zr(e.webauthn.credential_response) : Mr(e.webauthn.credential_response) })
          } : { code: e.code }), { data: l, error: u } = await C(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
            body: o,
            headers: this.headers,
            jwt: (i = s == null ? void 0 : s.session) === null || i === void 0 ? void 0 : i.access_token
          });
          return u ? this._returnResult({ data: null, error: u }) : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + l.expires_in }, l)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", l), this._returnResult({ data: l, error: u }));
        });
      } catch (r) {
        if (T(r))
          return this._returnResult({ data: null, error: r });
        throw r;
      }
    };
    return this.lock != null ? this._acquireLock(this.lockAcquireTimeout, n) : n();
  }
  async _challenge(e) {
    const n = async () => {
      try {
        return await this._useSession(async (r) => {
          var i;
          const { data: s, error: a } = r;
          if (a)
            return this._returnResult({ data: null, error: a });
          const o = await C(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
            body: e,
            headers: this.headers,
            jwt: (i = s == null ? void 0 : s.session) === null || i === void 0 ? void 0 : i.access_token
          });
          if (o.error)
            return o;
          const { data: l } = o;
          if (l.type !== "webauthn")
            return { data: l, error: null };
          switch (l.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, l), { webauthn: Object.assign(Object.assign({}, l.webauthn), { credential_options: Object.assign(Object.assign({}, l.webauthn.credential_options), { publicKey: Fr(l.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, l), { webauthn: Object.assign(Object.assign({}, l.webauthn), { credential_options: Object.assign(Object.assign({}, l.webauthn.credential_options), { publicKey: Br(l.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
          }
        });
      } catch (r) {
        if (T(r))
          return this._returnResult({ data: null, error: r });
        throw r;
      }
    };
    return this.lock != null ? this._acquireLock(this.lockAcquireTimeout, n) : n();
  }
  /**
   * {@link GoTrueMFAApi#challengeAndVerify}
   */
  async _challengeAndVerify(e) {
    const { data: n, error: r } = await this._challenge({
      factorId: e.factorId
    });
    return r ? this._returnResult({ data: null, error: r }) : await this._verify({
      factorId: e.factorId,
      challengeId: n.id,
      code: e.code
    });
  }
  /**
   * {@link GoTrueMFAApi#listFactors}
   */
  async _listFactors() {
    var e;
    const { data: { user: n }, error: r } = await this.getUser();
    if (r)
      return { data: null, error: r };
    const i = {
      all: [],
      phone: [],
      totp: [],
      webauthn: [],
      recovery_code: []
    };
    for (const s of (e = n == null ? void 0 : n.factors) !== null && e !== void 0 ? e : [])
      i.all.push(s), s.status === "verified" && s.factor_type in i && Array.isArray(i[s.factor_type]) && i[s.factor_type].push(s);
    return {
      data: i,
      error: null
    };
  }
  /**
   * {@link GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */
  async _getAuthenticatorAssuranceLevel(e) {
    var n, r, i, s;
    if (e)
      try {
        const { payload: d } = Mt(e);
        let p = null;
        d.aal && (p = d.aal);
        let y = p;
        const { data: { user: v }, error: w } = await this.getUser(e);
        if (w)
          return this._returnResult({ data: null, error: w });
        ((r = (n = v == null ? void 0 : v.factors) === null || n === void 0 ? void 0 : n.filter((x) => x.status === "verified")) !== null && r !== void 0 ? r : []).length > 0 && (y = "aal2");
        const _ = d.amr || [];
        return { data: { currentLevel: p, nextLevel: y, currentAuthenticationMethods: _ }, error: null };
      } catch (d) {
        if (T(d))
          return this._returnResult({ data: null, error: d });
        throw d;
      }
    const { data: { session: a }, error: o } = await this.getSession();
    if (o)
      return this._returnResult({ data: null, error: o });
    if (!a)
      return {
        data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
        error: null
      };
    const { payload: l } = Mt(a.access_token);
    let u = null;
    l.aal && (u = l.aal);
    let h = u;
    ((s = (i = a.user.factors) === null || i === void 0 ? void 0 : i.filter((d) => d.status === "verified")) !== null && s !== void 0 ? s : []).length > 0 && (h = "aal2");
    const f = l.amr || [];
    return { data: { currentLevel: u, nextLevel: h, currentAuthenticationMethods: f }, error: null };
  }
  /**
   * {@link AuthMFARecoveryCodesApi#getStatus}
   */
  async _getRecoveryCodesStatus() {
    yt(this.experimental);
    try {
      return await this._useSession(async (e) => {
        var n;
        const { data: r, error: i } = e;
        if (i)
          return this._returnResult({ data: null, error: i });
        const { data: s, error: a } = await C(this.fetch, "GET", `${this.url}/factors/recovery-codes`, {
          headers: this.headers,
          jwt: (n = r == null ? void 0 : r.session) === null || n === void 0 ? void 0 : n.access_token
        });
        return a ? this._returnResult({ data: null, error: a }) : this._returnResult({ data: s, error: null });
      });
    } catch (e) {
      if (T(e))
        return this._returnResult({ data: null, error: e });
      throw e;
    }
  }
  /**
   * {@link AuthMFARecoveryCodesApi#generate}
   */
  async _generateRecoveryCodes(e) {
    yt(this.experimental);
    try {
      return await this._useSession(async (n) => {
        var r;
        const { data: i, error: s } = n;
        if (s)
          return this._returnResult({ data: null, error: s });
        const { data: a, error: o } = await C(this.fetch, "POST", `${this.url}/factors/recovery-codes`, {
          // The body is optional server-side; only send one when a name was given.
          body: e != null && e.friendlyName ? { friendly_name: e.friendlyName } : void 0,
          headers: this.headers,
          jwt: (r = i == null ? void 0 : i.session) === null || r === void 0 ? void 0 : r.access_token
        });
        return o ? this._returnResult({ data: null, error: o }) : this._returnResult({ data: a, error: null });
      });
    } catch (n) {
      if (T(n))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  /**
   * {@link AuthMFARecoveryCodesApi#verify}
   */
  async _verifyRecoveryCode(e) {
    yt(this.experimental);
    const n = async () => {
      try {
        return await this._useSession(async (r) => {
          var i;
          const { data: s, error: a } = r;
          if (a)
            return this._returnResult({ data: null, error: a });
          const { data: o, error: l } = await C(this.fetch, "POST", `${this.url}/factors/recovery-codes/verify`, {
            body: { code: e.code },
            headers: this.headers,
            jwt: (i = s == null ? void 0 : s.session) === null || i === void 0 ? void 0 : i.access_token
          });
          if (l)
            return this._returnResult({ data: null, error: l });
          const u = Object.assign({ expires_at: ts(o.expires_in) }, o);
          return await this._saveSession(u), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", u), this._returnResult({ data: o, error: null });
        });
      } catch (r) {
        if (T(r))
          return this._returnResult({ data: null, error: r });
        throw r;
      }
    };
    return this.lock != null ? this._acquireLock(this.lockAcquireTimeout, n) : n();
  }
  /**
   * {@link AuthMFARecoveryCodesApi#regenerate}
   */
  async _regenerateRecoveryCodes() {
    yt(this.experimental);
    try {
      return await this._useSession(async (e) => {
        var n;
        const { data: r, error: i } = e;
        if (i)
          return this._returnResult({ data: null, error: i });
        const { data: s, error: a } = await C(this.fetch, "POST", `${this.url}/factors/recovery-codes/regenerate`, {
          headers: this.headers,
          jwt: (n = r == null ? void 0 : r.session) === null || n === void 0 ? void 0 : n.access_token
        });
        return a ? this._returnResult({ data: null, error: a }) : this._returnResult({ data: s, error: null });
      });
    } catch (e) {
      if (T(e))
        return this._returnResult({ data: null, error: e });
      throw e;
    }
  }
  /**
   * {@link AuthMFARecoveryCodesApi#unenroll}
   */
  async _unenrollRecoveryCodes() {
    yt(this.experimental);
    try {
      return await this._useSession(async (e) => {
        var n;
        const { data: r, error: i } = e;
        if (i)
          return this._returnResult({ data: null, error: i });
        const { data: s, error: a } = await C(this.fetch, "DELETE", `${this.url}/factors/recovery-codes`, {
          headers: this.headers,
          jwt: (n = r == null ? void 0 : r.session) === null || n === void 0 ? void 0 : n.access_token
        });
        return a ? this._returnResult({ data: null, error: a }) : this._returnResult({ data: s, error: null });
      });
    } catch (e) {
      if (T(e))
        return this._returnResult({ data: null, error: e });
      throw e;
    }
  }
  /**
   * Retrieves details about an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * Returns authorization details including client info, scopes, and user information.
   * If the response includes only a redirect_url field, it means consent was already given - the caller
   * should handle the redirect manually if needed.
   */
  async _getAuthorizationDetails(e) {
    try {
      return await this._useSession(async (n) => {
        const { data: { session: r }, error: i } = n;
        return i ? this._returnResult({ data: null, error: i }) : r ? await C(this.fetch, "GET", `${this.url}/oauth/authorizations/${e}`, {
          headers: this.headers,
          jwt: r.access_token,
          xform: (s) => ({ data: s, error: null })
        }) : this._returnResult({ data: null, error: new V() });
      });
    } catch (n) {
      if (T(n))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  /**
   * Approves an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _approveAuthorization(e, n) {
    try {
      return await this._useSession(async (r) => {
        const { data: { session: i }, error: s } = r;
        if (s)
          return this._returnResult({ data: null, error: s });
        if (!i)
          return this._returnResult({ data: null, error: new V() });
        const a = await C(this.fetch, "POST", `${this.url}/oauth/authorizations/${e}/consent`, {
          headers: this.headers,
          jwt: i.access_token,
          body: { action: "approve" },
          xform: (o) => ({ data: o, error: null })
        });
        return a.data && a.data.redirect_url && J() && !(n != null && n.skipBrowserRedirect) && window.location.assign(a.data.redirect_url), a;
      });
    } catch (r) {
      if (T(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  /**
   * Denies an OAuth authorization request.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _denyAuthorization(e, n) {
    try {
      return await this._useSession(async (r) => {
        const { data: { session: i }, error: s } = r;
        if (s)
          return this._returnResult({ data: null, error: s });
        if (!i)
          return this._returnResult({ data: null, error: new V() });
        const a = await C(this.fetch, "POST", `${this.url}/oauth/authorizations/${e}/consent`, {
          headers: this.headers,
          jwt: i.access_token,
          body: { action: "deny" },
          xform: (o) => ({ data: o, error: null })
        });
        return a.data && a.data.redirect_url && J() && !(n != null && n.skipBrowserRedirect) && window.location.assign(a.data.redirect_url), a;
      });
    } catch (r) {
      if (T(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  /**
   * Lists all OAuth grants that the authenticated user has authorized.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _listOAuthGrants() {
    try {
      return await this._useSession(async (e) => {
        const { data: { session: n }, error: r } = e;
        return r ? this._returnResult({ data: null, error: r }) : n ? await C(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
          headers: this.headers,
          jwt: n.access_token,
          xform: (i) => ({ data: i, error: null })
        }) : this._returnResult({ data: null, error: new V() });
      });
    } catch (e) {
      if (T(e))
        return this._returnResult({ data: null, error: e });
      throw e;
    }
  }
  /**
   * Revokes a user's OAuth grant for a specific client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   */
  async _revokeOAuthGrant(e) {
    try {
      return await this._useSession(async (n) => {
        const { data: { session: r }, error: i } = n;
        return i ? this._returnResult({ data: null, error: i }) : r ? (await C(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
          headers: this.headers,
          jwt: r.access_token,
          query: { client_id: e.clientId },
          noResolveJson: !0
        }), { data: {}, error: null }) : this._returnResult({ data: null, error: new V() });
      });
    } catch (n) {
      if (T(n))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async fetchJwk(e, n = { keys: [] }) {
    let r = n.keys.find((o) => o.kid === e);
    if (r)
      return r;
    const i = Date.now();
    if (r = this.jwks.keys.find((o) => o.kid === e), r && this.jwks_cached_at + Lc > i)
      return r;
    const { data: s, error: a } = await C(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
      headers: this.headers
    });
    if (a)
      throw a;
    return !s.keys || s.keys.length === 0 || (this.jwks = s, this.jwks_cached_at = i, r = s.keys.find((o) => o.kid === e), !r) ? null : r;
  }
  /**
   * Extracts the JWT claims present in the access token by first verifying the
   * JWT against the server's JSON Web Key Set endpoint
   * `/.well-known/jwks.json` which is often cached, resulting in significantly
   * faster responses. Prefer this method over {@link GoTrueClient.getUser} which always
   * sends a request to the Auth server for each JWT.
   *
   * If the project is not using an asymmetric JWT signing key (like ECC or
   * RSA) it always sends a request to the Auth server (similar to
   * {@link GoTrueClient.getUser}) to verify the JWT.
   *
   * @param jwt An optional specific JWT you wish to verify, not the one you
   *            can obtain from {@link GoTrueClient.getSession}.
   * @param options Various additional options that allow you to customize the
   *                behavior of this method.
   *
   * @category Auth
   *
   * @remarks
   * - Parses the user's [access token](/docs/guides/auth/sessions#access-token-jwt-claims) as a [JSON Web Token (JWT)](/docs/guides/auth/jwts) and returns its components if valid and not expired.
   * - If your project is using asymmetric JWT signing keys, then the verification is done locally usually without a network request using the [WebCrypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API).
   * - A network request is sent to your project's JWT signing key discovery endpoint `https://project-id.supabase.co/auth/v1/.well-known/jwks.json`, which is cached locally. If your environment is ephemeral, such as a Lambda function that is destroyed after every request, a network request will be sent for each new invocation. Supabase provides a network-edge cache providing fast responses for these situations.
   * - If the user's access token is about to expire when calling this function, the user's session will first be refreshed before validating the JWT.
   * - If your project is using a symmetric secret to sign the JWT, it always sends a request similar to `getUser()` to validate the JWT at the server before returning the decoded token. This is also used if the WebCrypto API is not available in the environment. Make sure you polyfill it in such situations.
   * - The returned claims can be customized per project using the [Custom Access Token Hook](/docs/guides/auth/auth-hooks/custom-access-token-hook).
   *
   * @example Get JWT claims, header and signature
   * ```js
   * const { data, error } = await supabase.auth.getClaims()
   * ```
   *
   * @exampleResponse Get JWT claims, header and signature
   * ```json
   * {
   *   "data": {
   *     "claims": {
   *       "aal": "aal1",
   *       "amr": [{
   *         "method": "email",
   *         "timestamp": 1715766000
   *       }],
   *       "app_metadata": {},
   *       "aud": "authenticated",
   *       "email": "example@email.com",
   *       "exp": 1715769600,
   *       "iat": 1715766000,
   *       "is_anonymous": false,
   *       "iss": "https://project-id.supabase.co/auth/v1",
   *       "phone": "+13334445555",
   *       "role": "authenticated",
   *       "session_id": "11111111-1111-1111-1111-111111111111",
   *       "sub": "11111111-1111-1111-1111-111111111111",
   *       "user_metadata": {}
   *     },
   *     "header": {
   *       "alg": "RS256",
   *       "typ": "JWT",
   *       "kid": "11111111-1111-1111-1111-111111111111"
   *     },
   *     "signature": [/** Uint8Array *\/],
   *   },
   *   "error": null
   * }
   * ```
   */
  async getClaims(e, n = {}) {
    try {
      let r = e;
      if (!r) {
        const { data: d, error: p } = await this.getSession();
        if (p || !d.session)
          return this._returnResult({ data: null, error: p });
        r = d.session.access_token;
      }
      const { header: i, payload: s, signature: a, raw: { header: o, payload: l } } = Mt(r);
      if (!(n != null && n.allowExpired))
        try {
          nh(s.exp);
        } catch (d) {
          throw new jt(d instanceof Error ? d.message : "JWT validation failed");
        }
      const u = !i.alg || i.alg.startsWith("HS") || !i.kid || !("crypto" in globalThis && "subtle" in globalThis.crypto) ? null : await this.fetchJwk(i.kid, n != null && n.keys ? { keys: n.keys } : n == null ? void 0 : n.jwks);
      if (!u) {
        const { error: d } = await this.getUser(r);
        if (d)
          throw d;
        return {
          data: {
            claims: s,
            header: i,
            signature: a
          },
          error: null
        };
      }
      const h = rh(i.alg), c = await crypto.subtle.importKey("jwk", u, h, !0, [
        "verify"
      ]);
      if (!await crypto.subtle.verify(h, c, a, Fc(`${o}.${l}`)))
        throw new jt("Invalid JWT signature");
      return {
        data: {
          claims: s,
          header: i,
          signature: a
        },
        error: null
      };
    } catch (r) {
      if (T(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  // --- Passkey Methods ---
  /**
   * Sign in with a passkey. Handles the full WebAuthn ceremony:
   * 1. Fetches authentication challenge from server
   * 2. Prompts user via navigator.credentials.get()
   * 3. Verifies credential with server and creates session
   *
   * Pass `options.mediation: 'conditional'` to use WebAuthn Conditional UI
   * (passkey autofill) instead of the modal picker; the value is forwarded to
   * `navigator.credentials.get()` unchanged.
   *
   * The challenge fetched in step 1 expires after the server's
   * GOTRUE_WEBAUTHN_CHALLENGE_EXPIRY_DURATION (5 minutes by default). With
   * `mediation: 'conditional'` the autofill prompt can stay pending for longer
   * than that: the browser ceremony then still succeeds, but verification fails
   * with `error_code: "webauthn_challenge_expired"`. Recover by calling
   * `signInWithPasskey()` again. It fetches a fresh challenge and, unless you
   * passed your own `options.signal`, cancels the pending ceremony first, so
   * the browser never sees two concurrent WebAuthn requests; the earlier call
   * resolves with a `WebAuthnError` whose code is `ERROR_CEREMONY_ABORTED`. If
   * you pass your own `signal`, abort it before retrying.
   *
   * @category Auth
   *
   * @example Sign in with Conditional UI (passkey autofill)
   * ```js
   * // <input autocomplete="username webauthn" /> somewhere on the page
   * const { data, error } = await supabase.auth.signInWithPasskey({
   *   options: {
   *     mediation: 'conditional'
   *   }
   * });
   * ```
   */
  async signInWithPasskey(e) {
    var n, r, i, s;
    try {
      if (!rn())
        return this._returnResult({
          data: null,
          error: new ue("Browser does not support WebAuthn", null)
        });
      const { data: a, error: o } = await this._startPasskeyAuthentication({
        options: { captchaToken: (n = e == null ? void 0 : e.options) === null || n === void 0 ? void 0 : n.captchaToken }
      });
      if (o || !a)
        return this._returnResult({ data: null, error: o });
      const l = Br(a.options), u = (i = (r = e == null ? void 0 : e.options) === null || r === void 0 ? void 0 : r.signal) !== null && i !== void 0 ? i : qn.createNewAbortSignal(), { data: h, error: c } = await us({
        publicKey: l,
        signal: u,
        mediation: (s = e == null ? void 0 : e.options) === null || s === void 0 ? void 0 : s.mediation
      });
      if (c || !h)
        return this._returnResult({
          data: null,
          error: c ?? new ue("WebAuthn ceremony failed", null)
        });
      const f = Mr(h);
      return this._verifyPasskeyAuthentication({
        challengeId: a.challenge_id,
        credential: f
      });
    } catch (a) {
      if (T(a))
        return this._returnResult({ data: null, error: a });
      throw a;
    }
  }
  /**
   * Register a passkey for the current authenticated user. Handles the full WebAuthn ceremony:
   * 1. Fetches registration challenge from server
   * 2. Prompts user via navigator.credentials.create()
   * 3. Verifies credential with server
   *
   * Requires an active session.
   *
   * @category Auth
   */
  async registerPasskey(e) {
    var n, r;
    try {
      if (!rn())
        return this._returnResult({
          data: null,
          error: new ue("Browser does not support WebAuthn", null)
        });
      const { data: i, error: s } = await this._startPasskeyRegistration();
      if (s || !i)
        return this._returnResult({ data: null, error: s });
      const a = Fr(i.options), o = (r = (n = e == null ? void 0 : e.options) === null || n === void 0 ? void 0 : n.signal) !== null && r !== void 0 ? r : qn.createNewAbortSignal(), { data: l, error: u } = await ls({
        publicKey: a,
        signal: o
      });
      if (u || !l)
        return this._returnResult({
          data: null,
          error: u ?? new ue("WebAuthn ceremony failed", null)
        });
      const h = zr(l);
      return this._verifyPasskeyRegistration({
        challengeId: i.challenge_id,
        credential: h
      });
    } catch (i) {
      if (T(i))
        return this._returnResult({ data: null, error: i });
      throw i;
    }
  }
  /**
   * Start passkey registration for the current authenticated user.
   * Returns WebAuthn credential creation options to pass to navigator.credentials.create().
   */
  async _startPasskeyRegistration() {
    try {
      return await this._useSession(async (e) => {
        const { data: { session: n }, error: r } = e;
        if (r)
          return this._returnResult({ data: null, error: r });
        if (!n)
          return this._returnResult({ data: null, error: new V() });
        const { data: i, error: s } = await C(this.fetch, "POST", `${this.url}/passkeys/registration/options`, {
          headers: this.headers,
          jwt: n.access_token,
          body: {}
        });
        return s ? this._returnResult({ data: null, error: s }) : this._returnResult({ data: i, error: null });
      });
    } catch (e) {
      if (T(e))
        return this._returnResult({ data: null, error: e });
      throw e;
    }
  }
  /**
   * Verify passkey registration with the credential response.
   * The credentialResponse should be the serialized output of navigator.credentials.create().
   */
  async _verifyPasskeyRegistration(e) {
    try {
      return await this._useSession(async (n) => {
        const { data: { session: r }, error: i } = n;
        if (i)
          return this._returnResult({ data: null, error: i });
        if (!r)
          return this._returnResult({ data: null, error: new V() });
        const { data: s, error: a } = await C(this.fetch, "POST", `${this.url}/passkeys/registration/verify`, {
          headers: this.headers,
          jwt: r.access_token,
          body: {
            challenge_id: e.challengeId,
            credential: e.credential
          }
        });
        return a ? this._returnResult({ data: null, error: a }) : this._returnResult({ data: s, error: null });
      });
    } catch (n) {
      if (T(n))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  /**
   * Start passkey authentication.
   * Returns WebAuthn credential request options to pass to navigator.credentials.get().
   */
  async _startPasskeyAuthentication(e) {
    var n;
    try {
      const { data: r, error: i } = await C(this.fetch, "POST", `${this.url}/passkeys/authentication/options`, {
        headers: this.headers,
        body: {
          gotrue_meta_security: { captcha_token: (n = e == null ? void 0 : e.options) === null || n === void 0 ? void 0 : n.captchaToken }
        }
      });
      return i ? this._returnResult({ data: null, error: i }) : this._returnResult({ data: r, error: null });
    } catch (r) {
      if (T(r))
        return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  /**
   * Verify passkey authentication and create a session.
   * The credential should be the serialized output of navigator.credentials.get().
   */
  async _verifyPasskeyAuthentication(e) {
    try {
      const { data: n, error: r } = await C(this.fetch, "POST", `${this.url}/passkeys/authentication/verify`, {
        headers: this.headers,
        body: {
          challenge_id: e.challengeId,
          credential: e.credential
        },
        xform: le
      });
      return r ? this._returnResult({ data: null, error: r }) : (n.session && (await this._saveSession(n.session), await this._notifyAllSubscribers("SIGNED_IN", n.session)), this._returnResult({ data: n, error: null }));
    } catch (n) {
      if (T(n))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  /**
   * List all passkeys for the current user.
   */
  async _listPasskeys() {
    try {
      return await this._useSession(async (e) => {
        const { data: { session: n }, error: r } = e;
        if (r)
          return this._returnResult({ data: null, error: r });
        if (!n)
          return this._returnResult({ data: null, error: new V() });
        const { data: i, error: s } = await C(this.fetch, "GET", `${this.url}/passkeys`, {
          headers: this.headers,
          jwt: n.access_token,
          xform: (a) => ({ data: a, error: null })
        });
        return s ? this._returnResult({ data: null, error: s }) : this._returnResult({ data: i, error: null });
      });
    } catch (e) {
      if (T(e))
        return this._returnResult({ data: null, error: e });
      throw e;
    }
  }
  /**
   * Update a passkey.
   */
  async _updatePasskey(e) {
    try {
      return await this._useSession(async (n) => {
        const { data: { session: r }, error: i } = n;
        if (i)
          return this._returnResult({ data: null, error: i });
        if (!r)
          return this._returnResult({ data: null, error: new V() });
        const { data: s, error: a } = await C(this.fetch, "PATCH", `${this.url}/passkeys/${e.passkeyId}`, {
          headers: this.headers,
          jwt: r.access_token,
          body: { friendly_name: e.friendlyName }
        });
        return a ? this._returnResult({ data: null, error: a }) : this._returnResult({ data: s, error: null });
      });
    } catch (n) {
      if (T(n))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  /**
   * Delete a passkey.
   */
  async _deletePasskey(e) {
    try {
      return await this._useSession(async (n) => {
        const { data: { session: r }, error: i } = n;
        if (i)
          return this._returnResult({ data: null, error: i });
        if (!r)
          return this._returnResult({ data: null, error: new V() });
        const { error: s } = await C(this.fetch, "DELETE", `${this.url}/passkeys/${e.passkeyId}`, {
          headers: this.headers,
          jwt: r.access_token,
          noResolveJson: !0
        });
        return s ? this._returnResult({ data: null, error: s }) : this._returnResult({ data: null, error: null });
      });
    } catch (n) {
      if (T(n))
        return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
}
ht.nextInstanceID = {};
const cs = ht, Th = "2.118.0";
let Et = "", an;
if (typeof Deno < "u") {
  var _n;
  Et = "deno", an = (_n = Deno.version) === null || _n === void 0 ? void 0 : _n.deno;
} else if (typeof document < "u") Et = "web";
else if (typeof navigator < "u" && navigator.product === "ReactNative") Et = "react-native";
else {
  var kn;
  Et = "node";
  const t = globalThis.process;
  an = t == null || (kn = t.version) === null || kn === void 0 ? void 0 : kn.replace(/^v/, "");
}
const hs = [`runtime=${Et}`];
an && hs.push(`runtime-version=${an}`);
const Ah = { "X-Client-Info": `supabase-js/${Th}; ${hs.join("; ")}` }, xh = { headers: Ah }, Ch = { schema: "public" }, Rh = {
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  flowType: "implicit"
}, Oh = {}, Ih = {
  enabled: !1,
  respectSamplingDecision: !0
};
function Ph(t) {
  if (!t || typeof t != "string") return null;
  const e = t.split("-");
  if (e.length !== 4) return null;
  const [n, r, i, s] = e;
  if (n.length !== 2 || r.length !== 32 || i.length !== 16 || s.length !== 2) return null;
  const a = /^[0-9a-f]+$/i;
  return !a.test(n) || !a.test(r) || !a.test(i) || !a.test(s) || r === "00000000000000000000000000000000" || i === "0000000000000000" ? null : {
    version: n,
    traceId: r,
    parentId: i,
    traceFlags: s,
    isSampled: (parseInt(s, 16) & 1) === 1
  };
}
function jh(t, e) {
  if (!t || !e || e.length === 0) return !1;
  let n;
  if (t instanceof URL) n = t;
  else try {
    n = new URL(t);
  } catch {
    return !1;
  }
  for (const r of e) try {
    if (typeof r == "string") {
      if (Lh(n.hostname, r)) return !0;
    } else if (r instanceof RegExp) {
      if (r.test(n.hostname)) return !0;
    } else if (typeof r == "function" && r(n))
      return !0;
  } catch {
    continue;
  }
  return !1;
}
function Lh(t, e) {
  if (e === t) return !0;
  if (e.startsWith("*.")) {
    const n = e.slice(2);
    if (t.endsWith(n) && (t === n || t.endsWith("." + n)))
      return !0;
  }
  return !1;
}
function $h(t) {
  const e = [];
  try {
    const n = new URL(t);
    e.push(n.hostname);
  } catch {
  }
  return e.push("*.supabase.co", "*.supabase.in"), e.push("localhost", "127.0.0.1", "[::1]"), e;
}
function $t(t) {
  "@babel/helpers - typeof";
  return $t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, $t(t);
}
function Dh(t, e) {
  if ($t(t) != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e);
    if ($t(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Nh(t) {
  var e = Dh(t, "string");
  return $t(e) == "symbol" ? e : e + "";
}
function Uh(t, e, n) {
  return (e = Nh(e)) in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function Hr(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function H(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Hr(Object(n), !0).forEach(function(r) {
      Uh(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Hr(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
const Fh = (t) => t ? (...e) => t(...e) : (...e) => fetch(...e), Bh = () => Headers, ds = (t) => t.startsWith("sb_publishable_") || t.startsWith("sb_secret_"), zh = "sb_temp_", Wr = /* @__PURE__ */ new Set(), Mh = (t) => {
  var e, n;
  if (!t.startsWith("sb_") || ds(t) || t.startsWith(zh)) return;
  const r = (e = (n = t.match(/^sb_[a-zA-Z0-9]+_/)) === null || n === void 0 ? void 0 : n[0]) !== null && e !== void 0 ? e : "unknown";
  Wr.has(r) || (Wr.add(r), console.warn("@supabase/supabase-js: Unrecognized Supabase API key format. The client will proceed and send this key as-is; if you see authentication errors you may need to upgrade @supabase/supabase-js to a version that recognizes this key type."));
}, Vr = (t, e, n, r, i, s) => {
  const a = Fh(r), o = Bh(), l = (i == null ? void 0 : i.enabled) === !0, u = (i == null ? void 0 : i.respectSamplingDecision) !== !1, h = l ? $h(e) : null, c = !(s != null && s.omitApiKeyAsBearer && ds(t));
  return async (f, d) => {
    const p = await n();
    let y = new o(d == null ? void 0 : d.headers);
    if (y.has("apikey") || y.set("apikey", t), !y.has("Authorization")) {
      const v = p ?? (c ? t : null);
      v && y.set("Authorization", `Bearer ${v}`);
    }
    if (h) {
      const v = qh(f, h, u);
      v && (v.traceparent && !y.has("traceparent") && y.set("traceparent", v.traceparent), v.tracestate && !y.has("tracestate") && y.set("tracestate", v.tracestate), v.baggage && !y.has("baggage") && y.set("baggage", v.baggage));
    }
    return a(f, H(H({}, d), {}, { headers: y }));
  };
};
let Kr = !1, Gr = !1;
function qh(t, e, n) {
  const r = Ql();
  if (!r)
    return Kr || (Kr = !0, console.warn("@supabase/supabase-js: tracePropagation is enabled but the tracing runtime is not loaded, so trace headers will not be attached. Add `import '@supabase/supabase-js/tracing'` at your application entry point (requires the OpenTelemetry API package to be installed). The CDN/UMD build does not support trace propagation.")), null;
  if (!jh(typeof t == "string" || t instanceof URL ? t : t.url, e)) return null;
  const i = r();
  if (!i || !i.traceparent) {
    var s;
    if (!(i == null || (s = i.carrierKeys) === null || s === void 0) && s.length && !Gr) {
      Gr = !0;
      const a = i.carrierKeys.includes("sentry-trace") ? " Sentry detected: set `propagateTraceparent: true` in Sentry.init() to emit it." : " Configure your tracing SDK to emit W3C trace context on outgoing requests.";
      console.warn(`@supabase/supabase-js: tracePropagation is enabled and a tracing SDK is active, but its propagator wrote [${i.carrierKeys.join(", ")}] and no W3C traceparent header, so trace headers will not be attached.` + a);
    }
    return null;
  }
  if (n) {
    const a = Ph(i.traceparent);
    if (a && !a.isSampled) return { traceparent: i.traceparent };
  }
  return i;
}
function Jr(t) {
  return typeof t == "boolean" ? { enabled: t } : t;
}
function Hh(t) {
  return t.endsWith("/") ? t : t + "/";
}
let Yr = !1;
function Wh(t) {
  Yr || typeof t != "object" || t === null || !("schema" in t) || t.schema === void 0 || (Yr = !0, console.warn(`@supabase/supabase-js: The "schema" option must be nested under "db", e.g. createClient(url, key, { db: { schema: 'myschema' } }). A top-level "schema" is ignored and queries go to the default schema.`));
}
function Vh(t, e) {
  var n, r, i, s, a, o;
  const { db: l, auth: u, realtime: h, global: c } = t, { db: f, auth: d, realtime: p, global: y } = e, v = Jr(t.tracePropagation), w = Jr(e.tracePropagation), k = {
    db: H(H({}, f), l),
    auth: H(H({}, d), u),
    realtime: H(H({}, p), h),
    storage: {},
    global: H(H(H({}, y), c), {}, { headers: H(H({}, (n = y == null ? void 0 : y.headers) !== null && n !== void 0 ? n : {}), (r = c == null ? void 0 : c.headers) !== null && r !== void 0 ? r : {}) }),
    tracePropagation: {
      enabled: (i = (s = v == null ? void 0 : v.enabled) !== null && s !== void 0 ? s : w == null ? void 0 : w.enabled) !== null && i !== void 0 ? i : !1,
      respectSamplingDecision: (a = (o = v == null ? void 0 : v.respectSamplingDecision) !== null && o !== void 0 ? o : w == null ? void 0 : w.respectSamplingDecision) !== null && a !== void 0 ? a : !0
    },
    accessToken: async () => ""
  };
  return t.accessToken ? k.accessToken = t.accessToken : delete k.accessToken, k;
}
function Kh(t) {
  const e = t == null ? void 0 : t.trim();
  if (!e) throw new Error("supabaseUrl is required.");
  if (!e.match(/^https?:\/\//i)) throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(Hh(e));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
var Gh = class extends cs {
  constructor(t) {
    super(t);
  }
}, fs = class {
  /**
  * Create a new client for use in the browser.
  *
  * @category Initializing
  *
  * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
  * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
  * @param options Optional configuration for the client:
  * - `db.schema` — You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
  * - `auth.autoRefreshToken` — Set to `true` if you want to automatically refresh the token before expiring.
  * - `auth.persistSession` — Set to `true` if you want to automatically save the user session into local storage.
  * - `auth.detectSessionInUrl` — Set to `true` if you want to automatically detect OAuth grants in the URL and sign in the user.
  * - `realtime` — Options passed along to the realtime-js constructor.
  * - `storage` — Options passed along to the storage-js constructor.
  * - `global.fetch` — A custom fetch implementation.
  * - `global.headers` — Any additional headers to send with each network request.
  *
  * @example Creating a client
  * ```js
  * import { createClient } from '@supabase/supabase-js'
  *
  * // Create a single supabase client for interacting with your database
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  * ```
  *
  * @example With a custom domain
  * ```js
  * import { createClient } from '@supabase/supabase-js'
  *
  * // Use a custom domain as the supabase URL
  * const supabase = createClient('https://my-custom-domain.com', 'your-publishable-key')
  * ```
  *
  * @example With additional parameters
  * ```js
  * import { createClient } from '@supabase/supabase-js'
  *
  * const options = {
  *   db: {
  *     schema: 'public',
  *   },
  *   auth: {
  *     autoRefreshToken: true,
  *     persistSession: true,
  *     detectSessionInUrl: true
  *   },
  *   global: {
  *     headers: { 'x-my-custom-header': 'my-app-name' },
  *   },
  * }
  * const supabase = createClient("https://xyzcompany.supabase.co", "your-publishable-key", options)
  * ```
  *
  * @exampleDescription With custom schemas
  * By default the API server points to the `public` schema. You can enable other database schemas within the Dashboard.
  * Go to [Settings > API > Exposed schemas](/dashboard/project/_/settings/api) and add the schema which you want to expose to the API.
  *
  * Note: each client connection can only access a single schema, so the code above can access the `other_schema` schema but cannot access the `public` schema.
  *
  * @example With custom schemas
  * ```js
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key', {
  *   // Provide a custom schema. Defaults to "public".
  *   db: { schema: 'other_schema' }
  * })
  * ```
  *
  * @exampleDescription Custom fetch implementation
  * `supabase-js` uses the runtime's global `fetch` to make HTTP requests,
  * but an alternative `fetch` implementation can be provided as an option.
  * This is useful in environments where the global `fetch` is unavailable or where you want to customize request behavior.
  *
  * @example Custom fetch implementation
  * ```js
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key', {
  *   global: { fetch: fetch.bind(globalThis) }
  * })
  * ```
  *
  * @exampleDescription React Native options with AsyncStorage
  * For React Native we recommend using `AsyncStorage` as the storage implementation for Supabase Auth.
  *
  * @example React Native options with AsyncStorage
  * ```js
  * import 'react-native-url-polyfill/auto'
  * import { createClient } from '@supabase/supabase-js'
  * import AsyncStorage from "@react-native-async-storage/async-storage";
  *
  * const supabase = createClient("https://xyzcompany.supabase.co", "your-publishable-key", {
  *   auth: {
  *     storage: AsyncStorage,
  *     autoRefreshToken: true,
  *     persistSession: true,
  *     detectSessionInUrl: false,
  *   },
  * });
  * ```
  *
  * @exampleDescription React Native options with Expo SecureStore
  * If you wish to encrypt the user's session information, you can use `aes-js` and store the encryption key in Expo SecureStore.
  * The `aes-js` library, a reputable JavaScript-only implementation of the AES encryption algorithm in CTR mode.
  * A new 256-bit encryption key is generated using the `react-native-get-random-values` library.
  * This key is stored inside Expo's SecureStore, while the value is encrypted and placed inside AsyncStorage.
  *
  * Please make sure that:
  * - You keep the `expo-secure-store`, `aes-js` and `react-native-get-random-values` libraries up-to-date.
  * - Choose the correct [`SecureStoreOptions`](https://docs.expo.dev/versions/latest/sdk/securestore/#securestoreoptions) for your app's needs.
  *   E.g. [`SecureStore.WHEN_UNLOCKED`](https://docs.expo.dev/versions/latest/sdk/securestore/#securestorewhen_unlocked) regulates when the data can be accessed.
  * - Carefully consider optimizations or other modifications to the above example, as those can lead to introducing subtle security vulnerabilities.
  *
  * @example React Native options with Expo SecureStore
  * ```ts
  * import 'react-native-url-polyfill/auto'
  * import { createClient } from '@supabase/supabase-js'
  * import AsyncStorage from '@react-native-async-storage/async-storage';
  * import * as SecureStore from 'expo-secure-store';
  * import * as aesjs from 'aes-js';
  * import 'react-native-get-random-values';
  *
  * // As Expo's SecureStore does not support values larger than 2048
  * // bytes, an AES-256 key is generated and stored in SecureStore, while
  * // it is used to encrypt/decrypt values stored in AsyncStorage.
  * class LargeSecureStore {
  *   private async _encrypt(key: string, value: string) {
  *     const encryptionKey = crypto.getRandomValues(new Uint8Array(256 / 8));
  *
  *     const cipher = new aesjs.ModeOfOperation.ctr(encryptionKey, new aesjs.Counter(1));
  *     const encryptedBytes = cipher.encrypt(aesjs.utils.utf8.toBytes(value));
  *
  *     await SecureStore.setItemAsync(key, aesjs.utils.hex.fromBytes(encryptionKey));
  *
  *     return aesjs.utils.hex.fromBytes(encryptedBytes);
  *   }
  *
  *   private async _decrypt(key: string, value: string) {
  *     const encryptionKeyHex = await SecureStore.getItemAsync(key);
  *     if (!encryptionKeyHex) {
  *       return encryptionKeyHex;
  *     }
  *
  *     const cipher = new aesjs.ModeOfOperation.ctr(aesjs.utils.hex.toBytes(encryptionKeyHex), new aesjs.Counter(1));
  *     const decryptedBytes = cipher.decrypt(aesjs.utils.hex.toBytes(value));
  *
  *     return aesjs.utils.utf8.fromBytes(decryptedBytes);
  *   }
  *
  *   async getItem(key: string) {
  *     const encrypted = await AsyncStorage.getItem(key);
  *     if (!encrypted) { return encrypted; }
  *
  *     return await this._decrypt(key, encrypted);
  *   }
  *
  *   async removeItem(key: string) {
  *     await AsyncStorage.removeItem(key);
  *     await SecureStore.deleteItemAsync(key);
  *   }
  *
  *   async setItem(key: string, value: string) {
  *     const encrypted = await this._encrypt(key, value);
  *
  *     await AsyncStorage.setItem(key, encrypted);
  *   }
  * }
  *
  * const supabase = createClient("https://xyzcompany.supabase.co", "your-publishable-key", {
  *   auth: {
  *     storage: new LargeSecureStore(),
  *     autoRefreshToken: true,
  *     persistSession: true,
  *     detectSessionInUrl: false,
  *   },
  * });
  * ```
  *
  * @example With a database query
  * ```ts
  * import { createClient } from '@supabase/supabase-js'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key')
  *
  * const { data } = await supabase.from('profiles').select('*')
  * ```
  *
  * @exampleDescription With OpenTelemetry tracing
  * Opt in to W3C trace context propagation so the `trace_id` from your
  * client-side spans is attached to Supabase requests and appears in API
  * Gateway and Edge Function logs. Requires `@opentelemetry/api` to be
  * installed in your application and the tracing runtime to be loaded via
  * `import '@supabase/supabase-js/tracing'`. See [Tracing with the JS SDK](https://supabase.com/docs/guides/telemetry/client-side-tracing).
  *
  * @example With OpenTelemetry tracing
  * ```ts
  * import '@supabase/supabase-js/tracing'
  * import { createClient } from '@supabase/supabase-js'
  * import { trace } from '@opentelemetry/api'
  *
  * const supabase = createClient('https://xyzcompany.supabase.co', 'your-publishable-key', {
  *   tracePropagation: true,
  * })
  *
  * const tracer = trace.getTracer('my-app')
  *
  * await tracer.startActiveSpan('fetch-users', async (span) => {
  *   // Outgoing request carries the active trace context.
  *   const { data, error } = await supabase.from('users').select('*')
  *   span.end()
  * })
  * ```
  */
  constructor(t, e, n) {
    var r, i;
    this.supabaseUrl = t, this.supabaseKey = e;
    const s = Kh(t);
    if (!e) throw new Error("supabaseKey is required.");
    Mh(e), Wh(n), this.realtimeUrl = new URL("realtime/v1", s), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", s), this.storageUrl = new URL("storage/v1", s), this.functionsUrl = new URL("functions/v1", s);
    const a = `sb-${s.hostname.split(".")[0]}-auth-token`, o = {
      db: Ch,
      realtime: Oh,
      auth: H(H({}, Rh), {}, { storageKey: a }),
      global: xh,
      tracePropagation: Ih
    }, l = Vh(n ?? {}, o);
    if (this.settings = l, this.storageKey = (r = l.auth.storageKey) !== null && r !== void 0 ? r : "", this.headers = (i = l.global.headers) !== null && i !== void 0 ? i : {}, l.accessToken)
      this.accessToken = l.accessToken, this.auth = new Proxy({}, { get: (h, c) => {
        throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(c)} is not possible`);
      } });
    else {
      var u;
      this.auth = this._initSupabaseAuthClient((u = l.auth) !== null && u !== void 0 ? u : {}, this.headers, l.global.fetch);
    }
    this.fetch = Vr(e, t, this._getSessionToken.bind(this), l.global.fetch, l.tracePropagation), this.functionsFetch = Vr(e, t, this._getSessionToken.bind(this), l.global.fetch, l.tracePropagation, { omitApiKeyAsBearer: !0 }), this.realtime = this._initRealtimeClient(H({
      headers: this.headers,
      accessToken: this._getAccessToken.bind(this),
      fetch: this.fetch
    }, l.realtime)), this.accessToken && Promise.resolve(this.accessToken()).then((h) => this.realtime.setAuth(h)).catch((h) => console.warn("Failed to set initial Realtime auth token:", h)), this.rest = new cu(new URL("rest/v1", s).href, {
      headers: this.headers,
      schema: l.db.schema,
      fetch: this.fetch,
      timeout: l.db.timeout,
      urlLengthLimit: l.db.urlLengthLimit,
      retry: l.db.retry
    }), this.storage = new xc(this.storageUrl.href, this.headers, this.fetch, n == null ? void 0 : n.storage), l.accessToken || this._listenForAuthEvents();
  }
  /**
  * Supabase Functions allows you to deploy and invoke edge functions.
  */
  get functions() {
    return new eu(this.functionsUrl.href, {
      headers: this.headers,
      customFetch: this.functionsFetch
    });
  }
  /**
  * Perform a query on a table or a view.
  *
  * @param relation - The table or view name to query
  */
  from(t) {
    return this.rest.from(t);
  }
  /**
  * Select a schema to query or perform an function (rpc) call.
  *
  * The schema needs to be on the list of exposed schemas inside Supabase.
  *
  * @param schema - The schema to query
  */
  schema(t) {
    return this.rest.schema(t);
  }
  /**
  * Fetch the OpenAPI description PostgREST publishes for this client's schema.
  *
  * The document lists only the tables, views and functions the caller's role
  * holds privileges on. The request carries the same `apikey` and
  * `Authorization` headers as every other query, so the description is scoped
  * to the signed-in user. Call `.schema()` first to describe a schema other
  * than the client default.
  *
  * @example
  * ```ts
  * const { data, error } = await supabase.getOpenApiSpec()
  * ```
  */
  getOpenApiSpec() {
    return this.rest.getOpenApiSpec();
  }
  /**
  * Perform a function call.
  *
  * @param fn - The function name to call
  * @param args - The arguments to pass to the function call
  * @param options - Named parameters
  * @param options.head - When set to `true`, `data` will not be returned.
  * Useful if you only need the count.
  * @param options.get - When set to `true`, the function will be called with
  * read-only access mode.
  * @param options.count - Count algorithm to use to count rows returned by the
  * function. Only applicable for [set-returning
  * functions](https://www.postgresql.org/docs/current/functions-srf.html).
  *
  * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
  * hood.
  *
  * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
  * statistics under the hood.
  *
  * `"estimated"`: Uses exact count for low numbers and planned count for high
  * numbers.
  */
  rpc(t, e = {}, n = {
    head: !1,
    get: !1,
    count: void 0
  }) {
    return this.rest.rpc(t, e, n);
  }
  /**
  * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
  *
  * @param {string} name - The name of the Realtime channel.
  * @param {Object} opts - The options to pass to the Realtime channel.
  *
  * @category Realtime
  */
  channel(t, e = { config: {} }) {
    return this.realtime.channel(t, e);
  }
  /**
  * Returns all Realtime channels.
  *
  * @category Realtime
  *
  * @example Get all channels
  * ```js
  * const channels = supabase.getChannels()
  * ```
  */
  getChannels() {
    return this.realtime.getChannels();
  }
  /**
  * Unsubscribes and removes Realtime channel from Realtime client.
  *
  * @param {RealtimeChannel} channel - The name of the Realtime channel.
  *
  *
  * @category Realtime
  *
  * @remarks
  * - Removing a channel is a great way to maintain the performance of your project's Realtime service as well as your database if you're listening to Postgres changes. Supabase will automatically handle cleanup 30 seconds after a client is disconnected, but unused channels may cause degradation as more clients are simultaneously subscribed.
  *
  * @example Removes a channel
  * ```js
  * supabase.removeChannel(myChannel)
  * ```
  */
  removeChannel(t) {
    return this.realtime.removeChannel(t);
  }
  /**
  * Unsubscribes and removes all Realtime channels from Realtime client.
  *
  * @category Realtime
  *
  * @remarks
  * - Removing channels is a great way to maintain the performance of your project's Realtime service as well as your database if you're listening to Postgres changes. Supabase will automatically handle cleanup 30 seconds after a client is disconnected, but unused channels may cause degradation as more clients are simultaneously subscribed.
  *
  * @example Remove all channels
  * ```js
  * supabase.removeAllChannels()
  * ```
  */
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  /**
  * The raw session token — the custom `accessToken` result or the signed-in user's JWT —
  * or `null` when there is no session. Unlike {@link _getAccessToken} it does not fall back
  * to `supabaseKey`, so callers can distinguish "no session" from "has session".
  */
  async _getSessionToken() {
    var t = this, e, n;
    if (t.accessToken) return await t.accessToken();
    const { data: r } = await t.auth.getSession();
    return (e = (n = r.session) === null || n === void 0 ? void 0 : n.access_token) !== null && e !== void 0 ? e : null;
  }
  async _getAccessToken() {
    var t = this, e;
    return (e = await t._getSessionToken()) !== null && e !== void 0 ? e : t.supabaseKey;
  }
  _initSupabaseAuthClient({ autoRefreshToken: t, persistSession: e, detectSessionInUrl: n, storage: r, userStorage: i, storageKey: s, flowType: a, lock: o, debug: l, throwOnError: u, experimental: h, lockAcquireTimeout: c, skipAutoInitialize: f }, d, p) {
    const y = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new Gh({
      url: this.authUrl.href,
      headers: H(H({}, y), d),
      storageKey: s,
      autoRefreshToken: t,
      persistSession: e,
      detectSessionInUrl: n,
      storage: r,
      userStorage: i,
      flowType: a,
      lock: o,
      debug: l,
      throwOnError: u,
      experimental: h,
      fetch: p,
      lockAcquireTimeout: c,
      skipAutoInitialize: f,
      hasCustomAuthorizationHeader: Object.keys(this.headers).some((v) => v.toLowerCase() === "authorization")
    });
  }
  _initRealtimeClient(t) {
    return new Hi(this.realtimeUrl.href, H(H({}, t), {}, { params: H(H({}, { apikey: this.supabaseKey }), t == null ? void 0 : t.params) }));
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((t, e) => {
      this._handleTokenChanged(t, "CLIENT", e == null ? void 0 : e.access_token);
    });
  }
  _handleTokenChanged(t, e, n) {
    (t === "TOKEN_REFRESHED" || t === "SIGNED_IN" || t === "INITIAL_SESSION") && this.changedAccessToken !== n ? (this.changedAccessToken = n, this.realtime.setAuth(n)) : t === "SIGNED_OUT" && (this.realtime.setAuth(), e == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0);
  }
};
const Jh = (t, e, n) => new fs(t, e, n);
function Yh() {
  if (typeof window < "u" || globalThis.Deno !== void 0) return !1;
  const t = globalThis.process;
  if (!t) return !1;
  const e = t.version;
  if (e == null) return !1;
  const n = e.match(/^v(\d+)\./);
  return n ? parseInt(n[1], 10) <= 20 : !1;
}
Yh() && console.warn("⚠️  Node.js 20 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 22 or later. For more information, visit: https://github.com/orgs/supabase/discussions/45715");
const Qh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AuthApiError: Qi,
  AuthClient: cs,
  AuthError: ut,
  AuthImplicitGrantRedirectError: kt,
  AuthInvalidCredentialsError: _t,
  AuthInvalidJwtError: jt,
  AuthInvalidTokenResponseError: Be,
  AuthPKCECodeVerifierMissingError: Zi,
  AuthPKCEGrantCodeExchangeError: Fn,
  AuthRefreshDiscardedError: Bn,
  AuthRetryableFetchError: xt,
  AuthSessionMissingError: V,
  AuthUnknownError: ue,
  AuthWeakPasswordError: Mn,
  CustomAuthError: me,
  get FunctionRegion() {
    return Yt;
  },
  FunctionsError: cn,
  FunctionsFetchError: Ii,
  FunctionsHttpError: Cn,
  FunctionsRelayError: xn,
  GoTrueAdminApi: ss,
  GoTrueClient: ht,
  PostgrestError: Ve,
  get REALTIME_LISTEN_TYPES() {
    return $e;
  },
  get REALTIME_POSTGRES_CHANGES_LISTEN_EVENT() {
    return Ln;
  },
  get REALTIME_PRESENCE_LISTEN_EVENTS() {
    return jn;
  },
  get REALTIME_SUBSCRIBE_STATES() {
    return ve;
  },
  RealtimeChannel: _e,
  RealtimeClient: Hi,
  RealtimePostgresFilterBuilder: qi,
  RealtimePresence: Mi,
  SIGN_OUT_SCOPES: Vt,
  StorageApiError: Xt,
  SupabaseClient: fs,
  WebSocketFactory: Di,
  createClient: Jh,
  isAuthApiError: Un,
  isAuthError: T,
  isAuthImplicitGrantRedirectError: Xi,
  isAuthRefreshDiscardedError: zn,
  isAuthRetryableFetchError: St,
  isAuthSessionMissingError: vt
}, Symbol.toStringTag, { value: "Module" }));
