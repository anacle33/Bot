module.exports = async(client) => {

    client.user.setPresence({
        game: {
            name: "Je me fais coder"
        }
    })
 };