import COLORS from '@/themes/colors'
import COLORSDARK from '@/themes/colorDark'
import { styled } from '@mui/material'
import { MyContext } from 'src/pages/_app'
import { useContext } from 'react'

const SearchBarMain = styled('div')(({ theme }) => {
    const { themeType } = useContext(MyContext)

    return {
        borderRadius: 22,
        backgroundColor:
            themeType === 'light' ? COLORS.searchBarBackground : COLORSDARK.searchBarBackground,
        marginRight: theme.spacing(2),
        maxWidth: '500px',
        margin: 'auto',
        [theme.breakpoints.up('sm')]: {
            margin: 'auto',
            width: '100%',
            // flexGrow: 1,
        },
        [theme.breakpoints.down('sm')]: {
            // display: 'none',
        },
    }
})

export { SearchBarMain }
