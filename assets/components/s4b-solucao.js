document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S4b — MOCKUP / SOLUÇÃO VISUAL -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col" id="s4b" data-i="6" style="background:#111A12;">
  <!-- Grid -->
  <div class="bg-grid" style="opacity:.4;"></div>
  <!-- Glow esquerdo -->
  <div class="absolute left-0 top-0 w-[50%] h-full pointer-events-none" style="background:radial-gradient(ellipse 70% 60% at 5% 50%, rgba(29,185,84,.06) 0%, transparent 70%);"></div>
  <!-- Glow direito — musgo do app -->
  <div class="absolute right-0 top-0 w-[60%] h-full pointer-events-none" style="background:radial-gradient(ellipse 80% 90% at 90% 55%, rgba(38,60,30,.70) 0%, rgba(20,35,18,.35) 55%, transparent 80%);"></div>

  <!-- bar -->
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logo.png" alt="Habii.tech" style="height:28px;width:auto;display:block;margin-left:30px">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase" style="color:rgba(255,255,255,.25);">A solução · Turtle Hunt</span>
  </div>

  <div class="flex-1 grid grid-cols-2 gap-0 pt-[60px] pb-4 overflow-hidden">
    <!-- left — texto -->
    <div class="s4b-left px-14 py-10 flex flex-col justify-center" style="border-right:1px solid rgba(255,255,255,.07);">
      <div class="text-[11px] font-bold tracking-[.1em] uppercase mb-[14px]" style="color:#1DB954;">Prévia do produto</div>
      <h2 class="font-black leading-none tracking-[-0.03em] text-white mb-5" style="font-size:clamp(34px,3.8vw,52px);">
        A solução<br><em class="not-italic" style="color:#6EBF8B;">em suas mãos.</em>
      </h2>
      <p class="leading-[1.78] mb-[18px]" style="font-size:15px; color:rgba(255,255,255,.45); max-width:400px;">
        Uma experiência pós-corrida que transforma dados brutos em narrativa significativa. O corredor recebe não apenas métricas — recebe uma história sobre quem está se tornando.
      </p>
      <div class="flex flex-col gap-[10px] mt-5">
        <div class="s4b-feature flex items-center gap-[14px] px-[16px] py-[13px] rounded-[14px]" style="background:rgba(110,191,139,.07); border:1px solid rgba(110,191,139,.15);">
          <div class="w-[36px] h-[36px] flex-shrink-0 rounded-[10px] flex items-center justify-center" style="background:linear-gradient(135deg,#4CAF50,#1B5E20); box-shadow:0 4px 12px rgba(27,94,32,.35);">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          </div>
          <div>
            <div class="text-[13px] font-bold" style="color:#A8D5B8;">Motor de Interpretação</div>
            <div class="leading-[1.4] mt-[2px]" style="font-size:11.5px; color:rgba(255,255,255,.38);">Analisa splits e transforma padrões em conceitos semânticos explicáveis</div>
          </div>
        </div>
        <div class="s4b-feature flex items-center gap-[14px] px-[16px] py-[13px] rounded-[14px]" style="background:rgba(110,191,139,.07); border:1px solid rgba(110,191,139,.15);">
          <div class="w-[36px] h-[36px] flex-shrink-0 rounded-[10px] flex items-center justify-center" style="background:linear-gradient(135deg,#4CAF50,#1B5E20); box-shadow:0 4px 12px rgba(27,94,32,.35);">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
          <div>
            <div class="text-[13px] font-bold" style="color:#A8D5B8;">Narrativa com Otto, Lyz e Marvin</div>
            <div class="leading-[1.4] mt-[2px]" style="font-size:11.5px; color:rgba(255,255,255,.38);">Três perspectivas únicas transformam dados em história e vínculo emocional</div>
          </div>
        </div>
        <div class="s4b-feature flex items-center gap-[14px] px-[16px] py-[13px] rounded-[14px]" style="background:rgba(110,191,139,.07); border:1px solid rgba(110,191,139,.15);">
          <div class="w-[36px] h-[36px] flex-shrink-0 rounded-[10px] flex items-center justify-center" style="background:linear-gradient(135deg,#4CAF50,#1B5E20); box-shadow:0 4px 12px rgba(27,94,32,.35);">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </div>
          <div>
            <div class="text-[13px] font-bold" style="color:#A8D5B8;">Hunt Record</div>
            <div class="leading-[1.4] mt-[2px]" style="font-size:11.5px; color:rgba(255,255,255,.38);">Registro colecionável e compartilhável: uma memória, não um relatório</div>
          </div>
        </div>
      </div>
    </div>

    <!-- right — mockup real -->
    <div class="s4b-right flex items-center justify-center relative overflow-hidden">
      <!-- halo atrás da imagem -->
      <div style="position:absolute; width:420px; height:420px; border-radius:50%; background:radial-gradient(ellipse at center, rgba(40,70,32,.55) 0%, transparent 70%); filter:blur(40px); pointer-events:none;"></div>
      <img
        src="assets/images/tutle_solucao.png"
        alt="Turtle Hunt — telas do app"
        style="position:relative; z-index:1; max-height:86%; max-width:80%; width:auto; object-fit:contain; filter:drop-shadow(0 24px 56px rgba(0,0,0,.65)) drop-shadow(0 0 1px rgba(255,255,255,.04));"
      >
    </div>
  </div>
</section>
`);
