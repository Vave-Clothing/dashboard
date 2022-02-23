import { Button, Container, Group, Text } from "@mantine/core"
import useStyles from '@/styles/Footer.styles'
import Logo from '@/assets/vave-logo-head-fit.svg'
import { HiOutlineArrowRight } from "react-icons/hi"

const FOOTER_LINKS_DATA = [
  {
    title: 'Shop',
    data: [
      { label: 'Products', link: 'https://vave-clothing.de/shop' },
    ],
  },
  {
    title: 'About',
    data: [
      { label: 'Imprint', link: 'https://vave-clothing.de/imprint' },
      { label: 'Privacy Policy', link: 'https://vave-clothing.de/privacy' },
      { label: 'Terms of Service', link: 'https://vave-clothing.de/terms-of-service' },
    ],
  },
]

const Footer = () => {
  const { classes, cx } = useStyles()

  const groups = FOOTER_LINKS_DATA.map((group, i) => (
    <div className={classes.linkWrapper} key={i}>
      <Text className={classes.linkTitle}>{group.title}</Text>
      {
        group.data.map((link, i) => (
          <Text<any>
            className={classes.link}
            component={'a'}
            href={link.link}
            key={i}
          >
            {link.label}
          </Text>
        ))
      }
    </div>
  ))

  return (
    <>
      <div className={classes.spacer} />
      <div className={cx(classes.wrapper, classes.withNavbar)}>
        <Container size={1100}>
          <div className={classes.inner}>
            <div className={classes.logoSection}>
              <Logo />
              <Text className={classes.description} size="sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, deserunt.
              </Text>
            </div>

            <div className={classes.groups}>
              {groups}

              <div className={classes.feedback}>
                <Text className={classes.feedbackTitle}>Support</Text>
                <Text className={classes.feedbackDescription} size="sm">
                  Do you have a problem regarding our shop?
                  We&apos;re open to help you resolve it.
                </Text>

                <Button
                  component="a"
                  href="mailto:support@vave-clothing.de"
                  variant="default"
                  rightIcon={<HiOutlineArrowRight size={14} />}
                  style={{ paddingRight: 12 }}
                >
                  Support
                </Button>
              </div>
            </div>
          </div>

          <div className={classes.afterFooter}>
            <Group position="apart">
              <Text size="xs" className={classes.afterFooterNote}>
                &copy; { new Date().getFullYear() } <a href="https://vave-clothing.de/">Vave Clothing</a> &ndash;{' '}
                Styles by{' '}
                <a href="https://github.com/mantinedev/mantine/">
                  Mantine
                </a>
              </Text>
            </Group>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Footer