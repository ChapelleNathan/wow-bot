const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data : new SlashCommandBuilder()
		.setName('healer')
		.setDescription('Dit qui est le meilleur healer du monde'),
	async execute(interaction) {
		await interaction.reply('Le meilleur healer est bien évidemment Ysy');
	},
};