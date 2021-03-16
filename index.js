const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', async message => {
  if(message.content.toLowerCase() === "?webhook"){
const fetched = await client.channels.cache.get('SEND TO').messages.fetch({limit: 5});
client.channels.cache.get('SEND TO').bulkDelete(fetched)

const embed = new Discord.MessageEmbed()
.setTitle('TITLE')
.setColor('COLOR')
.setThumbnail('LINK')
.setDescription(`DESCRIPTION.`)
.addField('EMBED TITLE', `CONTENT`)

const w = await message.guild.fetchWebhooks()
const webhook = w.find(c => c.name === "WEBHOOK")

webhook.send({
  username: "WEBHOOK NAME",
  avatar: "LINK",
  embeds: [embed]
})
  }
})


