import { DEFAULT_THEME, ScrollArea, ThemeIcon, useMantineTheme, Text } from '@mantine/core'
import useStyles from '@/styles/Navbar.styles'
import Link from 'next/link'
import { HiOutlineChevronDown, HiOutlineHome } from 'react-icons/hi'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { IconType } from 'react-icons'

interface navbarProps {
  navOpen: boolean
}

interface linkGroupProps {
  data: {
    title: string
    links: {
      title: string
      to: string
    }[]
  }
}

const mainLinks: { label: string; to: string; theme: string; icon: IconType }[] = [
  { to: '/', label: 'Home', theme: DEFAULT_THEME.colors.blue[6], icon: HiOutlineHome },
]

const links: { title: string; links: { title: string; to: string; }[] }[] = []

const Navbar = ({ navOpen }: navbarProps) => {
  const router = useRouter()

  const { classes, cx } = useStyles()
  const theme = useMantineTheme()

  const main = mainLinks.map((item) => (
    <Link key={item.to} href={item.to} passHref>
      <a href={item.to} className={cx(classes.mainLink, { [classes.active]: router.pathname === item.to })}>
        <ThemeIcon size={30} style={{ backgroundColor: item.theme, color: theme.white }} radius="lg">
          <item.icon style={{ height: 18, width: 18 }} />
        </ThemeIcon>
        <div className={classes.label}>{item.label}</div>
      </a>
    </Link>
  ));

  const docs = links.map((group, i) => (
    <LinkGroup data={group} key={i} />
  ))

  return (
    <nav className={cx(classes.navbar, { [classes.opened]: navOpen })}>
      <ScrollArea style={{ height: '100vh' }} type="scroll">
        <div className={classes.body}>
          {main}
          <div className={classes.docs}>{docs}</div>
        </div>
      </ScrollArea>
    </nav>
  )
}

const LinkGroup = ({ data }: linkGroupProps) => {
  const router = useRouter()

  const [collapsed, setCollapsed] = useState(false)

  const { classes, cx } = useStyles()

  return (
    <div className={cx(classes.category, { [classes.categoryCollapsed]: collapsed })}>
      <button className={classes.header} type="button" onClick={() => setCollapsed(!collapsed)}>
        <HiOutlineChevronDown className={cx(classes.icon, { [classes.iconCollapsed]: collapsed })} />
        <Text className={classes.title} weight={700} size="xs" transform="uppercase">
          { data.title }
        </Text>
      </button>
      {
        !collapsed &&
        data.links.map((link, i) => (
          <Link key={i} href={link.to} passHref>
            <a href={link.to} className={cx(classes.link, { [classes.linkActive]: router.pathname === link.to })}>
              { link.title }
            </a>
          </Link>
        ))
      }
    </div>
  )
}

export default Navbar