import UserDB from "./config/db.js";
import {delay} from "./helper/helper.js";


let users = UserDB()

//Logic to login user
const loginUser = (email) => {
  const id = users.find(user => user.email===email) || 1;
    if (!users[id]){
      throw new Error("User does not exist.")
    }
    else {
        return {
            "data": {
              "status":"success",
              "user": users[id]
            }
          }
    }

}


  

const doLoginUser = async (email) => {
    try {
        await delay(1000);
        const result = await loginUser(email);
        return result;
      } catch (error) {
        await delay(1000)
        console.log(error);
      }
}


export {doLoginUser};
