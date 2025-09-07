// src/theme/theme.js

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#97549F',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#97549F',
        },
    },
    typography: {
        fontFamily: 'var(--font-gilroy-medium)',
        h1: {
            fontFamily: 'var(--font-gilroy-extrabold)',
        },
        h2: {
            fontFamily: 'var(--font-gilroy-bold)',
        },
        h3: {
            fontFamily: 'var(--font-gilroy-bold)',
        },
        h4: {
            fontFamily: 'var(--font-gilroy-medium)',
        },
        h5: {
            fontSize: '15px',
            fontFamily: 'var(--font-gilroy-medium)',
        },
        h6: {
            fontFamily: 'var(--font-gilroy-medium)',
        },
        body1: {
            fontSize: '12px',
            fontFamily: 'var(--font-gilroy-medium)',
        },
        body2: {
            fontFamily: 'var(--font-gilroy-medium)',
        },
        button: {
            fontFamily: 'var(--font-gilroy-medium)',
        },
        caption: {
            fontFamily: 'var(--font-gilroy-medium)',
        },
        overline: {
            fontFamily: 'var(--font-gilroy-medium)',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontSize: '12px',
                    borderRadius: '5px',
                    color: '#ffffff',
                    height: '50px',
                    lineHeight: 'normal',
                    fontFamily: 'var(--font-gilroy-medium)',
                },
                containedPrimary: {
                    color: '#ffffff',
                },
            },
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    borderRadius: '4px',
                },
            },
        },
        MuiRating: {
            styleOverrides: {
                root: {
                    color: '#97549F',
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    '&[disabled]': {
                        color: 'grey',
                        cursor: 'default',
                        '&:hover': {
                            textDecoration: 'none',
                        },
                    },
                },
            },
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    borderBottom: '1px solid #e7e7e7',
                    marginBottom: '15px',
                },
            },
        },
        MuiFormGroup: {
            styleOverrides: {
                root: {
                    flexDirection: 'row',
                },
            },
        },
        MuiDialogContentText: {
            styleOverrides: {
                root: {
                    marginBottom: '0px',
                },
            },
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    marginBottom: '20px',
                },
            },
        },
        MuiFormControlLabel: {
            styleOverrides: {
                label: {
                    fontSize: '10px',
                },
                root: {
                    marginLeft: '0px',
                },
            },
        },
        MuiFormHelperText: {
            styleOverrides: {
                contained: {
                    marginLeft: '2px',
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    borderColor: '#e7e7e7',
                },
                root: {
                    fontSize: '12px',
                    color: '#323C47',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: '10px',
                    backgroundColor: '#fff ',
                },
            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: '#323C47',
                    fontSize: '12px',
                },
            },
        },
        MuiInput: {
            styleOverrides: {
                underline: {
                    '&:before': {
                        borderBottom: '1px solid #e7e7e7',
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontSize: '8px',
                    height: '24px',
                    color: '#9095A0',
                    borderRadius: '8px',
                    '@media (min-width:768px)': {
                        fontSize: '12px',
                        height: '32px',
                    },
                },
                outlined: {
                    borderColor: '#e7e7e7',
                },
                colorPrimary: {
                    color: '#ffffff',
                },
            },
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    justifyContent: 'center',
                },
            },
        },
        MuiSlider: {
            styleOverrides: {
                markLabel: {
                    fontSize: '12px',
                },
                markLabelActive: {
                    color: '#323C47',
                },
            },
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '0px',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    color: '#323C47',
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                root: {
                    fontFamily: 'var(--font-gilroy-medium)',
                    fontSize: '14px',
                },
                paper: {
                    margin: '0px',
                },
                paperWidthSm: {
                    maxWidth: '1300px',
                },
            },
        },
        MuiPopover: {
            styleOverrides: {
                paper: {
                    minWidth: '190px',
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: '#E6E9EB',
                    },
                },
            },
        },
        MuiSkeleton: {
            styleOverrides: {
                text: {
                    transform: 'none',
                },
            },
        },
        MuiBreadcrumbs: {
            styleOverrides: {
                separator: {
                    marginLeft: '0px',
                    marginRight: '0px',
                },
            },
        },
    }
});

// Make font sizes responsive
theme = responsiveFontSizes(theme);

export default theme;
