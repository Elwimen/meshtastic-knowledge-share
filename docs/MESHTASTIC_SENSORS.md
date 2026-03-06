# Meshtastic Telemetry Sensors Reference

This document catalogs all sensors supported by Meshtastic firmware for telemetry purposes. Each sensor is listed with its technical specifications, interface details, and implementation information.

**Total Sensors**: 39+ (including proto-only definitions)

---

## Multi-Function Environmental Sensors

| Device Name | Telemetry Type(s) | Interface | Address | Sensor Enum | Units | Notes | Implementation |
|-------------|-------------------|-----------|---------|-------------|-------|-------|----------------|
| BME280 | Temperature, Humidity, Barometric Pressure | I2C | 0x76, 0x77 | `BME280 = 1` | °C, %, hPa | High accuracy environmental sensor | `firmware/src/modules/Telemetry/Sensor/BME280Sensor.cpp` |
| BME680 | Temperature, Humidity, Pressure, Gas Resistance, IAQ | I2C | 0x76, 0x77 | `BME680 = 2` | °C, %, hPa, MOhm, IAQ (0-500) | Uses BSEC library, saves state to filesystem, includes VOC measurement | `firmware/src/modules/Telemetry/Sensor/BME680Sensor.cpp` |
| DFRobot Lark | Temperature, Humidity, Pressure, Wind Speed, Wind Direction | I2C | 0x42 | `DFROBOT_LARK = 24` | °C, %, hPa, m/s, degrees | Complete weather station | `firmware/src/modules/Telemetry/Sensor/DFRobotLarkSensor.cpp` |

---

## Pressure + Temperature Sensors

| Device Name | Telemetry Type(s) | Interface | Address | Sensor Enum | Units | Notes | Implementation |
|-------------|-------------------|-----------|---------|-------------|-------|-------|----------------|
| BMP280 | Temperature, Barometric Pressure | I2C | 0x76, 0x77 | `BMP280 = 6` | °C, hPa | High accuracy pressure sensor | `firmware/src/modules/Telemetry/Sensor/BMP280Sensor.cpp` |
| BMP085/BMP180 | Temperature, Barometric Pressure | I2C | 0x76, 0x77 | `BMP085 = 15` | °C, hPa | Older version of BMP280 | `firmware/src/modules/Telemetry/Sensor/BMP085Sensor.cpp` |
| BMP3XX | Temperature, Barometric Pressure | I2C | 0x76, 0x77 | `BMP3XX = 26` | °C, hPa | High accuracy, calculates altitude AMSL | `firmware/src/modules/Telemetry/Sensor/BMP3XXSensor.cpp` |
| LPS22HB | Temperature, Barometric Pressure | I2C | 0x5C, 0x5D | `LPS22 = 8` | °C, hPa | High accuracy pressure sensor | `firmware/src/modules/Telemetry/Sensor/LPS22HBSensor.cpp` |
| DPS310 | Temperature, Barometric Pressure | I2C | 0x76, 0x77 | `DPS310 = 36` | °C, hPa | Infineon high accuracy sensor | `firmware/src/modules/Telemetry/Sensor/DPS310Sensor.cpp` |

---

## Temperature + Humidity Sensors

| Device Name | Telemetry Type(s) | Interface | Address | Sensor Enum | Units | Notes | Implementation |
|-------------|-------------------|-----------|---------|-------------|-------|-------|----------------|
| SHT31 | Temperature, Humidity | I2C | 0x44, 0x45 | `SHT31 = 12` | °C, % | High accuracy Sensirion sensor | `firmware/src/modules/Telemetry/Sensor/SHT31Sensor.cpp` |
| SHT4X | Temperature, Humidity | I2C | 0x44, 0x45 | `SHT4X = 17` | °C, % | Sensirion high accuracy | `firmware/src/modules/Telemetry/Sensor/SHT4XSensor.cpp` |
| SHTC3 | Temperature, Humidity | I2C | 0x70 | `SHTC3 = 7` | °C, % | High accuracy | `firmware/src/modules/Telemetry/Sensor/SHTC3Sensor.cpp` |
| AHT10 | Temperature, Humidity | I2C | 0x38 | `AHT10 = 23` | °C, % | Also supports AHT20 | `firmware/src/modules/Telemetry/Sensor/AHT10.cpp` |

---

## Temperature-Only Sensors

