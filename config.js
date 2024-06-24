const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348100151048";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_29_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzksXG4gICAgICAgIDYxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA1LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDksXG4gICAgICAgIDU1LFxuICAgICAgICAxNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTU3LFxuICAgICAgICA5LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTcyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTYsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQwLFxuICAgICAgICAyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MixcbiAgICAgICAgNjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDc2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDksXG4gICAgICAgIDgyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgODEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MixcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTQsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDUsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMixcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk1LFxuICAgICAgICA1NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDc3LFxuICAgICAgICA4MyxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICA3LFxuICAgICAgICAyNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODYsXG4gICAgICAgIDQzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODksXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgODcsXG4gICAgICAgIDgxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDUzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3LFxuICAgICAgICA3MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTUxLFxuICAgICAgICA4NixcbiAgICAgICAgMTI4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiakRHV0d1L0VoTXZpdDFtM0hxM0FIRURPaTd4OGFodmJHZWtoRmU0Z0tRMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSlJRcDZfc2JRd2VRcm4tY09GeTZKd1wiLFxuICBcInBob25lSWRcIjogXCI1MWI5OWYxNi1jYzI1LTQ4NGUtYjAzOS05YWYzYmQzNDUwYTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDEsXG4gICAgICA2MSxcbiAgICAgIDIyNCxcbiAgICAgIDUxLFxuICAgICAgMTM5LFxuICAgICAgMTk5LFxuICAgICAgMTk2LFxuICAgICAgMjEyLFxuICAgICAgMTIyLFxuICAgICAgMTcsXG4gICAgICAyNCxcbiAgICAgIDk4LFxuICAgICAgMjE2LFxuICAgICAgMTksXG4gICAgICAxNTAsXG4gICAgICA0NyxcbiAgICAgIDIzOSxcbiAgICAgIDI0MSxcbiAgICAgIDEzOCxcbiAgICAgIDIyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAyLFxuICAgICAgMTcyLFxuICAgICAgMTAzLFxuICAgICAgMTI3LFxuICAgICAgMTc1LFxuICAgICAgMjQzLFxuICAgICAgMjMsXG4gICAgICAxMDUsXG4gICAgICA2MCxcbiAgICAgIDM0LFxuICAgICAgMTQ2LFxuICAgICAgMTg4LFxuICAgICAgMTg3LFxuICAgICAgMTAxLFxuICAgICAgNzgsXG4gICAgICAyOSxcbiAgICAgIDI0NixcbiAgICAgIDIyOSxcbiAgICAgIDE5OCxcbiAgICAgIDI0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xTdm9NNEdFUG4xNXJNR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaUlVNXhYcktSdnNlSWoveHRUWHpsRFJPdCtQUlN5dGI5SVdBK3NEaUZnMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJoZVdiUStDdERkdHNTd3ZkTC96QUhvbHZkS21mYXAxMnUyaFNJZXNueGQzcWlJdlBPa0hmNVk5ZVVZUDVXZGxMa3ZocXdHNFhQSFdCZk1oeVMwaFFCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvMWI2N0hVSXVlV3pGaHg4SEY0b2NlcDdwL25GWjJDdndNL3JMZHZpRWVJMjhDUUNzL1RFWW80MzRiejRlTE94ZWUyOVppMFN0TzA5aUc4VlJOLzlqdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDAxNTEwNDg6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0Nzk3OTIyMjY1NTE3MDo0OEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDAxNTEwNDg6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MjUzNzU3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTmhVXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOaFQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJqejZBa0piRUxRS2o2RDcwaHI5T3IyNkVvSERicHk4b0tibG9pR0o1V2NzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NzQ3MjA5NDgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTAxMDA4NzUxNVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5oVS5qc29uIjogIntcImtleURhdGFcIjpcImdxeFB0ZnUvczBMdlhRSGVzOGhUT1F0d050a0JXeWtlLzZrclp4bmJTOVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc3NDcyMDk0OCxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsNCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkwMjE4MDQ4NzFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOaFcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwYWVrYXhxeXZCNDNEVkdKKzBrcXpOTUttbXlUeWZPdWEvNFNmSnp2cnVzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NzQ3MjA5NDgsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOls1LDEsNCwwLDZdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTI1MzY5MTQxM1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
