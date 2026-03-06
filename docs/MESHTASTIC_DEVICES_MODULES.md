# Meshtastic Devices and Modules Reference

This document catalogs all devices, modules, and peripherals that can be connected to Meshtastic nodes beyond telemetry sensors. Each device is listed with technical specifications, interface details, and implementation information.

**Total Device Categories**: 16 major categories, 100+ device types

---

## GPS/GNSS Modules

| Device Name | Constellations Supported | Interface | UART Config | Notes | Implementation |
|-------------|-------------------------|-----------|-------------|-------|----------------|
| u-blox 10 | GPS, GLONASS, Galileo, BeiDou, QZSS | UART | 9600-115200 baud | Latest generation, best performance | `firmware/src/gps/GPS.cpp` |
| u-blox 9 | GPS, GLONASS, Galileo, BeiDou | UART | 9600-115200 baud | Multi-constellation GNSS | `firmware/src/gps/GPS.cpp` |
| u-blox 8 | GPS, GLONASS, Galileo, BeiDou | UART | 9600-115200 baud | Very common, good performance | `firmware/src/gps/GPS.cpp` |
| u-blox 7 | GPS, GLONASS | UART | 9600-115200 baud | Widely available | `firmware/src/gps/GPS.cpp` |
| u-blox 6 | GPS | UART | 9600-115200 baud | Legacy, basic GPS only | `firmware/src/gps/GPS.cpp` |
| MTK (Generic) | GPS | UART | 9600-115200 baud | MediaTek generic chipsets | `firmware/src/gps/GPS.cpp` |
| MTK L76B | GPS, GLONASS | UART | 9600-115200 baud | Quectel L76 series | `firmware/src/gps/GPS.cpp` |
| MTK PA1010D | GPS, GLONASS, QZSS | UART | 9600-115200 baud | MediaTek compact module | `firmware/src/gps/GPS.cpp` |
| MTK PA1616S | GPS, GLONASS, Galileo, QZSS | UART | 9600-115200 baud | MediaTek high-performance | `firmware/src/gps/GPS.cpp` |
| UC6580 | GPS, BeiDou, GLONASS, Galileo | UART | 9600-115200 baud | Unicore multi-constellation | `firmware/src/gps/GPS.cpp` |
| AG3335 | GPS, BeiDou, GLONASS, Galileo | UART | 9600-115200 baud | AIROHA GNSS | `firmware/src/gps/GPS.cpp` |
| AG3352 | GPS, BeiDou, GLONASS, Galileo | UART | 9600-115200 baud | AIROHA GNSS | `firmware/src/gps/GPS.cpp` |
| ATGM336H | GPS, BeiDou | UART | 9600-115200 baud | China Navigation GPS | `firmware/src/gps/GPS.cpp` |
| LS20031 | GPS | UART | 9600-115200 baud | Locosys GPS module | `firmware/src/gps/GPS.cpp` |
| CM121 | GPS | UART | 9600-115200 baud | GPS module | `firmware/src/gps/GPS.cpp` |

**Configuration**: Set GPS via `position.gps_enabled`, configure RX/TX pins in board variant

---

## Display Modules

### OLED Displays (I2C)

| Device Name | Resolution | Interface | Address | Color | Notes | Implementation |
|-------------|-----------|-----------|---------|-------|-------|----------------|
| SSD1306 | 128x64, 128x32 | I2C | 0x3C | Monochrome | Most common OLED, low power | `firmware/src/graphics/Screen.cpp` |
| SH1106 | 128x64 | I2C | 0x3C | Monochrome | Similar to SSD1306, slightly different controller | `firmware/src/graphics/Screen.cpp` |
| ST7567 | 128x64 | I2C | 0x3F | Monochrome | LCD/OLED controller | `firmware/src/graphics/Screen.cpp` |

### E-Ink/E-Paper Displays (SPI)

| Device Name | Resolution | Interface | Refresh | Color | Notes | Implementation |
|-------------|-----------|-----------|---------|-------|-------|----------------|
| SSD1680 | Various | SPI | Partial/Full | B/W | E-paper controller, ultra-low power | `firmware/src/graphics/EInkDisplay2.cpp` |
| SSD1681 | Various | SPI | Partial/Full | B/W | E-paper controller | `firmware/src/graphics/EInkDisplay2.cpp` |
| SSD1682 | Various | SPI | Partial/Full | B/W | E-paper controller | `firmware/src/graphics/EInkDisplay2.cpp` |
| GxEPD2 Series | Various | SPI | Partial/Full | B/W, 3-color | Multiple e-ink models supported | `firmware/src/graphics/EInkDisplay2.cpp` |

