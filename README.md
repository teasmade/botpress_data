# 🤖DSI Bot Dev🤖

## Notes on Botpress Setup and Inital Exploration

July 2022
Tom Allen
<thomas@searocco.studio>

## Test Webchat Setup

Botpress by default serves on localhost:3000

We call its inject script in index.html, then send it some init config.

## Webchat init config (index.html)

`host` - the URL of the Botpress server
`bitId` - the id of the bot to load
`hideWidget` - hides the Botpress default open / close button

## Test config in Botpress GUI

In `Data\global\config\channel-web.json` ...

- To clear recent message history in the Webchat (useful for demos and when a lot of tests are being run) :

`startNewConvoOnTimeout: true` (default false)
`recentConversationLifetime: "2 minutes"` (default "6 hours")

## Vue component setup

Attach a normal click event to an element, calling a method.
We then have access to `window.botpressWebChat`

## Botpress code edits

The schema and customisable code available in the Botpress interface editor instance can, on the Windows executable install setup, be found at `%APPDATA%\Roaming\botpress-electron\binaries\(version)\data`

Loading this folder in VSCode is much more convenient for browsing project / bot structure and updating actions.

**NOTE** if editing via VSCode changes will not be reflected in the running instance.

To restart the Botpress server, update something (e.g. add a restart key and just change its string value) in `\global\botpress.config.json`

This will then trigger an orange gear showing in the bottom right corner of the Botpress GUI ; clicking this will allow you to restart the server.

## Botpress style edits

The default styles for the Botpress webchat interface can be found and updated at `assets\modules\channel-web\default.css`
