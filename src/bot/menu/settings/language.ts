import { MenuTemplate } from 'telegraf-inline-menu'

import { MyContext } from '../../my-context'

import { backButtons } from '../general'

export const menu = new MenuTemplate<MyContext>(
  context => 'Lang settings example'
)

menu.manualRow(backButtons)
