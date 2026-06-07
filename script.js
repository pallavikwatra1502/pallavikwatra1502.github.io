const menuButton=document.querySelector('.menu-button');const nav=document.querySelector('.nav');menuButton?.addEventListener('click',()=>nav.classList.toggle('open'));document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const chatToggle=document.querySelector('.chat-toggle');const chatbot=document.querySelector('.chatbot');const chatClose=document.querySelector('.chat-close');const chatForm=document.getElementById('chatForm');const chatInput=document.getElementById('chatInput');const chatMessages=document.getElementById('chatMessages');
chatToggle.addEventListener('click',()=>chatbot.classList.toggle('open'));chatClose.addEventListener('click',()=>chatbot.classList.remove('open'));
const knowledge=[{keys:['gcp','google','cloud'],answer:'Pallavi is Google Cloud certified and works across BigQuery, Dataflow, Pub/Sub, Cloud Composer, GCS, IAM, VPC Service Controls, Looker and Terraform.'},{keys:['experience','years','senior'],answer:'She has 5+ years of experience across data engineering, cloud security, platform engineering and Java/Spring Boot software delivery in banking environments.'},{keys:['bigquery','cost','saving'],answer:'She improved BigQuery cost efficiency by 25% using query optimisation, table partitioning and workload tuning, saving approximately £95K annually.'},{keys:['dataflow','beam','etl','pipeline'],answer:'She built Apache Beam / Dataflow ETL pipelines ingesting 20M+ daily records from APIs and on-prem databases into BigQuery.'},{keys:['security','cyber','audit','compliance','gdpr','fca'],answer:'Her work includes GDPR-aligned governance, audit automation, VPC-SC data perimeter security, privileged access monitoring and cloud security analytics.'},{keys:['ai','chatbot','genai','generative'],answer:'She is leading a Generative AI proof-of-concept for a cybersecurity audit chatbot and AI-powered report writer using enterprise GCP datasets.'},{keys:['contact','email','hire','linkedin'],answer:'You can contact Pallavi at Pallavikwatra1502@gmail.com, connect on LinkedIn at linkedin.com/in/pallavikwatra1502/, or call her at +44 7470 440385.'},{keys:['certification','certified','certificate'],answer:'Certifications include Google Cloud Professional Cloud Architect, Professional Cloud Security Engineer, Associate Cloud Engineer, Google Generative AI Leader and Looker Development.'}];
function addMessage(text,type){const div=document.createElement('div');div.className=`${type} message`;div.textContent=text;chatMessages.appendChild(div);chatMessages.scrollTop=chatMessages.scrollHeight}function answer(q){const l=q.toLowerCase();const hit=knowledge.find(k=>k.keys.some(key=>l.includes(key)));return hit?hit.answer:'Pallavi is a Senior Data / GCP Cloud Data Engineer focused on secure data platforms, BigQuery, Dataflow, Pub/Sub, Terraform, Kubernetes, audit automation and governed data delivery. Try asking about GCP, Dataflow, security, certifications or data platform work.'}chatForm.addEventListener('submit',e=>{e.preventDefault();const q=chatInput.value.trim();if(!q)return;addMessage(q,'user');chatInput.value='';setTimeout(()=>addMessage(answer(q),'bot'),300)});
const skillTabs=document.querySelectorAll('.skill-tab');const skillButtons=document.querySelectorAll('.skill-cloud button');skillTabs.forEach(tab=>tab.addEventListener('click',()=>{const filter=tab.dataset.filter;skillTabs.forEach(t=>t.classList.remove('active'));tab.classList.add('active');skillButtons.forEach(btn=>{const match=filter==='all'||btn.dataset.group===filter;btn.classList.toggle('highlight',match&&filter!=='all');btn.classList.toggle('dim',!match&&filter!=='all');});}));


