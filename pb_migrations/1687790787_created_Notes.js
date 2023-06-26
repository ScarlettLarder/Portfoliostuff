migrate((db) => {
  const collection = new Collection({
    "id": "un2sq7yyww6n4yd",
    "created": "2023-06-26 14:46:27.480Z",
    "updated": "2023-06-26 14:46:27.480Z",
    "name": "Notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ydnw8uzw",
        "name": "Title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "msvkafig",
        "name": "Title_2",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("un2sq7yyww6n4yd");

  return dao.deleteCollection(collection);
})
