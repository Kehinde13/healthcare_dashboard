import { allUsers, getUserAtIndex } from "@/app/apiRequests/request";
import Home from "@/app/page";
import Patients from "@/app/ui/Patients";
import Profile from "@/app/ui/Profile";
import { patient } from "@/lib/definition";
import "@testing-library/jest-dom";
import {
  act,
  render,
  screen,
  waitFor,
} from "@testing-library/react";

jest.mock("@/app/apiRequests/request");

const mockAllUsers: patient[] = [
  {
    age: 26,
    date_of_birth: "12/08/1998",
    emergency_contact: "(415) 555-5678",
    gender: "female",
    insurance_type: "kenny insurance",
    lab_results: [],
    name: "bimbo",
    phone_number: "(415) 555-5678",
    profile_picture: "https://via.placeholder.com/150",
    diagnosis_history: [],
    diagnostic_list: [],
  },
];

const mockSingleUser: patient =  {
    age: 29,
    date_of_birth: "12/08/1995",
    emergency_contact: "(415) 325-5678",
    gender: "male",
    insurance_type: "kenny insurance",
    lab_results: [],
    name: "john",
    phone_number: "(415) 555-5678",
    profile_picture: "https://via.placeholder.com/150",
    diagnosis_history: [],
    diagnostic_list: [],
  }

//Dashboard test

describe("Dashboard", () => {
  it("renders the home component with navbar", () => {
    render(<Home />);

    // check if the navabr component is rendered
    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });
});

//Patient component test

describe("Patients", () => {
  act(() => {
    beforeEach(() => {
      // Mock the implementation of allUsers to return the mock data
      (allUsers as jest.Mock).mockResolvedValue(mockAllUsers);
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the Patients component with users", async () => {
    render(<Patients />);

    // Wait for the users to be fetched and the component to re-render
    await waitFor(() => {
      expect(screen.getByText("Patients")).toBeInTheDocument();
    });

    // Assert that the user data is rendered correctly
    mockAllUsers.forEach((user) => {
      expect(
        screen.getByAltText(`${user.name}'s profile picture`)
      ).toBeInTheDocument();
      expect(screen.getByText(user.name)).toBeInTheDocument();
      expect(
        screen.getByText(`${user.gender}, ${user.age}`)
      ).toBeInTheDocument();
    });
  });
});

//Profile component test

describe("Patient Profile", () => {
   act(() => {
     beforeEach(() => {
        (getUserAtIndex as jest.Mock).mockResolvedValue(mockSingleUser);
     })
   })

   afterEach(() => {
    jest.clearAllMocks()
   })

   it("renders profile component", async () => {
    render(<Profile />);

    // Wait for the users to be fetched and assign that the user data is rendered correctly
    await waitFor(() => {
      expect(screen.getByText(`${mockSingleUser.name}`)).toBeInTheDocument();
      expect(screen.getByText(`${mockSingleUser.date_of_birth}`)).toBeInTheDocument();
      expect(screen.getByText(`${mockSingleUser.gender}`)).toBeInTheDocument();
      expect(screen.getByText(`${mockSingleUser.insurance_type}`)).toBeInTheDocument();
      expect(screen.getByText(`${mockSingleUser.emergency_contact}`)).toBeInTheDocument();
      expect(screen.getByText(`${mockSingleUser.phone_number}`)).toBeInTheDocument();
    });
   })
})
