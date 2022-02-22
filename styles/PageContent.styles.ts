import { createStyles } from '@mantine/core';
import { BREAKPOINT, TABLE_OF_CONTENTS_WIDTH, CONTENT_WIDTH } from '@/styles/PageHeader.styles'

export default createStyles((theme) => ({
  content: {
    minHeight: 'calc(100vh - 350px)',
    position: 'relative',
    zIndex: 1,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    boxShadow: theme.colorScheme === 'dark' ? 'none' : theme.shadows.sm,
    paddingBottom: 80,
  },

  wrapper: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    zIndex: 1,
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing.xl * 2,
    paddingRight: theme.spacing.xl * 2,

    [`@media (max-width: ${BREAKPOINT}px)`]: {
      paddingLeft: theme.spacing.xl,
      paddingRight: theme.spacing.xl,
    },
  },

  container: {
    marginTop: theme.spacing.xl,
    width: `100%`,
    maxWidth: CONTENT_WIDTH + TABLE_OF_CONTENTS_WIDTH,
    marginLeft: 'auto',
    marginRight: 'auto',

    [`@media (max-width: ${BREAKPOINT}px)`]: {
      width: '100%',
      paddingRight: 0,
    },
  },
}))

// Styles borrowed from https://github.com/mantinedev/mantine/blob/master/docs/src/components/MdxPage/MdxPageBase/MdxPageBase.styles.ts
// & https://github.com/mantinedev/mantine/blob/master/docs/src/components/MdxPage/MdxRawContent/MdxRawContent.styles.ts
// License: MIT