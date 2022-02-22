import { createStyles } from '@mantine/core'

export const BREAKPOINT = 1080
export const TABLE_OF_CONTENTS_WIDTH = 260
export const CONTENT_WIDTH = 1080 - TABLE_OF_CONTENTS_WIDTH
export const TAB_HEIGHT = 46
export const TAB_HEIGHT_MOBILE = 38

export default createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    zIndex: 4,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    paddingLeft: theme.spacing.xl * 2,
    paddingRight: theme.spacing.xl * 2,

    [`@media (max-width: ${BREAKPOINT}px)`]: {
      paddingLeft: theme.spacing.xl,
      paddingRight: theme.spacing.xl,
    },
  },

  header: {
    paddingTop: 50,
    maxWidth: 1082,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: theme.spacing.xl * 1.5,

    [`@media (max-width: ${BREAKPOINT}px)`]: {
      maxWidth: '100%',
      paddingRight: 0,
      paddingBottom: theme.spacing.xl,
    },
  },

  withTabs: {
    paddingBottom: theme.spacing.xl * 1.5,
  },

  title: {
    fontSize: 44,
    marginBottom: theme.spacing.xs / 2,
    fontWeight: 900,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [`@media (max-width: ${BREAKPOINT}px)`]: {
      fontSize: 32,
      lineHeight: 1.2,
    },
  },

  description: {
    maxWidth: 450,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    marginBottom: theme.spacing.xl,

    [`@media (max-width: ${BREAKPOINT}px)`]: {
      fontSize: theme.fontSizes.md,
    },
  },

  linkWrapper: {
    display: 'flex',
    alignItems: 'center',
  },

  link: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    display: 'flex',
    alignItems: 'center',
    lineHeight: 1,
  },

  icon: {
    marginRight: 12,
    display: 'flex',
    alignItems: 'center',
  },

  item: {
    display: 'flex',
    alignItems: 'center',
    minHeight: 20,
    overflowX: 'auto',

    '& + &': {
      marginTop: theme.spacing.xs,
    },
  },

  label: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    width: 100,
    height: 20,
    lineHeight: '20px',

    '@media (max-width: 500px)': {
      display: 'none',
    },
  },
}))

// Styles borrowed from https://github.com/mantinedev/mantine/blob/master/docs/src/components/MdxPage/MdxPageHeader/MdxPageHeader.styles.ts
// & https://github.com/mantinedev/mantine/blob/master/docs/src/components/MdxPage/MdxPageHeader/HeaderItem/HeaderItem.styles.ts
// & https://github.com/mantinedev/mantine/blob/master/docs/src/components/MdxPage/MdxPageHeader/LinkItem/LinkItem.styles.ts
// License: MIT