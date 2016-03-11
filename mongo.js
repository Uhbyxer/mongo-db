//all db-s
show dbs

show collections

db.first.insert({"say hello": "hello"});

db.first.find();

db.first.find().pretty();

//use dbase2;
//db.first.insert({"say hello": "hello"});
var colors = ["red", "green", "blue"];
for(var i=0; i<10; i++) {
	db.points.insert({
		"coordinates" : {
			"x": Math.floor(Math.random()*100),
		"y": Math.floor(Math.random()*100)},
		
			"color" : colors[i%3]
	})
}

//CRUD
doc = {city: "Minsk", population: 1837000}
db.populdations.insert(doc);

//posts DB
db.posts.find();

post = {

        title: "NEW",
        body: "Crud...",
        date: "2015-02-16T14:56:00.000Z",
        options: {isDraft: true, version: 1},
        tags: ["mongo", "video", "youtube", "lecture"]
} 
db.posts.insert(post);

var blogjson =
[
  {
    "_id": 1,
    "title": "Поддержим выпуск видео лекций по MongoDB",
    "body": "C выхода первой видео-лекции по MongoDB прошло пол года, и я получил некоторое количество положительных отзывов...",
    "date": "2015-02-16T14:56:00.000Z",
    "options": {
      "isDraft": false,
      "author": "Alex"
    },
    "tags": [
      "mongo",
      "donate"
    ]
  },
  {
    "_id": 2,
    "title": "Вводная лекция",
    "body": "В которой Вы узнаете что такое MongoDB. В чем ее основые преимущества и недостатки перед реляционными базами данных. Что такое формат JSON и как MongoDB хранит данные...",
    "date": "2014-06-29T23:31:00.000Z",
    "tags": [
      "mongo",
      "video",
      "youtube",
      "lecture"
    ],
    "options": {
      "isDraft": false,
      "author": "someone"
    },
    "comments": [
      {
        "name": "Anonymous",
        "comment": "wow great news",
        "date": "2015-02-01T23:08:00.000Z"
      },
      {
        "name": "Alex",
        "comment": "Thanks",
        "date": "2015-02-01T24:08:00.000Z"
      },
      {
        "name": "Anon",
        "comment": "+1",
        "date": "2015-02-01T25:08:00.000Z"
      }
    ]
  },
  {
    "_id": 3,
    "title": "Создание головоломки на языке Dart при помощи WebGL",
    "body": "В данной статье будет показано как при помощи dart и webgl создать простую головомку puzzle....",
    "date": "2014-05-04T22:50:00.000Z",
    "options": {
      "isDraft": false,
      "version": 10
    },
    "tags": [
      "dart",
      "webGL",
      "game"
    ]
  },
  {
    "_id": 4,
    "title": "Знакомство с WebGL",
    "body": "Webgl позволяет выводить интерактивную трехмерную графику на canvas браузера....",
    "date": "2014-04-30T19:43:00.000Z",
    "options": {
      "isDraft": false,
      "version": 6
    },
    "tags": [
      "dart",
      "webGL",
      "JavaScript",
      "frontend"
    ]
  },
  {
    "_id": 5,
    "title": "Создание пользовательских плагинов",
    "body": "Плагины в Django CMS представляют собой часть содержания, которая может быть использована многократно и просто добавляется в страницы...",
    "date": "2014-04-20T19:37:00.000Z",
    "options": {
      "isDraft": false,
      "version": 16
    },
    "tags": [
      "Django",
      "CMS",
      "Plugins"
    ]
  },
  {
    "_id": 6,
    "title": "Создание пользовательских плагинов",
    "body": "В этом разделе предполагается что вы уже о ознакомились с руководством по Django и будет показано как интегрировать программу голосования, из руководства, в django CMS...",
    "date": "2014-04-12T15:46:00.000Z",
    "options": {
      "isDraft": false,
      "author": "Someone"
    },
    "tags": [
      "Django",
      "CMS",
      "Plugins"
    ]
  },
  {
    "_id": 7,
    "title": "Создание собственных элементов",
    "body": "Создание собственных HTML элементов используя Polymer...",
    "date": "2014-03-29T18:11:00.000Z",
    "options": {
      "isDraft": false,
      "version": 1
    },
    "tags": [
      "dart",
      "Polymer",
      "Plugins",
      "HTML",
      "frontend"
    ]
  },
  {
    "_id": 8,
    "title": "Пример анимации в famo.us js",
    "body": "В прошлой статье были рассмотрены азы создания поверхностей, обработки событий и создания анимации в famo.us....",
    "date": "2014-07-18T14:01:00.000Z",
    "options": {
      "isDraft": false,
      "version": 1.4
    },
    "tags": [
      "famo.us",
      "JS",
      "JavaScript",
      "animation",
      "frontend"
    ]
  },
  {
    "_id": 9,
    "title": "Знакомство с famo.us",
    "body": "Пришло время написать статью об одном интересном фреймворке который позволяет создавать интерактивные веб приложения...",
    "date": "2014-05-04T22:32:00.000Z",
    "options": {
      "isDraft": false,
      "version": 4
    },
    "tags": [
      "famo.us",
      "JS",
      "JavaScript",
      "intro",
      "frontend"
    ]
  },
  {
    "_id": 10,
    "title": "Использование IndexedDB",
    "body": "Браузеры предоставляют несколько способов сохранения вашим приложением пользовательских данных на клиентской стороне...",
    "date": "2014-02-25T23:08:00.000Z",
    "tags": [
      "dart",
      "IndexedDB",
      "databases",
      "frontend"
    ],
    "options": {
      "isDraft": false,
      "version": 5
    },
    "comments": [
      {
        "name": "alex",
        "comment": "Yo",
        "date": "2014-02-26T23:08:00.000Z"
      }
    ]
  },
  {
    "_id": 11,
    "title": "Кому принадлежит луна",
    "body": "Перевод очередного прекрасного научнопопулярного видео. На этот раз это Vsause...",
    "date": "2014-02-16T01:15:00.000Z",
    "options": {
      "isDraft": false,
      "version": 8
    },
    "tags": [
      "sciense",
      "youtube",
      "fun"
    ]
  }
]

