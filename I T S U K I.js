/*
RECODE BY    I T S U K I
SC ORI BY       GURA <- KYANYA SI
MY GITHUB https://github.com/kangabut/
BTW ACAK ACAKAN SCRIPT NYA :V
GAK TERKATEGORI GITU
GW GABUNGIN SC YG LAMA KE YG INI :V
FITURNYA GK SEMUA GW GABUNGIN
KARENA ERROR
MUNGKIN NANTI DI V2
INI KERAMEAN GPP YA
PENJELASAN
KLO ERROR HUB GW AJ https://wa.me/6289501208400/
JANGAN DIAPUS YA:V
YG NGAPUS SEMOGA ERROR
TQ TO GURA
*/
const {
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange,
    MessageOptions,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    waChatKey,
    mentionedJid,
    WA_DEFAULT_EPHEMERAL
} = require("@adiwajshing/baileys");
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const request = require('request')
const util = require('util')
const hx = require('hxz-api')
const base64Img = require('base64-img')
const ms = require('parse-ms')
const figlet = require('figlet')
const ytsd = require('ytsr')
const brainly = require('brainly-scraper')
const ig = require('insta-fetcher')
const cheerio = require('cheerio')
const fromData = require('form-data')
const os = require('os')
const translate = require('@vitalets/google-translate-api')
const ggs = require('google-it')
const googleImage = require('g-i-s')
const toMs = require('ms')
const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const Math_js = require('mathjs')
const { EmojiAPI } = require("emoji-api")
const crypto = require('crypto')
const emoji = new EmojiAPI()
const speed = require('performance-now')
const { exec } = require('child_process')
const { uploadimg, upload } = require('./lib/uploadimg')
const { webp2mp4File } = require('./lib/webp2mp4')
const { lirikLagu } = require('./lib/lirik.js')
const { wikiSearch } = require('./lib/wiki.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { mediafireDl } = require('./lib/mediafire.js')
const { pinterest } = require('./lib/pinterest')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const client = new WAConnection()

//------ FUNCTION -------
const { color, bgcolor } = require('./lib/warna')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close , sleep} = require('./lib/functions')
const { fetchJson, fetchText , kyun} = require('./lib/fetcher')
const { Tiktokdl } = require('./lib/tiktok.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const Exif = require('./lib/exif');
const exif = new Exif();
const { smsg } = require('./lib/simple')
const { mediafiredl } = require('./lib/mediafiredl')

const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('10m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
//----- DATABASE -------
let setting = JSON.parse(fs.readFileSync('./setting.json'))
const _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
let anlink = JSON.parse(fs.readFileSync('./database/antilink.json'))
let welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))


//----- SINGKAT -------
multi = true
nopref = false
offline = false
publik = true
bugc = true
waktuafk = 'Nothing'
alasanafk = 'Nothing'
prefix = setting.prefix
owner = setting.owner
lolkey = setting.lolkey
mot = '•'
ke = '```'
pathImg = setting.pathImg
ownerNomor = [`${setting.ownerNumber}`]
ownerName = setting.ownerName
rply = '©I T S U K I'
tamnel = fs.readFileSync('./media/itsu.jpg')



module.exports = gura = async (gura, dep,) => {
try {
if (!dep.hasNewMessage) return
dep = dep.messages.all()[0]
if (!dep.message) return
if (dep.key && dep.key.remoteJid == 'status@broadcast') return
dep.message = (Object.keys(dep.message)[0] === 'ephemeralMessage') ? dep.message.ephemeralMessage.message : dep.message
m = smsg(gura, dep)

const content = JSON.stringify(dep.message)
const from = dep.key.remoteJid
const type = Object.keys(dep.message)[0]
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};  

const cmd = (type === 'buttonsResponseMessage' && dep.message.buttonsResponseMessage.selectedButtonId && m.quoted.sender === gura.user.jid) ? dep.message.buttonsResponseMessage.selectedButtonId : (type === 'listResponseMessage' && dep.message.listResponseMessage.singleSelectReply.selectedRowId && m.quoted.sender === gura.user.jid) ? dep.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'conversation' && dep.message.conversation) ? dep.message.conversation : (type == 'imageMessage') && dep.message.imageMessage.caption ? dep.message.imageMessage.caption : (type == 'videoMessage') && dep.message.videoMessage.caption ? dep.message.videoMessage.caption : (type == 'extendedTextMessage') && dep.message.extendedTextMessage.text ? dep.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(dep.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(dep.message.stickerMessage.fileSha256.toString('hex')) !== undefined) ? getCmd(dep.message.stickerMessage.fileSha256.toString('hex')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
body = (type === 'buttonsResponseMessage' && dep.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) && m.quoted.sender === gura.user.jid) ? dep.message.buttonsResponseMessage.selectedButtonId : (type === 'listResponseMessage' && dep.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) && m.quoted.sender === gura.user.jid) ? dep.message.listResponseMessage.singleSelectReply.selectedRowId : (type === 'conversation' && dep.message.conversation.startsWith(prefix)) ? dep.message.conversation : (type == 'imageMessage') && dep.message.imageMessage.caption.startsWith(prefix) ? dep.message.imageMessage.caption : (type == 'videoMessage') && dep.message.videoMessage.caption.startsWith(prefix) ? dep.message.videoMessage.caption : (type == 'extendedTextMessage') && dep.message.extendedTextMessage.text.startsWith(prefix) ? dep.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(dep.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(dep.message.stickerMessage.fileSha256.toString('hex')) !== undefined) ? (getCmd(dep.message.stickerMessage.fileSha256.toString('hex')).startsWith(prefix) ? getCmd(dep.message.stickerMessage.fileSha256.toString('hex')) : '') : ""
budy = (type === 'conversation') ? dep.message.conversation : (type === 'extendedTextMessage') ? dep.message.extendedTextMessage.text : ''
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const on = process.uptime()
chats = (type === 'conversation') ? dep.message.conversation : (type === 'extendedTextMessage') ? dep.message.extendedTextMessage.text : ''
const args = body.trim().split(/ +/).slice(1)
const arg = chats.slice(command.length + 2, chats.length)
const isCmd = body.startsWith(prefix)

mess = {
wait: 'Wait...',
search: 'Searching...',eror: 'Error',
success: 'Berhasil️',
error: {
stick: 'Ulangi bang',
Iv: 'Link tidak valid'
},
only: {
prem : 'Premium special features! Chat owner to get Premium access!',
group: 'Fitur Dapat digunakan di Dalam Group!',
ownerG: 'Fitur Dapat digunakan oleh Owner Group!',
ownerB: 'Fitur Khusus Owner Bot!',
admin: 'Fitur dapat Digunakan oleh Admin Group!',
Badmin: 'Fitur dapat Digunakan Setelah Bot menjadi ADMIN!'
}
}

const totalchat = await gura.chats.all()
const botNumber = gura.user.jid
const ownerNumber = setting.ownerNumber
const ownerName = setting.ownerName
const botName = setting.botName
const donasiNumber = setting.donasiNumber
const isGroup = from.endsWith('@g.us')
const sender = dep.key.fromMe ? gura.user.jid : isGroup ? dep.participant : dep.key.remoteJid
const senderNumber = sender.split("@")[0]
const groupMetadata = isGroup ? await gura.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isAntilink = isGroup ? anlink.includes(from) : false
const isWelkom = isGroup ? welkom.includes(from) : false
const itsMe = dep.key.fromMe ? true : false
const isOwner = ownerNumber.includes(sender)
const conts = dep.key.fromMe ? gura.user.jid : gura.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = dep.key.fromMe ? gura.user.name : conts.notify || conts.vname || conts.name || '-'
const q = args.join(' ')

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
cmhit = []
autorespon = false
playmusic = false
antidelete = false
menusimpel = false
menuall = false
baterai = {
battery: "" || "Not detected",
isCharge: "" || false
}
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}
const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
gura.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `Hai kak  *${pushname}*\nBagaimana Kabarmu\nSebelum memulai daftar dulu ya `
const daftar2 = '```Ketik Tombol Di Bawah Untuk Verify Kak\n\nkalau gak ada ketik #verify```'
const daftar3 = [{buttonId: `.verify`,buttonText: {displayText: `DAFTAR `,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
gura.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await gura.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
gura.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await gura.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
gura.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await gura.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
gura.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
if (!dep.key.remoteJid.endsWith('@g.us') && offline){
			if (!dep.key.fromMe){
            if (isAfk(dep.key.remoteJid)) return
            addafk(dep.key.remoteJid)
			heheh = ms(Date.now() - waktuafk)
		  sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${Owner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*_© I T S U K I_*", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
			}
		}
		if (dep.key.remoteJid.endsWith('@g.us') && offline) {
			if (!dep.key.fromMe){
				if (dep.message.extendedTextMessage != undefined){
					if (dep.message.extendedTextMessage.contextInfo != undefined){
						if (dep.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
				for (let ment of dep.message.extendedTextMessage.contextInfo.mentionedJid) {
					if (ment === itsu.user.jid){
                        if (isAfk(dep.key.remoteJid)) return
                        addafk(dep.key.remoteJid)
						heheh = ms(Date.now() - waktuafk)
			       sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${Owner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*_© I T S U K I_*", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
				}
						}
					}
				}
			}
		}
		const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./temp/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					gura.sendMessage(to, media, sticker, {quoted: dep})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker'))
					});
					});
				});
			}
        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        gura.sendMessage(from, media, MessageType.sticker,{quoted:dep})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
