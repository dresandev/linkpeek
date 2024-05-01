import { SecretKeyForm } from "~/components/secret-key-form"
import { AddLinkDialog } from "~/components/dialogs/add-link-dialog"

export const AddLink = () => {
	const isValidSecretKey = true

	return isValidSecretKey ? <AddLinkDialog /> : <SecretKeyForm />
}
