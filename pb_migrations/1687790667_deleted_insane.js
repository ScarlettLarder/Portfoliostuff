migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("fumc4tuyshdbo6l");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "fumc4tuyshdbo6l",
    "created": "2023-06-25 20:01:00.810Z",
    "updated": "2023-06-25 20:01:00.810Z",
    "name": "insane",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zgb55u0s",
        "name": "title",
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
        "id": "kque1hqo",
        "name": "title_2",
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
})
