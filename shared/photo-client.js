var ta = Object.defineProperty;
var na = (n, t, e) => t in n ? ta(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var L = (n, t, e) => na(n, typeof t != "symbol" ? t + "" : t, e);
const gr = document.createElement("i");
function Qr(n) {
  const t = "&" + n + ";";
  gr.innerHTML = t;
  const e = gr.textContent;
  return (
    // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
    // yield `null`.
    e.charCodeAt(e.length - 1) === 59 && n !== "semi" || e === t ? !1 : e
  );
}
function ye(n, t, e, r) {
  const i = n.length;
  let s = 0, a;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, e = e > 0 ? e : 0, r.length < 1e4)
    a = Array.from(r), a.unshift(t, e), n.splice(...a);
  else
    for (e && n.splice(t, e); s < r.length; )
      a = r.slice(s, s + 1e4), a.unshift(t, 0), n.splice(...a), s += 1e4, t += 1e4;
}
function le(n, t) {
  return n.length > 0 ? (ye(n, n.length, 0, t), n) : t;
}
const Sn = {}.hasOwnProperty;
function Xr(n) {
  const t = {};
  let e = -1;
  for (; ++e < n.length; )
    ra(t, n[e]);
  return t;
}
function ra(n, t) {
  let e;
  for (e in t) {
    const i = (Sn.call(n, e) ? n[e] : void 0) || (n[e] = {}), s = t[e];
    let a;
    if (s)
      for (a in s) {
        Sn.call(i, a) || (i[a] = []);
        const o = s[a];
        ia(
          // @ts-expect-error Looks like a list.
          i[a],
          Array.isArray(o) ? o : o ? [o] : []
        );
      }
  }
}
function ia(n, t) {
  let e = -1;
  const r = [];
  for (; ++e < t.length; )
    (t[e].add === "after" ? n : r).push(t[e]);
  ye(n, 0, 0, r);
}
function Zr(n) {
  const t = {};
  let e = -1;
  for (; ++e < n.length; )
    sa(t, n[e]);
  return t;
}
function sa(n, t) {
  let e;
  for (e in t) {
    const i = (Sn.call(n, e) ? n[e] : void 0) || (n[e] = {}), s = t[e];
    let a;
    if (s)
      for (a in s)
        i[a] = s[a];
  }
}
function aa(n, t) {
  const e = Number.parseInt(n, t);
  return (
    // C0 except for HT, LF, FF, CR, space.
    e < 9 || e === 11 || e > 13 && e < 32 || // Control character (DEL) of C0, and C1 controls.
    e > 126 && e < 160 || // Lone high surrogates and low surrogates.
    e > 55295 && e < 57344 || // Noncharacters.
    e > 64975 && e < 65008 || /* eslint-disable no-bitwise */
    (e & 65535) === 65535 || (e & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    e > 1114111 ? "�" : String.fromCodePoint(e)
  );
}
const oa = { '"': "quot", "&": "amp", "<": "lt", ">": "gt" };
function ei(n) {
  return n.replace(/["&<>]/g, t);
  function t(e) {
    return "&" + oa[
      /** @type {keyof typeof characterReferences} */
      e
    ] + ";";
  }
}
function Ae(n) {
  return n.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const he = ze(/[A-Za-z]/), ue = ze(/[\dA-Za-z]/), la = ze(/[#-'*+\--9=?A-Z^-~]/);
function qt(n) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    n !== null && (n < 32 || n === 127)
  );
}
const En = ze(/\d/), ua = ze(/[\dA-Fa-f]/), ha = ze(/[!-/:-@[-`{-~]/);
function D(n) {
  return n !== null && n < -2;
}
function K(n) {
  return n !== null && (n < 0 || n === 32);
}
function F(n) {
  return n === -2 || n === -1 || n === 32;
}
const Vn = ze(new RegExp("\\p{P}|\\p{S}", "u")), ut = ze(/\s/);
function ze(n) {
  return t;
  function t(e) {
    return e !== null && e > -1 && n.test(String.fromCharCode(e));
  }
}
function Je(n, t) {
  const e = ei(ca(n || ""));
  if (!t)
    return e;
  const r = e.indexOf(":"), i = e.indexOf("?"), s = e.indexOf("#"), a = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    r < 0 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    a > -1 && r > a || i > -1 && r > i || s > -1 && r > s || // It is a protocol, it should be allowed.
    t.test(e.slice(0, r)) ? e : ""
  );
}
function ca(n) {
  const t = [];
  let e = -1, r = 0, i = 0;
  for (; ++e < n.length; ) {
    const s = n.charCodeAt(e);
    let a = "";
    if (s === 37 && ue(n.charCodeAt(e + 1)) && ue(n.charCodeAt(e + 2)))
      i = 2;
    else if (s < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s)) || (a = String.fromCharCode(s));
    else if (s > 55295 && s < 57344) {
      const o = n.charCodeAt(e + 1);
      s < 56320 && o > 56319 && o < 57344 ? (a = String.fromCharCode(s, o), i = 1) : a = "�";
    } else
      a = String.fromCharCode(s);
    a && (t.push(n.slice(r, e), encodeURIComponent(a)), r = e + i + 1, a = ""), i && (e += i, i = 0);
  }
  return t.join("") + n.slice(r);
}
const mr = {}.hasOwnProperty, br = /^(https?|ircs?|mailto|xmpp)$/i, da = /^https?$/i;
function fa(n) {
  const t = n || {};
  let e = !0;
  const r = {}, i = [[]], s = [], a = [], l = (
    /** @type {NormalizedHtmlExtension} */
    Zr([{
      enter: {
        blockQuote: q,
        codeFenced: ce,
        codeFencedFenceInfo: y,
        codeFencedFenceMeta: y,
        codeIndented: we,
        codeText: Ks,
        content: Ds,
        definition: $e,
        definitionDestinationString: un,
        definitionLabelString: y,
        definitionTitleString: y,
        emphasis: Hs,
        htmlFlow: Ws,
        htmlText: hr,
        image: fe,
        label: y,
        link: Pe,
        listItemMarker: I,
        listItemValue: S,
        listOrdered: z,
        listUnordered: M,
        paragraph: Z,
        reference: y,
        resource: G,
        resourceDestinationString: ee,
        resourceTitleString: y,
        setextHeading: Ns,
        strong: Vs
      },
      exit: {
        atxHeading: Us,
        atxHeadingSequence: $s,
        autolinkEmail: ea,
        autolinkProtocol: Zs,
        blockQuote: Q,
        characterEscapeValue: mt,
        characterReferenceMarkerHexadecimal: cr,
        characterReferenceMarkerNumeric: cr,
        characterReferenceValue: Xs,
        codeFenced: m,
        codeFencedFence: de,
        codeFencedFenceInfo: g,
        codeFencedFenceMeta: P,
        codeFlowValue: qs,
        codeIndented: m,
        codeText: Gs,
        codeTextData: mt,
        data: mt,
        definition: Ls,
        definitionDestinationString: Rs,
        definitionLabelString: Ne,
        definitionTitleString: js,
        emphasis: Js,
        hardBreakEscape: lr,
        hardBreakTrailing: lr,
        htmlFlow: ur,
        htmlFlowData: mt,
        htmlText: ur,
        htmlTextData: mt,
        image: J,
        label: N,
        labelText: T,
        lineEnding: Ms,
        link: J,
        listOrdered: A,
        listUnordered: H,
        paragraph: ie,
        reference: P,
        referenceString: B,
        resource: P,
        resourceDestinationString: ne,
        resourceTitleString: se,
        setextHeading: zs,
        setextHeadingLineSequence: Fs,
        setextHeadingText: Bs,
        strong: Ys,
        thematicBreak: Qs
      }
    }, ...t.htmlExtensions || []])
  ), u = {
    definitions: r,
    tightStack: a
  }, h = {
    buffer: y,
    encode: v,
    getData: b,
    lineEndingIfNeeded: C,
    options: t,
    raw: _,
    resume: w,
    setData: p,
    tag: k
  };
  let c = t.defaultLineEnding;
  return f;
  function f(E) {
    let R = -1, ae = 0;
    const ve = [];
    let Ee = [], Ie = [];
    for (; ++R < E.length; )
      !c && (E[R][1].type === "lineEnding" || E[R][1].type === "lineEndingBlank") && (c = /** @type {LineEnding} */
      E[R][2].sliceSerialize(E[R][1])), (E[R][1].type === "listOrdered" || E[R][1].type === "listUnordered") && (E[R][0] === "enter" ? ve.push(R) : d(E.slice(ve.pop(), R))), E[R][1].type === "definition" && (E[R][0] === "enter" ? (Ie = le(Ie, E.slice(ae, R)), ae = R) : (Ee = le(Ee, E.slice(ae, R + 1)), ae = R + 1));
    Ee = le(Ee, Ie), Ee = le(Ee, E.slice(ae)), R = -1;
    const xe = Ee;
    for (l.enter.null && l.enter.null.call(h); ++R < E.length; ) {
      const dr = l[xe[R][0]], fr = xe[R][1].type, pr = dr[fr];
      mr.call(dr, fr) && pr && pr.call({
        sliceSerialize: xe[R][2].sliceSerialize,
        ...h
      }, xe[R][1]);
    }
    return l.exit.null && l.exit.null.call(h), i[0].join("");
  }
  function d(E) {
    const R = E.length;
    let ae = 0, ve = 0, Ee = !1, Ie;
    for (; ++ae < R; ) {
      const xe = E[ae];
      if (xe[1]._container)
        Ie = void 0, xe[0] === "enter" ? ve++ : ve--;
      else switch (xe[1].type) {
        case "listItemPrefix": {
          xe[0] === "exit" && (Ie = !0);
          break;
        }
        case "linePrefix":
          break;
        case "lineEndingBlank": {
          xe[0] === "enter" && !ve && (Ie ? Ie = void 0 : Ee = !0);
          break;
        }
        default:
          Ie = void 0;
      }
    }
    E[0][1]._loose = Ee;
  }
  function p(E, R) {
    u[E] = R;
  }
  function b(E) {
    return u[E];
  }
  function y() {
    i.push([]);
  }
  function w() {
    return i.pop().join("");
  }
  function k(E) {
    e && (p("lastWasTag", !0), i[i.length - 1].push(E));
  }
  function _(E) {
    p("lastWasTag"), i[i.length - 1].push(E);
  }
  function x() {
    _(c || `
`);
  }
  function C() {
    const E = i[i.length - 1], R = E[E.length - 1], ae = R ? R.charCodeAt(R.length - 1) : null;
    ae === 10 || ae === 13 || ae === null || x();
  }
  function v(E) {
    return b("ignoreEncode") ? E : ei(E);
  }
  function P() {
    w();
  }
  function z(E) {
    a.push(!E._loose), C(), k("<ol"), p("expectFirstItem", !0);
  }
  function M(E) {
    a.push(!E._loose), C(), k("<ul"), p("expectFirstItem", !0);
  }
  function S(E) {
    if (b("expectFirstItem")) {
      const R = Number.parseInt(this.sliceSerialize(E), 10);
      R !== 1 && k(' start="' + v(String(R)) + '"');
    }
  }
  function I() {
    b("expectFirstItem") ? k(">") : V(), C(), k("<li>"), p("expectFirstItem"), p("lastWasTag");
  }
  function A() {
    V(), a.pop(), x(), k("</ol>");
  }
  function H() {
    V(), a.pop(), x(), k("</ul>");
  }
  function V() {
    b("lastWasTag") && !b("slurpAllLineEndings") && C(), k("</li>"), p("slurpAllLineEndings");
  }
  function q() {
    a.push(!1), C(), k("<blockquote>");
  }
  function Q() {
    a.pop(), C(), k("</blockquote>"), p("slurpAllLineEndings");
  }
  function Z() {
    a[a.length - 1] || (C(), k("<p>")), p("slurpAllLineEndings");
  }
  function ie() {
    a[a.length - 1] ? p("slurpAllLineEndings", !0) : k("</p>");
  }
  function ce() {
    C(), k("<pre><code"), p("fencesCount", 0);
  }
  function g() {
    const E = w();
    k(' class="language-' + E + '"');
  }
  function de() {
    const E = b("fencesCount") || 0;
    E || (k(">"), p("slurpOneLineEnding", !0)), p("fencesCount", E + 1);
  }
  function we() {
    C(), k("<pre><code>");
  }
  function m() {
    const E = b("fencesCount");
    E !== void 0 && E < 2 && u.tightStack.length > 0 && !b("lastWasTag") && x(), b("flowCodeSeenData") && C(), k("</code></pre>"), E !== void 0 && E < 2 && C(), p("flowCodeSeenData"), p("fencesCount"), p("slurpOneLineEnding");
  }
  function fe() {
    s.push({
      image: !0
    }), e = void 0;
  }
  function Pe() {
    s.push({});
  }
  function T(E) {
    s[s.length - 1].labelId = this.sliceSerialize(E);
  }
  function N() {
    s[s.length - 1].label = w();
  }
  function B(E) {
    s[s.length - 1].referenceId = this.sliceSerialize(E);
  }
  function G() {
    y(), s[s.length - 1].destination = "";
  }
  function ee() {
    y(), p("ignoreEncode", !0);
  }
  function ne() {
    s[s.length - 1].destination = w(), p("ignoreEncode");
  }
  function se() {
    s[s.length - 1].title = w();
  }
  function J() {
    let E = s.length - 1;
    const R = s[E], ae = R.referenceId || R.labelId, ve = R.destination === void 0 ? r[Ae(ae)] : R;
    for (e = !0; E--; )
      if (s[E].image) {
        e = void 0;
        break;
      }
    R.image ? (k('<img src="' + Je(ve.destination, t.allowDangerousProtocol ? void 0 : da) + '" alt="'), _(R.label), k('"')) : k('<a href="' + Je(ve.destination, t.allowDangerousProtocol ? void 0 : br) + '"'), k(ve.title ? ' title="' + ve.title + '"' : ""), R.image ? k(" />") : (k(">"), _(R.label), k("</a>")), s.pop();
  }
  function $e() {
    y(), s.push({});
  }
  function Ne(E) {
    w(), s[s.length - 1].labelId = this.sliceSerialize(E);
  }
  function un() {
    y(), p("ignoreEncode", !0);
  }
  function Rs() {
    s[s.length - 1].destination = w(), p("ignoreEncode");
  }
  function js() {
    s[s.length - 1].title = w();
  }
  function Ls() {
    const E = s[s.length - 1], R = Ae(E.labelId);
    w(), mr.call(r, R) || (r[R] = s[s.length - 1]), s.pop();
  }
  function Ds() {
    p("slurpAllLineEndings", !0);
  }
  function $s(E) {
    b("headingRank") || (p("headingRank", this.sliceSerialize(E).length), C(), k("<h" + b("headingRank") + ">"));
  }
  function Ns() {
    y(), p("slurpAllLineEndings");
  }
  function Bs() {
    p("slurpAllLineEndings", !0);
  }
  function Us() {
    k("</h" + b("headingRank") + ">"), p("headingRank");
  }
  function Fs(E) {
    p("headingRank", this.sliceSerialize(E).charCodeAt(0) === 61 ? 1 : 2);
  }
  function zs() {
    const E = w();
    C(), k("<h" + b("headingRank") + ">"), _(E), k("</h" + b("headingRank") + ">"), p("slurpAllLineEndings"), p("headingRank");
  }
  function mt(E) {
    _(v(this.sliceSerialize(E)));
  }
  function Ms(E) {
    if (!b("slurpAllLineEndings")) {
      if (b("slurpOneLineEnding")) {
        p("slurpOneLineEnding");
        return;
      }
      if (b("inCodeText")) {
        _(" ");
        return;
      }
      _(v(this.sliceSerialize(E)));
    }
  }
  function qs(E) {
    _(v(this.sliceSerialize(E))), p("flowCodeSeenData", !0);
  }
  function lr() {
    k("<br />");
  }
  function Ws() {
    C(), hr();
  }
  function ur() {
    p("ignoreEncode");
  }
  function hr() {
    t.allowDangerousHtml && p("ignoreEncode", !0);
  }
  function Hs() {
    k("<em>");
  }
  function Vs() {
    k("<strong>");
  }
  function Ks() {
    p("inCodeText", !0), k("<code>");
  }
  function Gs() {
    p("inCodeText"), k("</code>");
  }
  function Js() {
    k("</em>");
  }
  function Ys() {
    k("</strong>");
  }
  function Qs() {
    C(), k("<hr />");
  }
  function cr(E) {
    p("characterReferenceType", E.type);
  }
  function Xs(E) {
    const R = this.sliceSerialize(E), ae = b("characterReferenceType") ? aa(R, b("characterReferenceType") === "characterReferenceMarkerNumeric" ? 10 : 16) : Qr(R);
    _(v(
      /** @type {string} */
      ae
    )), p("characterReferenceType");
  }
  function Zs(E) {
    const R = this.sliceSerialize(E);
    k('<a href="' + Je(R, t.allowDangerousProtocol ? void 0 : br) + '">'), _(v(R)), k("</a>");
  }
  function ea(E) {
    const R = this.sliceSerialize(E);
    k('<a href="' + Je("mailto:" + R) + '">'), _(v(R)), k("</a>");
  }
}
function W(n, t, e, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let s = 0;
  return a;
  function a(l) {
    return F(l) ? (n.enter(e), o(l)) : t(l);
  }
  function o(l) {
    return F(l) && s++ < i ? (n.consume(l), o) : (n.exit(e), t(l));
  }
}
const pa = {
  tokenize: ga
};
function ga(n) {
  const t = n.attempt(this.parser.constructs.contentInitial, r, i);
  let e;
  return t;
  function r(o) {
    if (o === null) {
      n.consume(o);
      return;
    }
    return n.enter("lineEnding"), n.consume(o), n.exit("lineEnding"), W(n, t, "linePrefix");
  }
  function i(o) {
    return n.enter("paragraph"), s(o);
  }
  function s(o) {
    const l = n.enter("chunkText", {
      contentType: "text",
      previous: e
    });
    return e && (e.next = l), e = l, a(o);
  }
  function a(o) {
    if (o === null) {
      n.exit("chunkText"), n.exit("paragraph"), n.consume(o);
      return;
    }
    return D(o) ? (n.consume(o), n.exit("chunkText"), s) : (n.consume(o), a);
  }
}
const ma = {
  tokenize: ba
}, yr = {
  tokenize: ya
};
function ba(n) {
  const t = this, e = [];
  let r = 0, i, s, a;
  return o;
  function o(_) {
    if (r < e.length) {
      const x = e[r];
      return t.containerState = x[1], n.attempt(x[0].continuation, l, u)(_);
    }
    return u(_);
  }
  function l(_) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && k();
      const x = t.events.length;
      let C = x, v;
      for (; C--; )
        if (t.events[C][0] === "exit" && t.events[C][1].type === "chunkFlow") {
          v = t.events[C][1].end;
          break;
        }
      w(r);
      let P = x;
      for (; P < t.events.length; )
        t.events[P][1].end = {
          ...v
        }, P++;
      return ye(t.events, C + 1, 0, t.events.slice(x)), t.events.length = P, u(_);
    }
    return o(_);
  }
  function u(_) {
    if (r === e.length) {
      if (!i)
        return f(_);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return p(_);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, n.check(yr, h, c)(_);
  }
  function h(_) {
    return i && k(), w(r), f(_);
  }
  function c(_) {
    return t.parser.lazy[t.now().line] = r !== e.length, a = t.now().offset, p(_);
  }
  function f(_) {
    return t.containerState = {}, n.attempt(yr, d, p)(_);
  }
  function d(_) {
    return r++, e.push([t.currentConstruct, t.containerState]), f(_);
  }
  function p(_) {
    if (_ === null) {
      i && k(), w(0), n.consume(_);
      return;
    }
    return i = i || t.parser.flow(t.now()), n.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: s
    }), b(_);
  }
  function b(_) {
    if (_ === null) {
      y(n.exit("chunkFlow"), !0), w(0), n.consume(_);
      return;
    }
    return D(_) ? (n.consume(_), y(n.exit("chunkFlow")), r = 0, t.interrupt = void 0, o) : (n.consume(_), b);
  }
  function y(_, x) {
    const C = t.sliceStream(_);
    if (x && C.push(null), _.previous = s, s && (s.next = _), s = _, i.defineSkip(_.start), i.write(C), t.parser.lazy[_.start.line]) {
      let v = i.events.length;
      for (; v--; )
        if (
          // The token starts before the line ending…
          i.events[v][1].start.offset < a && // …and either is not ended yet…
          (!i.events[v][1].end || // …or ends after it.
          i.events[v][1].end.offset > a)
        )
          return;
      const P = t.events.length;
      let z = P, M, S;
      for (; z--; )
        if (t.events[z][0] === "exit" && t.events[z][1].type === "chunkFlow") {
          if (M) {
            S = t.events[z][1].end;
            break;
          }
          M = !0;
        }
      for (w(r), v = P; v < t.events.length; )
        t.events[v][1].end = {
          ...S
        }, v++;
      ye(t.events, z + 1, 0, t.events.slice(P)), t.events.length = v;
    }
  }
  function w(_) {
    let x = e.length;
    for (; x-- > _; ) {
      const C = e[x];
      t.containerState = C[1], C[0].exit.call(t, n);
    }
    e.length = _;
  }
  function k() {
    i.write([null]), s = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function ya(n, t, e) {
  return W(n, n.attempt(this.parser.constructs.document, t, e), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Wt(n) {
  if (n === null || K(n) || ut(n))
    return 1;
  if (Vn(n))
    return 2;
}
function nn(n, t, e) {
  const r = [];
  let i = -1;
  for (; ++i < n.length; ) {
    const s = n[i].resolveAll;
    s && !r.includes(s) && (t = s(t, e), r.push(s));
  }
  return t;
}
const xn = {
  name: "attention",
  resolveAll: wa,
  tokenize: va
};
function wa(n, t) {
  let e = -1, r, i, s, a, o, l, u, h;
  for (; ++e < n.length; )
    if (n[e][0] === "enter" && n[e][1].type === "attentionSequence" && n[e][1]._close) {
      for (r = e; r--; )
        if (n[r][0] === "exit" && n[r][1].type === "attentionSequence" && n[r][1]._open && // If the markers are the same:
        t.sliceSerialize(n[r][1]).charCodeAt(0) === t.sliceSerialize(n[e][1]).charCodeAt(0)) {
          if ((n[r][1]._close || n[e][1]._open) && (n[e][1].end.offset - n[e][1].start.offset) % 3 && !((n[r][1].end.offset - n[r][1].start.offset + n[e][1].end.offset - n[e][1].start.offset) % 3))
            continue;
          l = n[r][1].end.offset - n[r][1].start.offset > 1 && n[e][1].end.offset - n[e][1].start.offset > 1 ? 2 : 1;
          const c = {
            ...n[r][1].end
          }, f = {
            ...n[e][1].start
          };
          wr(c, -l), wr(f, l), a = {
            type: l > 1 ? "strongSequence" : "emphasisSequence",
            start: c,
            end: {
              ...n[r][1].end
            }
          }, o = {
            type: l > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...n[e][1].start
            },
            end: f
          }, s = {
            type: l > 1 ? "strongText" : "emphasisText",
            start: {
              ...n[r][1].end
            },
            end: {
              ...n[e][1].start
            }
          }, i = {
            type: l > 1 ? "strong" : "emphasis",
            start: {
              ...a.start
            },
            end: {
              ...o.end
            }
          }, n[r][1].end = {
            ...a.start
          }, n[e][1].start = {
            ...o.end
          }, u = [], n[r][1].end.offset - n[r][1].start.offset && (u = le(u, [["enter", n[r][1], t], ["exit", n[r][1], t]])), u = le(u, [["enter", i, t], ["enter", a, t], ["exit", a, t], ["enter", s, t]]), u = le(u, nn(t.parser.constructs.insideSpan.null, n.slice(r + 1, e), t)), u = le(u, [["exit", s, t], ["enter", o, t], ["exit", o, t], ["exit", i, t]]), n[e][1].end.offset - n[e][1].start.offset ? (h = 2, u = le(u, [["enter", n[e][1], t], ["exit", n[e][1], t]])) : h = 0, ye(n, r - 1, e - r + 3, u), e = r + u.length - h - 2;
          break;
        }
    }
  for (e = -1; ++e < n.length; )
    n[e][1].type === "attentionSequence" && (n[e][1].type = "data");
  return n;
}
function va(n, t) {
  const e = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Wt(r);
  let s;
  return a;
  function a(l) {
    return s = l, n.enter("attentionSequence"), o(l);
  }
  function o(l) {
    if (l === s)
      return n.consume(l), o;
    const u = n.exit("attentionSequence"), h = Wt(l), c = !h || h === 2 && i || e.includes(l), f = !i || i === 2 && h || e.includes(r);
    return u._open = !!(s === 42 ? c : c && (i || !f)), u._close = !!(s === 42 ? f : f && (h || !c)), t(l);
  }
}
function wr(n, t) {
  n.column += t, n.offset += t, n._bufferIndex += t;
}
const _a = {
  name: "autolink",
  tokenize: ka
};
function ka(n, t, e) {
  let r = 0;
  return i;
  function i(d) {
    return n.enter("autolink"), n.enter("autolinkMarker"), n.consume(d), n.exit("autolinkMarker"), n.enter("autolinkProtocol"), s;
  }
  function s(d) {
    return he(d) ? (n.consume(d), a) : d === 64 ? e(d) : u(d);
  }
  function a(d) {
    return d === 43 || d === 45 || d === 46 || ue(d) ? (r = 1, o(d)) : u(d);
  }
  function o(d) {
    return d === 58 ? (n.consume(d), r = 0, l) : (d === 43 || d === 45 || d === 46 || ue(d)) && r++ < 32 ? (n.consume(d), o) : (r = 0, u(d));
  }
  function l(d) {
    return d === 62 ? (n.exit("autolinkProtocol"), n.enter("autolinkMarker"), n.consume(d), n.exit("autolinkMarker"), n.exit("autolink"), t) : d === null || d === 32 || d === 60 || qt(d) ? e(d) : (n.consume(d), l);
  }
  function u(d) {
    return d === 64 ? (n.consume(d), h) : la(d) ? (n.consume(d), u) : e(d);
  }
  function h(d) {
    return ue(d) ? c(d) : e(d);
  }
  function c(d) {
    return d === 46 ? (n.consume(d), r = 0, h) : d === 62 ? (n.exit("autolinkProtocol").type = "autolinkEmail", n.enter("autolinkMarker"), n.consume(d), n.exit("autolinkMarker"), n.exit("autolink"), t) : f(d);
  }
  function f(d) {
    if ((d === 45 || ue(d)) && r++ < 63) {
      const p = d === 45 ? f : c;
      return n.consume(d), p;
    }
    return e(d);
  }
}
const At = {
  partial: !0,
  tokenize: Sa
};
function Sa(n, t, e) {
  return r;
  function r(s) {
    return F(s) ? W(n, i, "linePrefix")(s) : i(s);
  }
  function i(s) {
    return s === null || D(s) ? t(s) : e(s);
  }
}
const ti = {
  continuation: {
    tokenize: xa
  },
  exit: Ta,
  name: "blockQuote",
  tokenize: Ea
};
function Ea(n, t, e) {
  const r = this;
  return i;
  function i(a) {
    if (a === 62) {
      const o = r.containerState;
      return o.open || (n.enter("blockQuote", {
        _container: !0
      }), o.open = !0), n.enter("blockQuotePrefix"), n.enter("blockQuoteMarker"), n.consume(a), n.exit("blockQuoteMarker"), s;
    }
    return e(a);
  }
  function s(a) {
    return F(a) ? (n.enter("blockQuotePrefixWhitespace"), n.consume(a), n.exit("blockQuotePrefixWhitespace"), n.exit("blockQuotePrefix"), t) : (n.exit("blockQuotePrefix"), t(a));
  }
}
function xa(n, t, e) {
  const r = this;
  return i;
  function i(a) {
    return F(a) ? W(n, s, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a) : s(a);
  }
  function s(a) {
    return n.attempt(ti, t, e)(a);
  }
}
function Ta(n) {
  n.exit("blockQuote");
}
const ni = {
  name: "characterEscape",
  tokenize: Ca
};
function Ca(n, t, e) {
  return r;
  function r(s) {
    return n.enter("characterEscape"), n.enter("escapeMarker"), n.consume(s), n.exit("escapeMarker"), i;
  }
  function i(s) {
    return ha(s) ? (n.enter("characterEscapeValue"), n.consume(s), n.exit("characterEscapeValue"), n.exit("characterEscape"), t) : e(s);
  }
}
const ri = {
  name: "characterReference",
  tokenize: Aa
};
function Aa(n, t, e) {
  const r = this;
  let i = 0, s, a;
  return o;
  function o(c) {
    return n.enter("characterReference"), n.enter("characterReferenceMarker"), n.consume(c), n.exit("characterReferenceMarker"), l;
  }
  function l(c) {
    return c === 35 ? (n.enter("characterReferenceMarkerNumeric"), n.consume(c), n.exit("characterReferenceMarkerNumeric"), u) : (n.enter("characterReferenceValue"), s = 31, a = ue, h(c));
  }
  function u(c) {
    return c === 88 || c === 120 ? (n.enter("characterReferenceMarkerHexadecimal"), n.consume(c), n.exit("characterReferenceMarkerHexadecimal"), n.enter("characterReferenceValue"), s = 6, a = ua, h) : (n.enter("characterReferenceValue"), s = 7, a = En, h(c));
  }
  function h(c) {
    if (c === 59 && i) {
      const f = n.exit("characterReferenceValue");
      return a === ue && !Qr(r.sliceSerialize(f)) ? e(c) : (n.enter("characterReferenceMarker"), n.consume(c), n.exit("characterReferenceMarker"), n.exit("characterReference"), t);
    }
    return a(c) && i++ < s ? (n.consume(c), h) : e(c);
  }
}
const vr = {
  partial: !0,
  tokenize: Pa
}, _r = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Oa
};
function Oa(n, t, e) {
  const r = this, i = {
    partial: !0,
    tokenize: C
  };
  let s = 0, a = 0, o;
  return l;
  function l(v) {
    return u(v);
  }
  function u(v) {
    const P = r.events[r.events.length - 1];
    return s = P && P[1].type === "linePrefix" ? P[2].sliceSerialize(P[1], !0).length : 0, o = v, n.enter("codeFenced"), n.enter("codeFencedFence"), n.enter("codeFencedFenceSequence"), h(v);
  }
  function h(v) {
    return v === o ? (a++, n.consume(v), h) : a < 3 ? e(v) : (n.exit("codeFencedFenceSequence"), F(v) ? W(n, c, "whitespace")(v) : c(v));
  }
  function c(v) {
    return v === null || D(v) ? (n.exit("codeFencedFence"), r.interrupt ? t(v) : n.check(vr, b, x)(v)) : (n.enter("codeFencedFenceInfo"), n.enter("chunkString", {
      contentType: "string"
    }), f(v));
  }
  function f(v) {
    return v === null || D(v) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), c(v)) : F(v) ? (n.exit("chunkString"), n.exit("codeFencedFenceInfo"), W(n, d, "whitespace")(v)) : v === 96 && v === o ? e(v) : (n.consume(v), f);
  }
  function d(v) {
    return v === null || D(v) ? c(v) : (n.enter("codeFencedFenceMeta"), n.enter("chunkString", {
      contentType: "string"
    }), p(v));
  }
  function p(v) {
    return v === null || D(v) ? (n.exit("chunkString"), n.exit("codeFencedFenceMeta"), c(v)) : v === 96 && v === o ? e(v) : (n.consume(v), p);
  }
  function b(v) {
    return n.attempt(i, x, y)(v);
  }
  function y(v) {
    return n.enter("lineEnding"), n.consume(v), n.exit("lineEnding"), w;
  }
  function w(v) {
    return s > 0 && F(v) ? W(n, k, "linePrefix", s + 1)(v) : k(v);
  }
  function k(v) {
    return v === null || D(v) ? n.check(vr, b, x)(v) : (n.enter("codeFlowValue"), _(v));
  }
  function _(v) {
    return v === null || D(v) ? (n.exit("codeFlowValue"), k(v)) : (n.consume(v), _);
  }
  function x(v) {
    return n.exit("codeFenced"), t(v);
  }
  function C(v, P, z) {
    let M = 0;
    return S;
    function S(q) {
      return v.enter("lineEnding"), v.consume(q), v.exit("lineEnding"), I;
    }
    function I(q) {
      return v.enter("codeFencedFence"), F(q) ? W(v, A, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(q) : A(q);
    }
    function A(q) {
      return q === o ? (v.enter("codeFencedFenceSequence"), H(q)) : z(q);
    }
    function H(q) {
      return q === o ? (M++, v.consume(q), H) : M >= a ? (v.exit("codeFencedFenceSequence"), F(q) ? W(v, V, "whitespace")(q) : V(q)) : z(q);
    }
    function V(q) {
      return q === null || D(q) ? (v.exit("codeFencedFence"), P(q)) : z(q);
    }
  }
}
function Pa(n, t, e) {
  const r = this;
  return i;
  function i(a) {
    return a === null ? e(a) : (n.enter("lineEnding"), n.consume(a), n.exit("lineEnding"), s);
  }
  function s(a) {
    return r.parser.lazy[r.now().line] ? e(a) : t(a);
  }
}
const hn = {
  name: "codeIndented",
  tokenize: Ra
}, Ia = {
  partial: !0,
  tokenize: ja
};
function Ra(n, t, e) {
  const r = this;
  return i;
  function i(u) {
    return n.enter("codeIndented"), W(n, s, "linePrefix", 5)(u);
  }
  function s(u) {
    const h = r.events[r.events.length - 1];
    return h && h[1].type === "linePrefix" && h[2].sliceSerialize(h[1], !0).length >= 4 ? a(u) : e(u);
  }
  function a(u) {
    return u === null ? l(u) : D(u) ? n.attempt(Ia, a, l)(u) : (n.enter("codeFlowValue"), o(u));
  }
  function o(u) {
    return u === null || D(u) ? (n.exit("codeFlowValue"), a(u)) : (n.consume(u), o);
  }
  function l(u) {
    return n.exit("codeIndented"), t(u);
  }
}
function ja(n, t, e) {
  const r = this;
  return i;
  function i(a) {
    return r.parser.lazy[r.now().line] ? e(a) : D(a) ? (n.enter("lineEnding"), n.consume(a), n.exit("lineEnding"), i) : W(n, s, "linePrefix", 5)(a);
  }
  function s(a) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "linePrefix" && o[2].sliceSerialize(o[1], !0).length >= 4 ? t(a) : D(a) ? i(a) : e(a);
  }
}
const La = {
  name: "codeText",
  previous: $a,
  resolve: Da,
  tokenize: Na
};
function Da(n) {
  let t = n.length - 4, e = 3, r, i;
  if ((n[e][1].type === "lineEnding" || n[e][1].type === "space") && (n[t][1].type === "lineEnding" || n[t][1].type === "space")) {
    for (r = e; ++r < t; )
      if (n[r][1].type === "codeTextData") {
        n[e][1].type = "codeTextPadding", n[t][1].type = "codeTextPadding", e += 2, t -= 2;
        break;
      }
  }
  for (r = e - 1, t++; ++r <= t; )
    i === void 0 ? r !== t && n[r][1].type !== "lineEnding" && (i = r) : (r === t || n[r][1].type === "lineEnding") && (n[i][1].type = "codeTextData", r !== i + 2 && (n[i][1].end = n[r - 1][1].end, n.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
  return n;
}
function $a(n) {
  return n !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Na(n, t, e) {
  let r = 0, i, s;
  return a;
  function a(c) {
    return n.enter("codeText"), n.enter("codeTextSequence"), o(c);
  }
  function o(c) {
    return c === 96 ? (n.consume(c), r++, o) : (n.exit("codeTextSequence"), l(c));
  }
  function l(c) {
    return c === null ? e(c) : c === 32 ? (n.enter("space"), n.consume(c), n.exit("space"), l) : c === 96 ? (s = n.enter("codeTextSequence"), i = 0, h(c)) : D(c) ? (n.enter("lineEnding"), n.consume(c), n.exit("lineEnding"), l) : (n.enter("codeTextData"), u(c));
  }
  function u(c) {
    return c === null || c === 32 || c === 96 || D(c) ? (n.exit("codeTextData"), l(c)) : (n.consume(c), u);
  }
  function h(c) {
    return c === 96 ? (n.consume(c), i++, h) : i === r ? (n.exit("codeTextSequence"), n.exit("codeText"), t(c)) : (s.type = "codeTextData", u(c));
  }
}
class Ba {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(t) {
    this.left = t ? [...t] : [], this.right = [];
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
  get(t) {
    if (t < 0 || t >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + t + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return t < this.left.length ? this.left[t] : this.right[this.right.length - t + this.left.length - 1];
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
  slice(t, e) {
    const r = e ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(t, r) : t > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
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
  splice(t, e, r) {
    const i = e || 0;
    this.setCursor(Math.trunc(t));
    const s = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && bt(this.left, r), s.reverse();
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
  push(t) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t);
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
  pushMany(t) {
    this.setCursor(Number.POSITIVE_INFINITY), bt(this.left, t);
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
  unshift(t) {
    this.setCursor(0), this.right.push(t);
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
  unshiftMany(t) {
    this.setCursor(0), bt(this.right, t.reverse());
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
  setCursor(t) {
    if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0))
      if (t < this.left.length) {
        const e = this.left.splice(t, Number.POSITIVE_INFINITY);
        bt(this.right, e.reverse());
      } else {
        const e = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        bt(this.left, e.reverse());
      }
  }
}
function bt(n, t) {
  let e = 0;
  if (t.length < 1e4)
    n.push(...t);
  else
    for (; e < t.length; )
      n.push(...t.slice(e, e + 1e4)), e += 1e4;
}
function ii(n) {
  const t = {};
  let e = -1, r, i, s, a, o, l, u;
  const h = new Ba(n);
  for (; ++e < h.length; ) {
    for (; e in t; )
      e = t[e];
    if (r = h.get(e), e && r[1].type === "chunkFlow" && h.get(e - 1)[1].type === "listItemPrefix" && (l = r[1]._tokenizer.events, s = 0, s < l.length && l[s][1].type === "lineEndingBlank" && (s += 2), s < l.length && l[s][1].type === "content"))
      for (; ++s < l.length && l[s][1].type !== "content"; )
        l[s][1].type === "chunkText" && (l[s][1]._isInFirstContentOfListItem = !0, s++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, Ua(h, e)), e = t[e], u = !0);
    else if (r[1]._container) {
      for (s = e, i = void 0; s--; )
        if (a = h.get(s), a[1].type === "lineEnding" || a[1].type === "lineEndingBlank")
          a[0] === "enter" && (i && (h.get(i)[1].type = "lineEndingBlank"), a[1].type = "lineEnding", i = s);
        else if (!(a[1].type === "linePrefix" || a[1].type === "listItemIndent")) break;
      i && (r[1].end = {
        ...h.get(i)[1].start
      }, o = h.slice(i, e), o.unshift(r), h.splice(i, e - i + 1, o));
    }
  }
  return ye(n, 0, Number.POSITIVE_INFINITY, h.slice(0)), !u;
}
function Ua(n, t) {
  const e = n.get(t)[1], r = n.get(t)[2];
  let i = t - 1;
  const s = [];
  let a = e._tokenizer;
  a || (a = r.parser[e.contentType](e.start), e._contentTypeTextTrailing && (a._contentTypeTextTrailing = !0));
  const o = a.events, l = [], u = {};
  let h, c, f = -1, d = e, p = 0, b = 0;
  const y = [b];
  for (; d; ) {
    for (; n.get(++i)[1] !== d; )
      ;
    s.push(i), d._tokenizer || (h = r.sliceStream(d), d.next || h.push(null), c && a.defineSkip(d.start), d._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = !0), a.write(h), d._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = void 0)), c = d, d = d.next;
  }
  for (d = e; ++f < o.length; )
    // Find a void token that includes a break.
    o[f][0] === "exit" && o[f - 1][0] === "enter" && o[f][1].type === o[f - 1][1].type && o[f][1].start.line !== o[f][1].end.line && (b = f + 1, y.push(b), d._tokenizer = void 0, d.previous = void 0, d = d.next);
  for (a.events = [], d ? (d._tokenizer = void 0, d.previous = void 0) : y.pop(), f = y.length; f--; ) {
    const w = o.slice(y[f], y[f + 1]), k = s.pop();
    l.push([k, k + w.length - 1]), n.splice(k, 2, w);
  }
  for (l.reverse(), f = -1; ++f < l.length; )
    u[p + l[f][0]] = p + l[f][1], p += l[f][1] - l[f][0] - 1;
  return u;
}
const Fa = {
  resolve: Ma,
  tokenize: qa
}, za = {
  partial: !0,
  tokenize: Wa
};
function Ma(n) {
  return ii(n), n;
}
function qa(n, t) {
  let e;
  return r;
  function r(o) {
    return n.enter("content"), e = n.enter("chunkContent", {
      contentType: "content"
    }), i(o);
  }
  function i(o) {
    return o === null ? s(o) : D(o) ? n.check(za, a, s)(o) : (n.consume(o), i);
  }
  function s(o) {
    return n.exit("chunkContent"), n.exit("content"), t(o);
  }
  function a(o) {
    return n.consume(o), n.exit("chunkContent"), e.next = n.enter("chunkContent", {
      contentType: "content",
      previous: e
    }), e = e.next, i;
  }
}
function Wa(n, t, e) {
  const r = this;
  return i;
  function i(a) {
    return n.exit("chunkContent"), n.enter("lineEnding"), n.consume(a), n.exit("lineEnding"), W(n, s, "linePrefix");
  }
  function s(a) {
    if (a === null || D(a))
      return e(a);
    const o = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && o && o[1].type === "linePrefix" && o[2].sliceSerialize(o[1], !0).length >= 4 ? t(a) : n.interrupt(r.parser.constructs.flow, e, t)(a);
  }
}
function si(n, t, e, r, i, s, a, o, l) {
  const u = l || Number.POSITIVE_INFINITY;
  let h = 0;
  return c;
  function c(w) {
    return w === 60 ? (n.enter(r), n.enter(i), n.enter(s), n.consume(w), n.exit(s), f) : w === null || w === 32 || w === 41 || qt(w) ? e(w) : (n.enter(r), n.enter(a), n.enter(o), n.enter("chunkString", {
      contentType: "string"
    }), b(w));
  }
  function f(w) {
    return w === 62 ? (n.enter(s), n.consume(w), n.exit(s), n.exit(i), n.exit(r), t) : (n.enter(o), n.enter("chunkString", {
      contentType: "string"
    }), d(w));
  }
  function d(w) {
    return w === 62 ? (n.exit("chunkString"), n.exit(o), f(w)) : w === null || w === 60 || D(w) ? e(w) : (n.consume(w), w === 92 ? p : d);
  }
  function p(w) {
    return w === 60 || w === 62 || w === 92 ? (n.consume(w), d) : d(w);
  }
  function b(w) {
    return !h && (w === null || w === 41 || K(w)) ? (n.exit("chunkString"), n.exit(o), n.exit(a), n.exit(r), t(w)) : h < u && w === 40 ? (n.consume(w), h++, b) : w === 41 ? (n.consume(w), h--, b) : w === null || w === 32 || w === 40 || qt(w) ? e(w) : (n.consume(w), w === 92 ? y : b);
  }
  function y(w) {
    return w === 40 || w === 41 || w === 92 ? (n.consume(w), b) : b(w);
  }
}
function ai(n, t, e, r, i, s) {
  const a = this;
  let o = 0, l;
  return u;
  function u(d) {
    return n.enter(r), n.enter(i), n.consume(d), n.exit(i), n.enter(s), h;
  }
  function h(d) {
    return o > 999 || d === null || d === 91 || d === 93 && !l || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    d === 94 && !o && "_hiddenFootnoteSupport" in a.parser.constructs ? e(d) : d === 93 ? (n.exit(s), n.enter(i), n.consume(d), n.exit(i), n.exit(r), t) : D(d) ? (n.enter("lineEnding"), n.consume(d), n.exit("lineEnding"), h) : (n.enter("chunkString", {
      contentType: "string"
    }), c(d));
  }
  function c(d) {
    return d === null || d === 91 || d === 93 || D(d) || o++ > 999 ? (n.exit("chunkString"), h(d)) : (n.consume(d), l || (l = !F(d)), d === 92 ? f : c);
  }
  function f(d) {
    return d === 91 || d === 92 || d === 93 ? (n.consume(d), o++, c) : c(d);
  }
}
function oi(n, t, e, r, i, s) {
  let a;
  return o;
  function o(f) {
    return f === 34 || f === 39 || f === 40 ? (n.enter(r), n.enter(i), n.consume(f), n.exit(i), a = f === 40 ? 41 : f, l) : e(f);
  }
  function l(f) {
    return f === a ? (n.enter(i), n.consume(f), n.exit(i), n.exit(r), t) : (n.enter(s), u(f));
  }
  function u(f) {
    return f === a ? (n.exit(s), l(a)) : f === null ? e(f) : D(f) ? (n.enter("lineEnding"), n.consume(f), n.exit("lineEnding"), W(n, u, "linePrefix")) : (n.enter("chunkString", {
      contentType: "string"
    }), h(f));
  }
  function h(f) {
    return f === a || f === null || D(f) ? (n.exit("chunkString"), u(f)) : (n.consume(f), f === 92 ? c : h);
  }
  function c(f) {
    return f === a || f === 92 ? (n.consume(f), h) : h(f);
  }
}
function _t(n, t) {
  let e;
  return r;
  function r(i) {
    return D(i) ? (n.enter("lineEnding"), n.consume(i), n.exit("lineEnding"), e = !0, r) : F(i) ? W(n, r, e ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const Ha = {
  name: "definition",
  tokenize: Ka
}, Va = {
  partial: !0,
  tokenize: Ga
};
function Ka(n, t, e) {
  const r = this;
  let i;
  return s;
  function s(d) {
    return n.enter("definition"), a(d);
  }
  function a(d) {
    return ai.call(
      r,
      n,
      o,
      // Note: we don’t need to reset the way `markdown-rs` does.
      e,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(d);
  }
  function o(d) {
    return i = Ae(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), d === 58 ? (n.enter("definitionMarker"), n.consume(d), n.exit("definitionMarker"), l) : e(d);
  }
  function l(d) {
    return K(d) ? _t(n, u)(d) : u(d);
  }
  function u(d) {
    return si(
      n,
      h,
      // Note: we don’t need to reset the way `markdown-rs` does.
      e,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(d);
  }
  function h(d) {
    return n.attempt(Va, c, c)(d);
  }
  function c(d) {
    return F(d) ? W(n, f, "whitespace")(d) : f(d);
  }
  function f(d) {
    return d === null || D(d) ? (n.exit("definition"), r.parser.defined.push(i), t(d)) : e(d);
  }
}
function Ga(n, t, e) {
  return r;
  function r(o) {
    return K(o) ? _t(n, i)(o) : e(o);
  }
  function i(o) {
    return oi(n, s, e, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(o);
  }
  function s(o) {
    return F(o) ? W(n, a, "whitespace")(o) : a(o);
  }
  function a(o) {
    return o === null || D(o) ? t(o) : e(o);
  }
}
const Ja = {
  name: "hardBreakEscape",
  tokenize: Ya
};
function Ya(n, t, e) {
  return r;
  function r(s) {
    return n.enter("hardBreakEscape"), n.consume(s), i;
  }
  function i(s) {
    return D(s) ? (n.exit("hardBreakEscape"), t(s)) : e(s);
  }
}
const Qa = {
  name: "headingAtx",
  resolve: Xa,
  tokenize: Za
};
function Xa(n, t) {
  let e = n.length - 2, r = 3, i, s;
  return n[r][1].type === "whitespace" && (r += 2), e - 2 > r && n[e][1].type === "whitespace" && (e -= 2), n[e][1].type === "atxHeadingSequence" && (r === e - 1 || e - 4 > r && n[e - 2][1].type === "whitespace") && (e -= r + 1 === e ? 2 : 4), e > r && (i = {
    type: "atxHeadingText",
    start: n[r][1].start,
    end: n[e][1].end
  }, s = {
    type: "chunkText",
    start: n[r][1].start,
    end: n[e][1].end,
    contentType: "text"
  }, ye(n, r, e - r + 1, [["enter", i, t], ["enter", s, t], ["exit", s, t], ["exit", i, t]])), n;
}
function Za(n, t, e) {
  let r = 0;
  return i;
  function i(h) {
    return n.enter("atxHeading"), s(h);
  }
  function s(h) {
    return n.enter("atxHeadingSequence"), a(h);
  }
  function a(h) {
    return h === 35 && r++ < 6 ? (n.consume(h), a) : h === null || K(h) ? (n.exit("atxHeadingSequence"), o(h)) : e(h);
  }
  function o(h) {
    return h === 35 ? (n.enter("atxHeadingSequence"), l(h)) : h === null || D(h) ? (n.exit("atxHeading"), t(h)) : F(h) ? W(n, o, "whitespace")(h) : (n.enter("atxHeadingText"), u(h));
  }
  function l(h) {
    return h === 35 ? (n.consume(h), l) : (n.exit("atxHeadingSequence"), o(h));
  }
  function u(h) {
    return h === null || h === 35 || K(h) ? (n.exit("atxHeadingText"), o(h)) : (n.consume(h), u);
  }
}
const eo = [
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
], kr = ["pre", "script", "style", "textarea"], to = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: io,
  tokenize: so
}, no = {
  partial: !0,
  tokenize: oo
}, ro = {
  partial: !0,
  tokenize: ao
};
function io(n) {
  let t = n.length;
  for (; t-- && !(n[t][0] === "enter" && n[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && n[t - 2][1].type === "linePrefix" && (n[t][1].start = n[t - 2][1].start, n[t + 1][1].start = n[t - 2][1].start, n.splice(t - 2, 2)), n;
}
function so(n, t, e) {
  const r = this;
  let i, s, a, o, l;
  return u;
  function u(m) {
    return h(m);
  }
  function h(m) {
    return n.enter("htmlFlow"), n.enter("htmlFlowData"), n.consume(m), c;
  }
  function c(m) {
    return m === 33 ? (n.consume(m), f) : m === 47 ? (n.consume(m), s = !0, b) : m === 63 ? (n.consume(m), i = 3, r.interrupt ? t : g) : he(m) ? (n.consume(m), a = String.fromCharCode(m), y) : e(m);
  }
  function f(m) {
    return m === 45 ? (n.consume(m), i = 2, d) : m === 91 ? (n.consume(m), i = 5, o = 0, p) : he(m) ? (n.consume(m), i = 4, r.interrupt ? t : g) : e(m);
  }
  function d(m) {
    return m === 45 ? (n.consume(m), r.interrupt ? t : g) : e(m);
  }
  function p(m) {
    const fe = "CDATA[";
    return m === fe.charCodeAt(o++) ? (n.consume(m), o === fe.length ? r.interrupt ? t : A : p) : e(m);
  }
  function b(m) {
    return he(m) ? (n.consume(m), a = String.fromCharCode(m), y) : e(m);
  }
  function y(m) {
    if (m === null || m === 47 || m === 62 || K(m)) {
      const fe = m === 47, Pe = a.toLowerCase();
      return !fe && !s && kr.includes(Pe) ? (i = 1, r.interrupt ? t(m) : A(m)) : eo.includes(a.toLowerCase()) ? (i = 6, fe ? (n.consume(m), w) : r.interrupt ? t(m) : A(m)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? e(m) : s ? k(m) : _(m));
    }
    return m === 45 || ue(m) ? (n.consume(m), a += String.fromCharCode(m), y) : e(m);
  }
  function w(m) {
    return m === 62 ? (n.consume(m), r.interrupt ? t : A) : e(m);
  }
  function k(m) {
    return F(m) ? (n.consume(m), k) : S(m);
  }
  function _(m) {
    return m === 47 ? (n.consume(m), S) : m === 58 || m === 95 || he(m) ? (n.consume(m), x) : F(m) ? (n.consume(m), _) : S(m);
  }
  function x(m) {
    return m === 45 || m === 46 || m === 58 || m === 95 || ue(m) ? (n.consume(m), x) : C(m);
  }
  function C(m) {
    return m === 61 ? (n.consume(m), v) : F(m) ? (n.consume(m), C) : _(m);
  }
  function v(m) {
    return m === null || m === 60 || m === 61 || m === 62 || m === 96 ? e(m) : m === 34 || m === 39 ? (n.consume(m), l = m, P) : F(m) ? (n.consume(m), v) : z(m);
  }
  function P(m) {
    return m === l ? (n.consume(m), l = null, M) : m === null || D(m) ? e(m) : (n.consume(m), P);
  }
  function z(m) {
    return m === null || m === 34 || m === 39 || m === 47 || m === 60 || m === 61 || m === 62 || m === 96 || K(m) ? C(m) : (n.consume(m), z);
  }
  function M(m) {
    return m === 47 || m === 62 || F(m) ? _(m) : e(m);
  }
  function S(m) {
    return m === 62 ? (n.consume(m), I) : e(m);
  }
  function I(m) {
    return m === null || D(m) ? A(m) : F(m) ? (n.consume(m), I) : e(m);
  }
  function A(m) {
    return m === 45 && i === 2 ? (n.consume(m), Q) : m === 60 && i === 1 ? (n.consume(m), Z) : m === 62 && i === 4 ? (n.consume(m), de) : m === 63 && i === 3 ? (n.consume(m), g) : m === 93 && i === 5 ? (n.consume(m), ce) : D(m) && (i === 6 || i === 7) ? (n.exit("htmlFlowData"), n.check(no, we, H)(m)) : m === null || D(m) ? (n.exit("htmlFlowData"), H(m)) : (n.consume(m), A);
  }
  function H(m) {
    return n.check(ro, V, we)(m);
  }
  function V(m) {
    return n.enter("lineEnding"), n.consume(m), n.exit("lineEnding"), q;
  }
  function q(m) {
    return m === null || D(m) ? H(m) : (n.enter("htmlFlowData"), A(m));
  }
  function Q(m) {
    return m === 45 ? (n.consume(m), g) : A(m);
  }
  function Z(m) {
    return m === 47 ? (n.consume(m), a = "", ie) : A(m);
  }
  function ie(m) {
    if (m === 62) {
      const fe = a.toLowerCase();
      return kr.includes(fe) ? (n.consume(m), de) : A(m);
    }
    return he(m) && a.length < 8 ? (n.consume(m), a += String.fromCharCode(m), ie) : A(m);
  }
  function ce(m) {
    return m === 93 ? (n.consume(m), g) : A(m);
  }
  function g(m) {
    return m === 62 ? (n.consume(m), de) : m === 45 && i === 2 ? (n.consume(m), g) : A(m);
  }
  function de(m) {
    return m === null || D(m) ? (n.exit("htmlFlowData"), we(m)) : (n.consume(m), de);
  }
  function we(m) {
    return n.exit("htmlFlow"), t(m);
  }
}
function ao(n, t, e) {
  const r = this;
  return i;
  function i(a) {
    return D(a) ? (n.enter("lineEnding"), n.consume(a), n.exit("lineEnding"), s) : e(a);
  }
  function s(a) {
    return r.parser.lazy[r.now().line] ? e(a) : t(a);
  }
}
function oo(n, t, e) {
  return r;
  function r(i) {
    return n.enter("lineEnding"), n.consume(i), n.exit("lineEnding"), n.attempt(At, t, e);
  }
}
const lo = {
  name: "htmlText",
  tokenize: uo
};
function uo(n, t, e) {
  const r = this;
  let i, s, a;
  return o;
  function o(g) {
    return n.enter("htmlText"), n.enter("htmlTextData"), n.consume(g), l;
  }
  function l(g) {
    return g === 33 ? (n.consume(g), u) : g === 47 ? (n.consume(g), C) : g === 63 ? (n.consume(g), _) : he(g) ? (n.consume(g), z) : e(g);
  }
  function u(g) {
    return g === 45 ? (n.consume(g), h) : g === 91 ? (n.consume(g), s = 0, p) : he(g) ? (n.consume(g), k) : e(g);
  }
  function h(g) {
    return g === 45 ? (n.consume(g), d) : e(g);
  }
  function c(g) {
    return g === null ? e(g) : g === 45 ? (n.consume(g), f) : D(g) ? (a = c, Z(g)) : (n.consume(g), c);
  }
  function f(g) {
    return g === 45 ? (n.consume(g), d) : c(g);
  }
  function d(g) {
    return g === 62 ? Q(g) : g === 45 ? f(g) : c(g);
  }
  function p(g) {
    const de = "CDATA[";
    return g === de.charCodeAt(s++) ? (n.consume(g), s === de.length ? b : p) : e(g);
  }
  function b(g) {
    return g === null ? e(g) : g === 93 ? (n.consume(g), y) : D(g) ? (a = b, Z(g)) : (n.consume(g), b);
  }
  function y(g) {
    return g === 93 ? (n.consume(g), w) : b(g);
  }
  function w(g) {
    return g === 62 ? Q(g) : g === 93 ? (n.consume(g), w) : b(g);
  }
  function k(g) {
    return g === null || g === 62 ? Q(g) : D(g) ? (a = k, Z(g)) : (n.consume(g), k);
  }
  function _(g) {
    return g === null ? e(g) : g === 63 ? (n.consume(g), x) : D(g) ? (a = _, Z(g)) : (n.consume(g), _);
  }
  function x(g) {
    return g === 62 ? Q(g) : _(g);
  }
  function C(g) {
    return he(g) ? (n.consume(g), v) : e(g);
  }
  function v(g) {
    return g === 45 || ue(g) ? (n.consume(g), v) : P(g);
  }
  function P(g) {
    return D(g) ? (a = P, Z(g)) : F(g) ? (n.consume(g), P) : Q(g);
  }
  function z(g) {
    return g === 45 || ue(g) ? (n.consume(g), z) : g === 47 || g === 62 || K(g) ? M(g) : e(g);
  }
  function M(g) {
    return g === 47 ? (n.consume(g), Q) : g === 58 || g === 95 || he(g) ? (n.consume(g), S) : D(g) ? (a = M, Z(g)) : F(g) ? (n.consume(g), M) : Q(g);
  }
  function S(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || ue(g) ? (n.consume(g), S) : I(g);
  }
  function I(g) {
    return g === 61 ? (n.consume(g), A) : D(g) ? (a = I, Z(g)) : F(g) ? (n.consume(g), I) : M(g);
  }
  function A(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? e(g) : g === 34 || g === 39 ? (n.consume(g), i = g, H) : D(g) ? (a = A, Z(g)) : F(g) ? (n.consume(g), A) : (n.consume(g), V);
  }
  function H(g) {
    return g === i ? (n.consume(g), i = void 0, q) : g === null ? e(g) : D(g) ? (a = H, Z(g)) : (n.consume(g), H);
  }
  function V(g) {
    return g === null || g === 34 || g === 39 || g === 60 || g === 61 || g === 96 ? e(g) : g === 47 || g === 62 || K(g) ? M(g) : (n.consume(g), V);
  }
  function q(g) {
    return g === 47 || g === 62 || K(g) ? M(g) : e(g);
  }
  function Q(g) {
    return g === 62 ? (n.consume(g), n.exit("htmlTextData"), n.exit("htmlText"), t) : e(g);
  }
  function Z(g) {
    return n.exit("htmlTextData"), n.enter("lineEnding"), n.consume(g), n.exit("lineEnding"), ie;
  }
  function ie(g) {
    return F(g) ? W(n, ce, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(g) : ce(g);
  }
  function ce(g) {
    return n.enter("htmlTextData"), a(g);
  }
}
const Kn = {
  name: "labelEnd",
  resolveAll: po,
  resolveTo: go,
  tokenize: mo
}, ho = {
  tokenize: bo
}, co = {
  tokenize: yo
}, fo = {
  tokenize: wo
};
function po(n) {
  let t = -1;
  const e = [];
  for (; ++t < n.length; ) {
    const r = n[t][1];
    if (e.push(n[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += i;
    }
  }
  return n.length !== e.length && ye(n, 0, n.length, e), n;
}
function go(n, t) {
  let e = n.length, r = 0, i, s, a, o;
  for (; e--; )
    if (i = n[e][1], s) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      n[e][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (a) {
      if (n[e][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (s = e, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (a = e);
  const l = {
    type: n[s][1].type === "labelLink" ? "link" : "image",
    start: {
      ...n[s][1].start
    },
    end: {
      ...n[n.length - 1][1].end
    }
  }, u = {
    type: "label",
    start: {
      ...n[s][1].start
    },
    end: {
      ...n[a][1].end
    }
  }, h = {
    type: "labelText",
    start: {
      ...n[s + r + 2][1].end
    },
    end: {
      ...n[a - 2][1].start
    }
  };
  return o = [["enter", l, t], ["enter", u, t]], o = le(o, n.slice(s + 1, s + r + 3)), o = le(o, [["enter", h, t]]), o = le(o, nn(t.parser.constructs.insideSpan.null, n.slice(s + r + 4, a - 3), t)), o = le(o, [["exit", h, t], n[a - 2], n[a - 1], ["exit", u, t]]), o = le(o, n.slice(a + 1)), o = le(o, [["exit", l, t]]), ye(n, s, n.length, o), n;
}
function mo(n, t, e) {
  const r = this;
  let i = r.events.length, s, a;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      s = r.events[i][1];
      break;
    }
  return o;
  function o(f) {
    return s ? s._inactive ? c(f) : (a = r.parser.defined.includes(Ae(r.sliceSerialize({
      start: s.end,
      end: r.now()
    }))), n.enter("labelEnd"), n.enter("labelMarker"), n.consume(f), n.exit("labelMarker"), n.exit("labelEnd"), l) : e(f);
  }
  function l(f) {
    return f === 40 ? n.attempt(ho, h, a ? h : c)(f) : f === 91 ? n.attempt(co, h, a ? u : c)(f) : a ? h(f) : c(f);
  }
  function u(f) {
    return n.attempt(fo, h, c)(f);
  }
  function h(f) {
    return t(f);
  }
  function c(f) {
    return s._balanced = !0, e(f);
  }
}
function bo(n, t, e) {
  return r;
  function r(c) {
    return n.enter("resource"), n.enter("resourceMarker"), n.consume(c), n.exit("resourceMarker"), i;
  }
  function i(c) {
    return K(c) ? _t(n, s)(c) : s(c);
  }
  function s(c) {
    return c === 41 ? h(c) : si(n, a, o, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(c);
  }
  function a(c) {
    return K(c) ? _t(n, l)(c) : h(c);
  }
  function o(c) {
    return e(c);
  }
  function l(c) {
    return c === 34 || c === 39 || c === 40 ? oi(n, u, e, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(c) : h(c);
  }
  function u(c) {
    return K(c) ? _t(n, h)(c) : h(c);
  }
  function h(c) {
    return c === 41 ? (n.enter("resourceMarker"), n.consume(c), n.exit("resourceMarker"), n.exit("resource"), t) : e(c);
  }
}
function yo(n, t, e) {
  const r = this;
  return i;
  function i(o) {
    return ai.call(r, n, s, a, "reference", "referenceMarker", "referenceString")(o);
  }
  function s(o) {
    return r.parser.defined.includes(Ae(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(o) : e(o);
  }
  function a(o) {
    return e(o);
  }
}
function wo(n, t, e) {
  return r;
  function r(s) {
    return n.enter("reference"), n.enter("referenceMarker"), n.consume(s), n.exit("referenceMarker"), i;
  }
  function i(s) {
    return s === 93 ? (n.enter("referenceMarker"), n.consume(s), n.exit("referenceMarker"), n.exit("reference"), t) : e(s);
  }
}
const vo = {
  name: "labelStartImage",
  resolveAll: Kn.resolveAll,
  tokenize: _o
};
function _o(n, t, e) {
  const r = this;
  return i;
  function i(o) {
    return n.enter("labelImage"), n.enter("labelImageMarker"), n.consume(o), n.exit("labelImageMarker"), s;
  }
  function s(o) {
    return o === 91 ? (n.enter("labelMarker"), n.consume(o), n.exit("labelMarker"), n.exit("labelImage"), a) : e(o);
  }
  function a(o) {
    return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? e(o) : t(o);
  }
}
const ko = {
  name: "labelStartLink",
  resolveAll: Kn.resolveAll,
  tokenize: So
};
function So(n, t, e) {
  const r = this;
  return i;
  function i(a) {
    return n.enter("labelLink"), n.enter("labelMarker"), n.consume(a), n.exit("labelMarker"), n.exit("labelLink"), s;
  }
  function s(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? e(a) : t(a);
  }
}
const cn = {
  name: "lineEnding",
  tokenize: Eo
};
function Eo(n, t) {
  return e;
  function e(r) {
    return n.enter("lineEnding"), n.consume(r), n.exit("lineEnding"), W(n, t, "linePrefix");
  }
}
const Ut = {
  name: "thematicBreak",
  tokenize: xo
};
function xo(n, t, e) {
  let r = 0, i;
  return s;
  function s(u) {
    return n.enter("thematicBreak"), a(u);
  }
  function a(u) {
    return i = u, o(u);
  }
  function o(u) {
    return u === i ? (n.enter("thematicBreakSequence"), l(u)) : r >= 3 && (u === null || D(u)) ? (n.exit("thematicBreak"), t(u)) : e(u);
  }
  function l(u) {
    return u === i ? (n.consume(u), r++, l) : (n.exit("thematicBreakSequence"), F(u) ? W(n, o, "whitespace")(u) : o(u));
  }
}
const pe = {
  continuation: {
    tokenize: Oo
  },
  exit: Io,
  name: "list",
  tokenize: Ao
}, To = {
  partial: !0,
  tokenize: Ro
}, Co = {
  partial: !0,
  tokenize: Po
};
function Ao(n, t, e) {
  const r = this, i = r.events[r.events.length - 1];
  let s = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, a = 0;
  return o;
  function o(d) {
    const p = r.containerState.type || (d === 42 || d === 43 || d === 45 ? "listUnordered" : "listOrdered");
    if (p === "listUnordered" ? !r.containerState.marker || d === r.containerState.marker : En(d)) {
      if (r.containerState.type || (r.containerState.type = p, n.enter(p, {
        _container: !0
      })), p === "listUnordered")
        return n.enter("listItemPrefix"), d === 42 || d === 45 ? n.check(Ut, e, u)(d) : u(d);
      if (!r.interrupt || d === 49)
        return n.enter("listItemPrefix"), n.enter("listItemValue"), l(d);
    }
    return e(d);
  }
  function l(d) {
    return En(d) && ++a < 10 ? (n.consume(d), l) : (!r.interrupt || a < 2) && (r.containerState.marker ? d === r.containerState.marker : d === 41 || d === 46) ? (n.exit("listItemValue"), u(d)) : e(d);
  }
  function u(d) {
    return n.enter("listItemMarker"), n.consume(d), n.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || d, n.check(
      At,
      // Can’t be empty when interrupting.
      r.interrupt ? e : h,
      n.attempt(To, f, c)
    );
  }
  function h(d) {
    return r.containerState.initialBlankLine = !0, s++, f(d);
  }
  function c(d) {
    return F(d) ? (n.enter("listItemPrefixWhitespace"), n.consume(d), n.exit("listItemPrefixWhitespace"), f) : e(d);
  }
  function f(d) {
    return r.containerState.size = s + r.sliceSerialize(n.exit("listItemPrefix"), !0).length, t(d);
  }
}
function Oo(n, t, e) {
  const r = this;
  return r.containerState._closeFlow = void 0, n.check(At, i, s);
  function i(o) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, W(n, t, "listItemIndent", r.containerState.size + 1)(o);
  }
  function s(o) {
    return r.containerState.furtherBlankLines || !F(o) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, a(o)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, n.attempt(Co, t, a)(o));
  }
  function a(o) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, W(n, n.attempt(pe, t, e), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o);
  }
}
function Po(n, t, e) {
  const r = this;
  return W(n, i, "listItemIndent", r.containerState.size + 1);
  function i(s) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "listItemIndent" && a[2].sliceSerialize(a[1], !0).length === r.containerState.size ? t(s) : e(s);
  }
}
function Io(n) {
  n.exit(this.containerState.type);
}
function Ro(n, t, e) {
  const r = this;
  return W(n, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(s) {
    const a = r.events[r.events.length - 1];
    return !F(s) && a && a[1].type === "listItemPrefixWhitespace" ? t(s) : e(s);
  }
}
const Sr = {
  name: "setextUnderline",
  resolveTo: jo,
  tokenize: Lo
};
function jo(n, t) {
  let e = n.length, r, i, s;
  for (; e--; )
    if (n[e][0] === "enter") {
      if (n[e][1].type === "content") {
        r = e;
        break;
      }
      n[e][1].type === "paragraph" && (i = e);
    } else
      n[e][1].type === "content" && n.splice(e, 1), !s && n[e][1].type === "definition" && (s = e);
  const a = {
    type: "setextHeading",
    start: {
      ...n[r][1].start
    },
    end: {
      ...n[n.length - 1][1].end
    }
  };
  return n[i][1].type = "setextHeadingText", s ? (n.splice(i, 0, ["enter", a, t]), n.splice(s + 1, 0, ["exit", n[r][1], t]), n[r][1].end = {
    ...n[s][1].end
  }) : n[r][1] = a, n.push(["exit", a, t]), n;
}
function Lo(n, t, e) {
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
    return !r.parser.lazy[r.now().line] && (r.interrupt || c) ? (n.enter("setextHeadingLine"), i = u, a(u)) : e(u);
  }
  function a(u) {
    return n.enter("setextHeadingLineSequence"), o(u);
  }
  function o(u) {
    return u === i ? (n.consume(u), o) : (n.exit("setextHeadingLineSequence"), F(u) ? W(n, l, "lineSuffix")(u) : l(u));
  }
  function l(u) {
    return u === null || D(u) ? (n.exit("setextHeadingLine"), t(u)) : e(u);
  }
}
const Do = {
  tokenize: $o
};
function $o(n) {
  const t = this, e = n.attempt(
    // Try to parse a blank line.
    At,
    r,
    // Try to parse initial flow (essentially, only code).
    n.attempt(this.parser.constructs.flowInitial, i, W(n, n.attempt(this.parser.constructs.flow, i, n.attempt(Fa, i)), "linePrefix"))
  );
  return e;
  function r(s) {
    if (s === null) {
      n.consume(s);
      return;
    }
    return n.enter("lineEndingBlank"), n.consume(s), n.exit("lineEndingBlank"), t.currentConstruct = void 0, e;
  }
  function i(s) {
    if (s === null) {
      n.consume(s);
      return;
    }
    return n.enter("lineEnding"), n.consume(s), n.exit("lineEnding"), t.currentConstruct = void 0, e;
  }
}
const No = {
  resolveAll: ui()
}, Bo = li("string"), Uo = li("text");
function li(n) {
  return {
    resolveAll: ui(n === "text" ? Fo : void 0),
    tokenize: t
  };
  function t(e) {
    const r = this, i = this.parser.constructs[n], s = e.attempt(i, a, o);
    return a;
    function a(h) {
      return u(h) ? s(h) : o(h);
    }
    function o(h) {
      if (h === null) {
        e.consume(h);
        return;
      }
      return e.enter("data"), e.consume(h), l;
    }
    function l(h) {
      return u(h) ? (e.exit("data"), s(h)) : (e.consume(h), l);
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
function ui(n) {
  return t;
  function t(e, r) {
    let i = -1, s;
    for (; ++i <= e.length; )
      s === void 0 ? e[i] && e[i][1].type === "data" && (s = i, i++) : (!e[i] || e[i][1].type !== "data") && (i !== s + 2 && (e[s][1].end = e[i - 1][1].end, e.splice(s + 2, i - s - 2), i = s + 2), s = void 0);
    return n ? n(e, r) : e;
  }
}
function Fo(n, t) {
  let e = 0;
  for (; ++e <= n.length; )
    if ((e === n.length || n[e][1].type === "lineEnding") && n[e - 1][1].type === "data") {
      const r = n[e - 1][1], i = t.sliceStream(r);
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
      if (t._contentTypeTextTrailing && e === n.length && (o = 0), o) {
        const u = {
          type: e === n.length || l || o < 2 ? "lineSuffix" : "hardBreakTrailing",
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
        }, r.start.offset === r.end.offset ? Object.assign(r, u) : (n.splice(e, 0, ["enter", u, t], ["exit", u, t]), e += 2);
      }
      e++;
    }
  return n;
}
const zo = {
  42: pe,
  43: pe,
  45: pe,
  48: pe,
  49: pe,
  50: pe,
  51: pe,
  52: pe,
  53: pe,
  54: pe,
  55: pe,
  56: pe,
  57: pe,
  62: ti
}, Mo = {
  91: Ha
}, qo = {
  [-2]: hn,
  [-1]: hn,
  32: hn
}, Wo = {
  35: Qa,
  42: Ut,
  45: [Sr, Ut],
  60: to,
  61: Sr,
  95: Ut,
  96: _r,
  126: _r
}, Ho = {
  38: ri,
  92: ni
}, Vo = {
  [-5]: cn,
  [-4]: cn,
  [-3]: cn,
  33: vo,
  38: ri,
  42: xn,
  60: [_a, lo],
  91: ko,
  92: [Ja, ni],
  93: Kn,
  95: xn,
  96: La
}, Ko = {
  null: [xn, No]
}, Go = {
  null: [42, 95]
}, Jo = {
  null: []
}, Yo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: Go,
  contentInitial: Mo,
  disable: Jo,
  document: zo,
  flow: Wo,
  flowInitial: qo,
  insideSpan: Ko,
  string: Ho,
  text: Vo
}, Symbol.toStringTag, { value: "Module" }));
function Qo(n, t, e) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: e && e.line || 1,
    column: e && e.column || 1,
    offset: e && e.offset || 0
  };
  const i = {}, s = [];
  let a = [], o = [];
  const l = {
    attempt: P(C),
    check: P(v),
    consume: k,
    enter: _,
    exit: x,
    interrupt: P(v, {
      interrupt: !0
    })
  }, u = {
    code: null,
    containerState: {},
    defineSkip: b,
    events: [],
    now: p,
    parser: n,
    previous: null,
    sliceSerialize: f,
    sliceStream: d,
    write: c
  };
  let h = t.tokenize.call(u, l);
  return t.resolveAll && s.push(t), u;
  function c(I) {
    return a = le(a, I), y(), a[a.length - 1] !== null ? [] : (z(t, 0), u.events = nn(s, u.events, u), u.events);
  }
  function f(I, A) {
    return Zo(d(I), A);
  }
  function d(I) {
    return Xo(a, I);
  }
  function p() {
    const {
      _bufferIndex: I,
      _index: A,
      line: H,
      column: V,
      offset: q
    } = r;
    return {
      _bufferIndex: I,
      _index: A,
      line: H,
      column: V,
      offset: q
    };
  }
  function b(I) {
    i[I.line] = I.column, S();
  }
  function y() {
    let I;
    for (; r._index < a.length; ) {
      const A = a[r._index];
      if (typeof A == "string")
        for (I = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === I && r._bufferIndex < A.length; )
          w(A.charCodeAt(r._bufferIndex));
      else
        w(A);
    }
  }
  function w(I) {
    h = h(I);
  }
  function k(I) {
    D(I) ? (r.line++, r.column = 1, r.offset += I === -3 ? 2 : 1, S()) : I !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    a[r._index].length && (r._bufferIndex = -1, r._index++)), u.previous = I;
  }
  function _(I, A) {
    const H = A || {};
    return H.type = I, H.start = p(), u.events.push(["enter", H, u]), o.push(H), H;
  }
  function x(I) {
    const A = o.pop();
    return A.end = p(), u.events.push(["exit", A, u]), A;
  }
  function C(I, A) {
    z(I, A.from);
  }
  function v(I, A) {
    A.restore();
  }
  function P(I, A) {
    return H;
    function H(V, q, Q) {
      let Z, ie, ce, g;
      return Array.isArray(V) ? (
        /* c8 ignore next 1 */
        we(V)
      ) : "tokenize" in V ? (
        // Looks like a construct.
        we([
          /** @type {Construct} */
          V
        ])
      ) : de(V);
      function de(T) {
        return N;
        function N(B) {
          const G = B !== null && T[B], ee = B !== null && T.null, ne = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(G) ? G : G ? [G] : [],
            ...Array.isArray(ee) ? ee : ee ? [ee] : []
          ];
          return we(ne)(B);
        }
      }
      function we(T) {
        return Z = T, ie = 0, T.length === 0 ? Q : m(T[ie]);
      }
      function m(T) {
        return N;
        function N(B) {
          return g = M(), ce = T, T.partial || (u.currentConstruct = T), T.name && u.parser.constructs.disable.null.includes(T.name) ? Pe() : T.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            A ? Object.assign(Object.create(u), A) : u,
            l,
            fe,
            Pe
          )(B);
        }
      }
      function fe(T) {
        return I(ce, g), q;
      }
      function Pe(T) {
        return g.restore(), ++ie < Z.length ? m(Z[ie]) : Q;
      }
    }
  }
  function z(I, A) {
    I.resolveAll && !s.includes(I) && s.push(I), I.resolve && ye(u.events, A, u.events.length - A, I.resolve(u.events.slice(A), u)), I.resolveTo && (u.events = I.resolveTo(u.events, u));
  }
  function M() {
    const I = p(), A = u.previous, H = u.currentConstruct, V = u.events.length, q = Array.from(o);
    return {
      from: V,
      restore: Q
    };
    function Q() {
      r = I, u.previous = A, u.currentConstruct = H, u.events.length = V, o = q, S();
    }
  }
  function S() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function Xo(n, t) {
  const e = t.start._index, r = t.start._bufferIndex, i = t.end._index, s = t.end._bufferIndex;
  let a;
  if (e === i)
    a = [n[e].slice(r, s)];
  else {
    if (a = n.slice(e, i), r > -1) {
      const o = a[0];
      typeof o == "string" ? a[0] = o.slice(r) : a.shift();
    }
    s > 0 && a.push(n[i].slice(0, s));
  }
  return a;
}
function Zo(n, t) {
  let e = -1;
  const r = [];
  let i;
  for (; ++e < n.length; ) {
    const s = n[e];
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
        a = t ? " " : "	";
        break;
      }
      case -1: {
        if (!t && i) continue;
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
function el(n) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      Xr([Yo, ...(n || {}).extensions || []])
    ),
    content: i(pa),
    defined: [],
    document: i(ma),
    flow: i(Do),
    lazy: {},
    string: i(Bo),
    text: i(Uo)
  };
  return r;
  function i(s) {
    return a;
    function a(o) {
      return Qo(r, s, o);
    }
  }
}
function tl(n) {
  for (; !ii(n); )
    ;
  return n;
}
const Er = /[\0\t\n\r]/g;
function nl() {
  let n = 1, t = "", e = !0, r;
  return i;
  function i(s, a, o) {
    const l = [];
    let u, h, c, f, d;
    for (s = t + (typeof s == "string" ? s.toString() : new TextDecoder(a || void 0).decode(s)), c = 0, t = "", e && (s.charCodeAt(0) === 65279 && c++, e = void 0); c < s.length; ) {
      if (Er.lastIndex = c, u = Er.exec(s), f = u && u.index !== void 0 ? u.index : s.length, d = s.charCodeAt(f), !u) {
        t = s.slice(c);
        break;
      }
      if (d === 10 && c === f && r)
        l.push(-3), r = void 0;
      else
        switch (r && (l.push(-5), r = void 0), c < f && (l.push(s.slice(c, f)), n += f - c), d) {
          case 0: {
            l.push(65533), n++;
            break;
          }
          case 9: {
            for (h = Math.ceil(n / 4) * 4, l.push(-2); n++ < h; ) l.push(-1);
            break;
          }
          case 10: {
            l.push(-4), n = 1;
            break;
          }
          default:
            r = !0, n = 1;
        }
      c = f + 1;
    }
    return o && (r && l.push(-5), t && l.push(t), l.push(null)), l;
  }
}
function rl(n, t, e) {
  return typeof t != "string" && (e = t, t = void 0), fa(e)(tl(el(e).document().write(nl()(n, t, !0))));
}
const il = {
  tokenize: hl,
  partial: !0
}, hi = {
  tokenize: cl,
  partial: !0
}, ci = {
  tokenize: dl,
  partial: !0
}, di = {
  tokenize: fl,
  partial: !0
}, sl = {
  tokenize: pl,
  partial: !0
}, fi = {
  name: "wwwAutolink",
  tokenize: ll,
  previous: gi
}, pi = {
  name: "protocolAutolink",
  tokenize: ul,
  previous: mi
}, Le = {
  name: "emailAutolink",
  tokenize: ol,
  previous: bi
}, Oe = {};
function al() {
  return {
    text: Oe
  };
}
let Me = 48;
for (; Me < 123; )
  Oe[Me] = Le, Me++, Me === 58 ? Me = 65 : Me === 91 && (Me = 97);
Oe[43] = Le;
Oe[45] = Le;
Oe[46] = Le;
Oe[95] = Le;
Oe[72] = [Le, pi];
Oe[104] = [Le, pi];
Oe[87] = [Le, fi];
Oe[119] = [Le, fi];
function ol(n, t, e) {
  const r = this;
  let i, s;
  return a;
  function a(c) {
    return !Tn(c) || !bi.call(r, r.previous) || Gn(r.events) ? e(c) : (n.enter("literalAutolink"), n.enter("literalAutolinkEmail"), o(c));
  }
  function o(c) {
    return Tn(c) ? (n.consume(c), o) : c === 64 ? (n.consume(c), l) : e(c);
  }
  function l(c) {
    return c === 46 ? n.check(sl, h, u)(c) : c === 45 || c === 95 || ue(c) ? (s = !0, n.consume(c), l) : h(c);
  }
  function u(c) {
    return n.consume(c), i = !0, l;
  }
  function h(c) {
    return s && i && he(r.previous) ? (n.exit("literalAutolinkEmail"), n.exit("literalAutolink"), t(c)) : e(c);
  }
}
function ll(n, t, e) {
  const r = this;
  return i;
  function i(a) {
    return a !== 87 && a !== 119 || !gi.call(r, r.previous) || Gn(r.events) ? e(a) : (n.enter("literalAutolink"), n.enter("literalAutolinkWww"), n.check(il, n.attempt(hi, n.attempt(ci, s), e), e)(a));
  }
  function s(a) {
    return n.exit("literalAutolinkWww"), n.exit("literalAutolink"), t(a);
  }
}
function ul(n, t, e) {
  const r = this;
  let i = "", s = !1;
  return a;
  function a(c) {
    return (c === 72 || c === 104) && mi.call(r, r.previous) && !Gn(r.events) ? (n.enter("literalAutolink"), n.enter("literalAutolinkHttp"), i += String.fromCodePoint(c), n.consume(c), o) : e(c);
  }
  function o(c) {
    if (he(c) && i.length < 5)
      return i += String.fromCodePoint(c), n.consume(c), o;
    if (c === 58) {
      const f = i.toLowerCase();
      if (f === "http" || f === "https")
        return n.consume(c), l;
    }
    return e(c);
  }
  function l(c) {
    return c === 47 ? (n.consume(c), s ? u : (s = !0, l)) : e(c);
  }
  function u(c) {
    return c === null || qt(c) || K(c) || ut(c) || Vn(c) ? e(c) : n.attempt(hi, n.attempt(ci, h), e)(c);
  }
  function h(c) {
    return n.exit("literalAutolinkHttp"), n.exit("literalAutolink"), t(c);
  }
}
function hl(n, t, e) {
  let r = 0;
  return i;
  function i(a) {
    return (a === 87 || a === 119) && r < 3 ? (r++, n.consume(a), i) : a === 46 && r === 3 ? (n.consume(a), s) : e(a);
  }
  function s(a) {
    return a === null ? e(a) : t(a);
  }
}
function cl(n, t, e) {
  let r, i, s;
  return a;
  function a(u) {
    return u === 46 || u === 95 ? n.check(di, l, o)(u) : u === null || K(u) || ut(u) || u !== 45 && Vn(u) ? l(u) : (s = !0, n.consume(u), a);
  }
  function o(u) {
    return u === 95 ? r = !0 : (i = r, r = void 0), n.consume(u), a;
  }
  function l(u) {
    return i || r || !s ? e(u) : t(u);
  }
}
function dl(n, t) {
  let e = 0, r = 0;
  return i;
  function i(a) {
    return a === 40 ? (e++, n.consume(a), i) : a === 41 && r < e ? s(a) : a === 33 || a === 34 || a === 38 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 60 || a === 63 || a === 93 || a === 95 || a === 126 ? n.check(di, t, s)(a) : a === null || K(a) || ut(a) ? t(a) : (n.consume(a), i);
  }
  function s(a) {
    return a === 41 && r++, n.consume(a), i;
  }
}
function fl(n, t, e) {
  return r;
  function r(o) {
    return o === 33 || o === 34 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 63 || o === 95 || o === 126 ? (n.consume(o), r) : o === 38 ? (n.consume(o), s) : o === 93 ? (n.consume(o), i) : (
      // `<` is an end.
      o === 60 || // So is whitespace.
      o === null || K(o) || ut(o) ? t(o) : e(o)
    );
  }
  function i(o) {
    return o === null || o === 40 || o === 91 || K(o) || ut(o) ? t(o) : r(o);
  }
  function s(o) {
    return he(o) ? a(o) : e(o);
  }
  function a(o) {
    return o === 59 ? (n.consume(o), r) : he(o) ? (n.consume(o), a) : e(o);
  }
}
function pl(n, t, e) {
  return r;
  function r(s) {
    return n.consume(s), i;
  }
  function i(s) {
    return ue(s) ? e(s) : t(s);
  }
}
function gi(n) {
  return n === null || n === 40 || n === 42 || n === 95 || n === 91 || n === 93 || n === 126 || K(n);
}
function mi(n) {
  return !he(n);
}
function bi(n) {
  return !(n === 47 || Tn(n));
}
function Tn(n) {
  return n === 43 || n === 45 || n === 46 || n === 95 || ue(n);
}
function Gn(n) {
  let t = n.length, e = !1;
  for (; t--; ) {
    const r = n[t][1];
    if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
      e = !0;
      break;
    }
    if (r._gfmAutolinkLiteralWalkedInto) {
      e = !1;
      break;
    }
  }
  return n.length > 0 && !e && (n[n.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), e;
}
function gl() {
  return {
    exit: {
      literalAutolinkEmail: bl,
      literalAutolinkHttp: yl,
      literalAutolinkWww: ml
    }
  };
}
function ml(n) {
  Jn.call(this, n, "http://");
}
function bl(n) {
  Jn.call(this, n, "mailto:");
}
function yl(n) {
  Jn.call(this, n);
}
function Jn(n, t) {
  const e = this.sliceSerialize(n);
  this.tag('<a href="' + Je((t || "") + e) + '">'), this.raw(this.encode(e)), this.tag("</a>");
}
const wl = {
  tokenize: Cl,
  partial: !0
};
function vl() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: El,
        continuation: {
          tokenize: xl
        },
        exit: Tl
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: Sl
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: _l,
        resolveTo: kl
      }
    }
  };
}
function _l(n, t, e) {
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
      return e(l);
    const u = Ae(r.sliceSerialize({
      start: a.end,
      end: r.now()
    }));
    return u.codePointAt(0) !== 94 || !s.includes(u.slice(1)) ? e(l) : (n.enter("gfmFootnoteCallLabelMarker"), n.consume(l), n.exit("gfmFootnoteCallLabelMarker"), t(l));
  }
}
function kl(n, t) {
  let e = n.length;
  for (; e--; )
    if (n[e][1].type === "labelImage" && n[e][0] === "enter") {
      n[e][1];
      break;
    }
  n[e + 1][1].type = "data", n[e + 3][1].type = "gfmFootnoteCallLabelMarker";
  const r = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, n[e + 3][1].start),
    end: Object.assign({}, n[n.length - 1][1].end)
  }, i = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, n[e + 3][1].end),
    end: Object.assign({}, n[e + 3][1].end)
  };
  i.end.column++, i.end.offset++, i.end._bufferIndex++;
  const s = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, i.end),
    end: Object.assign({}, n[n.length - 1][1].start)
  }, a = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, s.start),
    end: Object.assign({}, s.end)
  }, o = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    n[e + 1],
    n[e + 2],
    ["enter", r, t],
    // The `[`
    n[e + 3],
    n[e + 4],
    // The `^`.
    ["enter", i, t],
    ["exit", i, t],
    // Everything in between.
    ["enter", s, t],
    ["enter", a, t],
    ["exit", a, t],
    ["exit", s, t],
    // The ending (`]`, properly parsed and labelled).
    n[n.length - 2],
    n[n.length - 1],
    ["exit", r, t]
  ];
  return n.splice(e, n.length - e + 1, ...o), n;
}
function Sl(n, t, e) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let s = 0, a;
  return o;
  function o(c) {
    return n.enter("gfmFootnoteCall"), n.enter("gfmFootnoteCallLabelMarker"), n.consume(c), n.exit("gfmFootnoteCallLabelMarker"), l;
  }
  function l(c) {
    return c !== 94 ? e(c) : (n.enter("gfmFootnoteCallMarker"), n.consume(c), n.exit("gfmFootnoteCallMarker"), n.enter("gfmFootnoteCallString"), n.enter("chunkString").contentType = "string", u);
  }
  function u(c) {
    if (
      // Too long.
      s > 999 || // Closing brace with nothing.
      c === 93 && !a || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      c === null || c === 91 || K(c)
    )
      return e(c);
    if (c === 93) {
      n.exit("chunkString");
      const f = n.exit("gfmFootnoteCallString");
      return i.includes(Ae(r.sliceSerialize(f))) ? (n.enter("gfmFootnoteCallLabelMarker"), n.consume(c), n.exit("gfmFootnoteCallLabelMarker"), n.exit("gfmFootnoteCall"), t) : e(c);
    }
    return K(c) || (a = !0), s++, n.consume(c), c === 92 ? h : u;
  }
  function h(c) {
    return c === 91 || c === 92 || c === 93 ? (n.consume(c), s++, u) : u(c);
  }
}
function El(n, t, e) {
  const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
  let s, a = 0, o;
  return l;
  function l(p) {
    return n.enter("gfmFootnoteDefinition")._container = !0, n.enter("gfmFootnoteDefinitionLabel"), n.enter("gfmFootnoteDefinitionLabelMarker"), n.consume(p), n.exit("gfmFootnoteDefinitionLabelMarker"), u;
  }
  function u(p) {
    return p === 94 ? (n.enter("gfmFootnoteDefinitionMarker"), n.consume(p), n.exit("gfmFootnoteDefinitionMarker"), n.enter("gfmFootnoteDefinitionLabelString"), n.enter("chunkString").contentType = "string", h) : e(p);
  }
  function h(p) {
    if (
      // Too long.
      a > 999 || // Closing brace with nothing.
      p === 93 && !o || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      p === null || p === 91 || K(p)
    )
      return e(p);
    if (p === 93) {
      n.exit("chunkString");
      const b = n.exit("gfmFootnoteDefinitionLabelString");
      return s = Ae(r.sliceSerialize(b)), n.enter("gfmFootnoteDefinitionLabelMarker"), n.consume(p), n.exit("gfmFootnoteDefinitionLabelMarker"), n.exit("gfmFootnoteDefinitionLabel"), f;
    }
    return K(p) || (o = !0), a++, n.consume(p), p === 92 ? c : h;
  }
  function c(p) {
    return p === 91 || p === 92 || p === 93 ? (n.consume(p), a++, h) : h(p);
  }
  function f(p) {
    return p === 58 ? (n.enter("definitionMarker"), n.consume(p), n.exit("definitionMarker"), i.includes(s) || i.push(s), W(n, d, "gfmFootnoteDefinitionWhitespace")) : e(p);
  }
  function d(p) {
    return t(p);
  }
}
function xl(n, t, e) {
  return n.check(At, t, n.attempt(wl, t, e));
}
function Tl(n) {
  n.exit("gfmFootnoteDefinition");
}
function Cl(n, t, e) {
  const r = this;
  return W(n, i, "gfmFootnoteDefinitionIndent", 5);
  function i(s) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "gfmFootnoteDefinitionIndent" && a[2].sliceSerialize(a[1], !0).length === 4 ? t(s) : e(s);
  }
}
const Al = {}.hasOwnProperty, Ol = {};
function Pl(n, t) {
  return "Back to reference " + (n + 1) + (t > 1 ? "-" + t : "");
}
function Il(n) {
  const t = Ol, e = t.label || "Footnotes", r = t.labelTagName || "h2", i = t.labelAttributes === null || t.labelAttributes === void 0 ? 'class="sr-only"' : t.labelAttributes, s = t.backLabel || Pl, a = t.clobberPrefix === null || t.clobberPrefix === void 0 ? "user-content-" : t.clobberPrefix;
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
        o || this.setData("gfmFootnoteDefinitions", o = {}), Al.call(o, h) || (o[h] = c), u.pop(), this.setData("slurpOneLineEnding", !0), this.setData("lastWasTag");
      },
      gfmFootnoteDefinitionLabelString(o) {
        let l = this.getData("gfmFootnoteDefinitionStack");
        l || this.setData("gfmFootnoteDefinitionStack", l = []), l.push(Ae(this.sliceSerialize(o))), this.resume(), this.buffer();
      },
      gfmFootnoteCallString(o) {
        let l = this.getData("gfmFootnoteCallOrder"), u = this.getData("gfmFootnoteCallCounts");
        const h = Ae(this.sliceSerialize(o));
        let c;
        this.resume(), l || this.setData("gfmFootnoteCallOrder", l = []), u || this.setData("gfmFootnoteCallCounts", u = {});
        const f = l.indexOf(h), d = Je(h.toLowerCase());
        f === -1 ? (l.push(h), u[h] = 1, c = l.length) : (u[h]++, c = f + 1);
        const p = u[h];
        this.tag('<sup><a href="#' + a + "fn-" + d + '" id="' + a + "fnref-" + d + (p > 1 ? "-" + p : "") + '" data-footnote-ref="" aria-describedby="footnote-label">' + String(c) + "</a></sup>");
      },
      null() {
        const o = this.getData("gfmFootnoteCallOrder") || [], l = this.getData("gfmFootnoteCallCounts") || {}, u = this.getData("gfmFootnoteDefinitions") || {};
        let h = -1;
        for (o.length > 0 && (this.lineEndingIfNeeded(), this.tag('<section data-footnotes="" class="footnotes"><' + r + ' id="footnote-label"' + (i ? " " + i : "") + ">"), this.raw(this.encode(e)), this.tag("</" + r + ">"), this.lineEndingIfNeeded(), this.tag("<ol>")); ++h < o.length; ) {
          const c = o[h], f = Je(c.toLowerCase());
          let d = 0;
          const p = [];
          for (; ++d <= l[c]; )
            p.push('<a href="#' + a + "fnref-" + f + (d > 1 ? "-" + d : "") + '" data-footnote-backref="" aria-label="' + this.encode(typeof s == "string" ? s : s(h, d)) + '" class="data-footnote-backref">↩' + (d > 1 ? "<sup>" + d + "</sup>" : "") + "</a>");
          const b = p.join(" ");
          let y = !1;
          this.lineEndingIfNeeded(), this.tag('<li id="' + a + "fn-" + f + '">'), this.lineEndingIfNeeded(), this.tag(u[c].replace(/<\/p>(?:\r?\n|\r)?$/, function(w) {
            return y = !0, " " + b + w;
          })), y || (this.lineEndingIfNeeded(), this.tag(b)), this.lineEndingIfNeeded(), this.tag("</li>");
        }
        o.length > 0 && (this.lineEndingIfNeeded(), this.tag("</ol>"), this.lineEndingIfNeeded(), this.tag("</section>"));
      }
    }
  };
}
function Rl() {
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
function jl(n) {
  let e = {}.singleTilde;
  const r = {
    name: "strikethrough",
    tokenize: s,
    resolveAll: i
  };
  return e == null && (e = !0), {
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
            d && ye(f, f.length, 0, nn(d, a.slice(u + 1, l), o)), ye(f, f.length, 0, [["exit", c, o], ["enter", a[l][1], o], ["exit", a[l][1], o], ["exit", h, o]]), ye(a, u - 1, l - u + 3, f), l = u + f.length - 2;
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
      const b = Wt(u);
      if (p === 126)
        return c > 1 ? l(p) : (a.consume(p), c++, d);
      if (c < 2 && !e) return l(p);
      const y = a.exit("strikethroughSequenceTemporary"), w = Wt(p);
      return y._open = !w || w === 2 && !!b, y._close = !b || b === 2 && !!w, o(p);
    }
  }
}
const dn = {
  none: "",
  left: ' align="left"',
  right: ' align="right"',
  center: ' align="center"'
};
function Ll() {
  return {
    enter: {
      table(n) {
        const t = n._align;
        this.lineEndingIfNeeded(), this.tag("<table>"), this.setData("tableAlign", t);
      },
      tableBody() {
        this.tag("<tbody>");
      },
      tableData() {
        const n = this.getData("tableAlign"), t = this.getData("tableColumn"), e = dn[n[t]];
        e === void 0 ? this.buffer() : (this.lineEndingIfNeeded(), this.tag("<td" + e + ">"));
      },
      tableHead() {
        this.lineEndingIfNeeded(), this.tag("<thead>");
      },
      tableHeader() {
        const n = this.getData("tableAlign"), t = this.getData("tableColumn"), e = dn[n[t]];
        this.lineEndingIfNeeded(), this.tag("<th" + e + ">");
      },
      tableRow() {
        this.setData("tableColumn", 0), this.lineEndingIfNeeded(), this.tag("<tr>");
      }
    },
    exit: {
      // Overwrite the default code text data handler to unescape escaped pipes when
      // they are in tables.
      codeTextData(n) {
        let t = this.sliceSerialize(n);
        this.getData("tableAlign") && (t = t.replace(/\\([\\|])/g, Dl)), this.raw(this.encode(t));
      },
      table() {
        this.setData("tableAlign"), this.setData("slurpAllLineEndings"), this.lineEndingIfNeeded(), this.tag("</table>");
      },
      tableBody() {
        this.lineEndingIfNeeded(), this.tag("</tbody>");
      },
      tableData() {
        const n = this.getData("tableAlign"), t = this.getData("tableColumn");
        t in n ? (this.tag("</td>"), this.setData("tableColumn", t + 1)) : this.resume();
      },
      tableHead() {
        this.lineEndingIfNeeded(), this.tag("</thead>");
      },
      tableHeader() {
        const n = this.getData("tableColumn");
        this.tag("</th>"), this.setData("tableColumn", n + 1);
      },
      tableRow() {
        const n = this.getData("tableAlign");
        let t = this.getData("tableColumn");
        for (; t < n.length; )
          this.lineEndingIfNeeded(), this.tag("<td" + dn[n[t]] + "></td>"), t++;
        this.setData("tableColumn", t), this.lineEndingIfNeeded(), this.tag("</tr>");
      }
    }
  };
}
function Dl(n, t) {
  return t === "|" ? t : n;
}
class $l {
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
  add(t, e, r) {
    Nl(this, t, e, r);
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
  consume(t) {
    if (this.map.sort(function(s, a) {
      return s[0] - a[0];
    }), this.map.length === 0)
      return;
    let e = this.map.length;
    const r = [];
    for (; e > 0; )
      e -= 1, r.push(t.slice(this.map[e][0] + this.map[e][1]), this.map[e][2]), t.length = this.map[e][0];
    r.push(t.slice()), t.length = 0;
    let i = r.pop();
    for (; i; ) {
      for (const s of i)
        t.push(s);
      i = r.pop();
    }
    this.map.length = 0;
  }
}
function Nl(n, t, e, r) {
  let i = 0;
  if (!(e === 0 && r.length === 0)) {
    for (; i < n.map.length; ) {
      if (n.map[i][0] === t) {
        n.map[i][1] += e, n.map[i][2].push(...r);
        return;
      }
      i += 1;
    }
    n.map.push([t, e, r]);
  }
}
function Bl(n, t) {
  let e = !1;
  const r = [];
  for (; t < n.length; ) {
    const i = n[t];
    if (e) {
      if (i[0] === "enter")
        i[1].type === "tableContent" && r.push(n[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (i[1].type === "tableContent") {
        if (n[t - 1][1].type === "tableDelimiterMarker") {
          const s = r.length - 1;
          r[s] = r[s] === "left" ? "center" : "right";
        }
      } else if (i[1].type === "tableDelimiterRow")
        break;
    } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (e = !0);
    t += 1;
  }
  return r;
}
function Ul() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: Fl,
        resolveAll: zl
      }
    }
  };
}
function Fl(n, t, e) {
  const r = this;
  let i = 0, s = 0, a;
  return o;
  function o(S) {
    let I = r.events.length - 1;
    for (; I > -1; ) {
      const V = r.events[I][1].type;
      if (V === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      V === "linePrefix") I--;
      else break;
    }
    const A = I > -1 ? r.events[I][1].type : null, H = A === "tableHead" || A === "tableRow" ? v : l;
    return H === v && r.parser.lazy[r.now().line] ? e(S) : H(S);
  }
  function l(S) {
    return n.enter("tableHead"), n.enter("tableRow"), u(S);
  }
  function u(S) {
    return S === 124 || (a = !0, s += 1), h(S);
  }
  function h(S) {
    return S === null ? e(S) : D(S) ? s > 1 ? (s = 0, r.interrupt = !0, n.exit("tableRow"), n.enter("lineEnding"), n.consume(S), n.exit("lineEnding"), d) : e(S) : F(S) ? W(n, h, "whitespace")(S) : (s += 1, a && (a = !1, i += 1), S === 124 ? (n.enter("tableCellDivider"), n.consume(S), n.exit("tableCellDivider"), a = !0, h) : (n.enter("data"), c(S)));
  }
  function c(S) {
    return S === null || S === 124 || K(S) ? (n.exit("data"), h(S)) : (n.consume(S), S === 92 ? f : c);
  }
  function f(S) {
    return S === 92 || S === 124 ? (n.consume(S), c) : c(S);
  }
  function d(S) {
    return r.interrupt = !1, r.parser.lazy[r.now().line] ? e(S) : (n.enter("tableDelimiterRow"), a = !1, F(S) ? W(n, p, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(S) : p(S));
  }
  function p(S) {
    return S === 45 || S === 58 ? y(S) : S === 124 ? (a = !0, n.enter("tableCellDivider"), n.consume(S), n.exit("tableCellDivider"), b) : C(S);
  }
  function b(S) {
    return F(S) ? W(n, y, "whitespace")(S) : y(S);
  }
  function y(S) {
    return S === 58 ? (s += 1, a = !0, n.enter("tableDelimiterMarker"), n.consume(S), n.exit("tableDelimiterMarker"), w) : S === 45 ? (s += 1, w(S)) : S === null || D(S) ? x(S) : C(S);
  }
  function w(S) {
    return S === 45 ? (n.enter("tableDelimiterFiller"), k(S)) : C(S);
  }
  function k(S) {
    return S === 45 ? (n.consume(S), k) : S === 58 ? (a = !0, n.exit("tableDelimiterFiller"), n.enter("tableDelimiterMarker"), n.consume(S), n.exit("tableDelimiterMarker"), _) : (n.exit("tableDelimiterFiller"), _(S));
  }
  function _(S) {
    return F(S) ? W(n, x, "whitespace")(S) : x(S);
  }
  function x(S) {
    return S === 124 ? p(S) : S === null || D(S) ? !a || i !== s ? C(S) : (n.exit("tableDelimiterRow"), n.exit("tableHead"), t(S)) : C(S);
  }
  function C(S) {
    return e(S);
  }
  function v(S) {
    return n.enter("tableRow"), P(S);
  }
  function P(S) {
    return S === 124 ? (n.enter("tableCellDivider"), n.consume(S), n.exit("tableCellDivider"), P) : S === null || D(S) ? (n.exit("tableRow"), t(S)) : F(S) ? W(n, P, "whitespace")(S) : (n.enter("data"), z(S));
  }
  function z(S) {
    return S === null || S === 124 || K(S) ? (n.exit("data"), P(S)) : (n.consume(S), S === 92 ? M : z);
  }
  function M(S) {
    return S === 92 || S === 124 ? (n.consume(S), z) : z(S);
  }
}
function zl(n, t) {
  let e = -1, r = !0, i = 0, s = [0, 0, 0, 0], a = [0, 0, 0, 0], o = !1, l = 0, u, h, c;
  const f = new $l();
  for (; ++e < n.length; ) {
    const d = n[e], p = d[1];
    d[0] === "enter" ? p.type === "tableHead" ? (o = !1, l !== 0 && (xr(f, t, l, u, h), h = void 0, l = 0), u = {
      type: "table",
      start: Object.assign({}, p.start),
      // Note: correct end is set later.
      end: Object.assign({}, p.end)
    }, f.add(e, 0, [["enter", u, t]])) : p.type === "tableRow" || p.type === "tableDelimiterRow" ? (r = !0, c = void 0, s = [0, 0, 0, 0], a = [0, e + 1, 0, 0], o && (o = !1, h = {
      type: "tableBody",
      start: Object.assign({}, p.start),
      // Note: correct end is set later.
      end: Object.assign({}, p.end)
    }, f.add(e, 0, [["enter", h, t]])), i = p.type === "tableDelimiterRow" ? 2 : h ? 3 : 1) : i && (p.type === "data" || p.type === "tableDelimiterMarker" || p.type === "tableDelimiterFiller") ? (r = !1, a[2] === 0 && (s[1] !== 0 && (a[0] = a[1], c = It(f, t, s, i, void 0, c), s = [0, 0, 0, 0]), a[2] = e)) : p.type === "tableCellDivider" && (r ? r = !1 : (s[1] !== 0 && (a[0] = a[1], c = It(f, t, s, i, void 0, c)), s = a, a = [s[1], e, 0, 0])) : p.type === "tableHead" ? (o = !0, l = e) : p.type === "tableRow" || p.type === "tableDelimiterRow" ? (l = e, s[1] !== 0 ? (a[0] = a[1], c = It(f, t, s, i, e, c)) : a[1] !== 0 && (c = It(f, t, a, i, e, c)), i = 0) : i && (p.type === "data" || p.type === "tableDelimiterMarker" || p.type === "tableDelimiterFiller") && (a[3] = e);
  }
  for (l !== 0 && xr(f, t, l, u, h), f.consume(t.events), e = -1; ++e < t.events.length; ) {
    const d = t.events[e];
    d[0] === "enter" && d[1].type === "table" && (d[1]._align = Bl(t.events, e));
  }
  return n;
}
function It(n, t, e, r, i, s) {
  const a = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", o = "tableContent";
  e[0] !== 0 && (s.end = Object.assign({}, tt(t.events, e[0])), n.add(e[0], 0, [["exit", s, t]]));
  const l = tt(t.events, e[1]);
  if (s = {
    type: a,
    start: Object.assign({}, l),
    // Note: correct end is set later.
    end: Object.assign({}, l)
  }, n.add(e[1], 0, [["enter", s, t]]), e[2] !== 0) {
    const u = tt(t.events, e[2]), h = tt(t.events, e[3]), c = {
      type: o,
      start: Object.assign({}, u),
      end: Object.assign({}, h)
    };
    if (n.add(e[2], 0, [["enter", c, t]]), r !== 2) {
      const f = t.events[e[2]], d = t.events[e[3]];
      if (f[1].end = Object.assign({}, d[1].end), f[1].type = "chunkText", f[1].contentType = "text", e[3] > e[2] + 1) {
        const p = e[2] + 1, b = e[3] - e[2] - 1;
        n.add(p, b, []);
      }
    }
    n.add(e[3] + 1, 0, [["exit", c, t]]);
  }
  return i !== void 0 && (s.end = Object.assign({}, tt(t.events, i)), n.add(i, 0, [["exit", s, t]]), s = void 0), s;
}
function xr(n, t, e, r, i) {
  const s = [], a = tt(t.events, e);
  i && (i.end = Object.assign({}, a), s.push(["exit", i, t])), r.end = Object.assign({}, a), s.push(["exit", r, t]), n.add(e + 1, 0, s);
}
function tt(n, t) {
  const e = n[t], r = e[0] === "enter" ? "start" : "end";
  return e[1][r];
}
const yi = /<(\/?)(iframe|noembed|noframes|plaintext|script|style|title|textarea|xmp)(?=[\t\n\f\r />])/gi, Ml = new RegExp("^" + yi.source, "i");
function ql() {
  return {
    exit: {
      htmlFlowData(n) {
        Tr.call(this, n, yi);
      },
      htmlTextData(n) {
        Tr.call(this, n, Ml);
      }
    }
  };
}
function Tr(n, t) {
  let e = this.sliceSerialize(n);
  this.options.allowDangerousHtml && (e = e.replace(t, "&lt;$1$2")), this.raw(this.encode(e));
}
function Wl() {
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
const Hl = {
  name: "tasklistCheck",
  tokenize: Kl
};
function Vl() {
  return {
    text: {
      91: Hl
    }
  };
}
function Kl(n, t, e) {
  const r = this;
  return i;
  function i(l) {
    return (
      // Exit if there’s stuff before.
      r.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !r._gfmTasklistFirstContentOfListItem ? e(l) : (n.enter("taskListCheck"), n.enter("taskListCheckMarker"), n.consume(l), n.exit("taskListCheckMarker"), s)
    );
  }
  function s(l) {
    return K(l) ? (n.enter("taskListCheckValueUnchecked"), n.consume(l), n.exit("taskListCheckValueUnchecked"), a) : l === 88 || l === 120 ? (n.enter("taskListCheckValueChecked"), n.consume(l), n.exit("taskListCheckValueChecked"), a) : e(l);
  }
  function a(l) {
    return l === 93 ? (n.enter("taskListCheckMarker"), n.consume(l), n.exit("taskListCheckMarker"), n.exit("taskListCheck"), o) : e(l);
  }
  function o(l) {
    return D(l) ? t(l) : F(l) ? n.check({
      tokenize: Gl
    }, t, e)(l) : e(l);
  }
}
function Gl(n, t, e) {
  return W(n, r, "whitespace");
  function r(i) {
    return i === null ? e(i) : t(i);
  }
}
function Jl(n) {
  return Xr([
    al(),
    vl(),
    jl(),
    Ul(),
    Vl()
  ]);
}
function Yl(n) {
  return Zr([
    gl(),
    Il(),
    Rl(),
    Ll(),
    ql(),
    Wl()
  ]);
}
const Yn = 1048576, Qn = 262144, St = 12, Ql = /(?:^|\n)\[roy-sticker:(data:image\/(?:webp|png);base64,[A-Za-z0-9+/]+={0,2})\]$/, Ht = /\[roy-emoji:(data:image\/(?:webp|png);base64,[A-Za-z0-9+/]+={0,2})\]/g;
function je(n) {
  if (typeof n != "string" || n.length > Qn || !/^data:image\/(?:webp|png);base64,[A-Za-z0-9+/]+={0,2}$/.test(n)) return !1;
  try {
    const t = atob(n.slice(n.indexOf(",") + 1));
    return n.startsWith("data:image/png;") ? t.slice(0, 8) === `PNG\r

` : t.length >= 12 && t.slice(0, 4) === "RIFF" && t.slice(8, 12) === "WEBP";
  } catch {
    return !1;
  }
}
const Cr = (n) => String(n).replace(/[&<>"']/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]);
function Xn(n) {
  const t = String(n ?? ""), e = t.match(Ql);
  return e && je(e[1]) ? { text: t.slice(0, e.index), sticker: e[1] } : { text: t, sticker: "" };
}
function Xl(n, t = "", e = 2e3) {
  if (n = String(n).trim(), n.length > e || !n && !t || t && !je(t)) throw Error("内容或贴纸格式无效");
  return n + (t ? (n ? `
` : "") + "[roy-sticker:" + t + "]" : "");
}
function wi(n, t = 2e3) {
  const e = String(n).trim();
  if (e.includes("￼")) throw Error("浏览器未提供表情图片，请使用 Safari 或复制后粘贴重试。");
  let r = 0, i = 0;
  const s = e.replace(Ht, (a, o) => {
    if (!je(o)) throw Error("表情格式无效");
    return r++, i += o.length, "￼";
  });
  if (!s || s.length > t || r > St || i > Yn || s.includes("[roy-emoji:") || s.includes("[roy-sticker:")) throw Error("内容过长或表情过多，请减少后再发送。");
  return e;
}
function Vt(n, { markdown: t = !0 } = {}) {
  const e = (o) => '<img class="roy-comment-emoji" src="' + o + '" alt="拟我表情" width="16" height="16" decoding="async">';
  let { text: r, sticker: i } = Xn(n);
  const s = [];
  if (!t) {
    let o = 0;
    return "<p>" + Cr(r).replace(Ht, (l, u) => je(u) && o++ < St ? e(u) : l).replace(/\n/g, "<br>") + "</p>" + (i ? e(i) : "");
  }
  r = r.replace(Ht, (o, l) => {
    if (!je(l) || s.length >= St) return o;
    const u = s.push(l) - 1;
    return `![roy-inline-emoji-${u}](https://roy-emoji.invalid/${u})`;
  });
  let a = r.length <= 12e3 ? rl(r, { allowDangerousHtml: !1, allowDangerousProtocol: !1, extensions: [Jl()], htmlExtensions: [Yl()] }) : "<p>" + Cr(r) + "</p>";
  return s.forEach((o, l) => {
    a = a.replaceAll(`<img src="https://roy-emoji.invalid/${l}" alt="roy-inline-emoji-${l}" />`, e(o));
  }), a + (i ? e(i) : "");
}
function vi(n, t, e = {}) {
  rn(), n.classList.add("roy-rich-body"), n.innerHTML = Vt(t, e);
  for (const r of n.querySelectorAll("a"))
    r.rel = "nofollow ugc noopener noreferrer", r.target = "_blank";
}
function rn() {
  if (typeof document > "u" || document.querySelector("[data-roy-rich-style]")) return;
  const n = document.createElement("link");
  n.rel = "stylesheet", n.href = "/shared/comment-rich.css?v=20261103-inline-reply-3", n.dataset.royRichStyle = "", document.head.append(n);
}
async function _i(n) {
  let t = n, e = "";
  if (n instanceof Blob) {
    if (!n.size || n.size > 12 * 1024 * 1024) throw Error("表情超过 12 MB。");
    e = URL.createObjectURL(n), t = new Image(), t.src = e;
  }
  try {
    (!t.complete || !t.naturalWidth) && await new Promise((a, o) => {
      const l = setTimeout(() => {
        u(), o(Error("无法读取键盘图片，请复制表情后粘贴重试。"));
      }, 1e4), u = () => {
        clearTimeout(l), t.removeEventListener("load", h), t.removeEventListener("error", c);
      }, h = () => {
        u(), a();
      }, c = () => {
        u(), o(Error("此浏览器无法解码这个表情。"));
      };
      t.addEventListener("load", h), t.addEventListener("error", c);
    });
    const r = t.naturalWidth, i = t.naturalHeight;
    if (!r || !i || r * i > 64e6) throw Error("表情尺寸无效。");
    const s = Math.min(r, i, 512);
    for (const a of [.../* @__PURE__ */ new Set([s, Math.round(s * 0.9), Math.round(s * 0.8), Math.round(s * 0.7)])]) {
      const o = document.createElement("canvas");
      o.width = o.height = a;
      const l = o.getContext("2d");
      if (!l) throw Error("浏览器不支持表情处理。");
      l.imageSmoothingEnabled = !0, l.imageSmoothingQuality = "high", l.beginPath(), l.arc(a / 2, a / 2, a / 2, 0, Math.PI * 2), l.clip();
      const u = Math.min(r, i);
      l.drawImage(t, (r - u) / 2, (i - u) / 2, u, u, 0, 0, a, a);
      for (const h of [0.98, 0.96]) {
        const c = o.toDataURL("image/webp", h);
        if (je(c) && c.length <= Qn) return c;
        if (c.startsWith("data:image/png;")) break;
      }
    }
    throw Error("表情数据过大，请减少表情数量。");
  } finally {
    e && URL.revokeObjectURL(e);
  }
}
function Cn(n, { en: t = !1, limit: e = 2e3, stickers: r = !0, markdown: i = !0 } = {}) {
  var Pe;
  rn();
  let s = 0, a = 0, o = !1;
  const l = n.required, u = n.hidden, h = document.createElement("div");
  h.className = n.className + " roy-rich-editor", h.setAttribute("role", "textbox"), h.setAttribute("aria-multiline", "true"), h.setAttribute("aria-label", n.getAttribute("aria-label") || (t ? "Message" : "留言内容")), h.dataset.placeholder = n.placeholder || (t ? "Write a message…" : "写下留言…"), h.textContent = n.value, h.spellcheck = !0, n.hidden = !0, n.dataset.richSource = "", n.required = !1, n.insertAdjacentElement("afterend", h);
  const c = document.createElement("div");
  c.className = "roy-rich-compose", c.innerHTML = `<div class="roy-rich-body roy-rich-preview" data-rich-output hidden></div><p class="roy-rich-status" role="status" aria-live="polite"></p><div class="roy-rich-footer"><div class="roy-rich-meta"><span class="roy-rich-hint">${i ? '<svg class="roy-markdown-icon" viewBox="0 0 24 18" role="img" aria-label="Markdown"><title>Markdown</title><rect x="1" y="1" width="22" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M4 13V5l4 5 4-5v8m6-8v8m-3-3 3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>' : ""}<span>${t ? "Memoji supported" : "支持拟我表情"}</span></span><span class="roy-rich-count" data-rich-count>0 / ${e}</span></div><button type="button" class="roy-rich-preview-toggle" data-rich-preview aria-expanded="false">${t ? "Preview" : "预览"}</button></div>`;
  const f = document.createElement("div");
  f.className = "roy-rich-frame" + (i ? "" : " roy-rich-plain"), (((Pe = n.parentElement) == null ? void 0 : Pe.tagName) === "LABEL" ? n.parentElement : h).insertAdjacentElement("afterend", f), f.append(h, c);
  const p = c.querySelector(".roy-rich-status"), b = c.querySelector("[data-rich-output]"), y = c.querySelector("[data-rich-preview]"), w = c.querySelector("[data-rich-count]"), k = n.closest("form,#modalReplyForm"), _ = k == null ? void 0 : k.querySelector("button[type=submit],[data-submit-photo-reply]");
  let x = null, C = null, v = null, P = !1;
  _ && (x = document.createElement("span"), x.className = "roy-rich-actions", C = document.createComment("comment-submit-position"), _.before(C), (k.matches("[data-post],[data-compose]") || _.parentElement.matches(".note-compose-actions")) && (v = _.parentElement, P = v.hidden, v.hidden = !0), c.querySelector(".roy-rich-footer").append(x), x.append(y, _));
  const z = (T) => T.matches("img[data-roy-emoji]") && je(T.getAttribute("src"));
  function M(T, N = !1) {
    if (T.nodeType === 3) return T.textContent;
    if (T.nodeType !== 1) return "";
    if (T.tagName === "IMG") return z(T) ? N ? "￼" : "[roy-emoji:" + T.getAttribute("src") + "]" : "";
    if (T.hasAttribute("data-rich-pending")) return "";
    if (T.tagName === "BR") return `
`;
    let B = "";
    for (const G of T.childNodes)
      G.nodeType === 1 && /^(DIV|P|LI)$/.test(G.nodeName) && B && !B.endsWith(`
`) && (B += `
`), B += M(G, N);
    return /^(DIV|P|LI)$/.test(T.tagName) && T !== h && T.nextSibling && !B.endsWith(`
`) && (B += `
`), B;
  }
  function S(T = "") {
    a++, s = 0, h.replaceChildren(), Q = null, p.textContent = "";
    const N = Xn(T), B = N.text + (N.sticker ? "[roy-emoji:" + N.sticker + "]" : "");
    if (!B) {
      A();
      return;
    }
    let G = 0;
    for (const ee of B.matchAll(Ht)) {
      if (!je(ee[1])) continue;
      h.append(document.createTextNode(B.slice(G, ee.index)));
      const ne = new Image();
      ne.src = ee[1], ne.alt = t ? "Memoji" : "拟我表情", ne.className = "roy-comment-emoji", ne.dataset.royEmoji = "", ne.contentEditable = "false", ne.width = ne.height = 16, h.append(ne), G = ee.index + ee[0].length;
    }
    h.append(document.createTextNode(B.slice(G))), A();
  }
  const I = () => wi(M(h), e);
  function A() {
    if (!o) {
      if (n.value = M(h, !0), w.textContent = n.value.trim().length + " / " + e, w.classList.toggle("is-over-limit", n.value.trim().length > e), M(h).includes("￼") && (p.textContent = t ? "The keyboard sent only a placeholder. Try Safari, or copy and paste the emoji." : "键盘只传来了占位符，请使用 Safari 或复制表情后粘贴。"), !b.hidden)
        try {
          vi(b, I(), { markdown: i });
        } catch {
          b.textContent = n.value;
        }
      n.dispatchEvent(new Event("input", { bubbles: !0 })), n.dispatchEvent(new Event("roy-rich-change", { bubbles: !0 }));
    }
  }
  function H() {
    const T = n.matches(":disabled");
    h.contentEditable = String(!T), h.setAttribute("aria-disabled", String(T)), h.tabIndex = T ? -1 : 0, y.disabled = T;
  }
  const V = new MutationObserver(H);
  V.observe(n, { attributes: !0, attributeFilter: ["disabled"] });
  const q = n.closest("fieldset");
  q && V.observe(q, { attributes: !0, attributeFilter: ["disabled"] }), H();
  let Q = null;
  const Z = () => {
    const T = getSelection();
    T != null && T.rangeCount && h.contains(T.anchorNode) && (Q = T.getRangeAt(0).cloneRange());
  };
  document.addEventListener("selectionchange", Z);
  function ie(T) {
    const N = getSelection();
    let B = N != null && N.rangeCount && h.contains(N.anchorNode) ? N.getRangeAt(0).cloneRange() : Q;
    return h.focus(), (!B || !h.contains(B.commonAncestorContainer)) && (B = document.createRange(), B.selectNodeContents(h), B.collapse(!1)), B.deleteContents(), B.insertNode(T), B.setStartAfter(T), B.collapse(!0), N.removeAllRanges(), N.addRange(B), Q = B.cloneRange(), T;
  }
  async function ce(T, N) {
    if (!r || n.matches(":disabled")) return;
    const B = a, G = N || ie(Object.assign(document.createElement("span"), { textContent: "…" }));
    G.setAttribute("data-rich-pending", ""), G.contentEditable = "false", s++, p.textContent = t ? "Processing emoji…" : "正在处理表情…", A();
    try {
      const ee = await _i(T);
      if (o || B !== a || !h.contains(G)) return;
      const ne = [...h.querySelectorAll("img[data-roy-emoji]")];
      if (ne.length >= St || ne.reduce((Ne, un) => Ne + un.src.length, 0) + ee.length > Yn) throw Error("表情过多，请减少后再发送。");
      const se = new Image();
      se.src = ee, se.alt = t ? "Memoji" : "拟我表情", se.className = "roy-comment-emoji", se.dataset.royEmoji = "", se.contentEditable = "false", se.width = se.height = 16;
      const J = getSelection(), $e = (J == null ? void 0 : J.rangeCount) && J.isCollapsed && J.anchorNode === G.parentNode && J.anchorOffset === [...G.parentNode.childNodes].indexOf(G) + 1;
      if (G.replaceWith(se), $e) {
        const Ne = document.createRange();
        Ne.setStartAfter(se), Ne.collapse(!0), J.removeAllRanges(), J.addRange(Ne), Q = Ne.cloneRange();
      }
      p.textContent = "";
    } catch (ee) {
      !o && B === a && (G.remove(), p.textContent = t ? "This emoji could not be read. Try copying it from the keyboard and pasting again." : ee.message);
    } finally {
      B === a && !o && (s--, A());
    }
  }
  function g(T) {
    return [...(T == null ? void 0 : T.files) || [], ...[...(T == null ? void 0 : T.items) || []].filter((N) => N.kind === "file").map((N) => N.getAsFile()).filter(Boolean)].find((N) => N.type.startsWith("image/") || /\.(heic|heif|png|jpe?g|webp)$/i.test(N.name));
  }
  function de(T) {
    if (n.matches(":disabled")) {
      T.preventDefault();
      return;
    }
    const N = T.clipboardData || T.dataTransfer, B = new DOMParser().parseFromString((N == null ? void 0 : N.getData("text/html")) || "", "text/html"), G = (se) => /^(data:image\/|blob:)/i.test(se.getAttribute("src") || "");
    if (r && [...B.images].some(G)) {
      T.preventDefault();
      const se = (J) => {
        if (J.nodeType === 3) {
          ie(document.createTextNode(J.textContent.replace(/\ufffc/g, "")));
          return;
        }
        if (J.nodeType === 1) {
          if (J.tagName === "IMG") {
            if (G(J)) {
              const $e = new Image();
              $e.src = J.getAttribute("src"), ce($e);
            }
            return;
          }
          if (!(J.tagName === "SOURCE" || /^(SCRIPT|STYLE|IFRAME|OBJECT)$/.test(J.tagName))) {
            if (J.tagName === "BR") {
              ie(document.createTextNode(`
`));
              return;
            }
            for (const $e of J.childNodes) se($e);
            /^(DIV|P)$/.test(J.tagName) && J.nextSibling && ie(document.createTextNode(`
`));
          }
        }
      };
      for (const J of B.body.childNodes) se(J);
      A();
      return;
    }
    const ee = g(N);
    if (ee && r) {
      T.preventDefault(), ce(ee);
      return;
    }
    const ne = N == null ? void 0 : N.getData("text/plain");
    ne && ne.replace(/\ufffc/g, "") ? (T.preventDefault(), ie(document.createTextNode(ne.replace(/\ufffc/g, ""))), A()) : T.type === "drop" && T.preventDefault();
  }
  h.addEventListener("paste", de), h.addEventListener("drop", de);
  const we = (T) => {
    if (n.matches(":disabled")) {
      T.preventDefault();
      return;
    }
    const N = g(T.dataTransfer);
    N && r && (T.preventDefault(), ce(N));
  };
  h.addEventListener("beforeinput", we);
  const m = () => {
    if (!o) {
      for (const T of h.querySelectorAll("img:not([data-roy-emoji]):not([data-rich-pending])")) {
        if (!r) {
          T.remove();
          continue;
        }
        const N = T.getAttribute("src") || "";
        if (!/^(data:image\/|blob:|webkit-fake-url:)/i.test(N)) {
          T.replaceWith(document.createTextNode(T.alt || ""));
          continue;
        }
        ce(T, T);
      }
      A();
    }
  }, fe = new MutationObserver(m);
  return fe.observe(h, { childList: !0, subtree: !0, characterData: !0 }), h.addEventListener("input", m), y.onclick = () => {
    b.hidden = !b.hidden, y.textContent = b.hidden ? t ? "Preview" : "预览" : t ? "Hide preview" : "收起预览", y.setAttribute("aria-expanded", String(!b.hidden)), A();
  }, { get hasSticker() {
    return !!h.querySelector("img[data-roy-emoji]");
  }, get busy() {
    return s > 0;
  }, focus() {
    h.focus();
  }, draft() {
    return M(h);
  }, setValue: S, value() {
    if (s) throw Error(t ? "Emoji is still processing." : "表情仍在处理中");
    return I();
  }, clear() {
    a++, s = 0, h.replaceChildren(), Q = null, p.textContent = "", b.hidden = !0, y.textContent = t ? "Preview" : "预览", y.setAttribute("aria-expanded", "false"), A();
  }, destroy() {
    o = !0, a++, fe.disconnect(), V.disconnect(), document.removeEventListener("selectionchange", Z), n.hidden = u, delete n.dataset.richSource, n.required = l, C && (C.replaceWith(_), x.remove(), v && (v.hidden = P)), h.remove(), f.remove();
  } };
}
const Zl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EMOJI_COUNT_LIMIT: St,
  EMOJI_IMAGE_LIMIT: Qn,
  STICKER_LIMIT: Yn,
  bodyHTML: Vt,
  compressSticker: _i,
  createComposer: Cn,
  inlineBody: wi,
  installStyles: rn,
  packBody: Xl,
  renderBody: vi,
  splitBody: Xn,
  validSticker: je
}, Symbol.toStringTag, { value: "Module" })), Et = "https://ewjdofdzzozvzpjhcmyq.supabase.co".trim().replace(/\/$/, ""), it = "sb_publishable_fOXI3ujosvq2W6yU7LQRpg_zkZXR2Ss".trim();
if (!!Et != !!it) throw new Error("Set both public Supabase variables, or leave both empty.");
if (Et) {
  const n = new URL(Et);
  if (n.protocol !== "https:" && !["localhost", "127.0.0.1"].includes(n.hostname)) throw new Error("Supabase must use HTTPS.");
  if (it.startsWith("eyJ"))
    try {
      if (JSON.parse(atob(it.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))).role !== "anon") throw new Error("Not an anon key");
    } catch {
      throw new Error("Only a public anon key is allowed, never service_role.");
    }
  else if (!it.startsWith("sb_publishable_")) throw new Error("Use a Publishable key, never a Secret or Resend key.");
}
const xt = { url: Et, key: it, configured: !!(Et && it) };
let eu;
function Ot() {
  return eu ?? (eu = Promise.resolve().then(() => jc).then(({ createClient: n }) => n(xt.url, xt.key, {
    auth: { persistSession: !0, autoRefreshToken: !0, detectSessionInUrl: !1, storageKey: "roy-top-auth" }
  })));
}
function Zn(n) {
  if (typeof n != "string") return "";
  let t = n.trim();
  if (!t) return "";
  /^[a-z][a-z0-9+.-]*:/i.test(t) || (t = "https://" + t);
  try {
    const e = new URL(t);
    return !["http:", "https:"].includes(e.protocol) || e.username || e.password || !e.hostname.includes(".") || /[\s<>"\\]/.test(t) || e.href.length > 2048 ? "" : e.href;
  } catch {
    return "";
  }
}
const ki = (n) => /[A-Z]/.test(n) && /[a-z]/.test(n);
function Tt(n) {
  if (n.error) throw n.error;
  return n.data;
}
async function tu(n, t) {
  return Tt(await n.auth.signInWithOtp({ email: t, options: { shouldCreateUser: !1 } }));
}
async function nu(n, t, e, r = "") {
  if (!ki(e)) throw { code: "password_case" };
  const i = Zn(r);
  if (r.trim() && !i) throw { code: "blog_url_invalid" };
  return Tt(await n.auth.signUp({ email: t, password: e, options: { data: { password_enabled: !0, ...i ? { registration_blog_url: i } : {} } } }));
}
async function ru(n, t, e) {
  return Tt(await n.auth.signInWithPassword({ email: t, password: e }));
}
async function iu(n, t) {
  if (!ki(t)) throw { code: "password_case" };
  const { user: e } = Tt(await n.auth.getUser());
  if (!(e != null && e.email_confirmed_at)) throw { code: "email_not_confirmed" };
  return Tt(await n.auth.updateUser({ password: t, data: { password_enabled: !0 } }));
}
class su extends HTMLElement {
  constructor() {
    super(...arguments);
    L(this, "api");
    L(this, "user", null);
    L(this, "mode", "code");
    L(this, "pending", "");
    L(this, "registration", !1);
    L(this, "reset", !1);
    L(this, "busy", !1);
    L(this, "until", 0);
    L(this, "timer");
    L(this, "unsubscribe");
  }
  get en() {
    return this.dataset.en === "true";
  }
  t(e, r) {
    return this.en ? r : e;
  }
  el(e) {
    return this.querySelector(e);
  }
  skipped() {
    var e;
    try {
      return sessionStorage.getItem("roy-password-later-" + ((e = this.user) == null ? void 0 : e.id)) === "1";
    } catch {
      return !1;
    }
  }
  status(e, r = !1) {
    const i = this.el("[data-auth-status]");
    i.textContent = e, i.hidden = !e, i.dataset.error = String(r);
  }
  failure(e) {
    const { code: r, message: i } = e || {};
    return r === "blog_url_invalid" ? this.t("请输入有效的博客网址，也可以暂时留空。", "Enter a valid blog URL, or leave it blank for now.") : r === "password_case" ? this.t("密码需同时包含大写和小写字母。", "Include both uppercase and lowercase letters.") : r === "email_confirmation_required" ? this.t("邮箱验证配置不符合要求，请联系站长。", "Email confirmation must be enabled. Contact the site owner.") : r === "invalid_credentials" ? this.t("邮箱或密码不正确。未设置或忘记密码，可使用验证码登录。", "Incorrect email or password. Use an email code if you have not set or have forgotten your password.") : r === "otp_expired" ? this.t("验证码无效或已过期，请重新获取。", "Invalid or expired code. Request a new one.") : r === "email_not_confirmed" ? this.t("请先验证邮箱。", "Please verify your email first.") : r === "weak_password" ? this.t("密码未通过邮箱服务的密码要求：", "The authentication service rejected this password: ") + (i || "") : r === "same_password" ? this.t("这个密码与原密码相同，请换一个。", "Choose a password different from your current password.") : r === "reauthentication_needed" || r === "reauthentication_not_valid" ? this.t("请重新使用邮箱验证码登录后设置密码。", "Sign in again with an email code before setting your password.") : r != null && r.includes("rate_limit") || r === "over_request_rate_limit" ? this.t("请求过于频繁，请稍后再试。", "Too many requests. Please try again later.") : this.t("暂时无法完成操作，请稍后重试。", "Could not complete the request. Please try again later.");
  }
  async connectedCallback() {
    var r;
    if (this.dataset.bound) return;
    this.dataset.bound = "true";
    const e = this.t.bind(this);
    if (this.innerHTML = `<form data-credentials class="roy-auth-fields">
   <label class="roy-auth-field"><span>${e("邮箱", "Email")}</span><input name="auth-email" type="email" autocomplete="email" maxlength="254" required placeholder="${e("邮箱", "Email")}" /></label>
   <label class="roy-auth-field" data-blog-field hidden><span>${e("博客网址（可选，绑定后公开）", "Blog URL (optional, public when linked)")}</span><input name="auth-blog" type="url" inputmode="url" autocomplete="url" maxlength="2048" placeholder="https://" /></label>
   <label class="roy-auth-field" data-password-field hidden><span>${e("密码", "Password")}</span><input name="auth-password" type="password" autocomplete="current-password" placeholder="${e("密码", "Password")}" /></label>
   <button type="submit" class="roy-auth-primary" data-auth-submit>${e("获取验证码", "Send code")}</button>
  </form>
  <form data-verify class="roy-auth-fields" hidden><p data-target-email class="roy-auth-target"></p><label class="roy-auth-field"><span>${e("邮箱验证码", "Email code")}</span><input name="auth-token" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]{6,8}" minlength="6" maxlength="8" required placeholder="${e("邮箱验证码", "Email code")}" /></label><button type="submit" class="roy-auth-primary">${e("验证并登录", "Verify & sign in")}</button></form>
  <form data-set-password hidden><p class="roy-auth-setup-title">${e("为账号设置密码", "Set an account password")}</p><div class="roy-auth-fields"><label class="roy-auth-field"><span>${e("新密码", "New password")}</span><input name="new-password" type="password" autocomplete="new-password" minlength="6" required placeholder="${e("新密码", "New password")}" /></label><label class="roy-auth-field"><span>${e("确认密码", "Confirm password")}</span><input name="confirm-password" type="password" autocomplete="new-password" minlength="6" required placeholder="${e("再次输入密码", "Enter password again")}" /></label><button type="submit" class="roy-auth-primary">${e("保存密码", "Save password")}</button></div><button type="button" data-skip class="roy-auth-link">${e("稍后设置", "Set up later")}</button></form>
  <p data-password-hint class="roy-auth-hint" hidden>${e("密码需包含大小写字母；邮箱服务最低要求为 6 位。", "Include uppercase and lowercase letters; the email service requires at least 6 characters.")}</p>
  <p data-auth-status class="roy-auth-status" role="status" aria-live="polite" hidden></p>
  <div class="roy-auth-links" data-auth-links><a href="${this.en ? "/en" : ""}/terms/privacy-policy">${e("隐私说明", "Privacy")}</a><button type="button" data-mode-switch>${e("使用密码", "Use password")}</button><button type="button" data-register>${e("注册账号", "Create account")}</button><button type="button" data-forgot hidden>${e("忘记密码", "Forgot password")}</button><button type="button" data-resend hidden></button><button type="button" data-change hidden>${e("更换邮箱", "Change email")}</button></div>`, this.el("[data-credentials]").addEventListener("submit", (i) => {
      i.preventDefault(), this.submitCredentials();
    }), this.el("[data-verify]").addEventListener("submit", (i) => {
      i.preventDefault(), this.verify();
    }), this.el("[data-set-password]").addEventListener("submit", (i) => {
      i.preventDefault(), this.savePassword();
    }), this.el("[data-mode-switch]").addEventListener("click", () => this.switchMode(this.mode === "password" || this.mode === "register" ? "code" : "password")), this.el("[data-register]").addEventListener("click", () => this.switchMode("register")), this.el("[data-forgot]").addEventListener("click", () => {
      this.switchMode("code"), this.reset = !0, this.status(e("验证邮箱后可重新设置密码。", "Verify your email to set a new password."));
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
    }), this.timer = setInterval(() => this.tick(), 1e3), this.paint(), !xt.configured || location.protocol === "file:") {
      this.status(e("请通过网站地址打开后登录。", "Open the website address to sign in."));
      return;
    }
    try {
      this.api = await Ot();
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
    var e;
    clearInterval(this.timer), (e = this.unsubscribe) == null || e.call(this), delete this.dataset.bound;
  }
  complete() {
    this.dispatchEvent(new CustomEvent("roy-auth-complete", { bubbles: !0, detail: { user: this.user } }));
  }
  switchMode(e) {
    this.busy || (this.mode = e, this.pending = "", this.registration = !1, this.reset = !1, this.el("[name=auth-password]").value = "", this.el("[name=auth-token]").value = "", this.status(""), this.paint());
  }
  paint() {
    var i;
    if (!this.querySelector("[data-credentials]")) return;
    const e = !!this.user && (this.reset || !((i = this.user.user_metadata) != null && i.password_enabled) && !this.skipped() && this.mode !== "password");
    this.hidden = !!this.user && !e, this.dataset.mode = e ? "setup" : this.mode, this.el("[data-credentials]").hidden = !!this.user || !!this.pending, this.el("[data-verify]").hidden = !!this.user || !this.pending, this.el("[data-set-password]").hidden = !e, this.el("[data-auth-links]").hidden = !!this.user, this.el("[data-blog-field]").hidden = this.mode !== "register", this.el("[data-password-field]").hidden = this.mode === "code";
    const r = this.el("[name=auth-password]");
    r.required = this.mode !== "code", r.autocomplete = this.mode === "register" ? "new-password" : "current-password", this.mode === "register" ? r.minLength = 6 : r.removeAttribute("minlength"), this.el("[data-password-hint]").hidden = !e && this.mode !== "register", this.el("[data-mode-switch]").textContent = this.mode === "code" ? this.t("使用密码", "Use password") : this.t("使用验证码", "Use code"), this.el("[data-register]").hidden = this.mode === "register" || !!this.pending, this.el("[data-forgot]").hidden = this.mode !== "password" || !!this.pending, this.el("[data-mode-switch]").hidden = !!this.pending, this.el("[data-change]").hidden = !this.pending, this.el("[data-resend]").hidden = !this.pending, this.el("[data-target-email]").textContent = this.pending;
    for (const s of this.querySelectorAll("input")) s.disabled = this.busy;
    for (const s of this.querySelectorAll("button")) s.disabled = this.busy;
    this.tick();
  }
  tick() {
    if (!this.querySelector("[data-auth-submit]")) return;
    const e = Math.max(0, Math.ceil((this.until - Date.now()) / 1e3)), r = this.el("[data-auth-submit]"), i = this.el("[data-resend]");
    r.textContent = this.mode === "password" ? this.t("密码登录", "Sign in") : this.mode === "register" ? this.t("注册并获取验证码", "Register & send code") : this.t("获取验证码", "Send code"), r.disabled = this.busy || this.mode !== "password" && e > 0, i.textContent = e ? this.t(`${e} 秒后重发`, `Resend in ${e}s`) : this.t("重新获取验证码", "Resend code"), i.disabled = this.busy || e > 0;
  }
  async run(e) {
    if (!(this.busy || !this.api)) {
      this.busy = !0, this.paint();
      try {
        await e();
      } catch (r) {
        this.status(this.failure(r), !0);
      } finally {
        this.busy = !1, this.paint();
      }
    }
  }
  async submitCredentials() {
    const e = this.el("[name=auth-email]").value.trim(), r = this.el("[name=auth-password]").value;
    this.mode !== "password" && this.until > Date.now() || await this.run(async () => {
      var i, s;
      if (this.mode === "password") {
        const a = await ru(this.api, e, r);
        this.user = a.user, this.el("[name=auth-password]").value = "", this.complete();
        return;
      }
      if (this.mode === "register") {
        const a = await nu(this.api, e, r, this.el("[name=auth-blog]").value);
        if (this.el("[name=auth-password]").value = "", ((s = (i = a.user) == null ? void 0 : i.identities) == null ? void 0 : s.length) === 0) {
          this.switchAfterRequest("code"), this.status(this.t("该邮箱可能已经注册，请使用验证码登录。", "This email may already be registered. Sign in with an email code."));
          return;
        }
        if (a.session)
          throw await this.api.auth.signOut({ scope: "local" }), { code: "email_confirmation_required" };
        this.registration = !0;
      } else {
        try {
          await tu(this.api, e);
        } catch (a) {
          if (["otp_disabled", "user_not_found", "signup_disabled"].includes(a.code) || /signups not allowed for otp/i.test(a.message || "")) {
            this.switchAfterRequest("register"), this.status(this.t("新账号请先设置密码，再获取注册验证码。", "Set a password before requesting your registration code."));
            return;
          }
          throw a;
        }
        this.registration = !1;
      }
      this.pending = e, this.until = Date.now() + 6e4, this.status(this.t("验证码已发送，请查看邮箱。", "Code sent. Please check your inbox.")), setTimeout(() => this.el("[name=auth-token]").focus(), 0);
    });
  }
  switchAfterRequest(e) {
    this.mode = e, this.pending = "", this.el("[name=auth-password]").value = "";
  }
  async verify() {
    const e = this.el("[name=auth-token]").value.trim();
    await this.run(async () => {
      var s;
      const { data: r, error: i } = await this.api.auth.verifyOtp({ email: this.pending, token: e, type: "email" });
      if (i) throw i;
      this.user = r.user, this.pending = "", this.el("[name=auth-token]").value = "", this.user && (this.reset || !((s = this.user.user_metadata) != null && s.password_enabled) && !this.skipped() && this.mode !== "password") ? this.status(this.t("邮箱已验证，可以设置密码；也可以稍后设置。", "Email verified. Set a password now or choose later.")) : (this.status(""), this.complete());
    });
  }
  async resend() {
    this.until > Date.now() || await this.run(async () => {
      const e = this.registration ? await this.api.auth.resend({ type: "signup", email: this.pending }) : await this.api.auth.signInWithOtp({ email: this.pending, options: { shouldCreateUser: !1 } });
      if (e.error) throw e.error;
      this.until = Date.now() + 6e4, this.status(this.t("验证码已重新发送。", "A new code has been sent."));
    });
  }
  async savePassword() {
    const e = this.el("[name=new-password]").value, r = this.el("[name=confirm-password]").value;
    if (e !== r) {
      this.status(this.t("两次输入的密码不一致。", "Passwords do not match."), !0);
      return;
    }
    await this.run(async () => {
      const i = await iu(this.api, e);
      this.user = i.user, this.reset = !1, this.el("[name=new-password]").value = "", this.el("[name=confirm-password]").value = "", this.status(""), this.complete();
    });
  }
}
customElements.get("roy-account-auth") || customElements.define("roy-account-auth", su);
const Ft = [
  { value: "sunny", zh: "晴天", en: "Sunny", path: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" },
  { value: "cloudy", zh: "多云", en: "Cloudy", path: "M7 18h10a4 4 0 1 0-.5-8 6 6 0 0 0-11.4 1.5A3.3 3.3 0 0 0 7 18Z" },
  { value: "rainy", zh: "下雨", en: "Rainy", path: "M7 14h10a3.5 3.5 0 1 0-.5-7 5 5 0 0 0-9.5 1A3 3 0 0 0 7 14Zm1 3-1 3m6-3-1 3m6-3-1 3" },
  { value: "windy", zh: "有风", en: "Windy", path: "M3 8h12a3 3 0 1 0-3-3M3 12h16a2 2 0 1 1-2 2M3 16h8a3 3 0 1 1-3 3" },
  { value: "snowy", zh: "下雪", en: "Snowy", path: "M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7M9 4l3 3 3-3M9 20l3-3 3 3M4 10l4-1-1-4m10 14-1-4 4-1M4 14l4 1-1 4M17 5l-1 4 4 1" }
], fn = [
  { value: "paper", zh: "原色", en: "Paper", swatch: "#fff9ee" },
  { value: "apricot", zh: "杏黄", en: "Apricot", swatch: "#efcb83" },
  { value: "clay", zh: "陶土粉", en: "Terracotta", swatch: "#d8a08c" },
  { value: "sage", zh: "鼠尾草绿", en: "Sage", swatch: "#a9bdab" },
  { value: "mist", zh: "雾蓝灰", en: "Mist blue", swatch: "#a9b9c3" },
  { value: "rose", zh: "玫瑰棕", en: "Dusty rose", swatch: "#b6a4ad" },
  { value: "forest", zh: "森林绿", en: "Forest", swatch: "#527366" }
], pn = "moment-photos", au = 262144;
function ou(n) {
  return typeof n == "string" && /^[0-9a-f-]{36}\/[0-9a-f-]{36}\.webp$/.test(n);
}
function Ar(n) {
  return n >= 1048576 ? (n / 1048576).toFixed(1) + " MB" : Math.max(1, Math.round(n / 1024)) + " KB";
}
let gn;
async function lu(n, t, e) {
  if (gn !== !1) {
    let r;
    try {
      r = await new Promise((i) => n.toBlob(i, "image/webp", e));
    } catch {
    }
    if ((r == null ? void 0 : r.type) === "image/webp")
      return gn = !0, r;
    gn = !1;
  }
  try {
    const r = "/shared/webp-encoder/encode.js?v=1.5.0", { default: i } = await import(
      /* @vite-ignore */
      r
    );
    return await i(t.getImageData(0, 0, n.width, n.height), Math.round(e * 100));
  } catch (r) {
    throw new Error("photo-webp", { cause: r });
  }
}
async function uu(n) {
  var i;
  if (!n || !n.size) throw Error("photo-format");
  const t = (n.type || "").toLowerCase().split(";")[0];
  if (!["image/jpeg", "image/jpg", "image/pjpeg", "image/png", "image/webp", "image/avif", "image/heic", "image/heif"].includes(t) && !/\.(jpe?g|png|webp|avif|heic|heif)$/i.test(n.name || "")) throw Error("photo-format");
  if (n.size > 32 * 1048576) throw Error("photo-file-size");
  let e, r = "";
  try {
    try {
      e = await createImageBitmap(n, { imageOrientation: "from-image" });
    } catch {
      r = URL.createObjectURL(n), e = new Image(), e.src = r;
      try {
        await e.decode();
      } catch (c) {
        throw new Error("photo-decode", { cause: c });
      }
    }
    const s = e.naturalWidth || e.width, a = e.naturalHeight || e.height;
    if (!s || !a || s * a > 128e6) throw Error("photo-dimensions");
    const o = document.createElement("canvas"), l = o.getContext("2d");
    if (!l) throw Error("photo-canvas");
    let u = Math.min(1, 1600 / Math.max(s, a)), h;
    for (let c = 0; c < 5; c++) {
      o.width = Math.max(1, Math.round(s * u)), o.height = Math.max(1, Math.round(a * u)), l.imageSmoothingEnabled = !0, l.imageSmoothingQuality = "high", l.drawImage(e, 0, 0, o.width, o.height);
      for (const f of [0.82, 0.72, 0.62]) {
        if (h = await lu(o, l, f), !h || h.type !== "image/webp") throw Error("photo-webp");
        if (h.size <= 160 * 1024) return { blob: h, width: o.width, height: o.height, originalBytes: n.size };
      }
      u *= 0.8;
    }
    if (!h || h.size > au) throw Error("photo-size");
    return { blob: h, width: o.width, height: o.height, originalBytes: n.size };
  } finally {
    (i = e == null ? void 0 : e.close) == null || i.call(e), r && URL.revokeObjectURL(r);
  }
}
const Ce = /* @__PURE__ */ new Map();
function Si(n) {
  const t = Ce.get(n.dataset.blogWebsite || "");
  n.hidden = !1, t ? (n.href = t, n.textContent = t.replace(/^https?:\/\//, "").replace(/\/$/, ""), n.target = "_blank", n.rel = "noopener noreferrer") : (n.href = "#", n.textContent = n.dataset.blogPlaceholder || "绑定网址");
}
function hu(n, t = !1) {
  const e = document.createElement("a");
  return e.className = "roy-blog-website", e.dataset.blogWebsite = n || "", e.dataset.blogPlaceholder = t ? "Link website" : "绑定网址", Si(e), e;
}
function Ei() {
  document.querySelectorAll("[data-blog-website]").forEach(Si), document.querySelectorAll("[data-blog-badge]").forEach((n) => {
    n.hidden = !Ce.has(n.dataset.blogBadge || "");
  }), document.querySelectorAll("[data-blog-avatar]").forEach((n) => {
    const t = Ce.get(n.dataset.blogAvatar || "");
    t ? (n.href = t, n.target = "_blank", n.rel = "noopener noreferrer", n.setAttribute("aria-label", n.dataset.blogLabel || "Visit blog")) : (n.removeAttribute("href"), n.removeAttribute("target"), n.removeAttribute("aria-label"));
  });
}
function cu(n, t = !1) {
  const e = document.createElement("span");
  return e.className = "roy-blog-badge", e.dataset.blogBadge = n || "", e.hidden = !Ce.has(n || ""), e.setAttribute("role", "img"), e.setAttribute("aria-label", t ? "Blog linked" : "已绑定博客"), e.title = t ? "Blog linked" : "已绑定博客", e;
}
function du(n, t, e, r = !1) {
  const i = document.createElement("a");
  i.className = "roy-blog-avatar-link", i.dataset.blogAvatar = t || "", i.dataset.blogLabel = r ? `Visit ${e}’s blog` : `访问 ${e} 的博客`, i.append(n);
  const s = Ce.get(t || "");
  return s && (i.href = s, i.target = "_blank", i.rel = "noopener noreferrer", i.setAttribute("aria-label", i.dataset.blogLabel)), i;
}
async function An(n, t) {
  const e = [...new Set(t.filter((r) => !!r))];
  for (let r = 0; r < e.length; r += 50) {
    const i = e.slice(r, r + 50);
    try {
      const { data: s, error: a } = await n.from("roy_top_blogs").select("user_id,blog_url").in("user_id", i).abortSignal(AbortSignal.timeout(1e4));
      if (a) continue;
      i.forEach((o) => Ce.delete(o));
      for (const o of s || []) {
        const l = Zn(o.blog_url);
        l && Ce.set(o.user_id, l);
      }
    } catch {
    }
  }
  Ei();
}
class fu extends HTMLElement {
  constructor() {
    super(...arguments);
    L(this, "api");
    L(this, "user", null);
    L(this, "version", 0);
    L(this, "stop");
    L(this, "busy", !1);
  }
  get en() {
    return this.dataset.en === "true";
  }
  t(e, r) {
    return this.en ? r : e;
  }
  el(e) {
    return this.querySelector(e);
  }
  status(e) {
    this.el("[data-blog-status]").textContent = e;
  }
  async connectedCallback() {
    var r;
    if (this.dataset.ready) return;
    this.dataset.ready = "true", this.hidden = !0;
    const e = document.createElement("template");
    e.innerHTML = `<div class="roy-blog-settings-row"><button type="button" data-blog-edit></button><a data-blog-current target="_blank" rel="noopener noreferrer" hidden></a></div><form data-blog-form hidden><label class="roy-blog-input-label">${this.t("博客网址（公开）", "Blog URL (public)")}<input name="blog-url" type="url" inputmode="url" autocomplete="url" maxlength="2048" placeholder="https://" /></label><p class="roy-blog-hint">${this.t("绑定后，其他人可点击你的头像访问博客。", "Once linked, others can visit your blog by clicking your avatar.")}</p><div class="roy-blog-settings-row"><button type="submit">${this.t("保存网址", "Save URL")}</button><button type="button" data-blog-cancel>${this.t("取消", "Cancel")}</button><button type="button" data-blog-remove hidden>${this.t("解除绑定", "Unlink")}</button></div></form><p data-blog-status class="roy-blog-status" role="status" aria-live="polite"></p>`, this.replaceChildren(e.content.cloneNode(!0)), this.el("[data-blog-edit]").addEventListener("click", () => {
      this.el("[data-blog-form]").hidden = !1, this.el("[name=blog-url]").focus(), this.status("");
    }), this.el("[data-blog-current]").addEventListener("click", (i) => {
      i.preventDefault(), this.el("[data-blog-edit]").click();
    }), this.el("[data-blog-cancel]").addEventListener("click", () => {
      this.el("[data-blog-form]").hidden = !0, this.status("");
    }), this.el("[data-blog-remove]").addEventListener("click", () => void this.save(!0)), this.el("[data-blog-form]").addEventListener("submit", (i) => {
      i.preventDefault(), i.stopPropagation(), this.save(!1);
    });
    try {
      this.api = await Ot();
      const { data: i } = await this.api.auth.getSession(), { data: s } = this.api.auth.onAuthStateChange((a, o) => setTimeout(() => {
        var l;
        this.isConnected && ((l = this.user) == null ? void 0 : l.id) !== (o == null ? void 0 : o.user.id) && this.identity((o == null ? void 0 : o.user) ?? null);
      }, 0));
      this.stop = () => s.subscription.unsubscribe(), await this.identity(((r = i.session) == null ? void 0 : r.user) ?? null);
    } catch {
      this.hidden = !0;
    }
  }
  disconnectedCallback() {
    var e;
    (e = this.stop) == null || e.call(this), this.version++;
  }
  async identity(e) {
    const r = ++this.version;
    this.user = e, this.hidden = !e, this.el("[data-blog-form]").hidden = !0, this.status(""), e && (await An(this.api, [e.id]), r === this.version && this.paint());
  }
  paint() {
    var i;
    const e = Ce.get(((i = this.user) == null ? void 0 : i.id) || "") || "";
    this.el("[data-blog-edit]").textContent = this.t(e ? "修改博客网址" : "绑定网址", e ? "Edit blog URL" : "Link website"), this.el("[data-blog-edit]").hidden = !!e;
    const r = this.el("[data-blog-current]");
    r.hidden = !e, r.textContent = e, r.title = this.t("点击修改博客网址", "Click to edit your blog URL"), r.removeAttribute("target"), e ? r.href = e : r.removeAttribute("href"), this.el("[name=blog-url]").value = e, this.el("[data-blog-remove]").hidden = !e, this.querySelectorAll("button").forEach((s) => s.disabled = this.busy);
  }
  async save(e) {
    var a, o;
    const r = this.user;
    if (!r || this.busy) return;
    const i = this.el("[name=blog-url]").value, s = Zn(i);
    if (!e && !s) {
      this.status(this.t("请输入有效的 http:// 或 https:// 博客网址。", "Enter a valid http:// or https:// blog URL."));
      return;
    }
    this.busy = !0, this.querySelectorAll("button").forEach((l) => l.disabled = !0);
    try {
      const l = e ? await this.api.from("roy_top_blogs").delete().eq("user_id", r.id) : await this.api.from("roy_top_blogs").upsert({ user_id: r.id, blog_url: s }, { onConflict: "user_id" });
      if (l.error) throw l.error;
      if (((a = this.user) == null ? void 0 : a.id) !== r.id) return;
      e ? Ce.delete(r.id) : Ce.set(r.id, s), Ei(), this.el("[data-blog-form]").hidden = !0, this.status(this.t(e ? "已解除博客绑定。" : "博客网址已绑定。", e ? "Blog unlinked." : "Blog URL linked."));
    } catch {
      this.status(this.t("暂时无法保存博客网址，请稍后重试。", "Could not save your blog URL. Please try again."));
    } finally {
      this.busy = !1, ((o = this.user) == null ? void 0 : o.id) === r.id && this.paint();
    }
  }
}
customElements.get("roy-blog-settings") || customElements.define("roy-blog-settings", fu);
const st = /* @__PURE__ */ new Map(), xi = (n) => typeof n == "string" && n.length <= 22e3 && /^data:image\/(webp|jpeg);base64,[A-Za-z0-9+/]+={0,2}$/.test(n);
function Ti(n) {
  const t = st.get(n.dataset.avatarUser || "");
  n.style.backgroundImage = t ? `url("${t}")` : "", n.style.backgroundSize = "cover", n.style.backgroundPosition = "center", n.textContent = t ? "" : n.dataset.avatarInitial || "R";
}
function er(n, t, e = "") {
  const r = document.createElement("span");
  return r.className = "roy-account-avatar " + e, r.dataset.avatarUser = n || "", r.dataset.avatarInitial = [...t][0] || "R", r.setAttribute("aria-hidden", "true"), Ti(r), r;
}
function Ci() {
  document.querySelectorAll("[data-avatar-user]").forEach(Ti);
}
async function Kt(n, t) {
  const e = [...new Set(t.filter((r) => !!r))];
  for (let r = 0; r < e.length; r += 50) {
    const i = e.slice(r, r + 50);
    try {
      const { data: s, error: a } = await n.from("roy_top_avatars").select("user_id,avatar_data").in("user_id", i).abortSignal(AbortSignal.timeout(1e4));
      if (a) continue;
      for (const o of i) st.delete(o);
      for (const o of s || []) xi(o.avatar_data) && st.set(o.user_id, o.avatar_data);
    } catch {
    }
  }
  Ci();
}
function pu(n) {
  return new Promise((t, e) => {
    const r = new FileReader();
    r.onload = () => t(String(r.result)), r.onerror = () => e(Error("read")), r.readAsDataURL(n);
  });
}
async function gu(n) {
  if (!["image/jpeg", "image/png", "image/webp", "image/avif"].includes(n.type) || n.size > 32 * 1024 * 1024 || !n.size) throw Error("format");
  const t = URL.createObjectURL(n), e = new Image();
  e.decoding = "async";
  try {
    await new Promise((a, o) => {
      e.onload = () => a(), e.onerror = () => o(Error("format")), e.src = t;
    });
    const { naturalWidth: r, naturalHeight: i } = e;
    if (!r || !i || r * i > 1e8) throw Error("dimensions");
    const s = Math.min(r, i);
    for (const a of [192, 160, 128]) {
      const o = document.createElement("canvas");
      o.width = o.height = Math.min(a, s);
      const l = o.getContext("2d");
      if (!l) throw Error("canvas");
      l.fillStyle = "#fff", l.fillRect(0, 0, o.width, o.height), l.imageSmoothingEnabled = !0, l.imageSmoothingQuality = "high", l.drawImage(e, (r - s) / 2, (i - s) / 2, s, s, 0, 0, o.width, o.height);
      for (const u of [0.88, 0.78, 0.68]) {
        let h = await new Promise((c) => o.toBlob(c, "image/webp", u));
        if ((!h || h.type !== "image/webp") && (h = await new Promise((c) => o.toBlob(c, "image/jpeg", u))), h && h.size <= 16384) {
          const c = await pu(h);
          if (xi(c)) return { data: c, bytes: h.size, edge: o.width };
        }
      }
    }
    throw Error("size");
  } finally {
    URL.revokeObjectURL(t), e.src = "";
  }
}
class mu extends HTMLElement {
  constructor() {
    super(...arguments);
    L(this, "api");
    L(this, "user", null);
    L(this, "version", 0);
    L(this, "stop");
    L(this, "busy", !1);
  }
  get en() {
    return this.dataset.en === "true";
  }
  t(e, r) {
    return this.en ? r : e;
  }
  el(e) {
    return this.querySelector(e);
  }
  status(e) {
    this.el("[data-avatar-status]").textContent = e;
  }
  async connectedCallback() {
    var e;
    if (!this.dataset.ready) {
      this.dataset.ready = "true", this.hidden = !0, this.innerHTML = `<roy-blog-settings data-en="${this.en ? "true" : "false"}"></roy-blog-settings><div class="roy-avatar-settings-row"><span data-avatar-preview></span><div class="roy-avatar-actions"><button type="button" data-avatar-choose>${this.t("设置头像", "Set avatar")}</button><button type="button" data-avatar-remove hidden>${this.t("移除", "Remove")}</button></div><input type="file" accept="image/jpeg,image/png,image/webp,image/avif" hidden /><span data-avatar-status role="status" aria-live="polite"></span></div>`, this.el("[data-avatar-choose]").addEventListener("click", () => {
        this.busy || (this.el("input[type=file]").value = "", this.el("input[type=file]").click());
      }), this.el("input[type=file]").addEventListener("change", () => void this.choose()), this.el("[data-avatar-remove]").addEventListener("click", () => void this.removeAvatar());
      try {
        this.api = await Ot();
        const { data: r } = await this.api.auth.getSession(), { data: i } = this.api.auth.onAuthStateChange((s, a) => setTimeout(() => {
          var o;
          this.isConnected && (a == null ? void 0 : a.user.id) !== ((o = this.user) == null ? void 0 : o.id) && this.identity((a == null ? void 0 : a.user) ?? null);
        }, 0));
        this.stop = () => i.subscription.unsubscribe(), await this.identity(((e = r.session) == null ? void 0 : e.user) ?? null);
      } catch {
        this.hidden = !0;
      }
    }
  }
  disconnectedCallback() {
    var e;
    (e = this.stop) == null || e.call(this), this.version++;
  }
  async identity(e) {
    const r = ++this.version;
    if (this.user = e, this.hidden = !e, this.status(""), !e) return;
    const { data: i } = await this.api.from("roy_top_profiles").select("nickname").eq("user_id", e.id).maybeSingle();
    await Kt(this.api, [e.id]), r === this.version && (this.el("[data-avatar-preview]").replaceChildren(er(e.id, (i == null ? void 0 : i.nickname) || "R")), this.updateButtons());
  }
  updateButtons() {
    var r;
    const e = !!st.get(((r = this.user) == null ? void 0 : r.id) || "");
    this.el("[data-avatar-choose]").textContent = this.t(e ? "更换头像" : "设置头像", e ? "Change avatar" : "Set avatar"), this.el("[data-avatar-remove]").hidden = !e, this.querySelectorAll(".roy-avatar-settings-row button").forEach((i) => i.disabled = this.busy);
  }
  changed(e, r) {
    r ? st.set(e, r) : st.delete(e), Ci(), window.dispatchEvent(new CustomEvent("roy-avatar-changed", { detail: { userId: e } })), this.updateButtons();
  }
  async choose() {
    var i, s, a;
    const e = (i = this.el("input[type=file]").files) == null ? void 0 : i[0], r = this.user;
    if (!(!e || !r || this.busy)) {
      this.busy = !0, this.updateButtons(), this.status(this.t("正在压缩…", "Optimizing…"));
      try {
        const o = await gu(e);
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
    const e = this.user;
    if (!(!e || this.busy)) {
      this.busy = !0, this.updateButtons();
      try {
        const { error: i } = await this.api.from("roy_top_avatars").delete().eq("user_id", e.id);
        if (i) throw i;
        ((r = this.user) == null ? void 0 : r.id) === e.id && (this.changed(e.id), this.status(this.t("已恢复默认头像。", "Default avatar restored.")));
      } catch {
        this.status(this.t("暂时无法移除头像，请重试。", "Could not remove avatar. Please try again."));
      } finally {
        this.busy = !1, this.updateButtons();
      }
    }
  }
}
customElements.get("roy-avatar-settings") || customElements.define("roy-avatar-settings", mu);
function U(n, t = "", e) {
  const r = document.createElement(n);
  return r.className = t, e !== void 0 && (r.textContent = e), r;
}
function Or(n, t = !1) {
  const e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  for (const [i, s] of Object.entries({ width: "16", height: "16", viewBox: "0 0 24 24", fill: t ? "currentColor" : "none", stroke: "currentColor", "stroke-width": "1.6", "aria-hidden": "true" })) e.setAttribute(i, s);
  const r = document.createElementNS(e.namespaceURI, "path");
  return r.setAttribute("d", n === "heart" ? "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" : "M21 11.5a8.5 8.5 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-5.5a9 9 0 0 1-.9-4A8.5 8.5 0 0 1 12.5 3H13a8.5 8.5 0 0 1 8 8v.5Z"), e.append(r), e;
}
class bu extends HTMLElement {
  constructor() {
    super(...arguments);
    L(this, "api");
    L(this, "user");
    L(this, "nickname", "");
    L(this, "admin", !1);
    L(this, "manage", !1);
    L(this, "canPublish", !1);
    L(this, "photo");
    L(this, "photoPreviewURL", "");
    L(this, "photoBusy", !1);
    L(this, "photoJob", 0);
    L(this, "version", 0);
    L(this, "posts", []);
    L(this, "composer");
    L(this, "replyComposers", /* @__PURE__ */ new Map());
    L(this, "replyForms", /* @__PURE__ */ new Map());
    L(this, "threads", /* @__PURE__ */ new Map());
    L(this, "detailId", "");
    L(this, "detailClosing", !1);
    L(this, "detailOverflow", "");
    L(this, "detailOpener");
    L(this, "loginOverflow", "");
    L(this, "loginClosing", !1);
    L(this, "identityReady", !1);
    L(this, "pendingAction", null);
    L(this, "publishOverflow", "");
    L(this, "publishClosing", !1);
    L(this, "feeding", !1);
    L(this, "more", !1);
    L(this, "poll");
    L(this, "unsubscribe");
    L(this, "authObserver");
  }
  get detail() {
    return this.el("[data-detail-dialog]");
  }
  get loginDialog() {
    return this.el(".moment-login");
  }
  resetLogin() {
    var e;
    (e = this.loginDialog) != null && e.open && (this.loginDialog.close(), this.loginDialog.getAnimations().forEach((r) => r.cancel()), this.loginDialog.classList.remove("is-closing"), document.documentElement.style.overflow = this.loginOverflow, this.loginClosing = !1);
  }
  requestLogin(e = null) {
    this.pendingAction = e, !(this.loginDialog.open || this.loginClosing) && (this.resetDetail(), this.loginOverflow = document.documentElement.style.overflow, document.documentElement.style.overflow = "hidden", this.el("[data-auth]").hidden = !1, this.loginDialog.showModal(), this.animateOpen(this.loginDialog));
  }
  async closeLogin() {
    !this.loginDialog.open || this.loginClosing || (this.loginClosing = !0, await this.animateClose(this.loginDialog), this.loginDialog.open && (this.pendingAction = null, this.resetLogin(), this.el("[data-compose-open]").focus()));
  }
  finishLogin() {
    var r;
    if (!this.user || !this.identityReady || !((r = this.querySelector("roy-account-auth")) != null && r.hidden)) return;
    this.resetLogin();
    const e = this.pendingAction;
    if (this.pendingAction = null, (e == null ? void 0 : e.kind) === "publish" && this.openPublish(), (e == null ? void 0 : e.kind) === "reply") {
      const i = this.posts.find((s) => s.id === e.root);
      i && this.openThread(i, i);
    }
  }
  get publishDialog() {
    return this.el(".moment-publish");
  }
  animateOpen(e) {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    e.style.willChange = "opacity, transform", e.animate([{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 240, easing: "cubic-bezier(.2,.65,.3,1)" }).finished.catch(() => {
    }).then(() => e.style.removeProperty("will-change"));
  }
  async animateClose(e) {
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const r = getComputedStyle(e), i = { opacity: r.opacity, transform: r.transform };
      e.getAnimations().filter((a) => a.effect instanceof KeyframeEffect && a.effect.target === e).forEach((a) => a.cancel()), e.classList.add("is-closing"), e.style.willChange = "opacity, transform";
      const s = e.animate([i, { opacity: 0, transform: "translateY(6px)" }], { duration: 180, easing: "cubic-bezier(.4,0,.7,.3)", fill: "forwards" });
      await new Promise((a) => {
        const o = setTimeout(a, 240);
        s.finished.catch(() => {
        }).then(() => {
          clearTimeout(o), a();
        });
      }), e.style.removeProperty("will-change");
    }
  }
  resetPublish() {
    var e;
    (e = this.publishDialog) != null && e.open && (this.publishDialog.close(), this.publishDialog.getAnimations().forEach((r) => r.cancel()), this.publishDialog.classList.remove("is-closing"), document.documentElement.style.overflow = this.publishOverflow, this.publishClosing = !1);
  }
  openPublish() {
    var e;
    if (!this.user) {
      this.requestLogin({ kind: "publish" });
      return;
    }
    this.canPublish && (this.publishClosing || this.detail.open || this.publishDialog.open || (this.publishOverflow = document.documentElement.style.overflow, document.documentElement.style.overflow = "hidden", this.publishDialog.showModal(), this.animateOpen(this.publishDialog), this.nickname ? (e = this.composer) == null || e.focus() : this.el("[name=nickname]").focus()));
  }
  async closePublish() {
    if (!this.publishDialog.open || this.publishClosing) return;
    const e = this.version;
    this.publishClosing = !0, await this.animateClose(this.publishDialog), !(this.version !== e || !this.publishDialog.open) && (this.resetPublish(), this.el("[data-compose-open]").focus());
  }
  get en() {
    return this.dataset.en === "true";
  }
  get titleButton() {
    return this.ownerDocument.querySelector("[data-moments-title]");
  }
  t(e, r) {
    return this.en ? r : e;
  }
  el(e) {
    return this.querySelector(e);
  }
  status(e = "", r = !1) {
    for (const i of this.querySelectorAll("[data-status],[data-compose-status]"))
      i.textContent = e, i.hidden = !e, i.classList.toggle("text-red-600", r);
  }
  failure(e) {
    const r = e == null ? void 0 : e.code;
    return r === "P0001" ? this.t("发布较频繁，请稍等几秒再试。", "Please wait a few seconds before posting again.") : r === "P0002" ? this.t("这条内容已不可用，请刷新。", "This post is no longer available. Please refresh.") : r === "42501" ? this.t("请先登录，或确认账号拥有此操作权限。", "Sign in or check your permission for this action.") : r === "23514" ? this.t("请先设置昵称，并填写 1–4000 字内容。", "Set your nickname and enter 1–4000 characters.") : r === "23505" ? this.t("昵称已设置，请刷新页面。", "Your nickname is already set. Please refresh.") : r === "otp_expired" ? this.t("验证码无效或已过期，请重新获取。", "The code is invalid or expired. Request another one.") : r === "over_email_send_rate_limit" || r === "over_request_rate_limit" ? this.t("验证码发送频繁，请稍后再试。", "Too many requests. Please try again later.") : r === "PGRST202" ? this.t("Moments数据服务需要更新，暂时无法完成发布。", "The Moments data service needs an update before posting.") : this.t("暂时无法完成操作，请重试。", "Could not complete the request. Please try again.");
  }
  async rpc(e, r = {}) {
    const { data: i, error: s } = await this.api.rpc(e, r);
    if (s) throw s;
    return i;
  }
  button(e, r, i = "moment-action") {
    const s = U("button", i, e);
    return s.type = "button", s.addEventListener("click", () => {
      r();
    }), s;
  }
  async connectedCallback() {
    var e;
    if (!this.dataset.ready) {
      if (this.dataset.ready = "true", location.protocol === "file:") {
        this.status(this.t("请通过网站地址打开Moments。", "Open Moments through the website address."));
        return;
      }
      if (!xt.configured) {
        this.status(this.t("Moments暂未开放。", "Moments is not available yet."));
        return;
      }
      this.bind();
      try {
        this.api = await Ot();
        const { data: r, error: i } = await this.api.auth.getSession();
        if (i) throw i;
        const { data: s } = this.api.auth.onAuthStateChange((a, o) => {
          setTimeout(() => {
            var l, u;
            this.isConnected && ((l = this.user) == null ? void 0 : l.id) !== ((u = o == null ? void 0 : o.user) == null ? void 0 : u.id) && this.identity((o == null ? void 0 : o.user) ?? null);
          }, 0);
        });
        this.unsubscribe = () => s.subscription.unsubscribe(), await this.identity(((e = r.session) == null ? void 0 : e.user) ?? null), this.poll = setInterval(() => {
          !document.hidden && !this.hasReplyDraft() && this.loadPosts(!0, !0);
        }, 45e3);
      } catch (r) {
        console.warn("Moments initialization:", r instanceof Error ? r.message : String(r)), this.status(this.failure(r), !0);
      }
    }
  }
  disconnectedCallback() {
    var e, r, i;
    this.clearPhoto(), this.resetLogin(), this.resetPublish(), this.resetDetail(), (e = this.composer) == null || e.destroy(), this.clearReplyComposers(), (r = this.unsubscribe) == null || r.call(this), (i = this.authObserver) == null || i.disconnect(), clearInterval(this.poll), this.version++;
  }
  clearReplyComposers() {
    for (const e of this.replyComposers.values()) e.destroy();
    this.replyComposers.clear(), this.replyForms.clear();
  }
  resetDetail() {
    var e;
    (e = this.detail) != null && e.open && (this.detail.close(), this.detail.getAnimations().forEach((r) => r.cancel()), this.detail.classList.remove("is-closing"), document.documentElement.style.overflow = this.detailOverflow, this.detailId = "", this.detailClosing = !1);
  }
  async closeDetail() {
    var s;
    if (!this.detail.open || this.detailClosing) return;
    const e = this.version, r = this.detailId;
    if (this.detailClosing = !0, this.captureDrafts(), await this.animateClose(this.detail), !this.detail.open || this.version !== e || this.detailId !== r) return;
    const i = this.detailId;
    this.resetDetail(), (s = this.querySelector(`[data-id="${i}"] .moment-cover`)) == null || s.focus({ preventScroll: !0 });
  }
  showDetail(e, r) {
    var l;
    if (this.detailClosing) return;
    this.detailId = e.id, this.detailOpener = r, this.detail.classList.toggle("has-photo", !!this.photoSource(e)), this.el("#moment-detail-title").textContent = this.t(`“${e.author_name}”的这一刻`, `${e.author_name}’s moment`);
    const i = this.card(e, e, !1, !0), s = U("section", "moment-thread");
    s.dataset.thread = e.id, s.hidden = !((l = this.threads.get(e.id)) != null && l.open), (i.querySelector(".moment-detail-copy") || i).append(s), this.el("[data-detail-content]").replaceChildren(i), s.hidden || this.renderThread(e);
    const a = r == null ? void 0 : r.querySelector("img"), o = i.querySelector(".moment-detail-photo img");
    a != null && a.naturalWidth && a.naturalHeight && o && (o.width = a.naturalWidth, o.height = a.naturalHeight, i.style.setProperty("--moment-image-ratio", String(a.naturalWidth / a.naturalHeight))), this.detail.open || (this.detailOverflow = document.documentElement.style.overflow, document.documentElement.style.overflow = "hidden", this.detail.showModal(), this.el("[data-detail-content]").scrollTop = 0, this.animateOpen(this.detail));
  }
  bind() {
    var s;
    this.el("[data-app]").hidden = !1, this.el("[data-login-close]").addEventListener("click", () => {
      this.closeLogin();
    }), this.loginDialog.addEventListener("cancel", (a) => {
      a.preventDefault(), this.closeLogin();
    }), this.loginDialog.addEventListener("click", (a) => {
      if (a.target === this.loginDialog) {
        const o = this.loginDialog.getBoundingClientRect();
        (a.clientX < o.left || a.clientX > o.right || a.clientY < o.top || a.clientY > o.bottom) && this.closeLogin();
      }
    }), this.addEventListener("roy-auth-complete", () => this.finishLogin()), this.el("[data-compose-open]").addEventListener("click", () => this.openPublish()), this.el("[data-compose-close]").addEventListener("click", () => {
      this.closePublish();
    }), this.publishDialog.addEventListener("cancel", (a) => {
      a.preventDefault(), this.closePublish();
    }), this.publishDialog.addEventListener("click", (a) => {
      if (a.target === this.publishDialog) {
        const o = this.publishDialog.getBoundingClientRect();
        (a.clientX < o.left || a.clientX > o.right || a.clientY < o.top || a.clientY > o.bottom) && this.closePublish();
      }
    }), this.el("[data-detail-close]").addEventListener("click", () => {
      this.closeDetail();
    }), this.detail.addEventListener("cancel", (a) => {
      a.preventDefault(), this.closeDetail();
    }), this.detail.addEventListener("click", (a) => {
      if (a.target === this.detail) {
        const o = this.detail.getBoundingClientRect();
        (a.clientX < o.left || a.clientX > o.right || a.clientY < o.top || a.clientY > o.bottom) && this.closeDetail();
      }
    }), this.composer = Cn(this.el("#moment-body"), { en: this.en, limit: 4e3 }), this.el("[data-photo-choose]").addEventListener("click", () => this.el("[data-photo-input]").click()), this.el("[data-photo-remove]").addEventListener("click", () => this.clearPhoto()), this.el("[data-photo-input]").addEventListener("change", (a) => {
      var u;
      const o = a.target, l = (u = o.files) == null ? void 0 : u[0];
      o.value = "", l && this.choosePhoto(l);
    });
    const e = this.el("[data-compose] .roy-rich-footer");
    e.before(this.el(".moment-options"));
    const r = U("div", "moment-photo-tool");
    r.append(this.el("[data-photo-choose]"), this.el("[data-weather-toggle]")), e.prepend(r);
    const i = this.el(".moment-photo-picker");
    i.hidden = !0, this.el("[data-compose] .roy-rich-editor").after(i);
    for (const a of ["weather", "color"]) {
      const o = this.el(`[data-${a}-toggle]`), l = this.el(`#moment-${a}-picker`);
      o.addEventListener("click", () => {
        const u = l.hidden;
        for (const h of ["weather", "color"])
          this.el(`#moment-${h}-picker`).hidden = !0, this.el(`[data-${h}-toggle]`).setAttribute("aria-expanded", "false");
        l.hidden = !u, o.setAttribute("aria-expanded", String(u));
      }), l.addEventListener("change", () => {
        this.syncStyleChoices(), l.hidden = !0, o.setAttribute("aria-expanded", "false"), o.focus();
      });
    }
    this.el("[data-profile]").addEventListener("submit", (a) => {
      a.preventDefault(), this.saveProfile();
    }), this.el("[data-compose]").addEventListener("submit", (a) => {
      a.preventDefault(), this.publish();
    }), this.el("[data-logout]").addEventListener("click", () => {
      this.logout();
    }), (s = this.titleButton) == null || s.addEventListener("click", () => {
      this.loadPosts(!0);
    }), this.el("[data-more]").addEventListener("click", () => {
      this.loadPosts(!1);
    }), this.el("[data-manage]").addEventListener("click", () => {
      this.admin && (this.captureDrafts(), this.manage = !this.manage, this.el("[data-manage]").setAttribute("aria-pressed", String(this.manage)), this.el("[data-manage]").textContent = this.manage ? this.t("退出管理", "Leave management mode") : this.t("管理记录", "Manage entries"), this.renderFeed());
    }), this.el("#moment-body").addEventListener("input", () => {
      this.el("[data-length]").textContent = `${this.el("#moment-body").value.length} / 4000`;
    });
  }
  syncStyleChoices() {
    var a;
    const e = Ft.find((o) => {
      var l;
      return o.value === ((l = this.querySelector("[name=moment-weather]:checked")) == null ? void 0 : l.value);
    }), r = fn.find((o) => {
      var l;
      return o.value === ((l = this.querySelector("[name=moment-color]:checked")) == null ? void 0 : l.value);
    }) || fn[0];
    this.el("[data-weather-selected]").textContent = e ? this.en ? e.en : e.zh : this.t("不标注", "None");
    const i = this.el("[data-weather-toggle]"), s = this.t("天气", "Weather") + " · " + this.el("[data-weather-selected]").textContent;
    i.title = s, i.setAttribute("aria-label", s), i.classList.toggle("has-weather", !!e), (a = i.querySelector("path")) == null || a.setAttribute("d", (e || Ft.find((o) => o.value === "cloudy")).path), this.el("[data-color-selected]").textContent = this.en ? r.en : r.zh, this.el("[data-color-selected-dot]").style.setProperty("--swatch", r.swatch);
  }
  resetStyleChoices() {
    this.el('[name=moment-weather][value=""]').checked = !0, this.el("[name=moment-color][value=paper]").checked = !0, this.syncStyleChoices();
    for (const e of ["weather", "color"])
      this.el(`#moment-${e}-picker`).hidden = !0, this.el(`[data-${e}-toggle]`).setAttribute("aria-expanded", "false");
  }
  async identity(e) {
    var s, a, o, l;
    this.resetStyleChoices(), this.identityReady = !1, this.resetPublish(), this.resetDetail();
    const r = ++this.version;
    (s = this.composer) == null || s.clear(), this.clearReplyComposers(), this.user = e, this.nickname = "", this.admin = !1, this.canPublish = !1, this.el("[data-compose-open]").hidden = !0, this.clearPhoto(), this.manage = !1, this.posts = [], this.threads.clear(), this.feeding = !1, this.el("[data-feed]").replaceChildren(), this.el("[data-app]").hidden = !1, this.titleButton && (this.titleButton.disabled = !0, this.titleButton.setAttribute("aria-busy", "false")), this.el("[data-manage]").hidden = !0, this.el("[data-manage]").setAttribute("aria-pressed", "false"), this.el("[data-manage]").textContent = this.t("管理记录", "Manage entries"), this.el("[data-compose] fieldset").disabled = !0;
    const i = this.querySelector("roy-account-auth");
    if (i && !i.hasAttribute("data-observed") && (i.setAttribute("data-observed", "true"), this.authObserver = new MutationObserver(() => this.finishLogin()), this.authObserver.observe(i, { attributes: !0, attributeFilter: ["hidden"] })), !e) {
      this.identityReady = !0, this.el("#moment-body").value = "", this.el("[data-length]").textContent = "0 / 4000", await this.loadPosts(!0);
      return;
    }
    this.status(this.t("正在加载Moments…", "Loading moments…"));
    try {
      const [u, h, c] = await Promise.all([
        this.api.from("roy_top_profiles").select("nickname").eq("user_id", e.id).maybeSingle(),
        this.api.rpc("roy_site_is_admin"),
        this.api.rpc("roy_moments_can_publish")
      ]);
      if (r !== this.version) return;
      if (u.error) throw u.error;
      if (h.error) throw h.error;
      this.nickname = ((a = u.data) == null ? void 0 : a.nickname) ?? "", this.admin = h.data === !0, this.canPublish = !c.error && c.data === !0, this.el("[data-compose-open]").hidden = !this.canPublish, this.el("[data-identity]").textContent = this.nickname || this.t("请先设置昵称", "Set your nickname first"), (o = this.querySelector("[data-composer-website]")) == null || o.remove();
      const f = hu((l = this.user) == null ? void 0 : l.id, this.en);
      f.dataset.composerWebsite = "", f.className = "moment-composer-website", f.title = this.t("点击修改博客网址", "Click to edit your blog URL"), f.addEventListener("click", (p) => {
        var y;
        p.preventDefault();
        const b = this.querySelector(".moment-account-settings");
        b && (b.open = !0), (y = this.querySelector("roy-blog-settings [data-blog-edit]")) == null || y.click();
      }), this.el("[data-identity]").after(f), this.el("[data-profile]").hidden = !!this.nickname, this.el("[data-compose] fieldset").disabled = !this.nickname || !this.canPublish;
      const d = this.el("[data-manage]");
      d.hidden = !this.admin, this.admin && !this.canPublish ? this.el("[data-app] section").append(d) : this.el(".moment-account-settings").append(d), this.identityReady = !0, this.el("[data-app]").hidden = !1, await this.loadPosts(!0), this.finishLogin();
    } catch (u) {
      r === this.version && this.status(this.failure(u), !0);
    }
  }
  async saveProfile() {
    const r = this.el("[data-profile]").querySelector("button");
    r.disabled = !0;
    try {
      const i = this.el("[name=nickname]").value.trim();
      if (!i) return;
      const { error: s } = await this.api.from("roy_top_profiles").insert({ user_id: this.user.id, nickname: i });
      if (s) throw s;
      await this.identity(this.user), this.openPublish();
    } catch (i) {
      this.status(this.failure(i), !0);
    } finally {
      r.disabled = !1;
    }
  }
  async logout() {
    const { error: e } = await this.api.auth.signOut();
    if (e) {
      this.status(this.failure(e), !0);
      return;
    }
    await this.identity(null);
  }
  clearPhoto() {
    this.photoJob++, this.photoBusy = !1, this.photo = void 0, this.photoPreviewURL && URL.revokeObjectURL(this.photoPreviewURL), this.photoPreviewURL = "", this.el("[data-photo-draft]").hidden = !0, this.el("[data-photo-choose]").hidden = !1, this.el(".moment-photo-picker").hidden = !0, this.el("[data-photo-choose]").disabled = !1, this.el("[data-photo-status]").hidden = !0, this.el("[data-photo-preview]").removeAttribute("src");
  }
  async choosePhoto(e) {
    const r = ++this.photoJob;
    this.photoBusy = !0, this.el(".moment-photo-picker").hidden = !1;
    const i = this.el("[data-photo-status]");
    i.hidden = !1, i.textContent = this.t("正在压缩照片…", "Compressing photograph…"), this.el("[data-photo-choose]").disabled = !0;
    try {
      const s = await uu(e);
      if (r !== this.photoJob) return;
      this.photoPreviewURL && URL.revokeObjectURL(this.photoPreviewURL), this.photo = s, this.photoPreviewURL = URL.createObjectURL(s.blob), this.el("[data-photo-preview]").src = this.photoPreviewURL, this.el("[data-photo-info]").textContent = `${Ar(s.originalBytes)} → ${Ar(s.blob.size)} · WebP · ${s.width} × ${s.height}`, this.el("[data-photo-draft]").hidden = !1, this.el("[data-photo-choose]").hidden = !0, i.textContent = this.t("压缩完成，发布时只上传处理后的照片。", "Ready. Only the compressed photograph will be uploaded when you post.");
    } catch (s) {
      if (r === this.photoJob) {
        const a = s == null ? void 0 : s.message, l = {
          "photo-file-size": ["这张照片超过32MB，请先导出较小的版本。", "This photo exceeds 32 MB. Export a smaller copy first."],
          "photo-decode": ["浏览器无法读取这张照片，请尝试导出为JPEG或PNG后再添加。", "This browser cannot read the photo. Export it as JPEG or PNG and try again."],
          "photo-dimensions": ["这张照片的像素过大，请先缩小尺寸。", "The photo has too many pixels. Resize it before adding it."],
          "photo-webp": ["照片压缩组件未能加载，请刷新页面后重试。", "The photo compressor could not load. Refresh this page and try again."],
          "photo-size": ["照片暂时无法压缩到256KB以内，请缩小尺寸后重试。", "The photo could not be compressed under 256 KB. Resize it and try again."]
        }[a] || ["无法读取这张图片，请选择JPEG、PNG、WebP或AVIF；HEIC需浏览器支持。", "Choose a JPEG, PNG, WebP or AVIF image. HEIC requires browser support."];
        i.textContent = this.t(...l);
      }
    } finally {
      r === this.photoJob && (this.photoBusy = !1, this.el("[data-photo-choose]").disabled = !1);
    }
  }
  async publish() {
    var u, h, c;
    if (!this.canPublish || !this.user) return;
    const e = this.el("#moment-body"), r = e.value.trim();
    if (!r) {
      this.status(this.t("请为这条记录填写一点文字。", "Please add a few words to your entry."), !0);
      return;
    }
    if (this.photoBusy || (u = this.composer) != null && u.busy) {
      this.status(this.t("照片正在处理，请稍等。", "Please wait for image processing."), !0);
      return;
    }
    const i = this.version, s = this.user, a = this.photo, o = this.el("[data-compose] fieldset");
    o.disabled = !0;
    let l = "";
    try {
      if (a) {
        this.status(this.t("正在上传压缩后的照片…", "Uploading the compressed photograph…"));
        const f = `${s.id}/${crypto.randomUUID()}.webp`, { error: d } = await this.api.storage.from(pn).upload(f, a.blob, { contentType: "image/webp", cacheControl: "31536000", upsert: !1 });
        if (d) throw d;
        l = f;
      }
      if (i !== this.version || (await this.rpc("roy_moment_publish_entry", { p_content: this.composer ? this.composer.value() : r, p_photo_path: l || null, p_width: (a == null ? void 0 : a.width) ?? null, p_height: (a == null ? void 0 : a.height) ?? null, p_bytes: (a == null ? void 0 : a.blob.size) ?? null, p_weather: ((h = this.querySelector("[name=moment-weather]:checked")) == null ? void 0 : h.value) || null }), i !== this.version)) return;
      e.value = "", (c = this.composer) == null || c.clear(), this.clearPhoto(), this.resetStyleChoices(), this.el("[data-length]").textContent = "0 / 4000", await this.closePublish(), await this.loadPosts(!0);
    } catch (f) {
      const d = f == null ? void 0 : f.code;
      l && d && /^(22|23|42|P000|PGRST202)/.test(d) && await this.api.storage.from(pn).remove([l]).catch(() => {
      }), i === this.version && this.status(this.failure(f), !0);
    } finally {
      i === this.version && (o.disabled = !this.nickname || !this.canPublish);
    }
  }
  photoSource(e) {
    return ou(e.photo_path) && this.api ? this.api.storage.from(pn).getPublicUrl(e.photo_path).data.publicUrl : "";
  }
  coverCard(e) {
    const r = U("article", "moment-card moment-photo-card");
    r.dataset.id = e.id;
    const i = this.button("", () => this.showDetail(e, i), "moment-cover");
    i.setAttribute("aria-haspopup", "dialog"), i.setAttribute("aria-label", this.t("展开这条图文记录", "Open this journal entry"));
    const s = this.photoSource(e), a = U("div");
    a.innerHTML = Vt(e.body);
    const o = (a.textContent || "").trim(), l = o.split(/\n/).find((u) => u.trim()) || this.t("这一刻", "A moment");
    if (s) {
      const u = U("img", "moment-cover-image");
      u.src = s, u.alt = l.slice(0, 120), u.loading = "lazy", u.decoding = "async", e.photo_width && e.photo_height && (u.width = e.photo_width, u.height = e.photo_height), u.addEventListener("error", () => {
        i.classList.add("photo-unavailable"), u.hidden = !0, i.prepend(U("span", "moment-photo-unavailable", this.t("照片暂时无法显示", "Photo temporarily unavailable")));
      }, { once: !0 }), i.append(u);
    } else
      i.classList.add("moment-text-cover"), i.append(U("span", "moment-text-excerpt", this.t("文字记录", "Text entry")));
    return r.append(i), e.pinned && r.append(U("span", "moment-photo-pin", this.t("置顶", "Pinned"))), r;
  }
  hasReplyDraft() {
    return [...this.replyForms].some(([e, r]) => {
      var i, s;
      return r.contains(this.ownerDocument.activeElement) || !!((i = this.replyComposers.get(e)) != null && i.busy) || !!((s = r.querySelector("textarea")) != null && s.value.trim());
    });
  }
  captureDrafts() {
    for (const [e, r] of this.replyComposers) {
      const i = this.threads.get(e);
      i && (i.draft = r.draft());
    }
  }
  async loadPosts(e, r = !1) {
    if (!this.api || this.feeding) return;
    this.feeding = !0;
    const i = this.version;
    this.titleButton && (this.titleButton.disabled = !0, this.titleButton.setAttribute("aria-busy", "true")), this.el("[data-more]").disabled = !0;
    try {
      const s = await this.rpc("roy_moments_feed", { page_size: 20, page_offset: e ? 0 : this.posts.length });
      if (i !== this.version) return;
      if (!Array.isArray(s)) throw new Error("Invalid feed");
      if (this.captureDrafts(), this.posts = e ? s : [...this.posts, ...s.filter((a) => !this.posts.some((o) => o.id === a.id))], this.more = s.length === 20, await Promise.all([Kt(this.api, this.posts.map((a) => a.user_id)), An(this.api, this.posts.map((a) => a.user_id))]), i !== this.version) return;
      this.renderFeed(), r || this.status();
    } catch (s) {
      i === this.version && !r && this.status(!this.user && (s == null ? void 0 : s.code) === "42501" ? this.t("游客浏览尚未启用，Moments数据服务需要更新。", "Guest browsing is not enabled yet. The Moments data service needs an update.") : this.failure(s), !0);
    } finally {
      i === this.version && (this.feeding = !1, this.titleButton && (this.titleButton.disabled = !1, this.titleButton.setAttribute("aria-busy", "false")), this.el("[data-more]").disabled = !1);
    }
  }
  metadata(e) {
    const r = U("div", "moment-meta"), i = du(er(e.user_id, e.author_name, "moment-avatar"), e.user_id, e.author_name, this.en), s = U("div", "min-w-0"), a = U("time", "moment-date");
    a.dateTime = e.created_at, a.textContent = new Date(e.created_at).toLocaleString(this.en ? "en-GB" : "zh-CN", { month: "short", day: "numeric", year: "numeric", hour: "2-digit", minute: "2-digit" });
    const o = U("h3", "moment-author roy-blog-name", e.author_name);
    o.append(cu(e.user_id, this.en)), s.append(o, a);
    const l = Ft.find((h) => h.value === e.weather);
    if (l) {
      const h = U("span", "moment-weather-badge"), c = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      for (const [d, p] of Object.entries({ width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true" })) c.setAttribute(d, p);
      const f = document.createElementNS(c.namespaceURI, "path");
      f.setAttribute("d", l.path), c.append(f), h.title = this.en ? l.en : l.zh, h.setAttribute("aria-label", h.title), h.append(c), a.after(h);
    }
    const u = s.querySelector(".moment-weather-badge");
    if (u) {
      const h = U("span", "moment-date-row");
      a.before(h), h.append(a, u);
    }
    return r.append(i, s), e.pinned && r.append(U("span", "moment-pin", this.t("置顶", "Pinned"))), r;
  }
  card(e, r, i = !1, s = !1) {
    var p;
    if (!i && !s) return this.coverCard(e);
    const a = U("article", i ? "moment-reply" : "moment-card");
    a.dataset.id = e.id;
    const o = this.photoSource(e);
    if (!i && o) {
      a.classList.add("has-moment-photo");
      const b = U("figure", "moment-detail-photo"), y = U("img");
      y.src = o, y.alt = this.t("这一刻的照片", "A photograph from this moment"), y.decoding = "async", e.photo_width && e.photo_height && (y.width = e.photo_width, y.height = e.photo_height, a.style.setProperty("--moment-image-ratio", String(e.photo_width / e.photo_height))), y.addEventListener("load", () => {
        y.naturalWidth && y.naturalHeight && a.style.setProperty("--moment-image-ratio", String(y.naturalWidth / y.naturalHeight));
      }, { once: !0 }), b.append(y), a.append(b);
    }
    !i && !s && (a.dataset.color = fn.some((b) => b.value === e.card_color) ? e.card_color : "paper");
    const l = !i && o ? U("div", "moment-detail-copy") : a;
    l !== a && a.append(l), l.append(this.metadata(e)), i && e.parent_id !== e.root_id && l.append(U("p", "moment-reply-label", this.t(`回复 @${e.reply_to_name ?? ""}`, `Reply to @${e.reply_to_name ?? ""}`)));
    const u = U("div", "moment-body roy-rich-body");
    u.innerHTML = Vt(e.body), rn(), l.append(u);
    const h = U("div", "moment-actions"), c = this.button("", async () => {
      if (!this.user) {
        this.requestLogin();
        return;
      }
      const b = this.version;
      c.disabled = !0;
      try {
        const y = await this.rpc("roy_moment_like", { target_id: e.id, value: !e.liked });
        if (b !== this.version) return;
        e.like_count = y.count, e.liked = y.liked, f();
      } catch (y) {
        b === this.version && this.status(this.failure(y), !0);
      } finally {
        c.disabled = !1;
      }
    }), f = () => {
      c.replaceChildren(Or("heart", e.liked), U("span", "", String(e.like_count))), c.setAttribute("aria-pressed", String(e.liked)), c.setAttribute("aria-label", this.t(`${e.liked ? "取消点赞" : "点赞"}，${e.like_count}`, `${e.liked ? "Unlike" : "Like"}, ${e.like_count}`));
    };
    f();
    const d = this.button("", () => this.openThread(r, e));
    if (d.append(Or("reply"), U("span", "", i ? this.t("回复", "Reply") : this.t(`回复 ${e.reply_count}`, `Replies ${e.reply_count}`))), d.dataset.replyCount = String(!i), h.append(c, d), !i && this.admin && this.manage && h.append(this.button(e.pinned ? this.t("取消置顶", "Unpin") : this.t("置顶", "Pin"), async () => {
      try {
        await this.rpc("roy_moment_manage", { target_id: e.id, action: "pin", value: !e.pinned }), await this.loadPosts(!0);
      } catch (b) {
        this.status(this.failure(b), !0);
      }
    })), (e.user_id === ((p = this.user) == null ? void 0 : p.id) || this.admin && this.manage) && h.append(this.button(this.t("删除", "Delete"), async () => {
      if (confirm(this.t("删除这条内容？", "Delete this entry?")))
        try {
          if (await this.rpc("roy_moment_manage", { target_id: e.id, action: "delete" }), i) {
            const b = this.threads.get(r.id);
            b.rows = b.rows.filter((y) => y.id !== e.id), b.target.id === e.id && (b.target = r), r.reply_count = Math.max(0, r.reply_count - 1), this.renderFeed();
          } else
            this.threads.delete(e.id), await this.loadPosts(!0);
        } catch (b) {
          this.status(this.failure(b), !0);
        }
    })), !i && !s) {
      const b = this.button("", () => this.showDetail(e, b), "moment-read-more");
      b.setAttribute("aria-haspopup", "dialog"), b.setAttribute("aria-label", this.t(`查看 ${e.author_name} 的Moments详情`, `Read ${e.author_name}’s moment`)), h.append(b), u.addEventListener("click", (y) => {
        y.target.closest("a,button,input,video,audio") || this.showDetail(e, b);
      });
    }
    return l.append(h), a;
  }
  renderFeed() {
    for (const [i, s] of this.replyComposers)
      this.posts.some((a) => a.id === i) || (s.destroy(), this.replyComposers.delete(i), this.replyForms.delete(i));
    const e = this.el("[data-feed]"), r = e.scrollLeft;
    e.replaceChildren();
    for (const i of this.posts) {
      const s = U("li");
      s.append(this.card(i, i)), e.append(s);
    }
    if (this.dispatchEvent(new Event("roy-moments-rendered", { bubbles: !0 })), e.scrollLeft = r, this.detail.open) {
      const i = this.posts.find((s) => s.id === this.detailId);
      i ? this.showDetail(i, this.detailOpener) : this.resetDetail();
    }
    this.el("[data-empty]").hidden = !!this.posts.length, this.el("[data-more]").hidden = !this.more;
  }
  async openThread(e, r) {
    var s;
    if (!this.user) {
      this.requestLogin({ kind: "reply", root: e.id });
      return;
    }
    if ((this.detailId !== e.id || !this.detail.open) && this.showDetail(e), this.detailClosing) return;
    let i = this.threads.get(e.id);
    i || (i = { rows: [], more: !1, open: !0, target: r, draft: "", loading: !1 }, this.threads.set(e.id, i)), i.open = !0, i.target = r, this.renderThread(e), i.rows.length || await this.loadReplies(e, !0), this.nickname && ((s = this.replyComposers.get(e.id)) == null || s.focus());
  }
  renderThread(e) {
    const r = this.querySelector(`[data-thread="${e.id}"]`), i = this.threads.get(e.id);
    if (!r || !i || (r.hidden = !i.open, !i.open)) return;
    r.replaceChildren();
    const s = U("div", "moment-thread-heading");
    s.append(U("span", "text-xs text-muted-foreground", this.t("回复 · 最新在前", "Replies · newest first")), this.button(this.t("收起", "Close"), () => {
      i.open = !1, this.renderThread(e);
    })), r.append(s);
    for (const w of i.rows) r.append(this.card(w, e, !0));
    if (i.loading && r.append(U("p", "moment-inline-status", this.t("正在加载…", "Loading…"))), i.more) {
      const w = this.button(this.t("更多回复", "More replies"), () => this.loadReplies(e, !1), "moment-button");
      w.disabled = i.loading, r.append(w);
    }
    const a = this.replyForms.get(e.id);
    if (a) {
      a.querySelector("[data-reply-label]").textContent = i.target.id === e.id ? this.t("回复这一刻", "Reply to this moment") : this.t(`回复 @${i.target.author_name}`, `Reply to @${i.target.author_name}`);
      const w = a.querySelector("[data-reset-recipient]");
      w.hidden = i.target.id === e.id, r.append(a);
      return;
    }
    const o = U("form", "moment-reply-form");
    o.dataset.root = e.id;
    const l = U("fieldset");
    l.disabled = !this.nickname;
    const u = U("div", "moment-reply-heading", i.target.id === e.id ? this.t("回复这一刻", "Reply to this moment") : this.t(`回复 @${i.target.author_name}`, `Reply to @${i.target.author_name}`)), h = U("textarea", "moment-input mt-2");
    h.required = !0, h.maxLength = 4e3, h.rows = 3, h.value = "", h.placeholder = this.nickname ? this.t("写下回复…", "Write a reply…") : this.t("请先设置昵称", "Set your nickname first"), h.setAttribute("aria-label", this.t("回复内容", "Reply content"));
    const c = U("span", "", u.textContent || "");
    c.dataset.replyLabel = "", u.replaceChildren(c), l.append(u, h);
    const f = U("div", "mt-3 flex flex-wrap items-center justify-between gap-3"), d = this.button(this.t("取消回复对象", "Reset recipient"), () => {
      i.target = e, this.renderThread(e);
    });
    d.dataset.resetRecipient = "", d.hidden = i.target.id === e.id, u.append(d);
    const p = U("button", "moment-button moment-primary", this.t("回复", "Reply"));
    p.type = "submit", f.append(p), l.append(f), o.append(l);
    const b = U("p", "moment-inline-status");
    b.setAttribute("role", "status"), o.append(b), r.append(o);
    const y = Cn(h, { en: this.en, limit: 4e3 });
    f.hidden = !0, this.replyComposers.set(e.id, y), this.replyForms.set(e.id, o), i.draft && y.setValue(i.draft), h.addEventListener("roy-rich-change", () => {
      i.draft = y.draft();
    }), o.addEventListener("submit", (w) => {
      if (w.preventDefault(), !h.value.trim() || y.busy) return;
      const _ = this.version;
      l.disabled = !0, (async () => {
        try {
          if (await this.rpc("roy_moment_publish", { content: y.value(), parent: i.target.id }), _ !== this.version) return;
          i.draft = "", y.clear(), i.target = e;
          const x = this.posts.find((C) => C.id === e.id) || e;
          x.reply_count++, await this.loadReplies(x, !0);
          for (const C of this.querySelectorAll(`article[data-id="${e.id}"] [data-reply-count="true"] span`)) C.textContent = this.t(`回复 ${x.reply_count}`, `Replies ${x.reply_count}`);
        } catch (x) {
          _ === this.version && (b.textContent = this.failure(x));
        } finally {
          _ === this.version && (l.disabled = !this.nickname);
        }
      })();
    });
  }
  async loadReplies(e, r) {
    const i = this.threads.get(e.id);
    if (i.loading) return;
    const s = this.version;
    i.loading = !0, this.renderThread(e);
    try {
      const a = await this.rpc("roy_moments_replies", { post_id: e.id, page_size: 50, page_offset: r ? 0 : i.rows.length });
      if (s !== this.version) return;
      i.rows = r ? a : [...i.rows, ...a.filter((o) => !i.rows.some((l) => l.id === o.id))], i.more = a.length === 50, await Promise.all([Kt(this.api, a.map((o) => o.user_id)), An(this.api, a.map((o) => o.user_id))]);
    } catch (a) {
      s === this.version && this.status(this.failure(a), !0);
    } finally {
      i.loading = !1, s === this.version && this.renderThread(e);
    }
  }
}
customElements.get("roy-moments") || customElements.define("roy-moments", bu);
xt.configured && Ot().then((n) => {
  Object.assign(window, { RoyPhotoClient: n, RoyPhotoWeathers: Ft, RoyRichComments: Zl, RoyPhotoAvatars: { create: er, load: (t) => Kt(n, t) } }), window.dispatchEvent(new Event("roy-photo-ready"));
});
var On = function(n, t) {
  return On = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, r) {
    e.__proto__ = r;
  } || function(e, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
  }, On(n, t);
};
function Ai(n, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  On(n, t);
  function e() {
    this.constructor = n;
  }
  n.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
}
var Gt = function() {
  return Gt = Object.assign || function(t) {
    for (var e, r = 1, i = arguments.length; r < i; r++) {
      e = arguments[r];
      for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
    }
    return t;
  }, Gt.apply(this, arguments);
};
function pt(n, t) {
  var e = {};
  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && t.indexOf(r) < 0 && (e[r] = n[r]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(n); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[i]) && (e[r[i]] = n[r[i]]);
  return e;
}
function Oi(n, t, e, r) {
  var i = arguments.length, s = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, e) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(n, t, e, r);
  else for (var o = n.length - 1; o >= 0; o--) (a = n[o]) && (s = (i < 3 ? a(s) : i > 3 ? a(t, e, s) : a(t, e)) || s);
  return i > 3 && s && Object.defineProperty(t, e, s), s;
}
function Pi(n, t) {
  return function(e, r) {
    t(e, r, n);
  };
}
function Ii(n, t, e, r, i, s) {
  function a(w) {
    if (w !== void 0 && typeof w != "function") throw new TypeError("Function expected");
    return w;
  }
  for (var o = r.kind, l = o === "getter" ? "get" : o === "setter" ? "set" : "value", u = !t && n ? r.static ? n : n.prototype : null, h = t || (u ? Object.getOwnPropertyDescriptor(u, r.name) : {}), c, f = !1, d = e.length - 1; d >= 0; d--) {
    var p = {};
    for (var b in r) p[b] = b === "access" ? {} : r[b];
    for (var b in r.access) p.access[b] = r.access[b];
    p.addInitializer = function(w) {
      if (f) throw new TypeError("Cannot add initializers after decoration has completed");
      s.push(a(w || null));
    };
    var y = (0, e[d])(o === "accessor" ? { get: h.get, set: h.set } : h[l], p);
    if (o === "accessor") {
      if (y === void 0) continue;
      if (y === null || typeof y != "object") throw new TypeError("Object expected");
      (c = a(y.get)) && (h.get = c), (c = a(y.set)) && (h.set = c), (c = a(y.init)) && i.unshift(c);
    } else (c = a(y)) && (o === "field" ? i.unshift(c) : h[l] = c);
  }
  u && Object.defineProperty(u, r.name, h), f = !0;
}
function Ri(n, t, e) {
  for (var r = arguments.length > 2, i = 0; i < t.length; i++)
    e = r ? t[i].call(n, e) : t[i].call(n);
  return r ? e : void 0;
}
function ji(n) {
  return typeof n == "symbol" ? n : "".concat(n);
}
function Li(n, t, e) {
  return typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(n, "name", { configurable: !0, value: e ? "".concat(e, " ", t) : t });
}
function Di(n, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(n, t);
}
function O(n, t, e, r) {
  function i(s) {
    return s instanceof e ? s : new e(function(a) {
      a(s);
    });
  }
  return new (e || (e = Promise))(function(s, a) {
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
    u((r = r.apply(n, t || [])).next());
  });
}
function $i(n, t) {
  var e = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, i, s, a = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return a.next = o(0), a.throw = o(1), a.return = o(2), typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function o(u) {
    return function(h) {
      return l([u, h]);
    };
  }
  function l(u) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, u[0] && (e = 0)), e; ) try {
      if (r = 1, i && (s = u[0] & 2 ? i.return : u[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, u[1])).done) return s;
      switch (i = 0, s && (u = [u[0] & 2, s.value]), u[0]) {
        case 0:
        case 1:
          s = u;
          break;
        case 4:
          return e.label++, { value: u[1], done: !1 };
        case 5:
          e.label++, i = u[1], u = [0];
          continue;
        case 7:
          u = e.ops.pop(), e.trys.pop();
          continue;
        default:
          if (s = e.trys, !(s = s.length > 0 && s[s.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            e = 0;
            continue;
          }
          if (u[0] === 3 && (!s || u[1] > s[0] && u[1] < s[3])) {
            e.label = u[1];
            break;
          }
          if (u[0] === 6 && e.label < s[1]) {
            e.label = s[1], s = u;
            break;
          }
          if (s && e.label < s[2]) {
            e.label = s[2], e.ops.push(u);
            break;
          }
          s[2] && e.ops.pop(), e.trys.pop();
          continue;
      }
      u = t.call(n, e);
    } catch (h) {
      u = [6, h], i = 0;
    } finally {
      r = s = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
var sn = Object.create ? (function(n, t, e, r) {
  r === void 0 && (r = e);
  var i = Object.getOwnPropertyDescriptor(t, e);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[e];
  } }), Object.defineProperty(n, r, i);
}) : (function(n, t, e, r) {
  r === void 0 && (r = e), n[r] = t[e];
});
function Ni(n, t) {
  for (var e in n) e !== "default" && !Object.prototype.hasOwnProperty.call(t, e) && sn(t, n, e);
}
function Jt(n) {
  var t = typeof Symbol == "function" && Symbol.iterator, e = t && n[t], r = 0;
  if (e) return e.call(n);
  if (n && typeof n.length == "number") return {
    next: function() {
      return n && r >= n.length && (n = void 0), { value: n && n[r++], done: !n };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function tr(n, t) {
  var e = typeof Symbol == "function" && n[Symbol.iterator];
  if (!e) return n;
  var r = e.call(n), i, s = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; ) s.push(i.value);
  } catch (o) {
    a = { error: o };
  } finally {
    try {
      i && !i.done && (e = r.return) && e.call(r);
    } finally {
      if (a) throw a.error;
    }
  }
  return s;
}
function Bi() {
  for (var n = [], t = 0; t < arguments.length; t++)
    n = n.concat(tr(arguments[t]));
  return n;
}
function Ui() {
  for (var n = 0, t = 0, e = arguments.length; t < e; t++) n += arguments[t].length;
  for (var r = Array(n), i = 0, t = 0; t < e; t++)
    for (var s = arguments[t], a = 0, o = s.length; a < o; a++, i++)
      r[i] = s[a];
  return r;
}
function Fi(n, t, e) {
  if (e || arguments.length === 2) for (var r = 0, i = t.length, s; r < i; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return n.concat(s || Array.prototype.slice.call(t));
}
function ht(n) {
  return this instanceof ht ? (this.v = n, this) : new ht(n);
}
function zi(n, t, e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e.apply(n, t || []), i, s = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), o("next"), o("throw"), o("return", a), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function a(d) {
    return function(p) {
      return Promise.resolve(p).then(d, c);
    };
  }
  function o(d, p) {
    r[d] && (i[d] = function(b) {
      return new Promise(function(y, w) {
        s.push([d, b, y, w]) > 1 || l(d, b);
      });
    }, p && (i[d] = p(i[d])));
  }
  function l(d, p) {
    try {
      u(r[d](p));
    } catch (b) {
      f(s[0][3], b);
    }
  }
  function u(d) {
    d.value instanceof ht ? Promise.resolve(d.value.v).then(h, c) : f(s[0][2], d);
  }
  function h(d) {
    l("next", d);
  }
  function c(d) {
    l("throw", d);
  }
  function f(d, p) {
    d(p), s.shift(), s.length && l(s[0][0], s[0][1]);
  }
}
function Mi(n) {
  var t, e;
  return t = {}, r("next"), r("throw", function(i) {
    throw i;
  }), r("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function r(i, s) {
    t[i] = n[i] ? function(a) {
      return (e = !e) ? { value: ht(n[i](a)), done: !1 } : s ? s(a) : a;
    } : s;
  }
}
function qi(n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = n[Symbol.asyncIterator], e;
  return t ? t.call(n) : (n = typeof Jt == "function" ? Jt(n) : n[Symbol.iterator](), e = {}, r("next"), r("throw"), r("return"), e[Symbol.asyncIterator] = function() {
    return this;
  }, e);
  function r(s) {
    e[s] = n[s] && function(a) {
      return new Promise(function(o, l) {
        a = n[s](a), i(o, l, a.done, a.value);
      });
    };
  }
  function i(s, a, o, l) {
    Promise.resolve(l).then(function(u) {
      s({ value: u, done: o });
    }, a);
  }
}
function Wi(n, t) {
  return Object.defineProperty ? Object.defineProperty(n, "raw", { value: t }) : n.raw = t, n;
}
var yu = Object.create ? (function(n, t) {
  Object.defineProperty(n, "default", { enumerable: !0, value: t });
}) : function(n, t) {
  n.default = t;
}, Pn = function(n) {
  return Pn = Object.getOwnPropertyNames || function(t) {
    var e = [];
    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[e.length] = r);
    return e;
  }, Pn(n);
};
function Hi(n) {
  if (n && n.__esModule) return n;
  var t = {};
  if (n != null) for (var e = Pn(n), r = 0; r < e.length; r++) e[r] !== "default" && sn(t, n, e[r]);
  return yu(t, n), t;
}
function Vi(n) {
  return n && n.__esModule ? n : { default: n };
}
function Ki(n, t, e, r) {
  if (e === "a" && !r) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? n !== t || !r : !t.has(n)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e === "m" ? r : e === "a" ? r.call(n) : r ? r.value : t.get(n);
}
function Gi(n, t, e, r, i) {
  if (r === "m") throw new TypeError("Private method is not writable");
  if (r === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? n !== t || !i : !t.has(n)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return r === "a" ? i.call(n, e) : i ? i.value = e : t.set(n, e), e;
}
function Ji(n, t) {
  if (t === null || typeof t != "object" && typeof t != "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof n == "function" ? t === n : n.has(t);
}
function Yi(n, t, e) {
  if (t != null) {
    if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
    var r, i;
    if (e) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      r = t[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      r = t[Symbol.dispose], e && (i = r);
    }
    if (typeof r != "function") throw new TypeError("Object not disposable.");
    i && (r = function() {
      try {
        i.call(this);
      } catch (s) {
        return Promise.reject(s);
      }
    }), n.stack.push({ value: t, dispose: r, async: e });
  } else e && n.stack.push({ async: !0 });
  return t;
}
var wu = typeof SuppressedError == "function" ? SuppressedError : function(n, t, e) {
  var r = new Error(e);
  return r.name = "SuppressedError", r.error = n, r.suppressed = t, r;
};
function Qi(n) {
  function t(s) {
    n.error = n.hasError ? new wu(s, n.error, "An error was suppressed during disposal.") : s, n.hasError = !0;
  }
  var e, r = 0;
  function i() {
    for (; e = n.stack.pop(); )
      try {
        if (!e.async && r === 1) return r = 0, n.stack.push(e), Promise.resolve().then(i);
        if (e.dispose) {
          var s = e.dispose.call(e.value);
          if (e.async) return r |= 2, Promise.resolve(s).then(i, function(a) {
            return t(a), i();
          });
        } else r |= 1;
      } catch (a) {
        t(a);
      }
    if (r === 1) return n.hasError ? Promise.reject(n.error) : Promise.resolve();
    if (n.hasError) throw n.error;
  }
  return i();
}
function Xi(n, t) {
  return typeof n == "string" && /^\.\.?\//.test(n) ? n.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, r, i, s, a) {
    return r ? t ? ".jsx" : ".js" : i && (!s || !a) ? e : i + s + "." + a.toLowerCase() + "js";
  }) : n;
}
const vu = {
  __extends: Ai,
  __assign: Gt,
  __rest: pt,
  __decorate: Oi,
  __param: Pi,
  __esDecorate: Ii,
  __runInitializers: Ri,
  __propKey: ji,
  __setFunctionName: Li,
  __metadata: Di,
  __awaiter: O,
  __generator: $i,
  __createBinding: sn,
  __exportStar: Ni,
  __values: Jt,
  __read: tr,
  __spread: Bi,
  __spreadArrays: Ui,
  __spreadArray: Fi,
  __await: ht,
  __asyncGenerator: zi,
  __asyncDelegator: Mi,
  __asyncValues: qi,
  __makeTemplateObject: Wi,
  __importStar: Hi,
  __importDefault: Vi,
  __classPrivateFieldGet: Ki,
  __classPrivateFieldSet: Gi,
  __classPrivateFieldIn: Ji,
  __addDisposableResource: Yi,
  __disposeResources: Qi,
  __rewriteRelativeImportExtension: Xi
}, _u = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __addDisposableResource: Yi,
  get __assign() {
    return Gt;
  },
  __asyncDelegator: Mi,
  __asyncGenerator: zi,
  __asyncValues: qi,
  __await: ht,
  __awaiter: O,
  __classPrivateFieldGet: Ki,
  __classPrivateFieldIn: Ji,
  __classPrivateFieldSet: Gi,
  __createBinding: sn,
  __decorate: Oi,
  __disposeResources: Qi,
  __esDecorate: Ii,
  __exportStar: Ni,
  __extends: Ai,
  __generator: $i,
  __importDefault: Vi,
  __importStar: Hi,
  __makeTemplateObject: Wi,
  __metadata: Di,
  __param: Pi,
  __propKey: ji,
  __read: tr,
  __rest: pt,
  __rewriteRelativeImportExtension: Xi,
  __runInitializers: Ri,
  __setFunctionName: Li,
  __spread: Bi,
  __spreadArray: Fi,
  __spreadArrays: Ui,
  __values: Jt,
  default: vu
}, Symbol.toStringTag, { value: "Module" })), ku = (n) => {
  let t;
  return n ? t = n : typeof fetch > "u" ? t = (...e) => Promise.resolve().then(() => Qe).then(({ default: r }) => r(...e)) : t = fetch, (...e) => t(...e);
};
class an extends Error {
  constructor(t, e = "FunctionsError", r) {
    super(t), this.name = e, this.context = r;
  }
}
class In extends an {
  constructor(t) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", t);
  }
}
class Rn extends an {
  constructor(t) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", t);
  }
}
class jn extends an {
  constructor(t) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", t);
  }
}
var Yt;
(function(n) {
  n.Any = "any", n.ApNortheast1 = "ap-northeast-1", n.ApNortheast2 = "ap-northeast-2", n.ApSouth1 = "ap-south-1", n.ApSoutheast1 = "ap-southeast-1", n.ApSoutheast2 = "ap-southeast-2", n.CaCentral1 = "ca-central-1", n.EuCentral1 = "eu-central-1", n.EuWest1 = "eu-west-1", n.EuWest2 = "eu-west-2", n.EuWest3 = "eu-west-3", n.SaEast1 = "sa-east-1", n.UsEast1 = "us-east-1", n.UsWest1 = "us-west-1", n.UsWest2 = "us-west-2";
})(Yt || (Yt = {}));
class Su {
  constructor(t, { headers: e = {}, customFetch: r, region: i = Yt.Any } = {}) {
    this.url = t, this.headers = e, this.region = i, this.fetch = ku(r);
  }
  /**
   * Updates the authorization header
   * @param token - the new jwt token sent in the authorisation header
   */
  setAuth(t) {
    this.headers.Authorization = `Bearer ${t}`;
  }
  /**
   * Invokes a function
   * @param functionName - The name of the Function to invoke.
   * @param options - Options for invoking the Function.
   */
  invoke(t) {
    return O(this, arguments, void 0, function* (e, r = {}) {
      var i;
      try {
        const { headers: s, method: a, body: o, signal: l } = r;
        let u = {}, { region: h } = r;
        h || (h = this.region);
        const c = new URL(`${this.url}/${e}`);
        h && h !== "any" && (u["x-region"] = h, c.searchParams.set("forceFunctionRegion", h));
        let f;
        o && (s && !Object.prototype.hasOwnProperty.call(s, "Content-Type") || !s) ? typeof Blob < "u" && o instanceof Blob || o instanceof ArrayBuffer ? (u["Content-Type"] = "application/octet-stream", f = o) : typeof o == "string" ? (u["Content-Type"] = "text/plain", f = o) : typeof FormData < "u" && o instanceof FormData ? f = o : (u["Content-Type"] = "application/json", f = JSON.stringify(o)) : f = o;
        const d = yield this.fetch(c.toString(), {
          method: a || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, u), this.headers), s),
          body: f,
          signal: l
        }).catch((w) => {
          throw w.name === "AbortError" ? w : new In(w);
        }), p = d.headers.get("x-relay-error");
        if (p && p === "true")
          throw new Rn(d);
        if (!d.ok)
          throw new jn(d);
        let b = ((i = d.headers.get("Content-Type")) !== null && i !== void 0 ? i : "text/plain").split(";")[0].trim(), y;
        return b === "application/json" ? y = yield d.json() : b === "application/octet-stream" || b === "application/pdf" ? y = yield d.blob() : b === "text/event-stream" ? y = d : b === "multipart/form-data" ? y = yield d.formData() : y = yield d.text(), { data: y, error: null, response: d };
      } catch (s) {
        return s instanceof Error && s.name === "AbortError" ? { data: null, error: new In(s) } : {
          data: null,
          error: s,
          response: s instanceof jn || s instanceof Rn ? s.context : void 0
        };
      }
    });
  }
}
function Eu(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Zi(n) {
  if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
  var t = n.default;
  if (typeof t == "function") {
    var e = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    e.prototype = t.prototype;
  } else e = {};
  return Object.defineProperty(e, "__esModule", { value: !0 }), Object.keys(n).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(n, r);
    Object.defineProperty(e, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return n[r];
      }
    });
  }), e;
}
var oe = {};
const gt = /* @__PURE__ */ Zi(_u);
var Rt = {}, jt = {}, Lt = {}, Dt = {}, $t = {}, xu = function() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}, ct = xu();
const Tu = ct.fetch, es = ct.fetch.bind(ct), ts = ct.Headers, Cu = ct.Request, Au = ct.Response, Qe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Headers: ts,
  Request: Cu,
  Response: Au,
  default: es,
  fetch: Tu
}, Symbol.toStringTag, { value: "Module" })), Ou = /* @__PURE__ */ Zi(Qe);
var Nt = {}, Pr;
function ns() {
  if (Pr) return Nt;
  Pr = 1, Object.defineProperty(Nt, "__esModule", { value: !0 });
  class n extends Error {
    constructor(e) {
      super(e.message), this.name = "PostgrestError", this.details = e.details, this.hint = e.hint, this.code = e.code;
    }
  }
  return Nt.default = n, Nt;
}
var Ir;
function rs() {
  if (Ir) return $t;
  Ir = 1, Object.defineProperty($t, "__esModule", { value: !0 });
  const n = gt, t = n.__importDefault(Ou), e = n.__importDefault(ns());
  class r {
    constructor(s) {
      var a, o;
      this.shouldThrowOnError = !1, this.method = s.method, this.url = s.url, this.headers = new Headers(s.headers), this.schema = s.schema, this.body = s.body, this.shouldThrowOnError = (a = s.shouldThrowOnError) !== null && a !== void 0 ? a : !1, this.signal = s.signal, this.isMaybeSingle = (o = s.isMaybeSingle) !== null && o !== void 0 ? o : !1, s.fetch ? this.fetch = s.fetch : typeof fetch > "u" ? this.fetch = t.default : this.fetch = fetch;
    }
    /**
     * If there's an error with the query, throwOnError will reject the promise by
     * throwing the error instead of returning it as part of a successful response.
     *
     * {@link https://github.com/supabase/supabase-js/issues/92}
     */
    throwOnError() {
      return this.shouldThrowOnError = !0, this;
    }
    /**
     * Set an HTTP header for the request.
     */
    setHeader(s, a) {
      return this.headers = new Headers(this.headers), this.headers.set(s, a), this;
    }
    then(s, a) {
      this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers.set("Accept-Profile", this.schema) : this.headers.set("Content-Profile", this.schema)), this.method !== "GET" && this.method !== "HEAD" && this.headers.set("Content-Type", "application/json");
      const o = this.fetch;
      let l = o(this.url.toString(), {
        method: this.method,
        headers: this.headers,
        body: JSON.stringify(this.body),
        signal: this.signal
      }).then(async (u) => {
        var h, c, f, d;
        let p = null, b = null, y = null, w = u.status, k = u.statusText;
        if (u.ok) {
          if (this.method !== "HEAD") {
            const v = await u.text();
            v === "" || (this.headers.get("Accept") === "text/csv" || this.headers.get("Accept") && (!((h = this.headers.get("Accept")) === null || h === void 0) && h.includes("application/vnd.pgrst.plan+text")) ? b = v : b = JSON.parse(v));
          }
          const x = (c = this.headers.get("Prefer")) === null || c === void 0 ? void 0 : c.match(/count=(exact|planned|estimated)/), C = (f = u.headers.get("content-range")) === null || f === void 0 ? void 0 : f.split("/");
          x && C && C.length > 1 && (y = parseInt(C[1])), this.isMaybeSingle && this.method === "GET" && Array.isArray(b) && (b.length > 1 ? (p = {
            // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
            code: "PGRST116",
            details: `Results contain ${b.length} rows, application/vnd.pgrst.object+json requires 1 row`,
            hint: null,
            message: "JSON object requested, multiple (or no) rows returned"
          }, b = null, y = null, w = 406, k = "Not Acceptable") : b.length === 1 ? b = b[0] : b = null);
        } else {
          const x = await u.text();
          try {
            p = JSON.parse(x), Array.isArray(p) && u.status === 404 && (b = [], p = null, w = 200, k = "OK");
          } catch {
            u.status === 404 && x === "" ? (w = 204, k = "No Content") : p = {
              message: x
            };
          }
          if (p && this.isMaybeSingle && (!((d = p == null ? void 0 : p.details) === null || d === void 0) && d.includes("0 rows")) && (p = null, w = 200, k = "OK"), p && this.shouldThrowOnError)
            throw new e.default(p);
        }
        return {
          error: p,
          data: b,
          count: y,
          status: w,
          statusText: k
        };
      });
      return this.shouldThrowOnError || (l = l.catch((u) => {
        var h, c, f;
        return {
          error: {
            message: `${(h = u == null ? void 0 : u.name) !== null && h !== void 0 ? h : "FetchError"}: ${u == null ? void 0 : u.message}`,
            details: `${(c = u == null ? void 0 : u.stack) !== null && c !== void 0 ? c : ""}`,
            hint: "",
            code: `${(f = u == null ? void 0 : u.code) !== null && f !== void 0 ? f : ""}`
          },
          data: null,
          count: null,
          status: 0,
          statusText: ""
        };
      })), l.then(s, a);
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
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
     */
    overrideTypes() {
      return this;
    }
  }
  return $t.default = r, $t;
}
var Rr;
function is() {
  if (Rr) return Dt;
  Rr = 1, Object.defineProperty(Dt, "__esModule", { value: !0 });
  const t = gt.__importDefault(rs());
  class e extends t.default {
    /**
     * Perform a SELECT on the query result.
     *
     * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
     * return modified rows. By calling this method, modified rows are returned in
     * `data`.
     *
     * @param columns - The columns to retrieve, separated by commas
     */
    select(i) {
      let s = !1;
      const a = (i ?? "*").split("").map((o) => /\s/.test(o) && !s ? "" : (o === '"' && (s = !s), o)).join("");
      return this.url.searchParams.set("select", a), this.headers.append("Prefer", "return=representation"), this;
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
     */
    order(i, { ascending: s = !0, nullsFirst: a, foreignTable: o, referencedTable: l = o } = {}) {
      const u = l ? `${l}.order` : "order", h = this.url.searchParams.get(u);
      return this.url.searchParams.set(u, `${h ? `${h},` : ""}${i}.${s ? "asc" : "desc"}${a === void 0 ? "" : a ? ".nullsfirst" : ".nullslast"}`), this;
    }
    /**
     * Limit the query result by `count`.
     *
     * @param count - The maximum number of rows to return
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */
    limit(i, { foreignTable: s, referencedTable: a = s } = {}) {
      const o = typeof a > "u" ? "limit" : `${a}.limit`;
      return this.url.searchParams.set(o, `${i}`), this;
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
     */
    range(i, s, { foreignTable: a, referencedTable: o = a } = {}) {
      const l = typeof o > "u" ? "offset" : `${o}.offset`, u = typeof o > "u" ? "limit" : `${o}.limit`;
      return this.url.searchParams.set(l, `${i}`), this.url.searchParams.set(u, `${s - i + 1}`), this;
    }
    /**
     * Set the AbortSignal for the fetch request.
     *
     * @param signal - The AbortSignal to use for the fetch request
     */
    abortSignal(i) {
      return this.signal = i, this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be one row (e.g. using `.limit(1)`), otherwise this
     * returns an error.
     */
    single() {
      return this.headers.set("Accept", "application/vnd.pgrst.object+json"), this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
     * this returns an error.
     */
    maybeSingle() {
      return this.method === "GET" ? this.headers.set("Accept", "application/json") : this.headers.set("Accept", "application/vnd.pgrst.object+json"), this.isMaybeSingle = !0, this;
    }
    /**
     * Return `data` as a string in CSV format.
     */
    csv() {
      return this.headers.set("Accept", "text/csv"), this;
    }
    /**
     * Return `data` as an object in [GeoJSON](https://geojson.org) format.
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
     */
    explain({ analyze: i = !1, verbose: s = !1, settings: a = !1, buffers: o = !1, wal: l = !1, format: u = "text" } = {}) {
      var h;
      const c = [
        i ? "analyze" : null,
        s ? "verbose" : null,
        a ? "settings" : null,
        o ? "buffers" : null,
        l ? "wal" : null
      ].filter(Boolean).join("|"), f = (h = this.headers.get("Accept")) !== null && h !== void 0 ? h : "application/json";
      return this.headers.set("Accept", `application/vnd.pgrst.plan+${u}; for="${f}"; options=${c};`), u === "json" ? this : this;
    }
    /**
     * Rollback the query.
     *
     * `data` will still be returned, but the query is not committed.
     */
    rollback() {
      return this.headers.append("Prefer", "tx=rollback"), this;
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
     */
    returns() {
      return this;
    }
    /**
     * Set the maximum number of rows that can be affected by the query.
     * Only available in PostgREST v13+ and only works with PATCH and DELETE methods.
     *
     * @param value - The maximum number of rows that can be affected
     */
    maxAffected(i) {
      return this.headers.append("Prefer", "handling=strict"), this.headers.append("Prefer", `max-affected=${i}`), this;
    }
  }
  return Dt.default = e, Dt;
}
var jr;
function nr() {
  if (jr) return Lt;
  jr = 1, Object.defineProperty(Lt, "__esModule", { value: !0 });
  const t = gt.__importDefault(is());
  class e extends t.default {
    /**
     * Match only rows where `column` is equal to `value`.
     *
     * To check if the value of `column` is NULL, you should use `.is()` instead.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    eq(i, s) {
      return this.url.searchParams.append(i, `eq.${s}`), this;
    }
    /**
     * Match only rows where `column` is not equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    neq(i, s) {
      return this.url.searchParams.append(i, `neq.${s}`), this;
    }
    /**
     * Match only rows where `column` is greater than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    gt(i, s) {
      return this.url.searchParams.append(i, `gt.${s}`), this;
    }
    /**
     * Match only rows where `column` is greater than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    gte(i, s) {
      return this.url.searchParams.append(i, `gte.${s}`), this;
    }
    /**
     * Match only rows where `column` is less than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    lt(i, s) {
      return this.url.searchParams.append(i, `lt.${s}`), this;
    }
    /**
     * Match only rows where `column` is less than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    lte(i, s) {
      return this.url.searchParams.append(i, `lte.${s}`), this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-sensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */
    like(i, s) {
      return this.url.searchParams.append(i, `like.${s}`), this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    likeAllOf(i, s) {
      return this.url.searchParams.append(i, `like(all).{${s.join(",")}}`), this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    likeAnyOf(i, s) {
      return this.url.searchParams.append(i, `like(any).{${s.join(",")}}`), this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-insensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */
    ilike(i, s) {
      return this.url.searchParams.append(i, `ilike.${s}`), this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    ilikeAllOf(i, s) {
      return this.url.searchParams.append(i, `ilike(all).{${s.join(",")}}`), this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */
    ilikeAnyOf(i, s) {
      return this.url.searchParams.append(i, `ilike(any).{${s.join(",")}}`), this;
    }
    /**
     * Match only rows where `column` IS `value`.
     *
     * For non-boolean columns, this is only relevant for checking if the value of
     * `column` is NULL by setting `value` to `null`.
     *
     * For boolean columns, you can also set `value` to `true` or `false` and it
     * will behave the same way as `.eq()`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */
    is(i, s) {
      return this.url.searchParams.append(i, `is.${s}`), this;
    }
    /**
     * Match only rows where `column` is included in the `values` array.
     *
     * @param column - The column to filter on
     * @param values - The values array to filter with
     */
    in(i, s) {
      const a = Array.from(new Set(s)).map((o) => typeof o == "string" && new RegExp("[,()]").test(o) ? `"${o}"` : `${o}`).join(",");
      return this.url.searchParams.append(i, `in.(${a})`), this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * `column` contains every element appearing in `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */
    contains(i, s) {
      return typeof s == "string" ? this.url.searchParams.append(i, `cs.${s}`) : Array.isArray(s) ? this.url.searchParams.append(i, `cs.{${s.join(",")}}`) : this.url.searchParams.append(i, `cs.${JSON.stringify(s)}`), this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * every element appearing in `column` is contained by `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */
    containedBy(i, s) {
      return typeof s == "string" ? this.url.searchParams.append(i, `cd.${s}`) : Array.isArray(s) ? this.url.searchParams.append(i, `cd.{${s.join(",")}}`) : this.url.searchParams.append(i, `cd.${JSON.stringify(s)}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is greater than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeGt(i, s) {
      return this.url.searchParams.append(i, `sr.${s}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or greater than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeGte(i, s) {
      return this.url.searchParams.append(i, `nxl.${s}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is less than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeLt(i, s) {
      return this.url.searchParams.append(i, `sl.${s}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or less than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeLte(i, s) {
      return this.url.searchParams.append(i, `nxr.${s}`), this;
    }
    /**
     * Only relevant for range columns. Match only rows where `column` is
     * mutually exclusive to `range` and there can be no element between the two
     * ranges.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */
    rangeAdjacent(i, s) {
      return this.url.searchParams.append(i, `adj.${s}`), this;
    }
    /**
     * Only relevant for array and range columns. Match only rows where
     * `column` and `value` have an element in common.
     *
     * @param column - The array or range column to filter on
     * @param value - The array or range value to filter with
     */
    overlaps(i, s) {
      return typeof s == "string" ? this.url.searchParams.append(i, `ov.${s}`) : this.url.searchParams.append(i, `ov.{${s.join(",")}}`), this;
    }
    /**
     * Only relevant for text and tsvector columns. Match only rows where
     * `column` matches the query string in `query`.
     *
     * @param column - The text or tsvector column to filter on
     * @param query - The query text to match with
     * @param options - Named parameters
     * @param options.config - The text search configuration to use
     * @param options.type - Change how the `query` text is interpreted
     */
    textSearch(i, s, { config: a, type: o } = {}) {
      let l = "";
      o === "plain" ? l = "pl" : o === "phrase" ? l = "ph" : o === "websearch" && (l = "w");
      const u = a === void 0 ? "" : `(${a})`;
      return this.url.searchParams.append(i, `${l}fts${u}.${s}`), this;
    }
    /**
     * Match only rows where each column in `query` keys is equal to its
     * associated value. Shorthand for multiple `.eq()`s.
     *
     * @param query - The object to filter with, with column names as keys mapped
     * to their filter values
     */
    match(i) {
      return Object.entries(i).forEach(([s, a]) => {
        this.url.searchParams.append(s, `eq.${a}`);
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
     */
    not(i, s, a) {
      return this.url.searchParams.append(i, `not.${s}.${a}`), this;
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
     */
    or(i, { foreignTable: s, referencedTable: a = s } = {}) {
      const o = a ? `${a}.or` : "or";
      return this.url.searchParams.append(o, `(${i})`), this;
    }
    /**
     * Match only rows which satisfy the filter. This is an escape hatch - you
     * should use the specific filter methods wherever possible.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to filter with, following PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */
    filter(i, s, a) {
      return this.url.searchParams.append(i, `${s}.${a}`), this;
    }
  }
  return Lt.default = e, Lt;
}
var Lr;
function ss() {
  if (Lr) return jt;
  Lr = 1, Object.defineProperty(jt, "__esModule", { value: !0 });
  const t = gt.__importDefault(nr());
  class e {
    constructor(i, { headers: s = {}, schema: a, fetch: o }) {
      this.url = i, this.headers = new Headers(s), this.schema = a, this.fetch = o;
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
     */
    select(i, s) {
      const { head: a = !1, count: o } = s ?? {}, l = a ? "HEAD" : "GET";
      let u = !1;
      const h = (i ?? "*").split("").map((c) => /\s/.test(c) && !u ? "" : (c === '"' && (u = !u), c)).join("");
      return this.url.searchParams.set("select", h), o && this.headers.append("Prefer", `count=${o}`), new t.default({
        method: l,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: this.fetch
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
     */
    insert(i, { count: s, defaultToNull: a = !0 } = {}) {
      var o;
      const l = "POST";
      if (s && this.headers.append("Prefer", `count=${s}`), a || this.headers.append("Prefer", "missing=default"), Array.isArray(i)) {
        const u = i.reduce((h, c) => h.concat(Object.keys(c)), []);
        if (u.length > 0) {
          const h = [...new Set(u)].map((c) => `"${c}"`);
          this.url.searchParams.set("columns", h.join(","));
        }
      }
      return new t.default({
        method: l,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: i,
        fetch: (o = this.fetch) !== null && o !== void 0 ? o : fetch
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
     */
    upsert(i, { onConflict: s, ignoreDuplicates: a = !1, count: o, defaultToNull: l = !0 } = {}) {
      var u;
      const h = "POST";
      if (this.headers.append("Prefer", `resolution=${a ? "ignore" : "merge"}-duplicates`), s !== void 0 && this.url.searchParams.set("on_conflict", s), o && this.headers.append("Prefer", `count=${o}`), l || this.headers.append("Prefer", "missing=default"), Array.isArray(i)) {
        const c = i.reduce((f, d) => f.concat(Object.keys(d)), []);
        if (c.length > 0) {
          const f = [...new Set(c)].map((d) => `"${d}"`);
          this.url.searchParams.set("columns", f.join(","));
        }
      }
      return new t.default({
        method: h,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: i,
        fetch: (u = this.fetch) !== null && u !== void 0 ? u : fetch
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
     */
    update(i, { count: s } = {}) {
      var a;
      const o = "PATCH";
      return s && this.headers.append("Prefer", `count=${s}`), new t.default({
        method: o,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        body: i,
        fetch: (a = this.fetch) !== null && a !== void 0 ? a : fetch
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
     */
    delete({ count: i } = {}) {
      var s;
      const a = "DELETE";
      return i && this.headers.append("Prefer", `count=${i}`), new t.default({
        method: a,
        url: this.url,
        headers: this.headers,
        schema: this.schema,
        fetch: (s = this.fetch) !== null && s !== void 0 ? s : fetch
      });
    }
  }
  return jt.default = e, jt;
}
var Dr;
function Pu() {
  if (Dr) return Rt;
  Dr = 1, Object.defineProperty(Rt, "__esModule", { value: !0 });
  const n = gt, t = n.__importDefault(ss()), e = n.__importDefault(nr());
  class r {
    // TODO: Add back shouldThrowOnError once we figure out the typings
    /**
     * Creates a PostgREST client.
     *
     * @param url - URL of the PostgREST endpoint
     * @param options - Named parameters
     * @param options.headers - Custom headers
     * @param options.schema - Postgres schema to switch to
     * @param options.fetch - Custom fetch
     */
    constructor(s, { headers: a = {}, schema: o, fetch: l } = {}) {
      this.url = s, this.headers = new Headers(a), this.schemaName = o, this.fetch = l;
    }
    /**
     * Perform a query on a table or a view.
     *
     * @param relation - The table or view name to query
     */
    from(s) {
      const a = new URL(`${this.url}/${s}`);
      return new t.default(a, {
        headers: new Headers(this.headers),
        schema: this.schemaName,
        fetch: this.fetch
      });
    }
    /**
     * Select a schema to query or perform an function (rpc) call.
     *
     * The schema needs to be on the list of exposed schemas inside Supabase.
     *
     * @param schema - The schema to query
     */
    schema(s) {
      return new r(this.url, {
        headers: this.headers,
        schema: s,
        fetch: this.fetch
      });
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
    rpc(s, a = {}, { head: o = !1, get: l = !1, count: u } = {}) {
      var h;
      let c;
      const f = new URL(`${this.url}/rpc/${s}`);
      let d;
      o || l ? (c = o ? "HEAD" : "GET", Object.entries(a).filter(([b, y]) => y !== void 0).map(([b, y]) => [b, Array.isArray(y) ? `{${y.join(",")}}` : `${y}`]).forEach(([b, y]) => {
        f.searchParams.append(b, y);
      })) : (c = "POST", d = a);
      const p = new Headers(this.headers);
      return u && p.set("Prefer", `count=${u}`), new e.default({
        method: c,
        url: f,
        headers: p,
        schema: this.schemaName,
        body: d,
        fetch: (h = this.fetch) !== null && h !== void 0 ? h : fetch
      });
    }
  }
  return Rt.default = r, Rt;
}
var $r;
function Iu() {
  if ($r) return oe;
  $r = 1, Object.defineProperty(oe, "__esModule", { value: !0 }), oe.PostgrestError = oe.PostgrestBuilder = oe.PostgrestTransformBuilder = oe.PostgrestFilterBuilder = oe.PostgrestQueryBuilder = oe.PostgrestClient = void 0;
  const n = gt, t = n.__importDefault(Pu());
  oe.PostgrestClient = t.default;
  const e = n.__importDefault(ss());
  oe.PostgrestQueryBuilder = e.default;
  const r = n.__importDefault(nr());
  oe.PostgrestFilterBuilder = r.default;
  const i = n.__importDefault(is());
  oe.PostgrestTransformBuilder = i.default;
  const s = n.__importDefault(rs());
  oe.PostgrestBuilder = s.default;
  const a = n.__importDefault(ns());
  return oe.PostgrestError = a.default, oe.default = {
    PostgrestClient: t.default,
    PostgrestQueryBuilder: e.default,
    PostgrestFilterBuilder: r.default,
    PostgrestTransformBuilder: i.default,
    PostgrestBuilder: s.default,
    PostgrestError: a.default
  }, oe;
}
var Ru = Iu();
const ju = /* @__PURE__ */ Eu(Ru), {
  PostgrestClient: Lu,
  PostgrestQueryBuilder: Dc,
  PostgrestFilterBuilder: $c,
  PostgrestTransformBuilder: Nc,
  PostgrestBuilder: Bc,
  PostgrestError: Du
} = ju;
class as {
  static detectEnvironment() {
    var t;
    if (typeof WebSocket < "u")
      return { type: "native", constructor: WebSocket };
    if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u")
      return { type: "native", constructor: globalThis.WebSocket };
    if (typeof global < "u" && typeof global.WebSocket < "u")
      return { type: "native", constructor: global.WebSocket };
    if (typeof globalThis < "u" && typeof globalThis.WebSocketPair < "u" && typeof globalThis.WebSocket > "u")
      return {
        type: "cloudflare",
        error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
      };
    if (typeof globalThis < "u" && globalThis.EdgeRuntime || typeof navigator < "u" && (!((t = navigator.userAgent) === null || t === void 0) && t.includes("Vercel-Edge")))
      return {
        type: "unsupported",
        error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
      };
    if (typeof process < "u") {
      const e = process.versions;
      if (e && e.node) {
        const r = e.node, i = parseInt(r.replace(/^v/, "").split(".")[0]);
        return i >= 22 ? typeof globalThis.WebSocket < "u" ? { type: "native", constructor: globalThis.WebSocket } : {
          type: "unsupported",
          error: `Node.js ${i} detected but native WebSocket not found.`,
          workaround: "Provide a WebSocket implementation via the transport option."
        } : {
          type: "unsupported",
          error: `Node.js ${i} detected without native WebSocket support.`,
          workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`
        };
      }
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
    };
  }
  static getWebSocketConstructor() {
    const t = this.detectEnvironment();
    if (t.constructor)
      return t.constructor;
    let e = t.error || "WebSocket not supported in this environment.";
    throw t.workaround && (e += `

Suggested solution: ${t.workaround}`), new Error(e);
  }
  static createWebSocket(t, e) {
    const r = this.getWebSocketConstructor();
    return new r(t, e);
  }
  static isWebSocketSupported() {
    try {
      const t = this.detectEnvironment();
      return t.type === "native" || t.type === "ws";
    } catch {
      return !1;
    }
  }
}
const $u = "2.76.1", Nu = `realtime-js/${$u}`, Bu = "1.0.0", Ln = 1e4, Uu = 1e3, Fu = 100;
var kt;
(function(n) {
  n[n.connecting = 0] = "connecting", n[n.open = 1] = "open", n[n.closing = 2] = "closing", n[n.closed = 3] = "closed";
})(kt || (kt = {}));
var re;
(function(n) {
  n.closed = "closed", n.errored = "errored", n.joined = "joined", n.joining = "joining", n.leaving = "leaving";
})(re || (re = {}));
var Se;
(function(n) {
  n.close = "phx_close", n.error = "phx_error", n.join = "phx_join", n.reply = "phx_reply", n.leave = "phx_leave", n.access_token = "access_token";
})(Se || (Se = {}));
var Dn;
(function(n) {
  n.websocket = "websocket";
})(Dn || (Dn = {}));
var Ge;
(function(n) {
  n.Connecting = "connecting", n.Open = "open", n.Closing = "closing", n.Closed = "closed";
})(Ge || (Ge = {}));
class zu {
  constructor() {
    this.HEADER_LENGTH = 1;
  }
  decode(t, e) {
    return t.constructor === ArrayBuffer ? e(this._binaryDecode(t)) : e(typeof t == "string" ? JSON.parse(t) : {});
  }
  _binaryDecode(t) {
    const e = new DataView(t), r = new TextDecoder();
    return this._decodeBroadcast(t, e, r);
  }
  _decodeBroadcast(t, e, r) {
    const i = e.getUint8(1), s = e.getUint8(2);
    let a = this.HEADER_LENGTH + 2;
    const o = r.decode(t.slice(a, a + i));
    a = a + i;
    const l = r.decode(t.slice(a, a + s));
    a = a + s;
    const u = JSON.parse(r.decode(t.slice(a, t.byteLength)));
    return { ref: null, topic: o, event: l, payload: u };
  }
}
class os {
  constructor(t, e) {
    this.callback = t, this.timerCalc = e, this.timer = void 0, this.tries = 0, this.callback = t, this.timerCalc = e;
  }
  reset() {
    this.tries = 0, clearTimeout(this.timer), this.timer = void 0;
  }
  // Cancels any previous scheduleTimeout and schedules callback
  scheduleTimeout() {
    clearTimeout(this.timer), this.timer = setTimeout(() => {
      this.tries = this.tries + 1, this.callback();
    }, this.timerCalc(this.tries + 1));
  }
}
var Y;
(function(n) {
  n.abstime = "abstime", n.bool = "bool", n.date = "date", n.daterange = "daterange", n.float4 = "float4", n.float8 = "float8", n.int2 = "int2", n.int4 = "int4", n.int4range = "int4range", n.int8 = "int8", n.int8range = "int8range", n.json = "json", n.jsonb = "jsonb", n.money = "money", n.numeric = "numeric", n.oid = "oid", n.reltime = "reltime", n.text = "text", n.time = "time", n.timestamp = "timestamp", n.timestamptz = "timestamptz", n.timetz = "timetz", n.tsrange = "tsrange", n.tstzrange = "tstzrange";
})(Y || (Y = {}));
const Nr = (n, t, e = {}) => {
  var r;
  const i = (r = e.skipTypes) !== null && r !== void 0 ? r : [];
  return t ? Object.keys(t).reduce((s, a) => (s[a] = Mu(a, n, t, i), s), {}) : {};
}, Mu = (n, t, e, r) => {
  const i = t.find((o) => o.name === n), s = i == null ? void 0 : i.type, a = e[n];
  return s && !r.includes(s) ? ls(s, a) : $n(a);
}, ls = (n, t) => {
  if (n.charAt(0) === "_") {
    const e = n.slice(1, n.length);
    return Vu(t, e);
  }
  switch (n) {
    case Y.bool:
      return qu(t);
    case Y.float4:
    case Y.float8:
    case Y.int2:
    case Y.int4:
    case Y.int8:
    case Y.numeric:
    case Y.oid:
      return Wu(t);
    case Y.json:
    case Y.jsonb:
      return Hu(t);
    case Y.timestamp:
      return Ku(t);
    // Format to be consistent with PostgREST
    case Y.abstime:
    // To allow users to cast it based on Timezone
    case Y.date:
    // To allow users to cast it based on Timezone
    case Y.daterange:
    case Y.int4range:
    case Y.int8range:
    case Y.money:
    case Y.reltime:
    // To allow users to cast it based on Timezone
    case Y.text:
    case Y.time:
    // To allow users to cast it based on Timezone
    case Y.timestamptz:
    // To allow users to cast it based on Timezone
    case Y.timetz:
    // To allow users to cast it based on Timezone
    case Y.tsrange:
    case Y.tstzrange:
      return $n(t);
    default:
      return $n(t);
  }
}, $n = (n) => n, qu = (n) => {
  switch (n) {
    case "t":
      return !0;
    case "f":
      return !1;
    default:
      return n;
  }
}, Wu = (n) => {
  if (typeof n == "string") {
    const t = parseFloat(n);
    if (!Number.isNaN(t))
      return t;
  }
  return n;
}, Hu = (n) => {
  if (typeof n == "string")
    try {
      return JSON.parse(n);
    } catch (t) {
      return console.log(`JSON parse error: ${t}`), n;
    }
  return n;
}, Vu = (n, t) => {
  if (typeof n != "string")
    return n;
  const e = n.length - 1, r = n[e];
  if (n[0] === "{" && r === "}") {
    let s;
    const a = n.slice(1, e);
    try {
      s = JSON.parse("[" + a + "]");
    } catch {
      s = a ? a.split(",") : [];
    }
    return s.map((o) => ls(t, o));
  }
  return n;
}, Ku = (n) => typeof n == "string" ? n.replace(" ", "T") : n, us = (n) => {
  const t = new URL(n);
  return t.protocol = t.protocol.replace(/^ws/i, "http"), t.pathname = t.pathname.replace(/\/+$/, "").replace(/\/socket\/websocket$/i, "").replace(/\/socket$/i, "").replace(/\/websocket$/i, ""), t.pathname === "" || t.pathname === "/" ? t.pathname = "/api/broadcast" : t.pathname = t.pathname + "/api/broadcast", t.href;
};
class mn {
  /**
   * Initializes the Push
   *
   * @param channel The Channel
   * @param event The event, for example `"phx_join"`
   * @param payload The payload, for example `{user_id: 123}`
   * @param timeout The push timeout in milliseconds
   */
  constructor(t, e, r = {}, i = Ln) {
    this.channel = t, this.event = e, this.payload = r, this.timeout = i, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null;
  }
  resend(t) {
    this.timeout = t, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = !1, this.send();
  }
  send() {
    this._hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
      topic: this.channel.topic,
      event: this.event,
      payload: this.payload,
      ref: this.ref,
      join_ref: this.channel._joinRef()
    }));
  }
  updatePayload(t) {
    this.payload = Object.assign(Object.assign({}, this.payload), t);
  }
  receive(t, e) {
    var r;
    return this._hasReceived(t) && e((r = this.receivedResp) === null || r === void 0 ? void 0 : r.response), this.recHooks.push({ status: t, callback: e }), this;
  }
  startTimeout() {
    if (this.timeoutTimer)
      return;
    this.ref = this.channel.socket._makeRef(), this.refEvent = this.channel._replyEventName(this.ref);
    const t = (e) => {
      this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = e, this._matchReceive(e);
    };
    this.channel._on(this.refEvent, {}, t), this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  trigger(t, e) {
    this.refEvent && this.channel._trigger(this.refEvent, { status: t, response: e });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0;
  }
  _matchReceive({ status: t, response: e }) {
    this.recHooks.filter((r) => r.status === t).forEach((r) => r.callback(e));
  }
  _hasReceived(t) {
    return this.receivedResp && this.receivedResp.status === t;
  }
}
var Nn;
(function(n) {
  n.SYNC = "sync", n.JOIN = "join", n.LEAVE = "leave";
})(Nn || (Nn = {}));
class at {
  /**
   * Initializes the Presence.
   *
   * @param channel - The RealtimeChannel
   * @param opts - The options,
   *        for example `{events: {state: 'state', diff: 'diff'}}`
   */
  constructor(t, e) {
    this.channel = t, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.enabled = !1, this.caller = {
      onJoin: () => {
      },
      onLeave: () => {
      },
      onSync: () => {
      }
    };
    const r = (e == null ? void 0 : e.events) || {
      state: "presence_state",
      diff: "presence_diff"
    };
    this.channel._on(r.state, {}, (i) => {
      const { onJoin: s, onLeave: a, onSync: o } = this.caller;
      this.joinRef = this.channel._joinRef(), this.state = at.syncState(this.state, i, s, a), this.pendingDiffs.forEach((l) => {
        this.state = at.syncDiff(this.state, l, s, a);
      }), this.pendingDiffs = [], o();
    }), this.channel._on(r.diff, {}, (i) => {
      const { onJoin: s, onLeave: a, onSync: o } = this.caller;
      this.inPendingSyncState() ? this.pendingDiffs.push(i) : (this.state = at.syncDiff(this.state, i, s, a), o());
    }), this.onJoin((i, s, a) => {
      this.channel._trigger("presence", {
        event: "join",
        key: i,
        currentPresences: s,
        newPresences: a
      });
    }), this.onLeave((i, s, a) => {
      this.channel._trigger("presence", {
        event: "leave",
        key: i,
        currentPresences: s,
        leftPresences: a
      });
    }), this.onSync(() => {
      this.channel._trigger("presence", { event: "sync" });
    });
  }
  /**
   * Used to sync the list of presences on the server with the
   * client's state.
   *
   * An optional `onJoin` and `onLeave` callback can be provided to
   * react to changes in the client's local presences across
   * disconnects and reconnects with the server.
   *
   * @internal
   */
  static syncState(t, e, r, i) {
    const s = this.cloneDeep(t), a = this.transformState(e), o = {}, l = {};
    return this.map(s, (u, h) => {
      a[u] || (l[u] = h);
    }), this.map(a, (u, h) => {
      const c = s[u];
      if (c) {
        const f = h.map((y) => y.presence_ref), d = c.map((y) => y.presence_ref), p = h.filter((y) => d.indexOf(y.presence_ref) < 0), b = c.filter((y) => f.indexOf(y.presence_ref) < 0);
        p.length > 0 && (o[u] = p), b.length > 0 && (l[u] = b);
      } else
        o[u] = h;
    }), this.syncDiff(s, { joins: o, leaves: l }, r, i);
  }
  /**
   * Used to sync a diff of presence join and leave events from the
   * server, as they happen.
   *
   * Like `syncState`, `syncDiff` accepts optional `onJoin` and
   * `onLeave` callbacks to react to a user joining or leaving from a
   * device.
   *
   * @internal
   */
  static syncDiff(t, e, r, i) {
    const { joins: s, leaves: a } = {
      joins: this.transformState(e.joins),
      leaves: this.transformState(e.leaves)
    };
    return r || (r = () => {
    }), i || (i = () => {
    }), this.map(s, (o, l) => {
      var u;
      const h = (u = t[o]) !== null && u !== void 0 ? u : [];
      if (t[o] = this.cloneDeep(l), h.length > 0) {
        const c = t[o].map((d) => d.presence_ref), f = h.filter((d) => c.indexOf(d.presence_ref) < 0);
        t[o].unshift(...f);
      }
      r(o, h, l);
    }), this.map(a, (o, l) => {
      let u = t[o];
      if (!u)
        return;
      const h = l.map((c) => c.presence_ref);
      u = u.filter((c) => h.indexOf(c.presence_ref) < 0), t[o] = u, i(o, u, l), u.length === 0 && delete t[o];
    }), t;
  }
  /** @internal */
  static map(t, e) {
    return Object.getOwnPropertyNames(t).map((r) => e(r, t[r]));
  }
  /**
   * Remove 'metas' key
   * Change 'phx_ref' to 'presence_ref'
   * Remove 'phx_ref' and 'phx_ref_prev'
   *
   * @example
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
   * @internal
   */
  static transformState(t) {
    return t = this.cloneDeep(t), Object.getOwnPropertyNames(t).reduce((e, r) => {
      const i = t[r];
      return "metas" in i ? e[r] = i.metas.map((s) => (s.presence_ref = s.phx_ref, delete s.phx_ref, delete s.phx_ref_prev, s)) : e[r] = i, e;
    }, {});
  }
  /** @internal */
  static cloneDeep(t) {
    return JSON.parse(JSON.stringify(t));
  }
  /** @internal */
  onJoin(t) {
    this.caller.onJoin = t;
  }
  /** @internal */
  onLeave(t) {
    this.caller.onLeave = t;
  }
  /** @internal */
  onSync(t) {
    this.caller.onSync = t;
  }
  /** @internal */
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var Bn;
(function(n) {
  n.ALL = "*", n.INSERT = "INSERT", n.UPDATE = "UPDATE", n.DELETE = "DELETE";
})(Bn || (Bn = {}));
var ot;
(function(n) {
  n.BROADCAST = "broadcast", n.PRESENCE = "presence", n.POSTGRES_CHANGES = "postgres_changes", n.SYSTEM = "system";
})(ot || (ot = {}));
var Te;
(function(n) {
  n.SUBSCRIBED = "SUBSCRIBED", n.TIMED_OUT = "TIMED_OUT", n.CLOSED = "CLOSED", n.CHANNEL_ERROR = "CHANNEL_ERROR";
})(Te || (Te = {}));
class on {
  constructor(t, e = { config: {} }, r) {
    var i, s;
    if (this.topic = t, this.params = e, this.socket = r, this.bindings = {}, this.state = re.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = t.replace(/^realtime:/i, ""), this.params.config = Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "", enabled: !1 },
      private: !1
    }, e.config), this.timeout = this.socket.timeout, this.joinPush = new mn(this, Se.join, this.params, this.timeout), this.rejoinTimer = new os(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
      this.state = re.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((a) => a.send()), this.pushBuffer = [];
    }), this._onClose(() => {
      this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = re.closed, this.socket._remove(this);
    }), this._onError((a) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, a), this.state = re.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("timeout", () => {
      this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = re.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("error", (a) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, a), this.state = re.errored, this.rejoinTimer.scheduleTimeout());
    }), this._on(Se.reply, {}, (a, o) => {
      this._trigger(this._replyEventName(o), a);
    }), this.presence = new at(this), this.broadcastEndpointURL = us(this.socket.endPoint), this.private = this.params.config.private || !1, !this.private && (!((s = (i = this.params.config) === null || i === void 0 ? void 0 : i.broadcast) === null || s === void 0) && s.replay))
      throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`;
  }
  /** Subscribe registers your client with the server */
  subscribe(t, e = this.timeout) {
    var r, i, s;
    if (this.socket.isConnected() || this.socket.connect(), this.state == re.closed) {
      const { config: { broadcast: a, presence: o, private: l } } = this.params, u = (i = (r = this.bindings.postgres_changes) === null || r === void 0 ? void 0 : r.map((d) => d.filter)) !== null && i !== void 0 ? i : [], h = !!this.bindings[ot.PRESENCE] && this.bindings[ot.PRESENCE].length > 0 || ((s = this.params.config.presence) === null || s === void 0 ? void 0 : s.enabled) === !0, c = {}, f = {
        broadcast: a,
        presence: Object.assign(Object.assign({}, o), { enabled: h }),
        postgres_changes: u,
        private: l
      };
      this.socket.accessTokenValue && (c.access_token = this.socket.accessTokenValue), this._onError((d) => t == null ? void 0 : t(Te.CHANNEL_ERROR, d)), this._onClose(() => t == null ? void 0 : t(Te.CLOSED)), this.updateJoinPayload(Object.assign({ config: f }, c)), this.joinedOnce = !0, this._rejoin(e), this.joinPush.receive("ok", async ({ postgres_changes: d }) => {
        var p;
        if (this.socket.setAuth(), d === void 0) {
          t == null || t(Te.SUBSCRIBED);
          return;
        } else {
          const b = this.bindings.postgres_changes, y = (p = b == null ? void 0 : b.length) !== null && p !== void 0 ? p : 0, w = [];
          for (let k = 0; k < y; k++) {
            const _ = b[k], { filter: { event: x, schema: C, table: v, filter: P } } = _, z = d && d[k];
            if (z && z.event === x && z.schema === C && z.table === v && z.filter === P)
              w.push(Object.assign(Object.assign({}, _), { id: z.id }));
            else {
              this.unsubscribe(), this.state = re.errored, t == null || t(Te.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
              return;
            }
          }
          this.bindings.postgres_changes = w, t && t(Te.SUBSCRIBED);
          return;
        }
      }).receive("error", (d) => {
        this.state = re.errored, t == null || t(Te.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(d).join(", ") || "error")));
      }).receive("timeout", () => {
        t == null || t(Te.TIMED_OUT);
      });
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(t, e = {}) {
    return await this.send({
      type: "presence",
      event: "track",
      payload: t
    }, e.timeout || this.timeout);
  }
  async untrack(t = {}) {
    return await this.send({
      type: "presence",
      event: "untrack"
    }, t);
  }
  on(t, e, r) {
    return this.state === re.joined && t === ot.PRESENCE && (this.socket.log("channel", `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`), this.unsubscribe().then(() => this.subscribe())), this._on(t, e, r);
  }
  /**
   * Sends a broadcast message explicitly via REST API.
   *
   * This method always uses the REST API endpoint regardless of WebSocket connection state.
   * Useful when you want to guarantee REST delivery or when gradually migrating from implicit REST fallback.
   *
   * @param event The name of the broadcast event
   * @param payload Payload to be sent (required)
   * @param opts Options including timeout
   * @returns Promise resolving to object with success status, and error details if failed
   */
  async httpSend(t, e, r = {}) {
    var i;
    const s = this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "";
    if (e == null)
      return Promise.reject("Payload is required for httpSend()");
    const a = {
      method: "POST",
      headers: {
        Authorization: s,
        apikey: this.socket.apiKey ? this.socket.apiKey : "",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messages: [
          {
            topic: this.subTopic,
            event: t,
            payload: e,
            private: this.private
          }
        ]
      })
    }, o = await this._fetchWithTimeout(this.broadcastEndpointURL, a, (i = r.timeout) !== null && i !== void 0 ? i : this.timeout);
    if (o.status === 202)
      return { success: !0 };
    let l = o.statusText;
    try {
      const u = await o.json();
      l = u.error || u.message || l;
    } catch {
    }
    return Promise.reject(new Error(l));
  }
  /**
   * Sends a message into the channel.
   *
   * @param args Arguments to send to channel
   * @param args.type The type of event to send
   * @param args.event The name of the event being sent
   * @param args.payload Payload to be sent
   * @param opts Options to be used during the send process
   */
  async send(t, e = {}) {
    var r, i;
    if (!this._canPush() && t.type === "broadcast") {
      console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");
      const { event: s, payload: a } = t, l = {
        method: "POST",
        headers: {
          Authorization: this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "",
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: s,
              payload: a,
              private: this.private
            }
          ]
        })
      };
      try {
        const u = await this._fetchWithTimeout(this.broadcastEndpointURL, l, (r = e.timeout) !== null && r !== void 0 ? r : this.timeout);
        return await ((i = u.body) === null || i === void 0 ? void 0 : i.cancel()), u.ok ? "ok" : "error";
      } catch (u) {
        return u.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((s) => {
        var a, o, l;
        const u = this._push(t.type, t, e.timeout || this.timeout);
        t.type === "broadcast" && !(!((l = (o = (a = this.params) === null || a === void 0 ? void 0 : a.config) === null || o === void 0 ? void 0 : o.broadcast) === null || l === void 0) && l.ack) && s("ok"), u.receive("ok", () => s("ok")), u.receive("error", () => s("error")), u.receive("timeout", () => s("timed out"));
      });
  }
  updateJoinPayload(t) {
    this.joinPush.updatePayload(t);
  }
  /**
   * Leaves the channel.
   *
   * Unsubscribes from server events, and instructs channel to terminate on server.
   * Triggers onClose() hooks.
   *
   * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
   * channel.unsubscribe().receive("ok", () => alert("left!") )
   */
  unsubscribe(t = this.timeout) {
    this.state = re.leaving;
    const e = () => {
      this.socket.log("channel", `leave ${this.topic}`), this._trigger(Se.close, "leave", this._joinRef());
    };
    this.joinPush.destroy();
    let r = null;
    return new Promise((i) => {
      r = new mn(this, Se.leave, {}, t), r.receive("ok", () => {
        e(), i("ok");
      }).receive("timeout", () => {
        e(), i("timed out");
      }).receive("error", () => {
        i("error");
      }), r.send(), this._canPush() || r.trigger("ok", {});
    }).finally(() => {
      r == null || r.destroy();
    });
  }
  /**
   * Teardown the channel.
   *
   * Destroys and stops related timers.
   */
  teardown() {
    this.pushBuffer.forEach((t) => t.destroy()), this.pushBuffer = [], this.rejoinTimer.reset(), this.joinPush.destroy(), this.state = re.closed, this.bindings = {};
  }
  /** @internal */
  async _fetchWithTimeout(t, e, r) {
    const i = new AbortController(), s = setTimeout(() => i.abort(), r), a = await this.socket.fetch(t, Object.assign(Object.assign({}, e), { signal: i.signal }));
    return clearTimeout(s), a;
  }
  /** @internal */
  _push(t, e, r = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let i = new mn(this, t, e, r);
    return this._canPush() ? i.send() : this._addToPushBuffer(i), i;
  }
  /** @internal */
  _addToPushBuffer(t) {
    if (t.startTimeout(), this.pushBuffer.push(t), this.pushBuffer.length > Fu) {
      const e = this.pushBuffer.shift();
      e && (e.destroy(), this.socket.log("channel", `discarded push due to buffer overflow: ${e.event}`, e.payload));
    }
  }
  /**
   * Overridable message hook
   *
   * Receives all events for specialized message handling before dispatching to the channel callbacks.
   * Must return the payload, modified or unmodified.
   *
   * @internal
   */
  _onMessage(t, e, r) {
    return e;
  }
  /** @internal */
  _isMember(t) {
    return this.topic === t;
  }
  /** @internal */
  _joinRef() {
    return this.joinPush.ref;
  }
  /** @internal */
  _trigger(t, e, r) {
    var i, s;
    const a = t.toLocaleLowerCase(), { close: o, error: l, leave: u, join: h } = Se;
    if (r && [o, l, u, h].indexOf(a) >= 0 && r !== this._joinRef())
      return;
    let f = this._onMessage(a, e, r);
    if (e && !f)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(a) ? (i = this.bindings.postgres_changes) === null || i === void 0 || i.filter((d) => {
      var p, b, y;
      return ((p = d.filter) === null || p === void 0 ? void 0 : p.event) === "*" || ((y = (b = d.filter) === null || b === void 0 ? void 0 : b.event) === null || y === void 0 ? void 0 : y.toLocaleLowerCase()) === a;
    }).map((d) => d.callback(f, r)) : (s = this.bindings[a]) === null || s === void 0 || s.filter((d) => {
      var p, b, y, w, k, _;
      if (["broadcast", "presence", "postgres_changes"].includes(a))
        if ("id" in d) {
          const x = d.id, C = (p = d.filter) === null || p === void 0 ? void 0 : p.event;
          return x && ((b = e.ids) === null || b === void 0 ? void 0 : b.includes(x)) && (C === "*" || (C == null ? void 0 : C.toLocaleLowerCase()) === ((y = e.data) === null || y === void 0 ? void 0 : y.type.toLocaleLowerCase()));
        } else {
          const x = (k = (w = d == null ? void 0 : d.filter) === null || w === void 0 ? void 0 : w.event) === null || k === void 0 ? void 0 : k.toLocaleLowerCase();
          return x === "*" || x === ((_ = e == null ? void 0 : e.event) === null || _ === void 0 ? void 0 : _.toLocaleLowerCase());
        }
      else
        return d.type.toLocaleLowerCase() === a;
    }).map((d) => {
      if (typeof f == "object" && "ids" in f) {
        const p = f.data, { schema: b, table: y, commit_timestamp: w, type: k, errors: _ } = p;
        f = Object.assign(Object.assign({}, {
          schema: b,
          table: y,
          commit_timestamp: w,
          eventType: k,
          new: {},
          old: {},
          errors: _
        }), this._getPayloadRecords(p));
      }
      d.callback(f, r);
    });
  }
  /** @internal */
  _isClosed() {
    return this.state === re.closed;
  }
  /** @internal */
  _isJoined() {
    return this.state === re.joined;
  }
  /** @internal */
  _isJoining() {
    return this.state === re.joining;
  }
  /** @internal */
  _isLeaving() {
    return this.state === re.leaving;
  }
  /** @internal */
  _replyEventName(t) {
    return `chan_reply_${t}`;
  }
  /** @internal */
  _on(t, e, r) {
    const i = t.toLocaleLowerCase(), s = {
      type: i,
      filter: e,
      callback: r
    };
    return this.bindings[i] ? this.bindings[i].push(s) : this.bindings[i] = [s], this;
  }
  /** @internal */
  _off(t, e) {
    const r = t.toLocaleLowerCase();
    return this.bindings[r] && (this.bindings[r] = this.bindings[r].filter((i) => {
      var s;
      return !(((s = i.type) === null || s === void 0 ? void 0 : s.toLocaleLowerCase()) === r && on.isEqual(i.filter, e));
    })), this;
  }
  /** @internal */
  static isEqual(t, e) {
    if (Object.keys(t).length !== Object.keys(e).length)
      return !1;
    for (const r in t)
      if (t[r] !== e[r])
        return !1;
    return !0;
  }
  /** @internal */
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin();
  }
  /**
   * Registers a callback that will be executed when the channel closes.
   *
   * @internal
   */
  _onClose(t) {
    this._on(Se.close, {}, t);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(t) {
    this._on(Se.error, {}, (e) => t(e));
  }
  /**
   * Returns `true` if the socket is connected and the channel has been joined.
   *
   * @internal
   */
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  /** @internal */
  _rejoin(t = this.timeout) {
    this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = re.joining, this.joinPush.resend(t));
  }
  /** @internal */
  _getPayloadRecords(t) {
    const e = {
      new: {},
      old: {}
    };
    return (t.type === "INSERT" || t.type === "UPDATE") && (e.new = Nr(t.columns, t.record)), (t.type === "UPDATE" || t.type === "DELETE") && (e.old = Nr(t.columns, t.old_record)), e;
  }
}
const bn = () => {
}, Bt = {
  HEARTBEAT_INTERVAL: 25e3,
  RECONNECT_DELAY: 10,
  HEARTBEAT_TIMEOUT_FALLBACK: 100
}, Gu = [1e3, 2e3, 5e3, 1e4], Ju = 1e4, Yu = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class hs {
  /**
   * Initializes the Socket.
   *
   * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
   * @param httpEndpoint The string HTTP endpoint, ie, "https://example.com", "/" (inherited host & protocol)
   * @param options.transport The Websocket Transport, for example WebSocket. This can be a custom implementation
   * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
   * @param options.params The optional params to pass when connecting.
   * @param options.headers Deprecated: headers cannot be set on websocket connections and this option will be removed in the future.
   * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
   * @param options.heartbeatCallback The optional function to handle heartbeat status.
   * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
   * @param options.logLevel Sets the log level for Realtime
   * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
   * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
   * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
   * @param options.worker Use Web Worker to set a side flow. Defaults to false.
   * @param options.workerUrl The URL of the worker script. Defaults to https://realtime.supabase.com/worker.js that includes a heartbeat event call to keep the connection alive.
   */
  constructor(t, e) {
    var r;
    if (this.accessTokenValue = null, this.apiKey = null, this.channels = new Array(), this.endPoint = "", this.httpEndpoint = "", this.headers = {}, this.params = {}, this.timeout = Ln, this.transport = null, this.heartbeatIntervalMs = Bt.HEARTBEAT_INTERVAL, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.heartbeatCallback = bn, this.ref = 0, this.reconnectTimer = null, this.logger = bn, this.conn = null, this.sendBuffer = [], this.serializer = new zu(), this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    }, this.accessToken = null, this._connectionState = "disconnected", this._wasManualDisconnect = !1, this._authPromise = null, this._resolveFetch = (i) => {
      let s;
      return i ? s = i : typeof fetch > "u" ? s = (...a) => Promise.resolve().then(() => Qe).then(({ default: o }) => o(...a)).catch((o) => {
        throw new Error(`Failed to load @supabase/node-fetch: ${o.message}. This is required for HTTP requests in Node.js environments without native fetch.`);
      }) : s = fetch, (...a) => s(...a);
    }, !(!((r = e == null ? void 0 : e.params) === null || r === void 0) && r.apikey))
      throw new Error("API key is required to connect to Realtime");
    this.apiKey = e.params.apikey, this.endPoint = `${t}/${Dn.websocket}`, this.httpEndpoint = us(t), this._initializeOptions(e), this._setupReconnectionTimer(), this.fetch = this._resolveFetch(e == null ? void 0 : e.fetch);
  }
  /**
   * Connects the socket, unless already connected.
   */
  connect() {
    if (!(this.isConnecting() || this.isDisconnecting() || this.conn !== null && this.isConnected())) {
      if (this._setConnectionState("connecting"), this._setAuthSafely("connect"), this.transport)
        this.conn = new this.transport(this.endpointURL());
      else
        try {
          this.conn = as.createWebSocket(this.endpointURL());
        } catch (t) {
          this._setConnectionState("disconnected");
          const e = t.message;
          throw e.includes("Node.js") ? new Error(`${e}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`) : new Error(`WebSocket not available: ${e}`);
        }
      this._setupConnectionHandlers();
    }
  }
  /**
   * Returns the URL of the websocket.
   * @returns string The URL of the websocket.
   */
  endpointURL() {
    return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: Bu }));
  }
  /**
   * Disconnects the socket.
   *
   * @param code A numeric status code to send on disconnect.
   * @param reason A custom reason for the disconnect.
   */
  disconnect(t, e) {
    if (!this.isDisconnecting())
      if (this._setConnectionState("disconnecting", !0), this.conn) {
        const r = setTimeout(() => {
          this._setConnectionState("disconnected");
        }, 100);
        this.conn.onclose = () => {
          clearTimeout(r), this._setConnectionState("disconnected");
        }, t ? this.conn.close(t, e ?? "") : this.conn.close(), this._teardownConnection();
      } else
        this._setConnectionState("disconnected");
  }
  /**
   * Returns all created channels
   */
  getChannels() {
    return this.channels;
  }
  /**
   * Unsubscribes and removes a single channel
   * @param channel A RealtimeChannel instance
   */
  async removeChannel(t) {
    const e = await t.unsubscribe();
    return this.channels.length === 0 && this.disconnect(), e;
  }
  /**
   * Unsubscribes and removes all channels
   */
  async removeAllChannels() {
    const t = await Promise.all(this.channels.map((e) => e.unsubscribe()));
    return this.channels = [], this.disconnect(), t;
  }
  /**
   * Logs the message.
   *
   * For customized logging, `this.logger` can be overridden.
   */
  log(t, e, r) {
    this.logger(t, e, r);
  }
  /**
   * Returns the current state of the socket.
   */
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case kt.connecting:
        return Ge.Connecting;
      case kt.open:
        return Ge.Open;
      case kt.closing:
        return Ge.Closing;
      default:
        return Ge.Closed;
    }
  }
  /**
   * Returns `true` is the connection is open.
   */
  isConnected() {
    return this.connectionState() === Ge.Open;
  }
  /**
   * Returns `true` if the connection is currently connecting.
   */
  isConnecting() {
    return this._connectionState === "connecting";
  }
  /**
   * Returns `true` if the connection is currently disconnecting.
   */
  isDisconnecting() {
    return this._connectionState === "disconnecting";
  }
  channel(t, e = { config: {} }) {
    const r = `realtime:${t}`, i = this.getChannels().find((s) => s.topic === r);
    if (i)
      return i;
    {
      const s = new on(`realtime:${t}`, e, this);
      return this.channels.push(s), s;
    }
  }
  /**
   * Push out a message if the socket is connected.
   *
   * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
   */
  push(t) {
    const { topic: e, event: r, payload: i, ref: s } = t, a = () => {
      this.encode(t, (o) => {
        var l;
        (l = this.conn) === null || l === void 0 || l.send(o);
      });
    };
    this.log("push", `${e} ${r} (${s})`, i), this.isConnected() ? a() : this.sendBuffer.push(a);
  }
  /**
   * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
   *
   * If param is null it will use the `accessToken` callback function or the token set on the client.
   *
   * On callback used, it will set the value of the token internal to the client.
   *
   * @param token A JWT string to override the token set on the client.
   */
  async setAuth(t = null) {
    this._authPromise = this._performAuth(t);
    try {
      await this._authPromise;
    } finally {
      this._authPromise = null;
    }
  }
  /**
   * Sends a heartbeat message if the socket is connected.
   */
  async sendHeartbeat() {
    var t;
    if (!this.isConnected()) {
      try {
        this.heartbeatCallback("disconnected");
      } catch (e) {
        this.log("error", "error in heartbeat callback", e);
      }
      return;
    }
    if (this.pendingHeartbeatRef) {
      this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
      try {
        this.heartbeatCallback("timeout");
      } catch (e) {
        this.log("error", "error in heartbeat callback", e);
      }
      this._wasManualDisconnect = !1, (t = this.conn) === null || t === void 0 || t.close(Uu, "heartbeat timeout"), setTimeout(() => {
        var e;
        this.isConnected() || (e = this.reconnectTimer) === null || e === void 0 || e.scheduleTimeout();
      }, Bt.HEARTBEAT_TIMEOUT_FALLBACK);
      return;
    }
    this.pendingHeartbeatRef = this._makeRef(), this.push({
      topic: "phoenix",
      event: "heartbeat",
      payload: {},
      ref: this.pendingHeartbeatRef
    });
    try {
      this.heartbeatCallback("sent");
    } catch (e) {
      this.log("error", "error in heartbeat callback", e);
    }
    this._setAuthSafely("heartbeat");
  }
  onHeartbeat(t) {
    this.heartbeatCallback = t;
  }
  /**
   * Flushes send buffer
   */
  flushSendBuffer() {
    this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((t) => t()), this.sendBuffer = []);
  }
  /**
   * Return the next message ref, accounting for overflows
   *
   * @internal
   */
  _makeRef() {
    let t = this.ref + 1;
    return t === this.ref ? this.ref = 0 : this.ref = t, this.ref.toString();
  }
  /**
   * Unsubscribe from channels with the specified topic.
   *
   * @internal
   */
  _leaveOpenTopic(t) {
    let e = this.channels.find((r) => r.topic === t && (r._isJoined() || r._isJoining()));
    e && (this.log("transport", `leaving duplicate topic "${t}"`), e.unsubscribe());
  }
  /**
   * Removes a subscription from the socket.
   *
   * @param channel An open subscription.
   *
   * @internal
   */
  _remove(t) {
    this.channels = this.channels.filter((e) => e.topic !== t.topic);
  }
  /** @internal */
  _onConnMessage(t) {
    this.decode(t.data, (e) => {
      if (e.topic === "phoenix" && e.event === "phx_reply")
        try {
          this.heartbeatCallback(e.payload.status === "ok" ? "ok" : "error");
        } catch (u) {
          this.log("error", "error in heartbeat callback", u);
        }
      e.ref && e.ref === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null);
      const { topic: r, event: i, payload: s, ref: a } = e, o = a ? `(${a})` : "", l = s.status || "";
      this.log("receive", `${l} ${r} ${i} ${o}`.trim(), s), this.channels.filter((u) => u._isMember(r)).forEach((u) => u._trigger(i, s, a)), this._triggerStateCallbacks("message", e);
    });
  }
  /**
   * Clear specific timer
   * @internal
   */
  _clearTimer(t) {
    var e;
    t === "heartbeat" && this.heartbeatTimer ? (clearInterval(this.heartbeatTimer), this.heartbeatTimer = void 0) : t === "reconnect" && ((e = this.reconnectTimer) === null || e === void 0 || e.reset());
  }
  /**
   * Clear all timers
   * @internal
   */
  _clearAllTimers() {
    this._clearTimer("heartbeat"), this._clearTimer("reconnect");
  }
  /**
   * Setup connection handlers for WebSocket events
   * @internal
   */
  _setupConnectionHandlers() {
    this.conn && ("binaryType" in this.conn && (this.conn.binaryType = "arraybuffer"), this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = (t) => this._onConnError(t), this.conn.onmessage = (t) => this._onConnMessage(t), this.conn.onclose = (t) => this._onConnClose(t));
  }
  /**
   * Teardown connection and cleanup resources
   * @internal
   */
  _teardownConnection() {
    this.conn && (this.conn.onopen = null, this.conn.onerror = null, this.conn.onmessage = null, this.conn.onclose = null, this.conn = null), this._clearAllTimers(), this.channels.forEach((t) => t.teardown());
  }
  /** @internal */
  _onConnOpen() {
    this._setConnectionState("connected"), this.log("transport", `connected to ${this.endpointURL()}`), this.flushSendBuffer(), this._clearTimer("reconnect"), this.worker ? this.workerRef || this._startWorkerHeartbeat() : this._startHeartbeat(), this._triggerStateCallbacks("open");
  }
  /** @internal */
  _startHeartbeat() {
    this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
  }
  /** @internal */
  _startWorkerHeartbeat() {
    this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
    const t = this._workerObjectUrl(this.workerUrl);
    this.workerRef = new Worker(t), this.workerRef.onerror = (e) => {
      this.log("worker", "worker error", e.message), this.workerRef.terminate();
    }, this.workerRef.onmessage = (e) => {
      e.data.event === "keepAlive" && this.sendHeartbeat();
    }, this.workerRef.postMessage({
      event: "start",
      interval: this.heartbeatIntervalMs
    });
  }
  /** @internal */
  _onConnClose(t) {
    var e;
    this._setConnectionState("disconnected"), this.log("transport", "close", t), this._triggerChanError(), this._clearTimer("heartbeat"), this._wasManualDisconnect || (e = this.reconnectTimer) === null || e === void 0 || e.scheduleTimeout(), this._triggerStateCallbacks("close", t);
  }
  /** @internal */
  _onConnError(t) {
    this._setConnectionState("disconnected"), this.log("transport", `${t}`), this._triggerChanError(), this._triggerStateCallbacks("error", t);
  }
  /** @internal */
  _triggerChanError() {
    this.channels.forEach((t) => t._trigger(Se.error));
  }
  /** @internal */
  _appendParams(t, e) {
    if (Object.keys(e).length === 0)
      return t;
    const r = t.match(/\?/) ? "&" : "?", i = new URLSearchParams(e);
    return `${t}${r}${i}`;
  }
  _workerObjectUrl(t) {
    let e;
    if (t)
      e = t;
    else {
      const r = new Blob([Yu], { type: "application/javascript" });
      e = URL.createObjectURL(r);
    }
    return e;
  }
  /**
   * Set connection state with proper state management
   * @internal
   */
  _setConnectionState(t, e = !1) {
    this._connectionState = t, t === "connecting" ? this._wasManualDisconnect = !1 : t === "disconnecting" && (this._wasManualDisconnect = e);
  }
  /**
   * Perform the actual auth operation
   * @internal
   */
  async _performAuth(t = null) {
    let e;
    t ? e = t : this.accessToken ? e = await this.accessToken() : e = this.accessTokenValue, this.accessTokenValue != e && (this.accessTokenValue = e, this.channels.forEach((r) => {
      const i = {
        access_token: e,
        version: Nu
      };
      e && r.updateJoinPayload(i), r.joinedOnce && r._isJoined() && r._push(Se.access_token, {
        access_token: e
      });
    }));
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
  _setAuthSafely(t = "general") {
    this.setAuth().catch((e) => {
      this.log("error", `error setting auth in ${t}`, e);
    });
  }
  /**
   * Trigger state change callbacks with proper error handling
   * @internal
   */
  _triggerStateCallbacks(t, e) {
    try {
      this.stateChangeCallbacks[t].forEach((r) => {
        try {
          r(e);
        } catch (i) {
          this.log("error", `error in ${t} callback`, i);
        }
      });
    } catch (r) {
      this.log("error", `error triggering ${t} callbacks`, r);
    }
  }
  /**
   * Setup reconnection timer with proper configuration
   * @internal
   */
  _setupReconnectionTimer() {
    this.reconnectTimer = new os(async () => {
      setTimeout(async () => {
        await this._waitForAuthIfNeeded(), this.isConnected() || this.connect();
      }, Bt.RECONNECT_DELAY);
    }, this.reconnectAfterMs);
  }
  /**
   * Initialize client options with defaults
   * @internal
   */
  _initializeOptions(t) {
    var e, r, i, s, a, o, l, u, h;
    if (this.transport = (e = t == null ? void 0 : t.transport) !== null && e !== void 0 ? e : null, this.timeout = (r = t == null ? void 0 : t.timeout) !== null && r !== void 0 ? r : Ln, this.heartbeatIntervalMs = (i = t == null ? void 0 : t.heartbeatIntervalMs) !== null && i !== void 0 ? i : Bt.HEARTBEAT_INTERVAL, this.worker = (s = t == null ? void 0 : t.worker) !== null && s !== void 0 ? s : !1, this.accessToken = (a = t == null ? void 0 : t.accessToken) !== null && a !== void 0 ? a : null, this.heartbeatCallback = (o = t == null ? void 0 : t.heartbeatCallback) !== null && o !== void 0 ? o : bn, t != null && t.params && (this.params = t.params), t != null && t.logger && (this.logger = t.logger), (t != null && t.logLevel || t != null && t.log_level) && (this.logLevel = t.logLevel || t.log_level, this.params = Object.assign(Object.assign({}, this.params), { log_level: this.logLevel })), this.reconnectAfterMs = (l = t == null ? void 0 : t.reconnectAfterMs) !== null && l !== void 0 ? l : ((c) => Gu[c - 1] || Ju), this.encode = (u = t == null ? void 0 : t.encode) !== null && u !== void 0 ? u : ((c, f) => f(JSON.stringify(c))), this.decode = (h = t == null ? void 0 : t.decode) !== null && h !== void 0 ? h : this.serializer.decode.bind(this.serializer), this.worker) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.workerUrl = t == null ? void 0 : t.workerUrl;
    }
  }
}
class rr extends Error {
  constructor(t) {
    super(t), this.__isStorageError = !0, this.name = "StorageError";
  }
}
function X(n) {
  return typeof n == "object" && n !== null && "__isStorageError" in n;
}
class Qu extends rr {
  constructor(t, e, r) {
    super(t), this.name = "StorageApiError", this.status = e, this.statusCode = r;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
}
class Un extends rr {
  constructor(t, e) {
    super(t), this.name = "StorageUnknownError", this.originalError = e;
  }
}
const ir = (n) => {
  let t;
  return n ? t = n : typeof fetch > "u" ? t = (...e) => Promise.resolve().then(() => Qe).then(({ default: r }) => r(...e)) : t = fetch, (...e) => t(...e);
}, Xu = () => O(void 0, void 0, void 0, function* () {
  return typeof Response > "u" ? (yield Promise.resolve().then(() => Qe)).Response : Response;
}), Fn = (n) => {
  if (Array.isArray(n))
    return n.map((e) => Fn(e));
  if (typeof n == "function" || n !== Object(n))
    return n;
  const t = {};
  return Object.entries(n).forEach(([e, r]) => {
    const i = e.replace(/([-_][a-z])/gi, (s) => s.toUpperCase().replace(/[-_]/g, ""));
    t[i] = Fn(r);
  }), t;
}, Zu = (n) => {
  if (typeof n != "object" || n === null)
    return !1;
  const t = Object.getPrototypeOf(n);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
}, yn = (n) => n.msg || n.message || n.error_description || n.error || JSON.stringify(n), eh = (n, t, e) => O(void 0, void 0, void 0, function* () {
  const r = yield Xu();
  n instanceof r && !(e != null && e.noResolveJson) ? n.json().then((i) => {
    const s = n.status || 500, a = (i == null ? void 0 : i.statusCode) || s + "";
    t(new Qu(yn(i), s, a));
  }).catch((i) => {
    t(new Un(yn(i), i));
  }) : t(new Un(yn(n), n));
}), th = (n, t, e, r) => {
  const i = { method: n, headers: (t == null ? void 0 : t.headers) || {} };
  return n === "GET" || !r ? i : (Zu(r) ? (i.headers = Object.assign({ "Content-Type": "application/json" }, t == null ? void 0 : t.headers), i.body = JSON.stringify(r)) : i.body = r, t != null && t.duplex && (i.duplex = t.duplex), Object.assign(Object.assign({}, i), e));
};
function Pt(n, t, e, r, i, s) {
  return O(this, void 0, void 0, function* () {
    return new Promise((a, o) => {
      n(e, th(t, r, i, s)).then((l) => {
        if (!l.ok)
          throw l;
        return r != null && r.noResolveJson ? l : l.json();
      }).then((l) => a(l)).catch((l) => eh(l, o, r));
    });
  });
}
function Ct(n, t, e, r) {
  return O(this, void 0, void 0, function* () {
    return Pt(n, "GET", t, e, r);
  });
}
function ke(n, t, e, r, i) {
  return O(this, void 0, void 0, function* () {
    return Pt(n, "POST", t, r, i, e);
  });
}
function zn(n, t, e, r, i) {
  return O(this, void 0, void 0, function* () {
    return Pt(n, "PUT", t, r, i, e);
  });
}
function nh(n, t, e, r) {
  return O(this, void 0, void 0, function* () {
    return Pt(n, "HEAD", t, Object.assign(Object.assign({}, e), { noResolveJson: !0 }), r);
  });
}
function sr(n, t, e, r, i) {
  return O(this, void 0, void 0, function* () {
    return Pt(n, "DELETE", t, r, i, e);
  });
}
class rh {
  constructor(t, e) {
    this.downloadFn = t, this.shouldThrowOnError = e;
  }
  then(t, e) {
    return this.execute().then(t, e);
  }
  execute() {
    return O(this, void 0, void 0, function* () {
      try {
        return {
          data: (yield this.downloadFn()).body,
          error: null
        };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (X(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
}
var cs;
class ih {
  constructor(t, e) {
    this.downloadFn = t, this.shouldThrowOnError = e, this[cs] = "BlobDownloadBuilder", this.promise = null;
  }
  asStream() {
    return new rh(this.downloadFn, this.shouldThrowOnError);
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
  execute() {
    return O(this, void 0, void 0, function* () {
      try {
        return {
          data: yield (yield this.downloadFn()).blob(),
          error: null
        };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (X(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
}
cs = Symbol.toStringTag;
const sh = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
}, Br = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: !1
};
class ah {
  constructor(t, e = {}, r, i) {
    this.shouldThrowOnError = !1, this.url = t, this.headers = e, this.bucketId = r, this.fetch = ir(i);
  }
  /**
   * Enable throwing errors instead of returning them.
   */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
   * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
   *
   * @param method HTTP method.
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadOrUpdate(t, e, r, i) {
    return O(this, void 0, void 0, function* () {
      try {
        let s;
        const a = Object.assign(Object.assign({}, Br), i);
        let o = Object.assign(Object.assign({}, this.headers), t === "POST" && { "x-upsert": String(a.upsert) });
        const l = a.metadata;
        typeof Blob < "u" && r instanceof Blob ? (s = new FormData(), s.append("cacheControl", a.cacheControl), l && s.append("metadata", this.encodeMetadata(l)), s.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (s = r, s.append("cacheControl", a.cacheControl), l && s.append("metadata", this.encodeMetadata(l))) : (s = r, o["cache-control"] = `max-age=${a.cacheControl}`, o["content-type"] = a.contentType, l && (o["x-metadata"] = this.toBase64(this.encodeMetadata(l)))), i != null && i.headers && (o = Object.assign(Object.assign({}, o), i.headers));
        const u = this._removeEmptyFolders(e), h = this._getFinalPath(u), c = yield (t == "PUT" ? zn : ke)(this.fetch, `${this.url}/object/${h}`, s, Object.assign({ headers: o }, a != null && a.duplex ? { duplex: a.duplex } : {}));
        return {
          data: { path: u, id: c.Id, fullPath: c.Key },
          error: null
        };
      } catch (s) {
        if (this.shouldThrowOnError)
          throw s;
        if (X(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * Uploads a file to an existing bucket.
   *
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  upload(t, e, r) {
    return O(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("POST", t, e, r);
    });
  }
  /**
   * Upload a file with a token generated from `createSignedUploadUrl`.
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param token The token generated from `createSignedUploadUrl`
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadToSignedUrl(t, e, r, i) {
    return O(this, void 0, void 0, function* () {
      const s = this._removeEmptyFolders(t), a = this._getFinalPath(s), o = new URL(this.url + `/object/upload/sign/${a}`);
      o.searchParams.set("token", e);
      try {
        let l;
        const u = Object.assign({ upsert: Br.upsert }, i), h = Object.assign(Object.assign({}, this.headers), { "x-upsert": String(u.upsert) });
        typeof Blob < "u" && r instanceof Blob ? (l = new FormData(), l.append("cacheControl", u.cacheControl), l.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (l = r, l.append("cacheControl", u.cacheControl)) : (l = r, h["cache-control"] = `max-age=${u.cacheControl}`, h["content-type"] = u.contentType);
        const c = yield zn(this.fetch, o.toString(), l, { headers: h });
        return {
          data: { path: s, fullPath: c.Key },
          error: null
        };
      } catch (l) {
        if (this.shouldThrowOnError)
          throw l;
        if (X(l))
          return { data: null, error: l };
        throw l;
      }
    });
  }
  /**
   * Creates a signed upload URL.
   * Signed upload URLs can be used to upload files to the bucket without further authentication.
   * They are valid for 2 hours.
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
   */
  createSignedUploadUrl(t, e) {
    return O(this, void 0, void 0, function* () {
      try {
        let r = this._getFinalPath(t);
        const i = Object.assign({}, this.headers);
        e != null && e.upsert && (i["x-upsert"] = "true");
        const s = yield ke(this.fetch, `${this.url}/object/upload/sign/${r}`, {}, { headers: i }), a = new URL(this.url + s.url), o = a.searchParams.get("token");
        if (!o)
          throw new rr("No token returned by API");
        return { data: { signedUrl: a.toString(), path: t, token: o }, error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (X(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Replaces an existing file at the specified path with a new one.
   *
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  update(t, e, r) {
    return O(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("PUT", t, e, r);
    });
  }
  /**
   * Moves an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
   * @param options The destination options.
   */
  move(t, e, r) {
    return O(this, void 0, void 0, function* () {
      try {
        return { data: yield ke(this.fetch, `${this.url}/object/move`, {
          bucketId: this.bucketId,
          sourceKey: t,
          destinationKey: e,
          destinationBucket: r == null ? void 0 : r.destinationBucket
        }, { headers: this.headers }), error: null };
      } catch (i) {
        if (this.shouldThrowOnError)
          throw i;
        if (X(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * Copies an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
   * @param options The destination options.
   */
  copy(t, e, r) {
    return O(this, void 0, void 0, function* () {
      try {
        return { data: { path: (yield ke(this.fetch, `${this.url}/object/copy`, {
          bucketId: this.bucketId,
          sourceKey: t,
          destinationKey: e,
          destinationBucket: r == null ? void 0 : r.destinationBucket
        }, { headers: this.headers })).Key }, error: null };
      } catch (i) {
        if (this.shouldThrowOnError)
          throw i;
        if (X(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */
  createSignedUrl(t, e, r) {
    return O(this, void 0, void 0, function* () {
      try {
        let i = this._getFinalPath(t), s = yield ke(this.fetch, `${this.url}/object/sign/${i}`, Object.assign({ expiresIn: e }, r != null && r.transform ? { transform: r.transform } : {}), { headers: this.headers });
        const a = r != null && r.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
        return s = { signedUrl: encodeURI(`${this.url}${s.signedURL}${a}`) }, { data: s, error: null };
      } catch (i) {
        if (this.shouldThrowOnError)
          throw i;
        if (X(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
   * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   */
  createSignedUrls(t, e, r) {
    return O(this, void 0, void 0, function* () {
      try {
        const i = yield ke(this.fetch, `${this.url}/object/sign/${this.bucketId}`, { expiresIn: e, paths: t }, { headers: this.headers }), s = r != null && r.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
        return {
          data: i.map((a) => Object.assign(Object.assign({}, a), { signedUrl: a.signedURL ? encodeURI(`${this.url}${a.signedURL}${s}`) : null })),
          error: null
        };
      } catch (i) {
        if (this.shouldThrowOnError)
          throw i;
        if (X(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
   *
   * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
   * @param options.transform Transform the asset before serving it to the client.
   */
  download(t, e) {
    const i = typeof (e == null ? void 0 : e.transform) < "u" ? "render/image/authenticated" : "object", s = this.transformOptsToQueryString((e == null ? void 0 : e.transform) || {}), a = s ? `?${s}` : "", o = this._getFinalPath(t), l = () => Ct(this.fetch, `${this.url}/${i}/${o}${a}`, {
      headers: this.headers,
      noResolveJson: !0
    });
    return new ih(l, this.shouldThrowOnError);
  }
  /**
   * Retrieves the details of an existing file.
   * @param path
   */
  info(t) {
    return O(this, void 0, void 0, function* () {
      const e = this._getFinalPath(t);
      try {
        const r = yield Ct(this.fetch, `${this.url}/object/info/${e}`, {
          headers: this.headers
        });
        return { data: Fn(r), error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (X(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Checks the existence of a file.
   * @param path
   */
  exists(t) {
    return O(this, void 0, void 0, function* () {
      const e = this._getFinalPath(t);
      try {
        return yield nh(this.fetch, `${this.url}/object/${e}`, {
          headers: this.headers
        }), { data: !0, error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (X(r) && r instanceof Un) {
          const i = r.originalError;
          if ([400, 404].includes(i == null ? void 0 : i.status))
            return { data: !1, error: r };
        }
        throw r;
      }
    });
  }
  /**
   * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
   * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
   *
   * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
   * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */
  getPublicUrl(t, e) {
    const r = this._getFinalPath(t), i = [], s = e != null && e.download ? `download=${e.download === !0 ? "" : e.download}` : "";
    s !== "" && i.push(s);
    const o = typeof (e == null ? void 0 : e.transform) < "u" ? "render/image" : "object", l = this.transformOptsToQueryString((e == null ? void 0 : e.transform) || {});
    l !== "" && i.push(l);
    let u = i.join("&");
    return u !== "" && (u = `?${u}`), {
      data: { publicUrl: encodeURI(`${this.url}/${o}/public/${r}${u}`) }
    };
  }
  /**
   * Deletes files within the same bucket
   *
   * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
   */
  remove(t) {
    return O(this, void 0, void 0, function* () {
      try {
        return { data: yield sr(this.fetch, `${this.url}/object/${this.bucketId}`, { prefixes: t }, { headers: this.headers }), error: null };
      } catch (e) {
        if (this.shouldThrowOnError)
          throw e;
        if (X(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
  /**
   * Get file metadata
   * @param id the file id to retrieve metadata
   */
  // async getMetadata(
  //   id: string
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await get(this.fetch, `${this.url}/metadata/${id}`, { headers: this.headers })
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Update file metadata
   * @param id the file id to update metadata
   * @param meta the new file metadata
   */
  // async updateMetadata(
  //   id: string,
  //   meta: Metadata
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await post(
  //       this.fetch,
  //       `${this.url}/metadata/${id}`,
  //       { ...meta },
  //       { headers: this.headers }
  //     )
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Lists all the files and folders within a path of the bucket.
   * @param path The folder path.
   * @param options Search options including limit (defaults to 100), offset, sortBy, and search
   */
  list(t, e, r) {
    return O(this, void 0, void 0, function* () {
      try {
        const i = Object.assign(Object.assign(Object.assign({}, sh), e), { prefix: t || "" });
        return { data: yield ke(this.fetch, `${this.url}/object/list/${this.bucketId}`, i, { headers: this.headers }, r), error: null };
      } catch (i) {
        if (this.shouldThrowOnError)
          throw i;
        if (X(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * @experimental this method signature might change in the future
   * @param options search options
   * @param parameters
   */
  listV2(t, e) {
    return O(this, void 0, void 0, function* () {
      try {
        const r = Object.assign({}, t);
        return { data: yield ke(this.fetch, `${this.url}/object/list-v2/${this.bucketId}`, r, { headers: this.headers }, e), error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (X(r))
          return { data: null, error: r };
        throw r;
      }
    });
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
  transformOptsToQueryString(t) {
    const e = [];
    return t.width && e.push(`width=${t.width}`), t.height && e.push(`height=${t.height}`), t.resize && e.push(`resize=${t.resize}`), t.format && e.push(`format=${t.format}`), t.quality && e.push(`quality=${t.quality}`), e.join("&");
  }
}
const ds = "2.76.1", fs = {
  "X-Client-Info": `storage-js/${ds}`
};
class oh {
  constructor(t, e = {}, r, i) {
    this.shouldThrowOnError = !1;
    const s = new URL(t);
    i != null && i.useNewHostname && /supabase\.(co|in|red)$/.test(s.hostname) && !s.hostname.includes("storage.supabase.") && (s.hostname = s.hostname.replace("supabase.", "storage.supabase.")), this.url = s.href.replace(/\/$/, ""), this.headers = Object.assign(Object.assign({}, fs), e), this.fetch = ir(r);
  }
  /**
   * Enable throwing errors instead of returning them.
   */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
   * Retrieves the details of all Storage buckets within an existing project.
   */
  listBuckets() {
    return O(this, void 0, void 0, function* () {
      try {
        return { data: yield Ct(this.fetch, `${this.url}/bucket`, { headers: this.headers }), error: null };
      } catch (t) {
        if (this.shouldThrowOnError)
          throw t;
        if (X(t))
          return { data: null, error: t };
        throw t;
      }
    });
  }
  /**
   * Retrieves the details of an existing Storage bucket.
   *
   * @param id The unique identifier of the bucket you would like to retrieve.
   */
  getBucket(t) {
    return O(this, void 0, void 0, function* () {
      try {
        return { data: yield Ct(this.fetch, `${this.url}/bucket/${t}`, { headers: this.headers }), error: null };
      } catch (e) {
        if (this.shouldThrowOnError)
          throw e;
        if (X(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
  /**
   * Creates a new Storage bucket
   *
   * @param id A unique identifier for the bucket you are creating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   * @returns newly created bucket id
   * @param options.type (private-beta) specifies the bucket type. see `BucketType` for more details.
   *   - default bucket type is `STANDARD`
   */
  createBucket(t) {
    return O(this, arguments, void 0, function* (e, r = {
      public: !1
    }) {
      try {
        return { data: yield ke(this.fetch, `${this.url}/bucket`, {
          id: e,
          name: e,
          type: r.type,
          public: r.public,
          file_size_limit: r.fileSizeLimit,
          allowed_mime_types: r.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (i) {
        if (this.shouldThrowOnError)
          throw i;
        if (X(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * Updates a Storage bucket
   *
   * @param id A unique identifier for the bucket you are updating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   */
  updateBucket(t, e) {
    return O(this, void 0, void 0, function* () {
      try {
        return { data: yield zn(this.fetch, `${this.url}/bucket/${t}`, {
          id: t,
          name: t,
          public: e.public,
          file_size_limit: e.fileSizeLimit,
          allowed_mime_types: e.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (X(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Removes all objects inside a single bucket.
   *
   * @param id The unique identifier of the bucket you would like to empty.
   */
  emptyBucket(t) {
    return O(this, void 0, void 0, function* () {
      try {
        return { data: yield ke(this.fetch, `${this.url}/bucket/${t}/empty`, {}, { headers: this.headers }), error: null };
      } catch (e) {
        if (this.shouldThrowOnError)
          throw e;
        if (X(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
  /**
   * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
   * You must first `empty()` the bucket.
   *
   * @param id The unique identifier of the bucket you would like to delete.
   */
  deleteBucket(t) {
    return O(this, void 0, void 0, function* () {
      try {
        return { data: yield sr(this.fetch, `${this.url}/bucket/${t}`, {}, { headers: this.headers }), error: null };
      } catch (e) {
        if (this.shouldThrowOnError)
          throw e;
        if (X(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
}
class lh {
  /**
   * Creates a new StorageAnalyticsApi instance
   * @param url - The base URL for the storage API
   * @param headers - HTTP headers to include in requests
   * @param fetch - Optional custom fetch implementation
   */
  constructor(t, e = {}, r) {
    this.shouldThrowOnError = !1, this.url = t.replace(/\/$/, ""), this.headers = Object.assign(Object.assign({}, fs), e), this.fetch = ir(r);
  }
  /**
   * Enable throwing errors instead of returning them in the response
   * When enabled, failed operations will throw instead of returning { data: null, error }
   *
   * @returns This instance for method chaining
   */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
   * Creates a new analytics bucket using Iceberg tables
   * Analytics buckets are optimized for analytical queries and data processing
   *
   * @param name A unique name for the bucket you are creating
   * @returns Promise with newly created bucket name or error
   *
   * @example
   * ```typescript
   * const { data, error } = await storage.analytics.createBucket('analytics-data')
   * if (error) {
   *   console.error('Failed to create analytics bucket:', error.message)
   * } else {
   *   console.log('Created bucket:', data.name)
   * }
   * ```
   */
  createBucket(t) {
    return O(this, void 0, void 0, function* () {
      try {
        return { data: yield ke(this.fetch, `${this.url}/bucket`, { name: t }, { headers: this.headers }), error: null };
      } catch (e) {
        if (this.shouldThrowOnError)
          throw e;
        if (X(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
  /**
   * Retrieves the details of all Analytics Storage buckets within an existing project
   * Only returns buckets of type 'ANALYTICS'
   *
   * @param options Query parameters for listing buckets
   * @param options.limit Maximum number of buckets to return
   * @param options.offset Number of buckets to skip
   * @param options.sortColumn Column to sort by ('id', 'name', 'created_at', 'updated_at')
   * @param options.sortOrder Sort order ('asc' or 'desc')
   * @param options.search Search term to filter bucket names
   * @returns Promise with list of analytics buckets or error
   *
   * @example
   * ```typescript
   * const { data, error } = await storage.analytics.listBuckets({
   *   limit: 10,
   *   offset: 0,
   *   sortColumn: 'created_at',
   *   sortOrder: 'desc',
   *   search: 'analytics'
   * })
   * if (data) {
   *   console.log('Found analytics buckets:', data.length)
   *   data.forEach(bucket => console.log(`- ${bucket.name}`))
   * }
   * ```
   */
  listBuckets(t) {
    return O(this, void 0, void 0, function* () {
      try {
        const e = new URLSearchParams();
        (t == null ? void 0 : t.limit) !== void 0 && e.set("limit", t.limit.toString()), (t == null ? void 0 : t.offset) !== void 0 && e.set("offset", t.offset.toString()), t != null && t.sortColumn && e.set("sortColumn", t.sortColumn), t != null && t.sortOrder && e.set("sortOrder", t.sortOrder), t != null && t.search && e.set("search", t.search);
        const r = e.toString(), i = r ? `${this.url}/bucket?${r}` : `${this.url}/bucket`, s = yield Ct(this.fetch, i, { headers: this.headers });
        return { data: Array.isArray(s) ? s.filter((o) => o.type === "ANALYTICS") : [], error: null };
      } catch (e) {
        if (this.shouldThrowOnError)
          throw e;
        if (X(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
  /**
   * Deletes an existing analytics bucket
   * A bucket can't be deleted with existing objects inside it
   * You must first empty the bucket before deletion
   *
   * @param bucketId The unique identifier of the bucket you would like to delete
   * @returns Promise with success message or error
   *
   * @example
   * ```typescript
   * const { data, error } = await analyticsApi.deleteBucket('old-analytics-bucket')
   * if (error) {
   *   console.error('Failed to delete bucket:', error.message)
   * } else {
   *   console.log('Bucket deleted successfully:', data.message)
   * }
   * ```
   */
  deleteBucket(t) {
    return O(this, void 0, void 0, function* () {
      try {
        return { data: yield sr(this.fetch, `${this.url}/bucket/${t}`, {}, { headers: this.headers }), error: null };
      } catch (e) {
        if (this.shouldThrowOnError)
          throw e;
        if (X(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
}
const ar = {
  "X-Client-Info": `storage-js/${ds}`,
  "Content-Type": "application/json"
};
class ps extends Error {
  constructor(t) {
    super(t), this.__isStorageVectorsError = !0, this.name = "StorageVectorsError";
  }
}
function me(n) {
  return typeof n == "object" && n !== null && "__isStorageVectorsError" in n;
}
class wn extends ps {
  constructor(t, e, r) {
    super(t), this.name = "StorageVectorsApiError", this.status = e, this.statusCode = r;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
}
class uh extends ps {
  constructor(t, e) {
    super(t), this.name = "StorageVectorsUnknownError", this.originalError = e;
  }
}
var Ur;
(function(n) {
  n.InternalError = "InternalError", n.S3VectorConflictException = "S3VectorConflictException", n.S3VectorNotFoundException = "S3VectorNotFoundException", n.S3VectorBucketNotEmpty = "S3VectorBucketNotEmpty", n.S3VectorMaxBucketsExceeded = "S3VectorMaxBucketsExceeded", n.S3VectorMaxIndexesExceeded = "S3VectorMaxIndexesExceeded";
})(Ur || (Ur = {}));
const or = (n) => {
  let t;
  return n ? t = n : typeof fetch > "u" ? t = (...e) => Promise.resolve().then(() => Qe).then(({ default: r }) => r(...e)) : t = fetch, (...e) => t(...e);
}, hh = (n) => {
  if (typeof n != "object" || n === null)
    return !1;
  const t = Object.getPrototypeOf(n);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
}, Fr = (n) => n.msg || n.message || n.error_description || n.error || JSON.stringify(n), ch = (n, t, e) => O(void 0, void 0, void 0, function* () {
  if (n && typeof n == "object" && "status" in n && "ok" in n && typeof n.status == "number" && !(e != null && e.noResolveJson)) {
    const i = n.status || 500, s = n;
    if (typeof s.json == "function")
      s.json().then((a) => {
        const o = (a == null ? void 0 : a.statusCode) || (a == null ? void 0 : a.code) || i + "";
        t(new wn(Fr(a), i, o));
      }).catch(() => {
        const a = i + "", o = s.statusText || `HTTP ${i} error`;
        t(new wn(o, i, a));
      });
    else {
      const a = i + "", o = s.statusText || `HTTP ${i} error`;
      t(new wn(o, i, a));
    }
  } else
    t(new uh(Fr(n), n));
}), dh = (n, t, e, r) => {
  const i = { method: n, headers: (t == null ? void 0 : t.headers) || {} };
  return r ? (hh(r) ? (i.headers = Object.assign({ "Content-Type": "application/json" }, t == null ? void 0 : t.headers), i.body = JSON.stringify(r)) : i.body = r, Object.assign(Object.assign({}, i), e)) : i;
};
function fh(n, t, e, r, i, s) {
  return O(this, void 0, void 0, function* () {
    return new Promise((a, o) => {
      n(e, dh(t, r, i, s)).then((l) => {
        if (!l.ok)
          throw l;
        if (r != null && r.noResolveJson)
          return l;
        const u = l.headers.get("content-type");
        return !u || !u.includes("application/json") ? {} : l.json();
      }).then((l) => a(l)).catch((l) => ch(l, o, r));
    });
  });
}
function be(n, t, e, r, i) {
  return O(this, void 0, void 0, function* () {
    return fh(n, "POST", t, r, i, e);
  });
}
class ph {
  constructor(t, e = {}, r) {
    this.shouldThrowOnError = !1, this.url = t.replace(/\/$/, ""), this.headers = Object.assign(Object.assign({}, ar), e), this.fetch = or(r);
  }
  /**
   * Enable throwing errors instead of returning them in the response
   * When enabled, failed operations will throw instead of returning { data: null, error }
   *
   * @returns This instance for method chaining
   * @example
   * ```typescript
   * const client = new VectorIndexApi(url, headers)
   * client.throwOnError()
   * const { data } = await client.createIndex(options) // throws on error
   * ```
   */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
   * Creates a new vector index within a bucket
   * Defines the schema for vectors including dimensionality, distance metric, and metadata config
   *
   * @param options - Index configuration
   * @param options.vectorBucketName - Name of the parent vector bucket
   * @param options.indexName - Unique name for the index within the bucket
   * @param options.dataType - Data type for vector components (currently only 'float32')
   * @param options.dimension - Dimensionality of vectors (e.g., 384, 768, 1536)
   * @param options.distanceMetric - Similarity metric ('cosine', 'euclidean', 'dotproduct')
   * @param options.metadataConfiguration - Optional config for non-filterable metadata keys
   * @returns Promise with empty response on success or error
   *
   * @throws {StorageVectorsApiError} With code:
   * - `S3VectorConflictException` if index already exists (HTTP 409)
   * - `S3VectorMaxIndexesExceeded` if quota exceeded (HTTP 400)
   * - `S3VectorNotFoundException` if bucket doesn't exist (HTTP 404)
   * - `InternalError` for server errors (HTTP 500)
   *
   * @example
   * ```typescript
   * const { data, error } = await client.createIndex({
   *   vectorBucketName: 'embeddings-prod',
   *   indexName: 'documents-openai-small',
   *   dataType: 'float32',
   *   dimension: 1536,
   *   distanceMetric: 'cosine',
   *   metadataConfiguration: {
   *     nonFilterableMetadataKeys: ['raw_text', 'internal_id']
   *   }
   * })
   * ```
   */
  createIndex(t) {
    return O(this, void 0, void 0, function* () {
      try {
        return { data: (yield be(this.fetch, `${this.url}/CreateIndex`, t, {
          headers: this.headers
        })) || {}, error: null };
      } catch (e) {
        if (this.shouldThrowOnError)
          throw e;
        if (me(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
  /**
   * Retrieves metadata for a specific vector index
   * Returns index configuration including dimension, distance metric, and metadata settings
   *
   * @param vectorBucketName - Name of the parent vector bucket
   * @param indexName - Name of the index to retrieve
   * @returns Promise with index metadata or error
   *
   * @throws {StorageVectorsApiError} With code:
   * - `S3VectorNotFoundException` if index or bucket doesn't exist (HTTP 404)
   * - `InternalError` for server errors (HTTP 500)
   *
   * @example
   * ```typescript
   * const { data, error } = await client.getIndex('embeddings-prod', 'documents-openai-small')
   * if (data) {
   *   console.log('Index dimension:', data.index.dimension)
   *   console.log('Distance metric:', data.index.distanceMetric)
   * }
   * ```
   */
  getIndex(t, e) {
    return O(this, void 0, void 0, function* () {
      try {
        return { data: yield be(this.fetch, `${this.url}/GetIndex`, { vectorBucketName: t, indexName: e }, { headers: this.headers }), error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (me(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Lists vector indexes within a bucket with optional filtering and pagination
   * Supports prefix-based filtering and paginated results
   *
   * @param options - Listing options
   * @param options.vectorBucketName - Name of the parent vector bucket
   * @param options.prefix - Filter indexes by name prefix
   * @param options.maxResults - Maximum results per page (default: 100)
   * @param options.nextToken - Pagination token from previous response
   * @returns Promise with list of indexes and pagination token
   *
   * @throws {StorageVectorsApiError} With code:
   * - `S3VectorNotFoundException` if bucket doesn't exist (HTTP 404)
   * - `InternalError` for server errors (HTTP 500)
   *
   * @example
   * ```typescript
   * // List all indexes in a bucket
   * const { data, error } = await client.listIndexes({
   *   vectorBucketName: 'embeddings-prod',
   *   prefix: 'documents-'
   * })
   * if (data) {
   *   console.log('Found indexes:', data.indexes.map(i => i.indexName))
   *   // Fetch next page if available
   *   if (data.nextToken) {
   *     const next = await client.listIndexes({
   *       vectorBucketName: 'embeddings-prod',
   *       nextToken: data.nextToken
   *     })
   *   }
   * }
   * ```
   */
  listIndexes(t) {
    return O(this, void 0, void 0, function* () {
      try {
        return { data: yield be(this.fetch, `${this.url}/ListIndexes`, t, {
          headers: this.headers
        }), error: null };
      } catch (e) {
        if (this.shouldThrowOnError)
          throw e;
        if (me(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
  /**
   * Deletes a vector index and all its data
   * This operation removes the index schema and all vectors stored in the index
   *
   * @param vectorBucketName - Name of the parent vector bucket
   * @param indexName - Name of the index to delete
   * @returns Promise with empty response on success or error
   *
   * @throws {StorageVectorsApiError} With code:
   * - `S3VectorNotFoundException` if index or bucket doesn't exist (HTTP 404)
   * - `InternalError` for server errors (HTTP 500)
   *
   * @example
   * ```typescript
   * // Delete an index and all its vectors
   * const { error } = await client.deleteIndex('embeddings-prod', 'old-index')
   * if (!error) {
   *   console.log('Index deleted successfully')
   * }
   * ```
   */
  deleteIndex(t, e) {
    return O(this, void 0, void 0, function* () {
      try {
        return { data: (yield be(this.fetch, `${this.url}/DeleteIndex`, { vectorBucketName: t, indexName: e }, { headers: this.headers })) || {}, error: null };
      } catch (r) {
        if (this.shouldThrowOnError)
          throw r;
        if (me(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
}
class gh {
  constructor(t, e = {}, r) {
    this.shouldThrowOnError = !1, this.url = t.replace(/\/$/, ""), this.headers = Object.assign(Object.assign({}, ar), e), this.fetch = or(r);
  }
  /**
   * Enable throwing errors instead of returning them in the response
   * When enabled, failed operations will throw instead of returning { data: null, error }
   *
   * @returns This instance for method chaining
   * @example
   * ```typescript
   * const client = new VectorDataApi(url, headers)
   * client.throwOnError()
   * const { data } = await client.putVectors(options) // throws on error
   * ```
   */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
   * Inserts or updates vectors in batch (upsert operation)
   * Accepts 1-500 vectors per request. Larger batches should be split
   *
   * @param options - Vector insertion options
   * @param options.vectorBucketName - Name of the parent vector bucket
   * @param options.indexName - Name of the target index
   * @param options.vectors - Array of vectors to insert/update (1-500 items)
   * @returns Promise with empty response on success or error
   *
   * @throws {StorageVectorsApiError} With code:
   * - `S3VectorConflictException` if duplicate key conflict occurs (HTTP 409)
   * - `S3VectorNotFoundException` if bucket or index doesn't exist (HTTP 404)
   * - `InternalError` for server errors (HTTP 500)
   *
   * @example
   * ```typescript
   * const { data, error } = await client.putVectors({
   *   vectorBucketName: 'embeddings-prod',
   *   indexName: 'documents-openai-small',
   *   vectors: [
   *     {
   *       key: 'doc-1',
   *       data: { float32: [0.1, 0.2, 0.3, ...] }, // 1536 dimensions
   *       metadata: { title: 'Introduction', page: 1 }
   *     },
   *     {
   *       key: 'doc-2',
   *       data: { float32: [0.4, 0.5, 0.6, ...] },
   *       metadata: { title: 'Conclusion', page: 42 }
   *     }
   *   ]
   * })
   * ```
   */
  putVectors(t) {
    return O(this, void 0, void 0, function* () {
      try {
        if (t.vectors.length < 1 || t.vectors.length > 500)
          throw new Error("Vector batch size must be between 1 and 500 items");
        return { data: (yield be(this.fetch, `${this.url}/PutVectors`, t, {
          headers: this.headers
        })) || {}, error: null };
      } catch (e) {
        if (this.shouldThrowOnError)
          throw e;
        if (me(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
  /**
   * Retrieves vectors by their keys in batch
   * Optionally includes vector data and/or metadata in response
   * Additional permissions required when returning data or metadata
   *
   * @param options - Vector retrieval options
   * @param options.vectorBucketName - Name of the parent vector bucket
   * @param options.indexName - Name of the index
   * @param options.keys - Array of vector keys to retrieve
   * @param options.returnData - Whether to include vector embeddings (requires permission)
   * @param options.returnMetadata - Whether to include metadata (requires permission)
   * @returns Promise with array of vectors or error
   *
   * @throws {StorageVectorsApiError} With code:
   * - `S3VectorNotFoundException` if bucket or index doesn't exist (HTTP 404)
   * - `InternalError` for server errors (HTTP 500)
   *
   * @example
   * ```typescript
   * const { data, error } = await client.getVectors({
   *   vectorBucketName: 'embeddings-prod',
   *   indexName: 'documents-openai-small',
   *   keys: ['doc-1', 'doc-2', 'doc-3'],
   *   returnData: false,     // Don't return embeddings
   *   returnMetadata: true   // Return metadata only
   * })
   * if (data) {
   *   data.vectors.forEach(v => console.log(v.key, v.metadata))
   * }
   * ```
   */
  getVectors(t) {
    return O(this, void 0, void 0, function* () {
      try {
        return { data: yield be(this.fetch, `${this.url}/GetVectors`, t, {
          headers: this.headers
        }), error: null };
      } catch (e) {
        if (this.shouldThrowOnError)
          throw e;
        if (me(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
  /**
   * Lists/scans vectors in an index with pagination
   * Supports parallel scanning via segment configuration for high-throughput scenarios
   * Additional permissions required when returning data or metadata
   *
   * @param options - Vector listing options
   * @param options.vectorBucketName - Name of the parent vector bucket
   * @param options.indexName - Name of the index
   * @param options.maxResults - Maximum results per page (default: 500, max: 1000)
   * @param options.nextToken - Pagination token from previous response
   * @param options.returnData - Whether to include vector embeddings (requires permission)
   * @param options.returnMetadata - Whether to include metadata (requires permission)
   * @param options.segmentCount - Total parallel segments (1-16) for distributed scanning
   * @param options.segmentIndex - Zero-based segment index (0 to segmentCount-1)
   * @returns Promise with array of vectors, pagination token, or error
   *
   * @throws {StorageVectorsApiError} With code:
   * - `S3VectorNotFoundException` if bucket or index doesn't exist (HTTP 404)
   * - `InternalError` for server errors (HTTP 500)
   *
   * @example
   * ```typescript
   * // Simple pagination
   * let nextToken: string | undefined
   * do {
   *   const { data, error } = await client.listVectors({
   *     vectorBucketName: 'embeddings-prod',
   *     indexName: 'documents-openai-small',
   *     maxResults: 500,
   *     nextToken,
   *     returnMetadata: true
   *   })
   *   if (error) break
   *   console.log('Batch:', data.vectors.length)
   *   nextToken = data.nextToken
   * } while (nextToken)
   *
   * // Parallel scanning (4 concurrent workers)
   * const workers = [0, 1, 2, 3].map(async (segmentIndex) => {
   *   const { data } = await client.listVectors({
   *     vectorBucketName: 'embeddings-prod',
   *     indexName: 'documents-openai-small',
   *     segmentCount: 4,
   *     segmentIndex,
   *     returnMetadata: true
   *   })
   *   return data?.vectors || []
   * })
   * const results = await Promise.all(workers)
   * ```
   */
  listVectors(t) {
    return O(this, void 0, void 0, function* () {
      try {
        if (t.segmentCount !== void 0) {
          if (t.segmentCount < 1 || t.segmentCount > 16)
            throw new Error("segmentCount must be between 1 and 16");
          if (t.segmentIndex !== void 0 && (t.segmentIndex < 0 || t.segmentIndex >= t.segmentCount))
            throw new Error(`segmentIndex must be between 0 and ${t.segmentCount - 1}`);
        }
        return { data: yield be(this.fetch, `${this.url}/ListVectors`, t, {
          headers: this.headers
        }), error: null };
      } catch (e) {
        if (this.shouldThrowOnError)
          throw e;
        if (me(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
  /**
   * Queries for similar vectors using approximate nearest neighbor (ANN) search
   * Returns top-K most similar vectors based on the configured distance metric
   * Supports optional metadata filtering (requires GetVectors permission)
   *
   * @param options - Query options
   * @param options.vectorBucketName - Name of the parent vector bucket
   * @param options.indexName - Name of the index
   * @param options.queryVector - Query embedding to find similar vectors
   * @param options.topK - Number of nearest neighbors to return (default: 10)
   * @param options.filter - Optional JSON filter for metadata (requires GetVectors permission)
   * @param options.returnDistance - Whether to include similarity distances
   * @param options.returnMetadata - Whether to include metadata (requires GetVectors permission)
   * @returns Promise with array of similar vectors ordered by distance
   *
   * @throws {StorageVectorsApiError} With code:
   * - `S3VectorNotFoundException` if bucket or index doesn't exist (HTTP 404)
   * - `InternalError` for server errors (HTTP 500)
   *
   * @example
   * ```typescript
   * // Semantic search with filtering
   * const { data, error } = await client.queryVectors({
   *   vectorBucketName: 'embeddings-prod',
   *   indexName: 'documents-openai-small',
   *   queryVector: { float32: [0.1, 0.2, 0.3, ...] }, // 1536 dimensions
   *   topK: 5,
   *   filter: {
   *     category: 'technical',
   *     published: true
   *   },
   *   returnDistance: true,
   *   returnMetadata: true
   * })
   * if (data) {
   *   data.matches.forEach(match => {
   *     console.log(`${match.key}: distance=${match.distance}`)
   *     console.log('Metadata:', match.metadata)
   *   })
   * }
   * ```
   */
  queryVectors(t) {
    return O(this, void 0, void 0, function* () {
      try {
        return { data: yield be(this.fetch, `${this.url}/QueryVectors`, t, {
          headers: this.headers
        }), error: null };
      } catch (e) {
        if (this.shouldThrowOnError)
          throw e;
        if (me(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
  /**
   * Deletes vectors by their keys in batch
   * Accepts 1-500 keys per request
   *
   * @param options - Vector deletion options
   * @param options.vectorBucketName - Name of the parent vector bucket
   * @param options.indexName - Name of the index
   * @param options.keys - Array of vector keys to delete (1-500 items)
   * @returns Promise with empty response on success or error
   *
   * @throws {StorageVectorsApiError} With code:
   * - `S3VectorNotFoundException` if bucket or index doesn't exist (HTTP 404)
   * - `InternalError` for server errors (HTTP 500)
   *
   * @example
   * ```typescript
   * const { error } = await client.deleteVectors({
   *   vectorBucketName: 'embeddings-prod',
   *   indexName: 'documents-openai-small',
   *   keys: ['doc-1', 'doc-2', 'doc-3']
   * })
   * if (!error) {
   *   console.log('Vectors deleted successfully')
   * }
   * ```
   */
  deleteVectors(t) {
    return O(this, void 0, void 0, function* () {
      try {
        if (t.keys.length < 1 || t.keys.length > 500)
          throw new Error("Keys batch size must be between 1 and 500 items");
        return { data: (yield be(this.fetch, `${this.url}/DeleteVectors`, t, {
          headers: this.headers
        })) || {}, error: null };
      } catch (e) {
        if (this.shouldThrowOnError)
          throw e;
        if (me(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
}
class mh {
  /**
   * Creates a new VectorBucketApi instance
   * @param url - The base URL for the storage vectors API
   * @param headers - HTTP headers to include in requests
   * @param fetch - Optional custom fetch implementation
   */
  constructor(t, e = {}, r) {
    this.shouldThrowOnError = !1, this.url = t.replace(/\/$/, ""), this.headers = Object.assign(Object.assign({}, ar), e), this.fetch = or(r);
  }
  /**
   * Enable throwing errors instead of returning them in the response
   * When enabled, failed operations will throw instead of returning { data: null, error }
   *
   * @returns This instance for method chaining
   * @example
   * ```typescript
   * const client = new VectorBucketApi(url, headers)
   * client.throwOnError()
   * const { data } = await client.createBucket('my-bucket') // throws on error
   * ```
   */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
   * Creates a new vector bucket
   * Vector buckets are containers for vector indexes and their data
   *
   * @param vectorBucketName - Unique name for the vector bucket
   * @returns Promise with empty response on success or error
   *
   * @throws {StorageVectorsApiError} With code:
   * - `S3VectorConflictException` if bucket already exists (HTTP 409)
   * - `S3VectorMaxBucketsExceeded` if quota exceeded (HTTP 400)
   * - `InternalError` for server errors (HTTP 500)
   *
   * @example
   * ```typescript
   * const { data, error } = await client.createBucket('embeddings-prod')
   * if (error) {
   *   console.error('Failed to create bucket:', error.message)
   * }
   * ```
   */
  createBucket(t) {
    return O(this, void 0, void 0, function* () {
      try {
        return { data: (yield be(this.fetch, `${this.url}/CreateVectorBucket`, { vectorBucketName: t }, { headers: this.headers })) || {}, error: null };
      } catch (e) {
        if (this.shouldThrowOnError)
          throw e;
        if (me(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
  /**
   * Retrieves metadata for a specific vector bucket
   * Returns bucket configuration including encryption settings and creation time
   *
   * @param vectorBucketName - Name of the vector bucket to retrieve
   * @returns Promise with bucket metadata or error
   *
   * @throws {StorageVectorsApiError} With code:
   * - `S3VectorNotFoundException` if bucket doesn't exist (HTTP 404)
   * - `InternalError` for server errors (HTTP 500)
   *
   * @example
   * ```typescript
   * const { data, error } = await client.getBucket('embeddings-prod')
   * if (data) {
   *   console.log('Bucket created at:', new Date(data.vectorBucket.creationTime! * 1000))
   * }
   * ```
   */
  getBucket(t) {
    return O(this, void 0, void 0, function* () {
      try {
        return { data: yield be(this.fetch, `${this.url}/GetVectorBucket`, { vectorBucketName: t }, { headers: this.headers }), error: null };
      } catch (e) {
        if (this.shouldThrowOnError)
          throw e;
        if (me(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
  /**
   * Lists vector buckets with optional filtering and pagination
   * Supports prefix-based filtering and paginated results
   *
   * @param options - Listing options
   * @param options.prefix - Filter buckets by name prefix
   * @param options.maxResults - Maximum results per page (default: 100)
   * @param options.nextToken - Pagination token from previous response
   * @returns Promise with list of buckets and pagination token
   *
   * @throws {StorageVectorsApiError} With code:
   * - `InternalError` for server errors (HTTP 500)
   *
   * @example
   * ```typescript
   * // List all buckets with prefix 'prod-'
   * const { data, error } = await client.listBuckets({ prefix: 'prod-' })
   * if (data) {
   *   console.log('Found buckets:', data.buckets.length)
   *   // Fetch next page if available
   *   if (data.nextToken) {
   *     const next = await client.listBuckets({ nextToken: data.nextToken })
   *   }
   * }
   * ```
   */
  listBuckets() {
    return O(this, arguments, void 0, function* (t = {}) {
      try {
        return { data: yield be(this.fetch, `${this.url}/ListVectorBuckets`, t, {
          headers: this.headers
        }), error: null };
      } catch (e) {
        if (this.shouldThrowOnError)
          throw e;
        if (me(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
  /**
   * Deletes a vector bucket
   * Bucket must be empty before deletion (all indexes must be removed first)
   *
   * @param vectorBucketName - Name of the vector bucket to delete
   * @returns Promise with empty response on success or error
   *
   * @throws {StorageVectorsApiError} With code:
   * - `S3VectorBucketNotEmpty` if bucket contains indexes (HTTP 400)
   * - `S3VectorNotFoundException` if bucket doesn't exist (HTTP 404)
   * - `InternalError` for server errors (HTTP 500)
   *
   * @example
   * ```typescript
   * // Delete all indexes first, then delete bucket
   * const { error } = await client.deleteBucket('old-bucket')
   * if (error?.statusCode === 'S3VectorBucketNotEmpty') {
   *   console.error('Must delete all indexes first')
   * }
   * ```
   */
  deleteBucket(t) {
    return O(this, void 0, void 0, function* () {
      try {
        return { data: (yield be(this.fetch, `${this.url}/DeleteVectorBucket`, { vectorBucketName: t }, { headers: this.headers })) || {}, error: null };
      } catch (e) {
        if (this.shouldThrowOnError)
          throw e;
        if (me(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
}
class bh extends mh {
  constructor(t, e = {}) {
    super(t, e.headers || {}, e.fetch);
  }
  /**
   * Access operations for a specific vector bucket
   * Returns a scoped client for index and vector operations within the bucket
   *
   * @param vectorBucketName - Name of the vector bucket
   * @returns Bucket-scoped client with index and vector operations
   *
   * @example
   * ```typescript
   * const bucket = client.bucket('embeddings-prod')
   *
   * // Create an index in this bucket
   * await bucket.createIndex({
   *   indexName: 'documents-openai',
   *   dataType: 'float32',
   *   dimension: 1536,
   *   distanceMetric: 'cosine'
   * })
   *
   * // List indexes in this bucket
   * const { data } = await bucket.listIndexes()
   * ```
   */
  from(t) {
    return new yh(this.url, this.headers, t, this.fetch);
  }
}
class yh extends ph {
  constructor(t, e, r, i) {
    super(t, e, i), this.vectorBucketName = r;
  }
  /**
   * Creates a new vector index in this bucket
   * Convenience method that automatically includes the bucket name
   *
   * @param options - Index configuration (vectorBucketName is automatically set)
   * @returns Promise with empty response on success or error
   *
   * @example
   * ```typescript
   * const bucket = client.bucket('embeddings-prod')
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
  createIndex(t) {
    const e = Object.create(null, {
      createIndex: { get: () => super.createIndex }
    });
    return O(this, void 0, void 0, function* () {
      return e.createIndex.call(this, Object.assign(Object.assign({}, t), { vectorBucketName: this.vectorBucketName }));
    });
  }
  /**
   * Lists indexes in this bucket
   * Convenience method that automatically includes the bucket name
   *
   * @param options - Listing options (vectorBucketName is automatically set)
   * @returns Promise with list of indexes or error
   *
   * @example
   * ```typescript
   * const bucket = client.bucket('embeddings-prod')
   * const { data } = await bucket.listIndexes({ prefix: 'documents-' })
   * ```
   */
  listIndexes() {
    const t = Object.create(null, {
      listIndexes: { get: () => super.listIndexes }
    });
    return O(this, arguments, void 0, function* (e = {}) {
      return t.listIndexes.call(this, Object.assign(Object.assign({}, e), { vectorBucketName: this.vectorBucketName }));
    });
  }
  /**
   * Retrieves metadata for a specific index in this bucket
   * Convenience method that automatically includes the bucket name
   *
   * @param indexName - Name of the index to retrieve
   * @returns Promise with index metadata or error
   *
   * @example
   * ```typescript
   * const bucket = client.bucket('embeddings-prod')
   * const { data } = await bucket.getIndex('documents-openai')
   * console.log('Dimension:', data?.index.dimension)
   * ```
   */
  getIndex(t) {
    const e = Object.create(null, {
      getIndex: { get: () => super.getIndex }
    });
    return O(this, void 0, void 0, function* () {
      return e.getIndex.call(this, this.vectorBucketName, t);
    });
  }
  /**
   * Deletes an index from this bucket
   * Convenience method that automatically includes the bucket name
   *
   * @param indexName - Name of the index to delete
   * @returns Promise with empty response on success or error
   *
   * @example
   * ```typescript
   * const bucket = client.bucket('embeddings-prod')
   * await bucket.deleteIndex('old-index')
   * ```
   */
  deleteIndex(t) {
    const e = Object.create(null, {
      deleteIndex: { get: () => super.deleteIndex }
    });
    return O(this, void 0, void 0, function* () {
      return e.deleteIndex.call(this, this.vectorBucketName, t);
    });
  }
  /**
   * Access operations for a specific index within this bucket
   * Returns a scoped client for vector data operations
   *
   * @param indexName - Name of the index
   * @returns Index-scoped client with vector data operations
   *
   * @example
   * ```typescript
   * const index = client.bucket('embeddings-prod').index('documents-openai')
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
    return new wh(this.url, this.headers, this.vectorBucketName, t, this.fetch);
  }
}
class wh extends gh {
  constructor(t, e, r, i, s) {
    super(t, e, s), this.vectorBucketName = r, this.indexName = i;
  }
  /**
   * Inserts or updates vectors in this index
   * Convenience method that automatically includes bucket and index names
   *
   * @param options - Vector insertion options (bucket and index names automatically set)
   * @returns Promise with empty response on success or error
   *
   * @example
   * ```typescript
   * const index = client.bucket('embeddings-prod').index('documents-openai')
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
  putVectors(t) {
    const e = Object.create(null, {
      putVectors: { get: () => super.putVectors }
    });
    return O(this, void 0, void 0, function* () {
      return e.putVectors.call(this, Object.assign(Object.assign({}, t), { vectorBucketName: this.vectorBucketName, indexName: this.indexName }));
    });
  }
  /**
   * Retrieves vectors by keys from this index
   * Convenience method that automatically includes bucket and index names
   *
   * @param options - Vector retrieval options (bucket and index names automatically set)
   * @returns Promise with array of vectors or error
   *
   * @example
   * ```typescript
   * const index = client.bucket('embeddings-prod').index('documents-openai')
   * const { data } = await index.getVectors({
   *   keys: ['doc-1', 'doc-2'],
   *   returnMetadata: true
   * })
   * ```
   */
  getVectors(t) {
    const e = Object.create(null, {
      getVectors: { get: () => super.getVectors }
    });
    return O(this, void 0, void 0, function* () {
      return e.getVectors.call(this, Object.assign(Object.assign({}, t), { vectorBucketName: this.vectorBucketName, indexName: this.indexName }));
    });
  }
  /**
   * Lists vectors in this index with pagination
   * Convenience method that automatically includes bucket and index names
   *
   * @param options - Listing options (bucket and index names automatically set)
   * @returns Promise with array of vectors and pagination token
   *
   * @example
   * ```typescript
   * const index = client.bucket('embeddings-prod').index('documents-openai')
   * const { data } = await index.listVectors({
   *   maxResults: 500,
   *   returnMetadata: true
   * })
   * ```
   */
  listVectors() {
    const t = Object.create(null, {
      listVectors: { get: () => super.listVectors }
    });
    return O(this, arguments, void 0, function* (e = {}) {
      return t.listVectors.call(this, Object.assign(Object.assign({}, e), { vectorBucketName: this.vectorBucketName, indexName: this.indexName }));
    });
  }
  /**
   * Queries for similar vectors in this index
   * Convenience method that automatically includes bucket and index names
   *
   * @param options - Query options (bucket and index names automatically set)
   * @returns Promise with array of similar vectors ordered by distance
   *
   * @example
   * ```typescript
   * const index = client.bucket('embeddings-prod').index('documents-openai')
   * const { data } = await index.queryVectors({
   *   queryVector: { float32: [0.1, 0.2, ...] },
   *   topK: 5,
   *   filter: { category: 'technical' },
   *   returnDistance: true,
   *   returnMetadata: true
   * })
   * ```
   */
  queryVectors(t) {
    const e = Object.create(null, {
      queryVectors: { get: () => super.queryVectors }
    });
    return O(this, void 0, void 0, function* () {
      return e.queryVectors.call(this, Object.assign(Object.assign({}, t), { vectorBucketName: this.vectorBucketName, indexName: this.indexName }));
    });
  }
  /**
   * Deletes vectors by keys from this index
   * Convenience method that automatically includes bucket and index names
   *
   * @param options - Deletion options (bucket and index names automatically set)
   * @returns Promise with empty response on success or error
   *
   * @example
   * ```typescript
   * const index = client.bucket('embeddings-prod').index('documents-openai')
   * await index.deleteVectors({
   *   keys: ['doc-1', 'doc-2', 'doc-3']
   * })
   * ```
   */
  deleteVectors(t) {
    const e = Object.create(null, {
      deleteVectors: { get: () => super.deleteVectors }
    });
    return O(this, void 0, void 0, function* () {
      return e.deleteVectors.call(this, Object.assign(Object.assign({}, t), { vectorBucketName: this.vectorBucketName, indexName: this.indexName }));
    });
  }
}
class vh extends oh {
  constructor(t, e = {}, r, i) {
    super(t, e, r, i);
  }
  /**
   * Perform file operation in a bucket.
   *
   * @param id The bucket id to operate on.
   */
  from(t) {
    return new ah(this.url, this.headers, t, this.fetch);
  }
  /**
   * Access vector storage operations.
   *
   * @returns A StorageVectorsClient instance configured with the current storage settings.
   */
  get vectors() {
    return new bh(this.url + "/vector", {
      headers: this.headers,
      fetch: this.fetch
    });
  }
  /**
   * Access analytics storage operations using Iceberg tables.
   *
   * @returns A StorageAnalyticsApi instance configured with the current storage settings.
   * @example
   * ```typescript
   * const client = createClient(url, key)
   * const analytics = client.storage.analytics
   *
   * // Create an analytics bucket
   * await analytics.createBucket('my-analytics-bucket')
   *
   * // List all analytics buckets
   * const { data: buckets } = await analytics.listBuckets()
   *
   * // Delete an analytics bucket
   * await analytics.deleteBucket('old-analytics-bucket')
   * ```
   */
  get analytics() {
    return new lh(this.url + "/iceberg", this.headers, this.fetch);
  }
}
const _h = "2.76.1";
let yt = "";
typeof Deno < "u" ? yt = "deno" : typeof document < "u" ? yt = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? yt = "react-native" : yt = "node";
const kh = { "X-Client-Info": `supabase-js-${yt}/${_h}` }, Sh = {
  headers: kh
}, Eh = {
  schema: "public"
}, xh = {
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  flowType: "implicit"
}, Th = {}, Ch = (n) => {
  let t;
  return n ? t = n : typeof fetch > "u" ? t = es : t = fetch, (...e) => t(...e);
}, Ah = () => typeof Headers > "u" ? ts : Headers, Oh = (n, t, e) => {
  const r = Ch(e), i = Ah();
  return async (s, a) => {
    var o;
    const l = (o = await t()) !== null && o !== void 0 ? o : n;
    let u = new i(a == null ? void 0 : a.headers);
    return u.has("apikey") || u.set("apikey", n), u.has("Authorization") || u.set("Authorization", `Bearer ${l}`), r(s, Object.assign(Object.assign({}, a), { headers: u }));
  };
};
function Ph(n) {
  return n.endsWith("/") ? n : n + "/";
}
function Ih(n, t) {
  var e, r;
  const { db: i, auth: s, realtime: a, global: o } = n, { db: l, auth: u, realtime: h, global: c } = t, f = {
    db: Object.assign(Object.assign({}, l), i),
    auth: Object.assign(Object.assign({}, u), s),
    realtime: Object.assign(Object.assign({}, h), a),
    storage: {},
    global: Object.assign(Object.assign(Object.assign({}, c), o), { headers: Object.assign(Object.assign({}, (e = c == null ? void 0 : c.headers) !== null && e !== void 0 ? e : {}), (r = o == null ? void 0 : o.headers) !== null && r !== void 0 ? r : {}) }),
    accessToken: async () => ""
  };
  return n.accessToken ? f.accessToken = n.accessToken : delete f.accessToken, f;
}
function Rh(n) {
  const t = n == null ? void 0 : n.trim();
  if (!t)
    throw new Error("supabaseUrl is required.");
  if (!t.match(/^https?:\/\//i))
    throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(Ph(t));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
const gs = "2.76.1", nt = 30 * 1e3, Mn = 3, vn = Mn * nt, jh = "http://localhost:9999", Lh = "supabase.auth.token", Dh = { "X-Client-Info": `gotrue-js/${gs}` }, qn = "X-Supabase-Api-Version", ms = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
}, $h = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, Nh = 600 * 1e3;
class dt extends Error {
  constructor(t, e, r) {
    super(t), this.__isAuthError = !0, this.name = "AuthError", this.status = e, this.code = r;
  }
}
function j(n) {
  return typeof n == "object" && n !== null && "__isAuthError" in n;
}
class bs extends dt {
  constructor(t, e, r) {
    super(t, e, r), this.name = "AuthApiError", this.status = e, this.code = r;
  }
}
function ys(n) {
  return j(n) && n.name === "AuthApiError";
}
class Ue extends dt {
  constructor(t, e) {
    super(t), this.name = "AuthUnknownError", this.originalError = e;
  }
}
class De extends dt {
  constructor(t, e, r, i) {
    super(t, r, i), this.name = e, this.status = r;
  }
}
class Re extends De {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function ws(n) {
  return j(n) && n.name === "AuthSessionMissingError";
}
class He extends De {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class wt extends De {
  constructor(t) {
    super(t, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class vt extends De {
  constructor(t, e = null) {
    super(t, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = e;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
function vs(n) {
  return j(n) && n.name === "AuthImplicitGrantRedirectError";
}
class Wn extends De {
  constructor(t, e = null) {
    super(t, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = e;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
class Qt extends De {
  constructor(t, e) {
    super(t, "AuthRetryableFetchError", e, void 0);
  }
}
function zt(n) {
  return j(n) && n.name === "AuthRetryableFetchError";
}
class Hn extends De {
  constructor(t, e, r) {
    super(t, "AuthWeakPasswordError", e, "weak_password"), this.reasons = r;
  }
}
class Xt extends De {
  constructor(t) {
    super(t, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const Zt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), zr = `
\r=`.split(""), Bh = (() => {
  const n = new Array(128);
  for (let t = 0; t < n.length; t += 1)
    n[t] = -1;
  for (let t = 0; t < zr.length; t += 1)
    n[zr[t].charCodeAt(0)] = -2;
  for (let t = 0; t < Zt.length; t += 1)
    n[Zt[t].charCodeAt(0)] = t;
  return n;
})();
function Mr(n, t, e) {
  if (n !== null)
    for (t.queue = t.queue << 8 | n, t.queuedBits += 8; t.queuedBits >= 6; ) {
      const r = t.queue >> t.queuedBits - 6 & 63;
      e(Zt[r]), t.queuedBits -= 6;
    }
  else if (t.queuedBits > 0)
    for (t.queue = t.queue << 6 - t.queuedBits, t.queuedBits = 6; t.queuedBits >= 6; ) {
      const r = t.queue >> t.queuedBits - 6 & 63;
      e(Zt[r]), t.queuedBits -= 6;
    }
}
function _s(n, t, e) {
  const r = Bh[n];
  if (r > -1)
    for (t.queue = t.queue << 6 | r, t.queuedBits += 6; t.queuedBits >= 8; )
      e(t.queue >> t.queuedBits - 8 & 255), t.queuedBits -= 8;
  else {
    if (r === -2)
      return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(n)}"`);
  }
}
function qr(n) {
  const t = [], e = (a) => {
    t.push(String.fromCodePoint(a));
  }, r = {
    utf8seq: 0,
    codepoint: 0
  }, i = { queue: 0, queuedBits: 0 }, s = (a) => {
    zh(a, r, e);
  };
  for (let a = 0; a < n.length; a += 1)
    _s(n.charCodeAt(a), i, s);
  return t.join("");
}
function Uh(n, t) {
  if (n <= 127) {
    t(n);
    return;
  } else if (n <= 2047) {
    t(192 | n >> 6), t(128 | n & 63);
    return;
  } else if (n <= 65535) {
    t(224 | n >> 12), t(128 | n >> 6 & 63), t(128 | n & 63);
    return;
  } else if (n <= 1114111) {
    t(240 | n >> 18), t(128 | n >> 12 & 63), t(128 | n >> 6 & 63), t(128 | n & 63);
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${n.toString(16)}`);
}
function Fh(n, t) {
  for (let e = 0; e < n.length; e += 1) {
    let r = n.charCodeAt(e);
    if (r > 55295 && r <= 56319) {
      const i = (r - 55296) * 1024 & 65535;
      r = (n.charCodeAt(e + 1) - 56320 & 65535 | i) + 65536, e += 1;
    }
    Uh(r, t);
  }
}
function zh(n, t, e) {
  if (t.utf8seq === 0) {
    if (n <= 127) {
      e(n);
      return;
    }
    for (let r = 1; r < 6; r += 1)
      if ((n >> 7 - r & 1) === 0) {
        t.utf8seq = r;
        break;
      }
    if (t.utf8seq === 2)
      t.codepoint = n & 31;
    else if (t.utf8seq === 3)
      t.codepoint = n & 15;
    else if (t.utf8seq === 4)
      t.codepoint = n & 7;
    else
      throw new Error("Invalid UTF-8 sequence");
    t.utf8seq -= 1;
  } else if (t.utf8seq > 0) {
    if (n <= 127)
      throw new Error("Invalid UTF-8 sequence");
    t.codepoint = t.codepoint << 6 | n & 63, t.utf8seq -= 1, t.utf8seq === 0 && e(t.codepoint);
  }
}
function lt(n) {
  const t = [], e = { queue: 0, queuedBits: 0 }, r = (i) => {
    t.push(i);
  };
  for (let i = 0; i < n.length; i += 1)
    _s(n.charCodeAt(i), e, r);
  return new Uint8Array(t);
}
function Mh(n) {
  const t = [];
  return Fh(n, (e) => t.push(e)), new Uint8Array(t);
}
function Ye(n) {
  const t = [], e = { queue: 0, queuedBits: 0 }, r = (i) => {
    t.push(i);
  };
  return n.forEach((i) => Mr(i, e, r)), Mr(null, e, r), t.join("");
}
function qh(n) {
  return Math.round(Date.now() / 1e3) + n;
}
function Wh() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(n) {
    const t = Math.random() * 16 | 0;
    return (n == "x" ? t : t & 3 | 8).toString(16);
  });
}
const ge = () => typeof window < "u" && typeof document < "u", qe = {
  tested: !1,
  writable: !1
}, ks = () => {
  if (!ge())
    return !1;
  try {
    if (typeof globalThis.localStorage != "object")
      return !1;
  } catch {
    return !1;
  }
  if (qe.tested)
    return qe.writable;
  const n = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(n, n), globalThis.localStorage.removeItem(n), qe.tested = !0, qe.writable = !0;
  } catch {
    qe.tested = !0, qe.writable = !1;
  }
  return qe.writable;
};
function Hh(n) {
  const t = {}, e = new URL(n);
  if (e.hash && e.hash[0] === "#")
    try {
      new URLSearchParams(e.hash.substring(1)).forEach((i, s) => {
        t[s] = i;
      });
    } catch {
    }
  return e.searchParams.forEach((r, i) => {
    t[i] = r;
  }), t;
}
const Ss = (n) => {
  let t;
  return n ? t = n : typeof fetch > "u" ? t = (...e) => Promise.resolve().then(() => Qe).then(({ default: r }) => r(...e)) : t = fetch, (...e) => t(...e);
}, Vh = (n) => typeof n == "object" && n !== null && "status" in n && "ok" in n && "json" in n && typeof n.json == "function", rt = async (n, t, e) => {
  await n.setItem(t, JSON.stringify(e));
}, We = async (n, t) => {
  const e = await n.getItem(t);
  if (!e)
    return null;
  try {
    return JSON.parse(e);
  } catch {
    return e;
  }
}, Be = async (n, t) => {
  await n.removeItem(t);
};
class ln {
  constructor() {
    this.promise = new ln.promiseConstructor((t, e) => {
      this.resolve = t, this.reject = e;
    });
  }
}
ln.promiseConstructor = Promise;
function _n(n) {
  const t = n.split(".");
  if (t.length !== 3)
    throw new Xt("Invalid JWT structure");
  for (let r = 0; r < t.length; r++)
    if (!$h.test(t[r]))
      throw new Xt("JWT not in base64url format");
  return {
    // using base64url lib
    header: JSON.parse(qr(t[0])),
    payload: JSON.parse(qr(t[1])),
    signature: lt(t[2]),
    raw: {
      header: t[0],
      payload: t[1]
    }
  };
}
async function Kh(n) {
  return await new Promise((t) => {
    setTimeout(() => t(null), n);
  });
}
function Gh(n, t) {
  return new Promise((r, i) => {
    (async () => {
      for (let s = 0; s < 1 / 0; s++)
        try {
          const a = await n(s);
          if (!t(s, null, a)) {
            r(a);
            return;
          }
        } catch (a) {
          if (!t(s, a)) {
            i(a);
            return;
          }
        }
    })();
  });
}
function Jh(n) {
  return ("0" + n.toString(16)).substr(-2);
}
function Yh() {
  const t = new Uint32Array(56);
  if (typeof crypto > "u") {
    const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", r = e.length;
    let i = "";
    for (let s = 0; s < 56; s++)
      i += e.charAt(Math.floor(Math.random() * r));
    return i;
  }
  return crypto.getRandomValues(t), Array.from(t, Jh).join("");
}
async function Qh(n) {
  const e = new TextEncoder().encode(n), r = await crypto.subtle.digest("SHA-256", e), i = new Uint8Array(r);
  return Array.from(i).map((s) => String.fromCharCode(s)).join("");
}
async function Xh(n) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), n;
  const e = await Qh(n);
  return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function Xe(n, t, e = !1) {
  const r = Yh();
  let i = r;
  e && (i += "/PASSWORD_RECOVERY"), await rt(n, `${t}-code-verifier`, i);
  const s = await Xh(r);
  return [s, r === s ? "plain" : "s256"];
}
const Zh = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function ec(n) {
  const t = n.headers.get(qn);
  if (!t || !t.match(Zh))
    return null;
  try {
    return /* @__PURE__ */ new Date(`${t}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function tc(n) {
  if (!n)
    throw new Error("Missing exp claim");
  const t = Math.floor(Date.now() / 1e3);
  if (n <= t)
    throw new Error("JWT has expired");
}
function nc(n) {
  switch (n) {
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
const rc = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function Ze(n) {
  if (!rc.test(n))
    throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
}
function kn() {
  const n = {};
  return new Proxy(n, {
    get: (t, e) => {
      if (e === "__isUserNotAvailableProxy")
        return !0;
      if (typeof e == "symbol") {
        const r = e.toString();
        if (r === "Symbol(Symbol.toPrimitive)" || r === "Symbol(Symbol.toStringTag)" || r === "Symbol(util.inspect.custom)")
          return;
      }
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${e}" property of the session object is not supported. Please use getUser() instead.`);
    },
    set: (t, e) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${e}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    },
    deleteProperty: (t, e) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${e}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    }
  });
}
function Wr(n) {
  return JSON.parse(JSON.stringify(n));
}
const Ve = (n) => n.msg || n.message || n.error_description || n.error || JSON.stringify(n), ic = [502, 503, 504];
async function Hr(n) {
  var t;
  if (!Vh(n))
    throw new Qt(Ve(n), 0);
  if (ic.includes(n.status))
    throw new Qt(Ve(n), n.status);
  let e;
  try {
    e = await n.json();
  } catch (s) {
    throw new Ue(Ve(s), s);
  }
  let r;
  const i = ec(n);
  if (i && i.getTime() >= ms["2024-01-01"].timestamp && typeof e == "object" && e && typeof e.code == "string" ? r = e.code : typeof e == "object" && e && typeof e.error_code == "string" && (r = e.error_code), r) {
    if (r === "weak_password")
      throw new Hn(Ve(e), n.status, ((t = e.weak_password) === null || t === void 0 ? void 0 : t.reasons) || []);
    if (r === "session_not_found")
      throw new Re();
  } else if (typeof e == "object" && e && typeof e.weak_password == "object" && e.weak_password && Array.isArray(e.weak_password.reasons) && e.weak_password.reasons.length && e.weak_password.reasons.reduce((s, a) => s && typeof a == "string", !0))
    throw new Hn(Ve(e), n.status, e.weak_password.reasons);
  throw new bs(Ve(e), n.status || 500, r);
}
const sc = (n, t, e, r) => {
  const i = { method: n, headers: (t == null ? void 0 : t.headers) || {} };
  return n === "GET" ? i : (i.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, t == null ? void 0 : t.headers), i.body = JSON.stringify(r), Object.assign(Object.assign({}, i), e));
};
async function $(n, t, e, r) {
  var i;
  const s = Object.assign({}, r == null ? void 0 : r.headers);
  s[qn] || (s[qn] = ms["2024-01-01"].name), r != null && r.jwt && (s.Authorization = `Bearer ${r.jwt}`);
  const a = (i = r == null ? void 0 : r.query) !== null && i !== void 0 ? i : {};
  r != null && r.redirectTo && (a.redirect_to = r.redirectTo);
  const o = Object.keys(a).length ? "?" + new URLSearchParams(a).toString() : "", l = await ac(n, t, e + o, {
    headers: s,
    noResolveJson: r == null ? void 0 : r.noResolveJson
  }, {}, r == null ? void 0 : r.body);
  return r != null && r.xform ? r == null ? void 0 : r.xform(l) : { data: Object.assign({}, l), error: null };
}
async function ac(n, t, e, r, i, s) {
  const a = sc(t, r, i, s);
  let o;
  try {
    o = await n(e, Object.assign({}, a));
  } catch (l) {
    throw console.error(l), new Qt(Ve(l), 0);
  }
  if (o.ok || await Hr(o), r != null && r.noResolveJson)
    return o;
  try {
    return await o.json();
  } catch (l) {
    await Hr(l);
  }
}
function _e(n) {
  var t;
  let e = null;
  uc(n) && (e = Object.assign({}, n), n.expires_at || (e.expires_at = qh(n.expires_in)));
  const r = (t = n.user) !== null && t !== void 0 ? t : n;
  return { data: { session: e, user: r }, error: null };
}
function Vr(n) {
  const t = _e(n);
  return !t.error && n.weak_password && typeof n.weak_password == "object" && Array.isArray(n.weak_password.reasons) && n.weak_password.reasons.length && n.weak_password.message && typeof n.weak_password.message == "string" && n.weak_password.reasons.reduce((e, r) => e && typeof r == "string", !0) && (t.data.weak_password = n.weak_password), t;
}
function Fe(n) {
  var t;
  return { data: { user: (t = n.user) !== null && t !== void 0 ? t : n }, error: null };
}
function oc(n) {
  return { data: n, error: null };
}
function lc(n) {
  const { action_link: t, email_otp: e, hashed_token: r, redirect_to: i, verification_type: s } = n, a = pt(n, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), o = {
    action_link: t,
    email_otp: e,
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
function Kr(n) {
  return n;
}
function uc(n) {
  return n.access_token && n.refresh_token && n.expires_in;
}
const Mt = ["global", "local", "others"];
class Es {
  constructor({ url: t = "", headers: e = {}, fetch: r }) {
    this.url = t, this.headers = e, this.fetch = Ss(r), this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    }, this.oauth = {
      listClients: this._listOAuthClients.bind(this),
      createClient: this._createOAuthClient.bind(this),
      getClient: this._getOAuthClient.bind(this),
      deleteClient: this._deleteOAuthClient.bind(this),
      regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this)
    };
  }
  /**
   * Removes a logged-in session.
   * @param jwt A valid, logged-in JWT.
   * @param scope The logout sope.
   */
  async signOut(t, e = Mt[0]) {
    if (Mt.indexOf(e) < 0)
      throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Mt.join(", ")}`);
    try {
      return await $(this.fetch, "POST", `${this.url}/logout?scope=${e}`, {
        headers: this.headers,
        jwt: t,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (r) {
      if (j(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Sends an invite link to an email address.
   * @param email The email address of the user.
   * @param options Additional options to be included when inviting.
   */
  async inviteUserByEmail(t, e = {}) {
    try {
      return await $(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: t, data: e.data },
        headers: this.headers,
        redirectTo: e.redirectTo,
        xform: Fe
      });
    } catch (r) {
      if (j(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Generates email links and OTPs to be sent via a custom email provider.
   * @param email The user's email.
   * @param options.password User password. For signup only.
   * @param options.data Optional user metadata. For signup only.
   * @param options.redirectTo The redirect url which should be appended to the generated link
   */
  async generateLink(t) {
    try {
      const { options: e } = t, r = pt(t, ["options"]), i = Object.assign(Object.assign({}, r), e);
      return "newEmail" in r && (i.new_email = r == null ? void 0 : r.newEmail, delete i.newEmail), await $(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: i,
        headers: this.headers,
        xform: lc,
        redirectTo: e == null ? void 0 : e.redirectTo
      });
    } catch (e) {
      if (j(e))
        return {
          data: {
            properties: null,
            user: null
          },
          error: e
        };
      throw e;
    }
  }
  // User Admin API
  /**
   * Creates a new user.
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async createUser(t) {
    try {
      return await $(this.fetch, "POST", `${this.url}/admin/users`, {
        body: t,
        headers: this.headers,
        xform: Fe
      });
    } catch (e) {
      if (j(e))
        return { data: { user: null }, error: e };
      throw e;
    }
  }
  /**
   * Get a list of users.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
   */
  async listUsers(t) {
    var e, r, i, s, a, o, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 }, h = await $(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (r = (e = t == null ? void 0 : t.page) === null || e === void 0 ? void 0 : e.toString()) !== null && r !== void 0 ? r : "",
          per_page: (s = (i = t == null ? void 0 : t.perPage) === null || i === void 0 ? void 0 : i.toString()) !== null && s !== void 0 ? s : ""
        },
        xform: Kr
      });
      if (h.error)
        throw h.error;
      const c = await h.json(), f = (a = h.headers.get("x-total-count")) !== null && a !== void 0 ? a : 0, d = (l = (o = h.headers.get("link")) === null || o === void 0 ? void 0 : o.split(",")) !== null && l !== void 0 ? l : [];
      return d.length > 0 && (d.forEach((p) => {
        const b = parseInt(p.split(";")[0].split("=")[1].substring(0, 1)), y = JSON.parse(p.split(";")[1].split("=")[1]);
        u[`${y}Page`] = b;
      }), u.total = parseInt(f)), { data: Object.assign(Object.assign({}, c), u), error: null };
    } catch (u) {
      if (j(u))
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
   */
  async getUserById(t) {
    Ze(t);
    try {
      return await $(this.fetch, "GET", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        xform: Fe
      });
    } catch (e) {
      if (j(e))
        return { data: { user: null }, error: e };
      throw e;
    }
  }
  /**
   * Updates the user data.
   *
   * @param attributes The data you want to update.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async updateUserById(t, e) {
    Ze(t);
    try {
      return await $(this.fetch, "PUT", `${this.url}/admin/users/${t}`, {
        body: e,
        headers: this.headers,
        xform: Fe
      });
    } catch (r) {
      if (j(r))
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
   */
  async deleteUser(t, e = !1) {
    Ze(t);
    try {
      return await $(this.fetch, "DELETE", `${this.url}/admin/users/${t}`, {
        headers: this.headers,
        body: {
          should_soft_delete: e
        },
        xform: Fe
      });
    } catch (r) {
      if (j(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  async _listFactors(t) {
    Ze(t.userId);
    try {
      const { data: e, error: r } = await $(this.fetch, "GET", `${this.url}/admin/users/${t.userId}/factors`, {
        headers: this.headers,
        xform: (i) => ({ data: { factors: i }, error: null })
      });
      return { data: e, error: r };
    } catch (e) {
      if (j(e))
        return { data: null, error: e };
      throw e;
    }
  }
  async _deleteFactor(t) {
    Ze(t.userId), Ze(t.id);
    try {
      return { data: await $(this.fetch, "DELETE", `${this.url}/admin/users/${t.userId}/factors/${t.id}`, {
        headers: this.headers
      }), error: null };
    } catch (e) {
      if (j(e))
        return { data: null, error: e };
      throw e;
    }
  }
  /**
   * Lists all OAuth clients with optional pagination.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _listOAuthClients(t) {
    var e, r, i, s, a, o, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 }, h = await $(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (r = (e = t == null ? void 0 : t.page) === null || e === void 0 ? void 0 : e.toString()) !== null && r !== void 0 ? r : "",
          per_page: (s = (i = t == null ? void 0 : t.perPage) === null || i === void 0 ? void 0 : i.toString()) !== null && s !== void 0 ? s : ""
        },
        xform: Kr
      });
      if (h.error)
        throw h.error;
      const c = await h.json(), f = (a = h.headers.get("x-total-count")) !== null && a !== void 0 ? a : 0, d = (l = (o = h.headers.get("link")) === null || o === void 0 ? void 0 : o.split(",")) !== null && l !== void 0 ? l : [];
      return d.length > 0 && (d.forEach((p) => {
        const b = parseInt(p.split(";")[0].split("=")[1].substring(0, 1)), y = JSON.parse(p.split(";")[1].split("=")[1]);
        u[`${y}Page`] = b;
      }), u.total = parseInt(f)), { data: Object.assign(Object.assign({}, c), u), error: null };
    } catch (u) {
      if (j(u))
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
  async _createOAuthClient(t) {
    try {
      return await $(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: t,
        headers: this.headers,
        xform: (e) => ({ data: e, error: null })
      });
    } catch (e) {
      if (j(e))
        return { data: null, error: e };
      throw e;
    }
  }
  /**
   * Gets details of a specific OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _getOAuthClient(t) {
    try {
      return await $(this.fetch, "GET", `${this.url}/admin/oauth/clients/${t}`, {
        headers: this.headers,
        xform: (e) => ({ data: e, error: null })
      });
    } catch (e) {
      if (j(e))
        return { data: null, error: e };
      throw e;
    }
  }
  /**
   * Deletes an OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _deleteOAuthClient(t) {
    try {
      return await $(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${t}`, {
        headers: this.headers,
        xform: (e) => ({ data: e, error: null })
      });
    } catch (e) {
      if (j(e))
        return { data: null, error: e };
      throw e;
    }
  }
  /**
   * Regenerates the secret for an OAuth client.
   * Only relevant when the OAuth 2.1 server is enabled in Supabase Auth.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async _regenerateOAuthClientSecret(t) {
    try {
      return await $(this.fetch, "POST", `${this.url}/admin/oauth/clients/${t}/regenerate_secret`, {
        headers: this.headers,
        xform: (e) => ({ data: e, error: null })
      });
    } catch (e) {
      if (j(e))
        return { data: null, error: e };
      throw e;
    }
  }
}
function Gr(n = {}) {
  return {
    getItem: (t) => n[t] || null,
    setItem: (t, e) => {
      n[t] = e;
    },
    removeItem: (t) => {
      delete n[t];
    }
  };
}
const Ke = {
  /**
   * @experimental
   */
  debug: !!(globalThis && ks() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class xs extends Error {
  constructor(t) {
    super(t), this.isAcquireTimeout = !0;
  }
}
class Ts extends xs {
}
async function Cs(n, t, e) {
  Ke.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", n, t);
  const r = new globalThis.AbortController();
  return t > 0 && setTimeout(() => {
    r.abort(), Ke.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", n);
  }, t), await Promise.resolve().then(() => globalThis.navigator.locks.request(n, t === 0 ? {
    mode: "exclusive",
    ifAvailable: !0
  } : {
    mode: "exclusive",
    signal: r.signal
  }, async (i) => {
    if (i) {
      Ke.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", n, i.name);
      try {
        return await e();
      } finally {
        Ke.debug && console.log("@supabase/gotrue-js: navigatorLock: released", n, i.name);
      }
    } else {
      if (t === 0)
        throw Ke.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", n), new Ts(`Acquiring an exclusive Navigator LockManager lock "${n}" immediately failed`);
      if (Ke.debug)
        try {
          const s = await globalThis.navigator.locks.query();
          console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(s, null, "  "));
        } catch (s) {
          console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", s);
        }
      return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), await e();
    }
  }));
}
function hc() {
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
function As(n) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(n))
    throw new Error(`@supabase/auth-js: Address "${n}" is invalid.`);
  return n.toLowerCase();
}
function cc(n) {
  return parseInt(n, 16);
}
function dc(n) {
  const t = new TextEncoder().encode(n);
  return "0x" + Array.from(t, (r) => r.toString(16).padStart(2, "0")).join("");
}
function fc(n) {
  var t;
  const { chainId: e, domain: r, expirationTime: i, issuedAt: s = /* @__PURE__ */ new Date(), nonce: a, notBefore: o, requestId: l, resources: u, scheme: h, uri: c, version: f } = n;
  {
    if (!Number.isInteger(e))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${e}`);
    if (!r)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');
    if (a && a.length < 8)
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);
    if (!c)
      throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');
    if (f !== "1")
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${f}`);
    if (!((t = n.statement) === null || t === void 0) && t.includes(`
`))
      throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${n.statement}`);
  }
  const d = As(n.address), p = h ? `${h}://${r}` : r, b = n.statement ? `${n.statement}
` : "", y = `${p} wants you to sign in with your Ethereum account:
${d}

${b}`;
  let w = `URI: ${c}
Version: ${f}
Chain ID: ${e}${a ? `
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
  return `${y}
${w}`;
}
class te extends Error {
  constructor({ message: t, code: e, cause: r, name: i }) {
    var s;
    super(t, { cause: r }), this.__isWebAuthnError = !0, this.name = (s = i ?? (r instanceof Error ? r.name : void 0)) !== null && s !== void 0 ? s : "Unknown Error", this.code = e;
  }
}
class en extends te {
  constructor(t, e) {
    super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: e,
      message: t
    }), this.name = "WebAuthnUnknownError", this.originalError = e;
  }
}
function pc({ error: n, options: t }) {
  var e, r, i;
  const { publicKey: s } = t;
  if (!s)
    throw Error("options was missing required publicKey property");
  if (n.name === "AbortError") {
    if (t.signal instanceof AbortSignal)
      return new te({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: n
      });
  } else if (n.name === "ConstraintError") {
    if (((e = s.authenticatorSelection) === null || e === void 0 ? void 0 : e.requireResidentKey) === !0)
      return new te({
        message: "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: n
      });
    if (
      // @ts-ignore: `mediation` doesn't yet exist on CredentialCreationOptions but it's possible as of Sept 2024
      t.mediation === "conditional" && ((r = s.authenticatorSelection) === null || r === void 0 ? void 0 : r.userVerification) === "required"
    )
      return new te({
        message: "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: n
      });
    if (((i = s.authenticatorSelection) === null || i === void 0 ? void 0 : i.userVerification) === "required")
      return new te({
        message: "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: n
      });
  } else {
    if (n.name === "InvalidStateError")
      return new te({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: n
      });
    if (n.name === "NotAllowedError")
      return new te({
        message: n.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: n
      });
    if (n.name === "NotSupportedError")
      return s.pubKeyCredParams.filter((o) => o.type === "public-key").length === 0 ? new te({
        message: 'No entry in pubKeyCredParams was of type "public-key"',
        code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
        cause: n
      }) : new te({
        message: "No available authenticator supported any of the specified pubKeyCredParams algorithms",
        code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
        cause: n
      });
    if (n.name === "SecurityError") {
      const a = window.location.hostname;
      if (Os(a)) {
        if (s.rp.id !== a)
          return new te({
            message: `The RP ID "${s.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: n
          });
      } else return new te({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: n
      });
    } else if (n.name === "TypeError") {
      if (s.user.id.byteLength < 1 || s.user.id.byteLength > 64)
        return new te({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: n
        });
    } else if (n.name === "UnknownError")
      return new te({
        message: "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: n
      });
  }
  return new te({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: n
  });
}
function gc({ error: n, options: t }) {
  const { publicKey: e } = t;
  if (!e)
    throw Error("options was missing required publicKey property");
  if (n.name === "AbortError") {
    if (t.signal instanceof AbortSignal)
      return new te({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: n
      });
  } else {
    if (n.name === "NotAllowedError")
      return new te({
        message: n.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: n
      });
    if (n.name === "SecurityError") {
      const r = window.location.hostname;
      if (Os(r)) {
        if (e.rpId !== r)
          return new te({
            message: `The RP ID "${e.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: n
          });
      } else return new te({
        message: `${window.location.hostname} is an invalid domain`,
        code: "ERROR_INVALID_DOMAIN",
        cause: n
      });
    } else if (n.name === "UnknownError")
      return new te({
        message: "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: n
      });
  }
  return new te({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: n
  });
}
class mc {
  /**
   * Create an abort signal for a new WebAuthn operation.
   * Automatically cancels any existing operation.
   *
   * @returns {AbortSignal} Signal to pass to navigator.credentials.create() or .get()
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal MDN - AbortSignal}
   */
  createNewAbortSignal() {
    if (this.controller) {
      const e = new Error("Cancelling existing WebAuthn API call for new one");
      e.name = "AbortError", this.controller.abort(e);
    }
    const t = new AbortController();
    return this.controller = t, t.signal;
  }
  /**
   * Manually cancel the current WebAuthn operation.
   * Useful for cleaning up when user cancels or navigates away.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort MDN - AbortController.abort}
   */
  cancelCeremony() {
    if (this.controller) {
      const t = new Error("Manually cancelling existing WebAuthn API call");
      t.name = "AbortError", this.controller.abort(t), this.controller = void 0;
    }
  }
}
const bc = new mc();
function yc(n) {
  if (!n)
    throw new Error("Credential creation options are required");
  if (typeof PublicKeyCredential < "u" && "parseCreationOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function")
    return PublicKeyCredential.parseCreationOptionsFromJSON(
      /** we assert the options here as typescript still doesn't know about future webauthn types */
      n
    );
  const { challenge: t, user: e, excludeCredentials: r } = n, i = pt(
    n,
    ["challenge", "user", "excludeCredentials"]
  ), s = lt(t).buffer, a = Object.assign(Object.assign({}, e), { id: lt(e.id).buffer }), o = Object.assign(Object.assign({}, i), {
    challenge: s,
    user: a
  });
  if (r && r.length > 0) {
    o.excludeCredentials = new Array(r.length);
    for (let l = 0; l < r.length; l++) {
      const u = r[l];
      o.excludeCredentials[l] = Object.assign(Object.assign({}, u), {
        id: lt(u.id).buffer,
        type: u.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: u.transports
      });
    }
  }
  return o;
}
function wc(n) {
  if (!n)
    throw new Error("Credential request options are required");
  if (typeof PublicKeyCredential < "u" && "parseRequestOptionsFromJSON" in PublicKeyCredential && typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function")
    return PublicKeyCredential.parseRequestOptionsFromJSON(n);
  const { challenge: t, allowCredentials: e } = n, r = pt(
    n,
    ["challenge", "allowCredentials"]
  ), i = lt(t).buffer, s = Object.assign(Object.assign({}, r), { challenge: i });
  if (e && e.length > 0) {
    s.allowCredentials = new Array(e.length);
    for (let a = 0; a < e.length; a++) {
      const o = e[a];
      s.allowCredentials[a] = Object.assign(Object.assign({}, o), {
        id: lt(o.id).buffer,
        type: o.type || "public-key",
        // Cast transports to handle future transport types like "cable"
        transports: o.transports
      });
    }
  }
  return s;
}
function vc(n) {
  var t;
  if ("toJSON" in n && typeof n.toJSON == "function")
    return n.toJSON();
  const e = n;
  return {
    id: n.id,
    rawId: n.id,
    response: {
      attestationObject: Ye(new Uint8Array(n.response.attestationObject)),
      clientDataJSON: Ye(new Uint8Array(n.response.clientDataJSON))
    },
    type: "public-key",
    clientExtensionResults: n.getClientExtensionResults(),
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (t = e.authenticatorAttachment) !== null && t !== void 0 ? t : void 0
  };
}
function _c(n) {
  var t;
  if ("toJSON" in n && typeof n.toJSON == "function")
    return n.toJSON();
  const e = n, r = n.getClientExtensionResults(), i = n.response;
  return {
    id: n.id,
    rawId: n.id,
    // W3C spec expects rawId to match id for JSON format
    response: {
      authenticatorData: Ye(new Uint8Array(i.authenticatorData)),
      clientDataJSON: Ye(new Uint8Array(i.clientDataJSON)),
      signature: Ye(new Uint8Array(i.signature)),
      userHandle: i.userHandle ? Ye(new Uint8Array(i.userHandle)) : void 0
    },
    type: "public-key",
    clientExtensionResults: r,
    // Convert null to undefined and cast to AuthenticatorAttachment type
    authenticatorAttachment: (t = e.authenticatorAttachment) !== null && t !== void 0 ? t : void 0
  };
}
function Os(n) {
  return (
    // Consider localhost valid as well since it's okay wrt Secure Contexts
    n === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(n)
  );
}
function Jr() {
  var n, t;
  return !!(ge() && "PublicKeyCredential" in window && window.PublicKeyCredential && "credentials" in navigator && typeof ((n = navigator == null ? void 0 : navigator.credentials) === null || n === void 0 ? void 0 : n.create) == "function" && typeof ((t = navigator == null ? void 0 : navigator.credentials) === null || t === void 0 ? void 0 : t.get) == "function");
}
async function kc(n) {
  try {
    const t = await navigator.credentials.create(
      /** we assert the type here until typescript types are updated */
      n
    );
    return t ? t instanceof PublicKeyCredential ? { data: t, error: null } : {
      data: null,
      error: new en("Browser returned unexpected credential type", t)
    } : {
      data: null,
      error: new en("Empty credential response", t)
    };
  } catch (t) {
    return {
      data: null,
      error: pc({
        error: t,
        options: n
      })
    };
  }
}
async function Sc(n) {
  try {
    const t = await navigator.credentials.get(
      /** we assert the type here until typescript types are updated */
      n
    );
    return t ? t instanceof PublicKeyCredential ? { data: t, error: null } : {
      data: null,
      error: new en("Browser returned unexpected credential type", t)
    } : {
      data: null,
      error: new en("Empty credential response", t)
    };
  } catch (t) {
    return {
      data: null,
      error: gc({
        error: t,
        options: n
      })
    };
  }
}
const Ec = {
  hints: ["security-key"],
  authenticatorSelection: {
    authenticatorAttachment: "cross-platform",
    requireResidentKey: !1,
    /** set to preferred because older yubikeys don't have PIN/Biometric */
    userVerification: "preferred",
    residentKey: "discouraged"
  },
  attestation: "none"
}, xc = {
  /** set to preferred because older yubikeys don't have PIN/Biometric */
  userVerification: "preferred",
  hints: ["security-key"]
};
function tn(...n) {
  const t = (i) => i !== null && typeof i == "object" && !Array.isArray(i), e = (i) => i instanceof ArrayBuffer || ArrayBuffer.isView(i), r = {};
  for (const i of n)
    if (i)
      for (const s in i) {
        const a = i[s];
        if (a !== void 0)
          if (Array.isArray(a))
            r[s] = a;
          else if (e(a))
            r[s] = a;
          else if (t(a)) {
            const o = r[s];
            t(o) ? r[s] = tn(o, a) : r[s] = tn(a);
          } else
            r[s] = a;
      }
  return r;
}
function Tc(n, t) {
  return tn(Ec, n, t || {});
}
function Cc(n, t) {
  return tn(xc, n, t || {});
}
class Ac {
  constructor(t) {
    this.client = t, this.enroll = this._enroll.bind(this), this.challenge = this._challenge.bind(this), this.verify = this._verify.bind(this), this.authenticate = this._authenticate.bind(this), this.register = this._register.bind(this);
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
  async _enroll(t) {
    return this.client.mfa.enroll(Object.assign(Object.assign({}, t), { factorType: "webauthn" }));
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
  async _challenge({ factorId: t, webauthn: e, friendlyName: r, signal: i }, s) {
    try {
      const { data: a, error: o } = await this.client.mfa.challenge({
        factorId: t,
        webauthn: e
      });
      if (!a)
        return { data: null, error: o };
      const l = i ?? bc.createNewAbortSignal();
      if (a.webauthn.type === "create") {
        const { user: u } = a.webauthn.credential_options.publicKey;
        u.name || (u.name = `${u.id}:${r}`), u.displayName || (u.displayName = u.name);
      }
      switch (a.webauthn.type) {
        case "create": {
          const u = Tc(a.webauthn.credential_options.publicKey, s == null ? void 0 : s.create), { data: h, error: c } = await kc({
            publicKey: u,
            signal: l
          });
          return h ? {
            data: {
              factorId: t,
              challengeId: a.id,
              webauthn: {
                type: a.webauthn.type,
                credential_response: h
              }
            },
            error: null
          } : { data: null, error: c };
        }
        case "request": {
          const u = Cc(a.webauthn.credential_options.publicKey, s == null ? void 0 : s.request), { data: h, error: c } = await Sc(Object.assign(Object.assign({}, a.webauthn.credential_options), { publicKey: u, signal: l }));
          return h ? {
            data: {
              factorId: t,
              challengeId: a.id,
              webauthn: {
                type: a.webauthn.type,
                credential_response: h
              }
            },
            error: null
          } : { data: null, error: c };
        }
      }
    } catch (a) {
      return j(a) ? { data: null, error: a } : {
        data: null,
        error: new Ue("Unexpected error in challenge", a)
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
  async _verify({ challengeId: t, factorId: e, webauthn: r }) {
    return this.client.mfa.verify({
      factorId: e,
      challengeId: t,
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
  async _authenticate({ factorId: t, webauthn: { rpId: e = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: r = typeof window < "u" ? [window.location.origin] : void 0, signal: i } }, s) {
    if (!e)
      return {
        data: null,
        error: new dt("rpId is required for WebAuthn authentication")
      };
    try {
      if (!Jr())
        return {
          data: null,
          error: new Ue("Browser does not support WebAuthn", null)
        };
      const { data: a, error: o } = await this.challenge({
        factorId: t,
        webauthn: { rpId: e, rpOrigins: r },
        signal: i
      }, { request: s });
      if (!a)
        return { data: null, error: o };
      const { webauthn: l } = a;
      return this._verify({
        factorId: t,
        challengeId: a.challengeId,
        webauthn: {
          type: l.type,
          rpId: e,
          rpOrigins: r,
          credential_response: l.credential_response
        }
      });
    } catch (a) {
      return j(a) ? { data: null, error: a } : {
        data: null,
        error: new Ue("Unexpected error in authenticate", a)
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
  async _register({ friendlyName: t, rpId: e = typeof window < "u" ? window.location.hostname : void 0, rpOrigins: r = typeof window < "u" ? [window.location.origin] : void 0, signal: i }, s) {
    if (!e)
      return {
        data: null,
        error: new dt("rpId is required for WebAuthn registration")
      };
    try {
      if (!Jr())
        return {
          data: null,
          error: new Ue("Browser does not support WebAuthn", null)
        };
      const { data: a, error: o } = await this._enroll({
        friendlyName: t
      });
      if (!a)
        return await this.client.mfa.listFactors().then((h) => {
          var c;
          return (c = h.data) === null || c === void 0 ? void 0 : c.all.find((f) => f.factor_type === "webauthn" && f.friendly_name === t && f.status !== "unverified");
        }).then((h) => h ? this.client.mfa.unenroll({ factorId: h == null ? void 0 : h.id }) : void 0), { data: null, error: o };
      const { data: l, error: u } = await this._challenge({
        factorId: a.id,
        friendlyName: a.friendly_name,
        webauthn: { rpId: e, rpOrigins: r },
        signal: i
      }, {
        create: s
      });
      return l ? this._verify({
        factorId: a.id,
        challengeId: l.challengeId,
        webauthn: {
          rpId: e,
          rpOrigins: r,
          type: l.webauthn.type,
          credential_response: l.webauthn.credential_response
        }
      }) : { data: null, error: u };
    } catch (a) {
      return j(a) ? { data: null, error: a } : {
        data: null,
        error: new Ue("Unexpected error in register", a)
      };
    }
  }
}
hc();
const Oc = {
  url: jh,
  storageKey: Lh,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: Dh,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1
};
async function Yr(n, t, e) {
  return await e();
}
const et = {};
class ft {
  /**
   * The JWKS used for verifying asymmetric JWTs
   */
  get jwks() {
    var t, e;
    return (e = (t = et[this.storageKey]) === null || t === void 0 ? void 0 : t.jwks) !== null && e !== void 0 ? e : { keys: [] };
  }
  set jwks(t) {
    et[this.storageKey] = Object.assign(Object.assign({}, et[this.storageKey]), { jwks: t });
  }
  get jwks_cached_at() {
    var t, e;
    return (e = (t = et[this.storageKey]) === null || t === void 0 ? void 0 : t.cachedAt) !== null && e !== void 0 ? e : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(t) {
    et[this.storageKey] = Object.assign(Object.assign({}, et[this.storageKey]), { cachedAt: t });
  }
  /**
   * Create a new client for use in the browser.
   */
  constructor(t) {
    var e, r;
    this.userStorage = null, this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log, this.instanceID = ft.nextInstanceID, ft.nextInstanceID += 1, this.instanceID > 0 && ge() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
    const i = Object.assign(Object.assign({}, Oc), t);
    if (this.logDebugMessages = !!i.debug, typeof i.debug == "function" && (this.logger = i.debug), this.persistSession = i.persistSession, this.storageKey = i.storageKey, this.autoRefreshToken = i.autoRefreshToken, this.admin = new Es({
      url: i.url,
      headers: i.headers,
      fetch: i.fetch
    }), this.url = i.url, this.headers = i.headers, this.fetch = Ss(i.fetch), this.lock = i.lock || Yr, this.detectSessionInUrl = i.detectSessionInUrl, this.flowType = i.flowType, this.hasCustomAuthorizationHeader = i.hasCustomAuthorizationHeader, i.lock ? this.lock = i.lock : ge() && (!((e = globalThis == null ? void 0 : globalThis.navigator) === null || e === void 0) && e.locks) ? this.lock = Cs : this.lock = Yr, this.jwks || (this.jwks = { keys: [] }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER), this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this),
      webauthn: new Ac(this)
    }, this.persistSession ? (i.storage ? this.storage = i.storage : ks() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = Gr(this.memoryStorage)), i.userStorage && (this.userStorage = i.userStorage)) : (this.memoryStorage = {}, this.storage = Gr(this.memoryStorage)), ge() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (s) {
        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", s);
      }
      (r = this.broadcastChannel) === null || r === void 0 || r.addEventListener("message", async (s) => {
        this._debug("received broadcast notification from other tab or client", s), await this._notifyAllSubscribers(s.data.event, s.data.session, !1);
      });
    }
    this.initialize();
  }
  _debug(...t) {
    return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${gs}) ${(/* @__PURE__ */ new Date()).toISOString()}`, ...t), this;
  }
  /**
   * Initializes the client session either from the url or from storage.
   * This method is automatically called when instantiating the client, but should also be called
   * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
   */
  async initialize() {
    return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))(), await this.initializePromise);
  }
  /**
   * IMPORTANT:
   * 1. Never throw in this method, as it is called from the constructor
   * 2. Never return a session from this method as it would be cached over
   *    the whole lifetime of the client
   */
  async _initialize() {
    var t;
    try {
      const e = Hh(window.location.href);
      let r = "none";
      if (this._isImplicitGrantCallback(e) ? r = "implicit" : await this._isPKCECallback(e) && (r = "pkce"), ge() && this.detectSessionInUrl && r !== "none") {
        const { data: i, error: s } = await this._getSessionFromURL(e, r);
        if (s) {
          if (this._debug("#_initialize()", "error detecting session from URL", s), vs(s)) {
            const l = (t = s.details) === null || t === void 0 ? void 0 : t.code;
            if (l === "identity_already_exists" || l === "identity_not_found" || l === "single_identity_not_deletable")
              return { error: s };
          }
          return await this._removeSession(), { error: s };
        }
        const { session: a, redirectType: o } = i;
        return this._debug("#_initialize()", "detected session in URL", a, "redirect type", o), await this._saveSession(a), setTimeout(async () => {
          o === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", a) : await this._notifyAllSubscribers("SIGNED_IN", a);
        }, 0), { error: null };
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (e) {
      return j(e) ? { error: e } : {
        error: new Ue("Unexpected error during initialization", e)
      };
    } finally {
      await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
    }
  }
  /**
   * Creates a new anonymous user.
   *
   * @returns A session where the is_anonymous claim in the access token JWT set to true
   */
  async signInAnonymously(t) {
    var e, r, i;
    try {
      const s = await $(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (r = (e = t == null ? void 0 : t.options) === null || e === void 0 ? void 0 : e.data) !== null && r !== void 0 ? r : {},
          gotrue_meta_security: { captcha_token: (i = t == null ? void 0 : t.options) === null || i === void 0 ? void 0 : i.captchaToken }
        },
        xform: _e
      }), { data: a, error: o } = s;
      if (o || !a)
        return { data: { user: null, session: null }, error: o };
      const l = a.session, u = a.user;
      return a.session && (await this._saveSession(a.session), await this._notifyAllSubscribers("SIGNED_IN", l)), { data: { user: u, session: l }, error: null };
    } catch (s) {
      if (j(s))
        return { data: { user: null, session: null }, error: s };
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
   */
  async signUp(t) {
    var e, r, i;
    try {
      let s;
      if ("email" in t) {
        const { email: h, password: c, options: f } = t;
        let d = null, p = null;
        this.flowType === "pkce" && ([d, p] = await Xe(this.storage, this.storageKey)), s = await $(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: f == null ? void 0 : f.emailRedirectTo,
          body: {
            email: h,
            password: c,
            data: (e = f == null ? void 0 : f.data) !== null && e !== void 0 ? e : {},
            gotrue_meta_security: { captcha_token: f == null ? void 0 : f.captchaToken },
            code_challenge: d,
            code_challenge_method: p
          },
          xform: _e
        });
      } else if ("phone" in t) {
        const { phone: h, password: c, options: f } = t;
        s = await $(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: h,
            password: c,
            data: (r = f == null ? void 0 : f.data) !== null && r !== void 0 ? r : {},
            channel: (i = f == null ? void 0 : f.channel) !== null && i !== void 0 ? i : "sms",
            gotrue_meta_security: { captcha_token: f == null ? void 0 : f.captchaToken }
          },
          xform: _e
        });
      } else
        throw new wt("You must provide either an email or phone number and a password");
      const { data: a, error: o } = s;
      if (o || !a)
        return { data: { user: null, session: null }, error: o };
      const l = a.session, u = a.user;
      return a.session && (await this._saveSession(a.session), await this._notifyAllSubscribers("SIGNED_IN", l)), { data: { user: u, session: l }, error: null };
    } catch (s) {
      if (j(s))
        return { data: { user: null, session: null }, error: s };
      throw s;
    }
  }
  /**
   * Log in an existing user with an email and password or phone and password.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or that the
   * email/phone and password combination is wrong or that the account can only
   * be accessed via social login.
   */
  async signInWithPassword(t) {
    try {
      let e;
      if ("email" in t) {
        const { email: s, password: a, options: o } = t;
        e = await $(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: s,
            password: a,
            gotrue_meta_security: { captcha_token: o == null ? void 0 : o.captchaToken }
          },
          xform: Vr
        });
      } else if ("phone" in t) {
        const { phone: s, password: a, options: o } = t;
        e = await $(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: s,
            password: a,
            gotrue_meta_security: { captcha_token: o == null ? void 0 : o.captchaToken }
          },
          xform: Vr
        });
      } else
        throw new wt("You must provide either an email or phone number and a password");
      const { data: r, error: i } = e;
      return i ? { data: { user: null, session: null }, error: i } : !r || !r.session || !r.user ? { data: { user: null, session: null }, error: new He() } : (r.session && (await this._saveSession(r.session), await this._notifyAllSubscribers("SIGNED_IN", r.session)), {
        data: Object.assign({ user: r.user, session: r.session }, r.weak_password ? { weakPassword: r.weak_password } : null),
        error: i
      });
    } catch (e) {
      if (j(e))
        return { data: { user: null, session: null }, error: e };
      throw e;
    }
  }
  /**
   * Log in an existing user via a third-party provider.
   * This method supports the PKCE flow.
   */
  async signInWithOAuth(t) {
    var e, r, i, s;
    return await this._handleProviderSignIn(t.provider, {
      redirectTo: (e = t.options) === null || e === void 0 ? void 0 : e.redirectTo,
      scopes: (r = t.options) === null || r === void 0 ? void 0 : r.scopes,
      queryParams: (i = t.options) === null || i === void 0 ? void 0 : i.queryParams,
      skipBrowserRedirect: (s = t.options) === null || s === void 0 ? void 0 : s.skipBrowserRedirect
    });
  }
  /**
   * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
   */
  async exchangeCodeForSession(t) {
    return await this.initializePromise, this._acquireLock(-1, async () => this._exchangeCodeForSession(t));
  }
  /**
   * Signs in a user by verifying a message signed by the user's private key.
   * Supports Ethereum (via Sign-In-With-Ethereum) & Solana (Sign-In-With-Solana) standards,
   * both of which derive from the EIP-4361 standard
   * With slight variation on Solana's side.
   * @reference https://eips.ethereum.org/EIPS/eip-4361
   */
  async signInWithWeb3(t) {
    const { chain: e } = t;
    switch (e) {
      case "ethereum":
        return await this.signInWithEthereum(t);
      case "solana":
        return await this.signInWithSolana(t);
      default:
        throw new Error(`@supabase/auth-js: Unsupported chain "${e}"`);
    }
  }
  async signInWithEthereum(t) {
    var e, r, i, s, a, o, l, u, h, c, f;
    let d, p;
    if ("message" in t)
      d = t.message, p = t.signature;
    else {
      const { chain: b, wallet: y, statement: w, options: k } = t;
      let _;
      if (ge())
        if (typeof y == "object")
          _ = y;
        else {
          const M = window;
          if ("ethereum" in M && typeof M.ethereum == "object" && "request" in M.ethereum && typeof M.ethereum.request == "function")
            _ = M.ethereum;
          else
            throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof y != "object" || !(k != null && k.url))
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        _ = y;
      }
      const x = new URL((e = k == null ? void 0 : k.url) !== null && e !== void 0 ? e : window.location.href), C = await _.request({
        method: "eth_requestAccounts"
      }).then((M) => M).catch(() => {
        throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid");
      });
      if (!C || C.length === 0)
        throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");
      const v = As(C[0]);
      let P = (r = k == null ? void 0 : k.signInWithEthereum) === null || r === void 0 ? void 0 : r.chainId;
      if (!P) {
        const M = await _.request({
          method: "eth_chainId"
        });
        P = cc(M);
      }
      const z = {
        domain: x.host,
        address: v,
        statement: w,
        uri: x.href,
        version: "1",
        chainId: P,
        nonce: (i = k == null ? void 0 : k.signInWithEthereum) === null || i === void 0 ? void 0 : i.nonce,
        issuedAt: (a = (s = k == null ? void 0 : k.signInWithEthereum) === null || s === void 0 ? void 0 : s.issuedAt) !== null && a !== void 0 ? a : /* @__PURE__ */ new Date(),
        expirationTime: (o = k == null ? void 0 : k.signInWithEthereum) === null || o === void 0 ? void 0 : o.expirationTime,
        notBefore: (l = k == null ? void 0 : k.signInWithEthereum) === null || l === void 0 ? void 0 : l.notBefore,
        requestId: (u = k == null ? void 0 : k.signInWithEthereum) === null || u === void 0 ? void 0 : u.requestId,
        resources: (h = k == null ? void 0 : k.signInWithEthereum) === null || h === void 0 ? void 0 : h.resources
      };
      d = fc(z), p = await _.request({
        method: "personal_sign",
        params: [dc(d), v]
      });
    }
    try {
      const { data: b, error: y } = await $(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({
          chain: "ethereum",
          message: d,
          signature: p
        }, !((c = t.options) === null || c === void 0) && c.captchaToken ? { gotrue_meta_security: { captcha_token: (f = t.options) === null || f === void 0 ? void 0 : f.captchaToken } } : null),
        xform: _e
      });
      if (y)
        throw y;
      return !b || !b.session || !b.user ? {
        data: { user: null, session: null },
        error: new He()
      } : (b.session && (await this._saveSession(b.session), await this._notifyAllSubscribers("SIGNED_IN", b.session)), { data: Object.assign({}, b), error: y });
    } catch (b) {
      if (j(b))
        return { data: { user: null, session: null }, error: b };
      throw b;
    }
  }
  async signInWithSolana(t) {
    var e, r, i, s, a, o, l, u, h, c, f, d;
    let p, b;
    if ("message" in t)
      p = t.message, b = t.signature;
    else {
      const { chain: y, wallet: w, statement: k, options: _ } = t;
      let x;
      if (ge())
        if (typeof w == "object")
          x = w;
        else {
          const v = window;
          if ("solana" in v && typeof v.solana == "object" && ("signIn" in v.solana && typeof v.solana.signIn == "function" || "signMessage" in v.solana && typeof v.solana.signMessage == "function"))
            x = v.solana;
          else
            throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof w != "object" || !(_ != null && _.url))
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        x = w;
      }
      const C = new URL((e = _ == null ? void 0 : _.url) !== null && e !== void 0 ? e : window.location.href);
      if ("signIn" in x && x.signIn) {
        const v = await x.signIn(Object.assign(Object.assign(Object.assign({ issuedAt: (/* @__PURE__ */ new Date()).toISOString() }, _ == null ? void 0 : _.signInWithSolana), {
          // non-overridable properties
          version: "1",
          domain: C.host,
          uri: C.href
        }), k ? { statement: k } : null));
        let P;
        if (Array.isArray(v) && v[0] && typeof v[0] == "object")
          P = v[0];
        else if (v && typeof v == "object" && "signedMessage" in v && "signature" in v)
          P = v;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
        if ("signedMessage" in P && "signature" in P && (typeof P.signedMessage == "string" || P.signedMessage instanceof Uint8Array) && P.signature instanceof Uint8Array)
          p = typeof P.signedMessage == "string" ? P.signedMessage : new TextDecoder().decode(P.signedMessage), b = P.signature;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
      } else {
        if (!("signMessage" in x) || typeof x.signMessage != "function" || !("publicKey" in x) || typeof x != "object" || !x.publicKey || !("toBase58" in x.publicKey) || typeof x.publicKey.toBase58 != "function")
          throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
        p = [
          `${C.host} wants you to sign in with your Solana account:`,
          x.publicKey.toBase58(),
          ...k ? ["", k, ""] : [""],
          "Version: 1",
          `URI: ${C.href}`,
          `Issued At: ${(i = (r = _ == null ? void 0 : _.signInWithSolana) === null || r === void 0 ? void 0 : r.issuedAt) !== null && i !== void 0 ? i : (/* @__PURE__ */ new Date()).toISOString()}`,
          ...!((s = _ == null ? void 0 : _.signInWithSolana) === null || s === void 0) && s.notBefore ? [`Not Before: ${_.signInWithSolana.notBefore}`] : [],
          ...!((a = _ == null ? void 0 : _.signInWithSolana) === null || a === void 0) && a.expirationTime ? [`Expiration Time: ${_.signInWithSolana.expirationTime}`] : [],
          ...!((o = _ == null ? void 0 : _.signInWithSolana) === null || o === void 0) && o.chainId ? [`Chain ID: ${_.signInWithSolana.chainId}`] : [],
          ...!((l = _ == null ? void 0 : _.signInWithSolana) === null || l === void 0) && l.nonce ? [`Nonce: ${_.signInWithSolana.nonce}`] : [],
          ...!((u = _ == null ? void 0 : _.signInWithSolana) === null || u === void 0) && u.requestId ? [`Request ID: ${_.signInWithSolana.requestId}`] : [],
          ...!((c = (h = _ == null ? void 0 : _.signInWithSolana) === null || h === void 0 ? void 0 : h.resources) === null || c === void 0) && c.length ? [
            "Resources",
            ..._.signInWithSolana.resources.map((P) => `- ${P}`)
          ] : []
        ].join(`
`);
        const v = await x.signMessage(new TextEncoder().encode(p), "utf8");
        if (!v || !(v instanceof Uint8Array))
          throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
        b = v;
      }
    }
    try {
      const { data: y, error: w } = await $(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({ chain: "solana", message: p, signature: Ye(b) }, !((f = t.options) === null || f === void 0) && f.captchaToken ? { gotrue_meta_security: { captcha_token: (d = t.options) === null || d === void 0 ? void 0 : d.captchaToken } } : null),
        xform: _e
      });
      if (w)
        throw w;
      return !y || !y.session || !y.user ? {
        data: { user: null, session: null },
        error: new He()
      } : (y.session && (await this._saveSession(y.session), await this._notifyAllSubscribers("SIGNED_IN", y.session)), { data: Object.assign({}, y), error: w });
    } catch (y) {
      if (j(y))
        return { data: { user: null, session: null }, error: y };
      throw y;
    }
  }
  async _exchangeCodeForSession(t) {
    const e = await We(this.storage, `${this.storageKey}-code-verifier`), [r, i] = (e ?? "").split("/");
    try {
      const { data: s, error: a } = await $(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: t,
          code_verifier: r
        },
        xform: _e
      });
      if (await Be(this.storage, `${this.storageKey}-code-verifier`), a)
        throw a;
      return !s || !s.session || !s.user ? {
        data: { user: null, session: null, redirectType: null },
        error: new He()
      } : (s.session && (await this._saveSession(s.session), await this._notifyAllSubscribers("SIGNED_IN", s.session)), { data: Object.assign(Object.assign({}, s), { redirectType: i ?? null }), error: a });
    } catch (s) {
      if (j(s))
        return { data: { user: null, session: null, redirectType: null }, error: s };
      throw s;
    }
  }
  /**
   * Allows signing in with an OIDC ID token. The authentication provider used
   * should be enabled and configured.
   */
  async signInWithIdToken(t) {
    try {
      const { options: e, provider: r, token: i, access_token: s, nonce: a } = t, o = await $(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: r,
          id_token: i,
          access_token: s,
          nonce: a,
          gotrue_meta_security: { captcha_token: e == null ? void 0 : e.captchaToken }
        },
        xform: _e
      }), { data: l, error: u } = o;
      return u ? { data: { user: null, session: null }, error: u } : !l || !l.session || !l.user ? {
        data: { user: null, session: null },
        error: new He()
      } : (l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("SIGNED_IN", l.session)), { data: l, error: u });
    } catch (e) {
      if (j(e))
        return { data: { user: null, session: null }, error: e };
      throw e;
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
   */
  async signInWithOtp(t) {
    var e, r, i, s, a;
    try {
      if ("email" in t) {
        const { email: o, options: l } = t;
        let u = null, h = null;
        this.flowType === "pkce" && ([u, h] = await Xe(this.storage, this.storageKey));
        const { error: c } = await $(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: o,
            data: (e = l == null ? void 0 : l.data) !== null && e !== void 0 ? e : {},
            create_user: (r = l == null ? void 0 : l.shouldCreateUser) !== null && r !== void 0 ? r : !0,
            gotrue_meta_security: { captcha_token: l == null ? void 0 : l.captchaToken },
            code_challenge: u,
            code_challenge_method: h
          },
          redirectTo: l == null ? void 0 : l.emailRedirectTo
        });
        return { data: { user: null, session: null }, error: c };
      }
      if ("phone" in t) {
        const { phone: o, options: l } = t, { data: u, error: h } = await $(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: o,
            data: (i = l == null ? void 0 : l.data) !== null && i !== void 0 ? i : {},
            create_user: (s = l == null ? void 0 : l.shouldCreateUser) !== null && s !== void 0 ? s : !0,
            gotrue_meta_security: { captcha_token: l == null ? void 0 : l.captchaToken },
            channel: (a = l == null ? void 0 : l.channel) !== null && a !== void 0 ? a : "sms"
          }
        });
        return { data: { user: null, session: null, messageId: u == null ? void 0 : u.message_id }, error: h };
      }
      throw new wt("You must provide either an email or phone number.");
    } catch (o) {
      if (j(o))
        return { data: { user: null, session: null }, error: o };
      throw o;
    }
  }
  /**
   * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
   */
  async verifyOtp(t) {
    var e, r;
    try {
      let i, s;
      "options" in t && (i = (e = t.options) === null || e === void 0 ? void 0 : e.redirectTo, s = (r = t.options) === null || r === void 0 ? void 0 : r.captchaToken);
      const { data: a, error: o } = await $(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, t), { gotrue_meta_security: { captcha_token: s } }),
        redirectTo: i,
        xform: _e
      });
      if (o)
        throw o;
      if (!a)
        throw new Error("An error occurred on token verification.");
      const l = a.session, u = a.user;
      return l != null && l.access_token && (await this._saveSession(l), await this._notifyAllSubscribers(t.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)), { data: { user: u, session: l }, error: null };
    } catch (i) {
      if (j(i))
        return { data: { user: null, session: null }, error: i };
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
   */
  async signInWithSSO(t) {
    var e, r, i;
    try {
      let s = null, a = null;
      return this.flowType === "pkce" && ([s, a] = await Xe(this.storage, this.storageKey)), await $(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in t ? { provider_id: t.providerId } : null), "domain" in t ? { domain: t.domain } : null), { redirect_to: (r = (e = t.options) === null || e === void 0 ? void 0 : e.redirectTo) !== null && r !== void 0 ? r : void 0 }), !((i = t == null ? void 0 : t.options) === null || i === void 0) && i.captchaToken ? { gotrue_meta_security: { captcha_token: t.options.captchaToken } } : null), { skip_http_redirect: !0, code_challenge: s, code_challenge_method: a }),
        headers: this.headers,
        xform: oc
      });
    } catch (s) {
      if (j(s))
        return { data: null, error: s };
      throw s;
    }
  }
  /**
   * Sends a reauthentication OTP to the user's email or phone number.
   * Requires the user to be signed-in.
   */
  async reauthenticate() {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._reauthenticate());
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (t) => {
        const { data: { session: e }, error: r } = t;
        if (r)
          throw r;
        if (!e)
          throw new Re();
        const { error: i } = await $(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: e.access_token
        });
        return { data: { user: null, session: null }, error: i };
      });
    } catch (t) {
      if (j(t))
        return { data: { user: null, session: null }, error: t };
      throw t;
    }
  }
  /**
   * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
   */
  async resend(t) {
    try {
      const e = `${this.url}/resend`;
      if ("email" in t) {
        const { email: r, type: i, options: s } = t, { error: a } = await $(this.fetch, "POST", e, {
          headers: this.headers,
          body: {
            email: r,
            type: i,
            gotrue_meta_security: { captcha_token: s == null ? void 0 : s.captchaToken }
          },
          redirectTo: s == null ? void 0 : s.emailRedirectTo
        });
        return { data: { user: null, session: null }, error: a };
      } else if ("phone" in t) {
        const { phone: r, type: i, options: s } = t, { data: a, error: o } = await $(this.fetch, "POST", e, {
          headers: this.headers,
          body: {
            phone: r,
            type: i,
            gotrue_meta_security: { captcha_token: s == null ? void 0 : s.captchaToken }
          }
        });
        return { data: { user: null, session: null, messageId: a == null ? void 0 : a.message_id }, error: o };
      }
      throw new wt("You must provide either an email or phone number and a type");
    } catch (e) {
      if (j(e))
        return { data: { user: null, session: null }, error: e };
      throw e;
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
   * will be emitted if this is detected. Use {@link #getUser()} instead.
   */
  async getSession() {
    return await this.initializePromise, await this._acquireLock(-1, async () => this._useSession(async (e) => e));
  }
  /**
   * Acquires a global lock based on the storage key.
   */
  async _acquireLock(t, e) {
    this._debug("#_acquireLock", "begin", t);
    try {
      if (this.lockAcquired) {
        const r = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), i = (async () => (await r, await e()))();
        return this.pendingInLock.push((async () => {
          try {
            await i;
          } catch {
          }
        })()), i;
      }
      return await this.lock(`lock:${this.storageKey}`, t, async () => {
        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
        try {
          this.lockAcquired = !0;
          const r = e();
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
   * Use instead of {@link #getSession} inside the library. It is
   * semantically usually what you want, as getting a session involves some
   * processing afterwards that requires only one client operating on the
   * session at once across multiple tabs or processes.
   */
  async _useSession(t) {
    this._debug("#_useSession", "begin");
    try {
      const e = await this.__loadSession();
      return await t(e);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  /**
   * NEVER USE DIRECTLY!
   *
   * Always use {@link #_useSession}.
   */
  async __loadSession() {
    this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
    try {
      let t = null;
      const e = await We(this.storage, this.storageKey);
      if (this._debug("#getSession()", "session from storage", e), e !== null && (this._isValidSession(e) ? t = e : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !t)
        return { data: { session: null }, error: null };
      const r = t.expires_at ? t.expires_at * 1e3 - Date.now() < vn : !1;
      if (this._debug("#__loadSession()", `session has${r ? "" : " not"} expired`, "expires_at", t.expires_at), !r) {
        if (this.userStorage) {
          const a = await We(this.userStorage, this.storageKey + "-user");
          a != null && a.user ? t.user = a.user : t.user = kn();
        }
        if (this.storage.isServer && t.user) {
          let a = this.suppressGetSessionWarning;
          t = new Proxy(t, {
            get: (l, u, h) => (!a && u === "user" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), a = !0, this.suppressGetSessionWarning = !0), Reflect.get(l, u, h))
          });
        }
        return { data: { session: t }, error: null };
      }
      const { data: i, error: s } = await this._callRefreshToken(t.refresh_token);
      return s ? { data: { session: null }, error: s } : { data: { session: i }, error: null };
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  /**
   * Gets the current user details if there is an existing session. This method
   * performs a network request to the Supabase Auth server, so the returned
   * value is authentic and can be used to base authorization rules on.
   *
   * @param jwt Takes in an optional access token JWT. If no JWT is provided, the JWT from the current session is used.
   */
  async getUser(t) {
    return t ? await this._getUser(t) : (await this.initializePromise, await this._acquireLock(-1, async () => await this._getUser()));
  }
  async _getUser(t) {
    try {
      return t ? await $(this.fetch, "GET", `${this.url}/user`, {
        headers: this.headers,
        jwt: t,
        xform: Fe
      }) : await this._useSession(async (e) => {
        var r, i, s;
        const { data: a, error: o } = e;
        if (o)
          throw o;
        return !(!((r = a.session) === null || r === void 0) && r.access_token) && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new Re() } : await $(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (s = (i = a.session) === null || i === void 0 ? void 0 : i.access_token) !== null && s !== void 0 ? s : void 0,
          xform: Fe
        });
      });
    } catch (e) {
      if (j(e))
        return ws(e) && (await this._removeSession(), await Be(this.storage, `${this.storageKey}-code-verifier`)), { data: { user: null }, error: e };
      throw e;
    }
  }
  /**
   * Updates user data for a logged in user.
   */
  async updateUser(t, e = {}) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._updateUser(t, e));
  }
  async _updateUser(t, e = {}) {
    try {
      return await this._useSession(async (r) => {
        const { data: i, error: s } = r;
        if (s)
          throw s;
        if (!i.session)
          throw new Re();
        const a = i.session;
        let o = null, l = null;
        this.flowType === "pkce" && t.email != null && ([o, l] = await Xe(this.storage, this.storageKey));
        const { data: u, error: h } = await $(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: e == null ? void 0 : e.emailRedirectTo,
          body: Object.assign(Object.assign({}, t), { code_challenge: o, code_challenge_method: l }),
          jwt: a.access_token,
          xform: Fe
        });
        if (h)
          throw h;
        return a.user = u.user, await this._saveSession(a), await this._notifyAllSubscribers("USER_UPDATED", a), { data: { user: a.user }, error: null };
      });
    } catch (r) {
      if (j(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
   * If the refresh token or access token in the current session is invalid, an error will be thrown.
   * @param currentSession The current session that minimally contains an access token and refresh token.
   */
  async setSession(t) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._setSession(t));
  }
  async _setSession(t) {
    try {
      if (!t.access_token || !t.refresh_token)
        throw new Re();
      const e = Date.now() / 1e3;
      let r = e, i = !0, s = null;
      const { payload: a } = _n(t.access_token);
      if (a.exp && (r = a.exp, i = r <= e), i) {
        const { data: o, error: l } = await this._callRefreshToken(t.refresh_token);
        if (l)
          return { data: { user: null, session: null }, error: l };
        if (!o)
          return { data: { user: null, session: null }, error: null };
        s = o;
      } else {
        const { data: o, error: l } = await this._getUser(t.access_token);
        if (l)
          throw l;
        s = {
          access_token: t.access_token,
          refresh_token: t.refresh_token,
          user: o.user,
          token_type: "bearer",
          expires_in: r - e,
          expires_at: r
        }, await this._saveSession(s), await this._notifyAllSubscribers("SIGNED_IN", s);
      }
      return { data: { user: s.user, session: s }, error: null };
    } catch (e) {
      if (j(e))
        return { data: { session: null, user: null }, error: e };
      throw e;
    }
  }
  /**
   * Returns a new session, regardless of expiry status.
   * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
   * If the current session's refresh token is invalid, an error will be thrown.
   * @param currentSession The current session. If passed in, it must contain a refresh token.
   */
  async refreshSession(t) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._refreshSession(t));
  }
  async _refreshSession(t) {
    try {
      return await this._useSession(async (e) => {
        var r;
        if (!t) {
          const { data: a, error: o } = e;
          if (o)
            throw o;
          t = (r = a.session) !== null && r !== void 0 ? r : void 0;
        }
        if (!(t != null && t.refresh_token))
          throw new Re();
        const { data: i, error: s } = await this._callRefreshToken(t.refresh_token);
        return s ? { data: { user: null, session: null }, error: s } : i ? { data: { user: i.user, session: i }, error: null } : { data: { user: null, session: null }, error: null };
      });
    } catch (e) {
      if (j(e))
        return { data: { user: null, session: null }, error: e };
      throw e;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(t, e) {
    try {
      if (!ge())
        throw new vt("No browser detected.");
      if (t.error || t.error_description || t.error_code)
        throw new vt(t.error_description || "Error in URL with unspecified error_description", {
          error: t.error || "unspecified_error",
          code: t.error_code || "unspecified_code"
        });
      switch (e) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new Wn("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new vt("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (e === "pkce") {
        if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !t.code)
          throw new Wn("No code detected.");
        const { data: k, error: _ } = await this._exchangeCodeForSession(t.code);
        if (_)
          throw _;
        const x = new URL(window.location.href);
        return x.searchParams.delete("code"), window.history.replaceState(window.history.state, "", x.toString()), { data: { session: k.session, redirectType: null }, error: null };
      }
      const { provider_token: r, provider_refresh_token: i, access_token: s, refresh_token: a, expires_in: o, expires_at: l, token_type: u } = t;
      if (!s || !o || !a || !u)
        throw new vt("No session defined in URL");
      const h = Math.round(Date.now() / 1e3), c = parseInt(o);
      let f = h + c;
      l && (f = parseInt(l));
      const d = f - h;
      d * 1e3 <= nt && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${d}s, should have been closer to ${c}s`);
      const p = f - c;
      h - p >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", p, f, h) : h - p < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", p, f, h);
      const { data: b, error: y } = await this._getUser(s);
      if (y)
        throw y;
      const w = {
        provider_token: r,
        provider_refresh_token: i,
        access_token: s,
        expires_in: c,
        expires_at: f,
        refresh_token: a,
        token_type: u,
        user: b.user
      };
      return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), { data: { session: w, redirectType: t.type }, error: null };
    } catch (r) {
      if (j(r))
        return { data: { session: null, redirectType: null }, error: r };
      throw r;
    }
  }
  /**
   * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
   */
  _isImplicitGrantCallback(t) {
    return !!(t.access_token || t.error_description);
  }
  /**
   * Checks if the current URL and backing storage contain parameters given by a PKCE flow
   */
  async _isPKCECallback(t) {
    const e = await We(this.storage, `${this.storageKey}-code-verifier`);
    return !!(t.code && e);
  }
  /**
   * Inside a browser context, `signOut()` will remove the logged in user from the browser session and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
   *
   * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
   * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
   *
   * If using `others` scope, no `SIGNED_OUT` event is fired!
   */
  async signOut(t = { scope: "global" }) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._signOut(t));
  }
  async _signOut({ scope: t } = { scope: "global" }) {
    return await this._useSession(async (e) => {
      var r;
      const { data: i, error: s } = e;
      if (s)
        return { error: s };
      const a = (r = i.session) === null || r === void 0 ? void 0 : r.access_token;
      if (a) {
        const { error: o } = await this.admin.signOut(a, t);
        if (o && !(ys(o) && (o.status === 404 || o.status === 401 || o.status === 403)))
          return { error: o };
      }
      return t !== "others" && (await this._removeSession(), await Be(this.storage, `${this.storageKey}-code-verifier`)), { error: null };
    });
  }
  onAuthStateChange(t) {
    const e = Wh(), r = {
      id: e,
      callback: t,
      unsubscribe: () => {
        this._debug("#unsubscribe()", "state change callback with id removed", e), this.stateChangeEmitters.delete(e);
      }
    };
    return this._debug("#onAuthStateChange()", "registered callback with id", e), this.stateChangeEmitters.set(e, r), (async () => (await this.initializePromise, await this._acquireLock(-1, async () => {
      this._emitInitialSession(e);
    })))(), { data: { subscription: r } };
  }
  async _emitInitialSession(t) {
    return await this._useSession(async (e) => {
      var r, i;
      try {
        const { data: { session: s }, error: a } = e;
        if (a)
          throw a;
        await ((r = this.stateChangeEmitters.get(t)) === null || r === void 0 ? void 0 : r.callback("INITIAL_SESSION", s)), this._debug("INITIAL_SESSION", "callback id", t, "session", s);
      } catch (s) {
        await ((i = this.stateChangeEmitters.get(t)) === null || i === void 0 ? void 0 : i.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", t, "error", s), console.error(s);
      }
    });
  }
  /**
   * Sends a password reset request to an email address. This method supports the PKCE flow.
   *
   * @param email The email address of the user.
   * @param options.redirectTo The URL to send the user to after they click the password reset link.
   * @param options.captchaToken Verification token received when the user completes the captcha on the site.
   */
  async resetPasswordForEmail(t, e = {}) {
    let r = null, i = null;
    this.flowType === "pkce" && ([r, i] = await Xe(
      this.storage,
      this.storageKey,
      !0
      // isPasswordRecovery
    ));
    try {
      return await $(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: t,
          code_challenge: r,
          code_challenge_method: i,
          gotrue_meta_security: { captcha_token: e.captchaToken }
        },
        headers: this.headers,
        redirectTo: e.redirectTo
      });
    } catch (s) {
      if (j(s))
        return { data: null, error: s };
      throw s;
    }
  }
  /**
   * Gets all the identities linked to a user.
   */
  async getUserIdentities() {
    var t;
    try {
      const { data: e, error: r } = await this.getUser();
      if (r)
        throw r;
      return { data: { identities: (t = e.user.identities) !== null && t !== void 0 ? t : [] }, error: null };
    } catch (e) {
      if (j(e))
        return { data: null, error: e };
      throw e;
    }
  }
  async linkIdentity(t) {
    return "token" in t ? this.linkIdentityIdToken(t) : this.linkIdentityOAuth(t);
  }
  async linkIdentityOAuth(t) {
    var e;
    try {
      const { data: r, error: i } = await this._useSession(async (s) => {
        var a, o, l, u, h;
        const { data: c, error: f } = s;
        if (f)
          throw f;
        const d = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, t.provider, {
          redirectTo: (a = t.options) === null || a === void 0 ? void 0 : a.redirectTo,
          scopes: (o = t.options) === null || o === void 0 ? void 0 : o.scopes,
          queryParams: (l = t.options) === null || l === void 0 ? void 0 : l.queryParams,
          skipBrowserRedirect: !0
        });
        return await $(this.fetch, "GET", d, {
          headers: this.headers,
          jwt: (h = (u = c.session) === null || u === void 0 ? void 0 : u.access_token) !== null && h !== void 0 ? h : void 0
        });
      });
      if (i)
        throw i;
      return ge() && !(!((e = t.options) === null || e === void 0) && e.skipBrowserRedirect) && window.location.assign(r == null ? void 0 : r.url), { data: { provider: t.provider, url: r == null ? void 0 : r.url }, error: null };
    } catch (r) {
      if (j(r))
        return { data: { provider: t.provider, url: null }, error: r };
      throw r;
    }
  }
  async linkIdentityIdToken(t) {
    return await this._useSession(async (e) => {
      var r;
      try {
        const { error: i, data: { session: s } } = e;
        if (i)
          throw i;
        const { options: a, provider: o, token: l, access_token: u, nonce: h } = t, c = await $(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
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
          xform: _e
        }), { data: f, error: d } = c;
        return d ? { data: { user: null, session: null }, error: d } : !f || !f.session || !f.user ? {
          data: { user: null, session: null },
          error: new He()
        } : (f.session && (await this._saveSession(f.session), await this._notifyAllSubscribers("USER_UPDATED", f.session)), { data: f, error: d });
      } catch (i) {
        if (j(i))
          return { data: { user: null, session: null }, error: i };
        throw i;
      }
    });
  }
  /**
   * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
   */
  async unlinkIdentity(t) {
    try {
      return await this._useSession(async (e) => {
        var r, i;
        const { data: s, error: a } = e;
        if (a)
          throw a;
        return await $(this.fetch, "DELETE", `${this.url}/user/identities/${t.identity_id}`, {
          headers: this.headers,
          jwt: (i = (r = s.session) === null || r === void 0 ? void 0 : r.access_token) !== null && i !== void 0 ? i : void 0
        });
      });
    } catch (e) {
      if (j(e))
        return { data: null, error: e };
      throw e;
    }
  }
  /**
   * Generates a new JWT.
   * @param refreshToken A valid refresh token that was returned on login.
   */
  async _refreshAccessToken(t) {
    const e = `#_refreshAccessToken(${t.substring(0, 5)}...)`;
    this._debug(e, "begin");
    try {
      const r = Date.now();
      return await Gh(async (i) => (i > 0 && await Kh(200 * Math.pow(2, i - 1)), this._debug(e, "refreshing attempt", i), await $(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
        body: { refresh_token: t },
        headers: this.headers,
        xform: _e
      })), (i, s) => {
        const a = 200 * Math.pow(2, i);
        return s && zt(s) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + a - r < nt;
      });
    } catch (r) {
      if (this._debug(e, "error", r), j(r))
        return { data: { session: null, user: null }, error: r };
      throw r;
    } finally {
      this._debug(e, "end");
    }
  }
  _isValidSession(t) {
    return typeof t == "object" && t !== null && "access_token" in t && "refresh_token" in t && "expires_at" in t;
  }
  async _handleProviderSignIn(t, e) {
    const r = await this._getUrlForProvider(`${this.url}/authorize`, t, {
      redirectTo: e.redirectTo,
      scopes: e.scopes,
      queryParams: e.queryParams
    });
    return this._debug("#_handleProviderSignIn()", "provider", t, "options", e, "url", r), ge() && !e.skipBrowserRedirect && window.location.assign(r), { data: { provider: t, url: r }, error: null };
  }
  /**
   * Recovers the session from LocalStorage and refreshes the token
   * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
   */
  async _recoverAndRefresh() {
    var t, e;
    const r = "#_recoverAndRefresh()";
    this._debug(r, "begin");
    try {
      const i = await We(this.storage, this.storageKey);
      if (i && this.userStorage) {
        let a = await We(this.userStorage, this.storageKey + "-user");
        !this.storage.isServer && Object.is(this.storage, this.userStorage) && !a && (a = { user: i.user }, await rt(this.userStorage, this.storageKey + "-user", a)), i.user = (t = a == null ? void 0 : a.user) !== null && t !== void 0 ? t : kn();
      } else if (i && !i.user && !i.user) {
        const a = await We(this.storage, this.storageKey + "-user");
        a && (a != null && a.user) ? (i.user = a.user, await Be(this.storage, this.storageKey + "-user"), await rt(this.storage, this.storageKey, i)) : i.user = kn();
      }
      if (this._debug(r, "session from storage", i), !this._isValidSession(i)) {
        this._debug(r, "session is not valid"), i !== null && await this._removeSession();
        return;
      }
      const s = ((e = i.expires_at) !== null && e !== void 0 ? e : 1 / 0) * 1e3 - Date.now() < vn;
      if (this._debug(r, `session has${s ? "" : " not"} expired with margin of ${vn}s`), s) {
        if (this.autoRefreshToken && i.refresh_token) {
          const { error: a } = await this._callRefreshToken(i.refresh_token);
          a && (console.error(a), zt(a) || (this._debug(r, "refresh failed with a non-retryable error, removing the session", a), await this._removeSession()));
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
      this._debug(r, "error", i), console.error(i);
      return;
    } finally {
      this._debug(r, "end");
    }
  }
  async _callRefreshToken(t) {
    var e, r;
    if (!t)
      throw new Re();
    if (this.refreshingDeferred)
      return this.refreshingDeferred.promise;
    const i = `#_callRefreshToken(${t.substring(0, 5)}...)`;
    this._debug(i, "begin");
    try {
      this.refreshingDeferred = new ln();
      const { data: s, error: a } = await this._refreshAccessToken(t);
      if (a)
        throw a;
      if (!s.session)
        throw new Re();
      await this._saveSession(s.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", s.session);
      const o = { data: s.session, error: null };
      return this.refreshingDeferred.resolve(o), o;
    } catch (s) {
      if (this._debug(i, "error", s), j(s)) {
        const a = { data: null, error: s };
        return zt(s) || await this._removeSession(), (e = this.refreshingDeferred) === null || e === void 0 || e.resolve(a), a;
      }
      throw (r = this.refreshingDeferred) === null || r === void 0 || r.reject(s), s;
    } finally {
      this.refreshingDeferred = null, this._debug(i, "end");
    }
  }
  async _notifyAllSubscribers(t, e, r = !0) {
    const i = `#_notifyAllSubscribers(${t})`;
    this._debug(i, "begin", e, `broadcast = ${r}`);
    try {
      this.broadcastChannel && r && this.broadcastChannel.postMessage({ event: t, session: e });
      const s = [], a = Array.from(this.stateChangeEmitters.values()).map(async (o) => {
        try {
          await o.callback(t, e);
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
  async _saveSession(t) {
    this._debug("#_saveSession()", t), this.suppressGetSessionWarning = !0;
    const e = Object.assign({}, t), r = e.user && e.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !r && e.user && await rt(this.userStorage, this.storageKey + "-user", {
        user: e.user
      });
      const i = Object.assign({}, e);
      delete i.user;
      const s = Wr(i);
      await rt(this.storage, this.storageKey, s);
    } else {
      const i = Wr(e);
      await rt(this.storage, this.storageKey, i);
    }
  }
  async _removeSession() {
    this._debug("#_removeSession()"), await Be(this.storage, this.storageKey), await Be(this.storage, this.storageKey + "-code-verifier"), await Be(this.storage, this.storageKey + "-user"), this.userStorage && await Be(this.userStorage, this.storageKey + "-user"), await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  /**
   * Removes any registered visibilitychange callback.
   *
   * {@see #startAutoRefresh}
   * {@see #stopAutoRefresh}
   */
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const t = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      t && ge() && (window != null && window.removeEventListener) && window.removeEventListener("visibilitychange", t);
    } catch (e) {
      console.error("removing visibilitychange callback failed", e);
    }
  }
  /**
   * This is the private implementation of {@link #startAutoRefresh}. Use this
   * within the library.
   */
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const t = setInterval(() => this._autoRefreshTokenTick(), nt);
    this.autoRefreshTicker = t, t && typeof t == "object" && typeof t.unref == "function" ? t.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(t), setTimeout(async () => {
      await this.initializePromise, await this._autoRefreshTokenTick();
    }, 0);
  }
  /**
   * This is the private implementation of {@link #stopAutoRefresh}. Use this
   * within the library.
   */
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const t = this.autoRefreshTicker;
    this.autoRefreshTicker = null, t && clearInterval(t);
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
   * {@see #stopAutoRefresh}
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
   * See {@link #startAutoRefresh} for more details.
   */
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  /**
   * Runs the auto refresh token tick.
   */
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const t = Date.now();
          try {
            return await this._useSession(async (e) => {
              const { data: { session: r } } = e;
              if (!r || !r.refresh_token || !r.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const i = Math.floor((r.expires_at * 1e3 - t) / nt);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${i} ticks, a tick lasts ${nt}ms, refresh threshold is ${Mn} ticks`), i <= Mn && await this._callRefreshToken(r.refresh_token);
            });
          } catch (e) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", e);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (t) {
      if (t.isAcquireTimeout || t instanceof xs)
        this._debug("auto refresh token tick lock not available");
      else
        throw t;
    }
  }
  /**
   * Registers callbacks on the browser / platform, which in-turn run
   * algorithms when the browser window/tab are in foreground. On non-browser
   * platforms it assumes always foreground.
   */
  async _handleVisibilityChange() {
    if (this._debug("#_handleVisibilityChange()"), !ge() || !(window != null && window.addEventListener))
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1), window == null || window.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0);
    } catch (t) {
      console.error("_handleVisibilityChange", t);
    }
  }
  /**
   * Callback registered with `window.addEventListener('visibilitychange')`.
   */
  async _onVisibilityChanged(t) {
    const e = `#_onVisibilityChanged(${t})`;
    this._debug(e, "visibilityState", document.visibilityState), document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(), t || (await this.initializePromise, await this._acquireLock(-1, async () => {
      if (document.visibilityState !== "visible") {
        this._debug(e, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
        return;
      }
      await this._recoverAndRefresh();
    }))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh();
  }
  /**
   * Generates the relevant login URL for a third-party provider.
   * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param options.scopes A space-separated list of scopes granted to the OAuth application.
   * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
   */
  async _getUrlForProvider(t, e, r) {
    const i = [`provider=${encodeURIComponent(e)}`];
    if (r != null && r.redirectTo && i.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`), r != null && r.scopes && i.push(`scopes=${encodeURIComponent(r.scopes)}`), this.flowType === "pkce") {
      const [s, a] = await Xe(this.storage, this.storageKey), o = new URLSearchParams({
        code_challenge: `${encodeURIComponent(s)}`,
        code_challenge_method: `${encodeURIComponent(a)}`
      });
      i.push(o.toString());
    }
    if (r != null && r.queryParams) {
      const s = new URLSearchParams(r.queryParams);
      i.push(s.toString());
    }
    return r != null && r.skipBrowserRedirect && i.push(`skip_http_redirect=${r.skipBrowserRedirect}`), `${t}?${i.join("&")}`;
  }
  async _unenroll(t) {
    try {
      return await this._useSession(async (e) => {
        var r;
        const { data: i, error: s } = e;
        return s ? { data: null, error: s } : await $(this.fetch, "DELETE", `${this.url}/factors/${t.factorId}`, {
          headers: this.headers,
          jwt: (r = i == null ? void 0 : i.session) === null || r === void 0 ? void 0 : r.access_token
        });
      });
    } catch (e) {
      if (j(e))
        return { data: null, error: e };
      throw e;
    }
  }
  async _enroll(t) {
    try {
      return await this._useSession(async (e) => {
        var r, i;
        const { data: s, error: a } = e;
        if (a)
          return { data: null, error: a };
        const o = Object.assign({ friendly_name: t.friendlyName, factor_type: t.factorType }, t.factorType === "phone" ? { phone: t.phone } : t.factorType === "totp" ? { issuer: t.issuer } : {}), { data: l, error: u } = await $(this.fetch, "POST", `${this.url}/factors`, {
          body: o,
          headers: this.headers,
          jwt: (r = s == null ? void 0 : s.session) === null || r === void 0 ? void 0 : r.access_token
        });
        return u ? { data: null, error: u } : (t.factorType === "totp" && l.type === "totp" && (!((i = l == null ? void 0 : l.totp) === null || i === void 0) && i.qr_code) && (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`), { data: l, error: null });
      });
    } catch (e) {
      if (j(e))
        return { data: null, error: e };
      throw e;
    }
  }
  async _verify(t) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (e) => {
          var r;
          const { data: i, error: s } = e;
          if (s)
            return { data: null, error: s };
          const a = Object.assign({ challenge_id: t.challengeId }, "webauthn" in t ? {
            webauthn: Object.assign(Object.assign({}, t.webauthn), { credential_response: t.webauthn.type === "create" ? vc(t.webauthn.credential_response) : _c(t.webauthn.credential_response) })
          } : { code: t.code }), { data: o, error: l } = await $(this.fetch, "POST", `${this.url}/factors/${t.factorId}/verify`, {
            body: a,
            headers: this.headers,
            jwt: (r = i == null ? void 0 : i.session) === null || r === void 0 ? void 0 : r.access_token
          });
          return l ? { data: null, error: l } : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + o.expires_in }, o)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", o), { data: o, error: l });
        });
      } catch (e) {
        if (j(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
  async _challenge(t) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (e) => {
          var r;
          const { data: i, error: s } = e;
          if (s)
            return { data: null, error: s };
          const a = await $(this.fetch, "POST", `${this.url}/factors/${t.factorId}/challenge`, {
            body: t,
            headers: this.headers,
            jwt: (r = i == null ? void 0 : i.session) === null || r === void 0 ? void 0 : r.access_token
          });
          if (a.error)
            return a;
          const { data: o } = a;
          if (o.type !== "webauthn")
            return { data: o, error: null };
          switch (o.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, o), { webauthn: Object.assign(Object.assign({}, o.webauthn), { credential_options: Object.assign(Object.assign({}, o.webauthn.credential_options), { publicKey: yc(o.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, o), { webauthn: Object.assign(Object.assign({}, o.webauthn), { credential_options: Object.assign(Object.assign({}, o.webauthn.credential_options), { publicKey: wc(o.webauthn.credential_options.publicKey) }) }) }),
                error: null
              };
          }
        });
      } catch (e) {
        if (j(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challengeAndVerify}
   */
  async _challengeAndVerify(t) {
    const { data: e, error: r } = await this._challenge({
      factorId: t.factorId
    });
    return r ? { data: null, error: r } : await this._verify({
      factorId: t.factorId,
      challengeId: e.id,
      code: t.code
    });
  }
  /**
   * {@see GoTrueMFAApi#listFactors}
   */
  async _listFactors() {
    var t;
    const { data: { user: e }, error: r } = await this.getUser();
    if (r)
      return { data: null, error: r };
    const i = {
      all: [],
      phone: [],
      totp: [],
      webauthn: []
    };
    for (const s of (t = e == null ? void 0 : e.factors) !== null && t !== void 0 ? t : [])
      i.all.push(s), s.status === "verified" && i[s.factor_type].push(s);
    return {
      data: i,
      error: null
    };
  }
  /**
   * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */
  async _getAuthenticatorAssuranceLevel() {
    return this._acquireLock(-1, async () => await this._useSession(async (t) => {
      var e, r;
      const { data: { session: i }, error: s } = t;
      if (s)
        return { data: null, error: s };
      if (!i)
        return {
          data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
          error: null
        };
      const { payload: a } = _n(i.access_token);
      let o = null;
      a.aal && (o = a.aal);
      let l = o;
      ((r = (e = i.user.factors) === null || e === void 0 ? void 0 : e.filter((c) => c.status === "verified")) !== null && r !== void 0 ? r : []).length > 0 && (l = "aal2");
      const h = a.amr || [];
      return { data: { currentLevel: o, nextLevel: l, currentAuthenticationMethods: h }, error: null };
    }));
  }
  async fetchJwk(t, e = { keys: [] }) {
    let r = e.keys.find((o) => o.kid === t);
    if (r)
      return r;
    const i = Date.now();
    if (r = this.jwks.keys.find((o) => o.kid === t), r && this.jwks_cached_at + Nh > i)
      return r;
    const { data: s, error: a } = await $(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
      headers: this.headers
    });
    if (a)
      throw a;
    return !s.keys || s.keys.length === 0 || (this.jwks = s, this.jwks_cached_at = i, r = s.keys.find((o) => o.kid === t), !r) ? null : r;
  }
  /**
   * Extracts the JWT claims present in the access token by first verifying the
   * JWT against the server's JSON Web Key Set endpoint
   * `/.well-known/jwks.json` which is often cached, resulting in significantly
   * faster responses. Prefer this method over {@link #getUser} which always
   * sends a request to the Auth server for each JWT.
   *
   * If the project is not using an asymmetric JWT signing key (like ECC or
   * RSA) it always sends a request to the Auth server (similar to {@link
   * #getUser}) to verify the JWT.
   *
   * @param jwt An optional specific JWT you wish to verify, not the one you
   *            can obtain from {@link #getSession}.
   * @param options Various additional options that allow you to customize the
   *                behavior of this method.
   */
  async getClaims(t, e = {}) {
    try {
      let r = t;
      if (!r) {
        const { data: d, error: p } = await this.getSession();
        if (p || !d.session)
          return { data: null, error: p };
        r = d.session.access_token;
      }
      const { header: i, payload: s, signature: a, raw: { header: o, payload: l } } = _n(r);
      e != null && e.allowExpired || tc(s.exp);
      const u = !i.alg || i.alg.startsWith("HS") || !i.kid || !("crypto" in globalThis && "subtle" in globalThis.crypto) ? null : await this.fetchJwk(i.kid, e != null && e.keys ? { keys: e.keys } : e == null ? void 0 : e.jwks);
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
      const h = nc(i.alg), c = await crypto.subtle.importKey("jwk", u, h, !0, [
        "verify"
      ]);
      if (!await crypto.subtle.verify(h, c, a, Mh(`${o}.${l}`)))
        throw new Xt("Invalid JWT signature");
      return {
        data: {
          claims: s,
          header: i,
          signature: a
        },
        error: null
      };
    } catch (r) {
      if (j(r))
        return { data: null, error: r };
      throw r;
    }
  }
}
ft.nextInstanceID = 0;
const Ps = ft;
class Pc extends Ps {
  constructor(t) {
    super(t);
  }
}
class Is {
  /**
   * Create a new client for use in the browser.
   * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
   * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
   * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
   * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
   * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
   * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
   * @param options.realtime Options passed along to realtime-js constructor.
   * @param options.storage Options passed along to the storage-js constructor.
   * @param options.global.fetch A custom fetch implementation.
   * @param options.global.headers Any additional headers to send with each network request.
   */
  constructor(t, e, r) {
    var i, s, a;
    this.supabaseUrl = t, this.supabaseKey = e;
    const o = Rh(t);
    if (!e)
      throw new Error("supabaseKey is required.");
    this.realtimeUrl = new URL("realtime/v1", o), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", o), this.storageUrl = new URL("storage/v1", o), this.functionsUrl = new URL("functions/v1", o);
    const l = `sb-${o.hostname.split(".")[0]}-auth-token`, u = {
      db: Eh,
      realtime: Th,
      auth: Object.assign(Object.assign({}, xh), { storageKey: l }),
      global: Sh
    }, h = Ih(r ?? {}, u);
    this.storageKey = (i = h.auth.storageKey) !== null && i !== void 0 ? i : "", this.headers = (s = h.global.headers) !== null && s !== void 0 ? s : {}, h.accessToken ? (this.accessToken = h.accessToken, this.auth = new Proxy({}, {
      get: (c, f) => {
        throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(f)} is not possible`);
      }
    })) : this.auth = this._initSupabaseAuthClient((a = h.auth) !== null && a !== void 0 ? a : {}, this.headers, h.global.fetch), this.fetch = Oh(e, this._getAccessToken.bind(this), h.global.fetch), this.realtime = this._initRealtimeClient(Object.assign({ headers: this.headers, accessToken: this._getAccessToken.bind(this) }, h.realtime)), this.rest = new Lu(new URL("rest/v1", o).href, {
      headers: this.headers,
      schema: h.db.schema,
      fetch: this.fetch
    }), this.storage = new vh(this.storageUrl.href, this.headers, this.fetch, r == null ? void 0 : r.storage), h.accessToken || this._listenForAuthEvents();
  }
  /**
   * Supabase Functions allows you to deploy and invoke edge functions.
   */
  get functions() {
    return new Su(this.functionsUrl.href, {
      headers: this.headers,
      customFetch: this.fetch
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
  // NOTE: signatures must be kept in sync with PostgrestClient.schema
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
  // NOTE: signatures must be kept in sync with PostgrestClient.rpc
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
  rpc(t, e = {}, r = {
    head: !1,
    get: !1,
    count: void 0
  }) {
    return this.rest.rpc(t, e, r);
  }
  /**
   * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
   *
   * @param {string} name - The name of the Realtime channel.
   * @param {Object} opts - The options to pass to the Realtime channel.
   *
   */
  channel(t, e = { config: {} }) {
    return this.realtime.channel(t, e);
  }
  /**
   * Returns all Realtime channels.
   */
  getChannels() {
    return this.realtime.getChannels();
  }
  /**
   * Unsubscribes and removes Realtime channel from Realtime client.
   *
   * @param {RealtimeChannel} channel - The name of the Realtime channel.
   *
   */
  removeChannel(t) {
    return this.realtime.removeChannel(t);
  }
  /**
   * Unsubscribes and removes all Realtime channels from Realtime client.
   */
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  async _getAccessToken() {
    var t, e;
    if (this.accessToken)
      return await this.accessToken();
    const { data: r } = await this.auth.getSession();
    return (e = (t = r.session) === null || t === void 0 ? void 0 : t.access_token) !== null && e !== void 0 ? e : this.supabaseKey;
  }
  _initSupabaseAuthClient({ autoRefreshToken: t, persistSession: e, detectSessionInUrl: r, storage: i, userStorage: s, storageKey: a, flowType: o, lock: l, debug: u }, h, c) {
    const f = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new Pc({
      url: this.authUrl.href,
      headers: Object.assign(Object.assign({}, f), h),
      storageKey: a,
      autoRefreshToken: t,
      persistSession: e,
      detectSessionInUrl: r,
      storage: i,
      userStorage: s,
      flowType: o,
      lock: l,
      debug: u,
      fetch: c,
      // auth checks if there is a custom authorizaiton header using this flag
      // so it knows whether to return an error when getUser is called with no session
      hasCustomAuthorizationHeader: Object.keys(this.headers).some((d) => d.toLowerCase() === "authorization")
    });
  }
  _initRealtimeClient(t) {
    return new hs(this.realtimeUrl.href, Object.assign(Object.assign({}, t), { params: Object.assign({ apikey: this.supabaseKey }, t == null ? void 0 : t.params) }));
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((e, r) => {
      this._handleTokenChanged(e, "CLIENT", r == null ? void 0 : r.access_token);
    });
  }
  _handleTokenChanged(t, e, r) {
    (t === "TOKEN_REFRESHED" || t === "SIGNED_IN") && this.changedAccessToken !== r ? (this.changedAccessToken = r, this.realtime.setAuth(r)) : t === "SIGNED_OUT" && (this.realtime.setAuth(), e == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0);
  }
}
const Ic = (n, t, e) => new Is(n, t, e);
function Rc() {
  if (typeof window < "u" || typeof process > "u")
    return !1;
  const n = process.version;
  if (n == null)
    return !1;
  const t = n.match(/^v(\d+)\./);
  return t ? parseInt(t[1], 10) <= 18 : !1;
}
Rc() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
const jc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AuthApiError: bs,
  AuthClient: Ps,
  AuthError: dt,
  AuthImplicitGrantRedirectError: vt,
  AuthInvalidCredentialsError: wt,
  AuthInvalidJwtError: Xt,
  AuthInvalidTokenResponseError: He,
  AuthPKCEGrantCodeExchangeError: Wn,
  AuthRetryableFetchError: Qt,
  AuthSessionMissingError: Re,
  AuthUnknownError: Ue,
  AuthWeakPasswordError: Hn,
  CustomAuthError: De,
  get FunctionRegion() {
    return Yt;
  },
  FunctionsError: an,
  FunctionsFetchError: In,
  FunctionsHttpError: jn,
  FunctionsRelayError: Rn,
  GoTrueAdminApi: Es,
  GoTrueClient: ft,
  NavigatorLockAcquireTimeoutError: Ts,
  PostgrestError: Du,
  get REALTIME_LISTEN_TYPES() {
    return ot;
  },
  get REALTIME_POSTGRES_CHANGES_LISTEN_EVENT() {
    return Bn;
  },
  get REALTIME_PRESENCE_LISTEN_EVENTS() {
    return Nn;
  },
  get REALTIME_SUBSCRIBE_STATES() {
    return Te;
  },
  RealtimeChannel: on,
  RealtimeClient: hs,
  RealtimePresence: at,
  SIGN_OUT_SCOPES: Mt,
  SupabaseClient: Is,
  WebSocketFactory: as,
  createClient: Ic,
  isAuthApiError: ys,
  isAuthError: j,
  isAuthImplicitGrantRedirectError: vs,
  isAuthRetryableFetchError: zt,
  isAuthSessionMissingError: ws,
  lockInternals: Ke,
  navigatorLock: Cs
}, Symbol.toStringTag, { value: "Module" }));
