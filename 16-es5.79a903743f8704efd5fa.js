function _createForOfIteratorHelper(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,r=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw r}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"8wWH":function(e,t,n){"use strict";n.r(t);var i,o,r,a,s,l,u=n("SVse"),c=n("M0ag"),p=n("s7LF"),d=n("SfIc"),m=n("6yq/"),f=n("iInd"),h=n("ZZ88"),v=n("AytR"),g=n("8Y7J"),y=n("IheW"),_=v.a.apiMedias+"medias/",b=((i=function(){function e(t){_classCallCheck(this,e),this.myHttp=t,this.url=v.a.apiUrl+"/media"}return _createClass(e,[{key:"getMedias",value:function(){return this.myHttp.get(this.url)}},{key:"addMedia",value:function(e){return this.myHttp.post(this.url,e)}},{key:"editMedia",value:function(e,t){return this.myHttp.put(this.url+"/"+e,t)}},{key:"deleteMedia",value:function(e){return this.myHttp.delete(this.url+"/"+e)}},{key:"getColumnasTablaMedias",value:function(){return[{data:function(e,t,n){return'<img style="object-fit: cover" width="100px" height="60px" src="'+_+e.nombre+'">'},className:"text-center"},{data:"nombre",className:"text-center"},{data:function(e,t,n){return(e.tamanno/1024).toFixed(2)+" kB"},className:"text-center"},{data:"mime_type",className:"text-center"},{data:"publicadaPor.nombre",className:"text-center"}]}}]),e}()).\u0275fac=function(e){return new(e||i)(g["\u0275\u0275inject"](y.b))},i.\u0275prov=g["\u0275\u0275defineInjectable"]({token:i,factory:i.\u0275fac,providedIn:"root"}),i),k=n("m3o8"),C=n("3zLz"),x=n("pK/H"),S=["successSwal"],w=function(){return["router-link-active"]},I=((o=function(){function e(t,n,i){_classCallCheck(this,e),this.myServicio=t,this.router=n,this._lightbox=i,this.urlApi=v.a.apiUrl+"/media",this.urlMedias=v.a.apiMedias+"/medias/",this.medias=[],this.nombresColumnas=["Imagen","Nombre","Tama\xf1o","Extensi\xf3n","Publicada por"]}return _createClass(e,[{key:"ngOnInit",value:function(){this.columnasData=this.myServicio.getColumnasTablaMedias()}},{key:"verDetallesMedia",value:function(e){this.medias=[{src:this.urlMedias+"/"+e.nombre,caption:e.nombre,thumb:this.urlMedias+"/"+e.nombre}],this._lightbox.open(this.medias,0)}},{key:"eliminarMedia",value:function(e){var t=this;this.myServicio.deleteMedia(e).subscribe((function(e){e&&t.successSwal.show()}),(function(e){console.log(e)}))}},{key:"close",value:function(){this._lightbox.close()}}]),e}()).\u0275fac=function(e){return new(e||o)(g["\u0275\u0275directiveInject"](b),g["\u0275\u0275directiveInject"](f.e),g["\u0275\u0275directiveInject"](k.Lightbox))},o.\u0275cmp=g["\u0275\u0275defineComponent"]({type:o,selectors:[["app-lista-medias"]],viewQuery:function(e,t){var n;1&e&&g["\u0275\u0275viewQuery"](S,!0),2&e&&g["\u0275\u0275queryRefresh"](n=g["\u0275\u0275loadQuery"]())&&(t.successSwal=n.first)},decls:12,vars:12,consts:[[1,"titlePage"],[3,"heading","icon"],["routerLink","/admin/medias/adicionar-medias",1,"btn","btn-sm","btn-primary","linkAdicionar",3,"routerLinkActive"],[1,"fa","fa-plus-circle"],[1,"row"],[1,"col-md-12"],[3,"nombresColumnas","urlApi","tituloReporte","columnasData","puedeEditar","verDetallesClick","eliminarClick"],["title","Information","text","The media has been deleted","type","success",3,"showCancelButton","focusCancel"],["successSwal",""]],template:function(e,t){1&e&&(g["\u0275\u0275elementStart"](0,"div"),g["\u0275\u0275elementStart"](1,"div",0),g["\u0275\u0275element"](2,"app-page-header",1),g["\u0275\u0275elementStart"](3,"a",2),g["\u0275\u0275element"](4,"i",3),g["\u0275\u0275text"](5," Add media "),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](6,"div",4),g["\u0275\u0275elementStart"](7,"div",5),g["\u0275\u0275elementStart"](8,"dymtabla",6),g["\u0275\u0275listener"]("verDetallesClick",(function(e){return t.verDetallesMedia(e)}))("eliminarClick",(function(e){return t.eliminarMedia(e)})),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275element"](9,"br"),g["\u0275\u0275element"](10,"swal",7,8),g["\u0275\u0275elementEnd"]()),2&e&&(g["\u0275\u0275property"]("@routerTransition",void 0),g["\u0275\u0275advance"](2),g["\u0275\u0275property"]("heading","Media list")("icon","fa-pencil-square"),g["\u0275\u0275advance"](1),g["\u0275\u0275property"]("routerLinkActive",g["\u0275\u0275pureFunction0"](11,w)),g["\u0275\u0275advance"](5),g["\u0275\u0275property"]("nombresColumnas",t.nombresColumnas)("urlApi",t.urlApi)("tituloReporte","Media list")("columnasData",t.columnasData)("puedeEditar",!1),g["\u0275\u0275advance"](2),g["\u0275\u0275property"]("showCancelButton",!1)("focusCancel",!0))},directives:[C.a,f.g,f.f,x.a,d.a],styles:[".titlePage[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto auto;justify-content:space-between}.titlePage[_ngcontent-%COMP%]   .linkAdicionar[_ngcontent-%COMP%]{height:32px;width:150px}"],data:{animation:[Object(h.a)()]}}),o),F=function(){function e(t){var n;_classCallCheck(this,e),this.rawFile=t;var i=(n=t)&&(n.nodeName||n.prop&&n.attr&&n.find)?t.value:t;this["_createFrom"+("string"==typeof i?"FakePath":"Object")](i)}return _createClass(e,[{key:"_createFromFakePath",value:function(e){this.lastModifiedDate=void 0,this.size=void 0,this.type="like/"+e.slice(e.lastIndexOf(".")+1).toLowerCase(),this.name=e.slice(e.lastIndexOf("/")+e.lastIndexOf("\\")+2)}},{key:"_createFromObject",value:function(e){this.size=e.size,this.type=e.type,this.name=e.name}}]),e}(),E=function(){function e(t,n,i){_classCallCheck(this,e),this.url="/",this.headers=[],this.withCredentials=!0,this.formData=[],this.isReady=!1,this.isUploading=!1,this.isUploaded=!1,this.isSuccess=!1,this.isCancel=!1,this.isError=!1,this.progress=0,this.index=void 0,this.uploader=t,this.some=n,this.options=i,this.file=new F(n),this._file=n,t.options&&(this.method=t.options.method||"POST",this.alias=t.options.itemAlias||"file"),this.url=t.options.url}return _createClass(e,[{key:"upload",value:function(){try{this.uploader.uploadItem(this)}catch(e){this.uploader._onCompleteItem(this,"",0,{}),this.uploader._onErrorItem(this,"",0,{})}}},{key:"cancel",value:function(){this.uploader.cancelItem(this)}},{key:"remove",value:function(){this.uploader.removeFromQueue(this)}},{key:"onBeforeUpload",value:function(){}},{key:"onBuildForm",value:function(e){return{form:e}}},{key:"onProgress",value:function(e){return{progress:e}}},{key:"onSuccess",value:function(e,t,n){return{response:e,status:t,headers:n}}},{key:"onError",value:function(e,t,n){return{response:e,status:t,headers:n}}},{key:"onCancel",value:function(e,t,n){return{response:e,status:t,headers:n}}},{key:"onComplete",value:function(e,t,n){return{response:e,status:t,headers:n}}},{key:"_onBeforeUpload",value:function(){this.isReady=!0,this.isUploading=!0,this.isUploaded=!1,this.isSuccess=!1,this.isCancel=!1,this.isError=!1,this.progress=0,this.onBeforeUpload()}},{key:"_onBuildForm",value:function(e){this.onBuildForm(e)}},{key:"_onProgress",value:function(e){this.progress=e,this.onProgress(e)}},{key:"_onSuccess",value:function(e,t,n){this.isReady=!1,this.isUploading=!1,this.isUploaded=!0,this.isSuccess=!0,this.isCancel=!1,this.isError=!1,this.progress=100,this.index=void 0,this.onSuccess(e,t,n)}},{key:"_onError",value:function(e,t,n){this.isReady=!1,this.isUploading=!1,this.isUploaded=!0,this.isSuccess=!1,this.isCancel=!1,this.isError=!0,this.progress=0,this.index=void 0,this.onError(e,t,n)}},{key:"_onCancel",value:function(e,t,n){this.isReady=!1,this.isUploading=!1,this.isUploaded=!1,this.isSuccess=!1,this.isCancel=!0,this.isError=!1,this.progress=0,this.index=void 0,this.onCancel(e,t,n)}},{key:"_onComplete",value:function(e,t,n){this.onComplete(e,t,n),this.uploader.options.removeAfterUpload&&this.remove()}},{key:"_prepareToUploading",value:function(){this.index=this.index||++this.uploader._nextIndex,this.isReady=!0}}]),e}(),A=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"getMimeClass",value:function(e){var t="application";return-1!==this.mime_psd.indexOf(e.type)?t="image":e.type.match("image.*")?t="image":e.type.match("video.*")?t="video":e.type.match("audio.*")?t="audio":"application/pdf"===e.type?t="pdf":-1!==this.mime_compress.indexOf(e.type)?t="compress":-1!==this.mime_doc.indexOf(e.type)?t="doc":-1!==this.mime_xsl.indexOf(e.type)?t="xls":-1!==this.mime_ppt.indexOf(e.type)&&(t="ppt"),"application"===t&&(t=this.fileTypeDetection(e.name)),t}},{key:"fileTypeDetection",value:function(e){var t={jpg:"image",jpeg:"image",tif:"image",psd:"image",bmp:"image",png:"image",nef:"image",tiff:"image",cr2:"image",dwg:"image",cdr:"image",ai:"image",indd:"image",pin:"image",cdp:"image",skp:"image",stp:"image","3dm":"image",mp3:"audio",wav:"audio",wma:"audio",mod:"audio",m4a:"audio",compress:"compress",zip:"compress",rar:"compress","7z":"compress",lz:"compress",z01:"compress",bz2:"compress",gz:"compress",pdf:"pdf",xls:"xls",xlsx:"xls",ods:"xls",mp4:"video",avi:"video",wmv:"video",mpg:"video",mts:"video",flv:"video","3gp":"video",vob:"video",m4v:"video",mpeg:"video",m2ts:"video",mov:"video",doc:"doc",docx:"doc",eps:"doc",txt:"doc",odt:"doc",rtf:"doc",ppt:"ppt",pptx:"ppt",pps:"ppt",ppsx:"ppt",odp:"ppt"},n=e.split(".");if(n.length<2)return"application";var i=n[n.length-1].toLowerCase();return void 0===t[i]?"application":t[i]}}]),e}();return e.mime_doc=["application/msword","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.wordprocessingml.template","application/vnd.ms-word.document.macroEnabled.12","application/vnd.ms-word.template.macroEnabled.12"],e.mime_xsl=["application/vnd.ms-excel","application/vnd.ms-excel","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.spreadsheetml.template","application/vnd.ms-excel.sheet.macroEnabled.12","application/vnd.ms-excel.template.macroEnabled.12","application/vnd.ms-excel.addin.macroEnabled.12","application/vnd.ms-excel.sheet.binary.macroEnabled.12"],e.mime_ppt=["application/vnd.ms-powerpoint","application/vnd.ms-powerpoint","application/vnd.ms-powerpoint","application/vnd.ms-powerpoint","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.presentationml.template","application/vnd.openxmlformats-officedocument.presentationml.slideshow","application/vnd.ms-powerpoint.addin.macroEnabled.12","application/vnd.ms-powerpoint.presentation.macroEnabled.12","application/vnd.ms-powerpoint.presentation.macroEnabled.12","application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],e.mime_psd=["image/photoshop","image/x-photoshop","image/psd","application/photoshop","application/psd","zz-application/zz-winassoc-psd"],e.mime_compress=["application/x-gtar","application/x-gcompress","application/compress","application/x-tar","application/x-rar-compressed","application/octet-stream","application/x-zip-compressed","application/zip-compressed","application/x-7z-compressed","application/gzip","application/x-bzip2"],e}(),O=function(){function e(t){_classCallCheck(this,e),this.isUploading=!1,this.queue=[],this.progress=0,this._nextIndex=0,this.options={autoUpload:!1,isHTML5:!0,filters:[],removeAfterUpload:!1,disableMultipart:!1,formatDataFunction:function(e){return e._file},formatDataFunctionIsAsync:!1},this.setOptions(t),this.response=new g.EventEmitter}return _createClass(e,[{key:"setOptions",value:function(e){this.options=Object.assign(this.options,e),this.authToken=this.options.authToken,this.authTokenHeader=this.options.authTokenHeader||"Authorization",this.autoUpload=this.options.autoUpload,this.options.filters.unshift({name:"queueLimit",fn:this._queueLimitFilter}),this.options.maxFileSize&&this.options.filters.unshift({name:"fileSize",fn:this._fileSizeFilter}),this.options.allowedFileType&&this.options.filters.unshift({name:"fileType",fn:this._fileTypeFilter}),this.options.allowedMimeType&&this.options.filters.unshift({name:"mimeType",fn:this._mimeTypeFilter});for(var t=0;t<this.queue.length;t++)this.queue[t].url=this.options.url}},{key:"addToQueue",value:function(e,t,n){var i,o=this,r=[],a=_createForOfIteratorHelper(e);try{for(a.s();!(i=a.n()).done;){var s=i.value;r.push(s)}}catch(p){a.e(p)}finally{a.f()}var l=this._getFilters(n),u=this.queue.length,c=[];r.map((function(e){t||(t=o.options);var n=new F(e);if(o._isValidFile(n,l,t)){var i=new E(o,e,t);c.push(i),o.queue.push(i),o._onAfterAddingFile(i)}else o._onWhenAddingFileFailed(n,l[o._failFilterIndex],t)})),this.queue.length!==u&&(this._onAfterAddingAll(c),this.progress=this._getTotalProgress()),this._render(),this.options.autoUpload&&this.uploadAll()}},{key:"removeFromQueue",value:function(e){var t=this.getIndexOfItem(e),n=this.queue[t];n.isUploading&&n.cancel(),this.queue.splice(t,1),this.progress=this._getTotalProgress()}},{key:"clearQueue",value:function(){for(;this.queue.length;)this.queue[0].remove();this.progress=0}},{key:"uploadItem",value:function(e){var t=this.getIndexOfItem(e),n=this.queue[t],i=this.options.isHTML5?"_xhrTransport":"_iframeTransport";n._prepareToUploading(),this.isUploading||(this.isUploading=!0,this[i](n))}},{key:"cancelItem",value:function(e){var t=this.getIndexOfItem(e),n=this.queue[t];n&&n.isUploading&&(this.options.isHTML5?n._xhr:n._form).abort()}},{key:"uploadAll",value:function(){var e=this.getNotUploadedItems().filter((function(e){return!e.isUploading}));e.length&&(e.map((function(e){return e._prepareToUploading()})),e[0].upload())}},{key:"cancelAll",value:function(){this.getNotUploadedItems().map((function(e){return e.cancel()}))}},{key:"isFile",value:function(e){return function(e){return File&&e instanceof File}(e)}},{key:"isFileLikeObject",value:function(e){return e instanceof F}},{key:"getIndexOfItem",value:function(e){return"number"==typeof e?e:this.queue.indexOf(e)}},{key:"getNotUploadedItems",value:function(){return this.queue.filter((function(e){return!e.isUploaded}))}},{key:"getReadyItems",value:function(){return this.queue.filter((function(e){return e.isReady&&!e.isUploading})).sort((function(e,t){return e.index-t.index}))}},{key:"destroy",value:function(){}},{key:"onAfterAddingAll",value:function(e){return{fileItems:e}}},{key:"onBuildItemForm",value:function(e,t){return{fileItem:e,form:t}}},{key:"onAfterAddingFile",value:function(e){return{fileItem:e}}},{key:"onWhenAddingFileFailed",value:function(e,t,n){return{item:e,filter:t,options:n}}},{key:"onBeforeUploadItem",value:function(e){return{fileItem:e}}},{key:"onProgressItem",value:function(e,t){return{fileItem:e,progress:t}}},{key:"onProgressAll",value:function(e){return{progress:e}}},{key:"onSuccessItem",value:function(e,t,n,i){return{item:e,response:t,status:n,headers:i}}},{key:"onErrorItem",value:function(e,t,n,i){return{item:e,response:t,status:n,headers:i}}},{key:"onCancelItem",value:function(e,t,n,i){return{item:e,response:t,status:n,headers:i}}},{key:"onCompleteItem",value:function(e,t,n,i){return{item:e,response:t,status:n,headers:i}}},{key:"onCompleteAll",value:function(){}},{key:"_mimeTypeFilter",value:function(e){return!(this.options.allowedMimeType&&-1===this.options.allowedMimeType.indexOf(e.type))}},{key:"_fileSizeFilter",value:function(e){return!(this.options.maxFileSize&&e.size>this.options.maxFileSize)}},{key:"_fileTypeFilter",value:function(e){return!(this.options.allowedFileType&&-1===this.options.allowedFileType.indexOf(A.getMimeClass(e)))}},{key:"_onErrorItem",value:function(e,t,n,i){e._onError(t,n,i),this.onErrorItem(e,t,n,i)}},{key:"_onCompleteItem",value:function(e,t,n,i){e._onComplete(t,n,i),this.onCompleteItem(e,t,n,i);var o=this.getReadyItems()[0];this.isUploading=!1,o?o.upload():(this.onCompleteAll(),this.progress=this._getTotalProgress(),this._render())}},{key:"_headersGetter",value:function(e){return function(t){return t?e[t.toLowerCase()]||void 0:e}}},{key:"_xhrTransport",value:function(e){var t,n=this,i=this,o=e._xhr=new XMLHttpRequest;if(this._onBeforeUploadItem(e),"number"!=typeof e._file.size)throw new TypeError("The file specified is no longer valid");if(this.options.disableMultipart)t=this.options.formatDataFunction(e);else{t=new FormData,this._onBuildItemForm(e,t);var r=function(){return t.append(e.alias,e._file,e.file.name)};this.options.parametersBeforeFiles||r(),void 0!==this.options.additionalParameter&&Object.keys(this.options.additionalParameter).forEach((function(i){var o=n.options.additionalParameter[i];"string"==typeof o&&o.indexOf("{{file_name}}")>=0&&(o=o.replace("{{file_name}}",e.file.name)),t.append(i,o)})),this.options.parametersBeforeFiles&&r()}if(o.upload.onprogress=function(t){var i=Math.round(t.lengthComputable?100*t.loaded/t.total:0);n._onProgressItem(e,i)},o.onload=function(){var t=n._parseHeaders(o.getAllResponseHeaders()),i=n._transformResponse(o.response,t);n["_on"+(n._isSuccessCode(o.status)?"Success":"Error")+"Item"](e,i,o.status,t),n._onCompleteItem(e,i,o.status,t)},o.onerror=function(){var t=n._parseHeaders(o.getAllResponseHeaders()),i=n._transformResponse(o.response,t);n._onErrorItem(e,i,o.status,t),n._onCompleteItem(e,i,o.status,t)},o.onabort=function(){var t=n._parseHeaders(o.getAllResponseHeaders()),i=n._transformResponse(o.response,t);n._onCancelItem(e,i,o.status,t),n._onCompleteItem(e,i,o.status,t)},o.open(e.method,e.url,!0),o.withCredentials=e.withCredentials,this.options.headers){var a,s=_createForOfIteratorHelper(this.options.headers);try{for(s.s();!(a=s.n()).done;){var l=a.value;o.setRequestHeader(l.name,l.value)}}catch(d){s.e(d)}finally{s.f()}}if(e.headers.length){var u,c=_createForOfIteratorHelper(e.headers);try{for(c.s();!(u=c.n()).done;){var p=u.value;o.setRequestHeader(p.name,p.value)}}catch(d){c.e(d)}finally{c.f()}}this.authToken&&o.setRequestHeader(this.authTokenHeader,this.authToken),o.onreadystatechange=function(){o.readyState==XMLHttpRequest.DONE&&i.response.emit(o.responseText)},this.options.formatDataFunctionIsAsync?t.then((function(e){return o.send(JSON.stringify(e))})):o.send(t),this._render()}},{key:"_getTotalProgress",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(this.options.removeAfterUpload)return e;var t=this.getNotUploadedItems().length,n=100/this.queue.length;return Math.round((t?this.queue.length-t:this.queue.length)*n+e*n/100)}},{key:"_getFilters",value:function(e){if(!e)return this.options.filters;if(Array.isArray(e))return e;if("string"==typeof e){var t=e.match(/[^\s,]+/g);return this.options.filters.filter((function(e){return-1!==t.indexOf(e.name)}))}return this.options.filters}},{key:"_render",value:function(){}},{key:"_queueLimitFilter",value:function(){return void 0===this.options.queueLimit||this.queue.length<this.options.queueLimit}},{key:"_isValidFile",value:function(e,t,n){var i=this;return this._failFilterIndex=-1,!t.length||t.every((function(t){return i._failFilterIndex++,t.fn.call(i,e,n)}))}},{key:"_isSuccessCode",value:function(e){return e>=200&&e<300||304===e}},{key:"_transformResponse",value:function(e,t){return e}},{key:"_parseHeaders",value:function(e){var t,n,i,o={};return e?(e.split("\n").map((function(e){i=e.indexOf(":"),t=e.slice(0,i).trim().toLowerCase(),n=e.slice(i+1).trim(),t&&(o[t]=o[t]?o[t]+", "+n:n)})),o):o}},{key:"_onWhenAddingFileFailed",value:function(e,t,n){this.onWhenAddingFileFailed(e,t,n)}},{key:"_onAfterAddingFile",value:function(e){this.onAfterAddingFile(e)}},{key:"_onAfterAddingAll",value:function(e){this.onAfterAddingAll(e)}},{key:"_onBeforeUploadItem",value:function(e){e._onBeforeUpload(),this.onBeforeUploadItem(e)}},{key:"_onBuildItemForm",value:function(e,t){e._onBuildForm(t),this.onBuildItemForm(e,t)}},{key:"_onProgressItem",value:function(e,t){var n=this._getTotalProgress(t);this.progress=n,e._onProgress(t),this.onProgressItem(e,t),this.onProgressAll(n),this._render()}},{key:"_onSuccessItem",value:function(e,t,n,i){e._onSuccess(t,n,i),this.onSuccessItem(e,t,n,i)}},{key:"_onCancelItem",value:function(e,t,n,i){e._onCancel(t,n,i),this.onCancelItem(e,t,n,i)}}]),e}(),T=((l=function(){function e(t){_classCallCheck(this,e),this.onFileSelected=new g.EventEmitter,this.element=t}return _createClass(e,[{key:"getOptions",value:function(){return this.uploader.options}},{key:"getFilters",value:function(){return{}}},{key:"isEmptyAfterSelection",value:function(){return!!this.element.nativeElement.attributes.multiple}},{key:"onChange",value:function(){var e=this.element.nativeElement.files,t=this.getOptions(),n=this.getFilters();this.uploader.addToQueue(e,t,n),this.onFileSelected.emit(e),this.isEmptyAfterSelection()&&(this.element.nativeElement.value="")}}]),e}()).\u0275fac=function(e){return new(e||l)(g["\u0275\u0275directiveInject"](g.ElementRef))},l.\u0275dir=g["\u0275\u0275defineDirective"]({type:l,selectors:[["","ng2FileSelect",""]],hostBindings:function(e,t){1&e&&g["\u0275\u0275listener"]("change",(function(){return t.onChange()}))},inputs:{uploader:"uploader"},outputs:{onFileSelected:"onFileSelected"}}),l),M=((s=function(){function e(t){_classCallCheck(this,e),this.fileOver=new g.EventEmitter,this.onFileDrop=new g.EventEmitter,this.element=t}return _createClass(e,[{key:"getOptions",value:function(){return this.uploader.options}},{key:"getFilters",value:function(){return{}}},{key:"onDrop",value:function(e){var t=this._getTransfer(e);if(t){var n=this.getOptions(),i=this.getFilters();this._preventAndStop(e),this.uploader.addToQueue(t.files,n,i),this.fileOver.emit(!1),this.onFileDrop.emit(t.files)}}},{key:"onDragOver",value:function(e){var t=this._getTransfer(e);this._haveFiles(t.types)&&(t.dropEffect="copy",this._preventAndStop(e),this.fileOver.emit(!0))}},{key:"onDragLeave",value:function(e){this.element&&e.currentTarget===this.element[0]||(this._preventAndStop(e),this.fileOver.emit(!1))}},{key:"_getTransfer",value:function(e){return e.dataTransfer?e.dataTransfer:e.originalEvent.dataTransfer}},{key:"_preventAndStop",value:function(e){e.preventDefault(),e.stopPropagation()}},{key:"_haveFiles",value:function(e){return!!e&&(e.indexOf?-1!==e.indexOf("Files"):!!e.contains&&e.contains("Files"))}}]),e}()).\u0275fac=function(e){return new(e||s)(g["\u0275\u0275directiveInject"](g.ElementRef))},s.\u0275dir=g["\u0275\u0275defineDirective"]({type:s,selectors:[["","ng2FileDrop",""]],hostBindings:function(e,t){1&e&&g["\u0275\u0275listener"]("drop",(function(e){return t.onDrop(e)}))("dragover",(function(e){return t.onDragOver(e)}))("dragleave",(function(e){return t.onDragLeave(e)}))},inputs:{uploader:"uploader"},outputs:{fileOver:"fileOver",onFileDrop:"onFileDrop"}}),s),P=((a=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=g["\u0275\u0275defineNgModule"]({type:a}),a.\u0275inj=g["\u0275\u0275defineInjector"]({factory:function(e){return new(e||a)},imports:[[u.CommonModule]]}),a),U=((r=function(){function e(t,n){_classCallCheck(this,e),this.el=t,this.renderer=n}return _createClass(e,[{key:"ngOnChanges",value:function(e){var t=new FileReader,n=this.el;if(t.onloadend=function(e){n.nativeElement.src=t.result},this.image)return t.readAsDataURL(this.image)}}]),e}()).\u0275fac=function(e){return new(e||r)(g["\u0275\u0275directiveInject"](g.ElementRef),g["\u0275\u0275directiveInject"](g.Renderer2))},r.\u0275dir=g["\u0275\u0275defineDirective"]({type:r,selectors:[["img","imgPreview",""]],inputs:{image:"image"},features:[g["\u0275\u0275NgOnChangesFeature"]]}),r),D=["confirmSwal"];function q(e,t){1&e&&(g["\u0275\u0275elementStart"](0,"span"),g["\u0275\u0275element"](1,"i",34),g["\u0275\u0275elementEnd"]())}function j(e,t){1&e&&(g["\u0275\u0275elementStart"](0,"span"),g["\u0275\u0275element"](1,"i",35),g["\u0275\u0275elementEnd"]())}var B=function(e){return{width:e}};function R(e,t){if(1&e&&(g["\u0275\u0275elementStart"](0,"tr"),g["\u0275\u0275elementStart"](1,"td"),g["\u0275\u0275element"](2,"img",27),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](3,"td"),g["\u0275\u0275elementStart"](4,"strong"),g["\u0275\u0275text"](5),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](6,"td"),g["\u0275\u0275text"](7),g["\u0275\u0275pipe"](8,"number"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](9,"td"),g["\u0275\u0275elementStart"](10,"div",28),g["\u0275\u0275element"](11,"div",29),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](12,"td",30),g["\u0275\u0275template"](13,q,2,0,"span",11),g["\u0275\u0275template"](14,j,2,0,"span",11),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](15,"td",31),g["\u0275\u0275elementStart"](16,"button",32),g["\u0275\u0275listener"]("click",(function(){return t.$implicit.upload()})),g["\u0275\u0275element"](17,"span",24),g["\u0275\u0275text"](18," Subir "),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](19,"button",33),g["\u0275\u0275listener"]("click",(function(){return t.$implicit.remove()})),g["\u0275\u0275element"](20,"span",26),g["\u0275\u0275text"](21," Eliminar "),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;g["\u0275\u0275advance"](2),g["\u0275\u0275property"]("image",null==n?null:n._file),g["\u0275\u0275advance"](3),g["\u0275\u0275textInterpolate"](null==n?null:null==n.file?null:n.file.name),g["\u0275\u0275advance"](2),g["\u0275\u0275textInterpolate1"]("",g["\u0275\u0275pipeBind2"](8,7,(null==n?null:null==n.file?null:n.file.size)/1024/1024,".2")," MB"),g["\u0275\u0275advance"](4),g["\u0275\u0275property"]("ngStyle",g["\u0275\u0275pureFunction1"](10,B,n.progress+"%")),g["\u0275\u0275advance"](2),g["\u0275\u0275property"]("ngIf",n.isSuccess),g["\u0275\u0275advance"](1),g["\u0275\u0275property"]("ngIf",n.isError),g["\u0275\u0275advance"](2),g["\u0275\u0275property"]("disabled",n.isReady||n.isUploading||n.isSuccess)}}function z(e,t){if(1&e){var n=g["\u0275\u0275getCurrentView"]();g["\u0275\u0275elementContainerStart"](0),g["\u0275\u0275elementStart"](1,"div",1),g["\u0275\u0275elementStart"](2,"div",14),g["\u0275\u0275elementStart"](3,"table",15),g["\u0275\u0275elementStart"](4,"thead"),g["\u0275\u0275elementStart"](5,"tr"),g["\u0275\u0275elementStart"](6,"th",16),g["\u0275\u0275text"](7,"Imagen"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](8,"th",17),g["\u0275\u0275text"](9,"Nombre"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](10,"th"),g["\u0275\u0275text"](11,"Tama\xf1o"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](12,"th"),g["\u0275\u0275text"](13,"Progreso"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](14,"th"),g["\u0275\u0275text"](15,"Estado"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](16,"th",18),g["\u0275\u0275text"](17,"Acciones"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](18,"tbody"),g["\u0275\u0275template"](19,R,22,12,"tr",19),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275element"](20,"br"),g["\u0275\u0275elementStart"](21,"div",1),g["\u0275\u0275elementStart"](22,"div",14),g["\u0275\u0275element"](23,"div",20),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275element"](24,"br"),g["\u0275\u0275elementStart"](25,"div",21),g["\u0275\u0275elementStart"](26,"div",22),g["\u0275\u0275elementStart"](27,"button",23),g["\u0275\u0275listener"]("click",(function(){return g["\u0275\u0275restoreView"](n),g["\u0275\u0275nextContext"]().uploader.uploadAll()})),g["\u0275\u0275element"](28,"span",24),g["\u0275\u0275text"](29," Subir todas "),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](30,"button",25),g["\u0275\u0275listener"]("click",(function(){return g["\u0275\u0275restoreView"](n),g["\u0275\u0275nextContext"]().uploader.clearQueue()})),g["\u0275\u0275element"](31,"span",26),g["\u0275\u0275text"](32," Eliminar todas "),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementContainerEnd"]()}if(2&e){var i=g["\u0275\u0275nextContext"]();g["\u0275\u0275advance"](19),g["\u0275\u0275property"]("ngForOf",i.uploader.queue),g["\u0275\u0275advance"](4),g["\u0275\u0275property"]("ngStyle",g["\u0275\u0275pureFunction1"](4,B,i.uploader.progress+"%")),g["\u0275\u0275advance"](4),g["\u0275\u0275property"]("disabled",!i.uploader.getNotUploadedItems().length),g["\u0275\u0275advance"](3),g["\u0275\u0275property"]("disabled",!i.uploader.queue.length)}}var H,L,N=function(e){return{"nv-file-over":e}},Q=[{path:"",component:I},{path:"adicionar-medias",component:(H=function(){function e(){var t=this;_classCallCheck(this,e),this.urlApi=v.a.apiUrl+"/media",this.uploader=new O({url:this.urlApi,authToken:"Bearer "+localStorage.getItem("token"),disableMultipart:!1,headers:[{name:"Access-Control-Allow-Origin",value:"*"},{name:"Access-Control-Allow-Methods",value:"POST, OPTIONS, GET"},{name:"Access-Control-Allow-Credentials",value:"true"}],formatDataFunctionIsAsync:!1}),this.uploader.onAfterAddingFile=function(e){e.withCredentials=!1},this.hasBaseDropZoneOver=!1,this.response="",this.uploader.response.subscribe((function(e){return t.response=e})),this.uploader.onCompleteItem=function(e,n,i,o){console.log(i),200==i&&t.confirmSwal.show()}}return _createClass(e,[{key:"onFileSelected",value:function(e){}},{key:"fileOverBase",value:function(e){this.hasBaseDropZoneOver=e}},{key:"ngOnInit",value:function(){}},{key:"cerrarVentana",value:function(){}}]),e}(),H.\u0275fac=function(e){return new(e||H)},H.\u0275cmp=g["\u0275\u0275defineComponent"]({type:H,selectors:[["app-adicionar-medias"]],viewQuery:function(e,t){var n;1&e&&g["\u0275\u0275staticViewQuery"](D,!0),2&e&&g["\u0275\u0275queryRefresh"](n=g["\u0275\u0275loadQuery"]())&&(t.confirmSwal=n.first)},decls:23,vars:12,consts:[[3,"heading","icon"],[1,"row"],[1,"col-9"],["ng2FileDrop","",1,"well","my-drop-zone",3,"ngClass","uploader","fileOver","onFileDrop"],[1,"col-3","align-self-center"],[1,"btnCargarArchivos"],["type","button",1,"btn","btn-primary",3,"click"],[1,"fa","fa-image"],["hidden","","type","file","ng2FileSelect","","multiple","",3,"uploader","onFileSelected"],["fileInput",""],[1,"totalImagenes"],[4,"ngIf"],["title","Informaci\xf3n","text","Las im\xe1genes han sido subidas correctamente","type","success",3,"showCancelButton","focusCancel","confirm"],["confirmSwal",""],[1,"col-12"],[1,"table","table-bordered"],["width","110px"],["width","20%"],["width","15%"],[4,"ngFor","ngForOf"],["role","progressbar",1,"progress","progress-bar",3,"ngStyle"],[1,"row","justify-content-end"],[1,"col-6","botonesGenerales"],["type","button",1,"btn","btn-success","btn-s",3,"disabled","click"],[1,"fa","fa-upload"],["type","button",1,"btn","btn-danger","btn-s",3,"disabled","click"],[1,"fa","fa-trash"],["src","","imgPreview","",1,"imageTabla",3,"image"],[1,"progress",2,"margin-bottom","0"],["role","progressbar",1,"progress-bar",3,"ngStyle"],[1,"text-center"],["nowrap","",1,"botonesFila"],["type","button",1,"btn","btn-success","btn-sm",3,"disabled","click"],["type","button",1,"btn","btn-danger","btn-sm",3,"click"],[1,"fa","fa-check-circle"],[1,"fa","fa-remove"]],template:function(e,t){if(1&e){var n=g["\u0275\u0275getCurrentView"]();g["\u0275\u0275elementStart"](0,"div"),g["\u0275\u0275element"](1,"app-page-header",0),g["\u0275\u0275elementStart"](2,"div",1),g["\u0275\u0275elementStart"](3,"div",2),g["\u0275\u0275elementStart"](4,"div",3),g["\u0275\u0275listener"]("fileOver",(function(e){return t.fileOverBase(e)}))("onFileDrop",(function(e){return t.onFileSelected(e)})),g["\u0275\u0275text"](5," Arrastre y suelte las im\xe1genes aqu\xed "),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](6,"div",4),g["\u0275\u0275elementStart"](7,"div",5),g["\u0275\u0275elementStart"](8,"button",6),g["\u0275\u0275listener"]("click",(function(){return g["\u0275\u0275restoreView"](n),g["\u0275\u0275reference"](12).click()})),g["\u0275\u0275element"](9,"i",7),g["\u0275\u0275text"](10," O seleccione los archivos "),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](11,"input",8,9),g["\u0275\u0275listener"]("onFileSelected",(function(e){return t.onFileSelected(e)})),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275element"](13,"br"),g["\u0275\u0275element"](14,"br"),g["\u0275\u0275elementStart"](15,"strong",10),g["\u0275\u0275text"](16),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275element"](17,"br"),g["\u0275\u0275template"](18,z,33,6,"ng-container",11),g["\u0275\u0275elementEnd"](),g["\u0275\u0275element"](19,"br"),g["\u0275\u0275element"](20,"br"),g["\u0275\u0275elementStart"](21,"swal",12,13),g["\u0275\u0275listener"]("confirm",(function(){return t.cerrarVentana()})),g["\u0275\u0275elementEnd"]()}2&e&&(g["\u0275\u0275property"]("@routerTransition",void 0),g["\u0275\u0275advance"](1),g["\u0275\u0275property"]("heading","Adicionar medias")("icon","fa-pencil-square"),g["\u0275\u0275advance"](3),g["\u0275\u0275property"]("ngClass",g["\u0275\u0275pureFunction1"](10,N,t.hasBaseDropZoneOver))("uploader",t.uploader),g["\u0275\u0275advance"](7),g["\u0275\u0275property"]("uploader",t.uploader),g["\u0275\u0275advance"](5),g["\u0275\u0275textInterpolate1"]("Total de im\xe1genes: ",null==t.uploader?null:null==t.uploader.queue?null:t.uploader.queue.length,""),g["\u0275\u0275advance"](2),g["\u0275\u0275property"]("ngIf",t.uploader.queue.length>0),g["\u0275\u0275advance"](3),g["\u0275\u0275property"]("showCancelButton",!1)("focusCancel",!0))},directives:[C.a,M,u.NgClass,T,u.NgIf,d.a,u.NgForOf,u.NgStyle,U],pipes:[u.DecimalPipe],styles:[".my-drop-zone[_ngcontent-%COMP%]{color:#ccc;border-style:dashed;border-color:#ccc;line-height:150px;text-align:center;height:150px}.nv-file-over[_ngcontent-%COMP%]{border:3px dotted red}.another-file-over-class[_ngcontent-%COMP%]{border:3px dotted green}.botonesGenerales[_ngcontent-%COMP%]{text-align:right}.botonesGenerales[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:5px}.botonesFila[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:3px}.imageTabla[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover;width:100px;height:60px}.totalImagenes[_ngcontent-%COMP%]{background-color:#f5f2f2;border:2px dashed #9e9c9c;padding:16px;height:100%;width:100%}"],data:{animation:[Object(h.a)()]}}),H)}],V=((L=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=g["\u0275\u0275defineNgModule"]({type:L}),L.\u0275inj=g["\u0275\u0275defineInjector"]({factory:function(e){return new(e||L)},imports:[[f.h.forChild(Q)],f.h]}),L);n.d(t,"MediasModule",(function(){return G}));var W,G=((W=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=g["\u0275\u0275defineNgModule"]({type:W}),W.\u0275inj=g["\u0275\u0275defineInjector"]({factory:function(e){return new(e||W)},imports:[[u.CommonModule,V,c.b,p.v,p.k,d.b,m.a,P]]}),W)}}]);