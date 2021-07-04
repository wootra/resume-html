import Title from '../left-content/Title.js';
import { createElement, replaceChildren } from '../../tools/elementTools.js';
import { setLoadEventForCss } from '../../tools/fileTools.js';
import { RightContents } from '../consts.js';

const SkillGuage = (skillName, skillPt) => createElement('div', {className: 'skill-guage'}, 
	[
		document.createTextNode(skillName),
		document.createTextNode(skillPt)
	]
)

const skillPanelName = groupName => `skill-panel-for-${groupName}`;

const GroupHeader = groupName => createElement('div', 
	{
		className: `skill-group-header skill-header-for-${groupName}`,
		onclick : (e)=>{
			console.log("onClick");
			e.target.parentNode.classList.toggle('shrunk');
			if(!e.target.parentNode.classList.contains('shrunk')){
				const panel = document.getElementById(skillPanelName(groupName));
				replaceChildren(panel, 
					RightContents.skillLevels[groupName].map(
						obj=>SkillGuage(obj.skillName, obj.levelNo)
					)
				)
			}
		}
	},
	groupName
)

const GroupPanel = (groupName)=>{
	return createElement('div', {className: "skill-group-panel", id:skillPanelName(groupName)})
}

const SkillGroup = (groupName) => createElement('div', {className: `skill-group skill-group-for-${groupName} shrunk`}, 
	[GroupHeader(groupName), GroupPanel(groupName)]
)

const SkillList = createElement('div',{className: 'skill-list'}, 
	Object.keys(RightContents.skillLevels).map(group=>SkillGroup(group))
)

const SkillLevels = createElement(
	'div',
	{ className: 'skill-levels' },
	[Title("Skill Levels"), SkillList]
);

setLoadEventForCss(SkillLevels, './pages/right-content/SkillLevels.css', 'css/SkillLevels');

export default SkillLevels;