import { Units } from '../models/units.enum';

export function temperatureValue(unit: Units, value: number): number {
  switch (unit) {
    case Units.Metric:
      return value;
    case Units.Imperial:
      return parseInt( (value*9/5 +32).toFixed(2) );
    case Units.SI:
      return parseInt( (value+273.15).toFixed(2) ) ;
  }
}
