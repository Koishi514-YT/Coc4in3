import { Client, GatewayIntentBits } from 'discord.js';

// あなたのBotトークンをここに入れてください
const token = "MTQyNTAyNjgwMDM2NjY0OTM0NQ.GPjY9d.y97idBXuhILkcqlYOdYI2NeP-3PMak_HEirDsg";

// クライアント作成
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

// 起動確認
client.once('ready', () => {
  console.log(`✅ ログイン成功: ${client.user.tag}`);
});

// メッセージが送られた時の動作
client.on('messageCreate', message => {
  if (message.content === '!ping') {
    message.reply('pong!');
  }
});

// ログイン
client.login(token);
