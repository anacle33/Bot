// this command will require 2 NPM packages
// `npm i ytbl-core node-opus`
const ytdl = require(`ytdl-core`);



// you can use your own command handler if you'd like
exports.run = async (client, message, args, ops) => {

    // First, we need to check if the autor is connected to a voice channel
    if (!message.member.voiceChannel) return message.channel.send('Connectez vous dans un salon vocal !');
    // If not, return & send a message to chat

    // Check if bot is already connected to a voice channel
    if (message.guild.me.voiceChannel) return message.channel.send('Désolé, le bot est déjà connecter dans le salon !');

    // Check if author input a url
    if (!args[0]) return message.channel.send('Désolé, veuillez saisir un URL derriere la commande !');

    // Validate Info
    let validate = await ytdl.validateURL(args[0]);

    // Check validation
    if(!validate) return message.channel.send('Désolé, veuillez entrer une URL ** valide ** après la commande !');
    // validate will contain a boolean if the url is valid or not

    // Fetch video info
    let info = await message.member.voiceChannel.join();

    // Play song
    let dispatcher = await connection.play(ytdl(args[0], { filter: 'audioonly'}));
    // The dispatcher variable will be used in a later episode

    // Output now playing
    message.channel.send(`Now playing: ${info.title}`);

    // Now, we can test it
};
