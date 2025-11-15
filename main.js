// ==UserScript==
// @name         ACE Bypass Helper (Universal)
// @namespace    https://ace-bypass.com/
// @version      1.0.0
// @description  Intercepts adlink pages, offers an ACE bypass flow and automates redirect handling (works with ACE API /redirect). Configurable Ask_Before_BYPASS behavior.
// @author       ACE
// @match        *://auth.platoboost.app/*
// @match        *://*.linkvertise.com/*
// @match        *://linkvertise.com/*
// @match        *://*.kr2nl.cat/checkpoint*
// @match        *://krn2l.cat/checkpoint*
// @match        *://*.auth.platoboost.net/*
// @match        *://auth.platoboost.net/*
// @match        *://*.auth.platorelay.com/*
// @match        *://auth.platorelay.com/*
// @match        *://*.pandadevelopment.net/getkey*
// @match        *://pandadevelopment.net/getkey*
// @match        *://*.codex.lol/*
// @match        *://codex.lol/*
// @match        *://*.trigonevo.fun/whitelist*
// @match        *://trigonevo.fun/whitelist*
// @match        *://*.blox-script.com/get-key*
// @match        *://blox-script.com/get-key*
// @match        *://*.boost.ink/*
// @match        *://boost.ink/*
// @match        *://*.bst.gg/*
// @match        *://bst.gg/*
// @match        *://*.bstshrt.com/*
// @match        *://bstshrt.com/*
// @match        *://*.getpolsec.com/*
// @match        *://getpolsec.com/*
// @match        *://*.ldnesfspublic.org/*
// @match        *://ldnesfspublic.org/*
// @match        *://*.link-unlock.com/*
// @match        *://link-unlock.com/*
// @match        *://*.link4m.com/*
// @match        *://link4m.com/*
// @match        *://*.link4sub.com/*
// @match        *://link4sub.com/*
// @match        *://*.linkunlocker.com/*
// @match        *://linkunlocker.com/*
// @match        *://*.lockr.so/*
// @match        *://lockr.so/*
// @match        *://*.loot-link.com/s?*
// @match        *://loot-link.com/s?*
// @match        *://*.loot-links.com/*
// @match        *://loot-links.com/*
// @match        *://*.lootlink.org/s?*
// @match        *://lootlink.org/s?*
// @match        *://*.lootlinks.co/s?*
// @match        *://lootlinks.co/s?*
// @match        *://*.lootdest.info/s?*
// @match        *://lootdest.info/s?*
// @match        *://*.lootdest.org/s?*
// @match        *://lootdest.org/s?*
// @match        *://*.lootdest.com/s?*
// @match        *://lootdest.com/s?*
// @match        *://*.links-loot.com/s?*
// @match        *://links-loot.com/s?*
// @match        *://*.linksloot.net/s?*
// @match        *://linksloot.net/s?*
// @match        *://*.mboost.me/*
// @match        *://mboost.me/*
// @match        *://*.mediafire.com/*
// @match        *://mediafire.com/*
// @match        *://*.overdrivehub.xyz/*
// @match        *://overdrivehub.xyz/*
// @match        *://*.paste-drop.com/*
// @match        *://paste-drop.com/*
// @match        *://*.paster.so/*
// @match        *://paster.so/*
// @match        *://*.pastes.io/*
// @match        *://pastes.io/*
// @match        *://*.quartyz.com/getkey*
// @match        *://quartyz.com/getkey*
// @match        *://*.rekonise.com/*
// @match        *://rekonise.com/*
// @match        *://*.rinku.pro/*
// @match        *://rinku.pro/*
// @match        *://*.rnks.link/*
// @match        *://rnks.link/*
// @match        *://*.socialwolvez.com/*
// @match        *://socialwolvez.com/*
// @match        *://*.sub2get.com/*
// @match        *://sub2get.com/*
// @match        *://*.sub4unlock.com/*
// @match        *://sub4unlock.com/*
// @match        *://*.sub4unlock.pro/*
// @match        *://sub4unlock.pro/*
// @match        *://*.subfinal.com/*
// @match        *://subfinal.com/*
// @match        *://*.sub4unlock.io/*
// @match        *://sub4unlock.io/*
// @match        *://*.sub2unlock.com/*
// @match        *://sub2unlock.com/*
// @match        *://*.tpi.li/key-system*
// @match        *://tpi.li/key-system*
// @match        *://*.ytsubme.com/*
// @match        *://ytsubme.com/*
// @match        *://ace-bypass.com/*
// @match        *://www.ace-bypass.com/*
// @run-at       document-start
// @grant        none
// @homepageURL  https://ace-bypass.com/
// @icon         https://cdn.discordapp.com/icons/1241310717936926730/9c45d7f3750856348e894ea53ac8100d.png?size=1024
// @updateURL    https://github.com/ace221390/userscript
// @downloadURL  https://github.com/ace221390/userscript
// ==/UserScript==