### TFT/LCD Displays (SPI)

| Device Name | Resolution | Interface | Color | Notes | Implementation |
|-------------|-----------|-----------|-------|-------|----------------|
| Various TFT | 240x240+, varies | SPI | Full color | Color LCD screens, higher power consumption | `firmware/src/graphics/TFTDisplay.cpp` |

**Display Configuration**: Set via `display.enabled`, configure SPI pins or I2C address in variant

---

## Input Devices

### Keyboards (I2C)

| Device Name | Type | Interface | Address | Keys | Notes | Implementation |
|-------------|------|-----------|---------|------|-------|----------------|
| M5Stack CardKB | QWERTY | I2C | 0x5F | Full keyboard | Compact card-sized keyboard | `firmware/src/input/cardKbI2cImpl.cpp` |
| BBQ10 Keyboard | QWERTY | I2C | 0x1F | 40+ keys | BlackBerry Q10 style keyboard | `firmware/src/input/BBQ10Keyboard.cpp` |
| T-Deck Keyboard | QWERTY | I2C | 0x55 | Full keyboard | LilyGo T-Deck integrated keyboard | `firmware/src/input/TDeckKeyboard.cpp` |
| T-Deck Pro Keyboard | QWERTY | I2C | 0x34 | Full keyboard | TCA8418-based keyboard controller | `firmware/src/input/TDeckProKeyboard.cpp` |
| T-Lora Pager | Keypad | I2C | Via XL9555 | 5-key | Custom pager-style keypad | `firmware/src/input/TLoraPagerKeyboard.cpp` |
| RAK14004 Keypad | Keypad | I2C | N/A | Numeric | RAK keypad module | `firmware/src/input/rak14004Impl.cpp` |
| MPR121 Keyboard | Capacitive | I2C | 0x5A | 12 touch inputs | Capacitive touch keyboard | `firmware/src/input/MPR121Keyboard.cpp` |
| TCA8418 Keyboard | Matrix | I2C | 0x34 | Up to 80 keys | I/O expander keyboard controller | `firmware/src/input/TCA8418Keyboard.cpp` |

### Keyboards (GPIO Matrix)

| Type | Interface | Scan Method | Notes | Implementation |
|------|-----------|-------------|-------|----------------|
| GPIO Matrix | GPIO | Row/Column scan | Custom key matrices, configurable pins | `firmware/src/input/MatrixKeyboard.cpp` |

### Keyboards (UART)

| Type | Interface | Protocol | Notes | Implementation |
|------|-----------|----------|-------|----------------|
| Serial Keyboard | UART | ASCII/Custom | UART-based keyboard input | `firmware/src/input/SerialKeyboard.cpp` |

### Buttons (GPIO)

| Type | Interface | Active State | Features | Implementation |
|------|-----------|--------------|----------|----------------|
| Standard Buttons | GPIO | Configurable high/low | Debouncing, hold detection, multi-press | `firmware/src/input/ButtonThread.cpp` |
| User Button | GPIO | Configurable | Primary user interaction button | `firmware/src/input/ButtonThread.cpp` |

### Rotary Encoders

| Device Name | Interface | Address | Features | Notes | Implementation |
|-------------|-----------|---------|----------|-------|----------------|
| Standard Rotary | GPIO | N/A | Rotation, button press | Interrupt-based, configurable pins | `firmware/src/input/RotaryEncoderImpl.cpp` |
| Seesaw Rotary | I2C | Varies | Rotation, button, NeoPixel | Adafruit Seesaw-based encoder | `firmware/src/input/RotaryEncoderImpl.cpp` |

### Trackballs

| Type | Interface | Features | Notes | Implementation |
|------|-----------|----------|-------|----------------|
| GPIO Trackball | GPIO | Movement, button | Interrupt-based trackball support | `firmware/src/input/TrackballImpl.cpp` |

### Navigation Controls

| Device Name | Type | Interface | Keys | Notes | Implementation |
|-------------|------|-----------|------|-------|----------------|
| ExpressLRS 5-way | Navigation | GPIO | Up/Down/Left/Right/Select | 5-way navigation switch | `firmware/src/input/ELRSNav.cpp` |
| Up/Down Buttons | Navigation | GPIO | Up/Down | 2-button navigation | `firmware/src/input/upDownButtons.cpp` |

