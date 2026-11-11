(function () {
  'use strict';

  var EVENT = {
    slug: 'fc-bayern-munchen-vs-afc-ajax',
    name: 'Bayern Munich vs Ajax',
    date: 'Tuesday, 5 January 2027',
    time: '11:00',
    venue: 'Raila Odinga International Stadium, Nairobi'
  };
  var DEFAULTS = {
    resaleEnabled: true,
    resellerMarkupCap: 25,
    listingExpiryDays: 14,
    transferRevocationHours: 24,
    otpExpiryMinutes: 10,
    qrTtlSeconds: 20,
    clientLinkExpiryHours: 48,
    privateListingsEnabled: true,
    offlineScanningEnabled: true
  };
  var KEYS = { auth: 'webticket-auth', tickets: 'webticket-tickets', listings: 'webticket-listings', transfers: 'webticket-transfers', settings: 'webticket-resale-settings', audit: 'webticket-audit', otp: 'webticket-otp', locks: 'webticket-checkout-locks' };

  function read(key, fallback) { try { var value = JSON.parse(localStorage.getItem(key)); return value === null ? fallback : value; } catch (ignore) { return fallback; } }
  function write(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch (ignore) {} }
  function now() { return Date.now(); }
  function uid(prefix) { return prefix + '-' + Math.random().toString(36).slice(2, 6).toUpperCase() + '-' + now().toString(36).slice(-5).toUpperCase(); }
  function esc(value) { return String(value == null ? '' : value).replace(/[&<>"']/g, function (match) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[match]; }); }
  function money(value) { return 'KES ' + Number(value || 0).toLocaleString('en-KE', { maximumFractionDigits: 0 }); }
  function dateTime(value) { return new Date(value).toLocaleString('en-KE', { dateStyle: 'medium', timeStyle: 'short' }); }
  function settings() { return Object.assign({}, DEFAULTS, read(KEYS.settings, {})); }
  function auth() { return read(KEYS.auth, null); }
  function setAuth(value) { write(KEYS.auth, value); }
  function getTickets() { return read(KEYS.tickets, []); }
  function getListings() { return read(KEYS.listings, []); }
  function getTransfers() { return read(KEYS.transfers, []); }
  function audit(action, detail) {
    var rows = read(KEYS.audit, []);
    rows.unshift({ id: uid('AUD'), at: now(), action: action, detail: detail, actor: (auth() || {}).identity || 'system' });
    write(KEYS.audit, rows.slice(0, 100));
  }
  function ensureData() {
    if (!localStorage.getItem(KEYS.settings)) write(KEYS.settings, DEFAULTS);
    if (!localStorage.getItem(KEYS.tickets)) write(KEYS.tickets, [
      { key: 'ticket-401a', publicRef: 'TSC-401A', status: 'held', faceValue: 4500, section: '401', row: 'G', seat: '12', gate: 'North Gate', owner: 'reseller', holderName: 'Amara Njeri' },
      { key: 'ticket-401b', publicRef: 'TSC-401B', status: 'held', faceValue: 4500, section: '401', row: 'G', seat: '13', gate: 'North Gate', owner: 'reseller', holderName: 'Amara Njeri' },
      { key: 'ticket-415d', publicRef: 'TSC-415D', status: 'listed', faceValue: 6000, section: '415', row: 'C', seat: '04', gate: 'South Gate', owner: 'reseller', holderName: 'Amara Njeri' },
      { key: 'ticket-418f', publicRef: 'TSC-418F', status: 'transferred', faceValue: 3500, section: '418', row: 'J', seat: '21', gate: 'West Gate', owner: 'reseller', holderName: 'David Ochieng' },
      { key: 'ticket-420c', publicRef: 'TSC-420C', status: 'scanned', faceValue: 7500, section: '420', row: 'A', seat: '03', gate: 'East Gate', owner: 'reseller', holderName: 'Amara Njeri', scannedAt: now() - 3600000 }
    ]);
    if (!localStorage.getItem(KEYS.listings)) write(KEYS.listings, [{ id: 'LST-81F2', ticketKey: 'ticket-415d', price: 6900, quantity: 1, visibility: 'public', createdAt: now() - 7200000, expiry: now() + 8 * 86400000, status: 'active' }]);
    if (!localStorage.getItem(KEYS.transfers)) write(KEYS.transfers, [{ id: 'TRF-22A8', ticketKey: 'ticket-418f', clientName: 'David Ochieng', phone: '+254712345678', email: 'david@example.com', nationalId: '', token: 'demo-transfer-418f', status: 'active', createdAt: now() - 7200000, expiresAt: now() + 40 * 3600000, clientOtpVerified: false }]);
    if (!localStorage.getItem(KEYS.audit)) write(KEYS.audit, [{ id: 'AUD-START', at: now() - 7200000, action: 'transfer.created', detail: 'Ticket TSC-418F transferred to client holder', actor: 'reseller@demo.test' }]);
  }
  function statusBadge(status) { return '<span class="badge ' + esc(status) + '">' + esc(status) + '</span>'; }
  function getTicket(key) { return getTickets().filter(function (ticket) { return ticket.key === key; })[0]; }
  function activeListingFor(ticketKey) { return getListings().filter(function (listing) { return listing.ticketKey === ticketKey && listing.status === 'active' && listing.expiry > now(); })[0]; }
  function publicTransferUrl(token) { return window.location.origin + window.location.pathname.split('/talantasports/')[0] + '/talantasports/t/?token=' + encodeURIComponent(token); }
  function publicListingUrl(listingId) { return window.location.origin + window.location.pathname.split('/talantasports/')[0] + '/talantasports/resale/' + EVENT.slug + '/?listing=' + encodeURIComponent(listingId); }
  function loginPath(prefix) { return (prefix || '../') + 'login/'; }
  function requireReseller(prefix) {
    var current = auth();
    if (!current || !current.signedIn) { window.location.href = loginPath(prefix); return false; }
    if (current.role !== 'reseller' || current.roleApproved !== true) {
      var main = document.querySelector('main');
      if (main) main.innerHTML = '<div class="notice error"><strong>Reseller access is not approved.</strong><br>Your account needs the reseller role approved by an administrator.</div><a class="button" href="' + loginPath(prefix) + '">Return to login</a>';
      return false;
    }
    return true;
  }
  function requireSignedIn(prefix) {
    var current = auth();
    if (!current || !current.signedIn) { window.location.href = loginPath(prefix); return false; }
    return true;
  }
  function applyTheme() {
    var root = document.body;
    var button = document.querySelector('[data-theme-toggle]');
    var theme = 'light';
    try { theme = localStorage.getItem('webticket-theme') || 'light'; } catch (ignore) {}
    function setTheme(value) { root.classList.toggle('dark-mode', value === 'dark'); if (button) button.textContent = value === 'dark' ? '☀ Light' : '☾ Dark'; try { localStorage.setItem('webticket-theme', value); } catch (ignore) {} }
    setTheme(theme);
    if (button) button.addEventListener('click', function () { setTheme(root.classList.contains('dark-mode') ? 'light' : 'dark'); });
  }
  function nav(prefix, active, admin) {
    return '<header class="appbar"><a class="wordmark" href="' + prefix + '">Talanta Sports City</a><nav class="appnav"><a class="' + (active === 'reseller' ? 'active' : '') + '" href="' + prefix + 'reseller/">My Tickets</a><a class="' + (active === 'transfers' ? 'active' : '') + '" href="' + prefix + 'reseller/transfers/">Transfers</a><a class="' + (active === 'marketplace' ? 'active' : '') + '" href="' + prefix + 'resale/' + EVENT.slug + '/">Marketplace</a><a href="' + prefix + 'scan/">Gate scan</a>' + (admin ? '<a class="' + (active === 'admin' ? 'active' : '') + '" href="' + prefix + 'admin/resale/">Admin</a>' : '') + '<button class="theme-button" data-theme-toggle type="button">☾ Dark</button><a href="' + prefix + 'account/tickets/">Account</a></nav></header>';
  }
  function boot() { ensureData(); applyTheme(); }
  function toast(message, kind) {
    var item = document.getElementById('toast');
    if (!item) { item = document.createElement('div'); item.id = 'toast'; item.style.cssText = 'position:fixed;right:18px;bottom:18px;z-index:20;max-width:360px;padding:13px 16px;color:#fff;background:' + (kind === 'error' ? '#bb0000' : '#0a7a3d') + ';font-size:12px;font-weight:700;box-shadow:0 10px 30px #0004'; document.body.appendChild(item); }
    item.textContent = message; item.style.background = kind === 'error' ? '#bb0000' : '#0a7a3d'; item.style.display = 'block'; window.clearTimeout(item._timer); item._timer = window.setTimeout(function () { item.style.display = 'none'; }, 4200);
  }
  function sendOtp(target, purpose) {
    var code = purpose === 'client' || purpose.indexOf('client-') === 0 ? '483216' : '742901';
    var records = read(KEYS.otp, {}); records[purpose + ':' + target] = { code: code, expiresAt: now() + settings().otpExpiryMinutes * 60000 }; write(KEYS.otp, records); return code;
  }
  function verifyOtp(target, purpose, code) { var records = read(KEYS.otp, {}), record = records[purpose + ':' + target]; return !!(record && record.expiresAt > now() && record.code === code); }
  function otpInputs(container) {
    var inputs = Array.prototype.slice.call(container.querySelectorAll('.otp-box'));
    inputs.forEach(function (input, index) { input.addEventListener('input', function () { input.value = input.value.replace(/[^0-9]/g, '').slice(0, 1); if (input.value && inputs[index + 1]) inputs[index + 1].focus(); }); input.addEventListener('keydown', function (event) { if (event.key === 'Backspace' && !input.value && inputs[index - 1]) inputs[index - 1].focus(); }); });
    return function () { return inputs.map(function (input) { return input.value; }).join(''); };
  }
  function qr(container, seed) {
    var size = 21, tick = Math.floor(now() / (settings().qrTtlSeconds * 1000)), value = String(seed) + ':' + tick, grid = [];
    var hash = 2166136261; for (var h = 0; h < value.length; h++) { hash ^= value.charCodeAt(h); hash = Math.imul(hash, 16777619); }
    function finder(x, y, row, col) { var dx = col - x, dy = row - y; return dx >= 0 && dx < 7 && dy >= 0 && dy < 7 && (dx === 0 || dx === 6 || dy === 0 || dy === 6 || (dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4)); }
    container.innerHTML = '';
    for (var row = 0; row < size; row++) for (var col = 0; col < size; col++) { var on = finder(0, 0, row, col) || finder(14, 0, row, col) || finder(0, 14, row, col); if (!on) { hash = Math.imul(hash ^ (row * 31 + col * 17), 16777619); on = ((hash >>> 3) & 1) === 1; } var cell = document.createElement('span'); cell.className = 'qr-cell' + (on ? ' on' : ''); container.appendChild(cell); }
    var label = container.parentElement && container.parentElement.querySelector('[data-qr-label]'); if (label) label.textContent = 'Rotating secure code · refreshes every ' + settings().qrTtlSeconds + ' seconds';
  }
  function formatTicketDetails(ticket) { return '<div class="ticket-name">' + esc(EVENT.name) + '</div><div class="ticket-meta">' + esc(EVENT.date) + ' · ' + esc(EVENT.time) + ' · ' + esc(ticket.gate) + '</div><div class="ticket-meta">Section ' + esc(ticket.section) + ' · Row ' + esc(ticket.row) + ' · Seat ' + esc(ticket.seat) + '</div>'; }

  window.WT = { EVENT: EVENT, DEFAULTS: DEFAULTS, KEYS: KEYS, read: read, write: write, now: now, uid: uid, esc: esc, money: money, dateTime: dateTime, settings: settings, auth: auth, setAuth: setAuth, getTickets: getTickets, getListings: getListings, getTransfers: getTransfers, audit: audit, ensureData: ensureData, statusBadge: statusBadge, getTicket: getTicket, activeListingFor: activeListingFor, publicTransferUrl: publicTransferUrl, publicListingUrl: publicListingUrl, requireReseller: requireReseller, requireSignedIn: requireSignedIn, applyTheme: applyTheme, nav: nav, boot: boot, toast: toast, sendOtp: sendOtp, verifyOtp: verifyOtp, otpInputs: otpInputs, qr: qr, formatTicketDetails: formatTicketDetails };
}());
