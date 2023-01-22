import * as ct from "countries-and-timezones";

const initializeLocalTime = (region) =>{
    console.log('region')
    const ctCountry = ct.getCountry(region)
    if(ctCountry === null){
        return
    }
    const getInitialTime = () => {
        const getInitialTimeZone = ct.getTimezone(ctCountry.timezones[0]).utcOffset
        const utc = new Date().toUTCString();
        const gDate = new Date(utc.replace('GMT', ''));
        const hours = gDate.getHours();
        gDate.setHours(hours + getInitialTimeZone / 60);
        return gDate.toString();
    }

    const currentDate = new Date(getInitialTime())
    const localTime = currentDate.toLocaleTimeString();
    const regionTime = {
        timezone:ctCountry.timezones[0],
        date:String(currentDate.getMonth() + 1).padStart(2, '0') + "/" + String(currentDate.getDate()).padStart(2, '0'),
        year:currentDate.getFullYear(),
        time:localTime.substring(0, localTime.length - 3)
    }

    return regionTime;

}

export default initializeLocalTime