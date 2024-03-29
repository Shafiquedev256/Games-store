import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ApiData = {
  title: string;
  img: string;
  description: string;
  category: string;
  cost: string;
  trailer: string;
  platform: string;
  release: string;
  publisher: string;
};

type Games = {
  all: Array<ApiData>;
  action: Array<ApiData>;
  sports: Array<ApiData>;
  adventure: Array<ApiData>;
  race: Array<ApiData>;
  err: string;
  pending: boolean;
};

const initialState: Games = {
  all: [],
  action: [],
  sports: [],
  adventure: [],
  race: [],
  err: "",
  pending: false,
};

export const fetchGames = createAsyncThunk("fetch/games", async () => {
  const req = await fetch("https://gamesapi-8lyv.onrender.com/");
  const res = await req.json();

  return res;
});

const gameSlice = createSlice({
  name: "games",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGames.pending, (state) => {
      state.pending = true;
    }),
      builder.addCase(
        fetchGames.fulfilled,
        (state, action: PayloadAction<Array<ApiData>>) => {
          state.pending = false;
          state.err = "";
          state.all = action.payload;
        }
      ),
      builder.addCase(fetchGames.rejected, (state) => {
        state.pending = false;
        state.all = [];
      });
  },
});

export default gameSlice.reducer;
