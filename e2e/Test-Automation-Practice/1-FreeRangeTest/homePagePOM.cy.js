import FreeRangeHome from "../../../pages/1-baseFreeRangeTesterPage/freeRangeHome"

const visitHome = new FreeRangeHome; 

describe('POM para Free Range testers', ()=> {

    it('Should have a Mentory Button', () => {
        visitHome.navigateHome();
        visitHome.botonMentoria().click();
    })
})
