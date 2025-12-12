import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface RecordDataType {
  name: string;
  age: string;
}

// Define the type for the initial state
type InitialStateType = {
  records: RecordDataType[];
};

// Define the initial state
const initialState: InitialStateType = {
  records: [],
};

const demoSlice = createSlice({
  name: 'records',
  initialState,
  reducers: {
    // Add a new record
    addRecord: (state, action: PayloadAction<RecordDataType>) => {
      state.records.push(action.payload);
      console.log('Insert Record Data', state.records);
    },
    // Update an existing record
    updateRecord: (
      state,
      action: PayloadAction<{index: number; name: string; age: string}>,
    ) => {
      const {index, name, age} = action.payload;
      state.records[index] = {name, age};
    },
    // Delete a record
    deleteRecord: (state, action: PayloadAction<number>) => {
      state.records.splice(action.payload, 1);
    },
  },
});

export const {addRecord, updateRecord, deleteRecord} = demoSlice.actions;
export default demoSlice.reducer;