### Touchscreens (I2C)

| Device Name | Type | Interface | Address | Resolution | Notes | Implementation |
|-------------|------|-----------|---------|-----------|-------|----------------|
| FT6336U | Capacitive | I2C | 0x48 | Multi-touch | Focal Tech touch controller | `firmware/src/input/TouchScreenBase.cpp` |
| CST328 | Capacitive | I2C | 0x1A | Multi-touch | Capacitive touch controller | `firmware/src/input/TouchScreenBase.cpp` |

**Input Configuration**: Configure via `device.button_gpio`, keyboard type in variant file

---

## Audio Modules

### Audio Output (I2S)

| Device Name | Type | Interface | Resolution | Notes | Implementation |
|-------------|------|-----------|-----------|-------|----------------|
| PCM5102A | DAC | I2S | 24-bit | High-quality audio DAC | `firmware/src/AudioThread.cpp` |
| MAX98357A | Amplifier | I2S | 16-bit | I2S class D amplifier, 3W output | `firmware/src/AudioThread.cpp` |

**Audio Features**:
- RTTTL ringtone playback
- Text-to-speech (ESP8266SAM library)
- Custom audio alerts

### Audio Input (I2S)

| Type | Interface | Notes | Implementation |
|------|-----------|-------|----------------|
| I2S Microphone | I2S | Digital MEMS microphones | `firmware/src/AudioThread.cpp` |

### Buzzers

| Type | Interface | Control | Notes | Implementation |
|------|-----------|---------|-------|----------------|
| Passive Buzzer | GPIO | PWM | Frequency-controlled, RTTTL tones | `firmware/src/buzz/buzz.cpp` |
| Active Buzzer | GPIO | On/Off | Simple on/off control | `firmware/src/buzz/buzz.cpp` |

**Audio Configuration**: Configure I2S pins and buzzer GPIO in variant, enable via `device.buzzer_gpio`

---

## Storage Devices

### SD/MicroSD Cards (SPI)

| Type | Interface | Capacity | Features | Implementation |
|------|-----------|----------|----------|----------------|
| SD Card | SPI | Up to 32GB+ | Data logging, file storage | `firmware/src/FSCommon.cpp` |
| MicroSD Card | SPI | Up to 32GB+ | Configurable SPI frequency | `firmware/src/FSCommon.cpp` |

**Storage Features**:
- Data logging
- Message storage
- Configuration backup
- Track recording

### Flash Storage

| Type | Interface | Capacity | Features | Implementation |
|------|-----------|----------|----------|----------------|
| External Flash | SPI | Varies | Additional program/data storage | `firmware/src/FSCommon.cpp` |
| LittleFS | Internal | Varies | Filesystem for STM32WL | `firmware/src/platform/stm32wl/LittleFS.cpp` |

**Storage Configuration**: Configure SD card CS pin and SPI frequency in variant

---

## Motion and Orientation Sensors

### Accelerometers (I2C)

| Device Name | Axes | Interface | Address | Range | Features | Implementation |
|-------------|------|-----------|---------|-------|----------|----------------|
| LIS3DH | 3-axis | I2C | 0x18, 0x19 | ±2/4/8/16g | Motion detection, tap detection | `firmware/src/motion/LIS3DHSensor.cpp` |
| BMA423 | 3-axis | I2C | 0x19 | ±2/4/8/16g | Step counter, motion detection | `firmware/src/motion/BMA423Sensor.cpp` |
| STK8XXX | 3-axis | I2C | 0x18 | ±2/4/8/16g | Motion detection | `firmware/src/motion/STK8XXXSensor.cpp` |
| QMA6100P | 3-axis | I2C | 0x12 | ±2/4/8/16g | Motion detection | `firmware/src/motion/QMA6100PSensor.cpp` |

### IMU/Gyroscopes (I2C)

| Device Name | Axes | Interface | Address | Features | Notes | Implementation |
|-------------|------|-----------|---------|----------|-------|----------------|
| MPU6050 | 6-axis (accel+gyro) | I2C | 0x68 | Motion, orientation | Common IMU, DMP support | `firmware/src/motion/MPU6050Sensor.cpp` |
| LSM6DS3 | 6-axis (accel+gyro) | I2C | 0x6A | Motion, orientation | ST Microelectronics IMU | `firmware/src/motion/LSM6DS3Sensor.cpp` |
| ICM20948 | 9-axis (accel+gyro+mag) | I2C | 0x68, 0x69 | Motion, orientation, compass | TDK InvenSense IMU | `firmware/src/motion/ICM20948Sensor.cpp` |
| BMX160 | 9-axis (accel+gyro+mag) | I2C | 0x69 | Motion, orientation, compass | Bosch IMU | `firmware/src/motion/BMX160Sensor.cpp` |
| BHI260AP | 6-axis | I2C | 0x28 | Motion, orientation | Bosch smart sensor | `firmware/src/motion/BHI260APSensor.cpp` |

