import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as React from 'react';
import {Key, KeybindingContext} from 'react-keyhooks';

import './modal.scss';

export const Modal = (props: {children: React.ReactNode; hide?: () => void}) => {
    const {useKeybinding} = React.useContext(KeybindingContext);
    useKeybinding(Key.ESCAPE, () => {
        if (props.hide) {
            props.hide();
            return true;
        }
        return false;
    });

    return (
        <div className='modal-container'>
            <div className='modal'>
                <div className='modal__bar'>
                    <FontAwesomeIcon className='modal__bar__close' icon={faTimesCircle} onClick={props.hide} />
                </div>
                <div className='modal__content'>{props.children}</div>
            </div>
        </div>
    );
};
