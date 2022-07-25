  // Catch the event
  if (event.type === 'proactive-trigger') {
    const eventDestination = {
      channel: event.channel,
      target: event.target,
      botId: event.botId,
      threadId: event.threadId
    }

    // Skip event processing
    event.setFlag(bp.IO.WellKnownFlags.SKIP_DIALOG_ENGINE, true)

    // Make the bot respond with custom content instead
    bp.cms
      .renderElement(
        'builtin_text',
        { text: "### Vous êtes en dialogue avec Töbi v0.01, assistant virtuel de la DSI \n Entrez qqch pour démarrer la conversation", typing: true, markdown: true, },
        eventDestination
      )
      .then(payloads => {
        bp.events.replyToEvent(event, payloads)
      })
  }