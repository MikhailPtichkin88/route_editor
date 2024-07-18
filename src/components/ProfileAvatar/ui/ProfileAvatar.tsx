import { AppRoutesPaths } from '@/shared/config/router/routesConfig'
import { UserAvatar } from '@/ui/UserAvatar'
import { HTMLProps } from 'react'
import { NavLink } from 'react-router-dom'

interface IProfileAvatarProps extends HTMLProps<HTMLImageElement> {
  wrapperClassName?: string
  avatarLink: string
  inited: boolean
}

export const ProfileAvatar = ({
  inited,
  avatarLink,
  wrapperClassName,
  className = '',
  ...args
}: IProfileAvatarProps) => {
  if (!inited) {
    return <UserAvatar avatarLink={undefined} className={className} />
  }

  return (
    <NavLink
      to={AppRoutesPaths.profile}
      className={wrapperClassName}
      data-testid="ProfileAvatar"
    >
      <UserAvatar avatarLink={avatarLink} className={className} {...args} />
    </NavLink>
  )
}