const fakevo = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast'
  },
  message: {
    imageMessage: {
      mimetype: 'image/jpeg',
      caption: 'I T S U K I',
      jpegThumbnail: fs.readFileSync('./media/itsu.jpg'),
      viewOnce: true
    }
  }
}

function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

const reply = (teks) => {
   gura.sendMessage(from,teks,text,{quoted: fakevo})
}

const replyNtag = (teks) => {
	gura.sendMessage(from, teks, text, {quoted:fakevo, contextInfo:{mentionedJid:parseMention(teks)}})
}

const replyNimg = (teks, gambar) => {
	gura.sendMessage(from, gambar,image, {caption : teks,quoted:fakevo, contextInfo:{mentionedJid:parseMention(teks)}})
}

const sendMess = (hehe, teks) => {
	gura.sendMessage(hehe, teks, text)
}

const mentions = (teks, memberr, id) => {
	(id == null || id == undefined || id == false) ? gura.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : gura.sendMessage(from, teks.trim(), extendedText, {quoted:dep, contextInfo: {"mentionedJid": memberr}})
}


const runtime = function(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
                }
                
if (isGroup && !dep.key.fromMe && isAntilink) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply('Your is Admin!! Bot not Found kick You :D')
console.log(color('[KICK]', 'red'), color('Received a link!', 'yellow'))
reply(`「 *LINK GRUP TERDETEKSI* 」\n\n_Link Group terdeteksi!!_\n_Kamu akan di kick dari Group!!_`)
setTimeout(() => {
gura.groupRemove(from, [sender])
}, 2000);
}
}         
                
colors = ['red','white','black','blue','yellow','green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

function monospace(string) {
return '```' + string + '```'
} 
function jsonformat(string) {
return JSON.stringify(string, null, 2)
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
const nebal = (angka) => {
return Math.floor(angka)
}
const dfrply = fs.readFileSync('./itsu.jpg')
		cmhit.push(command)
        mess = {
			wait: 'Wait a minute',
			success: 'Success',
			error: {
				stick: 'Cannot access videos!',
				Iv: 'Invalid link!',
                api: 'Error'
			},
			only: {
				group: 'Only for within the group!',
				ownerG: 'Only for group owners!',
				ownerB: 'Only for bot owners!',
				admin: 'Only for group admins!',
				Badmin: 'Make the bot a group admin!'
			}
		}
		const grupinv = (teks) => {
        	grup = itsu.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/JI25LDtPW784GAZoRD9fW9', "groupName": `${BotName}`, "footerText": "*_© I T S U K I_*", "jpegThumbnail": ofrply, "caption": teks}}, {quoted:finv})
            itsu.relayWAMessage(grup)
        }
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
	    }
const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
		try {
		pporang = await gura.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i.pinimg.com/736x/4c/d4/dd/4cd4dd1ea53c5f1870b78e89de6b1cdb.jpg'
		      }
		const ofrply = await getBuffer(pporang)
		const pporigi = fs.readFileSync('./itsu.jpg')
		const sekarang = new Date().getTime();
		//>>>>>>>>STICKER<<<<<<<\\
		const sticOwner = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/owner.webp')
			gura.sendMessage(hehe, ano, sticker, { quoted: dep})
		}
		const sticNotAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/notadmin.webp')
			gura.sendMessage(hehe, ano, sticker, { quoted: dep})
		}
		const sticAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/admin.webp')
			gura.sendMessage(hehe, ano, sticker, { quoted: dep})
		}
		const sticWait = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/wait.webp')
			gura.sendMessage(hehe, ano, sticker, { quoted: dep})
		}
		const sticOk = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/ok.webp')
			gura.sendMessage(hehe, ano, sticker, { quoted: dep})
		}
		const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
gura.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
gura.sendMessage(from, hasil, type, options).catch(e => {
gura.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}
			//-
			//WAKTU
			var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Midnight 🌚"; break;
                case 1: jamss = "Midnight 🌚"; break;
                case 2: jamss = "Midnight 🌚"; break;
                case 3: jamss = "Midnight 🌔"; break;
                case 4: jamss = "Midnight 🌔"; break;
                case 5: jamss = "Dawn 🌄"; break;
                case 6: jamss = "Morning 🌄"; break;
                case 7: jamss = "Morning 🌄"; break;
                case 8: jamss = "Morning ☀️"; break;
                case 9: jamss = "Morning ☀️"; break;
                case 10: jamss = "Morning ☀️"; break;
                case 11: jamss = "Afternoon 🌞"; break;
                case 12: jamss = "Zuhur 🌞"; break;
                case 13: jamss = "Afternoon 🌞"; break;
                case 14: jamss = "Afternoon 🌞"; break;
                case 15: jamss = "Asr 🌞"; break;
                case 16: jamss = "Afternoon ☀️"; break;
                case 17: jamss = "Evening 🌄"; break;
                case 18: jamss = "Maghrib 🌄"; break;
                case 19: jamss = "Isha 🌙"; break;
                case 20: jamss = "Night 🌙"; break;
                case 21: jamss = "Night 🌙"; break;
                case 22: jamss = "Midnight 🌙"; break;
                case 23: jamss = "Midnight 🌚"; break;
            }
            var tampilUcapan = "" + jamss;
            const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
                                        }
if(time2 < "19:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
                                         }
if(time2 < "18:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/08/7b/81087b2e732dc0e25d8875b135d579b9.jpg')
                                         }
if(time2 < "15:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
                                         }
if(time2 < "11:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
                                         }
if(time2 < "06:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/15/8e/ea/158eea299c01433aae6744599d2fdc3a.jpg')
}
const hideTag = async function(from, text){
	       let anu = await gura.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       gura.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('./media/itsu.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  

const kick = function(from, orangnya){
	       for (let i of orangnya){
	       gura.groupRemove(from, [i])
        }
        }
       const kickMember = async(id, target = []) => {
           let group = await gura.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = gura.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await gura.groupRemove(to, [i])
        } else {
           await gura.sendMessage(id, "Not Premited!", "conversation")
           break
        }
    }
}
       const add = function(from, orangnya){
	       gura.groupAdd(from, orangnya)
}
const katalog = (teks) => {
             res = gura.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*_© I T S U K I_*", "thumbnail": ofrply, "surface": 'CATALOG' }}, {quoted:ftrol})
             gura.relayWAMessage(res)
        }
const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": imageTime //Gambarnye
					},
					"title": `${ucapanWaktu} ${pushname}`, //Kasih namalu 
					"description": `${ucapanWaktu} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${ucapanWaktu} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
// TROLI
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`, //Kasih namalu
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: dfrply, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
// LOCATION
const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${ucapanWaktu} ${pushname}`,
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// DOCUMENT
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${ucapanWaktu} ${pushname}`, 
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${ucapanWaktu} ${pushname}`,
                 "h": `${ucapanWaktu} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  }
// GROUPINVITE
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${ucapanWaktu} ${pushname}`,
			"groupName": `${ucapanWaktu} ${pushname}`, 
            "caption": `${ucapanWaktu} ${pushname}`, 
            'jpegThumbnail': dfrply
		}
	}
}
// STICKER
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"pngThumbnail": dfrply,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// GIF
const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${ucapanWaktu} ${pushname}`,
                 "h": `${ucapanWaktu} ${pushname}`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  } 
// TEXT WITH THUMBNAIL
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${ucapanWaktu} ${pushname}`,
                 "title": `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
	                  } 
                     }
// VN
const fvoc = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "99999",
                 "ptt": "true"
                        }
	                  } 
                     }
const sendBug = async (target) => {
      await gura.relayWAMessage(
        gura.prepareMessageFromContent(
          target,
          gura.prepareDisappearingMessageSettingContent(0),
          {}
        ),{ waitForAck: true }) 
    }
//end    
async function sendStickerFakeSize(buffer) {
fsize = await gura.prepareMessage(from, buffer, sticker)
costick = await gura.prepareMessageFromContent(from,{
"stickerMessage": {
"url": fsize.message.stickerMessage.url,
"fileSha256": fsize.message.stickerMessage.fileSha256.toString('base64'),
"fileEncSha256": fsize.message.stickerMessage.fileEncSha256.toString('base64'),
"mediaKey": fsize.message.stickerMessage.mediaKey.toString('base64'),
"mimetype": fsize.message.stickerMessage.mimetype,
"height": fsize.message.stickerMessage.height,
"width": fsize.message.stickerMessage.width,
"directPath": fsize.message.stickerMessage.directPath,
"fileLength": `9999999999999`,
"mediaKeyTimestamp": fsize.message.stickerMessage.mediaKeyTimestamp.low,
"isAnimated": fsize.message.stickerMessage.isAnimated
}
}, {quoted:dep})
gura.relayWAMessage(costick)
}
		
