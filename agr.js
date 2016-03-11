
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

    
    
     
    
    
