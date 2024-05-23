import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";
import { EmailEntryForm } from "../email_entry_form/email_entry_form";

type PropsTokenRequestForm = {
    openRequest: boolean;
    toggleRequestModal: () => void;
};

function TokenRequestForm({ openRequest, toggleRequestModal }: PropsTokenRequestForm) {
    const [openEntryForm, setOpenEntryForm] = useState(false);

    const toggleModalEntry = () => {
        setOpenEntryForm((openEntry) => !openEntry);
    };

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        const email = formJson.email as string;
        toggleRequestModal();
        toggleModalEntry();
    };
    return (
        <>
            <Dialog
                open={openRequest}
                PaperProps={{
                    sx: { width: 444, height: 203 },
                    component: "form",
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        submitForm(event);
                    },
                }}
            >
                <DialogTitle fontWeight="bold">Запросить токен</DialogTitle>
                <DialogContent>
                    <TextField
                        InputLabelProps={{
                            shrink: true,
                            required: false,
                        }}
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Почта"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={toggleRequestModal}>Отмена</Button>
                    <Button type="submit">Запросить</Button>
                </DialogActions>
            </Dialog>
            {openEntryForm && <EmailEntryForm openEntryForm={openEntryForm} toggleModalEntry={toggleModalEntry} />}
        </>
    );
}

export { TokenRequestForm };
