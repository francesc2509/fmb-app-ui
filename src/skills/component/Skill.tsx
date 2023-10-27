import React from 'react';

import './Skill.scss'


interface Skill {
    name: string;
    label: string,
    img: string;
    tags: string[];
}

interface Props {
    skill: Skill;
}


const Skill = ({ skill }: Props) => {

    const { label, tags, img } = skill;


    return (<div className="Skill">
        <img src={img} />
        <p>{label}</p>
        <p>{tags.join(',')}</p>
    </div>)
};

export default Skill;