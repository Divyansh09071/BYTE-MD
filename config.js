
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "mrsharabi0907@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "918882829982@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "918882829982";
global.sudo = process.env.SUDO || "443301901382";
global.owner = process.env.OWNER_NUMBER || "918882829982";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID = Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0RkZUhjaXdwakUzZmZOcHJCaXJ1MWJveXlydzZhdGNOT2F3WjhBNTQwMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzh4UEphdlRDZiszNzcyMlVEb21Qc2dMcHNib3JIYXNzVmVTbFlPakd6ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRmFaREZyaDRCNGxHYlYyKzBObjV3WnhkekZhbW1ySlBNMzhLRlZnMjFvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSTA0UWFxRE9jYkxSTWJjU2ZmVDh5ZVZxVzJ3YkZLTm9lK1V3amxQa2hBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNCQWgvamJLOTRiMFVXYUI4MkhCU3NTdGxBZGJEWDhzUWdmV0hWd2R3SFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii80amR2TE1iMW1JajEzTllnV3RFVXhxR0tTZ2p5Y2RZbC9PRXNQd1NNSEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia05NQ1RaL25peUFMUVdBNnp1a0oxYTRPSTJrQjFPMFY1Z2x2cHMxRE1Vdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZFRKSVE4Ty9BdTR4aU1jRGZacFVkNm9TV3dHd215b2V0a2l4WHJiQzQwST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhXMlcxNDJzNzJQaWFISHVlbC9kZjR6cWUwemNlRndpZHVQYzhGbEpBZWt4RmhHS2gxczN3a2tSbmUrclVnWTRYbkdJYTNDa3dlbkhrSDFDUHZIZ2lRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM3LCJhZHZTZWNyZXRLZXkiOiJKRUE5bnNqbXd1ZENLY3BIN3c3VnVESHdVUTNyVnZQTllMRkhYVTR4QkVBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJtOGZ4aUlWZFFxcTA1dzJNZDl6R3RnIiwicGhvbmVJZCI6Ijc1MTNjY2Y1LTQ4NGMtNDJlMS1iMjU5LTA2MGFjMjVkYzk3OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvU0NqSTUxejJjQ0JsdFM2disyR0EvQ0YvRHc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFUvWjdtVm9NajNEN2U1bG5ndlMySUVlVWVJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdFQU00R0pNIiwibWUiOnsiaWQiOiI5MTg4ODI4Mjk5ODI6MTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi44WkICDigoLht6HigobNpi7NriDwnZCU8J2YgMedzJDwnZe/IM2c8J2Qh2HNjnPMkcyIIPCdkIPJqsykyZzMpOG0hcykIOKGkeKGkyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHZoa2JRR0VQbjA1TFFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRlRYNi92ZkY1OFFPSjJ4aDVtTTFQMEEwTnZUeVVLMGV4Qy8rQ0dBYTVXTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRjladHdRWFBmTmZpSkV2NE01VkxXc0NSU2xuMER1VUNPcTdlVG1PRmdiTllhZEhlU1VtNk4xVTRPelBIdEdYTlZJRHNYNzZIY3lJSzg2c09KNVBwQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6ImFsUk5qY3ptd3phTzZiS3ZUU0FtcVNEeGkyRUFVZFp3R2ZGdlBLVy9pcXkvSHFyZmV1NlFVaitKVHpPOXBSRk1PMzZ3K3N2eEF4VnJrdmp6TjRJamh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE4ODgyODI5OTgyOjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJVMSt2NzN4ZWZFRGlkc1llWmpOVDlBTkRiMDhsQ3RIc1F2L2doZ0d1VmoifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjEzMTgwMjEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSmVNIn0=
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Your session ID" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "TalkDrove",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
