/* eslint-disable @next/next/no-css-tags */
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import { lightTheme, darkTheme } from '@/themes/index'
import { AuthProvider } from '@/context/AuthContext'
import CssBaseline from '@mui/material/CssBaseline'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createContext, useEffect, useState } from 'react'
import Head from 'next/head'
import CommunityContextProvider from '@/context/CommunityContext'
import { isNewUser } from 'src/util/setNewUserFlag'
import { useRouter } from 'next/router'
import { MARKETING_PAGE_URL } from '@/constants/MarketingPageData'
import { OurVoiceLoadingAnimation } from '../components'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false, // default: true

            retry: true,
        },
    },
})

export const MyContext = createContext({ themeType: '', setThemeType: (v: string) => {} })
function MyApp({ Component, pageProps }: AppProps) {
    const [domLoaded, setDomLoaded] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [themeType, setThemeType] = useState<string>('light')

    const router = useRouter()

    useEffect(() => {
        setDomLoaded(true)
        //if user is new then redirect to marketing page
        if (router.pathname == '/' && !isNewUser()) {
            setIsLoading(true)
            window.location.href = MARKETING_PAGE_URL
        } else {
            setIsLoading(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        if (typeof window !== 'undefined') {
            const savedThemeType = localStorage.getItem('themeType')

            if (savedThemeType) {
                setThemeType(savedThemeType)
            }
        }
    }, [])

    //show loading screen while redirection take place
    if (isLoading) {
        return <OurVoiceLoadingAnimation />
    }

    return (
        <>
            {domLoaded && (
                <CommunityContextProvider>
                    <MyContext.Provider value={{ themeType, setThemeType }}>
                        <ThemeProvider theme={themeType === 'light' ? lightTheme : darkTheme}>
                            <QueryClientProvider client={queryClient}>
                                <AuthProvider>
                                    <Head>
                                        <link rel="stylesheet" href="/fonts/Inter.css" />
                                    </Head>
                                    <CssBaseline />
                                    <Component {...pageProps} />
                                </AuthProvider>
                            </QueryClientProvider>
                        </ThemeProvider>
                    </MyContext.Provider>
                </CommunityContextProvider>
            )}
        </>
    )
}

export default MyApp