async function sendStickerWm(from, path, quoted, packStick, authorStick, type, emote) {
let size =(type == null || type == undefined || type == false) ? 'full' : 'crop'
return await WSF.createSticker(path, { type: size ,pack: packStick,author: authorStick,categories: emote ? emote : ["❤"," 😍"," 😘"," 💕"," 😻"," 💑"," 👩‍❤‍👩"," 👨‍❤‍👨"," 💏"," 👩‍❤‍💋‍👩"," 👨‍❤‍💋‍👨"," 🧡"," 💛"," 💚"," 💙"," 💜"," 🖤"," 💔"," ❣"," 💞"," 💓"," 💗"," 💖"," 💘"," 💝"," 💟"," ♥"," 💌"," 💋"," 👩‍❤️‍💋‍👩"," 👨‍❤️‍💋‍👨"," 👩‍❤️‍👨"," 👩‍❤️‍👩"," 👨‍❤️‍👨"," 👩‍❤️‍💋‍👨"," 👬"," 👭"," 👫"," 🥰"," 😚"," 😙"," 👄"," 🌹"," 😽"," ❣️"," ❤️","😀"," 😃"," 😄"," 😁"," 😆"," 😅"," 😂"," 🤣"," 🙂"," 😛"," 😝"," 😜"," 🤪"," 🤗"," 😺"," 😸"," 😹"," ☺"," 😌"," 😉"," 🤗"," 😊","☹"," 😣"," 😖"," 😫"," 😩"," 😢"," 😭"," 😞"," 😔"," 😟"," 😕"," 😤"," 😠"," 😥"," 😰"," 😨"," 😿"," 😾"," 😓"," 🙍‍♂"," 🙍‍♀"," 💔"," 🙁"," 🥺"," 🤕"," ☔️"," ⛈"," 🌩"," 🌧","😯"," 😦"," 😧"," 😮"," 😲"," 🙀"," 😱"," 🤯"," 😳"," ❗"," ❕"," 🤬"," 😡"," 😠"," 🙄"," 👿"," 😾"," 😤"," 💢"," 👺"," 🗯️"," 😒"," 🥵","👋","🎊"," 🎉"," 🎁"," 🎈"," 👯‍♂️"," 👯"," 👯‍♀️"," 💃"," 🕺"," 🔥"," ⭐️"," ✨"," 💫"," 🎇"," 🎆"," 🍻"," 🥂"," 🍾"," 🎂"," 🍰","🌃"]}).then((buffer) => gura.sendMessage(from, buffer, MessageType.sticker, { quoted: quoted}))
}

const hour_now = moment().format('HH')
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢'
if (hour_now >= '03' && hour_now <= '10') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠'
} else if (hour_now >= '10' && hour_now <= '14') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠'
} else if (hour_now >= '14' && hour_now <= '17') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞'
} else if (hour_now >= '17' && hour_now <= '18') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'
} else if (hour_now >= '18' && hour_now <= '23') {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'
} else {
ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'
}

const sendStickerFromUrl = async(to, url) => {
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('../lib/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./core/stickers/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
gura.sendMessage(to, media, sticker,{quoted : dep})
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
fs.unlinkSync(asw)
fs.unlinkSync(filess)
});
});
});
}


//presence
gura.updatePresence(from, Presence.recording)

//auto read
gura.chatRead(from, "read")

