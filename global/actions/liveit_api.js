const axios = require("axios");
/**
 * A custom action to call the LiveIT API for User Data
 * @title GET LiveIT User Data
 * @category API
 * @author Tom Allen
 * @param url - url of the GET route
 * @param key - the key to save the response in under user.
 */
const action = async (url, key) => {
  // bp.logger.info(`ACTION-API-SESSION: ${JSON.stringify(session)}`);
  // bp.logger.info(`ACTION-API-USER: ${JSON.stringify(user)}`);
  const config = {
    method: "get",
    url: url,
    headers: {
      Accept: "application/vnd.project.api+json;version=1",
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Bearer " + user.token,
    },
  };
  try {
    let response = await axios(config);
    // TODO edit this to not just be the first item
    user[key] = response.data.payload[8];
  } catch (error) {
    bp.logger.error(error);
    const errorCode =
      (error.response && error.response.status) || error.code || "";
    bp.logger.error(`Error: ${errorCode} while calling resource "${url}"`);
  }
};
return action(args.url, args.key);
