'use client'

import { createTheme, Theme } from '@mui/material/styles'
import COLORS from './colorDark'

declare module '@mui/material/styles' {
    interface Theme {
        sideBarBg: string
    }
}

const darkTheme: Theme = createTheme({
    palette: {
        primary: {
            main: COLORS.primary,
            light: '#CDCDFF',
        },
        background: {
            default: '#181818',
        },
        error: {
            main: '#FF6C6C',
        },
    },
    // 添加自定义属性
    sideBarBg: '#232323',
    typography: {
        fontFamily: [
            'Inter',
            'Arial',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),

        body1: {
            fontSize: 16,
        },
        h1: {
            fontSize: 36,
            fontWeight: 'bold',
        },

        h6: {
            fontSize: 21,
            fontWeight: 'bold',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '@font-face': {
                    fontFamily: 'Inter',
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: 'black',
                    fontSize: 14,
                    fontWeight: 600,
                },
            },
        },
        MuiTextField: {
            styleOverrides: {},

            defaultProps: {
                size: 'small',
                FormHelperTextProps: { style: { backgroundColor: 'transparent' } },
                inputProps: { style: { backgroundColor: 'white', borderRadius: 8 } },
            },
        },
        MuiSelect: {
            styleOverrides: {
                outlined: {
                    borderRadius: 8,
                    // padding: 0,
                    border: 'solid #EFEFEF 1px',
                },
            },
            defaultProps: {
                size: 'small',
                inputProps: { style: { backgroundColor: 'white', borderRadius: 8 } },
                variant: 'outlined',
            },
        },

        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 25,
                    color: 'white',
                    fontWeight: 'bold',
                    textTransform: 'none',
                },
                sizeLarge: {
                    height: 50,
                    paddingLeft: 80,
                    paddingRight: 80,
                },
                sizeSmall: {
                    padding: 8,
                },
                outlined: {
                    color: COLORS.primary,
                    borderWidth: 2,
                    ':hover': {
                        borderWidth: 2,
                    },
                    // borderBlockColor: COLORS.primary
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    // padding: 0,
                    border: 'solid #EFEFEF 1px',
                },
                multiline: {
                    // padding: 12,
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: '#EFEFEF',
                    color: '#04263D',
                    // width: 300,
                    padding: 8,
                    borderRadius: 8,
                },
            },
        },
        MuiAlert: {
            styleOverrides: {
                standard: {
                    justifyContent: 'center',
                    color: 'white',
                    borderRadius: 8,
                },
                standardError: {
                    backgroundColor: '#FF6C6C',
                    color: 'white',
                },
                standardSuccess: {
                    backgroundColor: '#ACFDAB',
                    color: 'black',
                    '& .MuiAlert-icon': {
                        color: 'black !important',
                    },
                },
                icon: {
                    color: 'white !important',
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    borderRadius: '15px',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'white',
                    boxShadow: 'none',
                    color: 'black',
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                deleteIcon: {
                    color: 'black',
                    fontSize: 18,
                },
                outlined: {
                    borderColor: 'black',
                },
            },
            defaultProps: {},
        },
    },
})

export { darkTheme }
