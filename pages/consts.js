/**
 * @typedef {{
 * companyName: string,
 * url: string,
 * start: YearMonth,
 * end: YearMonth,
 * role: string,
 * industry: string,
 * jobTitle: string,
 * techStacks: [string]
 * }} CareerType
 */

const buildCareer = (companyName, url, start, end, role, industry, jobTitle, techStacks) => ({
    companyName, url, start, end, role, industry, jobTitle, techStacks
})

/**
 * @type {{
 *  Introduction: {TITLE:string, DESC:string},
 *  Careers: {TITLE:string, CAREERS:[CareerType] } 
 * }}
 */

export const LeftContents = Object.freeze({
    Introduction: Object.freeze({
        TITLE: 'Introduction',
        DESC: `A passionate leader who is eager to solve/mitigate problems.
        Having fun improving existing software. 
        BS in Computer Science, 10+ years of full-stack development experiences including RT/multi-thread handling as well as enterprise services/clients.`
    }),
    Careers: Object.freeze({
        TITLE: "Careers",
        CAREERS: [
            buildCareer('USAA', 'http://usaa.com/', 
            [2018,9], null, 
            'Maintenance and improve of Financial Readiness/Wellness application', 
            'Financial / Insurance', 
            'SW Engineer I', 
            [
                'React',       'Java',
                'Redux',       'Javascript',
                'RESTful API(JAX-rs/Spring boot)',
                'HTML',        'CSS',
                'Openshift',   'gitlab-ci',
                'Mocha',       'Jest',
                'Mochito',     'Enzyme',
                'Cypress',     'Spock'
            ]),
            buildCareer('Eonic Korea', 'http://eonic.co.kr/', 
            [2016,7], [2018,3], 
            'Analysis Signal & UI/UX Design and Developing', 
            'Sonar / Defense systems', 
            'Lead SW Engineer', 
            [
                'C',           'C++',
                'React',       'Redux',
                'RESTful API', 'Bootstrap',
                'HTML',        'Python',
                'MATLAB',      'Intel IPP',
                'Linux',       'Windows'
            ]),
            
        ]
    })
});

export const TopContents = Object.freeze({
    name: 'Songhyeon Jun',
    address: 'San Antonio, TX, 78261',
    position: 'Fullstack SW Engineer',
    contact: {
        phone: '(512)919-6009',
        email: 'shjeon0730@gmail.com'
    }, 
    website: {
        homepage: 'https://www.sh-jun.com',
        github: 'https://github.com/wootra',
    }
})

const buildSkillLevel = (skillName, levelNo) => ({skillName, levelNo})

/**
 * @typedef {{skillName:string, levelNo:number}} SkillObj
 */

/**
 * @type {{skillLevels: Object<string, [SkillObj]>}}
 */
export const RightContents = Object.freeze({
    skillLevels: {
        languages: [
            buildSkillLevel("Javascript", 5),
            buildSkillLevel("HTML", 5),
            buildSkillLevel("CSS", 5),
            buildSkillLevel("Java", 5),
            buildSkillLevel("C/C++", 5),
            buildSkillLevel("Python", 5),
            buildSkillLevel("NodeJs", 4),
            buildSkillLevel("LUA", 4),
            buildSkillLevel("JPA", 3),
            buildSkillLevel("SASS/LESS", 3),
        ],
        ShellScripts:[
            buildSkillLevel("bash-sh", 4),
            buildSkillLevel("cmd-sh", 3),
        ],
        "Multimedia/Office":[
            buildSkillLevel("Flash/Action Script", 5),
            buildSkillLevel("Photoshop", 4),
            buildSkillLevel("Illustrator", 4),
            buildSkillLevel("Excel", 4),
            buildSkillLevel("PowerPoint", 4),
            buildSkillLevel("Word", 3),
        ],
        AnalysisTools: [
            buildSkillLevel("Lab Windows/CVI", 5),
            buildSkillLevel("Matlab", 4),
            buildSkillLevel("TemsorFlow/Keras", 3),
            buildSkillLevel("Jupiter Notebook", 3),
            buildSkillLevel("Labview", 3),
        ],
        frameworks: [
            buildSkillLevel("React Hooks", 5),
            buildSkillLevel("React/Redux", 5),
            buildSkillLevel("Jax-RS", 3),
            buildSkillLevel("Spring Boot", 3),
            buildSkillLevel("Angular 6", 2),
        ],
        test: [
            buildSkillLevel("Jest", 5),
            buildSkillLevel("Mocha", 5),
            buildSkillLevel("Enzyme", 5),
            buildSkillLevel("sinon", 5),
            buildSkillLevel("sinon", 5),
            buildSkillLevel("Selenium", 4),
            buildSkillLevel("cypress", 5),
            buildSkillLevel("Spock", 3),
        ],
        database: [
            buildSkillLevel("My-SQL", 4),
            buildSkillLevel("MS-SQL", 4),
            buildSkillLevel("DB2", 4),
            buildSkillLevel("Mongo DB", 3),
        ],
        DevOps: [
            buildSkillLevel("Gialb-ci", 4),
            buildSkillLevel("Docker", 3),
        ],
        Network: [
            buildSkillLevel("TCP/IP, UDP", 5),
            buildSkillLevel("RS-232/RS-422/MIL1553", 4),
            buildSkillLevel("Analog/Discrete", 4),
            buildSkillLevel("GPS/GNSS", 3),
            buildSkillLevel("I2C", 3),
        ],
    }
        
})