### Magnetometers/Compass (I2C)

| Device Name | Axes | Interface | Address | Resolution | Notes | Implementation |
|-------------|------|-----------|---------|-----------|-------|----------------|
| QMC6310 | 3-axis | I2C | 0x1C | 16-bit | Magnetic field sensor | `firmware/src/detect/ScanI2C.h` |
| QMC5883L | 3-axis | I2C | 0x0D | 16-bit | Digital compass | `firmware/src/detect/ScanI2C.h` |
| HMC5883L | 3-axis | I2C | 0x1E | 12-bit | Honeywell compass | `firmware/src/detect/ScanI2C.h` |
| BMM150 | 3-axis | I2C | 0x13 | 16-bit | Bosch magnetometer | `firmware/src/motion/BMM150Sensor.cpp` |

**Motion Configuration**: Enable motion detection via accelerometer wake, configure wake threshold

---

## Power Management

### Power Management Units (PMU) (I2C)

| Device Name | Interface | Address | Features | Outputs | Implementation |
|-------------|-----------|---------|----------|---------|----------------|
| AXP192 | I2C | 0x34 | Battery management, power routing | 3x DC-DC, 9x LDO | `firmware/src/Power.cpp` |
| AXP2101 | I2C | 0x34 | Advanced power management | Multiple DC-DC, LDO | `firmware/src/Power.cpp` |

### Battery Fuel Gauges (I2C)

| Device Name | Interface | Address | Chemistry | Features | Implementation |
|-------------|-----------|---------|-----------|----------|----------------|
| BQ27220 | I2C | 0x55 | Li-Ion/LiPo | State of charge, capacity | `firmware/src/Power.cpp` |
| MAX17048 | I2C | 0x36 | 1S LiPo | SoC, voltage, charge rate | `firmware/src/modules/Telemetry/Sensor/MAX17048Sensor.cpp` |

### Battery Chargers (I2C)

| Device Name | Interface | Address | Input | Output | Features | Implementation |
|-------------|-----------|---------|-------|--------|----------|----------------|
| BQ24295 | I2C | Varies | USB | 4.4V max | Battery charger IC | `firmware/src/Power.cpp` |
| BQ25896 | I2C | 0x6B | USB | 5V | Buck-boost charger | `firmware/src/detect/ScanI2C.h` |

### Current/Voltage Monitors (I2C)

| Device Name | Channels | Interface | Address | Max Voltage | Max Current | Implementation |
|-------------|----------|-----------|---------|-------------|-------------|----------------|
| INA219 | 1 | I2C | 0x40, 0x41, 0x43 | 26V | ±3.2A | `firmware/src/modules/Telemetry/Sensor/INA219Sensor.cpp` |
| INA260 | 1 | I2C | 0x40, 0x41, 0x43 | 36V | ±15A | `firmware/src/modules/Telemetry/Sensor/INA260Sensor.cpp` |
| INA226 | 1 | I2C | 0x40, 0x41, 0x43 | 36V | Configurable | `firmware/src/modules/Telemetry/Sensor/INA226Sensor.cpp` |
| INA3221 | 3 | I2C | 0x42, 0x43 | 26V | Varies | `firmware/src/modules/Telemetry/Sensor/INA3221Sensor.cpp` |

### Other Power Devices (I2C)

| Device Name | Type | Interface | Address | Function | Implementation |
|-------------|------|-----------|---------|----------|----------------|
| TPS65233 | Bias-T | I2C | 0x60 | Bias-T generator | `firmware/src/detect/ScanI2C.h` |

**Power Configuration**: PMU and battery monitoring configured per board variant

---

## Communication Modules

### LoRa Radio Modules (SPI)

