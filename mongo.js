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
    "title": "��������� ������ ����� ������ �� MongoDB",
    "body": "C ������ ������ �����-������ �� MongoDB ������ ��� ����, � � ������� ��������� ���������� ������������� �������...",
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
    "title": "������� ������",
    "body": "� ������� �� ������� ��� ����� MongoDB. � ��� �� ������� ������������ � ���������� ����� ������������ ������ ������. ��� ����� ������ JSON � ��� MongoDB ������ ������...",
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
    "title": "�������� ����������� �� ����� Dart ��� ������ WebGL",
    "body": "� ������ ������ ����� �������� ��� ��� ������ dart � webgl ������� ������� ��������� puzzle....",
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
    "title": "���������� � WebGL",
    "body": "Webgl ��������� �������� ������������� ���������� ������� �� canvas ��������....",
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
    "title": "�������� ���������������� ��������",
    "body": "������� � Django CMS ������������ ����� ����� ����������, ������� ����� ���� ������������ ����������� � ������ ����������� � ��������...",
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
    "title": "�������� ���������������� ��������",
    "body": "� ���� ������� �������������� ��� �� ��� � ������������ � ������������ �� Django � ����� �������� ��� ������������� ��������� �����������, �� �����������, � django CMS...",
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
    "title": "�������� ����������� ���������",
    "body": "�������� ����������� HTML ��������� ��������� Polymer...",
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
    "title": "������ �������� � famo.us js",
    "body": "� ������� ������ ���� ����������� ��� �������� ������������, ��������� ������� � �������� �������� � famo.us....",
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
    "title": "���������� � famo.us",
    "body": "������ ����� �������� ������ �� ����� ���������� ���������� ������� ��������� ��������� ������������� ��� ����������...",
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
    "title": "������������� IndexedDB",
    "body": "�������� ������������� ��������� �������� ���������� ����� ����������� ���������������� ������ �� ���������� �������...",
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
    "title": "���� ����������� ����",
    "body": "������� ���������� ����������� ����������������� �����. �� ���� ��� ��� Vsause...",
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
        title: "��������� ������ ����� ������ �� MongoDB",
        body: "Crud...",
        date: "2015-02-16T14:56:00.000Z",
        options: {isDraft: true, version: 1},
        tags: ["mongo", "video", "youtube", "lecture"]
    }

    db.posts.insert(newDoc)
 
 db.posts.find({_id: 5})
 
 
 
 
