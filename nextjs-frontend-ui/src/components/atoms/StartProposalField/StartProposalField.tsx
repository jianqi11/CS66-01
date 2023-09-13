import COLORSDARK from '@/themes/colorDark'
import COLORS from '@/themes/colors'
import { EditOutlined } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { MyContext } from 'src/pages/_app'
const StartProposalField = () => {
    const { themeType } = useContext(MyContext)
    const navigate = useRouter()
    return (
        <Box
            sx={{
                backgroundColor:
                    themeType === 'light' ? COLORS.createPostBGColor : COLORSDARK.createPostBGColor,
                padding: 1.2,
                borderRadius: '48px',
                border: COLORS.border,
            }}
            onClick={() => navigate.push('/proposals/newProposal')}>
            <Stack direction={'row'} alignItems="center" paddingX={2}>
                <EditOutlined sx={{ color: 'grey', fontSize: '18px' }} />
                <Typography marginLeft={1.2} fontSize={'14px'} color="grey">
                    Create a post...
                </Typography>
            </Stack>
        </Box>
    )
}

export { StartProposalField }
