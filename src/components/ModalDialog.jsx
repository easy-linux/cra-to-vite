import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { getDialogIsOpened, getDialogParams } from "../modules/dialog/selectors"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { closeDialog } from "../modules/dialog/actions";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    backgroundColor: '#282c34',
    color: 'white',
};


const ModalDialog = () => {
    const dispatch = useDispatch()
    const isOpened = useSelector(getDialogIsOpened, shallowEqual)
    const params = useSelector(getDialogParams, shallowEqual)

    const onClose = () => {
        dispatch(closeDialog())
    }

    return <Modal
        open={isOpened}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h3" component="h2">
               {params?.name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Company: {params?.company.name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Description: {params?.company.catchPhrase}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Area: {params?.company.bs}
            </Typography>
        </Box>
    </Modal>
}

export default ModalDialog