import { Button, Skeleton, Stack } from "@mui/material";
import ContactForm from "components/ContactForm/ContactForm";
import { ContactListItem } from "components/ContactList/ContactListItem";
import { Section } from "components/Section/Section";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { getIsLoading } from "redux/contacts/selectors";

const Contacts = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const openModal = evt => {
        evt.preventDefault();
        setModalOpen(prevState => !prevState);
    };

    return (
        <>
            {!modalOpen && (
                <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    type="button"
                    onClick={openModal}
                    color="success"
                >
                    Add contact
                </Button>
            )}

            <Section title="Your Contacts" />

            {modalOpen && <ContactForm setModalOpen={setModalOpen} />}
            {isLoading && (
                <Stack spacing={1}>
                    <Skeleton variant="rectangular" height={300} />
                </Stack>
            )}

            {!modalOpen && !isLoading && <ContactListItem />}

        </>
    );
};

export default Contacts;