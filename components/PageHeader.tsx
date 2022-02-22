import useStyles from '@/styles/PageHeader.styles'
import { Title, Text, Anchor } from '@mantine/core'

interface pageHeaderProps {
  title: string
  description: string
  items?: linkItemProps[]
}

interface linkItemProps {
  label: string
  icon: JSX.Element
  link?: string
  children: string
}

const PageHeader = ({ title, description, items }: pageHeaderProps) => {
  const { classes } = useStyles()

  const LinkItem = ({ label, icon, link, children }: linkItemProps) => (
    <div className={classes.item} style={{ alignItems: 'center' }}>
      <Text className={classes.label} size="sm">
        {label}
      </Text>
      <div className={classes.wrapper} style={{ display: 'flex', alignItems: 'center' }}>
        {
          link ? (
            <Anchor className={classes.link} href={link} size="sm">
              <div className={classes.icon}>{icon}</div>
              {children}
            </Anchor>
          ) : (
            <Text className={classes.link} size="sm">
              <div className={classes.icon}>{icon}</div>
              {children}
            </Text>
          )
        }
        
      </div>
    </div>
  )

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <Title className={classes.title}>{ title }</Title>

        <Text size="lg" className={classes.description}>{ description }</Text>

        {
          items &&
          items.map((item, i) => (
            <LinkItem label={item.label} icon={item.icon} link={item.link} key={i}>{ item.children }</LinkItem>
          ))
        }
      </div>
    </div>
  )
}

export default PageHeader