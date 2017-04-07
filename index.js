function iterativeLog(array){
  array.forEach(function(element, index, array){console.log(`${index}: ${element}`)});
}

function iterate(callback){
 var the_array = ["rob", "jest", "rondon"];
 the_array.forEach(callback);
 return the_array;
}

function doToArray(array, callback){
  array.forEach(callback);
}
