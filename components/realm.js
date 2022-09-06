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
    },
    primaryKey: "recordID",
};

let realm = new Realm({schema:[UserInfo], schemaVersion: 3});

export default realm;

let getUserInfo = () => {
    return realm.objectForPrimaryKey('UserInfo', 2)
}

export{ getUserInfo }