| Device Name | Telemetry Type(s) | Interface | Address | Sensor Enum | Units | Notes | Implementation |
|-------------|-------------------|-----------|---------|-------------|-------|-------|----------------|
| MCP9808 | Temperature | I2C | 0x18 | `MCP9808 = 3` | °C | Very high accuracy temperature sensor | `firmware/src/modules/Telemetry/Sensor/MCP9808Sensor.cpp` |
| PCT2075 | Temperature | I2C | 0x37 | `PCT2075 = 39` | °C | Temperature sensor | `firmware/src/modules/Telemetry/Sensor/PCT2075Sensor.cpp` |
| MLX90614 | Ambient Temp, Object Temp | I2C | 0x5A | `MLX90614 = 31` | °C | Non-contact IR temperature sensor, configurable emissivity | `firmware/src/modules/Telemetry/Sensor/MLX90614Sensor.cpp` |
| MLX90632 | Temperature (object) | I2C | 0x3A | `MLX90632 = 19` | °C | Non-contact IR temperature sensor | `firmware/src/modules/Telemetry/Sensor/MLX90632Sensor.cpp` |

---

## Light Sensors

| Device Name | Telemetry Type(s) | Interface | Address | Sensor Enum | Units | Notes | Implementation |
|-------------|-------------------|-----------|---------|-------------|-------|-------|----------------|
| VEML7700 | Ambient Light, White Light | I2C | 0x10 | `VEML7700 = 18` | Lux | High accuracy 16-bit ambient light sensor | `firmware/src/modules/Telemetry/Sensor/VEML7700Sensor.cpp` |
| LTR390UV | Ambient Light, UV Light | I2C | 0x53 | `LTR390UV = 21` | Lux, UV index | Lite On UV sensor, alternates between lux and UV measurements | `firmware/src/modules/Telemetry/Sensor/LTR390UVSensor.cpp` |
| TSL2591 | Ambient Light, IR Light | I2C | 0x29 | `TSL25911FN = 22` | Lux | AMS RGB light sensor | `firmware/src/modules/Telemetry/Sensor/TSL2591Sensor.cpp` |
| TSL2561 | Ambient Light | I2C | 0x29 | `TSL2561 = 44` | Lux | Light sensor | `firmware/src/modules/Telemetry/Sensor/TSL2561Sensor.cpp` |
| OPT3001 | Ambient Light | I2C | 0x45, 0x44 | `OPT3001 = 20` | Lux | TI ambient light sensor | `firmware/src/modules/Telemetry/Sensor/OPT3001Sensor.cpp` |
| BH1750 | Ambient Light | I2C | N/A | `BH1750 = 45` | Lux | Listed in proto, no implementation found | Proto only |

---

## Power Monitoring Sensors

| Device Name | Telemetry Type(s) | Interface | Address | Sensor Enum | Units | Notes | Implementation |
|-------------|-------------------|-----------|---------|-------------|-------|-------|----------------|
| INA219 | Voltage, Current | I2C | 0x40, 0x41, 0x43 | `INA219 = 5` | V, mA | Moderate accuracy, supports environment and power metrics, 0x43 for Waveshare UPS | `firmware/src/modules/Telemetry/Sensor/INA219Sensor.cpp` |
| INA260 | Voltage, Current | I2C | 0x40, 0x41, 0x43 | `INA260 = 4` | V, mA | Moderate accuracy current/voltage sensor | `firmware/src/modules/Telemetry/Sensor/INA260Sensor.cpp` |
| INA226 | Voltage, Current (single/multi-channel) | I2C | 0x40, 0x41, 0x43 | `INA226 = 34` | V, mA | High accuracy, configurable shunt resistor, supports both metric types | `firmware/src/modules/Telemetry/Sensor/INA226Sensor.cpp` |
| INA3221 | Voltage, Current (3 channels) | I2C | 0x42 | `INA3221 = 14` | V, mA | 3-channel sensor, supports both environment and power metrics | `firmware/src/modules/Telemetry/Sensor/INA3221Sensor.cpp` |
| MAX17048 | Battery Voltage, SoC, Time to Go | I2C | 0x36 | `MAX17048 = 28` | V, % (0-100), seconds | 1S LiPo battery fuel gauge, charge/discharge detection | `firmware/src/modules/Telemetry/Sensor/MAX17048Sensor.cpp` |
| MAX17261 | Battery monitoring | I2C | 0x36 | `MAX17261 = 38` | V, % | LiPo battery gauge | Proto only |
| RAK9154 | Voltage, Current, Battery % | OneWire Serial (UART) | N/A (UART) | `SENSOR_UNSET` | V, mA, % | RAK OneWire battery sensor, uses special protocol | `firmware/src/modules/Telemetry/Sensor/RAK9154Sensor.cpp` |