| Device Name | Frequency | Interface | Modulation | TX Power | Features | Implementation |
|-------------|-----------|-----------|-----------|----------|----------|----------------|
| SX1262 | 150-960 MHz | SPI | LoRa, FSK | +22 dBm | Most common sub-GHz | `firmware/src/mesh/SX1262Interface.cpp` |
| SX1268 | 410-810 MHz | SPI | LoRa, FSK | +22 dBm | Sub-GHz variant | `firmware/src/mesh/SX1262Interface.cpp` |
| SX1280 | 2.4 GHz | SPI | LoRa, FLRC, BLE | +12.5 dBm | 2.4GHz LoRa | `firmware/src/mesh/SX1280Interface.cpp` |
| SX1281 | 2.4 GHz | SPI | LoRa, FLRC | +12.5 dBm | 2.4GHz variant | `firmware/src/mesh/SX1280Interface.cpp` |
| SX1282 | 2.4 GHz | SPI | LoRa, FLRC | +12.5 dBm | 2.4GHz variant | `firmware/src/mesh/SX1280Interface.cpp` |
| LLCC68 | 150-960 MHz | SPI | LoRa, FSK | +22 dBm | Low-cost SX1262 variant | `firmware/src/mesh/SX1262Interface.cpp` |
| LR1110 | 150-960 MHz | SPI | LoRa, FSK | +22 dBm | With GNSS scanner | `firmware/src/mesh/LR1110Interface.cpp` |
| LR1120 | 150-960 MHz | SPI | LoRa, FSK | +22 dBm | Advanced features | `firmware/src/mesh/LR11x0Interface.cpp` |
| LR1121 | 150-2500 MHz | SPI | LoRa, FSK | +22 dBm | Dual-band support | `firmware/src/mesh/LR11x0Interface.cpp` |
| RF95/RFM95 | 137-1020 MHz | SPI | LoRa, FSK | +20 dBm | SX1276-based, legacy | `firmware/src/mesh/RF95Interface.cpp` |
| STM32WLE5JC | 150-960 MHz | Integrated | LoRa, FSK | +22 dBm | Integrated MCU+radio SoC | `firmware/src/mesh/SX1262Interface.cpp` |

### Wireless Networking

| Type | Interface | Frequency | Range | Features | Implementation |
|------|-----------|-----------|-------|----------|----------------|
| WiFi | Built-in | 2.4/5 GHz | 100m+ | AP/Client mode, MQTT | `firmware/src/mesh/wifi/WiFiAPClient.cpp` |
| Bluetooth/BLE | Built-in | 2.4 GHz | 10-100m | App connectivity | `firmware/src/mesh/bluetooth/` |
| Ethernet | SPI/RMII | N/A | Wired | W5500/LAN8720 | `firmware/src/mesh/eth/ethClient.cpp` |

### Cellular Modems (UART)

| Type | Interface | Protocol | Features | Implementation |
|------|-----------|----------|----------|----------------|
| Generic Cellular | UART | AT commands | Power/reset control, DTR, RI | `firmware/src/modules/CannedMessageModule.cpp` |

**Radio Configuration**: Configure LoRa region, frequency, bandwidth, spreading factor via module settings

---

## I/O Expansion Modules

### GPIO Expanders (I2C)

| Device Name | Pins | Interface | Address | Features | Implementation |
|-------------|------|-----------|---------|----------|----------------|
| TCA9535 | 16 | I2C | 0x20 | GPIO expansion, interrupt support | `firmware/src/detect/ScanI2C.h` |
| TCA9555 | 16 | I2C | 0x26 | GPIO expansion | `firmware/src/detect/ScanI2C.h` |
| XL9555 | 16 | I2C | Varies | GPIO expansion for T-Lora Pager | `firmware/src/input/TLoraPagerKeyboard.cpp` |

**Remote GPIO**:
- Control GPIO pins remotely via RemoteHardware module
- Read/write digital pins
- Configure input/output modes

**Implementation**: `firmware/src/modules/RemoteHardwareModule.cpp`

---

## LED and Lighting Modules

### RGB LED Drivers (I2C)

| Device Name | Channels | Interface | Address | Features | Implementation |
|-------------|----------|-----------|---------|----------|----------------|
| NCP5623 | 3 (RGB) | I2C | 0x38 | PWM dimming, programmable patterns | `firmware/src/detect/ScanI2C.h` |
| LP5562 | 3 (RGB) | I2C | 0x30 | Programmable engine, pattern playback | `firmware/src/detect/ScanI2C.h` |

### Addressable LEDs (GPIO)

