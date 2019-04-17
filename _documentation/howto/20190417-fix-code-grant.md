---
date: 2019-04-17
title: How to fix "Bot requires code grant." message for your Discord Bot
description: Learn how to fix the "Bot requires code grant." error message for your Discord Bot, step by step
by: 7coil
---

When you're testing your Discord Bot, and you try to invite your bot,
you may come across this message.

![Code Grant](/assets/img/howto/20190417-fix-code-grant/codegrant.png)

This error will block your users from being able to invite your bot,
which will stifle the growth of your bot.

## How to fix
1. Enter the Discord Developer Portal at https://discordapp.com/developers/applications/
2. Click on your bot application
3. Within the `Bot` tab, disable the `Requires OAuth2 Code Grant` toggle
   ![Disabling the switch](/assets/img/howto/20190417-fix-code-grant/disable.gif)

## Conclusion
After following all steps, your invite link should now be working again.

If the link still comes up with the same `Code Grant` error, try again.  
Make sure the application you followed the instructions with is the correct application.

If, after following all steps, you fail to resolve the error,
try joining [our Discord server]({{site.data.strings.discord}}) for one on one help.
