!function(){function e(){var e=$.inidb.GetKeyList("blackList","");for(c in e)f.push($.inidb.get("blackList",e[c]))}function t(){var e=$.inidb.GetKeyList("whiteList","");for(c in e)b.push($.inidb.get("whiteList",e[c]))}function r(e,t){$.say(".timeout "+e+" "+t),setTimeout(function(){$.say(".timeout "+e+" "+t)},1e3)}function s(e){for(c in u)if(u[c].user.equalsIgnoreCase(e)){var t=u[c].time-$.systemTime();return void(t>0?(r(e,W),u.splice(c,1),u.push({user:e,time:Q}),a(),J=$.lang.get("chatmoderator.timeout")):(r(e,H),u.splice(c,1),u.push({user:e,time:Q}),a(),J=$.lang.get("chatmoderator.warning")))}r(e,H),u.push({user:e,time:Q}),a(),J=$.lang.get("chatmoderator.warning")}function a(){$.bot.isModuleEnabled("./handlers/panelHandler.js")&&$.panelDB.updateModLinesDB()}function o(e,t,r){X=V-$.systemTime(),0>=X&&(r||$.say("@"+$.username.resolve(e)+", "+t+" "+J)),V=1e3*z+$.systemTime()}function i(e){h.push(e);var t=setTimeout(function(){for(c in h)if(h[c].equalsIgnoreCase(e)){h.splice(c,1);break}clearTimeout(t)},1e3*y)}function n(e){return e?$.lang.get("common.enabled"):$.lang.get("common.disabled")}function g(e){return e?"not allowed":"allowed"}function l(e){var t=e.getSender(),r=e.getMessage().toLowerCase();for(c in f)if(r.contains(f[c].toLowerCase()))return timeoutUser(t,W),J=$.lang.get("chatmoderator.timeout"),o(t,K),!0;return!1}function d(e){var t=e.getSender();e.getMessage().toLowerCase();for(c in h)if(h[c].equalsIgnoreCase(t)&&$.patternDetector.hasLinks(e))return h.splice(c,1),!0;return!1}function m(e){var t=(e.getSender(),e.getMessage().toLowerCase());for(c in b)if(t.contains(b[c]))return!0;return!1}var c,h=[],u=[],b=[],f=[],p=$.inidb.exists("chatModerator","linksToggle")?$.getIniDbBoolean("chatModerator","linksToggle"):!0,M=$.inidb.exists("chatModerator","linksMessage")?$.inidb.get("chatModerator","linksMessage"):"you were timed out for linking",y=$.inidb.exists("chatModerator","linkPermitTime")?parseInt($.inidb.get("chatModerator","linkPermitTime")):120,w=$.inidb.exists("chatModerator","capsToggle")?$.getIniDbBoolean("chatModerator","capsToggle"):!0,v=$.inidb.exists("chatModerator","capsMessage")?$.inidb.get("chatModerator","capsMessage"):"you were timed out for overusing caps",C=$.inidb.exists("chatModerator","capsLimitPercent")?parseFloat($.inidb.get("chatModerator","capsLimitPercent")):50,x=$.inidb.exists("chatModerator","capsTriggerLength")?parseInt($.inidb.get("chatModerator","capsTriggerLength")):15,I=$.inidb.exists("chatModerator","spamToggle")?$.getIniDbBoolean("chatModerator","spamToggle"):!0,P=$.inidb.exists("chatModerator","spamMessage")?$.inidb.get("chatModerator","spamMessage"):"you were timed out for spamming repeating characters",L=$.inidb.exists("chatModerator","spamLimit")?parseInt($.inidb.get("chatModerator","spamLimit")):15,q=$.inidb.exists("chatModerator","symbolsToggle")?$.getIniDbBoolean("chatModerator","symbolsToggle"):!0,E=$.inidb.exists("chatModerator","symbolsMessage")?$.inidb.get("chatModerator","symbolsMessage"):"you were timed out for overusing symbols",k=$.inidb.exists("chatModerator","symbolsLimitPercent")?parseFloat($.inidb.get("chatModerator","symbolsLimitPercent")):50,j=$.inidb.exists("chatModerator","symbolsGroupLimit")?parseFloat($.inidb.get("chatModerator","symbolsGroupLimit")):10,T=$.inidb.exists("chatModerator","symbolsTriggerLength")?parseInt($.inidb.get("chatModerator","symbolsTriggerLength")):15,S=$.inidb.exists("chatModerator","emotesToggle")?$.getIniDbBoolean("chatModerator","emotesToggle"):!1,D=$.inidb.exists("chatModerator","emotesMessage")?$.inidb.get("chatModerator","emotesMessage"):"you were timed out for overusing emotes",B=$.inidb.exists("chatModerator","emotesLimit")?parseInt($.inidb.get("chatModerator","emotesLimit")):15,_=$.inidb.exists("chatModerator","longMessageToggle")?$.getIniDbBoolean("chatModerator","longMessageToggle"):!0,R=$.inidb.exists("chatModerator","longMessageMessage")?$.inidb.get("chatModerator","longMessageMessage"):"you were timed out for posting a long message",F=$.inidb.exists("chatModerator","longMessageLimit")?parseInt($.inidb.get("chatModerator","longMessageLimit")):300,A=$.inidb.exists("chatModerator","colorsToggle")?$.getIniDbBoolean("chatModerator","colorsToggle"):!0,N=$.inidb.exists("chatModerator","colorsMessage")?$.inidb.get("chatModerator","colorsMessage"):"you were timed out for using /me.",G={Links:$.inidb.exists("chatModerator","subscribersModerateLinks")?$.getIniDbBoolean("chatModerator","subscribersModerateLinks"):!0,Caps:$.inidb.exists("chatModerator","subscribersModerateCaps")?$.getIniDbBoolean("chatModerator","subscribersModerateCaps"):!0,Symbols:$.inidb.exists("chatModerator","subscribersModerateSymbols")?$.getIniDbBoolean("chatModerator","subscribersModerateSymbols"):!0,Spam:$.inidb.exists("chatModerator","subscribersModerateSpam")?$.getIniDbBoolean("chatModerator","subscribersModerateSpam"):!0,Emotes:$.inidb.exists("chatModerator","subscribersModerateEmotes")?$.getIniDbBoolean("chatModerator","subscribersModerateEmotes"):!0,Colors:$.inidb.exists("chatModerator","subscribersModerateColors")?$.getIniDbBoolean("chatModerator","subscribersModerateColors"):!0,LongMsg:$.inidb.exists("chatModerator","subscribersModerateLongMsg")?$.getIniDbBoolean("chatModerator","subscribersModerateLongMsg"):!0},O={Links:$.inidb.exists("chatModerator","regularsModerateLinks")?$.getIniDbBoolean("chatModerator","regularsModerateLinks"):!0,Caps:$.inidb.exists("chatModerator","regularsModerateCaps")?$.getIniDbBoolean("chatModerator","regularsModerateCaps"):!0,Symbols:$.inidb.exists("chatModerator","regularsModerateSymbols")?$.getIniDbBoolean("chatModerator","regularsModerateSymbols"):!0,Spam:$.inidb.exists("chatModerator","regularsModerateSpam")?$.getIniDbBoolean("chatModerator","regularsModerateSpam"):!0,Emotes:$.inidb.exists("chatModerator","regularsModerateEmotes")?$.getIniDbBoolean("chatModerator","regularsModerateEmotes"):!0,Colors:$.inidb.exists("chatModerator","regularsModerateColors")?$.getIniDbBoolean("chatModerator","regularsModerateColors"):!0,LongMsg:$.inidb.exists("chatModerator","regularsModerateLongMsg")?$.getIniDbBoolean("chatModerator","regularsModerateLongMsg"):!0},U={Links:$.inidb.exists("chatModerator","silentTimeoutLinks")?$.getIniDbBoolean("chatModerator","silentTimeoutLinks"):!1,Caps:$.inidb.exists("chatModerator","silentTimeoutCaps")?$.getIniDbBoolean("chatModerator","silentTimeoutCaps"):!1,Symbols:$.inidb.exists("chatModerator","silentTimeoutSymbols")?$.getIniDbBoolean("chatModerator","silentTimeoutSymbols"):!1,Spam:$.inidb.exists("chatModerator","silentTimeoutSpam")?$.getIniDbBoolean("chatModerator","silentTimeoutSpam"):!1,Emotes:$.inidb.exists("chatModerator","silentTimeoutEmotes")?$.getIniDbBoolean("chatModerator","silentTimeoutEmotes"):!1,Colors:$.inidb.exists("chatModerator","silentTimeoutColors")?$.getIniDbBoolean("chatModerator","silentTimeoutColors"):!1,LongMsg:$.inidb.exists("chatModerator","silentTimeoutLongMsg")?$.getIniDbBoolean("chatModerator","silentTimeoutLongMsg"):!1},K=$.inidb.exists("chatModerator","blacklistMessage")?$.inidb.get("chatModerator","blacklistMessage"):"you were timed out using a blacklisted phrase",H=$.inidb.exists("chatModerator","warningTime")?parseInt($.inidb.get("chatModerator","warningTime")):5,W=$.inidb.exists("chatModerator","timeoutTime")?parseInt($.inidb.get("chatModerator","timeoutTime")):600,z=$.inidb.exists("chatModerator","msgCooldownSec")?parseInt($.inidb.get("chatModerator","msgCooldownSec")):20,J="",Q=36e5+$.systemTime(),V=0,X=0;$.bind("ircChannelMessage",function(e){var t=e.getSender(),r=e.getMessage(),a=r.length();if(!$.isModv3(t,e.getTags())){if(r&&l(e))return;if(p&&$.patternDetector.hasLinks(e)){if($.youtubePlayerConnected&&r.contains("youtube.com")||r.contains("youtu.be"))return;if(r&&d(e)||m(e))return;if(!O.Links&&$.isReg(t)||!G.Links&&$.isSubv3(t,e.getTags()))return;return s(t),o(t,M,U.Links),void $.logEvent("chatModerator.js",269,t+" was timed out for linking.")}if(w&&a>x&&parseFloat($.patternDetector.getNumberOfCaps(e))/a*100>C){if(!O.Caps&&$.isReg(t)||!G.Caps&&$.isSubv3(t,e.getTags()))return;return s(t),o(t,v,U.Caps),void $.logEvent("chatModerator.js",280,t+" was timed out for overusing caps.")}if(q&&a>T&&($.patternDetector.getLongestNonLetterSequence(e)>j||parseFloat($.patternDetector.getNumberOfNonLetters(e))/a*100>k)){if(!O.Symbols&&$.isReg(t)||!G.Symbols&&$.isSubv3(t,e.getTags()))return;return s(t),o(t,E,U.Symbols),void $.logEvent("chatModerator.js",292,t+" was timed out for overusing symbols.")}if(I&&$.patternDetector.getLongestRepeatedSequence(e)>L){if(!O.Spam&&$.isReg(t)||!G.Spam&&$.isSubv3(t,e.getTags()))return;return s(t),o(t,P,U.Spam),void $.logEvent("chatModerator.js",303,t+" was timed out for spamming.")}if(S&&$.patternDetector.getNumberOfEmotes(e)>B){if(!O.Emotes&&$.isReg(t)||!G.Emotes&&$.isSubv3(t,e.getTags()))return;return s(t),o(t,D,U.Emotes),void $.logEvent("chatModerator.js",313,t+" was timed out for overusing emotes.")}if(A&&r.startsWith("/me")){if(!O.Colors&&$.isReg(t)||!G.Colors&&$.isSubv3(t,e.getTags()))return;return s(t),o(t,N,U.Colors),void $.logEvent("chatModerator.js",323,t+" was timed out for using /me")}if(_&&a>F){if(!O.LongMsg&&$.isReg(t)||!G.LongMsg&&$.isSubv3(t,e.getTags()))return;s(t),o(t,R,U.LongMsg),$.logEvent("chatModerator.js",333,t+" was timed out for posting a long message.")}}}),$.bind("command",function(r){var s=r.getSender(),a=r.getCommand(),o=r.getArguments(),l=r.getArgs(),d=l[0],m=l[1];if(a.equalsIgnoreCase("permit"))return $.isModv3(s,r.getTags())?d?(i(d),$.say($.username.resolve(d)+$.lang.get("chatmoderator.permited",y)),void $.logEvent("chatModerator.js",365,d+" was permited by "+s)):void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.permit.usage")):void $.say($.whisperPrefix(s)+$.modMsg);if(a.equalsIgnoreCase("blacklist")){if(!$.isAdmin(s))return void $.say($.whisperPrefix(s)+$.adminMsg);if(!d)return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.blacklist.usage"));if(d.equalsIgnoreCase("add")){if(!m)return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.blacklist.add.usage"));var c=o.replace(d,"").trim().toLowerCase();$.inidb.set("blackList","phrase_"+f.length,c),f.push(c),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.blacklist.added")),$.logEvent("chatModerator.js",395,'"'+c+'" was added to the blacklist by '+s)}if(d.equalsIgnoreCase("remove")){if(!m)return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.blacklist.remove.usage"));if(!$.inidb.exists("blackList","phrase_"+parseInt(m)))return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.err"));$.inidb.del("blackList","phrase_"+parseInt(m)),e(),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.blacklist.removed"))}if(d.equalsIgnoreCase("show")){if(!m)return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.blacklist.show.usage"));if(!$.inidb.exists("blackList","phrase_"+parseInt(m)))return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.err"));$.say($.whisperPrefix(s)+$.inidb.get("blackList","phrase_"+parseInt(m)))}}if(a.equalsIgnoreCase("whiteList")){if(!$.isAdmin(s))return void $.say($.whisperPrefix(s)+$.adminMsg);if(!d)return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.whitelist.usage"));if(d.equalsIgnoreCase("add")){if(!m)return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.whitelist.add.usage"));var h=o.replace(d,"").trim().toLowerCase();$.inidb.set("whiteList","link_"+b.length,h),b.push(h),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.whitelist.link.added")),$.logEvent("chatModerator.js",455,'"'+h+'" was added the the whitelist by '+s)}if(d.equalsIgnoreCase("remove")){if(!m)return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.whitelist.remove.usage"));if(!$.inidb.exists("whiteList","link_"+parseInt(m)))return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.err"));$.inidb.del("whiteList","link_"+parseInt(m)),t(),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.whitelist.removed"))}if(d.equalsIgnoreCase("show")){if(!m)return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.whitelist.show.usage"));if(!$.inidb.exists("whiteList","link_"+parseInt(m)))return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.err"));$.say($.whisperPrefix(s)+$.inidb.get("whiteList","link_"+parseInt(m)))}}if(a.equalsIgnoreCase("moderation")||a.equalsIgnoreCase("mod")){if(!$.isAdmin(s))return void $.say($.whisperPrefix(s)+$.adminMsg);if(!d)return $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.usage.toggles")),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.usage.messages")),void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.options"));if(d.equalsIgnoreCase("links")){if(!m)return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.link.usage",n(p)));if(m.equalsIgnoreCase("on"))return p=!0,$.inidb.set("chatModerator","linksToggle",p),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.link.filter.enabled")),void $.logEvent("chatModerator.js",518,"Link filter has been enabled by "+s);if(m.equalsIgnoreCase("off"))return p=!1,$.inidb.set("chatModerator","linksToggle",p),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.link.filter.disabled")),void $.logEvent("chatModerator.js",524,"Link filter was disabled by "+s)}if(d.equalsIgnoreCase("caps")){if(!m)return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.caps.usage",n(w)));if(m.equalsIgnoreCase("on"))return w=!0,$.inidb.set("chatModerator","capsToggle",w),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.caps.filter.enabled")),void $.logEvent("chatModerator.js",542,"Caps filter was enabled by "+s);if(m.equalsIgnoreCase("off"))return w=!1,$.inidb.set("chatModerator","capsToggle",w),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.caps.filter.disabled")),void $.logEvent("chatModerator.js",548,"Caps filter was disabled by "+s)}if(d.equalsIgnoreCase("spam")){if(!m)return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.spam.usage",n(I)));if(m.equalsIgnoreCase("on"))return I=!0,$.inidb.set("chatModerator","spamToggle",I),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.spam.filter.enabled")),void $.logEvent("chatModerator.js",566,"Spam filter was enabled by "+s);if(m.equalsIgnoreCase("off"))return I=!1,$.inidb.set("chatModerator","spamToggle",I),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.spam.filter.disabled")),void $.logEvent("chatModerator.js",572,"Spam filter was disabled by "+s)}if(d.equalsIgnoreCase("symbols")){if(!m)return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.symbols.usage",n(q)));if(m.equalsIgnoreCase("on"))return q=!0,$.inidb.set("chatModerator","symbolsToggle",q),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.symbols.filter.enabled")),void $.logEvent("chatModerator.js",590,"Symbols filter was enabled by "+s);if(m.equalsIgnoreCase("off"))return q=!1,$.inidb.set("chatModerator","symbolsToggle",q),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.symbols.filter.disabled")),void $.logEvent("chatModerator.js",596,"Symbols filter was enabled by "+s)}if(d.equalsIgnoreCase("emotes")){if(!m)return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.emotes.usage",n(S)));if(m.equalsIgnoreCase("on"))return S=!0,$.inidb.set("chatModerator","emotesToggle",S),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.emotes.filter.enabled")),void $.logEvent("chatModerator.js",614,"Emotes filter was enabled by "+s);if(m.equalsIgnoreCase("off"))return S=!1,$.inidb.set("chatModerator","emotesToggle",S),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.emotes.filter.disabled")),void $.logEvent("chatModerator.js",620,"Emotes filter was disabled by "+s)}if(d.equalsIgnoreCase("colors")){if(!m)return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.colors.usage",n(A)));if(m.equalsIgnoreCase("on"))return A=!0,$.inidb.set("chatModerator","colorsToggle",A),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.colors.filter.enabled")),void $.logEvent("chatModerator.js",638,"Colors filter was enabled by "+s);if(m.equalsIgnoreCase("off"))return A=!1,$.inidb.set("chatModerator","colorsToggle",A),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.colors.filter.disabled")),void $.logEvent("chatModerator.js",644,"Colors filter was disabled by "+s)}if(d.equalsIgnoreCase("longmessages")){if(!m)return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.message.usage",n(_)));if(m.equalsIgnoreCase("on"))return _=!0,$.inidb.set("chatModerator","longMessageToggle",_),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.message.filter.enabled")),void $.logEvent("chatModerator.js",662,"Long message filter was enabled by "+s);if(m.equalsIgnoreCase("off"))return _=!1,$.inidb.set("chatModerator","longMessageToggle",_),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.message.filter.disabled")),void $.logEvent("chatModerator.js",668,"Long message filter was disabled by "+s)}if(d.equalsIgnoreCase("regulars")){if(!m)return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.regulars.usage"));if(m.equalsIgnoreCase("links")){if(!l[2])return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.regulars.toggle.link",g(O.Links)));l[2].equalsIgnoreCase("true")?(O.Links=!0,$.inidb.set("chatModerator","regularsModerateLinks",O.Links),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.regulars.links.allowed")),$.logEvent("chatModerator.js",691,s+" changed regulars moderation for links to true")):l[2].equalsIgnoreCase("false")&&(O.Links=!1,$.inidb.set("chatModerator","regularsModerateLinks",O.Links),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.regulars.links.not.allowed")),$.logEvent("chatModerator.js",696,s+" changed regulars moderation for links to false"))}else if(m.equalsIgnoreCase("caps")){if(!l[2])return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.regulars.toggle.caps",g(O.Caps)));l[2].equalsIgnoreCase("true")?(O.Caps=!0,$.inidb.set("chatModerator","regularsModerateCaps",O.Caps),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.regulars.caps.allowed")),$.logEvent("chatModerator.js",707,s+" changed regulars moderation for caps to true")):l[2].equalsIgnoreCase("false")&&(O.Caps=!1,$.inidb.set("chatModerator","regularsModerateCaps",O.Caps),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.regulars.caps.not.allowed")),$.logEvent("chatModerator.js",712,s+" changed regulars moderation for caps to false"))}else if(m.equalsIgnoreCase("symbols")){if(!l[2])return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.regulars.toggle.symbols",g(O.Symbols)));l[2].equalsIgnoreCase("true")?(O.Symbols=!0,$.inidb.set("chatModerator","regularsModerateSymbols",O.Symbols),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.regulars.symbols.allowed")),$.logEvent("chatModerator.js",723,s+" changed regulars moderation for symbols to true")):l[2].equalsIgnoreCase("false")&&(O.Symbols=!1,$.inidb.set("chatModerator","regularsModerateSymbols",O.Symbols),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.regulars.symbols.not.allowed")),$.logEvent("chatModerator.js",728,s+" changed regulars moderation for symbols to false"))}else if(m.equalsIgnoreCase("spam")){if(!l[2])return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.regulars.toggle.spam",g(O.Spam)));l[2].equalsIgnoreCase("true")?(O.Spam=!0,$.inidb.set("chatModerator","regularsModerateSpam",O.Spam),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.regulars.spam.allowed")),$.logEvent("chatModerator.js",739,s+" changed regulars moderation for spam to true")):l[2].equalsIgnoreCase("false")&&(O.Spam=!1,$.inidb.set("chatModerator","regularsModerateSpam",O.Spam),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.regulars.spam.not.allowed")),$.logEvent("chatModerator.js",744,s+" changed regulars moderation for spam to false"))}else if(m.equalsIgnoreCase("emotes")){if(!l[2])return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.regulars.toggle.emotes",g(O.Emotes)));l[2].equalsIgnoreCase("true")?(O.Emotes=!0,$.inidb.set("chatModerator","regularsModerateEmotes",O.Emotes),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.regulars.emotes.allowed")),$.logEvent("chatModerator.js",755,s+" changed regulars moderation for emotes to true")):l[2].equalsIgnoreCase("false")&&(O.Emotes=!1,$.inidb.set("chatModerator","regularsModerateEmotes",O.Emotes),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.regulars.emotes.not.allowed")),$.logEvent("chatModerator.js",760,s+" changed regulars moderation for emotes to false"))}else if(m.equalsIgnoreCase("colors")){if(!l[2])return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.regulars.toggle.colors",g(O.Colors)));l[2].equalsIgnoreCase("true")?(O.Colors=!0,$.inidb.set("chatModerator","regularsModerateColors",O.Colors),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.regulars.colors.allowed")),$.logEvent("chatModerator.js",771,s+" changed regulars moderation for colors to true")):l[2].equalsIgnoreCase("false")&&(O.Colors=!1,$.inidb.set("chatModerator","regularsModerateColors",O.Colors),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.regulars.colors.not.allowed")),$.logEvent("chatModerator.js",776,s+" changed regulars moderation for colors to false"))}else if(m.equalsIgnoreCase("longmessages")){if(!l[2])return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.regulars.toggle.long.msg",g(O.LongMsg)));l[2].equalsIgnoreCase("true")?(O.LongMsg=!0,$.inidb.set("chatModerator","regularsModerateLongMsg",O.LongMsg),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.regulars.long.messages.allowed")),$.logEvent("chatModerator.js",787,s+" changed regulars moderation for long messages to true")):l[2].equalsIgnoreCase("false")&&(O.LongMsg=!1,$.inidb.set("chatModerator","regularsModerateLongMsg",O.LongMsg),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.regulars.long.messages.not.allowed")),$.logEvent("chatModerator.js",792,s+" changed regulars moderation for long messages to false"))}}if(d.equalsIgnoreCase("subscribers")){if(!m)return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.subscribers.usage"));if(m.equalsIgnoreCase("links")){if(!l[2])return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.subscribers.toggle.link",g(G.Links)));l[2].equalsIgnoreCase("true")?(G.Links=!0,$.inidb.set("chatModerator","subscribersModerateLinks",G.Links),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.subscribers.links.allowed")),$.logEvent("chatModerator.js",691,s+" changed subscribers moderation for links to true")):l[2].equalsIgnoreCase("false")&&(G.Links=!1,$.inidb.set("chatModerator","subscribersModerateLinks",G.Links),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.subscribers.links.not.allowed")),$.logEvent("chatModerator.js",696,s+" changed subscribers moderation for links to false"))}else if(m.equalsIgnoreCase("caps")){if(!l[2])return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.subscribers.toggle.caps",g(G.Caps)));l[2].equalsIgnoreCase("true")?(G.Caps=!0,$.inidb.set("chatModerator","subscribersModerateCaps",G.Caps),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.subscribers.caps.allowed")),$.logEvent("chatModerator.js",707,s+" changed subscribers moderation for caps to true")):l[2].equalsIgnoreCase("false")&&(G.Caps=!1,$.inidb.set("chatModerator","subscribersModerateCaps",G.Caps),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.subscribers.caps.not.allowed")),$.logEvent("chatModerator.js",712,s+" changed subscribers moderation for caps to false"))}else if(m.equalsIgnoreCase("symbols")){if(!l[2])return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.subscribers.toggle.symbols",g(G.Symbols)));l[2].equalsIgnoreCase("true")?(G.Symbols=!0,$.inidb.set("chatModerator","subscribersModerateSymbols",G.Symbols),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.subscribers.symbols.allowed")),$.logEvent("chatModerator.js",723,s+" changed subscribers moderation for symbols to true")):l[2].equalsIgnoreCase("false")&&(G.Symbols=!1,$.inidb.set("chatModerator","subscribersModerateSymbols",G.Symbols),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.subscribers.symbols.not.allowed")),$.logEvent("chatModerator.js",728,s+" changed subscribers moderation for symbols to false"))}else if(m.equalsIgnoreCase("spam")){if(!l[2])return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.subscribers.toggle.spam",g(G.Spam)));l[2].equalsIgnoreCase("true")?(G.Spam=!0,$.inidb.set("chatModerator","subscribersModerateSpam",G.Spam),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.subscribers.spam.allowed")),$.logEvent("chatModerator.js",739,s+" changed subscribers moderation for spam to true")):l[2].equalsIgnoreCase("false")&&(G.Spam=!1,$.inidb.set("chatModerator","subscribersModerateSpam",G.Spam),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.subscribers.spam.not.allowed")),$.logEvent("chatModerator.js",744,s+" changed subscribers moderation for spam to false"))}else if(m.equalsIgnoreCase("emotes")){if(!l[2])return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.subscribers.toggle.emotes",g(G.Emotes)));l[2].equalsIgnoreCase("true")?(G.Emotes=!0,$.inidb.set("chatModerator","subscribersModerateEmotes",G.Emotes),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.subscribers.emotes.allowed")),$.logEvent("chatModerator.js",755,s+" changed subscribers moderation for emotes to true")):l[2].equalsIgnoreCase("false")&&(G.Emotes=!1,$.inidb.set("chatModerator","subscribersModerateEmotes",G.Emotes),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.subscribers.emotes.not.allowed")),$.logEvent("chatModerator.js",760,s+" changed subscribers moderation for emotes to false"))}else if(m.equalsIgnoreCase("colors")){if(!l[2])return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.subscribers.toggle.colors",g(G.Colors)));l[2].equalsIgnoreCase("true")?(G.Colors=!0,$.inidb.set("chatModerator","subscribersModerateColors",G.Colors),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.subscribers.colors.allowed")),$.logEvent("chatModerator.js",771,s+" changed subscribers moderation for colors to true")):l[2].equalsIgnoreCase("false")&&(G.Colors=!1,$.inidb.set("chatModerator","subscribersModerateColors",G.Colors),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.subscribers.colors.not.allowed")),$.logEvent("chatModerator.js",776,s+" changed subscribers moderation for colors to false"))}else if(m.equalsIgnoreCase("longmessages")){if(!l[2])return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.subscribers.toggle.long.msg",g(G.LongMsg)));l[2].equalsIgnoreCase("true")?(G.LongMsg=!0,$.inidb.set("chatModerator","subscribersModerateLongMsg",G.LongMsg),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.subscribers.long.messages.allowed")),$.logEvent("chatModerator.js",787,s+" changed subscribers moderation for long messages to true")):l[2].equalsIgnoreCase("false")&&(G.LongMsg=!1,$.inidb.set("chatModerator","subscribersModerateLongMsg",G.LongMsg),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.subscribers.long.messages.not.allowed")),$.logEvent("chatModerator.js",792,s+" changed subscribers moderation for long messages to false"))}}if(d.equalsIgnoreCase("silenttimeout")){if(!m)return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.silenttimeout.usage"));if(m.equalsIgnoreCase("links")){if(!l[2])return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.silenttimeout.toggle.links",n(U.Links)));l[2].equalsIgnoreCase("true")?(U.Links=!0,$.inidb.set("chatModerator","silentTimeoutLinks",U.Links),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.silenttimeout.links.true")),$.logEvent("chatModerator.js",939,s+" enabled silent timeout for links")):l[2].equalsIgnoreCase("false")&&(U.Links=!1,$.inidb.set("chatModerator","silentTimeoutLinks",U.Links),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.silenttimeout.links.false")),$.logEvent("chatModerator.js",944,s+" disabled silent timeout for links"))}else if(m.equalsIgnoreCase("caps")){if(!l[2])return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.silenttimeout.toggle.caps",g(U.Caps)));l[2].equalsIgnoreCase("true")?(U.Caps=!0,$.inidb.set("chatModerator","silentTimeoutCaps",U.Caps),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.silenttimeout.caps.true")),$.logEvent("chatModerator.js",955,s+" enabled silent timeout for caps")):l[2].equalsIgnoreCase("false")&&(U.Caps=!1,$.inidb.set("chatModerator","silentTimeoutCaps",U.Caps),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.silenttimeout.caps.false")),$.logEvent("chatModerator.js",960,s+" disabled silent timeout for caps"))}else if(m.equalsIgnoreCase("symbols")){if(!l[2])return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.silenttimeout.toggle.symbols",g(U.Symbols)));l[2].equalsIgnoreCase("true")?(U.Symbols=!0,$.inidb.set("chatModerator","silentTimeoutSymbols",U.Symbols),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.silenttimeout.symbols.true")),$.logEvent("chatModerator.js",971,s+" enabled silent timeout for symbols")):l[2].equalsIgnoreCase("false")&&(U.Symbols=!1,$.inidb.set("chatModerator","silentTimeoutSymbols",U.Symbols),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.silenttimeout.symbols.false")),$.logEvent("chatModerator.js",976,s+" disabled silent timeout for symbols"))}else if(m.equalsIgnoreCase("spam")){if(!l[2])return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.silenttimeout.toggle.spam",g(U.Spam)));l[2].equalsIgnoreCase("true")?(U.Spam=!0,$.inidb.set("chatModerator","silentTimeoutSpam",U.Spam),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.silenttimeout.spam.true")),$.logEvent("chatModerator.js",987,s+" enabled silent timeout for spam")):l[2].equalsIgnoreCase("false")&&(U.Spam=!1,$.inidb.set("chatModerator","silentTimeoutSpam",U.Spam),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.silenttimeout.spam.false")),$.logEvent("chatModerator.js",992,s+" disabled silent timeout for spam"))}else if(m.equalsIgnoreCase("emotes")){if(!l[2])return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.silenttimeout.toggle.emotes",g(U.Emotes)));l[2].equalsIgnoreCase("true")?(U.Emotes=!0,$.inidb.set("chatModerator","silentTimeoutEmotes",U.Emotes),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.silenttimeout.emotes.true")),$.logEvent("chatModerator.js",1003,s+" enabled silent timeout for emotes")):l[2].equalsIgnoreCase("false")&&(U.Emotes=!1,$.inidb.set("chatModerator","silentTimeoutEmotes",U.Emotes),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.silenttimeout.emotes.false")),$.logEvent("chatModerator.js",1008,s+" disabled silent timeout for emotes"))}else if(m.equalsIgnoreCase("colors")){if(!l[2])return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.silenttimeout.toggle.colors",g(U.Colors)));l[2].equalsIgnoreCase("true")?(U.Colors=!0,$.inidb.set("chatModerator","silentTimeoutColors",U.Colors),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.silenttimeout.colors.true")),$.logEvent("chatModerator.js",1019,s+" enabled silent timeout for colors")):l[2].equalsIgnoreCase("false")&&(U.Colors=!1,$.inidb.set("chatModerator","silentTimeoutColors",U.Colors),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.silenttimeout.colors.false")),$.logEvent("chatModerator.js",1024,s+" disabled silent timeout for colors"))}else if(m.equalsIgnoreCase("longmessages")){if(!l[2])return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.silenttimeout.toggle.long.msg",g(U.LongMsg)));l[2].equalsIgnoreCase("true")?(U.LongMsg=!0,$.inidb.set("chatModerator","silentTimeoutLongMsg",U.LongMsg),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.silenttimeout.long.messages.true")),$.logEvent("chatModerator.js",1035,s+" enabled silent timeout for long messages")):l[2].equalsIgnoreCase("false")&&(U.LongMsg=!1,$.inidb.set("chatModerator","silentTimeoutLongMsg",U.LongMsg),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.silenttimeout.long.messages.false")),$.logEvent("chatModerator.js",1040,s+" disabled silent timeout for long messages"))}}if(d.equalsIgnoreCase("linksmessage"))return m?(M=o.replace(d,"").trim(),$.inidb.set("chatModerator","linksMessage",M),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.link.message.set",M)),void $.logEvent("chatModerator.js",1056,s+' changed the links warning message to "'+M+'"')):void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.link.message.usage"));
if(d.equalsIgnoreCase("capsmessage"))return m?(v=o.replace(d,"").trim(),$.inidb.set("chatModerator","capsMessage",v),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.caps.message.set",v)),void $.logEvent("chatModerator.js",1071,s+' changed the caps warning message to "'+v+'"')):void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.caps.message.usage"));if(d.equalsIgnoreCase("symbolsmessage"))return m?(E=o.replace(d,"").trim(),$.inidb.set("chatModerator","symbolsMessage",E),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.symbols.message.set",E)),void $.logEvent("chatModerator.js",1086,s+' changed the symbols warning message to "'+E+'"')):void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.symbols.message.usage"));if(d.equalsIgnoreCase("emotesmessage"))return m?(D=o.replace(d,"").trim(),$.inidb.set("chatModerator","emotesMessage",D),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.emotes.message.set",D)),void $.logEvent("chatModerator.js",1101,s+' changed the emotes warning message to "'+D+'"')):void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.emotes.message.usage"));if(d.equalsIgnoreCase("colorsmessage"))return m?(N=o.replace(d,"").trim(),$.inidb.set("chatModerator","colorsMessage",N),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.colors.message.set",N)),void $.logEvent("chatModerator.js",1116,s+' changed the colors warning message to "'+N+'"')):void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.colors.message.usage"));if(d.equalsIgnoreCase("longmsgmessage"))return m?(R=o.replace(d,"").trim(),$.inidb.set("chatModerator","longMessageMessage",R),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.message.message.set",R)),void $.logEvent("chatModerator.js",1131,s+' changed the long messages warning message to "'+R+'"')):void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.message.message.usage"));if(d.equalsIgnoreCase("spammessage"))return m?(P=o.replace(d,"").trim(),$.inidb.set("chatModerator","spamMessage",P),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.spam.message.set",P)),void $.logEvent("chatModerator.js",1146,s+' changed the spam warning message to "'+P+'"')):void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.spam.message.usage"));if(d.equalsIgnoreCase("blacklistmessage"))return m?(K=o.replace(d,"").trim(),$.inidb.set("chatModerator","blacklistMessage",K),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.blacklist.message.set",K)),void $.logEvent("chatModerator.js",1161,s+' changed the spam warning message to "'+K+'"')):void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.blacklist.message.usage"));if(d.equalsIgnoreCase("permittime"))return m?(y=parseInt(m),$.inidb.set("chatModerator","linkPermitTime",y),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.permit.time.set",y)),void $.logEvent("chatModerator.js",1176,s+" changed the link permit time to "+y+" seconds")):void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.permit.time.usage"));if(d.equalsIgnoreCase("capslimit"))return m?(C=parseFloat(m),$.inidb.set("chatModerator","capsLimitPercent",C),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.caps.limit.set",C)),void $.logEvent("chatModerator.js",1191,s+" changed the caps limit to "+C)):void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.caps.limit.usage"));if(d.equalsIgnoreCase("capstriggerlength"))return m?(x=parseInt(m),$.inidb.set("chatModerator","capsTriggerLength",x),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.caps.trigger.length.set",x)),void $.logEvent("chatModerator.js",1206,s+" changed the caps trigger length to "+x)):void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.caps.trigger.length.usage"));if(d.equalsIgnoreCase("spamlimit"))return m?(L=parseInt(m),$.inidb.set("chatModerator","spamLimit",L),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.spam.limit.set",L)),void $.logEvent("chatModerator.js",1221,s+" changed the spam limit to "+L)):void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.spam.limit.usage"));if(d.equalsIgnoreCase("symbolslimit"))return m?(k=parseFloat(m),$.inidb.set("chatModerator","symbolsLimitPercent",k),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.symbols.limit.set",k)),void $.logEvent("chatModerator.js",1236,s+" changed the symbols limit to "+k)):void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.symbols.limit.usage"));if(d.equalsIgnoreCase("symbolsgrouplimit"))return m?(j=parseInt(m),$.inidb.set("chatModerator","symbolsLimitPercent",j),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.symbols.group.limit.set",j)),void $.logEvent("chatModerator.js",1251,s+" changed the symbols group limit to "+j)):void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.symbols.group.limit.usage"));if(d.equalsIgnoreCase("symbolsTriggerLength"))return m?(T=parseInt(m),$.inidb.set("chatModerator","symbolsTriggerLength",T),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.symbols.trigger.length.set",T)),void $.logEvent("chatModerator.js",1266,s+" changed the symbols trigger length to "+T)):void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.symbols.trigger.length.usage"));if(d.equalsIgnoreCase("emoteslimit"))return m?(B=parseInt(m),$.inidb.set("chatModerator","emotesLimit",B),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.emotes.limit.set",B)),void $.logEvent("chatModerator.js",1281,s+" changed the emote limit to "+B)):void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.emotes.limit.usage"));if(d.equalsIgnoreCase("messagecharacterlimit"))return m?(F=parseInt(m),$.inidb.set("chatModerator","longMessageLimit",F),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.message.limit.set",F)),void $.logEvent("chatModerator.js",1296,s+" changed the max characters per message limit to "+F)):void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.message.limit.usage"));if(d.equalsIgnoreCase("timeouttime"))return m?(W=parseInt(m),$.inidb.set("chatModerator","timeoutTime",W),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.timeout.time.set",W)),void $.logEvent("chatModerator.js",1311,s+" changed the timeout time to "+W+" seconds")):void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.timeout.time.usage"));if(d.equalsIgnoreCase("warningtime"))return m?(H=parseInt(m),$.inidb.set("chatModerator","warningTime",H),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.warning.time.set",H)),void $.logEvent("chatModerator.js",1326,s+" changed the warning time to "+H+" seconds")):void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.warning.time.usage"));if(d.equalsIgnoreCase("messagecooldown")){if(!m)return void $.say($.whisperPrefix(s)+$.lang.get("chatmoderator.msgcooldown.usage"));z=parseInt(m),$.inidb.set("chatModerator","msgCooldownSec",z),$.say($.whisperPrefix(s)+$.lang.get("chatmoderator.msgcooldown.set",z))}}}),$.bind("initReady",function(){$.bot.isModuleEnabled("./core/chatmoderator.js")&&(t(),e(),$.registerChatCommand("./core/chatmoderator.js","permit",2),$.registerChatCommand("./core/chatmoderator.js","moderation",1),$.registerChatCommand("./core/chatmoderator.js","mod",1),$.registerChatCommand("./core/chatmoderator.js","blacklist",1),$.registerChatCommand("./core/chatmoderator.js","whitelist",1))}),$.timeoutUser=r,$.permitUserLink=i}();