//--------- COMMAND ----------
switch(command) {
case 'menu':
        case 'help':
  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
        if(menusimpel == false){
           stod = `${sender}`
			num = await fetchJson(`https://api.telnyx.com/v2/number_lookup/${senderNumber}?type=carrier&type=caller-name/`, {method: 'get'})
fill =`Yoo ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu

Jika Button Tidak Muncul Ketik .allmenu`
menu =`I T S U K I `
gbutsan = [
{buttonId:`.allmenu`,buttonText:{displayText:'ALL MENU'},type:1},
{buttonId:`.groupmenu`,buttonText:{displayText:'GROUP MENU'},type:1},
{buttonId:`.owner`,buttonText:{displayText:'OWNER'},type:1},

]
mhan = await gura.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${fill}`,
footerText: `${menu}`,
buttons: gbutsan,
headerType: 4
}
gura.sendMessage(from, btnmenu, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `hallo ${pushname}` ,
"body": `${jmn} - ${week} ${weton} - ${calender}`,
"mediaType": "2",
"thumbnail": pporigi,
},mentionedJid:[stod]}, quoted : ftrol})
}
break
case 'allmenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
itsu = await gura.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
const menul = `
${ucapanWaktu} - @${sender.split("@")[0]}

_*User Info :*_
_Name : ${pushname}_
_Bio : ${itsu.status}_
_Api : https://wa.me/${sender.split("@")[0]}_

_*Bot Info :*_
_Name : ${botName}_
_Owner : ${ownerName}_
_Lib : baileys_
_Prefix : ${prefix}_
_Runtime : ${runtime(on)}_
_Language : Javascript_



➤ *Grup Menu*
${mot} _${prefix}antilink <enable/disable>_
${mot} _${prefix}welcome <enable/disable>_
${mot} _${prefix}add_
${mot} _${prefix}kick_
${mot} _${prefix}promote_
${mot} _${prefix}demote_
${mot} _${prefix}hidetag_
${mot} _${prefix}admin_
${mot} _${prefix}suit_


➤ *Text Pro Me Menu*
${mot} _${prefix}blackpink text_
${mot} _${prefix}neon text_
${mot} _${prefix}greenneon text_
${mot} _${prefix}advanceglow text_
${mot} _${prefix}futureneon text_
${mot} _${prefix}sandwriting text_
${mot} _${prefix}sandsummer text_
${mot} _${prefix}sandengraved text_
${mot} _${prefix}metaldark text_
${mot} _${prefix}neonlight text_
${mot} _${prefix}holographic text_
${mot} _${prefix}text1917 text_
${mot} _${prefix}minion text_
${mot} _${prefix}deluxesilver text_
${mot} _${prefix}newyearcard text_
${mot} _${prefix}bloodfrosted text_
${mot} _${prefix}halloween text_
${mot} _${prefix}jokerlogo text_
${mot} _${prefix}fireworksparkle text_
${mot} _${prefix}natureleaves text_
${mot} _${prefix}bokeh text_
${mot} _${prefix}toxic text_
${mot} _${prefix}strawberry text_
${mot} _${prefix}box3d text_
${mot} _${prefix}roadwarning text_
${mot} _${prefix}breakwall text_
${mot} _${prefix}icecold text_
${mot} _${prefix}luxury text_
${mot} _${prefix}cloud text_
${mot} _${prefix}summersand text_
${mot} _${prefix}horrorblood text_
${mot} _${prefix}thunder text_
${mot} _${prefix}pornhub text1 text2_
${mot} _${prefix}glitch text1 text2_
${mot} _${prefix}avenger text1 text2_
${mot} _${prefix}space text1 text2_
${mot} _${prefix}ninjalogo text1 text2_
${mot} _${prefix}marvelstudio text1 text2_
${mot} _${prefix}lionlogo text1 text2_
${mot} _${prefix}wolflogo text1 text2_
${mot} _${prefix}steel3d text1 text2_
${mot} _${prefix}wallgravity text1 text2_


➤ *Other Menu*
${mot} _${prefix}menu_
${mot} _${prefix}sc_
${mot} _${prefix}runtime_
${mot} _${prefix}speed_
${mot} _${prefix}owner_
${mot} _${prefix}get_


➤ *Search Menu*
${mot} _${prefix}githubstalk_
${mot} _${prefix}ytsearch_
${mot} _${prefix}lirik_
${mot} _${prefix}otaku_
${mot} _${prefix}komiku_
${mot} _${prefix}chara_
${mot} _${prefix}playstore_


➤ *Tools Menu*
${mot} _${prefix}sticker_
${mot} _${prefix}swm_
${mot} _${prefix}toimg_
${mot} _${prefix}tourl_
${mot} _${prefix}togif_
${mot} _${prefix}tovideo_
${mot} _${prefix}tomp3_



➤ *Download Menu*
${mot} _${prefix}tiktok query_
${mot} _${prefix}play query_
${mot} _${prefix}ytmp3 query_
${mot} _${prefix}ytmp4 query_
${mot} _${prefix}mediafire query_

➤ *Emzy Menu🗿*
${mot} _${prefix}setdesc_
${mot} _${prefix}sticker_
${mot} _${prefix}s_
${mot} _${prefix}attp_
${mot} _${prefix}artinama_
${mot} _${prefix}groupbuka_
${mot} _${prefix}grouptutup_
${mot} _${prefix}linkgrup_
${mot} _${prefix}tagall_

➤ *Owner Menu* 
${mot} _${prefix}bc_ (lebihbaik fitur owner jangan di pakai)
${mot} _${prefix}join_
${mot} _${prefix}ohidetag_
${mot} _> eval_
${mot} _$ exec_
`
menulun = [
{buttonId:`.donasi`,buttonText:{displayText:'DONASI'},type:1},
{buttonId:`.owner`,buttonText:{displayText:'OWNER'},type:1}
]
mhan = await gura.prepareMessage(from, pporigi, image, {thumbnail: pporigi})
const menun = {
imageMessage: mhan.message.imageMessage,
contentText:`${menul}`,
footerText:'*I T S U K I*', 
buttons: menulun,
headerType: 4
}
gura.sendMessage(from, menun, MessageType.buttonsMessage, {quoted:ftrol, contextInfo: { mentionedJid: [sender]}})
break

case 'groupmenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
gra = await gura.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
const gmenul = `
${tampilUcapan} - @${sender.split("@")[0]}

_*User Info :*_
_Name : ${pushname}_
_Bio : ${gra.status}_
_Api : https://wa.me/${sender.split("@")[0]}_


➤ *Grup Menu*
${mot} _${prefix}antilink <enable/disable>_
${mot} _${prefix}welcome <enable/disable>_
${mot} _${prefix}add_
${mot} _${prefix}kick_
${mot} _${prefix}promote_
${mot} _${prefix}demote_
${mot} _${prefix}hidetag_
${mot} _${prefix}admin_
${mot} _${prefix}suit_
`
gmenulun = [
{buttonId:`.menu`,buttonText:{displayText:'MENU'},type:1},
{buttonId:`.owner`,buttonText:{displayText:'OWNER'},type:1}
]
mhan = await gura.prepareMessage(from, pporigi, image, {thumbnail: pporigi})
const gmenun = {
imageMessage: mhan.message.imageMessage,
contentText:`${gmenul}`,
footerText:'*I T S U K I*', 
buttons: gmenulun,
headerType: 4
}
gura.sendMessage(from, gmenun, MessageType.buttonsMessage, {quoted:ftrol, contextInfo: { mentionedJid: [sender]}})
break

case 'textpromenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
itsu = await gura.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
test = `${ucapanWaktu} - @${sender.split("@")[0]}

_*User Info :*_
_Name : ${pushname}_
_Bio : ${itsu.status}_
_Api : https://wa.me/${sender.split("@")[0]}_


➤ *Text Pro Me Menu*
${mot} _${prefix}blackpink text_
${mot} _${prefix}neon text_
${mot} _${prefix}greenneon text_
${mot} _${prefix}advanceglow text_
${mot} _${prefix}futureneon text_
${mot} _${prefix}sandwriting text_
${mot} _${prefix}sandsummer text_
${mot} _${prefix}sandengraved text_
${mot} _${prefix}metaldark text_
${mot} _${prefix}neonlight text_
${mot} _${prefix}holographic text_
${mot} _${prefix}text1917 text_
${mot} _${prefix}minion text_
${mot} _${prefix}deluxesilver text_
${mot} _${prefix}newyearcard text_
${mot} _${prefix}bloodfrosted text_
${mot} _${prefix}halloween text_
${mot} _${prefix}jokerlogo text_
${mot} _${prefix}fireworksparkle text_
${mot} _${prefix}natureleaves text_
${mot} _${prefix}bokeh text_
${mot} _${prefix}toxic text_
${mot} _${prefix}strawberry text_
${mot} _${prefix}box3d text_
${mot} _${prefix}roadwarning text_
${mot} _${prefix}breakwall text_
${mot} _${prefix}icecold text_
${mot} _${prefix}luxury text_
${mot} _${prefix}cloud text_
${mot} _${prefix}summersand text_
${mot} _${prefix}horrorblood text_
${mot} _${prefix}thunder text_
${mot} _${prefix}pornhub text1 text2_
${mot} _${prefix}glitch text1 text2_
${mot} _${prefix}avenger text1 text2_
${mot} _${prefix}space text1 text2_
${mot} _${prefix}ninjalogo text1 text2_
${mot} _${prefix}marvelstudio text1 text2_
${mot} _${prefix}lionlogo text1 text2_
${mot} _${prefix}wolflogo text1 text2_
${mot} _${prefix}steel3d text1 text2_
${mot} _${prefix}wallgravity text1 text2_
`
gura.sendMessage(from, { contentText: `${test}`, footerText: `©I T S U K I`, buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: '𝘖𝘸𝘯𝘦𝘳 𝘉𝘰𝘵 メ' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender, ownerNumber]}}}, 'buttonsMessage')
break

case 'othermenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
gry = await gura.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
const omenul = `
${tampilUcapan} - @${sender.split("@")[0]}

_*User Info :*_
_Name : ${pushname}_
_Bio : ${gry.status}_
_Api : https://wa.me/${sender.split("@")[0]}_


➤ *Other Menu*
${mot} _${prefix}menu_
${mot} _${prefix}sc_
${mot} _${prefix}runtime_
${mot} _${prefix}speed_
${mot} _${prefix}owner_
${mot} _${prefix}get_`
omenulun = [
{buttonId:`.menu`,buttonText:{displayText:'MENU'},type:1},
{buttonId:`.owner`,buttonText:{displayText:'OWNER'},type:1}
]
mhan = await gura.prepareMessage(from, pporigi, image, {thumbnail: pporigi})
const omenun = {
imageMessage: mhan.message.imageMessage,
contentText:`${omenul}`,
footerText:'*I T S U K I*', 
buttons: omenulun,
headerType: 4
}
gura.sendMessage(from, omenun, MessageType.buttonsMessage, {quoted:ftrol, contextInfo: { mentionedJid: [sender]}})
break
case 'searchmenu':
case 'smenu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
itsu = await gura.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
const smenul = `
${tampilUcapan} - @${sender.split("@")[0]}

_*User Info :*_
_Name : ${pushname}_
_Bio : ${itsu.status}_
_Api : https://wa.me/${sender.split("@")[0]}_


➤ *Search Menu*
${mot} _${prefix}githubstalk_
${mot} _${prefix}ytsearch_
${mot} _${prefix}lirik_
${mot} _${prefix}otaku_
${mot} _${prefix}komiku_
${mot} _${prefix}chara_
${mot} _${prefix}playstore_
`
smenulun = [
{buttonId:`.menu`,buttonText:{displayText:'MENU'},type:1},
{buttonId:`.owner`,buttonText:{displayText:'OWNER'},type:1}
]
mhan = await gura.prepareMessage(from, pporigi, image, {thumbnail: pporigi})
const smenun = {
imageMessage: mhan.message.imageMessage,
contentText:`${smenul}`,
footerText:'*I T S U K I*', 
buttons: smenulun,
headerType: 4
}
gura.sendMessage(from, smenun, MessageType.buttonsMessage, {quoted:ftrol, contextInfo: { mentionedJid: [sender]}})
break
case 'downloadmenu':
case 'dmenu':
case 'dm':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
itsu = await gura.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
const dmenul = `
${tampilUcapan} - @${sender.split("@")[0]}

_*User Info :*_
_Name : ${pushname}_
_Bio : ${itsu.status}_
_Api : https://wa.me/${sender.split("@")[0]}_


➤ *Download Menu*
${mot} _${prefix}tiktok query_
${mot} _${prefix}play query_
${mot} _${prefix}ytmp3 query_
${mot} _${prefix}ytmp4 query_
${mot} _${prefix}mediafire query_`
dmenulun = [
{buttonId:`.menu`,buttonText:{displayText:'MENU'},type:1},
{buttonId:`.owner`,buttonText:{displayText:'OWNER'},type:1}
]
mhan = await gura.prepareMessage(from, pporigi, image, {thumbnail: pporigi})
const dmenun = {
imageMessage: mhan.message.imageMessage,
contentText:`${dmenul}`,
footerText:'*I T S U K I*', 
buttons: dmenulun,
headerType: 4
}
gura.sendMessage(from, dmenun, MessageType.buttonsMessage, {quoted:ftrol, contextInfo: { mentionedJid: [sender]}})
break
case 'emzymenu':
case 'emzy':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
itsu = await gura.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
const emenul = `
${tampilUcapan} - @${sender.split("@")[0]}

_*User Info :*_
_Name : ${pushname}_
_Bio : ${itsu.status}_
_Api : https://wa.me/${sender.split("@")[0]}_


➤ *Emzy Menu🗿*
${mot} _${prefix}setdesc_
${mot} _${prefix}sticker_
${mot} _${prefix}s_
${mot} _${prefix}attp_
${mot} _${prefix}artinama_
${mot} _${prefix}groupbuka_
${mot} _${prefix}grouptutup_
${mot} _${prefix}linkgrup_
${mot} _${prefix}tagall_`
emenulun = [
{buttonId:`.menu`,buttonText:{displayText:'MENU'},type:1},
{buttonId:`.owner`,buttonText:{displayText:'OWNER'},type:1}
]
mhan = await gura.prepareMessage(from, pporigi, image, {thumbnail: pporigi})
const emenun = {
imageMessage: mhan.message.imageMessage,
contentText:`${emenul}`,
footerText:'*I T S U K I*', 
buttons: emenulun,
headerType: 4
}
gura.sendMessage(from, emenun, MessageType.buttonsMessage, {quoted:ftrol, contextInfo: { mentionedJid: [sender]}})
break
case 'verify':
if (isRegistered) return sticOk(from)
const serialUser = createSerial(18)
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	         const jancok = `╭─❒ 「 Verify 」 ❒
 * Nama :* ${pushname}
 * Nomor :* @${sender.split('@')[0]}
 * Seri:* ${serialUser}
 * Pengguna:* ${_registered.length}
└❏

*「 ${botName} 」*`
gbutsan = [
{buttonId:`.menu`,buttonText:{displayText:'MENU'},type:1},
{buttonId:`.donasi`,buttonText:{displayText:'DONASI'},type:1}
]
mhan = await gura.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const sendBtnVeryy = {
imageMessage: mhan.message.imageMessage,
contentText:`${jancok}`,
footerText:'Terimakasih Sudah Mendaftar\n*_©I T S U K I_*', 
buttons: gbutsan,
headerType: 4
}
gura.sendMessage(from, sendBtnVeryy, MessageType.buttonsMessage, {quoted:ftrol, contextInfo: { mentionedJid: [sender]}})
	         console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
	    // console.log(e)
        break
case 'owner':
let inilist = []
for (let i of ownerNomor) {
const vname = gura.contacts[i] != undefined ? gura.contacts[i].vname || gura.contacts[i].notify : undefined
inilist.push({
"displayName": `${ownerName}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${gura.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await gura.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: fakevo })
button = [
  {buttonId: `${prefix}menu`, buttonText: {displayText: 'MENU'}, type: 1}
]
 buttons = {
    contentText: 'OWNER GW NIHH',
    footerText: `Kalo Mau di save Chat aja kak`,
    buttons: button,
    headerType: 1
}
await gura.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: fakevo})
break

case 'speed':
	case 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `_*${latensi.toFixed(4)} Detik*_`
			reply(pingnya)
			})
			break
