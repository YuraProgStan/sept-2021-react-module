import React, {FC} from 'react';
import css from './UserInfo.module.css'

const UserInfo: FC = () => {
    return (
        <div>
            <div className={css.circle}>&nbsp;</div>
            <div>Yuriy Stanishevskiy</div>
        </div>
    );
};

export {UserInfo};