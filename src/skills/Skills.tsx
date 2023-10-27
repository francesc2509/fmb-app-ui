import React from 'react';
import { Skill as SkillEntity } from './domain';
import { Skill } from './component';

import './Skills.scss'

const skills: SkillEntity[] = [
    {
        label: 'Angular',
        name: 'angular',
        img: 'https://angular.io/assets/images/logos/angular/angular.png',
        tags: [ "framework", "frontend" ]
    },
    {
        name: 'springboot',
        label: 'SpringBoot',
        img: 'https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png',
        tags: [ "framework", "backend" ]
    },
]

const Skills = () => <div className="Skills">
    { skills.map((skill) => {
        return (<div key={skill.name} className="Skills-Item">
            <Skill skill={skill}/>
        </div>)
    }) }
</div>;

export default Skills;