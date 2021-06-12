import React, { memo } from 'react';

const SectionTitle = ({title}) => { 

    return (
        <div className="sectionTitle">
            <h2>{ title }</h2>
        </div>
    )
}


export default memo(SectionTitle);