case 'antidelete':
if (!dep.key.fromMe && !isOwner && !isCoOwner) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (antidel === true) return reply(lang.anjawaUdhOn(command))
antidel = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (antidel === false) return
antidel = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendMessage(from, `MODE ANTI DELETE`, `Choose one`, [
            {
              buttonId: 'antidelete on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antidelete off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'linkgrup' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
linkgc = await gura.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
gura.sendMessage(from, yeh, text, { quoted: dep })
break
case 'antibug':
          if (!dep.key.fromMe && !isOwner && !isCoOwner) return reply(lang.onlyOwner())
          if (args[0] === 'on') {
          if (bugc === true) return reply(lang.anjawaUdhOn(command))
          bugc = true
          antitrol = true
          reply(lang.anjawaOn(command))
          } else if (args[0] === 'off') {
          if (bugc === false) return
          bugc = false
          antitrol = false
          reply(lang.anjawaOff(command))
          } else if (!q) {
          sendButMessage(from, `MODE ANTIBUG`, `Choose one`, [
            {
              buttonId: 'antibug on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antibug off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'absensi':
                 if (!isGroup) return reply(lang.onlygc())
absen.push(sender)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
teks = `*LIST DAFTAR HADIR ABSEN*:${enter}`
for (let sensi of absen) {
teks += `${enter}々 @${sensi.split('@')[0]} ✓${enter}`
}
teks += `TOTAL MEMBER YG ABSEN : ${absen.length}${enter}${enter}Ketik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`
gura.sendMessage(from, teks.trim(), extendedText, {quoted: dep, contextInfo: {"mentionedJid": absen}})
break
case 'donasi':
const pantek = `*╭─❒ 「 Donasi 」 ──────*
*│*
*│*⬡ *Mau donasi kah?*
*│*⬡ *PULSA     : ${donasiNumber}*
*│*⬡ *DANA    : ${donasiNumber}*
*│*⬡ *GOPAY    : ${donasiNumber}*
*└───────────────────*`
dodnsi = [
{buttonId:`.menu`,buttonText:{displayText:'MENU'},type:1},
{buttonId:`.owner`,buttonText:{displayText:'OWNER'},type:1}
]
mhan = await gura.prepareMessage(from, pporigi, image, {thumbnail: pporigi})
const dnsi = {
imageMessage: mhan.message.imageMessage,
contentText:`${pantek}`,
footerText:'*Liat Doang Donasi kaga*', 
buttons: dodnsi,
headerType: 4
}
gura.sendMessage(from, dnsi, MessageType.buttonsMessage, {quoted:ftrol, contextInfo: { mentionedJid: [sender]}})
        break
case 'absen':
if (!isGroup) return reply(lang.onlygc())
if (args.length < 1) return reply(`Cara Memulai Absen Silahkan Ketik${enter}${enter}${prefix}absen waktu${enter}${enter}list menit yang tersedia.${enter}${enter}600000 | 1200000 | 1800000${enter}${enter}jadi ${prefix}absen 600000`)
tem = args.join(" ")
ini = absen.indexOf(from)
absen.splice(ini, 1)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
teks = `*LIST DAFTAR HADIR*:${enter}`
for (let sensi of absen) {
teks += `${enter}々 @${sensi.split('@')[0]} ✓${enter}`
}
teks += `ABSENSI : ${sensi.length}${enter}${enter}Ketik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`
reply(`List Presentasi Hadir Telah Siap${enter}${enter}Ketik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`)
setTimeout( () => {
reply(`Waktu Absensi Telah Habis`)
gura.sendMessage(from, teks.trim(), extendedText, {quoted: dep, contextInfo: {"mentionedJid": absen}})
}, tem)
setTimeout( () => {
ini = absen.indexOf(from)
absen.splice(ini, 1)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
}, tem)
break
case 'autoread':
if (!dep.key.fromMe && !isOwner && !isCoOwner) return reply(lang.onlyOwner())
if (args.length < 1) return reply(`Example:\n${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
if (args[1] === "on") {
if (readGc === true) return reply(lang.anjawaUdhOn(command))
readGc = true
reply(`Succes mengaktifkan autoread group`)
} else if (args[1] === "off") {
if (readGc === false) return
readGc = false
reply(`Succes mematikan autoread group`)
} else {
reply(`Pilih on atau off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
if (args[1] === "on") {
if (readPc === true) return reply(lang.anjawaUdhOn(command))
readPc = true
reply(`Succes mengaktifkan autoread pc`)
} else if (args[1] === "off") {
if (readPc === false) return
readPc = false
reply(`Succes mematikan autoread pc`)
} else {
reply(`Pilih on atau off`)
}
} else {
reply(`*List Auto Read*\n•> gc\n•> pc`)
}
break
case 'jail':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !dep.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dep 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  gura.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/jail?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					gura.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: dep})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
case 'runtime':
reply(`${ke}${runtime(on)}${ke}`)
break
case 'on':
		            if (!dep.key.fromMe && !isOwner && !isCoOwner) return 
		            offline = false
		            fakeitem(lang.ownerOn())
		            break
case 'readall':
					if (!dep.key.fromMe && !isOwner && !isCoOwner) return reply(lang.onlyOwner())
					var chats = await gura.chats.all()
                    chats.map( async ({ jid }) => {
                          await gura.chatRead(jid)
                    })
					rdl = `Berhasil membaca ${chats.length} Chat !`
					reply(rdl)
					console.log(chats.length)
					break
case 'nulis':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   nulis = args.join(' ')
                   nulisp = await getBuffer(`${ApiZeks}/api/nulis?text=${nulis}&apikey=${zeksApikey}`)
                   nulispp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(nulisp, nulispp, sender)
                   break
case 'leave':
                    if (!gura.key.fromMe && !isOwner && !isCoOwner) return reply(lang.onlyOwner())
					setTimeout( () => {
					gura.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					gura.updatePresence(from, Presence.composing) 
					fakestatus('```Byeee 👋```')
					}, 0)
					break
case 'setdesc':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply('```Saya Bukan Admin```')
					gura.groupUpdateDescription(from, `${body.slice(9)}`)
					gura.sendMessage(from, '*「  SUKSES  」Mengubah Desk Grup', text, { quoted: fdoc })
					break
case 'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
case 'setprefix':
if (!dep.key.fromMe && !isOwner && !isCoOwner) return reply(lang.onlyOwner())
if (args.length < 1) return reply(`*Format Error!*\n\n*Example :*\n •${prefix + command} multi\n •${prefix + command} nopref\n •${prefix + command} #`)
if((args[0]) == 'multi'){
if(multi)return reply('_Sudah diaktifkan sebelumnya!_')
multi = true
nopref = false
single = false
reply(`_Succses mengganti Prefix ke Multiprefix!_`)
}else
if ((args[0]) == 'nopref'){
if(nopref)return reply('_Sudah diaktifkan sebelumnya!_')
multi = false
single = false
nopref = true
reply(`_Succses mengganti Prefix ke noprefix!_`)
}else
if((args[0]) == `${q}`){
multi = false
nopref = false
single = true
prefa = `${q}`
reply(`_Succses mengganti Prefix ke ${q}_`)
}
break
case 'listgroup':
				  if (!dep.key.fromMe && !isOwner && !isCoOwner) return reply(lang.onlyOwner())
				  ingfoo = await getGroup(totalchat)
				  teks1 = `*L I S T  G R O U P*\nTotal group: ${ingfoo.length}\n\n`
				   for (let i = 0; i < ingfoo.length; i++){
				   teks1 += `• Name grup : ${ingfoo[i].subject}\n• ID grup : ${ingfoo[i].id}\n• Cretae : ${moment(`${ingfoo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n• Members : ${ingfoo[i].participants.length}\n\n`
				   }
				   reply(teks1)
				   break
case 'menuall':
                let papao = [{
										"buttonId": `owner`,
										"buttonText": {
											"displayText": "OWNER"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `sewabot`,
										"buttonText": {
											"displayText": "SEWA"
											},
										"type": "RESPONSE"
										},{
										"buttonId": 'Command',
										"buttonText": {
											"displayText": "LIST MESSAGE"
											},
										"type": "RESPONSE"
										}]
								sendBut(from, allmenu(prefix, wita, wit, ucapannya2 , timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat), `NOTE ！\nJika whatsapp mod kamu belum support button silahkan tonton video ini https://youtu.be/ERGID4Fmo9w\n\n${botname}™© | By ${ownername}`,pp_userz, papao, {})
                break
case 'artinama':
                if (args.length < 1) return reply('Apa yang mau dicari um?')
                teks = q
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${teks}`, {method: 'get'})
					reply(`Arti Nama ${teks}\n\n`+anu.result)
				break
			case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
ter = command[1].toLowerCase()
  tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
 reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
 break
case 'tictactoe':
case 'ttt':
if (!isGroup)return reply('*Khusus group*')
if (dep.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
if (!dep.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
if (fs.existsSync(`./temp/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan${enter}Ketik *${prefix}delsesi ttt*, untuk menghapus sesi`)
if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
tttSkuy = setTtt(`${from}`)
tttSkuy.status = false
tttSkuy.Z = sender.replace("@s.whatsapp.net", "")
tttSkuy.Y = args[0].replace("@", "");
fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
starGame = `「 *MEMULAI GAME TICTACTOE* 」${enter}${enter}•@${sender.replace("@s.whatsapp.net", "")} Menantang Bermain Tictactoe ${enter}[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan${enter}${enter}`
gura.sendMessage(from, starGame, text, {quoted: dep, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
break
case 'tebakgambar':
					if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${ApiZeks}/api/tebakgambar?apikey=${zeksApikey}`)
                    resu = anu.result
                    tebak = resu.soal
                    jawaban = resu.jawaban
                    tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tebakgambar.json", JSON.stringify(tebakgambar))
                    console.log(jawaban)
                    tebakya = await getBuffer(tebak)
                    gura.sendMessage(from, tebakya, image, { quoted: dep, caption: "Jawaban salah auto harus donasi" })
                   await sleep(30000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./src/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    break
case 'darkjokes':
					let data = fs.readFileSync('./src/darkjokes.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					gura.sendMessage(from, hasil, image, {thumbnail: Buffer.alloc(0), quoted: fgclink})
					break
case 'fitnah':
		if (!gura.key.fromMe && !isOwner && !isCoOwner) return reply(lang.onlyOwner())
		            if (args.length < 1) return fakegroup(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
		            var gh = args.join('')
		            mentioned = dep.message.extendedTextMessage.contextInfo.mentionedJid
		            var replace = gh.split("|")[0];
		            var target = gh.split("|")[1];
		            var bot = gh.split("|")[2];
		            gura.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
		            break
case 'caripesan':
		    case 'searchmessage':
				if (!q) return reply(`Penggunaan ${command} _nama pesannya_\n\nContoh \n --> ${command} halo`)
				reply(lang.wait())
				 xtext = args.join(' ')
				                cond = xtext.split(" ")
				                 a = await gura.searchMessages(xtext, from, 10, 1)// count 10 
				                 fox = '*「 Message Search 」*\n\n'
				                num = 0
				                for (j of a.messages){
				                    num += 1
				                    if (j.message.conversation) {
				                        if (j.key.fromMe){ 
				                            fox += num+'. Sender : '+gura.user.jid+'\n    Msg : '+j.message.conversation+'\n    MsgID : '+j.key.id+'\n    Type : conversation\n\n'
				                        }else{
				                            fox += num+'. Sender : '+j.key.participant+'\n    Msg : '+j.message.conversation+'\n    MsgID : '+j.key.id+'\n    Type : conversation\n\n'
				                        } 
				                    }
				                    else if (j.message.extendedTextMessage){
				                        if (j.key.fromMe){ 
				                            fox += num+'. Sender : '+gura.user.jid+'\n    Msg : '+j.message.extendedTextMessage.text+'\n    MsgID : '+j.key.id+'\n    Type : extendedTextMessage\n\n'
				                        }else{
				                            fox += num+'. Sender : '+j.key.participant+'\n    Msg : '+j.message.extendedTextMessage.text+'\n    MsgID : '+j.key.id+'\n    Type : extendedTextMessage\n\n'
				                        } 
				                    }
				                }
				                reply(fox)
		                break
case 'sticker':
					case 'stiker': case 's':
					
						if (isMedia && !dep.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dep
							const media = await gura.downloadAndSaveMediaMessage(encmedia)
							ran = getRandom('.webp')
                        await ffmpeg(`./${media}`)
                            .input(media)
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                 })
                            .on('end', async function () {
                                console.log('Finish')
                                await gura.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: dep })
                                    fs.unlinkSync(media)
                                    fs.unlinkSync(ran)
                                })
                            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    } else if ((isMedia && dep.message.videoMessage.seconds < 11 || isQuotedVideo && dep.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                        const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dep
                        const media = await gura.downloadAndSaveMediaMessage(encmedia)
                        ran = getRandom('.webp')
                        await ffmpeg(`./${media}`)
                            .inputFormat(media.split('.')[1])
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                                reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
                            })
                            .on('end', async function () {
                                console.log('Finish')
                                await gura.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: dep })
                                    fs.unlinkSync(media)
                                    fs.unlinkSync(ran)
                                })
                            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    } else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dep
                        const media = await gura.downloadAndSaveMediaMessage(encmedia)
                        ranw = getRandom('.webp')
                        ranp = getRandom('.png')
                        reply(mess.wait)
                        keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
                        await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
                            fs.unlinkSync(media)
                            let bufferir9vn5 = Buffer.from(res.base64img, 'base64')
                            fs.writeFileSync(ranp, bufferir9vn5, (err) => {
                                if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
                            })
                            exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
                                fs.unlinkSync(ranp)
                                if (err) return reply('emror bang')
                                gura.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: dep })
                                    fs.unlinkSync(ranw)
                                })
                            })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim\nDurasi sticker video 1-9 detik...`)
                    }
                    break
case 'suit': 
              if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              break
case 'nulis2':

if (args.length < 1) return reply(`*Usage*: ${prefix + command} nama&kelas&nomor&kata\n*Example*: ${prefix + command} udin&20&17&blablabla`)

var bodi = args.join(" ")

var nama = bodi.split("&")[0];

var kelas = bodi.split("&")[1];

var no = bodi.split("&")[2];

var aksarane = bodi.split("&")[3];

reply('membuat bos...')

                 rakz = await getBuffer(`https://ferdiz-afk.my.id//api/tulis?nama=${nama}&no=${no}&kelas=${kelas}&text=${aksarane}`)

                 gura.sendMessage(from, rakz, image, { quoted: dep ,thumbnail: Buffer.alloc(0) });

                 break;
