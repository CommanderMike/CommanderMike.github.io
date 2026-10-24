'use strict';

const plays = [
  {title:'01 / UNDERSTAND THE QUESTION', body:'Start with the decision someone needs to make — not just the data that happens to be available.'},
  {title:'02 / FIND THE SIGNAL', body:'Clean, test and explore the numbers. Look for the story, but challenge it before trusting it.'},
  {title:'03 / MAKE IT MAKE SENSE', body:'Turn the findings into something a non-technical teammate can understand and act on.'},
  {title:'04 / SHIP SOMETHING USEFUL', body:'Build a dashboard, report or tool that earns its place in the workflow.'}
];

const projects = [
  {
    id:'tdai-ga4', category:'internship', type:'INTERNSHIP / DATA PRODUCT', number:'01', name:'Ask the website data.', subtitle:'Natural-language GA4 analytics assistant', lead:true, visual:'chat', image:'assets/ga4-clear-preview.webp', extraImage:'assets/ga4-trend-preview.webp', thirdImage:'assets/ga4-refusal.webp',
    description:'A safer way for non-technical staff to ask website analytics questions without writing SQL.',
    highlight:'GA4 → BIGQUERY → ANSWERS', tech:['Python','Streamlit','BigQuery','OpenAI API'],
    problem:'Website data is valuable, but staff should not need to write SQL to answer routine traffic questions.',
    approach:'Built a Streamlit prototype that interprets questions, uses approved GA4 exports in BigQuery and shows results as numbers, tables or charts. Added a read-only query policy, validation, dry runs and a 100 MB scan limit.',
    outcome:'A working proof of concept for self-service analytics, with clear scope limits and a basis for a staff pilot.',
    link:'https://github.com/CommanderMike/tdai-ga4-analytics-chatbot', notice:'Private review preview: real TDAI project results are visible. Obtain TDAI clearance or prepare a properly anonymised/synthetic demonstration before public release; no credentials or raw exports are included.'
  },
  {
    id:'tdai-survey', category:'internship', type:'INTERNSHIP / BUSINESS INTELLIGENCE', number:'02', name:'Listening at scale.', subtitle:'Student survey analytics', lead:true, visual:'survey', image:'assets/survey-clear-preview.webp', extraImage:'assets/survey-distribution-preview.webp',
    description:'A Power BI report comparing learner confidence, support needs and NPS across training batches.',
    highlight:'MULTIPLE BATCHES → ONE VIEW', tech:['Power BI','Data modelling','Survey analytics'],
    problem:'Survey feedback arrived in separate batch exports, making comparisons between programmes and cohorts slower.',
    approach:'Combined five survey batch exports into a cleaner model and designed reporting to compare survey results by batch and feedback theme.',
    outcome:'Makes it easier to spot batches where co-instructor or TA ratings need attention, while checking whether headline averages conceal pockets of dissatisfaction.',
    link:'https://github.com/CommanderMike/tdai-student-survey-analytics', notice:'Private review preview: aggregate TDAI survey results are visible. Check permission to share externally; student-level source records are not provided.'
  },
  {
    id:'tdai-linkedin', category:'internship', type:'INTERNSHIP / PERFORMANCE ANALYTICS', number:'03', name:'Beyond impressions.', subtitle:'LinkedIn performance analytics', lead:true, visual:'social', image:'assets/linkedin-clear-preview.webp', extraImage:'assets/linkedin-methodology.webp',
    description:'Looking past vanity metrics to understand how content performance could inform marketing decisions.',
    highlight:'PERFORMANCE → ACTIONABLE QUESTIONS', tech:['Excel','Data cleaning','CTR','Marketing analytics'],
    problem:'Activity metrics alone do not make it obvious which content and engagement patterns matter.',
    approach:'Reviewed post-level and day-level exports, separated sponsored from organic activity, tested a weighted score built around CTR, reach and engagement, and checked how rankings changed when weights shifted.',
    outcome:'Created a content prioritisation approach that highlights click intent rather than ranking posts on impressions alone. Recommendations are exploratory, not causal proof.',
    link:'https://github.com/CommanderMike/tdai-linkedin-content-performance', notice:'Private review preview: real TDAI marketing figures appear in the images. Publishing publicly requires permission; underlying exports are not supplied.'
  },
  {
    id:'woolworths', category:'analytics', type:'POWER BI / RETAIL ANALYTICS', number:'04', name:'Loyalty, decoded.', subtitle:'Woolworths Rewards-style dashboard', lead:false, visual:'retail', image:'assets/woolworths-real-dashboard.webp',
    description:'An educational retail loyalty dashboard covering customer activity, transactions and reward redemption.',
    highlight:'10K CUSTOMERS · 106K TRANSACTIONS', tech:['Power BI','Power Query','Data modelling'],
    problem:'Customer, transaction and rewards activity is difficult to interpret across stores without a coherent reporting view.',
    approach:'Designed a single-page Power BI dashboard with customer registrations, loyalty points, store comparisons, redemption patterns and KPIs.',
    outcome:'A portfolio demonstration of how loyalty activity can be translated into useful marketing and operations questions.',
    link:'https://github.com/CommanderMike/woolworths-rewards-power-bi-dashboard', notice:'Educational portfolio project, not affiliated with or endorsed by Woolworths Group or Everyday Rewards.'
  },
  {
    id:'sentiment', category:'analytics', type:'PYTHON / SENTIMENT ANALYSIS', number:'05', name:'What people were saying.', subtitle:'YouTube COVID-19 sentiment analysis', lead:false, visual:'sentiment',
    description:'A Python study of how video headlines and viewer comments differed in sentiment over time.',
    highlight:'200 VIDEOS · ~4.2K COMMENTS', tech:['Python','pandas','TextBlob','Matplotlib'],
    problem:'Did the language used in news video titles look like the sentiment expressed by audiences in the comments?',
    approach:'Cleaned YouTube data, classified polarity with TextBlob and compared monthly sentiment across four news publishers.',
    outcome:'Surfaced differences between generally neutral headlines and more variable comment sentiment; documented sampling and method limitations.',
    link:'https://github.com/CommanderMike/youtube-covid-sentiment-analysis', notice:'Academic/portfolio research; lexicon-based sentiment is a simplified measure, not a definitive reading of opinion.'
  },
  {
    id:'nsw-crime', category:'engineering', type:'INTERACTIVE DASHBOARD / JAVASCRIPT', number:'06', name:'Patterns across NSW.', subtitle:'NSW crime trends dashboard', lead:false, visual:'crime',
    description:'Interactive exploration of recorded incidents by time, region and offence category.',
    highlight:'FILTERABLE · INTERACTIVE · WEB', tech:['JavaScript','Chart.js','HTML / CSS'],
    problem:'Published crime tables can be difficult to browse when people need to compare places, categories and periods.',
    approach:'Built a responsive dashboard that transforms monthly wide-format CSV data, adds interactive filters and visualises trends and rankings.',
    outcome:'A browsable interface for exploring the published dataset, while keeping the raw source available for context.',
    link:'https://github.com/CommanderMike/NSW-Crime-Dashboard', notice:'A portfolio visualisation of published data; descriptive figures should not be mistaken for causal conclusions.'
  },
  {
    id:'football-sql', category:'engineering', type:'SQL / DATABASE APPLICATION', number:'08', name:'Football behind the screen.', subtitle:'Streaming platform relational database', lead:false, visual:'football', image:'assets/football-database-erd.webp',
    description:'Designed a football streaming data model connecting subscribers, matches, payments and viewing history.',
    highlight:'8 LINKED TABLES · SQL + PHP', tech:['SQL','MySQL','PHP','Database design'],
    problem:'How should a football streaming service structure users, subscriptions, matches and payments so the data stays consistent and useful?',
    approach:'Designed a normalized eight-table relational schema, wrote SQL queries and views, and built a simple PHP interface using prepared statements.',
    outcome:'A practical demonstration of database modelling, joins, constraints and basic server-side safety in a football scenario.',
    link:'https://github.com/CommanderMike/football-streaming-database-web-app', notice:'Educational database project with neutral sample records; not a live streaming service.'
  },
  {
    id:'cancer-regression', category:'analytics', type:'R / STATISTICAL MODELLING', number:'07', name:'Regression, with caution.', subtitle:'Cancer mortality analysis', lead:false, visual:'regression', image:'assets/cancer-correlation.webp', extraImage:'assets/cancer-coverage-scatter.webp',
    description:'Comparing statistical models while being explicit about what the data cannot prove.',
    highlight:'R · 3 REGRESSION MODELS', tech:['R','Regression','Statistics'],
    problem:'Which measured socioeconomic and health-related variables are associated with variation in the constructed mortality rate?',
    approach:'Prepared the dataset, explored correlations and compared three multivariate regression models using adjusted R², error and AIC.',
    outcome:'Selected a model for this dataset and documented the limited explanatory power and non-causal nature of the results.',
    link:'https://github.com/CommanderMike/cancer-mortality-regression-analysis', notice:'Educational statistical analysis. Associations are not claims of causality or medical guidance.'
  }
];

