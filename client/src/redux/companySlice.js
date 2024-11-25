import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    loading: false,
    companies: [],
    singleCompany: null,
    searchCompanyByText: "",
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCompanies: (state, action) => {
      state.companies = action.payload;
    },
    setSingleCompany: (state, action) => {
      state.singleCompany = action.payload;
    },
    setSearchCompanyByText: (state, action) => {
      state.searchCompanyByText = action.payload;
    },
  },
});
export const {
  setSingleCompany,
  setCompanies,
  setSearchCompanyByText,
  setLoading,
} = companySlice.actions;
export default companySlice.reducer;
