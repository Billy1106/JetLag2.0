import * as ct from "countries-and-timezones";
import * as cityTimezones from "city-timezones";

export const findTimeZone = (region) => {//returns timezone of region e.g Asia/Tokyo
    const city = cityTimezones.lookupViaCity(region)
    if(city.length){
        return city[0].timezone
    }
    const province = cityTimezones.findFromCityStateProvince(region)
    if(province.length){
        return province[0].timezone
    }
    return null
}
export const getDateOfTimeZone = (regionTimezone,baseTime) =>{//create date instance of specified timezone and its time
    const getInitialTimeZone = ct.getTimezone(regionTimezone).utcOffset
    const utc = baseTime.toUTCString();
    const gDate = new Date(utc.replace('GMT', ''));
    const hours = gDate.getHours();
    gDate.setHours(hours + getInitialTimeZone / 60);
    return new Date (gDate.toString())
}
export const initializeLocalTime = (region, baseTime = new Date()) =>{
    const regionTimezone = findTimeZone(region);
    const currentDate = getDateOfTimeZone(regionTimezone,baseTime)
    const localTime = currentDate.toLocaleTimeString();
    const regionTime = {
        timezone:regionTimezone,
        date:String(currentDate.getMonth() + 1).padStart(2, '0') + "/" + String(currentDate.getDate()).padStart(2, '0'),
        year:currentDate.getFullYear(),
        time:localTime.substring(0, localTime.length - 3)
    }

    return regionTime;

}
