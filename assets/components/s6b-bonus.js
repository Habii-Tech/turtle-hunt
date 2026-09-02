document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S6B — BÔNUS / FECHE AGORA -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-white" id="s6b" data-i="8">

  <!-- glows decorativos de fundo -->
  <div class="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none" style="background:radial-gradient(circle,rgba(29,185,84,.10) 0%,transparent 70%);"></div>
  <div class="absolute bottom-0 left-[5%] w-[320px] h-[320px] rounded-full pointer-events-none" style="background:radial-gradient(circle,rgba(29,185,84,.06) 0%,transparent 70%);"></div>

  <!-- header bar -->
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logotipo_branco.png" alt="Habii.tech" style="height:150px;width:auto;display:block;padding-left:0;">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-[#8FA398]">Oferta Exclusiva</span>
  </div>

  <div class="flex-1 grid grid-cols-2 gap-0 pt-20">

    <!-- coluna esquerda -->
    <div class="px-14 py-12 flex flex-col justify-center border-r border-[#DDE8E2]">
      <div class="text-[11px] font-bold tracking-[.1em] uppercase text-[#158A3E] mb-[14px]">Feche em Setembro</div>
      <h2 class="text-[clamp(36px,4vw,54px)] font-black leading-none tracking-[-0.03em] text-[#0C1410] mb-5">O que você ganha<br><em class="text-[#6EBF8B] not-italic"> fechando agora.</em></h2>
      <p class="text-[16px] text-[#5C6E64] leading-[1.78] mb-10 max-w-[400px]">Contratos assinados até o fim de maio levam um site institucional completo sem custo adicional, entregue em até 30 dias, antes mesmo do app ficar pronto.</p>

      <!-- lista de benefícios -->
      <div class="flex flex-col gap-3 mt-2">
        <div class="flex items-center gap-[14px] px-[18px] py-[14px] bg-[#F0FDF4] border border-[#BBF7D0] rounded-[14px]">
          <div class="w-[38px] h-[38px] flex-shrink-0 bg-gradient-to-br from-[#4CAF50] to-[#1B5E20] rounded-[10px] flex items-center justify-center shadow-[0_4px_12px_rgba(27,94,32,.25)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div>
            <div class="text-[13px] font-bold text-[#1B5E20]">Presença digital imediata</div>
            <div class="text-[11.5px] text-[#5C6E64] mt-[2px] leading-[1.4]">Sua landing page online enquanto o app é desenvolvido</div>
          </div>
        </div>
        <div class="flex items-center gap-[14px] px-[18px] py-[14px] bg-[#F0FDF4] border border-[#BBF7D0] rounded-[14px]">
          <div class="w-[38px] h-[38px] flex-shrink-0 bg-gradient-to-br from-[#4CAF50] to-[#1B5E20] rounded-[10px] flex items-center justify-center shadow-[0_4px_12px_rgba(27,94,32,.25)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <div>
            <div class="text-[13px] font-bold text-[#1B5E20]">Entrega em até 30 dias</div>
            <div class="text-[11.5px] text-[#5C6E64] mt-[2px] leading-[1.4]">A partir da assinatura do contrato</div>
          </div>
        </div>
        <div class="flex items-center gap-[14px] px-[18px] py-[14px] bg-[#F0FDF4] border border-[#BBF7D0] rounded-[14px]">
          <div class="w-[38px] h-[38px] flex-shrink-0 bg-gradient-to-br from-[#4CAF50] to-[#1B5E20] rounded-[10px] flex items-center justify-center shadow-[0_4px_12px_rgba(27,94,32,.25)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <div>
            <div class="text-[13px] font-bold text-[#1B5E20]">Sem custo adicional</div>
            <div class="text-[11.5px] text-[#5C6E64] mt-[2px] leading-[1.4]">Economia de <strong class="text-[#158A3E] font-bold">R$ 4.000</strong> no seu investimento</div>
          </div>
        </div>
      </div>
    </div>

    <!-- coluna direita -->
    <div class="h-full flex flex-col gap-3 px-8 py-8" style="background:linear-gradient(160deg,#F0FDF4 0%,#DCFCE7 100%);">

      <!-- topo: só o badge -->
      <div class="flex-shrink-0 flex items-center gap-3">
        <div class="inline-flex items-center gap-[6px] bg-[#1DB954] text-white text-[10px] font-black tracking-[.1em] uppercase px-3 py-[5px] rounded-full">
          <span class="relative flex h-[8px] w-[8px]">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
            <span class="relative inline-flex h-[8px] w-[8px] rounded-full bg-white"></span>
          </span>
          Bônus exclusivo · Setembro/2026
        </div>
        <span class="text-[10px] font-bold tracking-[.14em] uppercase text-[#158A3E]/60">Site Institucional</span>
      </div>

      <!-- mockup -->
      <div class="select-none pointer-events-none relative flex-1 flex items-center justify-center" style="max-height:300px;">
        <div class="rounded-[14px] overflow-hidden border border-[#DDE8E2] shadow-[0_24px_64px_rgba(27,94,32,.18)] w-[82%]">
          <!-- barra do browser -->
          <div class="flex items-center gap-1.5 px-3 py-[9px] bg-[#F4F8F5] border-b border-[#DDE8E2]">
            <div class="w-[8px] h-[8px] rounded-full bg-[#FF5F57]/75"></div>
            <div class="w-[8px] h-[8px] rounded-full bg-[#FFBD2E]/75"></div>
            <div class="w-[8px] h-[8px] rounded-full bg-[#28C840]/75"></div>
            <div class="flex-1 mx-2 bg-[#DDE8E2] rounded-full h-[14px] flex items-center px-2.5">
              <span style="font-size:7px;color:#8FA398;font-family:monospace;white-space:nowrap;overflow:hidden;">turtlehunt.com.br</span>
            </div>
          </div>
          <!-- screenshot -->
          <div style="height:220px;overflow:hidden;">
            <img src="assets/images/mockup_turtle_site.svg" alt="Preview do site Turtle Hunt" style="width:100%;display:block;object-fit:cover;object-position:top;">
          </div>
        </div>
      </div>

      <!-- bloco de preço — inline -->
      <div class="flex-shrink-0 px-1">
        <div class="text-[10px] font-semibold tracking-[.08em] uppercase text-[#8FA398] mb-2">Site Institucional</div>
        <div class="flex items-baseline gap-3">
          <span class="font-black leading-none tracking-[-0.03em] text-[#8FA398] line-through" style="font-size:clamp(22px,2.4vw,28px);">R$ 4.000</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#BBF7D0" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          <span class="font-black leading-none tracking-[-0.04em] text-[#1DB954]" style="font-size:clamp(30px,3.2vw,40px);">GRÁTIS</span>
        </div>
        <div class="text-[10px] text-[#8FA398] mt-1.5">incluído no contrato</div>
      </div>

      <!-- rodapé: badges -->
      <div class="flex-shrink-0 flex items-center gap-2">
        <div class="flex items-center gap-1.5 bg-[#F4F8F5] rounded-full px-3 py-[7px]">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#8FA398" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span class="text-[11px] font-medium text-[#5C6E64]">Entrega em <strong class="text-[#0C1410] font-semibold">30 dias</strong></span>
        </div>
        <div class="flex items-center gap-1.5 bg-[#FFFBEB] rounded-full px-3 py-[7px]">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#D97706" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <span class="text-[11px] font-medium text-[#92400E]">Válido até 30/set</span>
        </div>
      </div>

    </div>
  </div>
</section>
`);
