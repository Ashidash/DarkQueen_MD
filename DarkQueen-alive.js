const { cmd, botpic, Config, tlang,getBuffer, prefix } = require('../lib')
const hrs = new Date().getHours({ timeZone: 'Asia/Karachi' })
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


//---------------------------------------------------------------------------
cmd({
            pattern: "alive",
            desc: "Show Live Time Of Pakistan",
            category: "chugiyan",
	          filename: __filename,
            use: '<group link.>',
        },
        async(Void, citel, text,{ isCreator }) => {
var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Karachi' }).split(' ')[1]
var date = new Date().toLocaleDateString(get_localized_date)
var wish = ''
if (hrs < 12) wish = 'ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅'
if (hrs >= 12 && hrs <= 16) wish = 'ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞'
if (hrs >= 16 && hrs <= 20) wish = 'ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥'
if (hrs >= 20 && hrs <= 24) wish = 'ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙'
var am_pm = ''
if (hrs < 12) am_pm = 'ᴀᴍ'
if (hrs >= 12 && hrs <= 24) am_pm = 'ᴘᴍ'
const suhail= [777,0,100,500,1000,999,2021]
const q = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
        "orderMessage": {
           "itemCount" : suhail[Math.floor(8*Math.random())],
           "status": 1,
           "surface" : 1,
           "message": `❏ ${Config.botname} ➬ Whatsapp Bot BY Mr.Notiya`,
           "orderTitle": "alive",
           "sellerJid": '919778535328@s.whatsapp.net' 
        }
      }
}

let timenow =`
┏╼═╾╼═╾╼═╾╼═╾╼═╾╼═╾❋
┃↱ᴅᴀʀᴋ ᴄʜᴜɢɪʏᴀɴ ᴍᴅ↲
┃👋ʜᴇʟʟᴏᴡ ${citel.pushName},
┣❑*${wish}* 
┣❑ ɪᴀᴍ ᴄʜᴜɢɪʏᴀɴ ᴹᴰ
┣╼═╾╼═╾╼═╾╼═╾╼═╾●
┣❍ʙᴏᴛ ꜱᴘᴇᴇᴅ: ❲${latensie.toFixed(4)}❳
┣❍ᴜᴘᴛɪᴍᴇ: ❲${runtime(process.uptime())}❳
┣❍ᴏᴡɴᴇʀ: ❲ᴄʜᴀᴍᴏᴅʜ❳
┣❍ᴛɪᴍᴇ: ❲${time} ${am_pm}❳
┃
┃🎩 *_ᴅᴀʀᴋ ᴄʜᴜɢɪʏᴀɴ ᴍᴅ_*🎩
┃🎭 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ ᴄʜᴜɢɪʏᴀɴ_*🎭
┗╼═╾╼═╾╼═╾╼═╾╼═╾╼═╾❋

`
return await Void.sendMessage(citel.chat, { text:timenow }, { quoted : q } )
  
  
})
