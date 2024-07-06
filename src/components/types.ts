import { VARIANTS, SIZES, ICON_PLACEMENT } from './constants'

export interface ButtonProps {
  text: string
  variant?: VARIANTS
  size?: SIZES
  iconOnly?: boolean
  placement?: ICON_PLACEMENT
  disabled?: boolean
}
