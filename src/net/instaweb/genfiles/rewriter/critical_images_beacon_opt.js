(function(){var d=encodeURIComponent,f=window,h=document,k="documentElement",l="length",n="prototype",p="body",q="&",t="&ci=",u=",",v="?",w="Content-Type",x="Microsoft.XMLHTTP",y="Msxml2.XMLHTTP",z="POST",A="application/x-www-form-urlencoded",B="img",C="input",D="load",E="oh=",F="on",G="pagespeed_url_hash",H="url=",I=function(a,b,e){if(a.addEventListener)a.addEventListener(b,e,!1);else if(a.attachEvent)a.attachEvent(F+b,e);else{var c=a[F+b];a[F+b]=function(){e.call(this);c&&c.call(this)}}};f.pagespeed=f.pagespeed||{};var J=f.pagespeed,K=function(a,b,e){this.c=a;this.d=b;this.e=e;this.b=this.f();this.a={}};K[n].f=function(){return{height:f.innerHeight||h[k].clientHeight||h[p].clientHeight,width:f.innerWidth||h[k].clientWidth||h[p].clientWidth}};K[n].h=function(a){a=a.getBoundingClientRect();return{top:a.top+(void 0!==f.pageYOffset?f.pageYOffset:(h[k]||h[p].parentNode||h[p]).scrollTop),left:a.left+(void 0!==f.pageXOffset?f.pageXOffset:(h[k]||h[p].parentNode||h[p]).scrollLeft)}};
K[n].g=function(a){if(0>=a.offsetWidth&&0>=a.offsetHeight)return!1;a=this.h(a);var b=a.top.toString()+u+a.left.toString();if(this.a.hasOwnProperty(b))return!1;this.a[b]=!0;return a.top<=this.b.height&&a.left<=this.b.width};
K[n].j=function(){for(var a=[B,C],b=[],e={},c=0;c<a[l];++c)for(var r=h.getElementsByTagName(a[c]),m=0;m<r[l];++m){var s=r[m].getAttribute(G);s&&(r[m].getBoundingClientRect&&this.g(r[m]))&&!(s in e)&&(b.push(s),e[s]=!0)}if(0!=b[l]){a=E+this.e;a+=t+d(b[0]);for(c=1;c<b[l];++c){e=u+d(b[c]);if(131072<a[l]+e[l])break;a+=e}J.criticalImagesBeaconData=a;var b=this.c,c=this.d,g;if(f.XMLHttpRequest)g=new XMLHttpRequest;else if(f.ActiveXObject)try{g=new ActiveXObject(y)}catch(L){try{g=new ActiveXObject(x)}catch(M){}}g&&
(g.open(z,b+(-1==b.indexOf(v)?v:q)+H+d(c)),g.setRequestHeader(w,A),g.send(a))}};J.i=function(a,b,e){var c=new K(a,b,e);I(f,D,function(){f.setTimeout(function(){c.j()},0)})};J.criticalImagesBeaconInit=J.i;})();