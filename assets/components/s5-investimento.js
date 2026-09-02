document.getElementById("slides-container").insertAdjacentHTML(
  "beforeend",
  `
<!-- S5 — INVESTIMENTO -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-[#F4F8F5]" id="s5" data-i="9">
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logotipo_branco.png" alt="Habii.tech" style="height:150px;width:auto;display:block;padding-left:0;">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-[#8FA398]">Investimento</span>
  </div>
  <div class="flex-1 grid grid-cols-2 gap-0 pt-20">
    <!-- left -->
    <div class="px-14 py-12 flex flex-col justify-center">
      <div class="text-[11px] font-bold tracking-[.1em] uppercase text-[#158A3E] mb-[14px]">Valores</div>
      <h2 class="text-[clamp(36px,4vw,54px)] font-black leading-none tracking-[-0.03em] text-[#0C1410] mb-5">Investimento<br><em class="text-[#6EBF8B] not-italic">transparente.</em></h2>
      <p class="text-[16px] text-[#5C6E64] leading-[1.78] mb-[18px]">Sem surpresas. Você sabe exatamente o que paga e o que recebe em cada etapa do projeto.</p>
      <div class="inv-box bg-[#0C1410] rounded-[20px] p-10 mt-7 relative overflow-hidden">
        <div class="text-[11px] font-bold tracking-[.1em] uppercase text-[#1DB954] mb-[22px]">Investimento total do projeto</div>
        <div class="text-[clamp(26px,3vw,42px)] font-black text-white tracking-[-0.03em] leading-[1.15] mb-[10px]">Entrada de <em class="text-[#1DB954] not-italic">R$ 12.000</em><br>+ 4 parcelas de <em class="text-[#1DB954] not-italic">R$ 9.000</em></div>
        <div class="text-[14px] text-white/30 mb-6">Valor total: <strong class="text-white/55 font-semibold">R$ 48.000,00</strong></div>
        <div class="h-px bg-white/[0.08] mb-[18px]"></div>
        <div class="text-[12px] text-white/25 leading-[1.6]">* Não incluso domínio, hospedagem e manutenção.<br>* Após setembro, este valor não contempla o site institucional.</div>
      </div>
    </div>
    <!-- right -->
    <div class="bg-white border-l border-[#DDE8E2] px-12 py-10 flex flex-col gap-[14px] justify-center">

      <!-- BÔNUS — destaque principal -->
      <div class="relative bg-gradient-to-br from-[#0C1410] to-[#1a3020] border-2 border-[#1DB954] rounded-[24px] p-7 overflow-hidden">
        <!-- glows decorativos -->
        <div class="absolute -top-8 -right-8 w-36 h-36 bg-[#1DB954]/20 rounded-full blur-2xl pointer-events-none"></div>
        <div class="absolute -bottom-10 -left-6 w-28 h-28 bg-[#1DB954]/10 rounded-full blur-2xl pointer-events-none"></div>
        <!-- badge -->
        <div class="inline-flex items-center gap-[6px] bg-[#1DB954] text-[#0C1410] text-[10px] font-black tracking-[.1em] uppercase px-3 py-[5px] rounded-full mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          Bônus exclusivo · Setembro/2026
        </div>

        <div class="text-[11px] font-bold tracking-[.06em] uppercase text-[#1DB954]/70 mb-3">Site Institucional</div>
        <div class="flex items-center gap-3 mb-4">
          <div class="text-[clamp(22px,2.4vw,34px)] font-black text-white/25 line-through leading-none tracking-[-0.03em]">R$ 4.000</div>
          <div class="text-[clamp(22px,2.4vw,34px)] font-black leading-none tracking-[-0.04em]" style="color:#1DB954;text-shadow:0 0 20px rgba(29,185,84,.45);">R$ 0</div>
        </div>
        <div class="h-px bg-white/[0.08] mb-3"></div>
        <div class="text-[12px] text-white/55 leading-[1.65]">Site institucional completo <strong class="text-white font-semibold">incluso sem custo</strong> para contratos fechados <strong class="text-[#1DB954] font-semibold">até o fim de setembro</strong>.</div>
      </div>

      <!-- custos recorrentes — mais discretos -->
      <div class="mt-1">
        <div class="text-[10px] font-bold tracking-[.12em] uppercase text-[#8FA398] mb-3">Custos adicionais recorrentes</div>
        <div class="flex flex-col gap-[8px]">
          <div class="flex items-center justify-between bg-[#F4F8F5] border border-[#DDE8E2] rounded-[14px] px-4 py-3">
            <div>
              <div class="text-[10px] font-bold tracking-[.06em] uppercase text-[#158A3E]">Sustentação (opcional)</div>
              <div class="text-[11px] text-[#5C6E64] leading-[1.5] mt-[2px]">Bugs + dependências atualizadas</div>
            </div>
            <div class="text-[16px] font-black text-[#0C1410] tracking-[-0.02em] ml-4 shrink-0">R$ 700<small class="text-[11px] font-normal text-[#8FA398]">/mês</small></div>
          </div>
          <div class="flex items-center justify-between bg-[#F4F8F5] border border-[#DDE8E2] rounded-[14px] px-4 py-3">
            <div>
              <div class="text-[10px] font-bold tracking-[.06em] uppercase text-[#158A3E]">Contas Developer (lojas)</div>
              <div class="text-[11px] text-[#5C6E64] leading-[1.5] mt-[2px]">Google Play: $25 único · App Store: $99/ano</div>
            </div>
            <div class="text-[15px] font-black text-[#0C1410] tracking-[-0.02em] ml-4 shrink-0">$25 + $99<small class="text-[11px] font-normal text-[#8FA398]">/ano</small></div>
          </div>
          <div class="flex items-center justify-between bg-[#F4F8F5] border border-[#DDE8E2] rounded-[14px] px-4 py-3">
            <div>
              <div class="text-[10px] font-bold tracking-[.06em] uppercase text-[#158A3E]">Servidor Cloud</div>
              <div class="text-[11px] text-[#5C6E64] leading-[1.5] mt-[2px]">Alta disponibilidade + backups automáticos</div>
            </div>
            <div class="text-[16px] font-black text-[#0C1410] tracking-[-0.02em] ml-4 shrink-0">~$25<small class="text-[11px] font-normal text-[#8FA398]">/mês</small></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`,
);
