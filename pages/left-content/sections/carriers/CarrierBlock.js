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
const CarrierSpan = (start,end) => {
	const endTxt = end && `${end[0]}.${assignDigits(end[1],2)}` || "NOW";
	return createElement('span', {className: 'carrier-span'}, 
		`${start[0]}.${assignDigits(start[1],2)}-${endTxt}`
	);
}
const Role = (role) => createElement('p', {className: 'carrier-role', "data-tooltip": "carrier role"}, role);
const Industry = (ind) => createElement('p', {className: 'carrier-industry', "data-tooltip": "industry"}, ind);
const JobTitle = (title) => createElement('p', {className: 'carrier-job-title', "data-tooltip": "job title"}, title);
const TechStacks = (techs) => createElement('p', {className: 'carrier-tech-stack', "data-tooltip": "tech stacks"}, 
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
export const CarrierBlock = (info) => {
	return createElement('div', {className: 'carrier-block'}, [
		CompanyTitle(info.companyName, info.url),
		CarrierSpan(info.start, info.end),
		Role(info.role),
		Industry(info.industry),
		JobTitle(info.jobTitle),
		TechStacks(info.techStacks)
	]);
}