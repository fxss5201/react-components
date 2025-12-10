import { createStyles } from 'antd-style'

export const useAClassStyles = createStyles(({ token, css }) => ({
  aClass: css`
    color: ${token.colorText};
    &:hover {
      color: ${token.colorPrimary};
    }
  `,
}))

export const usePopoverItemStyles = createStyles(({ token, css }) => ({
  popoverItem: css`
    color: ${token.colorText};
    &:hover {
      background-color: ${token.colorBgTextHover};
    }
  `,
  popoverItemActive: css`
    color: ${token.colorPrimary};
  `,
}))

export const useColorBorderStyles = createStyles(({ token, css }) => ({
  colorBorder: css`
    border-color: ${token.colorBorder};
  `,
}))

export const useBgLayoutStyles = createStyles(({ token, css }) => ({
  bgLayout: css`
    background-color: ${token.colorBgLayout}!important;
  `,
}))

export const useBgContainerStyles = createStyles(({ token, css }) => ({
  bgContainer: css`
    background-color: ${token.colorBgContainer}!important;
  `,
}))
