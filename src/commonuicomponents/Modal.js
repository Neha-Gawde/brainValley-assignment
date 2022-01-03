import React from 'react'
import { Modal, ModalHeader, ModalBody, ListGroup, ListGroupItem} from 'reactstrap';

// import { Backdrop, Fade, makeStyles, Modal } from '@material-ui/core';
// const useStyles = makeStyles((theme) => ({
//     modal: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     paper: {
//         backgroundColor: theme.palette.background.paper,
//         border: '0px',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//     },
// }));
function DetailsModal(props) {
    const { open, onClose, modalData } = props;
    // const classes = useStyles();
    return (
        <div>
            <Modal isOpen={open} toggle={onClose} className={""}>
                <ModalHeader toggle={onClose}>
                    {modalData.name}
                </ModalHeader>
                <ModalBody>
                    <div className='row aling-items-center'>
                        <div className='col-3'>
                            <h6 className="card-subtitle mb-2 text-muted">Region :</h6>
                        </div>
                        <div className='col-9' style={{marginLeft:"-50px"}}>
                            <h6 className="card-subtitle mb-2 text-muted">{modalData.region}</h6>
                        </div>
                    </div>
                    <ListGroup>
                       
                        <ListGroupItem tag="a" href={modalData.maps?.googleMaps}>See on Google Maps</ListGroupItem>
                        <ListGroupItem tag="a" href={modalData.maps?.openStreetMaps}>Check on street maps</ListGroupItem>
                    
                    </ListGroup>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default DetailsModal