const portfolioProjects=[
  {
    title:'AuditIQ Enterprise',
    category:'Governance • Audit • AI',
    subtitle:'AI-powered audit intelligence platform',
    image:'assets/project-auditiq.svg',
    description:'Transforms cloud security, governance and compliance findings into risk-scored dashboards, executive reports, data quality checks and audit-ready remediation insights.',
    tech:['Python','Streamlit','Pandas','Plotly','Risk Scoring','Audit Automation'],
    links:[
      ['Live Demo','https://auditiq-ai-audit-intelligence.streamlit.app/','live'],
      ['View Code','https://github.com/pallavikwatra1502/auditiq-ai-audit-intelligence','code']
    ]
  },
  {
    title:'CostIQ',
    category:'GCP • FinOps • Optimisation',
    subtitle:'GCP cloud cost intelligence platform',
    image:'assets/project-costiq.svg',
    description:'Analyses GCP spend, BigQuery utilisation, Dataflow jobs and budget risk to detect anomalies, forecast overspend and generate optimisation recommendations.',
    tech:['Python','Streamlit','GCP','BigQuery','Dataflow','FinOps'],
    links:[
      ['Live Demo','https://costiq-gcp-cost-intelligence.streamlit.app/','live'],
      ['View Code','https://github.com/pallavikwatra1502/costiq-gcp-cost-intelligence','code']
    ]
  },
  {
    title:'DataPulse Enterprise',
    category:'DataOps • Reliability • Lineage',
    subtitle:'Real-time data engineering command center',
    image:'assets/project-datapulse.svg',
    description:'Monitors pipeline SLAs, data quality, lineage, incident impact and root-cause analysis across critical enterprise data products with a reliability copilot.',
    tech:['Python','Gradio','Hugging Face','Pandas','Plotly','NetworkX'],
    links:[
      ['Live Demo','https://huggingface.co/spaces/pallavikwatra/DataPulse-Enterprise','live'],
      ['View Space','https://huggingface.co/spaces/pallavikwatra/DataPulse-Enterprise/tree/main','code']
    ]
  },
  {
    title:'Akamai WAF Security Analytics',
    category:'Security • WAF • Threat Detection',
    subtitle:'Enterprise security analytics platform for Akamai WAF logs',
    image:'assets/project-akamai.svg',
    description:'Processes synthetic Akamai WAF logs, validates schema, detects high-risk threats, scores attacks and generates dashboard-ready threat reports with production-style GCP architecture.',
    tech:['Python','BigQuery','Pub/Sub','Airflow','Terraform','Security Analytics'],
    links:[
      ['View Code','https://github.com/pallavikwatra1502/akamai-waf-security-analytics-platform','live']
    ]
  },
  {
    title:'Palantir Project Walkthrough',
    category:'Data Platform • Demo • Video',
    subtitle:'Project explanation and technical walkthrough',
    image:'assets/project-palantir.svg',
    description:'Video walkthrough explaining the project approach, implementation flow and platform thinking. Added as a media project because no public GitHub repository is currently available.',
    tech:['Palantir','Data Platform','Analytics','Project Walkthrough'],
    links:[
      ['Watch Video','https://www.youtube.com/watch?v=WtnSH4of45o','video']
    ]
  },
  {
    title:'Flutter Mobile App Prototype',
    category:'Mobile • Flutter • Dart',
    subtitle:'Cross-platform mobile application prototype',
    image:'assets/project-flutter.svg',
    description:'Flutter mobile application repository showing cross-platform app structure across Android and iOS. This is included as an older mobile development project.',
    tech:['Flutter','Dart','Android','iOS'],
    links:[
      ['View Code','https://github.com/pallavikwatra1502/flutter','code']
    ]
  }
];

let currentProject=0;
const projectImage=document.getElementById('projectImage');
const projectCategory=document.getElementById('projectCategory');
const projectTitle=document.getElementById('projectTitle');
const projectSubtitle=document.getElementById('projectSubtitle');
const projectDescription=document.getElementById('projectDescription');
const projectTech=document.getElementById('projectTech');
const projectLinks=document.getElementById('projectLinks');
const projectDots=document.getElementById('projectDots');
function renderProject(index){
  if(!projectImage)return;
  const p=portfolioProjects[index];
  projectImage.src=p.image;
  projectImage.alt=`${p.title} project preview`;
  projectCategory.textContent=p.category;
  projectTitle.textContent=p.title;
  projectSubtitle.textContent=p.subtitle;
  projectDescription.textContent=p.description;
  projectTech.innerHTML=p.tech.map(t=>`<span>${t}</span>`).join('');
  projectLinks.innerHTML=p.links.map(([label,url,type])=>`<a class="${type}" href="${url}" target="_blank" rel="noopener">${label} →</a>`).join('');
  projectDots.innerHTML=portfolioProjects.map((_,i)=>`<button class="${i===index?'active':''}" aria-label="View project ${i+1}"></button>`).join('');
  [...projectDots.children].forEach((dot,i)=>dot.addEventListener('click',()=>{currentProject=i;renderProject(currentProject)}));
}
document.querySelector('.project-next')?.addEventListener('click',()=>{currentProject=(currentProject+1)%portfolioProjects.length;renderProject(currentProject)});
document.querySelector('.project-prev')?.addEventListener('click',()=>{currentProject=(currentProject-1+portfolioProjects.length)%portfolioProjects.length;renderProject(currentProject)});
renderProject(currentProject);
