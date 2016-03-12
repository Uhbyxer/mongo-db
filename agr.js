
db.posts.aggregate([
    {$match: {tags: "JavaScript"}},
    {$group: {_id: null, views: {$sum: "$views"}}}
]);
db.posts.find({tags: "JavaScript"});

db.posts.aggregate([
    {$match: {date: {$gte: "2015", $lte: "2016"}}}
]);    
    
db.posts.aggregate([
    {$match: {date: {$gte: "2015", $lte: "2016"}}},
    {$project: {title: true}}
]);       
    
//create new field isDraft based on other
db.posts.aggregate([
    {$match: {date: {$gte: "2015", $lte: "2016"}}},
    {$project: {title: true, isDraft: "$options.isDraft"}}
]);    

//wit weather
db.weather.find();    
    
//temperature in t
db.weather.aggregate(
    [
    {$project: {t: "$temperature"}}
    ]
);
  
//temperature into F from t (*only 1.8)   
db.weather.aggregate(
    [
    {$project: {t: {$multiply: [ "$temperature", 1.8 ]}}}
    ]
);    
    
  
//temperature into F from t (*only 1.8 + 32)   
  
db.weather.aggregate(
    [
    {$project: {tF: {$add:[ {$multiply: [ "$temperature", 1.8 ]} , 32]}}}
    ]
);    
    
//the same but 2 steps against 1
db.weather.aggregate(
    [
    {$project: {temp: {$multiply: [ "$temperature", 1.8 ]}}},
    {$project: {tF: {$add: ["$temp",32]}}}
    ]
);  

//for strings date format (substr transform ints into strings)
db.weather.aggregate([
    {$project: {date: {$concat: [{$substr: ["$year", 0, 4]}, "-", {$substr: ["$month", 0, 4]}, "-",{$substr: ["$day", 0, 4]}]}}}
]);    
    
//max temperature of the month
db.weather.aggregate([
    {$group: {_id: "$month", maxT: {$max: "$temperature"}}}
]);    
    
//unwind - flat Array(   
// find most freq tag
//1. get tags
db.posts.aggregate([
    {$project: {tags: true}}
]);   

//2. flat tags
db.posts.aggregate([
    {$project: {tags: true}},
    {$unwind: "$tags"}
]);     

//3.  grouping by tags
db.posts.aggregate([
    {$project: {tags: true}},
    {$unwind: "$tags"},
    {$group : {_id: "$tags", count: {$sum:1}}}
]);   
  
//4. sorting by conunt
db.posts.aggregate([
    {$project: {tags: true}},
    {$unwind: "$tags"},
    {$group : {_id: "$tags", count: {$sum:1}}},
    {$sort: {count: 1}}
]);     
    
 //5. getting the last
db.posts.aggregate([
    {$project: {tags: true}},
    {$unwind: "$tags"},
    {$group : {_id: "$tags", count: {$sum:1}}},
    {$sort: {count: 1}},
    {}
]);    
    
    