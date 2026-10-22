(function(){
  const D=window.SiteData, C=window.SiteContent, T=window.SiteTables, R=window.SiteReferences;
  const $=id=>document.getElementById(id);
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  window.SiteUtil={$,esc};
  $('route-grid').innerHTML=D.chapters.map((c,i)=>`<a class="route-card" href="#${c.id}"><span>${c.number} / 08</span><strong>${esc(c.title)}</strong><small>${esc(c.hint)}</small><b aria-hidden="true">↗</b></a>`).join('');
  $('menu-links').innerHTML=D.chapters.map(c=>`<a href="#${c.id}"><span>${c.number}</span>${esc(c.title)}</a>`).join('')+'<a href="#cierre"><span>09</span>Conclusiones</a><a href="#referencias"><span>10</span>Referencias</a>';
  const menu=$('chapter-menu'), menuButton=$('menu-open');
  function closeMenu(){menu.hidden=true;menuButton.setAttribute('aria-expanded','false')}
  menuButton.addEventListener('click',()=>{menu.hidden=!menu.hidden;menuButton.setAttribute('aria-expanded',String(!menu.hidden))});
  $('menu-close').addEventListener('click',closeMenu);
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('click',e=>{if(!menu.hidden&&!menu.contains(e.target)&&!menuButton.contains(e.target))closeMenu()});
  const themeButton=$('theme-toggle');
  try{if(localStorage.getItem('iso27005-theme')==='dark')document.documentElement.dataset.theme='dark'}catch(e){}
  function syncTheme(){themeButton.setAttribute('aria-label',document.documentElement.dataset.theme==='dark'?'Activar tema claro':'Activar tema oscuro')}
  syncTheme();themeButton.addEventListener('click',()=>{document.documentElement.dataset.theme=document.documentElement.dataset.theme==='dark'?'light':'dark';syncTheme();try{localStorage.setItem('iso27005-theme',document.documentElement.dataset.theme)}catch(e){}});
  function progress(){const max=document.documentElement.scrollHeight-innerHeight;$('reading-progress').style.width=(max>0?Math.min(100,scrollY/max*100):0)+'%'}
  addEventListener('scroll',progress,{passive:true});addEventListener('resize',progress);progress();
  document.querySelectorAll('[data-jump-risk]').forEach(b=>b.addEventListener('click',()=>{window.SiteRisk?.select(b.dataset.jumpRisk,'escenarios');$('caso').scrollIntoView({behavior:'smooth'})}));
  function table(rows){if(!rows||!rows.length)return '<p>Sin datos de tabla en la fuente.</p>';return `<table class="data-table"><thead><tr>${rows[0].map(x=>`<th scope="col">${esc(x)}</th>`).join('')}</tr></thead><tbody>${rows.slice(1).map(row=>`<tr>${row.map(x=>`<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</tbody></table>`}
  window.SiteUtil.table=table;
  // Tables retain the exact cell text extracted from the Word source.
  $('source-table-one').innerHTML=table(T[0]);
  $('sensitivity-table').innerHTML=table(T[8]);
  $('annex-sensitivity').innerHTML=table(T[8]);
  $('annex-register').innerHTML=table(T[9]);
  $('annex-checklist').innerHTML=table(T[10]);
  function renderReferences(query=''){
    const matches=R.filter(s=>s.toLocaleLowerCase('es').includes(query.toLocaleLowerCase('es')));
    $('reference-count').textContent=`${matches.length} de ${R.length} referencias`;
    $('reference-list').innerHTML=matches.map(s=>{const url=s.match(/https?:\/\/\S+/);let body=esc(s);if(url){const safe=esc(url[0]);body=esc(s.slice(0,url.index))+`<a href="${safe}" target="_blank" rel="noopener noreferrer">${safe}</a>`+esc(s.slice(url.index+url[0].length))}return `<li>${body}</li>`}).join('')||'<li>No hay resultados para esa búsqueda.</li>';
  }
  $('reference-search').addEventListener('input',e=>renderReferences(e.target.value.trim()));renderReferences();
})();
