(function() {
  let current = 0;
  function buildPhone(fill, label, idx) {
    const positions = [
      { left:420, top:-30, scale:.92, z:1, opacity:.78 },
      { left:260, top:-12, scale:.98, z:2, opacity:.95 },
      { left:80, top:0, scale:1.08, z:3, opacity:1 },
    ];
    const pos = positions[idx % 3];
    return `<div style="position:absolute;left:${pos.left}px;top:${pos.top}px;transform:rotate(10deg) scale(${pos.scale});transform-origin:center center;z-index:${pos.z};opacity:${pos.opacity};transition:all .4s ease;">
      <svg viewBox="0 0 110 220" width="220" height="440" style="display:block;filter:drop-shadow(rgba(0,0,0,.45) 0px 12px 24px);">
        <rect x="0" y="0" width="110" height="220" rx="16" fill="#0C1410"/>
        <rect x="5" y="5" width="100" height="210" rx="12" fill="${fill}"/>
        <rect x="42" y="9" width="26" height="4" rx="2" fill="rgba(0,0,0,.55)"/>
        <text x="14" y="26" font-size="6.5" font-weight="700" fill="rgba(0,0,0,.55)" font-family="sans-serif">9:41</text>
        <text x="55" y="36" text-anchor="middle" font-size="${label.length>7?7:9}" font-weight="900" fill="rgba(0,0,0,.75)" font-family="sans-serif">${label}</text>
        <rect x="12" y="44" width="86" height="14" rx="3" fill="rgba(0,0,0,.18)"/>
        <rect x="12" y="66" width="40" height="50" rx="5" fill="rgba(0,0,0,.12)"/><rect x="16" y="104" width="22" height="3" rx="1.5" fill="rgba(255,255,255,.7)"/>
        <rect x="56" y="66" width="40" height="50" rx="5" fill="rgba(0,0,0,.12)"/><rect x="60" y="104" width="22" height="3" rx="1.5" fill="rgba(255,255,255,.7)"/>
        <rect x="12" y="120" width="40" height="50" rx="5" fill="rgba(0,0,0,.12)"/><rect x="56" y="120" width="40" height="50" rx="5" fill="rgba(0,0,0,.12)"/>
        <rect x="12" y="186" width="86" height="22" rx="11" fill="rgba(0,0,0,.35)"/>
        <rect x="41" y="214" width="28" height="2" rx="1" fill="rgba(0,0,0,.45)"/>
      </svg>
    </div>`;
  }
  function buildRealPhone(imgSrc, idx) {
    const positions = [
      { left:420, top:-30, scale:.92, z:1, opacity:.78 },
      { left:260, top:-12, scale:.98, z:2, opacity:.95 },
      { left:80, top:0, scale:1.08, z:3, opacity:1 },
    ];
    const pos = positions[idx % 3];
    return `<div style="position:absolute;left:${pos.left}px;top:${pos.top}px;transform:rotate(10deg) scale(${pos.scale});transform-origin:center center;z-index:${pos.z};opacity:${pos.opacity};transition:all .4s ease;">
      <img src="${imgSrc}" style="height:440px;width:auto;display:block;filter:drop-shadow(rgba(0,0,0,.5) 0px 16px 32px);" />
    </div>`;
  }
  function buildCaseImage(imgSrc) {
    return `<div style="position:absolute;left:0;top:-10%;right:0;bottom:-10%;display:flex;align-items:center;justify-content:flex-end;">
      <img src="${imgSrc}" style="height:140%;width:auto;object-fit:contain;display:block;filter:drop-shadow(rgba(0,0,0,.4) 0px 16px 40px);" />
    </div>`;
  }
  function buildInProgressVisual(c) {
    return `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">
      <div style="text-align:center;max-width:360px;padding:0 20px;">
        <div style="font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgb(52,199,89);margin-bottom:14px;">Sua empresa aqui</div>
        <div style="font-size:30px;font-weight:900;color:#fff;letter-spacing:-.03em;line-height:1.15;margin-bottom:16px;">O próximo case<br><em style="color:rgb(52,199,89);font-style:normal;">pode ser você.</em></div>
      </div>
    </div>`;
  }
  function renderPhones(c) {
    const mainCase = CASES[c];
    if (mainCase.inProgress) {
      return buildInProgressVisual(mainCase);
    }
    if (mainCase.caseImg) {
      return buildCaseImage(mainCase.caseImg);
    }
    const p2=(c-2+CASES.length)%CASES.length, p1=(c-1+CASES.length)%CASES.length;
    const mainPhone = buildPhone(mainCase.screenFill, mainCase.name, 2);
    return buildPhone(CASES[p2].screenFill,CASES[p2].name,0)+buildPhone(CASES[p1].screenFill,CASES[p1].name,1)+mainPhone;
  }
  function updateDetail(idx) {
    const c=CASES[idx], d=document.getElementById('pf-detail');
    d.classList.add('pf-fade');
    setTimeout(()=>{
      document.getElementById('pf-counter').textContent=String(idx+1).padStart(2,'0')+' / 0'+CASES.length;
      if(c.logo){
        document.getElementById('pf-name').innerHTML=`<img src="${c.logo}" style="height:${c.logoHeight||'72px'};width:auto;object-fit:contain;display:block;" alt="${c.name}">`;
        document.getElementById('pf-name').style.color='';
        document.getElementById('pf-name').style.fontStyle='';
      } else {
        document.getElementById('pf-name').textContent=c.name;
        document.getElementById('pf-name').style.color=c.color;
        document.getElementById('pf-name').style.fontStyle=c.nameStyle;
      }
      document.getElementById('pf-meta').textContent=c.segment+' · '+c.country;
      document.getElementById('pf-desc').textContent=c.desc;
      if(c.inProgress){
        document.getElementById('pf-stat').innerHTML=`
          <div style="display:flex;flex-direction:column;gap:10px;width:100%;">
            <div style="display:flex;align-items:center;">
              <span style="font-size:10.5px;font-weight:700;padding:6px 12px;border-radius:100px;background:rgba(52,199,89,.08);border:1px solid rgba(52,199,89,.25);color:rgba(52,199,89,.85);letter-spacing:.04em;">${c.platform}</span>
            </div>
          </div>`;
      } else {
        document.getElementById('pf-stat').innerHTML=`
          <div style="padding-right:22px;border-right:1px solid rgba(255,255,255,.1);">
            <div id="pf-stat-n" style="font-size:30px;font-weight:900;color:#fff;letter-spacing:-.025em;line-height:1;">${c.statN}</div>
            <div id="pf-stat-l" style="font-size:11px;color:rgba(255,255,255,.45);margin-top:6px;font-weight:500;max-width:140px;line-height:1.4;">${c.statL}</div>
          </div>
          <div style="display:flex;align-items:center;">
            <span id="pf-platform" style="font-size:10.5px;font-weight:700;padding:6px 12px;border-radius:100px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);color:rgba(255,255,255,.7);letter-spacing:.04em;">${c.platform}</span>
          </div>`;
      }
      document.getElementById('pf-glow').style.background=c.glowColor;
      document.getElementById('pf-phones').innerHTML=renderPhones(idx);
      d.classList.remove('pf-fade');
    },160);
  }
  function selectCase(idx) {
    current=idx; updateDetail(idx);
    document.querySelectorAll('.pf-card').forEach((el,i)=>{
      el.classList.toggle('pf-active',i===idx);
      el.style.opacity=i===idx?'1':'0.55';
    });
  }
  function buildCards() {
    const container=document.getElementById('pf-cards');
    CASES.forEach((c,i)=>{
      const div=document.createElement('div');
      div.className='pf-card'+(i===0?' pf-active':'');
      div.style.cssText='flex:1 1 0%;padding:14px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.05);border-radius:12px;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;min-height:80px;position:relative;overflow:hidden;transition:all .22s ease;';
      if(i!==0) div.style.opacity='0.55';
      if(c.inProgress) {
        div.style.background='linear-gradient(135deg,rgba(52,199,89,.12) 0%,rgba(52,199,89,.03) 100%)';
        div.style.border='1px dashed rgba(52,199,89,.55)';
        div.style.opacity='1';
        div.innerHTML=`<div style="position:absolute;right:-14px;top:-14px;width:48px;height:48px;border-radius:50%;background:${c.color};opacity:0.12;"></div>
          <div style="position:relative;">
            <div style="display:flex;align-items:center;gap:5px;margin-bottom:5px;">
              <span style="width:5px;height:5px;border-radius:50%;background:rgb(52,199,89);box-shadow:rgba(52,199,89,.3) 0 0 0 3px;"></span>
              <span style="font-size:8px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgb(52,199,89);">Próximo case</span>
            </div>
            <div style="font-size:13px;font-weight:800;color:${c.color};letter-spacing:-.015em;line-height:1.2;">${c.name}</div>
            <div style="font-size:9.5px;color:rgba(255,255,255,.45);margin-top:4px;font-weight:500;">${c.segment}</div>
          </div>
          <div style="font-size:9px;color:rgba(52,199,89,.8);font-weight:700;">O próximo pode ser você →</div>`;
      } else {
        const nameContent = c.logo
          ? `<img src="${c.logo}" style="height:${c.logoHeight ? Math.round(parseInt(c.logoHeight)*18/72)+'px' : '18px'};width:auto;object-fit:contain;display:block;" alt="${c.name}">`
          : `<span style="font-size:16px;font-weight:800;color:${c.color};letter-spacing:-.015em;line-height:1;font-style:${c.nameStyle};">${c.name}</span>`;
        div.innerHTML=`<div style="position:absolute;right:-14px;top:-14px;width:48px;height:48px;border-radius:50%;background:${c.color};opacity:0.08;"></div>
          <div style="position:relative;"><div style="line-height:1;">${nameContent}</div><div style="font-size:9.5px;color:rgba(255,255,255,.35);margin-top:5px;font-weight:500;">${c.segment}</div></div>
          <div style="font-size:9px;color:rgba(255,255,255,.3);font-weight:500;">${c.country}</div>`;
      }
      div.addEventListener('click',()=>selectCase(i));
      container.appendChild(div);
    });
  }
  document.addEventListener('DOMContentLoaded',function(){
    buildCards();
    document.getElementById('pf-phones').innerHTML=renderPhones(0);
    document.getElementById('pf-glow').style.background=CASES[0].glowColor;
    updateDetail(0);
  });

  // ── Impressão / PDF: um slide estático por case ──────────────────────────
  function buildPrintSlide(c, idx) {
    var total = '0' + CASES.length;
    var counter = String(idx + 1).padStart(2, '0') + ' / ' + total;

    var nameContent = c.logo
      ? '<img src="' + c.logo + '" style="height:' + (c.logoHeight || '72px') + ';width:auto;object-fit:contain;display:block;" alt="' + c.name + '">'
      : '<span style="font-size:64px;font-weight:900;color:' + c.color + ';letter-spacing:-.035em;line-height:.95;font-style:' + c.nameStyle + ';">' + c.name + '</span>';

    var statContent = c.inProgress
      ? '<div style="display:flex;align-items:center;"><span style="font-size:10.5px;font-weight:700;padding:6px 12px;border-radius:100px;background:rgba(52,199,89,.08);border:1px solid rgba(52,199,89,.25);color:rgba(52,199,89,.85);letter-spacing:.04em;">' + c.platform + '</span></div>'
      : '<div style="padding-right:22px;border-right:1px solid rgba(255,255,255,.1);">'
          + '<div style="font-size:30px;font-weight:900;color:#fff;letter-spacing:-.025em;line-height:1;">' + c.statN + '</div>'
          + '<div style="font-size:11px;color:rgba(255,255,255,.45);margin-top:6px;font-weight:500;max-width:140px;line-height:1.4;">' + c.statL + '</div>'
        + '</div>'
        + '<div style="display:flex;align-items:center;">'
          + '<span style="font-size:10.5px;font-weight:700;padding:6px 12px;border-radius:100px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);color:rgba(255,255,255,.7);letter-spacing:.04em;">' + c.platform + '</span>'
        + '</div>';

    var visualContent = c.inProgress
      ? buildInProgressVisual(c)
      : c.caseImg
        ? buildCaseImage(c.caseImg)
        : renderPhones(idx);

    return '<section class="slide pf-print-slide" style="width:100%;position:relative;overflow:hidden;display:flex;flex-direction:column;background:rgb(31,43,35);color:white;" data-print-i="' + idx + '">'
      + '<div class="pf-bg-grid"></div>'
      + '<div style="position:absolute;top:0;left:0;right:0;height:72px;display:flex;align-items:center;justify-content:space-between;padding:0 54px;z-index:10;">'
        + '<img src="assets/images/logo.png" alt="Habii.tech" style="height:28px;width:auto;display:block;margin-left:20px">'
        + '<span style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.3);">Portfólio · ' + counter + '</span>'
      + '</div>'
      + '<div style="position:relative;z-index:5;flex:1;display:flex;flex-direction:column;padding:48px 56px 24px;">'
        + '<div style="display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:14px;gap:40px;">'
          + '<div>'
            + '<div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#1DB954;margin-bottom:12px;margin-top:20px;">Cases de sucesso</div>'
            + '<h2 style="font-size:44px;font-weight:900;line-height:1;letter-spacing:-.03em;color:#fff;margin:0;">Projetos entregues. <em style="color:rgba(29,185,84,.28);font-style:normal;">Clientes satisfeitos.</em></h2>'
          + '</div>'
          + '<div style="text-align:right;">'
            + '<div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.35);margin-bottom:6px;">Volume &amp; alcance</div>'
            + '<div style="font-size:13px;color:rgba(255,255,255,.5);max-width:320px;line-height:1.55;"><strong style="color:#fff;font-weight:600;">8 apps em produção</strong>, em 6 segmentos, para clientes no Brasil, EUA e Reino Unido.</div>'
          + '</div>'
        + '</div>'
        + '<div style="position:relative;background:linear-gradient(135deg,rgba(255,255,255,.043) 0%,rgba(255,255,255,.016) 100%);border:1px solid rgba(255,255,255,.08);border-radius:24px;padding:36px 40px;flex:1;min-height:0;overflow:hidden;display:flex;">'
          + '<div style="position:absolute;left:-8%;bottom:-30%;width:50%;height:120%;border-radius:50%;background:' + c.glowColor + ';opacity:0.09;pointer-events:none;"></div>'
          + '<div style="position:relative;z-index:5;width:420px;display:flex;flex-direction:column;flex-shrink:0;">'
            + '<div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;">'
              + '<span style="display:inline-flex;align-items:center;gap:6px;padding:5px 10px;border-radius:100px;background:rgba(29,185,84,.12);border:1px solid rgba(29,185,84,.25);">'
                + '<span style="width:5px;height:5px;border-radius:50%;background:#1DB954;"></span>'
                + '<span style="font-size:9.5px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#1DB954;">Em destaque</span>'
              + '</span>'
              + '<span style="width:14px;height:1px;background:rgba(255,255,255,.18);"></span>'
              + '<span style="font-size:10px;font-weight:600;letter-spacing:.08em;color:rgba(255,255,255,.5);">' + counter + '</span>'
            + '</div>'
            + '<div style="margin-bottom:8px;">' + nameContent + '</div>'
            + '<div style="font-size:14px;font-weight:600;color:rgba(255,255,255,.5);margin-bottom:22px;letter-spacing:.02em;">' + c.segment + ' · ' + c.country + '</div>'
            + '<div style="font-size:17px;line-height:1.55;color:rgba(255,255,255,.82);font-weight:400;margin-bottom:22px;max-width:380px;">' + c.desc + '</div>'
            + '<div style="display:flex;gap:22px;align-items:stretch;">' + statContent + '</div>'
          + '</div>'
          + '<div style="position:relative;flex:1;min-width:0;">' + visualContent + '</div>'
        + '</div>'
      + '</div>'
    + '</section>';
  }

  var _printContainer = null;

  window.addEventListener('beforeprint', function () {
    if (_printContainer) return;
    var s9 = document.getElementById('s9');
    _printContainer = document.createElement('div');
    _printContainer.id = 'pf-print-pages';
    CASES.forEach(function (c, i) {
      _printContainer.insertAdjacentHTML('beforeend', buildPrintSlide(c, i));
    });
    s9.insertAdjacentElement('afterend', _printContainer);
    s9.style.setProperty('display', 'none', 'important');
  });

  window.addEventListener('afterprint', function () {
    if (!_printContainer) return;
    var s9 = document.getElementById('s9');
    _printContainer.remove();
    _printContainer = null;
    s9.style.removeProperty('display');
  });
})();
