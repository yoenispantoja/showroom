function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{iQ3a:function(e,t,n){"use strict";n.r(t);var a=n("SVse"),i=n("M0ag"),r=n("SfIc"),o=n("crmZ"),l=n("s7LF"),s=n("bquJ"),c=n("0FS3"),m=n("6yq/"),d=n("iInd"),u=n("ZZ88"),f=n("fCbB"),g=n("AytR"),p=n("G0yt"),h=n("m3o8"),v=n("8Y7J");function b(e,t){if(1&e){var n=v["\u0275\u0275getCurrentView"]();v["\u0275\u0275elementStart"](0,"div",17),v["\u0275\u0275elementStart"](1,"img",18),v["\u0275\u0275listener"]("click",(function(){v["\u0275\u0275restoreView"](n);var e=t.index;return v["\u0275\u0275nextContext"]().open(e)})),v["\u0275\u0275elementEnd"](),v["\u0275\u0275element"](2,"br"),v["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit;v["\u0275\u0275advance"](1),v["\u0275\u0275property"]("src",a.thumb,v["\u0275\u0275sanitizeUrl"])}}var y,S,C=((y=function(){function e(t,n,a){_classCallCheck(this,e),this.route=t,this.modal=n,this._lightbox=a,this.urlGalerias=g.a.apiMedias+"galerias/",this.fotosGaleria=[]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this,t=this.urlGalerias+this.galeria.id+"/"+this.galeria.imagenPortada;this.fotosGaleria=[{src:t,caption:"Cover image",thumb:t}],this.galeria.imagenes.map((function(t){e.fotosGaleria.push({src:e.urlGalerias+e.galeria.id+"/"+t.nombreImagen,caption:t.nombreImagen,thumb:e.urlGalerias+e.galeria.id+"/"+t.nombreImagen})}))}},{key:"open",value:function(e){this._lightbox.open(this.fotosGaleria,e)}},{key:"close",value:function(){this._lightbox.close()}},{key:"cerrar",value:function(){this.modal.dismissAll()}}]),e}()).\u0275fac=function(e){return new(e||y)(v["\u0275\u0275directiveInject"](d.a),v["\u0275\u0275directiveInject"](p.f),v["\u0275\u0275directiveInject"](h.Lightbox))},y.\u0275cmp=v["\u0275\u0275defineComponent"]({type:y,selectors:[["app-ver-galeria"]],inputs:{galeria:"galeria"},decls:32,vars:5,consts:[[1,"modal-galeria"],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],[1,"fa","fa-images"],["type","button","aria-label","Close","tabIndex","-1",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"post"],[1,"post-info","row"],[1,"post-author","col-4"],[1,"fa","fa-user"],[1,"post-date","col-4"],[1,"fa","fa-check-circle"],[1,"post-media","text-center","row"],["class","col-4",4,"ngFor","ngForOf"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-dark",3,"click"],[1,"col-4"],["width","250px",1,"img-portada","img-thumbnail",3,"src","click"]],template:function(e,t){1&e&&(v["\u0275\u0275elementStart"](0,"div",0),v["\u0275\u0275elementStart"](1,"div",1),v["\u0275\u0275elementStart"](2,"h4",2),v["\u0275\u0275element"](3,"i",3),v["\u0275\u0275text"](4),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](5,"button",4),v["\u0275\u0275listener"]("click",(function(){return t.cerrar()})),v["\u0275\u0275elementStart"](6,"span",5),v["\u0275\u0275text"](7,"\xd7"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](8,"div",6),v["\u0275\u0275elementStart"](9,"article",7),v["\u0275\u0275elementStart"](10,"div",8),v["\u0275\u0275elementStart"](11,"span",9),v["\u0275\u0275elementStart"](12,"strong"),v["\u0275\u0275element"](13,"i",3),v["\u0275\u0275text"](14," Category:"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275text"](15),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](16,"span",9),v["\u0275\u0275elementStart"](17,"strong"),v["\u0275\u0275element"](18,"i",10),v["\u0275\u0275text"](19," Posted by:"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275text"](20),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](21,"span",11),v["\u0275\u0275elementStart"](22,"strong"),v["\u0275\u0275element"](23,"i",12),v["\u0275\u0275text"](24," Status:"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275text"](25),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275element"](26,"hr"),v["\u0275\u0275elementStart"](27,"div",13),v["\u0275\u0275template"](28,b,3,1,"div",14),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](29,"div",15),v["\u0275\u0275elementStart"](30,"button",16),v["\u0275\u0275listener"]("click",(function(){return t.cerrar()})),v["\u0275\u0275text"](31," Close "),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"]()),2&e&&(v["\u0275\u0275advance"](4),v["\u0275\u0275textInterpolate1"](" ",t.galeria.nombre," "),v["\u0275\u0275advance"](11),v["\u0275\u0275textInterpolate1"](" ",t.galeria.categoria.nombre,""),v["\u0275\u0275advance"](5),v["\u0275\u0275textInterpolate1"](" ",t.galeria.usuario.name,""),v["\u0275\u0275advance"](5),v["\u0275\u0275textInterpolate1"](" ",t.galeria.estado.nombre,""),v["\u0275\u0275advance"](3),v["\u0275\u0275property"]("ngForOf",t.fotosGaleria))},directives:[a.NgForOf],styles:[".post[_ngcontent-%COMP%]{max-height:500px;overflow-y:auto;overflow-x:hidden}.post-info[_ngcontent-%COMP%]{margin-bottom:20px}.img-portada[_ngcontent-%COMP%]{cursor:pointer;margin-bottom:15px;-o-object-fit:contain;object-fit:contain;height:180px}.modal-header[_ngcontent-%COMP%]{background-color:#1d1d1d}.close[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .modal-header[_ngcontent-%COMP%]{color:var(--white)}.divBody[_ngcontent-%COMP%]{margin:20px 0}"],data:{animation:[Object(u.a)()]}}),y),w=n("3zLz"),E=n("pK/H"),x=["successSwal"],I=function(){return["router-link-active"]},k=((S=function(){function e(t,n,a,i,r){_classCallCheck(this,e),this.myServicio=t,this.router=n,this.modalService=a,this.config=i,this.ngZone=r,this.urlApi=g.a.apiUrl+"/galeria",this.nombresColumnas=["Cover image","Name","Description","Category"],i.size="xl"}return _createClass(e,[{key:"ngOnInit",value:function(){this.columnasData=this.myServicio.getColumnasTablaGalerias()}},{key:"getDismissReason",value:function(e){return e===p.a.ESC?"by pressing ESC":e===p.a.BACKDROP_CLICK?"by clicking on a backdrop":"with: ".concat(e)}},{key:"verDetallesGaleria",value:function(e){var t=this,n=this.modalService.open(C);n.componentInstance.galeria=e,n.result.then((function(e){t.closeResult="Closed with: ".concat(e)}),(function(e){t.closeResult="Dismissed ".concat(t.getDismissReason(e))}))}},{key:"editarGaleria",value:function(e){var t=this;this.ngZone.run((function(){return t.router.navigate(["/admin/galerias/editar-galeria",e.id])})).then()}},{key:"eliminarGaleria",value:function(e){var t=this;this.myServicio.deleteGaleria(e).subscribe((function(e){e&&t.successSwal.show()}),(function(e){console.log(e)}))}}]),e}()).\u0275fac=function(e){return new(e||S)(v["\u0275\u0275directiveInject"](f.a),v["\u0275\u0275directiveInject"](d.e),v["\u0275\u0275directiveInject"](p.f),v["\u0275\u0275directiveInject"](p.g),v["\u0275\u0275directiveInject"](v.NgZone))},S.\u0275cmp=v["\u0275\u0275defineComponent"]({type:S,selectors:[["app-lista-galerias"]],viewQuery:function(e,t){var n;1&e&&v["\u0275\u0275viewQuery"](x,!0),2&e&&v["\u0275\u0275queryRefresh"](n=v["\u0275\u0275loadQuery"]())&&(t.successSwal=n.first)},decls:12,vars:11,consts:[[1,"titlePage"],[3,"heading","icon"],["routerLink","/admin/galerias/adicionar-galerias",1,"btn","btn-sm","btn-primary","linkAdicionar",3,"routerLinkActive"],[1,"fa","fa-plus-circle"],[1,"row"],[1,"col-md-12"],[3,"nombresColumnas","urlApi","tituloReporte","columnasData","verDetallesClick","editarClick","eliminarClick"],["title","Information","text","The gallery has been deleted","type","success",3,"showCancelButton","focusCancel"],["successSwal",""]],template:function(e,t){1&e&&(v["\u0275\u0275elementStart"](0,"div"),v["\u0275\u0275elementStart"](1,"div",0),v["\u0275\u0275element"](2,"app-page-header",1),v["\u0275\u0275elementStart"](3,"a",2),v["\u0275\u0275element"](4,"i",3),v["\u0275\u0275text"](5," New gallery "),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](6,"div",4),v["\u0275\u0275elementStart"](7,"div",5),v["\u0275\u0275elementStart"](8,"dymtabla",6),v["\u0275\u0275listener"]("verDetallesClick",(function(e){return t.verDetallesGaleria(e)}))("editarClick",(function(e){return t.editarGaleria(e)}))("eliminarClick",(function(e){return t.eliminarGaleria(e)})),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275element"](9,"br"),v["\u0275\u0275element"](10,"swal",7,8),v["\u0275\u0275elementEnd"]()),2&e&&(v["\u0275\u0275property"]("@routerTransition",void 0),v["\u0275\u0275advance"](2),v["\u0275\u0275property"]("heading","Gallery list")("icon","fa-pencil-square"),v["\u0275\u0275advance"](1),v["\u0275\u0275property"]("routerLinkActive",v["\u0275\u0275pureFunction0"](10,I)),v["\u0275\u0275advance"](5),v["\u0275\u0275property"]("nombresColumnas",t.nombresColumnas)("urlApi",t.urlApi)("tituloReporte","Gallery list")("columnasData",t.columnasData),v["\u0275\u0275advance"](2),v["\u0275\u0275property"]("showCancelButton",!1)("focusCancel",!0))},directives:[w.a,d.g,d.f,E.a,r.a],styles:[".titlePage[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto;justify-content:space-between}.titlePage[_ngcontent-%COMP%]   .linkAdicionar[_ngcontent-%COMP%]{height:32px;width:150px}"],data:{animation:[Object(u.a)()]}}),S),O=n("ufa9"),P=["confirmSwal"];function _(e,t){1&e&&v["\u0275\u0275element"](0,"img",24),2&e&&v["\u0275\u0275propertyInterpolate"]("src",t.$implicit,v["\u0275\u0275sanitizeUrl"])}var G=["confirmSwal"],M=["notFoundSwal"];function j(e,t){if(1&e){var n=v["\u0275\u0275getCurrentView"]();v["\u0275\u0275elementStart"](0,"div",26),v["\u0275\u0275element"](1,"img",27),v["\u0275\u0275elementStart"](2,"button",28),v["\u0275\u0275listener"]("click",(function(){v["\u0275\u0275restoreView"](n);var e=t.$implicit;return v["\u0275\u0275nextContext"]().eliminarImagen(e.id,e.tipo)})),v["\u0275\u0275element"](3,"i",29),v["\u0275\u0275text"](4," Delete"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit;v["\u0275\u0275advance"](1),v["\u0275\u0275propertyInterpolate"]("src",a.src,v["\u0275\u0275sanitizeUrl"])}}var F,D,R,A=[{path:"",component:k},{path:"adicionar-galerias",component:(D=function(){function e(t,n,a){_classCallCheck(this,e),this.formBuilder=t,this.myServicio=n,this.codigueraService=a,this.imgSrc="assets/images/upload_img.png",this.archivosMostrar=[],this.archivosEnviar=[],this.filesGaleria=[],this.form=new l.i({}),this.model={},this.fields=[],this.options={}}return _createClass(e,[{key:"ngOnInit",value:function(){this.fields=this.myServicio.camposAdicionarGaleria(),this.form=this.formBuilder.group({imagenPortada:["",[l.z.required]]})}},{key:"onSelectFile",value:function(e){var t=this;if(e.target.files&&e.target.files[0]){var n=e.target.files.length;this.filesGaleria=e.target.files;for(var a=0;a<n;a++){var i=new FileReader;i.onload=function(e){t.archivosMostrar.push(e.target.result)},i.readAsDataURL(e.target.files[a])}}}},{key:"loadImage",value:function(e){var t=this;if(e.target.files&&e.target.files[0]){this.imagenPortada=e.target.files[0];var n=new FileReader;n.onload=function(e){t.imgSrc=e.target.result.toString()},n.readAsDataURL(e.target.files[0])}}},{key:"onSubmit",value:function(){var e=this,t=Object.assign(this.form.value,{publicadaPor:JSON.parse(localStorage.getItem("socialUser")).id}),n=new FormData;n.append("datos",JSON.stringify(t)),n.append("imagenPortada",this.imagenPortada,"gal.png"),Array.from(this.archivosMostrar).forEach((function(e){n.append("imagenes[]",e)})),this.myServicio.addGaleria(n).subscribe((function(t){t&&e.confirmSwal.show()}),(function(e){console.log(e)}))}},{key:"cerrarVentana",value:function(){this.archivosMostrar=[],this.options.resetModel(),this.form.reset(),this.imgSrc="assets/images/upload_img.png"}}]),e}(),D.\u0275fac=function(e){return new(e||D)(v["\u0275\u0275directiveInject"](l.e),v["\u0275\u0275directiveInject"](f.a),v["\u0275\u0275directiveInject"](O.a))},D.\u0275cmp=v["\u0275\u0275defineComponent"]({type:D,selectors:[["app-adicionar-galerias"]],viewQuery:function(e,t){var n;1&e&&v["\u0275\u0275staticViewQuery"](P,!0),2&e&&v["\u0275\u0275queryRefresh"](n=v["\u0275\u0275loadQuery"]())&&(t.confirmSwal=n.first)},inputs:{src:"src"},decls:33,vars:13,consts:[[3,"heading","icon"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-md-8"],[3,"form","fields","options","model"],[1,"col-md-4","clsImagenDestacada"],[1,"form-group"],["for","",1,"text-primary"],[1,"image-upload"],["for","fileImagenDestacada"],["height","120px",3,"src"],["id","fileImagenDestacada","formControlName","imagenPortada","type","file","capture","camera","accept","image/*",3,"change"],[1,"col-md-12"],[1,"divGaleria"],[1,"containerFotos"],["class","fotosGaleria",3,"src",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-primary",3,"click"],[1,"fa","fa-photo"],["hidden","","type","file","multiple","","accept","image/*",3,"change"],["fileInput",""],["type","submit",1,"btn","btn-primary","float-right",3,"disabled"],[1,"fa","fa-save"],["title","Information","text","Gallery added","type","success",3,"showCancelButton","focusCancel","confirm"],["confirmSwal",""],[1,"fotosGaleria",3,"src"]],template:function(e,t){if(1&e){var n=v["\u0275\u0275getCurrentView"]();v["\u0275\u0275elementStart"](0,"div"),v["\u0275\u0275element"](1,"app-page-header",0),v["\u0275\u0275elementStart"](2,"form",1),v["\u0275\u0275listener"]("ngSubmit",(function(){return t.onSubmit()})),v["\u0275\u0275elementStart"](3,"div",2),v["\u0275\u0275elementStart"](4,"div",3),v["\u0275\u0275element"](5,"formly-form",4),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](6,"div",5),v["\u0275\u0275elementStart"](7,"div",6),v["\u0275\u0275elementStart"](8,"label",7),v["\u0275\u0275text"](9,"Cover image:"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](10,"div",8),v["\u0275\u0275elementStart"](11,"label",9),v["\u0275\u0275element"](12,"img",10),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](13,"input",11),v["\u0275\u0275listener"]("change",(function(e){return t.loadImage(e)})),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](14,"div",2),v["\u0275\u0275elementStart"](15,"div",12),v["\u0275\u0275elementStart"](16,"div",13),v["\u0275\u0275elementStart"](17,"div",14),v["\u0275\u0275template"](18,_,1,1,"img",15),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](19,"button",16),v["\u0275\u0275listener"]("click",(function(){return v["\u0275\u0275restoreView"](n),v["\u0275\u0275reference"](23).click()})),v["\u0275\u0275element"](20,"i",17),v["\u0275\u0275text"](21," Load images "),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](22,"input",18,19),v["\u0275\u0275listener"]("change",(function(e){return t.onSelectFile(e)})),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](24,"div",2),v["\u0275\u0275elementStart"](25,"div",12),v["\u0275\u0275elementStart"](26,"button",20),v["\u0275\u0275element"](27,"i",21),v["\u0275\u0275text"](28," Save "),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275element"](29,"br"),v["\u0275\u0275element"](30,"br"),v["\u0275\u0275elementStart"](31,"swal",22,23),v["\u0275\u0275listener"]("confirm",(function(){return t.cerrarVentana()})),v["\u0275\u0275elementEnd"]()}2&e&&(v["\u0275\u0275property"]("@routerTransition",void 0),v["\u0275\u0275advance"](1),v["\u0275\u0275property"]("heading","New gallery")("icon","fa-pencil-square"),v["\u0275\u0275advance"](1),v["\u0275\u0275property"]("formGroup",t.form),v["\u0275\u0275advance"](3),v["\u0275\u0275property"]("form",t.form)("fields",t.fields)("options",t.options)("model",t.model),v["\u0275\u0275advance"](7),v["\u0275\u0275property"]("src",t.imgSrc,v["\u0275\u0275sanitizeUrl"]),v["\u0275\u0275advance"](6),v["\u0275\u0275property"]("ngForOf",t.archivosMostrar),v["\u0275\u0275advance"](8),v["\u0275\u0275property"]("disabled",t.form.invalid),v["\u0275\u0275advance"](5),v["\u0275\u0275property"]("showCancelButton",!1)("focusCancel",!0))},directives:[w.a,l.B,l.p,l.j,c.d,l.c,l.o,l.h,a.NgForOf,r.a],styles:[".image-upload[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer}.image-upload[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:rotate(3deg)}.image-upload[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{display:none}.clsImagenDestacada[_ngcontent-%COMP%], .divGaleria[_ngcontent-%COMP%]{text-align:center}.divGaleria[_ngcontent-%COMP%]{margin-bottom:30px;padding-bottom:30px;border:1px solid #cfcfcf}.fotosGaleria[_ngcontent-%COMP%]{width:200px;height:160px;border:2px solid #cfcfcf;border-radius:8px;margin:10px;-o-object-fit:scale-down;object-fit:scale-down}.containerFotos[_ngcontent-%COMP%]{margin:40px}"],data:{animation:[Object(u.a)()]}}),D)},{path:"editar-galeria/:id",component:(F=function(){function e(t,n,a,i){_classCallCheck(this,e),this.formBuilder=t,this.myServicio=n,this.route=a,this.router=i,this.urlGaleria=g.a.apiMedias+"/galerias/",this.imgSrc="assets/images/upload_img.png",this.archivosMostrar=[],this.idsImagenesEliminar=[],this.filesGaleria=[],this.archivosEnviar=[],this.form=new l.i({}),this.model={},this.fields=[]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.idGaleria=Number.parseInt(this.route.snapshot.paramMap.get("id")),this.myServicio.showGaleria(this.idGaleria).subscribe((function(t){e.fields=e.myServicio.camposAdicionarGaleria(),t?(e.model=Object.assign(Object.assign({},e.model),{nombre:t.nombre,descripcion:t.descripcion,categoria:t.categoria.id,estado:t.estado.id}),e.imgSrc=e.urlGaleria+e.idGaleria+"/"+t.imagenPortada,t.imagenes.map((function(t){e.archivosMostrar.push({src:e.urlGaleria+e.idGaleria+"/"+t.nombreImagen,id:t.id,tipo:0})}))):e.notFoundSwal.show()})),this.form=this.formBuilder.group({imagenPortada:[""],imagenes:[""]})}},{key:"onSelectFile",value:function(e){var t=this;if(e.target.files&&e.target.files[0]){var n=e.target.files.length;this.filesGaleria=e.target.files;for(var a=0;a<n;a++){var i=new FileReader;i.onload=function(e){t.archivosMostrar.push({src:e.target.result,id:Math.random().toString(36).substring(10),tipo:1}),t.archivosEnviar.push(e.target.result)},i.readAsDataURL(e.target.files[a])}}}},{key:"loadImage",value:function(e){var t=this;if(e.target.files&&e.target.files[0]){this.imagenPortada=e.target.files[0];var n=new FileReader;n.onload=function(e){t.imgSrc=e.target.result.toString()},n.readAsDataURL(e.target.files[0])}}},{key:"onSubmit",value:function(){var e=this,t=Object.assign(this.form.value,this.model,{publicadaPor:JSON.parse(localStorage.getItem("socialUser")).id}),n=new FormData;n.append("datos",JSON.stringify(t)),this.imagenPortada&&n.append("imagenPortada",this.imagenPortada,"_gal.png"),Array.from(this.archivosEnviar).forEach((function(e){n.append("imagenes[]",e)})),this.idsImagenesEliminar.map((function(t){e.myServicio.deleteImagenGaleria(t).subscribe()})),this.myServicio.editGaleria(this.idGaleria,n).subscribe((function(t){t&&e.confirmSwal.show()}),(function(e){console.log(e)}))}},{key:"cerrarVentana",value:function(){this.router.navigate(["/admin/galerias"])}},{key:"eliminarImagen",value:function(e,t){this.archivosMostrar=this.archivosMostrar.filter((function(t){return t.id!==e})),0===t&&this.idsImagenesEliminar.push(e)}}]),e}(),F.\u0275fac=function(e){return new(e||F)(v["\u0275\u0275directiveInject"](l.e),v["\u0275\u0275directiveInject"](f.a),v["\u0275\u0275directiveInject"](d.a),v["\u0275\u0275directiveInject"](d.e))},F.\u0275cmp=v["\u0275\u0275defineComponent"]({type:F,selectors:[["app-editar-galerias"]],viewQuery:function(e,t){var n;1&e&&(v["\u0275\u0275staticViewQuery"](G,!0),v["\u0275\u0275staticViewQuery"](M,!0)),2&e&&(v["\u0275\u0275queryRefresh"](n=v["\u0275\u0275loadQuery"]())&&(t.confirmSwal=n.first),v["\u0275\u0275queryRefresh"](n=v["\u0275\u0275loadQuery"]())&&(t.notFoundSwal=n.first))},inputs:{src:"src"},decls:35,vars:13,consts:[[3,"heading","icon"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-md-8"],[3,"form","fields","model"],[1,"col-md-4","clsImagenDestacada"],[1,"form-group"],["for","",1,"text-primary"],[1,"image-upload"],["for","fileImagenDestacada"],["height","120px",3,"src"],["id","fileImagenDestacada","formControlName","imagenPortada","type","file","capture","camera","accept","image/*",3,"change"],[1,"col-md-12"],[1,"divGaleria"],[1,"containerFotos","row"],["class","col-3 boxImage fotosGaleria",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-primary",3,"click"],[1,"fa","fa-photo"],["hidden","","type","file","formControlName","imagenes","multiple","","accept","image/*",3,"change"],["fileInput",""],["type","submit",1,"btn","btn-primary","float-right",3,"disabled"],[1,"fa","fa-save"],["title","Information","text","Gallery updated","type","success",3,"showCancelButton","focusCancel","confirm"],["confirmSwal",""],["title","Information","text","Gallery not found with this id","type","error",3,"showCancelButton","confirm"],["notFoundSwal",""],[1,"col-3","boxImage","fotosGaleria"],[1,"",3,"src"],["type","button",1,"btn","btn-danger","btn-sm",3,"click"],["aria-hidden","true",1,"fa","fa-trash"]],template:function(e,t){if(1&e){var n=v["\u0275\u0275getCurrentView"]();v["\u0275\u0275elementStart"](0,"div"),v["\u0275\u0275element"](1,"app-page-header",0),v["\u0275\u0275elementStart"](2,"form",1),v["\u0275\u0275listener"]("ngSubmit",(function(){return t.onSubmit()})),v["\u0275\u0275elementStart"](3,"div",2),v["\u0275\u0275elementStart"](4,"div",3),v["\u0275\u0275element"](5,"formly-form",4),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](6,"div",5),v["\u0275\u0275elementStart"](7,"div",6),v["\u0275\u0275elementStart"](8,"label",7),v["\u0275\u0275text"](9,"Cover image:"),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](10,"div",8),v["\u0275\u0275elementStart"](11,"label",9),v["\u0275\u0275element"](12,"img",10),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](13,"input",11),v["\u0275\u0275listener"]("change",(function(e){return t.loadImage(e)})),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](14,"div",2),v["\u0275\u0275elementStart"](15,"div",12),v["\u0275\u0275elementStart"](16,"div",13),v["\u0275\u0275elementStart"](17,"div",14),v["\u0275\u0275template"](18,j,5,1,"div",15),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](19,"button",16),v["\u0275\u0275listener"]("click",(function(){return v["\u0275\u0275restoreView"](n),v["\u0275\u0275reference"](23).click()})),v["\u0275\u0275element"](20,"i",17),v["\u0275\u0275text"](21," Load more images "),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](22,"input",18,19),v["\u0275\u0275listener"]("change",(function(e){return t.onSelectFile(e)})),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](24,"div",2),v["\u0275\u0275elementStart"](25,"div",12),v["\u0275\u0275elementStart"](26,"button",20),v["\u0275\u0275element"](27,"i",21),v["\u0275\u0275text"](28," Edit "),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementEnd"](),v["\u0275\u0275element"](29,"br"),v["\u0275\u0275element"](30,"br"),v["\u0275\u0275elementStart"](31,"swal",22,23),v["\u0275\u0275listener"]("confirm",(function(){return t.cerrarVentana()})),v["\u0275\u0275elementEnd"](),v["\u0275\u0275elementStart"](33,"swal",24,25),v["\u0275\u0275listener"]("confirm",(function(){return t.cerrarVentana()})),v["\u0275\u0275elementEnd"]()}2&e&&(v["\u0275\u0275property"]("@routerTransition",void 0),v["\u0275\u0275advance"](1),v["\u0275\u0275property"]("heading","Edit gallery")("icon","fa-pencil-square"),v["\u0275\u0275advance"](1),v["\u0275\u0275property"]("formGroup",t.form),v["\u0275\u0275advance"](3),v["\u0275\u0275property"]("form",t.form)("fields",t.fields)("model",t.model),v["\u0275\u0275advance"](7),v["\u0275\u0275property"]("src",t.imgSrc,v["\u0275\u0275sanitizeUrl"]),v["\u0275\u0275advance"](6),v["\u0275\u0275property"]("ngForOf",t.archivosMostrar),v["\u0275\u0275advance"](8),v["\u0275\u0275property"]("disabled",t.form.invalid),v["\u0275\u0275advance"](5),v["\u0275\u0275property"]("showCancelButton",!1)("focusCancel",!0),v["\u0275\u0275advance"](2),v["\u0275\u0275property"]("showCancelButton",!1))},directives:[w.a,l.B,l.p,l.j,c.d,l.c,l.o,l.h,a.NgForOf,r.a],styles:[".image-upload[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer}.image-upload[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{transform:rotate(3deg)}.image-upload[_ngcontent-%COMP%] > input[_ngcontent-%COMP%]{display:none}.clsImagenDestacada[_ngcontent-%COMP%], .divGaleria[_ngcontent-%COMP%]{text-align:center}.divGaleria[_ngcontent-%COMP%]{margin-bottom:30px;padding-bottom:30px;border:1px solid #cfcfcf}.fotosGaleria[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px;height:160px;border:2px solid #cfcfcf;border-radius:8px;margin:10px;-o-object-fit:scale-down;object-fit:scale-down}.containerFotos[_ngcontent-%COMP%]{margin:40px}"],data:{animation:[Object(u.a)()]}}),F)}],B=((R=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=v["\u0275\u0275defineNgModule"]({type:R}),R.\u0275inj=v["\u0275\u0275defineInjector"]({factory:function(e){return new(e||R)},imports:[[d.h.forChild(A)],d.h]}),R);n.d(t,"GaleriasModule",(function(){return V}));var N,V=((N=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=v["\u0275\u0275defineNgModule"]({type:N}),N.\u0275inj=v["\u0275\u0275defineInjector"]({factory:function(e){return new(e||N)},imports:[[a.CommonModule,B,i.b,o.b,m.a,r.b.forRoot({buttonsStyling:!1,customClass:"modal-content",confirmButtonClass:"btn btn-primary",cancelButtonClass:"btn"}),l.k,l.v,c.e.forRoot(),s.a]]}),N)}}]);