import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import { LayoutProps } from 'models'
import Head from 'next/head'

export function MainLayout({ children }: LayoutProps) {
	return (
		<Stack minHeight="100vh">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Thuong's homepage" />
				<meta name="author" content="Thuong Luong" />
				<meta name="author" content="thuongluong" />
				<link rel="avatar" href="avatar.png" />
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@thuongresper" />
				<meta name="twitter:creator" content="@thuongresper" />
				<meta property="og:site_name" content="Thuong Luong's Homepage" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="/avatar.png" />
				<title>Thuong Luong - Homepage</title>
			</Head>
			<Box component="main" flexGrow={1}>
				{children}
			</Box>
		</Stack>
	)
}