---

## Air Quality Sensors

| Device Name | Telemetry Type(s) | Interface | Address | Sensor Enum | Units | Notes | Implementation |
|-------------|-------------------|-----------|---------|-------------|-------|-------|----------------|
| PMSA003I | PM1.0, PM2.5, PM10, Particle counts | I2C | 0x12 | `PMSA003I = 13` | µg/m³, #/0.1L | PM2.5 air quality sensor, separate AirQualityTelemetry module, 30s warmup | `firmware/src/modules/Telemetry/AirQualityTelemetry.cpp` |
| SCD4X | CO2, Temperature, Humidity | I2C | 0x62 | `SCD4X = 32` | ppm, °C, % | CO2 sensor, referenced in Indicator sensor | Referenced in IndicatorSensor |
| SEN5X | PM sensors, VOC, NOx | I2C | N/A | `SEN5X = 43` | µg/m³, VOC index, NOx index | PM sensor with VOC/NOx | Proto only |
| SFA30 | Formaldehyde, Temperature, Humidity | I2C | N/A | `SFA30 = 42` | ppb, °C, % | Sensirion formaldehyde sensor | Proto only |
| ADS1X15 | ADC (analog to digital) | I2C | N/A | `ADS1X15 = 40, 41` | Voltage | ADC for custom sensors | Proto only |
| Indicator (SenseCAP) | Temp (AHT20), Humidity, CO2 (SCD41), TVOC | UART | N/A (UART) | `SENSOR_UNSET` | °C, %, ppm, TVOC index | SenseCAP Indicator, UART with COBS encoding | `firmware/src/modules/Telemetry/Sensor/IndicatorSensor.cpp` |

---

## Radiation Sensors

| Device Name | Telemetry Type(s) | Interface | Address | Sensor Enum | Units | Notes | Implementation |
|-------------|-------------------|-----------|---------|-------------|-------|-------|----------------|
| ClimateGuard RadSens | Radiation | I2C | 0x66 | `RADSENS = 33` | µR/h | Geiger-Muller tube, educational use only (not safety-critical) | `firmware/src/modules/Telemetry/Sensor/CGRadSensSensor.cpp` |

---

## Specialized Sensors

| Device Name | Telemetry Type(s) | Interface | Address | Sensor Enum | Units | Notes | Implementation |
|-------------|-------------------|-----------|---------|-------------|-------|-------|----------------|
| RCWL9620 | Distance | I2C | 0x57 | `RCWL9620 = 16` | mm (max 4500mm) | Doppler radar distance sensor for water level detection | `firmware/src/modules/Telemetry/Sensor/RCWL9620Sensor.cpp` |
| NAU7802 | Weight | I2C | 0x2A | `NAU7802 = 25` | kg | Scale chip, requires calibration, saves config to filesystem | `firmware/src/modules/Telemetry/Sensor/NAU7802Sensor.cpp` |
| DFRobot Gravity Rain | Rainfall (1h, 24h) | I2C | 0x1D | `DFROBOT_RAIN = 35` | mm | Tipping bucket rain gauge | `firmware/src/modules/Telemetry/Sensor/DFRobotGravitySensor.cpp` |
| RAK12035 | Soil Moisture, Soil Temperature | I2C | 0x20, 0x21, 0x22 | `RAK12035 = 37` | %, °C | Soil monitor, supports up to 3 sensors, requires calibration, RAK4631 only | `firmware/src/modules/Telemetry/Sensor/RAK12035Sensor.cpp` |
| T1000x (Internal) | Temperature, Light Level | Analog (ADC) | N/A (analog pins) | `SENSOR_UNSET` | °C, Lux (%) | Internal sensors for T1000x device, uses NTC thermistor and analog light | `firmware/src/modules/Telemetry/Sensor/T1000xSensor.cpp` |

---

## Health Telemetry Sensors

| Device Name | Telemetry Type(s) | Interface | Address | Sensor Enum | Units | Notes | Implementation |
|-------------|-------------------|-----------|---------|-------------|-------|-------|----------------|
| MAX30102 | Heart Rate, SpO2, Temperature | I2C | 0x57 | `MAX30102 = 30` | BPM, %, °C | Pulse oximeter and heart-rate sensor | `firmware/src/modules/Telemetry/Sensor/MAX30102Sensor.cpp` |

---

## Motion/Position Sensors (Proto Only)

These sensors are defined in the protocol buffers but do not have telemetry sensor implementations currently.

