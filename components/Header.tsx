import { Burger, Code, Group } from '@mantine/core'
import useStyles from '@/styles/Header.styles'
import Logo from '@/assets/vave-logo-head-fit.svg'
import { Dispatch, SetStateAction } from 'react'

interface headerProps {
  navOpen: boolean
  setNavOpen: Dispatch<SetStateAction<boolean>>
}

const Header = ({ navOpen, setNavOpen }: headerProps) => {
  const { classes } = useStyles()

  return (
    <div className={classes.header}>
      <div className={classes.mainSection}>
        <Burger
          opened={navOpen}
          className={classes.burger}
          size="sm"
          onClick={() => setNavOpen(!navOpen)}
          title={'Open navigation'}
          aria-label={'Open navigation'}
        />
        <div className={classes.logoWrapper}>
          <div className={classes.logo}>
            <Logo />
          </div>

          <span className={classes.version}>
            <Code>v1.0.0-dev</Code>
          </span>
        </div>
        <div />
      </div>

      <Group className={classes.links} spacing="xs">
        {/* some links like "Login", "Logout" & "User" */}
      </Group>
    </div>
  )
}

export default Header