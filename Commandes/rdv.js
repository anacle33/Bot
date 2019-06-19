const Discord = require("discord.js");


module.exports.run = async (client, message, args) => {
    message.delete();
    if(args[0] == "help"){
      message.reply("Usage: !rdv <présentation de vous et lettre de motivation>");
      return;
    }
    let rUser = message.author;
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Demande RDV")
    .setColor("#E43333")
    .addField("Demande de rdv par l'utilisateur ", `${rUser} ID: ${rUser.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Présentation et motivation", rreason);

    let reportschannel = message.guild.channels.find(`name`, "demande-de-rdv-admin");
    if(!reportschannel) return message.channel.send("Je ne trouve pas le channel demande-de-rdv-admin");
    reportschannel.send(reportEmbed);

}

module.exports.help = {
  name: "report"
}
