"use strict";(self.webpackChunkopen_academia=self.webpackChunkopen_academia||[]).push([[21],{1021:(ft,v,i)=>{i.r(v),i.d(v,{EnrollmentsModule:()=>dt});var d=i(6814),y=i(1303),l=i(2169);const r=(0,l.R7)({source:"Enrollment",events:{"Load Enrollment By Id":(0,l.Ky)(),"Load Enrollments":(0,l.uZ)(),"Load Enrollments Success":(0,l.Ky)(),"Load Enrollments Failure":(0,l.Ky)(),"Load Enrollment Dialog Options":(0,l.uZ)(),"Load Enrollment Dialog Options Success":(0,l.Ky)(),"Load Enrollment Dialog Options Failure":(0,l.Ky)(),"Create Enrollment":(0,l.Ky)(),"Create Enrollment Failure":(0,l.Ky)(),"Unsubscribe Enrollment":(0,l.Ky)(),"Unsubscribe Enrollment Success":(0,l.Ky)(),"Unsubscribe Enrollment Failure":(0,l.Ky)()}}),O="enrollment",_=(0,l.Lq)({isLoading:!1,isLoadingDialogOptions:!1,enrollments:[],courseOptions:[],studentOptions:[],error:null},(0,l.on)(r.loadEnrollments,n=>({...n,isLoading:!0})),(0,l.on)(r.loadEnrollmentsSuccess,(n,{data:s})=>({...n,isLoading:!1,enrollments:s})),(0,l.on)(r.loadEnrollmentsFailure,(n,{error:s})=>({...n,isLoading:!1,error:s})),(0,l.on)(r.loadEnrollmentDialogOptions,n=>({...n,isLoadingDialogOptions:!0})),(0,l.on)(r.loadEnrollmentDialogOptionsSuccess,(n,s)=>({...n,courseOptions:s.courses,studentOptions:s.students,isLoadingDialogOptions:!1})),(0,l.on)(r.loadEnrollmentDialogOptionsFailure,(n,s)=>({...n,error:s.error,isLoadingDialogOptions:!1})),(0,l.on)(r.unsubscribeEnrollmentSuccess,(n,{id:s})=>({...n,enrollments:n.enrollments.filter(e=>e.id!==s)}))),U=(0,l.Tz)({name:O,reducer:_}),h=(0,l.ZF)(O),A=(0,l.P1)(h,n=>n.enrollments),$=(0,l.P1)(h,n=>n.isLoading),L=(0,l.P1)(h,n=>n.courseOptions),F=(0,l.P1)(h,n=>n.studentOptions),N=(0,l.P1)(h,n=>n.isLoadingDialogOptions);var Y=i(8180),p=i(6223),c=i(7483),t=i(5879),g=i(7700),Z=i(2296),x=i(9157),I=i(8525),S=i(3680);function J(n,s){1&n&&(t.ynx(0),t._uU(1," Loading... "),t.BQk())}function Q(n,s){if(1&n&&(t.TgZ(0,"mat-option",13),t._uU(1),t.qZA()),2&n){const e=s.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.name)}}function K(n,s){if(1&n&&(t.TgZ(0,"mat-option",13),t._uU(1),t.qZA()),2&n){const e=s.$implicit;t.Q6J("value",e.id),t.xp6(1),t.AsE("",e.first," ",e.last,"")}}function w(n,s){if(1&n&&(t.TgZ(0,"form",8)(1,"div",9)(2,"mat-form-field",10)(3,"mat-label"),t._uU(4,"Courses"),t.qZA(),t.TgZ(5,"mat-select",11),t.YNc(6,Q,2,2,"mat-option",12),t.ALo(7,"async"),t.qZA()()(),t.TgZ(8,"div",9)(9,"mat-form-field",10)(10,"mat-label"),t._uU(11,"Alumno"),t.qZA(),t.TgZ(12,"mat-select",11),t.YNc(13,K,2,3,"mat-option",12),t.ALo(14,"async"),t.qZA()()()()),2&n){const e=t.oxw();t.xp6(5),t.Q6J("formControl",e.courseIdControl),t.xp6(1),t.Q6J("ngForOf",t.lcZ(7,4,e.courseOptions$)),t.xp6(6),t.Q6J("formControl",e.userIdControl),t.xp6(1),t.Q6J("ngForOf",t.lcZ(14,6,e.studentOptions$))}}let M=(()=>{class n{constructor(e,o,a){this.store=e,this.action$=o,this.matDialogRef=a,this.userIdControl=new p.NI(null),this.courseIdControl=new p.NI(null),this.enrollmentForm=new p.cw({courseId:this.courseIdControl,userId:this.userIdControl}),this.store.dispatch(r.loadEnrollmentDialogOptions()),this.isLoading$=this.store.select(N),this.courseOptions$=this.store.select(L),this.studentOptions$=this.store.select(F),this.action$.pipe((0,c.l4)(r.loadEnrollments),(0,Y.q)(1)).subscribe({next:()=>this.matDialogRef.close()})}onSubmit(){this.store.dispatch(r.createEnrollment({payload:this.enrollmentForm.getRawValue()}))}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(l.yh),t.Y36(c.eX),t.Y36(g.so))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-enrollment-dialog"]],decls:13,vars:4,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[4,"ngIf","ngIfElse"],["formulario",""],["mat-dialog-actions",""],["mat-dialog-close","","mat-button","","color","warn","type","button"],[1,"spacer"],["mat-button","","type","button",3,"click"],[1,"row"],[1,"col-12"],[1,"w-100"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(o,a){if(1&o&&(t.TgZ(0,"h1",0),t._uU(1,"Create Inscription"),t.qZA(),t.TgZ(2,"div",1),t.YNc(3,J,2,0,"ng-container",2),t.ALo(4,"async"),t.YNc(5,w,15,8,"ng-template",null,3,t.W1O),t.qZA(),t.TgZ(7,"div",4)(8,"button",5),t._uU(9,"Cancel"),t.qZA(),t._UZ(10,"div",6),t.TgZ(11,"button",7),t.NdJ("click",function(){return a.onSubmit()}),t._uU(12,"Create"),t.qZA()()),2&o){const m=t.MAs(6);t.xp6(3),t.Q6J("ngIf",t.lcZ(4,2,a.isLoading$))("ngIfElse",m)}},dependencies:[d.sg,d.O5,Z.lW,p._Y,p.JJ,p.JL,p.oH,x.KE,x.hX,g.ZT,g.uh,g.xY,g.H8,I.gD,S.ey,d.Ov],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}mat-dialog-actions[_ngcontent-%COMP%]{justify-content:space-between}.spacer[_ngcontent-%COMP%]{flex-grow:1}"]})}return n})();var B=i(8509),P=i(617),u=i(5313),R=i(5940),j=i(1047);function z(n,s){1&n&&t._UZ(0,"mat-spinner")}function G(n,s){1&n&&(t.TgZ(0,"th",11),t._uU(1,"#"),t.qZA())}function W(n,s){if(1&n&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&n){const e=s.$implicit;t.xp6(1),t.hij(" ",e.id," ")}}function H(n,s){1&n&&(t.TgZ(0,"th",11),t._uU(1,"Course"),t.qZA())}function X(n,s){if(1&n&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&n){const e=s.$implicit;t.xp6(1),t.hij(" ",null==e.course?null:e.course.name," ")}}function V(n,s){1&n&&(t.TgZ(0,"th",11),t._uU(1,"User"),t.qZA())}function q(n,s){if(1&n&&(t.TgZ(0,"td",12),t._uU(1),t.ALo(2,"username"),t.qZA()),2&n){const e=s.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,e.user)," ")}}function k(n,s){1&n&&(t.TgZ(0,"th",11),t._uU(1,"Unsubscribe"),t.qZA())}function tt(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"td",12)(1,"button",13),t.NdJ("click",function(){const m=t.CHM(e).$implicit,gt=t.oxw(2);return t.KtG(gt.deleteEnrollment(m))}),t.TgZ(2,"mat-icon"),t._uU(3,"delete"),t.qZA()()()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("disabled",!e.isAdmin)}}function nt(n,s){1&n&&t._UZ(0,"tr",14)}function et(n,s){1&n&&t._UZ(0,"tr",15)}const ot=function(){return[]};function lt(n,s){if(1&n&&(t.TgZ(0,"table",2),t.ALo(1,"async"),t.ynx(2,3),t.YNc(3,G,2,0,"th",4),t.YNc(4,W,2,1,"td",5),t.BQk(),t.ynx(5,6),t.YNc(6,H,2,0,"th",4),t.YNc(7,X,2,1,"td",5),t.BQk(),t.ynx(8,7),t.YNc(9,V,2,0,"th",4),t.YNc(10,q,3,3,"td",5),t.BQk(),t.ynx(11,8),t.YNc(12,k,2,0,"th",4),t.YNc(13,tt,4,1,"td",5),t.BQk(),t.YNc(14,nt,1,0,"tr",9),t.YNc(15,et,1,0,"tr",10),t.qZA()),2&n){const e=t.oxw();t.Q6J("dataSource",t.lcZ(1,3,e.enrollments$)||t.DdM(5,ot)),t.xp6(14),t.Q6J("matHeaderRowDef",e.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",e.displayedColumns)}}let st=(()=>{class n{constructor(e,o){this.store=e,this.academiaserviceService=o,this.displayedColumns=["course","user"],this.isAdmin=!1,this.enrollments$=this.store.select(A),this.isLoading$=this.store.select($),this.academiaserviceService.authUser$.pipe().subscribe(a=>{a&&"ADMIN"===a.role&&(this.displayedColumns.push("actions"),this.isAdmin=!0)})}deleteEnrollment(e){console.log("delete enrollment",e),this.store.dispatch(r.unsubscribeEnrollment({id:e.id}))}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(l.yh),t.Y36(B.x))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-enrollments-table"]],decls:4,vars:4,consts:[[4,"ngIf","ngIfElse"],["isNotLoading",""],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","course"],["matColumnDef","user"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-icon-button","","color","warn",3,"disabled","click"],["mat-header-row",""],["mat-row",""]],template:function(o,a){if(1&o&&(t.YNc(0,z,1,0,"mat-spinner",0),t.ALo(1,"async"),t.YNc(2,lt,16,6,"ng-template",null,1,t.W1O)),2&o){const m=t.MAs(3);t.Q6J("ngIf",t.lcZ(1,2,a.isLoading$))("ngIfElse",m)}},dependencies:[d.O5,Z.RK,P.Hw,u.BZ,u.fO,u.as,u.w1,u.Dz,u.nj,u.ge,u.ev,u.XQ,u.Gk,R.Ou,d.Ov,j.s]})}return n})();const it=[{path:"",component:(()=>{class n{constructor(e,o){this.store=e,this.dialog=o,this.store.dispatch(r.loadEnrollments())}addEnrollment(){this.dialog.open(M,{width:"80%"})}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(l.yh),t.Y36(g.uw))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-enrollments"]],decls:5,vars:0,consts:[[1,"button-container"],["mat-flat-button","","color","primary",3,"click"],[1,"p-3"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return a.addEnrollment()}),t._uU(2," Create Enrollment "),t.qZA()(),t._UZ(3,"app-enrollments-table")(4,"div",2))},dependencies:[Z.lW,st],styles:[".p-3[_ngcontent-%COMP%]{padding-bottom:1rem!important}.button-container[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-bottom:16px}"]})}return n})()}];let at=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[y.Bz.forChild(it),y.Bz]})}return n})();var b=i(6328),E=i(7398),C=i(6306),rt=i(1631),T=i(2096),ct=i(9315),f=i(365),mt=i(9862);let ut=(()=>{class n{constructor(e,o){this.actions$=e,this.httpClient=o,this.loadEnrollments$=(0,c.GW)(()=>this.actions$.pipe((0,c.l4)(r.loadEnrollments),(0,b.b)(()=>this.getEnrollments().pipe((0,E.U)(a=>r.loadEnrollmentsSuccess({data:a})),(0,C.K)(a=>(0,T.of)(r.loadEnrollmentsFailure({error:a}))))))),this.loadEnrollmentDialogOptions$=(0,c.GW)(()=>this.actions$.pipe((0,c.l4)(r.loadEnrollmentDialogOptions),(0,b.b)(()=>this.getEnrollmentDialogOptions().pipe((0,E.U)(a=>r.loadEnrollmentDialogOptionsSuccess(a)),(0,C.K)(a=>(0,T.of)(r.loadEnrollmentDialogOptionsFailure({error:a}))))))),this.createEnrollment$=(0,c.GW)(()=>this.actions$.pipe((0,c.l4)(r.createEnrollment),(0,b.b)(a=>this.createEnrollment(a.payload).pipe((0,E.U)(m=>r.loadEnrollments()),(0,C.K)(m=>(0,T.of)(r.createEnrollmentFailure({error:m}))))))),this.unsubscribeEnrollment$=(0,c.GW)(()=>this.actions$.pipe((0,c.l4)(r.unsubscribeEnrollment),(0,rt.z)(a=>this.httpClient.delete(`${f.N.baseUrl}/usercourses/${a.id}`).pipe((0,E.U)(()=>r.unsubscribeEnrollmentSuccess({id:a.id})),(0,C.K)(m=>(0,T.of)(r.unsubscribeEnrollmentFailure({error:m})))))))}deleteEnrollment(e){this.httpClient.delete(`${f.N.baseUrl}/usercourses/${e}`).pipe().subscribe(o=>{})}createEnrollment(e){const o=new Date;o.setFullYear(o.getFullYear()+1);const a={...e,status:"In Progress",grade:0,start_date:(new Date).toISOString(),expire_date:(new Date).toISOString(),end_date:o.toISOString()};return this.httpClient.post(`${f.N.baseUrl}/usercourses`,a)}getEnrollmentDialogOptions(){return(0,ct.D)([this.httpClient.get(`${f.N.baseUrl}/courses`),this.httpClient.get(`${f.N.baseUrl}/users`)]).pipe((0,E.U)(([e,o])=>({courses:e,students:o})))}getEnrollments(){return this.httpClient.get(`${f.N.baseUrl}/usercourses?_expand=course&_expand=user`)}static#t=this.\u0275fac=function(o){return new(o||n)(t.LFG(c.eX),t.LFG(mt.eN))};static#n=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac})}return n})();var pt=i(6208);let dt=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[d.ez,at,pt.m,l.Aw.forFeature(U),c.sQ.forFeature([ut])]})}return n})()}}]);