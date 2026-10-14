// Cada ícone é o miolo de um <svg viewBox="0 0 24 24">. Ícones "de item" têm cores próprias;
// ícones "de interface" usam currentColor (herdam a cor do texto do botão).
const ICONES_SVG = {
// ---------- recursos ----------
madeira: '<rect x="2.5" y="7.5" width="15" height="10" rx="2" fill="#b45309" stroke="#451a03" stroke-width="1.1"/><ellipse cx="17.5" cy="12.5" rx="3.6" ry="5" fill="#e8b56e" stroke="#451a03" stroke-width="1.1"/><ellipse cx="17.5" cy="12.5" rx="1.6" ry="2.4" fill="none" stroke="#92400e" stroke-width="1"/><path d="M5 11h8M5 14.2h6" stroke="#78350f" stroke-width=".9" stroke-linecap="round"/>',
pedra: '<path d="M2.8 18 5.5 9.5 10.5 5.5 17 7.5 21.2 13.5 19.5 18.5Z" fill="#9ca3af" stroke="#374151" stroke-width="1.1" stroke-linejoin="round"/><path d="M5.5 9.5 11 12.5 17 7.5M11 12.5 12 18.3" fill="none" stroke="#6b7280" stroke-width="1"/><path d="M7 11.5 10 8.5" stroke="#e5e7eb" stroke-width="1.3" stroke-linecap="round"/>',
ferro: '<path d="M2.5 17 5.8 9.5H18.2L21.5 17Z" fill="#94a3b8" stroke="#334155" stroke-width="1.1" stroke-linejoin="round"/><path d="M5.8 9.5 8 12.8H16L18.2 9.5" fill="#cbd5e1" stroke="#334155" stroke-width="1" stroke-linejoin="round"/><path d="M9 11.2h5" stroke="#fff" stroke-width="1" stroke-linecap="round" opacity=".8"/>',
cobre: '<path d="M2.5 17 5.8 9.5H18.2L21.5 17Z" fill="#ea580c" stroke="#7c2d12" stroke-width="1.1" stroke-linejoin="round"/><path d="M5.8 9.5 8 12.8H16L18.2 9.5" fill="#fdba74" stroke="#7c2d12" stroke-width="1" stroke-linejoin="round"/><path d="M9 11.2h5" stroke="#fff" stroke-width="1" stroke-linecap="round" opacity=".8"/>',
ouro: '<path d="M3.5 16.5 6.8 9 13 6.5 19.5 9.8 20.5 16 14 19.5Z" fill="#facc15" stroke="#854d0e" stroke-width="1.1" stroke-linejoin="round"/><path d="M6.8 9 12 12.5 19.5 9.8M12 12.5 14 19.5" fill="none" stroke="#ca8a04" stroke-width="1"/><path d="M8 10.5 10.5 8.6" stroke="#fef9c3" stroke-width="1.3" stroke-linecap="round"/>',
areia: '<path d="M9 3.5h6l-1 3.2c3.8 1.8 5.4 6 4.6 11.3-3.8 2-9.4 2-13.2 0-.8-5.300.8-9.500 4.600-11.300Z" fill="#fcd34d" stroke="#92400e" stroke-width="1.1" stroke-linejoin="round"/><path d="M8.800 6.700h6.400" stroke="#92400e" stroke-width="1.6" stroke-linecap="round"/><path d="M8 13c2 1 6 1 8 0" fill="none" stroke="#d97706" stroke-width=".9"/>',
cimento: '<path d="M9 3.5h6l-1 3.2c3.8 1.8 5.4 6 4.6 11.3-3.8 2-9.4 2-13.2 0-.8-5.300.8-9.500 4.600-11.300Z" fill="#9ca3af" stroke="#374151" stroke-width="1.1" stroke-linejoin="round"/><path d="M8.800 6.700h6.400" stroke="#374151" stroke-width="1.6" stroke-linecap="round"/><rect x="8" y="11" width="8" height="4.500" rx="1" fill="#e5e7eb" stroke="#4b5563" stroke-width=".8"/><path d="M10 13.200h4" stroke="#4b5563" stroke-width="1" stroke-linecap="round"/>',
tijolo: '<rect x="2.500" y="5" width="19" height="14" rx="1.500" fill="#c2410c" stroke="#431407" stroke-width="1.1"/><path d="M2.500 9.700h19M2.500 14.300h19M9 5v4.700M15.500 9.700v4.600M9 14.300V19" stroke="#fed7aa" stroke-width="1" fill="none"/>',
semente: '<ellipse cx="12" cy="20.500" rx="6" ry="1.800" fill="#92400e"/><path d="M12 20V11.500" stroke="#166534" stroke-width="1.800" stroke-linecap="round"/><path d="M12 12.500C6.500 12.500 4 8.500 4 5.500 9.500 5.500 12 8 12 12.500Z" fill="#4ade80" stroke="#166534" stroke-width="1.100" stroke-linejoin="round"/><path d="M12 11.500C12 7.500 15 4.500 20 4.500 20 8.500 17 11.500 12 11.500Z" fill="#22c55e" stroke="#166534" stroke-width="1.100" stroke-linejoin="round"/>',
arvore: '<rect x="10.500" y="14" width="3" height="7.500" fill="#92400e" stroke="#451a03" stroke-width="1"/><circle cx="12" cy="9" r="6.500" fill="#22c55e" stroke="#14532d" stroke-width="1.100"/><circle cx="9.500" cy="7.500" r="2.200" fill="#4ade80"/><circle cx="14.500" cy="10.500" r="1.800" fill="#16a34a"/>',
pinheiro: '<rect x="10.700" y="17.500" width="2.600" height="4" fill="#92400e"/><path d="M12 2.500 17 9H14.500L19 15.500H5L9.500 9H7Z" fill="#16a34a" stroke="#14532d" stroke-width="1.100" stroke-linejoin="round"/><path d="M12 16.500 16.500 17H7.500Z" fill="#15803d"/>',
caixa: '<path d="M3 8 12 4l9 4v9l-9 4-9-4Z" fill="#d97706" stroke="#78350f" stroke-width="1.100" stroke-linejoin="round"/><path d="M3 8 12 12 21 8M12 12v9" fill="none" stroke="#78350f" stroke-width="1.100"/><path d="M7.500 6 16.500 10" stroke="#fde68a" stroke-width="1.500" stroke-linecap="round"/>',
// ---------- ferramentas ----------
machado: '<path d="M5 20.500 15.500 8" stroke="#92400e" stroke-width="2.600" stroke-linecap="round"/><path d="M5 20.500 15.500 8" stroke="#d97706" stroke-width=".8" stroke-linecap="round"/><path d="M11 5.500C14 2.500 19.500 3 20.800 6.500 19 8.500 16.500 9.800 14 10.200Z" fill="#cbd5e1" stroke="#334155" stroke-width="1.100" stroke-linejoin="round"/><path d="M13 6.500C15 5 17.500 5 18.500 6.300" fill="none" stroke="#fff" stroke-width=".9" stroke-linecap="round"/>',
picareta: '<path d="M5 20.500 17 8.500" stroke="#92400e" stroke-width="2.600" stroke-linecap="round"/><path d="M2.500 10C6 3.500 15.500 2.500 21.500 8.500 16 7 9 8 5.500 12.500Z" fill="#94a3b8" stroke="#334155" stroke-width="1.100" stroke-linejoin="round"/><path d="M6 9C9 6.500 13 5.800 16.500 6.800" fill="none" stroke="#e2e8f0" stroke-width=".9" stroke-linecap="round"/>',
pa: '<path d="M18.500 3.500 10.500 11.500" stroke="#92400e" stroke-width="2.600" stroke-linecap="round"/><path d="M16 2.500 21.500 8" stroke="#92400e" stroke-width="2.800" stroke-linecap="round"/><path d="M11.500 9 15 12.500C15.500 16 12.500 20 7 21.500 4.500 21 3 19.500 2.500 17 4 11.500 8 8.500 11.500 9Z" fill="#94a3b8" stroke="#334155" stroke-width="1.100" stroke-linejoin="round"/><path d="M6 14.500C7 12.500 9 11.200 11 11" fill="none" stroke="#e2e8f0" stroke-width=".9" stroke-linecap="round"/>',
peneira: '<circle cx="11.500" cy="12.500" r="8.500" fill="#fde68a" stroke="#92400e" stroke-width="2.800"/><path d="M5.500 9.500h12M4 12.500h15M5.500 15.500h12M8.500 5.500v14M11.500 4.500v16M14.500 5.500v14" stroke="#b45309" stroke-width=".9" fill="none"/><path d="M19.500 18.500 22 21" stroke="#92400e" stroke-width="2.800" stroke-linecap="round"/>',
martelo: '<path d="M4 20.500 13 11.500" stroke="#92400e" stroke-width="2.800" stroke-linecap="round"/><rect x="9" y="3.500" width="12" height="6.500" rx="1.500" transform="rotate(45 15 6.750)" fill="#94a3b8" stroke="#334155" stroke-width="1.100"/><path d="M13 5.500 17.500 10" stroke="#e2e8f0" stroke-width="1" stroke-linecap="round"/>',
forja: '<path d="M3 20.500 11.500 12" stroke="#92400e" stroke-width="2.400" stroke-linecap="round"/><rect x="5" y="3.500" width="10" height="5.500" rx="1.300" transform="rotate(45 10 6.250)" fill="#94a3b8" stroke="#334155" stroke-width="1"/><path d="M21 20.500 12.500 12" stroke="#92400e" stroke-width="2.400" stroke-linecap="round"/><path d="M13 7C16 3.500 21 4 22 7.500 19 8 16 9 13.500 11Z" fill="#cbd5e1" stroke="#334155" stroke-width="1" stroke-linejoin="round"/>',
ferramentas: '<path d="M3.500 20.500 13 11" stroke="#92400e" stroke-width="2.600" stroke-linecap="round"/><rect x="9" y="2.500" width="11" height="5.500" rx="1.300" transform="rotate(45 14.500 5.250)" fill="#94a3b8" stroke="#334155" stroke-width="1"/><path d="M20.500 20.500 11 11" stroke="#64748b" stroke-width="2.400" stroke-linecap="round"/><path d="M3.500 3.500a4 4 0 0 0 5 5L11 6 8.500 3.500Z" fill="#cbd5e1" stroke="#334155" stroke-width="1" stroke-linejoin="round"/>',
engrenagem: '<circle cx="12" cy="12" r="7.200" fill="none" stroke="#94a3b8" stroke-width="3.200" stroke-dasharray="2.260 2.260"/><circle cx="12" cy="12" r="5.600" fill="#cbd5e1" stroke="#475569" stroke-width="1.100"/><circle cx="12" cy="12" r="2.200" fill="#475569"/>',
caixa_ferramentas: '<rect x="2.500" y="8" width="19" height="12" rx="2" fill="#dc2626" stroke="#7f1d1d" stroke-width="1.100"/><path d="M8.500 8V5.500a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1V8" fill="none" stroke="#7f1d1d" stroke-width="1.400"/><path d="M2.500 13.500h19" stroke="#7f1d1d" stroke-width="1.100"/><rect x="10" y="12" width="4" height="3.500" rx=".8" fill="#fbbf24" stroke="#7f1d1d" stroke-width=".9"/>',
// ---------- interface (currentColor) ----------
play: '<path d="M7 4.500 19.500 12 7 19.500Z" fill="currentColor" stroke="currentColor" stroke-width="1.500" stroke-linejoin="round"/>',
refresh: '<path d="M20 12a8 8 0 1 1-2.500-5.800" fill="none" stroke="currentColor" stroke-width="2.300" stroke-linecap="round"/><path d="M20.500 3.500v5.500H15" fill="none" stroke="currentColor" stroke-width="2.300" stroke-linecap="round" stroke-linejoin="round"/>',
fechar: '<path d="M6 6 18 18M18 6 6 18" stroke="currentColor" stroke-width="2.800" stroke-linecap="round"/>',
menu: '<path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2.600" stroke-linecap="round"/>',
seta_cima: '<path d="M12 20V5M5.500 11.500 12 5l6.500 6.500" fill="none" stroke="currentColor" stroke-width="2.600" stroke-linecap="round" stroke-linejoin="round"/>',
seta_esq: '<path d="M20 12H5M11.500 5.500 5 12l6.500 6.500" fill="none" stroke="currentColor" stroke-width="2.600" stroke-linecap="round" stroke-linejoin="round"/>',
mais: '<path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2.800" stroke-linecap="round"/>',
menos: '<path d="M5 12h14" stroke="currentColor" stroke-width="2.800" stroke-linecap="round"/>',
tela_cheia: '<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5" fill="none" stroke="currentColor" stroke-width="2.400" stroke-linecap="round" stroke-linejoin="round"/>',
novo: '<rect x="3.500" y="3.500" width="17" height="17" rx="4" fill="none" stroke="currentColor" stroke-width="2.100"/><path d="M12 8v8M8 12h8" stroke="currentColor" stroke-width="2.300" stroke-linecap="round"/>',
lixeira: '<path d="M4 7h16M9.500 7V4.500h5V7M6 7l1 13h10l1-13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 11v6M14 11v6" stroke="currentColor" stroke-width="1.800" stroke-linecap="round"/>',
som: '<path d="M4 9.500h3.500L12 5.500v13l-4.500-4H4Z" fill="currentColor" stroke="currentColor" stroke-width="1.300" stroke-linejoin="round"/><path d="M15.500 9a4.500 4.500 0 0 1 0 6M18 6.500a8 8 0 0 1 0 11" fill="none" stroke="currentColor" stroke-width="1.900" stroke-linecap="round"/>',
musica: '<path d="M9 17.500V5.500l10-2v12" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="6.500" cy="17.500" r="2.700" fill="currentColor"/><circle cx="16.500" cy="15.500" r="2.700" fill="currentColor"/>',
cadeado: '<rect x="5" y="10.500" width="14" height="10" rx="2.200" fill="#9ca3af" stroke="#374151" stroke-width="1.200"/><path d="M8 10.500V8a4 4 0 0 1 8 0v2.500" fill="none" stroke="#374151" stroke-width="2"/><circle cx="12" cy="15.500" r="1.500" fill="#374151"/>',
check: '<circle cx="12" cy="12" r="9" fill="#22c55e" stroke="#14532d" stroke-width="1.200"/><path d="M7.500 12.500 10.700 15.700 16.800 8.800" fill="none" stroke="#fff" stroke-width="2.400" stroke-linecap="round" stroke-linejoin="round"/>',
estrela: '<path d="M12 2.800 14.800 8.800 21.300 9.600 16.500 14.100 17.800 20.600 12 17.400 6.200 20.600 7.500 14.100 2.700 9.600 9.200 8.800Z" fill="#facc15" stroke="#a16207" stroke-width="1.200" stroke-linejoin="round"/>',
brilho: '<path d="M10 3 12 9.500 18.500 11.500 12 13.500 10 20 8 13.500 1.500 11.500 8 9.500Z" fill="#fde047" stroke="#ca8a04" stroke-width="1" stroke-linejoin="round"/><path d="M18.500 3.500 19.400 6.100 22 7 19.400 7.900 18.500 10.500 17.600 7.900 15 7 17.600 6.100Z" fill="#fef08a" stroke="#ca8a04" stroke-width=".8" stroke-linejoin="round"/>',
raio: '<path d="M13.500 2.500 5 13.500h6l-1.500 8 9.500-12H12.500Z" fill="#facc15" stroke="#a16207" stroke-width="1.200" stroke-linejoin="round"/>',
pip_on: '<rect x="3" y="7" width="18" height="10" rx="2.500" fill="#fbbf24" stroke="#b45309" stroke-width="1.200"/>',
pip_off: '<rect x="3" y="7" width="18" height="10" rx="2.500" fill="none" stroke="currentColor" stroke-width="1.400" opacity=".55"/>',
// ---------- HUD / menus ----------
salvar: '<path d="M4.500 3.500h12.500l3.500 3.500v13.500a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Z" fill="#3b82f6" stroke="#1e3a8a" stroke-width="1.200" stroke-linejoin="round"/><rect x="7" y="3.500" width="9" height="6" fill="#dbeafe" stroke="#1e3a8a" stroke-width="1"/><rect x="7" y="13.500" width="10" height="7" rx="1" fill="#eff6ff" stroke="#1e3a8a" stroke-width="1"/>',
controles: '<path d="M6.500 7h11a4 4 0 0 1 3.900 3.300l.9 5.500a2.400 2.400 0 0 1-4.200 1.900L16 15.500H8l-2.100 2.200a2.400 2.400 0 0 1-4.200-1.900l.9-5.500A4 4 0 0 1 6.500 7Z" fill="#6366f1" stroke="#312e81" stroke-width="1.200" stroke-linejoin="round"/><path d="M7.500 9.500v3.500M5.750 11.250h3.500" stroke="#fff" stroke-width="1.400" stroke-linecap="round"/><circle cx="15.500" cy="10.200" r="1.100" fill="#fbbf24"/><circle cx="17.800" cy="12.200" r="1.100" fill="#f87171"/>',
diario: '<path d="M6 3.500h12a2 2 0 0 1 2 2V17a3.500 3.500 0 0 1-3.500 3.500H7A3 3 0 0 1 4 17.500V5.500a2 2 0 0 1 2-2Z" fill="#fde68a" stroke="#92400e" stroke-width="1.200" stroke-linejoin="round"/><path d="M8 8h8M8 11.500h8M8 15h5" stroke="#92400e" stroke-width="1.300" stroke-linecap="round"/>',
mochila: '<path d="M8.500 6V5a3.500 3.500 0 0 1 7 0v1" fill="none" stroke="#14532d" stroke-width="1.600"/><path d="M6.500 7.500h11a2.500 2.500 0 0 1 2.500 2.500v8.500a2.500 2.500 0 0 1-2.500 2.500h-11A2.500 2.500 0 0 1 4 18.500V10a2.500 2.500 0 0 1 2.500-2.500Z" fill="#16a34a" stroke="#14532d" stroke-width="1.200"/><rect x="7.500" y="13" width="9" height="6" rx="1.500" fill="#4ade80" stroke="#14532d" stroke-width="1"/><path d="M9.500 13v1.800h5V13" fill="none" stroke="#14532d" stroke-width=".9"/>',
lista: '<rect x="4.500" y="4.500" width="15" height="17" rx="2" fill="#e2e8f0" stroke="#334155" stroke-width="1.200"/><rect x="8.500" y="2.500" width="7" height="4" rx="1.200" fill="#64748b" stroke="#334155" stroke-width="1"/><path d="M8 11h8M8 14.500h8M8 18h5" stroke="#475569" stroke-width="1.300" stroke-linecap="round"/>',
alvo: '<circle cx="12" cy="12" r="9" fill="#fff" stroke="#b91c1c" stroke-width="1.200"/><circle cx="12" cy="12" r="6.200" fill="#ef4444" stroke="#b91c1c" stroke-width=".8"/><circle cx="12" cy="12" r="3.500" fill="#fff"/><circle cx="12" cy="12" r="1.600" fill="#dc2626"/>',
trofeu: '<path d="M7.500 3.500h9v6a4.500 4.500 0 0 1-9 0Z" fill="#facc15" stroke="#a16207" stroke-width="1.200" stroke-linejoin="round"/><path d="M7.500 5.500H4.500c0 3 1.200 4.500 3.300 4.800M16.500 5.500h3c0 3-1.200 4.500-3.300 4.800" fill="none" stroke="#a16207" stroke-width="1.400" stroke-linecap="round"/><path d="M12 14v3.500" stroke="#a16207" stroke-width="2"/><rect x="8" y="17.500" width="8" height="3" rx="1" fill="#f59e0b" stroke="#a16207" stroke-width="1.100"/>',
grafico: '<rect x="3.500" y="12.500" width="4.500" height="8" rx="1" fill="#60a5fa" stroke="#1e3a8a" stroke-width="1.100"/><rect x="9.800" y="7.500" width="4.500" height="13" rx="1" fill="#34d399" stroke="#065f46" stroke-width="1.100"/><rect x="16" y="3.500" width="4.500" height="17" rx="1" fill="#fbbf24" stroke="#92400e" stroke-width="1.100"/>',
presente: '<rect x="3.500" y="9.500" width="17" height="11" rx="1.500" fill="#ef4444" stroke="#7f1d1d" stroke-width="1.200"/><rect x="2.500" y="6.500" width="19" height="4" rx="1.200" fill="#f87171" stroke="#7f1d1d" stroke-width="1.200"/><path d="M12 6.500v14" stroke="#fde68a" stroke-width="2.400"/><path d="M12 6.500C9 6.500 7.500 4 9 3.200 10.800 2.500 12 5 12 6.500Zm0 0c3 0 4.500-2.500 3-3.300C13.200 2.500 12 5 12 6.500Z" fill="#fde68a" stroke="#92400e" stroke-width=".9" stroke-linejoin="round"/>',
pino: '<path d="M12 21.500C7.500 16 5.500 13 5.500 9.500a6.500 6.500 0 0 1 13 0c0 3.500-2 6.500-6.500 12Z" fill="#ef4444" stroke="#7f1d1d" stroke-width="1.200" stroke-linejoin="round"/><circle cx="12" cy="9.500" r="2.500" fill="#fff"/>',
chave: '<circle cx="8" cy="9" r="4.500" fill="#facc15" stroke="#a16207" stroke-width="1.200"/><circle cx="8" cy="9" r="1.500" fill="#a16207"/><path d="M11.300 12.300 20 21M16 17l2.500-2.500M18.500 19.500 21 17" fill="none" stroke="#a16207" stroke-width="2.200" stroke-linecap="round" stroke-linejoin="round"/>',
dinheiro: '<path d="M9 3.500h6l-1.200 3c4 1.800 5.700 6 4.800 11.500-3.900 2-9.300 2-13.200 0-.9-5.500.8-9.700 4.800-11.500Z" fill="#16a34a" stroke="#14532d" stroke-width="1.100" stroke-linejoin="round"/><path d="M8.800 6.500h6.400" stroke="#14532d" stroke-width="1.600" stroke-linecap="round"/><path d="M13.700 11.800c-.4-.9-3.200-1-3.300.6-.1 1.800 3.500 1.200 3.400 3-.1 1.700-3 1.500-3.500.4M12 10.300v6.300" fill="none" stroke="#fef08a" stroke-width="1.300" stroke-linecap="round"/>',
cedula: '<rect x="2.500" y="6" width="19" height="12" rx="2" fill="#4ade80" stroke="#14532d" stroke-width="1.200"/><circle cx="12" cy="12" r="3" fill="#16a34a" stroke="#14532d" stroke-width="1"/><circle cx="5.800" cy="12" r="1" fill="#14532d"/><circle cx="18.200" cy="12" r="1" fill="#14532d"/>',
carrinho: '<path d="M2.500 4h3l2.200 10.500h10.300L20.500 7H6.300" fill="#bfdbfe" stroke="#1e3a8a" stroke-width="1.500" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9.500" cy="19" r="1.800" fill="#1e3a8a"/><circle cx="16.500" cy="19" r="1.800" fill="#1e3a8a"/>',
carro: '<path d="M2.500 15.500v-3.300c0-1 .6-1.800 1.600-2.100L7 9.200l2.300-3.100c.4-.5 1-.8 1.700-.8h4.200c.8 0 1.500.4 1.900 1l2 3.200 1.500.5c1 .3 1.600 1.200 1.600 2.200v3.300Z" fill="#ef4444" stroke="#7f1d1d" stroke-width="1.200" stroke-linejoin="round"/><path d="M9.500 9.300 11 7h4l1.700 2.300Z" fill="#bae6fd" stroke="#7f1d1d" stroke-width="1"/><circle cx="7.500" cy="16" r="2.800" fill="#1f2937" stroke="#111827" stroke-width="1"/><circle cx="7.500" cy="16" r="1" fill="#9ca3af"/><circle cx="17.500" cy="16" r="2.800" fill="#1f2937" stroke="#111827" stroke-width="1"/><circle cx="17.500" cy="16" r="1" fill="#9ca3af"/>',
tv: '<path d="M8.500 3.500 12 7l3.500-3.500" fill="none" stroke="#475569" stroke-width="1.400" stroke-linecap="round" stroke-linejoin="round"/><rect x="2.500" y="7" width="19" height="13" rx="2.200" fill="#475569" stroke="#1e293b" stroke-width="1.200"/><rect x="4.500" y="9" width="12.500" height="9" rx="1.200" fill="#38bdf8" stroke="#0c4a6e" stroke-width=".9"/><circle cx="19" cy="11" r=".9" fill="#fbbf24"/><circle cx="19" cy="14" r=".9" fill="#f87171"/>',
pc: '<rect x="2.500" y="3.500" width="19" height="13" rx="2" fill="#475569" stroke="#1e293b" stroke-width="1.200"/><rect x="4.500" y="5.500" width="15" height="9" rx="1" fill="#22d3ee" stroke="#0e7490" stroke-width=".9"/><path d="M9 20.500h6M12 16.500v4" stroke="#1e293b" stroke-width="2" stroke-linecap="round"/>',
paleta: '<path d="M12 3C6.500 3 2.500 6.800 2.500 11.800c0 4.500 3.500 8.200 8 8.200 1.700 0 2.200-1.200 1.500-2.300-.7-1.100-.2-2.700 1.300-2.700h2.500c3.300 0 5.700-2 5.700-5C21.500 6.300 17.500 3 12 3Z" fill="#fde68a" stroke="#92400e" stroke-width="1.200" stroke-linejoin="round"/><circle cx="7.500" cy="10.500" r="1.600" fill="#ef4444"/><circle cx="11" cy="7" r="1.600" fill="#3b82f6"/><circle cx="16" cy="8" r="1.600" fill="#22c55e"/><circle cx="7.500" cy="15" r="1.600" fill="#a855f7"/>',
lampada: '<path d="M12 2.800a6.200 6.200 0 0 0-3.700 11.200c.7.600 1.200 1.400 1.200 2.300h5c0-.9.500-1.700 1.200-2.300A6.200 6.200 0 0 0 12 2.800Z" fill="#fde047" stroke="#a16207" stroke-width="1.200" stroke-linejoin="round"/><path d="M9.800 19h4.400M10.500 21.300h3" stroke="#6b7280" stroke-width="1.800" stroke-linecap="round"/><path d="M10 6.500a3 3 0 0 0-1.400 2" fill="none" stroke="#fff" stroke-width="1.200" stroke-linecap="round"/>',
lanterna: '<path d="M16 6.500 21.500 4v8L16 9.500Z" fill="#fde047" fill-opacity=".7" stroke="#ca8a04" stroke-width="1" stroke-linejoin="round"/><rect x="3" y="6.500" width="9" height="5" rx="1" fill="#475569" stroke="#1e293b" stroke-width="1.100"/><path d="M12 5.500h4v7h-4Z" fill="#94a3b8" stroke="#1e293b" stroke-width="1.100"/><rect x="5" y="11.500" width="5" height="9" rx="1.500" fill="#64748b" stroke="#1e293b" stroke-width="1.100"/>',
lua: '<path d="M19.500 14.500A8.500 8.500 0 0 1 9.500 4.500a8.500 8.500 0 1 0 10 10Z" fill="#fde68a" stroke="#a16207" stroke-width="1.200" stroke-linejoin="round"/><circle cx="12" cy="14" r="1.200" fill="#fcd34d"/>',
relogio: '<rect x="10" y="2.500" width="4" height="2.500" rx=".8" fill="#64748b"/><circle cx="12" cy="13.500" r="8" fill="#f8fafc" stroke="#334155" stroke-width="1.500"/><path d="M12 8.500v5l3.200 2" fill="none" stroke="#ef4444" stroke-width="1.800" stroke-linecap="round" stroke-linejoin="round"/>',
// ---------- construções ----------
casa: '<path d="M3 11.500 12 3.500l9 8" fill="none" stroke="#7f1d1d" stroke-width="1.200" stroke-linejoin="round"/><path d="M3 11.500 12 3.500l9 8Z" fill="#ef4444" stroke="#7f1d1d" stroke-width="1.200" stroke-linejoin="round"/><path d="M5.500 11.500V20h13v-8.500" fill="#fde68a" stroke="#92400e" stroke-width="1.200" stroke-linejoin="round"/><rect x="10" y="14" width="4" height="6" fill="#92400e"/>',
predios: '<rect x="2.500" y="9" width="6.500" height="12" fill="#94a3b8" stroke="#334155" stroke-width="1.100"/><rect x="9" y="3.500" width="7" height="17.500" fill="#64748b" stroke="#334155" stroke-width="1.100"/><rect x="16" y="11" width="5.500" height="10" fill="#94a3b8" stroke="#334155" stroke-width="1.100"/><path d="M11 7h3M11 10.500h3M11 14h3M4.500 12.500h2M4.500 16h2M18 14h1.500M18 17.500h1.500" stroke="#fde68a" stroke-width="1.300" stroke-linecap="round"/>',
guindaste: '<path d="M6 21V5l12 1v6" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linejoin="round"/><path d="M3 6 21 4" stroke="#f59e0b" stroke-width="2.400" stroke-linecap="round"/><path d="M18 6v7" stroke="#334155" stroke-width="1.300"/><rect x="15.500" y="13" width="5" height="3.500" rx=".8" fill="#64748b" stroke="#1e293b" stroke-width="1"/><rect x="3.500" y="19.500" width="9" height="2" fill="#475569"/>',
barreira: '<rect x="2.500" y="6.500" width="19" height="6" rx="1.200" fill="#fbbf24" stroke="#78350f" stroke-width="1.200"/><path d="M6 6.500 3.500 12.500M11 6.500 8.500 12.500M16 6.500 13.500 12.500M21 6.500 18.500 12.500" stroke="#1f2937" stroke-width="2"/><path d="M5.500 12.500v8M18.500 12.500v8" stroke="#78350f" stroke-width="2.400" stroke-linecap="round"/>',
cadeira: '<path d="M7 3.500h10l-1 9H8Z" fill="#b45309" stroke="#451a03" stroke-width="1.200" stroke-linejoin="round"/><rect x="5.500" y="12.500" width="13" height="3.200" rx="1" fill="#d97706" stroke="#451a03" stroke-width="1.200"/><path d="M7 15.700 6 21M17 15.700 18 21" stroke="#451a03" stroke-width="2" stroke-linecap="round"/>',
sofa: '<rect x="4.500" y="6" width="15" height="7" rx="2.500" fill="#7c3aed" stroke="#4c1d95" stroke-width="1.200"/><rect x="2" y="10" width="4.500" height="7.500" rx="2" fill="#8b5cf6" stroke="#4c1d95" stroke-width="1.200"/><rect x="17.500" y="10" width="4.500" height="7.500" rx="2" fill="#8b5cf6" stroke="#4c1d95" stroke-width="1.200"/><rect x="5.500" y="12.500" width="13" height="5" rx="1.500" fill="#a78bfa" stroke="#4c1d95" stroke-width="1.200"/><path d="M5.500 19v1.800M18.500 19v1.800" stroke="#4c1d95" stroke-width="1.800" stroke-linecap="round"/>',
quadrado_vermelho: '<rect x="3" y="3" width="18" height="18" rx="3" fill="#ef4444" stroke="#7f1d1d" stroke-width="1.300"/><path d="M3 8h18M3 16h18" stroke="#fecaca" stroke-width="1" stroke-dasharray="2 2"/>',
quadrado_preto: '<rect x="3" y="3" width="18" height="18" rx="3" fill="#374151" stroke="#111827" stroke-width="1.300"/><path d="M12 5v14" stroke="#fbbf24" stroke-width="1.500" stroke-dasharray="3 2.500"/>',
diamante: '<path d="M7 4h10l4.500 5.500L12 21 2.500 9.500Z" fill="#38bdf8" stroke="#0c4a6e" stroke-width="1.200" stroke-linejoin="round"/><path d="M2.500 9.500h19M9 9.500 12 21l3-11.500M7 4l2 5.500L12 4l3 5.500L17 4" fill="none" stroke="#e0f2fe" stroke-width="1"/>',
// ---------- minigames ----------
cobra: '<path d="M5 19.500c-2-3 .5-6 4-6h5c3 0 3-4.500 0-4.500H9" fill="none" stroke="#16a34a" stroke-width="3.600" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 19.500c-2-3 .5-6 4-6h5c3 0 3-4.500 0-4.500H9" fill="none" stroke="#86efac" stroke-width="1" stroke-linecap="round" stroke-dasharray="1 3.200"/><circle cx="8.700" cy="9" r="2.800" fill="#16a34a" stroke="#14532d" stroke-width="1"/><circle cx="8" cy="8.200" r=".8" fill="#fff"/><path d="M5.500 9 3 9" stroke="#ef4444" stroke-width="1.200" stroke-linecap="round"/>',
xis: '<path d="M5.500 5.500 18.500 18.500M18.500 5.500 5.500 18.500" stroke="#ef4444" stroke-width="3.600" stroke-linecap="round"/>',
circulo: '<circle cx="12" cy="12" r="7" fill="none" stroke="#3b82f6" stroke-width="3.400"/>',
cerebro: '<path d="M9.500 4.500a3.200 3.200 0 0 0-3.300 3 3 3 0 0 0-2 4.200 3.300 3.300 0 0 0 1.500 5.300 3.200 3.200 0 0 0 5.300 1.800V5.500a2.200 2.200 0 0 0-1.500-1Z" fill="#f9a8d4" stroke="#9d174d" stroke-width="1.100" stroke-linejoin="round"/><path d="M14.500 4.500a3.200 3.200 0 0 1 3.300 3 3 3 0 0 1 2 4.200 3.300 3.300 0 0 1-1.500 5.300 3.200 3.200 0 0 1-5.300 1.800V5.500a2.200 2.200 0 0 1 1.500-1Z" fill="#fbcfe8" stroke="#9d174d" stroke-width="1.100" stroke-linejoin="round"/><path d="M7 9.500c1 0 1.800.6 2 1.500M17 9.500c-1 0-1.800.6-2 1.500M7.500 14c1 0 1.500.5 1.800 1.200M16.500 14c-1 0-1.500.5-1.800 1.200" fill="none" stroke="#9d174d" stroke-width=".9" stroke-linecap="round"/>',
pong: '<path d="M14.500 14.500 20 20" stroke="#92400e" stroke-width="2.800" stroke-linecap="round"/><circle cx="10.500" cy="9.500" r="6.800" fill="#ef4444" stroke="#7f1d1d" stroke-width="1.300"/><circle cx="10.500" cy="9.500" r="4.800" fill="#fca5a5" opacity=".5"/><circle cx="19.500" cy="5.500" r="2.200" fill="#fff" stroke="#6b7280" stroke-width="1"/>',
interrogacao: '<circle cx="12" cy="12" r="9" fill="#a78bfa" stroke="#4c1d95" stroke-width="1.200"/><path d="M9 9.500a3 3 0 1 1 4.400 2.600c-.9.500-1.400 1.100-1.400 2.100" fill="none" stroke="#fff" stroke-width="2.400" stroke-linecap="round"/><circle cx="12" cy="17.500" r="1.400" fill="#fff"/>',
festa: '<path d="M3 21 7 8.500 15.500 17Z" fill="#fbbf24" stroke="#92400e" stroke-width="1.200" stroke-linejoin="round"/><path d="M5.200 14.800 9.200 18.800M6.300 11.500 12 17.200" stroke="#ef4444" stroke-width="1.200" stroke-linecap="round"/><path d="M13 4.500l.6 1.500 1.500.6-1.500.6-.6 1.500-.6-1.500-1.500-.6 1.500-.6ZM18.500 11l.5 1.200 1.200.5-1.200.5-.5 1.200-.5-1.200-1.200-.5 1.200-.5Z" fill="#a855f7"/><circle cx="17" cy="5" r="1.100" fill="#22c55e"/><circle cx="9.500" cy="4" r="1" fill="#3b82f6"/>',
maca: '<path d="M12 7.500C9.500 5.500 4 6.500 4 12.500c0 4.500 3.500 8 6 8 .8 0 1.200-.4 2-.4s1.200.4 2 .4c2.500 0 6-3.500 6-8 0-6-5.500-7-8-5Z" fill="#ef4444" stroke="#7f1d1d" stroke-width="1.200" stroke-linejoin="round"/><path d="M12 7.500c0-2 .5-3.500 2-4.500" stroke="#92400e" stroke-width="1.600" stroke-linecap="round" fill="none"/><path d="M13.500 5c1-1.300 3-1.500 4-1-1 1.500-2.800 1.800-4 1Z" fill="#22c55e" stroke="#14532d" stroke-width=".9"/>',
banana: '<path d="M4 7c1 7 6 12.500 15 12.500.8 0 1.500-.5 1.500-1.300C14.500 17 11 12.500 9.500 5.500 8 5 5.500 5 4 7Z" fill="#fde047" stroke="#a16207" stroke-width="1.200" stroke-linejoin="round"/><path d="M4 7c1-1.500 3-2 5.500-1.500" stroke="#92400e" stroke-width="1.800" stroke-linecap="round" fill="none"/><path d="M7 9c1.500 4 4.500 7 9 9" fill="none" stroke="#facc15" stroke-width="1" opacity=".8"/>',
uva: '<circle cx="9" cy="11" r="3.200" fill="#7c3aed" stroke="#4c1d95" stroke-width="1"/><circle cx="15" cy="11" r="3.200" fill="#8b5cf6" stroke="#4c1d95" stroke-width="1"/><circle cx="12" cy="15.500" r="3.200" fill="#7c3aed" stroke="#4c1d95" stroke-width="1"/><circle cx="8.500" cy="16" r="2.800" fill="#8b5cf6" stroke="#4c1d95" stroke-width="1"/><circle cx="15.500" cy="16" r="2.800" fill="#8b5cf6" stroke="#4c1d95" stroke-width="1"/><circle cx="12" cy="20" r="2.200" fill="#7c3aed" stroke="#4c1d95" stroke-width="1"/><path d="M12 8c0-2 1-3.500 3-4" stroke="#92400e" stroke-width="1.600" stroke-linecap="round" fill="none"/><path d="M13 5c1.300-1.500 3.500-1.500 5-.5-1.500 1.800-3.500 1.800-5 .5Z" fill="#22c55e" stroke="#14532d" stroke-width=".9"/>',
melancia: '<path d="M2.500 9.500a9.500 9.500 0 0 0 19 0Z" fill="#ef4444" stroke="#14532d" stroke-width="1.400" stroke-linejoin="round"/><path d="M4 11.500a8 8 0 0 0 16 0" fill="none" stroke="#bbf7d0" stroke-width="1.200"/><circle cx="8.500" cy="13" r=".9" fill="#1f2937"/><circle cx="12" cy="15.500" r=".9" fill="#1f2937"/><circle cx="15.500" cy="13" r=".9" fill="#1f2937"/><path d="M2.500 9.500h19" stroke="#14532d" stroke-width="1.400" stroke-linecap="round"/>',
pizza: '<path d="M3.500 5.500C10 2 17 2 20.500 5.500L12 21Z" fill="#fbbf24" stroke="#92400e" stroke-width="1.200" stroke-linejoin="round"/><path d="M3.500 5.500C10 2 17 2 20.500 5.500" fill="none" stroke="#b45309" stroke-width="2.800" stroke-linecap="round"/><circle cx="9.500" cy="8.500" r="1.700" fill="#dc2626"/><circle cx="14.500" cy="9" r="1.700" fill="#dc2626"/><circle cx="12" cy="13.500" r="1.700" fill="#dc2626"/>',
balao: '<path d="M12 2.500c-4 0-6.500 3-6.500 6.800 0 4 3 6.700 6.500 7.500 3.500-.8 6.500-3.500 6.500-7.500C18.500 5.500 16 2.500 12 2.500Z" fill="#ec4899" stroke="#831843" stroke-width="1.200" stroke-linejoin="round"/><path d="M10.500 17.500 12 16.800l1.500.7-.8 1.500h-1.400Z" fill="#be185d"/><path d="M12 19c-1 1.200 1 2.200 0 3" fill="none" stroke="#6b7280" stroke-width="1" stroke-linecap="round"/><path d="M8.500 6.500c.5-1.200 1.500-1.800 2.500-2" fill="none" stroke="#fff" stroke-width="1.300" stroke-linecap="round"/>',
bola: '<circle cx="12" cy="12" r="9" fill="#fff" stroke="#111827" stroke-width="1.300"/><path d="M12 7.500 15.800 10.200 14.400 14.700H9.600L8.200 10.200Z" fill="#1f2937"/><path d="M12 7.500V3.200M15.800 10.200 20 8.800M14.400 14.700 17 18.500M9.600 14.700 7 18.500M8.200 10.200 4 8.800" stroke="#1f2937" stroke-width="1.100" fill="none"/>',
foguete: '<path d="M12 2.500c3.500 2.500 4.800 7 4 12.500H8c-.8-5.500.5-10 4-12.500Z" fill="#e5e7eb" stroke="#334155" stroke-width="1.200" stroke-linejoin="round"/><circle cx="12" cy="9.500" r="2" fill="#38bdf8" stroke="#0c4a6e" stroke-width="1"/><path d="M8 11.500 4.500 15.500 5 18.500 8.500 16.500ZM16 11.500l3.500 4-.5 3-3.500-2Z" fill="#ef4444" stroke="#7f1d1d" stroke-width="1" stroke-linejoin="round"/><path d="M10 15.500c0 3 .5 4.500 2 6 1.500-1.500 2-3 2-6Z" fill="#fb923c" stroke="#c2410c" stroke-width="1" stroke-linejoin="round"/>'
};