| Device Name | Type | Interface | Protocol | Features | Implementation |
|-------------|------|-----------|----------|----------|----------------|
| NeoPixel/WS2812B | Addressable RGB | GPIO | Single-wire | Chainable, full RGB control | `firmware/src/graphics/NeoPixel.cpp` |
| RAK LED | Custom | GPIO | Custom | RAK-specific LED control | `firmware/src/graphics/RAKled.cpp` |
| Nomad Star LED | Custom | GPIO | Custom | Nomad Star device LEDs | `firmware/src/graphics/NomadStarLED.cpp` |

### Status LEDs (GPIO)

| Type | Interface | Control | Features | Implementation |
|------|-----------|---------|----------|----------------|
| Single LED | GPIO | On/Off/Blink | Status indication, configurable patterns | `firmware/src/Led.cpp` |

**LED Configuration**: Configure LED GPIO, type, and brightness in variant

---

## Real-Time Clocks (RTC)

| Device Name | Interface | Address | Features | Accuracy | Implementation |
|-------------|-----------|---------|----------|----------|----------------|
| RV3028 | I2C | Varies | Battery backup, EEPROM, timestamp | ±3 ppm | `firmware/src/gps/RTC.cpp` |
| PCF8563 | I2C | Varies | Battery backup, alarm, timer | ±20 ppm | `firmware/src/detect/ScanI2C.h` |
| RX8130CE | I2C | Varies | Battery backup, timestamp | ±3.4 ppm | `firmware/src/detect/ScanI2C.h` |

**RTC Features**:
- Maintains time when GPS unavailable
- Battery-backed timekeeping
- Wake-on-alarm support
- Timestamping for messages

**RTC Configuration**: RTC auto-detected on I2C bus, time synced from GPS

---

## Haptic Feedback Devices

### Haptic Motor Drivers (I2C)

| Device Name | Interface | Address | Effects | Features | Implementation |
|-------------|-----------|---------|---------|----------|----------------|
| DRV2605 | I2C | Varies | 120+ effects | Waveform library, ERM/LRA support | Referenced in `firmware/src/main.h` |

### Vibration Motors (GPIO)

| Type | Interface | Control | Notes | Implementation |
|------|-----------|---------|-------|----------------|
| Simple Vibration Motor | GPIO | On/Off/PWM | Direct motor control | Device-specific (e.g., T-Deck Pro pin 2) |

**Haptic Configuration**: Configure haptic feedback for keyboard/button events

---

## Security and Crypto Modules

### Secure Elements (I2C)

| Device Name | Interface | Address | Features | Use Case | Implementation |
|-------------|-----------|---------|----------|----------|----------------|
| NXP SE050 | I2C | Varies | PKI, secure storage, crypto acceleration | Public key infrastructure | Planned support |

### Crypto Engines

| Type | Platform | Algorithms | Features | Implementation |
|------|----------|-----------|----------|----------------|
| Hardware AES | ESP32 | AES-256 | Hardware acceleration | `firmware/src/mesh/CryptoEngine.cpp` |
| Hardware AES | NRF52 | AES-CCM | Hardware acceleration | `firmware/src/platform/nrf52/NRF52CryptoEngine.cpp` |
| Software AES-CCM | All platforms | AES-CCM | Fallback crypto | `firmware/src/mesh/aes-ccm.cpp` |

**Crypto Features**:
- Message encryption (AES-256)
- Public key infrastructure (planned)
- Hardware acceleration where available

---

## Specialty Sensors and Modules

### Detection Sensors

| Device Name | Type | Interface | Features | Implementation |
|-------------|------|-----------|----------|----------------|
| T1000x Sensor | Multi-sensor | Analog/I2C | Temperature, light detection | `firmware/src/modules/Telemetry/Sensor/T1000xSensor.cpp` |
| RAK9154 Sensor | Battery monitor | OneWire Serial | Voltage, current, battery % | `firmware/src/modules/Telemetry/Sensor/RAK9154Sensor.cpp` |
| Indicator Sensor | Multi-sensor | UART | Temp, humidity, CO2, TVOC | `firmware/src/modules/Telemetry/Sensor/IndicatorSensor.cpp` |

### Detection Module

| Module | Type | Features | Implementation |
|--------|------|----------|----------------|
| Detection Sensor | Motion detection | Configurable monitoring, alerting | `firmware/src/modules/DetectionSensorModule.cpp` |

---

## Interface Summary

### I2C (Two-Wire Interface)

**Total I2C Devices**: 85+ device types

**I2C Bus Support**:
- Primary I2C (Wire)
- Secondary I2C (Wire1)
- Dual-bus scanning and detection

**Address Range**: 0x0D to 0x70

