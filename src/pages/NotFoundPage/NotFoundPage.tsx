import { memo } from 'react'
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
  return (
    <div
      data-testid="NotFoundPage"
      className={cls.notfoundpage}
    >
      Страница не найдена
    </div>
  )
})
