"use strict";(self.webpackChunkopen_academia=self.webpackChunkopen_academia||[]).push([[381],{1381:(me,v,s)=>{s.r(v),s.d(v,{StudentModule:()=>pe});var d=s(6814),U=s(6208),g=s(1303),e=s(5879);let I=(()=>{class o{static#e=this.\u0275fac=function(n){return new(n||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-student-detail"]],decls:2,vars:0,template:function(n,i){1&n&&(e.TgZ(0,"p"),e._uU(1,"student-detail works!"),e.qZA())}})}return o})();var m=s(8509),l=s(7700),p=s(2296);let Z=(()=>{class o{constructor(t,n){this.el=t,this.renderer=n}ngAfterViewInit(){let n;switch(this.el.nativeElement.textContent.trim()){case"Computer Science":n="blue";break;case"Mathematics":n="red";break;default:n="black"}this.renderer.setStyle(this.el.nativeElement,"color",n)}static#e=this.\u0275fac=function(n){return new(n||o)(e.Y36(e.SBq),e.Y36(e.Qsj))};static#t=this.\u0275dir=e.lG2({type:o,selectors:[["","colorCategory",""]]})}return o})(),T=(()=>{class o{constructor(t,n){this.el=t,this.renderer=n}ngOnInit(){this.renderer.setStyle(this.el.nativeElement,"font-size","20px")}static#e=this.\u0275fac=function(n){return new(n||o)(e.Y36(e.SBq),e.Y36(e.Qsj))};static#t=this.\u0275dir=e.lG2({type:o,selectors:[["","courseTitle",""]]})}return o})();function q(o,r){if(1&o&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&o){const t=r.$implicit;e.xp6(1),e.hij(" ",t," ")}}function S(o,r){if(1&o&&(e.TgZ(0,"div")(1,"h3"),e._uU(2,"Prerequisites"),e.qZA(),e.TgZ(3,"ul"),e.YNc(4,q,2,1,"li",7),e.qZA()()),2&o){const t=e.oxw();e.xp6(4),e.Q6J("ngForOf",t.course.prequisites)}}let O=(()=>{class o{constructor(t,n){this.MatDialogRef=t,this.courseData=n,this.course=n||{id:0,name:"",description:"",image:"",category:"",intensity:"",credits:0}}enrollCourse(){this.MatDialogRef.close(this.course.id)}static#e=this.\u0275fac=function(n){return new(n||o)(e.Y36(l.so),e.Y36(l.WI))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-course-enrollment-dialog"]],decls:15,vars:6,consts:[["mat-dialog-content",""],["courseTitle",""],["colorCategory",""],[4,"ngIf"],["mat-dialog-actions",""],["mat-button","","mat-dialog-close",""],["mat-button","","color","primary",3,"click"],[4,"ngFor","ngForOf"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"h1",1),e._uU(2),e.qZA(),e.TgZ(3,"p")(4,"span",2),e._uU(5),e.qZA(),e._uU(6),e.qZA(),e.TgZ(7,"p"),e._uU(8),e.qZA(),e.YNc(9,S,5,1,"div",3),e.TgZ(10,"div",4)(11,"button",5),e._uU(12,"Cancel"),e.qZA(),e.TgZ(13,"button",6),e.NdJ("click",function(){return i.enrollCourse()}),e._uU(14,"Enroll"),e.qZA()()()),2&n&&(e.xp6(2),e.Oqu(i.course.name),e.xp6(3),e.Oqu(i.course.category),e.xp6(1),e.AsE(" | Intensity: ",i.course.intensity," | Credits: ",i.course.credits,""),e.xp6(2),e.hij(" ",i.course.description," "),e.xp6(1),e.Q6J("ngIf",i.course.prequisites))},dependencies:[d.sg,d.O5,p.lW,l.ZT,l.xY,l.H8,Z,T]})}return o})();function P(o,r){if(1&o&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&o){const t=r.$implicit;e.xp6(1),e.hij(" ",t," ")}}function k(o,r){if(1&o&&(e.TgZ(0,"div")(1,"h3"),e._uU(2,"Prerequisites"),e.qZA(),e.TgZ(3,"ul"),e.YNc(4,P,2,1,"li",6),e.qZA()()),2&o){const t=e.oxw();e.xp6(4),e.Q6J("ngForOf",t.course.prequisites)}}let M=(()=>{class o{constructor(t,n){this.MatDialogRef=t,this.courseData=n,this.course=n||{id:0,name:"",description:"",image:"",category:"",intensity:"",credits:0}}enrollCourse(){this.MatDialogRef.close(this.course.id)}static#e=this.\u0275fac=function(n){return new(n||o)(e.Y36(l.so),e.Y36(l.WI))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-course-enrollment-dialog-detailonly"]],decls:13,vars:6,consts:[["mat-dialog-content",""],["courseTitle",""],["colorCategory",""],[4,"ngIf"],["mat-dialog-actions",""],["mat-button","","mat-dialog-close",""],[4,"ngFor","ngForOf"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"h1",1),e._uU(2),e.qZA(),e.TgZ(3,"p")(4,"span",2),e._uU(5),e.qZA(),e._uU(6),e.qZA(),e.TgZ(7,"p"),e._uU(8),e.qZA(),e.YNc(9,k,5,1,"div",3),e.TgZ(10,"div",4)(11,"button",5),e._uU(12,"Cancel"),e.qZA()()()),2&n&&(e.xp6(2),e.Oqu(i.course.name),e.xp6(3),e.hij("",i.course.category," "),e.xp6(1),e.AsE("| Intensity: ",i.course.intensity," | Credits: ",i.course.credits,""),e.xp6(2),e.hij(" ",i.course.description," "),e.xp6(1),e.Q6J("ngIf",i.course.prequisites))},dependencies:[d.sg,d.O5,p.lW,l.ZT,l.xY,l.H8,Z,T]})}return o})();var h=s(5195);function D(o,r){if(1&o&&e._UZ(0,"img",9),2&o){const t=e.oxw().$implicit;e.s9C("alt",t.name),e.Q6J("src",t.image,e.LSH)}}function F(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(i){e.CHM(t);const a=e.oxw().$implicit;return e.oxw().enrollCourse.emit(a.id),e.KtG(i.stopPropagation())}),e._uU(1," Enroll "),e.qZA()}}function E(o,r){if(1&o&&(e.TgZ(0,"a",11),e._uU(1,"Curriculum"),e.qZA()),2&o){const t=e.oxw().$implicit;e.MGl("routerLink","/courses/",t.id,"")}}function Y(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(i){e.CHM(t);const a=e.oxw().$implicit;return e.oxw().unenrollCourse.emit(a.id),e.KtG(i.stopPropagation())}),e._uU(1," Unenroll "),e.qZA()}}function N(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"mat-card",2),e.NdJ("click",function(){const a=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.openEnrollDialog(a))}),e.YNc(1,D,1,2,"img",3),e.TgZ(2,"mat-card-content",4)(3,"h2"),e._uU(4),e.qZA()(),e.TgZ(5,"mat-card-actions",5),e.YNc(6,F,2,0,"button",6),e.YNc(7,E,2,1,"a",7),e._UZ(8,"div",8),e.YNc(9,Y,2,0,"button",6),e.qZA()()}if(2&o){const t=r.$implicit,n=e.oxw();e.xp6(1),e.Q6J("ngIf",t.image),e.xp6(3),e.Oqu(t.name),e.xp6(2),e.Q6J("ngIf",n.isEnrollable(t.id)),e.xp6(1),e.Q6J("ngIf",n.isEnrolled(t.id)),e.xp6(2),e.Q6J("ngIf",n.isEnrolled(t.id))}}let b=(()=>{class o{constructor(t,n){this.matDialog=t,this.academiaserviceService=n,this.dataSource=[],this.enrolledCoursesIds=[],this.isLogged=!1,this.enrollCourse=new e.vpe,this.unenrollCourse=new e.vpe,this.isEnrolled=i=>this.enrolledCoursesIds.some(u=>u===i),this.isEnrollable=i=>!this.isEnrolled(i)&&this.isLogged}openEnrollDialog(t){this.isEnrolled(t.id)?this.matDialog.open(M,{data:t,width:"90%"}).afterClosed().subscribe({next:n=>{n&&this.enrollCourse.emit(n)}}):this.matDialog.open(O,{data:t}).afterClosed().subscribe({next:n=>{!this.isLogged&&n&&this.academiaserviceService.redirectToLogin(),n&&this.enrollCourse.emit(n)}})}static#e=this.\u0275fac=function(n){return new(n||o)(e.Y36(l.uw),e.Y36(m.x))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-view-courses-table"]],inputs:{dataSource:"dataSource",enrolledCoursesIds:"enrolledCoursesIds",isLogged:"isLogged"},outputs:{enrollCourse:"enrollCourse",unenrollCourse:"unenrollCourse"},decls:2,vars:1,consts:[[1,"cards-container"],["class","course-card hoverable",3,"click",4,"ngFor","ngForOf"],[1,"course-card","hoverable",3,"click"],["mat-card-image","",3,"src","alt",4,"ngIf"],[2,"min-height","5em"],[1,"card-actions"],["mat-button","","color","warn",3,"click",4,"ngIf"],["class","curriculum-span",3,"routerLink",4,"ngIf"],[1,"spacer"],["mat-card-image","",3,"src","alt"],["mat-button","","color","warn",3,"click"],[1,"curriculum-span",3,"routerLink"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0),e.YNc(1,N,10,5,"mat-card",1),e.qZA()),2&n&&(e.xp6(1),e.Q6J("ngForOf",i.dataSource))},dependencies:[d.sg,d.O5,p.lW,h.a8,h.hq,h.dn,h.G2,g.rH],styles:[".cards-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:flex-start;gap:16px}.course-card[_ngcontent-%COMP%]{width:calc(33.33% - 16px)}@media (min-width: 1024px){.course-card[_ngcontent-%COMP%]{width:calc(20% - 16px)}}.curriculum-span[_ngcontent-%COMP%]{font-size:small;text-decoration:none!important}.curriculum-span[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}.hoverable[_ngcontent-%COMP%]{cursor:pointer;transition:transform .3s}.hoverable[_ngcontent-%COMP%]:hover{transform:scale(1.02)}.action-container[_ngcontent-%COMP%]{display:flex;align-items:center}.card-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-top:auto;padding-bottom:.5em}.spacer[_ngcontent-%COMP%]{flex-grow:1}"]})}return o})();const y=function(){return[]};let J=(()=>{class o{constructor(t){this.academiaserviceService=t,this.enrolledCoursesIds=[],this.courses$=this.academiaserviceService.getCourses$()}ngOnInit(){this.academiaserviceService.authUser$.subscribe(t=>{t&&(this.userId=t.id,this.academiaserviceService.getEnrolledUserCourses$(this.userId).subscribe(n=>{this.enrolledCoursesIds=n.map(i=>i.courseId),console.log("this.enrolledCoursesIds",this.enrolledCoursesIds)}))})}isLogged(){return void 0!==this.userId}enrollCourse(t){if(void 0!==this.userId){const n={id:(new Date).getTime(),userId:this.userId,courseId:t,progress:0,status:"In Progress",grade:0,start_date:(new Date).toISOString(),expire_date:(new Date).toISOString(),end_date:(new Date).toISOString()};console.log("Payload, ",n),this.enrolledCoursesIds.push(t),this.academiaserviceService.createUserCourse(n).subscribe(i=>i)}else console.error("User ID is undefined. User not logged in.")}unenrollCourse(t){void 0!==this.userId?(this.enrolledCoursesIds=this.enrolledCoursesIds.filter(n=>n!==t),this.academiaserviceService.deleteUserCourse(this.userId,t)):console.error("User ID is undefined. User not logged in.")}static#e=this.\u0275fac=function(n){return new(n||o)(e.Y36(m.x))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-courses"]],decls:5,vars:7,consts:[[3,"dataSource","enrolledCoursesIds","isLogged","unenrollCourse","enrollCourse"]],template:function(n,i){1&n&&(e._uU(0,"\nClick on the course to see the details.\n"),e._UZ(1,"br")(2,"br"),e.TgZ(3,"app-view-courses-table",0),e.NdJ("unenrollCourse",function(u){return i.unenrollCourse(u)})("enrollCourse",function(u){return i.enrollCourse(u)}),e.ALo(4,"async"),e.qZA()),2&n&&(e.xp6(3),e.Q6J("dataSource",e.lcZ(4,3,i.courses$)||e.DdM(5,y))("enrolledCoursesIds",i.enrolledCoursesIds||e.DdM(6,y))("isLogged",i.isLogged()||!1))},dependencies:[b,d.Ov]})}return o})();var L=s(181),w=s(8630),$=s(1047);function R(o,r){if(1&o&&(e.TgZ(0,"div",9)(1,"h4",10),e._uU(2),e.qZA(),e._UZ(3,"img",11),e.qZA()),2&o){const t=r.$implicit;e.xp6(2),e.Oqu(t.name),e.xp6(1),e.Q6J("src",t.image,e.LSH)}}function Q(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div",4)(1,"h2",5),e._uU(2),e.ALo(3,"username"),e.qZA(),e.TgZ(4,"mat-dialog-content")(5,"p")(6,"strong"),e._uU(7,"Email:"),e.qZA(),e._uU(8),e.qZA(),e.TgZ(9,"p")(10,"strong"),e._uU(11,"Role:"),e.qZA(),e._uU(12),e.ALo(13,"capitalize"),e.qZA()(),e.TgZ(14,"div")(15,"h3"),e._uU(16,"Enrolled Courses"),e.qZA(),e.TgZ(17,"div",6),e.YNc(18,R,4,2,"div",7),e.qZA()(),e.TgZ(19,"mat-dialog-actions")(20,"button",8),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.reset())}),e._uU(21,"Close"),e.qZA()()()}if(2&o){const t=e.oxw();e.xp6(2),e.Oqu(e.lcZ(3,4,t.selectedUser)),e.xp6(6),e.hij(" ",t.selectedUser.email,""),e.xp6(4),e.hij(" ",e.lcZ(13,6,t.selectedUser.role),""),e.xp6(6),e.Q6J("ngForOf",t.userCourses)}}function j(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"tr",12),e.NdJ("click",function(){const a=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.onRowClick(a))}),e.TgZ(1,"td"),e._uU(2),e.ALo(3,"username"),e.qZA(),e.TgZ(4,"td",13),e._uU(5),e.qZA()()}if(2&o){const t=r.$implicit;let n;e.xp6(2),e.Oqu(e.lcZ(3,2,t)),e.xp6(3),e.Oqu(null!==(n=null==t?null:t.score)&&void 0!==n?n:0)}}let x=(()=>{class o{constructor(t){this.academiaserviceService=t,this.userCourses=[],this.academiaserviceService.getRanking$().subscribe(n=>{this.rankings=n})}onRowClick(t){console.log(t),this.selectedUser=t,this.academiaserviceService.getEnrolledCourses$(t.id).subscribe(n=>{this.userCourses=n,console.log("selected userCourse",n)})}reset(){this.selectedUser=void 0,this.userCourses=[]}static#e=this.\u0275fac=function(n){return new(n||o)(e.Y36(m.x))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-rankings"]],decls:10,vars:2,consts:[["class","details-card","style","background-color: white",4,"ngIf"],[1,"large-table","details-card","table","table-hover","table-section"],[1,"spaced-cell","col"],["class","clickable-row spaced-cell",3,"click",4,"ngFor","ngForOf"],[1,"details-card",2,"background-color","white"],["mat-dialog-title",""],[1,"course-container"],["class","course",4,"ngFor","ngForOf"],["mat-button","","mat-dialog-close","","color","warn",3,"click"],[1,"course"],["matLine",""],["miniRender","","alt","Course Image",3,"src"],[1,"clickable-row","spaced-cell",3,"click"],[1,"center-text"]],template:function(n,i){1&n&&(e.YNc(0,Q,22,8,"div",0),e.TgZ(1,"table",1)(2,"thead")(3,"tr")(4,"th",2),e._uU(5,"Name"),e.qZA(),e.TgZ(6,"th",2),e._uU(7,"Score"),e.qZA()()(),e.TgZ(8,"tbody"),e.YNc(9,j,6,4,"tr",3),e.qZA()()),2&n&&(e.Q6J("ngIf",i.selectedUser),e.xp6(9),e.Q6J("ngForOf",i.rankings))},dependencies:[d.sg,d.O5,p.lW,l.ZT,l.uh,l.xY,l.H8,L.U,w.e,$.s],styles:[".ranking-item[_ngcontent-%COMP%]{min-height:5em}.large-table[_ngcontent-%COMP%]{width:100%}.spaced-cell[_ngcontent-%COMP%]{padding:15px}.clickable-row[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#f5f5f5}.center-text[_ngcontent-%COMP%]{text-align:center}.details-card[_ngcontent-%COMP%]{background-color:#fff;border:none;border-radius:10px;max-width:100%;margin:auto;padding:20px 20px 1em;box-shadow:0 2px 8px #0003}.course-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.course[_ngcontent-%COMP%]{flex:1 0 20%}.table-section[_ngcontent-%COMP%]{margin-top:2em;margin-bottom:2em}"]})}return o})();var H=s(5592);const A=function(){return[]};let W=(()=>{class o{constructor(t){this.academiaserviceService=t,this.enrolledCoursesIds=[],this.courses$=new H.y}ngOnInit(){this.academiaserviceService.authUser$.subscribe(t=>{t&&(this.userId=t.id,this.userName=t.first+" "+t.last,this.userRole=t.role,this.academiaserviceService.getEnrolledUserCourses$(this.userId).subscribe(n=>{this.enrolledCoursesIds=n.map(i=>i.courseId),console.log("this.enrolledCoursesIds",this.enrolledCoursesIds)}),this.courses$=this.academiaserviceService.getEnrolledCourses$(this.userId))})}enrollCourse(t){if(void 0!==this.userId){const n={id:(new Date).getTime(),userId:this.userId,courseId:t,progress:0,status:"In Progress",grade:0,start_date:(new Date).toISOString(),expire_date:(new Date).toISOString(),end_date:(new Date).toISOString()};this.enrolledCoursesIds.push(t),this.academiaserviceService.createUserCourse(n).subscribe(i=>i)}else console.error("User ID is undefined. User not logged in.")}unenrollCourse(t){void 0!==this.userId?(this.enrolledCoursesIds=this.enrolledCoursesIds.filter(n=>n!==t),this.academiaserviceService.deleteUserCourse(this.userId,t)):console.error("User ID is undefined. User not logged in.")}static#e=this.\u0275fac=function(n){return new(n||o)(e.Y36(m.x))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-profile-screen"]],decls:8,vars:10,consts:[[1,"profile-section"],[3,"dataSource","enrolledCoursesIds","unenrollCourse","enrollCourse"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"h3"),e._uU(2),e.ALo(3,"capitalize"),e.qZA()(),e.TgZ(4,"h2"),e._uU(5,"My Learning"),e.qZA(),e.TgZ(6,"app-view-courses-table",1),e.NdJ("unenrollCourse",function(u){return i.unenrollCourse(u)})("enrollCourse",function(u){return i.enrollCourse(u)}),e.ALo(7,"async"),e.qZA()),2&n&&(e.xp6(2),e.AsE("",i.userName," | ",e.lcZ(3,4,i.userRole),""),e.xp6(4),e.Q6J("dataSource",e.lcZ(7,6,i.courses$)||e.DdM(8,A))("enrolledCoursesIds",i.enrolledCoursesIds||e.DdM(9,A)))},dependencies:[b,d.Ov,w.e]})}return o})();var c=s(6223),_=s(4516),f=s(9157);let z=(()=>{class o{constructor(t,n){this.fb=t,this.academiaServiceService=n,this.userForm=this.fb.group({email:["",c.kI.required],password:["",c.kI.required]})}onSubmit(){this.userForm.valid&&this.academiaServiceService.login(this.userForm.value)}static#e=this.\u0275fac=function(n){return new(n||o)(e.Y36(c.qu),e.Y36(m.x))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-login-screen"]],decls:22,vars:1,consts:[[1,"form-container"],[1,"row",3,"formGroup"],[1,"form-title"],[1,"col-12"],[1,"w-100"],["formControlName","email","matInput",""],["formControlName","password","matInput","","type","password"],[1,"col-12","text-center"],["mat-raised-button","","color","primary",3,"click"],[1,"agreement"],["routerLink","/signup"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"form",1)(2,"h3",2),e._uU(3," Log in to your Open Academia account "),e.qZA(),e.TgZ(4,"div",3)(5,"mat-form-field",4)(6,"mat-label"),e._uU(7,"Email"),e.qZA(),e._UZ(8,"input",5),e.qZA()(),e.TgZ(9,"div",3)(10,"mat-form-field",4)(11,"mat-label"),e._uU(12,"Password"),e.qZA(),e._UZ(13,"input",6),e.qZA()(),e.TgZ(14,"div",7)(15,"button",8),e.NdJ("click",function(){return i.onSubmit()}),e._uU(16,"Login"),e.qZA()(),e._UZ(17,"hr"),e.TgZ(18,"p",9),e._uU(19," Don't have an account? "),e.TgZ(20,"a",10),e._uU(21,"Sign Up"),e.qZA()()()()),2&n&&(e.xp6(1),e.Q6J("formGroup",i.userForm))},dependencies:[p.lW,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,_.Nt,f.KE,f.hX,g.rH],styles:[".form-container[_ngcontent-%COMP%]{padding-right:5%;padding-left:5%;display:flex;justify-content:center;align-items:center}.row[_ngcontent-%COMP%]{width:100%;margin:0 auto}.text-center[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}mat-form-field[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}button[_ngcontent-%COMP%]{width:100%}"]})}return o})(),G=(()=>{class o{constructor(t,n){this.fb=t,this.academiaServiceService=n,this.userForm=this.fb.group({first:["",c.kI.required],last:["",c.kI.required],email:["",c.kI.required],password:["",c.kI.required]})}onSubmit(){if(console.log("submit called",this.userForm.value,this.userForm.valid),this.userForm.valid){const t={id:(new Date).getTime(),first:this.userForm.value.first,last:this.userForm.value.last,email:this.userForm.value.email,password:this.userForm.value.password,token:"",avatar:"",role:"STUDENT"};this.academiaServiceService.createUser$(t).subscribe({next:n=>{console.log("result",n),n&&this.academiaServiceService.login(t)}})}}static#e=this.\u0275fac=function(n){return new(n||o)(e.Y36(c.qu),e.Y36(m.x))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-signup-screen"]],decls:45,vars:1,consts:[[1,"form-container"],[1,"row",3,"formGroup"],[1,"form-title"],[1,"col-4"],["formControlName","first","matInput",""],["formControlName","last","matInput",""],[1,"col-12"],[1,"w-100"],["formControlName","email","matInput",""],["formControlName","password","matInput","","type","password"],["primary","","mat-raised-button","","color","primary",3,"click"],[1,"agreement"],["routerLink","/terms-of-use"],["routerLink","/privacy"],["routerLink","/login"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"form",1)(2,"h3",2),e._uU(3,"Sign Up and start learning"),e.qZA(),e._UZ(4,"br"),e.TgZ(5,"div",3)(6,"mat-form-field")(7,"mat-label"),e._uU(8,"First"),e.qZA(),e._UZ(9,"input",4),e.qZA()(),e._UZ(10,"div",3),e.TgZ(11,"div",3)(12,"mat-form-field")(13,"mat-label"),e._uU(14,"Last"),e.qZA(),e._UZ(15,"input",5),e.qZA()(),e.TgZ(16,"div",6)(17,"mat-form-field",7)(18,"mat-label"),e._uU(19,"Email"),e.qZA(),e._UZ(20,"input",8),e.qZA()(),e.TgZ(21,"div",6)(22,"mat-form-field",7)(23,"mat-label"),e._uU(24,"Password"),e.qZA(),e._UZ(25,"input",9),e.qZA()(),e.TgZ(26,"button",10),e.NdJ("click",function(){return i.onSubmit()}),e._uU(27," Register "),e.qZA(),e.TgZ(28,"p"),e._uU(29," We won't send special offers as all courses are free. But we will send you reminders to finish your assigmnets "),e.qZA(),e.TgZ(30,"p",11),e._uU(31," By signing up, you agree to our "),e.TgZ(32,"a",12),e._uU(33,"Terms of Use"),e.qZA(),e._uU(34," and "),e.TgZ(35,"a",13),e._uU(36,"Privacy Policy"),e.qZA(),e._uU(37,". "),e.qZA(),e._UZ(38,"hr"),e.TgZ(39,"p",11),e._uU(40,"Already have an account? "),e.TgZ(41,"a",14),e._uU(42,"Login"),e.qZA()(),e._UZ(43,"br")(44,"br"),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("formGroup",i.userForm))},dependencies:[p.lW,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,_.Nt,f.KE,f.hX,g.rH],styles:[".form-container[_ngcontent-%COMP%]{padding-right:5%;padding-left:5%;justify-content:center;align-items:center;display:flex}.row[_ngcontent-%COMP%]{width:100%;flex-wrap:wrap}.text-center[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px}mat-form-field[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}button[_ngcontent-%COMP%]{width:100%}"]})}return o})();var X=s(6263);function B(o,r){if(1&o&&(e.TgZ(0,"div",6)(1,"a",11),e._uU(2,"Download Template File"),e.qZA()()),2&o){const t=e.oxw();e.xp6(1),e.s9C("href",t.section.template_file_url,e.LSH)}}let V=(()=>{class o{constructor(t){this.data=t,console.log("data",t),this.section=t}static#e=this.\u0275fac=function(n){return new(n||o)(e.Y36(l.WI))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-assigment-popup-component"]],decls:26,vars:2,consts:[["mat-dialog-content",""],[1,"container"],[1,"spread"],[1,"left-row"],["class","right-row",4,"ngIf"],["type","text","matInput","","placeholder","Public link for download"],[1,"right-row"],["type","file","name",""],["matInput","","cdkTextareaAutosize","","cdkAutosizeMinRows","3","cdkAutosizeMaxRows","50",2,"width","100%"],["autosize","cdkTextareaAutosize"],["mat-button",""],["mat-button","","target","_blank",1,"undecorated",3,"href"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._uU(4,"Assgiment Prompt"),e.qZA(),e.YNc(5,B,3,1,"div",4),e.qZA(),e.TgZ(6,"div"),e._uU(7),e.qZA(),e.TgZ(8,"div",2)(9,"div",3),e._UZ(10,"input",5),e.qZA(),e.TgZ(11,"div"),e._uU(12,"Or"),e.qZA(),e.TgZ(13,"div",6),e._UZ(14,"input",7),e.qZA()(),e._UZ(15,"br")(16,"textarea",8,9)(18,"br"),e.TgZ(19,"div",2)(20,"div",3)(21,"button",10),e._uU(22,"Open Class Content"),e.qZA()(),e.TgZ(23,"div",6)(24,"button",10),e._uU(25,"Submit"),e.qZA()()()()()),2&n&&(e.xp6(5),e.Q6J("ngIf",null==i.section?null:i.section.template_file_url),e.xp6(2),e.Oqu(i.section.assigment_prompt))},dependencies:[d.O5,p.zs,p.lW,_.Nt,X.IC,l.xY],styles:[".container[_ngcontent-%COMP%]{width:60em;max-width:100%}.spread[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.undecorated[_ngcontent-%COMP%]{text-decoration:none}"]})}return o})();function K(o,r){if(1&o&&(e.TgZ(0,"div")(1,"p"),e._uU(2),e.qZA()()),2&o){const t=e.oxw(3).$implicit;e.xp6(2),e.hij("Sent: ",null==t.usersection||null==t.usersection[0]?null:t.usersection[0].completed_date,"")}}function ee(o,r){if(1&o&&(e.TgZ(0,"div")(1,"p"),e._uU(2),e.qZA()()),2&o){const t=e.oxw(3).$implicit;e.xp6(2),e.hij("Due: ",null==t.usersection||null==t.usersection[0]?null:t.usersection[0].due_date,"")}}function te(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div"),e.YNc(1,K,3,1,"div",11),e.YNc(2,ee,3,1,"div",11),e.TgZ(3,"p")(4,"button",12),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2).$implicit,a=e.oxw();return e.KtG(a.openAssigmentPopup(i))}),e._uU(5," Submit Assignment "),e.qZA()()()}if(2&o){const t=e.oxw(2).$implicit;e.xp6(1),e.Q6J("ngIf",null==t.usersection||null==t.usersection[0]?null:t.usersection[0].completed_date),e.xp6(1),e.Q6J("ngIf",!(null!=t.usersection&&null!=t.usersection[0]&&t.usersection[0].completed_date))}}function ne(o,r){if(1&o&&(e.TgZ(0,"div",2)(1,"div",9)(2,"div",10)(3,"p"),e._uU(4),e.qZA(),e.TgZ(5,"p"),e._uU(6),e.qZA()(),e.YNc(7,te,6,2,"div",11),e.qZA()()),2&o){const t=e.oxw().$implicit;e.xp6(4),e.hij("Assignment: ",t.name," Assignment"),e.xp6(2),e.Oqu(t.description),e.xp6(1),e.Q6J("ngIf",t.has_assigment)}}function oe(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"div")(1,"div",2)(2,"div",3),e._UZ(3,"input",4),e.TgZ(4,"div",5)(5,"h3"),e._uU(6),e.qZA()(),e.TgZ(7,"a",6),e._uU(8,"Recording"),e.qZA(),e.TgZ(9,"a",6),e._uU(10,"Files "),e.qZA(),e.TgZ(11,"button",7),e.NdJ("click",function(){const a=e.CHM(t).$implicit,u=e.oxw();return e.KtG(u.toggleDropdown(a))}),e._uU(12," ^ "),e.qZA(),e._UZ(13,"div"),e.qZA()(),e.YNc(14,ne,8,3,"div",8),e.qZA()}if(2&o){const t=r.$implicit,n=e.oxw();e.xp6(3),e.Q6J("checked",null==t.usersection||null==t.usersection[0]?null:t.usersection[0].is_viewed),e.xp6(3),e.AsE("",t.order,". ",t.name,""),e.xp6(8),e.Q6J("ngIf",n.sectionToggle[t.id])}}let ie=(()=>{class o{constructor(t,n){this.academiaserviceService=t,this.matDialog=n,this.sections=[{id:1,courseId:1,name:"Introduction",description:"This is the introduction section",completion_score:100,order:1,has_assigment:!0,template_file_url:"https://github.com/NeneWang/mastery-cli",assigment_prompt:"Build Pacman",usersection:[{id:1,courseId:1,sectionId:1,total_score:100,is_viewed:!0,completed_date:"11-27-2023",due_date:"2023-11-30"}]},{id:2,name:"Introduction to Pylab",description:"This is the introduction to pylab section",courseId:1,order:2,completion_score:30,has_assigment:!0,assigment_prompt:"Use Pylab to...",usersection:[{id:2,courseId:1,sectionId:2,total_score:0,is_viewed:!1,completed_date:"",due_date:"2023-11-30"}]},{id:3,name:"Introduction to Python",description:"This is the introduction to python section",courseId:1,order:3,completion_score:0,has_assigment:!1,usersection:[{id:3,courseId:1,sectionId:2,total_score:0,is_viewed:!1,completed_date:"",due_date:"2023-12-15"}]}],this.sectionToggle=this.sections.reduce((i,a)=>(i[a.id]=!1,i),{})}submitAssignment(t){console.log("submit assignment")}toggleDropdown(t){console.log("toggle section",t.id,this.sectionToggle[t.id]),this.sectionToggle[t.id]=!this.sectionToggle[t.id]}openAssigmentPopup(t){this.matDialog.open(V,{data:t}).afterClosed().subscribe({next:n=>{n&&console.log("exit result",n)}})}static#e=this.\u0275fac=function(n){return new(n||o)(e.Y36(m.x),e.Y36(l.uw))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-courses-detail"]],decls:4,vars:1,consts:[[1,""],[4,"ngFor","ngForOf"],[1,"course-section"],[1,"left-content","section-header"],["type","checkbox",1,"content-item-spaced","input-checkbox",3,"checked"],[1,"section-details","section-title"],["mat-button",""],["mat-button","",1,"toggle-button","content-item-spaced",3,"click"],["class","course-section",4,"ngIf"],[1,"left-content"],[1,"section-details","assigment-width"],[4,"ngIf"],["mat-button","",1,"mat-button","assigment-button",3,"click"]],template:function(n,i){1&n&&(e.TgZ(0,"p"),e._uU(1,"courses-detail works Courses Details!"),e.qZA(),e.TgZ(2,"div",0),e.YNc(3,oe,15,4,"div",1),e.qZA()),2&n&&(e.xp6(3),e.Q6J("ngForOf",i.sections))},dependencies:[d.sg,d.O5,p.zs,p.lW],styles:[".course-sections[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1em;padding:1em;border:1px solid #000000;border-radius:5px;margin-bottom:1em}.course-section[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;gap:16px}input[type=checkbox][_ngcontent-%COMP%]{width:20px;height:20px}.section-details[_ngcontent-%COMP%]{flex-grow:1}.progress-bar[_ngcontent-%COMP%]{width:100%;height:8px;background-color:#ddd;border-radius:4px;overflow:hidden}.progress[_ngcontent-%COMP%]{height:100%;background-color:#007bff}.section-header[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center}.left-content[_ngcontent-%COMP%]{display:flex}.section-title[_ngcontent-%COMP%]{width:20em}.assigment-width[_ngcontent-%COMP%]{width:27em}.assigment-button[_ngcontent-%COMP%]{border:1px solid #000000;background:none;padding:.5em}"]})}return o})();var se=s(6593);let re=(()=>{class o{constructor(t){this.titleService=t,this.featuredCourses=[{id:2,name:"Algorithms II",description:"This course advances the design and analysis of algorithms. Topics include amortized analysis, advanced data structures, randomized algorithms, and computational geometry.",image:"https://i.ibb.co/F6dPRw2/algorithms-2.png",category:"Computer Science",intensity:"High",credits:4,prequisites:["Algorithms I"]},{id:4,name:"Introduction to Artificial Intelligence",description:"Introduction to Artificial Intelligence explores the foundational principles and practices of artificial intelligence (AI), machine learning, and robotics. The course prepares students to analyze relationships, build agents, and create models relevant to AI problems. The prerequisites for this course are Introduction to Probability and Statistics as well as Data Structures and Algorithms II.",image:"https://i.ibb.co/bRwjR1N/ai-intro.png",category:"Computer Science",intensity:"High",credits:4},{id:10,name:"Discrete Mathematics II",description:"Discrete Mathematics II addresses abstract, discrete, computational methods used in computer science. In particular, this class introduces searching and sorting algorithms; big-O estimates; number theory and cryptography; recursion and induction; counting and advanced counting techniques; discrete probability; and modeling computation. This course emphasizes applications in computer science. Discrete Mathematics I is a prerequisite for this course.",image:"https://i.ibb.co/JRkhjS7/discrete-structures-2.png",category:"Mathematics",intensity:"High",credits:4}],this.titleService.setTitle("Home | Academia")}static#e=this.\u0275fac=function(n){return new(n||o)(e.Y36(se.Dx))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-home-page"]],decls:10,vars:0,consts:[[1,"hero"],["mat-raised-button","","color","","routerLink","/courses"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"h1"),e._uU(2,"Welcome to Open Academia"),e.qZA(),e.TgZ(3,"p"),e._uU(4,"Learn College-Level Courses from the Best Instructors for "),e.TgZ(5,"b"),e._uU(6,"free"),e.qZA(),e._uU(7,"."),e.qZA(),e.TgZ(8,"button",1),e._uU(9,"Explore Courses"),e.qZA()())},dependencies:[p.lW,g.rH]})}return o})(),ae=(()=>{class o{static#e=this.\u0275fac=function(n){return new(n||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-privacy"]],decls:12,vars:0,consts:[[1,"container"],["href","https://www.openacademia.com"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"h1"),e._uU(2,"Privacy Policy"),e.qZA(),e.TgZ(3,"p"),e._uU(4,"Your privacy is important to us. It is Open Academia's policy to respect your privacy regarding any information we may collect from you across our website, "),e.TgZ(5,"a",1),e._uU(6,"https://www.openacademia.com"),e.qZA(),e._uU(7,", and other sites we own and operate."),e.qZA(),e.TgZ(8,"p"),e._uU(9,"We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we\u2019re collecting it and how it will be used."),e.qZA(),e.TgZ(10,"p"),e._uU(11,"We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we\u2019ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification."),e.qZA()())}})}return o})(),ce=(()=>{class o{static#e=this.\u0275fac=function(n){return new(n||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-terms-of-use"]],decls:9,vars:0,consts:[[1,"container"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"h1"),e._uU(2,"Terms of Use"),e.qZA(),e.TgZ(3,"p"),e._uU(4," Welcome to Open Academia! These terms and conditions outline the rules and regulations for the use of Open Academia's Website, located at www.openacademia.com. "),e.qZA(),e.TgZ(5,"p"),e._uU(6," By accessing this website, we assume you accept these terms and conditions. Do not continue to use Open Academia if you do not agree to take all of the terms and conditions stated on this page. "),e.qZA(),e.TgZ(7,"p"),e._uU(8,' The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice and all Agreements: "Client," "You," and "Your" refers to you, the person log on this website and compliant to the Company\'s terms and conditions. "The Company," "Ourselves," "We," "Our," and "Us," refers to our Company. "Party," "Parties," or "Us," refers to both the Client and ourselves. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client\'s needs in respect to the provision of the Company\'s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same. '),e.qZA()())}})}return o})();var le=s(7398);const C=(o,r)=>{const t=(0,e.f3M)(g.F0);return(0,e.f3M)(m.x).authUser$.pipe((0,le.U)(i=>!!i||t.createUrlTree(["/"])))};let ue=(()=>{class o{static#e=this.\u0275fac=function(n){return new(n||o)};static#t=this.\u0275mod=e.oAB({type:o});static#n=this.\u0275inj=e.cJS({imports:[g.Bz.forChild([{path:"",title:"Home",component:re},{path:"courses",title:"Courses",component:J},{path:"courses/:id",title:"Courses",component:ie},{path:"student/:id",component:I,title:"Student Detail"},{path:"students",component:x,title:"Student Rankings"},{path:"rankings",component:x,canActivate:[C],title:"Student Rankings"},{path:"profile",component:W,canActivate:[C],title:"Profile"},{path:"login",component:z,title:"Login"},{path:"signup",component:G,title:"Sign Up"},{path:"privacy",component:ae,title:"Privacy"},{path:"terms-of-use",component:ce,title:"Terms of Use"},{path:"enrollments",canActivate:[C],loadChildren:()=>s.e(21).then(s.bind(s,1021)).then(t=>t.EnrollmentsModule)}]),g.Bz]})}return o})();var de=s(1919);let pe=(()=>{class o{static#e=this.\u0275fac=function(n){return new(n||o)};static#t=this.\u0275mod=e.oAB({type:o});static#n=this.\u0275inj=e.cJS({imports:[d.ez,U.m,ue,de.ie]})}return o})()}}]);