export interface RegionDataType {
  id: string,
  name: string,
  infected: number, 
  newInfected: number,
  healed: number,
  totalCases: number,
  testPerformed: number,
  homeConfinement: number,
  hospitalized: number,
  intensiveCare: number,
  hospitalizedWithSymptoms: number,
  deaths: number,
  date: number
}