**Features**:
- Auto-detection of connected devices
- Configurable I2C frequency
- Pull-up resistor support

**Implementation**: `firmware/src/detect/ScanI2C.cpp`, `firmware/src/detect/ScanI2CTwoWire.cpp`

---

### SPI (Serial Peripheral Interface)

**SPI Devices**:
- LoRa radios (primary use)
- E-ink displays
- TFT displays
- SD cards
- External flash
- Ethernet modules

**Features**:
- Configurable SPI frequency
- Multiple CS (chip select) lines
- Hardware/software SPI

---

### UART/Serial

**UART Devices**:
- GPS/GNSS modules (most common)
- Cellular modems
- Serial keyboards
- Debug console
- Indicator sensors

**Features**:
- Multiple UART ports
- Configurable baud rates (9600-115200+)
- RX/TX pin configuration

---

### GPIO (General Purpose I/O)

**GPIO Uses**:
- Buttons and switches
- LEDs and status indicators
- Buzzers
- Enable/power control
- Interrupts for wake
- Vibration motors

**Features**:
- Configurable active state (high/low)
- Internal pull-up/pull-down
- Interrupt support
- PWM output

---

### I2S (Inter-IC Sound)

**I2S Devices**:
- Audio DACs
- Audio amplifiers
- Digital microphones

**Features**:
- 16/24-bit audio
- Configurable sample rates
- DMA support

---

### Special Interfaces

| Interface | Devices | Notes |
|-----------|---------|-------|
| OneWire Serial | RAK9154 | Proprietary protocol |
| Analog (ADC) | Battery monitoring, T1000x | Voltage sensing |
| PWM | Buzzers, backlights | Pulse width modulation |

---

## Module Configuration

### Core Modules (Always Active)

| Module | Purpose | Configuration |
|--------|---------|---------------|
| MQTT | Network connectivity | `mqtt.enabled`, server settings |
| Serial | Console/API | `serial.enabled`, baud rate |
| Admin | Device management | `admin.enabled` |
| Position | GPS/location | `position.gps_enabled` |
| Routing | Mesh routing | Auto-enabled |

### Optional Modules

| Module | Purpose | Configuration File |
|--------|---------|-------------------|
| Telemetry | Environmental/power sensors | `module_config.telemetry` |
| Remote Hardware | GPIO control | `module_config.remote_hardware` |
| Canned Messages | Pre-defined messages | `module_config.canned_message` |
| External Notification | Alerts/notifications | `module_config.external_notification` |
| Store Forward | Message relay | `module_config.store_forward` |
| Range Test | Range testing | `module_config.range_test` |
| Detection Sensor | Motion detection | `module_config.detection_sensor` |
| Audio | Sound/TTS | `module_config.audio` |
| Paxcounter | People counting | `module_config.paxcounter` |
| Neighbor Info | Mesh neighbor info | `module_config.neighbor_info` |

**Module Configuration**: `/home/dmj/code/meshtastic/firmware/protobufs/meshtastic/module_config.proto`

---

## Device Detection and Auto-Configuration

**I2C Device Auto-Detection**:
Meshtastic automatically scans I2C buses on startup and detects:
- Displays (OLED, etc.)
- Keyboards
- Power management chips
- Sensors
- RTC modules
- I/O expanders

**Detection Files**:
- `firmware/src/detect/ScanI2C.cpp` - Primary I2C scanner
- `firmware/src/detect/ScanI2CTwoWire.cpp` - Dual I2C bus scanner

**Auto-Configured Devices**:
- GPS (auto-detects module type)
- Accelerometers (auto-enables sleep/wake)
- PMU chips (auto-configures power)
- Displays (auto-detects type and resolution)

---

## Hardware Variant Configuration

Each Meshtastic board has a variant file that defines:
- GPIO pin assignments
- I2C/SPI/UART configurations
- Enabled peripherals
- Default settings
- Board-specific features

**Variant Location**: `firmware/variants/<board_name>/variant.h`

**Common Variant Settings**:
```cpp
// GPS
#define GPS_RX_PIN 12
#define GPS_TX_PIN 34

// I2C
#define I2C_SDA 21
#define I2C_SCL 22

// SPI (LoRa)
#define LORA_SCK 5
#define LORA_MISO 19
#define LORA_MOSI 27
#define LORA_CS 18

// Display
#define USE_SSD1306
#define OLED_SDA I2C_SDA
#define OLED_SCL I2C_SCL

// Buttons
#define BUTTON_PIN 38

// Power
#define BATTERY_PIN 35
```

