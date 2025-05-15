import { ECookieValues } from '@shared/enum'
import Cookies from 'js-cookie'

const getAccessToken = (): string | undefined => Cookies.get(ECookieValues.ACCESS_TOKEN)

export { getAccessToken }
