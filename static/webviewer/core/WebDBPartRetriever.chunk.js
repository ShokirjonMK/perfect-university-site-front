/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[12],{575:function(xa,ta,h){h.r(ta);var ra=h(0),na=h(1);h.n(na);xa=h(117);h=h(486);xa=function(pa){function ja(ka,ea,y){ea=pa.call(this,ka,ea,y)||this;ea.db=ka;return ea}Object(ra.c)(ja,pa);ja.prototype.request=function(ka){var ea=this;Object(na.each)(ka,function(y){ea.db.get(y,function(z,r,n){return z?ea.trigger("partReady.partRetriever",{Lb:y,error:z}):ea.trigger("partReady.partRetriever",{Lb:y,data:r,bl:!1,di:!1,error:null,qe:n})})})};
ja.prototype.Tx=function(ka){ka()};return ja}(xa.a);Object(h.a)(xa);Object(h.b)(xa);ta["default"]=xa}}]);}).call(this || window)
