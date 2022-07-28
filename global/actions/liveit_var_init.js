/**
 * Small description of your action
 * @title Initialise LiveIT User Data received from Front
 * @category Custom (Demo)
 * @author Tom Allen
 */
const myAction = async () => {
  const data = user.webchatCustomId.scenarioData;
  user.scenarioData = {};
  Object.entries(data).forEach(
    ([key, value]) => (user.scenarioData[key] = value)
  );
};

return myAction();
