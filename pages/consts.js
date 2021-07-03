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
 * }} CarrierType
 */

const buildCarrier = (companyName, url, start, end, role, industry, jobTitle, techStacks) => ({
    companyName, url, start, end, role, industry, jobTitle, techStacks
})

/**
 * @type {{
 *  Introduction: {TITLE:string, DESC:string},
 *  Carriers: {TITLE:string, CARRIERS:[CarrierType] } 
 * }}
 */

export const LeftContents = Object.freeze({
    Introduction: Object.freeze({
        TITLE: 'Introduction',
        DESC: `A passionate leader who is eager to solve/mitigate problems.
        Having fun improving existing software. 
        BS in Computer Science, 10+ years of full-stack development experiences including RT/multi-thread handling as well as enterprise services/clients.`
    }),
    Carriers: Object.freeze({
        TITLE: "Carriers",
        CARRIERS: [
            buildCarrier('USAA', 'http://usaa.com/', 
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
            buildCarrier('Eonic Korea', 'http://eonic.co.kr/', 
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
})