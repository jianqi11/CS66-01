import { InputBase, styled } from '@mui/material'
import COLORS from '@/themes/colors'
import COLORSDARK from '@/themes/colorDark'
import { MyContext } from 'src/pages/_app'
import { useContext } from 'react'
const SearchBarInputBase = styled(InputBase)(({ theme }) => {
    const { themeType } = useContext(MyContext)
    return {
        color: 'inherit',
        marginTop: 4,
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            maxWidth: '650px',
        },
        '& .MuiInputBase-input::placeholder': {
            color: themeType === 'light' ? COLORS.SearchIconClolor : COLORSDARK.SearchIconClolor, // 在这里设置placeholder的颜色
        },
    }
})

export { SearchBarInputBase }
