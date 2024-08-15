import "@testing-library/jest-dom";
import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Diagnosis from '@/app/ui/Diagnosis';
import { getUserAtIndex } from '@/app/apiRequests/request';
import { ChartData, Diagnosis as typeDiagnosis } from '@/lib/definition';
import Cards from "@/app/ui/Diagnosis/Cards";
import LineGraph from "@/app/ui/Diagnosis/LineGraph";

// Mock the getUserAtIndex API request
jest.mock('@/app/apiRequests/request');

const mockData: ChartData[] = [
  { month: 'January', systolic: 120, diastolic: 80 },
  { month: 'February', systolic: 122, diastolic: 82 },
  { month: 'March', systolic: 118, diastolic: 79 },
  { month: 'April', systolic: 121, diastolic: 81 },
  { month: 'May', systolic: 123, diastolic: 83 },
  { month: 'June', systolic: 119, diastolic: 78 },
]

const mockDiagnosisData: typeDiagnosis[] = [
  {
    respiratory_rate: { value: 20, levels: 'Normal' },
    temperature: { value: 98.6, levels: 'High' },
    heart_rate: { value: 72, levels: 'Average' },
    month: "",
    year: 0,
    blood_pressure: {
      systolic: {
        value: 0,
        levels: ""
      },
      diastolic: {
        value: 0,
        levels: ""
      }
    }
  },
]

describe('Diagnosis', () => {

    act(() => {
       beforeEach(() => {
      // Mock the implementation of getUserAtIndex to return the mock data
      (getUserAtIndex as jest.Mock).mockResolvedValue(mockData);
    }); 
    })
    
  
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    it('renders the Diagnosis component with patient data', async () => {
      render(<Diagnosis />);
  
      // Wait for the user data to be fetched and the component to re-render
      await waitFor(() => {
        expect(screen.getByText('Blood Pressure')).toBeInTheDocument();
      });
  
      // Assert that the chart and cards are rendered correctly

      expect(screen.getAllByTestId('line-graph')[0]).toBeInTheDocument();
      expect(screen.getAllByTestId('cards')[0]).toBeInTheDocument(); 
    });
});


describe("Health cards", () => {
  render(<Cards diagnosisData={mockDiagnosisData} />);

    expect(screen.getByText('Respiratory Rate')).toBeInTheDocument();
    expect(screen.getByText('20 bpm')).toBeInTheDocument();
    expect(screen.getByText('Normal')).toBeInTheDocument();

    expect(screen.getByText('Temperature')).toBeInTheDocument();
    expect(screen.getByText('98.6 ° F')).toBeInTheDocument();
    expect(screen.getByText('High')).toBeInTheDocument();

    expect(screen.getByText('Heart Rate')).toBeInTheDocument();
    expect(screen.getByText('72 bpm')).toBeInTheDocument();
    expect(screen.getByText('Average')).toBeInTheDocument();
});

describe("Line Chart", () => {
  render(<LineGraph chartData={mockData} />)

  expect(screen.getByText('Blood Pressure')).toBeInTheDocument();
  expect(screen.getByText('last 6 months')).toBeInTheDocument();
  expect(screen.getByTestId('line-graph')).toBeInTheDocument();

})