//mongoimport -dtest -cposts --jsonArray < blogjson
  
 for(var i=0; i<blogjson.length; i++) {
	db.posts.insert( blogjson[i]);
 }   
 
 


//insert

 newPost = {
        _id: 0,
        title: "Поддержим выпуск видео лекций по MongoDB",
        body: "Crud...",
        date: "2015-02-16T14:56:00.000Z",
        options: {isDraft: true, version: 1},
        tags: ["mongo", "video", "youtube", "lecture"]
    }

    db.posts.insert(newDoc)
 
 
  //Find elements
    
  db.posts.find({_id: 5})
 
 db.posts.findOne({_id: 5})
 
 //only title
 db.posts.findOne({_id: 1}, {title: true, _id:false})
 
 //> < >=
 db.posts.find({_id: {$gt: 5}});
 
  db.posts.find({_id: {$gte: 5}});
  
   db.posts.find({_id: {$gte: 5, $lte: 6}});
   
    db.posts.find({title: {$gt: 'П'}});
    
 //wit regex   
 db.posts.find({title:{$regex: /mongo/i}}, {title:true});
 
 db.posts.find({title:{$regex: /webgl/i}});
 
 //or and
 db.posts.find({$or: [{title: {$regex: /mongo/i}},
                      {title: {$regex: /webgl/i}}
                      ,
                      {_id: 11}
                     ]}, {title:true});
                     
 //synonym to and                   
 db.posts.find({title: {$regex: /webgl/i}, _id: {$gt : 3}});
 
 //have comment
 db.posts.find({comments: {$exists:true}});
 
 //type 1-int
 db.posts.find({options: {$type:1}});
 
 db.posts.find({options: {$type:3}});
 
 //with inner array
 db.posts.find({tags:"game"}, {tags: true});
 
 db.posts.find({tags: {$in: ["mongo", "JavaScript"]}});
 
  db.posts.find({tags: {$all: ["dart", "webGL"]}}, {tags:true});
  
 //object field 
 db.posts.find({"options.author": "Alex"}, {options:true}); 
 
 //count of documents
 db.posts.count({});
 
 db.posts.count({_id: {$gte: 3}});
 
 //cursors
 var cursor = db.posts.find();
 while(cursor.hasNext()){ 
     printjson( cursor.next());
 }    
 
 
  //cursors - sort, skip , limit
 var cursor = db.posts.find().sort({_id: -1}).limit(3);
 while(cursor.hasNext()){ 
     printjson( cursor.next());
 }
 
 //updating docs
 db.posts.findOne({_id: 1});
 db.posts.updateOne({_id: 1}, {$set: {counter: 8}});
 db.posts.updateOne({_id: 1}, {$inc: {counter: 10}});
 
 //delete field
  db.posts.updateOne({_id: 1}, {$unset: {counter: true}});
  
  //set to Array
  db.posts.update({_id: 1}, {$set: {array: [1,2,3,4]}});
  
  //set one elem of arr by indx
  db.posts.update({_id: 1}, {$set: {"array.1": 5}});
  
  //push pop pull arrays
  //push - add to end
  //pop - del from start or end
  //pull del from array by val
   db.posts.findOne({_id: 1});
  
  db.posts.update({_id: 1}, {$push: {"array":3}});
  db.posts.update({_id: 1}, {$pop: {"array":1}});
  db.posts.update({_id: 1}, {$pop: {"array":-1}});
  db.posts.update({_id: 1}, {$pull: {"array":3}});
  
  //several elems
  db.posts.update({_id: 1}, {$pushAll: {"array":[30, 40, 50]}});
  db.posts.update({_id: 1}, {$pullAll: {"array":[30, 40, 50]}});
  
  //set
   db.posts.update({_id: 1}, {$addToSet: {"array":"hi"}});
  
  //update wit Upsert
   db.posts.update({_id: -10}, {$set: {"title":"hello"}}, true);
   
   db.posts.find();
   
   //change multi docs
   db.posts.update({}, {$set: {new: true}}, {multi : true});
   
   db.posts.remove({_id: -10});
//  db.posts.drop();
   
   
   var weather =
[
  {
    "year":2014,
    "month":1,
    "day":1,
    "hour":0,
    "temperature":-1,
    "wind_direction":"Южный",
    "wind":"3",
    "code":"CL",
    "clouds":9,
    "visibility":10,
    "humidity":94,
    "pressure":1030
  },
  {
    "year":2014,
    "month":1,
    "day":1,
    "hour":3,
    "temperature":-0.6,
    "wind_direction":"Ю-З",
    "wind":"2",
    "code":"CL",
    "clouds":9,
    "visibility":10,
    "humidity":86,
    "pressure":1029
  }
 ];
 
  for(var i=0; i<weather.length; i++) {
	db.weather.insert( weather[i]);
 } 