case 'attp':  
                    if (args.length < 1) return reply(lang.noteks(prefix, command))
                    hhhh = q
                    anu1 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${hhhh}`)
                    gura.sendMessage(from, anu1, sticker, {quoted: dep})
                    break
case 'addvn':
			if(!dep.key.fromMe && !isOwner && !isCoOwner) return reply(lang.onlyOwner())
					if (!isQuotedAudio) return fakegroup('```Reply vnnya```')
					svst = body.slice(7)
					if (!svst) return reply('```Nama audionya apa```')
					keya = JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await gura.downloadMediaMessage(keya)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./media/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
					fakegroup( `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
					break
case "listonline": 
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        try {
          let online = [
            ...Object.keys(gura.chats.get(id).presences),
            gura.user.jid,
          ];
          gura.reply(
            m.chat,
            "「 L I S T   O N L I N E  」\n" +
              online.map((v) => "├ @" + v.replace(/@.+/, "")).join`\n` +
              "\n",
            m,
            {
              contextInfo: { mentionedJid: online },
            }
          );
        } catch (e) {
          m.reply("");
        }
        break
case 'off':
		            if (!dep.key.fromMe && !isOwner && !isCoOwner) return 
		            offline = true
		            waktu = Date.now()
		            anuu = args.join(' ') ? args.join(' ') : '-'
		            alasan = anuu
		            fakeitem(gura.ownerOff())
		            break
case 'listvn':
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama audio_`
					gura.sendMessage(from, teks.trim(), extendedText, { quoted: dep, contextInfo: { "mentionedJid": audionye } })
					break
case 'admin':
					if (!isGroup) return fakestatus('```KHUSUS GRUP BRO```')
					teks = `*DAFTAR ADMIN GRUB* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
					no += 1
					teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
case 'self':
			          if (!dep.key.fromMe && !isOwner && !isCoOwner) return reply(lang.onlyOwner())
		          	if (banChats === true) return
		          	banChats = true
		          	//fakeitem(`「 *SELF-MODE* 」`)
		          	sendButMessage(from, `「 *SELF-MODE* 」`, `Click public to return to public mode`, [
            {
              buttonId: 'public',
              buttonText: {
                displayText: `Public Mode`,
              },
              type: 1,
            }]);
        break;
case 'public':
		              if (!iq.key.fromMe && !isOwner && !isCoOwner) return reply(lang.onlyOwner())
		          	if (banChats === false) return
		          	banChats = false
		          	//fakeitem(`「 *PUBLIC-MODE* 」`)
						sendButMessage(from, `「 *PUBLIC-MODE* 」`, `Click self to return to self mode`, [
            {
              buttonId: 'self',
              buttonText: {
                displayText: `Self Mode`,
              },
              type: 1,
            }]);
        break;
    case 'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            gura.sendMessage(from,ram,image,{quoted:dep,caption:rem})
            break
    case 'komiku':
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
    case 'chara':
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await gura.sendMessage(from,li,image,{quoted: dep})
            break
    case 'pinterest':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await gura.sendMessage(from,di,image,{quoted: dep})
            break
