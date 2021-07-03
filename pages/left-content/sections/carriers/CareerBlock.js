import { createElement } from '../../../../tools/elementTools.js';

/**
 * @typedef {[number, number]} YearMonth [year, month]
 */

const assignDigits = (num, digits)=>{
	digits--;
	let addStr = '';
	while(digits> 0 && num < (Math.pow(10,digits))){
		addStr+= '0';
		digits--;
	}
	return addStr + num;
}

const CompanyTitle = (companyName, url) => createElement('h3', {className: 'company-title'}, 
	createElement('a', {
		href: url, 
		target: '_blank', 
		"ariaLabel": `link to ${companyName}`,
		'data-url': `(${url})`,
		'data-tooltip': `link to ${companyName} - ${url}`,
		tooltip: `link to ${companyName}`,
	}, [companyName])
);
const CareerSpan = (start,end) => {
	const endTxt = end && `${end[0]}.${assignDigits(end[1],2)}` || "NOW";
	return createElement('span', {className: 'Career-span'}, 
		`${start[0]}.${assignDigits(start[1],2)}-${endTxt}`
	);
}
const Role = (role) => createElement('p', {className: 'Career-role', "data-tooltip": "Career role"}, role);
const Industry = (ind) => createElement('p', {className: 'Career-industry', "data-tooltip": "industry"}, ind);
const JobTitle = (title) => createElement('p', {className: 'Career-job-title', "data-tooltip": "job title"}, title);
const TechStacks = (techs) => createElement('p', {className: 'Career-tech-stack', "data-tooltip": "tech stacks"}, 
	techs.join(" / ")
);

/**
 * 
 * @param {{
 * companyName: string,
 * url: string,
 * start: YearMonth,
 * end: YearMonth,
 * role: string,
 * industry: string,
 * jobTitle: string,
 * techStacks: [string]
 * }} info 
 */
export const CareerBlock = (info) => {
	return createElement('div', {className: 'Career-block'}, [
		CompanyTitle(info.companyName, info.url),
		CareerSpan(info.start, info.end),
		Role(info.role),
		Industry(info.industry),
		JobTitle(info.jobTitle),
		TechStacks(info.techStacks)
	]);
}