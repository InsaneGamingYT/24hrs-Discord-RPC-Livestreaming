const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js')
keepAlive()

client.on('ready', async () => {


  console.clear();

  console.log(`${client.user.tag} - rich presence started!`
  )
  const r = new Discord.RichPresence()
    .setApplicationId('693453554232328232')
    .setType('STREAMING') //STREAMING, PLAYING, LISTENING.//TRANSMITINDO, JOGANDO, ESCUTANDO
    .setURL('https://www.twitch.tv/insanegamingbr') // ou url do yt
    .setState('Segue lá no insta')
    .setName('mrnekrozyt')
    .setDetails('@vini_sp2022')
    .setStartTimestamp(Date.now()) // remova essa linha se você não quer o timestamp de quando começou o RPC
    /*.setParty({         
        max: 9999,
        current: 6789,
        id: Discord.getUUID(),
    })*/

    //.setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1072278735618834554/1090787324197093396/a_cf206f669f1d3d36e15cb174610a9280.gif') //você pode colocar links diretos de fotos ou gifs.
    .setAssetsLargeText('Tu é curioso(a) eim?') //texto que aparece quando passa o mouse em cima da imagem grande
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1072278735618834554/1090787324197093396/a_cf206f669f1d3d36e15cb174610a9280.gif') //você pode colocar links diretos de fotos ou gifs.
    .setAssetsSmallText('@vini_sp2022') //texto que aparece quando passa o mouse em cima da imagem pequena
    .addButton('Instagram', 'https://www.instagram.com/vini_sp2022')
    .addButton('Twitch', 'https://www.twitch.tv/insanegamingbr')
  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline
})

client.login(process.env.TOKEN)




