// ============================================================
// BIBLIOTECA DE ÍCONES SVG (substitui os emojis do jogo)
// ============================================================
// Como usar:
//   * No HTML/JS escreva o ícone como [[nome]] dentro de qualquer texto,
//     ex.: '[[madeira]] 20' ou innerText = '[[trofeu]] Conquista!'.
//     Um observador troca o texto [[nome]] pelo <svg> correspondente (inclusive
//     em textos criados depois, via innerText/innerHTML).
//   * Em <canvas> (hotbar, mochila): desenharIconeSVG(canvas, 'nome').
//   * Em HTML montado por JS: svgIcone('nome').
// Ícones de interface usam currentColor (acompanham a cor do texto do botão).

function svgIcone(nome) {
    const miolo = ICONES_SVG[nome] || ICONES_SVG.caixa;
    return '<svg class="ic ic-' + nome + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + miolo + '</svg>';
}

function elementoIcone(nome) {
    const molde = document.createElement('template');
    molde.innerHTML = svgIcone(nome);
    return molde.content.firstChild;
}

// ----- desenho em <canvas> (renderiza o SVG como imagem, com cache) -----
const cacheImagensIcone = {};
function obterImagemIcone(nome) {
    let entrada = cacheImagensIcone[nome];
    if (!entrada) {
        const miolo = (ICONES_SVG[nome] || ICONES_SVG.caixa).replace(/currentColor/g, '#e5e7eb');
        const xml = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="96" height="96">' + miolo + '</svg>';
        const img = new Image();
        entrada = cacheImagensIcone[nome] = { img, pronto: false, fila: [] };
        img.onload = () => { entrada.pronto = true; entrada.fila.forEach(f => f()); entrada.fila.length = 0; };
        img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(xml);
    }
    return entrada;
}