const byId = id => document.getElementById(id);
const players = [...document.querySelectorAll('.pitch-player')];
function activatePlay(i){
  const step = plays[i]; if(!step) return;
  players.forEach((p,idx)=>{p.classList.toggle('is-active',idx===i);p.setAttribute('aria-pressed',String(idx===i));});
  byId('step-label').textContent=step.title;
  byId('step-description').textContent=step.body;
  byId('step-progress').textContent=`0${i+1} — 04`;
}
players.forEach((player,i)=>player.addEventListener('click',()=>activatePlay(i)));

function projectArt(visual){
  if(visual==='chat')return '<div class="art-chat"><div class="chat-question"><span>›</span> How did website traffic change?</div><div class="chat-answer"><span class="chat-check">✓</span><span>Checked against approved data</span></div><div class="chat-sparkline"><svg viewBox="0 0 230 54" aria-hidden="true"><path d="M0 38 L34 33 L61 39 L90 21 L123 30 L147 12 L182 19 L211 7 L230 12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>';
  if(visual==='survey')return '<div class="art-survey"><span>FEEDBACK THEMES</span><div class="survey-row"><b>01</b><i style="--val:79%"></i></div><div class="survey-row"><b>02</b><i style="--val:56%"></i></div><div class="survey-row"><b>03</b><i style="--val:90%"></i></div><small>ILLUSTRATIVE VISUAL · NO CLIENT DATA</small></div>';
  if(visual==='social')return '<div class="art-social"><div class="social-stat">CONTENT<br>PERFORMANCE</div><div class="social-bars"><i style="height:35%"></i><i style="height:60%"></i><i style="height:48%"></i><i style="height:84%"></i><i style="height:69%"></i><i style="height:92%"></i><i style="height:76%"></i></div><small>ILLUSTRATIVE VISUAL</small></div>';
  if(visual==='retail')return '<div class="art-retail"><div class="retail-big">10<span>K</span></div><div class="retail-label">CUSTOMERS · EDUCATIONAL DATASET</div><div class="retail-rows"><span></span><span></span><span></span></div></div>';
  if(visual==='sentiment')return '<div class="art-sentiment"><div class="sentiment-wave" aria-hidden="true"><svg viewBox="0 0 300 95"><path d="M0 48 C30 10 48 75 75 44 S118 15 148 50 S190 76 222 32 S273 70 300 38" stroke="currentColor" fill="none" stroke-width="4"/><path d="M0 66 C26 82 51 23 81 66 S130 70 159 41 S206 42 230 68 S264 35 300 57" stroke="currentColor" fill="none" stroke-width="3" opacity=".35"/></svg></div><div class="sentiment-legend"><span>POSITIVE</span><span>NEUTRAL</span><span>NEGATIVE</span></div></div>';
  if(visual==='crime')return '<div class="art-crime"><div class="crime-axis"></div><div class="crime-chart"><i style="--h:41%"></i><i style="--h:65%"></i><i style="--h:58%"></i><i style="--h:80%"></i><i style="--h:44%"></i><i style="--h:71%"></i><i style="--h:88%"></i><i style="--h:63%"></i></div><small>EXPLORE TRENDS BY TIME / AREA / OFFENCE</small></div>';
  if(visual==='football')return '<div class="art-football"><span>FOOTBALL DATA MODEL</span><div class="football-circles"><b>USER</b><i>↔</i><b>MATCH</b><i>↔</i><b>VIEW</b></div><small>SQL / RELATIONSHIPS / PREPARED STATEMENTS</small></div>';
  return '<div class="art-regression"><svg viewBox="0 0 300 160" aria-hidden="true"><path d="M0 157L300 15" stroke="currentColor" stroke-width="3" opacity=".6"/><g fill="currentColor" opacity=".8"><circle cx="33" cy="136" r="5"/><circle cx="62" cy="119" r="5"/><circle cx="89" cy="134" r="5"/><circle cx="110" cy="101" r="5"/><circle cx="134" cy="79" r="5"/><circle cx="165" cy="103" r="5"/><circle cx="188" cy="65" r="5"/><circle cx="218" cy="52" r="5"/><circle cx="236" cy="69" r="5"/><circle cx="275" cy="22" r="5"/></g></svg><span>MODEL ≠ CAUSATION</span></div>';
}

