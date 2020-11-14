/* eslint-disable */

import { Message } from 'discord.js';
import { Bot } from '../src';
import { token } from './config.json';

@Bot.bot('$')
class MyBot extends Bot {
    @Bot.command()
    ping(message: Message) {
        void message.channel.send('Pong!');
    }

    @Bot.command()
    say(message: Message, ...words: string[]) {
        void message.channel.send(words.join(' '));
    }

    @Bot.on('ready')
    ready(): void {
        console.log('Bot started.');
    }
}

 new MyBot(token);