case 'join':
		            if (!dep.key.fromMe && !isOwner && !isCoOwner) return reply(lang.onlyOwner())
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(lang.erorLink())
		            hen = args[0]
		            if (!q) return fakestatus('Masukan link group')
		            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
		            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
		            var response = await gura.acceptInvite(codeInvite)
		            fakestatus('```SUKSES JOIN GRUP```')
		            } catch {
		            fakegroup('```LINK ERROR!```')
		            }
		            break
    case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
	// Textprome //
                case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                reply (mess.wait)
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                  buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`)
                 buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: `BACK MENU`},type:1}]
              imageMsg = (await gura.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Bilang Makaseh Anj', imageMessage: imageMsg,
              contentText:`${rply}`,buttons,headerType:4}
              prep = await gura.prepareMessageFromContent(from,{buttonsMessage},{quoted: dep})
              gura.relayWAMessage(prep)
        
                    break
case 'tiktok': 
       case 'ttdl':
             
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok.com')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await Tiktokdl(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.watermark) })
            .catch((err) => { reply(String(err)) })
             break
case 'tiktoknowm': 
       case 'ttnowm':
             
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok.com')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await Tiktokdl(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break

case 'mediafire':
if (args.length < 1) return reply('Link Nya Mana?')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error)
reply(monospace(mess.wait))
teks = args.join(' ')
rescun = await mediafiredl(teks)
result = `❒「MediaFire Download」
├ Nama : ${rescun[0].nama}
├ Ukuran : ${rescun[0].size}
└ Link : ${rescun[0].link}`
reply(result)
gura.sendMessage(from, {url: `${rescun[0].link}` }, document, { mimetype: `${rescun[0].mime}`, filename:`${rescun[0].nama}`})
break

case 'play':
//if(!isPremium)return reply(mess.only.prem)
if (!isGroup && !itsMe && !isOwner)return reply(mess.only.group)
if (args.length < 1) return reply(`Kirim perintah *${prefix}play query`)
reply('Searching...')
let yut = await yts(q)
yta(yut.videos[0].url)
.then(async(res) => {
const { thumb, title, filesizeF, filesize } = res
const capti = `P L A Y\n\n Title : ${title}\n\n Views: ${yut.videos[0].views}\n\n Duration : ${yut.videos[0].timestamp}\n\n URL : ${yut.videos[0].url}`
ya = await getBuffer(thumb)
py =await gura.prepareMessage(from, ya, image)

gbutsan = [
{buttonId: `${prefix}playmp3 ${q}`, buttonText: {displayText: '</AUDIO'}, type: 1},
{buttonId: `${prefix}playmp4 ${q}`, buttonText: {displayText: '</VIDEO'}, type: 1}
]
gbuttonan = {
imageMessage: py.message.imageMessage,
contentText: monospace(capti),
footerText: monospace(`Get Music / Video`),
buttons: gbutsan,
headerType: 4
}
await gura.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:fakevo})
})
break
case 'ytsearch':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
            if (!args.length) return reply('Judulnya apa kak?')
            try {
            	sticWait(from)
                const input = args.join(" ")
                const filter1 = await ytsd.getFilters(input)
                const filters1 = filter1.get('Type').get('Video')
                const { items } = await ytsd(filters1.url, { limit: 10 })
                let hehe = `*YOUTUBE SEARCH*
  *Search Query:* ${input}\n\n`
                for (let i = 0; i < items.length; i++) {
                    hehe += `───────────────\n
  *Judul:* ${items[i].title}
  *Id:* ${items[i].id}
  *Ditonton:* ${items[i].views}
  *Durasi:* ${items[i].duration}
  *Link:* ${items[i].url}\n\n`
                }
                thumb = await getBuffer(items[0].bestThumbnail.url)
                await gura.sendMessage(from, thumb, image, {quoted: ftrol, caption: `${hehe}───────────────\n
  *DOWNLOAD*
 ${prefix}ytmp3 [link yt] = Audio
 ${prefix}ytmp4 [link yt] = Video`, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:`SEARCH: ${args[0]}`,body:"YOUTUBE SEARCH",mediaType:"2",thumbnail:pporigi,mediaUrl:`https://youtu.be/5oasTa9Okmk`}}})
            } catch(e) {
                reply('Didn\'t find anything or there is any error!')
                reply(`Error: ${e.message}`)
            }
            break
case 'ytmp3':
if (!isGroup && !itsMe && !isOwner)return reply(mess.only.group)
if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return reply('Link Invalid')
try {
reply(monospace(mess.wait))
yta(args[0])
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 35000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
const captions = `YTMP3\n\nTitle : ${title}\nExt : MP3\nSize : ${filesizeF}\n\nSilahkan tunggu file media sedang dikirim mungkin butuh beberapa menit`
bvidt2 = await getBuffer(thumb)
reply(captions)
bvid2 = await getBuffer(dl_link)
await 
gura.sendMessage(from, bvid2, audio, {
contextInfo: {
externalAdReply: {
"title": fake,
"body": `🎧 PLAY MUSIC 🎧`,
"mediaType": "VIDEO",
"mediaType": 2,
"thumbnailUrl": `https://telegra.ph/file/6729a5c1215c1598d3f1d.jpg`,
"mediaUrl": args[0]
}
}, quoted:fakevo
})
})
})
} catch (err) {
reply(mess.error.api)
}
break

case 'ytmp4':
if (!isGroup && !itsMe && !isOwner)return reply(mess.only.group)
if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks2) return reply('Link Invalid')
try {
reply(monospace(mess.wait))
ytv(args[0])
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 40000) return reply(`YOUTUBE MP4

Data Berhasil Didapatkan!
▢ Title : ${title}\
▢ Ext : MP4
▢ Filesize : ${filesizeF}
▢ Link : ${a.data}

Untuk durasi lebih dari batas disajikan dalam bentuk link`)
				const captionsYtmp4 = `YOUTUBE MP4
				
Data Berhasil Didapatkan!
▢ Title : ${title}
▢ Ext : MP4
▢ Size : ${filesizeF}

Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit`
bvidt3 = await getBuffer(thumb)
reply(captionsYtmp4)
bvid3 = await getBuffer(dl_link)
await gura.sendMessage(from, bvid3, video, {
contextInfo: {
externalAdReply: {
"title": fakevo,
"body": `🎧 PLAY VIDEO 🎧`,
"mediaType": "VIDEO",
"mediaType": 2,
"thumbnailUrl": `https://telegra.ph/file/6729a5c1215c1598d3f1d.jpg`,
"mediaUrl": args[0]
}
}, quoted:dep
})
})		
})
} catch (err) {
reply(mess.error.api)
}
break
case 'autoregis': case 'register':
if (!dep.key.fromMe && !isOwner && !isCoOwner) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autoregister === true) return reply(lang.anjawaUdhOn(command))
autoregister = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autoregister === false) return
autoregister = true
reply(lang.anjawaOff(command))
} else if (!q) {
          await gura.sendMessage(from, `MODE AUTO REGISTER`, `Choose one`, [
            {
              buttonId: 'register on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'register off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'playmp3': 
if (!isGroup && !itsMe && !isOwner)return reply(mess.only.group)
try {
reply(monospace(mess.wait))
let yut = await yts(q)
yta(yut.videos[0].url)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*P L A YM P 3*\n\n${shp} Title : ${title}\n${shp} Ext : MP3\n${shp} Filesize : ${filesizeF}\n${shp} Upload : ${yut.videos[0].ago}\n${shp} Views : ${yut.videos[0].views}\n${shp} Duration : ${yut.videos[0].timestamp}\n${shp} Link : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)

const captionis = `*P L A YM P 3*\n\n${mot} Title : ${title}\n${mot} Size : ${filesizeF}\n${mot} Views: ${yut.videos[0].views}\n${mot} Duration : ${yut.videos[0].timestamp}\n${mot} URL : ${yut.videos[0].url}\n\n*_Permintaan Anda Sedang Di Prosess!_*`
//sendMediaURL(from, thumb, captionis)
sendMediaURL(from, dl_link, '')

})
})
.catch((err) => reply(`${err}`))
} catch (err) {
sendMess(ownerNumber, 'PlayMp3 Error : ' + err)
console.log(color('[PlayMp3]', 'red'), err)
reply(mess.error.api)
}
break
case 'playmp4':
try {
reply(monospace(mess.wait))
let yut = await yts(q)
ytv(yut.videos[0].url)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*P L A YM P 4*\n\n • Judul : ${title}\n • Upload : ${yut.videos[0].ago}\n • Ditonton : ${yut.videos[0].views}\n • Duration : ${yut.videos[0].timestamp}\n • Link : ${a.data}\n\n_Ukuran File Terlalu besar, anda bisa download sendiri lewat Link Diatas!!_`)
 
const mp4 = `
*PLAY VIDEO*\n\n Judul : ${title}\n\n Upload : ${yut.videos[0].ago}\n\n Ditonton : ${yut.videos[0].views}\n\n Duration : ${yut.videos[0].timestamp}\n\n Url : ${yut.videos[0].url}`
//sendMediaURL(from, thumb, mp4)
sendMediaURL(from, dl_link, mp4)
})
})
.catch((err) => reply(`${err}`))
} catch (err) {
sendMess(ownerNumber, 'PlayMp4 Error : ' + err)
console.log(color('[PlayMp4]', 'red'), err)
reply(mess.error)
}
break

case 'ig':
//if(!isPremium)return reply(mess.only.prem)
if (!isGroup && !itsMe && !isOwner)return reply(mess.only.group)
try{
if(!q)return reply('Url nya mana?')
reply(monospace(mess.wait))
igg = await fetchJson(`http://zekais-api.herokuapp.com/igdl?url=${q}&apikey=dnYyDs9a`)
igt = `I N S T A G R A MD O W N L O A D E R

Username  : ${igg.username}
Fullname  : ${igg.fullName}
Followers : ${igg.followers}

Wait a minute ${igg.result[0].type} is being sent..`
reply(monospace(igt))
sendMediaURL(from,igg.result[0].url,monospace(`Type ${igg.result[0].type}`))
} catch (e) {
reply(e)
console.log(e)
}
break

case 'bc':
             if(!isOwner && !isMe) return reply('Anda Bukan Owner')
             if (args.length < 1) return reply('teks?')
             anu = await gura.chats.all()
             if (isMedia && !dep.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dep
             bc = await gura.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             	tes = `${body.slice(4)}`
             	gura.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `*${botName} Broadcast*`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝘔𝘦𝘯𝘶 メ'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             	textt = `${body.slice(4)}`
             gura.sendMessage(_.jid, { contentText: `${textt}`, footerText: `*${botName} Broadcast*`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝘔𝘦𝘯𝘶 メ'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
}
             break
case 'sc':
case 'sourcecode':
reply('*_Gak Ada Sc Ajg_*')
break

case 'antilink':
                if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntilink) return reply(`Udah aktif`)
              anlink.push(from)
              fs.writeFileSync('./database/antilink.json', JSON.stringify(anlink))
              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = anlink.indexOf(from)
              anlink.splice(anu, 1)
              fs.writeFileSync('./database/antilink.json', JSON.stringify(anlink))
              reply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              reply(`Pilih enable atau disable`)
}
        break
