import React, { useState, useEffect } from 'react'
import { Confirm } from 'semantic-ui-react'

import ILive from './AnimatedHeader'
import IDie from './RottenHeader'
import ModalHeaderContent from './ModalHeaderContent'

const KawaiHeader = () => {
    const [visible, setVisible] = useState(true)
    const [meMori, setMeMori] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [count, setCount] = useState(0)

    const closeModal = () => setModalOpen(false)
    const toggleVisible = () => setVisible((prevVisible) => !prevVisible)

    useEffect(() => {
        window.setTimeout(toggleVisible, 350)
      }, [])
    
      useEffect(() => {
        if (count === 4) {
          setMeMori(true)
          setModalOpen(true)
        }
      }, [count])

    return (
        <div className="container">
            {meMori ? (
                <IDie />
            ) : (
                <ILive
                visible={visible}
                onClick={toggleVisible}
                onComplete={() => setCount((prevCount) => prevCount + 1)}
                />
            )}

            <Confirm
                open={modalOpen}
                content={ModalHeaderContent}
                onCancel={closeModal}
                onConfirm={closeModal}
                cancelButton="Oh, so sorry"
                confirmButton="OK"
                closeOnDimmerClick={false}
            />
            
            <style jsx>
                {`
                .container {
                    margin: 2rem 0 3rem;
                }
                .container :global(.header) {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                `}
            </style>
        </div>
    )
}

export default KawaiHeader
