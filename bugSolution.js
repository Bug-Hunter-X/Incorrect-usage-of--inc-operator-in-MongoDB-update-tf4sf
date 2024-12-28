```javascript
//Correct usage of $inc operator for updating a field
db.collection.updateOne({"_id":1},{$inc:{ "counter": 1}});
```