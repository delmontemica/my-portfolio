(function(){"use strict";var e={8720:function(e,t,n){var a=n(9242),o=n(3396);function i(e,t,n,a,i,r){const s=(0,o.up)("NavbarComponent"),c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(s),(0,o.Wm)(c)],64)}const r={class:"navbar navbar-expand-lg",id:"navbar-scroll"},s=(0,o.uE)('<div class="container-fluid"><a class="navbar-brand" href="#">Micaela</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse justify-content-end" id="navbarNav"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link" href="#home">Home</a></li><li class="nav-item"><a class="nav-link" href="#projects">Projects</a></li></ul></div></div>',1),c=[s];function l(e,t,n,a,i,s){return(0,o.wg)(),(0,o.iD)("nav",r,c)}var d={name:"NavbarComponent"},p=n(89);const u=(0,p.Z)(d,[["render",l]]);var m=u,f={components:{NavbarComponent:m}};const g=(0,p.Z)(f,[["render",i]]);var v=g,b=n(2483);const h={"data-bs-spy":"scroll","data-bs-target":"#navbar-scroll","data-bs-root-margin":"0px 0px -40%","data-bs-smooth-scroll":"true",class:"scrollspy-example bg-light p-3 rounded-2",tabindex:"0"};function j(e,t,n,a,i,r){const s=(0,o.up)("header-component"),c=(0,o.up)("projects-component");return(0,o.wg)(),(0,o.iD)("div",h,[(0,o.Wm)(s,{id:"home"}),(0,o.Wm)(c,{id:"projects"})])}const w={class:"home"},y={class:"container"},k={class:"row align-items-center"},D={class:"col-md-4 offset-md-2"},_=["src"],S=(0,o._)("div",{class:"col-md-4"},[(0,o._)("div",{class:"h1"},"Hi! I'm Mica."),(0,o._)("div",{class:"h5"},"Full Stack Developer"),(0,o._)("div",null," A full stack developer with 4 years of experience specializing in frontend development. Adept in all stages of web development, and can effectively self-manage during independent projects, as well as collaborate with a team. Proficient in development through Agile methodology’s scrum framework. ")],-1),x={class:"text-center"},I=(0,o._)("div",{class:"h6 mt-5"},"Find me in my networks!",-1),C=["href"];function N(e,t,a,i,r,s){const c=(0,o.up)("font-awesome-icon");return(0,o.wg)(),(0,o.iD)("div",w,[(0,o._)("div",y,[(0,o._)("div",k,[(0,o._)("div",D,[(0,o._)("img",{src:n(3054),class:"main-image",alt:"main-image"},null,8,_)]),S]),(0,o._)("div",x,[I,(0,o._)("div",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.networks,((e,t)=>((0,o.wg)(),(0,o.iD)("a",{type:"button",class:"btn btn-link",target:"_blank",key:t,href:e.link},[(0,o.Wm)(c,{icon:e.icon,class:"home-socials"},null,8,["icon"])],8,C)))),128))])])])])}var R=n.p+"img/mica.ff6fed8d.png",P=(0,o.aZ)({name:"HeaderComponent",data:()=>({image:R,networks:[{name:"LinkedIn",icon:"fa-brands fa-linkedin",link:"https://www.linkedin.com/in/delmontemica"},{name:"GitHub",icon:"fa-brands fa-github",link:"https://github.com/delmontemica"},{name:"Behance",icon:"fa-brands fa-behance-square",link:"https://www.behance.net/micaela2"},{name:"Instagram",icon:"fa-brands fa-instagram",link:"https://www.instagram.com/delmontemica/"}]})});const A=(0,p.Z)(P,[["render",N]]);var T=A,O=n(7139);const z={class:"home"},H={class:"container"},E=(0,o._)("div",{class:"h1"},"Works",-1),L={class:"row"},M=["data-bs-target"],F=["src"],G=(0,o._)("div",{class:"hover-overlay"},null,-1),U={class:"hover-1-content px-5 py-4"},W={class:"hover-1-title text-uppercase font-weight-bold mb-0"},K={class:"font-weight-light"},Y={class:"hover-1-description font-weight-light mb-0"};function Z(e,t,n,a,i,r){const s=(0,o.up)("project-details-modal");return(0,o.wg)(),(0,o.iD)("div",z,[(0,o._)("div",H,[E,(0,o._)("div",L,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.projectsList,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"col-lg-4 mb-3",key:t},[(0,o._)("div",{class:"hover hover-1 text-white","data-bs-toggle":"modal","data-bs-target":"#"+e.projectId},[(0,o._)("img",{src:e.projectThumbnail,alt:""},null,8,F),G,(0,o._)("div",U,[(0,o._)("h3",W,[(0,o._)("span",K,(0,O.zw)(e.projectName),1)]),(0,o._)("p",Y,(0,O.zw)(e.projectSnippet),1)])],8,M),(0,o.Wm)(s,{modalId:e.projectId,projectName:e.projectName,projectDetails:e.projectDetails,projectImages:e.projectImages},null,8,["modalId","projectName","projectDetails","projectImages"])])))),128))])])])}const J=["id","aria-labelledby"],q={class:"modal-dialog modal-lg"},B={class:"modal-content"},Q={class:"modal-header"},V={class:"modal-title"},X=(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),$=["id"],ee={class:"carousel-inner"},te=["src"],ne=["data-bs-target"],ae=(0,o._)("span",{class:"carousel-control-prev-icon","aria-hidden":"true"},null,-1),oe=(0,o._)("span",{class:"visually-hidden"},"Previous",-1),ie=[ae,oe],re=["data-bs-target"],se=(0,o._)("span",{class:"carousel-control-next-icon","aria-hidden":"true"},null,-1),ce=(0,o._)("span",{class:"visually-hidden"},"Next",-1),le=[se,ce],de={class:"modal-body project-modal-details"},pe={class:"mb-3"},ue={class:"mb-2"},me=(0,o._)("span",{class:"label"},"Role:",-1),fe={class:"mb-2"},ge=(0,o._)("span",{class:"label"},"Tools:",-1),ve={class:"mb-2"},be=(0,o._)("span",{class:"label"},"Key Responsibilities:",-1);function he(e,t,n,a,i,r){return(0,o.wg)(),(0,o.iD)("div",{class:"modal fade",id:n.modalId,tabindex:"-1","aria-labelledby":n.modalId+"Label","aria-hidden":"true"},[(0,o._)("div",q,[(0,o._)("div",B,[(0,o._)("div",Q,[(0,o._)("h5",V,(0,O.zw)(n.projectName),1),X]),(0,o._)("div",{id:"carousel"+n.modalId,class:"carousel slide","data-bs-ride":"carousel","data-interval":"false"},[(0,o._)("div",ee,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.projectImages,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t},[(0,o._)("div",{class:(0,O.C_)(["carousel-item",{active:0===t}])},[(0,o._)("img",{src:e,class:"d-block w-100",alt:"..."},null,8,te)],2)])))),128))]),(0,o._)("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#carousel"+n.modalId,"data-bs-slide":"prev"},ie,8,ne),(0,o._)("button",{class:"carousel-control-next",type:"button","data-bs-target":"#carousel"+n.modalId,"data-bs-slide":"next"},le,8,re)],8,$),(0,o._)("div",de,[(0,o._)("div",pe,(0,O.zw)(n.projectDetails.projectDescription),1),(0,o._)("div",ue,[me,(0,o.Uk)(" "+(0,O.zw)(n.projectDetails.role),1)]),(0,o._)("div",fe,[ge,(0,o.Uk)(" "+(0,O.zw)(n.projectDetails.techStack),1)]),(0,o._)("div",ve,[be,(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.projectDetails.keyResponsibilities,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{key:t},(0,O.zw)(e),1)))),128))])])])])])],8,J)}var je={name:"ProjectDetailsModal",components:{},props:{modalId:String,projectName:String,projectDetails:{projectDescription:String,role:String,techStack:String,keyResponsibilities:Array},projectImages:Array}};const we=(0,p.Z)(je,[["render",he]]);var ye=we,ke={name:"ProjectsComponent",components:{ProjectDetailsModal:ye},data:()=>({projectsList:[{projectId:"greatEkyc",projectThumbnail:n(8275),projectName:"Great eKYC",projectSnippet:"In-house identity verification utilizing eKYC libraries",projectDetails:{projectDescription:"A service that provides online identity verification for financial, real estate, and other type of transactions. This system utilizes the eKYC libraries provided by CyberTrust.",role:"Frontend Developer, UI Designer, Scrum Master",techStack:"ReactJS, Laravel, React Native",keyResponsibilities:["Designed user interface for the landing page of product","Collaborated with a team of 5 in development of frontend and backend","Developed and maintained mobile applications","Facilitated scrum events and maintained scrum artifacts as scrum master"]},projectImages:[n(1192),n(8275),n(6991),n(3952)]},{projectId:"greatSign",projectThumbnail:n(7375),projectName:"Great Sign",projectSnippet:"In-house e-contract system",projectDetails:{projectDescription:"An e-signature platform that allows users to create documents and transactions online.",role:"Full Stack Developer",techStack:"PHP, jQuery, JavaScript, AWS (S3, EC2)",keyResponsibilities:["Maintained legacy code","Integrated new features"]},projectImages:[n(2887),n(7375)]},{projectId:"greatSignRedesign",projectThumbnail:n(1817),projectName:"Great Sign Redesigned",projectSnippet:"Revamped UI for Great Sign",projectDetails:{projectDescription:"Redesigned UI of the current existing web system, Great Sign. This project is aimed to improve the quality of the user experience of the clients using the product, as well as to modernize the look and feel of the pages.",role:"UI/UX Designer",techStack:"Figma, Adobe Photoshop CC, Adobe Illustrator CC",keyResponsibilities:["Redesigned of existing in-house product","Collaborated with engineers and product managers for feedbacks and improvements"]},projectImages:[n(3376),n(1817),n(5439),n(2522)]},{projectId:"chukidan",projectThumbnail:n(3753),projectName:"Daido Life",projectSnippet:"Client-based grants and working regulations provider",projectDetails:{projectDescription:"A system that provides information about public funds such as grants, subsidies, and loans for corporate managements.",role:"Frontend Developer, UI Designer",techStack:"ReactJS, TypeScript, Laravel, AWS (S3, EC2, Lambda, Cloudfront, RDS)",keyResponsibilities:["Created/designed mockup of system based on client requirements","Collaborated with team and product owner for UI feedback and improvements","Developed frontend based on established UI design"]},projectImages:[n(9926),n(3753),n(2674),n(7282),n(9742)]},{projectId:"nisshiren",projectThumbnail:n(6596),projectName:"Identity Authentication",projectSnippet:"Identity verification utilizing Japanese MyNumber cards.",projectDetails:{projectDescription:"A client-based system that allows users to read and store data from MyNumber card and use them for identity verification.",role:"Full Stack Developer",techStack:"Laravel, ReactJS, TypeScript, React Native, Swift, AWS (S3, EC2, RDS)",keyResponsibilities:["Developed frontend for service user dashboard","Collaborated with a team of 3 people in the development of android and iOS apps through pair programming","Assisted in testing, bug fixing and overall maintenance of system","Built and maintained admin management dashboard"]},projectImages:[n(5447),n(6596)]}]})};const De=(0,p.Z)(ke,[["render",Z]]);var _e=De,Se=(0,o.aZ)({name:"HomeView",components:{ProjectsComponent:_e,HeaderComponent:T}});const xe=(0,p.Z)(Se,[["render",j]]);var Ie=xe;const Ce=[{path:"/",name:"home",component:Ie},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,4335))}],Ne=(0,b.p7)({history:(0,b.r5)(),routes:Ce});var Re=Ne,Pe=(n(5654),n(7749)),Ae=n(8125),Te=n(2234);Ae.vI.add(Te.D9H,Te.zhw,Te.C18,Te.Zzi),(0,a.ri)(v).use(Re).component("font-awesome-icon",Pe.GN).mount("#app")},9926:function(e,t,n){e.exports=n.p+"img/DaidoChukidan-Preview.17201259.png"},2887:function(e,t,n){e.exports=n.p+"img/GreatSign-Preview.de8a9b8e.png"},3376:function(e,t,n){e.exports=n.p+"img/GreatSign-Redesign-Preview.3c26f7b3.png"},1192:function(e,t,n){e.exports=n.p+"img/GreateKYC-Preview.f8ba0954.png"},5447:function(e,t,n){e.exports=n.p+"img/Nisshiren-Preview.6c896814.png"},2674:function(e,t,n){e.exports=n.p+"img/chukidan1-full.e76d2514.png"},7282:function(e,t,n){e.exports=n.p+"img/chukidan2-full.318c1171.png"},9742:function(e,t,n){e.exports=n.p+"img/chukidan3-full.93460d40.png"},3753:function(e,t,n){e.exports=n.p+"img/preview.5e241e24.png"},6991:function(e,t,n){e.exports=n.p+"img/full-design.198538ec.png"},3952:function(e,t,n){e.exports=n.p+"img/mobile-design.78aa1dac.png"},8275:function(e,t,n){e.exports=n.p+"img/preview.58f3fb9e.png"},7375:function(e,t,n){e.exports=n.p+"img/preview.ef8d5304.png"},2522:function(e,t,n){e.exports=n.p+"img/redesigned-mobile.f8a49259.png"},1817:function(e,t,n){e.exports=n.p+"img/redesigned-preview.8afa839f.png"},5439:function(e,t,n){e.exports=n.p+"img/redesigned-web.ec27ef60.png"},3054:function(e,t,n){e.exports=n.p+"img/mica2.fdf8ddb7.png"},6596:function(e,t,n){e.exports=n.p+"img/preview-app.1b51ad2b.png"}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,i){if(!a){var r=1/0;for(d=0;d<e.length;d++){a=e[d][0],o=e[d][1],i=e[d][2];for(var s=!0,c=0;c<a.length;c++)(!1&i||r>=i)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(s=!1,i<r&&(r=i));if(s){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[a,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.431f4270.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="mica-portfolio:";n.l=function(a,o,i,r){if(e[a])e[a].push(o);else{var s,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var p=l[d];if(p.getAttribute("src")==a||p.getAttribute("data-webpack")==t+i){s=p;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=a),e[a]=[o];var u=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var o=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/my-portfolio/"}(),function(){var e={143:0};n.f.j=function(t,a){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var i=new Promise((function(n,a){o=e[t]=[n,a]}));a.push(o[2]=i);var r=n.p+n.u(t),s=new Error,c=function(a){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",s.name="ChunkLoadError",s.type=i,s.request=r,o[1](s)}};n.l(r,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,i,r=a[0],s=a[1],c=a[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var d=c(n)}for(t&&t(a);l<r.length;l++)i=r[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},a=self["webpackChunkmica_portfolio"]=self["webpackChunkmica_portfolio"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(8720)}));a=n.O(a)})();
//# sourceMappingURL=app.ea9e670e.js.map