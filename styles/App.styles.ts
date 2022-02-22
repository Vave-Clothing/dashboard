import { createStyles } from '@mantine/core';
import { HEADER_HEIGHT } from '@/styles/Header.styles';
import { NAVBAR_WIDTH, NAVBAR_BREAKPOINT } from '@/styles/Navbar.styles';

export default createStyles((_theme) => ({
  withNavbar: {
    paddingLeft: NAVBAR_WIDTH,

    [`@media (max-width: ${NAVBAR_BREAKPOINT}px)`]: {
      paddingLeft: 0,
    },
  },

  main: {
    scrollMarginTop: HEADER_HEIGHT,
    flex: 1,
    paddingTop: HEADER_HEIGHT,

    [`@media (max-width: ${NAVBAR_BREAKPOINT}px)`]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  content: {
    minHeight: 'calc(100vh - 280px)',
  },
}));