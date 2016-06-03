(function(){

 function toArray(obj,s,e){//start,end
  var k,o=obj,p='length';
  return (o?((p in o)?o.length>0:(k=KeysOf(o),k[p]>0?(o=k.map(p=>o[p]),true):false)):false)?Slice(o,s,e):[];
 };

 const KeysOf=Object.keys;
 const Call=Function.prototype.call;
 const Slice=Call.bind(Array.prototype.slice);

})();