function desenharIconeSVG(canvas, nome) {
    const g = canvas.getContext('2d');
    const entrada = obterImagemIcone(nome);
    const pintar = () => {
        const lado = Math.min(canvas.width, canvas.height);
        g.clearRect(0, 0, canvas.width, canvas.height);
        g.drawImage(entrada.img, (canvas.width - lado) / 2, (canvas.height - lado) / 2, lado, lado);
    };
    if (entrada.pronto) pintar(); else entrada.fila.push(pintar);
}

// ----- troca automática de [[nome]] por <svg> em todo o documento -----
(function () {
    const RE_TOKEN = /\[\[([a-z0-9_]+)\]\]/g;
    const IGNORAR = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, NOSCRIPT: 1, TITLE: 1 };

    function trocarNoTexto(no) {
        const valor = no.nodeValue;
        if (!valor || valor.indexOf('[[') < 0) return;
        const pai = no.parentNode;
        if (!pai || IGNORAR[pai.nodeName]) return;
        const frag = document.createDocumentFragment();
        let ultimo = 0, achou = false;
        valor.replace(RE_TOKEN, (token, nome, pos) => {
            achou = true;
            if (pos > ultimo) frag.appendChild(document.createTextNode(valor.slice(ultimo, pos)));
            frag.appendChild(elementoIcone(nome));
            ultimo = pos + token.length;
            return token;
        });
        if (!achou) return;
        if (ultimo < valor.length) frag.appendChild(document.createTextNode(valor.slice(ultimo)));
        pai.replaceChild(frag, no);
    }

    function hidratar(no) {
        if (no.nodeType === 3) { trocarNoTexto(no); return; }
        if (no.nodeType !== 1 || IGNORAR[no.nodeName]) return;
        const andador = document.createTreeWalker(no, NodeFilter.SHOW_TEXT);
        const lista = [];
        while (andador.nextNode()) lista.push(andador.currentNode);
        lista.forEach(trocarNoTexto);
    }

    hidratar(document.body);
    new MutationObserver((mutacoes) => {
        for (const m of mutacoes) {
            if (m.type === 'characterData') trocarNoTexto(m.target);
            else m.addedNodes.forEach(hidratar);
        }
    }).observe(document.documentElement, { childList: true, subtree: true, characterData: true });
})();