// this command leaves a voiceChannel, if it is connect to one

exports.run = (client, message, args, ops) => {

  // Check if author is connected to a voice channel 
  if (!message.member.voiceChannel) return message.channel.send('Connectez-vous à un salon vocal !');

  // Check if the bot is connected to a voice channel
  if (!message/guild.me.voiceChannel) return message.channel.send('Désolé, le bot est pas connecté au salon !');

  // Check if the author and the bot are in the same channel
  if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send('Désolé, vous êtes pas connecté au même vocal');

  // Leave Channel
  message.guild.me.voiceChannel.leave();

  //Send Message 
  message.channel.send('Leaving Channel...');

  // Now, we can test it!
}

