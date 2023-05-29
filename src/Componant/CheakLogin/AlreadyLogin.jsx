import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AlreadyLogin = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowModal(true);
        }, 8000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="model">
            {showModal && (
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>You are already logged in</Modal.Title>
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

export default AlreadyLogin;
