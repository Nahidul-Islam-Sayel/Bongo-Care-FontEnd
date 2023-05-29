import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CheakLogin = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowModal(true);
        }, 1000000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="model">
            {showModal && (
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>You are not logged in yet</Modal.Title>
                    </Modal.Header>
                    <div className='deleteFooter'>
                        <Link to="/">
                            <Button variant="primary">Okay</Button>
                        </Link>
                    </div>
                </Modal.Dialog>
            )}
        </div>
    );
};

export default CheakLogin;