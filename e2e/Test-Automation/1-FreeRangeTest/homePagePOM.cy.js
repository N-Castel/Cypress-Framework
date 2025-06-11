import FreeRangeHome from "../../../selector/1-baseFreeRangeTesterPage/selectorFreeRangeHome"

const visitHome = new FreeRangeHome; 

describe('POM para Free Range testers', ()=> {

    it('Should have a Mentory Button', () => {
        visitHome.navigateHome();
        visitHome.botonMentoria().click();
    })
})
