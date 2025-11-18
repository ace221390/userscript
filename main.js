// ==UserScript==
// @name         ACE Bypass
// @namespace    https://ace-bypass.com/
// @version      2.0.1
// @description  The #1 Userscript to bypass all that you need.
// @author       ACE
// @match        *://auth.platoboost.app/*
// @match        *://*.linkvertise.com/*
// @match        *://linkvertise.com/*
// @match        *://*.k2rnl.cat/checkpoint*
// @match        *://kr2nl.cat/checkpoint*
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
// @run-at       document-start
// @grant        none
// @homepageURL  https://ace-bypass.com/
// @icon         https://cdn.discordapp.com/icons/1241310717936926730/9c45d7f3750856348e894ea53ac8100d.png?size=1024
// @updateURL    https://github.com/ace221390/userscript
// @downloadURL  https://github.com/ace221390/userscript
// ==/UserScript==

(async () => {
    'use strict';
    if (window.top !== window.self) { return; }
    const config = {
        Ask_before_bypass: true, // Change the true to false if you want bypass to be automatic and not ask you everytime before bypass.
        time: 10 // Set the time to 25 Seconds or more to avoid detection on high risk sites like (Luarmor, etc).
    };

    function createContainer() {
        const container = document.createElement('div');
        container.id = 'userscript-container';
        container.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 36px;
            z-index: 2147483647;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', Arial, sans-serif;
            pointer-events: auto;
            background: rgba(0,0,0,0.98);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            overflow: hidden;
        `;

        container.innerHTML = `
            <div style="
                width: 100%;
                max-width: 760px;
                border-radius: 18px;
                padding: 28px;
                background: linear-gradient(180deg, #141414, #0b0b0b);
                border: 2px solid rgba(255,215,0,0.12);
                box-shadow: 0 30px 80px rgba(0,0,0,0.8), 0 8px 20px rgba(255,215,0,0.04);
                color: #eaeaea;
            ">
                <div style="display:flex;align-items:center;gap:16px;margin-bottom:18px;">
                    <div style="
                        width:56px;height:56px;border-radius:12px;
                        background: linear-gradient(135deg,#FFD700,#FFB84D);
                        box-shadow: 0 10px 28px rgba(255,215,0,0.18);
                        display:flex;align-items:center;justify-content:center;overflow:hidden;
                    ">
                        <img src="https://i.imgur.com/KsH0BED.png" alt="ACE" style="width:100%;height:100%;object-fit:cover;">
                    </div>
                    <div style="flex:1;">
                        <div style="font-size:20px;font-weight:900;color:#FFD700;letter-spacing:-0.4px;">ACE USERSCRIPT</div>
                        <div style="font-size:13px;color:#bdbdbd;margin-top:4px;font-weight:600;">ACE USERSCRIPT</div>
                    </div>
                </div>

                <p style="margin:12px 0 20px 0;font-size:15px;color:#d7d7d7;line-height:1.45;">
                    Click <strong style="color:#FFD700">Next</strong> to continue to the destination. If a temporary hash is present the button must be pressed before it expires.
                </p>

                <div id="countdown" style="font-size:14px;margin-bottom:18px;padding:10px;background:#0f0f0f;border-radius:10px;border:1px solid rgba(255,255,255,0.03);color:#cfcfcf;"></div>

                <div style="display:flex;gap:12px;align-items:center;">
                    <button id="nextBtn" type="button" style="
                        padding:12px 26px;
                        background: linear-gradient(135deg,#FFD700,#FFB84D);
                        color:#000;
                        border:none;
                        border-radius:10px;
                        cursor:pointer;
                        font-weight:900;
                        font-size:15px;
                        box-shadow: 0 10px 28px rgba(255,215,0,0.18);
                        transition: transform 0.18s ease, box-shadow 0.18s ease;
                    ">Next</button>

                    <div id="spinner" style="border:5px solid #222;border-top:5px solid #FFD700;border-radius:50%;width:30px;height:30px;animation:spin 1s linear infinite;display:none;"></div>
                </div>

                <div id="errorMsg" style="color:#ff6b6b;margin-top:18px;display:none;background:#1b1b1b;padding:10px;border-radius:8px;"></div>

                <style>
                    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                    #nextBtn:hover { transform: translateY(-3px); }
                    #nextBtn:active { transform: translateY(0); }
                    #nextBtn:disabled {
                        pointer-events: none;
                        opacity: 0.6;
                        cursor: not-allowed;
                    }
                </style>
            </div>
        `;
        return container;
    }

    function showError(message) {
        const errorEl = document.getElementById('errorMsg');
        if (errorEl) {
            errorEl.textContent = message;
            errorEl.style.display = 'block';
        }
        console.error(message);
    }

    function isValidUrl(url) {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }

    function normalizeUrlIfPossible(candidate) {
        if (!candidate || typeof candidate !== 'string') return null;
        try {
            return new URL(candidate).href;
        } catch {
            try {
                return new URL('https://' + candidate).href;
            } catch {
                return null;
            }
        }
    }

    function extractAceredirectFromString(s) {
        if (!s || typeof s !== 'string') return null;
        const re = /(?:[?&\#]|^|;|%3F|%26)aceredirect=([^&#\s]+)/i;
        const m = s.match(re);
        if (m && m[1]) {
            return m[1];
        }
        return null;
    }

    function findAceredirectParam() {
        try {
            const sp = new URLSearchParams(window.location.search || '');
            const direct = sp.get('aceredirect');
            if (direct) return direct;
        } catch (err) {
        }

        const fromHash = extractAceredirectFromString(window.location.hash || '');
        if (fromHash) return fromHash;

        let candidate = extractAceredirectFromString(window.location.href || '');
        if (candidate) return candidate;

        let hrefToCheck = window.location.href || '';
        for (let i = 0; i < 5; i++) {
            try {
                const decoded = decodeURIComponent(hrefToCheck);
                if (decoded === hrefToCheck) break;
                hrefToCheck = decoded;
                const found = extractAceredirectFromString(hrefToCheck);
                if (found) return found;
            } catch (err) {
                break;
            }
        }

        return null;
    }

    const STYLE_ID = 'ace-bypass-userscript-style';
    const OVERLAY_ID = 'ace-bypass-userscript-overlay';
    const MODAL_ID = 'ace-bypass-userscript-modal';

    function injectStyles() {
      if (document.getElementById(STYLE_ID)) return;
      const css = `
      @keyframes ace-pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
      }
      @keyframes ace-slide-up {
        from { transform: translateY(30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      .ace-usp-overlay {
        position: fixed;
        inset: 0;
        z-index: 2147483646;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: auto;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      }
      .ace-usp-backdrop {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.75), rgba(20,20,20,0.85));
        backdrop-filter: blur(8px) saturate(1.1);
        -webkit-backdrop-filter: blur(8px) saturate(1.1);
        opacity: 0;
        transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1);
      }
      .ace-usp-overlay.show .ace-usp-backdrop {
        opacity: 1;
      }
      .ace-usp-page-blur {
        filter: blur(4px) brightness(0.6);
        pointer-events: none !important;
        user-select: none !important;
      }
      .ace-usp-modal {
        position: relative;
        z-index: 2147483647;
        max-width: 520px;
        width: 90%;
        border-radius: 20px;
        background: linear-gradient(180deg, #1a1a1a, #0d0d0d);
        border: 2px solid rgba(255, 215, 0, 0.3);
        box-shadow: 0 40px 100px rgba(0,0,0,0.8), 0 0 80px rgba(255, 215, 0, 0.15);
        padding: 32px;
        transform: translateY(40px) scale(0.95);
        opacity: 0;
        transition: all 450ms cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      .ace-usp-overlay.show .ace-usp-modal {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
      .ace-usp-header {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-bottom: 24px;
      }
      .ace-usp-logo {
        width: 56px;
        height: 56px;
        background: linear-gradient(135deg, #FFD700, #FFA500);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 8px 24px rgba(255, 215, 0, 0.4);
        animation: ace-pulse 3s ease-in-out infinite;
        overflow: hidden;
      }
      .ace-usp-logo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .ace-usp-title {
        flex: 1;
      }
      .ace-usp-title h2 {
        margin: 0;
        font-size: 28px;
        font-weight: 900;
        color: #FFD700;
        letter-spacing: -0.5px;
        text-shadow: 0 2px 12px rgba(255, 215, 0, 0.3);
      }
      .ace-usp-subtitle {
        margin: 4px 0 0 0;
        font-size: 13px;
        color: #888;
        font-weight: 600;
      }
      .ace-usp-content {
        margin-bottom: 28px;
      }
      .ace-usp-message {
        font-size: 16px;
        color: #fff;
        line-height: 1.6;
        font-weight: 500;
        margin-bottom: 12px;
      }
      .ace-usp-url-display {
        background: rgba(255, 215, 0, 0.08);
        border: 1px solid rgba(255, 215, 0, 0.2);
        border-radius: 10px;
        padding: 12px 16px;
        font-size: 13px;
        color: #FFD700;
        word-break: break-all;
        font-family: 'Courier New', monospace;
        max-height: 80px;
        overflow-y: auto;
      }
      .ace-usp-actions {
        display: flex;
        gap: 12px;
        margin-top: 24px;
      }
      .ace-usp-btn {
        flex: 1;
        padding: 14px 24px;
        border-radius: 12px;
        border: none;
        font-size: 15px;
        font-weight: 800;
        cursor: pointer;
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .ace-usp-btn:hover {
        transform: translateY(-2px);
      }
      .ace-usp-btn:active {
        transform: translateY(0);
      }
      .ace-usp-btn.yes {
        background: linear-gradient(135deg, #FFD700, #FFA500);
        color: #000;
        box-shadow: 0 8px 24px rgba(255, 215, 0, 0.4);
      }
      .ace-usp-btn.yes:hover {
        box-shadow: 0 12px 32px rgba(255, 215, 0, 0.6);
        background: linear-gradient(135deg, #FFE44D, #FFB84D);
      }
      .ace-usp-btn.no {
        background: rgba(255, 255, 255, 0.1);
        color: #fff;
        border: 2px solid rgba(255, 255, 255, 0.2);
      }
      .ace-usp-btn.no:hover {
        background: rgba(255, 255, 255, 0.15);
        border-color: rgba(255, 255, 255, 0.3);
      }
      .ace-usp-footer {
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        text-align: center;
        font-size: 12px;
        color: #666;
      }
      .ace-redirect-ui {
        position: fixed;
        top: 24px;
        right: 24px;
        z-index: 2147483647;
        background: linear-gradient(135deg, #1a1a1a, #0d0d0d);
        border: 2px solid rgba(255, 215, 0, 0.4);
        border-radius: 16px;
        padding: 20px 24px;
        max-width: 400px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.8), 0 0 40px rgba(255, 215, 0, 0.2);
        animation: ace-slide-up 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      .ace-redirect-title {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 16px;
        font-weight: 800;
        color: #FFD700;
        margin-bottom: 12px;
      }
      .ace-redirect-spinner {
        width: 20px;
        height: 20px;
        border: 3px solid rgba(255, 215, 0, 0.2);
        border-top-color: #FFD700;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
      .ace-redirect-info {
        font-size: 13px;
        color: #aaa;
        line-height: 1.5;
        word-break: break-all;
      }
      .ace-redirect-label {
        color: #888;
        font-weight: 600;
        margin-bottom: 4px;
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
        <div class="ace-usp-header">
          <div class="ace-usp-logo" aria-hidden="true">
            <img src="https://i.imgur.com/KsH0BED.png" alt="ACE">
          </div>
          <div class="ace-usp-title">
            <h2>ACE BYPASS</h2>
            <div class="ace-usp-subtitle">Adlink Bypasser – fast, simple, reliable</div>
          </div>
        </div>
        <div class="ace-usp-content">
          <div class="ace-usp-message">
            Do you want to bypass this ad link page?
          </div>
          <div class="ace-usp-url-display" id="ace-usp-url"></div>
        </div>
        <div class="ace-usp-actions">
          <button class="ace-usp-btn no" id="ace-usp-no">
            <span>Cancel</span>
          </button>
          <button class="ace-usp-btn yes" id="ace-usp-yes">
            <span>Bypass Now</span>
          </button>
        </div>
        <div class="ace-usp-footer">
          Powered by ACE BYPASS • Using ACE API
        </div>
      </div>
    `;
      document.documentElement.appendChild(overlay);

      const urlDisplay = overlay.querySelector('#ace-usp-url');
      if (urlDisplay) {
        urlDisplay.textContent = location.href;
      }

      const yes = overlay.querySelector('#ace-usp-yes');
      const no = overlay.querySelector('#ace-usp-no');

      yes.addEventListener('click', () => {
        try {
          const pending = window.__ace_pending_wrap || null;
          if (pending) {
            window.__ace_pending_wrap = null;
            location.href = pending;
            return;
          }
          const current = location.href;
          const dest = 'https://ace-bypass.com/bypass?url=' + encodeURIComponent(current) + '&time=' + encodeURIComponent(String(config.time || 10));
          location.href = dest;
        } catch (e) {
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
        const elements = document.body ? document.body.children : document.documentElement.children;
        Array.from(elements).forEach(el => {
          if (el.id !== OVERLAY_ID && el.id !== STYLE_ID) {
            el.classList.add('ace-usp-page-blur');
          }
        });
      } catch (e) {}
      requestAnimationFrame(() => {
        overlay.classList.add('show');
      });
      try {
        const modal = overlay.querySelector(`#${MODAL_ID}`);
        if (modal) modal.focus();
      } catch (e) {}
    }

    function hideOverlay() {
      const overlay = document.getElementById(OVERLAY_ID);
      if (overlay) overlay.classList.remove('show');
      try {
        const elements = document.body ? document.body.children : document.documentElement.children;
        Array.from(elements).forEach(el => {
          el.classList.remove('ace-usp-page-blur');
        });
      } catch (e) {}
      setTimeout(() => {
        try {
          const el = document.getElementById(OVERLAY_ID);
          if (el && el.parentNode) el.parentNode.removeChild(el);
        } catch(e){}
      }, 500);
    }

    function escapeHtml(s) {
        return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
    }

    try {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', runScript, { once: true });
        } else {
            runScript();
        }

        function runScript() {
            let rawRedirect = findAceredirectParam();

            if (rawRedirect) {
                let candidate = rawRedirect;
                for (let i = 0; i < 6; i++) {
                    try {
                        const decoded = decodeURIComponent(candidate);
                        if (decoded === candidate) break;
                        candidate = decoded;
                    } catch (err) {
                        break;
                    }
                }
                candidate = candidate.replace(/^["']|["']$/g, '').trim();
                const normalized = normalizeUrlIfPossible(candidate);
                if (normalized) {
                    rawRedirect = normalized;
                } else {
                    if (candidate && candidate.indexOf('%') !== -1) {
                        try {
                            const moreDecoded = decodeURIComponent(candidate);
                            const norm2 = normalizeUrlIfPossible(moreDecoded);
                            if (norm2) rawRedirect = norm2;
                            else rawRedirect = candidate;
                        } catch {
                            rawRedirect = candidate;
                        }
                    } else {
                        rawRedirect = candidate;
                    }
                }
            }

            if (!rawRedirect) {
                const targetUrl = `https://ace-bypass.com/bypass?url=${encodeURIComponent(location.href)}&time=${encodeURIComponent(String(config.time || 10))}`;
                if (config.Ask_before_bypass) {
                    window.__ace_pending_wrap = targetUrl;
                    showOverlay();
                    return;
                } else {
                    location.replace(targetUrl);
                    return;
                }
            }

            let redirectUrl = rawRedirect;
            if (!isValidUrl(redirectUrl)) {
                const tryNorm = normalizeUrlIfPossible(redirectUrl);
                if (tryNorm) {
                    redirectUrl = tryNorm;
                } else {
                    try {
                        const d = decodeURIComponent(redirectUrl);
                        if (isValidUrl(d)) {
                            redirectUrl = d;
                        } else {
                            const d2 = normalizeUrlIfPossible(d);
                            if (d2) redirectUrl = d2;
                        }
                    } catch (err) {
                    }
                }
            }

            const container = createContainer();
            if (document.body) {
                document.body.appendChild(container);
            } else {
                document.documentElement.appendChild(container);
            }

            const countdownEl = container.querySelector('#countdown');
            const btn = container.querySelector('#nextBtn');
            const spinner = container.querySelector('#spinner');

            const newBtn = btn;
            const hasHash = (url) => {
                try {
                    return new URL(url).searchParams.has('hash') || url.includes('hash=');
                } catch {
                    return url.includes('hash=');
                }
            };

            if (hasHash(redirectUrl)) {
                let time = 8;
                countdownEl.style.color = '#ff4d4d';
                countdownEl.style.fontWeight = 'bold';
                const interval = setInterval(() => {
                    countdownEl.textContent = `YOU HAVE EXACTLY ${time} SECONDS TO CLICK THE BUTTON BEFORE YOUR HASH EXPIRES`;
                    time--;
                    if (time < 0) {
                        clearInterval(interval);
                        countdownEl.textContent = 'HASH EXPIRED. RETRYING...';
                        countdownEl.style.color = '';
                        countdownEl.style.fontWeight = '';
                        newBtn.disabled = true;
                        spinner.style.display = 'block';
                        setTimeout(() => {
                            location.replace(location.href.split('?')[0]);
                        }, 3500);
                    }
                }, 1000);
            } else {
                countdownEl.style.display = 'none';
            }

            const performRedirect = () => {
                if (!redirectUrl || newBtn.disabled) return;
                try {
                    newBtn.disabled = true;
                    spinner.style.display = 'block';
                    setTimeout(() => {
                        try {
                            window.location.assign(redirectUrl);
                        } catch (err) {
                            window.location.href = redirectUrl;
                        }
                    }, 60);
                } catch (err) {
                    showError('Redirect failed. Please copy and open the link manually: ' + redirectUrl);
                    newBtn.disabled = false;
                    spinner.style.display = 'none';
                }
            };

            newBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                performRedirect();
            }, { passive: false });

            newBtn.addEventListener('touchend', (e) => {
                e.preventDefault();
                e.stopPropagation();
                performRedirect();
            }, { passive: false });

            container.addEventListener('click', (e) => {
                if (e.target && e.target.id === 'nextBtn') return;
            });

            try {
                newBtn.setAttribute('aria-label', 'Proceed to link');
                newBtn.tabIndex = 0;
            } catch (err) { }
        }
    } catch (err) {
        console.error('Userscript error:', err);
        if (document.body) {
            document.body.innerHTML = `<div style="color: #ff4d4d; text-align: center; padding: 40px; background: #121212; height: 100vh; display: flex; align-items: center; justify-content: center; font-size: 1.2em;">Error in bypass script: ${err && err.message ? err.message : err}. Please reload the page.</div>`;
        }
    }
})();
