import { Link as RouterLink, LinkProps } from 'react-router-dom'

const BASE_PATH = '/project1'

interface CustomLinkProps extends LinkProps {
  to: string
}

export function Link({ to, ...props }: CustomLinkProps) {
  return <RouterLink to={`${BASE_PATH}${to}`} {...props} />
}
