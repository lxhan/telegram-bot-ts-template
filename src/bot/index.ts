import dotenv from 'dotenv'
import { MenuMiddleware } from 'telegraf-inline-menu'
import { Telegraf } from 'telegraf'

import { fightDragons, danceWithFairies } from '../magic'

import { MyContext } from './my-context'
import { menu } from './menu'

dotenv.config()
const token = process.env.TELEGRAM_API_TOKEN

const bot = new Telegraf<MyContext>(token)

bot.command('help', async context => context.reply('Help example'))

bot.command('magic', async context => {
  const combatResult = fightDragons()
  const fairyThoughts = danceWithFairies()

  let text = ''
  text += combatResult
  text += '\n\n'
  text += fairyThoughts

  return context.reply(text)
})

const menuMiddleware = new MenuMiddleware('/', menu)
bot.command('start', async context => menuMiddleware.replyToContext(context))
bot.command('settings', async context =>
  menuMiddleware.replyToContext(context, '/settings/')
)
bot.use(menuMiddleware.middleware())

bot.catch((error: any) => {
  console.error('telegraf error occured', error)
})

export async function start(): Promise<void> {
  await bot.telegram.setMyCommands([
    { command: 'start', description: 'open the menu' },
    { command: 'magic', description: 'do magic' },
    { command: 'help', description: 'show the help' },
    { command: 'settings', description: 'open the settings' },
  ])

  await bot.launch()
  console.log(new Date(), 'Bot started as', bot.options.username)
}
