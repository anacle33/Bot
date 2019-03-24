module.exports.run = async (bot, message, args) => {
    if (!message.member.voiceChannel)
        return message.channel.send('Connectez vous à un salon vocal !');
    if (!message.guild.me.voiceChannel)
        return message.channel.send("Le bot n'est pas connecté !");
    if (message.guild.voiceChannelID !== message.member.voiceChannelID)
        return message.channel.send("Vous n'etes dans le meme salon !");
    message.guild.me.voiceChannel.leave();
    message.delete();
};

module.exports.help = {
    name: 'stop'
};