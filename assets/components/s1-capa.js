document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S1 — CAPA -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col" id="s1" data-i="0" style="background:#111A12;">
  <!-- Grid sutil -->
  <div class="bg-grid" style="opacity:.5;"></div>
  <!-- Glow esquerdo — verde Habii -->
  <div class="absolute left-0 top-0 w-[55%] h-full pointer-events-none" style="background:radial-gradient(ellipse 70% 60% at 10% 55%, rgba(29,185,84,.08) 0%, transparent 70%);"></div>
  <!-- Glow direito — verde musgo do app -->
  <div class="absolute right-0 top-0 w-[65%] h-full pointer-events-none" style="background:radial-gradient(ellipse 80% 90% at 85% 60%, rgba(42,68,34,.65) 0%, rgba(24,40,20,.30) 55%, transparent 80%);"></div>
  <!-- Vinheta inferior -->
  <div class="absolute bottom-0 left-0 right-0 h-[180px] pointer-events-none" style="background:linear-gradient(to top, rgba(10,15,10,.6) 0%, transparent 100%);"></div>

  <!-- bar -->
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <a class="flex items-center no-underline" href="#">
      <img src="assets/images/logo.png" alt="Habii.tech" style="height:28px;width:auto;display:block;margin-left:30px">
    </a>
    <span class="text-[11px] font-bold tracking-[.1em] uppercase" style="color:rgba(255,255,255,.25);">Proposta Comercial · 2026</span>
  </div>

  <!-- body -->
  <div class="relative z-[5] flex-1 grid grid-cols-2 gap-0 items-center pt-[88px] px-16 pb-8">
    <!-- Coluna esquerda — texto -->
    <div>
      <div class="inline-flex items-center gap-[7px] border text-[11px] font-bold px-[14px] py-[6px] rounded-full tracking-[.08em] uppercase mb-7" style="background:rgba(29,185,84,.10); border-color:rgba(29,185,84,.25); color:#1DB954;">
        <span class="w-[5px] h-[5px] rounded-full block" style="background:#1DB954;"></span>Proposta Comercial · 2026
      </div>
      <h1 class="font-black leading-[.95] tracking-[-0.04em] text-white mb-6" style="font-size:clamp(50px,5.8vw,80px);">
        Proposta<br>
        <em class="not-italic" style="color:#1DB954;">Comercial</em><br>
        <span style="color:rgba(255,255,255,.18);">Turtle Hunt</span>
      </h1>
      <p class="leading-[1.72] max-w-[460px] mb-[52px]" style="font-size:17px; color:rgba(255,255,255,.42);">
        Desenvolvimento de <strong style="color:rgba(255,255,255,.72); font-weight:600;">aplicativo mobile + painel administrativo web</strong> para o <strong style="color:rgba(255,255,255,.72); font-weight:600;">Turtle Hunt, em Curitiba/PR</strong>
      </p>
    </div>

    <!-- Coluna direita — mockup real -->
    <div style="display:flex; justify-content:center; align-items:center; position:relative; z-index:5;">
      <!-- halo de luz atrás do phone -->
      <div style="position:absolute; width:340px; height:500px; border-radius:50%; background:radial-gradient(ellipse at center, rgba(42,75,35,.55) 0%, transparent 72%); filter:blur(32px); pointer-events:none;"></div>
      <img
        src="assets/images/mockup_turtle.png"
        alt="Turtle Hunt app mockup"
        style="position:relative; z-index:1; height:540px; width:auto; object-fit:contain; filter:drop-shadow(0 32px 64px rgba(0,0,0,.7)) drop-shadow(0 0 1px rgba(255,255,255,.06));"
      >
    </div>
  </div>
</section>
`);
