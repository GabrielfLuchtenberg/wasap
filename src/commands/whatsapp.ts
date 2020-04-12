import { GluegunCommand } from 'gluegun'
import { openWpp } from '../core/whatsapp'

const commmand: GluegunCommand = {
  name: 'web-whatsapp',
  alias: 'wpp',
  run: async function(toolbox) {
    const { print, parameters } = toolbox
    const { number: phoneNumber, message } = parameters.options

    try {
      await openWpp({
        phoneNumber,
        message
      })

      print.success(`${print.checkmark} Sucessfully opened whatsapp`)
    } catch (e) {
      print.error(`Something went wrong ${JSON.stringify(e)}`)
    }
  }
}

module.exports = commmand
