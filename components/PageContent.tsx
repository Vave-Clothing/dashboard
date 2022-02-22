import React from 'react'
import useStyles from '@/styles/PageContent.styles'

interface pageContentProps {
  children: React.ReactNode
}

const PageContent = ({ children }: pageContentProps) => {
  const { classes } = useStyles()

  return (
    <div className={classes.content}>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default PageContent