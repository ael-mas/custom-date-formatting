import moment = require('moment');

export = {

    /**
     * Add / Subtract input days to current time and return in input format
     * Pass date format which is required
     * Pass days to add or subtract
     * For subtracting send negative value
     * @param format : (Needed date format (YYYY-MM-DD HH:mm:ss))
     * @param daysToAdd : (Number of days to add)
     * @returns {string}
     *
     * Days: DD
     * Month: MM
     * Year: YYYY
     * Hour: HH
     * Minute: mm
     * Seconds: ss
     * Day: dddd
     */
    getNextOrPrevDateCustomFormat(format: string, daysToAdd: number) : string {
        return moment((moment().add(daysToAdd, "day"))).format(format);
    },


    /**
     * Add / Subtract input minute to current time and return in input format
     * Pass date format which is required
     * Pass minutes to add or subtract
     * For subtracting send negative value
     * @param format (Needed date format)
     * @param minutesToAdd (Needed minutes to add or subtract)
     * @returns {string}
     */
    getNextOrPrevMinuteDateCustomFormat(format: string, minutesToAdd: number) : string {
        return moment((moment().add(minutesToAdd, "minute"))).format(format);
    },

    /**
     * Add / Subtract input second to current time and return in input format
     * Pass date format which is required
     * Pass seconds to add or subtract
     * For subtracting send negative value
     * @param format (Needed date format)
     * @param secondsToAdd (Needed seconds to add or subtract)
     * @returns {string}
     */
    getNextOrPrevSecondDateCustomFormat(format: string, secondsToAdd: number) : string {
        return moment((moment().add(secondsToAdd, "second"))).format(format);
    },


    /**
     * Convert input date and format to required date format
     * @param date (Input date)
     * @param currentFormat (Input date format)
     * @param newFormat (Output/Needed date format)
     * @returns {string} (Returns input date with new input format)
     *
     */
    customSourceDateFormatToCustomNewDateFormat(date: Date | string, currentFormat: string, newFormat: string) : string {
        return moment(date, currentFormat).format(newFormat);
    },

    /**
     * Get Timestamp from input date and input date format (Converting input date ti timestamp in milliseconds)
     * @param date (input date)
     * @param currentFormat (input date format)
     * @returns {number} (returns time in milliseconds)
     */
    getTimeStampFromCurrentDateFormat(date: Date | string, currentFormat: string) : number {
        return (new Date(moment(date, currentFormat).format("YYYY-MM-DD HH:mm:ss")).getTime());
    }
};