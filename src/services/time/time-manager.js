import * as ct from "countries-and-timezones";
import * as cityTimezones from "city-timezones";

export const findTimeZone = (region) => {
    const city = cityTimezones.lookupViaCity(region)
    if (city.length) {
        return city[0].timezone
    }
    const province = cityTimezones.findFromCityStateProvince(region)
    if (province.length) {
        return province[0].timezone
    }
    const allTimezones = ct.getAllTimezones()
    for (const timezone in allTimezones) {
        if (region === allTimezones[timezone].name) {
            return allTimezones[timezone].name
        }
    }

    return null
}
export const convertToBaseTime = (regionTime, baseTime) => {
    if(isValidInput(regionTime)) {
        const newLocalTime = new Date(regionTime.year, regionTime.month - 1, regionTime.day, regionTime.hour, regionTime.minutes, 0, 0);
        const timeDifference = -1 * ct.getTimezone(regionTime.timezone).utcOffset - baseTime.getTimezoneOffset()
        const newBaseTime = new Date(newLocalTime.getTime() + timeDifference * 60 * 1000)
        return newBaseTime
    }
    return baseTime
}
export const isValidInput = (regionTime) => {
    return /^[1-3][0-9][0-9][0-9]$/.test(regionTime.year) && /(^[1-9]$|0[0-9]$|[0-1][0-2]$)/.test(regionTime.month) && /(^(0[0-9]|1[0-9]|2[0-3])$)/.test(regionTime.hour) && /(^([0-9])$|([0-5][0-9])$)/.test(regionTime.minutes)
}

export const getDateOfTimeZone = (regionTimezone, baseTime) => {
    const getInitialTimeZone = ct.getTimezone(regionTimezone).utcOffset
    const utc = baseTime.toUTCString();
    const gDate = new Date(utc.replace('GMT', ''));
    const hours = gDate.getHours();
    gDate.setHours(hours + getInitialTimeZone / 60);
    return new Date(gDate.toString())
}

export const getTimezoneByDate = (date) => {
    const offset = date.getTimezoneOffset() * -1
    const allTimezones = ct.getAllTimezones();
    for (const timezone in allTimezones) {
        if (offset === allTimezones[timezone].utcOffset) {
            return allTimezones[timezone].name
        }
    }
    return ''
}
export const initializeLocalTime = (region, baseTime = new Date()) => {
    const regionTimezone = findTimeZone(region);
    const currentDate = getDateOfTimeZone(regionTimezone, baseTime)
    const localTime = currentDate.toLocaleTimeString()
    const time = localTime.split(":")
    const regionTime = {
        timezone: regionTimezone,
        month: String(currentDate.getMonth() + 1).padStart(2, '0'),
        day: String(currentDate.getDate()).padStart(2, '0'),
        year: currentDate.getFullYear(),
        hour: time[0].padStart(2, '0'),
        minutes: time[1].padStart(2, '0'),
        totalTime: currentDate.getTime()
    }
    return regionTime;
}
