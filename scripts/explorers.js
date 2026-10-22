(function(){
  const D=window.SiteData,C=window.SiteContent,{$,esc}=window.SiteUtil;
  function selectOne(selector,attribute,value){document.querySelectorAll(selector).forEach(b=>{const active=b.dataset[attribute]===value;b.classList.toggle('is-active',active);if(b.getAttribute('role')==='tab')b.setAttribute('aria-selected',String(active))})}
  function showConcept(key){const v=C.concepts[key];selectOne('.concept-tab','concept',key);$('concept-detail').innerHTML=`<span class="eyebrow">PROPIEDAD DE SEGURIDAD</span><h3>${esc(v.title)}</h3><div class="question">${esc(v.question)}</div><p>${esc(v.explain)}</p><div class="signal"><span>${esc(v.example)}</span><span>${esc(v.signal)}</span></div>`}
  document.querySelectorAll('.concept-tab').forEach(b=>b.addEventListener('click',()=>showConcept(b.dataset.concept)));showConcept('confidencialidad');
  function showStandard(key){const v=C.standards[key];selectOne('[data-standard]','standard',key);$('standard-detail').innerHTML=`<span class="eyebrow">FUNCIÓN EN EL ESTUDIO</span><h3>${esc(v.name)}</h3><p>${esc(v.role)}</p><div class="standard-link">${esc(v.link)}</div>`}
  document.querySelectorAll('[data-standard]').forEach(b=>b.addEventListener('click',()=>showStandard(b.dataset.standard)));showStandard('27005');
  $('edition-timeline').innerHTML=C.editions.map(e=>`<div class="edition-item"><strong>${esc(e.year)}</strong><b>${esc(e.name)}</b><p>${esc(e.detail)}</p></div>`).join('');
  let stepIndex=0;
  $('process-flow').innerHTML=D.steps.map((s,i)=>`<button type="button" role="tab" data-step="${i}" aria-selected="false"><span>${String(i+1).padStart(2,'0')}</span>${esc(s.title)}</button>`).join('');
  function showStep(i){stepIndex=(i+D.steps.length)%D.steps.length;const s=D.steps[stepIndex];document.querySelectorAll('[data-step]').forEach(b=>{const active=Number(b.dataset.step)===stepIndex;b.classList.toggle('is-active',active);b.setAttribute('aria-selected',String(active))});$('process-number').textContent=String(stepIndex+1).padStart(2,'0');$('process-detail').innerHTML=`<span class="eyebrow">${String(stepIndex+1).padStart(2,'0')} / 05 · GESTIÓN DEL RIESGO</span><h3>${esc(s.title)}</h3><p>${esc(s.body)}</p>`}
  document.querySelectorAll('[data-step]').forEach(b=>b.addEventListener('click',()=>showStep(Number(b.dataset.step))));$('process-prev').addEventListener('click',()=>showStep(stepIndex-1));$('process-next').addEventListener('click',()=>showStep(stepIndex+1));showStep(0);
  const options=D.methods.map(m=>`<option value="${esc(m.name)}">${esc(m.name)}</option>`).join('');$('method-a').innerHTML=options;$('method-b').innerHTML=options;$('method-b').selectedIndex=6;
  function methodCard(name){const v=C.methodDetails[name];return `<article class="compare-card"><h3>${esc(name)}</h3><dl><dt>Enfoque</dt><dd>${esc(v.lens)}</dd><dt>Datos o participación necesarios</dt><dd>${esc(v.needs)}</dd><dt>Uso orientativo</dt><dd>${esc(v.use)}</dd></dl><small>Fuente: ${esc(v.source)}</small></article>`}
  function showMethods(){$('method-results').innerHTML=methodCard($('method-a').value)+methodCard($('method-b').value)}
  $('method-a').addEventListener('change',showMethods);$('method-b').addEventListener('change',showMethods);showMethods();
  for(const key of ['equifax','solarwinds']){const v=C.cases[key];$(key+'-fact').textContent=v.fact;$(key+'-reading').textContent=v.reading;$(key+'-sources').textContent=v.sources}
  $('findings-list').innerHTML=C.findings.map(s=>`<li>${esc(s)}</li>`).join('');
  $('recommendation-list').innerHTML=C.recommendations.map(r=>`<article><span>${esc(r.ids)}</span><h4>${esc(r.title)}</h4><p>${esc(r.body)}</p><small>Evidencia esperada: ${esc(r.proof)}</small></article>`).join('');
})();