| Device Name | Telemetry Type(s) | Interface | Address | Sensor Enum | Units | Notes | Implementation |
|-------------|-------------------|-----------|---------|-------------|-------|-------|----------------|
| QMC6310 | 3-axis magnetic | I2C | 0x1C | `QMC6310 = 9` | N/A | Listed in proto | Proto only |
| QMI8658 | 6-axis inertial (accel + gyro) | I2C | 0x6B | `QMI8658 = 10` | N/A | Listed in proto | Proto only |
| QMC5883L | 3-axis magnetic | I2C | 0x0D | `QMC5883L = 11` | N/A | Listed in proto | Proto only |
| ICM20948 | 9-axis motion (accel + gyro + mag) | I2C | 0x69, 0x68 | `ICM20948 = 27` | N/A | Listed in proto | Proto only |

---

## Custom Sensors

| Device Name | Telemetry Type(s) | Interface | Address | Sensor Enum | Units | Notes | Implementation |
|-------------|-------------------|-----------|---------|-------------|-------|-------|----------------|
| CUSTOM_SENSOR | Custom | I2C | Configurable | `CUSTOM_SENSOR = 29` | Varies | Custom I2C sensor based on https://github.com/meshtastic/i2c-sensor | User implementation |

---

## Summary Statistics

### By Category
- **Multi-Function Environmental**: 3 sensors
- **Pressure + Temperature**: 5 sensors
- **Temperature + Humidity**: 4 sensors
- **Temperature-Only**: 4 sensors
- **Light Sensors**: 6 sensors (5 implemented, 1 proto)
- **Power Monitoring**: 7 sensors (5 implemented, 2 proto/special)
- **Air Quality**: 6 sensors (2 implemented, 4 proto/referenced)
- **Radiation**: 1 sensor
- **Specialized**: 5 sensors
- **Health**: 1 sensor
- **Motion/Position**: 4 sensors (proto only)
- **Custom**: 1 framework

### By Interface Type
- **I2C**: 34 sensors (most common)
- **UART/Serial**: 2 sensors (RAK9154, Indicator)
- **Analog/ADC**: 1 sensor (T1000x internal)
- **Proto Only**: 6 sensors (not yet implemented)

### By Implementation Status
- **Fully Implemented**: 33 sensors
- **Proto Only/Referenced**: 6 sensors
- **Custom Framework**: 1 sensor

---

## Key Files Reference

### Sensor Implementations
- Location: `firmware/src/modules/Telemetry/Sensor/`
- Each sensor has its own `.cpp` and `.h` files

### Configuration
- I2C Addresses: `firmware/src/configuration.h`
- Module Config: `firmware/protobufs/meshtastic/module_config.proto`

### Protocol Definitions
- Telemetry Types: `firmware/protobufs/meshtastic/telemetry.proto`
- Sensor Enums: `firmware/src/mesh/generated/meshtastic/telemetry.pb.h`

### Module Integration
- Environment Telemetry: `firmware/src/modules/Telemetry/EnvironmentTelemetry.cpp`
- Air Quality Telemetry: `firmware/src/modules/Telemetry/AirQualityTelemetry.cpp`
- Power Telemetry: `firmware/src/modules/Telemetry/PowerTelemetry.cpp`

---

## Notes

1. **I2C Address Conflicts**: Some sensors share the same default I2C addresses (e.g., BME280 and BMP280 both use 0x76/0x77). Ensure only one sensor per address is connected unless using alternate addresses.

2. **Alternate Addresses**: Many sensors support alternate I2C addresses to avoid conflicts. Check individual sensor datasheets for address selection methods (often via address pins).

3. **Proto-Only Sensors**: Sensors listed as "Proto only" are defined in the protocol buffers but don't have implementation files yet. These may be planned for future releases or require community contribution.

4. **Special Interfaces**: Some sensors use UART (RAK9154, Indicator) or analog inputs (T1000x) instead of I2C.

5. **Module Configuration**: Enable telemetry via the Telemetry Module configuration:
   - `environment_measurement_enabled` - Enable sensor data collection
   - `environment_screen_enabled` - Display readings on device screen
   - `environment_update_interval` - Broadcast interval in seconds

6. **Safety Notice**: The RadSens radiation sensor is marked for educational use only and should not be used for safety-critical applications.

7. **Calibration Required**: Some sensors require calibration (NAU7802 scale, RAK12035 soil moisture) before accurate measurements can be obtained.

8. **Platform-Specific**: Some sensors are platform-specific (e.g., RAK12035 is RAK4631 only).

---

Generated from Meshtastic firmware source code analysis.
