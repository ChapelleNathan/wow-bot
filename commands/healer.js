const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data : new SlashCommandBuilder()
		.setName('healer')
		.setDescription('tell who is the best healer of the world'),
	async execute(interaction) {
		await interaction.reply('Le meilleur healer est bien évidemment Ysy');
	},
};