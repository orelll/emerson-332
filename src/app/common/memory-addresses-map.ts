import { MemoryAddressData } from "./memory-address-data";
import { PagesName } from "./pages-name.enum";

export class MemoryAddressesMap {
  map: MemoryAddressData[] = [
    {
      userFriendlyName: 'SuctionPressureSensorMonitoring',
      cellName: 'ncian01',
      webPage: PagesName.anlgcf
    },
    {
      userFriendlyName: 'SuctionPressureSensorType',
      cellName: 'ncian09',
      webPage: PagesName.anlgcf
    },
    {
      userFriendlyName: 'CoilOutSensor',
      cellName: 'ncian02',
      webPage: PagesName.anlgcf
    },
    {
      userFriendlyName: 'AirSensorMonitoring',
      cellName: 'ncian03',
      webPage: PagesName.anlgcf
    },
    {
      userFriendlyName: 'DefrostSensorMonitoring',
      cellName: 'ncian04',
      webPage: PagesName.anlgcf
    },
    {
      userFriendlyName: 'CompressorFailureI0',
      cellName: 'ncian18',
      webPage: PagesName.anlgcf
    },
    {
      userFriendlyName: 'DoorOpen',
      cellName: 'ncian19',
      webPage: PagesName.anlgcf
    },
    {
      userFriendlyName: 'Alarm',
      cellName: 'ncian20',
      webPage: PagesName.anlgcf
    },
    {
      userFriendlyName: 'Compressor',
      cellName: 'ncian21',
      webPage: PagesName.anlgcf
    },
    {
      userFriendlyName: 'Heater',
      cellName: 'ncian22',
      webPage: PagesName.anlgcf
    },
    {
      userFriendlyName: 'Fan',
      cellName: 'ncian23',
      webPage: PagesName.anlgcf
    },

    {
      userFriendlyName: 'DelayFirstStartC0',
      cellName: 'ncico01',
      webPage: PagesName.compcf
    },
    {
      userFriendlyName: 'CycleTimeC1',
      cellName: 'ncico02',
      webPage: PagesName.compcf
    },
    {
      userFriendlyName: 'MinOffTimeC2',
      cellName: 'ncico03',
      webPage: PagesName.compcf
    },
    {
      userFriendlyName: 'MinRunTimeC3',
      cellName: 'ncico04',
      webPage: PagesName.compcf
    },

    {
      userFriendlyName: 'Mode',
      cellName: 'ncide01',
      webPage: PagesName.dfstcf
    },
    {
      userFriendlyName: 'PumpDownDelay',
      cellName: 'ncide07',
      webPage: PagesName.dfstcf
    },
    {
      userFriendlyName: 'IntervalDI',
      cellName: 'ncide15',
      webPage: PagesName.dfstcf
    },
    {
      userFriendlyName: 'InjectionDelay',
      cellName: 'ncide09',
      webPage: PagesName.dfstcf
    },
    {
      userFriendlyName: 'DefrostAtPowerUpEnableD4',
      cellName: 'ncide05',
      webPage: PagesName.dfstcf
    },
    {
      userFriendlyName: 'TerminationByD1',
      cellName: 'ncide02',
      webPage: PagesName.dfstcf
    },
    {
      userFriendlyName: 'DelayD5',
      cellName: 'ncide06',
      webPage: PagesName.dfstcf
    },
    {
      userFriendlyName: 'TemperatureDt',
      cellName: 'ncide13',
      webPage: PagesName.dfstcf
    },
    {
      userFriendlyName: 'PulsedDefrostEnableD3',
      cellName: 'ncide04',
      webPage: PagesName.dfstcf
    },
    {
      userFriendlyName: 'TimeDP',
      cellName: 'ncide14',
      webPage: PagesName.dfstcf
    },
    {
      userFriendlyName: 'SetpointDH',
      cellName: 'ncide12',
      webPage: PagesName.dfstcf
    },
    {
      userFriendlyName: 'DifferenceDd',
      cellName: 'ncide11',
      webPage: PagesName.dfstcf
    },
    {
      userFriendlyName: 'DrainDownDelayD7',
      cellName: 'ncide08',
      webPage: PagesName.dfstcf
    },

    {
      userFriendlyName: 'Username',
      cellName: 'ncidi10',
      webPage: PagesName.dispcd
    },
    {
      userFriendlyName: 'Password',
      cellName: 'ncidi03',
      webPage: PagesName.dispcd
    },
    {
      userFriendlyName: 'IRAndKeyboardEnablingH2',
      cellName: 'ncidi01',
      webPage: PagesName.dispcd
    },
    {
      userFriendlyName: 'InfraredAccessCodeH3',
      cellName: 'ncidi02',
      webPage: PagesName.dispcd
    },
    {
      userFriendlyName: 'DataToShow1',
      cellName: 'ncidi04',
      webPage: PagesName.dispcd
    },
    {
      userFriendlyName: 'NoAlarmsDisplay2',
      cellName: 'ncidi05',
      webPage: PagesName.dispcd
    },
    {
      userFriendlyName: 'TemperatureUnits5',
      cellName: 'ncidi06',
      webPage: PagesName.dispcd
    },
    {
      userFriendlyName: 'DecimalPointDisplay6',
      cellName: 'ncidi07',
      webPage: PagesName.dispcd
    },
    {
      userFriendlyName: 'DisplayDuringDefrost7',
      cellName: 'ncidi08',
      webPage: PagesName.dispcd
    },
    {
      userFriendlyName: 'AlignmentForTemperatureDisplayC',
      cellName: 'ncidi09',
      webPage: PagesName.dispcd
    },

    {
      userFriendlyName: 'Mode',
      cellName: 'nciev05',
      webPage: PagesName.evapcf
    },
    {
      userFriendlyName: 'SaturationTemperatureCorrectionU1',
      cellName: 'nciev02',
      webPage: PagesName.evapcf
    },
    {
      userFriendlyName: 'TypeOfRefrigerantU0',
      cellName: 'nciev01',
      webPage: PagesName.evapcf
    },
    {
      userFriendlyName: 'SuperheatSetpointInitialisationU5',
      cellName: 'nciev06',
      webPage: PagesName.evapcf
    },
    {
      userFriendlyName: 'StartOpeningUu',
      cellName: 'nciev10',
      webPage: PagesName.evapcf
    },
    {
      userFriendlyName: 'MinimumU6',
      cellName: 'nciev07',
      webPage: PagesName.evapcf
    },
    {
      userFriendlyName: 'DurationU9',
      cellName: 'nciev09',
      webPage: PagesName.evapcf
    },
    {
      userFriendlyName: 'MaximumU7',
      cellName: 'nciev08',
      webPage: PagesName.evapcf
    },
    {
      userFriendlyName: 'MOPControlEnableU2',
      cellName: 'nciev03',
      webPage: PagesName.evapcf
    },
    {
      userFriendlyName: 'ValveType',
      cellName: 'nciev11',
      webPage: PagesName.evapcf
    },
    {
      userFriendlyName: 'TemperatureU3',
      cellName: 'nciev04',
      webPage: PagesName.evapcf
    },
    {
      userFriendlyName: 'ValveScaling',
      cellName: 'nciev12',
      webPage: PagesName.evapcf
    },

    {
      userFriendlyName: 'StateDuringThermostatOffF2',
      cellName: 'ncifa02',
      webPage: PagesName.fan_cf
    },
    {
      userFriendlyName: 'StopDelayTimeByThermostatOffF4',
      cellName: 'ncifa05',
      webPage: PagesName.fan_cf
    },
    {
      userFriendlyName: 'StateDuringDefrostF3',
      cellName: 'ncifa03',
      webPage: PagesName.fan_cf
    },
    {
      userFriendlyName: 'AfterDefrostStartUpSequenceF1',
      cellName: 'ncifa01',
      webPage: PagesName.fan_cf
    },
    {
      userFriendlyName: 'StartingDelayFd',
      cellName: 'ncifa06',
      webPage: PagesName.fan_cf
    },
    {
      userFriendlyName: 'StartingTemperatureFt',
      cellName: 'ncifa07',
      webPage: PagesName.fan_cf
    },
    {
      userFriendlyName: 'StateDuringCleaningF5',
      cellName: 'ncifa04',
      webPage: PagesName.fan_cf
    },

    {
      userFriendlyName: 'Cleaning',
      cellName: 'ncise01',
      webPage: PagesName.srvice
    },
    {
      userFriendlyName: 'Setpoint2Operation',
      cellName: 'ncise02',
      webPage: PagesName.srvice
    },
    {
      userFriendlyName: 'DefrostRequest',
      cellName: 'ncise03',
      webPage: PagesName.srvice
    },
    {
      userFriendlyName: 'DefrostInhibit',
      cellName: 'ncise04',
      webPage: PagesName.srvice
    },
    {
      userFriendlyName: 'ContinuousOperation',
      cellName: 'ncise05',
      webPage: PagesName.srvice
    },
    {
      userFriendlyName: 'ClearAlarms',
      cellName: 'ncise06',
      webPage: PagesName.srvice
    },
    {
      userFriendlyName: 'EnableCompressorControl',
      cellName: 'ncise07',
      webPage: PagesName.srvice
    },
    {
      userFriendlyName: 'CompressorOn',
      cellName: 'ncise08',
      webPage: PagesName.srvice
    },
    {
      userFriendlyName: 'EnableValveControl',
      cellName: 'ncise09',
      webPage: PagesName.srvice
    },
    {
      userFriendlyName: 'ValveOpening',
      cellName: 'ncise10',
      webPage: PagesName.srvice
    },
    {
      userFriendlyName: 'EnableFanControl',
      cellName: 'ncise11',
      webPage: PagesName.srvice
    },
    {
      userFriendlyName: 'FanOn',
      cellName: 'ncise12',
      webPage: PagesName.srvice
    },

    {
      userFriendlyName: 'HostName',
      cellName: 'ncitc01',
      webPage: PagesName.tcp_ip
    },
    {
      userFriendlyName: 'MACAddress',
      cellName: 'ncitc24',
      webPage: PagesName.tcp_ip
    },
    {
      userFriendlyName: 'DHCPEnabled',
      cellName: 'ncitc02',
      webPage: PagesName.tcp_ip
    },
    {
      userFriendlyName: 'RenewByFailure',
      cellName: 'ncitc06',
      webPage: PagesName.tcp_ip
    },
    {
      userFriendlyName: 'IPAddress',
      cellName: 'ncitc03',
      webPage: PagesName.tcp_ip
    },
    {
      userFriendlyName: 'SubnetMask',
      cellName: 'ncitc04',
      webPage: PagesName.tcp_ip
    },
    {
      userFriendlyName: 'GatewayAddress',
      cellName: 'ncitc05',
      webPage: PagesName.tcp_ip
    },
    {
      userFriendlyName: 'CommunicationPort',
      cellName: 'ncitc23',
      webPage: PagesName.tcp_ip
    },
    {
      userFriendlyName: 'Language',
      cellName: 'ncitc20',
      webPage: PagesName.tcp_ip
    },
    {
      userFriendlyName: 'ServerAddress',
      cellName: 'ncitc08',
      webPage: PagesName.tcp_ip
    },
    {
      userFriendlyName: 'Subject',
      cellName: 'ncitc09',
      webPage: PagesName.tcp_ip
    },
    {
      userFriendlyName: 'Subject',
      cellName: 'ncitc09',
      webPage: PagesName.tcp_ip
    },
    {
      userFriendlyName: 'MailAddressForController_1',
      cellName: 'ncitc10',
      webPage: PagesName.tcp_ip
    },
    {
      userFriendlyName: 'MailAddressForController_1',
      cellName: 'ncitc11',
      webPage: PagesName.tcp_ip
    },
    {
      userFriendlyName: 'LowPriorityAlarm_1',
      cellName: 'ncitc12',
      webPage: PagesName.tcp_ip
    },
    {
      userFriendlyName: 'LowPriorityAlarm_2',
      cellName: 'ncitc13',
      webPage: PagesName.tcp_ip
    },
    {
      userFriendlyName: 'MediumPriorityAlarm_1',
      cellName: 'ncitc14',
      webPage: PagesName.tcp_ip
    },
    {
      userFriendlyName: 'MediumPriorityAlarm_2',
      cellName: 'ncitc15',
      webPage: PagesName.tcp_ip
    },
    {
      userFriendlyName: 'HighPriorityAlarm_1',
      cellName: 'ncitc16',
      webPage: PagesName.tcp_ip
    },
    {
      userFriendlyName: 'HighPriorityAlarm_2',
      cellName: 'ncitc17',
      webPage: PagesName.tcp_ip
    },
    {
      userFriendlyName: 'CriticalAlarm_1',
      cellName: 'ncitc18',
      webPage: PagesName.tcp_ip
    },
    {
      userFriendlyName: 'Days',
      cellName: 'ncitc26',
      webPage: PagesName.tcp_ip
    },
    {
      userFriendlyName: 'ServerAddress',
      cellName: 'ncitc21',
      webPage: PagesName.tcp_ip
    },
    {
      userFriendlyName: 'TimeShiftUTCLocal',
      cellName: 'ncitc22',
      webPage: PagesName.tcp_ip
    },

    {
      userFriendlyName: 'ModeR4',
      cellName: 'ncith16',
      webPage: PagesName.thercf
    },
    {
      userFriendlyName: 'DoorOpenContactR01',
      cellName: 'ncith09',
      webPage: PagesName.thercf
    },
    {
      userFriendlyName: 'AllowSetpoint2SwitchingR3',
      cellName: 'ncith15',
      webPage: PagesName.thercf
    },
    {
      userFriendlyName: 'Setpoint1ValueSt',
      cellName: 'ncith20',
      webPage: PagesName.thercf
    },
    {
      userFriendlyName: 'DoorOpenContactR02',
      cellName: 'ncith10',
      webPage: PagesName.thercf
    },
    {
      userFriendlyName: 'AfterDefrostOrCleaningAlarmDelayA3',
      cellName: 'ncith04',
      webPage: PagesName.thercf
    },
    {
      userFriendlyName: 'DifferenceRd_1',
      cellName: 'ncith21',
      webPage: PagesName.thercf
    },
    {
      userFriendlyName: 'DoorOpenContactR03',
      cellName: 'ncith11',
      webPage: PagesName.thercf
    },
    {
      userFriendlyName: 'DoorOpenContactActionWhenTimeOutR04',
      cellName: 'ncith12',
      webPage: PagesName.thercf
    },
    {
      userFriendlyName: 'DoorAlarmDelayAd',
      cellName: 'ncith05',
      webPage: PagesName.thercf
    },
    {
      userFriendlyName: 'Setpoint2ValueR6',
      cellName: 'ncith17',
      webPage: PagesName.thercf
    },
    {
      userFriendlyName: 'AlarmTemperatureLowLimitAL',
      cellName: 'ncith07',
      webPage: PagesName.thercf
    },
    {
      userFriendlyName: 'DifferenceR7',
      cellName: 'ncith18',
      webPage: PagesName.thercf
    },
    {
      userFriendlyName: 'LowLimitDelayA1',
      cellName: 'ncith02',
      webPage: PagesName.thercf
    },
    {
      userFriendlyName: 'HighLimitAH',
      cellName: 'ncith06',
      webPage: PagesName.thercf
    },
    {
      userFriendlyName: 'MinimumSetpointValueR1',
      cellName: 'ncith13',
      webPage: PagesName.thercf
    },
    {
      userFriendlyName: 'HighLimitDelayA2',
      cellName: 'ncith03',
      webPage: PagesName.thercf
    },
    {
      userFriendlyName: 'MaximumSetpointValueR2',
      cellName: 'ncith14',
      webPage: PagesName.thercf
    },
    {
      userFriendlyName: 'LimitTypeAt',
      cellName: 'ncith08',
      webPage: PagesName.thercf
    },
  ];
}
