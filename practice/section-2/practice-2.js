'use strict';

function countSameElements(collection) {
 var result=new Array();
 var pattern = new RegExp("[-]");
   for (var i=0;i<collection.length;){
    if(pattern.test(collection[i])){
      console.log("6666");
      var num= collection[i].replace(/[^0-9]/ig,"");
      console.log(num);
      var key=collection[i].replace(/[^a-z]+/ig,"");
      console.log(key);
      result.push({
       		  key:key,
       		  count:parseInt(num)
       	  })
      break;
    }else{
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


   }
   console.log(result);
   return result;

}
