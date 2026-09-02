document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S_ — POR QUE A HABII TECH -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col" id="s-porque-habii" data-i="4" style="background:#0C1410;">
  <!-- subtle grid overlay -->
  <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:48px 48px;pointer-events:none;"></div>
  <!-- green glow top-right -->
  <div style="position:absolute;right:-10%;top:-20%;width:55%;height:70%;background:radial-gradient(55% 60% at 65% 30%,rgba(29,185,84,.07) 0%,transparent 70%);pointer-events:none;"></div>

  <!-- header bar -->
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logo.png" alt="Habii.tech" style="height:28px;width:auto;display:block;margin-left:20px">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase" style="color:rgba(255,255,255,.3);">Por que a Habii?</span>
  </div>

  <!-- main content: left headline + right cards -->
  <div class="flex-1 grid pt-[72px]" style="grid-template-columns:1fr 1.85fr;">

    <!-- LEFT — headline panel -->
    <div style="border-right:1px solid rgba(255,255,255,.07);padding:48px 44px 48px 52px;display:flex;flex-direction:column;justify-content:center;position:relative;z-index:5;">
      <div style="font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#1DB954;margin-bottom:16px;">Nosso diferencial</div>
      <h2 style="font-size:clamp(38px,4vw,56px);font-weight:900;line-height:1.0;letter-spacing:-.035em;color:#fff;margin:0 0 22px;">Por que a<br><em style="color:rgba(29,185,84,.45);font-style:normal;">Habii Tech?</em></h2>
      <p style="font-size:16px;color:rgba(255,255,255,.55);line-height:1.72;margin:0 0 36px;max-width:320px;">Escolher a empresa certa é tão importante quanto a ideia em si. Veja o que nos torna a parceira ideal para construir o futuro digital do Turtle Hunt.</p>

      <!-- highlight stat -->
      <div style="background:rgba(29,185,84,.08);border:1px solid rgba(29,185,84,.2);border-radius:16px;padding:20px 24px;display:flex;align-items:center;gap:16px;">
        <div style="font-size:42px;font-weight:900;color:#1DB954;letter-spacing:-.04em;line-height:1;flex-shrink:0;">8</div>
        <div style="font-size:13.5px;color:rgba(255,255,255,.65);line-height:1.6;">apps em produção entregues<br><strong style="color:#fff;font-weight:600;">em 6 segmentos</strong>, no Brasil, EUA e Reino Unido.</div>
      </div>
    </div>

    <!-- RIGHT — differentiators grid -->
    <div style="padding:36px 44px 36px 40px;display:grid;grid-template-columns:1fr 1fr;gap:16px;align-content:center;position:relative;z-index:5;">

      <!-- Card 1 — Metodologia ágil -->
      <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:24px 26px;display:flex;flex-direction:column;gap:12px;">
        <div style="width:42px;height:42px;background:rgba(29,185,84,.12);border:1px solid rgba(29,185,84,.22);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DB954" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
        </div>
        <div style="font-size:15px;font-weight:700;color:#fff;letter-spacing:-.01em;line-height:1.3;">Metodologia ágil</div>
        <div style="font-size:13px;color:rgba(255,255,255,.5);line-height:1.62;">Sprints semanais, entregas incrementais e backlog priorizado. O produto evolui rápido, com visibilidade total do progresso.</div>
      </div>

      <!-- Card 2 — Stack consolidada -->
      <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:24px 26px;display:flex;flex-direction:column;gap:12px;">
        <div style="width:42px;height:42px;background:rgba(29,185,84,.12);border:1px solid rgba(29,185,84,.22);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DB954" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
        </div>
        <div style="font-size:15px;font-weight:700;color:#fff;letter-spacing:-.01em;line-height:1.3;">Stack dos maiores apps do mundo</div>
        <div style="font-size:13px;color:rgba(255,255,255,.5);line-height:1.62;">React Native, Expo, Node.js e PostgreSQL: a mesma base tecnológica do Instagram, Shopify e Discord. Madura, escalável e com ecossistema vasto.</div>
      </div>

      <!-- Card 3 — Cliente no processo -->
      <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:24px 26px;display:flex;flex-direction:column;gap:12px;">
        <div style="width:42px;height:42px;background:rgba(29,185,84,.12);border:1px solid rgba(29,185,84,.22);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DB954" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <div style="font-size:15px;font-weight:700;color:#fff;letter-spacing:-.01em;line-height:1.3;">Você dentro do desenvolvimento</div>
        <div style="font-size:13px;color:rgba(255,255,255,.5);line-height:1.62;">O cliente valida cada sprint. Nenhuma funcionalidade vai longe sem aprovação. O produto é construído junto, não entregue como surpresa.</div>
      </div>

      <!-- Card 4 — Design e usabilidade -->
      <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:24px 26px;display:flex;flex-direction:column;gap:12px;">
        <div style="width:42px;height:42px;background:rgba(29,185,84,.12);border:1px solid rgba(29,185,84,.22);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DB954" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>
        </div>
        <div style="font-size:15px;font-weight:700;color:#fff;letter-spacing:-.01em;line-height:1.3;">Design e usabilidade a sério</div>
        <div style="font-size:13px;color:rgba(255,255,255,.5);line-height:1.62;">Interface projetada para quem vai usar, não só para parecer bonito. Fluxos intuitivos que corredores adotam naturalmente, sem curva de aprendizado.</div>
      </div>

      <!-- Card 5 — Equipe própria -->
      <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:24px 26px;display:flex;flex-direction:column;gap:12px;">
        <div style="width:42px;height:42px;background:rgba(29,185,84,.12);border:1px solid rgba(29,185,84,.22);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DB954" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <div style="font-size:15px;font-weight:700;color:#fff;letter-spacing:-.01em;line-height:1.3;">Equipe 100% própria</div>
        <div style="font-size:13px;color:rgba(255,255,255,.5);line-height:1.62;">Sem terceirização. Designers, desenvolvedores e PMs dedicados ao seu projeto, do primeiro wireframe ao deploy em produção.</div>
      </div>

      <!-- Card 6 — Suporte pós-lançamento -->
      <div style="background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:24px 26px;display:flex;flex-direction:column;gap:12px;">
        <div style="width:42px;height:42px;background:rgba(29,185,84,.12);border:1px solid rgba(29,185,84,.22);border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1DB954" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </div>
        <div style="font-size:15px;font-weight:700;color:#fff;letter-spacing:-.01em;line-height:1.3;">Suporte pós-lançamento</div>
        <div style="font-size:13px;color:rgba(255,255,255,.5);line-height:1.62;">Presença garantida após o go-live, com manutenção, correções e evolução contínua. O projeto não termina na entrega.</div>
      </div>

    </div>
  </div>
</section>
`);
