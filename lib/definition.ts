export type Diagnosis = {
      month: string,
      year: number,
      blood_pressure: {
        systolic: {
          value: number,
          levels: string
        },
        diastolic: {
          value: number,
          levels: string
        }
      },
      heart_rate: {
        value: number,
        levels: string
      },
      respiratory_rate: {
        value: number,
        levels: string
      },
      temperature: {
        value: number,
        levels: string
      }
    }
  
  type Diagnostic = {
    id: number;
    test_name: string;
    result: string;
    date: string; 
  };

export type patient = {
  age: number,
  date_of_birth: string,
  diagnosis_history: Diagnosis[],
  diagnostic_list: Diagnostic[],
  emergency_contact: string,
  gender: string,
  insurance_type: string,
  lab_results: string[]
  name: string
  phone_number: string,
  profile_picture: string
}

interface BloodPressure {
  systolic: {
      value: number;
      levels: string;
  };
  diastolic: {
      value: number;
      levels: string;
  };
}

interface VitalSign {
  value: number;
  levels: string;
}

export type HealthRecord = {
  month: string;
  year: number;
  blood_pressure: BloodPressure;
  heart_rate: VitalSign;
  respiratory_rate: VitalSign;
  temperature: VitalSign;
}

export type ChartData = {
  month: string;
  systolic: number;
  diastolic: number;
}

