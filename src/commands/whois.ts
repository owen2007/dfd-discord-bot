module.exports = {
    name: 'whois',
    execute(message, args, config, client, Discord) {
        const user = message.mentions.users.first();
        const joined = message.member.joinedAt.toString().split(' ');
        const registered = user.createdAt.toString().split(' ');

        const embed = new Discord.MessageEmbed()
            .setColor(config.embedColor)
            .setAuthor(user.tag, user.avatarURL())
            .setDescription(`${user}`)
            .setThumbnail(user.avatarURL())
            .addFields(
                { name: 'Registered', value: `${registered[0]}, ${registered[1]} ${registered[2]}, ${registered[3]} at ${registered[4]} GMT`, inline: true },
                { name: 'Joined', value: `${joined[0]}, ${joined[1]} ${joined[2]}, ${joined[3]} at ${joined[4]} GMT`, inline: true },
                { name: 'Nickname', value: message.member.nickname === null ? `None` : `${message.member.nickname}` },
                { name: 'Role Count', value: `${message.member.roles.cache.size - 1}`, inline: true },
                { name: `Highest Role`, value: `${message.member.roles.highest}`, inline: true },
            )
            .setFooter(`ID: ${user.id}`);

        message.channel.send({ embeds: [embed] });
    },
};
