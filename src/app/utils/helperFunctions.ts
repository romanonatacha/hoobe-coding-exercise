import { Social } from '../types'

export const socialIntToDisplay = (int: number): Social => {
    switch (int) {
      case 0:
        return "Instagram"
      case 59:
        return "Threads"
      case 6:
        return "Tiktok"
      case 7:
        return "Twitter"
      default:
        return 'Instagram'
    }
  }