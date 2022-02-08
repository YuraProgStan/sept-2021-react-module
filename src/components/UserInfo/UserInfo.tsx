import React, {FC} from 'react';
import css from './UserInfo.module.css'

const UserInfo: FC = () => {
    return (
        <div className={css.info}>
            <div className={css.circle}>&nbsp;</div>
            <div className={css.name}>Yuriy Stanishevskiy</div>
        </div>
    );
};

export {UserInfo};