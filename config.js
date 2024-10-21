const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254105303460"
global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "°",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_05_18_10_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzksXG4gICAgICAgIDg3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTgyLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTAsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODQsXG4gICAgICAgIDE2LFxuICAgICAgICAzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjExLFxuICAgICAgICA3NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDg3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDk4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MixcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODksXG4gICAgICAgIDY3LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgODYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQzLFxuICAgICAgICA3OSxcbiAgICAgICAgMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTcsXG4gICAgICAgIDE3LFxuICAgICAgICAyNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODIsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDczLFxuICAgICAgICAxMjIsXG4gICAgICAgIDYzLFxuICAgICAgICA2MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2NSxcbiAgICAgICAgNjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDY1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDY5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTExLFxuICAgICAgICA5NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjA3LFxuICAgICAgICA3NixcbiAgICAgICAgODYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIvOEdmU2EvaGxON3JPR2Z6ZjljeWNLVVc0eVdyckhVY0d3bnR4bUdTdzU0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKYVdYN1d5UFRfR3hOZm02bzg5UTJ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjVkMTI5M2MwLTRhYjAtNDc2Ni05MGY1LWIxYmUxMDRlNzcwOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzksXG4gICAgICAxMjgsXG4gICAgICAyMyxcbiAgICAgIDQyLFxuICAgICAgMjEwLFxuICAgICAgMzAsXG4gICAgICAyMzcsXG4gICAgICAxMjEsXG4gICAgICA0MixcbiAgICAgIDk2LFxuICAgICAgMjAyLFxuICAgICAgMTYyLFxuICAgICAgMTUzLFxuICAgICAgMjA4LFxuICAgICAgMTc1LFxuICAgICAgMTk3LFxuICAgICAgMTg3LFxuICAgICAgMTMyLFxuICAgICAgNzQsXG4gICAgICAyMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzMsXG4gICAgICAyMTYsXG4gICAgICAxNTcsXG4gICAgICAxNTAsXG4gICAgICAxNTksXG4gICAgICAzNyxcbiAgICAgIDIxOSxcbiAgICAgIDExMyxcbiAgICAgIDE5MCxcbiAgICAgIDEwLFxuICAgICAgMTI3LFxuICAgICAgODgsXG4gICAgICA2LFxuICAgICAgNDEsXG4gICAgICAxNzIsXG4gICAgICAxMTgsXG4gICAgICAxOSxcbiAgICAgIDIxNSxcbiAgICAgIDEwMyxcbiAgICAgIDIwMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFQ0RCREo4NFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0MTA1MzAzNDYwOjY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjU3MTg0OTEwODY5NjA6NjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0NJOGFNSEVLakkxN2dHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3NGozczVkSVhzMG91d0krTWxLUlJJZytYRjI2V1hCc0lielc1aklqK1g0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk1xZFc2ZU5DUXFvbmV1d3dOdTVEdnFaa2ZHWFZOQjRMMHlhb1FObXFmd0FMSmFFMGFLMm9Yay9iWTgyaVRUOUowVGZtbjdaREVVOE4xajMzN2ovZUJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInFuOWEycmZORTVFSkowUEFZUVJXNGlJck0rdytoTUM4YmVqN2lQN2pVcFdseEtWMEJKRzh2NHF1VDFNTU9TMnkwK2gwWk9WYmYyc0QrOHZHdmpDbmp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDEwNTMwMzQ2MDo2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5NDg3OTE1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRFprXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEWmsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJIVDdOQTdNTzZlVFA4Z2FDMCsxQ2JMZzFCYmFvRkd1c0gxQUtBRUowbUQ4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5NTQzMDEwMjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjk0ODU3MTk4MTBcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
