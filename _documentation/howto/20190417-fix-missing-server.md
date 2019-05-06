---
date: 2019-04-17
title: How to fix missing servers while inviting a Discord bot.
description: Learn how to invite a bot to your Discord server, if the server you wish to invite a bot to is not available in the list of servers.
by: 7coil
type: howto
---

All _too common_, a person will try to invite a bot,
and they can't see the server they are trying to invite.  
![Hello im trying to invite a bot and it says select server and my server isnt showing](/assets/img/howto/20190417-fix-missing-server/help.png)

If you see the following screen, and the server you want to invite a bot to isn't available,
you can try to debug why this is not occurring, by following some simple steps.  
![The "Invite Bots" screen, with no possible server selection](/assets/img/howto/20190417-fix-missing-server/noserver.png)

## Insight 1 - You are logged in to the wrong account
You may be logged into Discord on the incorrect Discord account in your web browser.
This is common with users who have multiple Discord accounts,
or has someone else logging into Discord using the web browser.

### How to fix
1. Go to https://discordapp.com/
2. Click `Open` button, located in the top right hand corner of the screen  
   ![Open Button](/assets/img/howto/20190417-fix-missing-server/open.png)
3. After waiting for Discord to load in your **web browser**,
   click on the **cog** on the bottom left hand corner of the screen.  
   ![Open Cog](/assets/img/howto/20190417-fix-missing-server/cog.png)
4. On the bottom left hand corner of the screen, click the `Log Out` button to log off.  
   ![Log Out](/assets/img/howto/20190417-fix-missing-server/logout.png)
5. Click `Log Out` again to confirm your selection.  
6. Click `Login`, located in the top right hand corner of the screen  
   ![Login Button](/assets/img/howto/20190417-fix-missing-server/login.png)
7. Refresh the "Connect to Discord" page.

If your servers are back, you can now invite your bot normally.
If not, make sure you are on the right account.
Try alternative accounts that may be able to invite the bot.

## Insight 2 - You may not even have the right permissions
Just because someone gave you the "Moderator" role in a server,
doesn't mean you have permission to invite any bots.

![Roles](/assets/img/howto/20190417-fix-missing-server/permission.png)

### How to fix
To be able to invite bots, your server administrator must give you the `Manage Server` permission.
Please contact your administrator for this permission.

If you are the administrator:

1. Find the name of the role that your administrators have.
   In this example, administrators in the `Terminal.ink` server have the `ohlookitsveld` role.
2. Click on the drop down arrow on the top left corner of the Discord window  
   ![Dropdown](/assets/img/howto/20190417-fix-missing-server/servername.png)
3. Click on Server Settings  
   ![Cursor is selecting the "Options" link](/assets/img/howto/20190417-fix-missing-server/settings.png)
4. Click on the Roles tab  
   ![Cursor is selecting the "Roles" tab](/assets/img/howto/20190417-fix-missing-server/roles.png)
5. Find the correct role, and toggle the `Manage Server` permission
   ![Toggling `Manage Server` for the `ohlookitsveld` role](/assets/img/howto/20190417-fix-missing-server/togglerole.gif)
6. Save changes when you are finished
   ![Save](/assets/img/howto/20190417-fix-missing-server/save.gif)

## Conclusion
After following all steps, you should be able to invite a bot to your server.

If, after following all steps, you fail to invite a bot,
please try and contact the technical support for the bot you are trying to invite,
or join [our Discord server]({{site.data.strings.discord}}) for one on one help.