(function () {
  'use strict';

  const CONFIG = {
    Ask_Before_BYPASS: true,
    ACE_BYPASS_HOST: 'https://www.ace-bypass.com',
    USERSCRIPT_URL: 'https://github.com/ace221390/userscript'
  };

  const dbg = (...args) => {};
  const qs = (k, src) => {
    const s = new URLSearchParams((src || location.search));
    return s.get(k);
  };
  const safeEncode = (u) => encodeURIComponent(String(u || ''));

  function detectMetaRefresh() {
    try {
      const meta = document.querySelector('meta[http-equiv][content]');
      if (!meta) return null;
      const httpEq = (meta.getAttribute('http-equiv') || '').toLowerCase();
      if (httpEq !== 'refresh') return null;
      const content = meta.getAttribute('content') || '';
      const parts = content.split(';');
      const ttl = parseInt(parts[0], 10) || 0;
      let url = null;
      if (parts.length > 1) {
        const m = parts.slice(1).join(';').match(/url=(.*)/i);
        if (m) url = m[1].trim().replace(/^["']|['"]$/g,'');
      }
      return {ttl, url};
    } catch(e) { return null; }
  }

  function overrideLocationMethods() {
    try {
      const origAssign = window.location.assign;
      const origReplace = window.location.replace;
      window.location.assign = function(newUrl) {
        dbg('Intercept assign ->', newUrl);
        handlePotentialRedirect(newUrl);
      };
      window.location.replace = function(newUrl) {
        dbg('Intercept replace ->', newUrl);
        handlePotentialRedirect(newUrl);
      };
    } catch (e) {
      dbg('Unable to override location methods', e);
    }
  }

  function overrideWindowOpen() {
    try {
      const origOpen = window.open;
      window.open = function(url, name, specs) {
        dbg('Intercept open ->', url);
        handlePotentialRedirect(url);
        return origOpen.call(window, url, name, specs);
      };
    } catch (e) {
      dbg('unable to override window.open', e);
    }
  }

  function handlePotentialRedirect(targetUrl) {
    if (!targetUrl || typeof targetUrl !== 'string') return;
    try {
      const absolute = new URL(targetUrl, location.href).href;
      if (absolute.includes('ace-redirect=')) {
        handleAceRedirectParamFromLink(absolute);
        return;
      }
      if (CONFIG.Ask_Before_BYPASS) {
        showConfirmationOverlayForCurrentPage();
      } else {
        const dest = CONFIG.ACE_BYPASS_HOST + '/bypass?url=' + safeEncode(absolute);
        window.location.href = dest;
      }
    } catch (e) {
      dbg('invalid url in potential redirect:', targetUrl);
    }
  }

  const STYLE_ID = 'ace-bypass-userscript-style';
  const OVERLAY_ID = 'ace-bypass-userscript-overlay';
  const MODAL_ID = 'ace-bypass-userscript-modal';

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const css = `
      .ace-usp-overlay {
        position:fixed;
        inset:0;
        z-index:2147483646;
        display:flex;
        align-items:center;
        justify-content:center;
        pointer-events:auto;
      }
      .ace-usp-backdrop {
        position:absolute;
        inset:0;
        background: linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.7));
        backdrop-filter: blur(6px) saturate(1.1);
        -webkit-backdrop-filter: blur(6px) saturate(1.1);
        opacity:0;
        transition: opacity 300ms ease;
      }
      .ace-usp-overlay.show .ace-usp-backdrop { opacity:1; }
      .ace-usp-page-blur {
        filter: blur(6px) brightness(0.55) saturate(0.9);
        pointer-events: none !important;
        user-select: none !important;
      }
      .ace-usp-modal {
        position:relative;
        z-index:2147483647;
        max-width:820px;
        width:92%;
        border-radius:14px;
        background: linear-gradient(180deg, #fff, #fff8e6);
        color:#111;
        box-shadow: 0 30px 120px rgba(0,0,0,0.45);
        padding:22px;
        transform: translateY(18px);
        opacity:0;
        transition: transform 360ms cubic-bezier(.22,.9,.3,1), opacity 260ms ease;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      }
      .ace-usp-overlay.show .ace-usp-modal {
        transform: translateY(0);
        opacity:1;
      }
      .ace-usp-title {
        display:flex;
        gap:12px;
        align-items:center;
        font-weight:900;
        color:#6b7ce8;
        font-size:22px;
      }
      .ace-usp-desc { margin-top:6px; color:#333; font-weight:600; font-size:15px; }
      .ace-usp-sub { color:#666; font-size:13px; margin-top:8px; }
      .ace-usp-actions { margin-top:18px; display:flex; gap:10px; justify-content:flex-end; align-items:center; }
      .ace-usp-btn {
        padding:10px 14px; border-radius:10px; border:0; cursor:pointer; font-weight:800;
        display:inline-flex; gap:8px; align-items:center;
      }
      .ace-usp-btn.yes { background:#6b7ce8; color:white; box-shadow: 0 8px 24px rgba(107,124,232,0.2); }
      .ace-usp-btn.no { background:#efefef; color:#333; border:2px solid rgba(0,0,0,0.04); }
      .ace-usp-animated {
        width:44px; height:44px; border-radius:8px; background:linear-gradient(135deg,#fff,#eaf0ff); display:inline-flex; align-items:center; justify-content:center; box-shadow: inset 0 -6px 18px rgba(107,124,232,0.06);
        transition: transform 300ms ease;
      }
      .ace-usp-btn.yes .ace-usp-animated { transform: translateY(-3px); }
      .ace-usp-animated svg { width:22px; height:22px; }
      .ace-usp-footer { margin-top:12px; font-size:13px; color:#444; display:flex; justify-content:space-between; align-items:center; gap:10px; }
      .ace-usp-scroll {
        margin-top:12px; max-height:220px; overflow:auto; background: #fff; color:#111; padding:10px; border-radius:8px; border:1px solid rgba(0,0,0,0.06);
      }
    `;
    const s = document.createElement('style');
    s.id = STYLE_ID;
    s.textContent = css;
    (document.head || document.documentElement).appendChild(s);
  }

  function buildOverlayDOM() {
    if (document.getElementById(OVERLAY_ID)) return;
    const overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    overlay.className = 'ace-usp-overlay';
    overlay.innerHTML = `
      <div class="ace-usp-backdrop" aria-hidden="true"></div>
      <div class="ace-usp-modal" id="${MODAL_ID}" role="dialog" aria-modal="true">
        <div class="ace-usp-title">
          <div class="ace-usp-animated" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#6B7CE8"/></svg>
          </div>
          <div>ACE BYPASS</div>
        </div>
        <div class="ace-usp-desc">Do you want to bypass this ad-link?</div>
        <div class="ace-usp-sub">Powered by ACE BYPASS • USING ACE API</div>
        <div class="ace-usp-scroll" id="ace-usp-scroll" style="display:none;"></div>
        <div class="ace-usp-actions" id="ace-usp-actions">
          <button class="ace-usp-btn no" id="ace-usp-no">✖ No</button>
          <button class="ace-usp-btn yes" id="ace-usp-yes">✅ Yes</button>
        </div>
        <div class="ace-usp-footer">
          <div style="color:#666">Choose an action to proceed.</div>
        </div>
      </div>
    `;
    document.documentElement.appendChild(overlay);
    const yes = overlay.querySelector('#ace-usp-yes');
    const no = overlay.querySelector('#ace-usp-no');
    yes.addEventListener('click', () => {
      try {
        const current = location.href;
        const dest = CONFIG.ACE_BYPASS_HOST + '/bypass?url=' + safeEncode(current);
        location.href = dest;
      } catch (e) {
        dbg('Yes click error', e);
      }
    }, {capture:false});
    no.addEventListener('click', () => {
      hideOverlay();
    }, {capture:false});
  }

  function showOverlay() {
    injectStyles();
    buildOverlayDOM();
    const overlay = document.getElementById(OVERLAY_ID);
    if (!overlay) return;
    try {
      (document.body || document.documentElement).classList.add('ace-usp-page-blur');
    } catch (e) {}
    overlay.classList.add('show');
    try {
      const modal = overlay.querySelector(`#${MODAL_ID}`);
      if (modal) modal.focus();
    } catch (e) {}
  }

  function hideOverlay() {
    const overlay = document.getElementById(OVERLAY_ID);
    if (overlay) overlay.classList.remove('show');
    try {
      (document.body || document.documentElement).classList.remove('ace-usp-page-blur');
    } catch (e) {}
    setTimeout(() => {
      try {
        const el = document.getElementById(OVERLAY_ID);
        if (el && el.parentNode) el.parentNode.removeChild(el);
      } catch(e){}
    }, 400);
  }

  function handleAceRedirectParamFromLink(linkHref) {
    try {
      const url = new URL(linkHref);
      const aceVal = url.searchParams.get('ace-redirect');
      if (!aceVal) return;
      try {
        (document.body || document.documentElement).classList.add('ace-usp-page-blur');
      } catch (e) {}
      const existing = document.getElementById('ace-ace-redirect-overlay');
      if (!existing) {
        const ov = document.createElement('div');
        ov.id = 'ace-ace-redirect-overlay';
        ov.style.position = 'fixed';
        ov.style.inset = '0';
        ov.style.zIndex = '2147483646';
        ov.style.background = 'rgba(0,0,0,0.65)';
        document.documentElement.appendChild(ov);
      }
      const decoded = aceVal;
      window.location.href = decoded;
    } catch (e) {
      dbg('handleAceRedirectParamFromLink error', e);
    }
  }

  function interceptAnchorClicks(event) {
    if (event.defaultPrevented) return;
    if (event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const a = event.target.closest && event.target.closest('a[href]');
    if (!a) return;
    const href = a.getAttribute('href') || '';
    if (!href || href.startsWith('javascript:') || href.startsWith('#')) return;
    let abs;
    try {
      abs = new URL(href, location.href).href;
    } catch (e) { return; }
    if (abs.indexOf(CONFIG.ACE_BYPASS_HOST) === 0) return;
    if (abs.includes('ace-redirect=')) {
      event.preventDefault();
      event.stopPropagation();
      handleAceRedirectParamFromLink(abs);
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    const bypassUrl = CONFIG.ACE_BYPASS_HOST + '/bypass?url=' + safeEncode(abs);
    if (CONFIG.Ask_Before_BYPASS) {
      showOverlay();
      const overlay = document.getElementById(OVERLAY_ID);
      if (!overlay) {
        window.location.href = bypassUrl;
        return;
      }
      const yesBtn = overlay.querySelector('#ace-usp-yes');
      const noBtn = overlay.querySelector('#ace-usp-no');
      const cleanup = () => {
        hideOverlay();
      };
      yesBtn.onclick = (ev) => {
        ev.preventDefault();
        window.location.href = bypassUrl;
      };
      noBtn.onclick = (ev) => {
        ev.preventDefault();
        cleanup();
      };
    } else {
      window.location.href = bypassUrl;
    }
  }

  function rewriteAnchorsToBypass() {
    try {
      const anchors = Array.from(document.getElementsByTagName('a'));
      anchors.forEach(a => {
        try {
          const href = a.getAttribute('href');
          if (!href) return;
          const abs = new URL(href, location.href).href;
          if (abs.indexOf(CONFIG.ACE_BYPASS_HOST) === 0) return;
          if (abs.includes('ace-redirect=')) return;
          if (!/^https?:\/\//i.test(abs)) return;
          const bypassUrl = CONFIG.ACE_BYPASS_HOST + '/bypass?url=' + safeEncode(abs);
          a.setAttribute('data-ace-original', href);
          a.setAttribute('href', bypassUrl);
        } catch (e) {}
      });
    } catch (e) { dbg('rewrite anchors failed', e); }
  }

  function handleAceRedirectPage() {
    try {
      const isAce = location.hostname.endsWith('ace-bypass.com');
      if (!isAce) return false;
      const path = location.pathname || '';
      if (!path.toLowerCase().includes('/redirect')) return false;
      const urlParam = qs('url');
      const fromParam = qs('from');
      if (!urlParam) return false;
      const target = decodeURIComponent(urlParam);
      const from = fromParam ? decodeURIComponent(fromParam) : '';
      showRedirectUI(target, from);
      setTimeout(() => {
        try {
          if (from) {
            try {
              const separator = from.includes('?') ? '&' : '?';
              const newUrl = from + separator + 'ace-redirect=' + encodeURIComponent(target);
              window.location.href = newUrl;
              return;
            } catch (e) {}
          }
          window.location.href = target;
        } catch (e) {
          dbg('redirect navigation failed', e);
          window.location.href = target;
        }
      }, 3000);
      return true;
    } catch (e) {
      dbg('handleAceRedirectPage error', e);
      return false;
    }
  }

  function handleAceRedirectParamOnPage() {
    try {
      const params = new URLSearchParams(location.search);
      const aceVal = params.get('ace-redirect');
      if (!aceVal) return false;
      try {
        (document.body || document.documentElement).classList.add('ace-usp-page-blur');
      } catch (e) {}
      const existing = document.getElementById('ace-ace-redirect-overlay');
      if (!existing) {
        const ov = document.createElement('div');
        ov.id = 'ace-ace-redirect-overlay';
        ov.style.position = 'fixed';
        ov.style.inset = '0';
        ov.style.zIndex = '2147483646';
        ov.style.background = 'rgba(0,0,0,0.65)';
        document.documentElement.appendChild(ov);
      }
      const decoded = aceVal;
      window.location.href = decoded;
      return true;
    } catch (e) {
      dbg('handleAceRedirectParamOnPage error', e);
      return false;
    }
  }

  function showRedirectUI(target, from) {
    injectStyles();
    const existing = document.getElementById('ace-redirect-ui');
    if (existing) existing.remove();
    const container = document.createElement('div');
    container.id = 'ace-redirect-ui';
    container.style.position = 'fixed';
    container.style.right = '20px';
    container.style.top = '20px';
    container.style.zIndex = '2147483647';
    container.style.background = 'linear-gradient(180deg,#fff,#fff8e6)';
    container.style.color = '#111';
    container.style.padding = '12px';
    container.style.borderRadius = '10px';
    container.style.boxShadow = '0 16px 40px rgba(0,0,0,0.35)';
    container.style.maxWidth = 'min(60vw,520px)';
    container.style.fontFamily = '-apple-system,Segoe UI,Roboto,Helvetica,Arial';
    container.innerHTML = '<strong style="color:#6b7ce8">ACE</strong> — Redirecting...<div style="margin-top:8px;color:#333;font-size:13px;word-break:break-all">Referer (intended): '+escapeHtml(from || '(none)')+'</div>';
    document.documentElement.appendChild(container);
  }

  function markRedirectDone(target, from) {
    const el = document.getElementById('ace-redirect-ui');
    if (el) {
      el.innerHTML = '<strong style="color:#6b7ce8">ACE</strong> — Redirect sent.<div style="margin-top:8px;color:#333;font-size:13px">Referer (intended): '+escapeHtml(from || '(none)')+'</div>';
      setTimeout(()=>{ try{ el.remove(); }catch(e){} }, 1800);
    }
  }

  function escapeHtml(s) {
    return String(s || '').replace(/&/g, '&amp;')
      .replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }

  try {
    overrideLocationMethods();
    overrideWindowOpen();
    const handledAceParamOnPage = handleAceRedirectParamOnPage();
    if (handledAceParamOnPage) return;
    const handledRedirect = handleAceRedirectPage();
    if (handledRedirect) {
      return;
    }
    if (CONFIG.Ask_Before_BYPASS) {
      const showSoon = () => {
        try {
          if (location.hostname.endsWith('ace-bypass.com')) return;
        } catch(e) {}
        if (window.top !== window.self) return;
        showOverlay();
      };
      if (document.readyState === 'loading') {
        setTimeout(showSoon, 40);
        document.addEventListener('DOMContentLoaded', () => {
          setTimeout(showSoon, 40);
        }, {once:true});
      } else {
        setTimeout(showSoon, 40);
      }
      document.addEventListener('click', interceptAnchorClicks, true);
    } else {
      document.addEventListener('click', interceptAnchorClicks, true);
      document.addEventListener('DOMContentLoaded', rewriteAnchorsToBypass, {once:true});
      const mo = new MutationObserver((mutations) => {
        rewriteAnchorsToBypass();
      });
      try {
        mo.observe(document.documentElement || document, {childList:true, subtree:true});
      } catch (e) {}
    }
    try {
      const meta = detectMetaRefresh();
      if (meta && meta.url) {
        handlePotentialRedirect(meta.url);
      }
    } catch (e) { dbg('meta refresh detection failed', e); }
  } catch (e) {
    dbg('userscript main error', e);
  }

})();
