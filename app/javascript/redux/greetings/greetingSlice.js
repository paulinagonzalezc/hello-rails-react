import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreetings = createAsyncThunk('greetings/fetch', async () => {
  try {
    const response = await fetch('/api/greetings/random');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const { message } = data;
    return message;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

const initialState = { loading: false, greeting: '', error: '' };

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {
    updateGreeting(state, action) {
    return {
        ...state,
        greeting: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGreetings.pending, (state) => {
      const newState = { ...state, loading: true };
      return newState;
    });
    builder.addCase(fetchGreetings.fulfilled, (state, action) => {
      const newState = { ...state, greeting: action.payload, loading: false };
      return newState;
    });
    builder.addCase(fetchGreetings.rejected, (state, action) => {
      const newState = { ...state, greeting: '', error: action.error.message };
      return newState;
    });
  },
});

export default greetingSlice.reducer;
