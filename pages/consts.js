
/**
 * 
 * @param {string} companyName 
 * @param {string} url 
 * @param {YearMonth} start 
 * @param {YearMonth} end 
 * @param {string} role 
 * @param {string} industry 
 * @param {string} jobTitle 
 * @param {[string]} techStacks 
 * @param {[string]} achievements 
 * @returns {CareerType}
 */
const buildCareer = (companyName, url, start, end, role, industry, jobTitle, techStacks, achievements=[]) => ({
    companyName, url, start, end, role, industry, jobTitle, techStacks, achievements
})

/**
 * LeftContents
 * @type {{
 *  Introduction: {TITLE:string, DESC:string},
 *  Careers: {TITLE:string, CAREERS:[CareerType] } 
 * }}
 */
export const LeftContents = Object.freeze({
    Introduction: Object.freeze({
        TITLE: 'Introduction',
        DESC: `I am good at problem solving and enjoy learning new technology as well as trying fresh approach using the technologies.
        From the recent experience, I am confident at React hooks, Jest, CSS for front end, and Java, JAX-RS, Mochito for backend.`
    }),
    Careers: Object.freeze({
        TITLE: "Careers",
        CAREERS: [
            buildCareer('USAA', 'http://usaa.com/', 
            [2018,9], null, 
            'Maintain & Improve Financial Readiness/Wellness app', 
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
            ],
            [
                "Mordernization of Financial Readiness site",
                "Improve performance/reliability of the Financial Readiness app"
            ]
            ),
            buildCareer('Eonic Korea', 'http://eonic.co.kr/', 
            [2016,7], [2018,3], 
            'Signal Analysis, Architecutre, Development', 
            'Sonar / Defense systems', 
            'Lead SW Engineer', 
            [
                'C',           'C++',
                'RESTful API', 'Javascript',
                'HTML',        'Labview',
                'Intel IPP/TBB',   'Linux',
                'Lab Windows/CVI'
            ],
            [
                "Development of Habor defense system",
                "Development of sonar system in Jang-bo-go submarine vehicle"

            ]
            ),
            buildCareer('Realtimewave', 'http://realtimewave.com/', 
            [2011,2], [2016,6], 
            'Develop Test Systems for UAV, Missiles', 
            'Aero / Defense systems', 
            'SW Engineer', 
            [
                'C/C++',           'MFC',
                'C#.Net',  
                'LUA',         'Python',
                'Socket',      'XML',
                'OpenGL',      'Python',
                'MATLAB',      'VxWorks',
                'Linux',       'QT'
            ],
            [
                "Initiate / Develop TestNgine™ - RT testing tool",
                "Participate developing RTNgine™ - RT simulator"
            ]
            ),
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

/**
 * 
 * @param {string} skillName 
 * @param {number} levelNo 
 * @returns {SkillObj}
 */
const buildSkillLevel = (skillName, levelNo) => ({skillName, levelNo});

/**
 * 
 * @param {string} role 
 * @param {string} where 
 * @param {string} url 
 * @returns {VolunteerObj}
 */
const buildVolunteer = (role, where, url) => ({role, where, url});

/**
 * 
 * @param {string} name 
 * @param {string} url
 * @returns {SchoolObj}
 */
 const buildSchool = (name, url) => ({name,url});

/**
 * 
 * @param {string} major 
 * @param {string} degree 
 * @param {number} year 
 * @returns {DegreeObj}
 */
const buildDegree = (major, degree, year) => ({major, degree, year:year});

/**
 * 
 * @param {SchoolObj} school 
 * @param {[DegreeObj]} degrees 
 * @returns {EducationObj}
 */
const buildEducation = (school, degrees) => ({school, degrees});

/**
 * 
 * @param {string} award 
 * @param {number} year 
 * @returns {AwardObj}
 */
const buildAward = (award, year)=>({award, year})

/**
 * 
 * @param {string} name 
 * @param {string} businessValue
 * @param {string} desc 
 * @returns {AchievementObj}
 */
const buildAchievementItem = (name, businessValue, desc) => ({name, businessValue, desc})

/**
 * 
 * @param {string} company 
 * @param {[AchievementObj]} items 
 * @returns {{company:string, items:[AchievementObj]}}
 */
const buildAchievement = (company, items) => ({company, items})

/**
 * @type {{
 * skillLevels: Object<string, [SkillObj]>,
 * volunteers: [VolunteerObj],
 * educations: [EducationObj],
 * awards: [AwardObj],
 * authority: [string],
 * achievements: [{company:string, items:[AchievementObj]}]
 * }}
 */
export const RightContents = Object.freeze({
    skillLevels: {
        languages: [
            buildSkillLevel("Javascript", 5),
            buildSkillLevel("HTML", 5),
            buildSkillLevel("CSS", 5),
            buildSkillLevel("Java", 5),
            buildSkillLevel("C/C++", 5),
            buildSkillLevel("C#.Net", 5),
            buildSkillLevel("Python", 5),
            buildSkillLevel("YAML", 5),
            buildSkillLevel("XML", 5),
            buildSkillLevel("NodeJs", 4),
            buildSkillLevel("LUA", 4),
            buildSkillLevel("TypeScript", 3),
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
            buildSkillLevel(".Net", 4),
            buildSkillLevel("Jax-RS", 4),
            buildSkillLevel("Spring Boot", 3),
            buildSkillLevel("JQuery", 3),
            buildSkillLevel("Angular 6", 2),
        ],
        "Test Framework": [
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
        Documentation: [
            buildSkillLevel("JsDocs", 5),
            buildSkillLevel("ReadMe", 3),
        ],
        "Project Management": [
            buildSkillLevel("Agile/Jira", 4),
            buildSkillLevel("SAFE", 4),
            buildSkillLevel("SDLC", 3),
        ],
        Network: [
            buildSkillLevel("TCP/IP, UDP", 5),
            buildSkillLevel("RS-232/RS-422/MIL1553", 4),
            buildSkillLevel("Analog/Discrete", 4),
            buildSkillLevel("GPS/GNSS", 3),
            buildSkillLevel("I2C", 3),
        ],
    },
    volunteers: [
        buildVolunteer("Vice President", "GonAPus ( Amateur Astronomy Club ) in GNU", "https://www.facebook.com/GonApus/"),
        buildVolunteer("Training Helper", "Youth traning center", "http://www.gnyouthtc.or.kr/")
    ],
    educations: [
        buildEducation(
            buildSchool("Gyeongsang National Univ","https://www.gnu.ac.kr/"), 
            [
                buildDegree( "Computer Science", "BC", 2005),
                buildDegree("Mechanical Engineering", "BE", 2005)
            ]
        )
    ],
    awards: [
        buildAward("3D-Scanner using 3-color layers", 2004)
    ],
    authority: ["Green Card"],
    achievements: [
        buildAchievement("USAA", [
            buildAchievementItem("Upgrade Pipelines to use compliant modules", `this is a business value`, "this is a description"),
            buildAchievementItem("Create EasyUnit", 
            "save extra time to make unit tests for resource objects",
            `
                Resource Objects are used overall server-client model. 
                lombok covers a lot, but it does not create unit test. 
                Easyunit create unit test and its vanilla java code.
            `),
        ])
    ]
        
})