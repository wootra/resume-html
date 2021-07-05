import Title from '../Title.js';
import { createElement } from '../../../tools/elementTools.js';
import { setLoadEventForCss } from '../../../tools/fileTools.js';
import { RightContents } from '../../consts.js';
import ExpandCollapseTool from '../../../tools/expandCollapseTool.js';

const AchievementItem = ({name, desc})=>createElement('div', 
	{
		className: 'achievement-item', 
		"data-desc": desc
	},  
	name
)

const AchievementList = RightContents.achievements.map(
	item=>ExpandCollapseTool(item.company, 
		()=>createElement('ul',
			{className: 'achievement-for-company'}, 
			item.items.map(item=>
				createElement('li', {
					"data-tooltip_after": item.businessValue,
					"data-tooltip_pos": "bottom"

					},
					AchievementItem(item)
				)
			)
		)
	)
);

const Achievements = createElement(
	'div',
	{ 
		className: 'achievements',
	},
	[Title("More Achievements"), ...AchievementList]
);

setLoadEventForCss(Achievements, './pages/left-content/achievements/Achievements.css', 'css/Achievements');

export default Achievements;