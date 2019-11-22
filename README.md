# Time Zone Module

While working on Carbon Builder, we came across the need to implement time zones. It's common to store all dates/times in one format, and calculate them for other needs. We've done just that with this module.

## Getting Started

In our project, we are using MondoDB and because of this we are using an ISOString format for dates. We manually compiled all of the info used here to cover 425 time zones. That way, we could manually do conversions on the server side code. MongoDB isn't required to use this, as we've provided a few formats, but it will make things easier if you do.

### Files

Time_Zones.xlsx : Full list of 425 time zones.
Time_Zones.csv : Full list of 425 time zones.
time_zone_table.html : The excel file, converted to an HTML table.
time_zones.json : The excel file, converted to JSON.
settingsTimeZoneModel.js : Our mongoose schema / model file.

## MongoDB Import

On our end, the JSON file wouldn't upload in MongoDB Compass. We were able to use the CSV file to upload the data into a collection called "settings_timezone".

## Mongoose / MongoDB Usage

After the uploaded CSV to "settings_timezone". We created the settingsTimeZoneModel.js file, which contains only:

```
// NPM Modules
const mongoose = require('mongoose');

const settingsTimeZoneSchema = new mongoose.Schema({
  time_zone_id: String,
  country_code: String,
  country_name: String,
  time_zone_region: String,
  city_name: String,
  time_zone_abbreviation: String,
  time_zone_name: String,
  utc_offset: String
});

const SettingsTimeZone = mongoose.model(
  'SettingsTimeZone',
  settingsTimeZoneSchema
);

module.exports = SettingsTimeZone;
```

In the userModel file, we added the following field to reference the settingsTimeZoneModel created above.

```
time_zone_abbreviation: [
  {
    type: mongoose.Schema.ObjectId,
    ref: 'SettingsTimeZone'
  }
]
```

## Built With

- [TimeZoneDB](https://timezonedb.com/time-zones) - The baseline file to start the process. Copied/pasted into excel.
- [IBM](https://publib.boulder.ibm.com/tividd/td/TWS/SC32-1274-02/en_US/HTML/SRF_mst273.htm) - Used to add common time zone names and abbreviations.
- [Time and Date](https://www.timeanddate.com/worldclock/) - Used to manually fill in the gaps afterwards.
- [Code Beautify](https://codebeautify.org/excel-to-html) - Used to generate the HTML table file from uploading the excel file.
- [Beautify Tools](http://beautifytools.com/excel-to-json-converter.php) - Used to generate the JSON.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Jared Ledbetter** - _CEO of Carbon Digital_

## License

This project is free for public and commercial use without charge.
