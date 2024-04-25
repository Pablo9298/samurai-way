import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(!editMode)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '---'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true}
                           onBlur={deactivateEditMode}
                           onChange={onStatusChange}
                           value={status}
                    />
                </div>
            }
        </div>
    );
}


export default ProfileStatusWithHooks;