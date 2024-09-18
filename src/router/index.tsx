import { Link as RouterLink, LinkProps } from 'react-router-dom'

const BASE_PATH = '/project1'

export function Link({ to, ...props }: LinkProps) {
  return <RouterLink to={`${BASE_PATH}${to}`} {...props} />
}
