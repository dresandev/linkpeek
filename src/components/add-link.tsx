import { AddLinkDialog } from "~/components/dialogs/add-link-dialog"
import { LoginButton } from "~/components/login-button"

export const AddLink = () => {
	const isValidUser = true

	return isValidUser ? <AddLinkDialog /> : <LoginButton />
}
