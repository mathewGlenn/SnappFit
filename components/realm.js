import Realm from "realm";

class UserInfo extends Realm.Object { }
UserInfo.schema = {
    name: "UserInfo",
    properties:{
        recordID: "int",
        name: "string",
        age: "int",
        sex: "string",
        weight: "int",
        height: "int",
        body_type: "string",
    },
    primaryKey: "recordID",
};

let realm = new Realm({schema:[UserInfo], schemaVersion: 4});

export default realm;

let getUserInfo = () => {
    return realm.objectForPrimaryKey('UserInfo', 3)
}

export{ getUserInfo }