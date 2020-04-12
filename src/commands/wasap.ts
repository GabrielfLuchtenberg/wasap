import { GluegunCommand } from 'gluegun'
const whatsappCommand = require('./whatsapp')
const command: GluegunCommand = {
  name: 'wasap',
  run: async toolbox => {
    const { print } = toolbox
    print.info('Calling whatsapp command')
    whatsappCommand.run(toolbox)
  }
}

module.exports = command
