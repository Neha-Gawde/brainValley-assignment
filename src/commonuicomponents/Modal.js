import React from 'react'
import { Backdrop, Fade, makeStyles, Modal } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '0px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
function DetailsModal(props) {
    const { open, onClose, modalData } = props;
    const classes = useStyles();
    return (
        <div>
            <Modal         
                className={`modal-dialog-centered ${classes.modal}`}
                open={open}
                onClose={onClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>

                        <h2 id="transition-modal-title">{modalData.name}</h2>

                        <div className='row aling-items-center'>
                            <div className='col'>
                                <h6 className="card-subtitle mb-2 text-muted">Region :</h6>
                            </div>
                            <div className='col'>
                                <h6 className="card-subtitle mb-2 text-muted">{modalData.region}</h6>
                            </div>
                        </div>
                        <ul>
                            <li>
                                <a href={modalData.maps?.googleMaps} target="_blank" rel="noopener noreferrer" className="" >See on Google Maps</a>
                            </li>
                            <li>
                                <a href={modalData.maps?.openStreetMaps} target="_blank" rel="noopener noreferrer" className="" >See on Open Street Maps</a>
                            </li>
                        </ul>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default DetailsModal
