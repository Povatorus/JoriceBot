const Discord = require('discord.js')
const bot = new Discord.Client()

var prefix = ("*")

bot.on("ready", function() {
    bot.user.setGame("Command: *help")
    console.log("Connected")
})

bot.login("NjY2MTY3ODY5ODk3MzEwMjI4.Xhyh4w.cVIWnIx62U7urJeiklf8ECZaUSU")

bot.on('message', message => {
    if(message.content === prefix + "help"){
        message.channel.send("Liste des commandes: \n -Yo , Salut , Qu’est-ce qui est jaune et qui attends ?*help")
    }

    if(message.content === "Yo"){
        message.reply("Bien le bonjour humain ;)")
        console.log("Commande Yo effectué")
    }
    if(message.content === "Salut"){
        message.reply("Salut tu fais quoi?")
        console.log("Commande Salut effectué")
    }
    if(message.content === "Qu’est-ce qui est jaune et qui attends ?"){
        message.reply("t'es dents (qu'ils attendent de se faire laver)")
        console.log("Commande Jorice effectué")
    }
})
