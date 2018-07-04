'use strict';

function countSameElements(collection) {
	var arr = [];
	var arr1=new Array(collection.length);
	for(var i=0;i<arr1.length;i++){
		if(collection[i].length==1)
			arr1[i]=1;
		else{
			var num1_1=collection[i].indexOf('[');
			var num1_2=collection[i].indexOf(']');
			if(num1_1>-1&&num1_2>-1){
				arr1[i]=parseInt(collection[i].slice(num1_1+1,num1_2));
				collection[i]=collection[i].slice(0,1);
			}	
			var num2=collection[i].indexOf(':');
			if(num2>-1){
				arr1[i]=parseInt(collection[i].slice(num2+1));
				collection[i]=collection[i].slice(0,1);
			}
			var num3=collection[i].indexOf('-');
			if(num3>-1){
				arr1[i]=parseInt(collection[i].slice(num3+1));
				collection[i]=collection[i].slice(0,1);
			}
		}
	}
	for (var i = 0; i < collection.length;) {
		var count = 0;
		var count1 = 0;
		for (var j = i; j < collection.length; j++) {
			if (collection[i] == collection[j]) {
				count+=arr1[j];
				++count1;
			}
		}
		arr.push({
			name: collection[i],
			summary: count
		})
		i+=count1;
	}

	return arr;
}
