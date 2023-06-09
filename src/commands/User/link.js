const { ApplicationCommandOptionType } = require("discord.js");
const ertucuk = require("../../Settings/System");

module.exports = {
    name: "url",
    description: "sunucu özel url kullanımı",
    category: "NONE",
    cooldown: 0,
    command: {
      enabled: true,
      aliases: ["link"],
      usage: "",
    },
    slashCommand: {
      enabled: true,
      options: [
        {
            name: "link",
            description: "sunucu özel url kullanımı",
            type: ApplicationCommandOptionType.Subcommand,
        },
      ],
    },

    onLoad: function (client) { },

    onCommand: async function (client, message, args) {

    if(!message.guild.vanityURLCode) return message.reply({ content:"Sunucuda özel url bulunmuyor."});

    const link = await message.guild.fetchVanityData();

    message.reply({ content: `discord.gg/${message.guild.vanityURLCode}\n**Url Kullanımı:** **${link.uses}**`})
     },

    onSlash: async function (client, interaction) { },
  };