case 'group' :
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!groupbuka', buttonText: { displayText: 'Buka' }, type: 1 },
{ buttonId: '!geouptutup', buttonText: { displayText: 'Tutup' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk buka/tutup group", faketeks, but, dep)
break
case 'groupbuka' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
gura.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
gura.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'welcome':
              if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
              break
case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'add':
		if (!isGroup) return reply(mess.only.group)
		if (!isGroupAdmins) return reply(mess.only.admin)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
		if (args.length < 1) return reply('Yang mau di add jin ya?')
		if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
		try {
	      num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
		gura.groupAdd(from, [num])
	} catch (e) {
		console.log('Error :', e)
			reply('Gagal menambahkan target, mungkin karena di private')
					}
		break

case 'kick':
if (!isGroup) return reply(mess.only.group)
if (!itsMe && !isGroupAdmins) return reply(mess.only.admin)
if(!q)return reply(`Format Error!\n\nExample : ${prefix + command} @tag`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
y = q.split('@')[1] + '@s.whatsapp.net'
gura.groupRemove(from, [y])
reply(`Succses kick target!`)
break
  
case 'promote':
case 'pm':
if (!isGroupAdmins && !itsMe && !isOwner) return 
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (dep.message.extendedTextMessage === undefined || dep.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = dep.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
	teks = 'Perintah di terima, anda menjdi admin :\n'
	for (let _ of mentioned) {
		teks += `@${_.split('@')[0]}\n`
	}
	mentions(teks, mentioned, true)
	gura.groupMakeAdmin(from, mentioned)
} else {
	mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
	gura.groupMakeAdmin(from, mentioned)
}
break
case 'demote':
case 'dm' : 
if (!isGroupAdmins && !itsMe && !isOwner) return 
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (dep.message.extendedTextMessage === undefined || dep.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = dep.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
	teks = 'Perintah di terima, anda tidak menjadi admin :\n'
	for (let _ of mentioned) {
		teks += `@${_.split('@')[0]}\n`
	}
	mentions(teks, mentioned, true)
	gura.groupDemoteAdmin(from, mentioned)
} else {
	mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
	gura.groupDemoteAdmin(from, mentioned)
}
break

case 'gifstiker': case 's':
case 'stickergif': case 'sticker': case 'stiker':
if ((isMedia && !dep.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dep
const media = await gura.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
 console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
 console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
gura.sendMessage(from, fs.readFileSync(ran), sticker, {quoted:dep})
 fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && dep.message.videoMessage.seconds < 11 || isQuotedVideo && dep.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dep
const media = await gura.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
reply(monospace(mess.wait))
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
console.log('Finish')
Rapa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted:rep})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
}
break

case 'stickwm': case 'swm':
if (isMedia && !dep.message.videoMessage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dep
if(!q)return reply(`Example : ${prefix + command} nama|author`)
let media = await gura.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
var packname = q.split('|')[0]
var author = q.split('|')[1]
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error)
})
.on('end', function () {
console.log('Finish')
exif.create(packname, author, `takestick_${sender}`)
exec(`webpmux -set exif ./stickers/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('Error')
gura.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: dep})
fs.unlinkSync(media)
fs.unlinkSync(`./stickers/takestick_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if ((isMedia && dep.message.videoMessage.fileLength < 10000000 || isQuotedVideo && dep.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dep
var pembawm = body.slice(9)
let media = await gura.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
var packname = pembawm.split('|')[0]
var author = pembawm.split('|')[1]
reply(monospace(mess.wait))
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error)
})
.on('end', function () {
console.log('Finish')
exif.create(packname, author, `takestick_${sender}`)
exec(`webpmux -set exif ./stickers/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('Error')
gura.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: dep})
fs.unlinkSync(media)
fs.unlinkSync(`./stickers/takestick_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else{
reply(`Format Error!*\n\n*Example :*\n*_Reply gambar/video dengan Caption ${prefix + command} Nama|Author_`)
}
break 
             case 'tourl':
              if ((isMedia && !dep.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
              reply(mess.wait)
              boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dep
              owgi = await gura.downloadMediaMessage(boij)
              res = await uploadImages(owgi)
              reply(res)
              } else {
              reply('kirim/reply gambar/video')
}
              break
case 'get':
          case 'fetch': //ambil dari nuru
              if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
              res = await fetch(q)
              if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
              delete res
              throw `Content-Length: ${res.headers.get('content-length')}`
}
              if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
              txtx = await res.buffer()
              try {
              txtx = util.format(JSON.parse(txtx+''))
              } catch (e) {
              txtx = txtx + ''
              } finally {
              reply(txtx.slice(0, 65536) + '')
}
              break
case 'join': 
              if (!q) return reply('Linknya?')
              if (!isOwner) return reply(mess.only.owner)
              if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
              link = args[0].replace('https://chat.whatsapp.com/','')
              fak = gura.query({ json: ['action', 'invite', link],
              expect200: true })
              reply('Berhasil Masuk Grup')
              break
case 'hidetag':
          if (!isGroupAdmins) return reply(`lu bukan admin bngst`)
              try {
              quotedText = dep.message.extendedTextMessage.contextInfo.quotedMessage.conversation
              hideTag(from, `${quotedText}`)
              } catch {
              hideTag(from, `${q}`)
}
              break
case 'ohidetag':
          if (!isOwner) return reply(`lu bukan admin bngst`)
              try {
              quotedText = dep.message.extendedTextMessage.contextInfo.quotedMessage.conversation
              hideTag(from, `${quotedText}`)
              } catch {
              hideTag(from, `${q}`)
}
              break
case 'disassemble':
if (!isOwner && !itsMe) return reply(mess.only.ownerB)
try {
return gura.sendMessage(from, JSON.stringify(eval(m.quoted),null,'\t'),text, {quoted:dep})
} catch(err) {
e = String(err)
reply(e)
}
break
case 'q': 
if (!m.quoted) return reply('reply message!')
let qse = gura.serializeM(await m.getQuotedObj())
if (!qse.quoted) return reply('the message you replied does not contain a reply!')
await qse.quoted.copyNForward(m.chat, true)
break

case 'setimage':
if (!isOwner) return reply(mess.OnlyOwner)
if (!isQuotedImage) return reply('Reply imagenya blokk!')
const messimagethumb = JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
const downiamgethumb = await gura.downloadMediaMessage(messimagethumb)
fs.unlinkSync(`${pathImg}`)
await sleep(2000)
fs.writeFileSync(`${pathImg}`, downiamgethumb)
reply('Succes')
break



//// CASE BERESIKO LEBIH TEPATNYA GAK STABIL
case 'tomp3':
               if (isQuotedVideo || isQuotedAudio){
               reply(mess.wait)
               encmedia = JSON.parse(JSON.stringify(dep).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
               media = await gura.downloadAndSaveMediaMessage(encmedia)
               ran = getRandom('.mp3')
               exec(`ffmpeg -i ${media} ${ran}`, (err) => {
               fs.unlinkSync(media)
               if (err) return reply(`Err: ${err}`)
               buffer453 = fs.readFileSync(ran)
               itsu.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: dep })
               fs.unlinkSync(ran)
})
               } else {
               reply(mess.wrongFormat)
}
               break      
case 'togif':
               if ((isMedia && !dep.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dep
               mediaaa = await gura.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               gura.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: dep, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
        case 'tovideo':
               if ((isMedia && !dep.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dep
               mediaaa = await gura.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               gura.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: dep, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
case 'toimg':
				case 'tomedia':
              if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (dep.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await gura.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(dep).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await gura.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							gura.sendMessage(from, buffer, image, {quoted: dep})
							fs.unlinkSync(ran)
						})
					}
					break 
					case 'githubstalk':
					if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
					if (args.length < 1) return reply('Usernamenya?')
					var teks = body.slice(13)
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/stalk/github?user=${teks}&apikey=Ikyy69`, {method: 'get'})
					gstalk = `❏ *GITHUB STALK*\n\n❏ Name : ${anu.result.name}\n❏ Followers : ${anu.result.followers}\n❏ Following : ${anu.result.following}\n❏ Id : ${anu.result.id}\n❏ Node Id : ${anu.result.node_id}\n❏ Type : ${anu.result.type}\n❏ Company : ${anu.result.company}\n❏ Location : ${anu.result.location}\n❏ Bio : ${anu.result.bio}\n❏ Site Admin : ${anu.result.site_admin}\n❏ Email : ${anu.result.email}\n❏ Created At : ${anu.result.created_at}\n❏ Updated At : ${anu.result.updated_at}\n❏ Twitter Username : ${anu.result.twitter_username}\n❏ Blog : ${anu.result.blog}\n❏ Avatar Url : ${anu.result.avatar_url}\n❏ Gravatar Id : ${anu.result.gravatar_id}\n❏ Html Url : ${anu.result.html_url}`
					sticWait(from)
					buff = await getBuffer(anu.result.avatar_url)
					gura.sendMessage(from, buff, image, {quoted: ftok, caption: gstalk})
					break 
default:
if (budy.startsWith('>')){
console.log(color('Eval Owner>_<', 'green'))
if (!isOwner && !itsMe) return reply(mess.only.ownerB)
try {
return gura.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted:dep})
} catch(err) {
e = String(err)
reply(e)
}
}

if (budy.startsWith('$')){
if (!itsMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${rply} :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}

}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'FINXBASE', color(sender.split('@')[0]))
	}		
	} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
}
	// console.log(e)
	}
}