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
  bp.logger.info(`VAR-INIT-USER: ${JSON.stringify(user)}`);
  bp.logger.info(`VAR-INIT-SESSION: ${JSON.stringify(session)}`);

  user.conformity = null;
  // user.webchatCustomId = null;
};

return myAction();
