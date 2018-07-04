'use strict';

function countSameElements(collection) {
  var result=new Array();
  for (var i=0;i<collection.length;){
	  var count=0;
	  for(var j=i;j<collection.length;j++){
		  if(collection[i]==collection[j]){
			  count++;
		  }

	  }
	  result.push({
		  key:collection[i],
		  count:count
	  })
	  i+=count;
  }
  console.log(result);
  return result;

}
