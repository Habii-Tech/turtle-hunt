document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S8 — ENCERRAMENTO -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-white" id="s8" data-i="9">
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logotipo_branco.png" alt="Habii.tech" style="height:150px;width:auto;display:block;padding-left:0;">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-[#8FA398]">Obrigado</span>
  </div>
  <div class="flex-1 grid grid-cols-2 gap-0 pt-20 min-h-0">
    <!-- left photo -->
    <div class="relative overflow-hidden border-r border-[#DDE8E2] min-h-0">
      <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=85&auto=format&fit=crop" alt="Equipe Habii.tech reunida" class="absolute inset-0 w-full h-full object-cover block">
      <div class="absolute inset-0 z-[1]" style="background:linear-gradient(to top, rgba(12,20,16,.75) 0%, rgba(12,20,16,.15) 55%)"></div>
      <div class="absolute bottom-10 left-10 right-10 z-[2] pointer-events-none">
        <h3 class="text-[26px] font-black text-white tracking-[-0.02em] mb-[6px]">Habii.tech</h3>
        <p class="text-[13px] text-white/50">Curitiba, Paraná, Brasil</p>
      </div>
    </div>
    <!-- right -->
    <div class="px-14 py-12 flex flex-col justify-center overflow-y-auto">
      <div class="text-[11px] font-bold tracking-[.1em] uppercase text-[#158A3E] mb-[14px]">Próximos passos</div>
      <h2 class="text-[clamp(36px,4vw,54px)] font-black leading-none tracking-[-0.03em] text-[#0C1410] mb-5">Vamos<br><em class="text-[#6EBF8B] not-italic">construir juntos?</em></h2>
      <p class="text-[16px] text-[#5C6E64] leading-[1.78] mb-[18px]">Entre em contato para mais informações ou para agendar uma reunião e discutir o projeto do <strong class="text-[#1F2B23] font-semibold">Turtle Hunt</strong>.</p>
      <div class="flex flex-col gap-[10px] mt-7">
        <div class="flex items-center gap-[14px] px-4 py-[13px] bg-[#F4F8F5] border border-[#DDE8E2] rounded-[10px]">
          <div class="w-9 h-9 bg-[#0C1410] rounded-[9px] flex items-center justify-center flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </div>
          <div>
            <div class="text-[11px] font-bold text-[#8FA398] tracking-[.05em] uppercase mb-[2px]">Instagram</div>
            <div class="text-[13px] text-[#1F2B23] font-semibold">@habii.tech</div>
          </div>
        </div>
        <div class="flex items-center gap-[14px] px-4 py-[13px] bg-[#F4F8F5] border border-[#DDE8E2] rounded-[10px]">
          <div class="w-9 h-9 bg-[#0C1410] rounded-[9px] flex items-center justify-center flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
          </div>
          <div>
            <div class="text-[11px] font-bold text-[#8FA398] tracking-[.05em] uppercase mb-[2px]">LinkedIn</div>
            <div class="text-[13px] text-[#1F2B23] font-semibold">/habii.tech</div>
          </div>
        </div>
        <div class="flex items-center gap-[14px] px-4 py-[13px] bg-[#F4F8F5] border border-[#DDE8E2] rounded-[10px]">
          <div class="w-9 h-9 bg-[#0C1410] rounded-[9px] flex items-center justify-center flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </div>
          <div>
            <div class="text-[11px] font-bold text-[#8FA398] tracking-[.05em] uppercase mb-[2px]">Site</div>
            <div class="text-[13px] text-[#1F2B23] font-semibold">www.habii.tech</div>
          </div>
        </div>
      </div>
      <a href="https://www.habii.tech" class="cta block bg-[#0C1410] text-white text-center text-[15px] font-bold px-7 py-4 rounded-full no-underline mt-7 transition-colors duration-200">Visitar habii.tech →</a>
      <div class="text-[12px] text-[#C4D0CB] text-center mt-3">Habii Tech Ltda · CNPJ 52.754.436/0001-70 · Curitiba – PR</div>
    </div>
  </div>
</section>
`);
