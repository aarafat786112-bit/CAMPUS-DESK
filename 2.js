/* ============================================================
   CampusDesk script.js — WEBSITE FUNCTIONALITY MAP
   Find these labels with Ctrl+F to locate each screen's code.
   1. Document Guide and Get Started data
   2. Student sign-in, workspace, and My Files
   3. Request guide, custom dropdowns, and uploads
   4. Student and office guidance dialogs
   5. Shared page navigation and theme controls
   6. Application storage and student submissions
   7. Office Overview, Applications, and Student Outcomes
   8. Office decisions and role-based sign-in
   9. Student Notifications, unread count, and follow-up uploads
   Note: records are saved in this browser; this is not a college server.
   ============================================================ */
// DOCUMENT CATALOG: each item becomes a certificate card and a request-form option.
// WEBSITE PART — Document Guide and Get Started: available certificates and their preparation lists.
const documents = [
  {
    id:'internship-noc',
    name:'Internship NOC',
    category:'career',
    icon:'💼',
    tag:'INTERNSHIP',
    desc:'For an internship, training placement, or practical experience with an organization.',
    goal:'internship',
    prep:[
      'Organization name and address, role, and internship dates',
      'Offer or invitation letter, if you have one',
      'Your department’s approval process and any required college form']
  },
  {
    id:'job-noc',
    name:'Employment / Job NOC',
    category:'career',
    icon:'🧭',
    tag:'CAREER',
    desc:'Some institutions may ask for a letter when taking up a job during study or for an employer process.',
    goal:'job',
    prep:[
      'Employer name, role, and joining or work dates',
      'Check whether the college issues this type of NOC',
      'Ask if academic or attendance approval is needed']
  },
  {
    id:'placement-noc',
    name:'Placement / Campus NOC',
    category:'career',
    icon:'🚀',
    tag:'CAREER',
    desc:'For placement activities, off-campus interviews, or a specific employer requirement.',
    goal:'job',
    prep:[
      'Employer or placement details and relevant dates',
      'Any placement-cell or department instructions',
      'Confirm whether a special format is required']
  },
  {
    id:'higher-studies-noc',
    name:'Higher Studies NOC',
    category:'study',
    icon:'🎓',
    tag:'STUDY',
    desc:'May support an application to another university, course, or academic program.',
    goal:'higher',
    prep:[
      'Name of the university and program',
      'Application or offer details, if available',
      'Check whether transcripts or a separate bonafide letter are needed']
  },
  {
    id:'bonafide',
    name:'Bonafide / Student Status',
    category:'study',
    icon:'📄',
    tag:'STUDENT RECORD',
    desc:'Confirms that you are or were a student of the institution; often used for applications and verification.',
    goal:'records',
    prep:[
      'Purpose for the letter and any required wording',
      'Current enrollment details or student ID, if requested',
      'Ask whether it is called bonafide, enrollment, or student status certificate']
  },
  {
    id:'study-certificate',
    name:'Study / Course Certificate',
    category:'study',
    icon:'📘',
    tag:'STUDENT RECORD',
    desc:'Confirms a course, period of study, or attendance details as held by the institution.',
    goal:'records',
    prep:[
      'Course or program name and study period',
      'Purpose and the recipient’s requirements',
      'Confirm which office maintains the relevant record']
  },
  {
    id:'transcript',
    name:'Transcript / Academic Records',
    category:'study',
    icon:'📊',
    tag:'ACADEMIC',
    desc:'For marksheets, transcripts, or other academic records. Some colleges require a separate application.',
    goal:'higher',
    prep:[
      'Exact record type, semesters, and number of copies',
      'Recipient’s format, sealed-envelope, or verification requirements',
      'Ask about fees, processing time, and collection or delivery options']
  },
  {
    id:'fee-estimate',
    name:'Fee Estimate / Fee Certificate',
    category:'study',
    icon:'💰',
    tag:'FEES',
    desc:'Provides fee information for a course or period, sometimes for scholarships, loans, or visa applications.',
    goal:'scholarship',
    prep:[
      'Academic year or fee period and course details',
      'Recipient’s required estimate format, if any',
      'Ask the accounts office whether dues clearance is needed']
  },
  {
    id:'character',
    name:'Character / Conduct Certificate',
    category:'personal',
    icon:'🌿',
    tag:'PERSONAL',
    desc:'A college letter about conduct or character during your time at the institution.',
    goal:'personal',
    prep:[
      'Purpose and the organization requesting it',
      'Dates of study and any prescribed format',
      'Ask which authority signs it and whether clearances apply']
  },
  {
    id:'migration',
    name:'Migration Certificate / NOC',
    category:'study',
    icon:'🧳',
    tag:'STUDY',
    desc:'May be needed when moving from one board or institution to another for further study.',
    goal:'higher',
    prep:[
      'Receiving institution and admission details',
      'Check whether you need a migration certificate, transfer certificate, or both',
      'Ask about original documents, dues, and timing']
  },
  {
    id:'transfer',
    name:'Transfer / Leaving Certificate',
    category:'study',
    icon:'📦',
    tag:'STUDENT RECORD',
    desc:'Records that you are leaving or transferring from an institution. Names and processes vary.',
    goal:'records',
    prep:[
      'Reason and effective date for leaving or transferring',
      'Ask for the official application and required signatures',
      'Confirm library, hostel, accounts, and department clearance requirements']
  },
  {
    id:'visa-travel',
    name:'Visa / Travel NOC',
    category:'personal',
    icon:'✈️',
    tag:'TRAVEL',
    desc:'A letter sometimes requested for travel, visa, or an external application; requirements vary by destination.',
    goal:'travel',
    prep:[
      'Destination, travel dates, and exact recipient requirements',
      'Ask whether a bonafide or enrollment certificate may be more suitable',
      'Check permitted wording, signatory, and expected turnaround']
  },
  {
    id:'scholarship',
    name:'Scholarship / Financial Aid Letter',
    category:'personal',
    icon:'🏅',
    tag:'FINANCIAL SUPPORT',
    desc:'May confirm enrollment, fees, academic details, or other information for a funding application.',
    goal:'scholarship',
    prep:[
      'Scholarship provider’s checklist and requested format',
      'Course, enrollment, and fee details that must be confirmed',
      'Ask whether separate certificates are needed for each item']
  },
  {
    id:'event',
    name:'Event / Competition NOC',
    category:'personal',
    icon:'🎤',
    tag:'ACTIVITY',
    desc:'May be requested for an external event, competition, volunteering, or student activity.',
    goal:'other',
    prep:[
      'Event organizer, purpose, location, and dates',
      'Department or faculty approval, if applicable',
      'Ask whether absence, travel, or safety forms are also required']
  },
  {
    id:'research',
    name:'Research / Project NOC',
    category:'career',
    icon:'🔬',
    tag:'RESEARCH',
    desc:'Sometimes requested for research access, an external project, lab work, or collaboration.',
    goal:'other',
    prep:[
      'Project description, host organization, and supervisor',
      'Any data, lab, ethics, or confidentiality approvals',
      'Ask your department which approvals must come first']
  },
  {
    id:'other',
    name:'Other / Not sure yet',
    category:'personal',
    icon:'💬',
    tag:'NEED GUIDANCE',
    desc:'For a special-purpose letter, an unfamiliar NOC, or when you are not sure what to call it.',
    goal:'other',
    prep:[
      'Describe what you are trying to do and who asked for the letter',
      'Share the exact wording or checklist from the recipient, if available',
      'Ask your department office which document name and process fit']
  }
];
// GOAL LABELS: match each internal goal value to the words shown on screen.
// WEBSITE PART — Get Started form: visible wording for each student goal.
const goalLabels={
  internship:'Apply for an internship',
  job:'Apply for a job or placement',
  higher:'Apply for higher studies',
  travel:'Travel, visa, or an external application',
  scholarship:'Apply for a scholarship or financial support',
  personal:'Request a personal or conduct-related letter',
  records:'Get proof of enrollment, study, or fees',
  other:'Something else / I’m not sure'
}
;
// GUIDE CATEGORIES: decide which documents appear under each guide topic.
// WEBSITE PART — Document Guide: categories and the document IDs shown in each one.
const categories=[
  {
    id:'internship',
    title:'Internship & training',
    icon:'🧪',
    desc:'Internship and external project requests.',
    docs:[
      'internship-noc',
      'research']
  },
  {
    id:'career',
    title:'Career & placement',
    icon:'💼',
    desc:'Employment, placements, and interviews.',
    docs:[
      'job-noc',
      'placement-noc']
  },
  {
    id:'records',
    title:'Student records',
    icon:'📘',
    desc:'Enrollment, study, conduct, and academic records.',
    docs:[
      'bonafide',
      'study-certificate',
      'transcript',
      'migration',
      'transfer',
      'character']
  },
  {
    id:'higher',
    title:'Further study',
    icon:'🎓',
    desc:'Higher education and university applications.',
    docs:[
      'higher-studies-noc']
  },
  {
    id:'fees',
    title:'Fees & funding',
    icon:'💳',
    desc:'Fee statements, scholarships, and financial aid.',
    docs:[
      'fee-estimate',
      'scholarship']
  },
  {
    id:'other',
    title:'Travel & other requests',
    icon:'✈️',
    desc:'Travel, events, and special-purpose letters.',
    docs:[
      'visa-travel',
      'event',
      'other']
  }
];
// QUESTIONS TO ASK: prompts students can take to their college office.
// WEBSITE PART — Preparation Guide: questions students can ask their college office.
const questions=[
  'What is the official name of this document and which office handles it?',
  'Is there an application form, required format, or supporting document checklist?',
  'Which signatures or clearances apply to my request?',
  'What is the expected processing time, fee (if any), and way to follow up?'
];
// SAMPLE ACCOUNTS: local preview identities and sample file names for the sign-in screen.
// WEBSITE PART — Local sign-in and My Files: fictional student profiles and file records.
const sampleStudents=[
  {
    id:'ananya',
    username:'ananya.rao',
    name:'Ananya Rao',
    roll:'CS24-031',
    course:'Computer Science',
    files:[
      {
        id:'a1',
        title:'Internship NOC',
        type:'No-objection certificate',
        filename:'internship-noc.pdf',
        status:'Ready',
        date:'2026-10-21',
        summary:'Sample internship approval letter. Replace with a verified college-issued document in a real system.'
      },
      {
        id:'a2',
        title:'Bonafide Student Certificate',
        type:'Student record',
        filename:'bonafide-certificate.pdf',
        status:'Ready',
        date:'2026-10-18',
        summary:'Sample confirmation of current student status for an external application.'
      },
      {
        id:'a3',
        title:'Library Clearance',
        type:'Clearance',
        filename:'library-clearance.pdf',
        status:'In review',
        date:'2026-10-22',
        summary:'Sample library no-dues request awaiting an office update.'
      }
    ]
  },
  {
    id:'rohan',
    username:'rohan.mehta',
    name:'Rohan Mehta',
    roll:'BBA24-052',
    course:'Business Administration',
    files:[
      {
        id:'r1',
        title:'Fee Estimate Letter',
        type:'Fees and funding',
        filename:'fee-estimate.pdf',
        status:'Ready',
        date:'2026-10-17',
        summary:'Sample fee estimate for the current academic year.'
      },
      {
        id:'r2',
        title:'Placement NOC',
        type:'No-objection certificate',
        filename:'placement-noc.pdf',
        status:'Action needed',
        date:'2026-10-20',
        summary:'Sample request. Contact the placement office to confirm employer details.'
      },
      {
        id:'r3',
        title:'Character Certificate',
        type:'Student certificate',
        filename:'character-certificate.pdf',
        status:'In review',
        date:'2026-10-23',
        summary:'Sample character certificate request pending a department review.'
      }
    ]
  },
  {
    id:'sana',
    username:'sana.khan',
    name:'Sana Khan',
    roll:'ECE24-086',
    course:'Electronics Engineering',
    files:[
      {
        id:'s1',
        title:'Course Certificate',
        type:'Student record',
        filename:'course-certificate.pdf',
        status:'Ready',
        date:'2026-10-16',
        summary:'Sample certificate confirming course and period of study.'
      },
      {
        id:'s2',
        title:'Research Project NOC',
        type:'No-objection certificate',
        filename:'research-noc.pdf',
        status:'In review',
        date:'2026-10-22',
        summary:'Sample research collaboration NOC awaiting faculty review.'
      },
      {
        id:'s3',
        title:'Hostel No-dues',
        type:'Clearance',
        filename:'hostel-no-dues.pdf',
        status:'Ready',
        date:'2026-10-19',
        summary:'Sample hostel clearance record.'
      }
    ]
  }
];
const grid=document.querySelector('#documentGrid');
const docSelect=document.querySelector('#docType');
// STUDENT DOCUMENT GUIDE: draw category buttons and respond when a category is selected.
// WEBSITE PART: Student Document Guide — builds the category buttons.
function renderCategories(){
  const root=document.querySelector('#categoryGrid');
  root.innerHTML=categories.map(category=>`<button type="button" class="category-card" data-category="${category.id}"><span class="category-icon">${category.icon}</span><span class="category-copy"><b>${category.title}</b><small>${category.desc}</small></span><span class="category-arrow" aria-hidden="true">→</span></button>`).join('');
  root.querySelectorAll('[data-category]').forEach(button=>button.addEventListener('click',()=>showCategory(button.dataset.category)));
}
// STUDENT DOCUMENT GUIDE: show the documents belonging to the chosen category.
// WEBSITE PART: Document Guide — fills the results area with matching document cards.
function renderDocuments(categoryId){
  const category=categories.find(c=>c.id===categoryId);
  if(!category)return;
  const shown=category.docs.map(id=>documents.find(d=>d.id===id)).filter(Boolean);
  document.querySelector('#activeCategoryTitle').textContent=category.title;
  grid.innerHTML=shown.map(d=>`<article class="doc-card"><div class="doc-top"><span class="doc-emoji">${d.icon}</span><span class="doc-tag">${d.tag}</span></div><h3>${d.name}</h3><p>${d.desc}</p><button type="button" data-doc="${d.id}">Explore this request <span>→</span></button></article>`).join('');
  grid.querySelectorAll('[data-doc]').forEach(btn=>btn.addEventListener('click',()=>startWithDocument(btn.dataset.doc)));
}
// CATEGORY NAVIGATION: switch between all categories and one category’s documents.
// WEBSITE PART: Document Guide — opens one category and its document results.
function showCategory(categoryId){
  document.querySelector('#categoryGrid').hidden=true;
  document.querySelector('#categoryResults').hidden=false;
  renderDocuments(categoryId);
  document.querySelector('#categoryResults').scrollIntoView({
    behavior:'smooth',
    block:'nearest'
  }
  );
}
// WEBSITE PART: Document Guide — returns to the list of all categories.
function showCategories(){
  document.querySelector('#categoryResults').hidden=true;
  document.querySelector('#categoryGrid').hidden=false;
  document.querySelector('#categoryGrid').scrollIntoView({
    behavior:'smooth',
    block:'nearest'
  }
  );
}
// REQUEST FORM OPTIONS: add the document catalog to the form dropdown.
// WEBSITE PART: Get Started form — fills the document dropdown from the catalog.
function populateSelect(){
  documents.forEach(d=>{
    const opt=document.createElement('option');
    opt.value=d.id;
    opt.textContent=d.name;
    docSelect.append(opt);
  }
  );
}
// DOCUMENT SHORTCUT: prefill the request form when a student starts from a document card.
// WEBSITE PART: Document Guide — carries a chosen document into the request form.
function startWithDocument(id){
  followUpApplicationId=null;
  const d=documents.find(item=>item.id===id);
  if(!d)return;
  showView('request');
  const goalSelect=document.querySelector('#goal');
  goalSelect.value=d.goal;
  goalSelect.dispatchEvent(new Event('change',{
    bubbles:true
  }
  ));
  docSelect.value=d.id;
  docSelect.dispatchEvent(new Event('change',{
    bubbles:true
  }
  ));
  document.querySelector('#request').scrollIntoView({
    behavior:'smooth'
  }
  );
  document.querySelector('#goal').focus({
    preventScroll:true
  }
  );
}
// GUIDE RECOMMENDATIONS: return the selected document or best matches for the selected goal.
// WEBSITE PART: Get Started form — selects the best document suggestions for the goal.
function recommendations(){
  const selected=documents.find(d=>d.id===docSelect.value);
  const goal=document.querySelector('#goal').value;
  if(selected)return [
    selected];
  const list=documents.filter(d=>d.goal===goal);
  return list.length?list.slice(0,3):[
    documents.find(d=>d.id==='other')];
}
// PREPARATION GUIDE: build checklist, questions, possibilities, and the next form step.
// WEBSITE PART: Get Started form — creates the preparation guide for the selected request.
function showGuide(){
  const goal=document.querySelector('#goal').value;
  if(!goal){
    document.querySelector('.select-wrap [data-select="goal"]')?.focus();
    return;
  }
  if(!docSelect.value){
    document.querySelector('.select-wrap [data-select="docType"]')?.focus();
    return;
  }
  const picks=recommendations();
  const named=picks.map(d=>d.name).join(' or ');
  document.querySelector('#resultTitle').textContent=picks.length===1?picks[
    0].name:'A place to start';
  document.querySelector('#resultIntro').textContent=`For “${goalLabels[goal]},” ${picks.length===1?'this may be a useful document to ask about':'these may be useful documents to ask about'}: ${named}. Your college can confirm the correct option.`;
  const prep=picks.flatMap(d=>d.prep.map(item=>({
    label:item,
    doc:d.name
  }
  ))).slice(0,6);
  const common=[
    {
      label:'Write down your purpose and any deadline from the recipient.',
      doc:''
    },
    {
      label:'Keep a copy of your submission and note a reference number if one is provided.',
      doc:''
    }
  ];
  document.querySelector('#checklist').innerHTML=[
    ...prep,
    ...common].map(item=>`<div class="check-item"><span>✓</span><div>${item.label}${item.doc?` <em>(for ${
    item.doc
  }
  )</em>`:''}</div></div>`).join('');
  document.querySelector('#questionsList').innerHTML=questions.map(q=>`<li>${q}</li>`).join('');
  document.querySelector('#possibilitiesText').textContent='The office may approve it, ask for a correction or more information, require a fee or clearance, or explain that a different document is needed. Ask how you will be notified and what to do if the request is delayed or declined.';
  const followUp=followUpApplicationId?applications.find(app=>app.id===followUpApplicationId):null;
  renderApplicationFields(goal,followUp||null);
  document.querySelector('[data-step="1"]').classList.remove('active');
  document.querySelector('[data-step="2"]').classList.add('active');
  document.querySelector('#progressCount').textContent='2 / 2';
  document.querySelector('#progressFill').style.width='100%';
}
// WEBSITE PART: Get Started form — connects its back and continue buttons to guide steps.
document.querySelector('#backToCategories').addEventListener('click',showCategories);
document.querySelector('#continueBtn').addEventListener('click',showGuide);
document.querySelector('#guideForm').addEventListener('submit',event=>event.preventDefault());
// CURRENT STUDENT SESSION: tracks who is signed in and which sample file is open.
// WEBSITE PART: Student sign-in and My Files — holds the active student and selected preview.
let activeStudent=null;
let activePreview=null;
let followUpApplicationId=null;
// PREVIEW SIGN-IN: check the requested password format without saving the password.
function validPreviewPassword(password){
  return password.length>=7&&/[a-z]/.test(password)&&/[A-Z]/.test(password)&&/\d/.test(password)&&/[^A-Za-z0-9]/.test(password);
}
// PREVIEW SIGN-IN: match a sample identity or make a local profile from any username.
function studentForUsername(username){
  const clean=username.trim();
  const sample=sampleStudents.find(item=>item.username.toLowerCase()===clean.toLowerCase()||item.roll.toLowerCase()===clean.toLowerCase());
  if(sample)return sample;
  const name=clean.replace(/[._-]+/g,' ').replace(/\s+/g,' ').trim().replace(/\b\w/g,letter=>letter.toUpperCase());
  return {id:`visitor-${clean.toLowerCase().replace(/[^a-z0-9]+/g,'-')}`,username:clean,name:name||'Student',roll:clean.toUpperCase(),course:'Student',files:[]};
}
// PREVIEW SIGN-IN: remember the student identity in this browser session only.
function rememberStudent(student){
  try{sessionStorage.setItem('campusDeskStudentProfile',JSON.stringify(student));sessionStorage.setItem('campusDeskStudent',student.id);sessionStorage.setItem('campusDeskRole','student');}catch{}
}
// MY FILES PAGE: search and filter the active student’s files and draw result tiles.
// WEBSITE PART: My Files — filters and redraws the signed-in student’s file cards.
function drawStudentFiles(){
  if(!activeStudent)return;
  const query=document.querySelector('#fileSearch').value.trim().toLowerCase();
  const type=document.querySelector('#fileTypeFilter').value;
  const status=document.querySelector('#fileStatusFilter').value;
  const matches=activeStudent.files.filter(file=>{
    const text=`${file.title} ${file.type} ${file.filename} ${file.summary}`.toLowerCase();
    return (!query||text.includes(query))&&(type==='all'||file.type===type)&&(status==='all'||file.status===status);
  }
  );
  document.querySelector('#fileCount').textContent=activeStudent.files.length;
  document.querySelector('#noFilesFound').hidden=matches.length>0;
  document.querySelector('#fileGrid').innerHTML=matches.map(file=>`<article class="stored-file-card"><div class="stored-file-top"><span class="stored-file-icon">▤</span><span class="file-status status-${file.status.toLowerCase().replaceAll(' ','-')}">${file.status}</span></div><span class="stored-file-type">${file.type}</span><h3>${file.title}</h3><p>${file.filename}</p><div class="stored-file-footer"><span>Updated ${file.date}</span><button type="button" data-open-file="${file.id}">Open file →</button></div></article>`).join('');
}
// STUDENT FILE WORKSPACE: show profile details and populate file filters.
// WEBSITE PART: My Files — displays the student profile and prepares the file filters.
function showStudentWorkspace(student){
  activeStudent=student;
  document.querySelector('#fileSignInPrompt').hidden=true;
  document.querySelector('#fileWorkspace').hidden=false;
  document.querySelector('#profileAvatar').textContent=student.name.split(' ').map(part=>part[
    0]).join('').slice(0,2);
  document.querySelector('#profileName').textContent=student.name;
  document.querySelector('#profileMeta').textContent=`${student.roll} · ${student.course}`;
  const typeFilter=document.querySelector('#fileTypeFilter');
  const types=[
    ...new Set(student.files.map(file=>file.type))];
  typeFilter.innerHTML='<option value="all">All types</option>'+types.map(value=>`<option value="${value}">${value}</option>`).join('');
  document.querySelector('#fileSearch').value='';
  document.querySelector('#fileStatusFilter').value='all';
  drawStudentFiles();
  renderStudentUpdates(student);
}
// STUDENT SIGN-OUT: clear the local session and return to the sign-in/request entry.
// WEBSITE PART: My Files — ends the student preview session.
function signOutStudent(){
  if(typeof dashboardLogout==='function'){
    dashboardLogout();
    return;
  }
  activeStudent=null;
  try{
    sessionStorage.removeItem('campusDeskStudent');
  }
  catch{
  }
  document.querySelector('#fileWorkspace').hidden=true;
  document.querySelector('#fileSignInPrompt').hidden=false;
  document.querySelector('#signInPanel').hidden=false;
  document.querySelector('#guideContent').hidden=true;
  document.querySelector('#demoUsername').value='';
  document.querySelector('#demoPassword').value='';
  document.querySelector('#request').scrollIntoView({
    behavior:'smooth'
  }
  );
}
// SAMPLE FILE PREVIEW: display the selected fictional text record.
// WEBSITE PART: My Files — opens a sample document description.
function openSampleFile(fileId){
  if(!activeStudent)return;
  activePreview=activeStudent.files.find(file=>file.id===fileId);
  if(!activePreview)return;
  document.querySelector('#previewTitle').textContent=activePreview.title;
  document.querySelector('#previewBody').textContent=`CAMPUSDESK · FICTIONAL SAMPLE FILE\n\nStudent: ${activeStudent.name}\nStudent ID: ${activeStudent.roll}\nCourse: ${activeStudent.course}\nDocument: ${activePreview.title}\nFile name: ${activePreview.filename}\nType: ${activePreview.type}\nStatus: ${activePreview.status}\nUpdated: ${activePreview.date}\n\n${activePreview.summary}\n\nThis sample is for demonstrating the website interface only.`;
  document.querySelector('#filePreviewDialog').showModal();
}
// SAMPLE PDF BUILDER: create a small, valid one-page PDF with built-in browser code.
// WEBSITE PART: My Files — prepares a printable sample document file.
function createSamplePdf(text){
  const safe=text.replace(/[^\x20-\x7E\n]/g,'?');
  const wrapped=safe.split('\n').flatMap(line=>{
    const words=line.split(/\s+/);
    const rows=[];
    let row='';
    for(const word of words){
      if((row+' '+word).trim().length>82){rows.push(row);row=word;}
      else row=(row+' '+word).trim();
    }
    rows.push(row);
    return rows;
  }).slice(0,52);
  const escapePdf=value=>value.replace(/\\/g,'\\\\').replace(/\(/g,'\\(').replace(/\)/g,'\\)');
  const commands=['BT','/F1 17 Tf','50 790 Td','(CampusDesk - Sample student file) Tj','/F1 10 Tf'];
  wrapped.forEach((line,index)=>commands.push(`${index===0?'0 -28 Td':'0 -14 Td'} (${escapePdf(line)}) Tj`));
  commands.push('ET');
  const stream=commands.join('\n');
  const objects=[
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`
  ];
  let pdf='%PDF-1.4\n';
  const offsets=[0];
  objects.forEach((object,index)=>{
    offsets.push(pdf.length);
    pdf+=`${index+1} 0 obj\n${object}\nendobj\n`;
  });
  const xrefOffset=pdf.length;
  pdf+=`xref\n0 ${objects.length+1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach(offset=>pdf+=`${String(offset).padStart(10,'0')} 00000 n \n`);
  pdf+=`trailer\n<< /Size ${objects.length+1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  return new Blob([pdf],{type:'application/pdf'});
}
// SAMPLE FILE DOWNLOAD: download a clearly identified, printable PDF sample.
// WEBSITE PART: My Files — downloads the selected sample PDF.
function downloadSampleFile(){
  if(!activeStudent||!activePreview)return;
  const body=document.querySelector('#previewBody').textContent;
  const blob=createSamplePdf(body);
  const url=URL.createObjectURL(blob);
  const link=document.createElement('a');
  link.href=url;
  link.download=activePreview.filename.replace(/\.txt$/i,'').replace(/\.pdf$/i,'')+'.pdf';
  link.click();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}
// WEBSITE PART: Request guide sign-in — accepts a username and locally checked preview password.
document.querySelector('#signInForm').addEventListener('submit',event=>{
  event.preventDefault();
  const username=document.querySelector('#demoUsername').value.trim();
  const password=document.querySelector('#demoPassword').value;
  document.querySelector('#demoPassword').value='';
  if(!username||!validPreviewPassword(password)){
    document.querySelector('#signInError').hidden=false;
    return;
  }
  const student=studentForUsername(username);
  document.querySelector('#signInError').hidden=true;
  document.querySelector('#demoUsername').value='';
  document.querySelector('#signInPanel').hidden=true;
  document.querySelector('#guideContent').hidden=false;
  rememberStudent(student);
  showStudentWorkspace(student);
}
);
// WEBSITE PART: My Files — connects the search, filters, open-file cards, and download button.
document.querySelector('#fileSearch').addEventListener('input',drawStudentFiles);
document.querySelector('#fileTypeFilter').addEventListener('change',drawStudentFiles);
document.querySelector('#fileStatusFilter').addEventListener('change',drawStudentFiles);
document.querySelector('#fileGrid').addEventListener('click',event=>{
  const button=event.target.closest('[data-open-file]');
  if(button)openSampleFile(button.dataset.openFile);
}
);
document.querySelector('#logoutButton').addEventListener('click',signOutStudent);
document.querySelector('#downloadPreview').addEventListener('click',downloadSampleFile);
try{
  const savedStudent=sessionStorage.getItem('campusDeskStudent');
  const savedProfile=JSON.parse(sessionStorage.getItem('campusDeskStudentProfile')||'null');
  const account=savedProfile||sampleStudents.find(student=>student.id===savedStudent);
  if(account){
    document.querySelector('#signInPanel').hidden=true;
    document.querySelector('#guideContent').hidden=false;
    showStudentWorkspace(account);
  }
}
catch{
}
// WEBSITE PART: Get Started form — returns from the checklist to the goal-selection step.
document.querySelector('#restartBtn').addEventListener('click',()=>{
  followUpApplicationId=null;
  document.querySelector('[data-step="2"]').classList.remove('active');
  document.querySelector('[data-step="1"]').classList.add('active');
  document.querySelector('#progressCount').textContent='1 / 2';
  document.querySelector('#progressFill').style.width='50%';
  document.querySelector('#request').scrollIntoView({
    behavior:'smooth'
  }
  );
}
);
// CUSTOM DROPDOWN: add animated, keyboard-accessible options while keeping the native select as data.
// WEBSITE PART: Get Started form — creates the animated dropdown control.
function enhanceSelect(select){
  const wrap=select.parentElement;
  wrap.classList.add('custom-select-wrap');
  select.classList.add('native-select');
  const trigger=document.createElement('button');
  trigger.type='button';
  trigger.className='select-trigger';
  trigger.dataset.select=select.id;
  trigger.setAttribute('role','combobox');
  trigger.setAttribute('aria-haspopup','listbox');
  trigger.setAttribute('aria-expanded','false');
  trigger.setAttribute('aria-controls',`${select.id}-menu`);
  const label=document.createElement('span');
  label.className='select-value';
  const caret=document.createElement('span');
  caret.className='select-caret';
  caret.setAttribute('aria-hidden','true');
  caret.textContent='⌄';
  trigger.append(label,caret);
  const menu=document.createElement('div');
  menu.className='select-menu';
  menu.id=`${select.id}-menu`;
  menu.setAttribute('role','listbox');
  menu.setAttribute('aria-label',select.id==='goal'?'Choose your goal':'Choose a document');
  // WEBSITE PART: Get Started dropdown — keeps its visible label in sync with the real select.
  function sync(){
    const selected=select.options[
      select.selectedIndex];
    label.textContent=selected?.textContent||'';
    trigger.classList.toggle('placeholder',!select.value);
    [
      ...menu.children].forEach((item,i)=>item.setAttribute('aria-selected',String(select.options[
      i]
    ?.value===select.value)));
  }
  // WEBSITE PART: Get Started dropdown — closes the options menu.
  function close(){
    wrap.classList.remove('is-open');
    trigger.setAttribute('aria-expanded','false');
  }
  // WEBSITE PART: Get Started dropdown — opens the options menu.
  function open(){
    document.querySelectorAll('.custom-select-wrap.is-open').forEach(el=>{
      el.classList.remove('is-open');
      el.querySelector('.select-trigger')?.setAttribute('aria-expanded','false');
    }
    );
    wrap.classList.add('is-open');
    trigger.setAttribute('aria-expanded','true');
  }
  // WEBSITE PART: Get Started dropdown — creates one selectable row per option.
  function buildOptions(){
    menu.replaceChildren();
    [
      ...select.options].forEach(option=>{
      const item=document.createElement('button');
      item.type='button';
      item.className='select-option';
      item.setAttribute('role','option');
      item.textContent=option.textContent;
      item.dataset.value=option.value;
      item.addEventListener('click',()=>{
        select.value=option.value;
        select.dispatchEvent(new Event('change',{
          bubbles:true
        }
        ));
        sync();
        close();
        trigger.focus();
      }
      );
      menu.append(item);
    }
    );
    sync();
  }
  trigger.addEventListener('click',()=>wrap.classList.contains('is-open')?close():open());
  trigger.addEventListener('keydown',event=>{
    if([
      'ArrowDown',
      'Enter',
      ' '].includes(event.key)){
      event.preventDefault();
      open();
      menu.querySelector('.select-option')?.focus();
    }
    if(event.key==='Escape')close();
  }
  );
  menu.addEventListener('keydown',event=>{
    const options=[
      ...menu.querySelectorAll('.select-option')];
    const i=options.indexOf(document.activeElement);
    if(event.key==='ArrowDown'){
      event.preventDefault();
      options[
        (i+1)%options.length]
      ?.focus();
    }
    if(event.key==='ArrowUp'){
      event.preventDefault();
      options[
        (i-1+options.length)%options.length]
      ?.focus();
    }
    if(event.key==='Escape'){
      close();
      trigger.focus();
    }
  }
  );
  select.addEventListener('change',sync);
  buildOptions();
  wrap.append(trigger,menu);
  document.addEventListener('click',event=>{
    if(!wrap.contains(event.target))close();
  }
  );
  return buildOptions;
}
// WEBSITE PART: Get Started form and Document Guide — initialize choices and category cards.
populateSelect();
const rebuildDocumentOptions=enhanceSelect(docSelect);
enhanceSelect(document.querySelector('#goal'));
renderCategories();
// Keep only document choices that match the student’s selected goal.
// WEBSITE PART: Get Started form — filters documents when the student changes their goal.
function filterDocumentsForGoal(){
  const goal=document.querySelector('#goal').value;
  const matching=documents.filter(d=>!goal||d.goal===goal);
  docSelect.replaceChildren(new Option('Choose a matching document',''),...matching.map(d=>new Option(d.name,d.id)));
  docSelect.value='';
  rebuildDocumentOptions();
}
document.querySelector('#goal').addEventListener('change',filterDocumentsForGoal);
// Open a selected upload and choose the right preview for its file type.
// WEBSITE PART: Office Applications — previews a selected uploaded attachment.
function previewUploadedAttachment(key){
  const file=uploadedAttachments.get(key),dialog=document.querySelector('#uploadedDocumentDialog'),content=document.querySelector('#uploadedPreviewContent'),download=document.querySelector('#downloadUploadedAttachment');
  document.querySelector('#uploadedPreviewTitle').textContent=file?.name||'Sample attachment';
  content.replaceChildren();
  if(activeAttachmentUrl){
    URL.revokeObjectURL(activeAttachmentUrl);
    activeAttachmentUrl=null;
  }
  if(!file){
    content.innerHTML='<p class="preview-unavailable">This is a fictional sample filename; it has no file contents to preview.</p>';
    download.hidden=true;
    dialog.showModal();
    return;
  }
  activeAttachmentUrl=URL.createObjectURL(file);
  download.href=activeAttachmentUrl;
  download.download=file.name;
  download.hidden=false;
  if(file.type.startsWith('image/')){
    const image=document.createElement('img');
    image.src=activeAttachmentUrl;
    image.alt=`Preview of ${file.name}`;
    content.append(image);
  }
  else if(file.type==='application/pdf'||file.name.toLowerCase().endsWith('.pdf')){
    const frame=document.createElement('iframe');
    frame.src=activeAttachmentUrl;
    frame.title=`PDF preview of ${file.name}`;
    content.append(frame);
  }
  else{
    const message=document.createElement('p');
    message.className='preview-unavailable';
    message.textContent='This file type cannot be previewed in the browser. Use Download attachment to open it.';
    content.append(message);
  }
  dialog.showModal();
}
// WEBSITE PART: Office attachment preview — release the temporary file URL when the dialog closes.
document.querySelector('#uploadedDocumentDialog').addEventListener('close',()=>{
  if(activeAttachmentUrl){
    URL.revokeObjectURL(activeAttachmentUrl);
    activeAttachmentUrl=null;
  }
}
);
// STUDENT HOW-IT-WORKS POPUP: text shown when a student clicks one of the three guide cards.
const studentStepTopics={
  choose:{
    title:'Choose a document',
    intro:'Start with what you are trying to do, then pick the closest matching certificate or NOC.',
    points:[
      'Select a goal such as internship, job, placement, higher studies, or student records.',
      'Choose the related document from the filtered list.',
      'If you are unsure, use the document guide and confirm the official name with your department.']
  },
  prepare:{
    title:'Prepare your details',
    intro:'A few details and supporting files help the office understand your request.',
    points:[
      'Write the purpose and any deadline from the organization.',
      'Provide the organization or institution details when requested.',
      'Attach every item marked required and make sure each scan or photo is readable.']
  },
  submit:{
    title:'Confirm and submit',
    intro:'Send a complete request, then follow the status and any office instructions.',
    points:[
      'Review your selected document, purpose, and uploaded files.',
      'Submit the request and keep its reference number.',
      'Check My files and Notifications for approval, missing documents, or other next steps.']
  }
}
;
// WEBSITE PART: How It Works — fills and opens a student guidance popup.
function openStudentStep(topic){
  const info=studentStepTopics[
    topic];
  if(!info)return;
  document.querySelector('#studentStepTitle').textContent=info.title;
  document.querySelector('#studentStepIntro').textContent=info.intro;
  document.querySelector('#studentStepPoints').innerHTML=info.points.map(point=>`<li>${safeText(point)}</li>`).join('');
  document.querySelector('#studentStepDialog').showModal();
}
document.querySelector('.steps-grid').addEventListener('click',event=>{
  const card=event.target.closest('[data-student-topic]');
  if(card)openStudentStep(card.dataset.studentTopic);
}
);
document.querySelector('.steps-grid').addEventListener('keydown',event=>{
  if(event.key!=='Enter'&&event.key!==' ')return;
  const card=event.target.closest('[data-student-topic]');
  if(card){
    event.preventDefault();
    openStudentStep(card.dataset.studentTopic);
  }
}
);
document.querySelector('#closeStudentStep').addEventListener('click',()=>document.querySelector('#studentStepDialog').close());
document.querySelector('#studentStepDialog').addEventListener('click',event=>{
  if(event.target===event.currentTarget)event.currentTarget.close();
}
);
// OFFICE REVIEW HELP POPUP: guidance shown when staff click a review-process card.
const processTopics={
  request:{
    title:'Confirm the request',
    intro:'Make sure the application is connected to the correct student and purpose.',
    points:[
      'Match the university ID with the student profile.',
      'Read the selected NOC or certificate and the student’s purpose.',
      'Check the organization, dates, and any department-specific requirements.',
      'If the request is unclear, record what the student should clarify.']
  },
  documents:{
    title:'Check the documents',
    intro:'Review each required item before moving the request forward.',
    points:[
      'Compare uploads with the checklist for this request type.',
      'Open image or PDF attachments to confirm they are readable.',
      'Use “Needs documents” if an item is missing or incomplete.',
      'Name each missing document in the required decision note.']
  },
  decision:{
    title:'Record the outcome',
    intro:'Save one clear status and a note that tells the student what happens next.',
    points:[
      'Choose In review, Needs documents, Approved, or Rejected.',
      'A written decision note is required for every saved update.',
      'Only approve after all required documents are present.',
      'The saved status and note appear in the student’s local notification view.']
  }
}
;
// WEBSITE PART: Office Review Process — fills and opens a staff guidance popup.
function openProcessHelp(topic){
  const info=processTopics[
    topic];
  if(!info)return;
  document.querySelector('#processHelpTitle').textContent=info.title;
  document.querySelector('#processHelpIntro').textContent=info.intro;
  document.querySelector('#processHelpPoints').innerHTML=info.points.map(point=>`<li>${safeText(point)}</li>`).join('');
  document.querySelector('#processHelpDialog').showModal();
}
document.querySelector('.office-process-grid').addEventListener('click',event=>{
  const card=event.target.closest('[data-process-topic]');
  if(card)openProcessHelp(card.dataset.processTopic);
}
);
document.querySelector('.office-process-grid').addEventListener('keydown',event=>{
  if(event.key!=='Enter'&&event.key!==' ')return;
  const card=event.target.closest('[data-process-topic]');
  if(card){
    event.preventDefault();
    openProcessHelp(card.dataset.processTopic);
  }
}
);
document.querySelector('#closeProcessHelp').addEventListener('click',()=>document.querySelector('#processHelpDialog').close());
document.querySelector('#processHelpDialog').addEventListener('click',event=>{
  if(event.target===event.currentTarget)event.currentTarget.close();
}
);
// WEBSITE PART: Page navigation and role-based workspace — track the signed-in role and pages.
let signedInRole=null;
const viewIds=[
  'home',
  'how',
  'documents',
  'request',
  'files',
  'notifications',
  'office',
  'office-how',
  'office-applications',
  'office-outcomes'];
// Display one page, mark its menu link active, and return to the top.
// WEBSITE PART: Page navigation — shows one page and highlights its navigation link.
function showView(view,updateAddress=false){
  if(!viewIds.includes(view))view='home';
  if(signedInRole==='student'&&view.startsWith('office'))view='home';
  if(signedInRole==='office'&&!view.startsWith('office'))view='office';
  document.querySelectorAll('[data-view]').forEach(part=>{
    part.hidden=part.dataset.view!==view;
  }
  );
  document.querySelectorAll('[data-view-link]').forEach(link=>{
    const active=link.dataset.viewLink===view;
    link.classList.toggle('active',active);
    if(active)link.setAttribute('aria-current','page');
    else link.removeAttribute('aria-current');
  }
  );
  document.body.classList.remove('menu-open');
  document.querySelector('#menuToggle').setAttribute('aria-expanded','false');
  if(updateAddress)history.replaceState(null,'',`#${view}`);
  if(view==='notifications'&&signedInRole==='student'&&activeStudent)markStudentNotificationsRead(activeStudent);
  window.scrollTo({
    top:0,
    behavior:'smooth'
  }
  );
}
// WEBSITE PART: Page navigation — make in-page links open the correct student or office screen.
document.addEventListener('click',event=>{
  const anchor=event.target.closest('a[href^="#"]');
  if(!anchor)return;
  const targetId=anchor.getAttribute('href').slice(1);
  const target=document.getElementById(targetId);
  let view=target?.dataset.view||targetId;
  if(signedInRole==='office'&&targetId==='home')view='office';
  if(viewIds.includes(view)){
    event.preventDefault();
    showView(view,true);
  }
}
);
// WEBSITE PART: Sidebar navigation — switch pages and update the active menu highlight.
document.querySelectorAll('[data-view-link]').forEach(link=>link.addEventListener('click',event=>{
  event.preventDefault();
  showView(link.dataset.viewLink,true);
}
));
// WEBSITE PART: Sidebar navigation — open or collapse the three-line menu.
document.querySelector('#menuToggle').addEventListener('click',()=>{
  const mobile=window.matchMedia('(max-width: 900px)').matches;
  if(mobile){
    const open=document.body.classList.toggle('menu-open');
    document.querySelector('#menuToggle').setAttribute('aria-expanded',String(open));
  }
  else document.body.classList.toggle('menu-collapsed');
}
);
// WEBSITE PART: Theme picker — switch and remember the selected calm color palette.
document.querySelectorAll('.theme-swatch').forEach(button=>button.addEventListener('click',()=>{
  const theme=button.dataset.theme;
  document.body.dataset.theme=theme;
  document.querySelectorAll('.theme-swatch').forEach(swatch=>{
    const selected=swatch===button;
    swatch.classList.toggle('active',selected);
    swatch.setAttribute('aria-pressed',String(selected));
  }
  );
  try{
    localStorage.setItem('campusDeskTheme',theme);
  }
  catch{
  }
}
));
try{
  const savedTheme=localStorage.getItem('campusDeskTheme');
  if([
    'blue',
    'sage',
    'lavender',
    'sand'].includes(savedTheme)){
    document.body.dataset.theme=savedTheme;
    document.querySelectorAll('.theme-swatch').forEach(button=>{
      const active=button.dataset.theme===savedTheme;
      button.classList.toggle('active',active);
      button.setAttribute('aria-pressed',String(active));
    }
    );
  }
}
catch{
}
const initialView=location.hash.slice(1);
showView(viewIds.includes(initialView)?initialView:'home');
// WEBSITE PART: Office Applications — keys and supporting-file rules for the browser-only request queue.
// LOCAL REQUEST STORAGE: keep student submissions and office decisions in this browser.
// This preview has no fixed office account; the password is only format-checked locally.
// WEBSITE PART — Office Applications: required supporting file names by request goal.
const uploadRequirements={
  internship:[
    'Internship offer or invitation',
    'Student ID card copy'],
  job:[
    'Employer offer, job posting, or placement notice',
    'Student ID card copy'],
  higher:[
    'Admission or application proof',
    'Student ID card copy'],
  travel:[
    'Travel or visa requirement letter',
    'Student ID card copy'],
  scholarship:[
    'Scholarship provider checklist or application proof',
    'Student ID card copy'],
  personal:[
    'Request purpose or recipient requirement',
    'Student ID card copy'],
  records:[
    'Purpose or recipient requirement',
    'Student ID card copy'],
  other:[
    'Supporting request or recipient instructions',
    'Student ID card copy']
}
;
const localApplicationKey='campusDeskApplicationsV1';
const notificationSeenKey='campusDeskNotificationsSeenV1';
// APPLICATION STORAGE: read saved requests or load fictional examples for the first preview.
// WEBSITE PART: Office Applications — loads saved requests or the starter records.
function readApplications(){
  try{
    const items=JSON.parse(localStorage.getItem(localApplicationKey)||'null');
    if(Array.isArray(items))return items;
  }
  catch{
  }
  return [
    {
      id:'sample-1001',
      studentId:'CS24-031',
      studentName:'Ananya Rao',
      course:'Computer Science',
      goal:'internship',
      purpose:goalLabels.internship,
      documentId:'internship-noc',
      documentName:'Internship NOC',
      institution:'North Valley University',
      organization:'BrightLabs',
      files:[
        'Internship_Offer.pdf',
        'Student_ID.pdf'],
      requiredFiles:2,
      status:'Submitted',
      submittedAt:'2026-11-18T09:30:00',
      reason:''
    },
    {
      id:'sample-1002',
      studentId:'BBA24-052',
      studentName:'Rohan Mehta',
      course:'Business Administration',
      goal:'job',
      purpose:goalLabels.job,
      documentId:'placement-noc',
      documentName:'Placement / Campus NOC',
      institution:'North Valley University',
      organization:'Cedar Consulting',
      files:[
        'Placement_Notice.pdf'],
      requiredFiles:2,
      status:'Needs documents',
      submittedAt:'2026-11-19T11:15:00',
      reason:'Please add a clear copy of your student ID card.'
    },
    {
      id:'sample-1003',
      studentId:'ECE24-086',
      studentName:'Sana Khan',
      course:'Electronics Engineering',
      goal:'job',
      purpose:goalLabels.job,
      documentId:'job-noc',
      documentName:'Employment / Job NOC',
      institution:'North Valley University',
      organization:'Orbit Systems',
      files:[
        'Offer_Letter.pdf',
        'Student_ID.pdf'],
      requiredFiles:2,
      status:'In review',
      submittedAt:'2026-11-20T14:05:00',
      reason:''
    }
  ];
}
let applications=readApplications();
const uploadedAttachments=new Map();
let activeAttachmentUrl=null;
// WEBSITE PART: Office Applications — write the current request list to this browser's local storage.
function saveApplications(){
  try{
    localStorage.setItem(localApplicationKey,JSON.stringify(applications));
  }
  catch{
  }
}
// WEBSITE PART: Shared interface helper — safely display student names, notes, and file names.
function safeText(value){
  return String(value??'').replace(/[&<>"']/g,char=>({
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    "'":'&#39;'
  }
  [
    char]));
}
// STUDENT SUBMISSION FORM: show organization fields and required uploads for the chosen goal.
// WEBSITE PART: Get Started form — inserts fields and required upload controls for a goal.
function renderApplicationFields(goal,followUp=null){
  const checklist=uploadRequirements[
    goal]
  ||uploadRequirements.other;
  const required=followUp?checklist.slice(followUp.files.length):checklist;
  const uploadList=required.length?required:(followUp?['Additional supporting document']:checklist);
  document.querySelector('#requiredUploadIntro').textContent=followUp?`Add only the missing item(s) for request ${followUp.id}. Your ${followUp.files.length} previously submitted file(s) will stay attached.`:`For ${goalLabels[goal]}, the preview asks for ${required.join(' and ').toLowerCase()}. Your college may have a different checklist.`;
  const needsOrganization=[
    'internship',
    'job',
    'higher',
    'travel',
    'scholarship'].includes(goal)&&!followUp;
  document.querySelector('#applicationFields').innerHTML=`${needsOrganization?`<label class="upload-field full-field"><span>${
    goal==='job'?'Employer / placement organization':'Organization / institution'
  }
  <b>required</b></span><input id="applicationOrganization" required placeholder="Enter the organization name"></label>`:''}<label class="upload-field"><span>Short note for the office <small>optional</small></span><textarea id="applicationNote" rows="2" placeholder="Add a deadline or helpful detail"></textarea></label>`;
  document.querySelector('#applicationUploads').innerHTML=uploadList.map((label,index)=>`<label class="upload-field"><span>${safeText(label)} <b>required</b></span><input type="file" data-required-file="${index}" accept=".pdf,.png,.jpg,.jpeg" required><small>PDF or image · filename is shown in this local preview</small></label>`).join('');
  document.querySelector('.application-submit h4').textContent=followUp?'Submit the missing document':'Send your request to the office queue';
  document.querySelector('#submitApplication').innerHTML=followUp?'Submit additional documents <span>→</span>':'Submit request <span>→</span>';
  document.querySelector('#applicationResult').hidden=true;
}
// REQUEST SUBMISSION: check required details before adding a request to the office list.
// WEBSITE PART: Get Started form — validates and adds a student request to the local queue.
function submitStudentApplication(){
  const goal=document.querySelector('#goal').value,doc=documents.find(item=>item.id===docSelect.value),student=activeStudent;
  if(!student){
    document.querySelector('#applicationResult').hidden=false;
    document.querySelector('#applicationResult').textContent='Please sign in with a student account first.';
    return;
  }
  const uploadInputs=[
    ...document.querySelectorAll('[data-required-file]')];
  const missing=uploadInputs.some(input=>!input.files.length);
  const org=document.querySelector('#applicationOrganization')?.value.trim()||'';
  if(!doc||!goal||missing||(document.querySelector('#applicationOrganization')&&!org)){
    const result=document.querySelector('#applicationResult');
    result.hidden=false;
    result.textContent='Complete every required field and attach each listed document before submitting.';
    return;
  }
  const requirements=uploadRequirements[
    goal]
  ||uploadRequirements.other;
  const now=new Date().toISOString();
  const newFiles=uploadInputs.map((input,index)=>{
    const file=input.files[0],key=`REQ-${Date.now()}-${index}`;
    uploadedAttachments.set(key,file);
    return {key,name:file.name,type:file.type||'application/octet-stream',size:file.size};
  });
  const followUp=followUpApplicationId?applications.find(app=>app.id===followUpApplicationId&&app.studentId===student.roll):null;
  if(followUp){
    followUp.files=[...followUp.files,...newFiles];
    followUp.status='In review';
    followUp.updatedAt=now;
    followUp.studentUpdate=`Additional document(s) received: ${newFiles.map(file=>file.name).join(', ')}. Your request has been sent back for office verification.`;
    const today=now.slice(0,10);
    newFiles.forEach((file,index)=>student.files.unshift({id:`${followUp.id}-additional-${Date.now()}-${index}`,title:file.name,type:'Submitted document',filename:file.name,status:'In review',date:today,summary:`Added to request ${followUp.id}. Awaiting office verification.`}));
    saveApplications();
    markStudentNotificationsRead(student);
    rememberStudent(student);
    followUpApplicationId=null;
    showStudentWorkspace(student);
    document.querySelector('#applicationResult').hidden=true;
    document.querySelector('#uploadSuccessMessage').textContent=`Your additional document(s) were added to request ${followUp.id}. Your earlier files are still attached. The request is now waiting for office verification; processing time depends on your college.`;
    document.querySelector('#uploadSuccessDialog').showModal();
    renderOfficeDashboard();
    return;
  }
  const record={
    id:`REQ-${Date.now()}`,
    studentId:student.roll,
    studentName:student.name,
    course:student.course,
    goal,
    purpose:goalLabels[
      goal],
    documentId:doc.id,
    documentName:doc.name,
    institution:document.querySelector('#college').value.trim()||'Not provided',
    organization:org,
    note:document.querySelector('#applicationNote')?.value.trim()||'',
    files:newFiles,
    requiredFiles:requirements.length,
    status:'Submitted',
    submittedAt:now,
    updatedAt:now,
    reason:''
  }
  ;
  applications.unshift(record);
  saveApplications();
  markStudentNotificationsRead(student);
  const current={
    id:`${record.id}-file`,
    title:doc.name,
    type:'Application request',
    filename:`${record.id}.txt`,
    status:'In review',
    date:new Date().toISOString().slice(0,
    10),
    summary:`Request ${record.id} was submitted to the local preview queue. Current status: Submitted.`
  }
  ;
  student.files.unshift(current);
  rememberStudent(student);
  showStudentWorkspace(student);
  const result=document.querySelector('#applicationResult');
  result.hidden=false;
  result.textContent=`Request ${record.id} submitted to the local preview queue. You can follow its status in My files.`;
  document.querySelector('#uploadSuccessMessage').textContent=`Your request ${record.id} has been submitted and is waiting for office verification. Processing time depends on your college. Check Notifications for the next update.`;
  document.querySelector('#uploadSuccessDialog').showModal();
  renderOfficeDashboard();
}
// WEBSITE PART: Get Started form — connect the submission button to the request queue.
document.querySelector('#submitApplication').addEventListener('click',submitStudentApplication);
// OFFICE REQUEST GROUPS: map each submitted purpose to its review category.
// WEBSITE PART — Office Applications: categories used to organize the staff queue.
const applicationGroups=[
  {
    id:'internship',
    title:'Internship',
    icon:'🧪',
    description:'Internship and training NOC requests.',
    documents:[
      'internship-noc']
  },
  {
    id:'job',
    title:'Job',
    icon:'💼',
    description:'Employment and job-related NOC requests.',
    documents:[
      'job-noc']
  },
  {
    id:'placement',
    title:'Placement',
    icon:'🚀',
    description:'Campus and off-campus placement requests.',
    documents:[
      'placement-noc']
  },
  {
    id:'higher',
    title:'Higher studies',
    icon:'🎓',
    description:'University, transcript, migration, and further-study requests.',
    documents:[
      'higher-studies-noc',
      'transcript',
      'migration']
  },
  {
    id:'travel',
    title:'Travel & visa',
    icon:'✈️',
    description:'Travel and visa-related letters.',
    documents:[
      'visa-travel']
  },
  {
    id:'scholarship',
    title:'Scholarship & fees',
    icon:'💳',
    description:'Scholarships, financial support, and fee letters.',
    documents:[
      'fee-estimate',
      'scholarship']
  },
  {
    id:'records',
    title:'Student records',
    icon:'📘',
    description:'Bonafide, study, transfer, and conduct certificates.',
    documents:[
      'bonafide',
      'study-certificate',
      'transfer',
      'character']
  },
  {
    id:'other',
    title:'Other requests',
    icon:'💬',
    description:'Research, event, personal, and other requests.',
    documents:[
      'research',
      'event',
      'other']
  }
];
let selectedApplicationGroup=null,selectedApplicationId=null,lastSavedDecisionId=null;
// GROUP LOOKUP: determine which office category contains a given application.
// WEBSITE PART: Office Applications — picks the category for a request.
function groupForApplication(app){
  const group=applicationGroups.find(item=>item.documents.includes(app.documentId));
  if(group)return group.id;
  if(app.goal==='internship')return'internship';
  if(app.goal==='job')return'job';
  if(app.goal==='higher')return'higher';
  if(app.goal==='travel')return'travel';
  if(app.goal==='scholarship')return'scholarship';
  if(app.goal==='records'||app.goal==='personal')return'records';
  return'other';
}
// OFFICE DASHBOARD: refresh the request totals shown on the overview page.
// WEBSITE PART: Office Overview — refreshes the totals and request categories.
function renderOfficeDashboard(){
  const pending=applications.filter(app=>[
    'Submitted',
    'In review'].includes(app.status)).length,missing=applications.filter(app=>app.files.length<(app.requiredFiles||0)||app.status==='Needs documents').length,approved=applications.filter(app=>app.status==='Approved').length,rejected=applications.filter(app=>app.status==='Rejected').length;
  document.querySelector('#officeTotal').textContent=applications.length;
  document.querySelector('#officePending').textContent=pending;
  document.querySelector('#officeMissing').textContent=missing;
  document.querySelector('#officeApproved').textContent=approved;
  document.querySelector('#officeRejected').textContent=rejected;
  const root=document.querySelector('#applicationCategories');
  if(!root)return;
  root.innerHTML=applicationGroups.map(group=>{
    const count=new Set(applications.filter(app=>groupForApplication(app)===group.id).map(app=>app.studentId)).size;
    return `<button class="application-category-card" type="button" data-application-group="${group.id}"><span class="application-category-icon">${group.icon}</span><span class="application-category-copy"><b>${safeText(group.title)}</b><small>${safeText(group.description)}</small></span><span class="application-category-count">${count}<small>${count===1?'student':'students'}</small></span><span class="application-category-arrow">→</span></button>`
  }
  ).join('');
  if(selectedApplicationId&&applications.some(app=>app.id===selectedApplicationId))openApplicationDetail(selectedApplicationId);
  else if(selectedApplicationGroup)renderApplicationRoster();
  renderOutcomePage();
}
// OFFICE OVERVIEW FILTERS: open a student queue for the selected dashboard count.
function openOfficeStatRoster(stat){
  showView('office-applications',true);
  showApplicationRoster(`status:${stat}`);
}
// WEBSITE PART: Office Overview — connect the five count cards to filtered student lists.
const officeStats=document.querySelector('.office-stats');
officeStats.addEventListener('click',event=>{
  const card=event.target.closest('[data-office-stat]');
  if(card)openOfficeStatRoster(card.dataset.officeStat);
});
officeStats.addEventListener('keydown',event=>{
  const card=event.target.closest('[data-office-stat]');
  if(card&&(event.key==='Enter'||event.key===' ')){
    event.preventDefault();
    openOfficeStatRoster(card.dataset.officeStat);
  }
});
// WEBSITE PART: Student Outcomes — counts and lists approved, rejected, and document-pending requests.
function renderOutcomePage(){
  const counts={
    Approved:applications.filter(app=>app.status==='Approved').length,
    Rejected:applications.filter(app=>app.status==='Rejected').length,
    'Needs documents':applications.filter(app=>app.status==='Needs documents'||app.files.length<(app.requiredFiles||0)).length
  }
  ;
  document.querySelector('#outcomeApprovedCount').textContent=counts.Approved;
  document.querySelector('#outcomeRejectedCount').textContent=counts.Rejected;
  document.querySelector('#outcomeDocumentsCount').textContent=counts[
    'Needs documents'];
  if(!selectedOutcomeStatus)return;
  const records=applications.filter(app=>selectedOutcomeStatus==='Needs documents'?(app.status==='Needs documents'||app.files.length<(app.requiredFiles||0)):app.status===selectedOutcomeStatus).sort((a,b)=>new Date(a.submittedAt)-new Date(b.submittedAt));
  document.querySelector('#outcomeRosterTitle').textContent=selectedOutcomeStatus==='Rejected'?'Disapproved applications':selectedOutcomeStatus==='Approved'?'Approved applications':'Waiting for documents';
  document.querySelector('#outcomeRosterCount').textContent=records.length;
  document.querySelector('#outcomeRosterEmpty').hidden=records.length>0;
  document.querySelector('#outcomeRoster').innerHTML=records.map(app=>{
    const shownStatus=selectedOutcomeStatus==='Needs documents'&&app.status!=='Needs documents'?'Needs documents':app.status;
    return `<button class="outcome-student-row" type="button" data-open-outcome-app="${safeText(app.id)}"><span class="roster-avatar">${safeText(app.studentName.split(' ').map(part=>part[0]).join('').slice(0,2))}</span><span><b>${safeText(app.studentName)}</b><small>UID ${safeText(app.studentId)} · ${safeText(app.documentName)}</small></span><span class="application-status status-${shownStatus.toLowerCase().replaceAll(' ','-')}">${safeText(shownStatus)}</span><i>Open case →</i></button>`
  }
  ).join('');
}
let selectedOutcomeStatus=null;
// WEBSITE PART: Student Outcomes — opens the applicants for the selected outcome.
function openOutcomeRoster(status){
  selectedOutcomeStatus=status;
  document.querySelector('#outcomeCategoryGrid').hidden=true;
  document.querySelector('#outcomeRosterPanel').hidden=false;
  renderOutcomePage();
}
// WEBSITE PART: Student Outcomes — returns to the three outcome categories.
function resetOutcomeRoster(){
  selectedOutcomeStatus=null;
  document.querySelector('#outcomeCategoryGrid').hidden=false;
  document.querySelector('#outcomeRosterPanel').hidden=true;
}
// WEBSITE PART: Student Outcomes — connect outcome tiles and student rows to their review cases.
document.querySelector('#outcomeCategoryGrid').addEventListener('click',event=>{
  const card=event.target.closest('[data-outcome]');
  if(card)openOutcomeRoster(card.dataset.outcome);
}
);
document.querySelector('#backToOutcomeCategories').addEventListener('click',resetOutcomeRoster);
document.querySelector('#outcomeRoster').addEventListener('click',event=>{
  const row=event.target.closest('[data-open-outcome-app]');
  if(!row)return;
  const app=applications.find(item=>item.id===row.dataset.openOutcomeApp);
  if(!app)return;
  showView('office-applications',true);
  showApplicationRoster(groupForApplication(app));
  openApplicationDetail(app.id);
}
);
// WEBSITE PART: Office Applications — track which request group and student case staff are viewing.
// OFFICE APPLICATION REVIEW: track whether staff are viewing groups, students, or a request.
// WEBSITE PART: Office Applications — returns to the request category tiles.
function showApplicationGroups(){
  selectedApplicationGroup=null;
  selectedApplicationId=null;
  document.querySelector('#applicationCategories').hidden=false;
  document.querySelector('#applicationRosterView').hidden=true;
  document.querySelector('#applicationDetailView').hidden=true;
}
// Open the applicant list for the request group selected by office staff.
// WEBSITE PART: Office Applications — opens students in the selected request group.
function showApplicationRoster(groupId){
  selectedApplicationGroup=groupId;
  selectedApplicationId=null;
  const goal=groupId.startsWith('goal:')?groupId.slice(5):null;
  const statGroups={
    'status:all':{title:'All requests',description:'Every student request, from oldest submitted to newest.'},
    'status:review':{title:'Needs review',description:'Requests waiting for an office review, in submission date order.'},
    'status:missing':{title:'Documents missing',description:'Students who need to provide one or more documents.'},
    'status:approved':{title:'Approved requests',description:'Requests approved by the office.'},
    'status:rejected':{title:'Disapproved requests',description:'Requests declined by the office.'}
  };
  const group=goal?{
    title:goalLabels[
      goal]
    ||'Selected purpose',description:'Applications for this purpose, with every matching document type.'
  }:statGroups[groupId]||applicationGroups.find(item=>item.id===groupId);
  if(!group)return;
  document.querySelector('#applicationCategories').hidden=true;
  document.querySelector('#applicationDetailView').hidden=true;
  document.querySelector('#applicationRosterView').hidden=false;
  document.querySelector('#applicationGroupTitle').textContent=group.title;
  document.querySelector('#applicationGroupDescription').textContent=group.description;
  document.querySelector('#rosterEmpty').textContent=groupId.startsWith('status:')?'No student requests match this status yet.':'No students have applied for this request type yet.';
  document.querySelector('#backToApplicationGroups').textContent=groupId.startsWith('status:')?'← Office overview':'← All request types';
  document.querySelector('#rosterSearch').value='';
  renderApplicationRoster();
}
// Filter the applicant list by student name, university ID, document, or organization.
// WEBSITE PART: Office Applications — searches and draws the selected student list.
function renderApplicationRoster(){
  if(!selectedApplicationGroup)return;
  const query=document.querySelector('#rosterSearch').value.trim().toLowerCase();
  const matches=applications.filter(app=>{
    if(selectedApplicationGroup.startsWith('goal:'))return app.goal===selectedApplicationGroup.slice(5);
    if(selectedApplicationGroup.startsWith('status:')){
      const stat=selectedApplicationGroup.slice(7);
      if(stat==='all')return true;
      if(stat==='review')return ['Submitted','In review'].includes(app.status);
      if(stat==='missing')return app.status==='Needs documents'||app.files.length<(app.requiredFiles||0);
      if(stat==='approved')return app.status==='Approved';
      if(stat==='rejected')return app.status==='Rejected';
      return false;
    }
    return groupForApplication(app)===selectedApplicationGroup;
  }).filter(app=>`${app.studentName} ${app.studentId} ${app.documentName} ${app.organization}`.toLowerCase().includes(query)).sort((a,b)=>new Date(a.submittedAt)-new Date(b.submittedAt));
  document.querySelector('#applicationGroupCount').textContent=String(matches.length);
  document.querySelector('#rosterEmpty').hidden=matches.length>0;
  document.querySelector('#applicationRoster').innerHTML=matches.map(app=>`<button type="button" class="application-roster-row" data-open-application="${safeText(app.id)}"><span class="roster-avatar">${safeText(app.studentName.split(' ').map(part=>part[0]).join('').slice(0,2))}</span><span class="roster-student"><b>${safeText(app.studentName)}</b><small>University ID · ${safeText(app.studentId)} · ${safeText(app.documentName)}</small></span><span class="application-status status-${app.status.toLowerCase().replaceAll(' ','-')}">${safeText(app.status)}</span><span class="roster-open">Open case →</span></button>`).join('');
}
// UPLOAD DISPLAY: create a thumbnail or sample-file label for a student attachment.
// WEBSITE PART: Office Applications — creates the preview tile for one uploaded file.
function uploadedFileCard(item){
  const file=typeof item==='string'?{
    name:item,type:'Sample attachment',key:''
  }
  :item;
  return file.key?`<button type="button" class="detail-upload-card" data-preview-upload="${safeText(file.key)}"><span class="detail-upload-preview">${file.type.startsWith('image/')?`<img data-upload-thumb="${safeText(file.key)}" alt="Preview of ${safeText(file.name)}">`:'▤'}</span><span><b>${safeText(file.name)}</b><small>${safeText(file.type.split('/').pop().toUpperCase())} · ${Math.max(1,Math.round(file.size/1024))} KB</small></span><span class="detail-upload-open">Preview</span></button>`:`<div class="detail-upload-card sample-upload-card"><span class="detail-upload-preview">▤</span><span><b>${safeText(file.name)}</b><small>Sample filename · no file contents</small></span></div>`;
}
// Show one student’s request, submitted files, missing items, and decision form.
// WEBSITE PART: Office Applications — displays one student’s request and decision form.
function openApplicationDetail(id){
  const app=applications.find(item=>item.id===id);
  if(!app)return;
  selectedApplicationId=id;
  document.querySelector('#applicationCategories').hidden=true;
  document.querySelector('#applicationRosterView').hidden=true;
  document.querySelector('#applicationDetailView').hidden=false;
  const missing=Math.max(0,(app.requiredFiles||0)-app.files.length),required=uploadRequirements[
    app.goal]
  ||uploadRequirements.other,decisionStatus=[
    'In review',
    'Needs documents',
    'Approved',
    'Rejected'].includes(app.status)?app.status:'In review';
  document.querySelector('#applicationDetailContent').innerHTML=`<article class="application-detail-card">${lastSavedDecisionId===app.id?'<div class="decision-saved-message" role="status">✓ Decision saved. The student update is now visible in this browser preview.</div>':''}<div class="detail-heading"><div><span class="application-purpose">${safeText(app.purpose)}</span><h2>${safeText(app.documentName)}</h2><p>Request ${safeText(app.id)}</p></div><span class="application-status status-${app.status.toLowerCase().replaceAll(' ','-')}">${safeText(app.status)}</span></div><div class="detail-student-summary"><div class="detail-student-avatar">${safeText(app.studentName.split(' ').map(part=>part[0]).join('').slice(0,2))}</div><div><b>${safeText(app.studentName)}</b><span>University ID: <strong>${safeText(app.studentId)}</strong> · ${safeText(app.course||'Student')}</span></div></div><div class="detail-facts"><div><small>REQUEST TYPE</small><b>${safeText(app.purpose)}</b></div><div><small>ORGANIZATION</small><b>${safeText(app.organization||'Not provided')}</b></div><div><small>INSTITUTION</small><b>${safeText(app.institution||'Not provided')}</b></div><div><small>SUBMITTED</small><b>${safeText(new Date(app.submittedAt).toLocaleString())}</b></div></div>${app.note?`<div class="student-note"><b>Student note:</b> ${
    safeText(app.note)
  }
  </div>`:''}<section class="detail-documents"><div class="detail-section-heading"><div><h3>Submitted documents</h3><p>${app.files.length} of ${app.requiredFiles||0} required files received</p></div><span class="document-completeness ${missing?'incomplete':'complete'}">${missing?`${
    missing
  }
  pending`:'Checklist complete'}</span></div><div class="detail-upload-grid">${app.files.length?app.files.map(uploadedFileCard).join(''):'<p class="missing-doc">No supporting documents submitted.</p>'}</div>${missing?`<div class="pending-documents"><b>Still needed</b><ul>${
    required.slice(app.files.length).map(item=>`<li>${safeText(item)}</li>`).join('')
  }
  </ul></div>`:''}</section>${app.reason?`<div class="previous-decision"><b>Previous office note</b><p>${
    safeText(app.reason)
  }
  </p></div>`:''}<section class="staff-decision"><div class="eyebrow">OFFICE DECISION</div><h3>Record the latest outcome</h3><p>Choose the current status and explain the decision or next step. A written note is required for every update.</p><form id="officeDecisionForm" data-decision-id="${safeText(app.id)}"><label for="officeDecisionStatus">Decision status</label><select id="officeDecisionStatus" required><option ${decisionStatus==='In review'?'selected':''}>In review</option><option ${decisionStatus==='Needs documents'?'selected':''}>Needs documents</option><option ${decisionStatus==='Approved'?'selected':''}>Approved</option><option ${decisionStatus==='Rejected'?'selected':''}>Rejected</option></select><label for="officeDecisionNote">Decision note <span>required</span></label><textarea id="officeDecisionNote" rows="4" required placeholder="Write the reason, approval details, or exactly what the student should do next">${safeText(app.reason||'')}</textarea><p class="decision-form-error" id="decisionFormError" hidden></p><button class="button button-primary" type="submit">Save decision and notify student →</button></form></section></article>`;
  document.querySelectorAll('#applicationDetailContent [data-upload-thumb]').forEach(image=>{
    const file=uploadedAttachments.get(image.dataset.uploadThumb);
    if(file){
      const url=URL.createObjectURL(file);
      image.dataset.objectUrl=url;
      image.src=url;
    }
    else image.closest('.detail-upload-card')?.classList.add('attachment-unavailable');
  }
  );
  // Bind directly to the newly rendered form so its submit action always reaches the save handler.
  document.querySelector('#officeDecisionForm')?.addEventListener('submit',saveOfficeDecision);
}
// Save the decision status and explanation in the local application record.
// WEBSITE PART: Office Applications — saves the staff decision to the local record.
function updateDecision(id,status,reason){
  const app=applications.find(item=>item.id===id);
  if(!app)return false;
  app.status=status;
  app.reason=reason;
  app.studentUpdate='';
  app.updatedAt=new Date().toISOString();
  saveApplications();
  if(signedInRole==='student'&&activeStudent)renderStudentUpdates(activeStudent);
  renderOfficeDashboard();
  document.querySelector('.decision-saved-message')?.scrollIntoView({behavior:'smooth',block:'center'});
  return true;
}
// Check the office note and required files before saving the decision.
// WEBSITE PART: Office Applications — checks the decision note and saves the selected status.
function saveOfficeDecision(event){
  event.preventDefault();
  const form=event.currentTarget,id=form.dataset.decisionId,status=form.querySelector('#officeDecisionStatus').value,note=form.querySelector('#officeDecisionNote').value.trim(),error=form.querySelector('#decisionFormError'),app=applications.find(item=>item.id===id);
  if(!app){
    error.textContent='This request could not be found. Return to Applications and open it again.';
    error.hidden=false;
    return;
  }
  error.hidden=true;
  if(!note){
    error.textContent='Please write a decision note before saving.';
    error.hidden=false;
    return;
  }
  if(status==='Approved'&&app.files.length<(app.requiredFiles||0)){
    error.textContent='Required documents are still missing. Choose “Needs documents” and tell the student what to provide.';
    error.hidden=false;
    return;
  }
  lastSavedDecisionId=id;
  if(!updateDecision(id,status,note)){
    error.textContent='The decision could not be saved. Please reopen this request and try again.';
    error.hidden=false;
  }
}
// WEBSITE PART: Office Applications — connect categories, student rows, search, and back buttons.
document.querySelector('#applicationCategories').addEventListener('click',event=>{
  const button=event.target.closest('[data-application-group]');
  if(button)showApplicationRoster(button.dataset.applicationGroup);
}
);
document.querySelector('#backToApplicationGroups').addEventListener('click',()=>{
  const fromOverview=selectedApplicationGroup?.startsWith('status:');
  showApplicationGroups();
  if(fromOverview)showView('office',true);
});
document.querySelector('#rosterSearch').addEventListener('input',renderApplicationRoster);
document.querySelector('#applicationRoster').addEventListener('click',event=>{
  const button=event.target.closest('[data-open-application]');
  if(button)openApplicationDetail(button.dataset.openApplication);
}
);
document.querySelector('#backToApplicationRoster').addEventListener('click',()=>{
  selectedApplicationId=null;
  if(selectedApplicationGroup){
    document.querySelector('#applicationDetailView').hidden=true;
    document.querySelector('#applicationRosterView').hidden=false;
    renderApplicationRoster();
  }
  else showApplicationGroups();
}
);
document.querySelector('#applicationDetailContent').addEventListener('click',event=>{
  const button=event.target.closest('[data-preview-upload]');
  if(button)previewUploadedAttachment(button.dataset.previewUpload);
}
);
// ROLE-BASED WORKSPACE: show only the pages available to the signed-in role.
// Show the correct menu and starting page for the selected account role.
// WEBSITE PART: Sign-in — opens the correct student or office workspace.
function activateRole(role,student=null){
  signedInRole=role;
  document.body.classList.remove('auth-locked','menu-open');
  document.querySelectorAll('[data-audience]').forEach(item=>{
    item.hidden=item.dataset.audience!==role;
  }
  );
  document.querySelector('.side-label').textContent=role==='office'?'OFFICE DESK':'STUDENT DESK';
  document.querySelector('#studentSideNote').hidden=role!=='student';
  document.querySelector('#sideSignOut').textContent=role==='office'?'Sign out of office':'Sign out';
  if(role==='student'&&student){
    activeStudent=student;
    showWelcomeToast(student.name);
    document.querySelector('#signInPanel').hidden=true;
    document.querySelector('#guideContent').hidden=false;
    showStudentWorkspace(student);
    showView('home',true);
  }
  else{
    activeStudent=null;
    document.querySelector('#welcomeMessage').hidden=true;
    renderOfficeDashboard();
    showView('office',true);
  }
}
// STUDENT WELCOME: keep a plain greeting beside the menu for the full student session.
function showWelcomeToast(name){
  const message=document.querySelector('#welcomeMessage');
  message.textContent=`Welcome ${name}!`;
  message.hidden=false;
}
// SHARED SIGN-OUT: end the local role session and reveal the sign-in page.
// WEBSITE PART: Sign-in — clears the active role and returns to the login screen.
function dashboardLogout(){
  signedInRole=null;
  activeStudent=null;
  document.querySelector('#welcomeMessage').hidden=true;
  sessionStorage.removeItem('campusDeskStudent');
  sessionStorage.removeItem('campusDeskStudentProfile');
  sessionStorage.removeItem('campusDeskRole');
  document.body.classList.add('auth-locked');
  document.querySelector('#universityPassword').value='';
  document.querySelector('#universityId').value='';
  document.querySelector('#loginError').hidden=true;
  document.querySelector('#signInPanel').hidden=false;
  document.querySelector('#guideContent').hidden=true;
  document.querySelector('#fileWorkspace').hidden=true;
  document.querySelector('#fileSignInPrompt').hidden=false;
}
// WEBSITE PART: Main sign-in page — choose a student or office workspace and store the session.
document.querySelector('#universityLoginForm').addEventListener('submit',event=>{
  event.preventDefault();
  const role=document.querySelector('#loginRole').value,username=document.querySelector('#universityId').value.trim(),password=document.querySelector('#universityPassword').value;
  document.querySelector('#universityPassword').value='';
  if(!username||!validPreviewPassword(password)){
    document.querySelector('#loginError').hidden=false;
    return;
  }
  document.querySelector('#loginError').hidden=true;
  try{sessionStorage.setItem('campusDeskRole',role);}catch{}
  if(role==='office')activateRole('office');
  else{
    const student=studentForUsername(username);
    rememberStudent(student);
    activateRole('student',student);
  }
}
);
document.querySelector('#sideSignOut').addEventListener('click',dashboardLogout);
document.querySelector('#logoutButton').addEventListener('click',dashboardLogout);
// On return, only restore the role that this local browser has already previewed.
try{
  const role=sessionStorage.getItem('campusDeskRole'),studentId=sessionStorage.getItem('campusDeskStudent');
  if(role==='office')activateRole('office');
  else if(role==='student'){
    const student=JSON.parse(sessionStorage.getItem('campusDeskStudentProfile')||'null')||sampleStudents.find(item=>item.id===studentId);
    if(student)activateRole('student',student);
  }
}
catch{
}
// WEBSITE PART: Student Notifications — draw office decisions and update the unread badge.
// WEBSITE PART: Student Notifications — shows office decisions saved for the signed-in student.
function renderStudentUpdates(student){
  const root=document.querySelector('#studentLiveUpdates'),records=applications.filter(app=>app.studentId===student.roll).sort((a,b)=>b.submittedAt.localeCompare(a.submittedAt));
  root.hidden=records.length===0;
  const empty=document.querySelector('.notification-empty');
  if(empty)empty.hidden=records.length>0;
  const note=document.querySelector('.notification-note');
  if(note)note.hidden=records.length>0;
  root.innerHTML=records.map(app=>{
    const needed=Math.max(0,(app.requiredFiles||0)-(app.files||[]).length);
    const canContinue=app.status==='Needs documents'||needed>0;
    const message=app.studentUpdate||app.reason||`Request ${app.id} was received. Check My files for its latest status.`;
    return `<article class="student-update ${canContinue?'needs-follow-up':''}" ${canContinue?`data-follow-up-request="${safeText(app.id)}" role="button" tabindex="0" aria-label="Upload missing documents for ${safeText(app.documentName)}"`:''}><span class="update-dot">${app.status==='Approved'?'✓':app.status==='Rejected'?'!':'•'}</span><div><b>${safeText(app.documentName)} · ${safeText(app.status)}</b><p>${safeText(message)}</p>${canContinue?'<span class="student-update-action">Upload the required document →</span>':''}</div></article>`;
  }).join('');
  updateStudentNotificationBadge(student,records);
}
// NOTIFICATION COUNT: show updates that the student has not opened yet.
// WEBSITE PART: Student Notifications — identify which version of each request the student has seen.
function notificationSignature(app){
  return app.updatedAt||`${app.submittedAt}|${app.status}|${app.reason||''}|${app.studentUpdate||''}`;
}
function readNotificationReceipts(){
  try{return JSON.parse(localStorage.getItem(notificationSeenKey)||'{}')||{};}catch{return {};}
}
// WEBSITE PART: Student sidebar — count unseen updates for the signed-in student.
function updateStudentNotificationBadge(student,records=applications.filter(app=>app.studentId===student.roll)){
  const badge=document.querySelector('#studentNotificationBadge');
  if(!badge)return;
  const seen=readNotificationReceipts()[student.roll]||{};
  const unread=records.filter(app=>seen[app.id]!==notificationSignature(app)).length;
  badge.textContent=unread>9?'9+':String(unread);
  badge.hidden=unread===0;
}
// WEBSITE PART: Student Notifications — mark current updates read when the student opens the page.
function markStudentNotificationsRead(student){
  const allSeen=readNotificationReceipts();
  allSeen[student.roll]=Object.fromEntries(applications.filter(app=>app.studentId===student.roll).map(app=>[app.id,notificationSignature(app)]));
  try{localStorage.setItem(notificationSeenKey,JSON.stringify(allSeen));}catch{}
  updateStudentNotificationBadge(student);
}
// FOLLOW-UP LINK: open the matching request's upload fields without replacing prior files.
// WEBSITE PART: Student Notifications and Get Started — carry a missing-document notice into its upload form.
function startDocumentFollowUp(requestId){
  const app=applications.find(item=>item.id===requestId);
  if(!activeStudent||!app||app.studentId!==activeStudent.roll)return;
  followUpApplicationId=app.id;
  markStudentNotificationsRead(activeStudent);
  showView('request');
  const goal=document.querySelector('#goal');
  goal.value=app.goal;
  goal.dispatchEvent(new Event('change',{bubbles:true}));
  docSelect.value=app.documentId;
  rebuildDocumentOptions();
  document.querySelector('#college').value=app.institution==='Not provided'?'':app.institution||'';
  showGuide();
  document.querySelector('#applicationResult').hidden=false;
  document.querySelector('#applicationResult').textContent=`Follow-up for ${app.id}: upload only the missing document. Your earlier files will remain attached.`;
  document.querySelector('.application-submit').scrollIntoView({behavior:'smooth',block:'center'});
}
// WEBSITE PART: Student Notifications — let keyboard or mouse users open the correct follow-up request.
const studentUpdatesRoot=document.querySelector('#studentLiveUpdates');
studentUpdatesRoot.addEventListener('click',event=>{
  const card=event.target.closest('[data-follow-up-request]');
  if(card)startDocumentFollowUp(card.dataset.followUpRequest);
});
studentUpdatesRoot.addEventListener('keydown',event=>{
  if((event.key==='Enter'||event.key===' ')&&event.target.matches('[data-follow-up-request]')){
    event.preventDefault();
    startDocumentFollowUp(event.target.dataset.followUpRequest);
  }
});
// WEBSITE PART: Upload confirmation — close the message shown after documents are submitted.
document.querySelector('#closeUploadSuccess').addEventListener('click',()=>document.querySelector('#uploadSuccessDialog').close());
// WEBSITE PART: Shared student/office updates — refresh views when this site's browser storage changes in another tab.
window.addEventListener('storage',event=>{
  if(event.key===localApplicationKey){
    applications=readApplications();
    if(signedInRole==='office')renderOfficeDashboard();
    if(signedInRole==='student'&&activeStudent)renderStudentUpdates(activeStudent);
  }
}
);
// LIGHT/DARK MODE: toggle appearance and remember the choice in browser storage.
// WEBSITE PART: Light and dark mode — toggle and remember the chosen display mode.
document.querySelector('#modeToggle').addEventListener('click',()=>{
  const dark=document.body.dataset.mode!=='dark';
  document.body.dataset.mode=dark?'dark':'light';
  const button=document.querySelector('#modeToggle');
  button.innerHTML=dark?'☀ <span>Light</span>':'☾ <span>Dark</span>';
  button.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');
  button.setAttribute('aria-pressed',String(dark));
  try{
    localStorage.setItem('campusDeskMode',dark?'dark':'light');
  }
  catch{
  }
}
);
try{
  const mode=localStorage.getItem('campusDeskMode')==='dark'?'dark':'light';
  document.body.dataset.mode=mode;
  const button=document.querySelector('#modeToggle');
  button.innerHTML=mode==='dark'?'☀ <span>Light</span>':'☾ <span>Dark</span>';
  button.setAttribute('aria-label',mode==='dark'?'Switch to light mode':'Switch to dark mode');
  button.setAttribute('aria-pressed',String(mode==='dark'));
}
catch{
}
