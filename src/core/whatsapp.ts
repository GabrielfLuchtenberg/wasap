const open = require('open')
const numberPrefix = 55

interface OpenWppArgs {
  phoneNumber: string
  message: string
}
const buildParams = (phone: string, message: string) => {
  if (!phone && !message) return

  const phoneParam = phone ? `phone=${numberPrefix}${phone}` : ''
  const messageParam = message ? `text=${message}` : ''
  const params = [phoneParam, messageParam].join('&')
  return `send?${params}`
}
export const openWpp = async ({
  phoneNumber,
  message
}: OpenWppArgs): Promise<void> => {
  const params = buildParams(phoneNumber, message)
  const fullUrl = `https://web.whatsapp.com/${params}`
  await open(fullUrl)
}
