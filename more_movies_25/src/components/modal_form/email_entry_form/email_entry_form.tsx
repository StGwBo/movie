import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { DataContext } from "../../../utils/context/data_context/data_context";
import { getAccoutId, checkTokenValidity } from "../../../api/index";

type PropsTokenEntrytForm = {
    openEntryForm: boolean;
    toggleModalEntry: () => void;
};

function EmailEntryForm({ openEntryForm, toggleModalEntry }: PropsTokenEntrytForm) {
    const { contextSelected, setContextSelected } = useContext(DataContext);

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        const token = formJson.token as string;
        const isValidaty = await checkTokenValidity(token);
        if (isValidaty) {
            setContextSelected({ ...contextSelected, reset: contextSelected.reset + 1 });
            localStorage.setItem("token", token);
            toggleModalEntry();
            const accountId = await getAccoutId(token);
            localStorage.setItem("accountId", accountId);
        } else {
            console.log(`Токен ввел - ответа нет,
            Не в том формате, видимо, запрос идет.`);
        }
    };
    return (
        <Dialog
            open={openEntryForm}
            PaperProps={{
                sx: { width: 444, height: 203 },
                component: "form",
                onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                    submitForm(event);
                },
            }}
        >
            <DialogTitle fontWeight="bold">Введите токен</DialogTitle>
            <DialogContent>
                <TextField
                    InputLabelProps={{
                        shrink: true,
                        required: false,
                    }}
                    autoFocus
                    required
                    margin="dense"
                    id="token"
                    name="token"
                    label="Почта"
                    type="text"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={toggleModalEntry}>Отмена</Button>
                <Button type="submit">Ок</Button>
            </DialogActions>
        </Dialog>
    );
}

export { EmailEntryForm };
