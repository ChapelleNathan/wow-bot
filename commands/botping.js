const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('botping')
		.setDescription('Vous donne la latence du bot'),
	async execute(interaction) {
		await interaction.reply(`Voici la latence de loutreke bot ${interaction.client.ws.ping} ms :saluting_face: !`);
	},
};