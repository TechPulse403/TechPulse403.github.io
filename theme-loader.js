(function(){
'use strict';
const themes={
dark:{'--bg-deep':'#0a0a0f','--bg-card':'#12121a','--bg-hover':'#1a1a28','--accent':'#00d4ff','--text-primary':'#e8e8f0','--text-secondary':'#8b8ba3','--border':'rgba(255,255,255,0.06)'},
midnight:{'--bg-deep':'#020617','--bg-card':'#0f172a','--bg-hover':'#1e293b','--accent':'#3b82f6','--text-primary':'#f8fafc','--text-secondary':'#64748b','--border':'rgba(59,130,246,0.15)'},
cyber:{'--bg-deep':'#0a0a0a','--bg-card':'#141414','--bg-hover':'#1a1a1a','--accent':'#22d3ee','--text-primary':'#fafafa','--text-secondary':'#a3a3a3','--border':'rgba(34,211,238,0.12)'},
sunset:{'--bg-deep':'#1a0a0a','--bg-card':'#2a1a1a','--bg-hover':'#3a2a2a','--accent':'#f59e0b','--text-primary':'#fef3c7','--text-secondary':'#d6d3d1','--border':'rgba(245,158,11,0.15)'},
forest:{'--bg-deep':'#0a1f0a','--bg-card':'#1a2e1a','--bg-hover':'#2a3e2a','--accent':'#10b981','--text-primary':'#ecfdf5','--text-secondary':'#a7f3d0','--border':'rgba(16,185,129,0.15)'},
light:{'--bg-deep':'#f8fafc','--bg-card':'#ffffff','--bg-hover':'#f1f5f9','--accent':'#6366f1','--text-primary':'#0f172a','--text-secondary':'#475569','--border':'rgba(99,102,241,0.15)'},
crimson:{'--bg-deep':'#1a0a0f','--bg-card':'#2a1a1f','--bg-hover':'#3a2a2f','--accent':'#f43f5e','--text-primary':'#ffe4e6','--text-secondary':'#fda4af','--border':'rgba(244,63,94,0.15)'},
ocean:{'--bg-deep':'#0a0f1a','--bg-card':'#121a2a','--bg-hover':'#1a283a','--accent':'#0ea5e9','--text-primary':'#e0f2fe','--text-secondary':'#7dd3fc','--border':'rgba(14,165,233,0.15)'},
violet:{'--bg-deep':'#120a1f','--bg-card':'#1f1230','--bg-hover':'#2d1b42','--accent':'#a855f7','--text-primary':'#f3e8ff','--text-secondary':'#c4b5fd','--border':'rgba(168,85,247,0.15)'},
gold:{'--bg-deep':'#1a1500','--bg-card':'#2a2400','--bg-hover':'#3a3300','--accent':'#eab308','--text-primary':'#fefce8','--text-secondary':'#fde047','--border':'rgba(234,179,8,0.15)'},
rose:{'--bg-deep':'#1a0a10','--bg-card':'#2a1a20','--bg-hover':'#3a2a30','--accent':'#fb7185','--text-primary':'#fff1f2','--text-secondary':'#fda4af','--border':'rgba(251,113,133,0.15)'},
slate:{'--bg-deep':'#0f172a','--bg-card':'#1e293b','--bg-hover':'#334155','--accent':'#94a3b8','--text-primary':'#f1f5f9','--text-secondary':'#cbd5e1','--border':'rgba(148,163,184,0.15)'},
amber:{'--bg-deep':'#1a1000','--bg-card':'#2a1a00','--bg-hover':'#3a2a00','--accent':'#f97316','--text-primary':'#fff7ed','--text-secondary':'#fdba74','--border':'rgba(249,115,22,0.15)'},
neon:{'--bg-deep':'#050505','--bg-card':'#0a0a0a','--bg-hover':'#111111','--accent':'#39ff14','--text-primary':'#e8e8e8','--text-secondary':'#888888','--border':'rgba(57,255,20,0.15)'},
magenta:{'--bg-deep':'#1a001a','--bg-card':'#2a002a','--bg-hover':'#3a003a','--accent':'#ff00ff','--text-primary':'#ffe0ff','--text-secondary':'#ff99ff','--border':'rgba(255,0,255,0.15)'},
coral:{'--bg-deep':'#1a0a06','--bg-card':'#2a1a10','--bg-hover':'#3a2a1a','--accent':'#ff6b6b','--text-primary':'#fff0f0','--text-secondary':'#ffb3b3','--border':'rgba(255,107,107,0.15)'},
chocolate:{'--bg-deep':'#1a1008','--bg-card':'#2a1a12','--bg-hover':'#3a2a1c','--accent':'#d2691e','--text-primary':'#fff5e6','--text-secondary':'#deb887','--border':'rgba(210,105,30,0.15)'},
indigo:{'--bg-deep':'#0a061f','--bg-card':'#140f2e','--bg-hover':'#1e1840','--accent':'#6366f1','--text-primary':'#e0e7ff','--text-secondary':'#a5b4fc','--border':'rgba(99,102,241,0.15)'},
teal:{'--bg-deep':'#0a1a1a','--bg-card':'#122a2a','--bg-hover':'#1a3a3a','--accent':'#14b8a6','--text-primary':'#f0fdfa','--text-secondary':'#5eead4','--border':'rgba(20,184,166,0.15)'},
monokai:{'--bg-deep':'#272822','--bg-card':'#3e3d32','--bg-hover':'#49483e','--accent':'#a6e22e','--text-primary':'#f8f8f2','--text-secondary':'#75715e','--border':'rgba(166,226,46,0.15)'},
dracula:{'--bg-deep':'#282a36','--bg-card':'#44475a','--bg-hover':'#6272a4','--accent':'#ff79c6','--text-primary':'#f8f8f2','--text-secondary':'#bd93f9','--border':'rgba(255,121,198,0.15)'},
nord:{'--bg-deep':'#2e3440','--bg-card':'#3b4252','--bg-hover':'#434c5e','--accent':'#88c0d0','--text-primary':'#eceff4','--text-secondary':'#d8dee9','--border':'rgba(136,192,208,0.15)'},
gruvbox:{'--bg-deep':'#282828','--bg-card':'#3c3836','--bg-hover':'#504945','--accent':'#fabd2f','--text-primary':'#ebdbb2','--text-secondary':'#a89984','--border':'rgba(250,189,47,0.15)'},
solarized:{'--bg-deep':'#002b36','--bg-card':'#073642','--bg-hover':'#586e75','--accent':'#b58900','--text-primary':'#eee8d5','--text-secondary':'#93a1a1','--border':'rgba(181,137,0,0.15)'},
matrix:{'--bg-deep':'#000000','--bg-card':'#0d0d0d','--bg-hover':'#1a1a1a','--accent':'#00ff41','--text-primary':'#e0ffe0','--text-secondary':'#33ff66','--border':'rgba(0,255,65,0.15)'},
void:{'--bg-deep':'#050508','--bg-card':'#0c0c12','--bg-hover':'#141420','--accent':'#ff0040','--text-primary':'#e8e8f0','--text-secondary':'#6b6b8b','--border':'rgba(255,0,64,0.15)'},
cottoncandy:{'--bg-deep':'#fff0f5','--bg-card':'#ffe4e1','--bg-hover':'#ffc0cb','--accent':'#ff69b4','--text-primary':'#4a0e2e','--text-secondary':'#8b4a6b','--border':'rgba(255,105,180,0.2)'},
seaside:{'--bg-deep':'#0a1a2a','--bg-card':'#122a3a','--bg-hover':'#1a3a4a','--accent':'#67e8f9','--text-primary':'#ecfeff','--text-secondary':'#a5f3fc','--border':'rgba(103,232,249,0.15)'},
autumn:{'--bg-deep':'#1a0f00','--bg-card':'#2a1f0a','--bg-hover':'#3a2f1a','--accent':'#e85d04','--text-primary':'#fff8f0','--text-secondary':'#ffb703','--border':'rgba(232,93,4,0.15)'},
royal:{'--bg-deep':'#0a001a','--bg-card':'#1a0030','--bg-hover':'#2a0048','--accent':'#ffd700','--text-primary':'#fffbe6','--text-secondary':'#ffec8b','--border':'rgba(255,215,0,0.15)'}
};
const saved=localStorage.getItem('skrypt-theme');
if(saved&&themes[saved]){
const root=document.documentElement;
Object.entries(themes[saved]).forEach(([prop,val])=>{root.style.setProperty(prop,val);});
}
window.SkryptTheme={
apply:function(name){
if(!themes[name])return false;
const root=document.documentElement;
Object.entries(themes[name]).forEach(([prop,val])=>{root.style.setProperty(prop,val);});
localStorage.setItem('skrypt-theme',name);
return true;
},
current:()=>localStorage.getItem('skrypt-theme')||'dark',
reset:()=>{localStorage.removeItem('skrypt-theme');location.reload();}
};
})();
