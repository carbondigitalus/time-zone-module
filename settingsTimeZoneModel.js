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
