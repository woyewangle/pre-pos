'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var result = new Array();
  var b = objectB.value.toString();
  for(var i=0;i<collectionA.length;i++){
    if(b.indexOf(collectionA[i].key.toString())>-1){
      collectionA[i].count--;
    }
  }
  return collectionA;
}