---

## Common Device Combinations

### Minimal Setup
- **LoRa radio** (required)
- **MCU** (ESP32/NRF52/STM32)
- **Antenna**

### Basic Setup
- LoRa radio
- MCU
- Antenna
- **GPS module**
- **OLED display** (SSD1306)
- **Button**

### Standard Setup
- LoRa radio
- MCU with WiFi/BLE
- Antenna
- GPS module
- OLED display
- Button
- **Battery + PMU**
- **Environmental sensor** (BME280/BME680)

### Advanced Setup
- LoRa radio
- MCU with WiFi/BLE
- Antenna
- GPS module
- **E-ink display**
- **Keyboard** (CardKB/BBQ10)
- Battery + PMU + fuel gauge
- Environmental sensors
- **Power monitoring** (INA219)
- **Motion sensor** (accelerometer)
- **SD card** (logging)
- **Audio** (speaker/buzzer)

### Specialized Setups

**Weather Station**:
- LoRa + MCU + antenna + GPS
- BME680 (temp/humidity/pressure/air quality)
- Light sensor (VEML7700)
- Rain gauge (DFRobot)
- Wind sensor (DFRobot Lark)
- Solar + battery + power monitoring

**Tracker**:
- LoRa + MCU + antenna
- GPS (u-blox)
- Accelerometer (motion wake)
- Battery + fuel gauge
- Minimal/no display (low power)

**Base Station**:
- LoRa + MCU + antenna
- WiFi/Ethernet
- GPS (time sync)
- Large display (TFT/E-ink)
- AC/solar power
- SD card logging
- Environmental sensors

**Portable Messenger**:
- LoRa + MCU + antenna
- GPS
- Full keyboard (T-Deck/BBQ10)
- Color TFT display
- Speaker + microphone
- Large battery
- Accelerometer

---

## Power Considerations

### Low Power Devices
- E-ink displays (only power during refresh)
- I2C sensors (sleep between readings)
- Accelerometers (wake-on-motion)
- GPS (periodic fix)

### Higher Power Devices
- OLED displays (continuous power)
- TFT displays (backlight)
- WiFi/Bluetooth (when active)
- I2S audio
- Addressable LEDs

### Power Saving Tips
1. Use e-ink instead of OLED
2. Enable accelerometer wake (GPS off during sleep)
3. Reduce telemetry update intervals
4. Use lower LoRa TX power when possible
5. Disable WiFi when not needed
6. Use deep sleep between messages

---

## Key Reference Files

### Device Drivers
- **GPS**: `firmware/src/gps/GPS.cpp`
- **Displays**: `firmware/src/graphics/Screen.cpp`, `EInkDisplay2.cpp`, `TFTDisplay.cpp`
- **Input**: `firmware/src/input/`
- **Motion**: `firmware/src/motion/`
- **Radio**: `firmware/src/mesh/`
- **Power**: `firmware/src/Power.cpp`, `PowerStatus.cpp`

### Configuration
- **Board Variants**: `firmware/variants/`
- **Module Config**: `firmware/protobufs/meshtastic/module_config.proto`
- **Device Config**: `firmware/protobufs/meshtastic/config.proto`
- **I2C Addresses**: `firmware/src/configuration.h`

### Detection
- **I2C Scanning**: `firmware/src/detect/ScanI2C.cpp`
- **Auto-detection**: `firmware/src/detect/ScanI2CTwoWire.cpp`

---

## Notes

1. **Interface Conflicts**: Ensure no pin conflicts between peripherals (e.g., SPI CS pins, I2C addresses)

2. **Power Budget**: Calculate total current draw, especially with displays, GPS, and WiFi active

3. **I2C Pull-ups**: Most devices need 4.7kΩ pull-ups on SDA/SCL (often built into boards)

4. **Voltage Levels**: Most peripherals are 3.3V - verify compatibility before connecting

5. **Firmware Support**: Some devices require specific firmware builds or board variants

6. **Auto-Detection**: Many I2C devices are auto-detected on boot - check debug logs

7. **Module Dependencies**: Some modules require specific hardware (e.g., telemetry needs sensors)

8. **GPS Power**: GPS modules can draw 20-50mA during acquisition - factor into power budget

9. **Display Refresh**: E-ink displays have limited refresh cycles - use appropriately

10. **Storage Formatting**: SD cards should be FAT32 formatted for compatibility

---

Generated from Meshtastic firmware source code analysis.
