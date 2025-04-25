import DigitalSignature from 'components/rsa-signature/digital-signature'
import { NextPageWithLayout } from 'models/common'
import Head from 'next/head'

const Home: NextPageWithLayout = () => {
	return (
		<div>
			<Head>
				<title>RSA Signature</title>
				<meta name="description" content="Demo Rsa signature app" />
				<link rel="icon" href="/global-icon.png" />
			</Head>

			<main>
				<DigitalSignature />
			</main>
		</div>
	)
}

export default Home
