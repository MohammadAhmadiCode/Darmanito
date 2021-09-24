import React, {useState} from 'react';

import shortid from 'short-id';

import market from '../../../Assets/Images/Main/market.svg';
import pharmacy from '../../../Assets/Images/Main/pharmacy.svg';
import onlineSchedule from '../../../Assets/Images/Main/onlineSchedule.svg';
import onlineVisit from '../../../Assets/Images/Main/onlineVisit.svg';

import FAQIcon from '../FAQIconList/FAQIcon/FAQIcon';


const FAQIconList = () => {
    const [iconsList, setIconsList] = useState(
        [{
            image: pharmacy ,
            text: "داروخانه",
            active: true,
            id: shortid.generate()
        }, {
            image: market ,
            text: "فروشگاه ",
            active: false,
            id: shortid.generate()
        }, {
            image: onlineVisit ,
            text: "ویزیت آنلاین",
            active: false,
            id: shortid.generate()
        }, {
            image: onlineSchedule ,
            text: "نوبت دهی آنلاین ",
            active: false,
            id: shortid.generate()
        }]);

    const activateIcon = (id) => {
        const newIconList = [];
        for (const icon of iconsList) {
            if (icon.id === id) {
                icon.active = true;
                newIconList.push(icon)
            } else {
                icon.active = false;
                newIconList.push(icon)
            }
        }
        setIconsList(newIconList);
    }
    return(
        <div className="FAQIcon-List">
           { iconsList.map((iconsList , index) => {
                return(<FAQIcon
                    image={iconsList.image}
                    text={iconsList.text}
                    active={iconsList.active}
                    key={index}
                    click={()=>activateIcon(iconsList.id)}
                />);
            })}
        </div>
    );
}

export default FAQIconList;