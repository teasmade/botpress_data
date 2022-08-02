// Catch the event
if (event.type === "proactive-trigger") {
  const eventDestination = {
    channel: event.channel,
    target: event.target,
    botId: event.botId,
    threadId: event.threadId,
  };
  // debugger;
  bp.logger.info(`PROACTIVE: ${JSON.stringify(event)}`);
  bp.logger.info(`${JSON.stringify(user)}`);
  // Don't skip event processing - removes need for user input before flow starts
  event.setFlag(bp.IO.WellKnownFlags.SKIP_DIALOG_ENGINE, false);

  // Make the bot respond with custom content instead
  bp.cms
    .renderElement(
      "builtin_text",
      {
        // text: `### Vous êtes en dialogue avec Töbi v0.01, assistant virtuel de la DSI
        // ${event.payload.payload.customProactiveMsg}`,
        text:
          "### Vous êtes en dialogue avec Töbi v0.01, assistant virtuel de la DSI" +
          event.payload.payload.customProactiveMsg,
        typing: true,
        markdown: true,
      },
      eventDestination
    )
    .then((payloads) => {
      bp.events.replyToEvent(event, payloads);
    });
}
