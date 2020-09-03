import { MenuTemplate } from 'telegraf-inline-menu'
import { menu as languageMenu } from './language'
import { backButtons } from '../general'
import { MyContext } from '../../my-context'

export const menu = new MenuTemplate<MyContext>(context => 'Settings example')
menu.submenu(context => '🏳️‍🌈' + 'Lang', 'lang', languageMenu)
menu.manualRow(backButtons)
