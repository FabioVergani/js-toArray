# js-toArray
//Obj2arr
(function(){

 function toArray(obj,s,e){//start,end
  var k,o=obj,p='length';
  return (o?((p in o)?o.length>0:(k=KeysOf(o),k[p]>0?(o=k.map(p=>o[p]),true):false)):false)?Slice(o,s,e):[];
 };

 const KeysOf=Object.keys;
 const Call=Function.prototype.call;
 const Slice=Call.bind(Array.prototype.slice);


 console.dir(Slice({
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    length: 5
},3));


 console.dir(Slice({
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    length: 4
},3));

 console.dir(toArray({
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    length: 4
},3));

 console.dir(toArray({
    '0': 'zerox',
    '1': 'onex',
    '2': 'twox',
    '3': 'threex',
    '4': 'fourx',
},3));


 console.dir(toArray(false,3));


})();
