'use strict';
(() => {
const data=window.PROGRESS_DATA;
const $=s=>document.querySelector(s);
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const labels={active:'進行中',hold:'待放行',preparing:'準備中',waiting:'待前置',draft:'提案',verified:'已核證',accepted:'已審查',reported:'已回報',limited:'有保留項',done:'已完成'};
const date=t=>new Date(t).toISOString().replace('T',' ').slice(0,16)+' UTC';
const formatActual=v=>String(v).replace('T',' ').replace('+08:00',' UTC+08:00').replace('+00:00',' UTC');
const eventLabels={receipt:'回條',completed_by:'截至紀錄已完成',snapshot:'快照（非開始）',not_before:'最早評估',observation:'觀察日',report:'回報日'};
const eventText=e=>`${eventLabels[e.kind]}：${formatActual(e.at)}${e.timezone&&e.at.length===10?' '+e.timezone:''}`;
const runtimeText=s=>s==null?'待核':`${Math.floor(s/60)} 分 ${s%60} 秒（機器）`;
const sources=new Map();
function index(value){if(!value||typeof value!=='object')return;if(value.id&&value.checked_at)sources.set(value.id,value);Object.values(value).forEach(v=>{if(v&&typeof v==='object')Array.isArray(v)?v.forEach(index):index(v)})}
const charts=[];
function list(a){return a.length?`<ul>${a.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:'未列新增卡點。'}
function showTask(row,chart){
 const source=sources.get(row.source_id),status=row.status||source.status;
 const timing=sources.get(row.timing_source_id)||{};
 const actual=v=>esc(formatActual(v));
 const actualText=timing.actual_start||timing.actual_end ? `開始：${timing.actual_start?actual(timing.actual_start):'待核'}<br>完成：${timing.actual_end?actual(timing.actual_end):'待核'}` : (['done','verified','accepted','reported'].includes(status)?'實際日期待核':'待排');
 $('#detail-title').textContent=row.title;
 const prerequisites=row.deps.map(id=>chart.rows.find(x=>x.id===id).title);
 $('#detail-content').innerHTML=`<span class="detail-status status-${esc(status)}">${esc(labels[status])}</span><p class="detail-summary">${esc(row.summary||source.summary)}</p><dl class="detail-list"><dt>前置</dt><dd>${prerequisites.length?esc(prerequisites.join('、')):'可獨立準備'}</dd><dt>卡點</dt><dd>${list(source.blockers)}</dd><dt>下一步</dt><dd>${row.next_step?esc(row.next_step):list(source.next_steps)}</dd><dt>日期</dt><dd>${actualText}</dd><dt>跨度</dt><dd>${timing.calendar_span_days==null?'待核':`跨 ${esc(timing.calendar_span_days)} 個日曆日（非工時）`}</dd><dt>機器時間</dt><dd>${esc(runtimeText(timing.machine_runtime_seconds))}</dd><dt>實工時</dt><dd>${timing.actual_work_hours==null?'待核':esc(timing.actual_work_hours)+' 小時'}</dd></dl>${timing.date_events?.length?`<p class="detail-summary">${timing.date_events.map(e=>esc(eventText(e))).join('<br>')}</p>`:''}<details class="details-more"><summary>查看核對時間與來源</summary><p>資料核對：${esc(date(source.checked_at))}</p><p>來源：${esc(source.evidence.source)}</p>${timing.date_sources?.actual_end?`<p>完成日期來源：${esc(timing.date_sources.actual_end.label)}；${esc(timing.date_sources.actual_end.precision==='minute'?'精確到分鐘':timing.date_sources.actual_end.precision)}</p>`:''}<p>估時：${esc(source.estimate_gap)}</p></details>`;
 document.querySelectorAll('.task-bar.selected').forEach(x=>x.classList.remove('selected'));
 document.querySelectorAll('.dependency.selected').forEach(x=>x.classList.remove('selected'));
 document.querySelector(`[data-bar="${row.id}"]`)?.classList.add('selected');
 document.querySelectorAll(`[data-to="${row.id}"],[data-from="${row.id}"]`).forEach(x=>x.classList.add('selected'));
 $('#task-dialog').showModal();
}
function renderActualDates(){
 const items=data.gantt.actual_rows||[];
 $('#actual-table').innerHTML=`<table class="dates-table"><thead><tr><th scope="col">具體子項</th><th scope="col">實際開始</th><th scope="col">完成／可證事件</th><th scope="col">日曆跨度</th><th scope="col">機器時間</th><th scope="col">實工時</th></tr></thead><tbody>${items.map(row=>{
  const item=sources.get(row.source_id);
  const end=item.actual_end?`<strong>完成 ${esc(formatActual(item.actual_end))}</strong>`:'';
  const events=(item.date_events||[]).map(e=>`<span class="date-event">${esc(eventText(e))}</span>`).join('');
  return `<tr><th scope="row"><button type="button" data-actual="${esc(item.id)}">${esc(row.title)}</button></th><td>${item.actual_start?esc(formatActual(item.actual_start)):'待核'}</td><td>${end}${events}${!end&&!events?'待核':''}</td><td>${item.calendar_span_days==null?'待核':item.calendar_span_days===1?'同日（非工時）':`跨 ${esc(item.calendar_span_days)} 日（非工時）`}</td><td>${esc(runtimeText(item.machine_runtime_seconds))}</td><td>${item.actual_work_hours==null?'待核':esc(item.actual_work_hours)+' 小時'}</td></tr>`
 }).join('')}</tbody></table>`;
 $('#actual-table').querySelectorAll('[data-actual]').forEach(button=>button.addEventListener('click',()=>{
  const item=sources.get(button.dataset.actual),row={id:'actual-'+item.id,source_id:item.id,timing_source_id:item.id,title:item.title,status:item.status,deps:[],summary:'',next_step:''};showTask(row,{rows:[row]});
 }));
}
function renderChart(target,chart,key){
 const root=$(target),canvas=document.createElement('div');canvas.className='chart-canvas';canvas.style.setProperty('--phases',chart.phases.length);
 const header=document.createElement('div');header.className='chart-header';
 header.innerHTML=`<div class="chart-corner">任務<small>點選查看明細</small></div>${chart.phases.map((phase,i)=>`<div class="phase"><small>階段 ${i+1}</small>${esc(phase)}</div>`).join('')}`;canvas.append(header);
 const tracks=new Map();
 for(const row of chart.rows){
  const el=document.createElement('div');el.dataset.row=row.id;
  if(row.kind==='group'){
   el.className='group-row';const code=/^[ABCD] /.test(row.title)?row.title[0]:null;
   el.innerHTML=`<div class="group-label">${code?`<span class="group-code">${code}</span>`:''}${esc(code?row.title.slice(2):row.title)}</div><div class="group-track">${esc(row.note)}</div>`;
  }else{
   const source=sources.get(row.source_id),status=row.status||source.status;
   el.className='gantt-row';el.innerHTML=`<button type="button" class="row-label${row.nested?' nested':''}" aria-label="${esc(row.title)}，${esc(labels[status])}，查看明細"><span>${row.nested?'↳ ':''}${esc(row.title)}</span><small>${esc(row.note)}</small></button><div class="row-track"><button type="button" class="task-bar status-${esc(status)}" data-bar="${esc(row.id)}" aria-label="${esc(row.title)}，${esc(labels[status])}，${esc(chart.phases[row.phase])}"><span class="bar-dot" aria-hidden="true"></span>${esc(labels[status])}</button></div>`;
   el.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>showTask(row,chart)));
   tracks.set(row.id,{row,el,bar:el.querySelector('.task-bar')});
  }
  canvas.append(el);
 }
 const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.classList.add('dependencies');svg.setAttribute('aria-hidden','true');
 svg.innerHTML=`<defs><marker id="arrow-${key}" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0L7 3.5L0 7Z" fill="#718a80"/></marker></defs>`;canvas.append(svg);root.replaceChildren(canvas);
 function layout(){
  const css=getComputedStyle(canvas),phase=Number.parseFloat(css.getPropertyValue('--phase-w')),rowHeight=Number.parseFloat(css.getPropertyValue('--row-h')),headerHeight=Number.parseFloat(css.getPropertyValue('--header-h'));
  for(const {row,bar}of tracks.values()){bar.style.left=(row.phase*phase+16)+'px';bar.style.width=((row.phase_end-row.phase+1)*phase-32)+'px'}
  svg.setAttribute('width',phase*chart.phases.length);svg.setAttribute('height',canvas.offsetHeight-headerHeight);svg.querySelectorAll('.dependency').forEach(p=>p.remove());
  for(const {row,el} of tracks.values()){
   for(const from of row.deps){
    const prior=tracks.get(from),x1=(prior.row.phase_end+1)*phase-16,x2=row.phase*phase+16,y1=prior.el.offsetTop-headerHeight+rowHeight/2-1,y2=el.offsetTop-headerHeight+rowHeight/2-1;
    const turn=x1+12;
    const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d',`M${x1} ${y1}H${turn}V${y2}H${x2-3}`);path.setAttribute('marker-end',`url(#arrow-${key})`);path.setAttribute('class','dependency');path.dataset.from=from;path.dataset.to=row.id;svg.append(path);
   }
  }
 }
 layout();charts.push({canvas,layout});
}
try{
 if(!data||data.schema_version!==1||data.gantt?.mode!=='relative_phases')throw new Error('甘特資料尚未更新，請依 README 重建資料。');
 data.projects.forEach(index);
 const [integration,documents]=data.projects;
 $('#updated').textContent='更新 '+date(data.meta.updated_at);
 $('#current').innerHTML='<strong>目前：</strong>'+esc(sources.get('np').summary);
 $('#history').textContent='歷史①單一 home、②改名：使用者回報完成，完成日期未提供。';
 const c=documents.counts;
 $('#counts').innerHTML=`<strong>${c.total} 項</strong>　完成 ${c.done} ／ 進行中 ${c.active} ／ 待辦 ${c.todo} ／ 不確定 ${c.uncertain}`;
 renderChart('#integration-chart',data.gantt.integration,'integration');renderChart('#documents-chart',data.gantt.documents,'documents');renderActualDates();
 $('#revision').textContent='快照 '+data.meta.revision;
 $('#line-toggle').addEventListener('click',e=>{const show=e.currentTarget.getAttribute('aria-pressed')!=='true';e.currentTarget.setAttribute('aria-pressed',String(show));e.currentTarget.textContent=show?'依賴線：顯示':'依賴線：隱藏';charts.forEach(c=>c.canvas.classList.toggle('lines-hidden',!show))});
 $('#close-dialog').addEventListener('click',()=>$('#task-dialog').close());
 $('#task-dialog').addEventListener('click',e=>{if(e.target===$('#task-dialog')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close()}});
 $('#task-dialog').addEventListener('close',()=>{document.querySelectorAll('.selected').forEach(x=>x.classList.remove('selected'))});
 let frame=0;window.addEventListener('resize',()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>charts.forEach(c=>c.layout()))});
 document.documentElement.dataset.ready='true';
}catch(error){$('#integration-chart').innerHTML=`<p class="error">${esc(error.message)}</p>`;document.documentElement.dataset.ready='error';console.error(error)}
})();
