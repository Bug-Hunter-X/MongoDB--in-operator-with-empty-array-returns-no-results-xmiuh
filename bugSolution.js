```javascript
//Correct usage of $in operator handling empty array
const filterArray = [1,2,3];

db.collection.find(filterArray.length > 0 ? {field: {$in: filterArray}} : {});
```