function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function renderProjects(filter='all'){
  const filtered=projects.filter(p=>filter==='all'||p.category===filter||(filter==='analytics'&&p.category==='analytics'));
  byId('visible-count').textContent=String(filtered.length).padStart(2,'0');
  byId('projects-grid').innerHTML=filtered.map(p=>`<article class="project-card ${p.lead?'project-card-lead':''}"><div class="project-card-top"><span class="project-index">${escapeHtml(p.number)} / 08</span><span class="project-type">${escapeHtml(p.type)}</span></div><div class="project-art visual-${escapeHtml(p.visual)}">${p.image?`<img src="${escapeHtml(p.image)}" alt="${p.category==='internship'?'Unedited project screenshot':'Real project dashboard'}: ${escapeHtml(p.subtitle)}" loading="lazy" width="800" height="450" class="project-photo" onerror="this.onerror=null;this.style.display='none';this.parentElement.classList.add('image-fallback');"><span class="project-photo-label">${p.category==='internship'?'REAL PROJECT WORK':'REAL PROJECT SCREENSHOT'}</span>`:projectArt(p.visual)}</div><div class="project-text"><div class="project-subtitle">${escapeHtml(p.subtitle)}</div><h3>${escapeHtml(p.name)}</h3><p>${escapeHtml(p.description)}</p><div class="project-signal">${escapeHtml(p.highlight)}</div><div class="project-tags">${p.tech.map(t=>`<span>${escapeHtml(t)}</span>`).join('')}</div><div class="project-card-bottom"><button type="button" class="card-more" data-project="${escapeHtml(p.id)}" aria-label="Read more about ${escapeHtml(p.name)}">READ THE STORY <span aria-hidden="true">↗</span></button>${p.link?`<a href="${escapeHtml(p.link)}" target="_blank" rel="noopener noreferrer" aria-label="Open source repository for ${escapeHtml(p.name)}">GITHUB ↗</a>`:'<span>OVERVIEW ONLY</span>'}</div></div></article>`).join('');
  document.querySelectorAll('.card-more').forEach(b=>b.addEventListener('click',()=>openProject(b.dataset.project)));
}
const dialog=byId('project-dialog');
function openProject(id){
  const p=projects.find(p=>p.id===id);if(!p)return;
  byId('dialog-eyebrow').textContent=p.type;
  byId('dialog-title').textContent=p.name;
  byId('dialog-summary').textContent=p.description;
  const visual=byId('dialog-visual'); visual.hidden=!p.image;
  if(p.image){byId('dialog-image').src=p.image; byId('dialog-image').alt=(p.category==='internship'?'Screenshot from ':'Screenshot of ')+p.subtitle;
    byId('dialog-image-caption').textContent=p.category==='internship'?'Authentic internship screenshot, shown in this private review preview. Public release requires permission.':'Screenshot from my publicly documented educational project.';}
  const secondary=byId('dialog-secondary-visual');
  secondary.hidden=!p.extraImage;
  if(p.extraImage){byId('dialog-secondary-image').src=p.extraImage;byId('dialog-secondary-image').alt='Additional original project visual, shown without altered results';}
  const third=byId('dialog-third-visual'); third.hidden=!p.thirdImage;
  if(p.thirdImage){byId('dialog-third-image').src=p.thirdImage;byId('dialog-third-image').alt='Actual out-of-domain refusal from the GA4 analytics assistant';}
  const extraLink=byId('dialog-secondary-link');extraLink.hidden=!p.extraImage;
  if(p.extraImage)extraLink.href=p.extraImage;
  const thirdLink=byId('dialog-third-link');thirdLink.hidden=!p.thirdImage;
  if(p.thirdImage)thirdLink.href=p.thirdImage;
  byId('dialog-problem').textContent=p.problem;
  byId('dialog-approach').textContent=p.approach;
  byId('dialog-outcome').textContent=p.outcome;
  byId('dialog-tags').innerHTML=p.tech.map(t=>`<span>${escapeHtml(t)}</span>`).join('');
  byId('dialog-notice').textContent=p.notice;
  const fullImage=byId('dialog-image-link');fullImage.hidden=!p.image;
  if(p.image)fullImage.href=p.image;
  const link=byId('dialog-link'); link.hidden=!p.link;if(p.link)link.href=p.link;
  if(typeof dialog.showModal==='function')dialog.showModal();
}
renderProjects();
const filters=[...document.querySelectorAll('.filter')];
filters.forEach(b=>b.addEventListener('click',()=>{filters.forEach(f=>{f.classList.toggle('active',f===b);f.setAttribute('aria-pressed',String(f===b));});renderProjects(b.dataset.filter);}));
byId('project-dialog').querySelector('.modal-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
const menu=byId('mobile-menu'),toggle=document.querySelector('.menu-toggle');
function closeMenu(){menu.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');}
toggle.addEventListener('click',()=>{const opening=menu.hidden;menu.hidden=!opening;toggle.setAttribute('aria-expanded',String(opening));toggle.setAttribute('aria-label',opening?'Close navigation':'Open navigation');});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
byId('year').textContent=new Date().getFullYear();



// Private review screenshots show actual project results. Public deployment requires TDAI approval or a separately prepared, accurately labelled anonymised/synthetic version. No raw exports or credentials are included.
const replayData = [
  {label:'PROJECT 01 / EXCEL ANALYSIS',image:'assets/linkedin-clear-preview.webp',alt:'Actual Excel screenshot of LinkedIn content scoring and ranking methodology',verb:'THE QUESTION',heading:'What actually makes a post useful?',description:'Look beyond impressions and weigh clicks, engagement and reach against the business question.',project:'tdai-linkedin'},
  {label:'PROJECT 02 / POWER BI',image:'assets/survey-clear-preview.webp',alt:'Actual Power BI survey dashboard with visible project results',verb:'THE QUESTION',heading:'Where are learners asking for more support?',description:'Combine batch exports and compare confidence, manageability and NPS so the team can focus attention.',project:'tdai-survey'},
  {label:'PROJECT 03 / GA4 + BIGQUERY',image:'assets/ga4-clear-preview.webp',alt:'Actual Streamlit GA4 chatbot response with visible KPI result',verb:'THE QUESTION',heading:'Can staff ask the data directly?',description:'A constrained question-to-answer workflow that keeps query validation, approved data and costs under control.',project:'tdai-ga4'}
];
let currentReplay=0;
const replayTabs=[...document.querySelectorAll('.replay-tab')];
function activateReplay(i){
  const item=replayData[i]; if(!item)return;
  currentReplay=i;
  replayTabs.forEach((b,n)=>{b.classList.toggle('is-selected',n===i);b.setAttribute('aria-pressed',String(n===i));});
  const frame=document.querySelector('.replay-visual');
  frame.classList.remove('replay-enter');void frame.offsetWidth;frame.classList.add('replay-enter');
  byId('replay-image').src=item.image;byId('replay-image').alt=item.alt;
  byId('replay-browser-label').textContent=item.label;
  byId('replay-verb').textContent=item.verb;byId('replay-heading').textContent=item.heading;
  byId('replay-description').textContent=item.description;
}
replayTabs.forEach((b,i)=>b.addEventListener('click',()=>activateReplay(i)));
byId('replay-details').addEventListener('click',()=>openProject(replayData[currentReplay].project));

// Move a ball across the playbook, like a sequence of passes. Stops when the user prefers reduced motion.
const motionOK=!window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const ball=byId('strategy-ball');
const ballPositions=[['16%','80%'],['45%','60%'],['74%','40%'],['86%','16%']];
function moveBall(i){if(!ball)return;ball.style.left=ballPositions[i][0];ball.style.top=ballPositions[i][1];}
const originalActivatePlay=activatePlay;
activatePlay=function(i){originalActivatePlay(i);moveBall(i);};
let playTimer=null;
const pitchEl=byId('pitch');
if(motionOK && pitchEl && 'IntersectionObserver' in window){
  const heroObserver=new IntersectionObserver(entries=>{
    const seen=entries.some(e=>e.isIntersecting);
    if(seen&&!playTimer)playTimer=setInterval(()=>activatePlay((players.findIndex(p=>p.classList.contains('is-active'))+1)%players.length),4600);
    if(!seen&&playTimer){clearInterval(playTimer);playTimer=null;}
  },{threshold:.2});heroObserver.observe(pitchEl);
  players.forEach(b=>b.addEventListener('click',()=>{if(playTimer){clearInterval(playTimer);playTimer=null;}}));
}

// Reveal elements softly as they enter the viewport, but do not conceal content without JS support.
if(motionOK && 'IntersectionObserver' in window){
 const observeNodes=document.querySelectorAll('.project-card,.timeline-row,.tool-group,.about-main,.replay-stage');
 const io=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');io.unobserve(entry.target);}});},{threshold:.07});
 observeNodes.forEach(el=>{el.classList.add('reveal-ready');io.observe(el);});
 // Rendered project cards are replaced by filters; newly rendered cards get their own observation.
 const originalRender=renderProjects;
 renderProjects=function(filter){originalRender(filter);document.querySelectorAll('.project-card').forEach(el=>{el.classList.add('reveal-ready');io.observe(el);});};
}


// Reliable kick-off navigation from any section, including nested / hosted Pages paths.
document.querySelectorAll('a[href="#top"]').forEach(link=>{
  link.addEventListener('click', event=>{
    event.preventDefault();
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({top:0,left:0,behavior:reduced?'instant':'smooth'});
    if(window.history && window.history.replaceState){
      try{window.history.replaceState(null,'',window.location.pathname+window.location.search);}catch(_e){}
    }
  });
});
