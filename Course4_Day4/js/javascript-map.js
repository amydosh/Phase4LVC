let userMap = new Map();
console.log(userMap);

// Note, you can NOT use the obj below as a map
let userObj = {
    "id":1001,
    "name":"Andie Mydosh",
    "age":31,
}

// Use a map to set key-value pairs
userMap.set("id",980015);
userMap.set(100, "Andie Mydosh");
userMap.set(null,980015);
userMap.set("id",null);
userMap.set(null,null);
userMap.set('a',true)
userMap.set({id:1000},{id:1000,name:'Andie Mydosh',email:'andie.mydosh@gmail.com'})

console.log(userMap);

// Fetch data from map:
console.log(userMap.get("id"));
console.log(userMap.get(null));
console.log(userMap.get(100));

// Can get all the keys using .keys
console.log("Keys: ",userMap.keys());
// Can get all values using .values
console.log("Values: ",userMap.values());

// Iterate over the map:
for(let key of userMap.keys()){
    console.log("Key: ",key," values: ", userMap.get(key));
}