import Button, { ButtonProps } from '@mui/material/Button'
import { green, grey, pink } from '@mui/material/colors'
import { styled } from '@mui/material/styles'

export const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
	color: theme.palette.getContrastText(grey[500]),
	backgroundColor: pink[500],
	'&:hover': {
		backgroundColor: pink[600],
	},
}))
